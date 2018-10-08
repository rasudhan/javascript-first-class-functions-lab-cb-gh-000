function countdown(callback) {
  setTimeout(function () {
    callback();
  }, 2000);
}

const countdown = (cb) => {
  window.setTimeout(cb, 2000)
}

function createMultiplier(multiplyValue) {
  return function (value) {
    return multiplyValue * value;
  };
}
 // 2
const createMultiplier = (multi) => {
    return function multiplyNumber(number) {
      return multi * number
    }
}
 const doubler = createMultiplier(2)
const tripler = createMultiplier(3)
 // 3
const multiplier = (multiplierValue, value) => {
  return function multiplyNumber(multiplierValue, value) {
    return multiplierValue * value
  }
}
 const doublerWithBind = multiplier.bind(null, 2)
const triplerWithBind = multiplier.bind(null, 3)


function multiplier(a, b) {
  return a * b;
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);
var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);