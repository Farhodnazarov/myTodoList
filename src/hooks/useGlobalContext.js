import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("GlobalContext must be within the GlobalContextProvider()");
  }

  return context;
};
