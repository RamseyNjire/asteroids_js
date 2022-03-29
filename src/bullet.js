const Util = require('./util');
const MovingObject = require('./moving_object');


const COLOR = '#FF0000';
const RADIUS = 2;

function Bullet(initialAttributes){
    this.color = COLOR;
    this.radius = RADIUS;

    MovingObject.call(this, {
        position: initialAttributes.position,
        velocity: Util.scale(initialAttributes.velocity, 5),
        radius: this.radius,
        color: this.color,
        game: initialAttributes.game
    });
}

Util.setUpInheritance(Bullet, MovingObject);

Bullet.prototype.isWrappable = function () {
    // Here we override the default behavior of isWrappable in MovingObject.
    return false;
}

module.exports = Bullet