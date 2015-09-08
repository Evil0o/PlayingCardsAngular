define(['Directive'],function(Directive){

	var action = {
		run: function(){

			Directive.run('send',["getUsers"]);

		}
	}

	return action;
})