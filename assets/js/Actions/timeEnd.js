define(['angularСrutch', 'stack', 'User', 'Directive'],function(angularСrutch, stack, User, Directive){

	var action = {
		run: function(){

			clearTimeout(window.tMotion);
			angularСrutch.scopeSetValue('timerCtrl', 'active', false);
			angularСrutch.scopeSetValue('nextButtonCtrl', 'active', false);

			stack.push(User.opponent, 'myTimerStart');

		}
	}

	return action;
})