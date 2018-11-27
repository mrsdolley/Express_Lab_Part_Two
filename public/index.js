"use strict";
{
    angular.module('app', ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
            .when('/', {
                template: '<home></home>'
            })
            .otherwise({
                template: '<h1>404</h1>'
            });
    });
}