import LandingLayout from "../components/layouts/LandingLayout";
import Button from "../components/elements/Button";
import { RiMapPin2Fill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { GoClockFill } from "react-icons/go";

import serviceImage from "../../src/assets/image/bg_contact.jpg"
import mapImg from "../../src/assets/image/map_2.png"
import contactImg from "../../src/assets/image/contact_1.jpg"


export default function Contact() {
  return (
    <LandingLayout>
      <section className="bg-slate-100">
        <div
         className="w-full h-[30vh] flex items-center  justify-center
             bg-cover bg-center bg-black/60 bg-blend-multiply"
            style={{
            backgroundImage: `url(${serviceImage})`,
            }}>
      
              <h1 className="mt-20 text-2xl md:text-3xl text-white font-bold">Our Contacts</h1>
        </div>

        <div className="grid gap-10 py-20 px-6 
            md:px-20 lg:px-32">
            <div className="grid gap-6 text-sm md:text-base grid-cols-1
             md:grid-cols-2 lg:grid-cols-2">

                <div className="items-start justify-start">
                  {/* text */}
                  <div className="flex flex-col gap-2 h-64 md:gap-6 md:h-80 lg:h-96">
                    <h1 className="font-bold text-base md:text-3xl">Contact Information</h1>
                    <p className="font-normal">
                      At Apex Consulting Agency, we are more than just recruiters — 
                      we are your partners in building stronger businesses. 
                    </p>

                    <p className="font-normal">
                        We go beyond recruitment—helping you strengthen your workforce 
                        and achieve your company’s vision.
                    </p>

                      <Button className="items-center" variant="secondary">Contact Us</Button>
                  </div>
                </div>


                <div className="h-64 md:h-80 lg:h-96 bg-cover bg-center rounded-lg"
                 style={{
                    backgroundImage: `url(${contactImg})`,
                  }}>

                </div>
                
                <div className="h-64 md:h-85 lg:h-96 bg-cover bg-center rounded-lg"
                 style={{
                    backgroundImage: `url(${mapImg})`,
                  }}>

                </div>


                <div className="grid gap-6 grid-cols-1
                 md:grid-cols-2 lg:grid-cols-2">

                  <div className="flex items-center justify-center flex-col
                                    h-40 border-2 border-blue-900 rounded-[15px] text-center p-2">
                      <RiMapPin2Fill size={30} className="text-blue-900 mb-2" />
                      <h1 className="font-bold text-xs md:text-xs">
                        144 Airport Road after ADP Junction, Adjacent DVD Filling Station <br />
                        before Ogba Zoo, Benin City
                      </h1>
                  </div>


                  <div className="flex items-center justify-center flex-col
                                    h-40 border-2 border-blue-900 rounded-[15px] text-center p-2">
                      <GoClockFill size={30} className="text-blue-900 mb-2" />
                      <h1 className="font-bold text-xs md:text-xs lg:text-base">
                        Mon - Fri: 9:00 AM - 5:00 PM
                      </h1>
                  </div>

                  <div className="flex items-center justify-center flex-col lg:text-base
                                    h-40 border-2 border-blue-900 rounded-[15px] text-center p-2">
                      <IoCall size={30} className="text-blue-900 mb-2" />
                      <h1 className="font-bold text-xs  md:text-sm lg:text-base">
                        +234-912-553-2844
                      </h1>
                  </div>

                  <div className="flex items-center justify-center flex-col
                                h-40 border-2 border-blue-900 rounded-[15px] text-center p-2 overflow-hidden">
                              <MdEmail size={30} className="text-blue-900 mb-2" />
                          <p className="font-bold text-xs md:text-xs lg:text-base break-words md:max-w-[150px] lg:max-w-full">
                            Apexrecruitmentagency812@gmail.com
                            </p>
                    </div>

                </div>
             </div>

        </div>
            
      </section>
    </LandingLayout>
  );
}