define(['angularControllersModule', 'Directive'],function(controllers, Directive){

	/////////// Модель next кнопки
	controllers.controller('nextButtonCtrl', ['$scope',function($scope){

		$scope.active = false;

		$scope.reMotion = function(active){
			if(!active) return false;
			Directive.run('timeEnd');
		}


		$scope.viewClass = function(active){
			if(active) return 'active';
			else return '';
		}

	}]);

	return controllers;

})