import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight, MdEmail } from "react-icons/md";
import { RiMapPin2Fill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaTiktok, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="">

        <div className="bg-blue-900 text-white px-6 md:px-20 lg:px-32 py-10">
            <div className="grid gap-10">
            {/* Top Row: Company Info */}
            <div className="grid gap-6 text-sm md:text-base grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {/* Company Name (aligned like others) */}
            <div className="flex items-center gap-2">
                <IoLogoWhatsapp className="w-5 h-5" />
                <h3 className="font-bold">+234-907-599-1916</h3>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2">
                <IoCall className="w-5 h-5" />
                <span className="font-bold">+234-9125-532-844</span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2">
                <MdEmail className="w-5 h-5" />
                <span className="font-bold">apexrecruitmentagency812@gmail.com</span>
            </div>

            {/* Address */}
            <div className="flex items-start gap-2">
                <RiMapPin2Fill className="w-5 h-5 mt-1" />
                <p className="font-bold leading-relaxed">
                144 Airport Road after ADP Junction, Adjacent DVD Filling Station <br />
                before Ogba Zoo, Benin City
                </p>
            </div>
            </div>

            {/* Bottom Row: About, Links, What We Do, Newsletter */}
            <div className="grid gap-8 text-sm md:text-base grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {/* About Us */}
            <div>
                <h4 className="font-bold mb-3">About Us</h4>
                <p>
                Apex Consulting Agency is dedicated to helping businesses find the right talent 
                and job seekers find the right opportunities.
                </p>
                {/* Social Icons */}
                <div className="flex gap-3 mt-4">
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white text-blue-900 hover:bg-blue-700 hover:text-white transition"
                >
                    <FaFacebookF className="w-5 h-5 md:w-6 md:h-6" />
                </a>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white text-blue-900 hover:bg-pink-600 hover:text-white transition"
                >
                    <AiFillInstagram className="w-5 h-5 md:w-6 md:h-6" />
                </a>
                <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white text-blue-900 hover:bg-black hover:text-white transition"
                >
                    <FaTiktok className="w-5 h-5 md:w-6 md:h-6" />
                </a>
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white text-blue-900 hover:bg-blue-700 hover:text-white transition"
                >
                    <FaLinkedinIn className="w-5 h-5 md:w-6 md:h-6" />
                </a>
                <a
                    href="https://wa.me/2349125532844"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white text-blue-900 hover:bg-green-600 hover:text-white transition"
                >
                    <IoLogoWhatsapp className="w-5 h-5 md:w-6 md:h-6" />
                </a>
                </div>
            </div>

            {/* Useful Links */}
            <div>
                <h4 className="font-bold mb-3">Useful Links</h4>
                <ul className="space-y-2">
                <li className="flex items-center gap-2">
                    <MdOutlineKeyboardArrowRight />
                    <Link to="/about" className="hover:text-gray-300">About</Link>
                </li>
                <li className="flex items-center gap-2">
                    <MdOutlineKeyboardArrowRight />
                    <Link to="/services" className="hover:text-gray-300">Services</Link>
                </li>
                <li className="flex items-center gap-2">
                    <MdOutlineKeyboardArrowRight />
                    <Link to="/faq" className="hover:text-gray-300">FAQ</Link>
                </li>
                <li className="flex items-center gap-2">
                    <MdOutlineKeyboardArrowRight />
                    <Link to="/contact" className="hover:text-gray-300">Contact</Link>
                </li>
                </ul>
            </div>

            {/* What We Do */}
            <div>
                <h4 className="font-bold mb-3">What We Do</h4>
                <ul className="space-y-2">
                <li className="flex items-center gap-2">
                    <MdOutlineKeyboardArrowRight />
                    Recruitment
                </li>
                <li className="flex items-center gap-2">
                    <MdOutlineKeyboardArrowRight />
                    Onboarding
                </li>
                <li className="flex items-center gap-2">
                    <MdOutlineKeyboardArrowRight />
                    Policy Handbooks
                </li>
                <li className="flex items-center gap-2">
                    <MdOutlineKeyboardArrowRight />
                    Training
                </li>
                </ul>
            </div>

            {/* Newsletter */}
            <div>
                <h4 className="font-bold mb-3">Newsletter</h4>
                <p className="mb-3">Subscribe to our newsletter for the latest updates.</p>
                <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-3 py-2 w-full bg-white rounded text-blue-900 focus:outline-none"
                />
                <button className="mt-3 px-4 py-2 bg-white font-bold
                text-blue-900 hover:text-white hover:bg-blue-700 rounded">
                Subscribe
                </button>
            </div>
            </div>

            {/* Footer  */}

        </div>
        </div>
        
        <div className="bg-white text-center text-blue-900 font-medium text-xs md:text-sm py-8">
             <p>
                © {new Date().getFullYear()}, Apex Consulting Agency. All rights reserved.
            </p>
        </div>

        <div>
            
        </div>

    </footer>
  );
}
