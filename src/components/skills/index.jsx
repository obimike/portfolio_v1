import React from "react";

import Javascript from "../../assets/img/javascript.svg";
import Php from "../../assets/img/php.svg";
import Python from "../../assets/img/python.svg";
import Android from "../../assets/img/android-os.svg";
import Django from "../../assets/img/django.svg";
import Java from "../../assets/img/java.svg";
import Node from "../../assets/img/node.svg";
import ReactNative from "../../assets/img/react-native.svg";
import TailwindCss from "../../assets/img/tailwind-css.svg";
import MUI from "../../assets/img/material-ui.svg";
import lessThan from "../../assets/img/lessThan.svg";
import _4x0 from "../../assets/img/4x0.svg";
import AndroidStudio from "../../assets/img/android-studio.svg";
import VsCode from "../../assets/img/visual-studio-code.svg";
import Figma from "../../assets/img/figma.svg";
import Git from "../../assets/img/git.svg";

// const LanguageIcons = (icon) => {
//   return (
//     <div className="skills_icons">
//       <img src={icon} alt="" className="w-6 h-6" />
//     </div>
//   );
// };

function Skills() {
  return (
    <div
      id="skills"
      className="h-screen items-center  tablet:px-16 smallPhone:mx-4  py-24"
    >
      <div className="text-center mb-4">
        <p className="section_name bg-prowess tablet:bg-prowess_big">Skills</p>
      </div>
      <div className="mt-12">
        <div className="grid justify-items-center text-center mb-4 tablet:flex tablet:items-center tablet:text-left tablet:justify-between">
          <p className="mb-4 laptop:text-lg desktop:text-2xl">
            Here are some languages and frameworks I’ve been worked with
            recently:
          </p>

          <div className="w-auto h-[157px] p-6 bg-skill_design bg-no-repeat">
            <div className="grid grid-cols-5 grid-rows-2 z-10 gap-4 w-[304px]">
              <div data-tip="Javascript" className="tooltip">
                <img src={Javascript} alt="" className="skills_icons" />
              </div>
              <div data-tip="Php" className="tooltip">
                <img src={Php} alt="" className="skills_icons" />
              </div>
              <div data-tip="Python" className="tooltip">
                <img src={Python} alt="" className="skills_icons" />
              </div>
              <div data-tip="Java" className="tooltip">
                <img src={Java} alt="" className="skills_icons" />
              </div>
              <div data-tip="Android" className="tooltip">
                <img src={Android} alt="" className="skills_icons" />
              </div>

              <div data-tip="React" className="tooltip tooltip-bottom">
                <img src={ReactNative} alt="" className="skills_icons" />
              </div>
              <div data-tip="Material UI" className="tooltip tooltip-bottom">
                <img src={MUI} alt="" className="skills_icons" />
              </div>
              <div data-tip="Django" className="tooltip tooltip-bottom">
                <img src={Django} alt="" className="skills_icons" />
              </div>
              <div data-tip="Node JS" className="tooltip tooltip-bottom">
                <img src={Node} alt="" className="skills_icons" />
              </div>
              <div data-tip="Tailwind CSS" className="tooltip tooltip-bottom">
                <img src={TailwindCss} alt="" className="skills_icons" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tablet:flex tablet:justify-between tablet:items-center mt-16 ">
        <div>
          <div className="flex items-center mb-4">
            <img src={_4x0} alt="" className="mr-3" />
            <p className="laptop:text-2xl">Tools</p>
          </div>

          <div className="flex">
            <div className="grid justify-items-center">
              <img src={VsCode} alt="" className="tool_icons" />
              <p className="tools_name">VS Code</p>
            </div>
            <div className="grid justify-items-center mx-6 tablet:mx-9">
              <img src={AndroidStudio} alt="" className="tool_icons" />
              <p className="tools_name">Android Studio</p>
            </div>
            <div className="grid justify-items-center">
              <img src={Figma} alt="" className="tool_icons" />
              <p className="tools_name">Figma</p>
            </div>
            <div className="grid justify-items-center ml-6 tablet:ml-9">
              <img src={Git} alt="" className="tool_icons" />
              <p className="tools_name">Git</p>
            </div>
          </div>
        </div>
        <div className="laptop:flex items-center hidden pt-4">
          <img
            src={lessThan}
            alt=""
            className="animate-pulse w-9 mr-1 desktop:mr-3 desktop:w-16 "
          />
          <p className="desktop:text-2xl">And these are the tools use</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
