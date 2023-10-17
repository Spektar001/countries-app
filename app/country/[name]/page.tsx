import {
  formatArea,
  formatCurrencies,
  formatPopulation,
  printLanguages,
} from "@/app/functions/functions";
import Image from "next/image";
import Link from "next/link";
import styles from "./Page.module.scss";
import { Icon } from "@/app/components/LucideIcon/Icon";
import CountriesNeighboring from "@/app/components/CountriesNeighboring/CountriesNeighboring";
import CountryCategory from "@/app/components/CountryCategory/CountryCategory";

const getCountryByName = async (name: string): Promise<CountryCard> => {
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
        <Link href="/">
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
            <CountryCategory title="Capital city:" iconName="landmark">
              {country.capital ? country.capital : "—"}
            </CountryCategory>
            <CountryCategory title="Region:" iconName="globe">
              {country.region
                ? `${country.region}(${country.subregion || "—"})`
                : country.subregion}
            </CountryCategory>
            <CountryCategory title="Official languages:" iconName="languages">
              {country.languages ? printLanguages(country.languages) : "—"}
            </CountryCategory>
            <CountryCategory title="Population:" iconName="person-standing">
              {formatPopulation(country.population)}
            </CountryCategory>
            <CountryCategory title="Area:" iconName="land-plot">
              {formatArea(country.area)}km²
            </CountryCategory>
            <CountryCategory title="Currency:" iconName="banknote">
              {country.currencies ? formatCurrencies(country.currencies) : "—"}
            </CountryCategory>
            <CountryCategory title="Map:" iconName="map-pin">
              <a
                className={styles.country__link_map}
                target="_blank"
                href={country.maps.googleMaps}
              >
                Google Map
              </a>
            </CountryCategory>
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
