import * as React from 'react'

export default class PageHeader extends React.Component<{}, {}> {
	constructor(props) {
		super(props)
		this.state = {}
	}

	componentWillReceiveProps(nextProps) {
		console.info('Next Props: ', nextProps)
	}

	componentWillMount () {
		console.info("Component Will Mount")
	}

	componentDidMount () {
		console.info("Component Did Mount")
	}

	componentWillUpdate () {
		console.info("Component Will Update")
	}

	componentDidUpdate () {
		console.info("Component Updated")
	}

	componentWillUnmount () {
		console.info("Component Unmounted")
	}

	render() {
		return (
			<header>
				<h1>Some header info</h1>
				<nav>some navigation area</nav>
			</header>
		)
	}
}
