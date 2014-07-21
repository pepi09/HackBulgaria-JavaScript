"use strict";

var data = require("./data");
var _ = require("./node_modules/lodash/lodash")

var grouped_students = _.groupBy(data,function(user){
  return user.fields.date + "-" + user.fields.mac;
});

_.keys(grouped_students).forEach(function(key){
  var length = grouped_students[key].length;
  if (length > 1){
    var checkins = grouped_students[key].slice(1, length);
    checkins.forEach(function(checkin){
      console.log(checkin);
    })
  }
})
