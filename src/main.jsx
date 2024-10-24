import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import RouteConfig from "./routes/RouteConfig.jsx";
import { Provider } from "react-redux";
import { storeData } from "../redux/store/Store.jsx";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const qc = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={storeData}>
      <QueryClientProvider client={qc}>
        <HelmetProvider>
          <BrowserRouter>
            <RouteConfig />
            <App />
          </BrowserRouter>
        </HelmetProvider>
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
