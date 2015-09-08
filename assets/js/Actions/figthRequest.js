define(['Directive'],function(Directive){

	var action = {
		run: function(opponentLogin){

			Directive.run('send', ["figthRequest", opponentLogin]);

		}
	}

	return action;
})