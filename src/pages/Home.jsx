import LandingLayout from "../components/layouts/LandingLayout";
import Hero from "../components/sections/Hero";

export default function Home() {
  return (
    <LandingLayout>
      <Hero />
      {/* Add more sections like Features, Testimonials later */}
    </LandingLayout>
  );
}
