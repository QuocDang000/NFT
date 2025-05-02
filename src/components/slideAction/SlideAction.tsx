import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "./slideAction.scss";

export const SlideAction = ({
  slideImages,
  slidesPerLargeView,
}: {
  slideImages: string[];
  slidesPerLargeView: number;
}) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      lazy={true}
      navigation={true}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3.5,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: slidesPerLargeView,
          spaceBetween: 16,
        },
      }}
      modules={[Pagination, Navigation]}
      className="slide-action"
    >
      {slideImages.map((src, index) => (
        <SwiperSlide key={index}>
          <img src={src} loading="lazy" alt={`NFT collection ${index + 1}`} />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
