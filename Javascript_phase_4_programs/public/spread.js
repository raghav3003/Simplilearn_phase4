let arr = [1,2,3];
let arr2 = [4,5];
  
arr = [...arr,...arr2];
console.log(arr);

//-------------Example 1:------------//
let ar = ['a','b','c'];
let ar2 = [...ar];
  
console.log(ar); // [ 'a', 'b', 'c' ]
  
ar2.push('d'); //inserting an element at the end of arr2
  
console.log(ar2); // [ 'a', 'b', 'c', 'd' ]
console.log(ar); 

//------------Example 2:------------//
// expand using spread operator
let a = ['a','b'];
let b = [...arr,'c','d'];
console.log(b); 

//-----------Example 3:------------//
const user1 = {
    name: 'Jen',
    age: 22,
};
  
const user2 = {
    name: "Andrew",
    location: "Philadelphia" 
};
const mergedUsers = {...user1, ...user2};
console.log(mergedUsers)

//---------Example 4:-------------//
// When we applied the spread operator to the 'BC'string, it spreads out 
// each individual character of the string 'BC' into individual characters.
let chars = ['A', ...'BC', 'D'];
console.log(chars);