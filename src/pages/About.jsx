// src/pages/About.jsx
import LandingLayout from "../components/layouts/LandingLayout";
import Button from "../../src/components/elements/Button";
import serviceImage from "../../src/assets/image/bg_contact.jpg"

import { BsFlagFill } from "react-icons/bs";
import { SiFurrynetwork } from "react-icons/si";
import { BiSolidDoorOpen } from "react-icons/bi";
import { TiTick } from "react-icons/ti";




export default function About() {
  return (
    <LandingLayout>
      <section className="">
          <div
            className="w-full h-[30vh] flex items-center  justify-center
             bg-cover bg-center bg-black/60 bg-blend-multiply"
            style={{
            backgroundImage:"url(src/assets/image/authentic-small-youthful-marketing-agency.jpg)",
            }}>
      
              <h1 className="mt-20 text-2xl md:text-3xl text-white font-bold">About Us</h1>
        </div>

        <div className="py-20 px-6 md:px-20 lg:px-32">


            {/* first content */}
          <div className="flex flex-col lg:flex-row justify-between
           gap-10 md:gap-20 lg:gap-10">
            
            {/* LEFT: Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
              <div className="bg-cover bg-center rounded-2xl row-span-3 min-h-[400px] md:min-h-[500px]"
                  style={{
                    backgroundImage: `url(${serviceImage})`,
                    }}>
              </div>

              <div className="bg-cover bg-center rounded-2xl md:row-span-2 min-h-[300px] md:min-h-[350px]"
                    style={{
                    backgroundImage: `url(${serviceImage})`,
                    }}>
              </div>

              <div className="bg-cover bg-center rounded-2xl min-h-[200px]"
                  style={{
                        backgroundImage: `url(${serviceImage})`,
                        }}>
              </div>

              <div className="bg-blue-900 flex px-8 flex-col
               items-start justify-center gap-3 rounded-2xl min-h-[200px]">
                    <h1 className="text-white font-bold">15 years experinces</h1>
                    <p className="text-white font-normal">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, voluptatem?</p>
              </div>
            </div>

            {/* RIGHT: Text */}
            <div className="flex flex-col gap-6 flex-1">
              <h2 className="font-bold text-sm text-orange-600">ABOUT US</h2>
              <h1 className="font-bold text-lg md:text-3xl text-gray-700">
                At Apex Consulting Agency, we are more than just recruiters 
              </h1>
              <p className="text-sm md:text-base text-gray-700">
                With over 15 years of experience, we specialize in connecting top-tier talent with leading companies across industries. 
              </p>
              <p className="text-sm md:text-base text-gray-700">
                We go beyond recruitment—helping you strengthen your workforce 
                and achieve your company’s vision.
              </p>
              <Button variant="secondary">Contact Us
              </Button>

              <div
                  className="w-full h-[30vh] rounded-lg
                      bg-cover bg-center "
                    style={{
                    backgroundImage: `url(${serviceImage})`,
                    }}>
                </div>
            </div>

          </div>




        </div>


        {/* second content */}
        <div className="bg-slate-100 ">
          <div className="py-10 md:py-20 px-6 md:px-20 lg:px-32">

            <h2 className="font-bold py-5 text-sm text-orange-600">OUR SERVICES</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

              {/* First content: takes 2/3 of the width */}
              <div className="flex flex-col
                min-h-[350px] md:min-h-[500px] 
                md:col-span-2 gap-5 text-white justify-between">

                <h1 className="text-blue-900 md:text-3xl font-bold">Experinced recruiters speacilizes in finding
                  the right executive talent

                </h1>

                <div className="flex flex-col justify-between md:flex-row gap-10">


                  <div className="text-black flex flex-col justify-between 
                  md:justify-around h:60 gap-5">

                    <div className="flex items-start flex-row gap-3 mb-3">
                      <span>
                        <SiFurrynetwork className="font-bold mt-1 text-orange-600" />
                      </span>
                      <span className="flex flex-col gap-2">
                        <h3 className="text-sm lg:text-base font-bold">Talent Acquisition</h3>
            
                        <p className="text-xs lg:text-sm">We build tailored web solutions 
                          that align with your business 
                      </p>
                      </span>
                    </div>

                     <div className="flex flex-row
                      gap-3 mb-3">
                      <span>
                        <BsFlagFill className="font-bold mt-1 text-orange-600" />

                      </span>
                      <span className="flex flex-col gap-2">
                        <h3 className="text-sm lg:text-base font-bold">Talent Acquisition</h3>
            
                        <p className="text-xs lg:text-sm">We build tailored web solutions 
                          that align with your business  
                      </p>
                      </span>
                    </div>

                     <div className="flex flex-row gap-3 mb-3">
                      <span>
                        <BiSolidDoorOpen className="mt-1 text-orange-600"/>

                      </span>
                      <span className="flex flex-col gap-2">
                        <h3 className="text-sm lg:text-base  font-bold">Talent Acquisition</h3>
            
                        <p className="text-xs lg:text-sm">We build tailored web solutions 
                          that align with your business 
                      </p>
                      </span>
                    </div>

                  </div>

                  <div className="h-70 md:h-96  md:w-130 lg:w-130 rounded-lg p-4 bg-blue-900 text-white">
                      <div className="flex gap-2 md:py-3 flex-col justify-around h-full">
                        
                          <p className="text-sm">Our design team crafts 
                            intuitive and engaging interfaces that enhance 
                            user satisfaction and drive conversions.
                            Our design team crafts 
                            intuitive and engaging interfaces that enhance 
                            user satisfaction and drive conversions.
                            </p>

                            <p className="text-sm">Our design team crafts 
                            intuitive and engaging interfaces that enhance 
                            user satisfaction and drive conversions.</p>

                           <span className="flex flex-row items-center gap-1">
                            <TiTick className="text-white" />
                            <h2 className="text-sm">Best Team Work</h2>
                           </span>

                           <span className="flex flex-row items-center gap-1">
                            <TiTick className="text-white" />
                            <h2 className="text-sm">Best Team Work</h2>
                           </span>
                      </div>
                  </div>

                  
                </div>
              </div>

              {/* Second content: takes 1/3 of the width */}
              <div className="min-h-[350px] md:min-h-[500px]
               w-full h-[30vh] rounded-lg bg-cover bg-center "
                style={{
                backgroundImage: `url(${serviceImage})`,
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
                <div className="col-span-1 bg-cover bg-center
                rounded-2xl h-[300px] md:min-h-[660px] lg:min-h-[600px]" style={{
                    backgroundImage: `url(${serviceImage})`,
                    }}>
                </div>

                {/* second div: larger width */}
                <div className="md:col-span-2 min-h-[300px] md:min-h-[350px]">
                  

                  <div className="flex flex-col gap-6">
                    {/* first item */}
                    <div className="flex flex-col gap-4">
                        <h2 className="font-bold text-sm text-orange-600">OUR SERVICES</h2>
                        <h1 className="text-blue-900 md:text-3xl font-bold">Experinced recruiters speacilizes in finding
                          the right executive talent
                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsa voluptate 
                          numquam debitis eum eligendi similique velit alias dolorum assumenda.
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsa voluptate 
                          numquam debitis.</p>

                    </div>
                    {/* second item */}

                                {/* second item */}
                      <div className="grid md:grid-cols-2 gap-4 ">
                            <div className="bg-blue-100 min-h-[200px] lg:min-h-[210px]
                            rounded-xl flex
                             items-center justify-center">1</div>
                            <div className="bg-blue-100 rounded-xl flex min-h-[200px] lg:min-h-[210px]
                            items-center justify-center">2</div>
                            <div className="bg-blue-100 rounded-xl min-h-[200px] lg:min-h-[210px]
                             flex items-center justify-center">3</div>
                            <div className="bg-blue-100 rounded-xl min-h-[200px] lg:min-h-[210px]
                            flex items-center justify-center">4</div>
                      </div>
                  </div>

                  </div>

              </div>



          </div>

      </section>
       
    </LandingLayout>
  );
}










