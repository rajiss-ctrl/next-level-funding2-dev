import React from "react";
import Button from "./Button";
import Link from "next/link";
import Image from "next/image"; // Import the Image component
import { useThemeContext } from "../context/ThemeContext";

const GetInTouch = () => {
  const { theme } = useThemeContext();

  return (
    <div>
      <section className="pt-[10rem] pb-[5rem] ">
        <div className="relative top-0">
          {/* Provide the width and height for the Image component */}
          <Image src="/assets/rec.svg" alt="" width={1920} height={1080} />
          <div className="absolute lg:top-[10%] z-10 left-[4%]">
            <p className="lexend uppercase text-slate-400 text-sm px-3">
              we would love to hear from you
            </p>
            <p className={` ${theme === 'light' ? "text-white" : "text-black"} space-grotesk font-bold text-[1.9rem] xl:text-[2.7rem]`}>
              Get in touch with us
            </p>
            <div className="flex gap-5 mt-6">
              <Link href="https://www.instagram.com/nextlevelfundingfx/">
                <Image
                  src="/assets/ig.png"
                  width={60}
                  height={60}
                  className="bg-slate-700 p-2 rounded-full"
                />
              </Link>
              <Link href="mailto:Nextlevelfundingfx@gmail.com">
                <Image
                  src="/assets/email.png"
                  width={60}
                  height={60}
                  className="bg-slate-700 p-2 rounded-full"
                />
              </Link>
            </div>
            <p className={`${theme === 'light' ? "text-white" : "text-black font-bold"} lg:w-1/2 mt-5 lexend font-thin`}>
              Have a question that wasn’t answered in our FAQs page? Reach out
              to us, and we will be happy to answer your questions
            </p>
            <div className="mt-[1rem]">
              <Button
                className={`${theme === 'light' ? "text-white border-slate-500" : "text-black border-slate-950 font-bold"} backdrop-filter bg-[transparent] xl:hover:bg-blue-300 backdrop-blur-lg bg-opacity-30 border w-1/5`}
                text="learn more"
              />
            </div>
          </div>
          <div className="absolute bottom-[20%] left-[50%]">
            <Image
              src="/assets/woman-sitting.svg"
              width={480}
              height={480}
              className="w-3/4 h-auto"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInTouch;
