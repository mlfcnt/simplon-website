import React, { useState } from "react";
import { eTags } from "../lib/constants/tags";
import { Portfolios } from "./Portfolios";

export const Event = () => {
  const [selectedTag, setSelectedTag] = useState(null);
  return (
    <div id="event1">
      <h2>Stages de 2 semaines</h2>
      <h3>Avril - Mai 2021</h3>
      <p id="event1-description">
        Le programme de formation (346h sur 2 mois et demi) s’articule autour de
        la découverte d’une culture numérique, l’appropriation des outils
        bureautiques et l’acquisition des compétences numériques fondamentales.
        Les apprenants sont progressivement amenés à explorer le développement
        web, l’identité de marque et les multimédias. Objectif visé à la fin de
        la formation : être à même de créer un projet, son identité et le
        promouvoir via un site vitrine en gérant de manière autonome les
        contraintes techniques afférentes. Dans le cadre de ce programme de
        formation, les apprenants réalisent une période d’activité en entreprise
        de deux semaines orienté sur la découverte des métiers du numérique :
        Découverte des métiers du numérique. Profils généralistes opérationnels
        sur des missions :
      </p>
      <h4 id="event1-tags-list">BUREAUTIQUE</h4>{" "}
      <button onClick={() => setSelectedTag(eTags.BUREAUTIQUE)}>
        Voir les profiles liés
      </button>
      <ol>
        <li>
          Saisir et nettoyer des données dans un tableur (Excel / Google Suits)
        </li>
        <li>
          Renommer, classer et archiver des fichiers (photos, doc,..) dans un
          environnement Cloud ou en local
        </li>
        <li>Réaliser des publi-postages et des campagnes d’e-mailing</li>
        <li>Saisir et contrôler de données dans des logiciels</li>
      </ol>
      <h4>INFOGRAPHIE</h4>{" "}
      <button onClick={() => setSelectedTag(eTags.INFOGRAPHIE)}>
        Voir les profiles liés
      </button>
      <ol>
        <li>Créer et modifier des infographies ou des éléments multimédias</li>
        <li>Créer des visuels d’affiches ou de flyers</li>
        <li>Créer des modèles word ou PowerPoint pour des supports unifiés</li>
      </ol>
      <h4>WEB-MARKETING</h4>{" "}
      <button onClick={() => setSelectedTag(eTags["WEB-MARKETING"])}>
        Voir les profiles liés
      </button>
      <ol>
        <li>
          Créer un formulaire, le diffuser auprès d’une communauté, traiter les
          réponses et synthétiser un rapport
        </li>
        <li>Modifier et diffuser une infolettre à partir d’un CRM</li>
        <li>Gestion, publication et animation des réseaux sociaux</li>
        <li>
          Mettre à jour un blog ou un site web statique (CMS type wordpress)
        </li>
      </ol>
      <h4>INITIATION DEV WEB</h4>{" "}
      <button onClick={() => setSelectedTag(eTags["INITIATION DEV WEB"])}>
        Voir les profiles liés
      </button>
      <ol>
        <li>Assister et observer un développeur ou une équipe de Dev</li>
        <li>
          Développer une landing page en Html / CSS avec le framework Bootstrap
        </li>
      </ol>
      <ol>
        <li>
          Assister le gestionnaire de projet dans ses tâches quotidiennes (Prise
          de notes, utilisation des outils Trello, Slack, Discord, rédaction de
          contenu, organisation de plannings, etc.)
        </li>
      </ol>
      <Portfolios selectedTag={selectedTag} />
    </div>
  );
};
