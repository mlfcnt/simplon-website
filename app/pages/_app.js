/** @jsx jsx */
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { jsx } from "@emotion/react";
import Head from "next/head";
import SectionProvider from "../context/SectionContext";

const MyApp = ({ Component, pageProps }) => {
  const queryClient = new QueryClient();

  return (
    <SectionProvider>
      <QueryClientProvider client={queryClient}>
        <Head>
          <link rel="shortcut icon" href="/favicon.png" />
          <title>Simplon Chambéry - École inclusive du numérique</title>
        </Head>
        <Component {...pageProps} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </SectionProvider>
  );
};

export default MyApp;
