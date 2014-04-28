'use strict';

angular.module('mean.questions').factory('Questions', ['$resource', function($resource) {
    return $resource('questions/:questionId', {
        questionId: '@id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);