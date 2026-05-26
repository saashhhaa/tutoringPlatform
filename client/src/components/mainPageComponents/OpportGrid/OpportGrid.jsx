import styles from "./OpportGrid.module.css"
import { useTranslation } from "react-i18next"

export const OpportGrid = () => {
  const { t } = useTranslation()

  const cards = [
    {
      icon: "./opportIcons/graph.svg",
      key: "analytics",
    },
    {
      icon: "./opportIcons/stars.svg",
      key: "ai",
    },
    {
      icon: "./opportIcons/leader.svg",
      key: "leader",
    },
    {
      icon: "./opportIcons/phone.svg",
      key: "device",
    },
    {
      icon: "./opportIcons/people.svg",
      key: "teacher",
    },
    {
      icon: "./opportIcons/graduate.svg",
      key: "results",
    },
  ]

  return (
    <div className={styles.cardsGrid}>
      {cards.map((item) => (
        <div key={item.key} className={styles.opportCard}>
          <img src={item.icon} className={styles.cardIcon} />

          <h3>{t(`opportunities.${item.key}.title`)}</h3>

          <p className={styles.desc}>
            {t(`opportunities.${item.key}.desc`)}
          </p>
        </div>
      ))}
    </div>
  )
}
