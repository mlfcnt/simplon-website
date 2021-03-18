import React, { useContext } from "react";
import { SectionContext } from "../context/SectionContext";
import { eSections } from "../lib/constants/sections";

const MainLayout = ({ children }) => {
  const [, setSelectedSession] = useContext(SectionContext);

  return (
    <div>
      <header>
        <h1 style={{ textAlign: "center" }}>Simplon Website</h1>
        <h2 style={{ textAlign: "center" }}>École inclusive du numérique</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div
            style={{
              border: "1px solid black",
              padding: "40px",
              cursor: "pointer",
            }}
            onClick={() => setSelectedSession(eSections.sessions)}
          >
            <h4>Vous voulez vous former ?</h4>
            <h5>Nos Sessions</h5>
          </div>
          <div
            style={{
              border: "1px solid black",
              padding: "40px",
              verticalAlign: "middle",
              cursor: "pointer",
            }}
            onClick={() => setSelectedSession(eSections.talents)}
          >
            <h4>Recrutez nos talents</h4>
          </div>
          <div
            style={{
              border: "1px solid black",
              padding: "40px",
              cursor: "pointer",
            }}
            onClick={() => setSelectedSession(eSections.contact)}
          >
            <h4>Nous contacter</h4>
          </div>
        </div>
      </header>
      <main style={{ marginTop: "100px", textAlign: "center" }}>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
