import React from "react";
import CarouselCard from "./CarouselCard";
import { Swiper, SwiperSlide } from "swiper/react";
import GlassMorphCard from "./GlassMorphCard";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination,  Autoplay } from "swiper/modules";
import "swiper/css";
import { useThemeContext } from "../../context/ThemeContext";
const Coverflow = () => {
  
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay,]}
        className="mySwiper"
        initialSlide={1}
      >
        <SwiperSlide>
          <CarouselCard
            img="/assets/crown-blue.png"
            title="Trading Evaluation at its best"
            text="Our evaluation account allows traders to prove their skill in order to trade our live funds."
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            img="/assets/crown-pink.svg"
            title="High Profit Splits"
            text="Our profit split for the first month on all accounts is 80%. On the second month you will then receive 90% of all profits made!
              "
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            img="/assets/Asset 3.png"
            title="No Risk"
            text="We take all the risk on live accounts so you can comfortably trade without worrying about losses."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Coverflow;
