const Util = require('./util');
const MovingObject = require('./moving_object');
const Ship = require('./ship');
const COLOR = '#00FF00';
const RADIUS = 10;

function Asteroid(initialAttributes){
    this.color = COLOR;
    this.radius = RADIUS;

    MovingObject.call(this, {
        position: initialAttributes.position,
        game: initialAttributes.game,
        velocity: Util.randomVector(2),
        radius: this.radius,
        color: this.color
    });
};


Util.setUpInheritance(Asteroid, MovingObject);

Asteroid.prototype.collideWith = function (otherObject) {
    if(otherObject instanceof Ship){
        otherObject.relocate();
    }

    if(otherObject instanceof Asteroid){
        this.game.remove(this);
        this.game.remove(otherObject);
    }
}



module.exports = Asteroid;