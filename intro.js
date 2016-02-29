// create global object called MYAPP
var MYAPP = MYAPP || {};
console.log(MYAPP);

// create sub namespace
MYAPP.event = {};

//The following is code syntax for creating a namespace and adding variables, functions and a method:

MYAPP.commonMethod = {
	regExforName: "",
	regExForPhone: "",
	validateName: function(name){
		//Do something with name, you can access pre-defined variables
	};

	validatePhoneNum: function(phoneNum){
		//Do something with phone number
	};
}

//Object together with the method declarations
MYAPP.event = {
	addListener: function(el, type, fn){
		//code here
	};
	removeListener: function(el, type, fn){
		//code here
	};
	getEvent: function(e){
		//code here
	};
	// Can add another method and properties
}

//Syntax for using addListener method:
MYAPP.event.addListener("yourel", "type", callback);

