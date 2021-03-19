import { useSessions } from "../lib/api";
import ReactMarkdown from "react-markdown";

export const Sessions = () => {
  const {
    isLoading,
    data: { data: { allSessions = [] } = {} } = {},
    error,
  } = useSessions();

  if (isLoading) return <p>Chargement...</p>;

  const displaySessions = () => {
    if (!allSessions.length) return <h2>Pas de résultats...</h2>;
    return allSessions.map(({ id, content }) => {
      return <ReactMarkdown key={id}>{content}</ReactMarkdown>;
    });
  };

  return displaySessions();
};
