# ng-textarea-enter [![npm version](https://badge.fury.io/js/ng-textarea-enter.svg)](https://badge.fury.io/js/ng-textarea-enter) [![NPM Downloads](https://img.shields.io/npm/dm/ng-textarea-enter.svg?style=flat-square)](https://www.npmjs.com/package/ng-textarea-enter) [![Latest Stable Version](https://img.shields.io/bower/v/ng-textarea-enter.svg?style=flat-square)](http://bower.io/search/?q=ng-textarea-enter) [![](https://data.jsdelivr.com/v1/package/npm/ng-textarea-enter/badge)](https://www.jsdelivr.com/package/npm/ng-textarea-enter)

Execute a function on pressing the ``enter`` key in a ``textarea``.

It removes the default behaviour of creating a new line break, when ``enter`` key is pressed against any textarea element, instead as soon as the ``enter`` key is pressed, the method attached to the directive can be called and can be used to access the model associated with the textarea element. 

To create usual newlines, a combination of ``shift+enter``, ``ctrl+enter`` and ``alt+enter`` keys can be used.

### [Demo on CodePen](http://codepen.io/amdsouza92/pen/pyNMjQ)

## Installation

#### CDN 

Use ng-textarea-enter directly from jsdelivr CDN

```html
https://cdn.jsdelivr.net/npm/ng-textarea-enter@0.2.2/build/ng-textarea-enter.min.js
```

#### via bower

You can install the package using bower. Make sure you have bower installed, then run : 

```html
bower install ng-textarea-enter
```

#### via npm

```html
npm install ng-textarea-enter
```

Or, [download](https://github.com/ArunMichaelDsouza/ng-textarea-enter/releases) the latest version and include ``ng-textarea-enter.min.js`` to your project.

Add ``ngTextareaEnter`` as a dependency in your angular app module.

## Usage

Add the directive as an attribute to any textarea element and pass in a method, which will be called on pressing the ``enter`` key.

Example - 
```html
<textarea ng-model="textareaModel" ng-textarea-enter="textareaAction()"></textarea>
```

```javascript
var myApp = angular.module('myApp', ['ngTextareaEnter']);

myApp.controller('myCtrl', ['$scope', function($scope) {
    $scope.textareaAction = funciton() {
    	console.log($scope.textareaModel);
	};
}]);
```

Now everytime ``enter`` key is pressed against this textarea, the ``textareaAction()`` will be called, no newline will be created. In this case it is logging the value of scope variable ``textareaModel`` out to the console.

## License

MIT Licensed

Copyright (c) 2016 Arun Michael Dsouza (amdsouza92@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


