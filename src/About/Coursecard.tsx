import './coursecard.css'

interface CoursecardProps {
  title: string;
  name: string;
}

function Coursecard(course: CoursecardProps) {
  return(
    <div className="course-card">
      <h4 className="course-title">{course.title}</h4>
      <p className="course-name">{course.name}</p>
    </div>
  );
}

export default Coursecard