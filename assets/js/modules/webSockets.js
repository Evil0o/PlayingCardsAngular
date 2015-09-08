define(["Directive"],function(Directive){
	console.log('webSockets required');

	// Config
	var server = 'ws://localhost:8000';
	socket = new WebSocket(server);		

	socket.onopen = function (e){
		console.log('Соединение установлено с ' + server);
	}
	socket.onclose = function (e){
		console.log('Соединение прервано!');
		Directive.run('connectionLost');
	}
	socket.onmessage = function (e){
		if (typeof e.data === "string"){
			var request = JSON.parse(e.data);
			console.log('request',request.function);
			Directive.run(request.function,request.args);
		};
	}

	return socket;
})