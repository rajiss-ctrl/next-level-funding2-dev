import React from "react";
import Link from "next/link";
import Button from "./Button";
import Image from "next/image"; // Import the Image component
import { useTheme } from "../../context/ThemeContext";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';

const MobileGetInTouch = () => {
  const { theme } = useTheme();

  return (
    <div className={`${theme === 'light' ? "bg-white body-bg" : "bg-white text-black font-bold"} glassmorph mb-[10rem] mt-[15rem]`}>
      <div className="">
        {/* Replace <img> with <Image> */}
        <Image
          src="/assets/woman-sitting.svg"
          width={1}
          height={1}
          className="w-[15rem] h-auto -mt-[60%] mx-auto"
          alt=""
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
           <a href="https://www.instagram.com/nextlevelfundingfx/" className="bg-[#344153] rounded-[50%] p-3">
                <InstagramIcon className='text-20 text-white'/>
              {/* <Image src="/assets/ig.png" alt="" width={60} height={60} /> */}
            </a>
            <a href="mailto:Nextlevelfundingfx@gmail.com" className="bg-[#344153] rounded-[50%] p-3">
              <MailOutlineIcon className='text-20 text-white'/>
              {/* <Image src="/assets/email.png" alt="" width={60} height={60} /> */}
            </a>

        </div>
        <div className="mt-6">
          <p className="lexend px-4">
            Have a question that wasn’t answered in our FAQs page? Reach out to
            us, and we will be happy to answer your questions
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
