import React from "react";
import {
  Header,
  Hero,
  About,
  Skills,
  Portfolio,
  Contact,
  Footer,
} from "../components";

function Home() {
  return (
    <>
      <Header />
      <div className="max-w-[1080px] mx-auto">
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default Home;
