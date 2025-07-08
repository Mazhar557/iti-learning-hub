import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDSwBBxnF0F6xFPkpTOrd1T_XECFiKP6Yc",
  authDomain: "iti-learning-hub.firebaseapp.com",
  projectId: "iti-learning-hub",
  storageBucket: "iti-learning-hub.firebasestorage.app",
  messagingSenderId: "241172051845",
  appId: "1:241172051845:web:bbd4994af818edd236b6ec",
  measurementId: "G-XSLVTG3C3S"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }