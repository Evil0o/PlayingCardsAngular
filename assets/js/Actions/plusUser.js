define(['angularСrutch'],function(angularСrutch){

	var action = {
		run: function(name){

			name = name || 'unNamed';
			angularСrutch.scopePush('userListTpl', 'userlist',{name: name});

		}
	}

	return action;
})