import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import GlassMorphCard from "./GlassMorphCard";
const TestimonialComponent = () => {
  return (
    <div className="overflow-hidden w-full">
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
            title="This is by far the most transparent and…"
            text="This is by far the most transparent and FAIR prop firm out there ! No issues whatsoever . Wish they offered higher credits!"
            name="Matthew Couchlocal - USA"
          />
        </SwiperSlide>
        <SwiperSlide>
          <GlassMorphCard
            className="text-xl"
            title="Nextlevelfunding is really helpful to…"
            text="Nextlevelfunding is really helpful to traders like me, they helped in a lot of circumstances. And I got so much profit when the correct time I trade. They give upto 500k us dollars, it's true, in my experience they are legitimate.
            "
            name="Rihan Rhn - United State"
          />
        </SwiperSlide>
        <SwiperSlide>
          <GlassMorphCard
            className="text-xl"
            title="I am very happy to join this great…"
            text="I am very happy to join this great company that helped me earn a lot of money through trading, and I also really liked that they have very kind and cooperative customer service, and this makes them special."
            name="Jory Nardo - Egypt"
          />
        </SwiperSlide>
        <SwiperSlide>
          <GlassMorphCard
            className="text-xl"
            title="Game-Changer Alert! Always NLF to the rescue."
            text="This platform is a game-changer. fast withdrawals are a dream, and I'm more than happy with the user-firendly experience. Highly satisfied with their customer service as well.."
            name="Peter Francis - Great Britain"
          />
        </SwiperSlide>
        <SwiperSlide>
          <GlassMorphCard
            className="text-xl"
            title="Nextlevelfunding is a platform that I…"
            text="
            Nextlevelfunding is a platform that I trust, transactions are very safe and fast, I have made a lot of profits here, especially you can be funded immediately up to 500 thousand dollars."
            name="Niek Tnur - Vietnam "
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TestimonialComponent;
