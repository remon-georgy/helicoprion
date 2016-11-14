const _ = require('lodash');

const tags = require('./data').tags;

var mapped = _.map(tags, function(value, key) {
  return {id: key, label: value};
});
console.log(mapped);