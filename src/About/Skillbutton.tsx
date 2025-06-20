import { useState } from "react";
import Tooltip from "./Tooltip";

const SkillIcon = ({ src, title }: { src: string; title: string }) => (
  <Tooltip title={title}><img src={src} alt={title} className="w-[45px] sm:w-[55px] h-[45px] sm:h-[55px] object-cover transition-all duration-300 ease-in-out hover:-translate-y-[3px]" /></Tooltip>
);

interface SkillProps {
  l1: string; l2: string; l3: string; l4: string; l5: string; l6: string; l7: string; l8: string; l9: string;
  t1: string; t2: string; t3: string; t4: string; t5: string; t6: string; t7: string; t8: string; t9: string; t10: string; t11: string; t12: string; t13: string;
  c1: string; c2: string; c3: string;
}

function Skill(tool: SkillProps) {
  const [skillOption, setSkillOption] = useState<string>("languages");

  const languages = [
    { title: "C++", src: tool.l1 },
    { title: "C", src: tool.l9 },
    { title: "Python", src: tool.l2 },
    { title: "HTML", src: tool.l3 },
    { title: "CSS", src: tool.l4 },
    { title: "JavaScript", src: tool.l5 },
    { title: "TypeScript", src: tool.l6 },
    { title: "MATLAB", src: tool.l7 },
    { title: "Verilog", src: tool.l8 },
  ];

  const technologies = [
    { title: "React.js", src: tool.t1 },
    { title: "Next.js", src: tool.t2 },
    { title: "Tailwind CSS", src: tool.t3 },
    { title: "PostgreSQL", src: tool.t4 },
    { title: "Supabase", src: tool.t5 },
    { title: "Pandas", src: tool.t6 },
    { title: "NumPy", src: tool.t7 },
    { title: "Matplotlib", src: tool.t8 },
    { title: "Pytorch", src: tool.t9 },
    { title: "Hugging Face", src: tool.t10 },
    { title: "Git", src: tool.t11 },
    { title: "AWS", src: tool.t12 },
    { title: "Azure", src: tool.t13 },
  ];

  const certifications = [
    { title: "AWS Cloud Practitioner", src: tool.c1 },
    { title: "Azure Fundamentals", src: tool.c2 },
    { title: "ISC2 Certified in Cybersecurity", src: tool.c3 },
  ];

  const getButtonClass = (active: boolean) =>
    `px-[20px] py-[10px] text-[18px] sm:text-[20px] w-[190px] sm:w-[230px] text-center rounded-[5px] border-2 cursor-pointer transition-all duration-300 ease-in-out shadow-[0_4px_6px_rgba(0,0,0,0.2)] ${active
        ? "bg-[rgb(1,2,2)] text-white bg-[rgb(28,186,248)] border-[rgb(28,186,248)] scale-[95%] shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:bg-[rgb(33,109,172)] hover:border-[rgb(33,109,172)]"
        : "text-[rgb(211,217,221)] bg-[rgb(50,54,61)] border-[rgb(50,54,61)] hover:bg-[rgb(33,109,172)] hover:border-[rgb(33,109,172)] hover:text-white"}`;

  return (
    <div className="flex flex-col items-center mb-[20px]">
      <div className="flex justify-center flex-wrap gap-[20px] mb-[22px]">
        <button className={getButtonClass(skillOption === "languages")} onClick={() => setSkillOption("languages")}>Languages</button>
        <button className={getButtonClass(skillOption === "technologies")} onClick={() => setSkillOption("technologies")}>Technologies</button>
        <button className={getButtonClass(skillOption === "certifications")} onClick={() => setSkillOption("certifications")}>Certifications</button>
      </div>
      <div className="bg-[rgb(50,54,61)] p-[25px] mx-[20px] sm:mx-base rounded-[16px] shadow-[0_4px_6px_rgba(0,0,0,0.2)] flex flex-wrap justify-center gap-[15px]">
        {(skillOption === "languages" ? languages
          : skillOption === "technologies" ? technologies
          : certifications).map(({ title, src }) => (
          <SkillIcon key={title} title={title} src={src} />
        ))}
      </div>
    </div>
  );
}

export default Skill;
