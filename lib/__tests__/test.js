const plugin = require('../../');
const postcss = require('postcss');

test(`Should do nothing if config is undefined`, () => {
	runTest('empty-lines-preserve', undefined, __dirname);
});

test(`Should throw an error if config has error`, () => {
	const opts = {
		'throw-validate-errors': true,
		order: 'Justice Rains From Above',
	};

	const pluginRun = postcss([plugin(opts)])
		.process('')
		.then(() => {
			expect('Plugin should throw an error').toBeFalst();
		})
		.catch(err => {
			throw err;
		});

	expect(pluginRun).rejects.toBeTruthy();
});
