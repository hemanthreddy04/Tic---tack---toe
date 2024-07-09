let board = Array(9).fill(null);
let xIsNext = true;
let winner = null;

const squares = document.querySelectorAll('.square');
const statusText = document.getElementById('status');

squares.forEach(square => {
  square.addEventListener('click', handleClick);
});

function handleClick(event) {
  const index = event.target.id;
  if (winner || board[index]) return;

  board[index] = xIsNext ? 'X' : 'O';
  event.target.textContent = board[index];
  xIsNext = !xIsNext;
  winner = calculateWinner(board);
  
  if (winner) {
    statusText.textContent = `Player ${winner} Won!`;
  } else if (board.every(cell => cell)) {
    statusText.textContent = 'It\'s a Tie!';
  } else {
    statusText.textContent = `Next Player: ${xIsNext ? 'X' : 'O'}`;
  }
}

function calculateWinner(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  
  for (let line of lines) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

function resetGame() {
  board = Array(9).fill(null);
  xIsNext = true;
  winner = null;
  squares.forEach(square => {
    square.textContent = '';
  });
  statusText.textContent = 'Next Player: X';
}
