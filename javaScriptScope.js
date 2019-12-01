var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}
console.log(funkyFunction)
console.log(funkyFunction())