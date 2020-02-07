var side = 25
var length = 25
socket.on("matrix",a)
function setup() {
    frameRate(5);
    createCanvas(length  * side, length * side);
    background('#acacac');
}


function a(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
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

            rect(x * side, y * side, side, side)


        }
    }

    

}