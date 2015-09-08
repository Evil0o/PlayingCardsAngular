define(['DB', 'User', 'Directive', 'is'],function(DB, User, Directive, is){

	var action = {
		run: function(){

			DB.getNextAction(User.login, this.actionStart);

		},
		actionStart: function(data){

			if (is.object(data)){
				window.motionId++;
				Directive.run(data.motion, data);
			} 

		}
	}

	return action;
})


