import Link from "next/link";

const Footer = () => {
  return (
    <div className=" bg-[transparent]  text-white">
      <div className="flex justify-center">
        <div className=" lg:hidden">
          <img src="/assets/logo.png" alt="" className="w-32 h-auto" />
          <div className="flex gap-5 mt-6 hidden lg:block">
            <div className="border-none border bg-slate-700 rounded-full p-3">
              <img src="/assets/bulb.svg" className="w-5 h-auto" alt="" />
            </div>
            <div className="border-none border bg-slate-700 rounded-full p-3">
              <img src="/assets/mail.svg" className="w-5 h-auto" alt="" />
            </div>
          </div>
        </div>
      </div>
      <footer className="flex md:flex-row space-y-2 md:space-y-0 py-10 text-base-content">
        <div className="flex items-start">
          <div className="hidden lg:flex items-center justify-center gap-6">
            <img src="/assets/logo.png" alt="" className="w-32 h-auto " />
            <a href="https://www.instagram.com/nextlevelfundingfx/" >
              <img
                src="/assets/ig.png"
                className="xl:w-[80px] xl:hover:w-[82px] xl:hover:overflow-hidden h-auto bg-slate-700 p-2 rounded-full"
              />
            </a>
            <a href="mailto:Nextlevelfundingfx@gmail.com">
              <img
                src="/assets/email.png"
                className="xl:w-[80px] h-auto bg-slate-700 p-2 rounded-full"
              />
            </a>
          </div>
        </div>
        <div className="flex items-end w-full justify-center lg:justify-end gap-1">
          <nav className="flex lexend text-[10px] lg:text-[15px] text-white ">
            <Link
              href="/about-us"
              className="link link-hover  border-r border-slate-200 pr-4 lg:px-4"
            >
              About Us
            </Link>
            <Link
              href="/contact-us"
              className="link link-hover  border-r border-slate-200 px-4"
            >
              Help Centre
            </Link>
            <Link
              href="/contact-us"
              className="link link-hover pl-4 lg:px-4"
            >
              Get In Touch
            </Link>
        
          </nav>
        </div>
      </footer>
      <p className=" xl:text-justify text-white opacity-70 lexend text-[10px] lg:text-sm px-4 text-center lg:text-left lg:px-0">
        All information provided on this site is intended solely for the study
        purposes related to trading on financial markets and does not serve in
        any way as a specific investment recommendation, business
        recommendation, investment opportunity analysis or similar general
        recommendation regarding the trading of investment instruments.
      </p>
      <div className="h-[0.5px] opacity-80 bg-white mt-8 mb-6 lg:mb-0  lg:mt-8 " />
      <div className="lg:flex lg:justify-between lg:items-center text-center h-[50px]">
        <div>
          <nav className="flex items-center justify-center lexend text-[10px] lg:text-[12px] ">
            <Link
              href="/terms-of-service"
              className="link link-hover  border-r border-slate-200 pr-4 "
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy-policy"
              className="link link-hover  border-r border-slate-200 px-4"
            >
              
              Privacy Policy
      
            </Link>
            <Link
              href="/cookie-policy"
              className="link link-hover border-r border-slate-200 px-4"
            >
              
              Cookie Policy
          
            </Link>
            <Link href="/refund-policy" className="link link-hover pl-4 lg:px-4">
            Refund Policy
              
            </Link>
          </nav>
        </div>
        <p className="mt-2 lg:mt-0 text-white text-center lexend text-[10px] lg:text-[12px]">
          2023 © - Next Level Funding - Powered by OTB Solutions{" "}
        </p>
      </div>

      <div className="flex gap-5 pt-[3rem] pb-6 justify-center lg:hidden">
      <a href="https://www.instagram.com/nextlevelfundingfx/" target="_blank" rel="noopener noreferrer">
          <img
            src="/assets/ig.png"
            className="  w-[35px] lg:w-[50px] h-auto bg-slate-700 p-2 rounded-full"
          />
        </a>
        <a href="mailto:Nextlevelfundingfx@gmail.com">
          <img
            src="/assets/email.png"
            className="w-[35px] lg:w-[50px] h-auto bg-slate-700 p-2 rounded-full"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
