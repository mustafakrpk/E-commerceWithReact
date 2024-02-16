import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "alertifyjs/build/css/alertify.min.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// js framwerkü değil kütüphanesidir.
// mvc katmanı var
// es6 - jsx  syntax - formatı
// Dom
//************************************************************* */
//Component : medium sitesinde ki parçalar  birkere yazıyoruz çokkez kullanıyoruz.
//Virtual dom : sanal domdur. bellekteki kopyasıdır.
//
//
//
//
