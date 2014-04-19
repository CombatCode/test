'use strict';

angular.module('iokiApp')
  .controller('MainCtrl', ['$scope', 'Exercise', function ($scope, Exercise) {
    /**
     * Definitions
     */

    $scope.showReset = false;
    $scope.exercise = Exercise.get(0);

    /**
     * Functions
     */

    function prepareString(str) {
        return str.toLowerCase().replace(/ /g,'');
    }

    $scope.submit = function() {
        var i, word, response;

        for (i = $scope.exercise.tasks.length; i--;) {
            response = prepareString($scope.exercise.tasks[i].response);
            word = prepareString($scope.exercise.tasks[i].word);

            if (word === response) {
                $scope.exercise.tasks[i].status = 'success';
            } else {
                $scope.exercise.tasks[i].status = 'fail';
            }
        }

        $scope.showReset = true;
    };

    $scope.reset = function() {
        var i;

        for (i = $scope.exercise.tasks.length; i--;) {
            if (!$scope.exercise.tasks[i].example) {
                $scope.exercise.tasks[i].response = '';
                $scope.exercise.tasks[i].status = null;
            }
        }

        $scope.showReset = false;
    };
  }]);
