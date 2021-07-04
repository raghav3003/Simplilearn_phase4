const companies = ['Google', 'Facebook'];
let [company1, company2] = companies;
console.log(company1);  
console.log(company2);


let o = { p: 42, q: true };
let { p, q } = o;
console.log(p);  
console.log(q);

let a, b;
[a, b] = [1, 2];
console.log(a);  
console.log(b); 

var x, y;
[x = 10, y = 20] = [1];
console.log(x);  
console.log(y);

//let p, q;
({ p, q } = { p: 1, q: 2 });
console.log(p);  
console.log(q);

o = { l: 42, m: true };
let { l: foo, m: bar } = o;
console.log(foo);  
console.log(bar);

let { c = 10, d = 5 } = { c: 3 };
console.log(c);  
console.log(d);

var { a: aa = 10, b: bb = 5 } = { a: 3 };
console.log(aa); 
console.log(bb);

const manager = {
    id: 1,
    name: 'Sam',
    reportees: [
       { id: 10, name: 'Harry' },
       { id: 11, name: 'Ron' },
       { id: 12, name: 'Fred' }
    ]
 }
 
 const {
    name: managerName,
    reportees: [
       { name: reporteeName1 },
       { name: reporteeName2 },
    ]
 } = manager;
 
 console.log(managerName);
 console.log(reporteeName1);
 console.log(reporteeName2);
 
 const cities = ['New York', 'London', 'Paris', 'Amsterdam'];

let [c1, c2, ...rest1] = cities;

console.log(c1);    
console.log(c2);    
console.log(rest1);

let { a1, b1, ...rest2 } = { a1: 10, b1: 20, c: 30, d: 40 }
console.log(a1); 
console.log(b1);  
console.log(rest2);

function userId({ id }) {
    return id;
 }
 
 function whois({ displayName, fullName: { firstName: name } }) {
    console.log(displayName + ' is ' + name);
 }
 
 var user = {
    id: 100,
    displayName: 'Jimmy22',
    fullName: {
       firstName: 'James',
       lastName: 'Halpert'
    }
 };
 
 console.log('userId: ' + userId(user)); 
 whois(user);
 