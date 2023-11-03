import Link from "next/link";
import AboutCoverflow from "../components/AboutCoverflow";
import Button from "../components/Button";
import Footer from "../components/Footer";
import TableFlow from "../components/TableFlow";
import TestimonialComponent from "../components/TestimonialComponent";

const AboutUs = () => {
  return (
    <main className="w-full body-bg pt-[5rem] text-white h-full">
        <div className="grid items-center justify-center py-[5rem]">
          <p className=" lexend uppercase text-slate-400  text-sm px-3 mt-[6rem] text-center">
            who we are
          </p>
          <p className="space-grotesk font-bold text-[3rem] text-center">
            About Us
          </p>
          <p className="2xl:w-5/12 w-3/4 lexend text-center px-[17rem] m-auto font-extralight">
            We are a company that seeks profitable traders to trade our funds.
            Prove to us you are profitable by completing our evaluation phase
            and recieving immediate funding of up to $500k
          </p>
        </div>
        <div className="home-bg">
          <div className="flex flex-col justify-center items-center xl:px-[9rem] 2xl:px-[12rem] px-[2rem]">
            <section className=" 2xl:px-[10rem]">
              <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between py-20 gap-7 px-[2rem] 2xl:px-0">
                <div className="w-full w-[50%]">
                  <img
                    src="/assets/about.png"
                    className=" h-auto m-auto"
                    alt=""
                  />
                </div>
                <div className="lg:text-left lexend text-center w-fill lg:w-[50%]">
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

            {/* CAROUSEL */}
            {/* <section className="mt-[10rem]">
              <p className="lexend uppercase text-slate-400 text-center text-sm">
                Perks of joining us
              </p>
              <p className="font-bold space-grotesk 2xl:text-6xl text-3xl text-center ">
                Why Choose Us
              </p>
              <div className="mt-10">
                <AboutCoverflow />
              </div>
            </section> */}

            {/* tABLE */}
            {/* <section className="flex justify-center px-[1.5rem] mt-[5rem]">
              <TableFlow />
            </section> */}

            {/* TESTIMONIALS */}
            <section className="2xl:px-[10rem] px-[2rem] py-[10rem]">
              <p className="lexend uppercase text-slate-400 text-left text-sm">
                what our traders are saying about us
              </p>
              <p className="font-bold space-grotesk 2xl:text-6xl text-3xl text-left ">
                Testimonials
              </p>
              <div className="w-full mt-[5rem]">
                <TestimonialComponent />
              </div>
            </section>
            <section>
              <section className="my-[10rem] relative ">
                <img src="/assets/rec.svg" className="w-full h-auto " alt="" />
                <div className="absolute top-[10%] z-10 left-[4rem]">
                  <p className=" pt-10 lexend uppercase text-slate-400  text-sm px-3 ">
                    be a part of the winning team
                  </p>
                  <p className="space-grotesk font-bold text-[3rem] ">
                    Join our team of <br /> experienced traders
                  </p>
                  <Link href="//#evaluation-package" className="mt-[2rem]">
                    <Button
                      className="backdrop-filter bg-[#991275] border-none "
                      text="get started"
                      showArrow={true}
                    />
                  </Link>
                </div>
                <div className="absolute bottom-[30%] left-[60%]">
                  <img
                    src="/assets/trader.png"
                    className="w-3/4 h-auto"
                    alt=""
                  />
                </div>
              </section>
            </section>
          </div>
          <section className="xl:px-[9rem] 2xl:px-[12rem] px-[2rem]">
            <Footer />
          </section>
        </div>
    </main>
  );
};

export default AboutUs;
