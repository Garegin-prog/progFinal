module.exports = class Xotachacnox extends Mard{
    constructor(x, y) {
        super(x,y);
        this.energy = 200;
        this.multiply = 0;
        

    }
    chooseCell(character) {
        this.getNewDirections();
        return super.chooseCell(character);
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
        var empty = random(this.chooseCell(0, 1))
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
            var newGr = new mainConstrustor_chooseCell(this.x, this.y)
            grassArr.push(newGr)


            this.x = newX
            this.y = newY

        }
    }


}