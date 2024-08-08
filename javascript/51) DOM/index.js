
/*
  
  DOM   = DOCUMENT OBJECT MODEL
          Object{} that represents the page you see in the web browser
          and provides you with an API to interact with it.
          Web browser constructs the DOM when it loads an HTML document,
          and structures all the elements in a tree-like representation.
          JavaScript can access the DOM to dynamically
          change the content, structure, and style of a web page.

*/


const WelMsg = document.getElementById("wel-msg");

const username = " Dhanush"
WelMsg.textContent += username == "" ? ` Guest`:username;

document.title = "New Page";
document.body.style.backgroundColor = "BLACK";
document.body.style.color = '#fff';
document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
document.body.style.height = '100vh';
document.body.style.fontSize = '4em';