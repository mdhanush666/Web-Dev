
class Animal{

  identify = "I'm a Animal";

  eat(){
    console.log(this.name + " can eat");
  } 
}

class Dog extends Animal{
  sound = "Bow";
  name = "Dog";
}

class Cat extends Animal{
  sound = "Memow";
  name = "Cat";
}


const dog1 = new Dog();
const cat1 = new Cat();

dog1.eat();
console.log("Dog Sounds Like : " + dog1.sound)

cat1.eat();
console.log("Cat Sounds Like : " + cat1.sound)