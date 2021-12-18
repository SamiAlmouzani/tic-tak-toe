const turnstr = document.querySelector("h4");
const cells = document.querySelectorAll("td");

const mymodal = document.getElementById("myModal");
const modalText = document.querySelector("p");

let playerTurn = true;
let gameover = false;

function start(){
    turnstr.innerText = "Player X's Turn";
    playerTurn = '1';
}

function wipeBoard(cells){
    for(let i = 0; i < cells.length; i++){
        cells[i].innerText = "";
    }
}
function logic(cells){
    
    if(cells[0].textContent == cells[1].textContent && cells[1].textContent == cells[2].textContent && !(cells[0].textContent == "" || cells[1].textContent == "" || cells[2].textContent == "")){
        mymodal.style.display = "block";
        modalText.innerText = `Player ${cells[0].innerText} has won the game!`;
        console.log("this got called 1");
        wipeBoard(cells);
    }else if(cells[3].textContent == cells[4].textContent && cells[4].textContent == cells[5].textContent && !(cells[3].textContent == "" || cells[4].textContent == "" || cells[5].textContent == "")){
        mymodal.style.display = "block";
        console.log("this got called 2");
        modalText.innerText = `Player ${cells[3].innerText} has won the game!`;
        wipeBoard(cells);
    }else if(cells[6].textContent == cells[7].textContent && cells[1].textContent == cells[8].textContent && !(cells[6].textContent == "" || cells[7].textContent == "" || cells[8].textContent == "")){
        mymodal.style.display = "block";
        console.log("this got called 3");
        modalText.innerText = `Player ${cells[6].innerText} has won the game!`;
        wipeBoard(cells);

    }else if(cells[0].textContent == cells[3].textContent && cells[3].textContent == cells[6].textContent && !(cells[0].textContent == "" || cells[3].textContent == "" || cells[6].textContent == "")){
        mymodal.style.display = "block";
        console.log("this got called 4");
        modalText.innerText = `Player ${cells[0].innerText} has won the game!`;
        wipeBoard(cells);

    }else if(cells[1].textContent == cells[4].textContent && cells[4].textContent == cells[7].textContent && !(cells[1].textContent == "" || cells[4].textContent == "" || cells[7].textContent == "")){
        mymodal.style.display = "block";
        console.log("this got called 5");
        modalText.innerText = `Player ${cells[1].innerText} has won the game!`;
        wipeBoard(cells);

    }else if(cells[2].textContent == cells[5].textContent && cells[5].textContent == cells[8].textContent && !(cells[2].textContent == "" || cells[5].textContent == "" || cells[8].textContent == "")){
        mymodal.style.display = "block";
        console.log("this got called 6");
        modalText.innerText = `Player ${cells[2].innerText} has won the game!`;
        wipeBoard(cells);

    }else if(cells[0].textContent == cells[4].textContent && cells[4].textContent == cells[8].textContent && !(cells[0].textContent == "" || cells[4].textContent == "" || cells[8].textContent == "")){
        mymodal.style.display = "block";
        console.log("this got called 7");
        modalText.innerText = `Player ${cells[0].innerText} has won the game!`;
        wipeBoard(cells);

    }else if(cells[2].textContent == cells[4].textContent && cells[4].textContent == cells[6].textContent && !(cells[2].textContent == "" || cells[4].textContent == "" || cells[6].textContent == "")){
        mymodal.style.display = "block";
        console.log("this got called 8");
        modalText.innerText = `Player ${cells[2].innerText} has won the game!`;
        wipeBoard(cells);

    }

}
function gameLoop(){
    for(let i = 0; i < cells.length; i++){
        cells[i].addEventListener("click", () => {
            if(playerTurn == true){
                cells[i].innerText = "X";
                turnstr.innerText = "Player O's Turn";
            }
            else{
                cells[i].innerText = "O";
                turnstr.innerText = "Player X's Turn";

            }
            playerTurn = !playerTurn;
            logic(cells);
        }) 
    }
}

function init(){
    start();
    gameLoop();
}

init();