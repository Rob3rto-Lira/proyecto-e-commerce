import { Provider } from "@/components/ui/provider";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TokenProvider from "./context/TokenContext.jsx";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// También importa el JS si vas a usar modales o dropdowns de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TokenProvider>
      <Provider>
        

          <App />
      </Provider>
    </TokenProvider>
  </StrictMode>
);
