'use strict';

var _PraiseButton = require('./PraiseButton.js');

var _PraiseButton2 = _interopRequireDefault(_PraiseButton);

var _Thumb = require('./Thumb.js');

var _Thumb2 = _interopRequireDefault(_Thumb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hand = document.getElementById('J_Hand');

var thumb = new _Thumb2.default();
hand.addEventListener('click', function () {
  thumb.handleClickOnThumb();
});