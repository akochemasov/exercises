function makeArmy() {
  var shooters = [];
  for (var i = 0; i < 10; i++) {
    var shooter = (function(i) {
      return function() {
        return i;
      }
    })(i);
    shooters.push(shooter);
  }
  return shooters;
}
var army = makeArmy();

module.exports = army;