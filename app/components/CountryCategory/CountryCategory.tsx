import styles from "../../country/[name]/Page.module.scss";
import { Icon } from "../LucideIcon/Icon";
import dynamicIconImports from "lucide-react/dynamicIconImports";

type CountryCategoryProps = {
  title: string;
  iconName: keyof typeof dynamicIconImports;
  color?: string;
  size?: number;
  children: React.ReactNode;
};

const CountryCategory = ({
  title,
  iconName,
  children,
}: CountryCategoryProps) => {
  return (
    <div className={styles.country__category}>
      <p className={styles.country__cat_title}>
        <Icon name={iconName} color="#464646" size={20} />
        {title}
      </p>
      <span className={styles.country__cat_text}>{children}</span>
    </div>
  );
};

export default CountryCategory;
