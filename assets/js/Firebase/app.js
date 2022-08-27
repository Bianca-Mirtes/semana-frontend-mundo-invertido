  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCtsb7tgG1ExMOb5W_Fi3auVm8A5KoTsd4",
    authDomain: "duegons-e-dragons.firebaseapp.com",
    projectId: "duegons-e-dragons",
    storageBucket: "duegons-e-dragons.appspot.com",
    messagingSenderId: "159821854185",
    appId: "1:159821854185:web:cade018f038ff8fe294778"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export default app;