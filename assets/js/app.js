define(['Directive','socket'],function(Directive){

	var app = {
		menu: function(){

			Directive.run('loadCss',['style.min.css']);
			Directive.run('loginForm',['Введите логин']);

		},
		fight: function(){

			// Костыль временный
			document.getElementById('fight').click()

		}
	}

	return app;
})