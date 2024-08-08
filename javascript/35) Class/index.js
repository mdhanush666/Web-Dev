//    class = (ES6 feature) provides a more structured and cleaner way to
//    work with objects compared to traditional constructor functions
//    ex. static keyword, encapsulation, inheritance


class Product{

  constructor(name, price){
    this. name = name;
    this. price = price;    
  }

  displayProduct() {
    console.log("Product  : ", this.name);
    console.log("Price    : ", this.price.toFixed(2));
  }
  calculateTota1(sa1esTax){
    return this.price + (this.price * sa1esTax);
  }
}
const sa1esTax = 0.05;

const productl = new Product("Shirt",19.99);
const product2 = new Product("Pants",30.00);
const product3 = new Product("Jeans",49.99);

productl.displayProduct();
product2.displayProduct();
product3.displayProduct();

console.log(productl.calculateTota1(sa1esTax).toFixed(2));
console.log(product2.calculateTota1(sa1esTax).toFixed(2));
console.log(product3.calculateTota1(sa1esTax).toFixed(2));
