





import { HeroSlides } from "../../utils/HeroSlides";

"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";


export default function HeroSlider() {
  return (
    <div className="relative w-full h-screen overflow-hidden mt-[68px] md:mt-[90px]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        speed={1200}
        className="w-full h-full"
      >
        {HeroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-screen bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-start">
                  <div className="px-6 md:px-20 lg:px-32 text-left
                   text-white max-w-xl lg:max-w-4xl mt-45 md:mt-65 lg:mt-60">

                    <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                      {slide.title.split(slide.highlight)[0]}
                      <span className={slide.highlightColor}>
                        {slide.highlight}
                      </span>
                      {slide.title.split(slide.highlight)[1]}
                    </h1>

                    <p className="mt-4 text-gray-200 max-w-50 md:max-4xl: text-sm md:text-xl">
                      {slide.description}
                    </p>

                    <div className="mt-6 flex gap-4">
                      {slide.buttons.map((btn, idx) => (
                        <button key={idx} className={btn.style}>
                          {btn.text}
                        </button>
                      ))}
                    </div>
                  </div>
              </div>





            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

