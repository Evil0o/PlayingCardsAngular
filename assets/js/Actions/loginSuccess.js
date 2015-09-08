define(['Directive', 'User'],function(Directive, User){

	var action = {
		run: function(login){

			console.log('ok');
			User.login = login;
			Directive.run('getUsers');

		}
	}

	return action;
})