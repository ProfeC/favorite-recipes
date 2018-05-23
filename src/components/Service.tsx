import * as React from 'react'
import RenderImage from './RenderImage'

export default class Service extends React.Component<Services.ServiceProps, Services.ServiceState> {
	constructor(props) {
		super(props)
        // this.displayName = 'Service Info'
		this.state = {

		}

		this.getCategories = this.getCategories.bind(this)

	}

	// componentWillMount () {
	// 	// console.info("Component Will Mount")
	// }

	// componentDidMount () {
	// 	// console.info("Component Did Mount")
	// }

	// componentWillUpdate () {
	// 	// console.info("Component Will Update")
	// }

	// componentDidUpdate () {
	// 	// console.info("Component Updated")
	// }

	// componentWillUnmount () {
	// 	// console.info( "Unmounted ShowCurrentWord" )
	// }

	getCategories = (categories: object[]) => {
		let clist = '';
		let idx: number = 0;
		categories.forEach ( (category: Services.CategoryProps) => {
			// console.info(category)
			idx++;
			if(idx === categories.length - 1) {
				clist += category + ', '
			}
		});
		// FIXME: don't add a comma for the last item!
		return clist;
	}

	checkImage = () => {
		if(Object.keys(this.props.imageSmall).length > 0) {
			return <RenderImage altText={this.props.imageSmall.altText}
			id={this.props.imageSmall.id}
			origHeight={this.props.imageSmall.origHeight}
			origSize={this.props.imageSmall.origSize}
			origWidth={this.props.imageSmall.origWidth}
			ssid={this.props.imageSmall.ssid}
			urlAbsolute={this.props.imageSmall.urlAbsolute}
			urlRelative={this.props.imageSmall.urlRelative} />
		} else {
			return null;
		}

	}

	render() {
		// let serviceCategory = this.props.category !== [] ? this.getCategories(this.props.category) : null
		// let email = React.createElement('a', {className: 'email', href: 'mailto:'+this.props.email}, this.props.email)
		// console.log(this.props.imageSmall);


		return (
			<div id={this.props.uuid}  className="column">
				<div className="card callout secondary" data-equalizer-watch>
					<a href={this.props.url}>{this.checkImage()}<span>{ this.props.title }</span></a>
				</div>
			</div>
		)
	}
}
