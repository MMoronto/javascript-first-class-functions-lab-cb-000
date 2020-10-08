function countdown(callback) {
  setTimeout(function() {
    callback();
  }, 2000);
}

function createMultiplier(multiplierValue) {
  var doubler = multiplierValue * value
  
 return function(value) {
   return doubler
 }
}

