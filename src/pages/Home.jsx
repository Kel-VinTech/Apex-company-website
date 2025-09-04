import LandingLayout from "../components/layouts/LandingLayout";
import Hero from "../components/sections/Hero";
import FaQ from "../components/sections/FaQ";
import PositionSection from "../components/sections/PositionSection";
import Industry from "../components/sections/Industry";


export default function Home() {
  return (
    <LandingLayout>
      <Hero />
      <Industry/>
      <PositionSection />
      <FaQ />
      {/* Add more sections like Features, Testimonials later */}
    </LandingLayout>
  );
}
