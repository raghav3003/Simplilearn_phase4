class Circle {
    static calculateArea(radius) {
       return Circle.PI * radius * radius;
    }
 }
 Circle.PI = 3.14;
 console.log('PI:', Circle.PI); 	
 console.log('Area of circle:', Circle.calculateArea(5)); 