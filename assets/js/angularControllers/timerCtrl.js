define(['angularControllersModule'],function(controllers){

	/////////// Модель таймера
	controllers.controller('timerCtrl', ['$scope', function($scope){

		$scope.active = false;

		$scope.viewClass = function(active){
			if(active) return 'active';
			else return '';
		}

	}]);

	return controllers;

})