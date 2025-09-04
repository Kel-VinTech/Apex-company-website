import React from 'react'

export default function Industry() {
  return (
       <section className="py-10 md:py-16 px-6 md:px-20 lg:px-32 bg-white">


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
                <p className="text-orange-600 font-bold text-xl leading-none">24</p>
              </div>

              {/* Left-aligned Content */}
              <div className="flex flex-col gap-4 text-left">
                {/* Category Tag */}
                <h2 className="  text-gray-600 text-lg font-bold py-3">
                    Hospitality
                </h2>

                  <p className="text-gray-600 text-sm">Hotels</p>
                  <p className="text-gray-600 text-sm">Bars</p>
                  <p className="text-gray-600 text-sm">Lounges</p>
                  <p className="text-gray-600 text-sm">Restaurants</p>
                  <p className="text-gray-600 text-sm">Laundromats</p>



                {/* Apply Link */}
                <a
                  href="#"
                  className="text-red-500 font-medium hover:underline text-sm"
                >
                  Apply now
                </a>
              </div>
            </div>




                <div className="h-85 md:h-85 rounded-xl shadow-md p-6">hello</div>
                <div className="h-85 md:h-85 rounded-xl shadow-md p-6">hello</div>


                <div className="h-85 md:h-85 rounded-xl border shadow-md p-6">hello</div>



             </div>





        </div>
         


       </section>

  );
}
