import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "./Header";
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";


export const history = createBrowserHistory({ basename: 'localhost:3000' });

ReactDOM.render((
		<Router history={history}>
       		<App/>
       	</Router>
), document.getElementById('root'))