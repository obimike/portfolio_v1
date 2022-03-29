import React from "react";
import Bubbles from "../../assets/img/Bubbles.svg";

function Hero() {
  return (
    <div
      id="home"
      className="text-center flex align-middle items-center tablet:justify-between h-screen relative tablet:px-16 smallPhone:px-4  smallPhone:w-full"
    >
      <div className="tablet:text-left slideUp tablet:max-w-[568px] smallPhone:m-auto">
        <p className="text-accent text-xl tablet:text-lg laptop:text-2xl smallPhone:mb-4">
          Hey! I'm,
        </p>
        <p className="text-4xl font-special tablet:text-5xl desktop:text-[80px] animateName">
          Samuel Okereke
        </p>
        <p className="desktop:text-xl smallPhone:mb-2">
          A passionate web and software developer, who design and code with
          love.
        </p>
        <a href="#connect">
          <button className="btn-btn">Let's Chat</button>
        </a>
      </div>
      <div className="hidden tablet:flex slideIn">
        <img src={Bubbles} alt="bubbles" />
      </div>
    </div>
  );
}

export default Hero;
