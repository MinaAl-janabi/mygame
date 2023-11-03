
const sudokuPuzzle = [
  [5, 3, 4,  , 7,  , 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3,  , 8],
  [1,  , 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9,  , 6,  , 4, 2, 3],
  [4, 2,  , 8, 5   , 7, 9, 1],
  [7, 1, 3,  , 2, 4, 8, 5, 6],
  [9,  , 1, 5, 3, 7, 2, 8, 4],
  [2, 8,  , 4, 1, 9,  , 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
];
const soluPuzzle = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ];

const sudokuGrid = document.getElementById('my-game');
function myGame() {
  sudokuGrid.innerHTML = '';
  for (let i = 0; i < 9; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 9; j++) {
      const cell = document.createElement('td');
      const input = document.createElement('input');
      input.type = 'test';
      input.dataset.row = i;
      input.dataset.col = j;
      input.value = soluPuzzle[i][j];
      cell.appendChild(input);
      row.appendChild(cell);
      sudokuGrid.appendChild(row);
    }
  }
const play = document.getElementById("remove-items");
play.addEventListener('click', () => {
    const sudokuPuzzle = [
        [5, 3, 4,  , 7,  , 9, 1, 2],
        [6, 7, 2, 1, 9, 5, 3,  , 8],
        [1,  , 8, 3, 4, 2, 5, 6, 7],
        [8, 5, 9,  , 6,  , 4, 2, 3],
        [4, 2,  , 8, 5   , 7, 9, 1],
        [7, 1, 3,  , 2, 4, 8, 5, 6],
        [9,  , 1, 5, 3, 7, 2, 8, 4],
        [2, 8,  , 4, 1, 9,  , 3, 5],
        [3, 4, 5, 2, 8, 6, 1, 7, 9],
      ];
return sudokuPuzzle;
});
const result = document.querySelectorAll('wrong');
function inputsvalue(){
    for (let i = 0; i < 9; i++) ;
    if (input.value!== soluPuzzle);
    return wrong;
}
const checkButton = document.getElementById('checkButton');
const input = document.querySelectorAll('sudoku');
checkButton.addEventListener('click', () => {
    input.forEach((input) => {
        const row = input.dataset.row;
        const col = input.dataset.col;
        if (input.value !== soluPuzzle[row][col].toString()) {
            input.style.backgroundColor = 'red';
        } else {
            input.style.backgroundColor = 'green';
        }
    });
});
}
myGame();
