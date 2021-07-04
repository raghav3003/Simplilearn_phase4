let greeting = `Welcome to ES2015`;
console.log(greeting);


let name = 'JavaScript';
console.log(`${name} is awesome!`);


let num1 = 20;
let num2 = 15;
console.log(`Sum of ${num1} and ${num2} is ${num1 + num2}`);

const calculateArea = function (l, w) {
    return l * w;
 }
 
 
 let l = 8;
 let w = 4;
 console.log(`Area of rectangle is ${calculateArea(l, w)}`);

 
 var multiLineMessage = `Template literal 
 example with 
 multiple lines`;

console.log(multiLineMessage);