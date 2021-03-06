import { Header } from "./Header";
import { Footer } from "./Footer";
import { animateScroll as scroll } from "react-scroll";
import { ArrowUpOutlined } from "@ant-design/icons";
import { Burger } from "../components/Burger";
import MediaQuery from "react-responsive";
import { SubTitle } from "./SubTitle";

const MainLayout = ({ children }) => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div style={{ minHeight: "100%", display: "grid" }}>
      <MediaQuery maxWidth={1024}>
        <Burger />
      </MediaQuery>
      <Header id="header" />
      <SubTitle />
      <main>
        {children}
        <a onClick={scrollToTop} className="scroll_to_top_button">
          <ArrowUpOutlined />
        </a>
      </main>
      <MediaQuery minWidth={1025}>
        <Footer />
      </MediaQuery>
    </div>
  );
};

export default MainLayout;
