import {FaLinkedin,FaGithub} from "react-icons/fa";
import {MdEmail} from "react-icons/md";

function Footer() {
  const year: number = new Date().getFullYear();

  return(
    <div>
      <footer className="bg-[rgb(39,42,48)] pt-[30px] pb-[25px] w-full z-[1000]">
        <div className="text-[rgb(78,82,86)] w-full flex flex-wrap justify-between">
          <div className="text-[30px] pt-[26px] flex gap-[25px] ml-[110px]">
            <a className="text-[rgb(211,217,221)] transition duration-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]" href="https://www.linkedin.com/in/davidt-nguyen/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a className="text-[rgb(211,217,221)] transition duration-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]" href="https://github.com/dtnguyen0" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a className="text-[rgb(211,217,221)] transition duration-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]" href="mailto:davidtn@umich.edu" target="_blank" rel="noopener noreferrer"><MdEmail /></a>
          </div>
          <div className="ml-[110px] pr-[110px] text-sm pt-[20px]">
            <p>Copyright © {year} David Nguyen. All Rights Reserved</p>
            <p>Built with React.js, TypeScript, and Tailwind CSS. Deployed with Netlify</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer