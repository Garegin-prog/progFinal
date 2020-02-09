var Grass = require("./class.grass.js");
var Mard = require("./class.mard.js");
var Xotaker = require("./class.eatgrass.js");
var Gishatich = require("./class.predator.js");
var Satana = require("./class.satana.js");
var Xotachacnox = require("./class.xotachacnox.js");
var fs = require('fs')

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server)
//var soket = io();

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});

server.listen(3000);


grassArr = [];
xotakerArr = [];
gishatichArr = [];
mardArr = [];   
satanaArr = [];
xotachacnoxArr = [];
grassHashiv = [];

grassHashiv = 0;
xotakerHashiv = 0;
gishatichHashiv = 0;
xotachacnoxHashiv = 0;
xotakermahacac = 0;
gishatichmahacac = 0;
satanamahacac =0;


function matrixGenerator(l) {
    // Local matrix
    var m = [];
    // Fill matrix
    for (var i = 0; i < l; i++) {
        m[i] = [];
        for (var j = 0; j < l; j++) {
            // Stexcel random tiv
            var rand = Math.floor(Math.random() * 100);
            // Lcnel matrix tokosayin haraberutyamb
            if (rand <= 30) {
                // Xot
                m[i][j] = 1;
            } else if (rand > 30 && rand <= 50) {
                // Xotaker
                m[i][j] = 2;
            } else if (rand > 50 && rand <= 60) {
                // Gishatich
                m[i][j] = 3;
            } else if (rand > 60 && rand <= 70) {
                // Nor kerpar 1
                m[i][j] = 4;
            } else if (rand > 70 && rand <= 80) {
                // Nor kerpar 2
                m[i][j] = 5;
            }
            else if (rand > 80 && rand <= 90) {
                m[i][j] = 6;
            }
            else {
                // Datarkutyun
                m[i][j] = 0;
            }
        }
    }
    // Veradarcnel matrix
    return m;


}

// Haytararel global matrix popoxakan
matrix = matrixGenerator(25, 1, 1);

function createDat() {
    for (let y = 0; y < matrix.length; ++y) {
        for (let x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y)
                grassArr.push(gr)
                grassHashiv++;
            }
            else if (matrix[y][x] == 2) {
                var xot = new Xotaker(x, y)
                xotakerArr.push(xot)
                xotakerHashiv++;
                xotakermahacac
            }
            else if (matrix[y][x] == 3) {
                var gish = new Gishatich(x, y)
                gishatichArr.push(gish)
                gishatichHashiv++;
                gishatichmahacac++;
            }
            else if (matrix[y][x] == 4) {
                var mar = new Mard(x, y)
                mardArr.push(mar)
                
            }
            else if (matrix[y][x] == 5) {
                var st = new Satana(x, y)
                satanaArr.push(st)
                satanamahacac++;
              
            }
            else if (matrix[y][x] == 6) {
                var xots = new Xotachacnox(x, y)
                xotachacnoxArr.push(xots)
                xotachacnoxHashiv++;
            }
        }
    
    }
}

createDat();
var obj  = {"info" : []};
function statistika(){
    var file = "Statics.json";
    obj.info.push({"cnvac xoteri qankak":grassHashiv})
    obj.info.push({"cnvac xotakerneri qankak":xotakerHashiv})
    obj.info.push({"cnvac gishatichmeri qankak":gishatichHashiv})
    obj.info.push({"cnvac xotachacnoxneri qanak":xotachacnoxHashiv})
    obj.info.push({"mahacac xotakerneri qanak":xotakermahacac})
    obj.info.push({"mahacac gishtichneri qanak":gishatichmahacac})
    obj.info.push({"mahacac satananeri qanak":satanamahacac})
    console.log(obj)
    fs.writeFileSync(file, JSON.stringify(obj,null,3));
    console.log(JSON.stringify(obj));
    
}
setInterval(statistika, 6000)

function main() {
    if(grassArr[0] !== undefined){
        for (var i in grassArr) {
            grassArr[i].mult();
            if (grassArr.length <= 100) {
                grassArr[i].multiply = 8;
            }
        }
    } 
    for (var i in xotakerArr) {
        xotakerArr[i].eat();
        if (xotakerArr.length <= 5) {
            var y1 = Math.floor(Math.random(matrix.length));
            var x1 = Math.floor(Math.random(matrix[0].length));
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
            var y1 =Math.floor(Math.random(matrix.length));
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
    var sendData = {
        matrix: matrix,
        grassCounter: grassHashiv,
        xotakerCounter: xotakerHashiv,
        gishatichCounter: gishatichHashiv,
        xotakerCounter:xotakermahacac,
        gishatichCounter:gishatichmahacac,
        satanaCounter:satanamahacac,
    }
    io.sockets.emit("matrix", sendData)
}
io.on("connection",function(socket){
    socket.on("button", function(){
        for (let i in xotachacnoxArr) {
            xotachacnoxArr[i].mult()
        }
    })
})

    io.on("connection", function (socket) {
    socket.on("boom", function () {
      
        
        for (var y = 5; y < matrix.length; y++) {
            for (var x = 5; x < matrix.length; x++) {
                if (x < 20 && y < 20) {
                    if (matrix[y][x] = 1) {
                        for (var i in grassArr) {
                            if (grassArr[i].x == x && grassArr[i].y == y) {
                                grassArr.splice(i, 1)
                            }
                        }
                    }
                    if (matrix[y][x] = 2) {
                        for (var i in xotakerArr) {
                            if (xotakerArr[i].x == x && xotakerArr[i].y == y) {
                                xotakerArr.splice(i, 1)
                            }
                        }
                    }
                    if (matrix[y][x] = 3) {
                        for (var i in gishatichArr) {
                            if (gishatichArr[i].x == x && gishatichArr[i].y == y) {
                                gishatichArr.splice(i, 1)
                            }
                        }
                    }
                    if (matrix[y][x] = 4) {
                        for (var i in mardArr) {
                            if (mardArr[i].x == x && mardArr[i].y == y) {
                                mardArr.splice(i, 1)
                            }
                        }
                    }
                    if (matrix[y][x] = 5) {
                        for (var i in satanaArr) {
                            if (satanaArr[i].x == x && satanaArr[i].y == y) {
                                satanaArr.splice(i, 1)
                            }
                        }
                    }
                    if (matrix[y][x] = 6) {
                        for (var i in xotachacnoxArr) {
                            if (xotachacnoxArr[i].x == x && xotachacnoxArr[i].y == y) {
                                xotachacnoxArr.splice(i, 1)
                            }
                        }
                    }
                    matrix[y][x] = 0;

                }
            }
        }
    })
    socket.on("noric", function(){
        restart();
    })
})

setInterval(main, 1000)
