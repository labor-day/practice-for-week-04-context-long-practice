function callOnTarget(func, obj1, obj2) {
  // Your code here
  return func.call(obj1, obj2);
}

const cat = {
  name: "Tom"
};

const mouse = {
  name: "Breakfast"
};

function greet(other) {
  return `I'm ${this.name}. Nice to meet you, ${other.name}`
}

console.log(callOnTarget(greet, mouse, cat));


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = callOnTarget;
