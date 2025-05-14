interface CoursecardProps {
  title: string;
  name: string;
}

function Coursecard(course: CoursecardProps) {
  return(
    <div className="bg-[rgb(50,54,61)] w-[200px] h-[150px] p-[14px] rounded-[16px] inline-block shadow-[0_4px_6px_rgba(0,0,0,0.2)] text-center text-white transition-all duration-300 ease-in-out hover:-translate-y-[3px] hover:shadow-[0_6px_9px_rgba(0,0,0,0.4)]">
      <h4 className="text-[22px] font-bold m-[2px] p-[6px] transition-all duration-300 ease-in-out">{course.title}</h4>
      <p className="text-[rgb(211,217,221)] m-[2px] p-[6px]">{course.name}</p>
    </div>
  );
}

export default Coursecard