let resetButton = document.querySelector('#reset');
let p1Button = document.querySelector('#p1');
let p2Button = document.getElementById('p2');
let numInput = document.querySelector('input');
let winningScoreDisplay = document.querySelector('p span');
let p1Display = document.querySelector('#p1Display');
let p2Display = document.querySelector('#p2Display');
let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let winningScore = 5;

p1Button.addEventListener('click', function(){
  if(!gameOver){
    p1Score++;
    if(p1Score === winningScore){
      gameOver = true;
      p1Display.classList.add('winner');
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener('click', function(){
  if(!gameOver){
    p2Score++;
    if(p2Score === winningScore){
      gameOver = true;
      p2Display.classList.add('winner');
    }
    p2Display.textContent = p2Score;
  }
});

resetButton.addEventListener('click', function(){
  reset();
});

function reset(){
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove('winner');
  p2Display.classList.remove('winner');
  gameOver = false;
};

numInput.addEventListener('change', function(){
  winningScoreDisplay.textContent = numInput.value;
  winningScore = Number(numInput.value);
  reset();
});
