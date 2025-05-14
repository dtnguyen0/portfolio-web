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
    <div className="bg-[rgb(50,54,61)] p-[30px] rounded-[16px] w-[400px] inline-block text-left text-[rgb(211,217,221)] shadow-[0_4px_6px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_6px_9px_rgba(0,0,0,0.4)]">
      <div className="flex items-center gap-[30px] text-left">
        <a href={work.web} target="_blank" rel="noopener noreferrer" className="flex-shrink-0"><img src={work.pic} className="w-[100px] h-[100px] object-cover flex-shrink-0 rounded-[10px] shadow-[0_0_0_5px_white] transition-all duration-300 ease-in-out hover:w-[104px] hover:h-[104px]"></img></a>
        <h3 className="text-[26px] text-white m-0 font-bold"><b>{work.name}</b></h3>
      </div>
      <div className="flex justify-between items-center mt-[20px]">
        <h4 className="font-bold text-white m-0 pl-[2px]">{work.title}</h4> 
        <p className="text-[14px] text-[rgb(211,217,221)] text-right m-0"><i>{work.duration}</i></p>
      </div>
      <p className="text-[14px] m-0 pl-[2px]">| <i>{work.team}</i></p>
    </div>
  );
}

export default Workcard