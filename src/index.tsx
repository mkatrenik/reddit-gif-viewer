import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/App";
import 'isomorphic-fetch'

ReactDOM.render(
    <App />,
    document.getElementById("app")
);