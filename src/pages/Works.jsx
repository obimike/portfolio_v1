import { Header, Work, Footer } from "../components";

function Works() {
  return (
    <div className="h-full">
      <Header />
      <div className="max-w-[1080px] mx-auto">
        <Work />
      </div>
      <Footer />
    </div>
  );
}

export default Works;
