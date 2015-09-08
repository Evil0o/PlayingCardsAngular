define(['angularControllersModule', 'User', 'Directive'],function(controllers, User, Directive){

	/////////// Модель userList
	controllers.controller('userlistCtrl', ['$scope',function($scope){
		$scope.userlist = [];
		$scope.isMe = function(name){
			if (name == User.login) {
				return 'me';
			};
		}
		$scope.letsFight = function(name){
			console.log('letsFight');
			return Directive.run('figthRequest',[name]);
		}
	}]);

	return controllers;

})