import Coursecard from "./Coursecard.tsx"
import Skillbutton from "./Skillbutton.tsx"
import Tooltip from "./Tooltip.tsx"
import "./about.css"

function About(){
  return(
    <div className="about" id="about">
      <div className="about-container">
        <h2>About</h2>
        <div className="about-text">
          <p>I am passionate programmer with interests in AI, Machine Learning, Computer Hardware, Software Development, and Cloud Computing, I want to turn ideas into reality with software solutions that are applicable in any situation.</p>
          <p>My experience spans from full-stack development, cloud computing, and data science technologies and languages such as C++, React.js, Python, and AWS.</p>
          <p>Outside of everything technical, I've acquired many skills and a variety of interests. I've had the privilege of cutting hair for over 25 students—a skill I picked up as a way to connect with others. I also enjoy listening and discovering new music (with my main playlist has over 1,400 songs!), investing, staying active through workouts, and experiencing different cultures.</p>
        </div>
        <div className="div-bar"></div>
        <div className="education-container">
          <h3>Education</h3>
          <Tooltip title="GO BLUE!"><img className="umich-icon" src="images/umichicon.png"></img></Tooltip>
          <p><i>Bachelor of Science in Engineering in Computer Science, Minor in Mathematics</i></p>
          <div className="courses">
            <Coursecard title="EECS 281" name="Data Structures and Algorithms" />
            <Coursecard title="EECS 370" name="Computer Organization" />
            <Coursecard title="EECS 280" name="C++ Programming and Data Structures" />
            <Coursecard title="EECS 270" name="Logic Design" />
            <Coursecard title="EECS 203" name="Discrete Math" />
            <Coursecard title="EECS 201" name="Computer Science Pragmatics" />
            <Coursecard title="MATH 425" name="Probability Theory" />
            <Coursecard title="MATH 215" name="Vector and Multivariable Calculus"  />
            <Coursecard title="MATH 214" name="Linear Algebra" />
          </div>
        </div>
        <div className="div-bar"></div>
        <div className="skills-container">
          <h3>Skills</h3>
          <Skillbutton l1="images/cppicon.png" l2="images/pythonicon.png" l3="images/htmlicon.png" l4="images/cssicon.png" l5="images/jsicon.png" l6="images/tsicon.png" l7="images/matlabicon.png" l8="images/verilogicon.png" l9="images/cison.png"
                       t1="images/reactjsicon.webp" t2="images/nextjsicon.png" t3="images/tailwindcssicon.png" t4="images/postgresqlicon.png" t5="images/supabaseicon.png" t6="images/pandasicon.png" t7="images/numpyicon.png" t8="images/matplotlibicon.png" t9="images/giticon.png" t10="images/awsicon.png" t11="images/azureicon.png"
                       c1="images/awscpimg.png" c2="images/azurefunimg.png" c3="images/isc2ccimg.png"/>
        </div>
      </div>
    </div>
  );
}

export default About