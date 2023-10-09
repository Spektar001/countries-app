import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Image src="/logo.png" width={100} height={100} alt="earth-logo" />
      <Link href={"/"}>
        <h1 className={styles.header__title}>Countries APP</h1>
      </Link>
    </header>
  );
};

export default Header;
