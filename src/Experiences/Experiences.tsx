import Workcard from './Workcard.tsx'

function Experiences() {
  return(
    <div className="bg-[rgb(32,35,40)] rounded-[10px] pt-[30px] px-[40px] pb-[50px] mt-[40px] mb-[40px] mx-[-30px] md:mx-0 text-[rgb(211,217,221)] shadow-[0_5px_10px_rgba(0,0,0,0.4)]" id="experiences">
      <h2 className="text-center text-white font-bold text-[32px] sm:text-[40px] mb-[20px]">Experiences</h2>
        <div className="flex flex-wrap justify-center gap-[20px] mt-[5%]">
          <Workcard pic="images/voidtechlogo.jpg" web="https://void-tech-um.github.io/index.html"
            name="VOID Tech" title="Software Developer" team="GSGEDM Backend Developer Team" duration="Janurary 2025 - Present"/>
          <Workcard pic="images/n2klogo.jpg" web="https://www.n2k.com/"
            name="N2K" title="IT Intern" team="Talent Development Team" duration="November 2023 – July 2024"/>
          <Workcard pic="images/sblogo.jpg" web="https://www.montgomeryschoolsmd.org/schools/springbrookhs/"
            name="Springbrook High School" title="IT Intern" team="IT Department" duration="June 2023 – September 2023"/>
        </div>
    </div>
  );
}

export default Experiences