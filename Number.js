var x = new Number(2);
console.log(x);

//Add a prototype
Number.prototype.timesTwo = function(x){
	return x * 2;
};

console.log(x.timesTwo(x));

console.log(Number.isNaN(x));

//Polyfill
Number.isInteger = Number.isInteger || function(x){
	return typeof x === "number" &&
	isFinite(x) &&
	Math.floor(x) === x;
};

//Get Number object value in accordance with browser settings.
console.log(x.toLocaleString());

//JS toString
console.log(x.toString());

//View object constructor
console.log(x.constructor);

