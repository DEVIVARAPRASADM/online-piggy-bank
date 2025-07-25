import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { PiggyBankProvider } from "./hooks/usePiggyBank";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PiggyBankProvider>
      <App />
    </PiggyBankProvider>
  </React.StrictMode>
);
