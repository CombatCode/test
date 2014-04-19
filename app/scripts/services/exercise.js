'use strict';

angular.module('iokiApp')
  .factory('Exercise', function () {
    var exercises = [
        {
            num: 0,
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
            num: 1,
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
                },
                {
                    img: '/images/ex2/4.png',
                    word: 'bird',
                    response: '',
                    example: false,
                    status: null
                }
            ]
        },
        {
            num: 2,
            group: 2,
            title: 'Vocabulary',
            description: 'Label the vegetables.',
            tasks: [
                {
                    img: '/images/ex3/1.png',
                    word: 'pumpkin',
                    response: '',
                    example: false,
                    status: null
                },
                {
                    img: '/images/ex3/2.png',
                    word: 'banana',
                    response: '',
                    example: false,
                    status: null
                },
                {
                    img: '/images/ex3/3.png',
                    word: 'grape',
                    response: '',
                    example: false,
                    status: null
                },
                {
                    img: '/images/ex3/4.png',
                    word: 'apple',
                    response: 'apple',
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
        groups: function () {
            function groupExercises(array) {
                var groupedArray = [],
                    groups = {},
                    i, j, cur;

                for (i = 0, j = array.length; i < j; i++) {
                    cur = array[i];
                    if (!(cur.group in groups)) {
                        groups[cur.group] = {group: cur.group, nums: []};
                        groupedArray.push(groups[cur.group]);
                    }
                    groups[cur.group].nums.push(cur.num);
                }
                return groupedArray;
            }

            return groupExercises(exercises);
        },
        get: function (num) {
            return exercises[num];
        }
    };
  });
