'use strict';

angular.module('mean.questions').controller('QuestionController', ['$scope', '$stateParams', '$location', 'Global', 'Questions', function ($scope, $stateParams, $location, Global, Questions) {
    
   
    

    $scope.find = function() {
        Questions.query(function(questions) {
            $scope.questions = questions ;

        });
    };

    $scope.findOne = function() {
        Questions.get({
            questionId: $stateParams.questionId
        }, function(question) {
            $scope.question = question;
        });
    };
}]);