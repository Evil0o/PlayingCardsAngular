define(['angularСrutch'],function(angularСrutch){

	var action = {
		run: function(list){

			for(key in list){
				angularСrutch.scopePush('userListTpl', 'userlist',{name: key});
			}

		}
	}

	return action;
})