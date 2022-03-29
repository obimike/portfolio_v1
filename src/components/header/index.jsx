import { useState } from "react";
// import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div
        className="flex justify-between smallPhone:px-4 smallPhone:py-5 tablet:px-10 tablet:py-10 fixed inset-0 
      place-items-center h-16 z-50"
      >
        <div>
          <p className="phone:text-3xl tablet:text-4xl laptop:text-4xl smallPhone:text-2xl">
            <a href="/portfolio#home">
              Sa<span className="text-primary">m</span>iie
            </a>
          </p>
        </div>
        <ul className="hidden tablet:flex gap-6 ">
          <li>
            <a href="/portfolio#about" className="hover:text-primary">
              About
            </a>
          </li>
          <li>
            <a href="/portfolio#skills" className="hover:text-primary">
              Skills
            </a>
          </li>
          <li>
            <a href="/portfolio#works" className="hover:text-primary">
              Works
            </a>
          </li>
          <li>
            <a href="/portfolio#connect" className="hover:text-primary">
              Connect
            </a>
          </li>
        </ul>
        <label
          for="my-drawer-4"
          className="drawer-button tablet:hidden"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle === false ? (
            <svg
              width="24"
              height="17"
              viewBox="0 0 24 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="0.5" x2="24" y2="0.5" stroke="white" />
              <line x1="4" y1="8.5" x2="24" y2="8.5" stroke="white" />
              <line x1="8" y1="16.5" x2="24" y2="16.5" stroke="white" />
            </svg>
          ) : (
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.646447"
                y1="17.617"
                x2="17.617"
                y2="0.646452"
                stroke="white"
              />
              <line
                x1="1.35355"
                y1="0.646462"
                x2="18.3241"
                y2="17.617"
                stroke="white"
              />
            </svg>
          )}
        </label>
      </div>

      {/* Drawer for smaller devices */}

      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side">
          <label for="my-drawer-4" className="drawer-overlay"></label>
          <ul className="content-center gap-12 text-3xl text-center h-screen grid fixed w-screen tablet:hidden z-40 ">
            <li>
              <a href="#about">
                <label
                  for="my-drawer-4"
                  className="drawer-button inline-block hover:text-primary"
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  About
                </label>
              </a>
            </li>
            <li>
              <a href="#skills">
                <label
                  for="my-drawer-4"
                  className="drawer-button inline-block hover:text-primary"
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  Skills
                </label>
              </a>
            </li>
            <li>
              <a href="#works">
                <label
                  for="my-drawer-4"
                  className="drawer-button inline-block hover:text-primary"
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  Works
                </label>
              </a>
            </li>
            <li>
              <a href="#connect">
                <label
                  for="my-drawer-4"
                  className="drawer-button inline-block hover:text-primary"
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  Connect
                </label>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
