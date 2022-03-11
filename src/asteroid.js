const Util = require('./util');
const MovingObject = require('./moving_object');
const COLOR = '#00FF00';
const RADIUS = 10;

function Asteroid(initialAttributes){
    this.color = COLOR;
    this.radius = RADIUS;

    MovingObject.call(this, {
        position: initialAttributes.position,
        velocity: Util.randomVector(2),
        radius: this.radius,
        color: this.color
    });
};


Util.setUpInheritance(Asteroid, MovingObject);



module.exports = Asteroid;