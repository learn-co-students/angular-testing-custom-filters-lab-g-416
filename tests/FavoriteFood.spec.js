describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should filter out favorite food',function(){
		var list = [{
					name: "person1",
					favoriteFood: "hamburger"}, {

					name: "person2",	
					favoriteFood: "watermelon"}, {

					name: "person3",
					favoriteFood: "fried chicken"},{ 

					name: "person4",	
					favoriteFood: "pork chop"
				}]
		var results = $filter('favoriteFood')(list,'hamburger')

		expect(results.length).toBe(1);
		expect(results[0].favoriteFood).toBe("hamburger")
	})
	
});
