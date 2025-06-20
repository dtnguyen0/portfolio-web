import { FaGithub } from "react-icons/fa";

interface ProjectProps {
  name: string;
  url: string;
  summary: string;
  showGitHub: boolean;
  img1?: string; 
  img2?: string; 
  img3?: string; 
  img4?: string; 
  img5?: string; 
  img6?: string;
  img7?: string;
  img8?: string;
  img9?: string;
  img10?: string;
  img11?: string;
  img12?: string;
  img13?: string;
}

function Projectcard(project: ProjectProps) {
  const icons = [project.img1, project.img2, project.img3, project.img4, project.img5, project.img6, project.img7, project.img8, project.img9, project.img10, project.img11, project.img12, project.img13];

  return(
    <div className="bg-[rgb(50,54,61)] h-[350px] sm:h-[300px] w-[400px] px-[20px] sm:px-[30px] pb-[20px] pt-0 sm:pt-[5px] rounded-[15px] mb-[20px] shadow-[0_4px_6px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_6px_9px_rgba(0,0,0,0.4)]">
      <div className="flex justify-between items-center pt-[15px]">
        <h3 className="text-[22px] sm:text-[26px] font-bold"><b>{project.name}</b></h3>
        {project.showGitHub && <a href={project.url} className="text-[27px] sm:text-[30px] mt-[10px] mr-[2px] text-[rgb(211,217,221)] transition duration-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]" target="_blank" rel="noopener noreferrer"><FaGithub /></a>}
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {icons
          .filter((src) => src)
          .map((src, index) => (<img key={index} src={src} alt="" className="w-[26px] sm:w-[30px]" />))}
      </div>
      <p className="text-[14px] sm:text-base mt-2 text-[rgb(211,217,221)]">{project.summary}</p>
    </div>
  );
}

export default Projectcard