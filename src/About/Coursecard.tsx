interface CoursecardProps {
  title: string;
  name: string;
}

function Coursecard(course: CoursecardProps) {
  return(
    <div className="bg-[rgb(50,54,61)] md:w-[200px] w-[180px] md:h-[150px] h-[130px] md:p-[14px] p-[4px] rounded-[16px] inline-block shadow-[0_4px_6px_rgba(0,0,0,0.2)] text-center text-white transition-all duration-300 ease-in-out hover:-translate-y-[3px] hover:shadow-[0_6px_9px_rgba(0,0,0,0.4)]">
      <h4 className="text-[18px] md:text-[22px] sm:text-[20px] font-bold m-[2px] p-[6px] transition-all duration-300 ease-in-out">{course.title}</h4>
      <p className="text-[13px] md:text-[16px] sm:text-[14px] text-[rgb(211,217,221)] m-[2px] p-[6px]">{course.name}</p>
    </div>
  );
}

export default Coursecard