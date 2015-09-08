define(['Modal'],function(Modal){

	var action = {
		run: function(){

			Modal.cancelable.apply(Modal,arguments);

		}
	}

	return action;
})