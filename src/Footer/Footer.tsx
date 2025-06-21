import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  const year: number = new Date().getFullYear();

  return (
    <div>
      <footer className="bg-[rgb(39,42,48)] pt-[30px] pb-[30px] w-full z-[1000]">
        <div className="px-[30px] sm:px-0 text-[rgb(78,82,86)] w-full flex flex-col md:flex-row flex-wrap justify-center md:justify-between items-center md:items-start text-center md:text-left gap-4">
          <div className="text-[30px] pt-[6px] flex gap-[15px] md:ml-[100px]">
            <a className="text-[rgb(211,217,221)] transition duration-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]"
              href="https://www.linkedin.com/in/davidt-nguyen/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a className="text-[rgb(211,217,221)] transition duration-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]"
              href="https://github.com/dtnguyen0" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a className="text-[rgb(211,217,221)] transition duration-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]"
              href="mailto:davidtn@umich.edu" target="_blank" rel="noopener noreferrer"><MdEmail /></a>
          </div>
          <div className="sm:text-sm text-[12px] md:mr-[100px]">
            <p>Copyright © {year} David Nguyen. All Rights Reserved</p>
            <p>Built with React.js, TypeScript, and Tailwind CSS. Deployed with Netlify</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
