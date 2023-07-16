var random=Math.round(Math.random()*100);
var lives=10;
function submitguess()
{
document.getElementById("s11").innerHTML=lives;
var input=document.getElementById("s7").value;
lives--;
console.log(input, random);
{
if(input==random)
{
location.href="./win.html";
}
else if(input<random&&lives!=0)
{
document.getElementById("s12").innerHTML="YOUR GUESS IS LOW!";
}
else if(input>random&&lives!=0)
{
document.getElementById("s12").innerHTML="YOUR GUESS IS HIGH!";
}
else if(lives==0)
{
location.href="./loss.html";
}
}
}
function restart()
{
location.href="./index.html";
}
