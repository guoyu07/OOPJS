"use strict"; //required for block-scoped declaration (let,const,function, class)

//JS classes are introduced in ES6 and are syntactical sugar over JS's existing prototype-based inheritance.
//The class syntax is NOT introducing a new OO inheritance model to JS.

//Two components: class expressions and class declarations.

//Class Declarations
class Polygon {
	constructor(height, width){
		this.height = height;
		this.width = width;
	}
}

//Class expressions

//unnamed
var Polygon = class {
	constructor(height, width){
		this.height = height;
		this.width = width;
	}
};

//named
var Polygon = class Polygon{
	constructor(height,width){
		this.height = height;
		this.width = width;
	}
};

//Prototype methods
class Polygon {
	constructor(height, width){
		this.height = height;
		this.width = width;
	}
}

get area() {
	return this.calcArea();
}

calcArea() {
	return this.height * this.width;
}

//Static Methods
class Point {
	constructor(x,y){
		this.x = x;
		this.y = y;
	}

	static distance(a,b){
		const dx = a.x - b.x;
		const dy = a.y - b.y;

		return Math.sqrt(dx*dx + dy*dy);
	}
}

const p1 = new Point(5,5);
const p2 = new Point(10,10);

console.log(Point.distance(p1, p2));

//Subclassing with extends
class Animal {
	constructor(name){
		this.name = name;
	}

	speak(){
		console.log(this.name + 'makes a noise.');
	}
}

class Dog extends Animal {
	speak(){
		console.log(this.name + 'barks.');
	}
}

//Super class calls with super keyword
class Cat {
	constructor(name){
		this.name = name;
	}

	speak(){
		console.log(this.name + 'makes a noise.');
	}
}

class Lion extends Cat {
	speak(){
		super.speak();
		console.log(this.name + ' roars.');
	}
}




