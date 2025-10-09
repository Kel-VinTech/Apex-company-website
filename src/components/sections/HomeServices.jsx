import React from 'react'
import { MdMiscellaneousServices } from "react-icons/md";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { IoPeople } from "react-icons/io5";


export default function HomeServices() {
  return (
    <section className="bg-white">
      <div className="py-3 md:py-16 px-6 md:px-20 lg:px-32">

        {/* container */}
        <div className="grid pb-20 grid-cols-1 lg:grid-cols-[30%_70%] gap-7 items-start">

          {/* Left Content */}
          <div className=''>
            <h4 className="text-orange-600 md:text-lg font-semibold mb-7">
              OUR SERVICES
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Apex HR & Recruitment Services
            </h2>
            <p className="text-gray-600 mb-6 md:text-lg max-w-2xl pb-3">
              Our aim at <span className="font-semibold px-1">Apex Consulting Agency</span>
              is to provide our clients with world-class human resources and
              managerial solutions while upholding high levels of integrity,
              trust and professionalism.
            </p>
            <a href="/services" className="bg-orange-600  text-white font-medium px-6 py-3 rounded-lg shadow hover:bg-red-600 transition">
              Learn More
            </a>
          </div>


          {/* Right Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">



            {/* 1 */}


            <div className="h-85 md:h-96 text-center p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="flex flex-col items-start gap-2">
                <IoPeople size={45} className='text-orange-600' />
                <div className="flex flex-col justify-around gap-5">
                  <h1 className="text-xl lg:text-2xl font-bold py-4 text-blue-900">
                    Job Recruitment and Placement
                  </h1>

                  <ul className="list-disc text-left pl-6 space-y-6 md:text-lg text-gray-700">
                    <li>Match skilled applicants with job positions most suitable for them.</li>
                    <li>Extensive interview for qualified and skilled applicants.</li>
                  </ul>
                </div>

              </div>


            </div>

            {/* 2 */}

            <div className="h-75 md:h-96 text-center p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="flex flex-col items-start gap-2">
                <MdMiscellaneousServices size={45} className='text-orange-600' />
                <div className="flex flex-col justify-between gap-5">
                  <h1 className="text-xl lg:text-2xl font-bold py-4 text-blue-900">
                    Customer Service Training

                  </h1>

                  <ul className="list-disc text-left pl-6 md:text-lg space-y-4 text-gray-700">
                    <li>Base-level Customer Service Training.</li>
                    <li>Advanced-level Customer Service Training.</li>
                  </ul>
                </div>

              </div>


            </div>


            {/* 3 */}

            <div className="h-90 md:h-96 text-center p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="flex flex-col items-start gap-2">
                <LuChartNoAxesCombined size={45} className='text-orange-600' />
                <div className="">
                  <h1 className="text-xl lg:text-2xl font-bold py-4 text-blue-900">
                    Business Planning / Financial Analysis
                  </h1>

                  <ul className="text-left list-disc pl-5 md:text-lg space-y-3 text-gray-700">
                    <li>Employee Performance Review / Company Appraisal.</li>
                    <li>Company Management Culture / Operational Strategies </li>                    
                    <li>Company Proposals/ Profile Write-Up .</li>


                  </ul>
                </div>

              </div>


            </div>




          </div>





        </div>
      </div>
    </section>

  );
}