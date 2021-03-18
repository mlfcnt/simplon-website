import React, { useContext } from "react";
import MainLayout from "../Layout/MainLayout";
import { SectionContext } from "../context/SectionContext";
import { eSections } from "../lib/constants/sections";

const Home = () => {
  const [selectedSection] = useContext(SectionContext);

  const reducer = (section) => {
    console.log(section);
    switch (section) {
      case eSections.sessions:
        return <Sessions />;
      case eSections.talents:
        return <Talents />;
      case eSections.contact:
        return <Contact />;
    }
  };
  return <MainLayout>{reducer(selectedSection)}</MainLayout>;
};

export default Home;

export const Sessions = () => {
  return <div>sessions</div>;
};

export const Talents = () => {
  return <div>talents</div>;
};

export const Contact = () => {
  return <div>contact</div>;
};
