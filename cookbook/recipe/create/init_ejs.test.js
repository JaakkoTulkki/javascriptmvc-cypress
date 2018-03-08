var ejs = require('ejs');

test('it renders properly', () => {
  expect.assertions(1);
  const obj = {
    title: 'Cleaning Supplies',
    supplies: ['mop', 'broom', 'duster']
  };
  let actual = ''
  ejs.renderFile(__dirname +'/test.ejs', obj, undefined, (err, str) => {
    console.log(err, str);
    actual = str;
  });
  expect(actual).toMatchSnapshot();
});