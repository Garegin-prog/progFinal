module.exports = class Satana extends Mard {
    constructor(x, y) {
        super(x,y);
        this.energy = 200;
        this.directions = []
    }
    chooseCell(character) {
        this. getNewDirections();
        return super.chooseCell(character);
    }
    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x + 1, this.y + 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y + 1]
        ]
    }
    move() {
        var empty = random(this.chooseCell(0, 3))
        this.energy -= 2;
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]

            if (matrix[newY][newX] == 3) {
                for (var i in gishatichArr) {
                    if (gishatichArr[i].x == newX && gishatichArr[i].y == newY) {
                        gishatichArr.splice(i, 1)
                    }
                }
            }
            matrix[newY][newX] = 5
            matrix[this.y][this.x] = 3 || 2


            if (matrix[this.y][this.x] = 3) {
                var gsh = new Gishatich(this.x, this.y)
                gishatichArr.push(gsh)
            }
            if (matrix[this.y][this.x] = 2) {
                var xt = new Xotaker(this.x, this.y)
                xotakerArr.push(xt)
            }

            this.x = newX
            this.y = newY
        }
    }


    eat() {
        var food = random(this.chooseCell(1))
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 5
            matrix[this.y][this.x] = 0


            for (var i in mardArr) {
                if (mardArr[i].x == newX && mardArr[i].y == newY) {
                    mardArr.splice(i, 1)
                }
            }

            this.x = newX
            this.y = newY
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
            for (var i in satanaArr) {
                if (satanaArr[i].x == this.x && satanaArr[i].y == this.y) {
                    satanaArr.splice(i, 1)
                }
            }
        }
    }
}