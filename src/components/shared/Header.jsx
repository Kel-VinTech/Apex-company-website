
// src/components/shared/Header.jsx
import { Link } from "react-router-dom";
import Button from "../elements/Button";
import { IoCall } from "react-icons/io5";

import companyLogo from "../../assets/image/IMG-20241213-WA0009_prev_ui.png";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full shadow-md">
    <div className="flex justify-between items-center py-4 px-16 
    md:px-20 lg:px-32 bg-white">
      <img
        src={companyLogo}
        className="max-w-20"
        alt="company logo"
      />

      <nav className="hidden md:flex space-x-4 lg:space-x-32">
        <Link to="/" className="hover:text-blue-700">
          Home
        </Link>
        <Link to="/about" className="hover:text-blue-700">
          About Us
        </Link>
        <Link to="/services" className="cursor-pointer hover:text-blue-700">
          Services
        </Link>
        <Link to="/contact" className="cursor-pointer hover:text-blue-700">
          Contact Us
        </Link>
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