var startButton = document.querySelector(".main__start-game");
var timer = document.querySelector(".main__timer");
var socreResult = document.querySelector(".main__result");
var gameboard = document.querySelector(".main__game-board");
var ball = document.querySelector(".ball-points");
var slider = document.querySelector(".slider-points");
var recordCounter = document.querySelector(".main__record");
var record = 0;
var points = 0;

startButton.addEventListener("click", () => startGame());

function gameTimer() {
  timer.innerHTML = 20;
  window.setInterval(function () {
    if (timer.innerHTML > 0) {
      timer.innerHTML -= 1;
    }
  }, 1000);
}

function checkIfFinished() {
  if (timer.innerHTML == 0) {
    ball.remove();
    slider.remove();
    if (record < points) {
      record = points;
      recordCounter.innerHTML = `REKORD : ${record} PKT`;
    }
  }
}

function randomShape() {
  var randomShape = Math.round(Math.random());
  if (randomShape == 0) {
    ball.style.display = "block";
    slider.style.display = "none";
  } else {
    ball.style.display = "none";
    slider.style.display = "inline";
  }
}

function generateBall() {
  gameboard.appendChild(ball);
  ball.addEventListener("click", () => {
    ball.style.left = `${Math.floor(Math.random() * (1100 - 100) + 100)}px`;
    ball.style.top = `${Math.floor(Math.random() * (700 - 0) + 0)}px`;
    ball.style.height = `${Math.floor(Math.random() * (120 - 30) + 30)}px`;
    ball.style.width = ball.style.height;
    points += 10;
    socreResult.innerHTML = points;
    checkIfFinished();
    randomShape();
  });
}

function generateSlider() {
  gameboard.appendChild(slider);
  slider.addEventListener("click", () => {
    if (slider.value == 3000) {
      slider.style.left = `${Math.floor(Math.random() * (400 - -400)) + -400}px`;
      slider.style.top = `${Math.floor(Math.random() * (600 - 100) + 100)}px`;
      slider.style.transform = `rotate(${Math.floor(Math.random() * (360 - 0) + 0)}deg)`;
      slider.style.width = `${Math.floor(Math.random() * (400 - 100) + 200)}px`;
      slider.value = 0;
      points += 30;
      socreResult.innerHTML = points;
      checkIfFinished();
      randomShape();
    }
  });
}

function startGame() {
  socreResult.innerHTML = 0;
  points = 0;
  gameTimer();
  randomShape();
  generateBall();
  generateSlider();
}
