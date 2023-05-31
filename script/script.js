let currentPlayer = "X";
let gameEnded = false;
let numMoves = 0;
let scoreX = 0;
let scoreO = 0;

const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const scoreXElement = document.querySelector('.score-x');
const scoreOElement = document.querySelector('.score-o');

const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
  [0, 4, 8], [2, 4, 6] // Diagonal
];

function makeMove(cellIndex) {
  if (gameEnded || cells[cellIndex].textContent !== '') {
    return;
  }

  cells[cellIndex].textContent = currentPlayer;
  numMoves++;

  if (checkWin()) {
    gameEnded = true;
    highlightWinningCombination();
    updateScore();
    message.textContent = `L'équipe ${currentPlayer} a gagné !`;
    return;
  }

  if (numMoves === 9) {
    gameEnded = true;
    message.textContent = "Match nul !";
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWin() {
  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      cells[a].textContent === currentPlayer &&
      cells[b].textContent === currentPlayer &&
      cells[c].textContent === currentPlayer
    ) {
      return true;
    }
  }
  return false;
}

function highlightWinningCombination() {
  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      cells[a].textContent === currentPlayer &&
      cells[b].textContent === currentPlayer &&
      cells[c].textContent === currentPlayer
    ) {
      cells[a].style.backgroundColor = 'red';
      cells[b].style.backgroundColor = 'red';
      cells[c].style.backgroundColor = 'red';
      break;
    }
  }
}

function updateScore() {
  if (currentPlayer === 'X') {
    scoreX++;
    scoreXElement.textContent = scoreX;
  } else {
    scoreO++;
    scoreOElement.textContent = scoreO;
  }
}

function resetGame() {
  currentPlayer = "X";
  gameEnded = false;
  numMoves = 0;
  message.textContent = "";

  for (let cell of cells) {
    cell.textContent = "";
    cell.style.backgroundColor = "#fff";
  }
}

// ... Autre code JavaScript ...

function resetScores() {
  scoreX = 0;
  scoreO = 0;
  scoreXElement.textContent = scoreX;
  scoreOElement.textContent = scoreO;
}

// ... Autre code JavaScript ...

resetGame(); // Réinitialiser le jeu au chargement de la page
