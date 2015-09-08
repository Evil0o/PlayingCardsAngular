define(['angularСrutch'],function(angularСrutch){

	var action = {
		run: function(){

			angularСrutch.scopePush('opHandTpl', 'cards', {});

		}
	}

	return action;
})