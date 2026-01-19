import { Provider } from "@/components/ui/provider";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TokenProvider from "./context/TokenContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TokenProvider>
      <Provider>
        

          <App />
      </Provider>
    </TokenProvider>
  </StrictMode>
);
