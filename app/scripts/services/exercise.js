'use strict';

angular.module('iokiApp')
  .factory('Exercise', function () {
    var exercises = [
        {
            num: 1,
            title: 'Vocabulary',
            description: 'Label the weather symbols.',
            tasks: [
                {
                    img: '/images/ex1/1.png',
                    word: 'foggy',
                    response: 'foggy',
                    example: true,
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
        }
    ];

    return {
        get: function (num) {
            return exercises[num];
        }
    };
  });
