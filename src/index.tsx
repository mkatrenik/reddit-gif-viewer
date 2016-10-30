import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from "./components/App"

console.log(React)

ReactDOM.render(
    <App />,
    document.getElementById("app")
);

// Hot Module Replacement API
const m = module as any;
if (m.hot) {
  m.hot.accept();
}