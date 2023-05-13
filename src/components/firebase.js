import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCfcpfi8e2Hzz-_QtYMdjno37kO3hLkhcM",
    authDomain: "tennis-app-db.firebaseapp.com",
    projectId: "tennis-app-db",
    storageBucket: "tennis-app-db.appspot.com",
    messagingSenderId: "142560741963",
    appId: "1:142560741963:web:93985e57f54727c1ae1bce",
    measurementId: "G-B9P3SREHQK"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);

export default { db, app, auth };