const increasebtn= document.getElementById("increasebtn");
const decreasebtn= document.getElementById("decreasebtn");
const restartbtn= document.getElementById("restartbtn");
let countable= document.getElementById("countable");
let count=0;
count=Number(count);


increasebtn.onclick=function(){
  count++;
  countable.textContent=count;
}
decreasebtn.onclick=function(){
  count--;
  countable.textContent=count;
}
restartbtn.onclick=function(){
  count=0;
  countable.textContent=count;
}