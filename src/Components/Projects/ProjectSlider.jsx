/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ProjectSliderCard from "./ProjectSliderCard";

const TabSlider = () => {
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", "Design", "Development", "ReactJs", "Mern"];
  const projects = {
    All: [
      {
        image: "https://i.ibb.co/4TY5MXq/lang-1.png",
        name: "Langua Camp",

        cs_link: "https://github.com/mehedihasan5675/languacampClient",
        ss_link: "https://github.com/mehedihasan5675/languacampServer",
        live_link: "https://linguacamp-c49df.web.app/",
        tecnologies: [
          "React.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Firebase Authentication",
          "Tailwind Css",
          "JWT Verification",
          "React Router",
          "TanStack Query",
          "Axios Secure",
        ],
        category: "mern",
        site_details:
          "It is based on Language summer camp.Usually instructor can publish their special language cources here,base on their experience. However the instructor must login as a user firstly.If admin wants,he can give the instructor role to any users.Thats means the admin can manage the user from his admin panel.There is an option to delete the user.Normally any user will see the homepage.After login,there will be popular classes and any user selected any course by clicking SELECT button.User can payment their total course cost.Moreover many other feature i have added in this website. Please check it.",
      },
      {
        image: "https://i.ibb.co/hcymVh3/chef-B-1.png",
        name: "Bangle CheFy",
        cs_link: "https://github.com/mehedihasan5675/client-bengle-chefy",
        live_link: "https://the-chef-recipes-client-6b1af.web.app",
        ss_link: "https://github.com/mehedihasan5675/bengle-chefy-server",

        tecnologies: [
          "ReactJs",
          "TailwindCss",
          "DaisyUI",
          "Firebase Authentication",
          "ExpressJs",
        ],
        category: "react",
        site_details:
          "Bengle CheFy is a web application that has the best chef details profiles. Not only that, but also here they show all chef's unique recipes,through which they can be hired successfully.The user will first see a beautiful home page that has given a short description of the chef with his professionalism. Until a user logs in, they will not see the chef details information.This site has a lot of emphasis on design. So some great features have been given in this site .  The data of various achievements of the company is shown with the number count up animation.Moreover, lazy loader is used in the image.So the site is well optimized.",
      },
      {
        image: "https://i.ibb.co/W2nmcpv/car-1.png",
        name: "TrusToy",
        cs_link: "https://github.com/mehedihasan5675/car-toy-client",
        live_link: "https://car-toys-930ac.web.app",
        ss_link: "https://github.com/mehedihasan5675/car-toys-server",

        tecnologies: [
          "ReactJs",
          "TailwindCss",
          "DaisyUI",
          "Firebase Authentication",
          "ExpressJs",
          "MongoDB",
        ],
        category: "mern",
        site_details:
          "TrusToy has been  decorated well, providing a unique design.It has been designed keeping in mind of children. Some attractive animation are showed when it scrolled on. Firebase authentication is used here for the privacy of user information to be more secure.TrusToy allows user to view their posted toys to sell. They also can update and delete their toy. But any user can't access to edit and delete other products. All the Users can show all the toys which were posted for sale by the sellers and show all on the All  Toys page. Users can not add any product without login. They can log in two ways:  Google and Email with a Password. Once logged in they can add and update anything.",
      },
      {
        image: "https://i.ibb.co/RPsmMwX/lagbe-1.png",
        name: "Chakri Lagbe",
        cs_link: "https://github.com/mehedihasan5675/chakri-Lagbe",
        live_link: "https://gregarious-paprenjak-af1578.netlify.app",
        ss_link: null,

        tecnologies: [
          "ReactJs",
          "TailwindCss",
          "DaisyUI",
          "React Router",
          "Recharts",
        ],
        category: "react",
        site_details:
          "It is completely a front-end design base site.Backend features are not required on this website. Because this web application is created for job circular posts. Where the job will be released by the organization and applicants can apply as per  company's requirements.Firstly, applicants will see all the job circulars in the job cart on the home page . Where some main information is given. If the applicant is compatible with the job, he can see the complete information by clicking on view details, and it will show him on the new page.On the job details page, the user will see the Apply Now button. If clicked, the application will be successfully applied, and applied jobs will be shown on the applied jobs page.",
      },
      {
        image: "https://i.ibb.co/hcymVh3/chef-B-1.png",
        name: "Bangle CheFy",
        cs_link: "https://github.com/mehedihasan5675/client-bengle-chefy",
        live_link: "https://the-chef-recipes-client-6b1af.web.app",
        ss_link: "https://github.com/mehedihasan5675/bengle-chefy-server",

        tecnologies: [
          "ReactJs",
          "TailwindCss",
          "DaisyUI",
          "Firebase Authentication",
          "ExpressJs",
        ],
        category: "design",
        site_details:
          "Bengle CheFy is a web application that has the best chef details profiles. Not only that, but also here they show all chef's unique recipes,through which they can be hired successfully.The user will first see a beautiful home page that has given a short description of the chef with his professionalism. Until a user logs in, they will not see the chef details information.This site has a lot of emphasis on design. So some great features have been given in this site .  The data of various achievements of the company is shown with the number count up animation.Moreover, lazy loader is used in the image.So the site is well optimized.",
      },
    ],

    Design: [
      {
        image: "https://i.ibb.co/hcymVh3/chef-B-1.png",
        name: "Bangle CheFy",
        cs_link: "https://github.com/mehedihasan5675/client-bengle-chefy",
        live_link: "https://the-chef-recipes-client-6b1af.web.app",
        ss_link: "https://github.com/mehedihasan5675/bengle-chefy-server",

        tecnologies: [
          "ReactJs",
          "TailwindCss",
          "DaisyUI",
          "Firebase Authentication",
          "ExpressJs",
        ],
        category: "design",
        site_details:
          "Bengle CheFy is a web application that has the best chef details profiles. Not only that, but also here they show all chef's unique recipes,through which they can be hired successfully.The user will first see a beautiful home page that has given a short description of the chef with his professionalism. Until a user logs in, they will not see the chef details information.This site has a lot of emphasis on design. So some great features have been given in this site .  The data of various achievements of the company is shown with the number count up animation.Moreover, lazy loader is used in the image.So the site is well optimized.",
      },
    ],
    Development: [
      {
        image: "https://i.ibb.co/4TY5MXq/lang-1.png",
        name: "Langua Camp",

        cs_link: "https://github.com/mehedihasan5675/languacampClient",
        ss_link: "https://github.com/mehedihasan5675/languacampServer",
        live_link: "https://linguacamp-c49df.web.app/",
        tecnologies: [
          "React.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Firebase Authentication",
          "Tailwind Css",
          "JWT Verification",
          "React Router",
          "TanStack Query",
          "Axios Secure",
        ],
        category: "mern",
        site_details:
          "It is based on Language summer camp.Usually instructor can publish their special language cources here,base on their experience. However the instructor must login as a user firstly.If admin wants,he can give the instructor role to any users.Thats means the admin can manage the user from his admin panel.There is an option to delete the user.Normally any user will see the homepage.After login,there will be popular classes and any user selected any course by clicking SELECT button.User can payment their total course cost.Moreover many other feature i have added in this website. Please check it.",
      },
      {
        image: "https://i.ibb.co/W2nmcpv/car-1.png",
        name: "TrusToy",
        cs_link: "https://github.com/mehedihasan5675/car-toy-client",
        live_link: "https://car-toys-930ac.web.app",
        ss_link: "https://github.com/mehedihasan5675/car-toys-server",

        tecnologies: [
          "ReactJs",
          "TailwindCss",
          "DaisyUI",
          "Firebase Authentication",
          "ExpressJs",
          "MongoDB",
        ],
        category: "mern",
        site_details:
          "TrusToy has been  decorated well, providing a unique design.It has been designed keeping in mind of children. Some attractive animation are showed when it scrolled on. Firebase authentication is used here for the privacy of user information to be more secure.TrusToy allows user to view their posted toys to sell. They also can update and delete their toy. But any user can't access to edit and delete other products. All the Users can show all the toys which were posted for sale by the sellers and show all on the All  Toys page. Users can not add any product without login. They can log in two ways:  Google and Email with a Password. Once logged in they can add and update anything.",
      },

      {
        image: "https://i.ibb.co/hcymVh3/chef-B-1.png",
        name: "Bangle CheFy",
        cs_link: "https://github.com/mehedihasan5675/client-bengle-chefy",
        live_link: "https://the-chef-recipes-client-6b1af.web.app",
        ss_link: "https://github.com/mehedihasan5675/bengle-chefy-server",

        tecnologies: [
          "ReactJs",
          "TailwindCss",
          "DaisyUI",
          "Firebase Authentication",
          "ExpressJs",
        ],
        category: "design",
        site_details:
          "Bengle CheFy is a web application that has the best chef details profiles. Not only that, but also here they show all chef's unique recipes,through which they can be hired successfully.The user will first see a beautiful home page that has given a short description of the chef with his professionalism. Until a user logs in, they will not see the chef details information.This site has a lot of emphasis on design. So some great features have been given in this site .  The data of various achievements of the company is shown with the number count up animation.Moreover, lazy loader is used in the image.So the site is well optimized.",
      },
    ],
    ReactJs: [
      {
        image: "https://i.ibb.co/hcymVh3/chef-B-1.png",
        name: "Bangle CheFy",
        cs_link: "https://github.com/mehedihasan5675/client-bengle-chefy",
        live_link: "https://the-chef-recipes-client-6b1af.web.app",
        ss_link: "https://github.com/mehedihasan5675/bengle-chefy-server",

        tecnologies: [
          "ReactJs",
          "TailwindCss",
          "DaisyUI",
          "Firebase Authentication",
          "ExpressJs",
        ],
        category: "react",
        site_details:
          "Bengle CheFy is a web application that has the best chef details profiles. Not only that, but also here they show all chef's unique recipes,through which they can be hired successfully.The user will first see a beautiful home page that has given a short description of the chef with his professionalism. Until a user logs in, they will not see the chef details information.This site has a lot of emphasis on design. So some great features have been given in this site .  The data of various achievements of the company is shown with the number count up animation.Moreover, lazy loader is used in the image.So the site is well optimized.",
      },
      {
        image: "https://i.ibb.co/RPsmMwX/lagbe-1.png",
        name: "Chakri Lagbe",
        cs_link: "https://github.com/mehedihasan5675/chakri-Lagbe",
        live_link: "https://gregarious-paprenjak-af1578.netlify.app",
        ss_link: null,

        tecnologies: [
          "ReactJs",
          "TailwindCss",
          "DaisyUI",
          "React Router",
          "Recharts",
        ],
        category: "react",
        site_details:
          "It is completely a front-end design base site.Backend features are not required on this website. Because this web application is created for job circular posts. Where the job will be released by the organization and applicants can apply as per  company's requirements.Firstly, applicants will see all the job circulars in the job cart on the home page . Where some main information is given. If the applicant is compatible with the job, he can see the complete information by clicking on view details, and it will show him on the new page.On the job details page, the user will see the Apply Now button. If clicked, the application will be successfully applied, and applied jobs will be shown on the applied jobs page.",
      },
    ],
    Mern: [
      {
        image: "https://i.ibb.co/4TY5MXq/lang-1.png",
        name: "Langua Camp",

        cs_link: "https://github.com/mehedihasan5675/languacampClient",
        ss_link: "https://github.com/mehedihasan5675/languacampServer",
        live_link: "https://linguacamp-c49df.web.app/",
        tecnologies: [
          "React.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Firebase Authentication",
          "Tailwind Css",
          "JWT Verification",
          "React Router",
          "TanStack Query",
          "Axios Secure",
        ],
        category: "mern",
        site_details:
          "It is based on Language summer camp.Usually instructor can publish their special language cources here,base on their experience. However the instructor must login as a user firstly.If admin wants,he can give the instructor role to any users.Thats means the admin can manage the user from his admin panel.There is an option to delete the user.Normally any user will see the homepage.After login,there will be popular classes and any user selected any course by clicking SELECT button.User can payment their total course cost.Moreover many other feature i have added in this website. Please check it.",
      },
      {
        image: "https://i.ibb.co/W2nmcpv/car-1.png",
        name: "TrusToy",
        cs_link: "https://github.com/mehedihasan5675/car-toy-client",
        live_link: "https://car-toys-930ac.web.app",
        ss_link: "https://github.com/mehedihasan5675/car-toys-server",

        tecnologies: [
          "ReactJs",
          "TailwindCss",
          "DaisyUI",
          "Firebase Authentication",
          "ExpressJs",
          "MongoDB",
        ],
        category: "mern",
        site_details:
          "TrusToy has been  decorated well, providing a unique design.It has been designed keeping in mind of children. Some attractive animation are showed when it scrolled on. Firebase authentication is used here for the privacy of user information to be more secure.TrusToy allows user to view their posted toys to sell. They also can update and delete their toy. But any user can't access to edit and delete other products. All the Users can show all the toys which were posted for sale by the sellers and show all on the All  Toys page. Users can not add any product without login. They can log in two ways:  Google and Email with a Password. Once logged in they can add and update anything.",
      },
    ],
  };

  return (
    <div className="w-full ">
      {/* Tabs */}
      <div className="flex px-3 flex-wrap justify-center w-full gap-5">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            style={{
              padding: "10px 20px",
              border: "none",
              cursor: "pointer",
              borderRadius: "25px",
              backgroundColor: activeTab === category ? "#f9d8d9" : "#fff",
              color: activeTab === category ? "#f55b5b" : "#000",
              fontWeight: activeTab === category ? "bold" : "normal",
              boxShadow:
                activeTab === category
                  ? "0px 4px 8px rgba(0, 0, 0, 0.1)"
                  : "none",
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects */}
      <div
        // style={{
        //   display: "flex",
        //   gap: "20px",
        //   marginTop: "20px",
        //   justifyContent: "center",
        // }}
        className=" w-full gap-5 my-10 flex flex-wrap justify-center items-start "
      >
        {projects[activeTab].map((project, index) => (
          <div
            key={index}
            // className="mx-auto justify-center"
            // style={{
            //   width: "250px",
            //   height: "150px",
            //   backgroundColor: "#eee",
            //   borderRadius: "15px",
            //   textAlign: "center",
            //   lineHeight: "150px",
            //   fontWeight: "bold",
            //   boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            // }}
          >
            <ProjectSliderCard project={project}></ProjectSliderCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabSlider;
// background: linear-gradient(to right, #f9d8d9, #f5b8b8);
