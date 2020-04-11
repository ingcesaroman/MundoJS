console.log("conectado!!");

var p1 = document.querySelector("#p1")
var p2 = document.getElementById("p2")
var reset = document.querySelector("#reset")
var scp1 = document.querySelector("#scp1")
var scp2 = document.getElementById("scp2")
var p1Score = 0;
var p2Score = 0;
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var gameOver = false;
var winningScore = 5;


p1.addEventListener('click', function(){
    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore){
            scp1.classList.add("ganador");
            gameOver = true;
        }
        scp1.textContent = p1Score;
    }
});

p2.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        if(p2Score === winningScore){
           scp2.classList.add("ganador");
           gameOver = true;
        }
        scp2.textContent = p2Score;
    }
});

reset.addEventListener("click", function(){
    console.log("iniciar de nuevo");
    reset();
});

numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});

function reset(){
	p1Score = 0;
	p2Score = 0;
	scp1.textContent = 0;
	scp2.textContent = 0;
	scp1.classList.remove("ganador");
	scp2.classList.remove("ganador");
	gameOver = false;
}

//function increaseValue() {
//  var value = parseInt(document.getElementById('number').value, 10);
//  value = isNaN(value) ? 0 : value;
//  value++;
//  document.getElementById('number').value = value;
//}
//
//function decreaseValue() {
//  var value = parseInt(document.getElementById('number').value, 10);
//  value = isNaN(value) ? 0 : value;
//  value < 1 ? value = 1 : '';
//  value--;
//  document.getElementById('number').value = value;
//}