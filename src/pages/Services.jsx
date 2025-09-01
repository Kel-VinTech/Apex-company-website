import LandingLayout from "../components/layouts/LandingLayout";
import Button from "../../src/components/elements/Button";


import agreement from "../../src/assets/image/bg_contact.webp"
import workingGirl from "../../src/assets/image/working_girl.webp"
import workingLady from "../../src/assets/image/recruitment.webp"
import teamTalk from "../../src/assets/image/teamwork-creat.webp"
import businessTalk from "../../src/assets/image/office-hall.webp"
import heroImage from "../../src/assets/image/agency.webp"
import companyGrowth from "../../src/assets/image/optimizing-code.webp"

import { IoBarChartSharp } from "react-icons/io5";
import { MdModelTraining } from "react-icons/md";



export default function Services() {
  return (
    <LandingLayout>
      <section className="">

        <div
         className="w-full h-[30vh] md:h-[40vh] flex items-center  justify-center
             bg-cover bg-center bg-black/60 bg-blend-multiply"
            style={{
              backgroundImage: `url(${heroImage})`,
            }}>
      
              <h1 className="mt-20 text-2xl md:text-3xl text-white font-bold">Our Services</h1>
        </div>


                {/* first main content */}
         <div className=" flex flex-col justify-center pt-20 md:pt-28 pb-15 px-6 
            md:px-20 lg:px-32">


            {/* heading content */}
            <div className="flex flex-col items-center justify-center gap-5">
                  <h1 className="text-center text-3xl font-bold mb-4 items-center
                   text-gray-800">Your Future with Apex Consulting</h1>

                   <p className="text-gray-800 text-center text-base md:text-lg leading-relaxed max-w-2xl">
                      At Apex Consulting, we specialize in connecting skilled candidates with leading employers. 
                      Our mission is to strengthen businesses by providing top talent and strategic HR solutions.
                    </p>

            </div>

            {/* second content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-15 mt-12 mb-10">
              <div className="min-h-[250px] md:min-h-[300px]">
                      {/* content */}
                  <div className="flex flex-col items-center justify-center gap-2">
                    <div
                      className="w-full h-[30vh] rounded-lg mb-6 md:h-[45vh] flex items-center  justify-center
                      bg-cover bg-center bg-blend-multiply"
                      style={{
                       backgroundImage: `url(${workingGirl})`,
                      }}>
                  </div>
                      <h1 className="md:mb-4 text-2xl md:text-3xl text-black font-bold">Why Choose Apex?</h1>
                      <p className="text-center text-base text-gray-800">We don’t just recruit — we help you build a stronger, more effective workplace culture.</p>

                  </div>
              </div>

                {/* 2 */}

                <div className="min-h-[250px] md:min-h-[300px]">
                      {/* content */}
                  <div className="flex flex-col items-center justify-center gap-2">
                    <div
                      className="w-full h-[30vh] mb-6 md:h-[45vh] flex items-center  justify-center
                      bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${teamTalk})`,
                      }}>
                  </div>
                      <h1 className="md:mb-4 text-2xl md:text-3xl text-center text-black font-bold">Our Recruitment Process Simplified</h1>
                      <p className="text-center text-base text-gray-800">Work with us to attract, train, and retain the best talent for your organization.</p>

                  </div>
              </div>

              {/* 3 */}

              <div className="min-h-[250px] md:min-h-[300px]">
                      {/* content */}
                  <div className="flex flex-col items-center justify-center gap-2">
                    <div
                      className="w-full h-[30vh] mb-6 md:h-[45vh] flex items-center  justify-center
                      bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${businessTalk})`,

                      }}>
                  </div>
                      <h1 className="md:mb-4 text-2xl md:text-3xl text-black font-bold">Partner with Apex Consulting</h1>
                      <p className="text-center text-base text-gray-800">Work with us to attract, train, and retain the best talent for your organization.</p>

                  </div>
              </div>


              
            </div>

        </div>

        {/* second main content */}

        <div
         className="w-full h-[20vh] md:h-[18vh] flex items-center justify-center
             bg-cover bg-center bg-black/60 bg-blend-multiply mb-20" 
            style={{
              backgroundImage: `url(${agreement})`,
            }}>
              
              <div className="flex flex-col items-center justify-center gap-2">
                    <h1 className="text-sm md:text-2xl text-white font-bold">OUR TALENT IS FINDING YOURS</h1>
                    <span className="flex flex-row md:flex-row items-center justify-center gap-4 md:gap-6 mt-4">
                    <Button variant="services">Find a Candididte</Button>
                      <Button variant="services">Find a Job</Button>
                    </span>

              </div>
        </div>

       {/* last main content  */}
        
        <div className="flex flex-col justify-center pb-15 px-6 
            md:px-20 lg:px-32">
            
            {/* heading content */}
            <div className="flex flex-col items-center justify-center gap-5">
                  <h1 className="text-center text-3xl font-bold items-center
                   text-gray-800">Your Apex Consulting Journey</h1>
                   <p className="text-center text-lg"> Tailored recruitment and training solutions for businesses and talents.</p>
              </div>


            {/* second content */}
            


            <div className="grid pb-70 pt-10 md:pt-20 md:pb-20 grid-cols-1 lg:grid-cols-2 gap-6 auto-rows-[200px]">
                  {/* Box 1 - Tall left with 2 equal parts */}
                  <div className="border border-blue-900 rounded-xl overflow-hidden row-span-2 flex flex-col
                   divide-y divide-gray-200">
                    <div className="p-6 gap-3 flex-1 md:gap-3 flex flex-col">
                      <h3 className="font-bold">Recruitment</h3>
                      <h2 className="text-xl md:text-3xl font-bold">Comprehensive Talent Acquisition Services </h2>
                      <p className="text-gray-600 mt-2">
                          Matching skilled applicants with the right roles 
                          through extensive interviews and assessments.                        </p>
                    </div>
                    <div className="flex- p-6 w-full h-full
                        bg-cover bg-center" 
                        style={{
                          backgroundImage: `url(${workingLady})`,
                        }}>
                    </div> 
                  </div>

                  {/* Box 2 - Top right */}
                  <div className="border border-blue-900 rounded-xl p-5 gap-3 md:gap-4 flex flex-col">
                    <h3 className="font-bold">Rebranding</h3>
                    <h2 className="text-lg md:text-3xl font-bold">Rebranding & Business Structuring</h2>
                    <p className="text-gray-600 mt-2">
                      Helping businesses redefine their identity while building 
                      solid structures that drive efficiency, growth, and long-term success.
                    </p>
                  </div>

                  {/* Box 4 - Tall right with 2 equal parts */}
                  <div className="border border-blue-900 rounded-xl 
                  overflow-hidden row-span-2 flex flex-col divide-y divide-gray-200">

                    <div className="flex flex-col p-6 flex-1 gap-3 md:gap-3">
                      <h3 className="font-bold">Growth</h3>
                      <h2 className="text-lg md:text-3xl font-bold"> Company Profile & Financial Analysis</h2>
                      <p className="text-gray-600">
                        Creating compelling company profiles and delivering in-depth financial analysis for smarter decisions.
                      </p>
                    </div>
                    <div className="flex-2 p-6 w-full h-full
                        bg-cover bg-cente" 
                        style={{
                          backgroundImage: `url(${companyGrowth})`,
                        }}>
                    </div> 
          

                  </div>

                  {/* Box 3 - Bottom left */}
                  <div className="w-full rounded-xl mb-10">
                    <div className="flex flex-col md:flex-row gap-4">

                      <div className="flex flex-col gap-3 border
                       border-blue-900 rounded-xl p-6">
                        <span><MdModelTraining size={25} /></span>
                        <h2 className="text-lg font-bold">Customer Service Training</h2>
                          <p className="text-gray-600 mt-2">
                            Equipping staff with practical skills to deliver 
                            outstanding customer service and elevate client satisfaction.
                          </p>
                      </div>
                          
                        <div className="flex flex-col gap-3 border
                         border-blue-900 rounded-xl p-6">
                          <span><IoBarChartSharp size={25} /></span>
                          <h2 className="text-lg font-bold">Performance & Company Appraisals</h2>
                            <p className="text-gray-600">
                              Implementing employee review strategies and business
                               appraisals (monthly, quarterly, bi-annually, annually) to track progress.
                            </p>
                      </div>

                    </div>
                  </div>
                </div>


















        </div>



      </section>
    </LandingLayout>
  );
}
