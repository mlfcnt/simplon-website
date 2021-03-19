import React, { useMemo } from "react";
import { usePortfolios } from "../lib/api";
import { Card, Button, Image } from "antd";
const { Meta } = Card;

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
    <div id="event1-apprenants">
      <h3>{`Apprenants disponible (${filteredPortfolios.length})`}</h3>
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
