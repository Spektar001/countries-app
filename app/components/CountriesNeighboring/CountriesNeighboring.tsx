import CountryNeighborCard from "./CountryNeighborCard/CountryNeighborCard";
import styles from "./CountriesNeighboring.module.scss";

type CountriesNeighboringProps = {
  countriesNeighbor?: string[];
};

const getNeighborCountry = async (
  countriesNeighbor: string[]
): Promise<Countries[]> => {
  const countries: Countries[] = [];
  const fetchCountry = async (name: string) => {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha?codes=${name}`
    );
    const country = await response.json();
    countries.push(country[0]);
  };

  await Promise.all(countriesNeighbor.map((name) => fetchCountry(name)));
  return countries;
};

const CountriesNeighboring = async ({
  countriesNeighbor,
}: CountriesNeighboringProps) => {
  if (!countriesNeighbor) {
    return null;
  }
  const countries = await getNeighborCountry(countriesNeighbor);

  return (
    <div className={styles.country__neighbor_layout}>
      <h2 className={styles.country__neighbor_title}>Neighbor countries</h2>
      <div className={styles.country__neighbor_countries}>
        {countries
          .sort((a, b) => a.name.common.localeCompare(b.name.common))
          .map((country) => (
            <CountryNeighborCard key={country.cca3} country={country} />
          ))}
      </div>
    </div>
  );
};

export default CountriesNeighboring;
