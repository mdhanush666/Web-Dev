
fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(response => response.json())
.then(msg => console.log(msg))
.catch(error => console.error(error))


fetch("https://jsonplaceholder.typicode.com/todos",{
  method:'POST',
  headers:{'content-type':'application/json'},
  body:JSON.stringify({
    userId:22,
    id:500,
    title:'testing',
    completed:false
  })  

})
.then(res => console.log(res.json()))
.catch(error => console.error(error))
