export default function Cities({ cities, onSelectCity }) {
  return (
    <section className="cities-content">
      <ul className="cities">
        {cities.map((city) => (
          <li key={city.id} className="city">
            <button onClick={() => onSelectCity(city.id)}>
              <img
                src={`http://localhost:3000/${city.image.src}`}
                alt={city.image.alt}
              />
              <h2>{city.name}</h2>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
