const resetGame = document.querySelector('.reset_game');
const gameCells = document.querySelector('.cell');
const squares = Array.from(document.querySelectorAll('#board div'));
const messages = document.querySelector('.message');
let board;
let turn = 'X';
let win;
let gameActive = true;

document.getElementById('board').addEventListener('click', handleTurn);
resetGame.addEventListener('click', handleResetButton);


function handleTurn(event){
    if(!gameActive){
        return;
    };

    let idx = squares.findIndex(function(square){
        return square === event.target;
    });
    
    if (board[idx] !== '' || win){
        return;
    };

    board[idx] = turn;
    if(turn === 'X'){
        turn='O'
    }else{
        turn='X'
    };

    win=getWinner();
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
        gameActive=false;
        return winner 
      } else if (board.includes('')) {
        return null // if there's an empty space, return null (no winner yet)
      } else {
        gameActive = false;
        return 'T' // no winner and no empty spaces. That's a tie!
      };
    
};


function render (){
    board.forEach(function(cell, idx){
        squares[idx].textContent = cell;
    });
    

    if(win){
        messages.textContent = win=== 'T'? "No winner!" : `${win} wins the game!` ;
    }else {
        messages.textContent = `It's ${turn}'s turn!`;
    }

};


function init (){
    board = [
        "","","",
        "","","",
        "","","",
    ];

    turn="X";
    win=null;
    gameActive=true;

    render();
};

init();


function handleResetButton (){
    init();
}
