function bindToAnArg(func, arg) {
  // Your code here

  return func.bind(this, arg);
}

function add(num1, num2) {
  return num1 + num2;
}

let addTwo = bindToAnArg(add, 2);
console.log(addTwo(6));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;
