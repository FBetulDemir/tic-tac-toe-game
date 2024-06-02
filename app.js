const gameStatus = document.querySelector('.player');
const resetGame = document.querySelector('.reset_game');
const gameCells = document.querySelector('.cell');

const squares = Array.from(document.querySelectorAll('#board div'));
const messages = document.querySelector('.message');
let board;
let turn = 'X';

document.getElementById('board').addEventListener('click', handleTurn);

function handleTurn(event){
    let idx = squares.findIndex(function(square){
        return square === event.target;
    });
    board[idx] = turn;
    if(turn === 'X'){
        turn='O'
    }else{
        turn='X'
    };
    render();
};
console.log(turn);


function render (){
    board.forEach(function(cell, idx){
        squares[idx].textContent = cell;
    });
    messages.textContent = ``
};

function init (){
    board = [
        "","","",
        "","","",
        "","","",
    ];

    render();
};



// let gameIsAlive = true;
// let xIsNext = true;

// const handleReset = (e) => {
//     console.log(e);
// };

// const handleCellClick = (e) => {
//     const location = e.target.classList[1];
//     if (xIsNext){
//         e.target.classList.add('x');
//         xIsNext =!xIsNext;
//     }else {
//         e.target.classList.add('o');
//         xIsNext = !xIsNext;
//     }
// };

// for(const gameCell of gameCells){
//     gameCell.addEventListener('click', handleCellClick)
// }

// resetGame.addEventListener('click', handleReset);
