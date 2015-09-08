define(['Modal', 'app', 'User'],function(Modal, app, User){

	var action = {
		run: function(opponentLogin){

			User.opponent = opponentLogin;
			Modal.close();
			User.save();
			app.fight();
			
		}
	}

	return action;
})