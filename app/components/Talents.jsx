import { useTalents } from "../lib/api";
import ReactMarkdown from "react-markdown";

export const Talents = () => {
  const {
    isLoading,
    data: { data: { allTalents = [] } = {} } = {},
    error,
  } = useTalents();

  if (isLoading) return <p>Chargement...</p>;
  return allTalents.map(({ id, content }) => {
    return <ReactMarkdown key={id}>{content}</ReactMarkdown>;
  });
};
