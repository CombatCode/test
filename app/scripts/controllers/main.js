'use strict';

angular.module('iokiApp')
  .controller('MainCtrl', ['$scope', '$location', 'Exercise', function ($scope, $location, Exercise) {
    /**
     * Definitions
     */

    $scope.search = $location.search();
    $scope.showReset = false;
    $scope.exercise = [];
    $scope.enabledData = Exercise.list();
    $scope.page = {
        current: parseInt($scope.search.ex) || 0
    }
    $scope.exercise = Exercise.get($scope.page.current);

    /**
     * Functions
     */

    function checkPage() {
        var first = 0,
            last = Exercise.list().length - 1,
            next = $scope.page.current + 1,
            prev = $scope.page.current - 1;

        if (prev < first) {
            $scope.page.prev = first;
            $scope.page.has_prev = false;
        } else {
            $scope.page.prev = prev;
            $scope.page.has_prev = true;
        }

        if (last < next) {
            $scope.page.next = last;
            $scope.page.has_next = false;
        } else {
            $scope.page.next = next;
            $scope.page.has_next = true;
        }
    }

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

    $scope.goForward = function() {
        $location.search('ex', $scope.page.next);
    };

    $scope.goBackward = function() {
        $location.search('ex', $scope.page.prev);
    };

    /** Build next and prev links */
    checkPage();
  }]);
