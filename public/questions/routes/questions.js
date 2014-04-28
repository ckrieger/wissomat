'use strict';

//Setting up route
angular.module('mean.questions').config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            

            // states for my app
            $stateProvider  
                   
                   .state('question', {
                    url:'/questions',
                    templateUrl: 'public/questions/views/list.html'
                 })

                   .state('answer', {
                    url:'/questions/:questionId',
                    templateUrl: 'public/questions/views/answer.html'
                 });
        }
    ])
    .config(['$locationProvider',
        function($locationProvider) {
            $locationProvider.hashPrefix('!');
        }
    ]);