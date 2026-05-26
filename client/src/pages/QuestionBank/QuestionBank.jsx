import { useNavigate } from "react-router-dom";
import { Navigation } from "../../components/Navigation/Navigation";
import { useTranslation } from "react-i18next";
import "./QuestionBank.css";

export const QuestionBank = () => {
  const nav = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <Navigation />
      <section className="questionBank">
        <h2>
          <img src="./questionBank/bank.svg" alt="" /> {t("questionBank.title")}
        </h2>

        <div className="testsCover">
          <div className="testCard readingTest">
            <h3>{t("questionBank.readingWriting")}</h3>
            <p>{t("questionBank.questions")}</p>
            <button onClick={() => nav("/readingTest")}>
              {t("questionBank.open")} <span>⭢</span>
            </button>
          </div>

          <div className="testCard mathTest">
            <h3>{t("questionBank.math")}</h3>
            <p>{t("questionBank.questions")}</p>
            <button onClick={() => nav("/mathTest")}>
              {t("questionBank.open")} <span>⭢</span>
            </button>
          </div>
        </div>

        <p className="desc">{t("questionBank.disclaimer")}</p>
      </section>
    </>
  );
};
