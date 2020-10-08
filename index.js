function countdown(callback) {
  setTimeout(function() {
    callback();
  }, 2000);
}

function createMultiplier(n) {
  var multiplierValue = n
  var doubler = createMultiplier()
  doubler = (function() {
    multiplierValue * 
  })
}