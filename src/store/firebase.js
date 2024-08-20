// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export { app, auth };



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyC02sZVH6Aa3Wf0dL3nCxcwTf3d3StpUhc",
//   authDomain: "login-auth-5d96d.firebaseapp.com",
//   projectId: "login-auth-5d96d",
//   storageBucket: "login-auth-5d96d.appspot.com",
//   messagingSenderId: "602991104496",
//   appId: "1:602991104496:web:47af8914d986ad3a7ecd35",
//   measurementId: "G-FRM2QL5BLY"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export { app, auth };


// src/store/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC02sZVH6Aa3Wf0dL3nCxcwTf3d3StpUhc",
  authDomain: "login-auth-5d96d.firebaseapp.com",
  projectId: "login-auth-5d96d",
  storageBucket: "login-auth-5d96d.appspot.com",
  messagingSenderId: "602991104496",
  appId: "1:602991104496:web:47af8914d986ad3a7ecd35",
  measurementId: "G-FRM2QL5BLY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Make sure this is present
const analytics = getAnalytics(app);

// Export the initialized services
export { app, auth, analytics };
