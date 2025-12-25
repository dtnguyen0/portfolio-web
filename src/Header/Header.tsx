import { useState } from "react"

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
          <div className="mr-[-50px] md:hidden text-white text-2xl cursor-pointer" onClick={toggleMenu}>☰</div>
          
          <ul className="hidden md:flex list-none items-center gap-[25px] text-[1.084rem] mt-[6px] mr-[-50px]">
            <li><a href="#about" className="text-[rgb(211,217,221)] font-bold hover:text-white transition duration-300 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">About</a></li>
            <li><a href="#experiences" className="text-[rgb(211,217,221)] font-bold hover:text-white transition duration-300 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">Experiences</a></li>
            <li><a href="#projects" className="text-[rgb(211,217,221)] font-bold hover:text-white transition duration-300 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">Projects</a></li>
            <li><a href="./images/David_Nguyen_Resume (37).pdf" target="_blank" rel="noopener noreferrer" className="text-[rgb(28,186,248)] font-bold hover:text-[rgb(72,203,251)] transition duration-300 hover:drop-shadow-[0_0_10px_rgba(64,226,255,0.1)]">Resume</a></li>
          </ul>

          {open && (
            <ul className="md:hidden absolute top-[65px] right-[20px] bg-[rgb(39,42,48)] w-[200px] flex flex-col text-center shadow-[0_4px_6px_rgba(0,0,0,0.3)] rounded-md py-2 gap-2">
              <li><a href="#about" className="block text-[rgb(211,217,221)] font-bold px-4 py-2 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">About</a></li>
              <li><a href="#experiences" className="block text-[rgb(211,217,221)] font-bold px-4 py-2 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">Experiences</a></li>
              <li><a href="#projects" className="block text-[rgb(211,217,221)] font-bold px-4 py-2 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">Projects</a></li>
              <li><a href="./images/David_Nguyen_Resume (37).pdf" target="_blank" rel="noopener noreferrer" className="block text-[rgb(28,186,248)] font-bold px-4 py-2 hover:text-[rgb(72,203,251)] hover:drop-shadow-[0_0_10px_rgba(64,226,255,0.1)]">Resume</a></li>
            </ul>
          )}

        </div>
      </nav>
    </div>
  );
}

export default Header