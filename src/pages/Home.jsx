import {
  Header,
  Hero,
  About,
  Skills,
  Portfolio as Work,
  Contact,
  Footer,
} from "../components";

function Home() {
  return (
    <>
      <Header />
      <div className="max-w-[1024px] mx-auto">
        <Hero />
        <About />
        <Skills />
        <Work />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default Home;
