import { useTalents } from "../lib/api";
import { useMarkdown } from "../lib/hooks/useMarkdown";

export const Talents = () => {
  const {
    isLoading,
    data: { data: { allTalents = [] } = {} } = {},
    error,
  } = useTalents();

  const result = useMarkdown(allTalents, {
    showDivider: false,
    style: {
      width: "45%",
      marginTop: "3rem",
      backgroundColor: "#ce0033",
      color: "#FFF",
    },
  });

  if (isLoading) return <p>Chargement...</p>;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {result}
    </div>
  );
};
