
import { cardData } from "../../utils/CardData";

// components/CardSlider.jsx

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";



export default function CardSlider() {
  return (
    <div className="w-full max-w-full lg:px-10 py-2">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        loop={true} // ✅ enables seamless looping
        loopedSlides={cardData.length} // ✅ preload all slides
        autoplay={{
          delay: 4000, // 4s pause between slides
          disableOnInteraction: false,
        }}
        speed={800} // ✅ smooth transition speed
        breakpoints={{
          0: { slidesPerView: 1 },   // sm
          768: { slidesPerView: 1 }, // md
          1024: { slidesPerView: 2 } // lg
        }}
      >
        {cardData.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="">
              <img
                src={card.image}
                alt={card.title}
                className="min-h-[300px] md:min-h-[400px]  bg-center bg-cover rounded-lg mb-5"
              />
              <h2 className="text-xl md:text-2xl font-bold mb-1 mx-3 p3 text-blue-900">{card.title}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

