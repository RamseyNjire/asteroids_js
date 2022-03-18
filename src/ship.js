const Util = require('./util');
const MovingObject = require('./moving_object');
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


module.exports = Ship;