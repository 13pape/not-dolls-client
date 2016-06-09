"use strict";

NotDolls.controller('NewFigurineController', [
	'$http',
	'$scope',

	function ($http, $scope) {
		$scope.figurine = {
			geekId: 3
		};

		$scope.createFigurine = function () {
			$scope.figurine.createDate = new Date();
			$http({
				url: 'http://localhost:5000/api/Inventory',
				method: 'POST',
				data: JSON.stringify($scope.figurine)
			})
			.success(newFigurine => console.log('201 Created', NewFigurine))
		};
	}
]);
