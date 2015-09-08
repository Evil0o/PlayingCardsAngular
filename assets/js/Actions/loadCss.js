define(['loadCss'],function(loadCss){

	var action = {
		run: function(styleName){

			loadCss.load(styleName);

		}
	}

	return action;
})