requirejs.config({
	paths: {
		"rClck" : "modules/disable_rclck",
		"app" : "app",
		"DB" : "modules/DB",
		"Directive" : "modules/directive",
		"loadCss" : "modules/loadCss",
		"Modal" : "modules/Modal",
		"socket" : "modules/websockets",
		"User" : "modules/User",
		"AngularModule" : "modules/ag",
		"angularControllers" : "angularControllers/index",
		"angularControllersModule" : "angularControllers/module",
		"angularСrutch" : "modules/angularСrutch",
		"is" : "modules/is",
		"agConfig" : "agConfig",
		"stack" : "modules/stack",

		// Controllers
		"userList" : "angularControllers/userList",
		"fightCtrl" : "angularControllers/fightCtrl",
		"nextButtonCtrl" : "angularControllers/nextButtonCtrl",
		"timerCtrl" : "angularControllers/timerCtrl",
		"myUnitsCtrl" : "angularControllers/myUnitsCtrl",
		"myUnitsModel" : "angularControllers/myUnitsModel",
		"myHandCtrl" : "angularControllers/myHandCtrl",
		"opHandCtrl" : "angularControllers/opHandCtrl",
		"opUnitsCtrl" : "angularControllers/opUnitsCtrl",

		// Libs
		"databoom" : "libs/databoom",
		"jquery" : "libs/jquery",
		"Angular" : "libs/angular",
		"domReady" : "libs/domReady",
		"ngRoute" : "libs/ngRoute",
		// "AngularDataboom": "https://databoom.space/databoom.angular"
	},
	shim: {
        'Angular': {
            exports: 'angular'
        },
        'ngRoute':{
        	deps: ['Angular']
        }
    },
    deps: [
        // Старт путем вызова зависимост
        './bootstrap'
    ]
});



require(['app'],function(app){
	app.menu();
});
requirejs(['rClck']);