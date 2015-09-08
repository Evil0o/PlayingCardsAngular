define(['User', 'Directive'],function(User, Directive){

	var action = {
		run: function(){

			if (User.meCurrent()){
				Directive.run('startTimer');
			}

		}
	}

	return action;
})