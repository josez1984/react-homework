import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4">{props.title}</h1>
      <p className="lead">{props.body}</p>
    </div>
  </div>
);

export default Jumbotron;
