import { useState } from "react"
import "./skillbutton.css"
import Tooltip from "./Tooltip.tsx"

interface SkillProps {
  l1: string; l2: string; l3: string; l4: string; l5: string; l6: string; l7: string; l8: string;
  t1: string; t2: string; t3: string; t4: string; t5: string; t6: string; t7: string; t8: string; t9: string; t10: string; t11: string;
  c1: string; c2: string; c3: string;
}

function Skill(tool: SkillProps) {
  const [skillOption, setSkillOption] = useState<string>("languages");

  const handleSelect = (skill: string) => {
    setSkillOption(skill);
  };

  return (
    <div className="skills">
      <div className="button-container">
        <button className={`skill-button ${skillOption === "languages" ? "selected" : ""}`} onClick={() => handleSelect("languages")}>Languages</button>
        <button className={`skill-button ${skillOption === "technologies" ? "selected" : ""}`} onClick={() => handleSelect("technologies")}>Technologies</button>
        <button className={`skill-button ${skillOption === "certifications" ? "selected" : ""}`} onClick={() => handleSelect("certifications")}>Certifications</button>
      </div>
      <div className="skill-images">
        {skillOption === "languages" && (
          <>
            <Tooltip title="C++"><img src={tool.l1} /></Tooltip>
            <Tooltip title="Python"><img src={tool.l2} /></Tooltip>
            <Tooltip title="HTML"><img src={tool.l3}/></Tooltip>
            <Tooltip title="CSS"><img src={tool.l4}/></Tooltip>
            <Tooltip title="JavaScript"><img src={tool.l5}/></Tooltip>
            <Tooltip title="TypeScript"><img src={tool.l6}/></Tooltip>
            <Tooltip title="MATLAB"><img src={tool.l7}/></Tooltip>
            <Tooltip title="Verilog"><img src={tool.l8}/></Tooltip>
          </>
        )}
        {skillOption === "technologies" && (
          <>
            <Tooltip title="React.js"><img src={tool.t1}/></Tooltip>
            <Tooltip title="Next.js"><img src={tool.t2}/></Tooltip>
            <Tooltip title="Tailwind CSS"><img src={tool.t3}/></Tooltip>
            <Tooltip title="PostgreSQL"><img src={tool.t4}/></Tooltip>
            <Tooltip title="Supabase"><img src={tool.t5}/></Tooltip>
            <Tooltip title="Pandas"><img src={tool.t6}/></Tooltip>
            <Tooltip title="NumPy"><img src={tool.t7}/></Tooltip>
            <Tooltip title="Matplotlib"><img src={tool.t8}/></Tooltip>
            <Tooltip title="Git"><img src={tool.t9}/></Tooltip>
            <Tooltip title="AWS"><img src={tool.t10}/></Tooltip>
            <Tooltip title="Azure"><img src={tool.t11}/></Tooltip>
          </>
        )}
        {skillOption === "certifications" && (
          <>
            <Tooltip title="AWS Cloud Practitioner"><img src={tool.c1}/></Tooltip>
            <Tooltip title="Azure Fundamentals"><img src={tool.c2}/></Tooltip>
            <Tooltip title="ISC2 Certified in Cybersecurity"><img src={tool.c3}/></Tooltip>
          </>
        )}
      </div>
    </div>
  );
}

export default Skill;
