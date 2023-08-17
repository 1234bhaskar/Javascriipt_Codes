//Rest parameters
//The rest parameter syntax allows a function to accept an indefinite number of arguments as an array


const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
  }
  console.log(sum(1, 2, 3)); // 6