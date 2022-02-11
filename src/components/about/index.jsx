import React from "react";
import Avatar from "../../assets/img/Avatar.png";

function About() {
  return (
    <div
      id="about"
      className="h-screen smallPhone:h-auto items-center smallPhone:mx-4 tablet:px-16 py-24"
    >
      <div className="text-center mb-16">
        <p className="section_name bg-profile tablet:bg-profile_big ">
          About Me
        </p>
      </div>
      <div className="text-center tablet:flex tablet:justify-between tablet:text-justify items-center slideUp">
        <div className="mb-4 grid justify-items-center tablet:w-auto">
          <img src={Avatar} alt="" className=" tablet:w-80" />
          <button className="btn-btn">View Resume</button>
        </div>
        <p className="text-sm leading-6 tablet:w-1/2 tablet:text-sm laptop:text-base">
          We meet again, well what can i say?... talking about myself is kind of
          a drag but here it goes. I'm a web and soft­ware devel­op­er from
          lagos, Nigeria. My Interest in programming started back at 2014 when a
          friend who saw me looking at W3School HTML tutorials asked me to
          build/design a free-classified site for him called “Futomall”, this I
          did with Html, CSS, JavaScript and a basic knowledge of Php at the
          time. <br /> <br /> At moment, I have gained better experience working
          both as a freelancer and in a coperate enviroment. Also, got to play
          with some cool languages and their frameworks. Aside my love for
          creating innovative things that lives in digital space, I also love
          teaching, reading, Anime, traveling, and swimming.
        </p>
      </div>
    </div>
  );
}

export default About;
