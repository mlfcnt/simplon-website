import { Header } from "./Header";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ marginTop: "100px", textAlign: "center" }}>
        {children}
      </main>
    </>
  );
};

export default MainLayout;
