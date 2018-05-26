// Type definitions for Favorite Recipes Application v1.0.0
// Project: Favorite Recipes
// Definitions by: G. L. Clark, II
// Reference:

interface RecipeProps {
	author: string,
	bakeTime?: number,
	bakeTimeUnit?: string,
	categories?: Array<any>,
	description: string,
	images: Array<any>,
	ingredients: Array<Ingredient>,
	instructions: string | undefined,
	name: string,
	notes?: string,
	ovenFan?: string,
	ovenTemp?: number,
	ovenTempUnit?: string, // C|F
	ovenTime?: number, // cummulative time
	ovenTimeUnit?: string,
	sourceBookInfo?: string,
	sourceBookISBN?: string,
	sourceBookTitle?: string,
	sourceBookURL?
	soureBookAuthors?: string,
	steps: Array<Step>,
	tags?: object[],
	uuid: string,
	yields: Array<number>
}

interface RecipeState {}

interface Ingredient {
	amount: number,
	name: string,
	notes?: string,
	processing: string, // “whole”, “large dice”, “minced”, “raw”, “steamed”, etc
	substitutions?: Array<Substitutions>,
	unit: string,
	usdaUUID: string, // aka: "usda_num",
}

interface Step {
	description: string,
	haccp?: string,
	notes?: Array<string>
}

interface Substitutions {
	amount: number,
	name: string,
	notes?: string,
	processing: string, // “whole”, “large dice”, “minced”, “raw”, “steamed”, etc
	unit: string,
	usdaUUID: string, // aka: "usda_num",
}

