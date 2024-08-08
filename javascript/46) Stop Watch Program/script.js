
const para = document.getElementById("timer");

let startTime = 0;
let elapseTime = 0;
let isRunning = false;
let timer = null

function update(){
  const currentTime = Date.now();
  elapseTime = currentTime - startTime;

  let getHour = Math.floor(elapseTime / (1000 * 60 * 60));
  let getMinute = Math.floor(elapseTime / (1000 * 60) % 60);
  let getSecond = Math.floor(elapseTime / 1000 % 60);
  let getMileSecond = Math.floor(elapseTime % 1000 / 60 );

  getHour = String(getHour).padStart(2,"0");
  getMinute = String(getMinute).padStart(2,"0");
  getSecond = String(getSecond).padStart(2,"0");
  getMileSecond = String(getMileSecond).padStart(2,"0");

  para.textContent = `${getHour}:${getMinute}:${getSecond}: ${getMileSecond}`;

}

function startClick(){
  if(!isRunning){
    startTime = Date.now() - elapseTime;
    timer = setInterval(update);
    isRunning = true;
  }
  // else{
  //   alert("Already running");
  // }
}

function stopClick(){
  if(isRunning){
    clearInterval(timer);
    elapseTime = Date.now() - startTime;
    isRunning = false;
  }

}

function resetClick(){
  
  clearInterval(timer);

  startTime = 0;
  timer = null;
  elapseTime = 0;
  isRunning = false;

  para.textContent = "00:00:00:00";

}


