import { FaGithub } from "react-icons/fa";
import './projectcard.css'

interface ProjectProps {
  name: string;
  url: string;
  summary: string;
  showGitHub: boolean;
  img1: string; 
  img2: string; 
  img3: string; 
  img4: string; 
  img5: string; 
  img6: string;
}

function Projectcard(project: ProjectProps) {
  return(
    <div className="bg-[rgb(50,54,61)] w-[400px] px-[30px] pb-[20px] pt-[5px] rounded-[15px] mb-[20px] shadow-[0_4px_6px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_6px_9px_rgba(0,0,0,0.4)]">
      <div className="flex justify-between items-center">
        <h3 className="text-[26px] font-bold"><b>{project.name}</b></h3>
        {project.showGitHub && <a href={project.url} className="text-[30px] mt-[10px] mr-[2px] text-[rgb(211,217,221)] transition duration-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]" target="_blank" rel="noopener noreferrer"><FaGithub /></a>}
      </div>
      <img src={project.img1}></img><img src={project.img2}></img><img src={project.img3}></img><img src={project.img4}></img><img src={project.img5}></img><img src={project.img6}></img>
      <p className="mt-2 text-[rgb(211,217,221)]">{project.summary}</p>
    </div>
  );
}

export default Projectcard