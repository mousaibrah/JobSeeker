import React from "react";
import ReactDOM from "react-dom/client";
import AppState from './components/State/AppState'

import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId="512075297135-v59ngdh1l4i3fn6gtfjgdtv4dnj4tsum.apps.googleusercontent.com">
      <AppState />
      </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
