import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FirebaseAppProvider } from "reactfire";
import firebaseConfig from "./firebase-config";
import { LoginProvider } from "./context/LoginProvider";
import { MainNavigator } from "./containers/MainNavigator/MainNavigator";

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense>
      <React.StrictMode>
        <LoginProvider>
          <MainNavigator />
        </LoginProvider>
      </React.StrictMode>
    </Suspense>
  </FirebaseAppProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
