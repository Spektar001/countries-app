import {
  formatArea,
  formatCurrencies,
  formatPopulation,
  printLanguages,
} from "@/app/functions/functions";
import Image from "next/image";
import Link from "next/link";
import styles from "./Page.module.scss";
import { Icon } from "@/app/components/Icon/Icon";
import CountriesNeighboring from "@/app/components/CountriesNeighboring/CountriesNeighboring";

const getCountryByName = async (name: string): Promise<Countries> => {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${name}?fullText=true`
  );
  const country = await response.json();
  return country[0];
};

const page = async ({ params }: { params: { name: string } }) => {
  const country = await getCountryByName(params.name);

  return (
    <div className={styles.country__page}>
      <div className={styles.country__layout_bg}>
        <Link href="/" scroll={false}>
          <Icon
            name="arrow-left-circle"
            size={40}
            strokeWidth={1}
            color="#464646"
          />
        </Link>
        <h2 className={styles.country__layout_title}>{country.name.common}</h2>
        <div className={styles.country__layout}>
          <div className={styles.country__desc}>
            <div className={styles.country__category}>
              <p className={styles.country__cat_title}>
                <Icon name="landmark" color="#464646" size={20} />
                Capital city:
              </p>
              <span className={styles.country__cat_text}>
                {country.capital ? country.capital : "—"}
              </span>
            </div>
            <div className={styles.country__category}>
              <p className={styles.country__cat_title}>
                <Icon name="globe" color="#464646" size={20} />
                Region:
              </p>
              <span className={styles.country__cat_text}>
                {country.region
                  ? `${country.region}(${country.subregion || "—"})`
                  : country.subregion}
              </span>
            </div>
            <div className={styles.country__category}>
              <p className={styles.country__cat_title}>
                <Icon name="languages" color="#464646" size={20} />
                Official languages:
              </p>
              <span className={styles.country__cat_text}>
                {country.languages ? printLanguages(country.languages) : "—"}
              </span>
            </div>
            <div className={styles.country__category}>
              <p className={styles.country__cat_title}>
                <Icon name="person-standing" color="#464646" size={20} />
                Population:
              </p>
              <span className={styles.country__cat_text}>
                {formatPopulation(country.population)}
              </span>
            </div>
            <div className={styles.country__category}>
              <p className={styles.country__cat_title}>
                <Icon name="land-plot" color="#464646" size={20} />
                Area:
              </p>
              <span className={styles.country__cat_text}>
                {formatArea(country.area)}
              </span>
              km²
            </div>
            <div className={styles.country__category}>
              <p className={styles.country__cat_title}>
                <Icon name="banknote" color="#464646" size={20} />
                Currency:
              </p>
              <span className={styles.country__cat_text}>
                {country.currencies
                  ? formatCurrencies(country.currencies)
                  : "—"}
              </span>
            </div>
            <div className={styles.country__category}>
              <p className={styles.country__cat_title}>
                <Icon name="map-pin" color="#464646" size={20} />
                Map:{" "}
              </p>
              <span className={styles.country__cat_text}>
                <a
                  className={styles.country__link_map}
                  target="_blank"
                  href={country.maps.googleMaps}
                >
                  Google Map
                </a>
              </span>
            </div>
          </div>
          <div className={styles.country__flags}>
            <Image
              className={styles.country__flag}
              src={country.flags.svg}
              alt={country.flags.alt ? country.flags.alt : country.name.common}
              width={210}
              height={100}
            />
            <Image
              src={country.coatOfArms.svg}
              alt={country.flags.alt ? country.flags.alt : country.name.common}
              width={130}
              height={100}
            />
          </div>
        </div>
        <span className={styles.country__line}></span>
        <CountriesNeighboring countriesNeighbor={country.borders} />
      </div>
    </div>
  );
};

export default page;
