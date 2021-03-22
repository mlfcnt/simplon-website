import React, { useEffect, useState } from "react";
import { Anchor } from "antd";
const { Link } = Anchor;

export const Summary = () => {
  const [targetOffset, setTargetOffset] = useState(undefined);

  useEffect(() => {
    setTargetOffset(window.innerHeight / 7);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="anchor-bloc">
      <h1 id="next-stages">Prochains stages</h1>
      <Anchor
        className="anchor"
        targetOffset={targetOffset}
        affix={false}
        onClick={handleClick}
      >
        <Link
          href="#event1"
          title="1- Stage de 2 semaines - Avril à Mai 2021"
          className="anchor-title"
        >
          <Link href="#event1-description" title="Description" />
          <Link href="#event1-tags-list" title="Qualifications" />
          <Link href="#eventcourte-apprenants" title="Apprenants disponibles" />
        </Link>
        <Link
          href="#event2"
          title="2- Stage Développeur.se web (2.5 mois) - 17 Mai au 27 Juillet"
          className="anchor-title"
        >
          <Link href="#event2-description" title="Description" />
          <Link href="#event2-tags-list" title="Qualifications" />
          <Link href="#eventlongue-apprenants" title="Apprenants disponibles" />
        </Link>
      </Anchor>
    </div>
  );
};
