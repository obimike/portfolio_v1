// import { Link } from "react-router-dom";
import "./style.css";

function Header() {
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

        <div className="dropdown tablet:hidden">
          <label
            tabIndex={0}
            className="btn bg-transparent hover:bg-brand-bodyColor"
          >
            <svg
              width="24"
              height="17"
              viewBox="0 0 24 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
            >
              <line y1="0.5" x2="24" y2="0.5" stroke="white" />
              <line x1="4" y1="8.5" x2="24" y2="8.5" stroke="white" />
              <line x1="8" y1="16.5" x2="24" y2="16.5" stroke="white" />
            </svg>
          </label>
          <div className="dropdown dropdown-end">
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-4 rounded-box shadow-lg justify-center p-2  border-2 border-brand-stroke 
                border-solid"
            >
              <li>
                <a href="/portfolio#about">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5  mr-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  About
                </a>
              </li>
              <li>
                <a href="/portfolio#skills">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  Skills
                </a>
              </li>
              <li>
                <a href="/portfolio#works">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 mr-5 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    ></path>
                  </svg>
                  Work
                </a>
              </li>
              <li>
                <a href="/portfolio#connect">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 mr-5 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M23,16a7,7,0,0,0-4.18,1.39L14.6,13.17A6.86,6.86,0,0,0,16,9a7,7,0,1,0-2.81,5.59l4.21,4.22A7,7,0,1,0,23,16ZM4,9a5,5,0,1,1,5,5A5,5,0,0,1,4,9Z"
                    />
                  </svg>
                  Connect
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
