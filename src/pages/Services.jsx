import LandingLayout from "../components/layouts/LandingLayout";
import Button from "../../src/components/elements/Button";


export default function Services() {
  return (
    <LandingLayout>
      <section className="">

        <div
         className="w-full h-[30vh] md:h-[40vh] flex items-center  justify-center
             bg-cover bg-center bg-black/60 bg-blend-multiply"
            style={{
            backgroundImage:"url(src/assets/image/authentic-small-youthful-marketing-agency.jpg)",
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
                      className="w-full h-[30vh] mb-6 md:h-[40vh] flex items-center  justify-center
                      bg-cover bg-center bg-black/60 bg-blend-multiply"
                      style={{
                      backgroundImage:"url(src/assets/image/authentic-small-youthful-marketing-agency.jpg)",
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
                      className="w-full h-[30vh] mb-6 md:h-[40vh] flex items-center  justify-center
                      bg-cover bg-center bg-black/60 bg-blend-multiply"
                      style={{
                      backgroundImage:"url(src/assets/image/authentic-small-youthful-marketing-agency.jpg)",
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
                      className="w-full h-[30vh] mb-6 md:h-[40vh] flex items-center  justify-center
                      bg-cover bg-center bg-black/60 bg-blend-multiply"
                      style={{
                      backgroundImage:"url(src/assets/image/authentic-small-youthful-marketing-agency.jpg)",
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
             bg-cover bg-center bg-black/80 bg-blend-multiply mb-20" 
            style={{
            backgroundImage:"url(src/assets/image/authentic-small-youthful-marketing-agency.jpg)",
            }}>
              
              <div className="flex flex-col items-center justify-center gap-2">
                    <h1 className="text-xl md:text-2xl text-white font-bold">OUR TALENT IS FINDING YOURS</h1>
                    <span className="flex flex-row md:flex-row items-center justify-center gap-4 md:gap-6 mt-4">
                      <Button variant="secondary">Find me a Candididte</Button>
                      <Button variant="secondary">Find me a Job</Button>
                    </span>

              </div>
        </div>

       
      </section>
    </LandingLayout>
  );
}
