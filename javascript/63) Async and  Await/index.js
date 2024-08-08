
// Async        = makes a function return a promise
// Await        = makes an async function wait for a promise

//                Allows you write asynchronous code in a synchronous manner
//                Async doesn't have resolve or reject parameters
//                Everything after Await is placed in an event queue


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
      const isEat = true;

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

async function doTask(){
  try{
    const walkResult = await walk();
    console.log(walkResult);
    
    const eatResult = await eat();
    console.log(eatResult);
    
    const sleepResult = await sleep();
    console.log(sleepResult);
    
    console.log("All Tasks Completed");
  }
  catch(error){
    console.error(error);
  }  
}

doTask();