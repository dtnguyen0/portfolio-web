import {FaLinkedin,FaGithub} from "react-icons/fa";

function Profile() {
  const pic: string = "images/DavidProfHeadshot1.jpg"

  return(
    <div className="flex flex-row justify-center items-center pt-0 pb-0 relative bg-[url('/images/umichbackground.jpg')] bg-cover bg-center bg-no-repeat h-screen">
      <div className="text-white z-10 max-w-[600px] text-left">
        <p className="text-white text-[18px] my-[10px]">Hi, my name is</p>
        <h1 className="text-[rgb(28,186,248)] font-bold text-[50px] mb-[20px]">David Nguyen</h1>
        <p>
          I am studying Computer Science and Mathematics <br /> 
          at the University of Michigan!
        </p>
        <p>Feel free to reach out! <b className="text-[rgb(28,186,248)]"><u>davidtn@umich.com</u></b></p>
        <div className="flex gap-2 mt-1 text-[30px]">
          <a className="text-[rgb(211,217,221)] hover:text-white transition duration-300 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]" href="https://www.linkedin.com/in/davidt-nguyen/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a className="text-[rgb(211,217,221)] hover:text-white transition duration-300 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]" href="https://github.com/dtnguyen0/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>
      </div>
      <img src={pic} className="rounded-full w-[300px] h-[300px] object-cover z-10 shadow-[0_5px_10px_rgba(0,0,0,0.3)] ml-[11%]"></img>
    </div>
  );
}

export default Profile