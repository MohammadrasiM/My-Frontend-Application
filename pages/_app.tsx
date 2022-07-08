import "../styles/globals.css";
import type { AppProps } from "next/app";
import SEO from "./SEO";
import Navbar from "../components/Navbar/Navbar";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SEO
        title={pageProps?.seo?.title}
        description={pageProps?.seo?.description}
      />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
