import ReactDom from "react-dom";
import React from "react";
import simpleReconciler from './simpleReconciler';

const App = () => (
  <center>
    <h1>Hello world</h1>
    <div>
      <p>This app is an experiment to make a simple react reconciler</p>
    </div>
    <h4>Bye world</h4>
  </center>
);

// ReactDom.render(<App/>, document.getElementById("root"));
simpleReconciler.render(<App/>, document.getElementById("root"))