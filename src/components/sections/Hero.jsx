// src/components/sections/Hero.jsx
import Button from "../elements/Button";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center bg-cover bg-center overflow-hidden
        bg-black/60 bg-blend-multiply"
      style={{
        backgroundImage:
          "url(src/assets/image/authentic-small-youthful-marketing-agency.jpg)",
      }}
    >
      <div className=" flex flex-col items-start justify-center py-4 px-6 
        md:px-20 lg:px-32">
        <h3 className="text-xl font-bold mb-2 text-gray-600">Welcome to Apex Recruitment Agency</h3>
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Connecting Talents,
          Building Careers
        </h1>
        <p className="text-lg text-gray-600 mb-6 max-w-xl">
          We help you build modern and fast websites using React and Tailwind CSS.
        </p>
        <Button variant= "secondary">
          Get Started
        </Button>
      </div>
    </section>
  );
}
