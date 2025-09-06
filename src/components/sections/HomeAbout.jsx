import React from 'react'


export default function HomeAbout() {
  return (
            <section className="">
               <div className="py-3 md:py-16 px-6 md:px-20 lg:px-32">

                    {/* container */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                           {/* Left Content */}
                            <div>
                            <h4 className="text-orange-600 md:text-base font-semibold mb-2">
                                ABOUT US
                            </h4>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Apex HR & Recruitment Services
                            </h2>
                             <p className="text-gray-600 mb-6 md:text-xl leading-relaxed">
                                Our mission at <span className="font-semibold px-1">Apex Consulting Agency</span> 
                                is to provide our clients with world-class human resources and 
                                managerial solutions while upholding high levels of integrity, 
                                trust, and professionalism.
                            </p>
                            <a className="bg-red-500 text-white font-medium px-6 py-3 rounded-lg shadow hover:bg-red-600 transition">
                                About Us
                            </a>
                            </div>


                        <div className="h-84">

        {/* Right Services */}
        <div className="grid grid-cols-2 gap-8">
          <div className="text-center p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="text-red-500 text-4xl mb-3">👔</div>
            <h3 className="font-semibold text-lg">Executive Recruitment</h3>
            <a href="#" className="text-red-500 text-sm font-medium mt-2 inline-block">
              Learn more
            </a>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="text-red-500 text-4xl mb-3">👥</div>
            <h3 className="font-semibold text-lg">HR Outsourcing</h3>
            <a href="#" className="text-red-500 text-sm font-medium mt-2 inline-block">
              Learn more
            </a>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="text-red-500 text-4xl mb-3">🌍</div>
            <h3 className="font-semibold text-lg">Global Staffing</h3>
            <a href="#" className="text-red-500 text-sm font-medium mt-2 inline-block">
              Learn more
            </a>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="text-red-500 text-4xl mb-3">⚙️</div>
            <h3 className="font-semibold text-lg">HR Solutions</h3>
            <a href="#" className="text-red-500 text-sm font-medium mt-2 inline-block">
              Learn more
            </a>
          </div>
        </div>
                        </div>

                    </div>




               </div>
            </section>

  );
}