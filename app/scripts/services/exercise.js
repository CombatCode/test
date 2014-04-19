'use strict';

angular.module('iokiApp')
  .factory('Exercise', function () {
    var exercises = [
        {
            num: 1,
            group: 1,
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
        },
        {
            num: 2,
            group: 1,
            title: 'Vocabulary',
            description: 'Label the animals.',
            tasks: [
                {
                    img: '/images/ex2/1.png',
                    word: 'panda',
                    response: '',
                    example: false,
                    status: null
                },
                {
                    img: '/images/ex2/2.png',
                    word: 'tiger',
                    response: '',
                    example: false,
                    status: null
                },
                {
                    img: '/images/ex2/3.png',
                    word: 'snake',
                    response: 'snake',
                    example: true,
                    status: null
                }
            ]
        },
        {
            num: 3,
            group: 2,
            title: 'Vocabulary',
            description: 'Label the animals.',
            tasks: [
                {
                    img: '/images/ex2/1.png',
                    word: 'panda',
                    response: '',
                    example: false,
                    status: null
                },
                {
                    img: '/images/ex2/2.png',
                    word: 'tiger',
                    response: '',
                    example: false,
                    status: null
                },
                {
                    img: '/images/ex2/3.png',
                    word: 'snake',
                    response: 'snake',
                    example: true,
                    status: null
                }
            ]
        }
    ];

    return {
        list: function () {
            var i,
                list = [];

            for (i = exercises.length; i--;) {
                list.push({
                    num: exercises[i].num,
                    group: exercises[i].group
                });
            }

            return list;
        },
        get: function (num) {
            return exercises[num];
        }
    };
  });
