import './workcard.css'

interface WorkcardProps{
  web: string;
  name: string;
  pic: string;
  title: string;
  duration: string;
  team: string;
}

function Workcard(work: WorkcardProps) {
  return(
    <div className="work-card">
      <div className="work-company">
        <a href={work.web} target="_blank" rel="noopener noreferrer"><img src={work.pic} className="work-pic"></img></a>
        <h3 className="work-name"><b>{work.name}</b></h3>
      </div>
      <div className="work-content">
        <h4 className="work-title">{work.title}</h4> 
        <p className="work-duration"><i>{work.duration}</i></p>
      </div>
      <p className="work-position">| <i>{work.team}</i></p>
    </div>
  );
}

export default Workcard