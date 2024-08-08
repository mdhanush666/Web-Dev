
/*

  Closure - A function defined inside of another function,
            the inner function has access to the variables
            and scope of the outer function.
            Allow for private variables and state maintenance
            Used frequently in JS frameworks: React, Vue, Angular

*/

function createCounter(){
  let count = 0;

  function Incounter(){
    count++;
    console.log(`Count Increase by ${count}`);
  }
  function getCount(){
    console.log(`Current Count is : ${count}`);
  }
  return {Incounter,getCount};
}

const counter = createCounter();

counter.Incounter();
counter.Incounter();
counter.Incounter();
counter.Incounter();
counter.Incounter();
counter.getCount();