const Work = () => {
  return (
    <div className=" pt-24 tablet:px-16 smallPhone:mx-4">
      <p className="text-xl tablet:text-4xl font-bold">Portfolio</p>
      <div className="flex space-x-2 my-6 ">
        <div className="filterBtn"> All</div>
        <div className="filterBtn"> React</div>
        <div className="filterBtn"> React Native</div>
        <div className="filterBtn">Android</div>
        <div className="filterBtn">Python</div>
      </div>
      <div className="flex flex-wrap laptop:justify-between gap-y-5">
        <div className="portfolioCard">1</div>
        <div className="portfolioCard">2</div>
        <div className="portfolioCard">3</div>
        <div className="portfolioCard">4</div>
        <div className="portfolioCard">5</div>
        <div className="portfolioCard">6</div>
      </div>
    </div>
  );
};

export default Work;
