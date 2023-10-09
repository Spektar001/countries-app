import CountryItem from "./CountryItem/CountryItem";
import styles from './Countries.module.scss';

const getAllCountries = async (): Promise<Countries[]> => {
  const response = await fetch("https://restcountries.com/v3.1/all");
  return response.json();
};

const Countries = async () => {
  const countries = await getAllCountries();
  return (
    <section className={styles.countries__list}>
      {countries
        .sort((a, b) => a.name.common.localeCompare(b.name.common))
        .map((country) => (
          <CountryItem key={country.name.common} country={country} />
        ))}
    </section>
  );
};

export default Countries;
