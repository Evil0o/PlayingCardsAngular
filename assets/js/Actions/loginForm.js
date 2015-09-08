define(['Modal','Directive'],function(Modal,Directive){

	var action = {
		run: function(msg){
			Modal.prompt(msg, this.callback, 'Логин');
		},
		callback: function(login){
			console.log('Login: ' + login);
			Directive.run('tryLogin',["loginQuery",login]);
		}
	}

	return action;
})