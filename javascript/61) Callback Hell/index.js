
// Callback Hell =  Situation in JavaScript where callbacks
//                  are nested within other callbacks to the
//                  degree where the code is difficult to read.
//                  Old pattern to handle asynchronous functions.
//                  Use Promises + async/await to avoid Callback Hell


function walk(callback){
  setTimeout(() =>{
    console.log("I'm Walking..");
    callback();
  },2000)
}

function eat(callback){

  setTimeout(() =>{
    console.log("I'm eating");
    callback();
  },1500)

}

function sleep(callback){
  setTimeout(() =>{
    console.log("I'm Sleeping");
    callback();
  },1000)
}

walk(()=>{
  eat(() =>{
    sleep(() =>{
      console.log("All Done");
    })
  })
});