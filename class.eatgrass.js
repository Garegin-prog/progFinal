var LivingCreature  = require('./LivingCreature.js');
module.exports = class Xotaker extends LivingCreature{
    constructor(x, y) {
        super(x,y)
        this.energy = 5;
        this.moveEnergy =0
    
    }
   

    mult() {
        var a = this.chooseCell(1);
        var rand = Math.floor(Math.random() * a.length);
        var empty = a[rand];
        xotakerHashiv++;
        if (empty && this.energy > 10) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 2
            var xt = new Xotaker(newX, newY)
            xotakerArr.push(xt)
        }
    }

    move() {
        var a = this.chooseCell(1);
        var rand = Math.floor(Math.random() * a.length);
        var empty = a[rand];

        this.energy--;
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 2
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
            
            
            var newX = food[1]
            var newY = food[0]
            matrix[newY][newX] = 2
            matrix[this.y][this.x] = 0
            for (var i in grassArr) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1)
                }
            }
            this.x = newX
            this.y = newY
            this.energy += 3
            this.mult()
        }else{
            this.move();
            this.die();
        }
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1)
                }
            }
        }
        xotakermahacac++;
    }
    
   
}