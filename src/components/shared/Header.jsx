
// src/components/shared/Header.jsx
import { Link } from "react-router-dom";
import Button from "../elements/Button";
import { IoCall } from "react-icons/io5";

import companyLogo from "../../assets/image/IMG-20241213-WA0009_prev_ui.png";

export default function Header() {
  return (
    <header className="fixed z-50 top-0 left-0 w-full shadow-md">
    <div className="flex justify-between items-center py-2 md:py-4 px-6 
    md:px-20 lg:px-32 bg-white">
      <a className="block no-underline focus:outline-none" href="/">
        <img
          src={companyLogo}
          alt="Apex Consulting Logo"
          className="h-12 w-auto md:w-auto cursor-pointer"
        />
      </a>

      <nav className="hidden font-normal lg:flex space-x-4 lg:space-x-32">
        <a href="/" className=" hover:text-blue-700 hover:font-medium">
          Home
        </a>
        <a href="/about" className="hover:text-blue-700 hover:font-medium ">
          About Us
        </a>
        <a href="/services" className="cursor-pointer hover:font-medium hover:text-blue-700">
          Services
        </a>
        <a href="/contact" className="cursor-pointer hover:font-medium hover:text-blue-700">
          Contact Us
        </a>
      </nav>

      <Button variant="primary">
        <span  className="flex items-center gap-2
        ">
        <IoCall size={18} />
          <h3 className="font-bold">+234-9125-532-844</h3>
      </span>
          
      </Button>
    </div>
    </header>

  );
}