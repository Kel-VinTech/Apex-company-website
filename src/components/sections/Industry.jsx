import React from 'react'
import { RiHospitalFill } from "react-icons/ri";
import { FaStore } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { BsBank } from "react-icons/bs";


export default function Industry() {
  return (
       <section className="py-10 md:py-16 px-6 md:px-20 lg:px-32 bg-slate-50">


        {/* container */}
        <div className="grid">
          {/* text */}
          <div className="flex flex-col h-full text-center pt-10 gap-3 items-center">
              <h1 className="text-2xl md:text-2xl font-bold text-blue-900 mb-4">
                  INDUSTRIES WE CATER TO
              </h1>
              <p className="md:text-lg text-gray-600 leading-relaxed mb-2 max-w-lg">
                 At Apex, we specialize in serving diverse industries with 
                  tailored recruitment solutions. From finance and healthcare to technology 
                  and marketing, we connect businesses with top talent that drives success.
              </p>
              
          </div>


          {/* grid content */}

           <div className="grid gap-6 pt-8 md:text-base grid-cols-1
             md:grid-cols-2 lg:grid-cols-4">

                {/* <div className="h-85 md:h-85 rounded-xl border shadow-md">
                  <span className='shadow-md px-4 pb-5 pt-1 rounded-xs text-center bg-blue-200'>20</span>
                </div> */}

            <div className="relative bg-white shadow-md rounded-xl 
            p-6 w-full max-w-sm h-85 md:h-85 flex flex-col justify-center">

              {/* Date Badge */}
              <div className="absolute top-0 right-0 text-center bg-white shadow-md rounded-bl-md px-6 py-6">
                <span className="text-orange-600 font-bold text-xl leading-none"><RiHospitalFill size={28}/></span>
              </div>

              {/* Left-aligned Content */}
              <div className="flex flex-col gap-3 text-left">
                {/* Category Tag */}
                <h2 className="  text-gray-600 text-lg font-bold py-3">
                    Hospitality
                </h2>

                  <p className="text-gray-600 text-base">Hotels</p>
                  <p className="text-gray-600 text-base">Bars</p>
                  <p className="text-gray-600 text-base">Lounges</p>
                  <p className="text-gray-600 text-base">Restaurants</p>
                  <p className="text-gray-600 text-base">Laundromats</p>


                {/* Apply Link */}
                <a
                  href="#"
                  className="text-red-500 pt-4 font-medium hover:underline text-base"
                >
                  Apply now
                </a>

              </div>
            </div>

            {/* 2 */}
             <div className="relative bg-white shadow-md rounded-xl 
            p-6 w-full max-w-sm h-85 md:h-85 flex flex-col justify-center">

              {/* Date Badge */}
              <div className="absolute top-0 right-0 text-center bg-white shadow-md rounded-bl-md px-6 py-6">
                <span className="text-orange-600 font-bold text-xl leading-none"><FaStore size={28} /></span>
              </div>

              {/* Left-aligned Content */}
              <div className="flex flex-col gap-3 text-left">
                {/* Category Tag */}
                <h2 className="  text-gray-600 text-lg font-bold py-3">
                    Retail
                </h2>

                  <p className="text-gray-600 text-base">Supermarkets</p>
                  <p className="text-gray-600 text-base">Pharmacies</p>

                {/* Apply Link */}
                <a
                  href="#"
                  className="text-red-500 pt-4 font-medium hover:underline text-base"
                >
                  Apply now
                </a>
                
              </div>
            </div>

            {/* 3 */}
            <div className="relative bg-white shadow-md rounded-xl 
            p-6 w-full max-w-sm h-85 md:h-85 flex flex-col justify-center">

              {/* Date Badge */}
              <div className="absolute top-0 right-0 text-center bg-white shadow-md rounded-bl-md px-6 py-6">
                <span className="text-orange-600 font-bold text-xl leading-none"><IoSchoolSharp size={28} /></span>
              </div>

              {/* Left-aligned Content */}
              <div className="flex flex-col gap-3 text-left">
                {/* Category Tag */}
                <h2 className="  text-gray-600 text-lg font-bold py-3">
                    Education
                </h2>

                  <p className="text-gray-600 text-base">Montessori</p>
                  <p className="text-gray-600 text-base">Primary schoool</p>
                  <p className="text-gray-600 text-base">Secondary school</p>



                {/* Apply Link */}
                <a
                  href="#"
                  className="text-red-500 pt-4 font-medium hover:underline text-base"
                >
                  Apply now
                </a>
                
              </div>
            </div>

            {/* 4 */}

            <div className="relative bg-white shadow-md rounded-xl 
            p-6 w-full max-w-sm h-85 md:h-85 flex flex-col justify-center">

              {/* Date Badge */}
              <div className="absolute top-0 right-0 text-center bg-white shadow-md rounded-bl-md px-6 py-6">
                <span className="text-orange-600 font-bold text-xl leading-none"><BsBank  size={28} /></span>
              </div>

              {/* Left-aligned Content */}
              <div className="flex flex-col gap-3 text-left">
                {/* Category Tag */}
                <h2 className="  text-gray-600 text-lg font-bold py-3">
                    Finance
                </h2>

                  <p className="text-gray-600 text-base">Microfinance Banks</p>
                  <p className="text-gray-600 text-base">Insurance Companies</p>
                  <p className="text-gray-600 text-base">Finance Houses</p>


                {/* Apply Link */}
                <a
                  href="#"
                  className="text-red-500 pt-4 font-medium hover:underline text-base"
                >
                  Apply now
                </a>
                
              </div>
            </div>





             </div>





        </div>
         


       </section>

  );
}
