/* tslint:disable:no-unused-variable */
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './components/App'

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

// Hot Module Replacement API
const m: any = module as any;
if (m.hot) {
  m.hot.accept();
}