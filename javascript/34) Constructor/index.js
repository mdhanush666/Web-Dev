
function Car(model,color,year){
      this.model = model,
      this.color = color,
      this.year = year,
      this.drive = () => {console.log("I'm Driving " + model)}
}

function Vehical(a,b,c){
      this.model = a,
      this.color = b,
      this.year = c
}

const car1 = new Car("BMW","BLACK","2024");

console.log(car1.model);
console.log(car1.color);
console.log(car1.year);
car1.drive();

const vehical1 = new Car("Bus","BLUE","2020");

console.log(vehical1.model);
console.log(vehical1.color);
console.log(vehical1.year);
