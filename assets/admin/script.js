var data,db;
webix.ready(function(){

	db = databoom('https://t014.databoom.space', 'b014');
	db.login('admin','1234567890');


	data = webix.proxy("databoom", 'https://t014.databoom.space/api1/b014/collections/Directives');
	cards = webix.proxy("databoom", 'https://t014.databoom.space/api1/b014/collections/Cards');

	webix.ui({rows:[
		{type:'header', template:'PlayingCardsUsers'},
		{cols:[
			{view:'gridpanel', multiselect:true, url:data, columns:[
				{id:'name', header:['Directive']},
				{id:'preAction', header:['preAction']},
				{id:'action', header:['Action']},
				{id:'postAaction', header:['postAaction']}
			]},
			{view:'resizer'},
			{view:'gridpanel', multiselect:true, url:cards, columns:[
				{id:'id', header:['id']},
				{id:'title', header:['Название']},				
				{id:'attack', header:['Атака']},
				{id:'health', header:['Здоровье']},
				{id:'mana', header:['Мана']},
				{id:'picture', header:['Изображение']}
			]}
		]}
	]});
});