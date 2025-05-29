import { prisma } from "../../../libs/db.js";

import { handleZodError } from "../../utils/handle-zod-error.js";
import { executeCodeSchma } from "../../validation/execute/index.js";

import ApiError from "../../utils/api-error.js";
import ApiResponse from "../../utils/api-response.js";
import AsyncHandler from "../../utils/async-handler.js";

import {
  getLanguageName,
  pollBatchResults,
  submitBatch,
} from "../../utils/judge0.js";
import { geminiClient } from "../../utils/gemini.js";

class ExecuteCodeController {
  validateParseData(schema, body) {
    return schema.safeParse(body || {});
  }

  async genrateFeedback(result) {
    // Prepare prompt for GPT to generate feedback based on submission result
    const prompt = `
  You are a code feedback provider. Given the following submission result in JSON, provide constructive feedback to the user. 
  If all test cases passed, congratulate the user and suggest possible improvements or optimizations. 
  If some test cases failed, point out possible reasons for failure and suggest how to fix them. give feedback in text not json 

  Submission Result JSON:
  ${JSON.stringify(result, null, 2)}
  `;

    const response = await geminiClient.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });
    return response.text.trim() || "No feedback.";
  }

  submitCode = AsyncHandler(async (req, res) => {
    const { source_code, language_id, stdins, expected_outputs } =
      handleZodError(this.validateParseData(executeCodeSchma, req.body));

    const { problemId } = req.params;
    const userId = req.userId;

    if (
      !Array.isArray(stdins) ||
      stdins.length === 0 ||
      !Array.isArray(expected_outputs) ||
      expected_outputs.length !== stdins.length
    ) {
      throw new ApiError(400, "Invalid or missing testeases");
    }

    const problem = await prisma.problem.findUnique({
      where: {
        id: problemId,
      },
    });

    if (!problem) {
      throw new ApiError(404, "Problem not found");
    }

    const submissions = stdins.map((input) => {
      return {
        source_code,
        language_id,
        stdin: input,
      };
    });

    // console.log(submissions);

    const submitRes = await submitBatch(submissions);
    // console.log("SubmitBatch Result ", submitRes);

    const tokens = submitRes.map((res) => res.token);
    const submissionResult = await pollBatchResults(tokens);

    console.log("Result --------------", submissionResult);

    let allPassed = true;
    const detailedResult = submissionResult.map((result, i) => {
      const stdout = result.stdout?.trim() || null;
      const expected_output = expected_outputs[i].trim();
      const passed = stdout === expected_output;

      if (!passed) allPassed = false;
      console.log(result);

      // console.log(`Testcase #${i + 1}`);
      // console.log(`Input for testcase #${i + 1}: ${stdins[i]}`);
      // console.log(`Expected Output for testcase #${i + 1}: ${expected_output}`);
      // console.log(`Actual output for testcase #${i + 1}: ${stdout}`);

      // console.log(`Matched testcase #${i + 1}: ${passed}`);

      return {
        testCase: i + 1,
        passed,
        stdout,
        expected: expected_output,
        stderr: result.stderr,
        compileOutput: result.compile_output,
        status: result.status.description,
        memory: result.memory ? `${result.memory}KB` : undefined,
        time: result.time ? `${result.time}s` : undefined,
      };
    });

    const submission = await prisma.submission.create({
      data: {
        problemId: problemId,
        userId: req.userId,
        source_code: source_code,
        language: getLanguageName(language_id),
        stdin: stdins.join("\n"),
        stdout: JSON.stringify(detailedResult.map((res) => res.stdout)),
        stderr: detailedResult.some((res) => res.stderr)
          ? JSON.stringify(detailedResult.map((res) => res.stderr))
          : null,
        compileOutput: detailedResult.some((res) => res.compileOutput)
          ? JSON.stringify(detailedResult.map((res) => res.compileOutput))
          : null,
        status: allPassed ? "Accepted" : "Wrong Answer",
        memory: detailedResult.some((res) => res.memory)
          ? JSON.stringify(detailedResult.map((res) => res.memory))
          : null,
        time: detailedResult.some((res) => res.time)
          ? JSON.stringify(detailedResult.map((res) => res.time))
          : null,
      },
    });

    // console.log("New submission ----------", submission);

    const testCasesResult = detailedResult.map((result) => {
      return {
        submissionId: submission.id,
        testCase: result.testCase,
        passed: result.passed,
        stdout: result.stdout,
        stderr: result.stderr || null,
        expected: result.expected,
        compileOutput: result.compileOutput || null,
        status: result.status,
        memory: result.memory || null,
        time: result.time || null,
      };
    });

    const testCases = await prisma.testcase.createMany({
      data: testCasesResult,
    });

    // console.log("New testCases ---------------", testCases);

    if (allPassed) {
      const solvedProblem = await prisma.solvedProblem.upsert({
        where: {
          userId_problemId: {
            userId: req.userId,
            problemId: problemId,
          },
        },
        update: {},
        create: {
          userId: req.userId,
          problemId: problemId,
        },
      });
    }

    const submissionWithTestCases = await prisma.submission.findUnique({
      where: {
        id: submission.id,
      },
      include: {
        testCases: true,
        problem: true,
      },
    });

    const feedback = await this.genrateFeedback(submissionWithTestCases);

    const updateSubmssion = await prisma.submission.update({
      where: {
        id: submission.id,
      },
      data: {
        feedback: feedback,
      },
      include: {
        testCases: true,
        problem: true,
      },
    });

    res.status(200).json(
      new ApiResponse(200, "Code Executed!!", {
        submission: updateSubmssion,
      })
    );
  });

  runCode = AsyncHandler(async (req, res) => {
    const { source_code, language_id, stdins, expected_outputs } =
      handleZodError(this.validateParseData(executeCodeSchma, req.body));
    const { problemId } = req.params;
    const userId = req.userId;

    if (
      !Array.isArray(stdins) ||
      stdins.length === 0 ||
      !Array.isArray(expected_outputs) ||
      expected_outputs.length !== stdins.length
    ) {
      throw new ApiError(400, "Invalid or missing testeases");
    }

    const problem = await prisma.problem.findUnique({
      where: {
        id: problemId,
      },
    });

    if (!problem) {
      throw new ApiError(404, "Problem not found");
    }

    const submissions = stdins.map((input) => {
      return {
        source_code,
        language_id,
        stdin: input,
      };
    });

    const submitRes = await submitBatch(submissions);
    // console.log("SubmitBatch Result ", submitRes);

    const tokens = submitRes.map((res) => res.token);
    const submissionResult = await pollBatchResults(tokens);

    // console.log("Result --------------", submissionResult);

    let allPassed = true;
    const detailedResult = submissionResult.map((result, i) => {
      const stdout = result.stdout?.trim() || null;
      const expected_output = expected_outputs[i].trim();
      const passed = stdout === expected_output;

      if (!passed) allPassed = false;
      console.log(result);

      // console.log(`Testcase #${i + 1}`);
      // console.log(`Input for testcase #${i + 1}: ${stdins[i]}`);
      // console.log(`Expected Output for testcase #${i + 1}: ${expected_output}`);
      // console.log(`Actual output for testcase #${i + 1}: ${stdout}`);

      // console.log(`Matched testcase #${i + 1}: ${passed}`);

      return {
        testCase: i + 1,
        passed,
        stdout,
        expected: expected_output,
        stderr: result.stderr,
        compileOutput: result.compile_output,
        status: result.status.description,
        memory: result.memory ? `${result.memory}KB` : undefined,
        time: result.time ? `${result.time}s` : undefined,
      };
    });

    const testCasesResult = detailedResult.map((result) => {
      return {
        testCase: result.testCase,
        passed: result.passed,
        stdout: result.stdout,
        stderr: result.stderr || null,
        expected: result.expected,
        compileOutput: result.compileOutput || null,
        status: result.status,
        memory: result.memory || null,
        time: result.time || null,
      };
    });

    const data = {
      source_code: source_code,
      language: getLanguageName(language_id),
      stdin: stdins.join("\n"),
      stdout: JSON.stringify(detailedResult.map((res) => res.stdout)),
      stderr: detailedResult.some((res) => res.stderr)
        ? JSON.stringify(detailedResult.map((res) => res.stderr))
        : null,
      compileOutput: detailedResult.some((res) => res.compileOutput)
        ? JSON.stringify(detailedResult.map((res) => res.compileOutput))
        : null,
      status: allPassed ? "Accepted" : "Wrong Answer",
      memory: detailedResult.some((res) => res.memory)
        ? JSON.stringify(detailedResult.map((res) => res.memory))
        : null,
      time: detailedResult.some((res) => res.time)
        ? JSON.stringify(detailedResult.map((res) => res.time))
        : null,
      testCases: testCasesResult,
      problem: { testcases: problem.testcases },
    };

    res.status(200).json(
      new ApiResponse(200, "Code Executed!!", {
        submission: data,
      })
    );
  });
}

export default ExecuteCodeController;
