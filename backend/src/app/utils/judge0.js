import axios from "axios";

import { env } from "../../libs/env.js";
import { axiosInstance } from "./axios.js";

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
    TYPESCRIPT: 74,
    C: 50,
    "C++": 54,
  };

  return languageMap[language.toUpperCase()]; // returning only id languageMap["JAVASCRIPT"] = 63
}

export function getLanguageName(languageId) {
  const languageMap = {
    62: "JAVA",
    63: "JAVASCRIPT",
    74: "TYPESCRIPT",
    71: "PYTHON",
    50: "C",
    54: "C++",
  };

  return languageMap[languageId]; // returning only id languageMap["JAVASCRIPT"] = 63
}

export async function submitBatch(submissions) {
  const { data } = await axiosInstance.post(
    `/submissions/batch?base64_encoded=${false}`,
    {
      submissions,
    }
  );
  return data; // getting tokens
}

export async function pollBatchResults(tokens) {
  while (true) {
    const { data } = await axiosInstance.get(`/submissions/batch`, {
      params: {
        tokens: tokens.join(","),
        base64_encoded: false,
      },
    });

    const result = data.submissions;

    const isAllDone = result.every(
      (res) => res.status.id !== 2 && res.status.id !== 1
    );

    if (isAllDone) return result;
    await sleep(1);
  }
}
