import React from "react";
import ReactDOM from "react-dom";
import Router from "./components/Router.jsx";
import { BrowserRouter } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Provider } from "react-redux";
import initStore from "./utils/store.js";
import { PersistGate } from "redux-persist/integration/react";

const { store, persistor } = initStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <MuiThemeProvider>
          <Router />
        </MuiThemeProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
