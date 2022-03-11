/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst COLOR = '#00FF00';\nconst RADIUS = 10;\n\nfunction Asteroid(initialAttributes){\n    this.color = COLOR;\n    this.radius = RADIUS;\n\n    MovingObject.call(this, {\n        position: initialAttributes.position,\n        velocity: Util.randomVector(10),\n        radius: this.radius,\n        color: this.color\n    });\n};\n\n\nUtil.setUpInheritance(Asteroid, MovingObject);\n\n\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\nwindow.MovingObject = MovingObject;\n\nwindow.addEventListener('DOMContentLoaded', function(event) {\n    const canvas = document.getElementById('game-canvas');\n    const context = canvas.getContext('2d');\n    const asteroid = new Asteroid({\n        position: [50, 50],\n    });\n\n    asteroid.draw(context);\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("// This is the base class for all moving objects. It takes in some initial attributes and also has general draw and move methods based on the assumption that our moving objects will be circles.\n\nfunction MovingObject(initialAttributes) {\n    this.position = initialAttributes.position;\n    this.velocity = initialAttributes.velocity;\n    this.radius = initialAttributes.radius;\n    this.color = initialAttributes.color;\n}\n\nMovingObject.prototype.draw = function(context) {\n    context.fillStyle = this.color;\n    context.beginPath();\n    context.arc(this.position[0], this.position[1], this.radius, 0, 2 * Math.PI, false);\n    context.fill();\n};\n\nMovingObject.prototype.move = function() {\n    this.position[0] += this.velocity[0];\n    this.position[1] += this.velocity[1];\n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("// This is my utilities object, which will hold common methods and properties that can be shared between classes.\nconst Util = {\n    // Setting up prototypal inheritance between a child and its parent.\n    setUpInheritance: function(childClass, parentClass) {\n        function Surrogate() {}\n        Surrogate.prototype = parentClass.prototype;\n        childClass.prototype = new Surrogate();\n        childClass.prototype.constructor = childClass;\n    },\n\n    // This method scales a vector by a given magnitude.\n\n    scale: function(vector, scalar) {\n        return [vector[0] * scalar, vector[1] * scalar];\n    },\n\n    // Creating a randomly oriented vector with a given magnitude.\n\n    randomVector: function(length) {\n        const degree = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(degree), Math.cos(degree)], length);\n    }\n    \n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;