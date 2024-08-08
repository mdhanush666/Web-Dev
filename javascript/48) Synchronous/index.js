
/*

synchronous = Executes line by line consecutively in a sequential manner
                Code that waits for an operation to complete.

asynchronous  = Allows multiple operations to be performed concurrently without waiting
                Doesn't block the execution flow and allows the program to continue
                (1/0 operations, network requests, fetching data)l
                Handled with: Callbacks, Promises, Async/Await

*/


// Example for Synchronous...

setTimeout(() => console.log("0"),3000);

console.log("1");
console.log("2");
console.log("3");

// Example for Asynchornous...

function func1(Callbacks){
  setTimeout(() => {
    console.log("Task 1");
    Callbacks()},3000);
}

function func2(){
  console.log("Task 2");
  console.log("Task 3");
  console.log("Task 4");
}

func1(func2);