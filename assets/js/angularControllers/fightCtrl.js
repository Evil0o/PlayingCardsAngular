define(['angularControllersModule', 'Directive'],function(controllers, Directive, DB, User){

	/////////// Модель fight
	controllers.controller('fightCtrl', ['$scope',function($scope){

		// Стартовые директивы
		Directive.run('loadCss',['fight.min.css']);
		Directive.run('randomMotion');


		setInterval(function(){
			Directive.run('getNextAction');
		}, 2000);


	}]);

	return controllers;

})