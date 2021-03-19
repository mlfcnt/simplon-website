import { Header } from "./Header";
import { Footer } from "./Footer";
import { animateScroll as scroll } from "react-scroll";
import { ArrowUpOutlined } from "@ant-design/icons";

const MainLayout = ({ children }) => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div style={{ minHeight: "100%", display: "grid" }}>
      <Header id="header" />
      <main>
        {children}
        <a
          onClick={scrollToTop}
          className="scroll_to_top_button"
          
        >
          <ArrowUpOutlined />
        </a>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
