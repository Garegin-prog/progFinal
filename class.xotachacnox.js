var LivingForm  = require('./LivingCreature2.js');
var Grass = require('./class.grass.js')
module.exports = class Xotachacnox extends LivingForm{
    constructor(x, y) {
        super(x,y);
        this.energy = 200;
        
        

    }
  
    getNewDirections() {
        this.directions = [

            [this.x, this.y - 1],
            [this.x, this.y + 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 2, this.y - 2],
            [this.x + 2, this.y + 2],
            [this.x - 2, this.y + 2],
            [this.x + 2, this.y - 2],
            [this.x, this.y - 4],
            [this.x + 4, this.y],
            [this.x, this.y + 4],
            [this.x - 4, this.y],
            [this.x - 5, this.y - 5],
            [this.x + 5, this.y - 5],
            [this.x - 5, this.y + 5],
            [this.x + 5, this.y + 5]

        ]
    }
    move() {
        var a = this.chooseCell(0, 1);
        var rand = Math.floor(Math.random() * a.length);
        var empty = a[rand];
        this.energy -= 2;
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            if (matrix[newY][newX] == 1) {
                for (var i in grassArr) {
                    if (grassArr[i].x == newX && grassArr[i].y == newY) {
                        grassArr.splice(i, 1)
                    }
                }
            }

            matrix[newY][newX] = 6
            matrix[this.y][this.x] = 1
            var newGr = new Grass(this.x, this.y)
            grassArr.push(newGr)


            this.x = newX
            this.y = newY

        }
    }
    mult() {
        var a = this.chooseCell(1);
        var rand = Math.floor(Math.random() * a.length);
        var empty = a[rand];
        if (empty && this.energy > 10) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 2
            var gsh = new Xotachacnox(newX, newY)
            xotachacnoxArr.push(gsh)
            xotachacnoxHashiv++;
        }
    }
}
