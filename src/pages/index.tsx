import { type NextPage } from "next";
import Head from "next/head";
import { Brands } from "../components/molecules/Brands";
import { OurServices } from "../components/molecules/OurServices";
import { Products } from "../components/molecules/Products";
import { Video } from "../components/atoms/Video";
import { Contact } from "../components/molecules/Contact";
import { Hero } from "../components/molecules/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Docutec Mdp</title>
        <meta name="description" content="Docutec mdp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#000d51] to-[#15162c]">
        <Hero />
        <Brands />
        <OurServices />
        <Products />
        <Video src="/assets/hero.mp4" />
        <Contact />
      </main>
    </>
  );
};

export default Home;
