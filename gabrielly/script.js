let score= 0;
let timeLeft = 30;
let timer;
let isGameOver = false;
let highScore = localStorage.getItem('highScore') || 0;

const clickSound = new Audio('click.mp3');
const endSound =  new Audio('end.mp3');

document.getElementById('clickButton').addEventListener('click', function () {
  if (!isGameOver) {
    score++;
    document.getElementById('score').textContent = score;
    clickSound.play();
  }
});

function countdown() {
  timer = setInterval(function() {
   timeLeft--;
   document.getElementById('timer').textContent = timeLeft;
   if (timeLeft <= 0) {
     endGame();
   }
  }, 1000);
}

function endGame() {
  clearInterval(timer);
  isGameOver = true;
  endSound.play();
  document.getElementById('gameContainer').style.display = 'none';
  document.getElementById('resultContainer').style.display = 'block';
  document.getElementById('finalScore').textContent = score;
  if (score > highScore) {
    highScore = score;
    localStorage.setItem('highScore', highScore);
    document.getElementById('highScore').textContent = highScore;
    document.querySelector('.highScore').classList.add('newHighScore');
  }
}

document.getElementById('restartButton').addEventListener('click', function() {
  isGameOver = false;
  score = 0;
  timeLeft = 30;
  document.getElementById('score').textContent = score;
  document.getElementById('timer').textContent = timeLeft;
  document.getElementById('gameContainer').style.display = 'block';
  document.getElementById('resultContainer').style.display = 'none';
  document.querySelector('.highScore').classList.remove('newHighScore');
  countdown();
}); 

countdown();