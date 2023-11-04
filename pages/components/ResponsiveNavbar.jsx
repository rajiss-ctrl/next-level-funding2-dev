import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Button from "./Button";
import { Container } from "@mui/material";

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);

  const toggleNavbar = () => {
    setNavbar(!navbar);
  };
  const logoClickHandler = !navbar ? null : toggleNavbar;

  const handleNavigation = () => {
    if (navbar) {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("popstate", handleNavigation);

    return () => {
      window.removeEventListener("popstate", handleNavigation);
    };
  }, [navbar]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;

      if (scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  return (
    <nav>
      <div
        className={` justify-between px-4 mx-auto 2xl:px-[12rem] xl:px-[9rem] lg:items-center lg:flex fixed right-0 left-0 z-50 ${
          isScrolled ? "bg-black" : ""
        }`}
      >
        <div>
          <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
            <Link href="/" >
              <img src="/assets/logo.png" alt="" onClick={logoClickHandler}/>
            </Link>
            <div className="lg:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border bg-white"
                onClick={toggleNavbar}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 hidden justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0`}
          >
            <div className=" text-center flex space-x-7 text-white backdrop-filter bg-black backdrop-blur-lg bg-opacity-30 border rounded-full py-2 px-10 border-slate-500 bg-blend-overlay lexend">
              <Link href="/about-us">About Us</Link>
              <Link href="/trading-rules">Trading Rules</Link>
              <Link href="/#faq">FAQ</Link>
              <Link href="/contact-us">Help Center</Link>
            </div>
          </div>
          {navbar && (
            <div className="relative">
              <div
                className="h-screen w-full absolute left-0 top-0"
                onClick={toggleNavbar}
              ></div>
              <div className="navbar-slide-out z-30 flex flex-col justify-center items-center px-10 py-5 gap-6 bg-black text-white relative lexend ">
                <Link href="/about-us" onClick={toggleNavbar}>
                  About Us
                </Link>
                <Link href="/trading-rules" onClick={toggleNavbar}>
                  Trading Rules
                </Link>
                <Link href="/#faq" onClick={toggleNavbar}>
                  FAQ
                </Link>
                <Link href="/contact-us" onClick={toggleNavbar}>
                  Help Center
                </Link>
                <Button
                  className="bg-[#295cf7] border-none lexend hover:bg-blue-800"
                  text="get funded"
                  onClick={toggleNavbar}
                  showArrow={true}
                />
              </div>
            </div>
          )}
        </div>
        <div className="hidden space-x-2 lg:inline-block">
          <Button
            className="bg-[#295cf7] border-none lexend hover:bg-blue-800"
            text="get funded"
            showArrow={true}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
