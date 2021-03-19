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
            style={{ width: 300, marginBottom: "2rem" }}
            // cover={<img alt="example" src={imageUrl} />}
          >
            <Image width={200} src={imageUrl} />
            <Meta
              title={`${firstName} ${lastName}`}
              description="www.instagram.com"
            />
            <Button type="primary">Adoptez moi</Button>
          </Card>
        ))}
      </div>
    </div>
  );
};
