const Shimmer = () => {
  const cards = new Array(10).fill(null);
  return (
    <div className="shimmer-container">
      {cards.map((_, index) => (
        <div key={index} className="shimmer-card"></div>
      ))}
    </div>
  );
};

export default Shimmer;
