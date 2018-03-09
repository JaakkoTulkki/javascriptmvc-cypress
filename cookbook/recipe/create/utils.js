function createRecipe(Recipe, el, ev) {
	ev.preventDefault();
	el.find('[type=submit]').val('Creating...');
	var data = el.serializeArray().reduce(function (acc, value) {
		acc[value.name] = value.value;
		return acc;
	}, {});

	new Recipe(data).save(function () {
		el.find('[type=submit]').val('Create');
		el[0].reset()
	});
}

if(typeof steal === "undefined") {
  module.exports = {
    createRecipe: createRecipe,
  };
} else {
  steal(() => ({createRecipe: createRecipe}));
}