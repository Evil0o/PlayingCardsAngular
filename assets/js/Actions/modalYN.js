define(['Modal'],function(Modal){

	var action = {
		run: function(){

			Modal.yn.apply(Modal, arguments);

		}
	}

	return action;
})