import * as React from 'react'
import * as Utils from '../lib/utils'

export interface SearchProps {
	displayName?: string,
	query?: string | undefined,
	onChange: any
}

export interface SearchState {}

class SearchForm extends React.Component<SearchProps, SearchState> {
	constructor(props) {
		super(props);
        // this.displayName = 'Filter/Search Units Form'
		// this.state = {}

		// Scope functions...
		this.handleQuery = this.handleQuery.bind(this)
	}

    // componentWillReceiveProps(nextProps: SearchProps){
	// 	console.info("Search Component Will Recieve Props")
    //     console.info('Next Properties:', nextProps)

	// 	console.info("===============================")
    // }

	// componentWillMount () {
	// 	// console.info("Component Will Mount")
	// }

	// componentDidMount () {
	// 	// console.info("Component Did Mount")
	// }

	// componentWillUpdate (nextProps: SearchProps, nextState: SearchState) {
	// 	console.info("Search Component Will Update")
    //     console.info('Next Properties:', nextProps)
    //     console.info('Next State:', nextState)
	// 	console.info("===============================")
	// }

	// componentDidUpdate () {
	// 	// console.info("Component Updated")
	// }

	// componentWillUnmount () {
	// 	// console.info( "Unmounted ShowCurrentWord" )
	// }

	handleQuery = (event: any) => {
		// console.info(event.target)
        this.props.onChange(event.target.value)
	}

	render() {
		// console.info(this.state)

		return (<div className="filter-form-container">
            <form className="filter-form" onSubmit={ Utils.preventDefaultAction }>
				<div className="input-group">
					<div className="row collapse">
						<div className="small-8 medium-10 columns">
							<span className="input-group-label hidden">Filter:</span>
							<input className="input-group-field" placeholder="Search by keywords" type="text" title="Search by keywords."  name="filter-units" value={ this.props.query } onChange={ this.handleQuery } autoFocus={true} />
						</div>
						<div className="small-4 medium-2 columns">
							<input className="button" type="submit" onClick={ this.handleQuery } title="Submit filter query" name="submit" />
						</div>
					</div>
				</div>

    		</form>
		</div>
		);
	}
}

export default SearchForm;
