import { Link } from "react-router-dom";

import Internship from "../../assets/img/internship.png";
import Taak from "../../assets/img/taak.png";
import NewsCluster from "../../assets/img/newsCluster.png";
import GitHub from "../../assets/img/github.svg";
import ExternalLink from "../../assets/img/external-link.svg";

const internship = {
  name: "Internship",
  img: Internship,
  desc: "Use Internship's real-time community collaboration to reinforce what you've learned and get you ready for that big moment.",
  lang: ["React", "Chakra-UI", "Firebase"],
  links: ["http://github.com", "/link"],
  number: 1,
};

const taak = {
  name: "Taak",
  img: Taak,
  desc: "This platform to manage and track all projects of different types by breaking it down to smaller tasks that are assignable to any member of your  team. ",
  lang: ["React", "Material-UI", "Firebase"],
  links: ["http://github.com", "/link"],
  number: 2,
};

const newsCluster = {
  name: "NewsCluster",
  img: NewsCluster,
  desc: "NewsCluster is an aggregated news app for almost all category of news. Users can share, bookmark or upvote a news articles. The news with the highest number of upvote becomes the News of the day. ",
  lang: ["Android", "Php", "Firebase"],
  links: ["http://github.com", "/link"],
  number: 1,
};

function Portfolio() {
  return (
    <div
      id="works"
      className="h-screen smallPhone:h-auto items-center smallPhone:mx-4  tablet:px-16 py-24"
    >
      <div className="text-center  mb-16">
        <p className="section_name bg-portfolio tablet:bg-portfolio_big">
          My Works
        </p>
      </div>
      <PortfolioCard details={internship} />
      <PortfolioCard details={taak} />
      <PortfolioCard details={newsCluster} />

      {/* <Card details={internship} />
      <Card details={newsCluster} /> */}

      {/* link to more projects */}
      <div className="flex justify-end my-12">
        <p className=" text-accent underline">
          <a href="/works">view all projects</a>
        </p>
      </div>
    </div>
  );
}

const PortfolioCard = (details) => {
  return (
    <div
      className={`mt-20 tablet:flex tablet:justify-between tablet:gap-4 items-center ${
        details.details.number === 2 ? "flex-row-reverse" : ""
      } space-x-3`}
    >
      {/* Portfolio Image  */}

      <img
        src={details.details.img}
        alt=""
        className="smallPhone:w-full h-auto tablet:w-1/2 rounded-lg 
        transition ease-in-out delay-150 hover:scale-110 hover:-translate-y-3 duration-300 justify-self-center"
      />

      {/* Work details */}
      <div className={`smallPhone:max-w-max tablet:flex-col`}>
        <p
          className={`work_title ${
            details.details.number === 2
              ? "tablet:text-left"
              : "tablet:text-right"
          } smallPhone:text-center `}
        >
          {details.details.name}
        </p>
        <p
          className={`text-sm my-3 ${
            details.details.number === 2
              ? "tablet:text-left"
              : "tablet:text-right"
          }  smallPhone:text-center`}
        >
          {details.details.desc}
        </p>

        <div
          className={`flex smallPhone:justify-center my-4 ${
            details.details.number === 2
              ? "tablet:justify-start"
              : "tablet:justify-end"
          }`}
        >
          <span className="lang_used">{details.details.lang[0]}</span>
          <span className="lang_used mx-3">{details.details.lang[1]}</span>
          <span className="lang_used">{details.details.lang[2]}</span>
        </div>

        {/* Github and external link */}
        <div
          className={`flex smallPhone:justify-center ${
            details.details.number === 2
              ? "tablet:justify-start"
              : "tablet:justify-end"
          }`}
        >
          <a href="#q">
            <img
              className="transition500 hover:scale-125"
              src={GitHub}
              alt="GitHub"
            />
          </a>
          <a href="#q" className=" ml-6">
            <img
              className="transition500 hover:scale-125"
              src={ExternalLink}
              alt="View Site"
            />
          </a>
        </div>
      </div>
      {/* end of work detail */}
    </div>
  );
};

export default Portfolio;
