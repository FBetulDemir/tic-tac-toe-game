const gameStatus = document.querySelector('.player');
const resetGame = document.querySelector('.reset_game');
const gameCells = document.querySelector('.cell');

const squares = Array.from(document.querySelectorAll('#board div'));
const messages = document.querySelector('.message');
let board;
let turn = 'X';
let win;

document.getElementById('board').addEventListener('click', handleTurn);


function handleTurn(event){
    let idx = squares.findIndex(function(square){
        return square === event.target;
    });
    board[idx] = turn;
    win = getWinner();
    // if(turn === 'X'){
    //     turn='O'
    // }else{
    //     turn='X'
    // };
    win = getWinner();
    render();
};



function getWinner(){
    let winner = null;
    if(board[0]===board[1]&& board[1]===board[2]){

    }else if(board[3]===board[4]&& board[4]===board[5]){

    }else if(board[6]===board[7]&& board[7]===board[8]){

    }else if(board[0]===board[3]&& board[3]===board[6]){

    }else if(board[1]===board[4]&& board[4]===board[7]){

    }else if(board[2]===board[5]&& board[5]===board[8]){

    }else if(board[0]===board[4]&& board[4]===board[8]){

    }else if(board[2]===board[4]&& board[4]===board[6]){

    };
    return winner;
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
