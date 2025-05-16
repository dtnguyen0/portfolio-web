interface WorkcardProps {
  web: string;
  name: string;
  pic: string;
  title: string;
  duration: string;
  team: string;
}

function Workcard(work: WorkcardProps) {
  return (
    <div className="bg-[rgb(50,54,61)] p-[30px] rounded-[16px] w-[400px] inline-block text-[rgb(211,217,221)] shadow-[0_4px_6px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_6px_9px_rgba(0,0,0,0.4)] text-center sm:text-left">
      <div className="flex flex-col sm:flex-row items-center sm:items-center gap-[20px]">
        <a href={work.web} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
          <img src={work.pic} className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] object-cover rounded-[10px] shadow-[0_0_0_5px_white] transition-all duration-300 ease-in-out hover:w-[104px] hover:h-[104px]" alt={work.name}/>
        </a>
        <h3 className="text-[22px] sm:text-[26px] text-white font-bold">{work.name}</h3>
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-between items-center sm:items-start mt-[20px]">
        <h4 className="text-[14px] sm:text-base font-bold text-white">{work.title}</h4>
        <p className="text-[12px] sm:text-[14px] text-[rgb(211,217,221)]"><i>{work.duration}</i></p>
      </div>
      <p className="text-[12px] sm:text-[14px] mt-1 sm:mt-0"><i>| {work.team}</i></p>
    </div>
  );
}

export default Workcard;
