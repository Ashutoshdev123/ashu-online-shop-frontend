import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "./swiper.css";

// Slide data
const SLIDES = [
  { id: "mobile", image: "/mobile.jpg", className: "slide slide1" },
  { id: "fashion", image: "/mancloth.jpg", className: "slide slide2" },
  { id: "clothing", image: "/cloths.jpg", className: "slide slide3" },
];

const SwiperComponent = () => {
  return (
    <Swiper
      className="home-swiper"
      modules={[Autoplay, Navigation, Pagination]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop
      navigation
      pagination={{ clickable: true }}
    >
      {SLIDES.map(({ id, image, className }) => (
        <SwiperSlide key={id}>
          <div
            className={className}
            style={{ backgroundImage: `url('${image}')` }}
          >
            <h2>Big Sale</h2>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
