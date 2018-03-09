if(typeof steal === 'undefined') {
	const createRecipe = require('./utils').createRecipe;
	module.exports = {
		createRecipe
	};
} else {
	steal('can', 'cookbook/models/recipe.js', './init.ejs', 'jquery/dom/form_params', './utils.js',
		function (can, Recipe, initEJS, ignore, utils) {
			console.log('createRecipe', utils);
			const  {createRecipe} = utils;
			/**
			 * @constructor cookbook/recipe/create
			 * @alias RecipeCreate
			 * @parent cookbook
			 * @inherits can.Control
			 * Creates recipes
			 */
			return can.Control(
				/** @Prototype */
				{
					/**
					 *  Render the initial template
					 */
					init: function () {
						this.element.html(initEJS());
					},
					/**
					 *  Submit handler. Create a new recipe from the form.
					 */
					submit: function (el, ev) {
						createRecipe(Recipe, el, ev);
					}
				});
		});
}