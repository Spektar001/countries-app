import {
  formatArea,
  formatPopulation,
  printLanguages,
} from "@/app/functions/functions";
import Image from "next/image";
import Link from "next/link";
import styles from "./Page.module.scss";

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
      <div>
        <Link href="/">{"<= Back"}</Link>
      </div>
      <div className={styles.country__layout}>
        <div className={styles.country__desc}>
          <p className={styles.country__info}>
            Country name:{" "}
            <span className={styles.country__info_name}>
              {country.name.common}
            </span>
          </p>
          <p className={styles.country__info}>
            Official country name:{" "}
            <span className={styles.country__info_name}>
              {country.name.official}
            </span>
          </p>
          <p className={styles.country__info}>
            Capital city:{" "}
            <span className={styles.country__info_name}>
              {country.capital ? country.capital : "—"}
            </span>
          </p>
          <p className={styles.country__info}>
            Region:{" "}
            <span className={styles.country__info_name}>
              {country.region
                ? `${country.region}(${country.subregion || "—"})`
                : country.subregion}
            </span>
          </p>
          <p className={styles.country__info}>
            Official languages:{" "}
            <span className={styles.country__info_name}>
              {country.languages ? printLanguages(country.languages) : "—"}
            </span>
          </p>
          <p className={styles.country__info}>
            Population:{" "}
            <span className={styles.country__info_name}>
              {formatPopulation(country.population)}
            </span>
          </p>
          <p className={styles.country__info}>
            Area:{" "}
            <span className={styles.country__info_name}>
              {formatArea(country.area)}
            </span>
            km²
          </p>
          <p className={styles.country__info}>
            Currency: посмотреть как приходит и выводить например Australian
            dollar($)
          </p>
          <p className={styles.country__info}>
            Google Map: оформить ссылку
            <Link href={country.maps.googleMaps}>Map</Link>
          </p>
        </div>
        <div className={styles.country__flags}>
          <Image
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
      <div>
        <h2 className={styles.country__neighbor}>
          Neighbor countries: соседние страны
        </h2>
      </div>
    </div>
  );
};

export default page;
