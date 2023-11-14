import Link from "next/link";
import AboutCoverflow from "../components/AboutCoverflow";
import Button from "../components/Button";
import Footer from "../components/Footer";
import TableFlow from "../components/TableFlow";
import TestimonialComponent from "../components/TestimonialComponent";
import { useThemeContext } from "../../context/ThemeContext";
import IndexPage from "../components/IndexPage";
import Image from "next/image";

const AboutUs = () => {
  const { theme } = useThemeContext();
  return (
    <>
    <IndexPage>
          <title>About us -- NextLevelFunding</title>
          <meta
            name="description"
            content="With our program, you can get funded up to £1,000,000 with up to a 90% profit split. Unlock Your Trading Potential with Our Leading Proprietary Trading Firm."
          />
          <meta property="og:title" content="NextLevelFunding" />
          {/* Add other meta tags as needed for og:description, og:image, etc. */}
          <link rel="favicon" sizes="180x180" href="/assets/favicon.ico" />
          <link rel="favicon" type="image/ico" sizes="32x32" href="/assets/favicon.ico" />
          <link rel="favicon" type="image/ico" sizes="16x16" href="/assets/favicon.ico" />
          <link rel="manifest" href="/site.webmanifest" />
        
      </IndexPage>
    <main className={`${theme === "light" ? 'dark  body-bg text-white' : 'light bg-white text-black font-bold'} w-full  pt-[5rem] h-full`}>
        <div className="grid items-center justify-center py-[5rem]">
          <p className=" lexend uppercase text-slate-400  text-sm px-3 mt-[6rem] text-center">
            who we are
          </p>
          <p className="space-grotesk font-bold text-[3rem] text-center">
            About Us
          </p>
          <p className="lg::w-5/12 w-3/4 lexend text-center lg:px-[17rem] m-auto font-extralight">
            We are a company that seeks profitable traders to trade our funds.
            Prove to us you are profitable by completing our evaluation phase
            and recieving immediate funding of up to $500k
          </p>
        </div>
        <div className={`${theme === "light" ? 'text-white home-bg' : 'text-black font-bold'}  mt-32`}>
          <div className="flex flex-col justify-center items-center px-[1.3rem] xl:px-[9rem] 2xl:px-[12rem]">
            <section className="lg:pt-10 lg:px-0 2xl:px-[10rem]">
              <div className="flex flex-col lg:flex-row  2xl:flex-row justify-center items-center lg:justify-between 2xl:justify-between py-20 gap-7 px-[2rem] 2xl:px-0">
                <div className="">
                <div className="">
                <Image
                  src="/assets/about.png"
                  alt=""
                  width={400}
                  height={400}
                  className="w-full h-auto  m-auto"
                  // lg:w-[50%] 2xl:w-[40%]
                />
              </div>
                </div>
                <div className="lg:text-left lexend text-center w-fill lg:w-[55%]">
                  <p className="space-grotesk lg:text-[3.5rem] font-bold text-3xl mt-10 lg:mt-0 lg:pb-4">
                    Our Mission
                  </p>
                  <p className="lexend w-full text-[1rem] font-thin text-center  lg:text-left m-auto lg:m-0 ">
                    Our goal at nextlevelfunding is to help fund the dreams of
                    traders who do not have sufficient funds to make large
                    returns on there account per month. We seek profitable
                    traders who can trade our capital and hope to have a long
                    lasting relationship with them.
                  </p>
                </div>
              </div>
            </section>

            <section className="lg:px-[1rem]  w-full overflow-hidden px-0 py-[3rem] lg:py-[10rem] 2xl:py-[10rem]">
              <p className="lexend w-full overflow-hidden uppercase text-slate-400 text-left text-sm">
                what our traders are saying about us
              </p>
              <p className="font-bold space-grotesk 2xl:text-6xl text-3xl text-left ">
                Testimonials
              </p>
              <div className="w-full overflow-hidden flex justify-center items-center flex-col mt-[5rem]">
                <TestimonialComponent />
              </div>
                
              <div className=" flex justify-center items-center">
              <Link href="https://www.trustpilot.com/review/nextlevelfunding.co.uk" className="">
                    <Button
                      className="backdrop-filter text-[.5rem] lg:text-sm h-9 lg:h-auto bg-[#991275] border-none "
                      text="View More Reviews"
                      showArrow={false}
                    />
              </Link>
              </div>

            </section>
            <section>

            <section className=" hidden lg:block pt-8  lg:pt-0  lg:my-[10rem]  relative ">
                <Image width={400} height={400} layout="responsive" src="/assets/rec.svg" className=" lg:h-auto 2xl:h-auto " alt="" />
                <div className="absolute pt-10  lg:pt-0 2xl:pt-0 top-[10rem] lg:top-[10%] z-10 left-0 lg:left-[3rem]">
                  <div className="pr-5 pt-10 lexend uppercase  lg:text-slate-400 text-sm lg:px-3 ">
                    be a part of the winning team
                  </div>
                  <div className="pr-5 space-grotesk leading-[1.3] mb-[1rem]  font-bold text-[2rem] lg:text-[3rem] ">
                    Join our team of <br /> experienced traders
                  </div>
                  <Link href="//#evaluation-package" className=" mt-[2rem]">
                    <Button
                      className={`${theme === "light" ? "text-white" : "text-white"} backdrop-filter text-[.5rem] lg:text-sm h-9 lg:h-auto bg-[#991275] border-none`}
                      text="get started"
                      showArrow={true}
                    />
                  </Link>
                </div>
                <div className="absolute top-6 left-[0] lg:top-0 lg:left-[58%]">
                <Image
                  src="/assets/trader.png"
                  alt=""
                  width={350}
                  height={350} // Set to null for automatic height adjustment
                  className="bouncing-image w-full lg:w-[60%] 2xl:w-3/4 h-auto"
                />
                </div>
              </section>
              {/* mobile */}
              <section className=" px-4 lg:hidden  pt-8  lg:pt-0  lg:my-[10rem] glassmorph">
              <div className=" ">
              <Image
                  src="/assets/trader.png"
                  alt=""
                  width={65}
                  height={65} // Set to null for automatic height adjustment
                  className="bouncing-image w-full  2xl:w-3/4 h-auto"
                />
                </div>
                <div className="  z-10">
                  <div className=" pt-10 lexend uppercase text-slate-400 text-sm lg:px-3 font-bold ">
                    be a part of the winning team
                  </div>
                  <div className=" space-grotesk leading-[1.3] mb-[1rem]  font-bold text-[2rem] lg:text-[3rem] ">
                    Join our team of <br /> experienced traders
                  </div>
                  <Link href="//#evaluation-package" className=" mt-[2rem]">
                    <Button
                      className={`${theme === "light" ? "text-white" : "text-white font-bold"} backdrop-filter text-[.5rem] lg:text-sm h-9 lg:h-auto bg-[#991275] border-none`}
                      text="get started"
                      showArrow={true}
                    />
                  </Link>
                </div>
              
              </section>

            </section>
          </div>
          <section className="pt-[8rem] lg:pt-0 xl:px-[9rem] 2xl:px-[12rem] px-[2rem]">
            <Footer />
          </section>
        </div>
    </main>
    </>
  );
};


export default AboutUs