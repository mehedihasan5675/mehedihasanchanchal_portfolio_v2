import { useEffect, useState } from "react";
import KeyStyle from "../KeyStyle/KeyStyle";
import SectionTitle from "../SectionTitle/SectionTitle";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("./projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);
  return (
    <div className="containerr">
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        id="projects"
        className=" p-4 "
      >
        <KeyStyle></KeyStyle>
        <SectionTitle title="My Demo Sites"></SectionTitle>
        <div className="grid md:grid-cols-2 gap-10 ">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project}></ProjectCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
