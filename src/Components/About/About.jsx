/* eslint-disable react/no-unescaped-entities */
import about from "../../../public/about.jpg";
import KeyStyle from "../KeyStyle/KeyStyle";
import { InfiniteMovingCardsDemo } from "../ui/infiniteMovingCardComponent";
import { TextRevealCard } from "../ui/text-reveal-card";
const About = () => {
  return (
    <div id="about" className="containerr">
      <div data-aos="fade-up" data-aos-duration="3000" className=" w-full p-4 ">
        <KeyStyle></KeyStyle>
        {/* <SectionTitle title="Who am I?"></SectionTitle> */}
        <TextRevealCard
          text="Guess Who am I?"
          revealText="Yes,I am a Developer! "
        ></TextRevealCard>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="flex md:flex-row flex-col my-5 gap-5 items-center justify-center"
        >
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="md:w-4/12 w-full flex justify-center"
          >
            <img
              style={{
                borderRadius: "100%",
                boxShadow:
                  "-5px -5px 15px rgba(255,255,255,0.1),5px 5px 15px rgba(0,0,0,0.35)",
              }}
              className="rounded-full h-76 md:h-64 md:w-64 w-76 "
              src={about}
              alt=""
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="md:w-8/12 w-full text-white flex justify-center"
          >
            <div className=" p-2">
              <h2 className="text-slate-500 tracking-wider font-poppins text-sm lg:text-base">
                <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo>
              </h2>
            </div>
          </div>
        </div>

        {/* <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="flex md:flex-row flex-col my-5 gap-5 items-center justify-center"
        >
          <div className="w-full md:w-1/2  p-2">
            <h3 className="text-slate-500 tracking-wider font-poppins text-sm lg:text-base">
              I can adapt myself with any new tecnology and attached me to any
              upcoming situation.That's what makes me more stronger from
              others.But i think ,i have another strong point behind it.That is
              the ability to make quick decision.Since my school life i am a
              member of debating club and having experience of leading in team
              games.I already have the power of leadership in me.As a result i
              can take right decision and in a very short time.I do not allow
              laziness in my work.I like to stick around until my ongoing tasks
              are done. I am a hard working person and i like a hard worker very
              much.
            </h3>
          </div>
          <div className="w-full md:w-1/2  p-2">
            <h3 className="text-slate-500 tracking-wider font-poppins text-sm lg:text-base ">
              My ability for successful communication with employees at all
              levels is one of my greatest assets. I think that creating a
              supportive and effective work environment requires open and honest
              communication. My ability to build and maintain relationships with
              customers, partners, and team members is somethings I take very
              seriously in.I am truly enjoy to support the Company's ongoing
              success and growth. I am sure that my skills, beginning, and
              personality make me the best candidate for the Front End Developer
              position. I'm excited to contribute my knowledge and even the
              goals of your Company.
            </h3>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
