const fizzBuzz = () => {
  for (let i = 1; i <= 100; i++){
    let message = i;

    if (i % 3 === 0 && i % 5 === 0) {
      message = "FizzBuzz";
    } else if (i % 5 === 0) {
      message = "Buzz";
    } else if (i % 3 === 0) {
      message = "Fizz";
    }

    console.log(message);
  }
}
