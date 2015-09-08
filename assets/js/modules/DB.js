define(['User', 'jquery','databoom'],function(User, $){

	var config = {
		basePath: 'https://t014.databoom.space/api1/b014/collections/crypto',
		baseHost: 'https://t014.databoom.space',
		baseName: 'b014'
	}

	var db = databoom(config.baseHost, config.baseName);

	function getRandomInt(min, max){
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	var DB = {
		getDerictive: function(directiveName, callback){

			db.load('Directives', {
			    filter:"name eq '" + directiveName + "'"
			}).then(function(data){
				var action = data[0];
				if(!action) action = directiveName;
				callback(action);
			});

		},
		push: function(table, obj){

			var filter = {
				filter: "(for eq '" + obj.for + "')",
				orderby: "motionId desc",
				top: 1
			}

			db.load(table, filter).then(function(data){

				if (!data.length) {
					var motionId = 1;
				}else{
					var motionId = data[0].motionId + 1;
				}
				obj.motionId = motionId;
				db.save(table, obj);
			});

		},
		getNextAction: function(forWho, callback){

			if (!window.motionId) window.motionId = 0;
			var filter = "(motionId gt " + window.motionId + ") and (for eq '" + forWho + "')";
			db.load('motionQueue',{
				filter: filter,
				orderby: "motionId",
				top: 1,
				expand: "card"
			}).then(function(data){
				console.log('DB.getNextAction', data[0]);
				callback(data[0]);
			});

		},
		getCard: function(callback){

			db.load('Cards')
			.then(function(data){
				
				var i = getRandomInt(0, data.length - 1);
				card = data[i];

				callback(card);
			});			

		}
	}

	return DB;
})