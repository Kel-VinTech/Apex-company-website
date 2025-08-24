import LandingLayout from "../components/layouts/LandingLayout";

export default function Services() {
  return (
    <LandingLayout>
      <section className="">

        <div
         className="w-full h-[30vh] flex items-center  justify-center
             bg-cover bg-center bg-black/60 bg-blend-multiply"
            style={{
            backgroundImage:"url(src/assets/image/authentic-small-youthful-marketing-agency.jpg)",
            }}>
      
              <h1 className="mt-20 text-2xl md:text-3xl text-white font-bold">Our Services</h1>
        </div>



         <div className=" flex flex-col items-start justify-center py-20 px-16 
            md:px-20 lg:px-32">

             <h1 className="text-3xl font-bold mb-4 text-gray-800">Our Services</h1>
            <ul className="list-disc pl-5 space-y-2">
              <li>Custom Web Development</li>
              <li>UI/UX Design</li>
              <li>React + Tailwind consulting</li>
            </ul>

        </div>

       
      </section>
    </LandingLayout>
  );
}
