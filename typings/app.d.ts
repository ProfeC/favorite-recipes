// Type definitions for Favorite Recipes Application v1.0.0
// Project: Favorite Recipes
// Definitions by: G. L. Clark, II
// Reference: https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-d-ts.html

/*~ If your library has properties exposed on a global variable,
*~ place them here.
*~ You should also place types (interfaces and type alias) here.
*/
declare namespace Recipes {
	//~ We can write 'Recipes.timeout = 50;'
	let timeout: number;
	let allTags: object[];

	//~ We can access 'Recipes.version', but not change it
	const version: string;

	//~ There's some class we can create via 'let c = new Recipes.Cat(42)'
	//~ Or reference e.g. 'function f(c: Recipes.Cat) { ... }
	// class Cat {
	//	constructor(n: number);

	//	//~ We can read 'c.age' from a 'Cat' instance
	//	readonly age: number;

	//	//~ We can invoke 'c.purr()' from a 'Cat' instance
	//	purr(): void;
	// }

	//~ We can declare a variable as
	//~	'var s: Recipes.AppProps = { updated: 12323122415, version: "1.2.3" };'
	interface AppProps {
		displayName: string,
		updated?: number,
		version?: string
	}

	interface AppState {
		audienceID?: string | undefined,
		audienceName?: string,
		audiences: object[],
		categoryID?: string | undefined,
		categoryName?: string,
		categories: object[],
		query: string,
		recipes: Array<any>,
		tagID?: string | undefined,
		tagName?: string[] | undefined,
		tags: object[]
	}

	interface AudienceProps {
		uuid: string,
		description?: string | undefined,
		imageSmall?: string | undefined,
		title: string,
		type?: string | undefined
	}

	interface CategoriesProps {
	  categoryID?: string | undefined,
	  categoryName?: string | undefined,
	  categories: object[],
	  onClick?: any | undefined,
	}

	interface CategoryProps {
		uuid: string,
		description?: string | undefined,
		imageSmall?: string,
		title: string,
		type?: string
	}

	interface CategoriesState {
		categoryName: string | undefined | null,
		open: boolean,
		className: string,
		headingClassName: string
	}

	interface ImageProps {
		altText: string,
		id: number,
		origHeight: number,
		origSize: number,
		origWidth: number,
		ssid: number,
		urlAbsolute: string,
		urlRelative: string
	}

	interface ImageState {}

	interface ServiceProps {
		audience: AudienceProps[],
		category: CategoryProps[],
		description: string,
		imageSmall: ImageProps,
		includeDescription: boolean | undefined,
		tag: TagProps[],
		title: string,
		unit?: string,
		url: string,
		uuid: string
	}

	interface ServiceState {}

	interface SearchProps {
		query?: string,
		onChange?: string
	}

	interface SearchState {
		query?: string
	}

	interface ServiceListProps {
		audiences: object[],
		categoryID?: string,
		categoryName?: string,
		categories: object[],
		query: string,
		services: object[],
		tags: object[]
	}

	interface ServiceListState {
		services: object[]
	}

	interface TagProps {
		active: boolean,
		contentID: number,
		parentID: number,
		title: string,
		uuid: string
	}

	//~ We can write 'const v: Services.VetID = 42;'
	//~  or 'const v: Services.VetID = "bob";'
	type VetID = string | number;

	// //~ We can invoke 'Services.checkCat(c)' or 'Services.checkCat(c, v);'
	// function checkCat(c: Cat, v?: VetID);
	function filterByCategory(
	  categoryID: string,
	  units: object[]
	): object[];

	function getUnitCategories(
	  units: object[]
	): object[];


}
