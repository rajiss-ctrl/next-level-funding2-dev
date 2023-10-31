import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import GlassMorphCard from "./GlassMorphCard";
const TestimonialComponent = () => {
  return (
    <div>
      <Swiper
        // effect={"coverflow"}
        grabCursor={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        pagination={true}
        modules={[ Pagination, Autoplay]}
        className="mySwiper"
        initialSlide={1}
      >
        <SwiperSlide>
          <GlassMorphCard
            className="text-xl"
            title="Excellent Service and ex..."
            text="Next Level Funding offers an exceptional experience for traders, with their deep expertise, personalized guidance, and supportive community. Their commitment to risk management and transparency stands out, making it a top choice for both new and experienced traders looking for growth and success."
          />
        </SwiperSlide>
        <SwiperSlide>
          <GlassMorphCard
            className="text-xl"
            title="Excellent Service and ex..."
            text="Next Level Funding offers an exceptional experience for traders, with their deep expertise, personalized guidance, and supportive community. Their commitment to risk management and transparency stands out, making it a top choice for both new and experienced traders looking for growth and success."
          />
        </SwiperSlide>
        <SwiperSlide>
          <GlassMorphCard
            className="text-xl"
            title="Excellent Service and ex..."
            text="Next Level Funding offers an exceptional experience for traders, with their deep expertise, personalized guidance, and supportive community. Their commitment to risk management and transparency stands out, making it a top choice for both new and experienced traders looking for growth and success."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TestimonialComponent;
