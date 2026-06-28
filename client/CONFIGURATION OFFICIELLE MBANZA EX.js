// CONFIGURATION OFFICIELLE MBANZA EXPRESS MOTO
// Ce fichier connecte toutes vos pages au Cloud de Google

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCzVt01984BB28lInzehcjm4Ltk28eN-Wg",
  authDomain: "mbanza-express.firebaseapp.com",
  projectId: "mbanza-express",
  storageBucket: "mbanza-express.firebasestorage.app",
  messagingSenderId: "182597244795",
  appId: "1:182597244795:web:3ba1dc36800db0374b4fde",
  measurementId: "G-3MTYFLGL2Z"
};

// Initialisation et Exportation pour les autres fichiers
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

console.log("Système Mbanza Express : Connecté au Cloud Google avec succès !");