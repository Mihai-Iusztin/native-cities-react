export async function fetchCities() {
  const response = await fetch('http://localhost:3000/cities');
  const citiesData = await response.json();
  console.log(citiesData);
  return citiesData.cities;
}
