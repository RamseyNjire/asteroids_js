const Util = require('./util');
const MovingObject = require('./moving_object');
const COLOR = '#00FF00';
const RADIUS = 10;

function Asteroid(initialAttributes){
    MovingObject.call(this, initialAttributes);
    this.color = COLOR;
    this.radius = RADIUS;
};


Util.setUpInheritance(Asteroid, MovingObject);



module.exports = Asteroid;