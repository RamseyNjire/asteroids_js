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

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst COLOR = '#00FF00';\nconst RADIUS = 10;\n\nfunction Asteroid(initialAttributes){\n    this.color = COLOR;\n    this.radius = RADIUS;\n\n    MovingObject.call(this, {\n        position: initialAttributes.position,\n        game: initialAttributes.game,\n        velocity: Util.randomVector(2),\n        radius: this.radius,\n        color: this.color\n    });\n};\n\n\nUtil.setUpInheritance(Asteroid, MovingObject);\n\n\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\nconst GAME_WIDTH = 300;\nconst GAME_LENGTH = 300;\nconst NUM_ASTEROIDS = 10;\n\nfunction Game() {    \n    this.asteroids = [];\n    this.width = GAME_WIDTH;\n    this.length = GAME_LENGTH;\n}\n\n\nGame.prototype.addAsteroids = function() {\n    for (let i = 0; i < NUM_ASTEROIDS; i++) {\n        this.asteroids.push(new Asteroid({\n            position: this.randomPosition(),\n            game: this\n        }));\n    }\n};\n\nGame.prototype.randomPosition = function() {\n    return [Math.random() * GAME_WIDTH, Math.random() * GAME_LENGTH];\n};\n\nGame.prototype.draw = function (context) {\n    context.clearRect(0, 0, this.width, this.length);\n    this.asteroids.forEach( asteroid => asteroid.draw(context));\n};\n\nGame.prototype.moveObjects = function () {\n    this.asteroids.forEach(asteroid => asteroid.move());\n};\n\nGame.prototype.wrap = function(position) {\n    position[0] = position[0] % this.width;\n    position[1] = position[1] % this.length;\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nfunction GameView(context) {\n    this.context = context;\n    this.game = new Game();\n}\n\nGameView.prototype.start = function() {\n    const game = this.game;\n    const context = this.context;\n    game.addAsteroids();\n    const intervalID = setInterval(function(){\n        game.moveObjects();\n        game.draw(context);\n    }, 20);\n};\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\nwindow.addEventListener('DOMContentLoaded', function(event) {\n    const canvas = document.getElementById('game-canvas');\n    const context = canvas.getContext('2d');\n    const gameView = new GameView(context);\n\n    gameView.start();\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("// This is the base class for all moving objects. It takes in some initial attributes and also has general draw and move methods based on the assumption that our moving objects will be circles.\n\nfunction MovingObject(initialAttributes) {\n    this.position = initialAttributes.position;\n    this.velocity = initialAttributes.velocity;\n    this.radius = initialAttributes.radius;\n    this.color = initialAttributes.color;\n    this.game = initialAttributes.game;\n}\n\nMovingObject.prototype.draw = function(context) {\n    context.fillStyle = this.color;\n    context.beginPath();\n    context.arc(this.position[0], this.position[1], this.radius, 0, 2 * Math.PI, false);\n    context.fill();\n};\n\nMovingObject.prototype.move = function() {\n    this.position[0] += this.velocity[0];\n    this.position[1] += this.velocity[1];\n\n    this.game.wrap(this.position);\n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

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