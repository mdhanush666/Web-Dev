
const txt = document.getElementById("txt");

let startTime   = 0;
let elapseTime  = 0;
let isRunning   = false;
let timer       = null; 

function update(){
  const currentTime   = Date.now();
  elapseTime          = currentTime - startTime;

  let getHours        = Math.trunc(elapseTime / (1000 * 60 * 60));
  let getMinutes      = Math.trunc(elapseTime / (1000 * 60) % 60);
  let getSeconds      = Math.trunc(elapseTime / 1000 % 60);
  let getMileSeconds  = Math.trunc(elapseTime % 1000 / 60);

  getHours        = String(getHours).padStart(2,"00");
  getMinutes      = String(getMinutes).padStart(2,"00");
  getSeconds      = String(getSeconds).padStart(2,"00");
  getMileSeconds  = String(getMileSeconds).padStart(2,"00");

  txt.textContent = `${getHours}:${getMinutes}:${getSeconds}:${getMileSeconds}`;

}


function btnStart(){
  if(!isRunning){
    startTime = Date.now() - elapseTime;
    timer     = setInterval(update);
    isRunning = true;
  }
}

function btnStop(){
  if(isRunning){
    clearInterval(timer);
    elapseTime  = Date.now() - startTime;
    isRunning   = false;
  }

  
}

function btnReset(){
  clearInterval(timer);
  startTime   = 0;
  elapseTime  = 0;
  timer       = null;
  isRunning   = false;
  txt.textContent = "00:00:00:00";
}