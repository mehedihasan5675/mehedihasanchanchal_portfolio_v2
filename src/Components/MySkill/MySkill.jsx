import bootstrap from "../../assets/bootstrap.png";
import css from "../../assets/css.png";
import expressjs from "../../assets/expressjs.png";
import firebase from "../../assets/firebase.png";
import html from "../../assets/html.png";
import jwt from "../../assets/jwt.png";
import mongodb from "../../assets/mongodb.png";
import nodejs from "../../assets/nodejs.png";
import reactJS from "../../assets/reactJS.png";
import router from "../../assets/router.png";
import tailwind from "../../assets/tailwind.png";

import KeyStyle from "../KeyStyle/KeyStyle";
import SectionTitle from "../SectionTitle/SectionTitle";

import { motion } from "framer-motion";

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
const MySkill = () => {
  return (
    <div className="containerr">
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="p-2 md:p-4  text-white"
      >
        <KeyStyle></KeyStyle>
        <SectionTitle title="My Skills"></SectionTitle>
        <motion.ul
          variants={container}
          initial="hidden"
          animate="visible"
          className="container py-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:px-16 lg:px-10   gap-5 md:gap-10"
        >
          <motion.li
            style={{
              borderRadius: "10px",

              boxShadow:
                "-5px -5px 15px rgba(255,255,255,0.1),5px 5px 15px rgba(0,0,0,0.35)",
              padding: " 5px",
            }}
            data-aos="fade-up"
            data-aos-duration="3000"
            variants={item}
            className="item mx-auto   w-40 py-5"
          >
            <img className="h-20 mt-4 w-20  mx-auto" src={html} alt="" />
            <h2 className="text-md mb-4 lg:text-lg text-slate-700 mt-5  text-center font-semibold uppercase">
              HTML 5
            </h2>
          </motion.li>

          <motion.li
            style={{
              borderRadius: "10px",

              boxShadow:
                "-5px -5px 15px rgba(255,255,255,0.1),5px 5px 15px rgba(0,0,0,0.35)",
              padding: " 5px",
            }}
            data-aos="fade-up"
            data-aos-duration="3000"
            variants={item}
            className="item mx-auto   w-40 py-5"
          >
            <img className="h-20 mt-4 w-20  mx-auto" src={css} alt="" />
            <h2 className="text-md mb-4 lg:text-lg text-slate-700 mt-5  text-center font-semibold uppercase">
              css 3
            </h2>
          </motion.li>

          <motion.li
            style={{
              borderRadius: "10px",

              boxShadow:
                "-5px -5px 15px rgba(255,255,255,0.1),5px 5px 15px rgba(0,0,0,0.35)",
              padding: " 5px",
            }}
            data-aos="fade-up"
            data-aos-duration="3000"
            variants={item}
            className="item mx-auto   w-40 py-5"
          >
            <img className="h-20 mt-4 w-20  mx-auto" src={bootstrap} alt="" />
            <h2 className="text-md mb-4 lg:text-lg text-slate-700 mt-5  text-center font-semibold uppercase">
              bootstrap
            </h2>
          </motion.li>

          <motion.li
            style={{
              borderRadius: "10px",

              boxShadow:
                "-5px -5px 15px rgba(255,255,255,0.1),5px 5px 15px rgba(0,0,0,0.35)",
              padding: " 5px",
            }}
            data-aos="fade-up"
            data-aos-duration="3000"
            variants={item}
            className="item mx-auto   w-40 py-5"
          >
            <img className="h-20 mt-4 w-20  mx-auto" src={tailwind} alt="" />
            <h2 className="text-md mb-4 lg:text-lg text-slate-700 mt-5  text-center font-semibold uppercase">
              tailwind css
            </h2>
          </motion.li>

          <motion.li
            style={{
              borderRadius: "10px",

              boxShadow:
                "-5px -5px 15px rgba(255,255,255,0.1),5px 5px 15px rgba(0,0,0,0.35)",
              padding: " 5px",
            }}
            data-aos="fade-up"
            data-aos-duration="3000"
            variants={item}
            className="item mx-auto   w-40 py-5"
          >
            <img className="h-20 mt-4 w-20  mx-auto" src={reactJS} alt="" />
            <h2 className="text-md mb-4 lg:text-lg text-slate-700 mt-5  text-center font-semibold uppercase">
              react JS
            </h2>
          </motion.li>

          <motion.li
            style={{
              borderRadius: "10px",

              boxShadow:
                "-5px -5px 15px rgba(255,255,255,0.1),5px 5px 15px rgba(0,0,0,0.35)",
              padding: " 5px",
            }}
            data-aos="fade-up"
            data-aos-duration="3000"
            variants={item}
            className="item mx-auto   w-40 py-5"
          >
            <img className="h-20 mt-4 w-20  mx-auto" src={nodejs} alt="" />
            <h2 className="text-md mb-4 lg:text-lg text-slate-700 mt-5  text-center font-semibold uppercase">
              node js
            </h2>
          </motion.li>

          <motion.li
            style={{
              borderRadius: "10px",

              boxShadow:
                "-5px -5px 15px rgba(255,255,255,0.1),5px 5px 15px rgba(0,0,0,0.35)",
              padding: " 5px",
            }}
            data-aos="fade-up"
            data-aos-duration="3000"
            variants={item}
            className="item mx-auto   w-40 py-5"
          >
            <img className="h-20 mt-4 w-20  mx-auto" src={expressjs} alt="" />
            <h2 className="text-md mb-4 lg:text-lg text-slate-700 mt-5  text-center font-semibold uppercase">
              express js
            </h2>
          </motion.li>

          <motion.li
            style={{
              borderRadius: "10px",

              boxShadow:
                "-5px -5px 15px rgba(255,255,255,0.1),5px 5px 15px rgba(0,0,0,0.35)",
              padding: " 5px",
            }}
            data-aos="fade-up"
            data-aos-duration="3000"
            variants={item}
            className="item mx-auto   w-40 py-5"
          >
            <img className="h-20 mt-4 w-20  mx-auto" src={mongodb} alt="" />
            <h2 className="text-md mb-4 lg:text-lg text-slate-700 mt-5  text-center font-semibold uppercase">
              mongo db
            </h2>
          </motion.li>

          <motion.li
            style={{
              borderRadius: "10px",

              boxShadow:
                "-5px -5px 15px rgba(255,255,255,0.1),5px 5px 15px rgba(0,0,0,0.35)",
              padding: " 5px",
            }}
            data-aos="fade-up"
            data-aos-duration="3000"
            variants={item}
            className="item mx-auto   w-40 py-5"
          >
            <img className="h-20 mt-4 w-20  mx-auto" src={router} alt="" />
            <h2 className="text-md mb-4 lg:text-lg text-slate-700 mt-5  text-center font-semibold uppercase">
              react router
            </h2>
          </motion.li>

          <motion.li
            style={{
              borderRadius: "10px",

              boxShadow:
                "-5px -5px 15px rgba(255,255,255,0.1),5px 5px 15px rgba(0,0,0,0.35)",
              padding: " 5px",
            }}
            data-aos="fade-up"
            data-aos-duration="3000"
            variants={item}
            className="item mx-auto   w-40 py-5"
          >
            <img className="h-20 mt-4 w-20  mx-auto" src={firebase} alt="" />
            <h2 className="text-md mb-4 lg:text-lg text-slate-700 mt-5  text-center font-semibold uppercase">
              firebase{" "}
            </h2>
          </motion.li>

          <motion.li
            style={{
              borderRadius: "10px",

              boxShadow:
                "-5px -5px 15px rgba(255,255,255,0.1),5px 5px 15px rgba(0,0,0,0.35)",
              padding: " 5px",
            }}
            data-aos="fade-up"
            data-aos-duration="3000"
            variants={item}
            className="item mx-auto   w-40 py-5"
          >
            <img className="h-20 mt-4 w-20  mx-auto" src={jwt} alt="" />
            <h2 className="text-md mb-4 lg:text-lg text-slate-700 mt-5  text-center font-semibold uppercase">
              jwt
            </h2>
          </motion.li>
        </motion.ul>
      </div>
    </div>
  );
};

export default MySkill;
