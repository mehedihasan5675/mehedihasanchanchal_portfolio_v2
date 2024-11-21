import { AiFillThunderbolt } from "@react-icons/all-files/ai/AiFillThunderbolt";
import { BsFillChatDotsFill } from "@react-icons/all-files/bs/BsFillChatDotsFill";
import { FaHome, FaUserAlt } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className=" ">
      <footer className="footer  footer-center p-4 bg-[#292D32] text-slate-200 tracking-wider pb-24">
        <div data-aos="fade-up" data-aos-duration="3000">
          <p className="italic font-mono">
            Copyright © 2023-Portfolio, All right reserved by Mehedi Hasan
          </p>
        </div>
      </footer>
      <div className="  pb-10">
        <div className=" md:w-54 w556  px-12 py-5 bg-gradient-to-r from-slate-700 to-gray-700  opacity-90 fixed bottom-5  rounded-3xl left-1/2 -translate-x-1/2">
          <div className="flex items-center justify-center md:gap-8 gap-6">
            <div className="cursor-pointer">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <FaHome className="text-slate-200  w-5 h-5"></FaHome>
              </Link>
            </div>
            <div className="cursor-pointer">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <FaUserAlt className="text-slate-200 w-5 h-5"></FaUserAlt>
              </Link>
            </div>
            <div className="cursor-pointer">
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <AiFillThunderbolt className="text-slate-200 w-5 h-5"></AiFillThunderbolt>
              </Link>
            </div>
            <div className="cursor-pointer">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <BsFillChatDotsFill className="text-slate-200 w-5 h-5"></BsFillChatDotsFill>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
