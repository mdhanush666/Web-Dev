
// Promise = An Object that manages asynchronous operations.
//           Wrap a Promise Object around {asynchronous code}
//           "I promise to return a value"
//           PENDING RESOLVED or REJECTED
//           new Promise((resolve, reject)
//           {asynchronous code})


function walk(){

  return new Promise((resolve,reject) =>{
    
    setTimeout(() =>{
      const isWalk = true;

      if(isWalk){
        resolve("I'm Walking..");
      }
      else{
        reject("You didn't walk!");
      }      
    },2000)
  }) 
}

function eat(){

  return new Promise((resolve,reject) =>{
    setTimeout(() =>{
      const isEat = false;

      if(isEat){
        resolve("I'm Eating..");
      }
      else{
        reject("You didn't eat!");
      }      
    },1500)
  })

}

function sleep(){
  return new Promise((resolve,reject) =>{
    setTimeout(() =>{
      const isSleep = true;

      if(isSleep){
        resolve("I'm Sleeping..");
      }
      else{
        reject("You didn't sleep!");
      }      
    },1000) 
  })
}

walk().then(value =>{
  console.log(value);
  return eat();
})
.then(value =>{
  console.log(value);
  return sleep();
})
.then(value =>{
  console.log(value);
  console.log("All Done");
})
.catch(error =>{
  console.error(error);
})