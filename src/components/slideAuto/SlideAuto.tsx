import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "./slideAuto.scss";

export const Slide = ({ slideImages }: { slideImages: string[] }) => {
  return (
    <Swiper
      className="slide-img"
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      modules={[Pagination, Navigation, Autoplay]}
    >
      {slideImages.map((src, index) => (
        <SwiperSlide key={index}>
          <img src={src} loading="lazy" alt={`Slide ${index + 1}`} />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
