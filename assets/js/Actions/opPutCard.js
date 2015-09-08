define(['angularСrutch'],function(angularСrutch){

	var action = {
		run: function(data){

			var card = data.card[0];
			angularСrutch.scopePush('opUnitsTpl', 'cards', card);

		}
	}

	return action;
})