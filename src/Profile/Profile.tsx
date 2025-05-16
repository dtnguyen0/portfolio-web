import { FaLinkedin, FaGithub } from "react-icons/fa";

function Profile() {
  const pic: string = "images/DavidProfHeadshot1.jpg";

  return (
    <div className="flex flex-col md:flex-row justify-center items-center pt-[150px] md:pt-[250px] pb-[70px] md:py-[170px] relative bg-[url('/images/umichbackground.jpg')] bg-cover bg-center bg-no-repeat text-center md:text-left">
      <div className="text-white z-10 max-w-[600px]">
        <p className="text-[14px] sm:text-[18px] my-[10px]">Hi, my name is</p>
        <h1 className="text-[40px] sm:text-[50px] text-[rgb(28,186,248)] font-bold mb-[20px]">David Nguyen</h1>
        <p className="text-sm sm:text-base">
          I am studying Computer Science and Mathematics <br />
          at the University of Michigan!
        </p>
        <p className="text-sm sm:text-base">
          Feel free to reach out!{" "}<b className="text-[rgb(28,186,248)]"><u>davidtn@umich.com</u></b>
        </p>
        <div className="flex justify-center md:justify-start gap-2 mt-1 text-[24px] sm:text-[30px]">
          <a className="text-[rgb(211,217,221)] hover:text-white transition duration-300 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]"
             href="https://www.linkedin.com/in/davidt-nguyen/" target="_blank" rel="noopener noreferrer"><FaLinkedin />
          </a>
          <a className="text-[rgb(211,217,221)] hover:text-white transition duration-300 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]"
             href="https://github.com/dtnguyen0/" target="_blank" rel="noopener noreferrer"><FaGithub />
          </a>
        </div>
      </div>
      <img src={pic} alt="profile" className="w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] rounded-full object-cover z-10 shadow-[0_5px_10px_rgba(0,0,0,0.3)] mt-[40px] md:mt-0 md:ml-[11%]"/>
    </div>
  );
}

export default Profile;
