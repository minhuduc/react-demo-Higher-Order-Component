import React, { Component } from "react";

export default class AwesomeImage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className="awesomeimage"
        style={{
          backgroundImage: `url(${this.props.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          borderRadius: "8px",
          width: "300px",
          height: "200px"
        }}
      />
    );
  }
}
