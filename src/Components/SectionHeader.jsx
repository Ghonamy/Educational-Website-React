function SectionHeader({ title, description }) {
  return (
    <div className="section-header">
      <span className="primary-text">Practice Advice</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default SectionHeader;
