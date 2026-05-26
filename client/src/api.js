// export const API_URL = 'https://tutoring-backend-djhi.onrender.com';

// export const authFetch = (url, options = {}) => {
//   const token = localStorage.getItem('jwt');
//   return fetch(url, {
//     ...options,
//     headers: {
//       'Content-Type': 'application/json',
//       ...(token ? { Authorization: `Bearer ${token}` } : {}),
//       ...options.headers,
//     },
//   });
// };

export const API_URL = "https://tutoring-backend-djhi.onrender.com";

export const authFetch = (url, options = {}) => {
  const token = localStorage.getItem("jwt");

  const headers = {
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  if (options.body) {
    headers["Content-Type"] = "application/json";
  }

  return fetch(url, {
    ...options,
    headers,
  });
};
