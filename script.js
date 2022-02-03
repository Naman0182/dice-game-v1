const left = document.querySelector(".left");
const right = document.querySelector(".right");
const btn = document.querySelector(".btn");
const heading = document.querySelector(".heading");

const p1 = ["inverted-dice-1.svg","inverted-dice-2.svg","inverted-dice-3.svg","inverted-dice-4.svg","inverted-dice-5.svg","inverted-dice-6.svg"];
const p2 = ["inverted-dice-1.svg","inverted-dice-2.svg","inverted-dice-3.svg","inverted-dice-4.svg","inverted-dice-5.svg","inverted-dice-6.svg"];;

function GenerateRandom(){
  const i = Math.floor(Math.random()*p1.length)
  const j = Math.floor(Math.random()*p1.length)

  left.src = p1[i];
  right.src = p2[j];

  CheckWinner(i,j);
}
window.addEventListener('load',GenerateRandom)
btn.addEventListener('click',GenerateRandom);

function CheckWinner(x,y){
  if(p1[x]>p2[y]){
    heading.textContent = "Player one Wins !";
  }else if(p1[x] === p2[y]){
    heading.textContent = "No winner ! Tied";
  } else {
    heading.textContent = "Player 2 wins !"
  }
}