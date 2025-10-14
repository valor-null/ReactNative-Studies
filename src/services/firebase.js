// src/services/firebase.js
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getApp, getApps, initializeApp } from "firebase/app";
import {
    getAuth,
    getReactNativePersistence,
    initializeAuth,
} from "firebase/auth";
import { Platform } from "react-native";

// ⬇️ COLE AQUI SUA CONFIG DO FIREBASE (Project settings → SDK setup)
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_PROJECT.firebaseapp.com",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_PROJECT.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "SEU_APP_ID",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Em React Native, precisamos definir a persistência com AsyncStorage.
// Se já estiver inicializado (fast refresh), caímos no getAuth.
let auth;
if (Platform.OS === "web") {
  auth = getAuth(app);
} else {
  try {
    auth = initializeAuth(app, { persistence: getReactNativePersistence(AsyncStorage) });
  } catch {
    auth = getAuth(app);
  }
}

export { auth };

