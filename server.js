var side = 50;
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var mardArr = [];
var satanaArr = [];
var xotachacnoxArr = [];

var Grass = require("./class.grass.js");
var Mard = require("./class.mard.js");
var Xotaker = require("./class.eatgrass.js");
var Gishatich = require("./class.predator.js");
var Satana = require("./class.satana.js");
var Xotachacnox = require("./class.xotachacnox.js");

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);


app.use(express.static("."));

app.get('/', function (req, res) {
   res.redirect('index.html');
});

server.listen(3000);

function matrixGenerator(l) {
    // Local matrix
    var m = [];
    // Fill matrix
    for (var i = 0; i < l; i++) {
        m[i] = [];
        for (var j = 0; j < l; j++) {
            // Stexcel random tiv
            var rand = Math.floor(Math.random()*100);
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
var matrix = matrixGenerator(25);

    for (let y = 0; y < matrix.length; ++y) {
        for (let x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y)
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                var xot = new Xotaker(x, y)
                xotakerArr.push(xot)
            }
            else if (matrix[y][x] == 3) {
                var gish = new Gishatich(x, y)
                gishatichArr.push(gish)
            }
            else if (matrix[y][x] == 4) {
                var mar = new Mard(x, y)
                mardArr.push(mar)
            }
            else if (matrix[y][x] == 5) {
                var st = new Satana(x, y)
                satanaArr.push(st)
            }
            else if (matrix[y][x] == 6) {
                var xots = new Xotachacnox(x, y)
                xotachacnoxArr.push(xots)
            }
        }

    }
    
