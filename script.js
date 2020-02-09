var side = 25
var length = 25
var socket = io();
var matrix = []
let grassCountElement = document.getElementById('grassCount');
let grassEaterCountElement = document.getElementById('grassEaterCount');
let gishatichCountElement = document.getElementById('gishatichCount');


socket.on("matrix",a)
socket.on

function setup() {
    frameRate(60);
    createCanvas(length  * side, length * side);
    background('#acacac');
}

function a(data) {
    matrix = data.matrix
    //grassCountElement.innerText = data.grassCounter;
   // grassEaterCountElement.innerText = data.xotakerCounter;
   // gishatichCountElement.innerText = data.gishatichCounter;
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[x][y] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("#0B52EC");
            }
            else if (matrix[y][x] == 5) {
                fill("#000000");
            }
            else if (matrix[y][x] == 6) {
                fill("#B50BEC");
            }
            else if (matrix[y][x] == 6) {
                fill("#fffafa");
            }

            rect(x * side, y * side, side, side)


        }
    }
    

    

}
function button(){
    socket.emit("button")
}
function boom(){
    socket.emit("boom")
}









