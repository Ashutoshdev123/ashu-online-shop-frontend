import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
//import mobileImg from "../assets/mobile.jpg";

//Import Swiper styles
import "./swiper.css";
import "swiper/swiper-bundle.css";

const SwiperComponent = () => {
  return (
    <Swiper
      className="homeSwiper"
      modules={[Autoplay, Navigation, Pagination]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div
          className="slide slide1"
          style={{ backgroundImage: "url('/mobile.jpg')" }}
        >
          <h2>Big Sale</h2>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="slide slide2"
          style={{ backgroundImage: "url('/mancloth.jpg')" }}
        >
          <h2>Big Sale</h2>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="slide slide3"
          style={{ backgroundImage: "url('/cloths.jpg')" }}
        >
          <h2>Big Sale</h2>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
