function throwDice(){
  let randNum1= Math.floor(Math.random()*6+1);
  let randNum2= Math.floor(Math.random()*6+1);
  document.querySelectorAll(".dice img")[0].setAttribute("src","/assets/images/dice"+randNum1+".png");
  document.querySelectorAll(".dice img")[1].setAttribute("src","/assets/images/dice"+randNum2+".png");
  if(randNum2>randNum1){  
    document.querySelector(".container h1").textContent="PLAYER 2 WINS!!";
  } else if (randNum2===randNum1) {  
      document.querySelector(".container h1").textContent="ITS A DRAW";
  } else {
      document.querySelector(".container h1").textContent="PLAYER 1 WINS!!";
  }
  document.querySelector(".btn").textContent="Try Again";

}
document.querySelector(".btn").addEventListener("click",throwDice);
