import React from "react";
import Header from "./Header";
import Footer from "./Footer";
export default class Title extends React.Component {
  render() {
    return (
      <div>
        <h1 id="title">{this.props.titleText}</h1>
      </div>
    );
  }
}
