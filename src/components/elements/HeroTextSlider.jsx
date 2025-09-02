import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

export default function HeroTextSlider() {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop={true}
      speed={1200} // smoother fade transition
      className="w-full mt-3"
    >
      <SwiperSlide>
        <div className="transition-opacity duration-1000 ease-in-out">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Effortless{" "}
            <span className="text-blue-900">Business Structuring</span>
            <br /> Right Here with Apex.
          </h1>
          <p className="text-gray-600 mt-4">
            Providing expert recruitment, structuring, and intensive training
            tailored for sustainable growth.
          </p>
        </div>

        <div className="mt-6 flex justify-center gap-4">
              <button className="px-6 py-3 font-bold bg-orange-600 text-white rounded-lg hover:bg--700">
                Get Started
              </button>
              <button className="px-6 py-3 border font-bold border-orange-600 text-orange-600 rounded-lg hover:bg-blue-50">
                Learn More
              </button>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="transition-opacity duration-1000 ease-in-out">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Empowering{" "}
            <span className="text-orange-600">Talents & Businesses</span>
            <br /> for Lasting Success.
          </h1>
          <p className="text-gray-600 mt-4">
            We bridge the gap between top talents and employers through
            customized strategies.
          </p>
        </div>
        <div className="mt-6 flex justify-center gap-4">
              <button className="px-6 py-3 font-bold bg-blue-900 text-white rounded-lg hover:bg-blue-700">
                Get Started
              </button>
              <button className="px-6 py-3 border font-bold border-blue-900 text-blue-900 rounded-lg hover:bg-blue-50">
                Learn More
              </button>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="transition-opacity duration-1000 ease-in-out">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Apex <span className="text-orange-600">Training & Support</span>
            <br /> Built for Growth.
          </h1>
          <p className="text-gray-600 mt-4">
            Delivering customer service training, employee appraisals, and
            onboarding support.
          </p>
        </div>
        <div className="mt-6 flex justify-center gap-4">
              <button className="px-6 py-3 font-bold bg-blue-900 text-white rounded-lg hover:bg-blue-700">
                Get Started
              </button>
              <button className="px-6 py-3 border font-bold border-blue-900 text-blue-900 rounded-lg hover:bg-blue-50">
                Learn More
              </button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}




