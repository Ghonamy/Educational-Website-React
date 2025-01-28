import { CardData } from "../../Data";
import Card from "./Card";
function Home() {
  return (
    <section id="home">
      <div className="container">
        <div className="home-header">
          <span>Join Us</span>
          <h1>Best Learning Opportunities</h1>
          <p>
            We Know How Large Objects Will Act, But Things On a Small Scale Just
            do not act that Way
          </p>
          <div className="buttons">
            <a href="#" className="btn red-btn">
              Get Quote Now
            </a>
            <a href="#" className="btn transparent-btn">
              Learn More
            </a>
          </div>
        </div>
        <div className="cards-container">
          {CardData.map((card) => {
            const { id, title, description, bgColor, color, img } = card;
            return (
              <Card
                key={id}
                title={title}
                description={description}
                bgColor={bgColor}
                color={color}
                img={img}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Home;
