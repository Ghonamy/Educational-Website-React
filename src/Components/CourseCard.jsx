import { FaStar } from "react-icons/fa";
import { IoMdAlarm } from "react-icons/io";
import { FaBookOpen } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
function CourseCard({
  img,
  department,
  title,
  rating,
  sales,
  description,
  price,
  discount,
  duration,
  lessons,
}) {
  return (
    <div className="course-card">
      <img src={img} alt={title} />
      <div className="course-content">
        <div className="card-header">
          <p className="department">{department}</p>
          <p className="rating">
            <FaStar /> {rating}
          </p>
        </div>
        <h3>{title}</h3>
        <p className="description">{description}</p>
        <p className="sales">{sales} Sales</p>
        <div className="price">
          <del>{price}</del>
          <span className="secondary-text">{discount}</span>
        </div>
        <div className="course-info">
          <p className="duration">
            <IoMdAlarm />
            {duration}
          </p>
          <p className="lessons">
            <FaBookOpen />
            {lessons}
          </p>
        </div>
        <a href="#">
          Learn More <IoIosArrowForward />
        </a>
      </div>
    </div>
  );
}

export default CourseCard;
