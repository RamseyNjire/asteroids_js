// This is my utilities object, which will hold common methods and properties that can be shared between classes.
const Util = {
    inherits(childClass, parentClass) {
        function Surrogate() {}
        Surrogate.prototype = parentClass.prototype;
        childClass.prototype = new Surrogate();
        childClass.prototype.constructor = childClass;
    }
};