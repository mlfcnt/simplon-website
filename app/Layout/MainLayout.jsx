import { Header } from "./Header";
import {Footer} from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ marginTop: "100px", textAlign: "center" }}>
        {children}
      </main>
      <Footer/>
    </>
  );
};

export default MainLayout;
