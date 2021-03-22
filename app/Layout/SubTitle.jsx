import React, { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import { useConfigs } from "../lib/api";

export const SubTitle = () => {
  const { data: { data: { allConfigs = [] } = {} } = {} } = useConfigs();

  const { subTitle } =
    useMemo(() => allConfigs.find((x) => x.isActive), [allConfigs]) || {};

  return (
    <div style={{ textAlign: "center" }}>
      <ReactMarkdown linkTarget="_blank">{subTitle}</ReactMarkdown>
    </div>
  );
};
