'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

con;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // If the guess is leaved empty
  if (!guess) {
    // document.querySelector(".message").textContent = "🚫 No number";
    displayMessage('🚫 No number');

    // When you win
  } else if (guess === secretNumber) {
    displayMessage('🎇 Correct Guess! Congrats!!');
    document.querySelector('.number').textContent = secretNumber;

    // Winning addons
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '40rem';

    //Highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When you loose
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? '🎢 Number is too high!'
          : '📉 Number is too low!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🔥 You lost!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});

// Again BTN
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start Guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
