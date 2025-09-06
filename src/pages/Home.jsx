import LandingLayout from "../components/layouts/LandingLayout";
import Hero from "../components/sections/Hero";
import FaQ from "../components/sections/FaQ";
import PositionSection from "../components/sections/PositionSection";
import Industry from "../components/sections/Industry";
import HomeServices from "../components/sections/HomeServices";
import HomeAbout from "../components/sections/HomeAbout";


export default function Home() {
  return (
    <LandingLayout>
      <Hero />
      <HomeAbout/>
      <HomeServices/>
      <Industry/>
      <PositionSection />
      <FaQ />
      {/* Add more sections like Features, Testimonials later */}
    </LandingLayout>
  );
}
