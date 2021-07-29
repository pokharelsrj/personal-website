import React from "react";
import ReactMarkdown from "markdown-to-jsx";

export const Markdown: React.FC = (props: any) => {
  return (
    <>
      <ReactMarkdown {...props} />
    </>
  );
};

Markdown.displayName = "Markdown";
