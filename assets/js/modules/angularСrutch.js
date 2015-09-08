define(['Angular'],function(angular){

	var action = {
		scopePush: function(template, arrayPush, item){

		    var el = document.querySelector('[template=' + template + ']');
		    var scope = angular.element(el).scope();
		    scope.$apply(function () {
		    	console.log('scope[arrayPush]', arrayPush, scope[arrayPush]);
		    	console.log('scope.test', scope.test);
		        scope[arrayPush].push(item);
		    });

		},
		scopeSetValue: function(controller, variable, value){

		    var scope = this.getSCope(controller);
		    scope.$apply(function () {
		        scope[variable] = value;
		    });

		},
		apply: function(controller, func, args){

			var args = args || null;
			
			var scope = this.getSCope(controller);
		    scope.$apply(function () {
		        scope[func](args);
		    });			

		},
		getSCope: function(controller){

		    var el = document.querySelector('[ng-controller=' + controller + ']');
		    var scope = angular.element(el).scope();
		    return scope;

		}
	}

	return action;
})