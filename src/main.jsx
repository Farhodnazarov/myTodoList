import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// toaster
import { Toaster } from "sonner";
// global context
import { GlobalContextProvider } from "./context/GlobalContext.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
    <Toaster position="top-center" richColors="true" />
  </>
);
