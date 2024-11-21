/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import * as React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import {
  FaBehance,
  FaDownload,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaTelegramPlane,
  FaUserAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import propic from "../../../public/propic.png";
import KeyStyle from "../KeyStyle/KeyStyle";
import { BackgroundLines } from "../ui/background-lines";
import { GridBackgroundDemo } from "../ui/gridBackground";
import "./Banner.css";
AOS.init();
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const Banner = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/MEHEDI HASAN RESUME.pdf"; // Replace with the path to your PDF file
    link.download = "mehedihasan_CV.pdf"; // Specify the desired filename for the downloaded file
    link.click();
  };
  const [text] = useTypewriter({
    words: [
      "Front-End Developer ",
      "MERN-Stack Developer",
      "Web Developer",
      "ReactJS Developer!",
    ],
    loop: Infinity,
    typeSpeed: 80,

    onLoopDone: () => {},
  });
  return (
    <div id="home" className="w-11/12 mx-auto relative ">
      <BackgroundLines className="absolute top-0 left-0 w-full h-screen">
        <GridBackgroundDemo></GridBackgroundDemo>
      </BackgroundLines>
      <div
        data-aos="fade-down"
        data-aos-duration="3000"
        className="flex justify-between items-center py-4   "
      >
        <h2 className="text-white font-manrope font-medium  tracking-widest text-base lg:text-xl">
          Mehedi HC<span className="text-cyan-300">.</span>
        </h2>
        <div>
          <div
            style={{
              border: "12px solid #292D32",
              boxShadow:
                "-5px -5px 15px rgba(255,255,255,0.1),5px 5px 15px rgba(0,0,0,0.35)",
            }}
            className="  rounded-full "
          >
            <div className="w-10 h-10 rounded-full relative bg-cyan-300 spin-animation ">
              <p className="w-2 bg-black absolute top-2 left-2 rounded-full h-2"></p>
              <p className="w-2 bg-black absolute top-2 right-2 rounded-full h-2"></p>
              <p className="w-4  bg-transparent absolute top-3 rounded-full right-3 border-b-4 border-gray-900   h-4"></p>
            </div>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="flex lg:gap-10 gap-6 mt-2 md:mt-8 flex-col-reverse md:flex-row"
      >
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          style={{
            borderRadius: "10px",
          }}
          className="w-full md:w-8/12 lg:w-8/12 px-4 py-4"
        >
          <KeyStyle></KeyStyle>

          <div className="  my-8 overflow-hidden">
            <Slide>
              <h1 className="text-base uppercase text-slate-600 md:text-xl  tracking-wider">
                Hello, It's Mehedi Hasan.{" "}
                <Fade delay={1e3} cascade damping={1e-1}>
                  I am a
                </Fade>{" "}
              </h1>

              <h1 className="text-2xl md:text-4xl font-semibold my-2 tracking-wider">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500 via-violet-500">
                  {text}
                </span>
                <Cursor cursorColor="red" />
              </h1>
            </Slide>

            <p className="text-slate-600 font-poppins tracking-wider mt-5 lg:w-11/12 w-full">
              Is your company looking for a highly skilled web developer? Your
              requirements seem to be very similar to mine. I believe I am one
              of the most qualified candidates you are looking for.I have gained
              a solid understanding of front end development.{" "}
            </p>

            <div className="py-10 text-slate-300 md:px-5 px-2 flex gap-10 flex-col md:flex-row mt-5">
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                onClick={handleDownloadResume}
                style={{
                  borderRadius: "40px",
                  boxShadow:
                    "-5px -5px 15px rgba(255,255,255,0.1), 5px 5px 15px rgba(0,0,0,0.35)",
                }}
                className="px-3 text-slate-600 py-2 flex justify-center tracking-wider items-center cursor-pointer"
              >
                <p>Download CV</p>
                <span
                  className="w-7 h-7 ml-2 rounded-full flex justify-center items-center "
                  style={{
                    boxShadow:
                      " -5px -5px 15px rgba(255, 255, 255, 0.1), 5px 5px 15px rgba(0, 0, 0, 0.35),  inset -5px -5px 15px rgba(255, 255, 255, 0.1), inset 5px 5px 15px rgba(0, 0, 0, 0.35) ",
                  }}
                >
                  <FaDownload className="text-cyan-400  w-3 h-3"></FaDownload>
                </span>
              </div>

              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000"
                style={{
                  borderRadius: "40px",
                  boxShadow:
                    "-5px -5px 15px rgba(255,255,255,0.1), 5px 5px 15px rgba(0,0,0,0.35)",
                }}
                className="px-3 text-slate-600 py-2 flex justify-center items-center cursor-pointer   tracking-wider"
              >
                <p>Hire Me</p>
                <span
                  className="w-7 h-7 ml-2 rounded-full flex justify-center items-center "
                  style={{
                    boxShadow:
                      " -5px -5px 15px rgba(255, 255, 255, 0.1), 5px 5px 15px rgba(0, 0, 0, 0.35),  inset -5px -5px 15px rgba(255, 255, 255, 0.1), inset 5px 5px 15px rgba(0, 0, 0, 0.35) ",
                  }}
                >
                  <FaUserAlt className="text-cyan-400  w-3 h-3"></FaUserAlt>
                </span>
              </div>
            </div>
          </div>
        </div>
        <motion.ul
          data-aos="fade-up"
          data-aos-duration="3000"
          variants={container}
          initial="hidden"
          animate="visible"
          // style={{
          //   borderRadius: "20px",
          //   boxShadow:
          //     "-5px -5px 15px rgba(255,255,255,0.1), 5px 5px 15px rgba(0,0,0,0.35)",
          //   padding: "5px",
          // }}
          className="container w-full md:w-4/12 lg:w-4/12"
        >
          <motion.li
            variants={item}
            className="item flex justify-center  py-5 lg:py-0"
          >
            <img
              // style={{
              //   borderRadius: "100%",
              //   boxShadow:
              //     "-5px -5px 15px rgba(255,255,255,0.1),5px 5px 15px rgba(0,0,0,0.35)",
              //   padding: " 5px",
              // }}
              className="rounded-full h-80 md:h-64 md:w-64 lg:h-96 lg:w-[420px] w-80 md:px-4 "
              src={propic}
              alt=""
            />
          </motion.li>

          <motion.li
            variants={item}
            className="grid item grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-10  justify-center w-9/12 md:w-full lg:w-9/12 mx-auto py-4 lg:mt-6 px-2 social_icon"
          >
            <Link
              to="https://www.linkedin.com/in/mehedi-hasan-chanchal-879055205/"
              style={{
                boxShadow:
                  "-5px -5px 15px rgba(255,255,255,0.1), 5px 5px 15px rgba(0,0,0,0.35)",
              }}
              className="  flex justify-center rounded-full mx-auto cursor-pointer  w-12 h-12 items-center "
            >
              <FaLinkedinIn className="text-cyan-400  w-5 h-5 "></FaLinkedinIn>
            </Link>

            <Link
              to="https://github.com/mehedihasan5675"
              style={{
                boxShadow:
                  "-5px -5px 15px rgba(255,255,255,0.1),5px 5px 15px rgba(0,0,0,0.35)",
              }}
              className="  flex justify-center rounded-full mx-auto cursor-pointer  w-12 h-12 items-center "
            >
              <FaGithub className="text-cyan-400  w-5 h-5 "></FaGithub>
            </Link>

            <Link
              to="https://web.facebook.com/profile.php?id=100055933103794"
              style={{
                boxShadow:
                  "-5px -5px 15px rgba(255,255,255,0.1),5px 5px 15px rgba(0,0,0,0.35)",
              }}
              className="  flex justify-center rounded-full mx-auto cursor-pointer  w-12 h-12 items-center "
            >
              <FaFacebookF className="text-cyan-400  w-5 h-5 "></FaFacebookF>
            </Link>

            <Link
              to=""
              title="unavailable"
              style={{
                boxShadow:
                  "-5px -5px 15px rgba(255,255,255,0.1),5px 5px 15px rgba(0,0,0,0.35)",
              }}
              className="  flex justify-center rounded-full mx-auto cursor-pointer  w-12 h-12 items-center "
            >
              <FaBehance className="text-cyan-400  w-5 h-5 "></FaBehance>
            </Link>

            <Link
              to="https://wa.me/qr/PF724H3H77Z6F1"
              style={{
                boxShadow:
                  "-5px -5px 15px rgba(255,255,255,0.1),5px 5px 15px rgba(0,0,0,0.35)",
              }}
              className="  flex justify-center rounded-full mx-auto cursor-pointer  w-12 h-12 items-center "
            >
              <FaWhatsapp className="text-cyan-400  w-5 h-5 "></FaWhatsapp>
            </Link>

            <Link
              title="unavailable"
              style={{
                boxShadow:
                  "-5px -5px 15px rgba(255,255,255,0.1),5px 5px 15px rgba(0,0,0,0.35)",
              }}
              className="  flex justify-center rounded-full mx-auto cursor-pointer  w-12 h-12 items-center "
            >
              <FaTelegramPlane className="text-cyan-400  w-5 h-5 "></FaTelegramPlane>
            </Link>
          </motion.li>
        </motion.ul>
      </div>
    </div>
  );
};

export default Banner;
