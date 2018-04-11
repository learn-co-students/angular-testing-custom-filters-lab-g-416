describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should remove all vowels from a word', function(){
        var results = $filter('removeAllVowels')('word');

		expect(results).toBe('wrd')
	});
});
