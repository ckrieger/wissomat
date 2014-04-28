'use strict';

//Setting up route
angular.module('mean.system').config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            // For unmatched routes:
            $urlRouterProvider.otherwise('/');

            // states for my app
            $stateProvider  
                           
                .state('start', {
                    url: '/',
                    templateUrl: 'public/system/views/start.html'
                })

                 .state('introduction', {
                    url:'/introduction',
                    templateUrl: 'public/system/views/introduction.html'
                })

                 
        }
    ])
    .config(['$locationProvider',
        function($locationProvider) {
            $locationProvider.hashPrefix('!');
        }
    ]);
