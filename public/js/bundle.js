/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _index = __webpack_require__(1);

	var _index2 = _interopRequireDefault(_index);

	var _App = __webpack_require__(121);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	document.body.appendChild(new _App2.default());

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.historyRecords = exports.matchRecord = exports.matchRecords = exports.matchRecordSearch = exports.notification = undefined;

	var _Notification = __webpack_require__(2);

	var _Notification2 = _interopRequireDefault(_Notification);

	var _MatchRecordSearch = __webpack_require__(90);

	var _MatchRecordSearch2 = _interopRequireDefault(_MatchRecordSearch);

	var _MatchRecords = __webpack_require__(118);

	var _MatchRecords2 = _interopRequireDefault(_MatchRecords);

	var _MatchRecord = __webpack_require__(119);

	var _MatchRecord2 = _interopRequireDefault(_MatchRecord);

	var _HistoryRecords = __webpack_require__(120);

	var _HistoryRecords2 = _interopRequireDefault(_HistoryRecords);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var notification = exports.notification = new _Notification2.default();
	var matchRecordSearch = exports.matchRecordSearch = new _MatchRecordSearch2.default();
	var matchRecords = exports.matchRecords = new _MatchRecords2.default();
	var matchRecord = exports.matchRecord = new _MatchRecord2.default();
	var historyRecords = exports.historyRecords = new _HistoryRecords2.default();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;

	var _assign = __webpack_require__(3);

	var _assign2 = _interopRequireDefault(_assign);

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(46);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _events = __webpack_require__(88);

	var _events2 = _interopRequireDefault(_events);

	var _dispatcher = __webpack_require__(89);

	var _dispatcher2 = _interopRequireDefault(_dispatcher);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initialState = {
		text: '',
		displayTime: 0,
		displayId: 0
	};

	var Notification = function (_Emitter) {
		(0, _inherits3.default)(Notification, _Emitter);

		function Notification() {
			(0, _classCallCheck3.default)(this, Notification);

			var _this = (0, _possibleConstructorReturn3.default)(this, (Notification.__proto__ || (0, _getPrototypeOf2.default)(Notification)).call(this));

			(0, _assign2.default)(_this, initialState);

			_dispatcher2.default.on('fetchMatchRecordsFaild', function () {
				_this.displayId++;
				_this.displayTime = 5000;
				_this.text = '対局の読み込みに失敗しました';

				_this.emit('CHANGE');
			});

			_dispatcher2.default.on('fetchKifuFailed', function () {
				_this.displayId++;
				_this.displayTime = 5000;
				_this.text = '棋譜の読み込みに失敗しました';

				_this.emit('CHANGE');
			});

			_dispatcher2.default.on('copyKifu', function () {
				_this.displayId++;
				_this.displayTime = 7000;
				_this.text = '棋譜をクリップボードにコピーしました';

				_this.emit('CHANGE');
			});
			return _this;
		}

		return Notification;
	}(_events2.default);

	exports.default = Notification;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(4), __esModule: true };

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(5);
	module.exports = __webpack_require__(8).Object.assign;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(6);

	$export($export.S + $export.F, 'Object', { assign: __webpack_require__(21) });


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(7);
	var core = __webpack_require__(8);
	var ctx = __webpack_require__(9);
	var hide = __webpack_require__(11);
	var PROTOTYPE = 'prototype';

	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var IS_WRAP = type & $export.W;
	  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	  var expProto = exports[PROTOTYPE];
	  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
	  var key, own, out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && key in exports) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function (C) {
	      var F = function (a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0: return new C();
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	module.exports = $export;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	var core = module.exports = { version: '2.5.3' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(10);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(12);
	var createDesc = __webpack_require__(20);
	module.exports = __webpack_require__(16) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(13);
	var IE8_DOM_DEFINE = __webpack_require__(15);
	var toPrimitive = __webpack_require__(19);
	var dP = Object.defineProperty;

	exports.f = __webpack_require__(16) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(14);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(16) && !__webpack_require__(17)(function () {
	  return Object.defineProperty(__webpack_require__(18)('div'), 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(17)(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(14);
	var document = __webpack_require__(7).document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(14);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys = __webpack_require__(22);
	var gOPS = __webpack_require__(37);
	var pIE = __webpack_require__(38);
	var toObject = __webpack_require__(39);
	var IObject = __webpack_require__(26);
	var $assign = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(17)(function () {
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line no-undef
	  var S = Symbol();
	  var K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) { B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
	  var T = toObject(target);
	  var aLen = arguments.length;
	  var index = 1;
	  var getSymbols = gOPS.f;
	  var isEnum = pIE.f;
	  while (aLen > index) {
	    var S = IObject(arguments[index++]);
	    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	  } return T;
	} : $assign;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(23);
	var enumBugKeys = __webpack_require__(36);

	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	var has = __webpack_require__(24);
	var toIObject = __webpack_require__(25);
	var arrayIndexOf = __webpack_require__(29)(false);
	var IE_PROTO = __webpack_require__(33)('IE_PROTO');

	module.exports = function (object, names) {
	  var O = toIObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(26);
	var defined = __webpack_require__(28);
	module.exports = function (it) {
	  return IObject(defined(it));
	};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(27);
	// eslint-disable-next-line no-prototype-builtins
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

	var toString = {}.toString;

	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(25);
	var toLength = __webpack_require__(30);
	var toAbsoluteIndex = __webpack_require__(32);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(31);
	var min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(31);
	var max = Math.max;
	var min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(34)('keys');
	var uid = __webpack_require__(35);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(7);
	var SHARED = '__core-js_shared__';
	var store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

	var id = 0;
	var px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');


/***/ }),
/* 37 */
/***/ (function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

	exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(28);
	module.exports = function (it) {
	  return Object(defined(it));
	};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(41), __esModule: true };

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(42);
	module.exports = __webpack_require__(8).Object.getPrototypeOf;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(39);
	var $getPrototypeOf = __webpack_require__(43);

	__webpack_require__(44)('getPrototypeOf', function () {
	  return function getPrototypeOf(it) {
	    return $getPrototypeOf(toObject(it));
	  };
	});


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(24);
	var toObject = __webpack_require__(39);
	var IE_PROTO = __webpack_require__(33)('IE_PROTO');
	var ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(6);
	var core = __webpack_require__(8);
	var fails = __webpack_require__(17);
	module.exports = function (KEY, exec) {
	  var fn = (core.Object || {})[KEY] || Object[KEY];
	  var exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
	};


/***/ }),
/* 45 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(47);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(48);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(67);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(49), __esModule: true };

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(50);
	__webpack_require__(62);
	module.exports = __webpack_require__(66).f('iterator');


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at = __webpack_require__(51)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(52)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(31);
	var defined = __webpack_require__(28);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that));
	    var i = toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(53);
	var $export = __webpack_require__(6);
	var redefine = __webpack_require__(54);
	var hide = __webpack_require__(11);
	var has = __webpack_require__(24);
	var Iterators = __webpack_require__(55);
	var $iterCreate = __webpack_require__(56);
	var setToStringTag = __webpack_require__(60);
	var getPrototypeOf = __webpack_require__(43);
	var ITERATOR = __webpack_require__(61)('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';

	var returnThis = function () { return this; };

	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};


/***/ }),
/* 53 */
/***/ (function(module, exports) {

	module.exports = true;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(11);


/***/ }),
/* 55 */
/***/ (function(module, exports) {

	module.exports = {};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var create = __webpack_require__(57);
	var descriptor = __webpack_require__(20);
	var setToStringTag = __webpack_require__(60);
	var IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(11)(IteratorPrototype, __webpack_require__(61)('iterator'), function () { return this; });

	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(13);
	var dPs = __webpack_require__(58);
	var enumBugKeys = __webpack_require__(36);
	var IE_PROTO = __webpack_require__(33)('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(18)('iframe');
	  var i = enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(59).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(12);
	var anObject = __webpack_require__(13);
	var getKeys = __webpack_require__(22);

	module.exports = __webpack_require__(16) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	var document = __webpack_require__(7).document;
	module.exports = document && document.documentElement;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(12).f;
	var has = __webpack_require__(24);
	var TAG = __webpack_require__(61)('toStringTag');

	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	var store = __webpack_require__(34)('wks');
	var uid = __webpack_require__(35);
	var Symbol = __webpack_require__(7).Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(63);
	var global = __webpack_require__(7);
	var hide = __webpack_require__(11);
	var Iterators = __webpack_require__(55);
	var TO_STRING_TAG = __webpack_require__(61)('toStringTag');

	var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
	  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
	  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
	  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
	  'TextTrackList,TouchList').split(',');

	for (var i = 0; i < DOMIterables.length; i++) {
	  var NAME = DOMIterables[i];
	  var Collection = global[NAME];
	  var proto = Collection && Collection.prototype;
	  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(64);
	var step = __webpack_require__(65);
	var Iterators = __webpack_require__(55);
	var toIObject = __webpack_require__(25);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(52)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');


/***/ }),
/* 64 */
/***/ (function(module, exports) {

	module.exports = function () { /* empty */ };


/***/ }),
/* 65 */
/***/ (function(module, exports) {

	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(61);


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(68), __esModule: true };

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(69);
	__webpack_require__(77);
	__webpack_require__(78);
	__webpack_require__(79);
	module.exports = __webpack_require__(8).Symbol;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global = __webpack_require__(7);
	var has = __webpack_require__(24);
	var DESCRIPTORS = __webpack_require__(16);
	var $export = __webpack_require__(6);
	var redefine = __webpack_require__(54);
	var META = __webpack_require__(70).KEY;
	var $fails = __webpack_require__(17);
	var shared = __webpack_require__(34);
	var setToStringTag = __webpack_require__(60);
	var uid = __webpack_require__(35);
	var wks = __webpack_require__(61);
	var wksExt = __webpack_require__(66);
	var wksDefine = __webpack_require__(71);
	var enumKeys = __webpack_require__(72);
	var isArray = __webpack_require__(73);
	var anObject = __webpack_require__(13);
	var isObject = __webpack_require__(14);
	var toIObject = __webpack_require__(25);
	var toPrimitive = __webpack_require__(19);
	var createDesc = __webpack_require__(20);
	var _create = __webpack_require__(57);
	var gOPNExt = __webpack_require__(74);
	var $GOPD = __webpack_require__(76);
	var $DP = __webpack_require__(12);
	var $keys = __webpack_require__(22);
	var gOPD = $GOPD.f;
	var dP = $DP.f;
	var gOPN = gOPNExt.f;
	var $Symbol = global.Symbol;
	var $JSON = global.JSON;
	var _stringify = $JSON && $JSON.stringify;
	var PROTOTYPE = 'prototype';
	var HIDDEN = wks('_hidden');
	var TO_PRIMITIVE = wks('toPrimitive');
	var isEnum = {}.propertyIsEnumerable;
	var SymbolRegistry = shared('symbol-registry');
	var AllSymbols = shared('symbols');
	var OPSymbols = shared('op-symbols');
	var ObjectProto = Object[PROTOTYPE];
	var USE_NATIVE = typeof $Symbol == 'function';
	var QObject = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function () {
	  return _create(dP({}, 'a', {
	    get: function () { return dP(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function (tag) {
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if (has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _create(D, { enumerable: createDesc(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P));
	  var i = 0;
	  var l = keys.length;
	  var key;
	  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject(it);
	  key = toPrimitive(key, true);
	  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	  var D = gOPD(it, key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN(toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto;
	  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function (value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f = $defineProperty;
	  __webpack_require__(75).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(38).f = $propertyIsEnumerable;
	  __webpack_require__(37).f = $getOwnPropertySymbols;

	  if (DESCRIPTORS && !__webpack_require__(53)) {
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function (name) {
	    return wrap(wks(name));
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

	for (var es6Symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

	for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function (key) {
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
	    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
	  },
	  useSetter: function () { setter = true; },
	  useSimple: function () { setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    var args = [it];
	    var i = 1;
	    var replacer, $replacer;
	    while (arguments.length > i) args.push(arguments[i++]);
	    $replacer = replacer = args[1];
	    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    if (!isArray(replacer)) replacer = function (key, value) {
	      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(11)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	var META = __webpack_require__(35)('meta');
	var isObject = __webpack_require__(14);
	var has = __webpack_require__(24);
	var setDesc = __webpack_require__(12).f;
	var id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !__webpack_require__(17)(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function (it) {
	  setDesc(it, META, { value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  } });
	};
	var fastKey = function (it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function (it, create) {
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(7);
	var core = __webpack_require__(8);
	var LIBRARY = __webpack_require__(53);
	var wksExt = __webpack_require__(66);
	var defineProperty = __webpack_require__(12).f;
	module.exports = function (name) {
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
	};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(22);
	var gOPS = __webpack_require__(37);
	var pIE = __webpack_require__(38);
	module.exports = function (it) {
	  var result = getKeys(it);
	  var getSymbols = gOPS.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it);
	    var isEnum = pIE.f;
	    var i = 0;
	    var key;
	    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
	  } return result;
	};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(27);
	module.exports = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
	};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(25);
	var gOPN = __webpack_require__(75).f;
	var toString = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys = __webpack_require__(23);
	var hiddenKeys = __webpack_require__(36).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
	};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	var pIE = __webpack_require__(38);
	var createDesc = __webpack_require__(20);
	var toIObject = __webpack_require__(25);
	var toPrimitive = __webpack_require__(19);
	var has = __webpack_require__(24);
	var IE8_DOM_DEFINE = __webpack_require__(15);
	var gOPD = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(16) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
	  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
	};


/***/ }),
/* 77 */
/***/ (function(module, exports) {

	

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(71)('asyncIterator');


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(71)('observable');


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(81);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(85);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(47);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(82), __esModule: true };

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(83);
	module.exports = __webpack_require__(8).Object.setPrototypeOf;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(6);
	$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(84).set });


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(14);
	var anObject = __webpack_require__(13);
	var check = function (O, proto) {
	  anObject(O);
	  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function (test, buggy, set) {
	      try {
	        set = __webpack_require__(9)(Function.call, __webpack_require__(76).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch (e) { buggy = true; }
	      return function setPrototypeOf(O, proto) {
	        check(O, proto);
	        if (buggy) O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(86), __esModule: true };

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(87);
	var $Object = __webpack_require__(8).Object;
	module.exports = function create(P, D) {
	  return $Object.create(P, D);
	};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(6);
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', { create: __webpack_require__(57) });


/***/ }),
/* 88 */
/***/ (function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events)
	    this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler))
	    return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events)
	    this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type])
	    return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);

	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0)
	      return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;

	  if (!this._events)
	    return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _events = __webpack_require__(88);

	var _events2 = _interopRequireDefault(_events);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = new _events2.default();

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;

	var _regenerator = __webpack_require__(91);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _asyncToGenerator2 = __webpack_require__(94);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var _stringify = __webpack_require__(116);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _assign = __webpack_require__(3);

	var _assign2 = _interopRequireDefault(_assign);

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(46);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _events = __webpack_require__(88);

	var _events2 = _interopRequireDefault(_events);

	var _dispatcher = __webpack_require__(89);

	var _dispatcher2 = _interopRequireDefault(_dispatcher);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initialState = {
		searchId: '',
		start: 0,
		interval: 10,
		urls: {
			'10切れ': 'https://shogiwars.heroz.jp/users/history/:id?start=:start',
			'3切れ': 'https://shogiwars.heroz.jp/users/history/:id?gtype=sb&start=:start',
			'10秒': 'https://shogiwars.heroz.jp/users/history/:id?gtype=s1&start=:start'
		},
		isLimit: false,
		isFetching: false
	};

	var MatchRecordSearch = function (_Emitter) {
		(0, _inherits3.default)(MatchRecordSearch, _Emitter);

		function MatchRecordSearch() {
			var _this2 = this;

			(0, _classCallCheck3.default)(this, MatchRecordSearch);

			var _this = (0, _possibleConstructorReturn3.default)(this, (MatchRecordSearch.__proto__ || (0, _getPrototypeOf2.default)(MatchRecordSearch)).call(this));

			(0, _assign2.default)(_this, JSON.parse((0, _stringify2.default)(initialState)));

			_dispatcher2.default.on('inputSearchId', function (value) {
				_this.searchId = value;
				_this.emit();
			});

			_dispatcher2.default.on('fetchMatchRecords', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_this.isFetching = true;
								_this.emit('CHANGE');

							case 2:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this2);
			})));

			_dispatcher2.default.on('fetchMatchRecordsFailed', function () {
				_this.isFetching = false;
				_this.emit('CHANGE');
			});

			_dispatcher2.default.on('fetchMatchRecordsSuccessful', function (records) {
				_this.isFetching = false;
				if (records.length < _this.interval) {
					//もう読み込む対局が無い時;
					_this.isLimit = true;
					_this.start += records.length;
				} else {
					_this.start += _this.interval;
				}

				_this.emit('CHANGE');
			});

			_dispatcher2.default.on('unmountIndex', function () {
				(0, _assign2.default)(_this, JSON.parse((0, _stringify2.default)(initialState)));
				_this.emit('CHANGE');
			});
			return _this;
		}

		return MatchRecordSearch;
	}(_events2.default);

	exports.default = MatchRecordSearch;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(92);


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g = (function() { return this })() || Function("return this")();

	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime &&
	  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;

	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;

	module.exports = __webpack_require__(93);

	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  try {
	    delete g.regeneratorRuntime;
	  } catch(e) {
	    g.regeneratorRuntime = undefined;
	  }
	}


/***/ }),
/* 93 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	!(function(global) {
	  "use strict";

	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }

	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  runtime.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };

	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }

	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] =
	    GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  runtime.awrap = function(arg) {
	    return { __await: arg };
	  };

	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return Promise.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);
	  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
	    return this;
	  };
	  runtime.AsyncIterator = AsyncIterator;

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );

	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      context.method = method;
	      context.arg = arg;

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }

	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;

	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }

	          context.dispatchException(context.arg);

	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          if (record.arg === ContinueSentinel) {
	            continue;
	          }

	          return {
	            value: record.arg,
	            done: context.done
	          };

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }

	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;

	      if (context.method === "throw") {
	        if (delegate.iterator.return) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined;
	          maybeInvokeDelegate(delegate, context);

	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }

	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }

	      return ContinueSentinel;
	    }

	    var record = tryCatch(method, delegate.iterator, context.arg);

	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    var info = record.arg;

	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;

	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;

	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined;
	      }

	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }

	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[toStringTagSymbol] = "Generator";

	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };

	  Gp.toString = function() {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.method = "next";
	      this.arg = undefined;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;

	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined;
	        }

	        return !! caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }

	      return this.complete(record);
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }

	      return ContinueSentinel;
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined;
	      }

	      return ContinueSentinel;
	    }
	  };
	})(
	  // In sloppy mode, unbound `this` refers to the global object, fallback to
	  // Function constructor if we're in global strict mode. That is sadly a form
	  // of indirect eval which violates Content Security Policy.
	  (function() { return this })() || Function("return this")()
	);


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _promise = __webpack_require__(95);

	var _promise2 = _interopRequireDefault(_promise);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (fn) {
	  return function () {
	    var gen = fn.apply(this, arguments);
	    return new _promise2.default(function (resolve, reject) {
	      function step(key, arg) {
	        try {
	          var info = gen[key](arg);
	          var value = info.value;
	        } catch (error) {
	          reject(error);
	          return;
	        }

	        if (info.done) {
	          resolve(value);
	        } else {
	          return _promise2.default.resolve(value).then(function (value) {
	            step("next", value);
	          }, function (err) {
	            step("throw", err);
	          });
	        }
	      }

	      return step("next");
	    });
	  };
	};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(96), __esModule: true };

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(77);
	__webpack_require__(50);
	__webpack_require__(62);
	__webpack_require__(97);
	__webpack_require__(114);
	__webpack_require__(115);
	module.exports = __webpack_require__(8).Promise;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(53);
	var global = __webpack_require__(7);
	var ctx = __webpack_require__(9);
	var classof = __webpack_require__(98);
	var $export = __webpack_require__(6);
	var isObject = __webpack_require__(14);
	var aFunction = __webpack_require__(10);
	var anInstance = __webpack_require__(99);
	var forOf = __webpack_require__(100);
	var speciesConstructor = __webpack_require__(104);
	var task = __webpack_require__(105).set;
	var microtask = __webpack_require__(107)();
	var newPromiseCapabilityModule = __webpack_require__(108);
	var perform = __webpack_require__(109);
	var promiseResolve = __webpack_require__(110);
	var PROMISE = 'Promise';
	var TypeError = global.TypeError;
	var process = global.process;
	var $Promise = global[PROMISE];
	var isNode = classof(process) == 'process';
	var empty = function () { /* empty */ };
	var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
	var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

	var USE_NATIVE = !!function () {
	  try {
	    // correct subclassing with @@species support
	    var promise = $Promise.resolve(1);
	    var FakePromise = (promise.constructor = {})[__webpack_require__(61)('species')] = function (exec) {
	      exec(empty, empty);
	    };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch (e) { /* empty */ }
	}();

	// helpers
	var isThenable = function (it) {
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var notify = function (promise, isReject) {
	  if (promise._n) return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function () {
	    var value = promise._v;
	    var ok = promise._s == 1;
	    var i = 0;
	    var run = function (reaction) {
	      var handler = ok ? reaction.ok : reaction.fail;
	      var resolve = reaction.resolve;
	      var reject = reaction.reject;
	      var domain = reaction.domain;
	      var result, then;
	      try {
	        if (handler) {
	          if (!ok) {
	            if (promise._h == 2) onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if (handler === true) result = value;
	          else {
	            if (domain) domain.enter();
	            result = handler(value);
	            if (domain) domain.exit();
	          }
	          if (result === reaction.promise) {
	            reject(TypeError('Promise-chain cycle'));
	          } else if (then = isThenable(result)) {
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch (e) {
	        reject(e);
	      }
	    };
	    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if (isReject && !promise._h) onUnhandled(promise);
	  });
	};
	var onUnhandled = function (promise) {
	  task.call(global, function () {
	    var value = promise._v;
	    var unhandled = isUnhandled(promise);
	    var result, handler, console;
	    if (unhandled) {
	      result = perform(function () {
	        if (isNode) {
	          process.emit('unhandledRejection', value, promise);
	        } else if (handler = global.onunhandledrejection) {
	          handler({ promise: promise, reason: value });
	        } else if ((console = global.console) && console.error) {
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if (unhandled && result.e) throw result.v;
	  });
	};
	var isUnhandled = function (promise) {
	  return promise._h !== 1 && (promise._a || promise._c).length === 0;
	};
	var onHandleUnhandled = function (promise) {
	  task.call(global, function () {
	    var handler;
	    if (isNode) {
	      process.emit('rejectionHandled', promise);
	    } else if (handler = global.onrejectionhandled) {
	      handler({ promise: promise, reason: promise._v });
	    }
	  });
	};
	var $reject = function (value) {
	  var promise = this;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if (!promise._a) promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function (value) {
	  var promise = this;
	  var then;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if (promise === value) throw TypeError("Promise can't be resolved itself");
	    if (then = isThenable(value)) {
	      microtask(function () {
	        var wrapper = { _w: promise, _d: false }; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch (e) {
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch (e) {
	    $reject.call({ _w: promise, _d: false }, e); // wrap
	  }
	};

	// constructor polyfill
	if (!USE_NATIVE) {
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor) {
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch (err) {
	      $reject.call(this, err);
	    }
	  };
	  // eslint-disable-next-line no-unused-vars
	  Internal = function Promise(executor) {
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(111)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected) {
	      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if (this._a) this._a.push(reaction);
	      if (this._s) notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function (onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	  OwnPromiseCapability = function () {
	    var promise = new Internal();
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject = ctx($reject, promise, 1);
	  };
	  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
	    return C === $Promise || C === Wrapper
	      ? new OwnPromiseCapability(C)
	      : newGenericPromiseCapability(C);
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
	__webpack_require__(60)($Promise, PROMISE);
	__webpack_require__(112)(PROMISE);
	Wrapper = __webpack_require__(8)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r) {
	    var capability = newPromiseCapability(this);
	    var $$reject = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x) {
	    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(113)(function (iter) {
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform(function () {
	      var values = [];
	      var index = 0;
	      var remaining = 1;
	      forOf(iterable, false, function (promise) {
	        var $index = index++;
	        var alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var reject = capability.reject;
	    var result = perform(function () {
	      forOf(iterable, false, function (promise) {
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  }
	});


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(27);
	var TAG = __webpack_require__(61)('toStringTag');
	// ES3 wrong here
	var ARG = cof(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (e) { /* empty */ }
	};

	module.exports = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};


/***/ }),
/* 99 */
/***/ (function(module, exports) {

	module.exports = function (it, Constructor, name, forbiddenField) {
	  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	var ctx = __webpack_require__(9);
	var call = __webpack_require__(101);
	var isArrayIter = __webpack_require__(102);
	var anObject = __webpack_require__(13);
	var toLength = __webpack_require__(30);
	var getIterFn = __webpack_require__(103);
	var BREAK = {};
	var RETURN = {};
	var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
	  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
	  var f = ctx(fn, that, entries ? 2 : 1);
	  var index = 0;
	  var length, step, iterator, result;
	  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if (result === BREAK || result === RETURN) return result;
	  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
	    result = call(iterator, f, step.value, entries);
	    if (result === BREAK || result === RETURN) return result;
	  }
	};
	exports.BREAK = BREAK;
	exports.RETURN = RETURN;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(13);
	module.exports = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
	};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators = __webpack_require__(55);
	var ITERATOR = __webpack_require__(61)('iterator');
	var ArrayProto = Array.prototype;

	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	var classof = __webpack_require__(98);
	var ITERATOR = __webpack_require__(61)('iterator');
	var Iterators = __webpack_require__(55);
	module.exports = __webpack_require__(8).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject = __webpack_require__(13);
	var aFunction = __webpack_require__(10);
	var SPECIES = __webpack_require__(61)('species');
	module.exports = function (O, D) {
	  var C = anObject(O).constructor;
	  var S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	var ctx = __webpack_require__(9);
	var invoke = __webpack_require__(106);
	var html = __webpack_require__(59);
	var cel = __webpack_require__(18);
	var global = __webpack_require__(7);
	var process = global.process;
	var setTask = global.setImmediate;
	var clearTask = global.clearImmediate;
	var MessageChannel = global.MessageChannel;
	var Dispatch = global.Dispatch;
	var counter = 0;
	var queue = {};
	var ONREADYSTATECHANGE = 'onreadystatechange';
	var defer, channel, port;
	var run = function () {
	  var id = +this;
	  // eslint-disable-next-line no-prototype-builtins
	  if (queue.hasOwnProperty(id)) {
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function (event) {
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!setTask || !clearTask) {
	  setTask = function setImmediate(fn) {
	    var args = [];
	    var i = 1;
	    while (arguments.length > i) args.push(arguments[i++]);
	    queue[++counter] = function () {
	      // eslint-disable-next-line no-new-func
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (__webpack_require__(27)(process) == 'process') {
	    defer = function (id) {
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Sphere (JS game engine) Dispatch API
	  } else if (Dispatch && Dispatch.now) {
	    defer = function (id) {
	      Dispatch.now(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if (MessageChannel) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
	    defer = function (id) {
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if (ONREADYSTATECHANGE in cel('script')) {
	    defer = function (id) {
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function (id) {
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set: setTask,
	  clear: clearTask
	};


/***/ }),
/* 106 */
/***/ (function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function (fn, args, that) {
	  var un = that === undefined;
	  switch (args.length) {
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return fn.apply(that, args);
	};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(7);
	var macrotask = __webpack_require__(105).set;
	var Observer = global.MutationObserver || global.WebKitMutationObserver;
	var process = global.process;
	var Promise = global.Promise;
	var isNode = __webpack_require__(27)(process) == 'process';

	module.exports = function () {
	  var head, last, notify;

	  var flush = function () {
	    var parent, fn;
	    if (isNode && (parent = process.domain)) parent.exit();
	    while (head) {
	      fn = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch (e) {
	        if (head) notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if (parent) parent.enter();
	  };

	  // Node.js
	  if (isNode) {
	    notify = function () {
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
	  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
	    var toggle = true;
	    var node = document.createTextNode('');
	    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
	    notify = function () {
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if (Promise && Promise.resolve) {
	    var promise = Promise.resolve();
	    notify = function () {
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function () {
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }

	  return function (fn) {
	    var task = { fn: fn, next: undefined };
	    if (last) last.next = task;
	    if (!head) {
	      head = task;
	      notify();
	    } last = task;
	  };
	};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 25.4.1.5 NewPromiseCapability(C)
	var aFunction = __webpack_require__(10);

	function PromiseCapability(C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject = aFunction(reject);
	}

	module.exports.f = function (C) {
	  return new PromiseCapability(C);
	};


/***/ }),
/* 109 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return { e: false, v: exec() };
	  } catch (e) {
	    return { e: true, v: e };
	  }
	};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(13);
	var isObject = __webpack_require__(14);
	var newPromiseCapability = __webpack_require__(108);

	module.exports = function (C, x) {
	  anObject(C);
	  if (isObject(x) && x.constructor === C) return x;
	  var promiseCapability = newPromiseCapability.f(C);
	  var resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
	};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(11);
	module.exports = function (target, src, safe) {
	  for (var key in src) {
	    if (safe && target[key]) target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global = __webpack_require__(7);
	var core = __webpack_require__(8);
	var dP = __webpack_require__(12);
	var DESCRIPTORS = __webpack_require__(16);
	var SPECIES = __webpack_require__(61)('species');

	module.exports = function (KEY) {
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
	    configurable: true,
	    get: function () { return this; }
	  });
	};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	var ITERATOR = __webpack_require__(61)('iterator');
	var SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function () { SAFE_CLOSING = true; };
	  // eslint-disable-next-line no-throw-literal
	  Array.from(riter, function () { throw 2; });
	} catch (e) { /* empty */ }

	module.exports = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7];
	    var iter = arr[ITERATOR]();
	    iter.next = function () { return { done: safe = true }; };
	    arr[ITERATOR] = function () { return iter; };
	    exec(arr);
	  } catch (e) { /* empty */ }
	  return safe;
	};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-promise-finally
	'use strict';
	var $export = __webpack_require__(6);
	var core = __webpack_require__(8);
	var global = __webpack_require__(7);
	var speciesConstructor = __webpack_require__(104);
	var promiseResolve = __webpack_require__(110);

	$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
	  var C = speciesConstructor(this, core.Promise || global.Promise);
	  var isFunction = typeof onFinally == 'function';
	  return this.then(
	    isFunction ? function (x) {
	      return promiseResolve(C, onFinally()).then(function () { return x; });
	    } : onFinally,
	    isFunction ? function (e) {
	      return promiseResolve(C, onFinally()).then(function () { throw e; });
	    } : onFinally
	  );
	} });


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-promise-try
	var $export = __webpack_require__(6);
	var newPromiseCapability = __webpack_require__(108);
	var perform = __webpack_require__(109);

	$export($export.S, 'Promise', { 'try': function (callbackfn) {
	  var promiseCapability = newPromiseCapability.f(this);
	  var result = perform(callbackfn);
	  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
	  return promiseCapability.promise;
	} });


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(117), __esModule: true };

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	var core = __webpack_require__(8);
	var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
	module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;

	var _stringify = __webpack_require__(116);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _assign = __webpack_require__(3);

	var _assign2 = _interopRequireDefault(_assign);

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(46);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _events = __webpack_require__(88);

	var _events2 = _interopRequireDefault(_events);

	var _dispatcher = __webpack_require__(89);

	var _dispatcher2 = _interopRequireDefault(_dispatcher);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initialState = {
		records: []
	};

	var MatchRecords = function (_Emitter) {
		(0, _inherits3.default)(MatchRecords, _Emitter);

		function MatchRecords() {
			(0, _classCallCheck3.default)(this, MatchRecords);

			var _this = (0, _possibleConstructorReturn3.default)(this, (MatchRecords.__proto__ || (0, _getPrototypeOf2.default)(MatchRecords)).call(this));

			(0, _assign2.default)(_this, JSON.parse((0, _stringify2.default)(initialState)));

			_dispatcher2.default.on('fetchMatchRecordsSuccessful', function (records) {
				if (records.length === 0) return;

				_this.records = _this.records.concat(records);
				_this.records.sort(function (a, b) {
					var aTime = new Date(a.time).getTime();
					var bTime = new Date(b.time).getTime();
					if (aTime > bTime) return -1;
					if (aTime < bTime) return 1;
					return 0;
				});

				_this.emit('CHANGE');
			});

			_dispatcher2.default.on('unmountIndex', function () {
				(0, _assign2.default)(_this, JSON.parse((0, _stringify2.default)(initialState)));
				_this.emit('CHANGE');
			});
			return _this;
		}

		return MatchRecords;
	}(_events2.default);

	exports.default = MatchRecords;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;

	var _stringify = __webpack_require__(116);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _assign = __webpack_require__(3);

	var _assign2 = _interopRequireDefault(_assign);

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(46);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _events = __webpack_require__(88);

	var _events2 = _interopRequireDefault(_events);

	var _dispatcher = __webpack_require__(89);

	var _dispatcher2 = _interopRequireDefault(_dispatcher);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initialState = {};

	var MatchRecord = function (_Emitter) {
		(0, _inherits3.default)(MatchRecord, _Emitter);

		function MatchRecord() {
			(0, _classCallCheck3.default)(this, MatchRecord);

			var _this = (0, _possibleConstructorReturn3.default)(this, (MatchRecord.__proto__ || (0, _getPrototypeOf2.default)(MatchRecord)).call(this));

			(0, _assign2.default)(_this, JSON.parse((0, _stringify2.default)(initialState)));

			_dispatcher2.default.on('fetchKifu', function (record) {
				record.isFetchingKifu = true;
				_this.emit('CHANGE');
			});

			_dispatcher2.default.on('fetchKifuSuccessful', function (record, kifu) {
				record.kifu = kifu;
				record.doesHaveKifu = true;
				record.isFetchingKifu = false;
				saveRecord(record);

				_this.emit('CHANGE');
			});

			_dispatcher2.default.on('fetchKifuFailed', function (record) {
				record.isFetchingKifu = false;
				_this.emit('CHANGE');
			});
			return _this;
		}

		return MatchRecord;
	}(_events2.default);

	exports.default = MatchRecord;


	function saveRecord(record) {
		var records = JSON.parse(localStorage.getItem('records'));
		if (records === null) records = [];
		records.unshift(record);
		records.forEach(function (_record, i) {
			if (i === 0) return;
			if (_record.time === record.time && _record.black === record.black && _record.white === record.white) {
				return records.splice(i, 1);
			}
		});
		records = records.slice(0, 10);
		localStorage.setItem('records', (0, _stringify2.default)(records));
	}

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;

	var _stringify = __webpack_require__(116);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _assign = __webpack_require__(3);

	var _assign2 = _interopRequireDefault(_assign);

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(46);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _events = __webpack_require__(88);

	var _events2 = _interopRequireDefault(_events);

	var _dispatcher = __webpack_require__(89);

	var _dispatcher2 = _interopRequireDefault(_dispatcher);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initialState = {
		records: [],
		shouldDisplay: false
	};

	var HistoryRecords = function (_Emitter) {
		(0, _inherits3.default)(HistoryRecords, _Emitter);

		function HistoryRecords() {
			(0, _classCallCheck3.default)(this, HistoryRecords);

			var _this = (0, _possibleConstructorReturn3.default)(this, (HistoryRecords.__proto__ || (0, _getPrototypeOf2.default)(HistoryRecords)).call(this));

			(0, _assign2.default)(_this, JSON.parse((0, _stringify2.default)(initialState)));

			_dispatcher2.default.on('showHistoryRecords', function () {
				_this.shouldDisplay = true;
				_this.records = JSON.parse(localStorage.getItem('records')) || [];
				_this.emit('CHANGE');
			});

			_dispatcher2.default.on('hideHistoryRecords', function () {
				_this.shouldDisplay = false;
				_this.emit('CHANGE');
			});

			_dispatcher2.default.on('fetchKifuSuccessful', function () {
				_this.records = JSON.parse(localStorage.getItem('records')) || [];
				_this.emit('CHANGE');
			});
			return _this;
		}

		return HistoryRecords;
	}(_events2.default);

	exports.default = HistoryRecords;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	exports.default = undefined;

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(46);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _leadsRouter = __webpack_require__(122);

	var _leadsRouter2 = _interopRequireDefault(_leadsRouter);

	var _actions = __webpack_require__(135);

	var _actions2 = _interopRequireDefault(_actions);

	var _Header = __webpack_require__(144);

	var _Header2 = _interopRequireDefault(_Header);

	var _Footer = __webpack_require__(152);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _Index = __webpack_require__(153);

	var _Index2 = _interopRequireDefault(_Index);

	var _config = __webpack_require__(143);

	var _config2 = _interopRequireDefault(_config);

	var _sendPageView = __webpack_require__(160);

	var _sendPageView2 = _interopRequireDefault(_sendPageView);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var template = document.createElement('template');
	template.innerHTML = '\n<div id="header"></div>\n<div id="main"><div></div></div>\n<div id="footer"></div>';

	var App = function (_HTMLElement) {
			(0, _inherits3.default)(App, _HTMLElement);

			function App() {
					(0, _classCallCheck3.default)(this, App);

					var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this));

					var content = template.content.cloneNode(true);
					content.replaceChild(new _Header2.default(), content.firstChild);
					content.replaceChild(new _Footer2.default(), content.lastChild);
					var main = content.querySelector('#main');

					_this.id = 'app';
					_this.appendChild(content);

					var index = new _Index2.default();

					var router = _leadsRouter2.default.Router();

					router.use(function (req, res, next) {
							main.removeChild(main.firstChild);
							next();
					});

					router.use(function (req, res, next) {
							(0, _sendPageView2.default)();
							next();
					});

					router.get(_config2.default.deploy + '/', function (req, res, next) {
							if (req.query.id === undefined) return next();

							_actions2.default.inputSearchId(req.query.id);
							main.appendChild(index);
					}, function (req, res) {
							main.appendChild(index);
					});

					window.addEventListener('pathchange', function (e) {
							if (e.detail.method === 'pushState') router.get(e.detail.path);else router.get(e.detail.path, { addHistory: false });
					});

					window.addEventListener('popstate', function (e) {
							router.get(location.href, { addHistory: false, changePath: false });
					});

					router.get(location.href, { addHistory: false });
					return _this;
			}

			return App;
	}(HTMLElement);

	exports.default = App;


	customElements.define('x-app', App);

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(123);
	module.exports = __webpack_require__(124).default;

/***/ }),
/* 123 */
/***/ (function(module, exports) {

	(function() {
		if(!window.location.origin) {
			window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
		}
	})();

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';exports.__esModule=true;var _Router=__webpack_require__(125);var _Router2=_interopRequireDefault(_Router);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function leads(){}leads.Router=function(options){return new _Router2.default(options);};exports.default=leads;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';exports.__esModule=true;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _URL=__webpack_require__(126);var _URL2=_interopRequireDefault(_URL);var _pathToRegexp=__webpack_require__(130);var _pathToRegexp2=_interopRequireDefault(_pathToRegexp);var _namespace=__webpack_require__(132);var _namespace2=_interopRequireDefault(_namespace);var _Request=__webpack_require__(133);var _Request2=_interopRequireDefault(_Request);var _Response=__webpack_require__(134);var _Response2=_interopRequireDefault(_Response);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var privates=(0,_namespace2.default)();var Router=function(){function Router(options){_classCallCheck(this,Router);var self=privates(this);self.handlers=[];self.errorHandlers=[];self.paramHandlers={};self.defaults={};var caseSensitive=false;var mergeParams=false;var strict=false;var addHistory=true;var changePath=true;var transition=true;Object.defineProperties(self.defaults,{caseSensitive:{get:function get(){return caseSensitive;},set:function set(value){caseSensitive=Boolean(value);},enumerable:true},mergeParams:{get:function get(){return mergeParams;},set:function set(value){mergeParams=Boolean(value);},enumerable:true},strict:{get:function get(){return strict;},set:function set(value){strict=Boolean(value);},enumerable:true},addHistory:{get:function get(){return addHistory;},set:function set(value){addHistory=Boolean(value);},enumerable:true},changePath:{get:function get(){return changePath;},set:function set(value){changePath=Boolean(value);},enumerable:true},transition:{get:function get(){return transition;},set:function set(value){transition=Boolean(value);},enumerable:true}});for(var method in privateMethods){self[method]=privateMethods[method].bind(this);}this.defaults=options;}Router.prototype.dispatch=function dispatch(urlString,method,options){var self=privates(this);if(typeof urlString!=='string')return;if(typeof method!=='string')method='all';if((typeof options==='undefined'?'undefined':_typeof(options))!=='object'||options===null)options={};if(typeof options.addHistory!=='boolean')options.addHistory=self.defaults.addHistory;if(typeof options.changePath!=='boolean')options.changePath=self.defaults.changePath;if(typeof options.transition!=='boolean')options.transition=self.defaults.transition;var request=new _Request2.default();var response=new _Response2.default();var url=_URL2.default.parse(urlString);if(url.origin!==location.origin){if(options.transition)location.href=url.href;return;}request.dispatcher=this;request.originalUrl=urlString;request.method=method;request.data=options.data;_extends(request,url);var state={path:urlString};if(options.addHistory&&options.changePath){window.history.pushState(state,null,url.href);}else if(options.addHistory&&options.changePath===false){window.history.pushState(state,null,location.href);}else if(options.addHistory===false&&options.changePath){window.history.replaceState(state,null,url.href);}self.goGetCalledHandler=self.gfGetCalledHandler(url.pathname,method,'',{});self.runNextHandler(request,response);};Router.prototype.use=function use(){if(arguments.length===0)return this;var path='/';var type='middleware';var firstParam=arguments[0];if(firstParam!==undefined&&firstParam!==null&&typeof firstParam!=='function'&&!(firstParam instanceof Router)){path=firstParam;Array.prototype.shift.bind(arguments)();}var self=privates(this);var listeners=[];Array.prototype.forEach.bind(arguments)(function(arg){if(typeof arg!=='function'&&!(arg instanceof Router)){return;}if(typeof arg==='function'&&arg.length===4){self.register({path:path,type:type,listener:arg},'error');return;}listeners.push(arg);});if(listeners.length!==0){self.register({path:path,type:type,listeners:listeners});}return this;};Router.prototype.all=function all(path){privates(this).METHOD(path,'all',arguments);return this;};Router.prototype.get=function get(path){privates(this).METHOD(path,'get',arguments);return this;};Router.prototype.post=function post(path){privates(this).METHOD(path,'post',arguments);return this;};Router.prototype.head=function head(path){privates(this).METHOD(path,'head',arguments);return this;};Router.prototype.put=function put(path){privates(this).METHOD(path,'put',arguments);return this;};Router.prototype.delete=function _delete(path){privates(this).METHOD(path,'delete',arguments);return this;};Router.prototype.options=function options(path){privates(this).METHOD(path,'options',arguments);return this;};Router.prototype.route=function route(path){var _this=this;var ret={};['all','get','post','head','put','delete','options'].forEach(function(method){ret[method]=function(){this[method].bind(this,path).apply(this,arguments);return ret;}.bind(_this);});return ret;};Router.prototype.param=function param(name,callback){if(typeof callback!=='function'){return;}var self=privates(this);var names=null;if(Array.isArray(name)){names=name;}else {names=[name];}names.forEach(function(name){if(typeof name!=='string'){return;}if(name in self.paramHandlers){self.paramHandlers[name].listeners.push(callback);return;}self.paramHandlers[name]={listeners:[callback],type:'parameter'};});};_createClass(Router,[{key:'defaults',get:function get(){return privates(this).defaults;},set:function set(obj){var self=privates(this);if((typeof obj==='undefined'?'undefined':_typeof(obj))!=='object'||obj===null)return;for(var prop in self.defaults){if(!(prop in obj))continue;self.defaults[prop]=obj[prop];}}}]);return Router;}();exports.default=Router;var privateMethods={METHOD:function METHOD(path,method,args){if(path===undefined||path===null){return;}if(args.length===1){this.dispatch(path,method);return;}if(args.length===2&&_typeof(args[1])==='object'&&args[1]!==null&&!(args[1] instanceof Router)){this.dispatch(path,method,args[1]);return;}var self=privates(this);var type='method';var listeners=[];Array.prototype.shift.bind(args)();Array.prototype.forEach.bind(args)(function(arg){if(typeof arg!=='function'&&!(arg instanceof Router)){return;}if(typeof arg==='function'&&arg.length===4){self.register({path:path,type:type,method:method,listener:arg},'error');return;}listeners.push(arg);});if(listeners.length!==0){self.register({path:path,type:type,method:method,listeners:listeners});}},getRemainder:function getRemainder(matched){if(matched.index!==0){return null;}var remainder=matched.input.replace(matched[0],'');if(matched[0].slice(-1)!=='/'&&remainder[0]!=='/'&&remainder!==''){return null;}return _URL2.default.addFirstSlash(remainder);},getParams:function getParams(matched,keys,parentParams){var self=privates(this);var params=self.defaults.mergeParams?_extends({},parentParams):{};matched=matched.concat([]);matched.shift();if(matched.length===0){return params;}keys.forEach(function(value){if((typeof value==='undefined'?'undefined':_typeof(value))!=='object'){return;}params[value.name]=matched.shift();});return params;},getChangedParamKeys:function getChangedParamKeys(paramsObserver,params){var keys=[];for(var prop in params){if(paramsObserver[prop]!==params[prop]){paramsObserver[prop]=params[prop];keys.push(prop);}}return keys;},getParamHandlers:function getParamHandlers(keys,req){var self=privates(this);var paramHandlers=[];keys.forEach(function(key){if(key in self.paramHandlers===false){return;}paramHandlers.push({handler:{type:self.paramHandlers[key].type,listeners:self.paramHandlers[key].listeners},paramValue:req.params[key],req:req});});return paramHandlers;},getMatchedMiddlewareHandlers:function getMatchedMiddlewareHandlers(handler,req,remainder){if(typeof handler.listener==='function'){return [{handler:handler,req:req}];}if(handler.listener instanceof Router){return handler.listener.getMatchedHandlers(remainder,req.method,req.baseUrl,req.params);}},getMatchedHandlers:function getMatchedHandlers(path,method,_baseUrl){var self=privates(this);var matchedHandlers=[];self.handlers.forEach(function(handler){var baseUrl=_baseUrl;var matched=handler.pattern.exec(path);if(matched===null){return;}if(handler.type==='middleware'){var remainder=self.getRemainder(matched);if(remainder===null){return;}baseUrl+=_URL2.default.removeTrailingSlash(matched[0]);matchedHandlers.push({handler:handler,matched:matched,baseUrl:baseUrl,remainder:remainder});}else if(method==='all'||handler.method==='all'||handler.method===method){matchedHandlers.push({handler:handler,matched:matched,baseUrl:baseUrl,remainder:'/'});}});return matchedHandlers;},getCalledHandlers:function getCalledHandlers(path,method,baseUrl,params){var _this2=this;var self=privates(this);var matchedHandlers=self.getMatchedHandlers(path,method,baseUrl);var calledHandlers=[];var paramsObserver={};matchedHandlers.forEach(function(matchedHandler){var handler=matchedHandler.handler;var matched=matchedHandler.matched;var remainder=matchedHandler.remainder;var req={app:_this2,baseUrl:matchedHandler.baseUrl,params:self.getParams(matched,handler.pattern.keys,params)};var changedParamKeys=self.getChangedParamKeys(paramsObserver,req.params);var paramHandlers=self.getParamHandlers(changedParamKeys,req);calledHandlers.push.apply(calledHandlers,paramHandlers);calledHandlers.push({handler:handler,req:req,remainder:remainder});});return calledHandlers;},gfGetCalledHandler:function gfGetCalledHandler(path,method,baseUrl,params){var calledHandlers=privates(this).getCalledHandlers(path,method,baseUrl,params);var i=0;var l=0;var childRouter=null;var obj={value:undefined,done:true};return {next:function next(skip){if(calledHandlers.length<=i){return {done:true,value:undefined};}var calledHandler=calledHandlers[i];if(calledHandler.handler.listeners.length<=l){i++;l=0;return this.next();}if(childRouter){var nextHandler=childRouter.getNextHandler(skip);if(nextHandler){return {done:false,value:nextHandler};}l++;childRouter=null;return this.next();}if(l!==0&&skip){i++;l=0;return this.next();}var listener=calledHandler.handler.listeners[l];if(listener instanceof Router){childRouter=privates(listener);childRouter.goGetCalledHandler=childRouter.gfGetCalledHandler(calledHandler.remainder,method,calledHandler.req.baseUrl,calledHandler.req.params);var _nextHandler=childRouter.getNextHandler();if(_nextHandler){return {done:false,value:_nextHandler};}l++;childRouter=null;return this.next();}l++;return {done:false,value:{type:calledHandler.handler.type,listener:listener,req:calledHandler.req,paramValue:calledHandler.paramValue}};}};},getMatchedErrorHandlers:function getMatchedErrorHandlers(request){var self=privates(this);var matchedHandlers=[];var method=request.method;var path=request.pathname;self.errorHandlers.forEach(function(handler){var matched=handler.pattern.exec(path);if(matched===null){return;}if(handler.type==='middleware'){var remainder=self.getRemainder(matched);if(remainder===null){return;}matchedHandlers.push({handler:handler});}else if(handler.method==='all'||method==='all'||handler.method===method){matchedHandlers.push({handler:handler});}});return matchedHandlers;},gfGetMatchedErrorHandler:function gfGetMatchedErrorHandler(request){var matchedHandlers=privates(this).getMatchedErrorHandlers(request);var i=0;return {next:function next(){if(matchedHandlers.length<=i){return {done:true,value:undefined};}return {done:false,value:matchedHandlers[i++]};}};},getNextHandler:function getNextHandler(){var genObj=privates(this).goGetCalledHandler.next(arguments[0]);if(genObj.done){return null;}return genObj.value;},runNextHandler:function runNextHandler(request,response,error){var self=privates(this);var nextHandler=null;if(error==='route'){nextHandler=self.getNextHandler(true);}else if(error!==undefined){self.goGetMatchedErrorHandlers=self.gfGetMatchedErrorHandler(request);self.runNextErrorHandler(request,response,error);return;}else {nextHandler=self.getNextHandler();}if(nextHandler===null){return;}_extends(request,nextHandler.req);var next=self.runNextHandler.bind(self,request,response);if(nextHandler.type==='parameter'){nextHandler.listener(request,response,next,nextHandler.paramValue);return;}nextHandler.listener(request,response,next);},getNextErrorHandler:function getNextErrorHandler(){var genObj=privates(this).goGetMatchedErrorHandlers.next();if(genObj.done){return null;}return genObj.value;},runNextErrorHandler:function runNextErrorHandler(request,response,error){var self=privates(this);var nextHandler=self.getNextErrorHandler();if(nextHandler===null){return;}var next=self.runNextErrorHandler.bind(self,request,response,error);nextHandler.handler.listener(error,request,response,next);},register:function register(properties,destination){var self=privates(this);var handler=properties;if(handler.type==='middleware'){handler.pattern=(0,_pathToRegexp2.default)(handler.path,null,{sensitive:self.defaults.caseSensitive,strict:self.defaults.strict,end:false});}else {handler.pattern=(0,_pathToRegexp2.default)(handler.path,null,{sensitive:self.defaults.caseSensitive,strict:self.defaults.strict,end:true});}if(destination==='error'){self.errorHandlers.push(handler);return;}self.handlers.push(handler);}};

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';exports.__esModule=true;var _querystring=__webpack_require__(127);var _querystring2=_interopRequireDefault(_querystring);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var URL={};URL.parse=function(urlString){var a=document.createElement('a');a.href=urlString;a.href=a.href;var urlObj={};urlObj.protocol=a.protocol;urlObj.secure=a.protocol==='https:';urlObj.host=a.port==='80'?a.host.replace(':80',''):a.host;urlObj.port=a.port==='80'?'':a.port;urlObj.hostname=a.hostname;urlObj.hash=a.hash;urlObj.search=a.search;urlObj.query=_querystring2.default.parse(a.search.slice(1));urlObj.pathname=URL.adjustURLSlash(URL.addFirstSlash(a.pathname));urlObj.path=urlObj.pathname+a.search;urlObj.href=a.href;urlObj.origin=a.protocol+'//'+urlObj.host;return urlObj;};URL.addFirstSlash=function(pathString){return pathString.replace(/^(\/*)?/,'/');};URL.addTrailingSlash=function(pathString){return pathString.replace(/(\/*)?$/,'/');};URL.removeTrailingSlash=function(pathname){return pathname.replace(/\/*$/,'');};URL.adjustURLSlash=function(pathname){return pathname.replace(/\/+/g,'/');};exports.default=URL;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.decode = exports.parse = __webpack_require__(128);
	exports.encode = exports.stringify = __webpack_require__(129);


/***/ }),
/* 128 */
/***/ (function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	module.exports = function(qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};

	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }

	  var regexp = /\+/g;
	  qs = qs.split(sep);

	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }

	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }

	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr, vstr, k, v;

	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }

	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);

	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (Array.isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }

	  return obj;
	};


/***/ }),
/* 129 */
/***/ (function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	var stringifyPrimitive = function(v) {
	  switch (typeof v) {
	    case 'string':
	      return v;

	    case 'boolean':
	      return v ? 'true' : 'false';

	    case 'number':
	      return isFinite(v) ? v : '';

	    default:
	      return '';
	  }
	};

	module.exports = function(obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }

	  if (typeof obj === 'object') {
	    return Object.keys(obj).map(function(k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (Array.isArray(obj[k])) {
	        return obj[k].map(function(v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);

	  }

	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq +
	         encodeURIComponent(stringifyPrimitive(obj));
	};


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	var isarray = __webpack_require__(131)

	/**
	 * Expose `pathToRegexp`.
	 */
	module.exports = pathToRegexp
	module.exports.parse = parse
	module.exports.compile = compile
	module.exports.tokensToFunction = tokensToFunction
	module.exports.tokensToRegExp = tokensToRegExp

	/**
	 * The main path matching regexp utility.
	 *
	 * @type {RegExp}
	 */
	var PATH_REGEXP = new RegExp([
	  // Match escaped characters that would otherwise appear in future matches.
	  // This allows the user to escape special characters that won't transform.
	  '(\\\\.)',
	  // Match Express-style parameters and un-named parameters with a prefix
	  // and optional suffixes. Matches appear as:
	  //
	  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
	].join('|'), 'g')

	/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {string}  str
	 * @param  {Object=} options
	 * @return {!Array}
	 */
	function parse (str, options) {
	  var tokens = []
	  var key = 0
	  var index = 0
	  var path = ''
	  var defaultDelimiter = options && options.delimiter || '/'
	  var res

	  while ((res = PATH_REGEXP.exec(str)) != null) {
	    var m = res[0]
	    var escaped = res[1]
	    var offset = res.index
	    path += str.slice(index, offset)
	    index = offset + m.length

	    // Ignore already escaped sequences.
	    if (escaped) {
	      path += escaped[1]
	      continue
	    }

	    var next = str[index]
	    var prefix = res[2]
	    var name = res[3]
	    var capture = res[4]
	    var group = res[5]
	    var modifier = res[6]
	    var asterisk = res[7]

	    // Push the current path onto the tokens.
	    if (path) {
	      tokens.push(path)
	      path = ''
	    }

	    var partial = prefix != null && next != null && next !== prefix
	    var repeat = modifier === '+' || modifier === '*'
	    var optional = modifier === '?' || modifier === '*'
	    var delimiter = res[2] || defaultDelimiter
	    var pattern = capture || group

	    tokens.push({
	      name: name || key++,
	      prefix: prefix || '',
	      delimiter: delimiter,
	      optional: optional,
	      repeat: repeat,
	      partial: partial,
	      asterisk: !!asterisk,
	      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
	    })
	  }

	  // Match any characters still remaining.
	  if (index < str.length) {
	    path += str.substr(index)
	  }

	  // If the path exists, push it onto the end.
	  if (path) {
	    tokens.push(path)
	  }

	  return tokens
	}

	/**
	 * Compile a string to a template function for the path.
	 *
	 * @param  {string}             str
	 * @param  {Object=}            options
	 * @return {!function(Object=, Object=)}
	 */
	function compile (str, options) {
	  return tokensToFunction(parse(str, options))
	}

	/**
	 * Prettier encoding of URI path segments.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeURIComponentPretty (str) {
	  return encodeURI(str).replace(/[\/?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeAsterisk (str) {
	  return encodeURI(str).replace(/[?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction (tokens) {
	  // Compile all the tokens into regexps.
	  var matches = new Array(tokens.length)

	  // Compile all the patterns before compilation.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] === 'object') {
	      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
	    }
	  }

	  return function (obj, opts) {
	    var path = ''
	    var data = obj || {}
	    var options = opts || {}
	    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i]

	      if (typeof token === 'string') {
	        path += token

	        continue
	      }

	      var value = data[token.name]
	      var segment

	      if (value == null) {
	        if (token.optional) {
	          // Prepend partial segment prefixes.
	          if (token.partial) {
	            path += token.prefix
	          }

	          continue
	        } else {
	          throw new TypeError('Expected "' + token.name + '" to be defined')
	        }
	      }

	      if (isarray(value)) {
	        if (!token.repeat) {
	          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
	        }

	        if (value.length === 0) {
	          if (token.optional) {
	            continue
	          } else {
	            throw new TypeError('Expected "' + token.name + '" to not be empty')
	          }
	        }

	        for (var j = 0; j < value.length; j++) {
	          segment = encode(value[j])

	          if (!matches[i].test(segment)) {
	            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
	          }

	          path += (j === 0 ? token.prefix : token.delimiter) + segment
	        }

	        continue
	      }

	      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

	      if (!matches[i].test(segment)) {
	        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
	      }

	      path += token.prefix + segment
	    }

	    return path
	  }
	}

	/**
	 * Escape a regular expression string.
	 *
	 * @param  {string} str
	 * @return {string}
	 */
	function escapeString (str) {
	  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
	}

	/**
	 * Escape the capturing group by escaping special characters and meaning.
	 *
	 * @param  {string} group
	 * @return {string}
	 */
	function escapeGroup (group) {
	  return group.replace(/([=!:$\/()])/g, '\\$1')
	}

	/**
	 * Attach the keys as a property of the regexp.
	 *
	 * @param  {!RegExp} re
	 * @param  {Array}   keys
	 * @return {!RegExp}
	 */
	function attachKeys (re, keys) {
	  re.keys = keys
	  return re
	}

	/**
	 * Get the flags for a regexp from the options.
	 *
	 * @param  {Object} options
	 * @return {string}
	 */
	function flags (options) {
	  return options.sensitive ? '' : 'i'
	}

	/**
	 * Pull out keys from a regexp.
	 *
	 * @param  {!RegExp} path
	 * @param  {!Array}  keys
	 * @return {!RegExp}
	 */
	function regexpToRegexp (path, keys) {
	  // Use a negative lookahead to match only capturing groups.
	  var groups = path.source.match(/\((?!\?)/g)

	  if (groups) {
	    for (var i = 0; i < groups.length; i++) {
	      keys.push({
	        name: i,
	        prefix: null,
	        delimiter: null,
	        optional: false,
	        repeat: false,
	        partial: false,
	        asterisk: false,
	        pattern: null
	      })
	    }
	  }

	  return attachKeys(path, keys)
	}

	/**
	 * Transform an array into a regexp.
	 *
	 * @param  {!Array}  path
	 * @param  {Array}   keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function arrayToRegexp (path, keys, options) {
	  var parts = []

	  for (var i = 0; i < path.length; i++) {
	    parts.push(pathToRegexp(path[i], keys, options).source)
	  }

	  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

	  return attachKeys(regexp, keys)
	}

	/**
	 * Create a path regexp from string input.
	 *
	 * @param  {string}  path
	 * @param  {!Array}  keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function stringToRegexp (path, keys, options) {
	  return tokensToRegExp(parse(path, options), keys, options)
	}

	/**
	 * Expose a function for taking tokens and returning a RegExp.
	 *
	 * @param  {!Array}          tokens
	 * @param  {(Array|Object)=} keys
	 * @param  {Object=}         options
	 * @return {!RegExp}
	 */
	function tokensToRegExp (tokens, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys || options)
	    keys = []
	  }

	  options = options || {}

	  var strict = options.strict
	  var end = options.end !== false
	  var route = ''

	  // Iterate over the tokens and create our regexp string.
	  for (var i = 0; i < tokens.length; i++) {
	    var token = tokens[i]

	    if (typeof token === 'string') {
	      route += escapeString(token)
	    } else {
	      var prefix = escapeString(token.prefix)
	      var capture = '(?:' + token.pattern + ')'

	      keys.push(token)

	      if (token.repeat) {
	        capture += '(?:' + prefix + capture + ')*'
	      }

	      if (token.optional) {
	        if (!token.partial) {
	          capture = '(?:' + prefix + '(' + capture + '))?'
	        } else {
	          capture = prefix + '(' + capture + ')?'
	        }
	      } else {
	        capture = prefix + '(' + capture + ')'
	      }

	      route += capture
	    }
	  }

	  var delimiter = escapeString(options.delimiter || '/')
	  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

	  // In non-strict mode we allow a slash at the end of match. If the path to
	  // match already ends with a slash, we remove it for consistency. The slash
	  // is valid at the end of a path match, not in the middle. This is important
	  // in non-ending mode, where "/test/" shouldn't match "/test//route".
	  if (!strict) {
	    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
	  }

	  if (end) {
	    route += '$'
	  } else {
	    // In non-ending mode, we need the capturing groups to match as much as
	    // possible by using a positive lookahead to the end or next path segment.
	    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
	  }

	  return attachKeys(new RegExp('^' + route, flags(options)), keys)
	}

	/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 *
	 * @param  {(string|RegExp|Array)} path
	 * @param  {(Array|Object)=}       keys
	 * @param  {Object=}               options
	 * @return {!RegExp}
	 */
	function pathToRegexp (path, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys || options)
	    keys = []
	  }

	  options = options || {}

	  if (path instanceof RegExp) {
	    return regexpToRegexp(path, /** @type {!Array} */ (keys))
	  }

	  if (isarray(path)) {
	    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
	  }

	  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
	}


/***/ }),
/* 131 */
/***/ (function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ }),
/* 132 */
/***/ (function(module, exports) {

	"use strict";exports.__esModule=true;exports.default=namespace;function namespace(){var map=new WeakMap();return function(object){if(!map.has(object)){map.set(object,{});}return map.get(object);};};

/***/ }),
/* 133 */
/***/ (function(module, exports) {

	"use strict";exports.__esModule=true;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Request=function Request(){_classCallCheck(this,Request);};exports.default=Request;

/***/ }),
/* 134 */
/***/ (function(module, exports) {

	"use strict";exports.__esModule=true;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Response=function Response(){_classCallCheck(this,Response);};exports.default=Response;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _from = __webpack_require__(136);

	var _from2 = _interopRequireDefault(_from);

	var _regenerator = __webpack_require__(91);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _toConsumableArray2 = __webpack_require__(140);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _asyncToGenerator2 = __webpack_require__(94);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var fetchRecords = function () {
		var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(warsURL, className, searchId, start) {
			var response, text, doc, matchRecords;
			return _regenerator2.default.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							_context3.next = 2;
							return fetch(_config2.default.server + '?url=' + encodeURIComponent(warsURL.replace(':id', searchId).replace(':start', start)), {
								method: 'GET',
								mode: 'cors'
							});

						case 2:
							response = _context3.sent;
							_context3.next = 5;
							return response.text();

						case 5:
							text = _context3.sent;

							if (!(text[0] !== '$')) {
								_context3.next = 8;
								break;
							}

							return _context3.abrupt('return', []);

						case 8:
							text = text.replace(/^\$\("#history"\)\.html\(/, '').replace(/"\);/, '"');
							doc = new DOMParser().parseFromString(eval(text), 'text/html');
							matchRecords = (0, _from2.default)(doc.querySelectorAll('.contents'), function (element) {
								//対局中のrecord;
								if (element.querySelector('img[src*="taikyoku"]')) return null;

								var black = element.querySelectorAll('tr')[0].children[1].textContent;
								var white = element.querySelectorAll('tr')[1].children[1].textContent;

								var blackUserPage = _config2.default.warsOrigin + element.querySelectorAll('a')[0].getAttribute('href');
								var whiteUserPage = _config2.default.warsOrigin + element.querySelectorAll('a')[1].getAttribute('href');

								var winner = '';
								if (element.children[0].classList.contains('win')) winner = 'black';else if (element.children[1].classList.contains('win')) winner = 'white';

								var time = element.children[3].textContent;
								if (time === '') time = element.children[4].textContent;
								var url = 'https:' + element.querySelectorAll('a')[2].getAttribute('href');

								return {
									black: black,
									white: white,
									blackUserPage: blackUserPage,
									whiteUserPage: whiteUserPage,
									winner: winner,
									time: time,
									url: url,
									className: className,
									isWinner: element.classList.contains('winner'),
									isFetchingKifu: false,
									doesHaveKifu: false,
									kifu: ''
								};
							});
							//対局中のrecordが含まれていたら削除;

							if (matchRecords[0] === null) matchRecords.shift();
							return _context3.abrupt('return', matchRecords);

						case 13:
						case 'end':
							return _context3.stop();
					}
				}
			}, _callee3, this);
		}));

		return function fetchRecords(_x, _x2, _x3, _x4) {
			return _ref.apply(this, arguments);
		};
	}();

	var _fetchKifu = function () {
		var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(url, record) {
			var response, text, doc, queryIndex, moves, kifuText;
			return _regenerator2.default.wrap(function _callee4$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							_context4.next = 2;
							return fetch(_config2.default.server + '?url=' + url, {
								method: 'GET',
								mode: 'cors'
							});

						case 2:
							response = _context4.sent;
							_context4.next = 5;
							return response.text();

						case 5:
							text = _context4.sent;
							doc = new DOMParser().parseFromString(text, 'text/html');
							queryIndex = 11;

							if (doc.querySelectorAll('script')[queryIndex].textContent.indexOf('receiveMove') === -1) queryIndex = 12;
							if (doc.querySelectorAll('script')[queryIndex].textContent.indexOf('receiveMove') === -1) queryIndex = 13;
							moves = doc.querySelectorAll('script')[queryIndex].textContent.match(/receiveMove\(\"(.+)\"\);/)[1].split('\t');

							moves.pop();
							kifuText = '';

							kifuText += '\u958B\u59CB\u65E5\u6642\uFF1A' + record.time + '\n';
							kifuText += '\u5148\u624B\uFF1A' + record.black + '\n';
							kifuText += '\u5F8C\u624B\uFF1A' + record.white + '\n';
							kifuText += '\u624B\u6570-\u6307\u624B-\u6D88\u8CBB\u6642\u9593\n';
							kifuText += moves.map(function (move, i) {
								var moveText = (0, _getMoveText2.default)(i, moves);
								return moveText.replace(/(▲|△)(\d)?/, function (match, p1, p2) {
									if (p2 === undefined) return '';
									return String.fromCharCode(p2.charCodeAt(0) + 0xFEE0);
								});
							}).join('\n');

							return _context4.abrupt('return', kifuText);

						case 19:
						case 'end':
							return _context4.stop();
					}
				}
			}, _callee4, this);
		}));

		return function _fetchKifu(_x5, _x6) {
			return _ref2.apply(this, arguments);
		};
	}();

	var _dispatcher = __webpack_require__(89);

	var _dispatcher2 = _interopRequireDefault(_dispatcher);

	var _getMoveText = __webpack_require__(141);

	var _getMoveText2 = _interopRequireDefault(_getMoveText);

	var _config = __webpack_require__(143);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		inputSearchId: function inputSearchId(value) {
			_dispatcher2.default.emit('inputSearchId', value);
		},
		fetchMatchRecords: function fetchMatchRecords(searchId, urls, start) {
			var _this = this;

			return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				var records, className;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_dispatcher2.default.emit('fetchMatchRecords');
								records = [];
								_context.prev = 2;
								_context.t0 = _regenerator2.default.keys(urls);

							case 4:
								if ((_context.t1 = _context.t0()).done) {
									_context.next = 16;
									break;
								}

								className = _context.t1.value;
								_context.t2 = records.push;
								_context.t3 = records;
								_context.t4 = _toConsumableArray3.default;
								_context.next = 11;
								return fetchRecords(urls[className], className, searchId, start);

							case 11:
								_context.t5 = _context.sent;
								_context.t6 = (0, _context.t4)(_context.t5);

								_context.t2.apply.call(_context.t2, _context.t3, _context.t6);

								_context.next = 4;
								break;

							case 16:
								_context.next = 22;
								break;

							case 18:
								_context.prev = 18;
								_context.t7 = _context['catch'](2);

								console.log(_context.t7);
								return _context.abrupt('return', _dispatcher2.default.emit('fetchMatchRecordsFailed'));

							case 22:

								_dispatcher2.default.emit('fetchMatchRecordsSuccessful', records);

							case 23:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this, [[2, 18]]);
			}))();
		},
		showHistoryRecords: function showHistoryRecords() {
			_dispatcher2.default.emit('showHistoryRecords');
		},
		hideHistoryRecords: function hideHistoryRecords() {
			_dispatcher2.default.emit('hideHistoryRecords');
		},
		fetchKifu: function fetchKifu(record) {
			var _this2 = this;

			return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
				var kifu;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_dispatcher2.default.emit('fetchKifu', record);
								_context2.prev = 1;
								_context2.next = 4;
								return _fetchKifu(record.url, record);

							case 4:
								kifu = _context2.sent;
								_context2.next = 11;
								break;

							case 7:
								_context2.prev = 7;
								_context2.t0 = _context2['catch'](1);

								console.log(_context2.t0);
								return _context2.abrupt('return', _dispatcher2.default.emit('fetchKifuFailed', record));

							case 11:
								_dispatcher2.default.emit('fetchKifuSuccessful', record, kifu);

							case 12:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, _this2, [[1, 7]]);
			}))();
		},
		copyKifu: function copyKifu(record) {
			copyText(record.kifu);
			_dispatcher2.default.emit('copyKifu', record);
		},
		unmountIndex: function unmountIndex() {
			_dispatcher2.default.emit('unmountIndex');
		}
	};


	function copyText(text) {
		var textarea = document.createElement('textarea');
		document.body.appendChild(textarea);
		textarea.value = text;
		textarea.select();
		document.execCommand('copy');
		document.body.removeChild(textarea);
	}

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(137), __esModule: true };

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(50);
	__webpack_require__(138);
	module.exports = __webpack_require__(8).Array.from;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var ctx = __webpack_require__(9);
	var $export = __webpack_require__(6);
	var toObject = __webpack_require__(39);
	var call = __webpack_require__(101);
	var isArrayIter = __webpack_require__(102);
	var toLength = __webpack_require__(30);
	var createProperty = __webpack_require__(139);
	var getIterFn = __webpack_require__(103);

	$export($export.S + $export.F * !__webpack_require__(113)(function (iter) { Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
	    var O = toObject(arrayLike);
	    var C = typeof this == 'function' ? this : Array;
	    var aLen = arguments.length;
	    var mapfn = aLen > 1 ? arguments[1] : undefined;
	    var mapping = mapfn !== undefined;
	    var index = 0;
	    var iterFn = getIterFn(O);
	    var length, result, step, iterator;
	    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
	      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for (result = new C(length); length > index; index++) {
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(12);
	var createDesc = __webpack_require__(20);

	module.exports = function (object, index, value) {
	  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _from = __webpack_require__(136);

	var _from2 = _interopRequireDefault(_from);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Localize = __webpack_require__(142);

	var _Localize2 = _interopRequireDefault(_Localize);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var kanjiNumber = _Localize2.default.t('kanji_number');
	var pieceKanjiMap = _Localize2.default.getPieceKanjiMap();

	function isPromoted(ptype) {
		switch (ptype) {
			case "TO":
			case "NY":
			case "NK":
			case "NG":
			case "UM":
			case "RY":
				return true;
		}
		return false;
	}

	function unpromote(ptype) {
		switch (ptype) {
			case "TO":
				return "FU";
			case "NY":
				return "KY";
			case "NK":
				return "KE";
			case "NG":
				return "GI";
			case "UM":
				return "KA";
			case "RY":
				return "HI";
		}
		return ptype;
	}

	function getMoveText(n, moves) {
		var move = moves[n];
		var prev = moves[n - 1];
		var text = n + 1 + " ";
		var num_str = "";
		var piece_str = "";
		var bef_str = "";

		text += move.charAt(0) == "+" ? "▲" : "△";
		var place = move.charAt(3); //ex. 3
		place += kanjiNumber[move.charAt(4)]; //ex. 三
		if (prev && move.substr(3, 2) == prev.substr(3, 2)) {
			num_str = _Localize2.default.pieceSamePlace(place);
		} else {
			num_str = place;
		}

		var ptype = move.substr(5, 2);
		if (isPromoted(ptype)) {
			var origin;

			for (var i = n - 2; i > 0; i -= 2) {
				var old = moves[i];
				if (old.substr(3, 2) == move.substr(1, 2)) {
					origin = old.substr(5, 2);
					break;
				}
			}

			if (ptype != origin) {
				// become promoted
				var unpromoted = unpromote(ptype);
				piece_str = pieceKanjiMap[unpromoted];
				piece_str += _Localize2.default.t("nari");
			} else {
				piece_str = pieceKanjiMap[ptype];
			}
		} else {
			piece_str = pieceKanjiMap[ptype];
		}

		// 補足情報
		if (move.substr(1, 2) == "00") {
			bef_str += _Localize2.default.t("uti");
		} else {
			bef_str += "(" + move.substr(1, 2) + ")";
		}

		if (_Localize2.default.getLocale() == "ja") {
			text += num_str + piece_str + bef_str;
		} else {
			if (move.substr(1, 2) == "00") {
				text += piece_str + bef_str + num_str;
			} else {
				text += piece_str + num_str + bef_str;
			}
		}

		return text;
	}

	exports.default = getMoveText;

/***/ }),
/* 142 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function Localize() {}
	Localize.locale = "ja";
	Localize.imgURL = "";

	Localize.values = {
		"ja": {
			"start_pos": "開始局面",
			"kanji_number": ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
			"day": "日",
			"hour": "時間",
			"minute": "分",
			"second": "秒",
			"uti": "打",
			"nari": "成",
			"dou": "同",
			"joseki": "定跡",
			"win": "勝ち",
			"lose": "負け",
			"evenly": "互角",
			"winning": "勝勢",
			"more_better": "大優勢",
			"better": "優勢",
			"worse": "劣勢",
			"terrible_worse": "大劣勢",
			"losing": "敗勢",
			"watching": "人観戦中",
			"not_take_my": "味方の駒は取れません",
			"chat": "チャット",
			"cmt_chat_limit": "40字以内で入力してください。"
		},
		"en": {
			"start_pos": "Start position",
			"kanji_number": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
			"day": "(d)",
			"hour": ":",
			"minute": ":",
			"second": "",
			"uti": "'",
			"nari": "+",
			"dou": "",
			"joseki": "joseki",
			"win": "win",
			"lose": "lose",
			"evenly": "evenly",
			"winning": "winning",
			"more_better": "more better",
			"better": "better",
			"worse": "worse",
			"terrible_worse": "terrible worse",
			"losing": "losing",
			"watching": "people watching",
			"not_take_my": "Piece of ally does not take",
			"chat": "chat",
			"cmt_chat_limit": "Please input in less than 40 characters."
		}
	};
	Localize.getLocale = function () {
		return Localize.locale;
	};
	Localize.setLocale = function (lcl) {
		Localize.locale = lcl;
	};

	Localize.t = function (key) {
		return Localize.values[Localize.locale][key];
	};

	Localize.pieceSamePlace = function (place) {
		if (Localize.locale == "ja") {
			return Localize.t("dou");
		} else {
			return place;
		}
	};

	Localize.changeKeisei = function (keisei) {
		var keiseis = ["勝勢", "大優勢", "優勢", "互角", "劣勢", "大劣勢", "敗勢"];
		var lcl_keiseis = [Localize.t("winning"), Localize.t("more_better"), Localize.t("better"), Localize.t("evenly"), Localize.t("worse"), Localize.t("terrible_worse"), Localize.t("losing")];

		var idx = keiseis.indexOf(keisei);
		if (idx != -1) {
			return lcl_keiseis[idx];
		} else {
			return keisei;
		}
	};

	Localize.getImgURL = function (img) {
		var dir = Localize.imgURL + "/kif/";
		if (Localize.locale == "ja") {
			return dir + img;
		} else {
			return dir + Localize.locale + "/" + img;
		}
	};

	Localize.setImgURL = function (url) {
		Localize.imgURL = url;
	};

	Localize.getPieceKanjiMap = function () {
		var pieceKanjiMap = new Array();
		switch (Localize.locale) {
			case "en":
				pieceKanjiMap['FU'] = "P";
				pieceKanjiMap['KY'] = "L";
				pieceKanjiMap['KE'] = "N";
				pieceKanjiMap['GI'] = "S";
				pieceKanjiMap['KI'] = "G";
				pieceKanjiMap['KA'] = "B";
				pieceKanjiMap['HI'] = "R";
				pieceKanjiMap['OU'] = "K";
				pieceKanjiMap['TO'] = "+P";
				pieceKanjiMap['NY'] = "+L";
				pieceKanjiMap['NK'] = "+N";
				pieceKanjiMap['NG'] = "+S";
				pieceKanjiMap['UM'] = "+B";
				pieceKanjiMap['RY'] = "+R";
				break;
			default:
				pieceKanjiMap['FU'] = "歩";
				pieceKanjiMap['KY'] = "香";
				pieceKanjiMap['KE'] = "桂";
				pieceKanjiMap['GI'] = "銀";
				pieceKanjiMap['KI'] = "金";
				pieceKanjiMap['KA'] = "角";
				pieceKanjiMap['HI'] = "飛";
				pieceKanjiMap['OU'] = "玉";
				pieceKanjiMap['TO'] = "と";
				pieceKanjiMap['NY'] = "成香";
				pieceKanjiMap['NK'] = "成桂";
				pieceKanjiMap['NG'] = "成銀";
				pieceKanjiMap['UM'] = "馬";
				pieceKanjiMap['RY'] = "竜";
				break;
		}
		return pieceKanjiMap;
	};
	Localize.getFinishMap = function () {
		var finishMap = new Array();
		switch (Localize.locale) {
			case "en":
				finishMap["SENTE_WIN_TORYO"] = "Sente Win";
				finishMap["SENTE_WIN_CHECKMATE"] = "Sente Checkmate Win";
				finishMap["SENTE_WIN_TRY"] = "Sente Try Win";
				finishMap["SENTE_WIN_TIMEOUT"] = "Gote Timeout Loss";
				finishMap["SENTE_WIN_DISCONNECT"] = "Gote Connection Loss";
				finishMap["SENTE_WIN_OUTE_SENNICHI"] = "Gote Illegality Loss";
				finishMap["SENTE_WIN_ENTERINGKING"] = "Sente Entering Win";

				finishMap["GOTE_WIN_TORYO"] = "Gote Win";
				finishMap["GOTE_WIN_CHECKMATE"] = "Gote Checkmate Win";
				finishMap["GOTE_WIN_TRY"] = "Gote Try Win";
				finishMap["GOTE_WIN_TIMEOUT"] = "Sente Timeout Loss";
				finishMap["GOTE_WIN_DISCONNECT"] = "Sente Connection Loss";
				finishMap["GOTE_WIN_OUTE_SENNICHI"] = "Sente Illegality Loss";
				finishMap["GOTE_WIN_ENTERINGKING"] = "Gote Entering Win";

				finishMap["DRAW_SENNICHI"] = "Draw Repetition";
				finishMap["DRAW_PLY_LIMIT"] = "Draw";
				break;
			default:
				finishMap["SENTE_WIN_TORYO"] = "まで先手の勝ち";
				finishMap["SENTE_WIN_CHECKMATE"] = "まで先手の勝ち";
				finishMap["SENTE_WIN_TRY"] = "まで先手のトライ勝ち";
				finishMap["SENTE_WIN_TIMEOUT"] = "後手時間切れ";
				finishMap["SENTE_WIN_DISCONNECT"] = "後手接続切れ";
				finishMap["SENTE_WIN_OUTE_SENNICHI"] = "後手反則負け";
				finishMap["SENTE_WIN_ENTERINGKING"] = "まで先手の入玉勝ち";

				finishMap["GOTE_WIN_TORYO"] = "まで後手の勝ち";
				finishMap["GOTE_WIN_CHECKMATE"] = "まで後手の勝ち";
				finishMap["GOTE_WIN_TRY"] = "まで後手のトライ勝ち";
				finishMap["GOTE_WIN_TIMEOUT"] = "先手時間切れ";
				finishMap["GOTE_WIN_DISCONNECT"] = "先手接続切れ";
				finishMap["GOTE_WIN_OUTE_SENNICHI"] = "先手反則負け";
				finishMap["GOTE_WIN_ENTERINGKING"] = "まで後手の入玉勝ち";

				finishMap["DRAW_SENNICHI"] = "まで千日手成立";
				finishMap["DRAW_PLY_LIMIT"] = "まで引き分け";
				break;
		}
		return finishMap;
	};

	exports.default = Localize;

/***/ }),
/* 143 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var deploy = void 0;
	var server = void 0;
	if (location.host.indexOf('pro.webkatu.com') === -1) {
		//dev
		deploy = '/warskifcopy/public';
		server = '/warskifcopy/server/index.php';
	} else {
		//release
		deploy = '/warskifcopy';
		server = 'http://server.pro.webkatu.com/warskifcopy/index.php';
		//server = 'http://warskifucopy.webcrow.jp/index.php',
	}

	exports.default = {
		deploy: deploy,
		server: server,
		warsOrigin: 'https://shogiwars.heroz.jp'
	};

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(46);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _config = __webpack_require__(143);

	var _config2 = _interopRequireDefault(_config);

	var _router = __webpack_require__(145);

	var _Notification = __webpack_require__(146);

	var _Notification2 = _interopRequireDefault(_Notification);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var template = document.createElement('template');
	template.innerHTML = '\n<header>\n\t<h1><a href="">\u5C06\u68CB\u30A6\u30A9\u30FC\u30BA\u68CB\u8B5C\u30B3\u30D4\u30FC</a></h1>\n</header>\n';

	var Header = function (_HTMLElement) {
		(0, _inherits3.default)(Header, _HTMLElement);

		function Header() {
			(0, _classCallCheck3.default)(this, Header);

			var _this = (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this));

			var content = template.content.cloneNode(true);
			content.appendChild(new _Notification2.default());

			var a = content.querySelector('a');
			a.href = _config2.default.deploy;
			a.onclick = function (e) {
				e.preventDefault();
				_router.browserHistory.pushState(e.currentTarget.href + '/');
			};

			_this.appendChild(content);
			return _this;
		}

		return Header;
	}(HTMLElement);

	exports.default = Header;


	customElements.define('x-header', Header);

/***/ }),
/* 145 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var browserHistory = exports.browserHistory = {
		pushState: function pushState(path) {
			var event = new CustomEvent('pathchange', {
				detail: {
					method: 'pushState',
					path: path
				}
			});
			window.dispatchEvent(event);
		},
		replaceState: function replaceState(path) {
			var event = new CustomEvent('pathchange', {
				detail: {
					method: 'replaceState',
					path: path
				}
			});
			window.dispatchEvent(event);
		}
	};

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(147);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(46);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class;

	var _usestate = __webpack_require__(151);

	var _usestate2 = _interopRequireDefault(_usestate);

	var _index = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var template = document.createElement('template');
	template.innerHTML = '\n<p style="display: none;"></p>\n';

	var Notificaion = (0, _usestate2.default)(_class = function (_HTMLElement) {
		(0, _inherits3.default)(Notificaion, _HTMLElement);

		function Notificaion() {
			(0, _classCallCheck3.default)(this, Notificaion);

			var _this = (0, _possibleConstructorReturn3.default)(this, (Notificaion.__proto__ || (0, _getPrototypeOf2.default)(Notificaion)).call(this));

			_this.handleNotificationChange = _this.handleNotificationChange.bind(_this);
			_this.timerId = null;

			var content = template.content.cloneNode(true);
			_this.p = content.querySelector('p');

			_this.appendChild(content);
			return _this;
		}

		(0, _createClass3.default)(Notificaion, [{
			key: 'handleNotificationChange',
			value: function handleNotificationChange(e) {
				this.setState(_index.notification);
			}
		}, {
			key: 'connectedCallback',
			value: function connectedCallback() {
				_index.notification.on('CHANGE', this.handleNotificationChange);
				this.handleNotificationChange();
			}
		}, {
			key: 'disconnectedCallback',
			value: function disconnectedCallback() {
				_index.notification.removeListener('CHANGE', this.handleNotificationChange);
			}
		}, {
			key: 'stateChangedCallback',
			value: function stateChangedCallback(name, oldValue, newValue) {
				var _this2 = this;

				switch (name) {
					case 'displayId':
						this.p.textContent = _index.notification.text;
						this.p.style.display = '';
						window.clearTimeout(this.timerId);
						this.timerId = window.setTimeout(function () {
							_this2.p.style.display = 'none';
						}, _index.notification.displayTime);
						return;
				}
			}
		}], [{
			key: 'observedState',
			get: function get() {
				return ['displayId'];
			}
		}]);
		return Notificaion;
	}(HTMLElement)) || _class;

	exports.default = Notificaion;


	customElements.define('x-notification', Notificaion);

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(148);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(149), __esModule: true };

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(150);
	var $Object = __webpack_require__(8).Object;
	module.exports = function defineProperty(it, key, desc) {
	  return $Object.defineProperty(it, key, desc);
	};


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(6);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(16), 'Object', { defineProperty: __webpack_require__(12).f });


/***/ }),
/* 151 */
/***/ (function(module, exports) {

	const map = new WeakMap();
	const privates = function(object) {
		if(! map.has(object)) {
			map.set(object, {});
		}
		return map.get(object);
	};

	function getState() { return privates(this).state; }

	function setState(state) {
		if(typeof state !== 'object' || state === null) return;
		
		const that = privates(this);
		if(typeof that.state !== 'object' || that.state === null) that.state = {};
		const oldState = that.state;
		const newState = that.state = Object.assign({}, that.state, state);

		if(Array.isArray(this.constructor.observedState) === false) return;
		if(typeof this.stateChangedCallback !== 'function') return;

		this.constructor.observedState.forEach(function(name) {
			if(oldState[name] === newState[name]) return;
			this.stateChangedCallback(name, oldState[name], newState[name]);
		}, this);
	}

	module.exports = function useState(target) {
		if(typeof target !== 'function') throw new TypeError();

		target.prototype.getState = getState;
		target.prototype.setState = setState;
		return target;
	}

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(46);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var template = document.createElement('template');
	template.innerHTML = '\n<footer>\n\t<section>\n\t\t<h1>\u304A\u77E5\u3089\u305B</h1>\n\t\t<p>10\u4EF6\u4EE5\u4E0A\u8AAD\u307F\u8FBC\u3081\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F</p>\n\t\t<p>\u8AAD\u307F\u8FBC\u3093\u3060\u68CB\u8B5C\u306E\u5C65\u6B74\u3092\u6B8B\u305B\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F</p>\n\t</section>\n\t<section>\n\t\t<h1>\u4F7F\u3044\u65B9</h1>\n\t\t<p>\u30D5\u30A9\u30FC\u30E0\u306BID\u3092\u5165\u529B\u3057\u3066\u691C\u7D22\u3059\u308B\u3068\u6700\u65B0\u306E\u5BFE\u5C4010\u4EF6\u304C\u53D6\u5F97\u3055\u308C\u307E\u3059\u3002\u68CB\u8B5C\u306F<strong>\u300C\u8AAD\u307F\u8FBC\u3080\u300D\u30AF\u30EA\u30C3\u30AF\u2192\u300C\u30B3\u30D4\u30FC\u3059\u308B\u300D\u30AF\u30EA\u30C3\u30AF</strong>\u3067\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30D4\u30FC\u3055\u308C\u307E\u3059\u3002</p>\n\t</section>\n\t<address>\u4F5C\u8005: <a href="https://twitter.com/vinyufi" target="_blank">@vinyufi</a></address>\n</footer>\n';

	var Footer = function (_HTMLElement) {
		(0, _inherits3.default)(Footer, _HTMLElement);

		function Footer() {
			(0, _classCallCheck3.default)(this, Footer);

			var _this = (0, _possibleConstructorReturn3.default)(this, (Footer.__proto__ || (0, _getPrototypeOf2.default)(Footer)).call(this));

			var content = template.content.cloneNode(true);
			_this.appendChild(content);
			return _this;
		}

		return Footer;
	}(HTMLElement);

	exports.default = Footer;


	customElements.define('x-footer', Footer);

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(147);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(46);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _actions = __webpack_require__(135);

	var _actions2 = _interopRequireDefault(_actions);

	var _index = __webpack_require__(1);

	var _MatchRecordSearchForm = __webpack_require__(154);

	var _MatchRecordSearchForm2 = _interopRequireDefault(_MatchRecordSearchForm);

	var _MatchRecords = __webpack_require__(155);

	var _MatchRecords2 = _interopRequireDefault(_MatchRecords);

	var _HistoryRecords = __webpack_require__(159);

	var _HistoryRecords2 = _interopRequireDefault(_HistoryRecords);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	const template = document.createElement('template');
	template.innerHTML = `
	${new MatchRecordSearchForm().outerHTML}
	${new MatchRecords().outerHTML}
	${new HistoryRecords().outerHTML}
	`;
	*/

	var Index = function (_HTMLElement) {
		(0, _inherits3.default)(Index, _HTMLElement);

		function Index() {
			(0, _classCallCheck3.default)(this, Index);

			var _this = (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this));

			_this.className = 'index';
			_this.appendChild(new _MatchRecordSearchForm2.default());
			_this.appendChild(new _MatchRecords2.default());
			_this.appendChild(new _HistoryRecords2.default());

			_this.matchRecords = _this.querySelector('match-records');
			return _this;
		}

		(0, _createClass3.default)(Index, [{
			key: 'connectedCallback',
			value: function connectedCallback() {
				if (_index.matchRecordSearch.searchId === '') {
					this.matchRecords.style.display = 'none';
				} else {
					_actions2.default.fetchMatchRecords(_index.matchRecordSearch.searchId, _index.matchRecordSearch.urls, _index.matchRecordSearch.start);

					this.matchRecords.style.display = '';
				}
			}
		}, {
			key: 'disconnectedCallback',
			value: function disconnectedCallback() {
				_actions2.default.unmountIndex();
			}
		}]);
		return Index;
	}(HTMLElement);

	exports.default = Index;


	customElements.define('x-index', Index);

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(147);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(46);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class;

	var _usestate = __webpack_require__(151);

	var _usestate2 = _interopRequireDefault(_usestate);

	var _actions = __webpack_require__(135);

	var _actions2 = _interopRequireDefault(_actions);

	var _index = __webpack_require__(1);

	var _router = __webpack_require__(145);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var template = document.createElement('template');
	template.innerHTML = '\n<form>\n\t<input type="text" name="id" placeholder="ID\u3092\u5165\u529B"/>\n\t<button type="submit">\u691C\u7D22</button>\n</form>\n';

	var MatchRecordSearchForm = (0, _usestate2.default)(_class = function (_HTMLElement) {
		(0, _inherits3.default)(MatchRecordSearchForm, _HTMLElement);

		function MatchRecordSearchForm() {
			(0, _classCallCheck3.default)(this, MatchRecordSearchForm);

			var _this = (0, _possibleConstructorReturn3.default)(this, (MatchRecordSearchForm.__proto__ || (0, _getPrototypeOf2.default)(MatchRecordSearchForm)).call(this));

			_this.handleMatchRecordSearchChange = _this.handleMatchRecordSearchChange.bind(_this);

			var content = template.content.cloneNode(true);

			var form = content.querySelector('form');
			_this.searchIdInput = form.querySelector('input');
			_this.submitButton = form.querySelector('button');

			_this.appendChild(content);

			_this.searchIdInput.addEventListener('change', function () {
				_actions2.default.inputSearchId(_this.searchIdInput.value);
			});

			form.addEventListener('submit', function (e) {
				e.preventDefault();
				_router.browserHistory.pushState(location.pathname + '?id=' + _index.matchRecordSearch.searchId);
			});

			return _this;
		}

		(0, _createClass3.default)(MatchRecordSearchForm, [{
			key: 'handleMatchRecordSearchChange',
			value: function handleMatchRecordSearchChange() {
				this.setState(_index.matchRecordSearch);
			}
		}, {
			key: 'connectedCallback',
			value: function connectedCallback() {
				_index.matchRecordSearch.on('CHANGE', this.handleMatchRecordSearchChange);
				this.handleMatchRecordSearchChange();
			}
		}, {
			key: 'disconnectedCallback',
			value: function disconnectedCallback() {
				_index.matchRecordSearch.removeListener('CHANGE', this.handleMatchRecordSearchChange);
			}
		}, {
			key: 'stateChangedCallback',
			value: function stateChangedCallback(name, oldValue, newValue) {
				switch (name) {
					case 'searchId':
						this.searchIdInput.value = newValue;
						return;

					case 'isFetching':
						if (newValue) this.submitButton.disabled = true;else this.submitButton.disabled = false;
						return;
				}
			}
		}], [{
			key: 'observedState',
			get: function get() {
				return ['searchId', 'isFetching'];
			}
		}]);
		return MatchRecordSearchForm;
	}(HTMLElement)) || _class;

	exports.default = MatchRecordSearchForm;


	customElements.define('match-record-search-form', MatchRecordSearchForm);

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(147);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(46);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class;

	var _usestate = __webpack_require__(151);

	var _usestate2 = _interopRequireDefault(_usestate);

	var _actions = __webpack_require__(135);

	var _actions2 = _interopRequireDefault(_actions);

	var _index = __webpack_require__(1);

	var _MatchRecordsTable = __webpack_require__(156);

	var _MatchRecordsTable2 = _interopRequireDefault(_MatchRecordsTable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var template = document.createElement('template');
	template.innerHTML = '\n<a>\u66F4\u306B\u8AAD\u307F\u8FBC\u3080</a>\n<p></p>\n';

	var MatchRecords = (0, _usestate2.default)(_class = function (_HTMLElement) {
		(0, _inherits3.default)(MatchRecords, _HTMLElement);

		function MatchRecords() {
			(0, _classCallCheck3.default)(this, MatchRecords);

			var _this = (0, _possibleConstructorReturn3.default)(this, (MatchRecords.__proto__ || (0, _getPrototypeOf2.default)(MatchRecords)).call(this));

			_this.handleMatchRecordSearchChange = _this.handleMatchRecordSearchChange.bind(_this);
			_this.handleMatchRecordsChange = _this.handleMatchRecordsChange.bind(_this);

			var content = template.content.cloneNode(true);
			_this.a = content.querySelector('a');
			_this.p = content.querySelector('p');

			_this.appendChild(_this.matchRecordsTable = new _MatchRecordsTable2.default());
			_this.appendChild(content);

			_this.a.addEventListener('click', function (e) {
				e.preventDefault();
				if (_index.matchRecordSearch.isFetching === true) return;
				_actions2.default.fetchMatchRecords(_index.matchRecordSearch.searchId, _index.matchRecordSearch.urls, _index.matchRecordSearch.start);
			});

			return _this;
		}

		(0, _createClass3.default)(MatchRecords, [{
			key: 'handleMatchRecordSearchChange',
			value: function handleMatchRecordSearchChange() {
				this.setState(_index.matchRecordSearch);
			}
		}, {
			key: 'handleMatchRecordsChange',
			value: function handleMatchRecordsChange() {
				this.setState(_index.matchRecords);
			}
		}, {
			key: 'connectedCallback',
			value: function connectedCallback() {
				_index.matchRecordSearch.on('CHANGE', this.handleMatchRecordSearchChange);
				_index.matchRecords.on('CHANGE', this.handleMatchRecordsChange);

				this.handleMatchRecordSearchChange();
				this.handleMatchRecordsChange();
			}
		}, {
			key: 'disconnectedCallback',
			value: function disconnectedCallback() {
				_index.matchRecordSearch.removeListener('CHANGE', this.handleMatchRecordSearchChange);
				_index.matchRecords.removeListener('CHANGE', this.handleMatchRecordsChange);
			}
		}, {
			key: 'stateChangedCallback',
			value: function stateChangedCallback(name, oldValue, newValue) {
				switch (name) {
					case 'isFetching':
						if (newValue) {
							this.p.style.display = '';
							this.p.textContent = '読み込み中...';
						} else {
							this.p.style.display = 'none';
							this.p.textContent = '';
						}
						return;

					case 'isLimit':
						if (newValue) this.a.style.display = 'none';else this.a.style.display = '';
						return;

					case 'records':
						var records = newValue.slice(0, _index.matchRecordSearch.start);

						this.matchRecordsTable.setState({ records: records });
						return;
				}
			}
		}], [{
			key: 'observedState',
			get: function get() {
				return ['isFetching', 'isLimit', 'records'];
			}
		}]);
		return MatchRecords;
	}(HTMLElement)) || _class;

	exports.default = MatchRecords;


	customElements.define('match-records', MatchRecords);

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(147);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(46);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class;

	var _usestate = __webpack_require__(151);

	var _usestate2 = _interopRequireDefault(_usestate);

	var _MatchRecordHeaderTr = __webpack_require__(157);

	var _MatchRecordHeaderTr2 = _interopRequireDefault(_MatchRecordHeaderTr);

	var _MatchRecordTr = __webpack_require__(158);

	var _MatchRecordTr2 = _interopRequireDefault(_MatchRecordTr);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var template = document.createElement('template');
	template.innerHTML = '\n<table>\n\t<thead>\n\t</thead>\n\t<tbody>\n\t</tbody>\n</table>\n<p class="annotation">\u203B<span class="winner-box">&nbsp;</span>...\u52DD\u3061</p>\n';

	var MatchRecordsTable = (0, _usestate2.default)(_class = function (_HTMLElement) {
		(0, _inherits3.default)(MatchRecordsTable, _HTMLElement);

		function MatchRecordsTable() {
			(0, _classCallCheck3.default)(this, MatchRecordsTable);

			var _this = (0, _possibleConstructorReturn3.default)(this, (MatchRecordsTable.__proto__ || (0, _getPrototypeOf2.default)(MatchRecordsTable)).call(this));

			var content = template.content.cloneNode(true);
			_this.tbody = content.querySelector('tbody');

			content.querySelector('thead').appendChild(new _MatchRecordHeaderTr2.default());
			_this.appendChild(content);
			return _this;
		}

		(0, _createClass3.default)(MatchRecordsTable, [{
			key: 'stateChangedCallback',
			value: function stateChangedCallback(name, oldValue, newValue) {
				var _this2 = this;

				switch (name) {
					case 'records':
						this.tbody.innerHTML = '';
						newValue.forEach(function (record, i) {
							_this2.tbody.appendChild(new _MatchRecordTr2.default(record));
						});
						return;
				}
			}
		}], [{
			key: 'observedState',
			get: function get() {
				return ['records'];
			}
		}]);
		return MatchRecordsTable;
	}(HTMLElement)) || _class;

	exports.default = MatchRecordsTable;


	customElements.define('match-records-table', MatchRecordsTable);

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(46);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var template = document.createElement('template');
	/*
	template.innerHTML = `
	<th>対局日時</th>
	<th>クラス</th>
	<th>先手</th>
	<th>後手</th>
	<th>棋譜</th>
	`
	*/

	var MatchRecordHeaderTr = function (_HTMLElement) {
		(0, _inherits3.default)(MatchRecordHeaderTr, _HTMLElement);

		function MatchRecordHeaderTr() {
			(0, _classCallCheck3.default)(this, MatchRecordHeaderTr);

			//this.appendChild(template.content.cloneNode(true));
			//IEのためにth要素はDOMで作る;
			var _this = (0, _possibleConstructorReturn3.default)(this, (MatchRecordHeaderTr.__proto__ || (0, _getPrototypeOf2.default)(MatchRecordHeaderTr)).call(this));

			var ths = Array(5).fill(0).map(function () {
				return _this.appendChild(document.createElement('th'));
			});
			ths[0].textContent = '対局日時';
			ths[1].textContent = '種別';
			ths[2].textContent = '先手';
			ths[3].textContent = '後手';
			ths[4].textContent = '棋譜';

			_this.style.display = 'table-row';
			return _this;
		}

		return MatchRecordHeaderTr;
	}(HTMLElement);

	exports.default = MatchRecordHeaderTr;


	customElements.define('match-record-header-tr', MatchRecordHeaderTr);

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(147);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(46);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class;

	var _usestate = __webpack_require__(151);

	var _usestate2 = _interopRequireDefault(_usestate);

	var _actions = __webpack_require__(135);

	var _actions2 = _interopRequireDefault(_actions);

	var _index = __webpack_require__(1);

	var _router = __webpack_require__(145);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var template = document.createElement('template');
	/*
	template.innerHTML = `
	<td></td>
	<td></td>
	<td><a></a></td>
	<td><a></a></td>
	<td><button type="button">読み込む</button></td>
	<style>
	match-record-tr {
		display: table-row;
	}
	</style>
	`;
	*/

	template.innerHTML = '\n';

	var MatchRecordTr = (0, _usestate2.default)(_class = function (_HTMLElement) {
		(0, _inherits3.default)(MatchRecordTr, _HTMLElement);

		function MatchRecordTr(record) {
			(0, _classCallCheck3.default)(this, MatchRecordTr);

			var _this = (0, _possibleConstructorReturn3.default)(this, (MatchRecordTr.__proto__ || (0, _getPrototypeOf2.default)(MatchRecordTr)).call(this));

			_this.handleMatchRecordChange = _this.handleMatchRecordChange.bind(_this);
			_this.record = record;

			_this.style.display = 'table-row';
			//IEのためにtd要素はDOMで作る;
			_this.tds = Array(5).fill(0).map(function () {
				return _this.appendChild(document.createElement('td'));
			});
			_this.tds[2].innerHTML = '<a></a>';
			_this.tds[3].innerHTML = '<a></a>';
			_this.tds[4].innerHTML = '<button type="button">読み込む</button>';

			_this.kifuCopyButton = _this.tds[4].querySelector('button');
			_this.kifuCopyButton.addEventListener('click', function (e) {
				e.preventDefault();
				if (_this.record.doesHaveKifu) {
					_actions2.default.copyKifu(record);
				} else {
					_actions2.default.fetchKifu(record);
				}
			});
			return _this;
		}

		(0, _createClass3.default)(MatchRecordTr, [{
			key: 'handleMatchRecordChange',
			value: function handleMatchRecordChange(e) {
				this.setState(this.record);
			}
		}, {
			key: 'handleUserAnchorClick',
			value: function handleUserAnchorClick(e) {
				e.preventDefault();
				_router.browserHistory.pushState(e.currentTarget.href);
			}
		}, {
			key: 'connectedCallback',
			value: function connectedCallback() {
				_index.matchRecord.on('CHANGE', this.handleMatchRecordChange);
				this.handleMatchRecordChange();
			}
		}, {
			key: 'disconnectedCallback',
			value: function disconnectedCallback() {
				_index.matchRecord.removeListener('CHANGE', this.handleMatchRecordChange);
			}
		}, {
			key: 'stateChangedCallback',
			value: function stateChangedCallback(name, oldValue, newValue) {
				switch (name) {
					case 'time':
						this.tds[0].innerHTML = '<a href="' + this.record.url + '" target="_blank">' + this.record.time + '</a>';
						return;
					case 'className':
						this.tds[1].textContent = this.record.className;
						return;
					case 'black':
						{
							var _a = this.tds[2].querySelector('a');
							_a.href = location.pathname + '?id=' + this.record.black.split(' ')[0];
							_a.onclick = this.handleUserAnchorClick;
							_a.textContent = this.record.black;

							return;
						}
					case 'white':
						var a = this.tds[3].querySelector('a');
						a.href = location.pathname + '?id=' + this.record.white.split(' ')[0];
						a.onclick = this.handleUserAnchorClick;
						a.textContent = this.record.white;

						return;
					case 'isWinner':
						if (newValue) this.classList.add('winner');
						return;
					case 'isFetchingKifu':
						if (newValue) {
							this.kifuCopyButton.textContent = '読み込み中';
							this.kifuCopyButton.disabled = true;
						} else {
							this.kifuCopyButton.textContent = '読み込む';
							this.kifuCopyButton.disabled = false;
						}
						return;

					case 'doesHaveKifu':
						if (newValue) this.kifuCopyButton.textContent = 'コピーする';
						return;
				}
			}
		}], [{
			key: 'observedState',
			get: function get() {
				return ['time', 'className', 'black', 'white', 'isWinner', 'isFetchingKifu', 'doesHaveKifu'];
			}
		}]);
		return MatchRecordTr;
	}(HTMLElement)) || _class;

	exports.default = MatchRecordTr;


	customElements.define('match-record-tr', MatchRecordTr);

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;

	var _getPrototypeOf = __webpack_require__(40);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(45);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(147);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(46);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class;

	var _usestate = __webpack_require__(151);

	var _usestate2 = _interopRequireDefault(_usestate);

	var _actions = __webpack_require__(135);

	var _actions2 = _interopRequireDefault(_actions);

	var _index = __webpack_require__(1);

	var _MatchRecordsTable = __webpack_require__(156);

	var _MatchRecordsTable2 = _interopRequireDefault(_MatchRecordsTable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var template = document.createElement('template');
	template.innerHTML = '\n<a></a>\n';

	var HistoryRecords = (0, _usestate2.default)(_class = function (_HTMLElement) {
		(0, _inherits3.default)(HistoryRecords, _HTMLElement);

		function HistoryRecords() {
			(0, _classCallCheck3.default)(this, HistoryRecords);

			var _this = (0, _possibleConstructorReturn3.default)(this, (HistoryRecords.__proto__ || (0, _getPrototypeOf2.default)(HistoryRecords)).call(this));

			_this.handleHistoryRecordsChange = _this.handleHistoryRecordsChange.bind(_this);

			var content = template.content.cloneNode(true);
			_this.a = content.querySelector('a');
			content.appendChild(_this.matchRecordsTable = new _MatchRecordsTable2.default());
			_this.appendChild(content);

			_this.a.addEventListener('click', function (e) {
				e.preventDefault();
				if (_index.historyRecords.shouldDisplay) {
					_actions2.default.hideHistoryRecords();
				} else {
					_actions2.default.showHistoryRecords();
				}
			});

			return _this;
		}

		(0, _createClass3.default)(HistoryRecords, [{
			key: 'handleHistoryRecordsChange',
			value: function handleHistoryRecordsChange(e) {
				this.setState(_index.historyRecords);
			}
		}, {
			key: 'connectedCallback',
			value: function connectedCallback() {
				_index.historyRecords.on('CHANGE', this.handleHistoryRecordsChange);
				this.handleHistoryRecordsChange();
			}
		}, {
			key: 'disconnectedCallback',
			value: function disconnectedCallback() {
				_index.historyRecords.removeListener('CHANGE', this.handleHistoryRecordsChange);
			}
		}, {
			key: 'stateChangedCallback',
			value: function stateChangedCallback(name, oldValue, newValue) {
				switch (name) {
					case 'shouldDisplay':
						if (newValue) {
							this.a.textContent = '履歴を閉じる';
							this.appendChild(this.matchRecordsTable);
						} else {
							this.a.textContent = '履歴を見る(10件)';
							this.removeChild(this.matchRecordsTable);
						}
						return;

					case 'records':
						this.matchRecordsTable.setState({ 'records': _index.historyRecords.records });
				}
			}
		}], [{
			key: 'observedState',
			get: function get() {
				return ['shouldDisplay', 'records'];
			}
		}]);
		return HistoryRecords;
	}(HTMLElement)) || _class;

	exports.default = HistoryRecords;


	customElements.define('history-records', HistoryRecords);

/***/ }),
/* 160 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = sendPageView;
	function sendPageView() {
		if (!window.ga) return;
		ga('send', 'pageView', {
			page: location.pathname + location.search,
			title: document.title
		});
	}

/***/ })
/******/ ]);