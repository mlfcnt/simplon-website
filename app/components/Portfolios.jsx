import React, { useMemo } from "react";
import { usePortfolios } from "../lib/api";

export const Portfolios = ({ selectedTag }) => {
  const {
    isLoading,
    data: { data: { allPortfolios = [] } = {} } = {},
    error,
  } = usePortfolios();

  const filteredPortfolios = useMemo(
    () =>
      allPortfolios.filter((portfolio) =>
        selectedTag
          ? portfolio.tags.some((tag) =>
              tag.name?.toUpperCase().includes(selectedTag.toUpperCase())
            )
          : portfolio
      ),
    [allPortfolios, selectedTag]
  );

  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>Oops...</p>;

  return (
    <div>
      <h3>{`Apprenants disponible (${filteredPortfolios.length})`}</h3>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredPortfolios.map(
          ({ firstName, lastName, email, id, imageUrl, tags }) => (
            <div
              key={id}
              style={{
                border: "2px solid #ce0033",
                padding: "4rem",
                width: "150px",
                height: "150px",
              }}
            >
              <img src={imageUrl} alt="" style={{ width: "inherit" }} />
              <p>{`${firstName} ${lastName}`}</p>
              <p>{tags.map((x) => x.name).join(",")}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};
