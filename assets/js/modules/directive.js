define(['DB','is'],function(DB){

	var path = 'Actions/';


	var Directive = {
		run: function(directiveName, args){

			var args = args || [''];
			if (!is.array(args)) {
				args = [args]
			};
			DB.getDerictive(directiveName, exec);

			function exec(directiveName){
				// Directive.preAction ?
				if (typeof directiveName == undefined || typeof directiveName == 'string') {
					action = directiveName;
				}else{
					action = directiveName.action;
				}
				Directive._apply(action,args);
			}

		},
		_apply: function(actionName,args){

			require([path + actionName],function(action){
				action.run.apply(action,args);
			});	
			
		}
	}

	return Directive;
})