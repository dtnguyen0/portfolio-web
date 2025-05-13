import { useState } from "react"
import './header.css'

function Header() {
  const [open, setOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setOpen(!open);
  }

  return (
    <div>
    <nav className="bg-[rgb(39,42,48)] fixed top-0 left-0 w-full z-[1000] shadow-[0_2px_10px_rgba(0,0,0,0.4)] pl-[55px] pt-[15px] pb-[15px]">
      <div className="flex justify-between text-center m-auto pr-[100px] items-center">
        <a href="#" className="text-[rgb(28,186,248)] text-[1.7rem] font-bold transition duration-300 hover:text-[rgb(72,203,251)] hover:drop-shadow-[0_0_10px_rgba(64,226,255,0.1)]">David Nguyen</a>
          <div className="block md:hidden text-white text-2xl cursor-pointer" onClick={toggleMenu}>☰</div>
          <ul className={`md:flex list-none p-0 flex-row ml-4 ${open ? "flex" : "hidden"}`}>
            <li className="text-[1.084rem] ml-[25px] mt-[6px]"><a className="text-[rgb(211,217,221)] font-bold transition duration-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]" href="#about">About</a></li>
            <li className="text-[1.084rem] ml-[25px] mt-[6px]"><a className="text-[rgb(211,217,221)] font-bold transition duration-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]" href="#experiences">Experiences</a></li>
            <li className="text-[1.084rem] ml-[25px] mt-[6px]"><a className="text-[rgb(211,217,221)] font-bold transition duration-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]" href="#projects">Projects</a></li>
            <li className="text-[1.084rem] ml-[25px] mt-[6px]"><a href="./images/David_Nguyen_Resume_Website.pdf" target="_blank" className="text-[rgb(28,186,248)] font-bold transition duration-300 hover:text-[rgb(72,203,251)] hover:drop-shadow-[0_0_10px_rgba(64,226,255,0.1)]" rel="noopener noreferrer">Resume</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header