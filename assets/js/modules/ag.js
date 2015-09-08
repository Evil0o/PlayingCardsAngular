define([

	'Angular',
	'agConfig',
	'angularControllers'

	], function (angular,agConfig) {
		
    'use strict';

	return angular.module('App', ['angularControllers'])
	.config(agConfig);

});