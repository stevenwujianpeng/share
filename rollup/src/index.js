import _ from 'lodash';
import moment from 'moment';
import {add } from './a';

export default {
  getCurrentDate: () => {
    return moment();
  },
  partition: () => {
    return _.partition();
  },
  add,
}

