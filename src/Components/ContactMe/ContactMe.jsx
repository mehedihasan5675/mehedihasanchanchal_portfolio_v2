import { FaLocationArrow, FaMailBulk, FaPhoneVolume } from "react-icons/fa";
import KeyStyle from "../KeyStyle/KeyStyle";
import SectionTitle from "../SectionTitle/SectionTitle";

const ContactMe = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="1500" className="containerr">
      <div id="contact" className="p-4  ">
        <KeyStyle></KeyStyle>
        <SectionTitle title="Contact me "></SectionTitle>

        <div className="flex flex-col md:flex-row gap-10 py-10">
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            style={{
              borderRadius: "10px",

              boxShadow:
                "-5px -5px 15px rgba(255,255,255,0.1),5px 5px 15px rgba(0,0,0,0.35)",
              padding: " 5px",
            }}
            className=" w-full md:w-4/12 mx-auto text-center py-5"
          >
            <FaPhoneVolume className="text-cyan-400 w-8 h-8 mx-auto mt-3 "></FaPhoneVolume>
            <h2 className="text-cyan-400 my-5 text-lg md:text-xl  font-semibold tracking-widest">
              Call
            </h2>
            <p className="text-slate-700  text-md  font-semibold tracking-widest">
              +8801743745675
            </p>
            <p className="text-slate-700  text-md   font-semibold tracking-widest mb-3">
              +8801609182195 (whatsapp)
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            style={{
              borderRadius: "10px",

              boxShadow:
                "-5px -5px 15px rgba(255,255,255,0.1),5px 5px 15px rgba(0,0,0,0.35)",
              padding: " 5px",
            }}
            className=" w-full md:w-4/12 mx-auto text-center py-5"
          >
            <FaMailBulk className="text-cyan-400 w-8 h-8 mx-auto mt-3"></FaMailBulk>
            <h2 className="text-cyan-400 my-5 text-lg md:text-xl  font-semibold tracking-widest">
              Email
            </h2>
            <p className="text-slate-700  text-md  font-semibold tracking-widest mb-3">
              mdchanchal5675@gmail.com
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            style={{
              borderRadius: "10px",

              boxShadow:
                "-5px -5px 15px rgba(255,255,255,0.1),5px 5px 15px rgba(0,0,0,0.35)",
              padding: " 5px",
            }}
            className=" w-full md:w-4/12 mx-auto text-center py-5"
          >
            <FaLocationArrow className="text-cyan-400 w-8 h-8 mx-auto mt-3"></FaLocationArrow>
            <h2 className="text-cyan-400 my-5 text-lg md:text-xl  font-semibold tracking-widest">
              Address
            </h2>
            <p className="text-slate-700  text-md  font-semibold tracking-widest">
              Mohammadpur,7630
            </p>
            <p className="text-slate-700  text-md   font-semibold tracking-widest mb-3">
              Magura,Khulna
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
