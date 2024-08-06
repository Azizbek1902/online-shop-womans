import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Wrap } from "./style";

function Carousel() {
  return (
    <div>
      <Wrap>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
          loop={true}
        >
          <SwiperSlide>
            <img
              src="https://campona.hu/img/shopshero_background.ce5b7034.jpg"
              className="img"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.city-parfuemerie-shop.com/out/pictures/ddmedia/GGGB_1400x500.jpg"
              className="img"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.pinimg.com/originals/34/be/4e/34be4e91290b2410a7f280daceea9986.jpg"
              className="img"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </Wrap>
    </div>
  );
}

export default Carousel;
