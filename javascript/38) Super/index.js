
class Animal{
  constructor(a,b){
    this.name = a,
    this.age = b
  }

  move(speed){
    console.log(`This ${this.name} moves at a speed of ${speed}kmph`);
  }
}

class Dog extends Animal{
  constructor(name,age,x){
    super(name,age);

    this.runSpeed = x;
    super.move(x);
  }
}

class Fish extends Animal{
  constructor(name,age,x){
    super(name,age);

    this.swimSpeed = x;
    super.move(x);
  }
}

const dog1 = new Dog("Rex",5,25);
const fish1 = new Fish("fish",2,20);

