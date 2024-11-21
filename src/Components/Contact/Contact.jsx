import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import KeyStyle from "../KeyStyle/KeyStyle";
import SectionTitle from "../SectionTitle/SectionTitle";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4ibr68w",
        "template_u1nok8l",
        form.current,
        "BdqniISluwK7ipdT6"
      )

      .then(
        (result) => {
          console.log(result.text);

          toast.success("Message Sent Just Now!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="containerr ">
      <div data-aos="fade-up" data-aos-duration="1500" className=" p-4">
        <KeyStyle></KeyStyle>
        <SectionTitle title="Get In Touch "></SectionTitle>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          style={{
            borderRadius: "10px",

            boxShadow:
              "-5px -5px 15px rgba(255,255,255,0.1),5px 5px 15px rgba(0,0,0,0.35)",
            padding: " 5px",
          }}
          className=" w-full  lg:w-8/12 mx-auto my-5 p-4"
        >
          <form ref={form} className="px-3 py-4" onSubmit={sendEmail}>
            <div className="flex md:flex-row flex-col  md:gap-12 gap-6 ">
              <div className=" w-full md:w-1/2 ">
                <input
                  required
                  type="text"
                  placeholder="Name"
                  className="cardInform w-full  text-slate-300  outline-none outline-gray-800 focus:outline-gray-700 bg-[#292D32]"
                  name="user_name"
                />
              </div>
              <div className=" w-full md:w-1/2 ">
                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="cardInform  w-full  text-slate-300 outline-none outline-gray-800 focus:outline-gray-700 bg-[#292D32]"
                  name="user_email"
                />
              </div>
            </div>

            <div className="flex md:flex-row flex-col  md:gap-12 gap-6 my-6">
              <div className=" w-full md:w-1/2 ">
                <input
                  required
                  type="text"
                  placeholder="Phone (+880 )"
                  className="cardInform w-full  text-slate-300  outline-none outline-gray-800 focus:outline-gray-700 bg-[#292D32]"
                  name="user_phone"
                />
              </div>
              <div className=" w-full md:w-1/2 ">
                <input
                  type="text"
                  placeholder="Country"
                  className="cardInform  w-full  text-slate-300 outline-none outline-gray-800 focus:outline-gray-700 bg-[#292D32]"
                  name="user_country"
                />
              </div>
            </div>
            <textarea
              required
              rows={4}
              className="cardInform   w-full  text-slate-300 outline-none outline-gray-800 focus:outline-gray-700 bg-[#292D32]"
              placeholder="Message"
              name="user_message"
            />
            <input
              type="submit"
              className="cardOut mt-14  w-5/12  text-slate-300 outline-none cursor-pointer outline-gray-800  focus:outline-gray-700    bg-[#292D32] btn hover:text-[#292D32]"
              value="Send"
            />
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
