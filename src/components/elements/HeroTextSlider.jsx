
import { HeroSlides } from "../../utils/HeroSlides";


"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";


export default function HeroSlider() {
  return (
    <div className="relative w-full h-screen overflow-hidden mt-[68px] md:mt-[86px]">
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
              className={`relative w-full h-screen bg-cover bg-no-repeat ${slide.imageStyles || "bg-center"}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 sm:bg-black/40 lg:bg-black/30 flex items-start">
                <div className="px-6 md:px-20 lg:px-32 text-left text-white  
                 mt-35 md:mt-65 lg:mt-60 max-w-xl lg:max-w-3xl">
                  
                  {/* Static text */}
                  <h2 className="text-base md:text-xl font-normal text-gray-200 tracking-wide mb-3">
                    {slide.main}
                  </h2>

                  {/* Changing text */}
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-snug mb-4">
                    {slide.title.split(slide.highlight)[0]}
                    <span className={slide.highlightColor}>
                      {slide.highlight}
                    </span>
                    {slide.title.split(slide.highlight)[1]}
                  </h1>

                  {/* Description */}
                  <p className="mt-2 md:mt-4 text-sm md:text-lg lg:text-xl text-gray-200 leading-relaxed">
                    {slide.description}
                  </p>

                  {/* Buttons */}
                  <div className="mt-6 flex flex-wrap gap-4">
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


