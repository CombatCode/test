'use strict';

angular.module('iokiApp')
  .controller('MainCtrl', function ($scope) {
    /**
     * Definitions
     */

    $scope.showReset = false;

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
            $scope.exercise.tasks[i].response = '';
            $scope.exercise.tasks[i].status = null;
        }

        $scope.showReset = false;
    };
    /**
     * Temporary models
     */

    $scope.exercise = {
        num: 1,
        title: 'Vocabulary',
        description: 'Label the weather symbols.',
        tasks: [
            {
                img: '/images/ex1/1.png',
                word: 'foggy',
                response: '',
                example: false,
                status: null
            },
            {
                img: '/images/ex1/2.png',
                word: 'raining',
                response: '',
                example: false,
                status: null
            },
            {
                img: '/images/ex1/3.png',
                word: 'sunny',
                response: '',
                example: false,
                status: null
            },
            {
                img: '/images/ex1/4.png',
                word: 'cloudy',
                response: '',
                example: false,
                status: null
            },
            {
                img: '/images/ex1/5.png',
                word: 'windy',
                response: '',
                example: false,
                status: null
            },
            {
                img: '/images/ex1/6.png',
                word: 'snowing',
                response: '',
                example: false,
                status: null
            }
        ]
    };
  });
