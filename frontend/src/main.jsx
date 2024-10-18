import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./context/AppContext.jsx";
import { NextUIProvider } from "@nextui-org/react";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppContextProvider>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </AppContextProvider>
  </BrowserRouter>
);
