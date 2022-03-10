// This is my utilities object, which will hold common methods and properties that can be shared between classes.
const Util = {
    // Setting up prototypal inheritance between a child and its parent.
    setUpInheritance: function(childClass, parentClass) {
        function Surrogate() {}
        Surrogate.prototype = parentClass.prototype;
        childClass.prototype = new Surrogate();
        childClass.prototype.constructor = childClass;
    },

    // This method scales a vector by a given magnitude.

    scale: function(vector, scalar) {
        return [vector[0] * scalar, vector[1] * scalar];
    },

    // Creating a randomly oriented vector with a given magnitude.

    randomVector: function(length) {
        const degree = 2 * Math.PI * Math.random();
        return Util.scale([Math.sin(deg), Math.cos(deg)], length);
    }
    
};

module.exports = Util;