'use strict';

//Question service used for question REST endpoint
angular.module('mean.questions').factory('Questions', ['$resource', function($resource) {
   

    return $resource('questions/:questionId', {
        questionId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);