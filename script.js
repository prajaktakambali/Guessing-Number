'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let srecretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(document.querySelector('.guess').value);

  const displaymessage = function (message) {
    document.querySelector('.message').textContent = message;
  };

  if (!guess) {
    //document.querySelector('.message').textContent = 'No number';
    displaymessage('No number');
  } else if (guess === srecretnumber) {
    //document.querySelector('.message').textContent = 'Correct Number!';
    displaymessage('Correct Number');
    document.querySelector('.number').textContent = srecretnumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== srecretnumber) {
    if (score > 1) {
      displaymessage(guess > srecretnumber ? 'Too high' : 'Too low');
      guess > srecretnumber ? 'Too high' : 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = 'You lost the game!';
      displaymessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  srecretnumber = Math.trunc(Math.random() * 20) + 1;
  //document.querySelector('.message').textContent = 'Start Gussing...';
  displaymessage('Start Gussing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
