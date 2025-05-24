export function getJudge0LangaugeId(language) {
  const languageMap = {
    PYTHON: 71,
    JAVA: 62,
    JAVASCRIPT: 63,
    C: 50,
    "C++": 54,
  };

  return languageMap[language.toUpperCase()]; // returning only id languageMap["JAVASCRIPT"] = 63
}

export function getLanguageName(languageId) {
  const languageMap = {
    62: "JAVA",
    63: "JAVASCRIPT",
    71: "PYTHON",
    C: 50,
    "C++": 54,
  };

  return languageMap[languageId]; // returning only id languageMap["JAVASCRIPT"] = 63
}
