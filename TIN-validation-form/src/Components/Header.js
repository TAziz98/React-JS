import React from "react";
import Title from "./Title";
export default class Header extends React.Component {
  render() {
    return (
      <div>
        <Title titleText={this.props.header} />
      </div>
    );
  }
}
