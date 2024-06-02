const gameStatus = document.querySelector('.player');
const resetGame = document.querySelector('.reset_game');
const gameCells = document.querySelector('.cell');

const squares = Array.from(document.querySelectorAll('#board div'));
const messages = document.querySelector('.message');
let board;
let turn = 'X';
let win;
let gameActive = true;

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



function getWinner(){
    let winner = null;
    if(board[0]===board[1]&& board[1]===board[2]){
        winner = board[0];
    }else if(board[3]===board[4]&& board[4]===board[5]){
        winner = board[3];
    }else if(board[6]===board[7]&& board[7]===board[8]){
        winner = board[6];
    }else if(board[0]===board[3]&& board[3]===board[6]){
        winner = board[0];
    }else if(board[1]===board[4]&& board[4]===board[7]){
        winner = board[1];
    }else if(board[2]===board[5]&& board[5]===board[8]){
        winner = board[2];
    }else if(board[0]===board[4]&& board[4]===board[8]){
        winner = board[0];
    }else if(board[2]===board[4]&& board[4]===board[6]){
        winner = board[2];
    };

    if (winner) {
        return winner 
      } else if (board.includes('')) {
        return null // if there's an empty space, return null (no winner yet)
      } else {
        return 'T' // no winner and no empty spaces? That's a tie!
      };
    
};


function render (){
    board.forEach(function(cell, idx){
        squares[idx].textContent = cell;
    });
    messages.textContent = win ? `${win} wins the game!` : `It's ${turn}'s turn!`;

};


function init (){
    board = [
        "","","",
        "","","",
        "","","",
    ];

    render();
};

init();


function handleResetButton (){
    init();
}


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
