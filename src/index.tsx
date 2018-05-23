///<reference path='../typings/app.d.ts'/>

import * as React from 'react'
import * as ReactDOM from 'react-dom'
// import {BrowserRouter, Route, Link, NavLink, Switch} from 'react-router-dom'
// import * as queryString from 'query-string'
import App from './components/App'
// import './style/App.scss'

// NOTE: Get the query string if one is passed
// let qs = queryString.parse(location.search)
// console.log(qs)

// NOTE: Check to see if we are pushing attributes from the CMS.
let root:any = document.getElementById('root')
//console.log({...(root.dataset)})
// if ( root.dataset.audience ) {
// 	qs.audience = root.dataset.audience
// }

ReactDOM.render(
	<App />,
	// <App updated={Date.now()} displayName="Student Services Toolkit Application" audience={qs.audience} category={qs.category} tag={qs.tag} />,
	document.getElementById('root')
);
