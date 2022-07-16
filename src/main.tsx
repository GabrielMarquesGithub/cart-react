import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import GlobalStyle from "./assets/style/GlobalStyle";
import { Theme } from "./assets/style/theme";
import { CartProvider } from "./context/cartContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Theme>
        <CartProvider>
          <GlobalStyle />
          <App />
        </CartProvider>
      </Theme>
    </BrowserRouter>
  </React.StrictMode>
);
