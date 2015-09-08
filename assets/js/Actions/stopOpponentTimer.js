define(['User', 'stack'],function(User, stack){

	var action = {
		run: function(){

			stack.push(User.opponent,'stopTimer');

		}
	}

	return action;
})