 "use strict";
/*
var counter = (function() {
  var count = -1;

  return function() {
    count = count + 1;
    return count;
  };
} () );

function queue() {
  var push = function(item) {
    this[counter()] = item;
  };
  var pop = function(){
    return this[0];
  };
  var isEmpty = function(){
    return  typeof this[0] === "undefined";
  };
}

queue.prototype.on = function(eventName, callback) {
  this[eventName] = callback().call();
};

queue.prototype.remove = function(eventName) {
  this[eventName] = undefined;
};

queue.prototype.trigger = function(eventName) {
  return this[eventName];
};*/


var eventBus = (function() {
  var eventTable = {};

  var addEvent = function(eventName, callback) {
    if (!eventTable[eventName]) {
      eventTable[eventName] = [];
    }

    eventTable[eventName].push(callback);
  };

  var removeEvent = function(eventName) {
    if (eventTable[eventName]) {
      delete eventTable[eventName];
    }
  };

  var triggerEvent = function(eventName, eventArgs) {
    var
      callbacks = eventTable[eventName] || [],
      eventArg = eventArgs || [];

      callbacks.forEach(function(callback) {
        callback.call(null, eventArg);
      });
  };

  return {
    on : addEvent,
    remove : removeEvent,
    trigger : triggerEvent
  };
});
