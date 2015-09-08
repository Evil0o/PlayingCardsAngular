define(['Directive'],function(Directive){

	var action = {
		run: function(opponentLogin){

			Directive.run("modalYN", ['<p>Приглашение от игрока <b>' + opponentLogin + '</b></p>', this.Y, this.N, 'Принять', 'Отклонить']);
			
		},
		Y: function(){

			Directive.run("send", ["fightAccepted"]);
			Directive.run("modalClose");

		},
		N: function(){

			Directive.run("send", ["modalClose"]);
			Directive.run("modalClose");

		}
	}

	return action;
})