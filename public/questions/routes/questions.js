'use strict';

//Setting up route
angular.module('mean.questions').config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            

            // states for my app
            $stateProvider  
                           
                .

                 .state('question', {
                    url:'/questions',
                    templateUrl: 'public/system/views/question.html'
                 });
        }
    ])
    .config(['$locationProvider',
        function($locationProvider) {
            $locationProvider.hashPrefix('!');
        }
    ]);