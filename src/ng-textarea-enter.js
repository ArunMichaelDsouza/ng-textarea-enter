/*
    ng-textarea-enter v0.2.2
    Copyright (c) 2016 Arun Michael Dsouza (amdsouza92@gmail.com)
    Licence: MIT
    Demo on CodePen - http://codepen.io/amdsouza92/pen/pyNMjQ
*/
"use strict";
angular.module('ngTextareaEnter', []).directive('ngTextareaEnter', function() {
    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {

            // Detecting key down event
            elem.bind('keydown', function(event) {

                var code = event.keyCode || event.which;

                // Detecting enter key press
                if (code === 13) {

                    // Checking element to be textarea
                    if (elem[0].type == 'textarea') {

                        // used to get path for controllerAs syntax
                        function path(obj, path, def) {
                            var i, len;

                            for (i = 0, path = path.split('.'), len = path.length; i < len; i++) {
                                if (!obj || typeof obj !== 'object') return def;
                                obj = obj[path[i]];
                            }

                            if (obj === undefined) return def;
                            return obj;
                        }

                        // Determine scope model
                        var ngModel = path(scope, attrs.ngModel);

                        // Checking scope model to be valid
                        if (ngModel !== undefined && ngModel !== '') {

                            // Detecting shift/ctrl/alt key press
                            if (!event.shiftKey && !event.ctrlKey && !event.altKey) {
                                event.preventDefault();
                                scope.$apply(attrs.ngTextareaEnter);
                            }

                        }

                    }

                }

            });

        }
    }
});
