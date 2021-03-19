import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Head from "next/head";
import "../styles.css";

const MyApp = ({ Component, pageProps }) => {
  const queryClient = new QueryClient();

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Simplon Chambéry - École inclusive du numérique</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
};

export default MyApp;
