// import { DesmosCalculator } from "../../../components/DesmosCalculator";
// import { Navigation } from "../../../components/Navigation/Navigation";
// import "./Tests.css";
// import { useState, useEffect } from "react";
// import { useTranslation } from "react-i18next";
// import { API_URL, authFetch } from '../../../api';

// export const MathTest = () => {
//   const { t } = useTranslation();

//   const [questions, setQuestions] = useState([]);
//   const [loading, setLoading] = useState(true);

// useEffect(() => {
//   authFetch(`${API_URL}/api/questions`)
//     .then(res => res.json())
//     .then(data => {
//       // Берём 5 случайных вопросов из банка
//       const shuffled = data.sort(() => Math.random() - 0.5).slice(0, 5);
//       // Приводим формат бэкенда к формату компонента
//       const formatted = shuffled.map((q, i) => ({
//         id: i + 1,
//         text: q.question,
//         options: [q.option_a, q.option_b, q.option_c, q.option_d],
//         answer: { a: q.option_a, b: q.option_b, c: q.option_c, d: q.option_d }[q.answer],
//       }));
//       setQuestions(formatted);
//       setLoading(false);
//     });
// }, []);

//   const [selected, setSelected] = useState({});
//   const [submitted, setSubmitted] = useState(false);
//   const [result, setResult] = useState(0);
//   const [openModal, setOpenModal] = useState(false);

//   const choose = (qId, option) => {
//     if (submitted) return;
//     setSelected((prev) => ({ ...prev, [qId]: option }));
//   };

//   const allAnswered = questions.every((q) => selected[q.id]);

//   const submit = () => {
//     if (!allAnswered) return;

//     let score = 0;
//     questions.forEach((q) => {
//       if (selected[q.id] === q.answer) score++;
//     });

//     setResult(score);
//     setSubmitted(true);
//     setOpenModal(true);
//   };

//   const closeModal = () => {
//     setOpenModal(false);
//     setSelected({});
//     setSubmitted(false);
//     setResult(0);
//   };

//   const getResultColor = () => {
//     if (result <= 2) return "bad";
//     if (result === 3 || result === 4) return "medium";
//     return "good";
//   };

//   if (loading) return <p style={{ textAlign: 'center', marginTop: '2rem' }}>Loading...</p>;
//   return (
//     <>
//       <Navigation />
//       <section className="mathTestPage">
//         <h2>{t("mathTest.title")}</h2>

//         <div className="flexbox">
//           <div className="left">
//             <DesmosCalculator />
//           </div>

//           <div className="right">
//             <div className="testWrapper">
//               {questions.map((q) => (
//                 <div
//                   key={q.id}
//                   className={`questionCard ${
//                     submitted && selected[q.id] === q.answer
//                       ? "correct"
//                       : submitted
//                         ? "wrong"
//                         : ""
//                   }`}
//                 >
//                   <p className="questionText">
//                     {q.id}. {q.text}
//                   </p>

//                   <div className="options">
//                     {q.options.map((opt) => (
//                       <button
//                         key={opt}
//                         onClick={() => choose(q.id, opt)}
//                         className={`optionBtn ${
//                           selected[q.id] === opt ? "active" : ""
//                         } ${submitted && opt === q.answer ? "showCorrect" : ""}`}
//                       >
//                         {opt}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               ))}

//               <button
//                 className={`submitBtn ${!allAnswered ? "disabled" : ""}`}
//                 onClick={submit}
//                 disabled={!allAnswered}
//               >
//                 {t("mathTest.submit")}
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {openModal && (
//         <div className="modalOverlay" onClick={closeModal}>
//           <div className="modal" onClick={(e) => e.stopPropagation()}>
//             <h3>{t("mathTest.result")}</h3>

//             <div className={`resultScore ${getResultColor()}`}>
//               {result} / {questions.length}
//             </div>

//             <p className="resultText">
//               {result <= 2 && t("mathTest.tryAgain")}
//               {result === 3 || result === 4 ? t("mathTest.notBad") : ""}
//               {result === 5 ? t("mathTest.great") : ""}
//             </p>

//             <button onClick={closeModal}>{t("mathTest.close")}</button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };
