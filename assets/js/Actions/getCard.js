define(['Directive', 'User'],function(Directive, User){

	// Config
	var pause = 2000;

	var action = {
		run: function(num){
			num = num || 1;
			console.log('getCard: ' + num);

			for (var i = 0; i < num; i++){

				Directive.run('plusCard');

			};

			console.log('Игрок добирает карту: ' + User.currentMotion);

		}
	}

	return action;
})