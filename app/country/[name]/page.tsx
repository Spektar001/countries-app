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
      <Link className={styles.country__button_back} href="/">
        <Icon
          name="arrow-left-circle"
          size={40}
          strokeWidth={1}
          color="#464646"
        />
      </Link>
      <div className={styles.country__layout_bg}>
        <h2 className={styles.country__layout_title}>{country.name.common}</h2>
        <div className={styles.country__layout}>
          <div className={styles.country__desc}>
            <p className={styles.country__info}>
              <Icon name="landmark" color="#464646" size={20} />
              Capital city:
              <span className={styles.country__info_name}>
                {country.capital ? country.capital : "—"}
              </span>
            </p>
            <p className={styles.country__info}>
              <Icon name="globe" color="#464646" size={20} />
              Region:
              <span className={styles.country__info_name}>
                {country.region
                  ? `${country.region}(${country.subregion || "—"})`
                  : country.subregion}
              </span>
            </p>
            <p className={styles.country__info}>
              <Icon name="languages" color="#464646" size={20} />
              Official languages:
              <span className={styles.country__info_name}>
                {country.languages ? printLanguages(country.languages) : "—"}
              </span>
            </p>
            <p className={styles.country__info}>
              <Icon name="person-standing" color="#464646" size={20} />
              Population:
              <span className={styles.country__info_name}>
                {formatPopulation(country.population)}
              </span>
            </p>
            <p className={styles.country__info}>
              <Icon name="land-plot" color="#464646" size={20} />
              Area:
              <span className={styles.country__info_name}>
                {formatArea(country.area)}
              </span>
              km²
            </p>
            <p className={styles.country__info}>
              <Icon name="banknote" color="#464646" size={20} />
              Currency:
              <span className={styles.country__info_name}>
                {country.currencies
                  ? formatCurrencies(country.currencies)
                  : "—"}
              </span>
            </p>
            <p className={styles.country__info}>
              <Icon name="map-pin" color="#464646" size={20} />
              Map: <Link href={country.maps.googleMaps}>Google Map</Link>
            </p>
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
      </div>
      <div className={styles.country__neighbor_layout}>
        <h2 className={styles.country__neighbor_title}>Neighbor countries:</h2>
        <div className={styles.country__neighbor_countries}></div>
      </div>
    </div>
  );
};

export default page;
