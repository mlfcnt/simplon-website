import { Header } from "./Header";
import { Footer } from "./Footer";
import { animateScroll as scroll } from "react-scroll";
import { ArrowUpOutlined } from "@ant-design/icons";
import { Burger } from "../components/Burger";

const MainLayout = ({ children }) => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div style={{ minHeight: "100%", display: "grid" }}>
      {typeof window !== "undefined" && window.innerWidth < 768 && <Burger />}
      <Header id="header" />
      <main>
        {children}
        <a onClick={scrollToTop} className="scroll_to_top_button">
          <ArrowUpOutlined />
        </a>
      </main>
      {typeof window !== "undefined" && window.innerWidth > 768 && <Footer />}
    </div>
  );
};

export default MainLayout;
