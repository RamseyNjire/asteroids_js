// This is the base class for all moving objects. It takes in some initial attributes and also has general draw and move methods based on the assumption that our moving objects will be circles.

const Util = require('./util');

function MovingObject(initialAttributes) {
    this.position = initialAttributes.position;
    this.velocity = initialAttributes.velocity;
    this.radius = initialAttributes.radius;
    this.color = initialAttributes.color;
    this.game = initialAttributes.game;
}

MovingObject.prototype.draw = function(context) {
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.position[0], this.position[1], this.radius, 0, 2 * Math.PI, false);
    context.fill();
};

MovingObject.prototype.move = function() {
    this.position[0] += this.velocity[0];
    this.position[1] += this.velocity[1];

    if(this.game.isOutOfBounds(this.position)) {
        if(this.isWrappable()) {     
            this.game.wrap(this.position);
        } else {
            this.game.remove(this);
        }
    }
}

MovingObject.prototype.isCollidedWith = function(otherObject) {
    return Util.distance(this.position, otherObject.position) < (this.radius + otherObject.radius);
}

MovingObject.prototype.collideWith = function(otherObject) {
    // We'll do nothing here by default. Actual logic for handling collisions will happen in the subclasses of MovingObject.
}

MovingObject.prototype.isWrappable = function() {
    // All moving objects are wrappable by default. This is an abstract method, so we'll let subclasses decide what to do.
    return true
}

module.exports = MovingObject;