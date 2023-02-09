import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TodosContextProvider } from "./components/TodosContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TodosContextProvider>
      <App />
    </TodosContextProvider>
  </React.StrictMode>
);
