import Head from "next/head";
import Nav from "../components/Nav";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Alexander J</title>
      </Head>
      <Nav />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
