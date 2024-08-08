
class Circle{

  static PI = 3.14159;
  

  static getCircumference(r){
    return (2 * this.PI * r).toFixed(2);
  }

  static getArea(r){
    return (this.PI * r * r).toFixed(2) + ' cm';
  }

}

const getC = Circle.getCircumference(7);
console.log(getC);

const getArea = Circle.getArea(7);
console.log(getArea);