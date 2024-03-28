let score = JSON.parse(localStorage.getItem('score'));
if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  }
};

document.addEventListener('keydown', (event) => {
  if(event.key === 'Backspace') {
    document.querySelector('.js-alert').innerHTML = `

    <p class="alert">
      Are you sure you want to reset the score?
      <button class="a-button" onclick= "
      resetTool();
      ">
      Yes
      </button>

      <button class="a-button">
      No
      </button> 
    </p>
  ` 
  }
})

localStorage.setItem('score', JSON.stringify(score));
updateScoreElement();  

document.querySelector('.js-reset-me').addEventListener('click', ()=>{
  document.querySelector('.js-alert').innerHTML = `
    Are you sure you want to reset the score?

    <button class="a-button" onclick= "
    resetTool();
    ">
    Yes
    </button>

    <button class="a-button">
    No
    </button> 
  ` 
})

function resetTool() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreElement();

    document.querySelector('.js-alert').innerHTML = '';
}

updateScoreElement();  

continuePlaying = false

let intervalId; 

document.querySelector('.js-auto-play').addEventListener('click', () => {autoPlay()})

const buttonElement = document.querySelector('.auto-play-button');

function autoPlay() {
  if(!continuePlaying) {
    intervalId = setInterval(() => {
      buttonElement.innerHTML = 'Stop Playing';
      const playerMove = pickcomputerMove();
      playGame(playerMove);
    },1000);   
    continuePlaying = true;
  } else {
    buttonElement.innerHTML = 'Auto Play';
    continuePlaying = false;
    clearInterval(intervalId);
  }
};

document.addEventListener('keydown', (event) => {
  if(event.key === 'a') {
    autoPlay();
  }
});

document.querySelector('.js-rock-button').addEventListener('click', () => {playGame('rock');});

document.querySelector('.js-paper-button').addEventListener('click', () => {playGame('paper')})

document.querySelector('.js-scissors-button').addEventListener
('click', () => {playGame('scissors')})


document.body.addEventListener('keydown', (event) => {
  if(event.key === 'r') {
    playGame('rock')
  } else if  (event.key === 'p') {
    playGame('paper')
  } else if(event.key === 's') {
    playGame('scissors')
  }
})

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
    .innerHTML = `you
    <img class="img-icon" src="images/${playerMove}-emoji.png">
    <img class="img-icon" src="images/${computermove}-emoji.png">
    computer`;
}


function updateScoreElement() {
  document.querySelector('.js-score')
  .innerHTML =  `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
}

document.querySelector('.reset-score-button').addEventListener('click', () => {
  
})

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
};