import React from 'react'
import CardSlider from "../../components/cards/CardSlider"
import Button from "../../components/elements/Button";


const PositionSection = () => {
  return (
    <section className="py-10 md:py-16 px-6 md:px-20 lg:px-32 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-[20%_80%] gap-10 items-start">
        {/* Left Text Section */}
        <div className="flex flex-col h-full text-center pt-10 gap-5 lg:text-left items-center lg:items-start">
          <h1 className="text-2xl md:text-2xl font-bold text-blue-900 mb-4">
            POSITIONS WE RECRUIT FOR
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6 max-w-lg">
            At Apex Consulting Agency, we connect top talents to the most suitable
            opportunities. Whether you are looking to take the next step in your
            career or finding the perfect employee for your business, we are here to assists you.
          </p>
          <Button variant='services' href="https://wa.link/hvtcik" className="bg-orange-600 text-gray-200 px-6 py-2 rounded-full hover:bg-red-600 transition">
            Find a Job
          </Button>
        </div>

        {/* Right Card Slider */}
        <div className="h-full">
          <CardSlider />
        </div>
      </div>
    </section>
  );
};

export default PositionSection;

