import _ from 'lodash';
import moment from 'moment';

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

export default index;
