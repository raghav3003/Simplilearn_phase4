function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5,2));
// expected output: 10

console.log(multiply(5));
// expected output: 5



//-----------------Example 2:-------------------//
function say(message='Hi') {
    console.log(message);
}

say(); 
say(undefined); 
say('Hello'); 


//----------------Example 3:--------------------//
//--You can use a return value of a function as a default value for a parameter//
let taxRate = () => 0.1;
let getPrice = function( price, tax = price * taxRate() ) {
    return price + tax;
}

let fullPrice = getPrice(100);
console.log(fullPrice);



//----------------Example 4:---------------------//
//--The value of the arguments object inside the function is the number//
//--of actual arguments that you pass to the function.//
function add(x, y = 1, z = 2) {
    console.log( arguments.length );
    return x + y + z;
}

const m = add(10); 
console.log(m);

const n = add(10, 20); 
console.log(n);

const p = add(10, 20, 30); 
console.log(p);

//---------------Example 5:----------------------//
//--this feature to make arguments are mandatory. If the caller doesn’t pass//
//-- any argument, we throw an error//
function requiredArg() {
   throw new Error('The argument is required');
}
function addd(x = requiredArg(), y = requiredArg()){
   return x + y;
}

//addd(10); // error
const q = addd(10,20); 
console.log(q);


//--------------Example 6:------------------------//
//-------template literals as default params---//
function greet(name, greeting, message = `${greeting} ${name}`) {
   return [name, greeting, message];
}

console.log(greet('David', 'Hi'));
console.log(greet('David', 'Hi', 'Happy Birthday!'));


//--------------Example 7:------------------------//
function say(message) {
    message = typeof message !== 'undefined' ? message : 'Hi';
    console.log(message);
}
say();

