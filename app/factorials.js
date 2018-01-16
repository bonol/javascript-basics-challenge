exports.factorial = function(num) {
  var factArray = []

  for (var i = 1; i <= num; i++) {
    factArray.push(i);
  }

  var factorialNum = factArray.reduce(function(total,startNum) {
    return total * startNum;
  }, 1);

  return factorialNum;
}
