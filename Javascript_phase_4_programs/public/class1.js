// creating a class
class Person {
  constructor(name) {
    this.name = name;
  }

// defining method
    greet() {
        console.log(`Hello ${this.name}`);
    }

// getter
    get personName() {
        return this.name;
    }

    // setter
    set personName(x) {
        this.name = x;
    }
}

// creating an object
const person1 = new Person('John');
const person2 = new Person('Jack');

console.log(person1.name); 
console.log(person2.name); 

let person3 = new Person('Viren');

// accessing property
console.log(person3.name); 

// accessing method
person3.greet();

// changing the value of name property
person1.personName = 'Sarah';
console.log(person1.name); 

//------------------Example 2:---------------//
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area);