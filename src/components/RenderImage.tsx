import * as React from 'react'

export default class RenderImage extends React.Component<Services.ImageProps, Services.ImageState> {
	constructor(props) {
		super(props)
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

	render() {
		// console.info('Image object length => ', Object.keys(this.props).length)
		if ( Object.keys(this.props).length > 0 ) {
			// console.info(this.props)
			return(<img src={ this.props.urlRelative } alt={ this.props.altText } id={'ssid' + this.props.ssid + '-id' + this.props.id.toString() } />)
		} else {
			return null
		}

	}
}
