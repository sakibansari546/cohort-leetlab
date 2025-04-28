import axios from "axios";

import { env } from "../../libs/env.js";

const sleep = (sec) => {
  return new Promise((resolve) => {
    setTimeout(resolve, sec * 1000);
  });
};

export function getJudge0LangaugeId(language) {
  const languageMap = {
    PYTHON: 71,
    JAVA: 62,
    JAVASCRIPT: 63,
  };

  return languageMap[language.toUpperCase()]; // returning only id languageMap["JAVASCRIPT"] = 63
}

export async function submitBatch(submissions) {
  const { data } = await axios.post(
    `${env.JUDGE0_API_URL}/submissions/batch?base64_encoded=${false}`,
    {
      submissions,
    }
  );
  return data; // getting tokens
}

export async function pollBatchResults(tokens) {
  while (true) {
    const { data } = await axios.get(
      `${env.JUDGE0_API_URL}/submissions/batch`,
      {
        params: {
          tokens: tokens.join(","),
          base64_encoded: false,
        },
      }
    );

    const result = data.submissions;

    const isAllDone = result.every(
      (res) => res.status.id !== 2 && res.status.id !== 1
    );

    if (isAllDone) return result;
    await sleep(1);
  }
}
