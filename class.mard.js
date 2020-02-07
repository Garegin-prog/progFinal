var LivingForm  = require('./LivingCreature2.js');
var Grass = require("./class.grass.js")
module.exports = class Mard extends LivingForm{
    constructor(x, y) {
        super(x,y)
        this.energy = 200;
        this.directions = []

    }
    
    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x, this.y - 2],
            [this.x, this.y + 2],
            [this.x - 1, this.y - 2],
            [this.x - 1, this.y + 2],
            [this.x + 1, this.y - 2],
            [this.x + 1, this.y + 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y - 1],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y + 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y + 2],
            [this.x - 2, this.y - 2]

        ]
    }
    
 
    move() {
        var a = this.chooseCell(1);
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

            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 1
            var newGr = new Grass(this.x, this.y)
            grassArr.push(newGr)


            this.x = newX
            this.y = newY

        }
    }
    eat() {
        var cells = this.chooseCell(3);
        var rand = Math.floor(Math.random() * cells.length);
        var food = cells[rand];        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 0


            for (var i in gishatichArr) {
                if (gishatichArr[i].x == newX && gishatichArr[i].y == newY) {
                    gishatichArr.splice(i, 1)
                }
            }

            for (var i in xotakerArr) {
                if (xotakerArr[i].x == newX && xotakerArr[i].y == newY) {
                    xotakerArr.splice(i, 1)
                }
            }
            
            
            this.energy += 2
            
        }
        else{
            this.move()
            this.die()
        }
    }
    
    die() {

        if (this.energy <= 0) {

            matrix[this.y][this.x] = 0
            for (var i in mardArr) {
                if (mardArr[i].x == this.x && mardArr[i].y == this.y) {
                    mardArr.splice(i, 1)
                }
            }
        }
    }

}