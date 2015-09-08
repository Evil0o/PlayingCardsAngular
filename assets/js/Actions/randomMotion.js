define(['Directive'],function(Directive){

	var action = {
		run: function(){

			Directive.run('send', 'getRandomMotion');
			Directive.run('getCard', 3);

		}
	}

	return action;
})