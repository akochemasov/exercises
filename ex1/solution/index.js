function func(arr) {
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 42) {
      i++
    }
    res.push(arr[i]);
  }

  return res
}

module.exports = func;