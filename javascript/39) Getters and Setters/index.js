class Person{

  constructor(fName,lName,age){
    this.fName = fName,
    this.lName = lName,
    this.age = age
  }

  get fName(){
    return this._fName;
  }

  get lName(){
    return this._lName;
  }
  get age(){
    return this._age;
  }

  set fName(newFname){
    if(typeof newFname === "string" && newFname.length > 0){
      this._fName = newFname;
    }
    else{
      console.error("First Name must be a non-empty string!");
    }
  }

  set lName(newLname){
    if(typeof newLname === "string" && newLname.length > 0){
      this._lName = newLname;
    }
    else{
      console.error("Last Name must be a non_empty string!");
    }
  }

  set age(newAge){
    if(typeof newAge === "number" && newAge > length){
      this._age = newAge;
    }
    else{
      console.error("Age must be a non-empty number!");
    }
  }

  

}

const obj1 = new Person("Dhanush","Dhanu",19);

console.log(obj1._fName);
console.log(obj1._lName);
console.log(obj1._age);
