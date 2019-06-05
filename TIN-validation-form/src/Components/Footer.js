import React from "react";
export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <h1 id="footer">Univerity: {this.props.footer}</h1>
      </div>
    );
  }
}
