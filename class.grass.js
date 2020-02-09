var LivingCreature  = require('./LivingCreature.js');
module.exports = class Grass  extends LivingCreature{


    mult() {
        var cells = this.chooseCell(1);
        var rand = Math.floor(Math.random() * cells.length);
        var empty = cells[rand];
        this.multiply++
        grassHashiv++;
        if (empty && this.multiply > 3) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 1
            var newGr = new Grass(newX, newY)
            grassArr.push(newGr)
        }
    }
    multWinter() {
        var cells = this.chooseCell(1);
        var rand = Math.floor(Math.random() * cells.length);
        var empty = cells[rand];
        this.multiply++
        grassHashiv++;
        if (empty && this.multiply > 3) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 7
            var newGr = new Grass(newX, newY)
            grassArr.push(newGr)
        }
    }
}