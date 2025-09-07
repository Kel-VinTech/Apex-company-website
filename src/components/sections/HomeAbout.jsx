import React from 'react'
import mapImg from "../../assets/image/contracts.webp"
import handshake from "../../assets/image/shaking_hands.webp"



export default function HomeAbout() {
  return (
            <section className="pb-10">
               <div className="pt-20 md:pb-5 px-6 md:px-20 lg:px-32">



                  {/* first div */}
                  <div className="flex">
                     <h4 className="text-orange-600 md:text-base font-semibold mb-2">
                        ABOUT US
                     </h4>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2
                  lg:grid-cols-3 gap-4 pt-8 pb-20">


                        <div className="h-45 text-center p-6 bg-red-50 
                        rounded-sm shadow-sm hover:shadow-md transition">
                              <div className="flex flex-col items-center gap-2">
                                 <h1 className="text-xl font-bold py-2">OUR VISION</h1>
                                 <p className='text-gray-700'>Creating a customer-centric World</p>
                           
                              </div>
                           </div>

                           {/* 2 */}

                             <div className="h-45 text-center p-6 bg-red-50 
                        rounded-sm shadow-sm hover:shadow-md transition">
                              <div className="flex flex-col items-center gap-2">
                                 
                                 <h1 className="text-xl font-bold py-2">OUR MISSION</h1>
               
                                 <p className='text-gray-700'>To positively reshape the world of customer experience in every Nigerian mind</p>
      
                              </div>
                           </div>

                           {/* 3 */}

                             <div className="h-45 text-center  p-6 bg-red-50 
                                    rounded-sm shadow-sm hover:shadow-md transition">
                                    <div className="flex flex-col items-center gap-2">
                                       {/* <MdMiscellaneousServices size={45} className='text-orange-600' /> */}
                                       <div>
                                          <h1 className="text-xl font-bold py-2">CORE VALUES</h1>

                                          <div className="grid grid-cols-2 gap-6 text-gray-700">
                                          {/* Column 1 */}
                                          <ul className="list-disc pl-6 space-y-2 marker:text-red-500 text-left">
                                             <li>Love</li>
                                             <li>Empathy</li>
                                             <li>Respect</li>
                                          </ul>

                                          {/* Column 2 */}
                                          <ul className="list-disc pl-6 space-y-2 marker:text-red-500 text-left">
                                             <li>Integrity</li>
                                             <li>Innovativeness</li>
                                             <li>Consistency</li>
                                          </ul>
                                          </div>
                                       </div>
                                    </div>
                              </div>

                  </div>


                  {/* second div */}

                  <div className="grid grid-cols-1 md:grid-cols-2">

                     {/* 1 */}
                     <div className="h-96 bg-slate-900 text-white flex flex-col 
                        justify-between md:justify-center px-6 py-10 lg:gap-3 lg:px-10">
                           <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                              Connecting the Right Talent <br /> with the Right Companies<span className="text-orange-600">.</span>
                           </h2>
                           <p className="text-gray-300 mb-5 text-sm md:text-base ">
                              At <span className="font-semibold">Apex</span>, we take a proactive and personalized approach to recruitment and staffing. By engaging closely with both employers and candidates, we gain a deep understanding of career goals, skills, and organizational culture—ensuring every placement is a true win-win for long-term success.
                           </p>
                           <a href="/about" className="text-white font-medium hover:underline">
                              Learn more →
                           </a>
                     </div>

                     {/* 2 */}
                     <div className="h-64 md:h-96 bg-cover bg-center"
                        style={{
                           backgroundImage: `url(${handshake})`,
                        }}>
                     
                     </div>

                        {/* 3 */}

                     <div className="h-64 md:h-96 bg-cover bg-center order-last md:order-none"
                           style={{
                              backgroundImage: `url(${mapImg})`,
                           }}>
         
                     </div>
                              {/* 4 */}
                     <div className="h-96 bg-white text-black flex flex-col 
                        justify-center px-6 lg:px-10">
                           <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                              Benefits of Working with Apex<span className="text-orange-600">.</span>
                           </h2>
                           <ul className="list-disc pl-6 space-y-2 text-gray-700 marker:text-orange-600">
                              <li>Customer service–trained staff</li>
                              <li>Dependable and innovative Apex-hired staff</li>
                              <li>Improved employee retention</li>
                              <li>6-month guaranteed contracts with Apex-hired staff</li>
                              <li>Trusted guarantors</li>
                              <li>Sustainable recruitment age range (20–45 years)</li>
                           </ul>
                           
                     </div>



                  </div>
               </div>
            </section>

  );
}