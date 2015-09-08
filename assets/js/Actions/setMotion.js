define(['Directive', 'User'],function(Directive, User){

	var action = {
		run: function(login){

			console.log('setMotion: ' + login);
			User.currentMotion = login;
			Directive.run('motionMsg');
			Directive.run('setTimer');

		}
	}

	return action;
})