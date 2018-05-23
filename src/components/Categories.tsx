import * as React from 'react'

class Categories extends React.Component<Services.CategoriesProps, Services.CategoriesState> {
	constructor(props) {
		super(props);
        let displayName = 'Category Listing'
		this.state = {
			categoryName: null,
            open: false,
            className: 'category-list closed',
            headingClassName: 'category-list-heading'
        };

		// Scope functions...
		this.loadData = this.loadData.bind(this)
        this.toggleCategoryList = this.toggleCategoryList.bind(this);
	}

    componentWillReceiveProps(nextProps: Services.CategoriesProps){
		// console.info("Component Will Recieve Props")
        // console.info('Next Properties:', nextProps)

        if ( nextProps.categoryID ) {
            nextProps.categories.forEach( (c: Services.CategoryProps) => {
                if ( c.uuid === nextProps.categoryID ) {
                    this.setState({
                        categoryName: c.title
                    })
                }
            } )
        }

		// console.info("===============================")
    }

	componentWillMount () {
		// console.info("Component Will Mount")
	}

	componentDidMount () {
		// console.info("Component Did Mount")
	}

	componentWillUpdate (nextProps: Services.CategoriesProps, nextState: Services.CategoriesState) {
		// console.info("Component Will Update")
        // console.info('Next Properties:', nextProps)
        // console.info('Next State:', nextState)
		// console.info("===============================")
	}

	componentDidUpdate () {
		// console.info("Component Updated")
	}

	componentWillUnmount () {
		// console.info( "Unmounted ShowCurrentWord" )
	}

	/*
	* Handling the click event
	*/
    toggleCategoryList() {
        const { open } = this.state;
        if (open) {
            this.setState({
                open: false,
                className: "category-list closed",
                headingClassName: "category-list-heading"
            });
        } else {
            this.setState({
                open: true,
                className: "category-list opened",
                headingClassName: "category-list-heading clicked"
            });
        }
	}

	loadData = () => {
		const { className } = this.state;
		const { headingClassName } = this.state;

		if ( this.props.categories.length === 0 ) {
			return <h4 className={headingClassName}>Loading Categories...</h4>
		}

		return <nav aria-label="category nav" className="category-list-nav">
			<h4 className={headingClassName} onClick={this.toggleCategoryList}>Categories</h4>
			<div className={className}>
				<a className="nav-item" onClick={ this.props.onClick }>All Categories</a>
				{this.props.categories.map( (c: Services.CategoryProps) => {
					let navClassList = "nav-item"

					if ( c.uuid === this.props.categoryID ) {
						navClassList = "nav-item is-active"
					}

					return <a key={c.uuid} id={c.uuid} onClick={ this.props.onClick } className={navClassList} title={c.title}>{ c.title }</a>
				}
				)}
			</div>
		</nav>
	}

	render() {
		// console.info(this.state)
		// const currentCategory = this.props.category

		return (<div className="">
			{ this.loadData() }
		</div>
		);
	}
}

export default Categories;

// NOTE: Accordion menu in ReactJS was found on http://www.codershood.info/2017/11/05/dynamic-accordion-menu-using-reactjs-tutorial/
