import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Navbar } from "../components/molecules/Navbar";
import { Footer } from "../components/molecules/Footer";
import { Card } from "../components/atoms/Card";
import { Carousel } from "../components/atoms/Carousel";
import { Brands } from "../components/molecules/Brands";
import { Hero } from "../components/molecules/Hero";
import { Products } from "../components/molecules/Products";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Docutec Mdp</title>
        <meta name="description" content="Docutec mdp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#000d51] to-[#15162c]">
          {/*<Card*/}
          {/*  title={"lorem2"}*/}
          {/*  description={"asadsadsadsads"}*/}
          {/*  btnLabel={"buy"}*/}
          {/*  image={"https://flowbite.com/docs/images/blog/image-1.jpg"}*/}
          {/*/>*/}

          {/*<Carousel items={[{},{},{},{},{},{},{},{}, {}]} />*/}
          <Hero />
          <Brands />
          <Products />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
