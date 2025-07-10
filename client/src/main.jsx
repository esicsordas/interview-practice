import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { ApiProvider } from "./AppContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <ApiProvider>
      <App />
    </ApiProvider>
  </HashRouter>
);
