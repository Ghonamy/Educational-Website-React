// eslint-disable-next-line react/prop-types
function Card({ title, description, img, color, bgColor }) {
  return (
    <div className="card">
      <span className="icon" style={{ color: color, backgroundColor: bgColor }}>
        {img}
      </span>
      <h2>{title}</h2>
      <span className="line"></span>
      <p>{description}</p>
    </div>
  );
}

export default Card;
