import Image from "next/image";
import Link from "next/link";
import styles from "./CountryItem.module.scss";

type CountryProps = {
  country: CountryItem;
};

const CountryItem = ({ country }: CountryProps) => {
  return (
    <Link href={`/country/${country.name.common}`}>
      <div className={styles.country}>
        <Image
          className={styles.country__image}
          src={country.flags.svg}
          width={200}
          height={120}
          alt={country.flags.alt ? country.flags.alt : country.name.common}
        />
        <p className={styles.country__name}>{country.name.common}</p>
      </div>
    </Link>
  );
};

export default CountryItem;
