///<reference path='../typings/app.d.ts'/>

import * as React from 'react'
import * as ReactDOM from 'react-dom'
// import {BrowserRouter, Route, Link, NavLink, Switch} from 'react-router-dom'
import App from './components/App'
// import './style/App.scss'

ReactDOM.render(
	<App />,
	// <App updated={Date.now()} displayName="Student Services Toolkit Application" audience={qs.audience} category={qs.category} tag={qs.tag} />,
	document.getElementById('main')
);
