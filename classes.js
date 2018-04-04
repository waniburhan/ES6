class Polygon {
   constructor(height, width) {
      this.h = height;
      this.w = width;
   }
   test() {
      console.log("The height of the polygon: ", this.h)
      console.log("The width of the polygon: ",this. w)
   }
}
var polyObj = new Polygon(10,20);
polyObj.test();

//inheritence

class Shape {
   constructor(a) {
      this.Area = a
   }
}
class Circle extends Shape {
   disp() {
      console.log("Area of the circle:  "+this.Area)
   }
}
var obj = new Circle(223);
obj.disp()