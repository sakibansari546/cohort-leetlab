import ApiError from "../../utils/api-error.js";
import AsyncHandler from "../../utils/async-handler.js";

import { pollBatchResults, submitBatch } from "../../utils/judge0.js";

class ExecuteCodeController {
  executeCode = AsyncHandler(async (req, res) => {
    const { source_code, language_id, stdin, expected_output } = req.body;
    const { problemId } = req.params;

    if (
      !Array.isArray(stdin) ||
      stdin.length === 0 ||
      !Array.isArray(expected_output) ||
      expected_output.length !== stdin.length
    ) {
      throw new ApiError(400, "Invalid or missing testeases");
    }

    const submissions = stdin.map((input) => {
      return {
        source_code,
        language_id,
        stdin: input,
      };
    });

    console.log(submissions);

    const submitRes = await submitBatch(submissions);
    console.log("SubmitBatch Result ", submitRes);

    const tokens = submitRes.map((res) => res.token);
    const submissionResult = await pollBatchResults(tokens);

    console.log("Result --------------", submissionResult);
    res.send("Complete");
  });
}

export default ExecuteCodeController;
