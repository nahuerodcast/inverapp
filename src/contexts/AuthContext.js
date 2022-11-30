import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../utils/init-firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "@firebase/auth";

const AuthContext = createContext({
  currentUser: null,
  register: () => Promise,
  login: () => Promise,
  logout: () => Promise,
  signInWithGoogle: () => Promise,
  sendPasswordResetEmail: () => Promise,
});

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [homeLoading, setHomeLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setHomeLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }

  function forgotPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  function logout() {
    return signOut(auth);
  }

  const value = {
    currentUser,
    register,
    login,
    logout,
    signInWithGoogle,
    forgotPassword,
    homeLoading,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
