import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { slider } from "../../Data/data";
import "./style.scss"

const Hero = () => {
  return (
    <>
      <section>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          autoplay={true}
          navigation={true}
          modules={[Navigation, EffectFade]}
          loop={true}
          effect={"fade"}
        >
          {slider.map((item, index) => {
            return (
              <SwiperSlide>
                <img src={item.img} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default Hero;
