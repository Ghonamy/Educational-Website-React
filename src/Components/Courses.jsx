import { CoursesData } from "../../Data";
import CourseCard from "./CourseCard";
import SectionHeader from "./SectionHeader";

function Courses() {
  return (
    <section id="courses">
      <div className="container">
        <SectionHeader
          title="Make Online Education Acessible"
          description="Education Is The Most Powerful Tool To Unlock Potential, Ignite Curiosity, and Transformative, ePowering Students To Achieve Thier Dreams and Build The Skills They Need For Success in an Even Ever-Changing World."
        />
        <div className="courses-container">
          {CoursesData.map((course) => {
            const {
              id,
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
            } = course;
            return (
              <CourseCard
                key={id}
                img={img}
                department={department}
                title={title}
                rating={rating}
                sales={sales}
                description={description}
                price={price}
                discount={discount}
                duration={duration}
                lessons={lessons}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Courses;
