webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a, b) {
  return a + b;
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _mod = __webpack_require__(0);

var _mod2 = _interopRequireDefault(_mod);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defList = [1, 2, 3];

var mixList = [].concat(defList, [6]);

var defObj = {
    a: 1,
    b: 'str'
};

var mixObj = _extends({}, defObj, {
    c: true,
    e: 19919
});

document.getElementById('root').innerHTML = defList.join(',');

console.log((0, _mod2.default)(2, 3));

console.log(mixList);

console.log(mixObj);

/***/ })
],[1]);