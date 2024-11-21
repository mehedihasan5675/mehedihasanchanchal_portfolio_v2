import { useState } from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectSliderCard = ({ project }) => {
  const {
    image,
    name,
    cs_link,
    ss_link,
    live_link,
    tecnologies,
    site_details,
  } = project;
  const [readmore, setReadmore] = useState(false);
  const handleReadMore = () => {
    setReadmore(!readmore);
  };
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="3000"
      style={{
        borderRadius: "10px",

        boxShadow:
          "-5px -5px 15px rgba(255,255,255,0.1),5px 5px 15px rgba(0,0,0,0.35)",
        padding: " 5px",
      }}
      className="lg:min-h-[615px]  mx-auto"
    >
      <div className="card card-compact  lg:w-[420px] xl:w-[450px] ">
        <figure className="h-72   md:h-full">
          <img
            src={image}
            className="rounded-b-2xl rounded-t-2xl w-full lg:w-96 xl:w-full  h-72"
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-slate-800">{name}</h2>
          <p className="text-slate-500 font-poppins tracking-wider">
            {readmore ? (
              <>
                {" "}
                {site_details.slice(0, -1)}.
                <span
                  onClick={handleReadMore}
                  className="text-cyan-400 text-xs cursor-pointer ml-2 font-semibold"
                >
                  Read Less
                </span>
              </>
            ) : (
              <>
                {site_details.slice(0, 80)}...
                <span
                  onClick={handleReadMore}
                  className="text-cyan-400 text-xs cursor-pointer font-semibold"
                >
                  Read More
                </span>
              </>
            )}
          </p>

          <div className="flex flex-wrap gap-2 md:gap-5 my-3 text-slate-800">
            <div>
              {cs_link && (
                <Link to={cs_link} target="_blank">
                  <p
                    style={{
                      borderRadius: "5px",

                      boxShadow:
                        "-5px -5px 15px rgba(255,255,255,0.1),5px 5px 15px rgba(0,0,0,0.35)",
                      padding: " 5px",
                    }}
                    className="flex gap-1  text-xs font-semibold tracking-wider"
                  >
                    <FaGithub className="text-cyan-400  w-4 h-4"></FaGithub>{" "}
                    Client
                  </p>
                </Link>
              )}
            </div>
            <div>
              {ss_link && (
                <Link to={ss_link} target="_blank">
                  <p
                    style={{
                      borderRadius: "5px",

                      boxShadow:
                        "-5px -5px 15px rgba(255,255,255,0.1),5px 5px 15px rgba(0,0,0,0.35)",
                      padding: " 5px",
                    }}
                    className="flex gap-2  text-xs font-semibold tracking-wider"
                  >
                    <FaGithub className="text-cyan-400 w-4 h-4"></FaGithub>{" "}
                    Server
                  </p>
                </Link>
              )}
            </div>
            <div>
              {live_link && (
                <Link to={live_link} target="_blank">
                  <p
                    style={{
                      borderRadius: "5px",

                      boxShadow:
                        "-5px -5px 15px rgba(255,255,255,0.1),5px 5px 15px rgba(0,0,0,0.35)",
                      padding: " 5px",
                    }}
                    className="flex gap-2  text-xs font-semibold tracking-wider"
                  >
                    <FaLink className="text-cyan-400 w-4 h-4"></FaLink> Live
                  </p>
                </Link>
              )}
            </div>
          </div>
          <div className="cardOut mb-3"></div>
          <div className="card-actions justify-center flex gap-3 flex-wrap">
            {tecnologies &&
              tecnologies.map((tec, i) => (
                <p
                  style={{
                    border: "1px solid #292d32",
                    borderRadius: "20px",
                    padding: "6px",
                    boxShadow:
                      "-5px -5px 15px rgba(255, 255, 255, 0.01),  5px 5px 15px rgba(0, 0, 0, 0.35),     inset -5px -5px 15px rgba(255, 255, 255, 0.1), inset 5px 5px 15px rgba(0, 0, 0, 0.35)",
                  }}
                  className="text-slate-700 text-xs tracking-wider font-medium flex justify-center "
                  key={i}
                >
                  {tec}
                </p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSliderCard;
