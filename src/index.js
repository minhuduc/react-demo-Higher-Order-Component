import React from "react";
import ReactDOM from "react-dom";
import AwesomeImage from "./components/AwesomeImage";
import withHoverOpacity from "./components/withHoverOpacity";

import "./styles.css";

const HocAwesomeImage = withHoverOpacity(AwesomeImage, 0.6);
function App() {
  return (
    <div className="App">
      <HocAwesomeImage src="https://picsum.photos/id/237/200/300" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
