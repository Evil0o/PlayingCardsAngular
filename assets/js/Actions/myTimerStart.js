define(['angularСrutch', 'stack', 'User', 'Directive'],function(angularСrutch, stack, User, Directive){

	var action = {
		run: function(){

			angularСrutch.scopeSetValue('timerCtrl', 'active', true);
			angularСrutch.scopeSetValue('nextButtonCtrl', 'active', true);

			window.tMotion = setTimeout(function(){
				Directive.run('timeEnd');
			}, 120000);

			angularСrutch.apply('myUnitsCtrl', 'enableAll');
			Directive.run('getCard');


			// mana.setAllActive();
			// mana.add();

		}
	}

	return action;
})