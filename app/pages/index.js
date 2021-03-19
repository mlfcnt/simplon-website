import React, { useContext } from "react";
import MainLayout from "../Layout/MainLayout";
import { SectionContext } from "../context/SectionContext";
import { eSections } from "../lib/constants/sections";
import { Sessions } from "../components/Sessions";
import { Talents } from "../components/Talents";
import { Contact } from "../components/Contact";
import { Presentation } from "../components/Presentation";


const Home = () => {
  const [selectedSection] = useContext(SectionContext);

  const reducer = (section) => {
    switch (section) {
      case eSections.sessions:
        return <Sessions />;
      case eSections.talents:
        return <Talents />;
      case eSections.contact:
        return <Contact />;
      default:
        return <Presentation />;
    }
  };
  return <MainLayout>{reducer(selectedSection)}</MainLayout>;
};

export default Home;
