import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Head from "next/head";
import SectionProvider from "../context/SectionContext";
import "../styles.css";

const MyApp = ({ Component, pageProps }) => {
  const queryClient = new QueryClient();

  return (
    <SectionProvider>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Simplon Chambéry - École inclusive du numérique</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools position="top-right" containerElement="div"/>
      </QueryClientProvider>
    </SectionProvider>
  );
};

export default MyApp;
