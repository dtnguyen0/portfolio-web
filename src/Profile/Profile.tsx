import {FaLinkedin,FaGithub} from "react-icons/fa";
import "./profile.css"

function Profile() {
  const pic: string = "images/DavidProfHeadshot1.jpg"

  return(
    <div className="profile">
      <div className="profile-text">
        <p>Hi, my name is</p>
        <h1>David Nguyen</h1>
        <p>
          I am studying Computer Science and Mathematics <br /> 
          at the University of Michigan!
        </p>
        <p>Feel free to reach out! <b><u>davidt.nguyen05@gmail.com</u></b></p>
        <div className="profile-icons">
          <a className="profile-linkedin" href="https://www.linkedin.com/in/davidt-nguyen/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a className="profile-github" href="https://github.com/dtnguyen0/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>
      </div>
      <img src={pic}></img>
    </div>
  );
}

export default Profile