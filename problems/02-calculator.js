// Your code here

class Calculator {

	constructor() {
    this.total = 0;
	}

	add(num) {
		this.total += num;
		return this.total;
	}

	subtract(num) {
		this.total -= num;
		return this.total;
	}

	divide(num) {
		this.total /= num;
		return this.total;
	}

	multiple(num) {
		this.total *= num;
		return this.total;
	}

}

// let calc1 = new Calculator();
// console.log(calc1);
// console.log(calc1.add(50));
// console.log(calc1.subtract(35));
// console.log(calc1.multiple(10));
// console.log(calc1.divide(5));
// console.log(calc1.total);


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Calculator;
} catch {
	module.exports = null;
}
