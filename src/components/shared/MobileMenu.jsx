import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="text-blue-900 focus:outline-none"
      >
        {open ? <IoClose size={28} /> : <GiHamburgerMenu size={25} />}
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white 
         shadow-md rounded-b-xs py-6 flex flex-col justify-center items-center space-y-6 z-50">


          <a
            href="/"
            className="block text-gray-700 hover:text-blue-700 font-medium"
            onClick={() => setOpen(false)}
          >
            Home
          </a>
          <a
            href="/about"
            className="block text-gray-700 hover:text-blue-700 font-medium"
            onClick={() => setOpen(false)}
          >
            About Us
          </a>
          <a
            href="/services"
            className="block text-gray-700 hover:text-blue-700 font-medium"
            onClick={() => setOpen(false)}
          >
            Services
          </a>
          <a
            href="/contact"
            className="block text-gray-700 hover:text-blue-700 font-medium"
            onClick={() => setOpen(false)}
          >
            Contact Us
          </a>
        </div>
      )}
    </div>
  );
}

