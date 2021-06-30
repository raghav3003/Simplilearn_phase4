function sum(a, b) {
  return a + b;
}

const a = sum(1, 2, 3, 4, 5);
console.log(a);

//--------------Example 2:--------------//
function sumAll(...args) { // args is the name for the array
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

const b = sumAll(1) ; 
console.log(b);
const c = sumAll(1, 2) ; 
console.log(c);
const d = sumAll(1, 2, 3) ; 
console.log(d);

//------------Example 3:---------------//
// Here the first two arguments go into variables and the rest go into titles array
function showName(firstName, lastName, ...titles) {
  const t = (firstName + ' ' + lastName ); 
  console.log(t); 

  // the rest go into titles array
  // i.e. titles = ["Consul", "Imperator"]
  const x = titles[0] ; 
  console.log(x);
  const y = titles[1] ; 
  console.log(y);
  const z = titles.length; 
  console.log(z);
}

showName("Julius", "Caesar", "Consul", "Imperator");

//-----------Example 4:--------------------//
//--An arrow function does not have the arguments object.
//--if you want to pass a number of arguments to the arrow function, 
//--you must use the rest parameters. 
const combine = (...args) => {
	return args.reduce(function (prev, curr) {
		return prev + " " + curr;
	});
};
let message = combine("JavaScript", "Rest", "Parameters"); // =>
console.log(message); 