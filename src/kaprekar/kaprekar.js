
function kaprekar(opts) {
  var n = opts.n;
  var square = (opts.n * opts.n).toString();
  var base = opts.base || 10;

  for (var i = 0; i < square.length; i++) {
    var firstPart = parseInt(square.substring(0, i));
    var secondPart = parseInt(square.slice(i));

    if (firstPart + secondPart === opts.n && firstPart > 0 && secondPart > 0) {
      return true;
    }
  }

  return false;
}



// Input: a range 0 < i <= j
// Output: Kaprekar numbers in the range
function kaprekarNumberChallenge(i, j) {
  if (i < 0 || j < 0) {
    throw new Error("invalid input.  i and j must be non-negative");
  }

  if (j < i) {
    throw new Error("i must be less than j");
  }

  var kapreNums = [];
  while (i <= j) {
    if (kaprekar({n:i})) {
      kapreNums.push(i);
    }
    i++;
  }

  return kapreNums;
}
