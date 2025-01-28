import { ratingData } from "../../Data";
import Review from "./Review";
import SectionHeader from "./SectionHeader";

function Reviews() {
  return (
    <section id="reviews">
      <div className="container">
        <SectionHeader
          title={"Each and Every Client is Important"}
          description={
            "Discover What our Students are Saying in The Reviews Section! Real Feedback From Learners Who have Experienced and Benefited From our Courses."
          }
        />
        <div className="reviews-container">
          {ratingData.map((rating) => {
            const { id, stars, description, img, name, job } = rating;
            return (
              <Review
                key={id}
                stars={stars}
                description={description}
                img={img}
                name={name}
                job={job}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Reviews;
