import React from "react";

export const Header = () => {
  return (
    <header>
      <div className="header-block">
        <div
          className="header-text"
          style={{
            backgroundColor: "#f1f5f8",
            opacity: "0.60",
            color: "black",
            margin: "auto",
            padding: "2rem auto",
          }}
        >
          <h1 className="main-title">Simplon Chambéry</h1>
          <h2 className="main-subtitle">École inclusive du numérique</h2>
        </div>
      </div>
    </header>
  );
};
