import { type AppType } from "next/dist/shared/lib/utils";

import "../styles/globals.css";
import { Navbar } from "../components/molecules/Navbar";
import { Footer } from "../components/molecules/Footer";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
