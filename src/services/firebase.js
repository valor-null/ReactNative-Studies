import AsyncStorage from "@react-native-async-storage/async-storage";
import { getApp, getApps, initializeApp } from "firebase/app";
import {
    getAuth,
    getReactNativePersistence,
    initializeAuth,
} from "firebase/auth";
import { Platform } from "react-native";
// ⬇️ novo:
import { getFirestore } from "firebase/firestore";

// COLE sua config do Firebase aqui
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_PROJECT.firebaseapp.com",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_PROJECT.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "SEU_APP_ID",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Auth (com persistência no RN)
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

// ⬇️ novo: Firestore
const db = getFirestore(app);

export { auth, db };

