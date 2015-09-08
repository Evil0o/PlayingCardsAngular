define(['angularСrutch', 'DB', 'stack', 'User'],function(angularСrutch, DB, stack, User){

	var action = {
		run: function(){

			DB.getCard(this.callback);

		},
		callback: function(card){

			angularСrutch.scopePush('myHandTpl', 'cards', card);
			stack.push(User.opponent, 'opGetCard');

		}
	}

	return action;
})