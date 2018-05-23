import * as React from 'react';
import Service from './Service'
import * as Utils from '../lib/utils'
import * as UtilsCategories from '../lib/categories'

export default class ServiceList extends React.Component<Services.ServiceListProps, Services.ServiceListState> {
	constructor(props) {
		super(props)
		// this.displayName = 'Services Listing'
		this.state = {
			services: []
		}

		// Scope functions...
		this.loadData = this.loadData.bind(this)
		// this.filterByCategory = Utils.filterByCategory.bind(this)
		// this.filterByQuery = Utils.filterByQuery.bind(this)
	}

	componentWillReceiveProps(nextProps: Services.ServiceListProps){
		// console.info("Component Will Recieve Props")
		// console.info('Next Properties:', nextProps)
		let filteredServices = nextProps.services

		// console.info('componentWillReceiveProps() - props.category: ', nextProps.category)

		if ( nextProps.categoryID !== '' ) {
			// console.info('nextProps.categoryID => ', nextProps.categoryID)
			// console.info('this.props.services => ', this.props.services)

			filteredServices = UtilsCategories.filterByID(nextProps.categoryID, this.props.services)
			// console.info('filteredService => ', filteredServices)
		}

		if ( nextProps.query !== '' ) {
			// console.info('Filtering services by "' + nextProps.query +'".')
			filteredServices = Utils.filterByQuery(nextProps.query, this.props.services, this.props.audiences, this.props.categories, this.props.tags)
		}

		// console.info('ServiceList Filtered Services => ', filteredServices)

		this.setState({
			services: filteredServices,
			// categoryID: nextProps.categoryID

		})
		// console.info("===============================")
	}

	// componentWillMount () {
	// 	console.info("Component Will Mount")
	// 	console.info("CategoryID: ", this.props.categoryID)
	// 	console.info("===============================")
	// }

	// componentDidMount () {
	// 	console.info("Component Did Mount")
	//     console.log('this.props', this.props)
	// 	console.info("===============================")
	// }

	// componentWillUpdate (nextProps: ServiceListProps, nextState: ServiceListState) {
	// 	console.info("Component Will Update")
	//     console.info('Next Properties:', nextProps)
	//     console.info('Next State:', nextState)
	// 	console.info("===============================")
	// }

	// componentDidUpdate(prevProps: ServiceListProps, prevState: ServiceListState) {
	// 	console.info('Component Did Update')
	//     console.info('Previous Properties:', prevProps)
	//     console.info('Previous State:', prevState)
	//     console.info('CategoryID: ', this.props.categoryID)
	// 	console.info("===============================")
	// }

	// componentWillUnmount () {
	// 	console.info( 'Component Will Unmount' )
	// 	console.info("===============================")
	// }

	loadData = () => {
		// let filtered = this.state.services

		if ( this.state.services.length === 0 ) {
			if ( this.props.categoryID !== '' ) {
				return <div className="callout large secondary"><h1>There are no services with a category of "<em>{ this.props.categoryName }</em>"</h1></div>
			}

			if ( this.props.query !== '' ) {
				return <div className="callout large secondary"><h1>There are no services containing "<em>{ this.props.query }</em>"</h1></div>
			}

			return <div className="callout large secondary"><h1>Loading Content...</h1></div>
		} else {
			// console.info(this.state.services)


	  return <div className="row small-up-1 medium-up-3" data-equalizer>
		{this.state.services.map((s: Services.ServiceProps) =>
			<Service key={s.uuid} {...s} />
		  )}
	  </div>
		}
	}

	render() {
		return (<div className="row">
			<div className="medium-12 columns">
				{ this.loadData() }
			</div>
		</div>
		);
	}
}
