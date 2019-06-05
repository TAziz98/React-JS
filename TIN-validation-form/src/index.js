import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import Layout from "./Components/Layout";

var myArr = ["Aziz Tashpulatov", "Miraziz Kidoyatov", "Burak Yurdakul"];
ReactDOM.render(
  <div>
    <Layout
      footer="Polish Japanese Academy of Information Technology"
      myArray={myArr}
    />
  </div>,
  document.getElementById("app")
);
