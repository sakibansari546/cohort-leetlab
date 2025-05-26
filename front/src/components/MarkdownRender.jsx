import React from "react";
import ReactMarkdown from "react-markdown";

const MarkdownRender = ({ children }) => {
  return <ReactMarkdown>{children}</ReactMarkdown>;
};

export default MarkdownRender;
