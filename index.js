const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const increasebtn = document.getElementById("increasebtn");
const countlbl = document.getElementById("countlbl");
const randbtn = document.getElementById("randbtn");
let count = 0;


decreasebtn.addEventListener("click",function(event){
    count--;
    countlbl.textContent=count;
})

increasebtn.addEventListener("click",function(event){
    count++;
    countlbl.textContent=count;
})

resetbtn.addEventListener("click",function(event){
    count=0;
    countlbl.textContent=count;
})


randbtn.addEventListener("click",function(event){
    count=Math.floor(Math.random()*100);
    countlbl.textContent=count;
})