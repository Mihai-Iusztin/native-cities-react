import SideMenu from './components/SideMenu';
import Cities from './components/Cities';
import City from './components/City';
import { useEffect, useState } from 'react';
import { fetchCities } from './http';
import { sortByDistance } from './util/distance';

function App() {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState({});
  const [sortBy, setSortBy] = useState('');
  const [selected, setSelected] = useState(false);

  function handleByArea() {
    setSelected(false);
    setSortBy('area');
  }
  function handleByPopulation() {
    setSelected(false);
    setSortBy('population');
  }

  function handleByDistance() {
    setSelected(false);
    setSortBy('distance');
  }

  function handleSelectCity(id) {
    let city = cities.find((city) => city.id === id);
    setSelected(true);
    setSelectedCity(city);
  }

  useEffect(() => {
    async function fetchAllCities() {
      let allCities = await fetchCities();
      allCities.sort(() => Math.random() - 0.5);

      if (sortBy === 'population') {
        allCities.sort((a, b) => b.population - a.population);
      } else if (sortBy === 'area') {
        allCities.sort((a, b) => b.area - a.area);
      } else if (sortBy === 'distance') {
        navigator.geolocation.getCurrentPosition((position) => {
          allCities = sortByDistance(
            allCities,
            position.coords.latitude,
            position.coords.longitude
          );
          console.log('distance');
        });
      }

      setCities(allCities);
    }
    fetchAllCities();
  }, [sortBy]);

  let content;
  if (selected) {
    content = <City city={selectedCity} />;
  } else {
    content = <Cities cities={cities} onSelectCity={handleSelectCity} />;
  }

  return (
    <main className="main-page">
      <SideMenu
        onSortByArea={handleByArea}
        onSortByPopulation={handleByPopulation}
        onSortByDistance={handleByDistance}
      />
      <div className="content-page">
        <header>
          <img src="timisoara-header.jpg" alt="Beautiful Timisoara!" />
          <h1>Amazing Cities</h1>
        </header>
        {content}
      </div>
    </main>
  );
}

export default App;
