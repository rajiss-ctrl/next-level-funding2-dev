import React from "react";
import Button from "./Button";
import Link from "next/link";

const GetInTouch = () => {
  return (
    <div>
      <section className="pt-[10rem] pb-[5rem] ">
        <div className="relative top-0">
          <img src="/assets/rec.svg" className="w-full h-auto " alt="" />
          <div className="absolute lg:top-[10%] z-10 left-[4%]">
            <p className=" lexend uppercase text-slate-400  text-sm px-3 ">
              we would love to hear from you
            </p>
            <p className="space-grotesk font-bold text-[1.9rem] xl:text-[2.7rem]">
              Get in touch with us
            </p>
            <div className="flex gap-5 mt-6">
              <Link href="https://www.instagram.com/nextlevelfundingfx/">
                <img
                  src="/assets/ig.png"
                  className="w-[40px] xl:w-[60px] h-auto bg-slate-700 p-2 rounded-full"
                />
              </Link>
              <Link href="mailto:Nextlevelfundingfx@gmail.com">
                <img
                  src="/assets/email.png"
                  className="w-[40px] xl:w-[60px] h-auto bg-slate-700 p-2 rounded-full"
                />
              </Link>
            </div>
            <p className="lg:w-1/2 mt-5 lexend font-thin">
              Have a question that wasn’t answered in our FAQs page ? Reach out
              to us and we will be happy to answer your questions
            </p>
            <div className="mt-[1rem]">
              <Button
                className="backdrop-filter bg-[transparent] xl:hover:bg-blue-300 backdrop-blur-lg bg-opacity-30 border border-slate-500 w-1/5"
                text="learn more"
              />
            </div>
          </div>
          <div className="absolute bottom-[20%] left-[50%]">
            <img
              src="/assets/woman-sitting.svg"
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
