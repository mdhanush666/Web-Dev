
let timeoutId;

function startTimer(){
  timeoutId = setTimeout(() => window.alert("Hello"),3000);
}

function stopTimer(){
  clearTimeout(timeoutId);
}