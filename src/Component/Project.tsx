import { useEffect, useState } from "react";
import { PROJECTSDATA } from "../Store/Data";
import { BiLogoGithub } from "react-icons/bi";
import { BsGlobe } from "react-icons/bs";
import { GrDocumentText } from "react-icons/gr";
import ProjectDetailModal from "./project/ProjectDetailModal";

function Project() {
  const projectData = PROJECTSDATA;
  const [projects, setProjects] = useState(projectData);
  const [projectSort, setProjectSort] = useState("default");
  const [selectedProject, setSelectProject] = useState("");
  const [detailModal, setDetailModal] = useState(false);

  function switchKeyword(keyword: string) {
    let ClassName = "text-xs text-white mr-1 mb-1 px-2 py-1 rounded-full";
    switch (keyword) {
      case "React":
        ClassName += " bg-cyan-400";
        break;
      case "NextJS":
        ClassName += " bg-zinc-900";
        break;
      case "Webpack":
        ClassName += " bg-blue-300";
        break;
      case "Babel":
        ClassName += " bg-yellow-400";
        break;
      case "Typescript":
        ClassName += " bg-blue-700";
        break;
      case "Bootstrap":
        ClassName += " bg-violet-600";
        break;
      case "TailwindCSS":
        ClassName += " bg-blue-400";
        break;
      case "Styled-Components":
        ClassName += " bg-pink-500";
        break;
      case "Zustand":
        ClassName += " bg-amber-900";
        break;
      case "React-Query":
        ClassName += " bg-red-500";
        break;
      case "SCSS":
        ClassName += " bg-rose-400";
        break;
      default:
        ClassName += " bg-zinc-300";
        break;
    }

    return ClassName;
  }

  useEffect(() => {
    switch (projectSort) {
      case "default":
        setProjects(projectData);
        break;
      case "React":
        setProjects(projectData.filter((project) => project.keyword.includes("React")));
        break;
      case "NextJS":
        setProjects(projectData.filter((project) => project.keyword.includes("NextJS")));
        break;
      case "Typescript":
        setProjects(projectData.filter((project) => project.keyword.includes("Typescript")));
        break;
      case "Webpack":
        setProjects(projectData.filter((project) => project.keyword.includes("Webpack")));
        break;
      case "Babel":
        setProjects(projectData.filter((project) => project.keyword.includes("Babel")));
        break;
      case "Styled-Components":
        setProjects(projectData.filter((project) => project.keyword.includes("Styled-Components")));
        break;
      case "Zustand":
        setProjects(projectData.filter((project) => project.keyword.includes("Zustand")));
        break;
      case "React-Query":
        setProjects(projectData.filter((project) => project.keyword.includes("React-Query")));
        break;
      case "TailwindCSS":
        setProjects(projectData.filter((project) => project.keyword.includes("TailwindCSS")));
        break;
      case "Bootstrap":
        setProjects(projectData.filter((project) => project.keyword.includes("Bootstrap")));
        break;
      case "SCSS":
        setProjects(projectData.filter((project) => project.keyword.includes("SCSS")));
        break;
    }
  }, [projectData, projectSort]);

  const handleSelectProject = (name : string) => {
    setSelectProject(name);
    setDetailModal(true);
  }

  return (
    <div className="Project flex items-center justify-center w-full px-2 pt-12 pb-20 md:px-0 md:py-2 sm:pt-0 sm:pb-10 overflow-hidden">
      <div className="flex flex-col justify-between items-start w-10/12 md:w-full sm:w-full px-5 sm:px-2 py-2">
        <h1 className="Title">Projects</h1>
        <ul className="flex flex-wrap pb-2 text-white">
          <li onClick={() => setProjectSort("default")} className="text-black">
            #
          </li>
          <li onClick={() => setProjectSort("React")} className="bg-cyan-400">
            React
          </li>
          <li onClick={() => setProjectSort("NextJS")} className="bg-zinc-900">
            NextJS
          </li>
          <li onClick={() => setProjectSort("Typescript")} className="bg-blue-700">
            Typescript
          </li>
          <li onClick={() => setProjectSort("Webpack")} className="bg-blue-300">
            Webpack
          </li>
          <li onClick={() => setProjectSort("Babel")} className="bg-yellow-400">
            Babel
          </li>
          <li onClick={() => setProjectSort("Styled-Components")} className="bg-pink-500">
            Styled-Components
          </li>
          <li onClick={() => setProjectSort("Zustand")} className="bg-amber-900">
            Zustand
          </li>
          <li onClick={() => setProjectSort("React-Query")} className="bg-red-500">
            React-Query
          </li>
          <li onClick={() => setProjectSort("TailwindCSS")} className="bg-blue-400">
            TailwindCSS
          </li>
          <li onClick={() => setProjectSort("Bootstrap")} className="bg-violet-600">
            Bootstrap
          </li>
          <li onClick={() => setProjectSort("SCSS")} className="bg-rose-400">
            SCSS
          </li>
        </ul>
        <div className="w-full flex flex-wrap">
          {projects.map((project) => {
            return (
              <div className="ProjectBox" key={project.id}>
                <div className="ProjectImgBox">
                  <img src={project.image} alt="" />
                  <div></div>
                </div>
                <div className="LinkButtons">
                  {project.githubLink !== "" && (
                    <a href={project.githubLink} className="LinkButton">
                      <BiLogoGithub />
                    </a>
                  )}
                  {project.demoLink !== "" && (
                    <a href={project.demoLink} className="LinkButton">
                      <BsGlobe />
                    </a>
                  )}
                  {project.demoLink === "" && project.githubLink === "" && (
                    <button onClick={() => handleSelectProject(project.projectName)} className="LinkButton">
                      <GrDocumentText />
                    </button>
                  )}
                </div>
                <div className="ProjectContents">
                  <h3>{project.projectName}</h3>
                  <p className="break-keep">{project.descript}</p>
                  <div className="Keyword">
                    {project.keyword.map((keyword) => {
                      switchKeyword(keyword);
                      const ClassNames = switchKeyword(keyword);
                      return (
                        <div key={project.id + "keyword" + project.keyword.indexOf(keyword)} className={ClassNames}>
                          {keyword}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {detailModal && <ProjectDetailModal name={selectedProject} onClose={() => setDetailModal(false)} />}
    </div>
  );
}

export default Project;
