import React from "react";
import ReactMarkdown from "react-markdown";

export const useMarkdown = (items, options = {}) => {
  if (!items.length) return <p>Pas de résultats...</p>;
  const sorted = items.sort((a, b) => a.order - b.order);
  let idx = 0;
  return sorted.map(({ id, content }) => {
    const markdowns = (
      <div key={id} style={options.style}>
        <ReactMarkdown linkTarget="_blank" className="markdown-bloc">
          {content}
        </ReactMarkdown>
        {options.showDivider && idx !== sorted.length - 1 && (
          <hr style={{ width: "20%", margin: "3rem auto" }} />
        )}
      </div>
    );
    idx = idx + 1;
    return markdowns;
  });
};
