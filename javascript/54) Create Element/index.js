
const newH1 = document.createElement("h1");
const newH2 = document.createElement("h1");

newH1.textContent = "Heading 1";
newH1.style.backgroundColor = "yellow";
newH1.style.textAlign = "center";

newH2.textContent = "Heading 2";
newH2.style.backgroundColor = "lightblue";
newH2.style.textAlign = "center";

document.body.prepend(newH1);
document.body.append(newH2);

const box1_div = document.getElementById("box1");
const box1_txt = document.createElement("h3");

box1_txt.textContent = "I'm Box 1";
box1_txt.style.fontSize= "2em";
box1_txt.style.textAlign = "center";
box1_div.append(box1_txt);