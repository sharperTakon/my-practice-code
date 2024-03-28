let score = JSON.parse(localStorage.getItem('score'));

if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  }
};

updateScoreElement();    

function playGame(playerMove) {
  const computermove = pickcomputerMove();
  let result = '';

  if (playerMove === 'rock') {
    if (computermove === 'rock') {
      result = 'tie.';
    } else if (computermove === 'paper') {
      result = 'you lose.';
    } else if (computermove === 'scissors') {
      result = 'you win.';
    }

  } else if (playerMove === 'paper') {
    if (computermove === 'paper') {
      result = 'tie.';
    } else if (computermove === 'rock') {
      result = 'you win.';
    } else if (computermove === 'scissors') {
      result = 'you lose.';
    }

  } else if (playerMove === 'scissors') {
    if (computermove === 'scissors') {
      result = 'tie.';
    } else if (computermove === 'rock') {
      result = 'you lose.';
    } else if (computermove === 'paper') {
      result = 'you win.';
    }
  }

  if (result === 'you win.') {
    score.wins += 1;
  } else if (result === 'you lose.') {
    score.losses += 1;
  } else if (result === 'tie.') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result')
    .innerHTML = result;

  document.querySelector('.js-moves')
    .innerHTML = `you ${playerMove} - ${computermove}  computer`;
}


function updateScoreElement() {
  document.querySelector('.js-score')
  .innerHTML =  `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
}

function pickcomputerMove () {

  const randomNumber = Math.random();

  let computermove = '';
  if (randomNumber >= 0 && randomNumber < 1/3) {
    computermove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber <2 / 3)  {
    computermove ='paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1){
    computermove = 'scissors'
  }

  return computermove;
}
