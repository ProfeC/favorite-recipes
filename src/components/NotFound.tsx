import * as React from 'react'

export default class NotFound extends React.Component<{}, {}> {
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
			<section>
				<h1>Not Found.</h1>
			</section>
		)
	}
}
