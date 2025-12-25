import Coursecard from "./Coursecard.tsx"
import Skillbutton from "./Skillbutton.tsx"
import Tooltip from "./Tooltip.tsx"

function About(){
  return(
    <div className="bg-[rgb(32,35,40)] rounded-[10px] pt-[20px] px-[20px] sm:px-[40px] pb-[30px] mt-[40px] mb-[40px] mx-[-50px] sm:mx-[-30px] md:mx-0 text-[rgb(211,217,221)] shadow-[0_5px_10px_rgba(0,0,0,0.4)]" id="about">
      <h2 className="text-center text-white font-bold text-[32px] sm:text-[40px] mb-[20px]">About</h2>
      <div className="text-center text-[26px] sm:text-[32px] mb-[20px] px-[20px] md:px-[50px]">
        <p className="text-[58%] leading-[1.6]">I am passionate programmer with interests in Systems Programming, Backend, Cloud Computing, and Computer Hardware. I want to turn ideas into reality with software solutions that are applicable in any situation.</p>
        <p className="text-[58%] leading-[1.6] mt-4">My experience spans from full-stack development, cloud computing, and data science technologies and languages such as C++, React.js, Python, and AWS.</p>
        <p className="text-[58%] leading-[1.6] mt-4">Outside of everything technical, I've acquired many skills and a variety of interests. I've had the privilege of cutting hair for over 35 students—a skill I picked up as a way to connect with others. I also enjoy listening and discovering new music (with my main playlist has over 1,500 songs!), investing, staying active through workouts, and experiencing different cultures.</p>
      </div>
      <div className="w-[90%] h-[2px] bg-[rgb(80,83,85)] my-[30px] mx-auto"></div>
      <div className="text-center mb-[40px]">
        <h3 className="text-white font-bold text-[26px] sm:text-[32px] mb-2">Education</h3>
        <Tooltip title="GO BLUE!"><img className="w-[95px] shadow-[0_4px_6px_rgba(0,0,0,0.2)] mx-auto" src="images/umichicon.png"></img></Tooltip>
        <p className="text-[14px] sm:text-base"><i>Bachelor of Science in Engineering in Computer Science, Minor in Mathematics</i></p>
        <div className="flex flex-wrap justify-center gap-[20px] mt-[5%]">
          <Coursecard title="EECS 281" name="Data Structures and Algorithms" />
          <Coursecard title="EECS 482/408" name="Operating Systems" />          
          <Coursecard title="EECS 485" name="Web Systems" />
          <Coursecard title="EECS 370" name="Computer Organization" />
          <Coursecard title="EECS 280" name="Programming and Data Structures" />
          <Coursecard title="EECS 270" name="Logic Design" />
          <Coursecard title="EECS 203" name="Discrete Math" />
          <Coursecard title="MATH 425" name="Probability" />
          <Coursecard title="MATH 215" name="Vector and Multivariable Calculus"  />
          <Coursecard title="MATH 214" name="Linear Algebra" />
        </div>
      </div>
      <div className="w-[90%] h-[2px] bg-[rgb(80,83,85)] my-[30px] mx-auto"></div>
      <div className="text-center">
        <h3 className="text-white text-[26px] sm:text-[32px] font-bold mb-4">Skills</h3>
        <Skillbutton l1="images/cppicon.png" l2="images/pythonicon.png" l3="images/htmlicon.png" l4="images/cssicon.png" l5="images/jsicon.png" l6="images/tsicon.png" l7="images/matlabicon.png" l8="images/verilogicon.png" l9="images/cison.png" l10="images/asmicon.png"
                      t1="images/reactjsicon.webp" t2="images/nextjsicon.png" t3="images/tailwindcssicon.png" t4="images/postgresqlicon.png" t5="images/supabaseicon.png" t6="images/pandasicon.png" t7="images/numpyicon.png" t8="images/matplotlibicon.png" t9="images/pytorchicon.png" t10="images/hficon.png" t11="images/giticon.png" t12="images/awsicon.png" t13="images/azureicon.png"
                      c1="images/awscpimg.png" c2="images/azurefunimg.png" c3="images/isc2ccimg.png"/>
      </div>
    </div>
  );
}

export default About