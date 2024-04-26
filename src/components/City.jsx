export default function City({ city }) {
  return (
    <section className="city-content">
      <div className="city-description">
        <h2>{city.name}</h2>
        <p>{city.description}</p>
      </div>
      <div className="city-image">
        <img
          src={`http://localhost:3000/${city.image.src}`}
          alt={`Amazing ${city.name}`}
        />
      </div>
    </section>
  );
}
