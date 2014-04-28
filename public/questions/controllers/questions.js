angular.module('mean.questions').controller('QuestionController', ['$scope', '$stateParams', '$location', 'Global', 'Questions', function ($scope, $stateParams, $location, Global, Questions) {
    $scope.global = Global;

    

    $scope.find = function() {
        .query(function(questions) {
            $scope.questions = questions;

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