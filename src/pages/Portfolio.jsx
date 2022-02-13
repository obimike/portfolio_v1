import { Header, Work, Footer } from "../components";

function Portfolio() {
  return (
    <>
      <Header />
      <div className="max-w-[1080px] mx-auto">
        <Work />
      </div>
      <Footer />
    </>
  );
}

export default Portfolio;
