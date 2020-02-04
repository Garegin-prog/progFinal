
function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}



function draw() {
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

    for (var i in grassArr) {
        grassArr[i].mult();
        if (grassArr.length <= 100) {
            grassArr[i].multiply = 8;
        }
    }
    for (var i in xotakerArr) {
        xotakerArr[i].eat();
        if (xotakerArr.length <= 5) {
            var y1 = floor(random(matrix.length));
            var x1 = floor(random(matrix[y1].length));
            if (matrix[y1][x1] == 0) {
                matrix[y1][x1] = 2;
                var great = new Xotaker(x1, y1);
                xotakerArr.push(great);
            }
        }
    }

    for (var i in gishatichArr) {
        gishatichArr[i].eat();
        if (gishatichArr.length <= 6) {
            var y1 = floor(random(matrix.length));
            var x1 = floor(random(matrix[y1].length));
            if (matrix[y1][x1] == 0 || matrix[y1][x1] == 1 || matrix[y1][x1] == 5) {
                matrix[y1][x1] = 3;
                var gish = new Gishatich(x1, y1);
                gishatichArr.push(gish);

            }
        }
    }
    for (var i in mardArr) {
        mardArr[i].eat()
    }
    for (var i in satanaArr) {
        satanaArr[i].eat()
    }
    for (var i in xotachacnoxArr) {
        xotachacnoxArr[i].move()
    }
    

}