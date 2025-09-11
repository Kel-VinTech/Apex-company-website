
import { cardData } from "../../utils/CardData";

// components/CardSlider.jsx


// components/CardSlider.jsx
// components/CardSlider.jsx

// components/CardSlider.jsx

// import { cardData } from "../../utils/CardData";
// components/CardSlider.jsx
// components/CardSlider.jsx

// components/CardSlider.jsx

// components/CardSlider.jsx
// "use client"; // <--- If you're using Next.js app-router: REQUIRED

// "use client";

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// export default function CardSlider() {
//   return (
//     <div className="w-full max-w-full lg:px-10 py-2">
//       <Swiper
//         modules={[Autoplay, Pagination, Navigation]}
//         spaceBetween={20}
//         loop={true}
//         autoplay={{ delay: 4000, disableOnInteraction: false }}
//         speed={800}
//         // pagination={{
//         //   clickable: false,
//         //   bulletClass:
//         //     "swiper-pagination-bullet bg-gray-400 opacity-60 w-3 h-3 rounded-full",
//         //   bulletActiveClass:
//         //     "swiper-pagination-bullet-active bg-blue-600 opacity-100 w-3 h-3",
//         // }}
//         navigation={true} // ✅ default Swiper arrows
//         breakpoints={{
//           0: { slidesPerView: 1 },
//           768: { slidesPerView: 1 },
//           1024: { slidesPerView: 2 },
//         }}
//         className="relative pb-16"
//       >
//         {cardData.map((card) => (
//           <SwiperSlide key={card.id}>
//             <div>
//               <img
//                 src={card.image}
//                 alt={card.title}
//                 className="min-h-[300px] md:min-h-[400px] bg-center bg-cover rounded-lg mb-5"
//               />
//               <h2 className="text-xl md:text-2xl font-bold mb-1 mx-3 text-blue-900">
//                 {card.title}
//               </h2>
//             </div>
//           </SwiperSlide>
//         ))}

//         {/* ✅ Pagination + Navigation inside but below */}
//       </Swiper>
//     </div>
//   );
// }


"use client";
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function CardSlider() {
  return (
    <div className="w-full max-w-full lg:px-10 py-2">
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={800}
        navigation={true} // ✅ default arrows
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
        }}
        className="relative"
      >
        {cardData.map((card) => (
          <SwiperSlide key={card.id}>
            <div>
              <img
                src={card.image}
                alt={card.title}
                className="min-h-[300px] md:min-h-[400px] w-full object-cover rounded-lg mb-3"
              /> 
              <h2 className="text-xl md:text-2xl font-bold mx-2">{card.title}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}



