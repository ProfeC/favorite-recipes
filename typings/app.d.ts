///<reference path='../typings/recipe.d.ts'/>

// Type definitions for Favorite Recipes Application v1.0.0
// Project: Favorite Recipes
// Definitions by: G. L. Clark, II
// Reference: https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-d-ts.html

// import './recipe'

/*~ If your library has properties exposed on a global variable,
*~ place them here.
*~ You should also place types (interfaces and type alias) here.
*/
declare namespace Recipes {
	//~ We can write 'Recipes.timeout = 50;'
	let timeout: number;

	//~ We can access 'Recipes.version', but not change it
	// const version: string;

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
		lastUpdated?: number,
		version?: string
	}

	interface AppState {
		categoryID?: string | undefined,
		categories: object[],
		query: string,
		recipes: Array<RecipeProps>,
		tagID?: string | undefined,
		tags: object[]
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

	interface SearchProps {
		query?: string,
		onChange?: string
	}

	interface SearchState {
		query?: string
	}

	//~ We can write 'const v: Recipes.VetID = 42;'
	//~  or 'const v: Recipes.VetID = "bob";'
	type RecipeID = string | number;

	// //~ We can invoke 'Recipes.checkCat(c)' or 'Recipes.checkCat(c, v);'
	// function checkCat(c: Cat, v?: VetID);
	function filterByCategory(
	  categoryID: string,
	): object[];
}
