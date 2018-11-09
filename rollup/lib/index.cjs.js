'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _ = _interopDefault(require('lodash'));
var moment = _interopDefault(require('moment'));

var add = function add(a, b) {
  return a + b;
};

var index = {
  getCurrentDate: function getCurrentDate() {
    return moment();
  },
  partition: function partition() {
    return _.partition();
  },
  add: add
};

module.exports = index;
