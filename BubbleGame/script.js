var score =0;
var ran=0;
function increaseScore()
{
    score+=10;
    document.querySelector("#scoreval").textContent = score;
}


function newHit() {


     ran = Math.floor(Math.random()*10);
    document.querySelector("#hitInt").textContent = ran;

}

function makeBubble() {
var clutter=" ";
for(var i=1;i<=168;i++)
{
  var rn=  Math.floor(Math.random()*10);
  clutter +=  ` <div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;

}

var timer=60;
function runTime() {
var timeInt= setInterval(function(){

if(timer >0)
{
    timer--;
    document.querySelector("#time").textContent=timer;
}
else{
   clearInterval(timeInt);
   document.querySelector('#pbtm').innerHTML = "";
}

},1000);

}


document.querySelector("#pbtm").addEventListener("click",function(dets)
{
     var clickednum =    Number(dets.target.textContent);
     if(clickednum == ran)
     {
        increaseScore();
        makeBubble();
        newHit();
     }
});

newHit();
runTime();
makeBubble();