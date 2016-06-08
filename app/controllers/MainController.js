"use strict";

NotDolls.controller('MainController', [
	'$http', 
	'$scope',

	function  ($http, $scoper) {
		$scope.figurines = [];

		$http
			.get('http://localhost:5000/api/Inventory')
			.success(inv => $scope.figurines = inv)
	}
]);