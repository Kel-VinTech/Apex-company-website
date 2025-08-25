// src/pages/About.jsx
import LandingLayout from "../components/layouts/LandingLayout";
import Button from "../../src/components/elements/Button";
import serviceImage from "../../src/assets/image/bg_contact.jpg"


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
              <div className="bg-cover bg-center rounded-2xl row-span-3 min-h-[450px] md:min-h-[500px]"
                  style={{
                    backgroundImage: `url(${serviceImage})`,
                    }}>
              </div>

              <div className="bg-cover bg-center rounded-2xl md:row-span-2 min-h-[350px] md:min-h-[350px]"
                    style={{
                    backgroundImage: `url(${serviceImage})`,
                    }}>
              </div>

              <div className="bg-cover bg-center rounded-2xl min-h-[200px]"
                  style={{
                        backgroundImage: `url(${serviceImage})`,
                        }}>
              </div>

              <div className="bg-blue-900 flex px-8 flex-col items-start justify-center gap-3 rounded-2xl min-h-[200px]">
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
        <div className="bg-slate-100">
          <div className="py-20 px-6 md:px-20 lg:px-32">

            <h2 className="font-bold py-5 text-sm text-orange-600">OUR SERVICES</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

              {/* First content: takes 2/3 of the width */}
              <div className="flex flex-col
                min-h-[350px] md:min-h-[500px] 
                md:col-span-2 gap-5 text-white justify-between">

                <h1 className="text-blue-900 md:text-3xl font-bold">Experinced recruiters speacilizes in finding
                  the right executive talent

                </h1>

                <div className="flex flex-col md:flex-row gap-10">


                  <div className="text-black">
                    <h3 className="font-bold">Custom Web Development</h3>
                    <p className="text-sm">We build tailored web solutions that align with your business goals, ensuring a seamless user experience and robust functionality.</p>
                  </div>

                  <div className="h-70 md:h-96 rounded-lg p-4 bg-blue-900 text-white">
                      <div className="flex md:py-10 flex-col justify-between h-full">
                        
                          <p className="text-sm">Our design team crafts 
                            intuitive and engaging interfaces that enhance 
                            user satisfaction and drive conversions.
                            Our design team crafts 
                            intuitive and engaging interfaces that enhance 
                            user satisfaction and drive conversions.</p>

                            <p className="text-sm">Our design team crafts 
                            intuitive and engaging interfaces that enhance 
                            user satisfaction and drive conversions.</p>

                            <p className="text-sm">Our design team crafts 
                            intuitive and engaging interfaces that enhance 
                            user satisfaction and drive conversions.</p>
                      </div>
                  </div>

                  
                </div>
              </div>

              {/* Second content: takes 1/3 of the width */}
              <div className="bg-green-500 text-white flex
              min-h-[350px] md:min-h-[500px]
               items-center justify-center">
                Shorter content
              </div>
            </div>




          </div>
          

        </div>






      </section>

       
    </LandingLayout>
  );
}










