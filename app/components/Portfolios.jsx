import React, { useMemo } from "react";
import { usePortfolios } from "../lib/api";
import { Card, Button, Image } from "antd";
import { eFormationsTypes } from "../lib/constants/tags";
const { Meta } = Card;

export const Portfolios = ({ selectedTag, formationType }) => {
  const {
    isLoading,
    data: { data: { allPortfolios = [] } = {} } = {},
    error,
  } = usePortfolios();

  const filteredPortfolios = useMemo(() => {
    if (!allPortfolios?.length) return;
    const filteredByType = allPortfolios.filter(
      (x) => eFormationsTypes[x.formation] === formationType
    );

    return selectedTag
      ? filteredByType.filter((portfolio) => {
          return (
            eFormationsTypes[portfolio.formation]?.toUpperCase() ===
              formationType?.toUpperCase() &&
            portfolio.tags.some((tag) =>
              tag.name?.toUpperCase().includes(selectedTag.toUpperCase())
            )
          );
        })
      : filteredByType;
  }, [allPortfolios, selectedTag]);

  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>Oops...</p>;

  const displayStudents = () => {
    if (!filteredPortfolios?.length)
      return "Sélectionner une spécialité pour afficher les apprenant.es disponible";
    return `Apprenants disponible (${filteredPortfolios.length})`;
  };

  return (
    <div id={`event${formationType}-apprenants`}>
      <h3>{displayStudents()}</h3>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredPortfolios.map(({ firstName, lastName, id, imageUrl }) => (
          <Card
            key={id}
            hoverable
            style={{
              width: 250,
              marginBottom: "2rem",
              marginRight: "2rem",
              minHeight: "300px",
            }}
          >
            <Image width={200} src={imageUrl} />
            <div
              style={{
                position: "absolute",
                bottom: "-10px",
                padding: "inherit",
                textAlign: "center",
              }}
            >
              <Meta
                title={`${firstName} ${lastName}`}
                style={{ marginBottom: "5px" }}
              />
              <Button type="primary" href="http://google.com" target="_blank">
                Contacter {firstName}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
