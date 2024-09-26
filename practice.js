// const arr1 = [1, 2, 3];
// const arr2 = arr1;
// console.log(arr2);
// arr1.pop(1);
// console.log(arr2);
// console.log(arr1);

// var x = 2;
// var y = x;
// console.log(x);
// x = 3;
// console.log(y);

const fib = n => {
    if (n <= 1) return 1
    return fib(n - 1) + fib(n - 2)
  }

  const res = fib(9);
  console.log("Result - ",res)