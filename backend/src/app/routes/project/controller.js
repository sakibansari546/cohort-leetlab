import { prisma } from "../../../libs/db.js";

import ApiError from "../../utils/api-error.js";
import ApiResponse from "../../utils/api-response.js";
import AsyncHandler from "../../utils/async-handler.js";

import { validateZodSchema } from "../../utils/handle-zod-error.js";
import { createProblemSchema } from "../../validation/problem/index.js";

import {
  getJudge0LangaugeId,
  pollBatchResults,
  submitBatch,
} from "../../utils/judge0.js";
import { json } from "express";

class ProblemController {
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
    } = req.body;

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

      console.log(`submissions for ${language}  =  ${submissions}`);

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
    res.json(new ApiResponse(200, "Update problem"));
  });

  deleteProblemHandler = AsyncHandler(async (req, res) => {
    res.json(new ApiResponse(200, "Delete problem"));
  });

  getAllProblemsHandler = AsyncHandler(async (req, res) => {
    res.json(new ApiResponse(200, "Get all problems"));
  });

  getProblemByIdHandler = AsyncHandler(async (req, res) => {
    res.json(new ApiResponse(200, "Get problem by ID"));
  });

  getSolvedProblemsHandler = AsyncHandler(async (req, res) => {
    res.json(new ApiResponse(200, "Get solved problems"));
  });
}
export default ProblemController;
