


var randomnum1 = (Math.floor(Math.random()*6)+1);

var randimg1 = "images/dice"+randomnum1+".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randimg1);



var randint2 = Math.floor(Math.random()*6)+1;

var randimg2 = "images/dice"+randint2+".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randimg2);


if(randomnum1>randint2){
  document.querySelectorAll("h1")[0].innerHTML="player 1 Won Refresh again";
}
else if (randomnum1 < randint2) {
  document.querySelectorAll("h1")[0].innerHTML = "Player 2 Won Refresh again";
}
else{
  document.querySelector("h1","rfme").innerHTML="Draw";
}
