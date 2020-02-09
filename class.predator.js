var LivingCreature  = require('./LivingCreature.js');
module.exports = class Gishatich extends LivingCreature {
    constructor(x, y) {
        super(x,y);
        this.energy = 10;
        this.moveEnergy =0;
    }
    chooseCell(character) {
        this.getNewDirections();
        return super.chooseCell(character);
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
            [this.x + 1, this.y + 1]
        ]
    }

    mult() {
        var a = this.chooseCell(1);
        var rand = Math.floor(Math.random() * a.length);
        var empty = a[rand];
        gishatichHashiv++;
        if (empty && this.energy > 10) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 2
            var gsh = new Gishatich(newX, newY)
            gishatichArr.push(gsh)
        }
    }
    move() {
        var a = this.chooseCell(1);
        var rand = Math.floor(Math.random() * a.length);
        var empty = a[rand];
        this.energy -= 2;
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
        }
    }

    eat() {
        var cells = this.chooseCell(1);
        var rand = Math.floor(Math.random() * cells.length);
        var food = cells[rand];
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0

            for (var i in xotakerArr) {
                if (xotakerArr[i].x == newX && xotakerArr[i].y == newY) {
                    xotakerArr.splice(i, 1)
                }
            }

            this.x = newX
            this.y = newY
            this.energy += 2
            this.mult()
        }else{
            this.move()
            this.die()
        }
    }

    die() {

        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                    gishatichArr.splice(i, 1)
                }
            }
        }
        gishatichmahacac++;
    }
    moveWinter() {
        var a = this.chooseCell(1);
        var rand = Math.floor(Math.random() * a.length);
        var empty = a[rand];
        this.energy -= 2;
        this.moveEnergy++;
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
        }
    }
}