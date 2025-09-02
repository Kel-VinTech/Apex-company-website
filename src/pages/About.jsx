// src/pages/About.jsx
import LandingLayout from "../components/layouts/LandingLayout";
import Button from "../../src/components/elements/Button";

import { BsFlagFill } from "react-icons/bs";
import { SiFurrynetwork } from "react-icons/si";
import { BiSolidDoorOpen } from "react-icons/bi";
import { TiTick } from "react-icons/ti";


import lady1 from "../../src/assets/image/lady1.webp"
import standing from "../../src/assets/image/ladyred.webp"
import gathering from "../../src/assets/image/gathering.webp"
import interview from "../../src/assets/image/standinglady.webp"
import deskman from "../../src/assets/image/desk_man.webp"
import womentogether from "../../src/assets/image/business_women.webp"
import aboutImage from "../../src/assets/image/disccsuion.webp"


export default function About() {
  return (
    <LandingLayout>
      <section className="">
          <div
            className="w-full h-[30vh] md:h-[40vh] flex items-center justify-center
             bg-cover bg-center bg-black/60 bg-blend-multiply"
            style={{
            backgroundImage: `url(${aboutImage})`,
            }}>
      
              <h1 className="mt-20 text-2xl md:text-3xl text-white font-bold">About Us</h1>
        </div>

        <div className="py-10 md:py-28 px-6 md:px-20 lg:px-32">


            {/* first content */}
          <div className="flex flex-col lg:flex-row justify-between
           gap-10 md:gap-20 lg:gap-10">
            
            {/* LEFT: Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
              <div className="bg-cover bg-center rounded-2xl row-span-3 min-h-[450px] md:min-h-[500px]"
                  style={{
                    backgroundImage: `url(${lady1})`,
                    }}>
              </div>

              <div className="bg-cover bg-center rounded-2xl md:row-span-2 min-h-[300px] md:min-h-[350px]"
                    style={{
                    backgroundImage: `url(${womentogether})`,
                    }}>
              </div>

              <div className="bg-cover bg-center rounded-2xl min-h-[200px] 
                md:min-h-[220px]"
                  style={{
                        backgroundImage: `url(${standing})`,
                        }}>
              </div>

              <div className="bg-blue-900 flex px-8 flex-col
               items-start justify-center gap-3 rounded-2xl min-h-[200px]">
                    <h1 className="text-white font-bold">OUR MISSION</h1>
                    <p className="text-white font-normal">To positively reshape the world of customer experience in every Nigerian’s mind. </p>
              </div>
            </div>

            {/* RIGHT: Text */}
            <div className="flex flex-col gap-6 flex-1">
              <h2 className="font-bold text-sm text-orange-600">ABOUT US</h2>
              <h1 className="font-bold text-lg md:text-3xl text-gray-700">
                At Apex Consulting Agency, we are more than just recruiters 
              </h1>
              <p className="text-base md:text-lg text-gray-700">
                Apex Consulting Agency is a full-service 
                recruitment and HR consulting firm based in Benin City, Nigeria. We help businesses
                 build exceptional teams through recruitment, onboarding, and strategic HR support.
              </p>
              <p className="text-base md:text-lg text-gray-700">
                We go beyond recruitment—helping you strengthen your workforce 
                and achieve your company’s vision.
              </p>
              <Button variant="secondary" href="https://wa.link/hvtcik">Contact Us
              </Button>

              <div
                  className="w-full h-[42vh] rounded-lg
                      bg-cover bg-center"
                    style={{
                    backgroundImage: `url(${gathering})`,
                    }}>
                </div>
            </div>

          </div>




        </div>


        {/* second content */}
        <div className="bg-slate-100 ">
          <div className="py-5 md:py-20 px-6 md:px-20 lg:px-32">

            <h2 className="font-bold py-5 text-sm text-orange-600">OUR SERVICES</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

              {/* First content: takes 2/3 of the width */}
              <div className="flex flex-col
                min-h-[350px] md:min-h-[500px] 
                md:col-span-2 gap-5 text-white justify-between">

                <h1 className="text-blue-900 md:text-3xl font-bold">
                      Experienced recruiters specialized in finding the right executive talent.  </h1>

                <div className="flex flex-col justify-between md:flex-row gap-10">


                  <div className="text-black flex flex-col justify-between 
                  md:justify-around h:60 gap-5">

                    <div className="flex items-start flex-row gap-3 mb-3">
                      <span>
                        <SiFurrynetwork className="font-bold mt-1 text-orange-600" />
                      </span>
                      <span className="flex flex-col gap-2">
                        <h3 className="text-sm lg:text-base font-bold">Recruitment & Onboarding</h3>
            
                        <p className="text-sm lg:text-base">We help you find and integrate 
                          the right talent seamlessly into your team.
                      </p>
                      </span>
                    </div>

                     <div className="flex flex-row
                      gap-3 mb-3">
                      <span>
                        <BsFlagFill className="font-bold mt-1 text-orange-600" />

                      </span>
                      <span className="flex flex-col gap-2">
                        <h3 className="text-sm lg:text-base font-bold">Policy & Proposal Writing </h3>
            
                        <p className="text-sm lg:text-base">Clear, professional
                           documentation that strengthens workplace structure. 
                      </p>
                      </span>
                    </div>

                     <div className="flex flex-row gap-3 mb-3">
                      <span>
                        <BiSolidDoorOpen className="mt-1 text-orange-600"/>

                      </span>
                      <span className="flex flex-col gap-2">
                        <h3 className="text-sm lg:text-base  font-bold">Customer Service Training</h3>
            
                        <p className="text-sm lg:text-base">We equip your team to deliver
                           exceptional customer experiences at every level. 
                      </p>
                      </span>
                    </div>

                  </div>

                  <div className="h-70 md:h-96  md:w-130 lg:w-130 rounded-lg p-4 bg-blue-900 text-white">
                      <div className="flex gap-2 md:py-3 flex-col justify-around h-full">
                        
                          <p className="text-sm">Our expert recruitment services and well-tailored training programs empower
                             individuals and organisations to reach their full potential, 
                             drive growth, innovativeness and 
                             success while creating a customer-centric world.
                            </p>

                            <p className="text-sm">At Apex Consulting,
                                  we bridge the gap
                                 between talents and opportunities.</p>

                           <span className="flex flex-row items-center gap-1">
                            <TiTick className="text-white" />
                            <h2 className="text-sm">Staff Retention</h2>
                           </span>

                           <span className="flex flex-row items-center gap-1">
                            <TiTick className="text-white" />
                            <h2 className="text-sm">Staff Longevity</h2>
                           </span>
                      </div>
                  </div>

                  
                </div>
              </div>

              {/* Second content: takes 1/3 of the width */}
              <div className="min-h-[350px] md:min-h-[500px]
               w-full h-[30vh] rounded-lg bg-cover bg-center "
                style={{
                backgroundImage: `url(${deskman})`,
                }}>
              </div>
            </div>




          </div>
          

        </div>

        

        {/* third content */}

          <div className="bg-white py-15 md:py-30 px-6 
            md:px-20 lg:px-32">
              {/* container */}
              <div className="grid md:grid-cols-3 gap-10">
                {/* first div: smaller width */}
                <div className="col-span-1 bg-cover bg-center md:w-[250px] lg:w-full
                rounded-2xl h-[300px] md:min-h-[660px] lg:min-h-[600px]" style={{
                    backgroundImage: `url(${interview})`,
                    }}>
                </div>

                {/* second div: larger width */}
                <div className="md:col-span-2 min-h-[300px] md:min-h-[350px]">
                  

                  <div className="flex flex-col gap-6">
                    {/* first item */}
                    <div className="flex flex-col gap-4">
                        <h2 className="font-bold text-sm text-orange-600">OUR STRUCTURE</h2>
                        <h1 className="text-blue-900 md:text-3xl font-bold">
                          Enhancing Business Performance Through Customer Care Excellence.
                        </h1>
                        <p>Apex Customer Service training has over time 
                          reshaped the overall view of customer service/ service delivery.
                           Since 2020 we have been servicing the critical 
                          needs of sectors in companies where customer service care is paramount.</p>

                    </div>
                    {/* second item */}

                                {/* second item */}
                      <div className="grid md:grid-cols-2 gap-4 lg:text-base ">
                            <div className="bg-gray-100 min-h-[200px] lg:min-h-[210px]
                            rounded-xl flex hover:bg-blue-900 hover:text-white
                             items-center justify-center px-4 lg:px-10 shadow-md ">
                                <p className="md:text-sm lg:text-base  font-medium"> We train our staff on customer service/service delivery, 
                                  team spirit, communication, organizational, flexibility, and adaptability skills
                                 .</p>
                             </div>

                            <div className="bg-gray-100 rounded-xl flex min-h-[200px] lg:min-h-[210px]
                            items-center justify-center px-4 lg:px-10 hover:bg-blue-900 hover:text-white
                            shadow-md">
                              <p className="md:text-sm lg:text-base font-medium">Staff are hired through a detailed recruitment 
                                process to ascertain hiring the right skills for the job.</p>
                            </div>

                            <div className="bg-gray-100 rounded-xl min-h-[200px] lg:min-h-[210px]
                             flex items-center justify-center lg:px-10 px-4 hover:bg-blue-900 hover:text-white
                              shadow-md">
                                <p className="md:text-sm lg:text-base font-medium">
                                  Subsequent training will be provided to 
                                  continuously sharpen and improve staff customer service skills.
                                </p>
                             </div>


                            <div className="bg-gray-100 rounded-xl min-h-[200px] lg:min-h-[210px]
                            flex items-center justify-center lg:px-10 px-4 hover:bg-blue-900 hover:text-white
                            shadow-md">

                               <p className="md:text-sm lg:text-base font-medium">
                                Our team is trained to deliver excellent customer service, 
                                ensuring a positive experience for both clients and candidates.
                               </p>
                            </div>
                      </div>
                  </div>

                  </div>

              </div>



          </div>

      </section>
       
    </LandingLayout>
  );
}










