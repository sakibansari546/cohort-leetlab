import { prisma } from "../../../libs/db.js";
import ApiError from "../../utils/api-error.js";
import ApiResponse from "../../utils/api-response.js";

import AsyncHandler from "../../utils/async-handler.js";

class SubmissionController {
  getAllSubmissions = AsyncHandler(async (req, res) => {
    const userId = req.userId;
    const submissions = await prisma.submission.findMany({
      where: {
        userId: userId,
      },
      include: {
        testCases: true,
      },
    });

    if (!submissions || submissions.length == 0) {
      throw new ApiError(404, "No Submissions");
    }

    res
      .status(200)
      .json(new ApiResponse(200, "Submissions fetched!", { submissions }));
  });
  getSubmissionForProblem = AsyncHandler(async (req, res) => {
    const { problemId } = req.params;
    const userId = res.userId;

    if (!problemId) throw new ApiError(400, "ProblemId is required");

    const submissions = await prisma.submission.findMany({
      where: {
        userId: userId,
        problemId: problemId,
      },
      include: {
        testCases: true,
      },
    });

    // if (!submissions || submissions.length === 0) {
    //   throw new ApiError(404, "No Submissions");
    // }

    res
      .status(200)
      .json(new ApiResponse(200, "Submissions fetched!", { submissions }));
  });

  getAllSubmissionCountForProblem = AsyncHandler(async (req, res) => {
    const { problemId } = req.params;
    if (!problemId) throw new ApiError(400, "ProblemId is required");

    const submissionsCount = await prisma.submission.count({
      where: {
        problemId: problemId,
      },
    });

    res.status(200).json(
      new ApiResponse(200, "Submissions count fetched", {
        submissions: { count: submissionsCount },
      })
    );
  });
  getAllSubmissionCount = AsyncHandler(async (req, res) => {
    const submissionsCount = await prisma.submission.count({
      where: {
        userId: req.userId,
      },
    });

    res.status(200).json(
      new ApiResponse(200, "Submissions count fetched", {
        count: submissionsCount,
      })
    );
  });
}

export default SubmissionController;
