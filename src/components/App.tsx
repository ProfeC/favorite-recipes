import * as React from 'react'

export default class App extends React.Component<Recipes.AppProps, Recipes.AppState> {
	constructor(props) {
		super(props)
		// this.state = {
		// 	recipes: []
		// }

		this.handleCategoryClick = this.handleCategoryClick.bind(this)
		this.handleQuery = this.handleQuery.bind(this)
	}

	// NOTE: Handle clicks
	handleCategoryClick(categoryNode: any) {
		// console.info(categoryNode.target)
		this.setState({
			categoryID: categoryNode.target.id,
			categoryName: categoryNode.target.title,
			query: ''
		})
	}

	handleQuery(filterValue: string) {
		// console.info('handleQuery(filterValue)', filterValue)
		this.setState({
			query: filterValue
		})
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
		console.info( "Unmounted ShowCurrentWord" )
	}

	render() {
		return (
			<main>
				<p>some main content will...</p>
			</main>
		)
	}
}
