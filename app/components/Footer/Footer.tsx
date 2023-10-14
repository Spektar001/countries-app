import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__title}>
        Created by &copy;
        <a
          className={styles.footer__link}
          href="https://github.com/Spektar001"
          target="_blank"
        >
          Harry Gupenec
        </a>
      </p>
    </footer>
  );
};

export default Footer;
