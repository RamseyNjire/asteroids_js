const Util = require('./util');
const MovingObject = require('./moving_object');
const Bullet = require('./bullet');
const COLOR = '#00ccff';
const RADIUS = 5;

function Ship(initialAttributes) {
    this.color = COLOR;
    this.radius = RADIUS;

    MovingObject.call(this, {
        position: initialAttributes.position,
        game: initialAttributes.game,
        velocity: [0, 0],
        radius: this.radius,
        color: this.color
    });
};

Util.setUpInheritance(Ship, MovingObject);

Ship.prototype.relocate = function () {
    this.position = this.game.randomPosition();
    this.velocity = [0, 0];
}

Ship.prototype.power = function(impulse) {
    this.velocity[0] += impulse[0];
    this.velocity[1] += impulse[1];
}

Ship.prototype.fireBullet = function() {
    if(!(this.velocity[0] == 0 && this.velocity[1] == 0)) {
        const bullet = new Bullet({
            position: [this.position[0], this.position[1]],
            velocity: this.velocity,
            game: this.game
        })

        this.game.add(bullet);
    }
}



module.exports = Ship;