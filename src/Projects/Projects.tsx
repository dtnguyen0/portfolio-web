import Projectcard from './Projectcard.tsx'

function Projects() {
  return(
    <div className="bg-[rgb(32,35,40)] rounded-[10px] pt-[30px] px-[40px] pb-[30px] mt-[40px] mb-[40px] mx-[-50px] sm:mx-[-30px] md:mx-0 text-[rgb(211,217,221)] shadow-[0_5px_10px_rgba(0,0,0,0.4)]" id="projects">
      <div>
        <h2 className="text-center text-white font-bold text-[32px] sm:text-[40px] mb-[20px]">Projects</h2>
          <div className="flex flex-wrap justify-center gap-[20px] mt-[5%]"> 
            <Projectcard showGitHub={false} name="Trading Bot" url=""
              img1="images/cppicon.png" img2="images/pythonicon.png" img3="images/hficon.png" img4="images/pytorchicon.png" img5="images/pandasicon.png" img6="images/numpyicon.png" img7="images/reactjsicon.webp" img8="images/tsicon.png" img9="images/tailwindcssicon.png" img10="images/postgresqlicon.png"
              summary="A NASDAQ trading bot that uses machine learning to analyze certain trades the bot took and forecast the market to provide details for fast decision-making." />
            <Projectcard showGitHub={true} name="Ineedio" url="https://github.com/Ineed-io/web"
              img1="images/reactjsicon.webp" img2="images/tsicon.png" img3="images/tailwindcssicon.png" img4="images/supabaseicon.png"
              summary="A competitive internship tracker for users ongoing applications and statistics with a leaderboard that ranks users by the amount of internships applied." />
            <Projectcard showGitHub={false} name="Spotify Analysis" url=""
              img1="images/pythonicon.png" img2="images/pandasicon.png" img3="images/numpyicon.png" img4="images/matplotlibicon.png"
              summary="A Spotify statistics that displays a user’s most listened to artists, genres, songs, era, which allows users to automatically give song recommendations." />
            <Projectcard showGitHub={true} name="Portfolio Website" url="https://github.com/dtnguyen0/portfolio"
              img1="images/reactjsicon.webp" img2="images/tsicon.png" img3="images/tailwindcssicon.png" 
              summary="The website you're seeing right now! :)" />
          </div>
        </div>
    </div>
  );
}

export default Projects