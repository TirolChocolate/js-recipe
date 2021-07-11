const FizzBuzzFunction = function(number) {
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0 && n % 5) {
      console.log(n + "FizzBuzz")
    } else if (n % 3 === 0 && n % 5 !== 0) {
      console.log(n + "Fizz")
    } else if (n % 3 !== 0 && n % 5 === 0) {
      console.log(n + "Buzz")
    }
  }
}
