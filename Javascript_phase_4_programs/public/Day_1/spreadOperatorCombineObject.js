let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo1: 'baz', y: 13 };

let mergedObj = { ...obj1, ...obj2 };

console.log(obj1);
console.log(obj2);
console.log(mergedObj);