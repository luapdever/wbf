import React, { Component } from "react";
import ReactDOM from "react-dom";

import App from "./App";

class Example extends Component {
    render() {
        return <App />;
    }
}

export default Example;

if (document.getElementById("root")) {
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById("root")
    );
}
