define(['Directive'],function(Directive){

	var action = {
		run: function(opponentLogin){

			Directive.run('cancelableModal',['<p>Ожидание ответа от игрока <b>' + opponentLogin + '</b></p>', this.callback]);

		},
		callback: function(){

			Directive.run("send",['modalClose']);
			Directive.run("modalClose");

		}
	}

	return action;
})