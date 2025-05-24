import { prisma } from "../../../libs/db.js";

import ApiError from "../../utils/api-error.js";
import ApiResponse from "../../utils/api-response.js";
import AsyncHandler from "../../utils/async-handler.js";

import {
  createProblemSchema,
  updateProblemSchema,
} from "../../validation/problem/index.js";

import {
  getJudge0LangaugeId,
  pollBatchResults,
  submitBatch,
} from "../../utils/judge0.js";
import { handleZodError } from "../../utils/handle-zod-error.js";

class ProblemController {
  validateParseData(schema, body) {
    return schema.safeParse(body || {});
  }
  createProblemHandler = AsyncHandler(async (req, res) => {
    // Get all data
    // Check user admin or not
    // Go through each refrence solution for defferent language

    const {
      title,
      description,
      difficulty,
      tags,
      examples,
      constraints,
      hints,
      editorial,
      testcases,
      codeSnippets,
      referenceSolutions,
      company,
      isDemo,
    } = handleZodError(this.validateParseData(createProblemSchema, req.body));

    const user = await prisma.user.findUnique({
      where: {
        id: req.userId,
      },
      select: {
        role: true,
      },
    });

    if (!user || user.role !== "ADMIN") {
      throw new ApiError(400, "Access denied");
    }

    for (const [language, solutionCode] of Object.entries(referenceSolutions)) {
      const languageId = getJudge0LangaugeId(language);

      if (!languageId) {
        throw new ApiError(400, `Language ${language} is not supported`);
      }

      console.log(`Language ${language} is Id ${languageId}`);

      const submissions = testcases.map(({ input, output }) => {
        return {
          source_code: solutionCode,
          language_id: languageId,
          stdin: input,
          expected_output: output,
        };
      });

      const submissionsResult = await submitBatch(submissions);

      const tokens = submissionsResult.map((res) => res.token);

      const results = await pollBatchResults(tokens);

      for (let i = 0; i < results.length; i++) {
        const result = results[i];
        console.log("Result ---------------- ", result);

        if (result.status.id !== 3) {
          throw new ApiError(
            400,
            `Testcase ${i + 1} failed for language ${language}`
          );
        }
      }
    }

    const newProblem = await prisma.problem.create({
      data: {
        title,
        description,
        difficulty,
        tags,
        examples,
        constraints,
        hints,
        editorial,
        testcases,
        codeSnippets,
        referenceSolutions,
        userId: req.userId,
        company,
        isDemo,
      },
    });
    if (!newProblem)
      throw new ApiError(
        403,
        "New Problem creation failed: Unable to save problem to the database"
      );

    res
      .status(200)
      .json(
        new ApiResponse(200, "Problem Created successfully", { newProblem })
      );
  });

  updateProblemHandler = AsyncHandler(async (req, res) => {
    const {
      title,
      description,
      difficulty,
      tags,
      examples,
      constraints,
      hints,
      editorial,
      testcases,
      codeSnippets,
      referenceSolutions,
    } = handleZodError(this.validateParseData(updateProblemSchema, req.body));

    const { id: problemId } = req.params;

    const problem = await prisma.problem.findUnique({
      where: {
        id: problemId,
      },
    });
    if (!problem) throw new ApiError(404, "Problem Not found");

    console.log("Testcases or ref Solution changed");

    for (const [language, solutionCode] of Object.entries(
      referenceSolutions || {}
    )) {
      const languageId = getJudge0LangaugeId(language);

      if (!languageId) {
        throw new ApiError(400, `Language ${language} is not supported`);
      }

      console.log(`Language ${language} is Id ${languageId}`);

      const submissions = testcases.map(({ input, output }) => {
        return {
          source_code: solutionCode,
          language_id: languageId,
          stdin: input,
          expected_output: output,
        };
      });

      const submissionsResult = await submitBatch(submissions);

      const tokens = submissionsResult.map((res) => res.token);
      const results = await pollBatchResults(tokens);

      for (let i = 0; i < results.length; i++) {
        const result = results[i];
        if (result.status.id !== 3) {
          throw new ApiError(
            400,
            `Testcase ${i + 1} failed for language ${language}`
          );
        }
      }
    }

    const updatedProblem = await prisma.problem.update({
      where: {
        id: problemId,
      },
      data: {
        title,
        description,
        difficulty,
        tags,
        examples,
        constraints,
        hints,
        editorial,
        testcases,
        codeSnippets,
        referenceSolutions,
      },
    });

    if (!updatedProblem)
      throw new ApiError(
        400,
        "Problem update failed: Unable to save updated problem to the database"
      );

    return res.status(200).json(
      new ApiResponse(200, "Problem updated successfully", {
        updatedProblem,
      })
    );
  });

  deleteProblemHandler = AsyncHandler(async (req, res) => {
    const { id: problemId } = req.params;
    if (!problemId) throw new ApiError(400, "ProblemId is required");

    const problem = await prisma.problem.findUnique({
      where: {
        id: problemId,
      },
    });
    if (!problem) throw new ApiError(404, "No problem found!");

    await prisma.problem.delete({
      where: {
        id: problemId,
      },
    });

    res.json(new ApiResponse(200, "Problem deleted successfully"));
  });

  getAllProblemsHandler = AsyncHandler(async (req, res) => {
    const problems = await prisma.problem.findMany({
      include: {
        submissions: {
          select: {
            id: true,
            problemId: true,
            status: true,
          },
        },
        solvedBy: true,
      },
    });

    res.json(
      new ApiResponse(200, "Problem fetched successfully", { problems })
    );
  });

  getProblemByIdHandler = AsyncHandler(async (req, res) => {
    const { id: problemId } = req.params;
    if (!problemId) throw new ApiError(400, "ProblemId is required");

    const problem = await prisma.problem.findUnique({
      where: {
        id: problemId,
      },
    });

    if (!problem) throw new ApiError(404, "No problem found");

    res.json(
      new ApiResponse(200, "Problem fetched successfullly", { problem })
    );
  });

  getSolvedProblemsHandler = AsyncHandler(async (req, res) => {
    const solvedProblems = await prisma.problem.findMany({
      where: {
        solvedBy: {
          some: {
            userId: req.userId,
          },
        },
      },
      include: {
        solvedBy: {
          where: {
            userId: req.userId,
          },
        },
      },
    });

    res.status(200).json(
      new ApiResponse(200, "Solved Problem fetched successfully", {
        solvedProblems,
      })
    );
  });
  getSolvedProblemsCountHandler = AsyncHandler(async (req, res) => {
    const solvedProblems = await prisma.problem.count({
      where: {
        solvedBy: {
          some: {
            userId: req.userId,
          },
        },
      },
    });

    res.status(200).json(
      new ApiResponse(200, "Solved Problem count fetched successfully", {
        count: solvedProblems,
      })
    );
  });
  getProblemsCountHandler = AsyncHandler(async (req, res) => {
    const problems = await prisma.problem.count({});

    res.status(200).json(
      new ApiResponse(200, "Solved Problem count fetched successfully", {
        count: problems,
      })
    );
  });
}
export default ProblemController;
