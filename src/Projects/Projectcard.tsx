import { FaGithub } from "react-icons/fa";
import './projectcard.css'

interface ProjectProps {
  name: string;
  url: string;
  summary: string;
  showGitHub: boolean;
  img1: string; img2: string; img3: string; img4: string;
}

function Projectcard(project: ProjectProps) {
  return(
    <div className="project-card">
      <div className="project-top">
        <h3 className="project-name"><b>{project.name}</b></h3>
        {project.showGitHub && <a href={project.url} className="project-link" target="_blank" rel="noopener noreferrer"><FaGithub /></a>}
      </div>
      <img src={project.img1}></img><img src={project.img2}></img><img src={project.img3}></img><img src={project.img4}></img>
      <p className="project-summary">{project.summary}</p>
    </div>
  );
}

export default Projectcard