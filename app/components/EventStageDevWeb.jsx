import React from "react";
import { eTags } from "../lib/constants/tags";
import { Portfolios } from "./Portfolios";
import { Link } from "react-scroll";
import { Button as AntButton } from "antd";

export const EventStageDevWeb = ({
  selectedTag,
  setSelectedTag,
  formationType,
}) => {
  const Button = ({ tag }) => {
    return (
      <Link to="event2-apprenants" smooth>
        <AntButton onClick={() => setSelectedTag(tag)}>
          Voir les profiles liés
        </AntButton>
      </Link>
    );
  };
  return (
    <div id="event2">
      <h2>Stage Développeur.se web (2.5 mois)</h2>
      <h3>17 Mai au 27 Juillet</h3>
      <p id="event2-description" style={{ fontSize: "1.1rem" }}>
        De l’analyse du besoin à la mise en ligne, en passant par l’interface et
        la base de données, les développeur.ses web Simplon vous aideront à
        réaliser l’ensemble des fonctionnalités d’un site ou d’une application
        web en intégrant les recommandations de sécurité.
      </p>
      <h4 id="event2-tags-list">
        Développer le front-end d’une application web
      </h4>{" "}
      <Button tag={eTags["FRONT-END"]} />
      <ol>
        <li>Maquetter une application</li>
        <li>Réaliser une interface utilisateur web</li>
        <li>Développer une interface utilisateur web dynamique</li>
        <li>
          Réaliser une interface utilisateur avec une solution de gestion de
          contenu ou e-commerce
        </li>
      </ol>
      <h4>Développer le back-end d’une application web</h4>{" "}
      <Button tag={eTags["BACK-END"]} />
      <ol>
        <li>Créer une base de données</li>
        <li>Développer les composants d’accès aux données</li>
        <li>
          Élaborer et mettre en œuvre des composants dans une application de
          gestion de contenu ou e-commerce
        </li>
      </ol>
      <Portfolios selectedTag={selectedTag} formationType={formationType} />
    </div>
  );
};
