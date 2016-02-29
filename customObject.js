//Define a new class called Person with an empty constructor
var Person = function() {};

//Define objects
var person1 = new Person();
var person2 = new Person();

//Log a message when an instance is created
var Person = function() {
	console.log("instance created");
};

var person1 = new Person();
var person2 = new Person();

//Define the firstName property at instantiation
var Person = function(firstName){
	this.firstName = firstName;
	console.log("Person instantiated");
};

var person1 = new Person("Alice");
var person2 = new Person("Bob");

//Show properties of the objects
console.log("person1 is " + person1.firstName);
console.log("person2 is " + person2.firstName);

//Define a Person class and add a prototype
var Person = function(firstName){
	this.firstName = firstName;
};

Person.prototype.sayHello = function(){
	console.log("Hello, I'm " + this.firstName);
};

var person1 = new Person("Alice");
var person2 = new Person("Bob");
var helloFunction = person1.sayHello;


//Call the protoype on the object
person1.sayHello();
person2.sayHello();

helloFunction();

//Boolean comparisons
console.log(helloFunction === person1.sayHello);//true
console.log(helloFunction === Person.prototype.sayHello);//true

//Logs "Hello, I'm Alice"
helloFunction.call(person1);