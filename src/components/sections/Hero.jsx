// src/components/sections/Hero.jsx
import Button from "../elements/Button";
import HeroTextSlider from "../../components/elements/HeroTextSlider";


import lady1 from "../../assets/image/lady1.webp"
import gathering from "../../assets/image/gathering.webp"


export default function Hero() {
  return (
    <section>
      

      <div className="relative py-30 px-6 
        md:px-20 lg:px-32 w-full">
  {/* Hero Content */}
  <div className="text-center max-w-3xl mx-auto mb-12">
        <HeroTextSlider />

  </div>

  {/* Grid Layout */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px]">
  {/* Box 1 */}
  <div className="rounded-xl bg-cover bg-center"
        style={{
        backgroundImage: `url(${lady1})`,
        }}>
  </div>

  {/* Box 2 */}
  <div className="rounded-xl bg-cover bg-center"
        style={{
        backgroundImage: `url(${lady1})`,
        }}>
  </div>

  {/* Box 4 (tall block) */}
  <div className="rounded-xl p-4 md:row-span-2 bg-cover bg-center"
        style={{
        backgroundImage: `url(${lady1})`,
        }}></div>

  {/* Box 5 */}
  <div className="rounded-xl p-4 order-1 md:order-none bg-cover bg-center"
        style={{
        backgroundImage: `url(${lady1})`,
        }}>
  </div>

  {/* Box 6 — sits under Box 5 on md */}
  <div className="rounded-xl p-4 order-2 md:order-none lg:order-2 bg-cover bg-center"
        style={{
        backgroundImage: `url(${lady1})`,
        }}>
  </div>

  {/* Box 3 (wide on md, normal on lg) */}
  <div className="rounded-xl p-4 md:col-span-2 lg:col-span-2 bg-cover bg-center"
        style={{
        backgroundImage: `url(${gathering})`,
        }}></div>
  
</div>





      </div>



    </section>
  );
}
