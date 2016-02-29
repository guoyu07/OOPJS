//Define the Person constructor
var Person = function(firstName){
	this.firstName = firstName;
};

//Add a few methods to Person.prototype
Person.prototype.walk = function(){
	console.log("I am walking!");
};

Person.prototype.sayHello = function(){
	console.log("Hello, I'm " + this.firstName);
};

//Define the Student constructor
function Student(firstName, subject){
	//Call the parent constructor to check 
	//that "this" is set correctly during the call
	Person.call(this,firstName);

	//Initialize the Student-specific properties
	this.subject = subject;
}

//Create a Student.prototype object that inherits fro Person.prototype
Student.prototype = Object.create(Person.prototype);

//Set the "constructor" property to refer to Student
Student.prototype.constructor = Student;

//Replace the "sayHello" method
Student.prototype.sayHello = function(){
	console.log("Hello, I'm " + this.firstName + ". I'm studying " + this.subject + ".");
};

//Add a "sayGoodBye" method
Student.prototype.sayGoodBye = function(){
	console.log("Goodbye!");
};

//Example

var student1 = new Student("Janet", "Applies Physics");
student1.sayHello();
student1.walk();
student1.sayGoodBye();

//Check that instance works correctly
console.log(student1 instanceof Person);
console.log(student1 instanceof Student);