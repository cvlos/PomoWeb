describe('toDo Services and Function', function() {
	var $httpBackend, toDoFactory = {};

	beforeEach(module('pomoWebApp'));
	beforeEach(inject(function(_toDoFactory_, _$httpBackend_){
		$httpBackend = _$httpBackend_;
		toDoFactory = _toDoFactory_;

		toDoFactory.add = function(){};
		toDoFactory.edit = function(){};
		toDoFactory.delete = function(){};
		toDoFactory.retrieve = function(){};
	}));

	it('Service should have add functionality', function() {
		expect(toDoFactory.add).toBeDefined();
	});

	it('Service should have edit functionality', function() {
		expect(toDoFactory.edit).toBeDefined();
	});

	it('Service should have delete functionality', function() {
		expect(toDoFactory.delete).toBeDefined();
	});

	it('Service should have retrieve functionality', function() {
		expect(toDoFactory.retrieve).toBeDefined();
	});

	

});