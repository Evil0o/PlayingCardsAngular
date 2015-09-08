define([
    'require',
    'Angular',
    'AngularModule'
], function (require, ng) {
    'use strict';

    require(['domReady!'], function (document) {
        ng.bootstrap(document, ['App']);
    });
});