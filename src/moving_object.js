function MovingObject(initialAttributes){
    this.position = initialAttributes.position;
    this.velocity = initialAttributes.velocity;
    this.radius = initialAttributes.radius;
    this.color = initialAttributes.color;
}

MovingObject.prototype.draw = function(context){
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.position[0], this.position[1], this.radius, 0, 2 * Math.PI, false);
    context.fill();
};

module.exports = MovingObject;