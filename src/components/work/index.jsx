import { workData } from "../../data/works";
import "./style.css";

import GitHub from "../../assets/img/github.svg";
import ExternalLink from "../../assets/img/external-link.svg";
import { useState } from "react";

const Work = () => {
  const [filter_Language, setFilter_Language] = useState("All");

  const filter__project = (selected_language) => {
    setFilter_Language(selected_language);
  };

  return (
    <div className=" pt-24 tablet:px-16 smallPhone:mx-4">
      <p className="text-xl tablet:text-4xl font-bold">Portfolio</p>
      <div className="flex space-x-2 my-6 ">
        <div
          className={`filterBtn ${
            filter_Language === "All" ? "selectedBtn" : ""
          }`}
          onClick={() => filter__project("All")}
        >
          All
        </div>
        <div
          className={`filterBtn ${
            filter_Language === "React" ? "selectedBtn" : ""
          }`}
          onClick={() => filter__project("React")}
        >
          React
        </div>

        <div
          className={`filterBtn ${
            filter_Language === "Android" ? "selectedBtn" : ""
          }`}
          onClick={() => filter__project("Android")}
        >
          Android
        </div>
        <div
          className={`filterBtn ${
            filter_Language === "Python" ? "selectedBtn" : ""
          }`}
          onClick={() => filter__project("Python")}
        >
          Python
        </div>
      </div>

      <div className="flex flex-wrap laptop:justify-between gap-y-10 ">
        {filter_Language === "All"
          ? workData.map((work) => {
              return (
                <div className="portfolioCard container" key={work?.id}>
                  <img src={work.img} alt="" className="worksImage" />
                  <div class="overlay">
                    <div className="text">
                      <p className="project__name">{work.name}</p>
                      <p className="project__desc">{work.desc}</p>
                      <div className="project__icons ">
                        {work.lang.map((lang) => {
                          return <span className="project__lang">{lang}</span>;
                        })}
                      </div>
                      <div className="project__icons mt-4">
                        <a href={work.links[0]} className="project__git">
                          <img
                            className="transition50  0 hover:scale-125 project__git"
                            src={GitHub}
                            alt="GitHub"
                          />
                        </a>
                        <a href={work.links[1]} className="project__git">
                          <img
                            className="transition50 hover:scale-125 project__git"
                            src={ExternalLink}
                            alt="ExternalLink"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : workData
              .filter((langName) => langName.lang.includes(filter_Language))
              .map((work) => {
                return (
                  <div className="portfolioCard container" key={work?.id}>
                    <img src={work.img} alt="" className="worksImage" />
                    <div class="overlay">
                      <div className="text">
                        <p className="project__name">{work.name}</p>
                        <p className="project__desc">{work.desc}</p>
                        <div className="project__icons ">
                          {work.lang.map((lang) => {
                            return (
                              <span className="project__lang">{lang}</span>
                            );
                          })}
                        </div>
                        <div className="project__icons mt-4">
                          <a href={work.links[0]} className="project__git">
                            <img
                              className="transition50  0 hover:scale-125 project__git"
                              src={GitHub}
                              alt="GitHub"
                            />
                          </a>
                          <a
                            href={work.links[1]}
                            className="project__git"
                            // target="_blank"
                            // rel=""
                          >
                            <img
                              className="transition50 hover:scale-125 project__git"
                              src={ExternalLink}
                              alt="ExternalLink"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
      </div>
    </div>
  );
};

export default Work;
