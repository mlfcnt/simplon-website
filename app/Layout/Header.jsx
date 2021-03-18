import React, { useContext } from "react";
import { eSections } from "../lib/constants/sections";
import { SectionContext } from "../context/SectionContext";

export const Header = () => {
  const [, setSelectedSession] = useContext(SectionContext);

  return (
    <header>
      <div className="header-block" onClick={() => setSelectedSession(null)}>
        <h1 className="main-title">Simplon Chambéry</h1>
        <h2 className="main-subtitle">École inclusive du numérique</h2>
      </div>
      <div className="menu-flex">
        <div
          className="menu-bloc align-vertically"
          onClick={() => setSelectedSession(eSections.sessions)}
        >
          <div>
            <h4>Vous voulez vous former ?</h4>
            <h5>Nos Sessions</h5>
          </div>
        </div>
        <div
          className="menu-bloc align-vertically"
          onClick={() => setSelectedSession(eSections.talents)}
        >
          <h4>Recrutez nos talents</h4>
        </div>
        <div
          className="menu-bloc"
          onClick={() => setSelectedSession(eSections.contact)}
        >
          <h4>Nous contacter</h4>
        </div>
      </div>
    </header>
  );
};
