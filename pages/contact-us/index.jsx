import React from "react";
import Footer from "../components/Footer";
import Button from "../components/Button";
import ContactForm from "../components/ContactForm";
import { Grid, Box } from "@mui/material";

const ContactUs = () => {
  return (
    <main className="w-full body-bg pt-[5rem] text-white  h-full">
      <div className="grid items-center justify-center py-[5rem] px-[1.3rem]">
        <p className=" lexend uppercase text-slate-400  text-sm px-3 mt-[6rem] text-center">
          we would love to hear from you
        </p>
        <p className="space-grotesk font-bold text-[2rem] lg:text-[3rem] text-center">
          Online Assistant Portal
        </p>
        <p className="w-3/4 lexend text-center m-auto font-extralight">
          Passionate about solving problems through creative communications.
          Offering straight forward solutions
        </p>
      </div>
      <div className="home-bg py-[10rem]">
        <Box>
          <Grid container spacing={2}>
            <Grid xs={12} md={6} lg={6}>
              <div className="grid flex-col justify-center mx-[3rem] px-[4rem]">
                <div className="flex items-center">
                  <img
                    src="/assets/call.svg"
                    className="2xl:w-[3.5rem] w-10 h-auto border-none border bg-slate-700 rounded-full p-3"
                    alt=""
                  />
                  <span className="lexend font-bold 2xl:text-2xl text-lg ml-3">
                    +35385857806345
                  </span>
                </div>
                <div className=" my-9">
                  <div className="flex items-center">
                    <img
                      src="/assets/mail.svg"
                      className="2xl:w-14 w-10 h-auto border-none border bg-slate-700 rounded-full p-3"
                      alt=""
                    />
                    <span className="lexend font-bold 2xl:text-2xl text-lg ml-3">
                      Nextlevelfundingfx@gmail.com
                    </span>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid xs={12} md={6} lg={6}>
              <div className="px-[2rem]">
                <ContactForm />
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
      <div className="xl:px-[9rem] 2xl:px-[12rem] px-[2rem]">
        <Footer />
      </div>
    </main>
  );
};

export default ContactUs;

<div className="flex items-center justify-center">
  <div className="grid 2xl:grid-cols-2  grid-cols-none gap-10 ">
    <div className="grid grid-rows-3 gap-7"></div>
    <div className="grid grid-rows-3 gap-7">
      <ContactForm />
    </div>
  </div>
</div>;
