const Util = require('./util');
const MovingObject = require('./moving_object');
const COLOR = '#FFF';
const RADIUS = 10;

function Asteroid(initialAttributes){
    this.color = COLOR;
    this.radius = RADIUS;

    MovingObject.call(this, {
        position: initialAttributes.position,
        velocity: Util.randomVector(10),
        radius: this.radius,
        color: this.color
    });
};


Util.setUpInheritance(Asteroid, MovingObject);



module.exports = Asteroid;