define(['angularControllersModule'],function(controllers){

	/////////// Модель next кнопки
	controllers.controller('myUnitsCtrl', ['$scope',function($scope){

		$scope.cards = [];

		$scope.enableAll = function(){
			for(key in $scope.cards){
				$scope.cards[key].enable = true;
			}
		}

	}]);

	return controllers;

})