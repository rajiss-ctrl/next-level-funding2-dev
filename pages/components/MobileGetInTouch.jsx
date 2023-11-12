import React from "react";
import Link from "next/link";
import Button from "./Button";
import { useThemeContext } from './../context/ThemeContext';
const MobileGetInTouch = () => {
  const {theme} =useThemeContext()
  return (
    <div className={`${theme === 'light' ? "bg-white body-bg" : "bg-white text-black font-bold"} glassmorph  mb-[10rem] mt-[15rem]`}>
      <div className="">
        <img
          src="/assets/woman-sitting.svg"
          className="w-[15rem] h-auto -mt-[60%] mx-auto"
        />
      </div>
      <div className="">
        <p className="uppercase text-brown-700 font-bold p-5">
          We would love to hear from you
        </p>
        <p className="text-5xl space-grotesk font-bold w-[90%] px-3">
          Get in touch with us
        </p>
        <div className="flex gap-5 mt-6 px-3">
          <Link href="">
            <img
              src="/assets/ig.png"
              className="w-[40px] xl:w-[60px] h-auto bg-slate-700 p-2 rounded-full"
            />
          </Link>
          <Link href="">
            <img
              src="/assets/email.png"
              className="w-[40px] xl:w-[60px] h-auto bg-slate-700 p-2 rounded-full"
            />
          </Link>
        </div>
        <div className="mt-6">
          <p className="lexend px-4">
            Have a question that wasn’t answered in our FAQs page ? Reach out to
            us and we will be happy to answer your questions
          </p>
        </div>
        <div className="mt-[2rem] px-3">
          <Button
            className="backdrop-filter bg-[transparent] backdrop-blur-lg bg-opacity-30 border border-slate-500"
            text="learn more"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileGetInTouch;
