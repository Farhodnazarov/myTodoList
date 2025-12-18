import { createContext, useReducer, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

export const GlobalContext = createContext();

const changeState = (state, { type, payload }) => {
  switch (type) {
    case "LOGINREGISTER":
      return { ...state, user: payload };
    case "ISUSER":
      return { ...state, isAuthChange: true };
    default:
      return state;
  }
};

export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, {
    user: null,
    isAuthChange: false,
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: "LOGINREGISTER", payload: user });
      dispatch({ type: "ISUSER" });
    });
  }, []);

  console.log(state.user);

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
