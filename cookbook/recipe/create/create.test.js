const createRecipe = require('./create').createRecipe

test('this works', () => {
  const Recipe = jest.fn();
  const myMock = jest.fn();
  createRecipe(Recipe, new myMock(), new myMock());

  expect(Recipe).toHaveBeenCalledWith('f');
});