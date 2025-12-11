// react imports
import { useState } from "react";

// custom hooks

import { useGlobalContext } from "./useGlobalContext";

// firebase
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { toast } from "sonner";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useGlobalContext();

  // Register
  const register = ({ displayName, email, password, photoURL }) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        updateProfile(user, { displayName, photoURL }).then(() => {
          const updatedUser = { ...user, displayName, photoURL };
          dispatch({ type: "LOGINREGISTER", payload: updatedUser });
          toast.success(`Welcome ${displayName}, our todos web site !!!`);
          setLoading(false);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);

        setError(errorMessage);
        setLoading(false);
      });
  };

  //   Login
  const login = ({ email, password }) => {
    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGINREGISTER", payload: user });
        setLoading(false);

        toast.success("Welcome back !!!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoading(false);
        setError(errorMessage);
        console.log(errorCode);
      });
  };

  //   LogOut
  const logOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("See you Soon !!!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return { register, login, logOut, loading, error };
};
