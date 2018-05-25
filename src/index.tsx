///<reference path='../typings/app.d.ts'/>

import * as React from 'react'
import * as ReactDOM from 'react-dom'
// import Router from './components/Router'
import App from './components/App'
import PageHeader from './components/PageHeader'

// NOTE: Stylesheets
// import './style/App.scss'

const appInfo: Recipes.AppProps = {
	lastUpdated: Date.now(),
	version: '1.0.0'
}

class Index extends React.Component<{},{}> {
	render() {
		return (
		<div className="wrapper">
			<PageHeader />
			<App {...appInfo} />
			{/* <Router /> */}
			<footer data-updated={appInfo.lastUpdated}>
				Test Updated => {appInfo.lastUpdated}
			</footer>
		</div>
		)
	}
}

ReactDOM.render(
	<Index />,
	document.querySelector('#root')
);
