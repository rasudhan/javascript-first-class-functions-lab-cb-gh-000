function countdown(callback) {
  setTimeout(function () {
    callback();
  }, 2000);
}

const countdown = (cb) => {
  window.setTimeout(cb, 2000)
}

 // 2
const createMultiplier = (multi) => {
    return function multiplyNumber(number) {
      return multi * val
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
