class Point2D {
    constructor (x, y) {
        this.move(x, y);
    }
    move (x, y) {
        this.x = x;
        this.y = y;
    }
}

class Point3D extends Point2D {
    constructor (x, y, z) {
        super();
        this.move(x, y, z);
    }
    move (x, y, z) {
        super.move(x, y);
        this.z = z;
    }
}

var point3d = new Point3D(5, 3, 6);

console.log(point3d.x); // => 5
console.log(point3d.z);

//-----------------Example 2:-----------------------//
class Animal {
    constructor(legs) {
        this.legs = legs;
    }
    walk() {
        console.log('walking on ' + this.legs + ' legs');
    }

    static helloWorld() {  // static method
        console.log('Hello World');
    }
}

class Bird extends Animal {
    constructor(legs) {
        super(legs);
    }
    fly() {
        console.log('flying');
    }
}

let bird = new Bird(2);

bird.walk();
bird.fly();

Bird.helloWorld(); // calling static method

//-----------------Example 3:----------------------//
class Queue extends Array {
    enqueue(e) {
        super.push(e);
    }
    dequeue() {
        return super.shift();
    }
    peek() {
        return !this.empty() ? this[0] : undefined;
    }
    empty() {
        return this.length === 0;
    }
}

var customers = new Queue();
customers.enqueue('A');
customers.enqueue('B');
customers.enqueue('C');

while (!customers.empty()) {
    console.log(customers.dequeue());
}