require.config({
  paths: {
    "Q": "bower_components/q/q"
  }
});

require(["Q"], function(Q) {

  function first() {
    var defer = Q.defer();

    setTimeout(function(){
      console.log("called first!");
      defer.resolve();
    },1000);

    return defer.promise;

  }

  function second(callback) {
    var defer = Q.defer();
    setTimeout(function(){
      console.log("called second!");
      defer.resolve();
    }, 1000);

    return defer.promise;
  }

  function third() {
    var defer = Q.defer();
    setTimeout(function(){
      console.log("I should do the job after first and second");
      defer.resolve()
    }, 1000);
    return defer.promise
  }

Q.fcall(first)
  .then(second)
  .then(third)
  .done();

});
