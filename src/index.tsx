///<reference path='../typings/app.d.ts'/>

import * as React from 'react'
import * as ReactDOM from 'react-dom'
// import {BrowserRouter, Route, Link, NavLink, Switch} from 'react-router-dom'
import App from './components/App'
import PageHeader from './components/PageHeader'

// NOTE: Stylesheets
// import './style/App.scss'

class Index extends React.Component<{},{}> {
	render() {
		let updated = Date.now()

		return (
		<div className="wrapper">
			<PageHeader />
			<App displayName="Favorite Recipes" version="1.0.0" />
			<footer>
				Test Updated => {updated}
			</footer>
		</div>
		)
	}
}

ReactDOM.render(
	<Index />,
	document.getElementById('root')
);
