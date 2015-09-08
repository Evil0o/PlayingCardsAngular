define(['angularСrutch', 'stack', 'User'],function(angularСrutch, stack, User){

	var action = {
		run: function(card){

			// Units.push
			angularСrutch.scopePush('myUnitsTpl', 'cards', card);
			// Показать врагу
			stack.push(User.opponent, 'opPutCard', {
				prop: 'card',
				id: card.id
			});

		}
	}

	return action;
})