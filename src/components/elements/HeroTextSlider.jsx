import gathering from "../../assets/image/gathering.webp"

"use client";




import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";



export default function HeroTextSlider() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, ]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        speed={1200}
        className="w-full h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="w-full h-screen bg-cover bg-center relative"
            style={{ backgroundImage: `url(${gathering})` }}
          >
            <div className="absolute inset-0 bg-black/40 flex items-center">
              <div className="px-6 md:px-20 lg:px-32 text-left text-white max-w-2xl">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                  Effortless{" "}
                  <span className="text-orange-400">Business Structuring</span>
                  <br /> Right Here with Apex.
                </h1>
                <p className="mt-4 text-gray-200 text-sm md:text-lg">
                  Providing expert recruitment, structuring, and intensive
                  training tailored for sustainable growth.
                </p>
                <div className="mt-6 flex gap-4">
                  <button className="px-6 py-3 font-bold bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
                    Contact Us
                  </button>
                  <button className="px-6 py-3 border font-bold border-white text-white rounded-lg hover:bg-white hover:text-black transition">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="w-full h-screen bg-cover bg-center relative"
            style={{ backgroundImage: `url(${gathering})` }}
          >
            <div className="absolute inset-0 bg-black/40 flex items-center">
              <div className="px-6 md:px-20 lg:px-32 text-left text-white max-w-2xl">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                  Empowering{" "}
                  <span className="text-blue-400">Talents & Businesses</span>
                  <br /> for Lasting Success.
                </h1>
                <p className="mt-4 text-gray-200 text-sm md:text-lg">
                  We bridge the gap between top talents and employers through
                  customized strategies.
                </p>
                <div className="mt-6 flex gap-4">
                  <button className="px-6 py-3 font-bold bg-blue-900 text-white rounded-lg hover:bg-blue-700 transition">
                     Contact Us
                  </button>
                  <button className="px-6 py-3 border font-bold border-white text-white rounded-lg hover:bg-white hover:text-black transition">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="w-full h-screen bg-cover bg-center relative"
            style={{ backgroundImage: `url(${gathering})` }}
          >
            <div className="absolute inset-0 bg-black/40 flex items-center">
              <div className="px-6 md:px-20 lg:px-32 text-left text-white max-w-2xl">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                  Apex <span className="text-orange-400">Training & Support</span>
                  <br /> Built for Growth.
                </h1>
                <p className="mt-4 text-gray-200 text-sm md:text-lg">
                  Delivering customer service training, employee appraisals, and
                  onboarding support.
                </p>
                <div className="mt-6 flex gap-4">
                  <button className="px-6 py-3 font-bold bg-blue-900 text-white rounded-lg hover:bg-blue-700 transition">
                     Contact Us
                  </button>
                  <button className="px-6 py-3 border font-bold border-white text-white rounded-lg hover:bg-white hover:text-black transition">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
