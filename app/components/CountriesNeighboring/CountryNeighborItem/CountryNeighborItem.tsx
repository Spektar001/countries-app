import Image from "next/image";
import Link from "next/link";
import styles from "./CountryNeighborItem.module.scss";

type CountryNeighborProps = {
  country: CountryItem;
};

const CountryNeighborCard = ({ country }: CountryNeighborProps) => {
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

export default CountryNeighborCard;