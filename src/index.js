import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "sonner";

import App from "./App";
import { Providers } from "./redux/provider/StoreProvider";
import { NextUIProviders } from "./redux/provider/NextUiProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NextUIProviders>
      <Providers>
        <App />
        <Toaster
          theme="system"
          toastOptions={{ className: "justify-center" }}
          expand
          richColors
          position="bottom-center"
          closeButton
          style={{ textAlign: "center" }}
        />
      </Providers>
    </NextUIProviders>
  </React.StrictMode>
);
