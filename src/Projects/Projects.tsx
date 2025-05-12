import Projectcard from './Projectcard.tsx'
import "./projects.css"

function Projects() {
  return(
    <div className="projects" id="projects">
      <div className="project-container">
        <h2>Projects</h2>
          <div className="project-cards">
            <Projectcard showGitHub={true} name="Ineedio" img1="images/reactjsicon.webp" img2="images/tsicon.png" img3="images/tailwindcssicon.png" img4="images/supabaseicon.png" img5="" img6="" url="https://github.com/Ineed-io/web"
              summary="A competitive internship tracker for users ongoning applications and statistices with a leaderboard that ranks users by the amount of internships applied." />
            <Projectcard showGitHub={false} name="Spotify Analysis" img1="images/pythonicon.png" img2="images/pandasicon.png" img3="images/numpyicon.png" img4="images/matplotlibicon.png" img5="" img6="" url=""
              summary="A Spotify statistics that displays a user’s most listened to artists, genres, songs, era, which allows users to automatically give song recommendations." />
            <Projectcard showGitHub={true} name="Portfolio Website" img1="images/reactjsicon.webp" img2="images/tsicon.png" img3="images/cssicon.png" img4="" img5="" img6="" url="https://github.com/dtnguyen0/portfolio"
              summary="The website you're seeing right now! :)" />
          </div>
        </div>
    </div>
  );
}

export default Projects