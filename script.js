let cellArray = new Array(256);
function changeColor(){
    this.style.backgroundColor = '#1c1b1b';
 }

function drawBoard() {

    for (let j = 0; j < cellArray.length; j++) {
        for (let i = 0; i < cellArray.length; i++) {
            var square = document.createElement("div");
            square.classList.add('sketch');
        }
        document.getElementById("gameBoardBorder").appendChild(square);
        square.onmouseenter = changeColor;
    }
    
}






