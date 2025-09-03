import LandingLayout from "../components/layouts/LandingLayout";
import Hero from "../components/sections/Hero";
import FaQ from "../components/sections/FaQ";


export default function Home() {
  return (
    <LandingLayout>
      <Hero />
      <FaQ />
      {/* Add more sections like Features, Testimonials later */}
    </LandingLayout>
  );
}
