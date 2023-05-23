var num1 = Math.floor(Math.random()*6) + 1;
var diceImage="dice"+num1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",diceImage);
var num2 = Math.floor(Math.random()*6) + 1;
var diceImage1="dice"+num2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",diceImage1);
if(num1>num2){
    document.querySelector("h1").innerHTML="Player1 wins";
}else if(num1===num2){
    document.querySelector("h1").innerHTML="Draw";
}else{
    document.querySelector("h1").innerHTML="Player2 wins";
}
