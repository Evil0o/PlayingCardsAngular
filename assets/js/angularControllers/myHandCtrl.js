define(['angularControllersModule', 'Directive'],function(controllers, Directive){

	/////////// Модель карт моей руки
	controllers.controller('myHandCtrl', ['$scope',function($scope){

		$scope.cards = [];

		$scope.putCard = function(card){
			Directive.run('putCard',card);
			card.remove = true;

			for(key in $scope.cards){
				if($scope.cards[key].remove == true){
					$scope.cards.splice(key,1);
				}
			}

		}

	}]);

	return controllers;

})