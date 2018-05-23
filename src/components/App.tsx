import * as React from 'react'

// import Categories from './Categories'
// import SearchForm from './SearchForm'
// import ServiceList from './ServiceList'
// import * as Utils from '../lib/utils'
// import * as UtilsAudiences from '../lib/audiences'
// import * as UtilsCategories from '../lib/categories'
// import * as UtilsServices from '../lib/services'
// import * as UtilsTags from '../lib/tags'

export default class App extends React.Component<{}, {}> {
	constructor(props) {
		super(props)
		this.state = {}

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
					<div>
						<h1>Testing</h1>
					</div>
				</main>
	)}
}
