import { useEffect, useState } from "react";
type TProjectdetails = {
  image: string;
  name: string;
  cs_link: string;
  live_link: string;
  ss_link?: string | null;
  tecnologies: string[];
  category: string;
  site_details: string;
};
const [projects, setProjects] = useState([]);

const [filtePprojects, setFilterProjects] = useState([]);
useEffect(() => {
  fetch("./projects.json")
    .then((res) => res.json())
    .then((data) => {
      setProjects(data);
    });
}, []);
const filterProjects = (category) => {
  const selectedCategory = projects?.filter((item) => item === category);
  console.log(projects, "h");
};
filterProjects("design");
export default filterProjects;
