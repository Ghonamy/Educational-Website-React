function Review({ id, stars, description, img, name, job }) {
  return (
    <div className="review-card">
      <p className="stars">{stars}</p>
      <p className="description">{description}</p>
      <div className="reviewer">
        <img src={img} alt="Person1" />
        <div className="reviewer-info">
          <h4>{name}</h4>
          <p>{job}</p>
        </div>
      </div>
    </div>
  );
}

export default Review;
