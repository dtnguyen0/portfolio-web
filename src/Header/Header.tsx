import { useState } from "react"
import './header.css'

function Header() {
  const [open, setOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setOpen(!open);
  }

  return (
    <div>
      <nav>
        <div className="nav-container">
          <a href="#" className="nav-name">David Nguyen</a>
          <ul className="nav-list">
            <li><a href="#about">About</a></li>
            <li><a href="#experiences">Experiences</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="./images/David_Nguyen_Resume_Website.pdf" target="_blank" className="resume" rel="noopener noreferrer">Resume</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header