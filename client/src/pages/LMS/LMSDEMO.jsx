// import { useEffect, useState } from 'react';
// import { Navigation } from '../../components/Navigation/Navigation';
// import styles from './LMS.module.css';
// import { API_URL, authFetch } from '../../api';
// import { jwtDecode } from 'jwt-decode';

// export const LMS = () => {
//   const [materials, setMaterials] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isAdmin, setIsAdmin] = useState(false)

  
// //     useEffect(() => {
// //   fetch(`${API_URL}/api/lms`)
// //     .then(res => res.json())
// //     .then(data => {
// //       setMaterials(Array.isArray(data) ? data : []);
// //       setLoading(false);
// //     });
// // }, []);

// useEffect(() => {
//   const token = localStorage.getItem('jwt');
//   if (token) {
//    try {
//         const decoded = jwtDecode(token);
//         if (decoded.email === 'adinai@gmail.com') {
//           setIsAdmin(true); // Теперь красным подчеркивать не будет!
//         }}catch (e) {
//       console.error(e);
//     }
//   }

//   fetch(`${API_URL}/api/lms`)
//     .then(res => res.json())
//     .then(data => {
//       setMaterials(Array.isArray(data) ? data : []);
//       setLoading(false);
//     });
// }, []);

//   return (
//     <div className={styles.lmsPage}>
//       <Navigation />
      
//       {loading ? (
//         <p style={{ textAlign: 'center', marginTop: '2rem' }}>Loading...</p>
//       ) : (
//         <div className={styles.grid}>
//           {materials.map(item => (
//             <div key={item.id} className={styles.card}>
//               <h2 className="title">{item.name}</h2>
//               <p>{item.description}</p>
//               <a href={item.link} target="_blank" rel="noreferrer">
//                 View <span>⭢</span>
//               </a>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };
