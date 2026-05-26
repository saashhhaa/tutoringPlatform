import { useNavigate } from "react-router-dom";
import styles from "./PlatformCard.module.css";
import { useTranslation } from "react-i18next";

export const PlatformCard = ({
  pathTo,
  className,
  image,
  titleKey,
  desc1Key,
  desc2Key,
}) => {
  const nav = useNavigate();

  const { t } = useTranslation();

  return (
    <button onClick={() => nav(pathTo)} className={`${styles.card} ${className}`}>
      <img src={image} alt="" className={styles.cardIcon} />

      <h3 className={styles.title}>{t(titleKey)}</h3>

      <p className={styles.desc1}>
        {t(desc1Key)}
      </p>

      <p className={styles.desc2}>
        {t(desc2Key)}
      </p>

      <button onClick={() => nav(pathTo)}>
        {t("questionBank.open")} <span>⭢</span>
      </button>
    </button>
  );
};
