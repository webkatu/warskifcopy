/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _index = __webpack_require__(1);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _App = __webpack_require__(118);
	
	var _App2 = _interopRequireDefault(_App);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	document.body.appendChild(new _App2.default());

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.historyRecords = exports.matchRecord = exports.matchRecords = exports.matchRecordSearch = exports.notification = undefined;
	
	var _Notification = __webpack_require__(2);
	
	var _Notification2 = _interopRequireDefault(_Notification);
	
	var _MatchRecordSearch = __webpack_require__(91);
	
	var _MatchRecordSearch2 = _interopRequireDefault(_MatchRecordSearch);
	
	var _MatchRecords = __webpack_require__(115);
	
	var _MatchRecords2 = _interopRequireDefault(_MatchRecords);
	
	var _MatchRecord = __webpack_require__(116);
	
	var _MatchRecord2 = _interopRequireDefault(_MatchRecord);
	
	var _HistoryRecords = __webpack_require__(117);
	
	var _HistoryRecords2 = _interopRequireDefault(_HistoryRecords);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var notification = exports.notification = new _Notification2.default();
	var matchRecordSearch = exports.matchRecordSearch = new _MatchRecordSearch2.default();
	var matchRecords = exports.matchRecords = new _MatchRecords2.default();
	var matchRecord = exports.matchRecord = new _MatchRecord2.default();
	var historyRecords = exports.historyRecords = new _HistoryRecords2.default();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

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
	
	var _inherits2 = __webpack_require__(81);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _events = __webpack_require__(89);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _dispatcher = __webpack_require__(90);
	
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

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(4), __esModule: true };

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(5);
	module.exports = __webpack_require__(8).Object.assign;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(6);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(21)});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(7)
	  , core      = __webpack_require__(8)
	  , ctx       = __webpack_require__(9)
	  , hide      = __webpack_require__(11)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
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
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
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

/***/ },
/* 7 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 8 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(10);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(12)
	  , createDesc = __webpack_require__(20);
	module.exports = __webpack_require__(16) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(13)
	  , IE8_DOM_DEFINE = __webpack_require__(15)
	  , toPrimitive    = __webpack_require__(19)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(16) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(14);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(16) && !__webpack_require__(17)(function(){
	  return Object.defineProperty(__webpack_require__(18)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(17)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(14)
	  , document = __webpack_require__(7).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(14);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(22)
	  , gOPS     = __webpack_require__(37)
	  , pIE      = __webpack_require__(38)
	  , toObject = __webpack_require__(39)
	  , IObject  = __webpack_require__(26)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(17)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(23)
	  , enumBugKeys = __webpack_require__(36);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(24)
	  , toIObject    = __webpack_require__(25)
	  , arrayIndexOf = __webpack_require__(29)(false)
	  , IE_PROTO     = __webpack_require__(33)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(26)
	  , defined = __webpack_require__(28);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(27);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(25)
	  , toLength  = __webpack_require__(30)
	  , toIndex   = __webpack_require__(32);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(31)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(31)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(34)('keys')
	  , uid    = __webpack_require__(35);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(7)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 37 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 38 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(28);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(41), __esModule: true };

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(42);
	module.exports = __webpack_require__(8).Object.getPrototypeOf;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(39)
	  , $getPrototypeOf = __webpack_require__(43);
	
	__webpack_require__(44)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(24)
	  , toObject    = __webpack_require__(39)
	  , IE_PROTO    = __webpack_require__(33)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(6)
	  , core    = __webpack_require__(8)
	  , fails   = __webpack_require__(17);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(49), __esModule: true };

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(50);
	__webpack_require__(62);
	module.exports = __webpack_require__(66).f('iterator');

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(51)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(52)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(31)
	  , defined   = __webpack_require__(28);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(53)
	  , $export        = __webpack_require__(6)
	  , redefine       = __webpack_require__(54)
	  , hide           = __webpack_require__(11)
	  , has            = __webpack_require__(24)
	  , Iterators      = __webpack_require__(55)
	  , $iterCreate    = __webpack_require__(56)
	  , setToStringTag = __webpack_require__(60)
	  , getPrototypeOf = __webpack_require__(43)
	  , ITERATOR       = __webpack_require__(61)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(11);

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(57)
	  , descriptor     = __webpack_require__(20)
	  , setToStringTag = __webpack_require__(60)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(11)(IteratorPrototype, __webpack_require__(61)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(13)
	  , dPs         = __webpack_require__(58)
	  , enumBugKeys = __webpack_require__(36)
	  , IE_PROTO    = __webpack_require__(33)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(18)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
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
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(12)
	  , anObject = __webpack_require__(13)
	  , getKeys  = __webpack_require__(22);
	
	module.exports = __webpack_require__(16) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(7).document && document.documentElement;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(12).f
	  , has = __webpack_require__(24)
	  , TAG = __webpack_require__(61)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(34)('wks')
	  , uid        = __webpack_require__(35)
	  , Symbol     = __webpack_require__(7).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(63);
	var global        = __webpack_require__(7)
	  , hide          = __webpack_require__(11)
	  , Iterators     = __webpack_require__(55)
	  , TO_STRING_TAG = __webpack_require__(61)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(64)
	  , step             = __webpack_require__(65)
	  , Iterators        = __webpack_require__(55)
	  , toIObject        = __webpack_require__(25);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(52)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(61);

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(68), __esModule: true };

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(69);
	__webpack_require__(78);
	__webpack_require__(79);
	__webpack_require__(80);
	module.exports = __webpack_require__(8).Symbol;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(7)
	  , has            = __webpack_require__(24)
	  , DESCRIPTORS    = __webpack_require__(16)
	  , $export        = __webpack_require__(6)
	  , redefine       = __webpack_require__(54)
	  , META           = __webpack_require__(70).KEY
	  , $fails         = __webpack_require__(17)
	  , shared         = __webpack_require__(34)
	  , setToStringTag = __webpack_require__(60)
	  , uid            = __webpack_require__(35)
	  , wks            = __webpack_require__(61)
	  , wksExt         = __webpack_require__(66)
	  , wksDefine      = __webpack_require__(71)
	  , keyOf          = __webpack_require__(72)
	  , enumKeys       = __webpack_require__(73)
	  , isArray        = __webpack_require__(74)
	  , anObject       = __webpack_require__(13)
	  , toIObject      = __webpack_require__(25)
	  , toPrimitive    = __webpack_require__(19)
	  , createDesc     = __webpack_require__(20)
	  , _create        = __webpack_require__(57)
	  , gOPNExt        = __webpack_require__(75)
	  , $GOPD          = __webpack_require__(77)
	  , $DP            = __webpack_require__(12)
	  , $keys          = __webpack_require__(22)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(76).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(38).f  = $propertyIsEnumerable;
	  __webpack_require__(37).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(53)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
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
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
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

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(35)('meta')
	  , isObject = __webpack_require__(14)
	  , has      = __webpack_require__(24)
	  , setDesc  = __webpack_require__(12).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(17)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(7)
	  , core           = __webpack_require__(8)
	  , LIBRARY        = __webpack_require__(53)
	  , wksExt         = __webpack_require__(66)
	  , defineProperty = __webpack_require__(12).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(22)
	  , toIObject = __webpack_require__(25);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(22)
	  , gOPS    = __webpack_require__(37)
	  , pIE     = __webpack_require__(38);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(27);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(25)
	  , gOPN      = __webpack_require__(76).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(23)
	  , hiddenKeys = __webpack_require__(36).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(38)
	  , createDesc     = __webpack_require__(20)
	  , toIObject      = __webpack_require__(25)
	  , toPrimitive    = __webpack_require__(19)
	  , has            = __webpack_require__(24)
	  , IE8_DOM_DEFINE = __webpack_require__(15)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(16) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 78 */
/***/ function(module, exports) {



/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(71)('asyncIterator');

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(71)('observable');

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _setPrototypeOf = __webpack_require__(82);
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	var _create = __webpack_require__(86);
	
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

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(83), __esModule: true };

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(84);
	module.exports = __webpack_require__(8).Object.setPrototypeOf;

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(6);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(85).set});

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(14)
	  , anObject = __webpack_require__(13);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(9)(Function.call, __webpack_require__(77).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(87), __esModule: true };

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(88);
	var $Object = __webpack_require__(8).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(6)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(57)});

/***/ },
/* 89 */
/***/ function(module, exports) {

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


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _events = __webpack_require__(89);
	
	var _events2 = _interopRequireDefault(_events);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = new _events2.default();

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;
	
	var _regenerator = __webpack_require__(92);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _asyncToGenerator2 = __webpack_require__(96);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	var _stringify = __webpack_require__(113);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _assign = __webpack_require__(3);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _getPrototypeOf = __webpack_require__(40);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(45);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(46);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(81);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _events = __webpack_require__(89);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _dispatcher = __webpack_require__(90);
	
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
	
			_dispatcher2.default.on('fetchMatchRecords', (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
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

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(93);


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g =
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this;
	
	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime &&
	  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;
	
	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;
	
	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;
	
	module.exports = __webpack_require__(94);
	
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!(function(global) {
	  "use strict";
	
	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
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
	
	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
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
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(95)))

/***/ },
/* 95 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _promise = __webpack_require__(97);
	
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

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(98), __esModule: true };

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(78);
	__webpack_require__(50);
	__webpack_require__(62);
	__webpack_require__(99);
	module.exports = __webpack_require__(8).Promise;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(53)
	  , global             = __webpack_require__(7)
	  , ctx                = __webpack_require__(9)
	  , classof            = __webpack_require__(100)
	  , $export            = __webpack_require__(6)
	  , isObject           = __webpack_require__(14)
	  , aFunction          = __webpack_require__(10)
	  , anInstance         = __webpack_require__(101)
	  , forOf              = __webpack_require__(102)
	  , speciesConstructor = __webpack_require__(106)
	  , task               = __webpack_require__(107).set
	  , microtask          = __webpack_require__(109)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;
	
	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(61)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(110)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(60)($Promise, PROMISE);
	__webpack_require__(111)(PROMISE);
	Wrapper = __webpack_require__(8)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(112)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(27)
	  , TAG = __webpack_require__(61)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 101 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(9)
	  , call        = __webpack_require__(103)
	  , isArrayIter = __webpack_require__(104)
	  , anObject    = __webpack_require__(13)
	  , toLength    = __webpack_require__(30)
	  , getIterFn   = __webpack_require__(105)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(13);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(55)
	  , ITERATOR   = __webpack_require__(61)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(100)
	  , ITERATOR  = __webpack_require__(61)('iterator')
	  , Iterators = __webpack_require__(55);
	module.exports = __webpack_require__(8).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(13)
	  , aFunction = __webpack_require__(10)
	  , SPECIES   = __webpack_require__(61)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(9)
	  , invoke             = __webpack_require__(108)
	  , html               = __webpack_require__(59)
	  , cel                = __webpack_require__(18)
	  , global             = __webpack_require__(7)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(27)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 108 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
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
	  } return              fn.apply(that, args);
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(7)
	  , macrotask = __webpack_require__(107).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(27)(process) == 'process';
	
	module.exports = function(){
	  var head, last, notify;
	
	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };
	
	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(11);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(7)
	  , core        = __webpack_require__(8)
	  , dP          = __webpack_require__(12)
	  , DESCRIPTORS = __webpack_require__(16)
	  , SPECIES     = __webpack_require__(61)('species');
	
	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(61)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(114), __esModule: true };

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(8)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;
	
	var _stringify = __webpack_require__(113);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _assign = __webpack_require__(3);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _getPrototypeOf = __webpack_require__(40);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(45);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(46);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(81);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _events = __webpack_require__(89);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _dispatcher = __webpack_require__(90);
	
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

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;
	
	var _stringify = __webpack_require__(113);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _assign = __webpack_require__(3);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _getPrototypeOf = __webpack_require__(40);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(45);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(46);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(81);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _events = __webpack_require__(89);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _dispatcher = __webpack_require__(90);
	
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

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;
	
	var _stringify = __webpack_require__(113);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _assign = __webpack_require__(3);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _getPrototypeOf = __webpack_require__(40);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(45);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(46);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(81);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _events = __webpack_require__(89);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _dispatcher = __webpack_require__(90);
	
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

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

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
	
	var _inherits2 = __webpack_require__(81);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _leadsRouter = __webpack_require__(119);
	
	var _leadsRouter2 = _interopRequireDefault(_leadsRouter);
	
	var _actions = __webpack_require__(132);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _Header = __webpack_require__(141);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _Footer = __webpack_require__(148);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	var _Index = __webpack_require__(149);
	
	var _Index2 = _interopRequireDefault(_Index);
	
	var _config = __webpack_require__(140);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _sendPageView = __webpack_require__(157);
	
	var _sendPageView2 = _interopRequireDefault(_sendPageView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var template = document.createElement('template');
	template.innerHTML = '\n<div id="header"></div>\n<div id="main"><div></div></div>\n<div id="footer"></div>\n';
	
	var App = function (_HTMLElement) {
			(0, _inherits3.default)(App, _HTMLElement);
	
			function App() {
					(0, _classCallCheck3.default)(this, App);
	
					var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this));
	
					var content = template.content.cloneNode(true);
					content.replaceChild(new _Header2.default(), content.firstElementChild);
					content.replaceChild(new _Footer2.default(), content.lastElementChild);
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

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(120);
	module.exports = __webpack_require__(121).default;

/***/ },
/* 120 */
/***/ function(module, exports) {

	(function() {
		if(!window.location.origin) {
			window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
		}
	})();

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';exports.__esModule=true;var _Router=__webpack_require__(122);var _Router2=_interopRequireDefault(_Router);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function leads(){}leads.Router=function(options){return new _Router2.default(options);};exports.default=leads;

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';exports.__esModule=true;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _URL=__webpack_require__(123);var _URL2=_interopRequireDefault(_URL);var _pathToRegexp=__webpack_require__(127);var _pathToRegexp2=_interopRequireDefault(_pathToRegexp);var _namespace=__webpack_require__(129);var _namespace2=_interopRequireDefault(_namespace);var _Request=__webpack_require__(130);var _Request2=_interopRequireDefault(_Request);var _Response=__webpack_require__(131);var _Response2=_interopRequireDefault(_Response);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var privates=(0,_namespace2.default)();var Router=function(){function Router(options){_classCallCheck(this,Router);var self=privates(this);self.handlers=[];self.errorHandlers=[];self.paramHandlers={};self.defaults={};var caseSensitive=false;var mergeParams=false;var strict=false;var addHistory=true;var changePath=true;var transition=true;Object.defineProperties(self.defaults,{caseSensitive:{get:function get(){return caseSensitive;},set:function set(value){caseSensitive=Boolean(value);},enumerable:true},mergeParams:{get:function get(){return mergeParams;},set:function set(value){mergeParams=Boolean(value);},enumerable:true},strict:{get:function get(){return strict;},set:function set(value){strict=Boolean(value);},enumerable:true},addHistory:{get:function get(){return addHistory;},set:function set(value){addHistory=Boolean(value);},enumerable:true},changePath:{get:function get(){return changePath;},set:function set(value){changePath=Boolean(value);},enumerable:true},transition:{get:function get(){return transition;},set:function set(value){transition=Boolean(value);},enumerable:true}});for(var method in privateMethods){self[method]=privateMethods[method].bind(this);}this.defaults=options;}Router.prototype.dispatch=function dispatch(urlString,method,options){var self=privates(this);if(typeof urlString!=='string')return;if(typeof method!=='string')method='all';if((typeof options==='undefined'?'undefined':_typeof(options))!=='object'||options===null)options={};if(typeof options.addHistory!=='boolean')options.addHistory=self.defaults.addHistory;if(typeof options.changePath!=='boolean')options.changePath=self.defaults.changePath;if(typeof options.transition!=='boolean')options.transition=self.defaults.transition;var request=new _Request2.default();var response=new _Response2.default();var url=_URL2.default.parse(urlString);if(url.origin!==location.origin){if(options.transition)location.href=url.href;return;}request.dispatcher=this;request.originalUrl=urlString;request.method=method;request.data=options.data;_extends(request,url);var state={path:urlString};if(options.addHistory&&options.changePath){window.history.pushState(state,null,url.href);}else if(options.addHistory&&options.changePath===false){window.history.pushState(state,null,location.href);}else if(options.addHistory===false&&options.changePath){window.history.replaceState(state,null,url.href);}self.goGetCalledHandler=self.gfGetCalledHandler(url.pathname,method,'',{});self.runNextHandler(request,response);};Router.prototype.use=function use(){if(arguments.length===0)return this;var path='/';var type='middleware';var firstParam=arguments[0];if(firstParam!==undefined&&firstParam!==null&&typeof firstParam!=='function'&&!(firstParam instanceof Router)){path=firstParam;Array.prototype.shift.bind(arguments)();}var self=privates(this);var listeners=[];Array.prototype.forEach.bind(arguments)(function(arg){if(typeof arg!=='function'&&!(arg instanceof Router)){return;}if(typeof arg==='function'&&arg.length===4){self.register({path:path,type:type,listener:arg},'error');return;}listeners.push(arg);});if(listeners.length!==0){self.register({path:path,type:type,listeners:listeners});}return this;};Router.prototype.all=function all(path){privates(this).METHOD(path,'all',arguments);return this;};Router.prototype.get=function get(path){privates(this).METHOD(path,'get',arguments);return this;};Router.prototype.post=function post(path){privates(this).METHOD(path,'post',arguments);return this;};Router.prototype.head=function head(path){privates(this).METHOD(path,'head',arguments);return this;};Router.prototype.put=function put(path){privates(this).METHOD(path,'put',arguments);return this;};Router.prototype.delete=function _delete(path){privates(this).METHOD(path,'delete',arguments);return this;};Router.prototype.options=function options(path){privates(this).METHOD(path,'options',arguments);return this;};Router.prototype.route=function route(path){var _this=this;var ret={};['all','get','post','head','put','delete','options'].forEach(function(method){ret[method]=function(){this[method].bind(this,path).apply(this,arguments);return ret;}.bind(_this);});return ret;};Router.prototype.param=function param(name,callback){if(typeof callback!=='function'){return;}var self=privates(this);var names=null;if(Array.isArray(name)){names=name;}else {names=[name];}names.forEach(function(name){if(typeof name!=='string'){return;}if(name in self.paramHandlers){self.paramHandlers[name].listeners.push(callback);return;}self.paramHandlers[name]={listeners:[callback],type:'parameter'};});};_createClass(Router,[{key:'defaults',get:function get(){return privates(this).defaults;},set:function set(obj){var self=privates(this);if((typeof obj==='undefined'?'undefined':_typeof(obj))!=='object'||obj===null)return;for(var prop in self.defaults){if(!(prop in obj))continue;self.defaults[prop]=obj[prop];}}}]);return Router;}();exports.default=Router;var privateMethods={METHOD:function METHOD(path,method,args){if(path===undefined||path===null){return;}if(args.length===1){this.dispatch(path,method);return;}if(args.length===2&&_typeof(args[1])==='object'&&args[1]!==null&&!(args[1] instanceof Router)){this.dispatch(path,method,args[1]);return;}var self=privates(this);var type='method';var listeners=[];Array.prototype.shift.bind(args)();Array.prototype.forEach.bind(args)(function(arg){if(typeof arg!=='function'&&!(arg instanceof Router)){return;}if(typeof arg==='function'&&arg.length===4){self.register({path:path,type:type,method:method,listener:arg},'error');return;}listeners.push(arg);});if(listeners.length!==0){self.register({path:path,type:type,method:method,listeners:listeners});}},getRemainder:function getRemainder(matched){if(matched.index!==0){return null;}var remainder=matched.input.replace(matched[0],'');if(matched[0].slice(-1)!=='/'&&remainder[0]!=='/'&&remainder!==''){return null;}return _URL2.default.addFirstSlash(remainder);},getParams:function getParams(matched,keys,parentParams){var self=privates(this);var params=self.defaults.mergeParams?_extends({},parentParams):{};matched=matched.concat([]);matched.shift();if(matched.length===0){return params;}keys.forEach(function(value){if((typeof value==='undefined'?'undefined':_typeof(value))!=='object'){return;}params[value.name]=matched.shift();});return params;},getChangedParamKeys:function getChangedParamKeys(paramsObserver,params){var keys=[];for(var prop in params){if(paramsObserver[prop]!==params[prop]){paramsObserver[prop]=params[prop];keys.push(prop);}}return keys;},getParamHandlers:function getParamHandlers(keys,req){var self=privates(this);var paramHandlers=[];keys.forEach(function(key){if(key in self.paramHandlers===false){return;}paramHandlers.push({handler:{type:self.paramHandlers[key].type,listeners:self.paramHandlers[key].listeners},paramValue:req.params[key],req:req});});return paramHandlers;},getMatchedMiddlewareHandlers:function getMatchedMiddlewareHandlers(handler,req,remainder){if(typeof handler.listener==='function'){return [{handler:handler,req:req}];}if(handler.listener instanceof Router){return handler.listener.getMatchedHandlers(remainder,req.method,req.baseUrl,req.params);}},getMatchedHandlers:function getMatchedHandlers(path,method,_baseUrl){var self=privates(this);var matchedHandlers=[];self.handlers.forEach(function(handler){var baseUrl=_baseUrl;var matched=handler.pattern.exec(path);if(matched===null){return;}if(handler.type==='middleware'){var remainder=self.getRemainder(matched);if(remainder===null){return;}baseUrl+=_URL2.default.removeTrailingSlash(matched[0]);matchedHandlers.push({handler:handler,matched:matched,baseUrl:baseUrl,remainder:remainder});}else if(method==='all'||handler.method==='all'||handler.method===method){matchedHandlers.push({handler:handler,matched:matched,baseUrl:baseUrl,remainder:'/'});}});return matchedHandlers;},getCalledHandlers:function getCalledHandlers(path,method,baseUrl,params){var _this2=this;var self=privates(this);var matchedHandlers=self.getMatchedHandlers(path,method,baseUrl);var calledHandlers=[];var paramsObserver={};matchedHandlers.forEach(function(matchedHandler){var handler=matchedHandler.handler;var matched=matchedHandler.matched;var remainder=matchedHandler.remainder;var req={app:_this2,baseUrl:matchedHandler.baseUrl,params:self.getParams(matched,handler.pattern.keys,params)};var changedParamKeys=self.getChangedParamKeys(paramsObserver,req.params);var paramHandlers=self.getParamHandlers(changedParamKeys,req);calledHandlers.push.apply(calledHandlers,paramHandlers);calledHandlers.push({handler:handler,req:req,remainder:remainder});});return calledHandlers;},gfGetCalledHandler:function gfGetCalledHandler(path,method,baseUrl,params){var calledHandlers=privates(this).getCalledHandlers(path,method,baseUrl,params);var i=0;var l=0;var childRouter=null;var obj={value:undefined,done:true};return {next:function next(skip){if(calledHandlers.length<=i){return {done:true,value:undefined};}var calledHandler=calledHandlers[i];if(calledHandler.handler.listeners.length<=l){i++;l=0;return this.next();}if(childRouter){var nextHandler=childRouter.getNextHandler(skip);if(nextHandler){return {done:false,value:nextHandler};}l++;childRouter=null;return this.next();}if(l!==0&&skip){i++;l=0;return this.next();}var listener=calledHandler.handler.listeners[l];if(listener instanceof Router){childRouter=privates(listener);childRouter.goGetCalledHandler=childRouter.gfGetCalledHandler(calledHandler.remainder,method,calledHandler.req.baseUrl,calledHandler.req.params);var _nextHandler=childRouter.getNextHandler();if(_nextHandler){return {done:false,value:_nextHandler};}l++;childRouter=null;return this.next();}l++;return {done:false,value:{type:calledHandler.handler.type,listener:listener,req:calledHandler.req,paramValue:calledHandler.paramValue}};}};},getMatchedErrorHandlers:function getMatchedErrorHandlers(request){var self=privates(this);var matchedHandlers=[];var method=request.method;var path=request.pathname;self.errorHandlers.forEach(function(handler){var matched=handler.pattern.exec(path);if(matched===null){return;}if(handler.type==='middleware'){var remainder=self.getRemainder(matched);if(remainder===null){return;}matchedHandlers.push({handler:handler});}else if(handler.method==='all'||method==='all'||handler.method===method){matchedHandlers.push({handler:handler});}});return matchedHandlers;},gfGetMatchedErrorHandler:function gfGetMatchedErrorHandler(request){var matchedHandlers=privates(this).getMatchedErrorHandlers(request);var i=0;return {next:function next(){if(matchedHandlers.length<=i){return {done:true,value:undefined};}return {done:false,value:matchedHandlers[i++]};}};},getNextHandler:function getNextHandler(){var genObj=privates(this).goGetCalledHandler.next(arguments[0]);if(genObj.done){return null;}return genObj.value;},runNextHandler:function runNextHandler(request,response,error){var self=privates(this);var nextHandler=null;if(error==='route'){nextHandler=self.getNextHandler(true);}else if(error!==undefined){self.goGetMatchedErrorHandlers=self.gfGetMatchedErrorHandler(request);self.runNextErrorHandler(request,response,error);return;}else {nextHandler=self.getNextHandler();}if(nextHandler===null){return;}_extends(request,nextHandler.req);var next=self.runNextHandler.bind(self,request,response);if(nextHandler.type==='parameter'){nextHandler.listener(request,response,next,nextHandler.paramValue);return;}nextHandler.listener(request,response,next);},getNextErrorHandler:function getNextErrorHandler(){var genObj=privates(this).goGetMatchedErrorHandlers.next();if(genObj.done){return null;}return genObj.value;},runNextErrorHandler:function runNextErrorHandler(request,response,error){var self=privates(this);var nextHandler=self.getNextErrorHandler();if(nextHandler===null){return;}var next=self.runNextErrorHandler.bind(self,request,response,error);nextHandler.handler.listener(error,request,response,next);},register:function register(properties,destination){var self=privates(this);var handler=properties;if(handler.type==='middleware'){handler.pattern=(0,_pathToRegexp2.default)(handler.path,null,{sensitive:self.defaults.caseSensitive,strict:self.defaults.strict,end:false});}else {handler.pattern=(0,_pathToRegexp2.default)(handler.path,null,{sensitive:self.defaults.caseSensitive,strict:self.defaults.strict,end:true});}if(destination==='error'){self.errorHandlers.push(handler);return;}self.handlers.push(handler);}};

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';exports.__esModule=true;var _querystring=__webpack_require__(124);var _querystring2=_interopRequireDefault(_querystring);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var URL={};URL.parse=function(urlString){var a=document.createElement('a');a.href=urlString;a.href=a.href;var urlObj={};urlObj.protocol=a.protocol;urlObj.secure=a.protocol==='https:';urlObj.host=a.port==='80'?a.host.replace(':80',''):a.host;urlObj.port=a.port==='80'?'':a.port;urlObj.hostname=a.hostname;urlObj.hash=a.hash;urlObj.search=a.search;urlObj.query=_querystring2.default.parse(a.search.slice(1));urlObj.pathname=URL.adjustURLSlash(URL.addFirstSlash(a.pathname));urlObj.path=urlObj.pathname+a.search;urlObj.href=a.href;urlObj.origin=a.protocol+'//'+urlObj.host;return urlObj;};URL.addFirstSlash=function(pathString){return pathString.replace(/^(\/*)?/,'/');};URL.addTrailingSlash=function(pathString){return pathString.replace(/(\/*)?$/,'/');};URL.removeTrailingSlash=function(pathname){return pathname.replace(/\/*$/,'');};URL.adjustURLSlash=function(pathname){return pathname.replace(/\/+/g,'/');};exports.default=URL;

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.decode = exports.parse = __webpack_require__(125);
	exports.encode = exports.stringify = __webpack_require__(126);


/***/ },
/* 125 */
/***/ function(module, exports) {

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


/***/ },
/* 126 */
/***/ function(module, exports) {

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


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var isarray = __webpack_require__(128)
	
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


/***/ },
/* 128 */
/***/ function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ },
/* 129 */
/***/ function(module, exports) {

	"use strict";exports.__esModule=true;exports.default=namespace;function namespace(){var map=new WeakMap();return function(object){if(!map.has(object)){map.set(object,{});}return map.get(object);};};

/***/ },
/* 130 */
/***/ function(module, exports) {

	"use strict";exports.__esModule=true;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Request=function Request(){_classCallCheck(this,Request);};exports.default=Request;

/***/ },
/* 131 */
/***/ function(module, exports) {

	"use strict";exports.__esModule=true;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Response=function Response(){_classCallCheck(this,Response);};exports.default=Response;

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _from = __webpack_require__(133);
	
	var _from2 = _interopRequireDefault(_from);
	
	var _regenerator = __webpack_require__(92);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _toConsumableArray2 = __webpack_require__(137);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _asyncToGenerator2 = __webpack_require__(96);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	var fetchRecords = function () {
		var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(warsURL, className, searchId, start) {
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
		var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(url, record) {
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
	
						case 18:
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
	
	var _dispatcher = __webpack_require__(90);
	
	var _dispatcher2 = _interopRequireDefault(_dispatcher);
	
	var _getMoveText = __webpack_require__(138);
	
	var _getMoveText2 = _interopRequireDefault(_getMoveText);
	
	var _config = __webpack_require__(140);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		inputSearchId: function inputSearchId(value) {
			_dispatcher2.default.emit('inputSearchId', value);
		},
		fetchMatchRecords: function fetchMatchRecords(searchId, urls, start) {
			var _this = this;
	
			return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
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
	
			return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
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

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(134), __esModule: true };

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(50);
	__webpack_require__(135);
	module.exports = __webpack_require__(8).Array.from;

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(9)
	  , $export        = __webpack_require__(6)
	  , toObject       = __webpack_require__(39)
	  , call           = __webpack_require__(103)
	  , isArrayIter    = __webpack_require__(104)
	  , toLength       = __webpack_require__(30)
	  , createProperty = __webpack_require__(136)
	  , getIterFn      = __webpack_require__(105);
	
	$export($export.S + $export.F * !__webpack_require__(112)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(12)
	  , createDesc      = __webpack_require__(20);
	
	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _from = __webpack_require__(133);
	
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

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _Localize = __webpack_require__(139);
	
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

/***/ },
/* 139 */
/***/ function(module, exports) {

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

/***/ },
/* 140 */
/***/ function(module, exports) {

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

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

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
	
	var _inherits2 = __webpack_require__(81);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _config = __webpack_require__(140);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _router = __webpack_require__(151);
	
	var _Notification = __webpack_require__(142);
	
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

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;
	
	var _getPrototypeOf = __webpack_require__(40);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(45);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(143);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(46);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(81);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _class;
	
	var _usestate = __webpack_require__(147);
	
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

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(144);
	
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

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(145), __esModule: true };

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(146);
	var $Object = __webpack_require__(8).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(6);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(16), 'Object', {defineProperty: __webpack_require__(12).f});

/***/ },
/* 147 */
/***/ function(module, exports) {

	const map = new WeakMap();
	const privates = (object) => {
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
	
		this.constructor.observedState.forEach((name) => {
			if(oldState[name] === newState[name]) return;
			this.stateChangedCallback(name, oldState[name], newState[name]);
		});
	}
	
	module.exports = function useState(target) {
		if(typeof target !== 'function') throw new TypeError();
	
		target.prototype.getState = getState;
		target.prototype.setState = setState;
		return target;
	}

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

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
	
	var _inherits2 = __webpack_require__(81);
	
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

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;
	
	var _getPrototypeOf = __webpack_require__(40);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(45);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(143);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(46);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(81);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _actions = __webpack_require__(132);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _index = __webpack_require__(1);
	
	var _MatchRecordSearchForm = __webpack_require__(150);
	
	var _MatchRecordSearchForm2 = _interopRequireDefault(_MatchRecordSearchForm);
	
	var _MatchRecords = __webpack_require__(152);
	
	var _MatchRecords2 = _interopRequireDefault(_MatchRecords);
	
	var _HistoryRecords = __webpack_require__(156);
	
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

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;
	
	var _getPrototypeOf = __webpack_require__(40);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(45);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(143);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(46);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(81);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _class;
	
	var _usestate = __webpack_require__(147);
	
	var _usestate2 = _interopRequireDefault(_usestate);
	
	var _actions = __webpack_require__(132);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _index = __webpack_require__(1);
	
	var _router = __webpack_require__(151);
	
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

/***/ },
/* 151 */
/***/ function(module, exports) {

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

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;
	
	var _getPrototypeOf = __webpack_require__(40);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(45);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(143);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(46);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(81);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _class;
	
	var _usestate = __webpack_require__(147);
	
	var _usestate2 = _interopRequireDefault(_usestate);
	
	var _actions = __webpack_require__(132);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _index = __webpack_require__(1);
	
	var _MatchRecordsTable = __webpack_require__(153);
	
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

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;
	
	var _getPrototypeOf = __webpack_require__(40);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(45);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(143);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(46);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(81);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _class;
	
	var _usestate = __webpack_require__(147);
	
	var _usestate2 = _interopRequireDefault(_usestate);
	
	var _MatchRecordHeaderTr = __webpack_require__(154);
	
	var _MatchRecordHeaderTr2 = _interopRequireDefault(_MatchRecordHeaderTr);
	
	var _MatchRecordTr = __webpack_require__(155);
	
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

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

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
	
	var _inherits2 = __webpack_require__(81);
	
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

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;
	
	var _getPrototypeOf = __webpack_require__(40);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(45);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(143);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(46);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(81);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _class;
	
	var _usestate = __webpack_require__(147);
	
	var _usestate2 = _interopRequireDefault(_usestate);
	
	var _actions = __webpack_require__(132);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _index = __webpack_require__(1);
	
	var _router = __webpack_require__(151);
	
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

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;
	
	var _getPrototypeOf = __webpack_require__(40);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(45);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(143);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(46);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(81);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _class;
	
	var _usestate = __webpack_require__(147);
	
	var _usestate2 = _interopRequireDefault(_usestate);
	
	var _actions = __webpack_require__(132);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _index = __webpack_require__(1);
	
	var _MatchRecordsTable = __webpack_require__(153);
	
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

/***/ },
/* 157 */
/***/ function(module, exports) {

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

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2U4N2RjZjJmOTNiNmVhOWEwNmIiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zdG9yZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3N0b3Jlcy9Ob3RpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fa2V5b2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXByb3RvLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvZGlzcGF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3RvcmVzL01hdGNoUmVjb3JkU2VhcmNoLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW52b2tlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21pY3JvdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3N0b3Jlcy9NYXRjaFJlY29yZHMuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3N0b3Jlcy9NYXRjaFJlY29yZC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3RvcmVzL0hpc3RvcnlSZWNvcmRzLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xlYWRzLXJvdXRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xlYWRzLXJvdXRlci9saWIvbG9jYXRpb25PcmlnaW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sZWFkcy1yb3V0ZXIvbGliL2xlYWRzLmpzIiwid2VicGFjazovLy8uL34vbGVhZHMtcm91dGVyL2xpYi9Sb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sZWFkcy1yb3V0ZXIvbGliL1VSTC5qcyIsIndlYnBhY2s6Ly8vLi9+L3F1ZXJ5c3RyaW5nL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcXVlcnlzdHJpbmcvZGVjb2RlLmpzIiwid2VicGFjazovLy8uL34vcXVlcnlzdHJpbmcvZW5jb2RlLmpzIiwid2VicGFjazovLy8uL34vcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9pc2FycmF5L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vbGVhZHMtcm91dGVyL2xpYi9uYW1lc3BhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sZWFkcy1yb3V0ZXIvbGliL1JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sZWFkcy1yb3V0ZXIvbGliL1Jlc3BvbnNlLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9hY3Rpb25zL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvYXJyYXkvZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5LmZyb20uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3JlYXRlLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21tb24vZ2V0TW92ZVRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbW1vbi9Mb2NhbGl6ZS5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29uZmlnLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Ob3RpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi91c2VzdGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvTWF0Y2hSZWNvcmRTZWFyY2hGb3JtLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21tb24vcm91dGVyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL01hdGNoUmVjb3Jkcy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9NYXRjaFJlY29yZHNUYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9NYXRjaFJlY29yZEhlYWRlclRyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL01hdGNoUmVjb3JkVHIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvSGlzdG9yeVJlY29yZHMuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbW1vbi9zZW5kUGFnZVZpZXcuanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJub3RpZmljYXRpb24iLCJtYXRjaFJlY29yZFNlYXJjaCIsIm1hdGNoUmVjb3JkcyIsIm1hdGNoUmVjb3JkIiwiaGlzdG9yeVJlY29yZHMiLCJpbml0aWFsU3RhdGUiLCJ0ZXh0IiwiZGlzcGxheVRpbWUiLCJkaXNwbGF5SWQiLCJOb3RpZmljYXRpb24iLCJvbiIsImVtaXQiLCJzZWFyY2hJZCIsInN0YXJ0IiwiaW50ZXJ2YWwiLCJ1cmxzIiwiaXNMaW1pdCIsImlzRmV0Y2hpbmciLCJNYXRjaFJlY29yZFNlYXJjaCIsIkpTT04iLCJwYXJzZSIsInZhbHVlIiwicmVjb3JkcyIsImxlbmd0aCIsIk1hdGNoUmVjb3JkcyIsImNvbmNhdCIsInNvcnQiLCJhIiwiYiIsImFUaW1lIiwiRGF0ZSIsInRpbWUiLCJnZXRUaW1lIiwiYlRpbWUiLCJNYXRjaFJlY29yZCIsInJlY29yZCIsImlzRmV0Y2hpbmdLaWZ1Iiwia2lmdSIsImRvZXNIYXZlS2lmdSIsInNhdmVSZWNvcmQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidW5zaGlmdCIsImZvckVhY2giLCJfcmVjb3JkIiwiaSIsImJsYWNrIiwid2hpdGUiLCJzcGxpY2UiLCJzbGljZSIsInNldEl0ZW0iLCJzaG91bGREaXNwbGF5IiwiSGlzdG9yeVJlY29yZHMiLCJ0ZW1wbGF0ZSIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJBcHAiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwicmVwbGFjZUNoaWxkIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJsYXN0RWxlbWVudENoaWxkIiwibWFpbiIsInF1ZXJ5U2VsZWN0b3IiLCJpZCIsImluZGV4Iiwicm91dGVyIiwiUm91dGVyIiwidXNlIiwicmVxIiwicmVzIiwibmV4dCIsInJlbW92ZUNoaWxkIiwiZmlyc3RDaGlsZCIsImdldCIsImRlcGxveSIsInF1ZXJ5IiwidW5kZWZpbmVkIiwiaW5wdXRTZWFyY2hJZCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiZGV0YWlsIiwibWV0aG9kIiwicGF0aCIsImFkZEhpc3RvcnkiLCJsb2NhdGlvbiIsImhyZWYiLCJjaGFuZ2VQYXRoIiwiSFRNTEVsZW1lbnQiLCJjdXN0b21FbGVtZW50cyIsImRlZmluZSIsIndhcnNVUkwiLCJjbGFzc05hbWUiLCJmZXRjaCIsInNlcnZlciIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcGxhY2UiLCJtb2RlIiwicmVzcG9uc2UiLCJkb2MiLCJET01QYXJzZXIiLCJwYXJzZUZyb21TdHJpbmciLCJldmFsIiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW1lbnQiLCJjaGlsZHJlbiIsInRleHRDb250ZW50IiwiYmxhY2tVc2VyUGFnZSIsIndhcnNPcmlnaW4iLCJnZXRBdHRyaWJ1dGUiLCJ3aGl0ZVVzZXJQYWdlIiwid2lubmVyIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJ1cmwiLCJpc1dpbm5lciIsInNoaWZ0IiwiZmV0Y2hSZWNvcmRzIiwicXVlcnlJbmRleCIsImluZGV4T2YiLCJtb3ZlcyIsIm1hdGNoIiwic3BsaXQiLCJwb3AiLCJraWZ1VGV4dCIsIm1hcCIsIm1vdmUiLCJtb3ZlVGV4dCIsInAxIiwicDIiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJjaGFyQ29kZUF0Iiwiam9pbiIsImZldGNoS2lmdSIsImZldGNoTWF0Y2hSZWNvcmRzIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJzaG93SGlzdG9yeVJlY29yZHMiLCJoaWRlSGlzdG9yeVJlY29yZHMiLCJjb3B5S2lmdSIsImNvcHlUZXh0IiwidW5tb3VudEluZGV4IiwidGV4dGFyZWEiLCJzZWxlY3QiLCJleGVjQ29tbWFuZCIsImthbmppTnVtYmVyIiwidCIsInBpZWNlS2FuamlNYXAiLCJnZXRQaWVjZUthbmppTWFwIiwiaXNQcm9tb3RlZCIsInB0eXBlIiwidW5wcm9tb3RlIiwiZ2V0TW92ZVRleHQiLCJuIiwicHJldiIsIm51bV9zdHIiLCJwaWVjZV9zdHIiLCJiZWZfc3RyIiwiY2hhckF0IiwicGxhY2UiLCJzdWJzdHIiLCJwaWVjZVNhbWVQbGFjZSIsIm9yaWdpbiIsIm9sZCIsInVucHJvbW90ZWQiLCJnZXRMb2NhbGUiLCJMb2NhbGl6ZSIsImxvY2FsZSIsImltZ1VSTCIsInZhbHVlcyIsInNldExvY2FsZSIsImxjbCIsImtleSIsImNoYW5nZUtlaXNlaSIsImtlaXNlaSIsImtlaXNlaXMiLCJsY2xfa2Vpc2VpcyIsImlkeCIsImdldEltZ1VSTCIsImltZyIsImRpciIsInNldEltZ1VSTCIsIkFycmF5IiwiZ2V0RmluaXNoTWFwIiwiZmluaXNoTWFwIiwiaG9zdCIsIkhlYWRlciIsIm9uY2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsInB1c2hTdGF0ZSIsImN1cnJlbnRUYXJnZXQiLCJOb3RpZmljYWlvbiIsImhhbmRsZU5vdGlmaWNhdGlvbkNoYW5nZSIsImJpbmQiLCJ0aW1lcklkIiwicCIsInNldFN0YXRlIiwicmVtb3ZlTGlzdGVuZXIiLCJuYW1lIiwib2xkVmFsdWUiLCJuZXdWYWx1ZSIsInN0eWxlIiwiZGlzcGxheSIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJGb290ZXIiLCJJbmRleCIsIk1hdGNoUmVjb3JkU2VhcmNoRm9ybSIsImhhbmRsZU1hdGNoUmVjb3JkU2VhcmNoQ2hhbmdlIiwiZm9ybSIsInNlYXJjaElkSW5wdXQiLCJzdWJtaXRCdXR0b24iLCJwYXRobmFtZSIsImRpc2FibGVkIiwiYnJvd3Nlckhpc3RvcnkiLCJldmVudCIsIkN1c3RvbUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsInJlcGxhY2VTdGF0ZSIsImhhbmRsZU1hdGNoUmVjb3Jkc0NoYW5nZSIsIm1hdGNoUmVjb3Jkc1RhYmxlIiwiTWF0Y2hSZWNvcmRzVGFibGUiLCJ0Ym9keSIsIk1hdGNoUmVjb3JkSGVhZGVyVHIiLCJ0aHMiLCJmaWxsIiwiTWF0Y2hSZWNvcmRUciIsImhhbmRsZU1hdGNoUmVjb3JkQ2hhbmdlIiwidGRzIiwia2lmdUNvcHlCdXR0b24iLCJoYW5kbGVVc2VyQW5jaG9yQ2xpY2siLCJhZGQiLCJoYW5kbGVIaXN0b3J5UmVjb3Jkc0NoYW5nZSIsInNlbmRQYWdlVmlldyIsImdhIiwicGFnZSIsInNlYXJjaCIsInRpdGxlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOzs7O0FBQ0E7Ozs7OztBQUVBQSxVQUFTQyxJQUFULENBQWNDLFdBQWQsQ0FBMEIsbUJBQTFCLEU7Ozs7Ozs7Ozs7Ozs7QUNIQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFTyxLQUFNQyxzQ0FBZSw0QkFBckI7QUFDQSxLQUFNQyxnREFBb0IsaUNBQTFCO0FBQ0EsS0FBTUMsc0NBQWUsNEJBQXJCO0FBQ0EsS0FBTUMsb0NBQWMsMkJBQXBCO0FBQ0EsS0FBTUMsMENBQWlCLDhCQUF2QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWUDs7OztBQUNBOzs7Ozs7QUFFQSxLQUFNQyxlQUFlO0FBQ3BCQyxRQUFNLEVBRGM7QUFF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QUFDQSxnQkFBZSxTQUFTO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFHO0FBQ0gscUJBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQXlEO0FBQ3pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBLFlBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0EseUNBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDRCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFVBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLGFBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLCtDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTs7QUFFQSxZQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBLCtDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0EsK0NBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0EsK0NBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbHRCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtB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QWVDLE1BQWYsQ0FBc0IsaUJBQXRCLEVBQXlDdkMsY0FBekMsRTs7Ozs7Ozs7Ozs7bUJDbEV3QndMLFk7QUFBVCxVQUFTQSxZQUFULEdBQXdCO0FBQ3RDLE1BQUcsQ0FBRTdKLE9BQU84SixFQUFaLEVBQWdCO0FBQ2hCQSxLQUFHLE1BQUgsRUFBVyxVQUFYLEVBQXVCO0FBQ3RCQyxTQUFNeEosU0FBU2lJLFFBQVQsR0FBb0JqSSxTQUFTeUosTUFEYjtBQUV0QkMsVUFBT25QLFNBQVNtUDtBQUZNLEdBQXZCO0FBSUEsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjZTg3ZGNmMmY5M2I2ZWE5YTA2YiIsImltcG9ydCBzdG9yZXMgZnJvbSAnLi9zdG9yZXMvaW5kZXguanMnO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAuanMnO1xyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChuZXcgQXBwKCkpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9pbmRleC5qcyIsImltcG9ydCBOb3RpZmljYXRpb24gZnJvbSAnLi9Ob3RpZmljYXRpb24uanMnO1xyXG5pbXBvcnQgTWF0Y2hSZWNvcmRTZWFyY2ggZnJvbSAnLi9NYXRjaFJlY29yZFNlYXJjaC5qcyc7XHJcbmltcG9ydCBNYXRjaFJlY29yZHMgZnJvbSAnLi9NYXRjaFJlY29yZHMuanMnO1xyXG5pbXBvcnQgTWF0Y2hSZWNvcmQgZnJvbSAnLi9NYXRjaFJlY29yZC5qcyc7XHJcbmltcG9ydCBIaXN0b3J5UmVjb3JkcyBmcm9tICcuL0hpc3RvcnlSZWNvcmRzLmpzJztcclxuXHJcbmV4cG9ydCBjb25zdCBub3RpZmljYXRpb24gPSBuZXcgTm90aWZpY2F0aW9uKCk7XHJcbmV4cG9ydCBjb25zdCBtYXRjaFJlY29yZFNlYXJjaCA9IG5ldyBNYXRjaFJlY29yZFNlYXJjaCgpO1xyXG5leHBvcnQgY29uc3QgbWF0Y2hSZWNvcmRzID0gbmV3IE1hdGNoUmVjb3JkcygpO1xyXG5leHBvcnQgY29uc3QgbWF0Y2hSZWNvcmQgPSBuZXcgTWF0Y2hSZWNvcmQoKTtcclxuZXhwb3J0IGNvbnN0IGhpc3RvcnlSZWNvcmRzID0gbmV3IEhpc3RvcnlSZWNvcmRzKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3N0b3Jlcy9pbmRleC5qcyIsImltcG9ydCBFbWl0dGVyIGZyb20gJ2V2ZW50cyc7XHJcbmltcG9ydCBkaXNwYXRjaGVyIGZyb20gJy4uL2Rpc3BhdGNoZXIuanMnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdHRleHQ6ICcnLFxyXG5cdGRpc3BsYXlUaW1lOiAwLFxyXG5cdGRpc3BsYXlJZDogMCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90aWZpY2F0aW9uIGV4dGVuZHMgRW1pdHRlciB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgaW5pdGlhbFN0YXRlKTtcclxuXHJcblx0XHRkaXNwYXRjaGVyLm9uKCdmZXRjaE1hdGNoUmVjb3Jkc0ZhaWxkJywgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLmRpc3BsYXlJZCsrO1xyXG5cdFx0XHR0aGlzLmRpc3BsYXlUaW1lID0gNTAwMDtcclxuXHRcdFx0dGhpcy50ZXh0ID0gJ+WvvuWxgOOBruiqreOBv+i+vOOBv+OBq+WkseaVl+OBl+OBvuOBl+OBnyc7XHJcblxyXG5cdFx0XHR0aGlzLmVtaXQoJ0NIQU5HRScpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0ZGlzcGF0Y2hlci5vbignZmV0Y2hLaWZ1RmFpbGVkJywgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLmRpc3BsYXlJZCsrO1xyXG5cdFx0XHR0aGlzLmRpc3BsYXlUaW1lID0gNTAwMDtcclxuXHRcdFx0dGhpcy50ZXh0ID0gJ+aji+itnOOBruiqreOBv+i+vOOBv+OBq+WkseaVl+OBl+OBvuOBl+OBnyc7XHJcblxyXG5cdFx0XHR0aGlzLmVtaXQoJ0NIQU5HRScpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0ZGlzcGF0Y2hlci5vbignY29weUtpZnUnLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuZGlzcGxheUlkKytcclxuXHRcdFx0dGhpcy5kaXNwbGF5VGltZSA9IDcwMDA7XHJcblx0XHRcdHRoaXMudGV4dCA9ICfmo4vorZzjgpLjgq/jg6rjg4Pjg5fjg5zjg7zjg4njgavjgrPjg5Tjg7zjgZfjgb7jgZfjgZ8nO1xyXG5cclxuXHRcdFx0dGhpcy5lbWl0KCdDSEFOR0UnKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zdG9yZXMvTm90aWZpY2F0aW9uLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmFzc2lnbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0Jywge2Fzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV1cbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICAgIGlmKHRoaXMgaW5zdGFuY2VvZiBDKXtcbiAgICAgICAgICBzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQztcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYoSVNfUFJPVE8pe1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0paGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsICRhc3NpZ24gID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgdmFyIEEgPSB7fVxuICAgICwgQiA9IHt9XG4gICAgLCBTID0gU3ltYm9sKClcbiAgICAsIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbihrKXsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCAgICAgPSB0b09iamVjdCh0YXJnZXQpXG4gICAgLCBhTGVuICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGluZGV4ID0gMVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZlxuICAgICwgaXNFbnVtICAgICA9IHBJRS5mO1xuICB3aGlsZShhTGVuID4gaW5kZXgpe1xuICAgIHZhciBTICAgICAgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSlcbiAgICAgICwga2V5cyAgID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBqICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBqKWlmKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pe1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaGFzICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b0lPYmplY3QgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKVxuICAsIElFX1BST1RPICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIG5hbWVzKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwga2V5O1xuICBmb3Ioa2V5IGluIE8paWYoa2V5ICE9IElFX1BST1RPKWhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpe1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCB0b0luZGV4ICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1heCAgICAgICA9IE1hdGgubWF4XG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjkgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgdG9PYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCAkZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0UHJvdG90eXBlT2YnLCBmdW5jdGlvbigpe1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YoaXQpe1xuICAgIHJldHVybiAkZ2V0UHJvdG90eXBlT2YodG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24oTyl7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYoaGFzKE8sIElFX1BST1RPKSlyZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3Ipe1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBjb3JlICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgZmFpbHMgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSwgZXhlYyl7XG4gIHZhciBmbiAgPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV1cbiAgICAsIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uKCl7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc2VsZiwgY2FsbCkge1xuICBpZiAoIXNlbGYpIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gY2FsbCAmJiAoKHR5cGVvZiBjYWxsID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShjYWxsKSkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pdGVyYXRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiKTtcblxudmFyIF9pdGVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pdGVyYXRvcik7XG5cbnZhciBfc3ltYm9sID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sXCIpO1xuXG52YXIgX3N5bWJvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2wpO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIF9pdGVyYXRvcjIuZGVmYXVsdCA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YoX2l0ZXJhdG9yMi5kZWZhdWx0KSA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL193a3MtZXh0JykuZignaXRlcmF0b3InKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCAgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbihpdGVyYXRlZCl7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGluZGV4ID0gdGhpcy5faVxuICAgICwgcG9pbnQ7XG4gIGlmKGluZGV4ID49IE8ubGVuZ3RoKXJldHVybiB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZX07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7dmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZX07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxuICAgICAgLCBsID0gcy5sZW5ndGhcbiAgICAgICwgYSwgYjtcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJdGVyYXRvcnMgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgJGVudHJpZXMgICA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWRcbiAgICAsICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlXG4gICAgLCBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRhbnlOYXRpdmUpe1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKSk7XG4gICAgaWYoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpe1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBkZXNjcmlwdG9yICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZFBzICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgRW1wdHkgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgUFJPVE9UWVBFICAgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbigpe1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKVxuICAgICwgaSAgICAgID0gZW51bUJ1Z0tleXMubGVuZ3RoXG4gICAgLCBsdCAgICAgPSAnPCdcbiAgICAsIGd0ICAgICA9ICc+J1xuICAgICwgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUoaS0tKWRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKXtcbiAgdmFyIHJlc3VsdDtcbiAgaWYoTyAhPT0gbnVsbCl7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkUCAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpe1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgICA9IGdldEtleXMoUHJvcGVydGllcylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpID0gMFxuICAgICwgUDtcbiAgd2hpbGUobGVuZ3RoID4gaSlkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaGFzID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc3RvcmUgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKVxuICAsIHVpZCAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIFN5bWJvbCAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2xcbiAgLCBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgSXRlcmF0b3JzICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5mb3IodmFyIGNvbGxlY3Rpb25zID0gWydOb2RlTGlzdCcsICdET01Ub2tlbkxpc3QnLCAnTWVkaWFMaXN0JywgJ1N0eWxlU2hlZXRMaXN0JywgJ0NTU1J1bGVMaXN0J10sIGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgdmFyIE5BTUUgICAgICAgPSBjb2xsZWN0aW9uc1tpXVxuICAgICwgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXVxuICAgICwgcHJvdG8gICAgICA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSloaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpXG4gICwgc3RlcCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgdG9JT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkb25lLCB2YWx1ZSl7XG4gIHJldHVybiB7dmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmV9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN5bWJvbCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuU3ltYm9sO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBERVNDUklQVE9SUyAgICA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgTUVUQSAgICAgICAgICAgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZXG4gICwgJGZhaWxzICAgICAgICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICwgc2hhcmVkICAgICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIHVpZCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCB3a3MgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpXG4gICwgd2tzRXh0ICAgICAgICAgPSByZXF1aXJlKCcuL193a3MtZXh0JylcbiAgLCB3a3NEZWZpbmUgICAgICA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKVxuICAsIGtleU9mICAgICAgICAgID0gcmVxdWlyZSgnLi9fa2V5b2YnKVxuICAsIGVudW1LZXlzICAgICAgID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJylcbiAgLCBpc0FycmF5ICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLWFycmF5JylcbiAgLCBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBfY3JlYXRlICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGdPUE5FeHQgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0JylcbiAgLCAkR09QRCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJylcbiAgLCAkRFAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgJGtleXMgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QRCAgICAgICAgICAgPSAkR09QRC5mXG4gICwgZFAgICAgICAgICAgICAgPSAkRFAuZlxuICAsIGdPUE4gICAgICAgICAgID0gZ09QTkV4dC5mXG4gICwgJFN5bWJvbCAgICAgICAgPSBnbG9iYWwuU3ltYm9sXG4gICwgJEpTT04gICAgICAgICAgPSBnbG9iYWwuSlNPTlxuICAsIF9zdHJpbmdpZnkgICAgID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5XG4gICwgUFJPVE9UWVBFICAgICAgPSAncHJvdG90eXBlJ1xuICAsIEhJRERFTiAgICAgICAgID0gd2tzKCdfaGlkZGVuJylcbiAgLCBUT19QUklNSVRJVkUgICA9IHdrcygndG9QcmltaXRpdmUnKVxuICAsIGlzRW51bSAgICAgICAgID0ge30ucHJvcGVydHlJc0VudW1lcmFibGVcbiAgLCBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5JylcbiAgLCBBbGxTeW1ib2xzICAgICA9IHNoYXJlZCgnc3ltYm9scycpXG4gICwgT1BTeW1ib2xzICAgICAgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKVxuICAsIE9iamVjdFByb3RvICAgID0gT2JqZWN0W1BST1RPVFlQRV1cbiAgLCBVU0VfTkFUSVZFICAgICA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbidcbiAgLCBRT2JqZWN0ICAgICAgICA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbigpe1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7dmFsdWU6IDd9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uKGl0LCBrZXksIEQpe1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYocHJvdG9EZXNjKWRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bylkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uKHRhZyl7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpe1xuICBpZihpdCA9PT0gT2JqZWN0UHJvdG8pJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYoaGFzKEFsbFN5bWJvbHMsIGtleSkpe1xuICAgIGlmKCFELmVudW1lcmFibGUpe1xuICAgICAgaWYoIWhhcyhpdCwgSElEREVOKSlkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZihoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKWl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwge2VudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCl7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKVxuICAgICwgaSAgICA9IDBcbiAgICAsIGwgPSBrZXlzLmxlbmd0aFxuICAgICwga2V5O1xuICB3aGlsZShsID4gaSkkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKXtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpe1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZih0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSlyZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgaXQgID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZihEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIHZhciBuYW1lcyAgPSBnT1BOKHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZighaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KXtcbiAgdmFyIElTX09QICA9IGl0ID09PSBPYmplY3RQcm90b1xuICAgICwgbmFtZXMgID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZihoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZighVVNFX05BVElWRSl7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKXtcbiAgICBpZih0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCl0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIGlmKHRoaXMgPT09IE9iamVjdFByb3RvKSRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZihERVNDUklQVE9SUyAmJiBzZXR0ZXIpc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7Y29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXR9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiAgID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5Jykpe1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbihuYW1lKXtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtTeW1ib2w6ICRTeW1ib2x9KTtcblxuZm9yKHZhciBzeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGkgPSAwOyBzeW1ib2xzLmxlbmd0aCA+IGk7ICl3a3Moc3ltYm9sc1tpKytdKTtcblxuZm9yKHZhciBzeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrc0RlZmluZShzeW1ib2xzW2krK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uKGtleSl7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihrZXkpe1xuICAgIGlmKGlzU3ltYm9sKGtleSkpcmV0dXJuIGtleU9mKFN5bWJvbFJlZ2lzdHJ5LCBrZXkpO1xuICAgIHRocm93IFR5cGVFcnJvcihrZXkgKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uKCl7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHthOiBTfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KXtcbiAgICBpZihpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSlyZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICB2YXIgYXJncyA9IFtpdF1cbiAgICAgICwgaSAgICA9IDFcbiAgICAgICwgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZih0eXBlb2YgcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykkcmVwbGFjZXIgPSByZXBsYWNlcjtcbiAgICBpZigkcmVwbGFjZXIgfHwgIWlzQXJyYXkocmVwbGFjZXIpKXJlcGxhY2VyID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XG4gICAgICBpZigkcmVwbGFjZXIpdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmKCFpc1N5bWJvbCh2YWx1ZSkpcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIE1FVEEgICAgID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKVxuICAsIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBoYXMgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgc2V0RGVzYyAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaWQgICAgICAgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24oaXQpe1xuICBzZXREZXNjKGl0LCBNRVRBLCB7dmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9fSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZighaXNPYmplY3QoaXQpKXJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmKCFoYXMoaXQsIE1FVEEpKXtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmKCFpc0V4dGVuc2libGUoaXQpKXJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZighY3JlYXRlKXJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG4gIGlmKCFoYXMoaXQsIE1FVEEpKXtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmKCFpc0V4dGVuc2libGUoaXQpKXJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKXNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiAgICAgIE1FVEEsXG4gIE5FRUQ6ICAgICBmYWxzZSxcbiAgZmFzdEtleTogIGZhc3RLZXksXG4gIGdldFdlYWs6ICBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCB3a3NFeHQgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcy1leHQnKVxuICAsIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwge3ZhbHVlOiB3a3NFeHQuZihuYW1lKX0pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXRLZXlzICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIGVsKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBrZXlzICAgPSBnZXRLZXlzKE8pXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaW5kZXggID0gMFxuICAgICwga2V5O1xuICB3aGlsZShsZW5ndGggPiBpbmRleClpZihPW2tleSA9IGtleXNbaW5kZXgrK11dID09PSBlbClyZXR1cm4ga2V5O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2tleW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciByZXN1bHQgICAgID0gZ2V0S2V5cyhpdClcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmKGdldFN5bWJvbHMpe1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdClcbiAgICAgICwgaXNFbnVtICA9IHBJRS5mXG4gICAgICAsIGkgICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShzeW1ib2xzLmxlbmd0aCA+IGkpaWYoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZyl7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgZ09QTiAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mXG4gICwgdG9TdHJpbmcgID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbihpdCl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdPUE4oaXQpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJyA/IGdldFdpbmRvd05hbWVzKGl0KSA6IGdPUE4odG9JT2JqZWN0KGl0KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanNcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qc1xuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHBJRSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgZ09QRCAgICAgICAgICAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKXtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKGhhcyhPLCBQKSlyZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanNcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ29ic2VydmFibGUnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9zZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpO1xuXG52YXIgX3NldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NldFByb3RvdHlwZU9mKTtcblxudmFyIF9jcmVhdGUgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvY3JlYXRlXCIpO1xuXG52YXIgX2NyZWF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGUpO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgKHR5cGVvZiBzdXBlckNsYXNzID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShzdXBlckNsYXNzKSkpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gKDAsIF9jcmVhdGUyLmRlZmF1bHQpKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQgPyAoMCwgX3NldFByb3RvdHlwZU9mMi5kZWZhdWx0KShzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LnNldFByb3RvdHlwZU9mO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMy4xOSBPYmplY3Quc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7c2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldH0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBjaGVjayA9IGZ1bmN0aW9uKE8sIHByb3RvKXtcbiAgYW5PYmplY3QoTyk7XG4gIGlmKCFpc09iamVjdChwcm90bykgJiYgcHJvdG8gIT09IG51bGwpdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZnVuY3Rpb24odGVzdCwgYnVnZ3ksIHNldCl7XG4gICAgICB0cnkge1xuICAgICAgICBzZXQgPSByZXF1aXJlKCcuL19jdHgnKShGdW5jdGlvbi5jYWxsLCByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmYoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldCwgMik7XG4gICAgICAgIHNldCh0ZXN0LCBbXSk7XG4gICAgICAgIGJ1Z2d5ID0gISh0ZXN0IGluc3RhbmNlb2YgQXJyYXkpO1xuICAgICAgfSBjYXRjaChlKXsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pe1xuICAgICAgICBjaGVjayhPLCBwcm90byk7XG4gICAgICAgIGlmKGJ1Z2d5KU8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1wcm90by5qc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUnKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlKFAsIEQpe1xuICByZXR1cm4gJE9iamVjdC5jcmVhdGUoUCwgRCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtjcmVhdGU6IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgdGhpcy5fZXZlbnRzID0gdGhpcy5fZXZlbnRzIHx8IHt9O1xuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG5FdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbihuKSB7XG4gIGlmICghaXNOdW1iZXIobikgfHwgbiA8IDAgfHwgaXNOYU4obikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCduIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXInKTtcbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciBlciwgaGFuZGxlciwgbGVuLCBhcmdzLCBpLCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAodHlwZSA9PT0gJ2Vycm9yJykge1xuICAgIGlmICghdGhpcy5fZXZlbnRzLmVycm9yIHx8XG4gICAgICAgIChpc09iamVjdCh0aGlzLl9ldmVudHMuZXJyb3IpICYmICF0aGlzLl9ldmVudHMuZXJyb3IubGVuZ3RoKSkge1xuICAgICAgZXIgPSBhcmd1bWVudHNbMV07XG4gICAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcignVW5jYXVnaHQsIHVuc3BlY2lmaWVkIFwiZXJyb3JcIiBldmVudC4gKCcgKyBlciArICcpJyk7XG4gICAgICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVyID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChpc1VuZGVmaW5lZChoYW5kbGVyKSlcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKGlzRnVuY3Rpb24oaGFuZGxlcikpIHtcbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIC8vIGZhc3QgY2FzZXNcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0pO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIHNsb3dlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgIGhhbmRsZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGhhbmRsZXIpKSB7XG4gICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgbGlzdGVuZXJzID0gaGFuZGxlci5zbGljZSgpO1xuICAgIGxlbiA9IGxpc3RlbmVycy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKVxuICAgICAgbGlzdGVuZXJzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIG07XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgaWYgKHRoaXMuX2V2ZW50cy5uZXdMaXN0ZW5lcilcbiAgICB0aGlzLmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgaXNGdW5jdGlvbihsaXN0ZW5lci5saXN0ZW5lcikgP1xuICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgZWxzZSBpZiAoaXNPYmplY3QodGhpcy5fZXZlbnRzW3R5cGVdKSlcbiAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdLnB1c2gobGlzdGVuZXIpO1xuICBlbHNlXG4gICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gW3RoaXMuX2V2ZW50c1t0eXBlXSwgbGlzdGVuZXJdO1xuXG4gIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pICYmICF0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkKSB7XG4gICAgaWYgKCFpc1VuZGVmaW5lZCh0aGlzLl9tYXhMaXN0ZW5lcnMpKSB7XG4gICAgICBtID0gdGhpcy5fbWF4TGlzdGVuZXJzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgaWYgKG0gJiYgbSA+IDAgJiYgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCA+IG0pIHtcbiAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQgPSB0cnVlO1xuICAgICAgY29uc29sZS5lcnJvcignKG5vZGUpIHdhcm5pbmc6IHBvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgJyArXG4gICAgICAgICAgICAgICAgICAgICdsZWFrIGRldGVjdGVkLiAlZCBsaXN0ZW5lcnMgYWRkZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAnVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gaW5jcmVhc2UgbGltaXQuJyxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCk7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUudHJhY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gbm90IHN1cHBvcnRlZCBpbiBJRSAxMFxuICAgICAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIHZhciBmaXJlZCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGcoKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBnKTtcblxuICAgIGlmICghZmlyZWQpIHtcbiAgICAgIGZpcmVkID0gdHJ1ZTtcbiAgICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgZy5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICB0aGlzLm9uKHR5cGUsIGcpO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLy8gZW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWRcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbGlzdCwgcG9zaXRpb24sIGxlbmd0aCwgaTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXR1cm4gdGhpcztcblxuICBsaXN0ID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuICBsZW5ndGggPSBsaXN0Lmxlbmd0aDtcbiAgcG9zaXRpb24gPSAtMTtcblxuICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHxcbiAgICAgIChpc0Z1bmN0aW9uKGxpc3QubGlzdGVuZXIpICYmIGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG5cbiAgfSBlbHNlIGlmIChpc09iamVjdChsaXN0KSkge1xuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tID4gMDspIHtcbiAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fFxuICAgICAgICAgIChsaXN0W2ldLmxpc3RlbmVyICYmIGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICByZXR1cm4gdGhpcztcblxuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgbGlzdC5sZW5ndGggPSAwO1xuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdC5zcGxpY2UocG9zaXRpb24sIDEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdGVuZXIpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIGtleSwgbGlzdGVuZXJzO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgaWYgKCF0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICBmb3IgKGtleSBpbiB0aGlzLl9ldmVudHMpIHtcbiAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICB9XG4gICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzRnVuY3Rpb24obGlzdGVuZXJzKSkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgfSBlbHNlIGlmIChsaXN0ZW5lcnMpIHtcbiAgICAvLyBMSUZPIG9yZGVyXG4gICAgd2hpbGUgKGxpc3RlbmVycy5sZW5ndGgpXG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tsaXN0ZW5lcnMubGVuZ3RoIC0gMV0pO1xuICB9XG4gIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIHJldDtcbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXQgPSBbXTtcbiAgZWxzZSBpZiAoaXNGdW5jdGlvbih0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIHJldCA9IFt0aGlzLl9ldmVudHNbdHlwZV1dO1xuICBlbHNlXG4gICAgcmV0ID0gdGhpcy5fZXZlbnRzW3R5cGVdLnNsaWNlKCk7XG4gIHJldHVybiByZXQ7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIGlmICh0aGlzLl9ldmVudHMpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICAgIGlmIChpc0Z1bmN0aW9uKGV2bGlzdGVuZXIpKVxuICAgICAgcmV0dXJuIDE7XG4gICAgZWxzZSBpZiAoZXZsaXN0ZW5lcilcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgfVxuICByZXR1cm4gMDtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xufTtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2V2ZW50cy9ldmVudHMuanNcbi8vIG1vZHVsZSBpZCA9IDg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBFbWl0dGVyIGZyb20gJ2V2ZW50cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgRW1pdHRlcigpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9kaXNwYXRjaGVyLmpzIiwiaW1wb3J0IEVtaXR0ZXIgZnJvbSAnZXZlbnRzJztcclxuaW1wb3J0IGRpc3BhdGNoZXIgZnJvbSAnLi4vZGlzcGF0Y2hlci5qcyc7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0c2VhcmNoSWQ6ICcnLFxyXG5cdHN0YXJ0OiAwLFxyXG5cdGludGVydmFsOiAxMCxcclxuXHR1cmxzOiB7XHJcblx0XHQnMTDliIfjgownOiAnaHR0cHM6Ly9zaG9naXdhcnMuaGVyb3ouanAvdXNlcnMvaGlzdG9yeS86aWQ/c3RhcnQ9OnN0YXJ0JyxcclxuXHRcdCcz5YiH44KMJzogJ2h0dHBzOi8vc2hvZ2l3YXJzLmhlcm96LmpwL3VzZXJzL2hpc3RvcnkvOmlkP2d0eXBlPXNiJnN0YXJ0PTpzdGFydCcsXHJcblx0XHQnMTDnp5InOiAnaHR0cHM6Ly9zaG9naXdhcnMuaGVyb3ouanAvdXNlcnMvaGlzdG9yeS86aWQ/Z3R5cGU9czEmc3RhcnQ9OnN0YXJ0JyxcclxuXHR9LFxyXG5cdGlzTGltaXQ6IGZhbHNlLFxyXG5cdGlzRmV0Y2hpbmc6IGZhbHNlLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0Y2hSZWNvcmRTZWFyY2ggZXh0ZW5kcyBFbWl0dGVyIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGluaXRpYWxTdGF0ZSkpKTtcclxuXHJcblx0XHRkaXNwYXRjaGVyLm9uKCdpbnB1dFNlYXJjaElkJywgKHZhbHVlKSA9PiB7XHJcblx0XHRcdHRoaXMuc2VhcmNoSWQgPSB2YWx1ZTtcclxuXHRcdFx0dGhpcy5lbWl0KCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRkaXNwYXRjaGVyLm9uKCdmZXRjaE1hdGNoUmVjb3JkcycsIGFzeW5jICgpID0+IHtcclxuXHRcdFx0dGhpcy5pc0ZldGNoaW5nID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5lbWl0KCdDSEFOR0UnKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGRpc3BhdGNoZXIub24oJ2ZldGNoTWF0Y2hSZWNvcmRzRmFpbGVkJywgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLmlzRmV0Y2hpbmcgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5lbWl0KCdDSEFOR0UnKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGRpc3BhdGNoZXIub24oJ2ZldGNoTWF0Y2hSZWNvcmRzU3VjY2Vzc2Z1bCcsIChyZWNvcmRzKSA9PiB7XHJcblx0XHRcdHRoaXMuaXNGZXRjaGluZyA9IGZhbHNlO1xyXG5cdFx0XHRpZihyZWNvcmRzLmxlbmd0aCA8IHRoaXMuaW50ZXJ2YWwpIHtcclxuXHRcdFx0XHQvL+OCguOBhuiqreOBv+i+vOOCgOWvvuWxgOOBjOeEoeOBhOaZgjtcclxuXHRcdFx0XHR0aGlzLmlzTGltaXQgPSB0cnVlO1xyXG5cdFx0XHRcdHRoaXMuc3RhcnQgKz0gcmVjb3Jkcy5sZW5ndGg7XHJcblx0XHRcdH1lbHNlIHtcclxuXHRcdFx0XHR0aGlzLnN0YXJ0ICs9IHRoaXMuaW50ZXJ2YWw7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuZW1pdCgnQ0hBTkdFJyk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRkaXNwYXRjaGVyLm9uKCd1bm1vdW50SW5kZXgnLCAoKSA9PiB7XHJcblx0XHRcdE9iamVjdC5hc3NpZ24odGhpcywgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShpbml0aWFsU3RhdGUpKSk7XHJcblx0XHRcdHRoaXMuZW1pdCgnQ0hBTkdFJyk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3N0b3Jlcy9NYXRjaFJlY29yZFNlYXJjaC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gVGhpcyBtZXRob2Qgb2Ygb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0IG5lZWRzIHRvIGJlXG4vLyBrZXB0IGlkZW50aWNhbCB0byB0aGUgd2F5IGl0IGlzIG9idGFpbmVkIGluIHJ1bnRpbWUuanNcbnZhciBnID1cbiAgdHlwZW9mIGdsb2JhbCA9PT0gXCJvYmplY3RcIiA/IGdsb2JhbCA6XG4gIHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIgPyB3aW5kb3cgOlxuICB0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIiA/IHNlbGYgOiB0aGlzO1xuXG4vLyBVc2UgYGdldE93blByb3BlcnR5TmFtZXNgIGJlY2F1c2Ugbm90IGFsbCBicm93c2VycyBzdXBwb3J0IGNhbGxpbmdcbi8vIGBoYXNPd25Qcm9wZXJ0eWAgb24gdGhlIGdsb2JhbCBgc2VsZmAgb2JqZWN0IGluIGEgd29ya2VyLiBTZWUgIzE4My5cbnZhciBoYWRSdW50aW1lID0gZy5yZWdlbmVyYXRvclJ1bnRpbWUgJiZcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZykuaW5kZXhPZihcInJlZ2VuZXJhdG9yUnVudGltZVwiKSA+PSAwO1xuXG4vLyBTYXZlIHRoZSBvbGQgcmVnZW5lcmF0b3JSdW50aW1lIGluIGNhc2UgaXQgbmVlZHMgdG8gYmUgcmVzdG9yZWQgbGF0ZXIuXG52YXIgb2xkUnVudGltZSA9IGhhZFJ1bnRpbWUgJiYgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG5cbi8vIEZvcmNlIHJlZXZhbHV0YXRpb24gb2YgcnVudGltZS5qcy5cbmcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3J1bnRpbWVcIik7XG5cbmlmIChoYWRSdW50aW1lKSB7XG4gIC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIHJ1bnRpbWUuXG4gIGcucmVnZW5lcmF0b3JSdW50aW1lID0gb2xkUnVudGltZTtcbn0gZWxzZSB7XG4gIC8vIFJlbW92ZSB0aGUgZ2xvYmFsIHByb3BlcnR5IGFkZGVkIGJ5IHJ1bnRpbWUuanMuXG4gIHRyeSB7XG4gICAgZGVsZXRlIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuICB9IGNhdGNoKGUpIHtcbiAgICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIGh0dHBzOi8vcmF3LmdpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvbWFzdGVyL0xJQ0VOU0UgZmlsZS4gQW5cbiAqIGFkZGl0aW9uYWwgZ3JhbnQgb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpblxuICogdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi4gSWYgdGhlIFByb21pc2UgaXMgcmVqZWN0ZWQsIGhvd2V2ZXIsIHRoZVxuICAgICAgICAgIC8vIHJlc3VsdCBmb3IgdGhpcyBpdGVyYXRpb24gd2lsbCBiZSByZWplY3RlZCB3aXRoIHRoZSBzYW1lXG4gICAgICAgICAgLy8gcmVhc29uLiBOb3RlIHRoYXQgcmVqZWN0aW9ucyBvZiB5aWVsZGVkIFByb21pc2VzIGFyZSBub3RcbiAgICAgICAgICAvLyB0aHJvd24gYmFjayBpbnRvIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIGFzIGlzIHRoZSBjYXNlXG4gICAgICAgICAgLy8gd2hlbiBhbiBhd2FpdGVkIFByb21pc2UgaXMgcmVqZWN0ZWQuIFRoaXMgZGlmZmVyZW5jZSBpblxuICAgICAgICAgIC8vIGJlaGF2aW9yIGJldHdlZW4geWllbGQgYW5kIGF3YWl0IGlzIGltcG9ydGFudCwgYmVjYXVzZSBpdFxuICAgICAgICAgIC8vIGFsbG93cyB0aGUgY29uc3VtZXIgdG8gZGVjaWRlIHdoYXQgdG8gZG8gd2l0aCB0aGUgeWllbGRlZFxuICAgICAgICAgIC8vIHJlamVjdGlvbiAoc3dhbGxvdyBpdCBhbmQgY29udGludWUsIG1hbnVhbGx5IC50aHJvdyBpdCBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgZ2VuZXJhdG9yLCBhYmFuZG9uIGl0ZXJhdGlvbiwgd2hhdGV2ZXIpLiBXaXRoXG4gICAgICAgICAgLy8gYXdhaXQsIGJ5IGNvbnRyYXN0LCB0aGVyZSBpcyBubyBvcHBvcnR1bml0eSB0byBleGFtaW5lIHRoZVxuICAgICAgICAgIC8vIHJlamVjdGlvbiByZWFzb24gb3V0c2lkZSB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBzbyB0aGVcbiAgICAgICAgICAvLyBvbmx5IG9wdGlvbiBpcyB0byB0aHJvdyBpdCBmcm9tIHRoZSBhd2FpdCBleHByZXNzaW9uLCBhbmRcbiAgICAgICAgICAvLyBsZXQgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiBoYW5kbGUgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gXCJvYmplY3RcIiAmJiBwcm9jZXNzLmRvbWFpbikge1xuICAgICAgaW52b2tlID0gcHJvY2Vzcy5kb21haW4uYmluZChpbnZva2UpO1xuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbiAgLy8gQW1vbmcgdGhlIHZhcmlvdXMgdHJpY2tzIGZvciBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbFxuICAvLyBvYmplY3QsIHRoaXMgc2VlbXMgdG8gYmUgdGhlIG1vc3QgcmVsaWFibGUgdGVjaG5pcXVlIHRoYXQgZG9lcyBub3RcbiAgLy8gdXNlIGluZGlyZWN0IGV2YWwgKHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5KS5cbiAgdHlwZW9mIGdsb2JhbCA9PT0gXCJvYmplY3RcIiA/IGdsb2JhbCA6XG4gIHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIgPyB3aW5kb3cgOlxuICB0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIiA/IHNlbGYgOiB0aGlzXG4pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qc1xuLy8gbW9kdWxlIGlkID0gOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3Byb21pc2UgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9wcm9taXNlXCIpO1xuXG52YXIgX3Byb21pc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvbWlzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBnZW4gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHJldHVybiBuZXcgX3Byb21pc2UyLmRlZmF1bHQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgZnVuY3Rpb24gc3RlcChrZXksIGFyZykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBfcHJvbWlzZTIuZGVmYXVsdC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgc3RlcChcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIHN0ZXAoXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdGVwKFwibmV4dFwiKTtcbiAgICB9KTtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnByb21pc2UnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLlByb21pc2U7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNsYXNzb2YgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsICRleHBvcnQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgaXNPYmplY3QgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gICAgICAgICAgPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBhbkluc3RhbmNlICAgICAgICAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgZm9yT2YgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZm9yLW9mJylcbiAgLCBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJylcbiAgLCB0YXNrICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL190YXNrJykuc2V0XG4gICwgbWljcm90YXNrICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKVxuICAsIFBST01JU0UgICAgICAgICAgICA9ICdQcm9taXNlJ1xuICAsIFR5cGVFcnJvciAgICAgICAgICA9IGdsb2JhbC5UeXBlRXJyb3JcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsICRQcm9taXNlICAgICAgICAgICA9IGdsb2JhbFtQUk9NSVNFXVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgaXNOb2RlICAgICAgICAgICAgID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2VzcydcbiAgLCBlbXB0eSAgICAgICAgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgSW50ZXJuYWwsIEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uKCl7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgICAgID0gJFByb21pc2UucmVzb2x2ZSgxKVxuICAgICAgLCBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW3JlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24oZXhlYyl7IGV4ZWMoZW1wdHksIGVtcHR5KTsgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKSAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2U7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIHNhbWVDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uKGEsIGIpe1xuICAvLyB3aXRoIGxpYnJhcnkgd3JhcHBlciBzcGVjaWFsIGNhc2VcbiAgcmV0dXJuIGEgPT09IGIgfHwgYSA9PT0gJFByb21pc2UgJiYgYiA9PT0gV3JhcHBlcjtcbn07XG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgcmV0dXJuIHNhbWVDb25zdHJ1Y3RvcigkUHJvbWlzZSwgQylcbiAgICA/IG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgIDogbmV3IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG52YXIgUHJvbWlzZUNhcGFiaWxpdHkgPSBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24oJCRyZXNvbHZlLCAkJHJlamVjdCl7XG4gICAgaWYocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCAgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59O1xudmFyIHBlcmZvcm0gPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICBleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHtlcnJvcjogZX07XG4gIH1cbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24ocHJvbWlzZSwgaXNSZWplY3Qpe1xuICBpZihwcm9taXNlLl9uKXJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZcbiAgICAgICwgb2sgICAgPSBwcm9taXNlLl9zID09IDFcbiAgICAgICwgaSAgICAgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbihyZWFjdGlvbil7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsXG4gICAgICAgICwgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmVcbiAgICAgICAgLCByZWplY3QgID0gcmVhY3Rpb24ucmVqZWN0XG4gICAgICAgICwgZG9tYWluICA9IHJlYWN0aW9uLmRvbWFpblxuICAgICAgICAsIHJlc3VsdCwgdGhlbjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmKGhhbmRsZXIpe1xuICAgICAgICAgIGlmKCFvayl7XG4gICAgICAgICAgICBpZihwcm9taXNlLl9oID09IDIpb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoaGFuZGxlciA9PT0gdHJ1ZSlyZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpO1xuICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSl7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZih0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKXtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXJ1bihjaGFpbltpKytdKTsgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICBwcm9taXNlLl9jID0gW107XG4gICAgcHJvbWlzZS5fbiA9IGZhbHNlO1xuICAgIGlmKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKW9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIGFicnVwdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZihpc1VuaGFuZGxlZChwcm9taXNlKSl7XG4gICAgICBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKGlzTm9kZSl7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKXtcbiAgICAgICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHZhbHVlfSk7XG4gICAgICAgIH0gZWxzZSBpZigoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKXtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHByb21pc2UuX2ggPSBpc05vZGUgfHwgaXNVbmhhbmRsZWQocHJvbWlzZSkgPyAyIDogMTtcbiAgICB9IHByb21pc2UuX2EgPSB1bmRlZmluZWQ7XG4gICAgaWYoYWJydXB0KXRocm93IGFicnVwdC5lcnJvcjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIGlmKHByb21pc2UuX2ggPT0gMSlyZXR1cm4gZmFsc2U7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2EgfHwgcHJvbWlzZS5fY1xuICAgICwgaSAgICAgPSAwXG4gICAgLCByZWFjdGlvbjtcbiAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSl7XG4gICAgcmVhY3Rpb24gPSBjaGFpbltpKytdO1xuICAgIGlmKHJlYWN0aW9uLmZhaWwgfHwgIWlzVW5oYW5kbGVkKHJlYWN0aW9uLnByb21pc2UpKXJldHVybiBmYWxzZTtcbiAgfSByZXR1cm4gdHJ1ZTtcbn07XG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZihpc05vZGUpe1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKXtcbiAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdn0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYoIXByb21pc2UuX2EpcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHByb21pc2UgPSB0aGlzXG4gICAgLCB0aGVuO1xuICBpZihwcm9taXNlLl9kKXJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmKHByb21pc2UgPT09IHZhbHVlKXRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSl7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7X3c6IHByb21pc2UsIF9kOiBmYWxzZX07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaChlKXtcbiAgICAkcmVqZWN0LmNhbGwoe193OiBwcm9taXNlLCBfZDogZmFsc2V9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYoIVVTRV9OQVRJVkUpe1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoKGVycil7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcbiAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG4gICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJykoJFByb21pc2UucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKXtcbiAgICAgIHZhciByZWFjdGlvbiAgICA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgICAgID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsICAgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9hKXRoaXMuX2EucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9zKW5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24ob25SZWplY3RlZCl7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbigpe1xuICAgIHZhciBwcm9taXNlICA9IG5ldyBJbnRlcm5hbDtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7UHJvbWlzZTogJFByb21pc2V9KTtcbnJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJykoJFByb21pc2UsIFBST01JU0UpO1xucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuL19jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocil7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlamVjdCAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KXtcbiAgICAvLyBpbnN0YW5jZW9mIGluc3RlYWQgb2YgaW50ZXJuYWwgc2xvdCBjaGVjayBiZWNhdXNlIHdlIHNob3VsZCBmaXggaXQgd2l0aG91dCByZXBsYWNlbWVudCBuYXRpdmUgUHJvbWlzZSBjb3JlXG4gICAgaWYoeCBpbnN0YW5jZW9mICRQcm9taXNlICYmIHNhbWVDb25zdHJ1Y3Rvcih4LmNvbnN0cnVjdG9yLCB0aGlzKSlyZXR1cm4geDtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVzb2x2ZSAgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgJCRyZXNvbHZlKHgpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVzb2x2ZSAgICA9IGNhcGFiaWxpdHkucmVzb2x2ZVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIHZhciB2YWx1ZXMgICAgPSBbXVxuICAgICAgICAsIGluZGV4ICAgICA9IDBcbiAgICAgICAgLCByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgdmFyICRpbmRleCAgICAgICAgPSBpbmRleCsrXG4gICAgICAgICAgLCBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgICAgaWYoYWxyZWFkeUNhbGxlZClyZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCAgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKVxuICAvLyBFUzMgd3JvbmcgaGVyZVxuICAsIEFSRyA9IGNvZihmdW5jdGlvbigpeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKXtcbiAgaWYoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpe1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGN0eCAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjYWxsICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9MZW5ndGggICAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGdldEl0ZXJGbiAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKVxuICAsIEJSRUFLICAgICAgID0ge31cbiAgLCBSRVRVUk4gICAgICA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1Ipe1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbigpeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpXG4gICAgLCBmICAgICAgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSlcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYoaXNBcnJheUl0ZXIoaXRlckZuKSlmb3IobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgKXtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLICA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mb3Itb2YuanNcbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaChlKXtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmKHJldCAhPT0gdW5kZWZpbmVkKWFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qc1xuLy8gbW9kdWxlIGlkID0gMTAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBJVEVSQVRPUiAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgIT0gdW5kZWZpbmVkKXJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qc1xuLy8gbW9kdWxlIGlkID0gMTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgU1BFQ0lFUyAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTywgRCl7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3IsIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaW52b2tlICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faW52b2tlJylcbiAgLCBodG1sICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19odG1sJylcbiAgLCBjZWwgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgc2V0VGFzayAgICAgICAgICAgID0gZ2xvYmFsLnNldEltbWVkaWF0ZVxuICAsIGNsZWFyVGFzayAgICAgICAgICA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZVxuICAsIE1lc3NhZ2VDaGFubmVsICAgICA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbFxuICAsIGNvdW50ZXIgICAgICAgICAgICA9IDBcbiAgLCBxdWV1ZSAgICAgICAgICAgICAgPSB7fVxuICAsIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnXG4gICwgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24oKXtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIGlmKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSl7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYoIXNldFRhc2sgfHwgIWNsZWFyVGFzayl7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pe1xuICAgIHZhciBhcmdzID0gW10sIGkgPSAxO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uKCl7XG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpe1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZihyZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcycpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmKE1lc3NhZ2VDaGFubmVsKXtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsO1xuICAgIHBvcnQgICAgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZihPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbigpe1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogICBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qc1xuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgYXJncywgdGhhdCl7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoKGFyZ3MubGVuZ3RoKXtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gICAgICAgICAgICAgIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qc1xuLy8gbW9kdWxlIGlkID0gMTA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBPYnNlcnZlciAgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlclxuICAsIHByb2Nlc3MgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgUHJvbWlzZSAgID0gZ2xvYmFsLlByb21pc2VcbiAgLCBpc05vZGUgICAgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbigpe1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKXBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUoaGVhZCl7XG4gICAgICBmbiAgID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgaWYoaGVhZClub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZihwYXJlbnQpcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZihpc05vZGUpe1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJcbiAgfSBlbHNlIGlmKE9ic2VydmVyKXtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZVxuICAgICAgLCBub2RlICAgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHtjaGFyYWN0ZXJEYXRhOiB0cnVlfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKXtcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbihmbil7XG4gICAgdmFyIHRhc2sgPSB7Zm46IGZuLCBuZXh0OiB1bmRlZmluZWR9O1xuICAgIGlmKGxhc3QpbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZighaGVhZCl7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRhcmdldCwgc3JjLCBzYWZlKXtcbiAgZm9yKHZhciBrZXkgaW4gc3JjKXtcbiAgICBpZihzYWZlICYmIHRhcmdldFtrZXldKXRhcmdldFtrZXldID0gc3JjW2tleV07XG4gICAgZWxzZSBoaWRlKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIH0gcmV0dXJuIHRhcmdldDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanNcbi8vIG1vZHVsZSBpZCA9IDExMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgZFAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsIFNQRUNJRVMgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVkpe1xuICB2YXIgQyA9IHR5cGVvZiBjb3JlW0tFWV0gPT0gJ2Z1bmN0aW9uJyA/IGNvcmVbS0VZXSA6IGdsb2JhbFtLRVldO1xuICBpZihERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKWRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIElURVJBVE9SICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24oKXsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24oKXsgdGhyb3cgMjsgfSk7XG59IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYywgc2tpcENsb3Npbmcpe1xuICBpZighc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORylyZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciAgPSBbN11cbiAgICAgICwgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbigpeyByZXR1cm4ge2RvbmU6IHNhZmUgPSB0cnVlfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeS5qc1xuLy8gbW9kdWxlIGlkID0gMTEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjb3JlICA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKVxuICAsICRKU09OID0gY29yZS5KU09OIHx8IChjb3JlLkpTT04gPSB7c3RyaW5naWZ5OiBKU09OLnN0cmluZ2lmeX0pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHJldHVybiAkSlNPTi5zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3VtZW50cyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnkuanNcbi8vIG1vZHVsZSBpZCA9IDExNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgRW1pdHRlciBmcm9tICdldmVudHMnO1xyXG5pbXBvcnQgZGlzcGF0Y2hlciBmcm9tICcuLi9kaXNwYXRjaGVyLmpzJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRyZWNvcmRzOiBbXSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdGNoUmVjb3JkcyBleHRlbmRzIEVtaXR0ZXIge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaW5pdGlhbFN0YXRlKSkpO1xyXG5cclxuXHRcdGRpc3BhdGNoZXIub24oJ2ZldGNoTWF0Y2hSZWNvcmRzU3VjY2Vzc2Z1bCcsIChyZWNvcmRzKSA9PiB7XHJcblx0XHRcdGlmKHJlY29yZHMubGVuZ3RoID09PSAwKSByZXR1cm47XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLnJlY29yZHMgPSB0aGlzLnJlY29yZHMuY29uY2F0KHJlY29yZHMpO1xyXG5cdFx0XHR0aGlzLnJlY29yZHMuc29ydCgoYSwgYikgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGFUaW1lID0gbmV3IERhdGUoYS50aW1lKS5nZXRUaW1lKCk7XHJcblx0XHRcdFx0Y29uc3QgYlRpbWUgPSBuZXcgRGF0ZShiLnRpbWUpLmdldFRpbWUoKTtcclxuXHRcdFx0XHRpZihhVGltZSA+IGJUaW1lKSByZXR1cm4gLTE7XHJcblx0XHRcdFx0aWYoYVRpbWUgPCBiVGltZSkgcmV0dXJuIDE7XHJcblx0XHRcdFx0cmV0dXJuIDA7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0dGhpcy5lbWl0KCdDSEFOR0UnKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGRpc3BhdGNoZXIub24oJ3VubW91bnRJbmRleCcsICgpID0+IHtcclxuXHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGluaXRpYWxTdGF0ZSkpKTtcclxuXHRcdFx0dGhpcy5lbWl0KCdDSEFOR0UnKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3RvcmVzL01hdGNoUmVjb3Jkcy5qcyIsImltcG9ydCBFbWl0dGVyIGZyb20gJ2V2ZW50cyc7XHJcbmltcG9ydCBkaXNwYXRjaGVyIGZyb20gJy4uL2Rpc3BhdGNoZXIuanMnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRjaFJlY29yZCBleHRlbmRzIEVtaXR0ZXIge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaW5pdGlhbFN0YXRlKSkpO1xyXG5cclxuXHRcdGRpc3BhdGNoZXIub24oJ2ZldGNoS2lmdScsIChyZWNvcmQpID0+IHtcclxuXHRcdFx0cmVjb3JkLmlzRmV0Y2hpbmdLaWZ1ID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5lbWl0KCdDSEFOR0UnKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGRpc3BhdGNoZXIub24oJ2ZldGNoS2lmdVN1Y2Nlc3NmdWwnLCAocmVjb3JkLCBraWZ1KSA9PiB7XHJcblx0XHRcdHJlY29yZC5raWZ1ID0ga2lmdTtcclxuXHRcdFx0cmVjb3JkLmRvZXNIYXZlS2lmdSA9IHRydWU7XHJcblx0XHRcdHJlY29yZC5pc0ZldGNoaW5nS2lmdSA9IGZhbHNlO1xyXG5cdFx0XHRzYXZlUmVjb3JkKHJlY29yZCk7XHJcblxyXG5cdFx0XHR0aGlzLmVtaXQoJ0NIQU5HRScpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0ZGlzcGF0Y2hlci5vbignZmV0Y2hLaWZ1RmFpbGVkJywgKHJlY29yZCkgPT4ge1xyXG5cdFx0XHRyZWNvcmQuaXNGZXRjaGluZ0tpZnUgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5lbWl0KCdDSEFOR0UnKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2F2ZVJlY29yZChyZWNvcmQpIHtcclxuXHRsZXQgcmVjb3JkcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlY29yZHMnKSk7XHJcblx0aWYocmVjb3JkcyA9PT0gbnVsbCkgcmVjb3JkcyA9IFtdO1xyXG5cdHJlY29yZHMudW5zaGlmdChyZWNvcmQpO1xyXG5cdHJlY29yZHMuZm9yRWFjaCgoX3JlY29yZCwgaSkgPT4ge1xyXG5cdFx0aWYoaSA9PT0gMCkgcmV0dXJuO1xyXG5cdFx0aWYoX3JlY29yZC50aW1lID09PSByZWNvcmQudGltZSAmJiBfcmVjb3JkLmJsYWNrID09PSByZWNvcmQuYmxhY2sgJiYgX3JlY29yZC53aGl0ZSA9PT0gcmVjb3JkLndoaXRlKSB7XHJcblx0XHRcdHJldHVybiByZWNvcmRzLnNwbGljZShpLCAxKTtcclxuXHRcdH1cclxuXHR9KVxyXG5cdHJlY29yZHMgPSByZWNvcmRzLnNsaWNlKDAsIDEwKTtcclxuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncmVjb3JkcycsIEpTT04uc3RyaW5naWZ5KHJlY29yZHMpKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zdG9yZXMvTWF0Y2hSZWNvcmQuanMiLCJpbXBvcnQgRW1pdHRlciBmcm9tICdldmVudHMnO1xyXG5pbXBvcnQgZGlzcGF0Y2hlciBmcm9tICcuLi9kaXNwYXRjaGVyLmpzJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRyZWNvcmRzOiBbXSxcclxuXHRzaG91bGREaXNwbGF5OiBmYWxzZSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhpc3RvcnlSZWNvcmRzIGV4dGVuZHMgRW1pdHRlciB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShpbml0aWFsU3RhdGUpKSk7XHJcblxyXG5cdFx0ZGlzcGF0Y2hlci5vbignc2hvd0hpc3RvcnlSZWNvcmRzJywgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnNob3VsZERpc3BsYXkgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLnJlY29yZHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZWNvcmRzJykpIHx8IFtdO1xyXG5cdFx0XHR0aGlzLmVtaXQoJ0NIQU5HRScpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0ZGlzcGF0Y2hlci5vbignaGlkZUhpc3RvcnlSZWNvcmRzJywgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnNob3VsZERpc3BsYXkgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5lbWl0KCdDSEFOR0UnKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGRpc3BhdGNoZXIub24oJ2ZldGNoS2lmdVN1Y2Nlc3NmdWwnLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMucmVjb3JkcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlY29yZHMnKSkgfHwgW107XHJcblx0XHRcdHRoaXMuZW1pdCgnQ0hBTkdFJyk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3RvcmVzL0hpc3RvcnlSZWNvcmRzLmpzIiwiaW1wb3J0IGxlYWRzIGZyb20gJ2xlYWRzLXJvdXRlcic7XHJcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvYWN0aW9ucy5qcyc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXIuanMnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyLmpzJztcclxuaW1wb3J0IEluZGV4IGZyb20gJy4vSW5kZXguanMnO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZy5qcyc7XHJcbmltcG9ydCBzZW5kUGFnZVZpZXcgZnJvbSAnLi4vY29tbW9uL3NlbmRQYWdlVmlldy5qcyc7XHJcblxyXG5jb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XHJcbnRlbXBsYXRlLmlubmVySFRNTCA9IGBcclxuPGRpdiBpZD1cImhlYWRlclwiPjwvZGl2PlxyXG48ZGl2IGlkPVwibWFpblwiPjxkaXY+PC9kaXY+PC9kaXY+XHJcbjxkaXYgaWQ9XCJmb290ZXJcIj48L2Rpdj5cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0Y29uc3QgY29udGVudCA9IHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xyXG5cdFx0Y29udGVudC5yZXBsYWNlQ2hpbGQobmV3IEhlYWRlcigpLCBjb250ZW50LmZpcnN0RWxlbWVudENoaWxkKTtcclxuXHRcdGNvbnRlbnQucmVwbGFjZUNoaWxkKG5ldyBGb290ZXIoKSwgY29udGVudC5sYXN0RWxlbWVudENoaWxkKTtcclxuXHRcdGNvbnN0IG1haW4gPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJyk7XHJcblxyXG5cdFx0dGhpcy5pZCA9ICdhcHAnO1xyXG5cdFx0dGhpcy5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuXHJcblx0XHRjb25zdCBpbmRleCA9IG5ldyBJbmRleCgpO1xyXG5cclxuXHRcdGNvbnN0IHJvdXRlciA9IGxlYWRzLlJvdXRlcigpO1xyXG5cclxuXHRcdHJvdXRlci51c2UoKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcblx0XHRcdG1haW4ucmVtb3ZlQ2hpbGQobWFpbi5maXJzdENoaWxkKTtcclxuXHRcdFx0bmV4dCgpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0cm91dGVyLnVzZSgocmVxLCByZXMsIG5leHQpID0+IHtcclxuXHRcdFx0c2VuZFBhZ2VWaWV3KCk7XHJcblx0XHRcdG5leHQoKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHJvdXRlci5nZXQoY29uZmlnLmRlcGxveSArICcvJyxcclxuXHRcdFx0KHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcblx0XHRcdFx0aWYocmVxLnF1ZXJ5LmlkID09PSB1bmRlZmluZWQpIHJldHVybiBuZXh0KCk7XHJcblxyXG5cdFx0XHRcdGFjdGlvbnMuaW5wdXRTZWFyY2hJZChyZXEucXVlcnkuaWQpO1xyXG5cdFx0XHRcdG1haW4uYXBwZW5kQ2hpbGQoaW5kZXgpO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0KHJlcSwgcmVzKSA9PiB7XHJcblx0XHRcdFx0bWFpbi5hcHBlbmRDaGlsZChpbmRleCk7XHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BhdGhjaGFuZ2UnLCAoZSkgPT4ge1xyXG5cdFx0XHRpZihlLmRldGFpbC5tZXRob2QgPT09ICdwdXNoU3RhdGUnKSByb3V0ZXIuZ2V0KGUuZGV0YWlsLnBhdGgpO1xyXG5cdFx0XHRlbHNlIHJvdXRlci5nZXQoZS5kZXRhaWwucGF0aCwgeyBhZGRIaXN0b3J5OiBmYWxzZSB9KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIChlKSA9PiB7XHJcblx0XHRcdHJvdXRlci5nZXQobG9jYXRpb24uaHJlZiwgeyBhZGRIaXN0b3J5OiBmYWxzZSwgY2hhbmdlUGF0aDogZmFsc2UgfSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRyb3V0ZXIuZ2V0KGxvY2F0aW9uLmhyZWYsIHsgYWRkSGlzdG9yeTogZmFsc2UgfSk7XHJcblx0fVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3gtYXBwJywgQXBwKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9BcHAuanMiLCJyZXF1aXJlKCcuL2xpYi9sb2NhdGlvbk9yaWdpbi5qcycpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2xlYWRzJykuZGVmYXVsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbGVhZHMtcm91dGVyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiKGZ1bmN0aW9uKCkge1xyXG5cdGlmKCF3aW5kb3cubG9jYXRpb24ub3JpZ2luKSB7XHJcblx0XHR3aW5kb3cubG9jYXRpb24ub3JpZ2luID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lICsgKHdpbmRvdy5sb2NhdGlvbi5wb3J0ID8gJzonICsgd2luZG93LmxvY2F0aW9uLnBvcnQ6ICcnKTtcclxuXHR9XHJcbn0pKCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xlYWRzLXJvdXRlci9saWIvbG9jYXRpb25PcmlnaW4uanNcbi8vIG1vZHVsZSBpZCA9IDEyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7dmFyIF9Sb3V0ZXI9cmVxdWlyZSgnLi9Sb3V0ZXInKTt2YXIgX1JvdXRlcjI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUm91dGVyKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian07fWZ1bmN0aW9uIGxlYWRzKCl7fWxlYWRzLlJvdXRlcj1mdW5jdGlvbihvcHRpb25zKXtyZXR1cm4gbmV3IF9Sb3V0ZXIyLmRlZmF1bHQob3B0aW9ucyk7fTtleHBvcnRzLmRlZmF1bHQ9bGVhZHM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xlYWRzLXJvdXRlci9saWIvbGVhZHMuanNcbi8vIG1vZHVsZSBpZCA9IDEyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7dmFyIF9leHRlbmRzPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHRhcmdldCl7Zm9yKHZhciBpPTE7aTxhcmd1bWVudHMubGVuZ3RoO2krKyl7dmFyIHNvdXJjZT1hcmd1bWVudHNbaV07Zm9yKHZhciBrZXkgaW4gc291cmNlKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLGtleSkpe3RhcmdldFtrZXldPXNvdXJjZVtrZXldO319fXJldHVybiB0YXJnZXQ7fTt2YXIgX3R5cGVvZj10eXBlb2YgU3ltYm9sPT09XCJmdW5jdGlvblwiJiZ0eXBlb2YgU3ltYm9sLml0ZXJhdG9yPT09XCJzeW1ib2xcIj9mdW5jdGlvbihvYmope3JldHVybiB0eXBlb2Ygb2JqO306ZnVuY3Rpb24ob2JqKXtyZXR1cm4gb2JqJiZ0eXBlb2YgU3ltYm9sPT09XCJmdW5jdGlvblwiJiZvYmouY29uc3RydWN0b3I9PT1TeW1ib2w/XCJzeW1ib2xcIjp0eXBlb2Ygb2JqO307dmFyIF9jcmVhdGVDbGFzcz1mdW5jdGlvbigpe2Z1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LHByb3BzKXtmb3IodmFyIGk9MDtpPHByb3BzLmxlbmd0aDtpKyspe3ZhciBkZXNjcmlwdG9yPXByb3BzW2ldO2Rlc2NyaXB0b3IuZW51bWVyYWJsZT1kZXNjcmlwdG9yLmVudW1lcmFibGV8fGZhbHNlO2Rlc2NyaXB0b3IuY29uZmlndXJhYmxlPXRydWU7aWYoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpZGVzY3JpcHRvci53cml0YWJsZT10cnVlO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsZGVzY3JpcHRvci5rZXksZGVzY3JpcHRvcik7fX1yZXR1cm4gZnVuY3Rpb24oQ29uc3RydWN0b3IscHJvdG9Qcm9wcyxzdGF0aWNQcm9wcyl7aWYocHJvdG9Qcm9wcylkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSxwcm90b1Byb3BzKTtpZihzdGF0aWNQcm9wcylkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLHN0YXRpY1Byb3BzKTtyZXR1cm4gQ29uc3RydWN0b3I7fTt9KCk7dmFyIF9VUkw9cmVxdWlyZSgnLi9VUkwnKTt2YXIgX1VSTDI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVVJMKTt2YXIgX3BhdGhUb1JlZ2V4cD1yZXF1aXJlKCdwYXRoLXRvLXJlZ2V4cCcpO3ZhciBfcGF0aFRvUmVnZXhwMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoVG9SZWdleHApO3ZhciBfbmFtZXNwYWNlPXJlcXVpcmUoJy4vbmFtZXNwYWNlJyk7dmFyIF9uYW1lc3BhY2UyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX25hbWVzcGFjZSk7dmFyIF9SZXF1ZXN0PXJlcXVpcmUoJy4vUmVxdWVzdCcpO3ZhciBfUmVxdWVzdDI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUmVxdWVzdCk7dmFyIF9SZXNwb25zZT1yZXF1aXJlKCcuL1Jlc3BvbnNlJyk7dmFyIF9SZXNwb25zZTI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUmVzcG9uc2UpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLENvbnN0cnVjdG9yKXtpZighKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO319dmFyIHByaXZhdGVzPSgwLF9uYW1lc3BhY2UyLmRlZmF1bHQpKCk7dmFyIFJvdXRlcj1mdW5jdGlvbigpe2Z1bmN0aW9uIFJvdXRlcihvcHRpb25zKXtfY2xhc3NDYWxsQ2hlY2sodGhpcyxSb3V0ZXIpO3ZhciBzZWxmPXByaXZhdGVzKHRoaXMpO3NlbGYuaGFuZGxlcnM9W107c2VsZi5lcnJvckhhbmRsZXJzPVtdO3NlbGYucGFyYW1IYW5kbGVycz17fTtzZWxmLmRlZmF1bHRzPXt9O3ZhciBjYXNlU2Vuc2l0aXZlPWZhbHNlO3ZhciBtZXJnZVBhcmFtcz1mYWxzZTt2YXIgc3RyaWN0PWZhbHNlO3ZhciBhZGRIaXN0b3J5PXRydWU7dmFyIGNoYW5nZVBhdGg9dHJ1ZTt2YXIgdHJhbnNpdGlvbj10cnVlO09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHNlbGYuZGVmYXVsdHMse2Nhc2VTZW5zaXRpdmU6e2dldDpmdW5jdGlvbiBnZXQoKXtyZXR1cm4gY2FzZVNlbnNpdGl2ZTt9LHNldDpmdW5jdGlvbiBzZXQodmFsdWUpe2Nhc2VTZW5zaXRpdmU9Qm9vbGVhbih2YWx1ZSk7fSxlbnVtZXJhYmxlOnRydWV9LG1lcmdlUGFyYW1zOntnZXQ6ZnVuY3Rpb24gZ2V0KCl7cmV0dXJuIG1lcmdlUGFyYW1zO30sc2V0OmZ1bmN0aW9uIHNldCh2YWx1ZSl7bWVyZ2VQYXJhbXM9Qm9vbGVhbih2YWx1ZSk7fSxlbnVtZXJhYmxlOnRydWV9LHN0cmljdDp7Z2V0OmZ1bmN0aW9uIGdldCgpe3JldHVybiBzdHJpY3Q7fSxzZXQ6ZnVuY3Rpb24gc2V0KHZhbHVlKXtzdHJpY3Q9Qm9vbGVhbih2YWx1ZSk7fSxlbnVtZXJhYmxlOnRydWV9LGFkZEhpc3Rvcnk6e2dldDpmdW5jdGlvbiBnZXQoKXtyZXR1cm4gYWRkSGlzdG9yeTt9LHNldDpmdW5jdGlvbiBzZXQodmFsdWUpe2FkZEhpc3Rvcnk9Qm9vbGVhbih2YWx1ZSk7fSxlbnVtZXJhYmxlOnRydWV9LGNoYW5nZVBhdGg6e2dldDpmdW5jdGlvbiBnZXQoKXtyZXR1cm4gY2hhbmdlUGF0aDt9LHNldDpmdW5jdGlvbiBzZXQodmFsdWUpe2NoYW5nZVBhdGg9Qm9vbGVhbih2YWx1ZSk7fSxlbnVtZXJhYmxlOnRydWV9LHRyYW5zaXRpb246e2dldDpmdW5jdGlvbiBnZXQoKXtyZXR1cm4gdHJhbnNpdGlvbjt9LHNldDpmdW5jdGlvbiBzZXQodmFsdWUpe3RyYW5zaXRpb249Qm9vbGVhbih2YWx1ZSk7fSxlbnVtZXJhYmxlOnRydWV9fSk7Zm9yKHZhciBtZXRob2QgaW4gcHJpdmF0ZU1ldGhvZHMpe3NlbGZbbWV0aG9kXT1wcml2YXRlTWV0aG9kc1ttZXRob2RdLmJpbmQodGhpcyk7fXRoaXMuZGVmYXVsdHM9b3B0aW9uczt9Um91dGVyLnByb3RvdHlwZS5kaXNwYXRjaD1mdW5jdGlvbiBkaXNwYXRjaCh1cmxTdHJpbmcsbWV0aG9kLG9wdGlvbnMpe3ZhciBzZWxmPXByaXZhdGVzKHRoaXMpO2lmKHR5cGVvZiB1cmxTdHJpbmchPT0nc3RyaW5nJylyZXR1cm47aWYodHlwZW9mIG1ldGhvZCE9PSdzdHJpbmcnKW1ldGhvZD0nYWxsJztpZigodHlwZW9mIG9wdGlvbnM9PT0ndW5kZWZpbmVkJz8ndW5kZWZpbmVkJzpfdHlwZW9mKG9wdGlvbnMpKSE9PSdvYmplY3QnfHxvcHRpb25zPT09bnVsbClvcHRpb25zPXt9O2lmKHR5cGVvZiBvcHRpb25zLmFkZEhpc3RvcnkhPT0nYm9vbGVhbicpb3B0aW9ucy5hZGRIaXN0b3J5PXNlbGYuZGVmYXVsdHMuYWRkSGlzdG9yeTtpZih0eXBlb2Ygb3B0aW9ucy5jaGFuZ2VQYXRoIT09J2Jvb2xlYW4nKW9wdGlvbnMuY2hhbmdlUGF0aD1zZWxmLmRlZmF1bHRzLmNoYW5nZVBhdGg7aWYodHlwZW9mIG9wdGlvbnMudHJhbnNpdGlvbiE9PSdib29sZWFuJylvcHRpb25zLnRyYW5zaXRpb249c2VsZi5kZWZhdWx0cy50cmFuc2l0aW9uO3ZhciByZXF1ZXN0PW5ldyBfUmVxdWVzdDIuZGVmYXVsdCgpO3ZhciByZXNwb25zZT1uZXcgX1Jlc3BvbnNlMi5kZWZhdWx0KCk7dmFyIHVybD1fVVJMMi5kZWZhdWx0LnBhcnNlKHVybFN0cmluZyk7aWYodXJsLm9yaWdpbiE9PWxvY2F0aW9uLm9yaWdpbil7aWYob3B0aW9ucy50cmFuc2l0aW9uKWxvY2F0aW9uLmhyZWY9dXJsLmhyZWY7cmV0dXJuO31yZXF1ZXN0LmRpc3BhdGNoZXI9dGhpcztyZXF1ZXN0Lm9yaWdpbmFsVXJsPXVybFN0cmluZztyZXF1ZXN0Lm1ldGhvZD1tZXRob2Q7cmVxdWVzdC5kYXRhPW9wdGlvbnMuZGF0YTtfZXh0ZW5kcyhyZXF1ZXN0LHVybCk7dmFyIHN0YXRlPXtwYXRoOnVybFN0cmluZ307aWYob3B0aW9ucy5hZGRIaXN0b3J5JiZvcHRpb25zLmNoYW5nZVBhdGgpe3dpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShzdGF0ZSxudWxsLHVybC5ocmVmKTt9ZWxzZSBpZihvcHRpb25zLmFkZEhpc3RvcnkmJm9wdGlvbnMuY2hhbmdlUGF0aD09PWZhbHNlKXt3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoc3RhdGUsbnVsbCxsb2NhdGlvbi5ocmVmKTt9ZWxzZSBpZihvcHRpb25zLmFkZEhpc3Rvcnk9PT1mYWxzZSYmb3B0aW9ucy5jaGFuZ2VQYXRoKXt3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoc3RhdGUsbnVsbCx1cmwuaHJlZik7fXNlbGYuZ29HZXRDYWxsZWRIYW5kbGVyPXNlbGYuZ2ZHZXRDYWxsZWRIYW5kbGVyKHVybC5wYXRobmFtZSxtZXRob2QsJycse30pO3NlbGYucnVuTmV4dEhhbmRsZXIocmVxdWVzdCxyZXNwb25zZSk7fTtSb3V0ZXIucHJvdG90eXBlLnVzZT1mdW5jdGlvbiB1c2UoKXtpZihhcmd1bWVudHMubGVuZ3RoPT09MClyZXR1cm4gdGhpczt2YXIgcGF0aD0nLyc7dmFyIHR5cGU9J21pZGRsZXdhcmUnO3ZhciBmaXJzdFBhcmFtPWFyZ3VtZW50c1swXTtpZihmaXJzdFBhcmFtIT09dW5kZWZpbmVkJiZmaXJzdFBhcmFtIT09bnVsbCYmdHlwZW9mIGZpcnN0UGFyYW0hPT0nZnVuY3Rpb24nJiYhKGZpcnN0UGFyYW0gaW5zdGFuY2VvZiBSb3V0ZXIpKXtwYXRoPWZpcnN0UGFyYW07QXJyYXkucHJvdG90eXBlLnNoaWZ0LmJpbmQoYXJndW1lbnRzKSgpO312YXIgc2VsZj1wcml2YXRlcyh0aGlzKTt2YXIgbGlzdGVuZXJzPVtdO0FycmF5LnByb3RvdHlwZS5mb3JFYWNoLmJpbmQoYXJndW1lbnRzKShmdW5jdGlvbihhcmcpe2lmKHR5cGVvZiBhcmchPT0nZnVuY3Rpb24nJiYhKGFyZyBpbnN0YW5jZW9mIFJvdXRlcikpe3JldHVybjt9aWYodHlwZW9mIGFyZz09PSdmdW5jdGlvbicmJmFyZy5sZW5ndGg9PT00KXtzZWxmLnJlZ2lzdGVyKHtwYXRoOnBhdGgsdHlwZTp0eXBlLGxpc3RlbmVyOmFyZ30sJ2Vycm9yJyk7cmV0dXJuO31saXN0ZW5lcnMucHVzaChhcmcpO30pO2lmKGxpc3RlbmVycy5sZW5ndGghPT0wKXtzZWxmLnJlZ2lzdGVyKHtwYXRoOnBhdGgsdHlwZTp0eXBlLGxpc3RlbmVyczpsaXN0ZW5lcnN9KTt9cmV0dXJuIHRoaXM7fTtSb3V0ZXIucHJvdG90eXBlLmFsbD1mdW5jdGlvbiBhbGwocGF0aCl7cHJpdmF0ZXModGhpcykuTUVUSE9EKHBhdGgsJ2FsbCcsYXJndW1lbnRzKTtyZXR1cm4gdGhpczt9O1JvdXRlci5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uIGdldChwYXRoKXtwcml2YXRlcyh0aGlzKS5NRVRIT0QocGF0aCwnZ2V0Jyxhcmd1bWVudHMpO3JldHVybiB0aGlzO307Um91dGVyLnByb3RvdHlwZS5wb3N0PWZ1bmN0aW9uIHBvc3QocGF0aCl7cHJpdmF0ZXModGhpcykuTUVUSE9EKHBhdGgsJ3Bvc3QnLGFyZ3VtZW50cyk7cmV0dXJuIHRoaXM7fTtSb3V0ZXIucHJvdG90eXBlLmhlYWQ9ZnVuY3Rpb24gaGVhZChwYXRoKXtwcml2YXRlcyh0aGlzKS5NRVRIT0QocGF0aCwnaGVhZCcsYXJndW1lbnRzKTtyZXR1cm4gdGhpczt9O1JvdXRlci5wcm90b3R5cGUucHV0PWZ1bmN0aW9uIHB1dChwYXRoKXtwcml2YXRlcyh0aGlzKS5NRVRIT0QocGF0aCwncHV0Jyxhcmd1bWVudHMpO3JldHVybiB0aGlzO307Um91dGVyLnByb3RvdHlwZS5kZWxldGU9ZnVuY3Rpb24gX2RlbGV0ZShwYXRoKXtwcml2YXRlcyh0aGlzKS5NRVRIT0QocGF0aCwnZGVsZXRlJyxhcmd1bWVudHMpO3JldHVybiB0aGlzO307Um91dGVyLnByb3RvdHlwZS5vcHRpb25zPWZ1bmN0aW9uIG9wdGlvbnMocGF0aCl7cHJpdmF0ZXModGhpcykuTUVUSE9EKHBhdGgsJ29wdGlvbnMnLGFyZ3VtZW50cyk7cmV0dXJuIHRoaXM7fTtSb3V0ZXIucHJvdG90eXBlLnJvdXRlPWZ1bmN0aW9uIHJvdXRlKHBhdGgpe3ZhciBfdGhpcz10aGlzO3ZhciByZXQ9e307WydhbGwnLCdnZXQnLCdwb3N0JywnaGVhZCcsJ3B1dCcsJ2RlbGV0ZScsJ29wdGlvbnMnXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCl7cmV0W21ldGhvZF09ZnVuY3Rpb24oKXt0aGlzW21ldGhvZF0uYmluZCh0aGlzLHBhdGgpLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gcmV0O30uYmluZChfdGhpcyk7fSk7cmV0dXJuIHJldDt9O1JvdXRlci5wcm90b3R5cGUucGFyYW09ZnVuY3Rpb24gcGFyYW0obmFtZSxjYWxsYmFjayl7aWYodHlwZW9mIGNhbGxiYWNrIT09J2Z1bmN0aW9uJyl7cmV0dXJuO312YXIgc2VsZj1wcml2YXRlcyh0aGlzKTt2YXIgbmFtZXM9bnVsbDtpZihBcnJheS5pc0FycmF5KG5hbWUpKXtuYW1lcz1uYW1lO31lbHNlIHtuYW1lcz1bbmFtZV07fW5hbWVzLmZvckVhY2goZnVuY3Rpb24obmFtZSl7aWYodHlwZW9mIG5hbWUhPT0nc3RyaW5nJyl7cmV0dXJuO31pZihuYW1lIGluIHNlbGYucGFyYW1IYW5kbGVycyl7c2VsZi5wYXJhbUhhbmRsZXJzW25hbWVdLmxpc3RlbmVycy5wdXNoKGNhbGxiYWNrKTtyZXR1cm47fXNlbGYucGFyYW1IYW5kbGVyc1tuYW1lXT17bGlzdGVuZXJzOltjYWxsYmFja10sdHlwZToncGFyYW1ldGVyJ307fSk7fTtfY3JlYXRlQ2xhc3MoUm91dGVyLFt7a2V5OidkZWZhdWx0cycsZ2V0OmZ1bmN0aW9uIGdldCgpe3JldHVybiBwcml2YXRlcyh0aGlzKS5kZWZhdWx0czt9LHNldDpmdW5jdGlvbiBzZXQob2JqKXt2YXIgc2VsZj1wcml2YXRlcyh0aGlzKTtpZigodHlwZW9mIG9iaj09PSd1bmRlZmluZWQnPyd1bmRlZmluZWQnOl90eXBlb2Yob2JqKSkhPT0nb2JqZWN0J3x8b2JqPT09bnVsbClyZXR1cm47Zm9yKHZhciBwcm9wIGluIHNlbGYuZGVmYXVsdHMpe2lmKCEocHJvcCBpbiBvYmopKWNvbnRpbnVlO3NlbGYuZGVmYXVsdHNbcHJvcF09b2JqW3Byb3BdO319fV0pO3JldHVybiBSb3V0ZXI7fSgpO2V4cG9ydHMuZGVmYXVsdD1Sb3V0ZXI7dmFyIHByaXZhdGVNZXRob2RzPXtNRVRIT0Q6ZnVuY3Rpb24gTUVUSE9EKHBhdGgsbWV0aG9kLGFyZ3Mpe2lmKHBhdGg9PT11bmRlZmluZWR8fHBhdGg9PT1udWxsKXtyZXR1cm47fWlmKGFyZ3MubGVuZ3RoPT09MSl7dGhpcy5kaXNwYXRjaChwYXRoLG1ldGhvZCk7cmV0dXJuO31pZihhcmdzLmxlbmd0aD09PTImJl90eXBlb2YoYXJnc1sxXSk9PT0nb2JqZWN0JyYmYXJnc1sxXSE9PW51bGwmJiEoYXJnc1sxXSBpbnN0YW5jZW9mIFJvdXRlcikpe3RoaXMuZGlzcGF0Y2gocGF0aCxtZXRob2QsYXJnc1sxXSk7cmV0dXJuO312YXIgc2VsZj1wcml2YXRlcyh0aGlzKTt2YXIgdHlwZT0nbWV0aG9kJzt2YXIgbGlzdGVuZXJzPVtdO0FycmF5LnByb3RvdHlwZS5zaGlmdC5iaW5kKGFyZ3MpKCk7QXJyYXkucHJvdG90eXBlLmZvckVhY2guYmluZChhcmdzKShmdW5jdGlvbihhcmcpe2lmKHR5cGVvZiBhcmchPT0nZnVuY3Rpb24nJiYhKGFyZyBpbnN0YW5jZW9mIFJvdXRlcikpe3JldHVybjt9aWYodHlwZW9mIGFyZz09PSdmdW5jdGlvbicmJmFyZy5sZW5ndGg9PT00KXtzZWxmLnJlZ2lzdGVyKHtwYXRoOnBhdGgsdHlwZTp0eXBlLG1ldGhvZDptZXRob2QsbGlzdGVuZXI6YXJnfSwnZXJyb3InKTtyZXR1cm47fWxpc3RlbmVycy5wdXNoKGFyZyk7fSk7aWYobGlzdGVuZXJzLmxlbmd0aCE9PTApe3NlbGYucmVnaXN0ZXIoe3BhdGg6cGF0aCx0eXBlOnR5cGUsbWV0aG9kOm1ldGhvZCxsaXN0ZW5lcnM6bGlzdGVuZXJzfSk7fX0sZ2V0UmVtYWluZGVyOmZ1bmN0aW9uIGdldFJlbWFpbmRlcihtYXRjaGVkKXtpZihtYXRjaGVkLmluZGV4IT09MCl7cmV0dXJuIG51bGw7fXZhciByZW1haW5kZXI9bWF0Y2hlZC5pbnB1dC5yZXBsYWNlKG1hdGNoZWRbMF0sJycpO2lmKG1hdGNoZWRbMF0uc2xpY2UoLTEpIT09Jy8nJiZyZW1haW5kZXJbMF0hPT0nLycmJnJlbWFpbmRlciE9PScnKXtyZXR1cm4gbnVsbDt9cmV0dXJuIF9VUkwyLmRlZmF1bHQuYWRkRmlyc3RTbGFzaChyZW1haW5kZXIpO30sZ2V0UGFyYW1zOmZ1bmN0aW9uIGdldFBhcmFtcyhtYXRjaGVkLGtleXMscGFyZW50UGFyYW1zKXt2YXIgc2VsZj1wcml2YXRlcyh0aGlzKTt2YXIgcGFyYW1zPXNlbGYuZGVmYXVsdHMubWVyZ2VQYXJhbXM/X2V4dGVuZHMoe30scGFyZW50UGFyYW1zKTp7fTttYXRjaGVkPW1hdGNoZWQuY29uY2F0KFtdKTttYXRjaGVkLnNoaWZ0KCk7aWYobWF0Y2hlZC5sZW5ndGg9PT0wKXtyZXR1cm4gcGFyYW1zO31rZXlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUpe2lmKCh0eXBlb2YgdmFsdWU9PT0ndW5kZWZpbmVkJz8ndW5kZWZpbmVkJzpfdHlwZW9mKHZhbHVlKSkhPT0nb2JqZWN0Jyl7cmV0dXJuO31wYXJhbXNbdmFsdWUubmFtZV09bWF0Y2hlZC5zaGlmdCgpO30pO3JldHVybiBwYXJhbXM7fSxnZXRDaGFuZ2VkUGFyYW1LZXlzOmZ1bmN0aW9uIGdldENoYW5nZWRQYXJhbUtleXMocGFyYW1zT2JzZXJ2ZXIscGFyYW1zKXt2YXIga2V5cz1bXTtmb3IodmFyIHByb3AgaW4gcGFyYW1zKXtpZihwYXJhbXNPYnNlcnZlcltwcm9wXSE9PXBhcmFtc1twcm9wXSl7cGFyYW1zT2JzZXJ2ZXJbcHJvcF09cGFyYW1zW3Byb3BdO2tleXMucHVzaChwcm9wKTt9fXJldHVybiBrZXlzO30sZ2V0UGFyYW1IYW5kbGVyczpmdW5jdGlvbiBnZXRQYXJhbUhhbmRsZXJzKGtleXMscmVxKXt2YXIgc2VsZj1wcml2YXRlcyh0aGlzKTt2YXIgcGFyYW1IYW5kbGVycz1bXTtrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KXtpZihrZXkgaW4gc2VsZi5wYXJhbUhhbmRsZXJzPT09ZmFsc2Upe3JldHVybjt9cGFyYW1IYW5kbGVycy5wdXNoKHtoYW5kbGVyOnt0eXBlOnNlbGYucGFyYW1IYW5kbGVyc1trZXldLnR5cGUsbGlzdGVuZXJzOnNlbGYucGFyYW1IYW5kbGVyc1trZXldLmxpc3RlbmVyc30scGFyYW1WYWx1ZTpyZXEucGFyYW1zW2tleV0scmVxOnJlcX0pO30pO3JldHVybiBwYXJhbUhhbmRsZXJzO30sZ2V0TWF0Y2hlZE1pZGRsZXdhcmVIYW5kbGVyczpmdW5jdGlvbiBnZXRNYXRjaGVkTWlkZGxld2FyZUhhbmRsZXJzKGhhbmRsZXIscmVxLHJlbWFpbmRlcil7aWYodHlwZW9mIGhhbmRsZXIubGlzdGVuZXI9PT0nZnVuY3Rpb24nKXtyZXR1cm4gW3toYW5kbGVyOmhhbmRsZXIscmVxOnJlcX1dO31pZihoYW5kbGVyLmxpc3RlbmVyIGluc3RhbmNlb2YgUm91dGVyKXtyZXR1cm4gaGFuZGxlci5saXN0ZW5lci5nZXRNYXRjaGVkSGFuZGxlcnMocmVtYWluZGVyLHJlcS5tZXRob2QscmVxLmJhc2VVcmwscmVxLnBhcmFtcyk7fX0sZ2V0TWF0Y2hlZEhhbmRsZXJzOmZ1bmN0aW9uIGdldE1hdGNoZWRIYW5kbGVycyhwYXRoLG1ldGhvZCxfYmFzZVVybCl7dmFyIHNlbGY9cHJpdmF0ZXModGhpcyk7dmFyIG1hdGNoZWRIYW5kbGVycz1bXTtzZWxmLmhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24oaGFuZGxlcil7dmFyIGJhc2VVcmw9X2Jhc2VVcmw7dmFyIG1hdGNoZWQ9aGFuZGxlci5wYXR0ZXJuLmV4ZWMocGF0aCk7aWYobWF0Y2hlZD09PW51bGwpe3JldHVybjt9aWYoaGFuZGxlci50eXBlPT09J21pZGRsZXdhcmUnKXt2YXIgcmVtYWluZGVyPXNlbGYuZ2V0UmVtYWluZGVyKG1hdGNoZWQpO2lmKHJlbWFpbmRlcj09PW51bGwpe3JldHVybjt9YmFzZVVybCs9X1VSTDIuZGVmYXVsdC5yZW1vdmVUcmFpbGluZ1NsYXNoKG1hdGNoZWRbMF0pO21hdGNoZWRIYW5kbGVycy5wdXNoKHtoYW5kbGVyOmhhbmRsZXIsbWF0Y2hlZDptYXRjaGVkLGJhc2VVcmw6YmFzZVVybCxyZW1haW5kZXI6cmVtYWluZGVyfSk7fWVsc2UgaWYobWV0aG9kPT09J2FsbCd8fGhhbmRsZXIubWV0aG9kPT09J2FsbCd8fGhhbmRsZXIubWV0aG9kPT09bWV0aG9kKXttYXRjaGVkSGFuZGxlcnMucHVzaCh7aGFuZGxlcjpoYW5kbGVyLG1hdGNoZWQ6bWF0Y2hlZCxiYXNlVXJsOmJhc2VVcmwscmVtYWluZGVyOicvJ30pO319KTtyZXR1cm4gbWF0Y2hlZEhhbmRsZXJzO30sZ2V0Q2FsbGVkSGFuZGxlcnM6ZnVuY3Rpb24gZ2V0Q2FsbGVkSGFuZGxlcnMocGF0aCxtZXRob2QsYmFzZVVybCxwYXJhbXMpe3ZhciBfdGhpczI9dGhpczt2YXIgc2VsZj1wcml2YXRlcyh0aGlzKTt2YXIgbWF0Y2hlZEhhbmRsZXJzPXNlbGYuZ2V0TWF0Y2hlZEhhbmRsZXJzKHBhdGgsbWV0aG9kLGJhc2VVcmwpO3ZhciBjYWxsZWRIYW5kbGVycz1bXTt2YXIgcGFyYW1zT2JzZXJ2ZXI9e307bWF0Y2hlZEhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24obWF0Y2hlZEhhbmRsZXIpe3ZhciBoYW5kbGVyPW1hdGNoZWRIYW5kbGVyLmhhbmRsZXI7dmFyIG1hdGNoZWQ9bWF0Y2hlZEhhbmRsZXIubWF0Y2hlZDt2YXIgcmVtYWluZGVyPW1hdGNoZWRIYW5kbGVyLnJlbWFpbmRlcjt2YXIgcmVxPXthcHA6X3RoaXMyLGJhc2VVcmw6bWF0Y2hlZEhhbmRsZXIuYmFzZVVybCxwYXJhbXM6c2VsZi5nZXRQYXJhbXMobWF0Y2hlZCxoYW5kbGVyLnBhdHRlcm4ua2V5cyxwYXJhbXMpfTt2YXIgY2hhbmdlZFBhcmFtS2V5cz1zZWxmLmdldENoYW5nZWRQYXJhbUtleXMocGFyYW1zT2JzZXJ2ZXIscmVxLnBhcmFtcyk7dmFyIHBhcmFtSGFuZGxlcnM9c2VsZi5nZXRQYXJhbUhhbmRsZXJzKGNoYW5nZWRQYXJhbUtleXMscmVxKTtjYWxsZWRIYW5kbGVycy5wdXNoLmFwcGx5KGNhbGxlZEhhbmRsZXJzLHBhcmFtSGFuZGxlcnMpO2NhbGxlZEhhbmRsZXJzLnB1c2goe2hhbmRsZXI6aGFuZGxlcixyZXE6cmVxLHJlbWFpbmRlcjpyZW1haW5kZXJ9KTt9KTtyZXR1cm4gY2FsbGVkSGFuZGxlcnM7fSxnZkdldENhbGxlZEhhbmRsZXI6ZnVuY3Rpb24gZ2ZHZXRDYWxsZWRIYW5kbGVyKHBhdGgsbWV0aG9kLGJhc2VVcmwscGFyYW1zKXt2YXIgY2FsbGVkSGFuZGxlcnM9cHJpdmF0ZXModGhpcykuZ2V0Q2FsbGVkSGFuZGxlcnMocGF0aCxtZXRob2QsYmFzZVVybCxwYXJhbXMpO3ZhciBpPTA7dmFyIGw9MDt2YXIgY2hpbGRSb3V0ZXI9bnVsbDt2YXIgb2JqPXt2YWx1ZTp1bmRlZmluZWQsZG9uZTp0cnVlfTtyZXR1cm4ge25leHQ6ZnVuY3Rpb24gbmV4dChza2lwKXtpZihjYWxsZWRIYW5kbGVycy5sZW5ndGg8PWkpe3JldHVybiB7ZG9uZTp0cnVlLHZhbHVlOnVuZGVmaW5lZH07fXZhciBjYWxsZWRIYW5kbGVyPWNhbGxlZEhhbmRsZXJzW2ldO2lmKGNhbGxlZEhhbmRsZXIuaGFuZGxlci5saXN0ZW5lcnMubGVuZ3RoPD1sKXtpKys7bD0wO3JldHVybiB0aGlzLm5leHQoKTt9aWYoY2hpbGRSb3V0ZXIpe3ZhciBuZXh0SGFuZGxlcj1jaGlsZFJvdXRlci5nZXROZXh0SGFuZGxlcihza2lwKTtpZihuZXh0SGFuZGxlcil7cmV0dXJuIHtkb25lOmZhbHNlLHZhbHVlOm5leHRIYW5kbGVyfTt9bCsrO2NoaWxkUm91dGVyPW51bGw7cmV0dXJuIHRoaXMubmV4dCgpO31pZihsIT09MCYmc2tpcCl7aSsrO2w9MDtyZXR1cm4gdGhpcy5uZXh0KCk7fXZhciBsaXN0ZW5lcj1jYWxsZWRIYW5kbGVyLmhhbmRsZXIubGlzdGVuZXJzW2xdO2lmKGxpc3RlbmVyIGluc3RhbmNlb2YgUm91dGVyKXtjaGlsZFJvdXRlcj1wcml2YXRlcyhsaXN0ZW5lcik7Y2hpbGRSb3V0ZXIuZ29HZXRDYWxsZWRIYW5kbGVyPWNoaWxkUm91dGVyLmdmR2V0Q2FsbGVkSGFuZGxlcihjYWxsZWRIYW5kbGVyLnJlbWFpbmRlcixtZXRob2QsY2FsbGVkSGFuZGxlci5yZXEuYmFzZVVybCxjYWxsZWRIYW5kbGVyLnJlcS5wYXJhbXMpO3ZhciBfbmV4dEhhbmRsZXI9Y2hpbGRSb3V0ZXIuZ2V0TmV4dEhhbmRsZXIoKTtpZihfbmV4dEhhbmRsZXIpe3JldHVybiB7ZG9uZTpmYWxzZSx2YWx1ZTpfbmV4dEhhbmRsZXJ9O31sKys7Y2hpbGRSb3V0ZXI9bnVsbDtyZXR1cm4gdGhpcy5uZXh0KCk7fWwrKztyZXR1cm4ge2RvbmU6ZmFsc2UsdmFsdWU6e3R5cGU6Y2FsbGVkSGFuZGxlci5oYW5kbGVyLnR5cGUsbGlzdGVuZXI6bGlzdGVuZXIscmVxOmNhbGxlZEhhbmRsZXIucmVxLHBhcmFtVmFsdWU6Y2FsbGVkSGFuZGxlci5wYXJhbVZhbHVlfX07fX07fSxnZXRNYXRjaGVkRXJyb3JIYW5kbGVyczpmdW5jdGlvbiBnZXRNYXRjaGVkRXJyb3JIYW5kbGVycyhyZXF1ZXN0KXt2YXIgc2VsZj1wcml2YXRlcyh0aGlzKTt2YXIgbWF0Y2hlZEhhbmRsZXJzPVtdO3ZhciBtZXRob2Q9cmVxdWVzdC5tZXRob2Q7dmFyIHBhdGg9cmVxdWVzdC5wYXRobmFtZTtzZWxmLmVycm9ySGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbihoYW5kbGVyKXt2YXIgbWF0Y2hlZD1oYW5kbGVyLnBhdHRlcm4uZXhlYyhwYXRoKTtpZihtYXRjaGVkPT09bnVsbCl7cmV0dXJuO31pZihoYW5kbGVyLnR5cGU9PT0nbWlkZGxld2FyZScpe3ZhciByZW1haW5kZXI9c2VsZi5nZXRSZW1haW5kZXIobWF0Y2hlZCk7aWYocmVtYWluZGVyPT09bnVsbCl7cmV0dXJuO31tYXRjaGVkSGFuZGxlcnMucHVzaCh7aGFuZGxlcjpoYW5kbGVyfSk7fWVsc2UgaWYoaGFuZGxlci5tZXRob2Q9PT0nYWxsJ3x8bWV0aG9kPT09J2FsbCd8fGhhbmRsZXIubWV0aG9kPT09bWV0aG9kKXttYXRjaGVkSGFuZGxlcnMucHVzaCh7aGFuZGxlcjpoYW5kbGVyfSk7fX0pO3JldHVybiBtYXRjaGVkSGFuZGxlcnM7fSxnZkdldE1hdGNoZWRFcnJvckhhbmRsZXI6ZnVuY3Rpb24gZ2ZHZXRNYXRjaGVkRXJyb3JIYW5kbGVyKHJlcXVlc3Qpe3ZhciBtYXRjaGVkSGFuZGxlcnM9cHJpdmF0ZXModGhpcykuZ2V0TWF0Y2hlZEVycm9ySGFuZGxlcnMocmVxdWVzdCk7dmFyIGk9MDtyZXR1cm4ge25leHQ6ZnVuY3Rpb24gbmV4dCgpe2lmKG1hdGNoZWRIYW5kbGVycy5sZW5ndGg8PWkpe3JldHVybiB7ZG9uZTp0cnVlLHZhbHVlOnVuZGVmaW5lZH07fXJldHVybiB7ZG9uZTpmYWxzZSx2YWx1ZTptYXRjaGVkSGFuZGxlcnNbaSsrXX07fX07fSxnZXROZXh0SGFuZGxlcjpmdW5jdGlvbiBnZXROZXh0SGFuZGxlcigpe3ZhciBnZW5PYmo9cHJpdmF0ZXModGhpcykuZ29HZXRDYWxsZWRIYW5kbGVyLm5leHQoYXJndW1lbnRzWzBdKTtpZihnZW5PYmouZG9uZSl7cmV0dXJuIG51bGw7fXJldHVybiBnZW5PYmoudmFsdWU7fSxydW5OZXh0SGFuZGxlcjpmdW5jdGlvbiBydW5OZXh0SGFuZGxlcihyZXF1ZXN0LHJlc3BvbnNlLGVycm9yKXt2YXIgc2VsZj1wcml2YXRlcyh0aGlzKTt2YXIgbmV4dEhhbmRsZXI9bnVsbDtpZihlcnJvcj09PSdyb3V0ZScpe25leHRIYW5kbGVyPXNlbGYuZ2V0TmV4dEhhbmRsZXIodHJ1ZSk7fWVsc2UgaWYoZXJyb3IhPT11bmRlZmluZWQpe3NlbGYuZ29HZXRNYXRjaGVkRXJyb3JIYW5kbGVycz1zZWxmLmdmR2V0TWF0Y2hlZEVycm9ySGFuZGxlcihyZXF1ZXN0KTtzZWxmLnJ1bk5leHRFcnJvckhhbmRsZXIocmVxdWVzdCxyZXNwb25zZSxlcnJvcik7cmV0dXJuO31lbHNlIHtuZXh0SGFuZGxlcj1zZWxmLmdldE5leHRIYW5kbGVyKCk7fWlmKG5leHRIYW5kbGVyPT09bnVsbCl7cmV0dXJuO31fZXh0ZW5kcyhyZXF1ZXN0LG5leHRIYW5kbGVyLnJlcSk7dmFyIG5leHQ9c2VsZi5ydW5OZXh0SGFuZGxlci5iaW5kKHNlbGYscmVxdWVzdCxyZXNwb25zZSk7aWYobmV4dEhhbmRsZXIudHlwZT09PSdwYXJhbWV0ZXInKXtuZXh0SGFuZGxlci5saXN0ZW5lcihyZXF1ZXN0LHJlc3BvbnNlLG5leHQsbmV4dEhhbmRsZXIucGFyYW1WYWx1ZSk7cmV0dXJuO31uZXh0SGFuZGxlci5saXN0ZW5lcihyZXF1ZXN0LHJlc3BvbnNlLG5leHQpO30sZ2V0TmV4dEVycm9ySGFuZGxlcjpmdW5jdGlvbiBnZXROZXh0RXJyb3JIYW5kbGVyKCl7dmFyIGdlbk9iaj1wcml2YXRlcyh0aGlzKS5nb0dldE1hdGNoZWRFcnJvckhhbmRsZXJzLm5leHQoKTtpZihnZW5PYmouZG9uZSl7cmV0dXJuIG51bGw7fXJldHVybiBnZW5PYmoudmFsdWU7fSxydW5OZXh0RXJyb3JIYW5kbGVyOmZ1bmN0aW9uIHJ1bk5leHRFcnJvckhhbmRsZXIocmVxdWVzdCxyZXNwb25zZSxlcnJvcil7dmFyIHNlbGY9cHJpdmF0ZXModGhpcyk7dmFyIG5leHRIYW5kbGVyPXNlbGYuZ2V0TmV4dEVycm9ySGFuZGxlcigpO2lmKG5leHRIYW5kbGVyPT09bnVsbCl7cmV0dXJuO312YXIgbmV4dD1zZWxmLnJ1bk5leHRFcnJvckhhbmRsZXIuYmluZChzZWxmLHJlcXVlc3QscmVzcG9uc2UsZXJyb3IpO25leHRIYW5kbGVyLmhhbmRsZXIubGlzdGVuZXIoZXJyb3IscmVxdWVzdCxyZXNwb25zZSxuZXh0KTt9LHJlZ2lzdGVyOmZ1bmN0aW9uIHJlZ2lzdGVyKHByb3BlcnRpZXMsZGVzdGluYXRpb24pe3ZhciBzZWxmPXByaXZhdGVzKHRoaXMpO3ZhciBoYW5kbGVyPXByb3BlcnRpZXM7aWYoaGFuZGxlci50eXBlPT09J21pZGRsZXdhcmUnKXtoYW5kbGVyLnBhdHRlcm49KDAsX3BhdGhUb1JlZ2V4cDIuZGVmYXVsdCkoaGFuZGxlci5wYXRoLG51bGwse3NlbnNpdGl2ZTpzZWxmLmRlZmF1bHRzLmNhc2VTZW5zaXRpdmUsc3RyaWN0OnNlbGYuZGVmYXVsdHMuc3RyaWN0LGVuZDpmYWxzZX0pO31lbHNlIHtoYW5kbGVyLnBhdHRlcm49KDAsX3BhdGhUb1JlZ2V4cDIuZGVmYXVsdCkoaGFuZGxlci5wYXRoLG51bGwse3NlbnNpdGl2ZTpzZWxmLmRlZmF1bHRzLmNhc2VTZW5zaXRpdmUsc3RyaWN0OnNlbGYuZGVmYXVsdHMuc3RyaWN0LGVuZDp0cnVlfSk7fWlmKGRlc3RpbmF0aW9uPT09J2Vycm9yJyl7c2VsZi5lcnJvckhhbmRsZXJzLnB1c2goaGFuZGxlcik7cmV0dXJuO31zZWxmLmhhbmRsZXJzLnB1c2goaGFuZGxlcik7fX07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xlYWRzLXJvdXRlci9saWIvUm91dGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO3ZhciBfcXVlcnlzdHJpbmc9cmVxdWlyZSgncXVlcnlzdHJpbmcnKTt2YXIgX3F1ZXJ5c3RyaW5nMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9xdWVyeXN0cmluZyk7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9O312YXIgVVJMPXt9O1VSTC5wYXJzZT1mdW5jdGlvbih1cmxTdHJpbmcpe3ZhciBhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTthLmhyZWY9dXJsU3RyaW5nO2EuaHJlZj1hLmhyZWY7dmFyIHVybE9iaj17fTt1cmxPYmoucHJvdG9jb2w9YS5wcm90b2NvbDt1cmxPYmouc2VjdXJlPWEucHJvdG9jb2w9PT0naHR0cHM6Jzt1cmxPYmouaG9zdD1hLnBvcnQ9PT0nODAnP2EuaG9zdC5yZXBsYWNlKCc6ODAnLCcnKTphLmhvc3Q7dXJsT2JqLnBvcnQ9YS5wb3J0PT09JzgwJz8nJzphLnBvcnQ7dXJsT2JqLmhvc3RuYW1lPWEuaG9zdG5hbWU7dXJsT2JqLmhhc2g9YS5oYXNoO3VybE9iai5zZWFyY2g9YS5zZWFyY2g7dXJsT2JqLnF1ZXJ5PV9xdWVyeXN0cmluZzIuZGVmYXVsdC5wYXJzZShhLnNlYXJjaC5zbGljZSgxKSk7dXJsT2JqLnBhdGhuYW1lPVVSTC5hZGp1c3RVUkxTbGFzaChVUkwuYWRkRmlyc3RTbGFzaChhLnBhdGhuYW1lKSk7dXJsT2JqLnBhdGg9dXJsT2JqLnBhdGhuYW1lK2Euc2VhcmNoO3VybE9iai5ocmVmPWEuaHJlZjt1cmxPYmoub3JpZ2luPWEucHJvdG9jb2wrJy8vJyt1cmxPYmouaG9zdDtyZXR1cm4gdXJsT2JqO307VVJMLmFkZEZpcnN0U2xhc2g9ZnVuY3Rpb24ocGF0aFN0cmluZyl7cmV0dXJuIHBhdGhTdHJpbmcucmVwbGFjZSgvXihcXC8qKT8vLCcvJyk7fTtVUkwuYWRkVHJhaWxpbmdTbGFzaD1mdW5jdGlvbihwYXRoU3RyaW5nKXtyZXR1cm4gcGF0aFN0cmluZy5yZXBsYWNlKC8oXFwvKik/JC8sJy8nKTt9O1VSTC5yZW1vdmVUcmFpbGluZ1NsYXNoPWZ1bmN0aW9uKHBhdGhuYW1lKXtyZXR1cm4gcGF0aG5hbWUucmVwbGFjZSgvXFwvKiQvLCcnKTt9O1VSTC5hZGp1c3RVUkxTbGFzaD1mdW5jdGlvbihwYXRobmFtZSl7cmV0dXJuIHBhdGhuYW1lLnJlcGxhY2UoL1xcLysvZywnLycpO307ZXhwb3J0cy5kZWZhdWx0PVVSTDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbGVhZHMtcm91dGVyL2xpYi9VUkwuanNcbi8vIG1vZHVsZSBpZCA9IDEyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuZGVjb2RlID0gZXhwb3J0cy5wYXJzZSA9IHJlcXVpcmUoJy4vZGVjb2RlJyk7XG5leHBvcnRzLmVuY29kZSA9IGV4cG9ydHMuc3RyaW5naWZ5ID0gcmVxdWlyZSgnLi9lbmNvZGUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9xdWVyeXN0cmluZy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbi8vIElmIG9iai5oYXNPd25Qcm9wZXJ0eSBoYXMgYmVlbiBvdmVycmlkZGVuLCB0aGVuIGNhbGxpbmdcbi8vIG9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSB3aWxsIGJyZWFrLlxuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vam95ZW50L25vZGUvaXNzdWVzLzE3MDdcbmZ1bmN0aW9uIGhhc093blByb3BlcnR5KG9iaiwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ocXMsIHNlcCwgZXEsIG9wdGlvbnMpIHtcbiAgc2VwID0gc2VwIHx8ICcmJztcbiAgZXEgPSBlcSB8fCAnPSc7XG4gIHZhciBvYmogPSB7fTtcblxuICBpZiAodHlwZW9mIHFzICE9PSAnc3RyaW5nJyB8fCBxcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgdmFyIHJlZ2V4cCA9IC9cXCsvZztcbiAgcXMgPSBxcy5zcGxpdChzZXApO1xuXG4gIHZhciBtYXhLZXlzID0gMTAwMDtcbiAgaWYgKG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubWF4S2V5cyA9PT0gJ251bWJlcicpIHtcbiAgICBtYXhLZXlzID0gb3B0aW9ucy5tYXhLZXlzO1xuICB9XG5cbiAgdmFyIGxlbiA9IHFzLmxlbmd0aDtcbiAgLy8gbWF4S2V5cyA8PSAwIG1lYW5zIHRoYXQgd2Ugc2hvdWxkIG5vdCBsaW1pdCBrZXlzIGNvdW50XG4gIGlmIChtYXhLZXlzID4gMCAmJiBsZW4gPiBtYXhLZXlzKSB7XG4gICAgbGVuID0gbWF4S2V5cztcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICB2YXIgeCA9IHFzW2ldLnJlcGxhY2UocmVnZXhwLCAnJTIwJyksXG4gICAgICAgIGlkeCA9IHguaW5kZXhPZihlcSksXG4gICAgICAgIGtzdHIsIHZzdHIsIGssIHY7XG5cbiAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgIGtzdHIgPSB4LnN1YnN0cigwLCBpZHgpO1xuICAgICAgdnN0ciA9IHguc3Vic3RyKGlkeCArIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBrc3RyID0geDtcbiAgICAgIHZzdHIgPSAnJztcbiAgICB9XG5cbiAgICBrID0gZGVjb2RlVVJJQ29tcG9uZW50KGtzdHIpO1xuICAgIHYgPSBkZWNvZGVVUklDb21wb25lbnQodnN0cik7XG5cbiAgICBpZiAoIWhhc093blByb3BlcnR5KG9iaiwgaykpIHtcbiAgICAgIG9ialtrXSA9IHY7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG9ialtrXSkpIHtcbiAgICAgIG9ialtrXS5wdXNoKHYpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmpba10gPSBbb2JqW2tdLCB2XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9xdWVyeXN0cmluZy9kZWNvZGUuanNcbi8vIG1vZHVsZSBpZCA9IDEyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgc3RyaW5naWZ5UHJpbWl0aXZlID0gZnVuY3Rpb24odikge1xuICBzd2l0Y2ggKHR5cGVvZiB2KSB7XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIHJldHVybiB2O1xuXG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICByZXR1cm4gdiA/ICd0cnVlJyA6ICdmYWxzZSc7XG5cbiAgICBjYXNlICdudW1iZXInOlxuICAgICAgcmV0dXJuIGlzRmluaXRlKHYpID8gdiA6ICcnO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAnJztcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmosIHNlcCwgZXEsIG5hbWUpIHtcbiAgc2VwID0gc2VwIHx8ICcmJztcbiAgZXEgPSBlcSB8fCAnPSc7XG4gIGlmIChvYmogPT09IG51bGwpIHtcbiAgICBvYmogPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5tYXAoZnVuY3Rpb24oaykge1xuICAgICAgdmFyIGtzID0gZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShrKSkgKyBlcTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG9ialtrXSkpIHtcbiAgICAgICAgcmV0dXJuIG9ialtrXS5tYXAoZnVuY3Rpb24odikge1xuICAgICAgICAgIHJldHVybiBrcyArIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUodikpO1xuICAgICAgICB9KS5qb2luKHNlcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ga3MgKyBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKG9ialtrXSkpO1xuICAgICAgfVxuICAgIH0pLmpvaW4oc2VwKTtcblxuICB9XG5cbiAgaWYgKCFuYW1lKSByZXR1cm4gJyc7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKG5hbWUpKSArIGVxICtcbiAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUob2JqKSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3F1ZXJ5c3RyaW5nL2VuY29kZS5qc1xuLy8gbW9kdWxlIGlkID0gMTI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc2FycmF5ID0gcmVxdWlyZSgnaXNhcnJheScpXG5cbi8qKlxuICogRXhwb3NlIGBwYXRoVG9SZWdleHBgLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGhUb1JlZ2V4cFxubW9kdWxlLmV4cG9ydHMucGFyc2UgPSBwYXJzZVxubW9kdWxlLmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGVcbm1vZHVsZS5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uXG5tb2R1bGUuZXhwb3J0cy50b2tlbnNUb1JlZ0V4cCA9IHRva2Vuc1RvUmVnRXhwXG5cbi8qKlxuICogVGhlIG1haW4gcGF0aCBtYXRjaGluZyByZWdleHAgdXRpbGl0eS5cbiAqXG4gKiBAdHlwZSB7UmVnRXhwfVxuICovXG52YXIgUEFUSF9SRUdFWFAgPSBuZXcgUmVnRXhwKFtcbiAgLy8gTWF0Y2ggZXNjYXBlZCBjaGFyYWN0ZXJzIHRoYXQgd291bGQgb3RoZXJ3aXNlIGFwcGVhciBpbiBmdXR1cmUgbWF0Y2hlcy5cbiAgLy8gVGhpcyBhbGxvd3MgdGhlIHVzZXIgdG8gZXNjYXBlIHNwZWNpYWwgY2hhcmFjdGVycyB0aGF0IHdvbid0IHRyYW5zZm9ybS5cbiAgJyhcXFxcXFxcXC4pJyxcbiAgLy8gTWF0Y2ggRXhwcmVzcy1zdHlsZSBwYXJhbWV0ZXJzIGFuZCB1bi1uYW1lZCBwYXJhbWV0ZXJzIHdpdGggYSBwcmVmaXhcbiAgLy8gYW5kIG9wdGlvbmFsIHN1ZmZpeGVzLiBNYXRjaGVzIGFwcGVhciBhczpcbiAgLy9cbiAgLy8gXCIvOnRlc3QoXFxcXGQrKT9cIiA9PiBbXCIvXCIsIFwidGVzdFwiLCBcIlxcZCtcIiwgdW5kZWZpbmVkLCBcIj9cIiwgdW5kZWZpbmVkXVxuICAvLyBcIi9yb3V0ZShcXFxcZCspXCIgID0+IFt1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIlxcZCtcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWRdXG4gIC8vIFwiLypcIiAgICAgICAgICAgID0+IFtcIi9cIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIipcIl1cbiAgJyhbXFxcXC8uXSk/KD86KD86XFxcXDooXFxcXHcrKSg/OlxcXFwoKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKCldKSspXFxcXCkpP3xcXFxcKCgoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpXSkrKVxcXFwpKShbKyo/XSk/fChcXFxcKikpJ1xuXS5qb2luKCd8JyksICdnJylcblxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSAgc3RyXG4gKiBAcGFyYW0gIHtPYmplY3Q9fSBvcHRpb25zXG4gKiBAcmV0dXJuIHshQXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHBhcnNlIChzdHIsIG9wdGlvbnMpIHtcbiAgdmFyIHRva2VucyA9IFtdXG4gIHZhciBrZXkgPSAwXG4gIHZhciBpbmRleCA9IDBcbiAgdmFyIHBhdGggPSAnJ1xuICB2YXIgZGVmYXVsdERlbGltaXRlciA9IG9wdGlvbnMgJiYgb3B0aW9ucy5kZWxpbWl0ZXIgfHwgJy8nXG4gIHZhciByZXNcblxuICB3aGlsZSAoKHJlcyA9IFBBVEhfUkVHRVhQLmV4ZWMoc3RyKSkgIT0gbnVsbCkge1xuICAgIHZhciBtID0gcmVzWzBdXG4gICAgdmFyIGVzY2FwZWQgPSByZXNbMV1cbiAgICB2YXIgb2Zmc2V0ID0gcmVzLmluZGV4XG4gICAgcGF0aCArPSBzdHIuc2xpY2UoaW5kZXgsIG9mZnNldClcbiAgICBpbmRleCA9IG9mZnNldCArIG0ubGVuZ3RoXG5cbiAgICAvLyBJZ25vcmUgYWxyZWFkeSBlc2NhcGVkIHNlcXVlbmNlcy5cbiAgICBpZiAoZXNjYXBlZCkge1xuICAgICAgcGF0aCArPSBlc2NhcGVkWzFdXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIHZhciBuZXh0ID0gc3RyW2luZGV4XVxuICAgIHZhciBwcmVmaXggPSByZXNbMl1cbiAgICB2YXIgbmFtZSA9IHJlc1szXVxuICAgIHZhciBjYXB0dXJlID0gcmVzWzRdXG4gICAgdmFyIGdyb3VwID0gcmVzWzVdXG4gICAgdmFyIG1vZGlmaWVyID0gcmVzWzZdXG4gICAgdmFyIGFzdGVyaXNrID0gcmVzWzddXG5cbiAgICAvLyBQdXNoIHRoZSBjdXJyZW50IHBhdGggb250byB0aGUgdG9rZW5zLlxuICAgIGlmIChwYXRoKSB7XG4gICAgICB0b2tlbnMucHVzaChwYXRoKVxuICAgICAgcGF0aCA9ICcnXG4gICAgfVxuXG4gICAgdmFyIHBhcnRpYWwgPSBwcmVmaXggIT0gbnVsbCAmJiBuZXh0ICE9IG51bGwgJiYgbmV4dCAhPT0gcHJlZml4XG4gICAgdmFyIHJlcGVhdCA9IG1vZGlmaWVyID09PSAnKycgfHwgbW9kaWZpZXIgPT09ICcqJ1xuICAgIHZhciBvcHRpb25hbCA9IG1vZGlmaWVyID09PSAnPycgfHwgbW9kaWZpZXIgPT09ICcqJ1xuICAgIHZhciBkZWxpbWl0ZXIgPSByZXNbMl0gfHwgZGVmYXVsdERlbGltaXRlclxuICAgIHZhciBwYXR0ZXJuID0gY2FwdHVyZSB8fCBncm91cFxuXG4gICAgdG9rZW5zLnB1c2goe1xuICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgIHByZWZpeDogcHJlZml4IHx8ICcnLFxuICAgICAgZGVsaW1pdGVyOiBkZWxpbWl0ZXIsXG4gICAgICBvcHRpb25hbDogb3B0aW9uYWwsXG4gICAgICByZXBlYXQ6IHJlcGVhdCxcbiAgICAgIHBhcnRpYWw6IHBhcnRpYWwsXG4gICAgICBhc3RlcmlzazogISFhc3RlcmlzayxcbiAgICAgIHBhdHRlcm46IHBhdHRlcm4gPyBlc2NhcGVHcm91cChwYXR0ZXJuKSA6IChhc3RlcmlzayA/ICcuKicgOiAnW14nICsgZXNjYXBlU3RyaW5nKGRlbGltaXRlcikgKyAnXSs/JylcbiAgICB9KVxuICB9XG5cbiAgLy8gTWF0Y2ggYW55IGNoYXJhY3RlcnMgc3RpbGwgcmVtYWluaW5nLlxuICBpZiAoaW5kZXggPCBzdHIubGVuZ3RoKSB7XG4gICAgcGF0aCArPSBzdHIuc3Vic3RyKGluZGV4KVxuICB9XG5cbiAgLy8gSWYgdGhlIHBhdGggZXhpc3RzLCBwdXNoIGl0IG9udG8gdGhlIGVuZC5cbiAgaWYgKHBhdGgpIHtcbiAgICB0b2tlbnMucHVzaChwYXRoKVxuICB9XG5cbiAgcmV0dXJuIHRva2Vuc1xufVxuXG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgICAgICBzdHJcbiAqIEBwYXJhbSAge09iamVjdD19ICAgICAgICAgICAgb3B0aW9uc1xuICogQHJldHVybiB7IWZ1bmN0aW9uKE9iamVjdD0sIE9iamVjdD0pfVxuICovXG5mdW5jdGlvbiBjb21waWxlIChzdHIsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSlcbn1cblxuLyoqXG4gKiBQcmV0dGllciBlbmNvZGluZyBvZiBVUkkgcGF0aCBzZWdtZW50cy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVuY29kZVVSSUNvbXBvbmVudFByZXR0eSAoc3RyKSB7XG4gIHJldHVybiBlbmNvZGVVUkkoc3RyKS5yZXBsYWNlKC9bXFwvPyNdL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuICclJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKVxuICB9KVxufVxuXG4vKipcbiAqIEVuY29kZSB0aGUgYXN0ZXJpc2sgcGFyYW1ldGVyLiBTaW1pbGFyIHRvIGBwcmV0dHlgLCBidXQgYWxsb3dzIHNsYXNoZXMuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBlbmNvZGVBc3RlcmlzayAoc3RyKSB7XG4gIHJldHVybiBlbmNvZGVVUkkoc3RyKS5yZXBsYWNlKC9bPyNdL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuICclJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKVxuICB9KVxufVxuXG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uICh0b2tlbnMpIHtcbiAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gIHZhciBtYXRjaGVzID0gbmV3IEFycmF5KHRva2Vucy5sZW5ndGgpXG5cbiAgLy8gQ29tcGlsZSBhbGwgdGhlIHBhdHRlcm5zIGJlZm9yZSBjb21waWxhdGlvbi5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodHlwZW9mIHRva2Vuc1tpXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1hdGNoZXNbaV0gPSBuZXcgUmVnRXhwKCdeKD86JyArIHRva2Vuc1tpXS5wYXR0ZXJuICsgJykkJylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKG9iaiwgb3B0cykge1xuICAgIHZhciBwYXRoID0gJydcbiAgICB2YXIgZGF0YSA9IG9iaiB8fCB7fVxuICAgIHZhciBvcHRpb25zID0gb3B0cyB8fCB7fVxuICAgIHZhciBlbmNvZGUgPSBvcHRpb25zLnByZXR0eSA/IGVuY29kZVVSSUNvbXBvbmVudFByZXR0eSA6IGVuY29kZVVSSUNvbXBvbmVudFxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXVxuXG4gICAgICBpZiAodHlwZW9mIHRva2VuID09PSAnc3RyaW5nJykge1xuICAgICAgICBwYXRoICs9IHRva2VuXG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlID0gZGF0YVt0b2tlbi5uYW1lXVxuICAgICAgdmFyIHNlZ21lbnRcblxuICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgaWYgKHRva2VuLm9wdGlvbmFsKSB7XG4gICAgICAgICAgLy8gUHJlcGVuZCBwYXJ0aWFsIHNlZ21lbnQgcHJlZml4ZXMuXG4gICAgICAgICAgaWYgKHRva2VuLnBhcnRpYWwpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIGJlIGRlZmluZWQnKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpc2FycmF5KHZhbHVlKSkge1xuICAgICAgICBpZiAoIXRva2VuLnJlcGVhdCkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gbm90IHJlcGVhdCwgYnV0IHJlY2VpdmVkIGAnICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpICsgJ2AnKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGlmICh0b2tlbi5vcHRpb25hbCkge1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBub3QgYmUgZW1wdHknKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdKVxuXG4gICAgICAgICAgaWYgKCFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGFsbCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIG1hdGNoIFwiJyArIHRva2VuLnBhdHRlcm4gKyAnXCIsIGJ1dCByZWNlaXZlZCBgJyArIEpTT04uc3RyaW5naWZ5KHNlZ21lbnQpICsgJ2AnKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHBhdGggKz0gKGogPT09IDAgPyB0b2tlbi5wcmVmaXggOiB0b2tlbi5kZWxpbWl0ZXIpICsgc2VnbWVudFxuICAgICAgICB9XG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgc2VnbWVudCA9IHRva2VuLmFzdGVyaXNrID8gZW5jb2RlQXN0ZXJpc2sodmFsdWUpIDogZW5jb2RlKHZhbHVlKVxuXG4gICAgICBpZiAoIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIG1hdGNoIFwiJyArIHRva2VuLnBhdHRlcm4gKyAnXCIsIGJ1dCByZWNlaXZlZCBcIicgKyBzZWdtZW50ICsgJ1wiJylcbiAgICAgIH1cblxuICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdGhcbiAgfVxufVxuXG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfFxcL1xcXFxdKS9nLCAnXFxcXCQxJylcbn1cblxuLyoqXG4gKiBFc2NhcGUgdGhlIGNhcHR1cmluZyBncm91cCBieSBlc2NhcGluZyBzcGVjaWFsIGNoYXJhY3RlcnMgYW5kIG1lYW5pbmcuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBncm91cFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBlc2NhcGVHcm91cCAoZ3JvdXApIHtcbiAgcmV0dXJuIGdyb3VwLnJlcGxhY2UoLyhbPSE6JFxcLygpXSkvZywgJ1xcXFwkMScpXG59XG5cbi8qKlxuICogQXR0YWNoIHRoZSBrZXlzIGFzIGEgcHJvcGVydHkgb2YgdGhlIHJlZ2V4cC5cbiAqXG4gKiBAcGFyYW0gIHshUmVnRXhwfSByZVxuICogQHBhcmFtICB7QXJyYXl9ICAga2V5c1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gYXR0YWNoS2V5cyAocmUsIGtleXMpIHtcbiAgcmUua2V5cyA9IGtleXNcbiAgcmV0dXJuIHJlXG59XG5cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZmxhZ3MgKG9wdGlvbnMpIHtcbiAgcmV0dXJuIG9wdGlvbnMuc2Vuc2l0aXZlID8gJycgOiAnaSdcbn1cblxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKlxuICogQHBhcmFtICB7IVJlZ0V4cH0gcGF0aFxuICogQHBhcmFtICB7IUFycmF5fSAga2V5c1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAgKHBhdGgsIGtleXMpIHtcbiAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpXG5cbiAgaWYgKGdyb3Vwcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXlzLnB1c2goe1xuICAgICAgICBuYW1lOiBpLFxuICAgICAgICBwcmVmaXg6IG51bGwsXG4gICAgICAgIGRlbGltaXRlcjogbnVsbCxcbiAgICAgICAgb3B0aW9uYWw6IGZhbHNlLFxuICAgICAgICByZXBlYXQ6IGZhbHNlLFxuICAgICAgICBwYXJ0aWFsOiBmYWxzZSxcbiAgICAgICAgYXN0ZXJpc2s6IGZhbHNlLFxuICAgICAgICBwYXR0ZXJuOiBudWxsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhdHRhY2hLZXlzKHBhdGgsIGtleXMpXG59XG5cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKlxuICogQHBhcmFtICB7IUFycmF5fSAgcGF0aFxuICogQHBhcmFtICB7QXJyYXl9ICAga2V5c1xuICogQHBhcmFtICB7IU9iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cCAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICB2YXIgcGFydHMgPSBbXVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xuICAgIHBhcnRzLnB1c2gocGF0aFRvUmVnZXhwKHBhdGhbaV0sIGtleXMsIG9wdGlvbnMpLnNvdXJjZSlcbiAgfVxuXG4gIHZhciByZWdleHAgPSBuZXcgUmVnRXhwKCcoPzonICsgcGFydHMuam9pbignfCcpICsgJyknLCBmbGFncyhvcHRpb25zKSlcblxuICByZXR1cm4gYXR0YWNoS2V5cyhyZWdleHAsIGtleXMpXG59XG5cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSAgcGF0aFxuICogQHBhcmFtICB7IUFycmF5fSAga2V5c1xuICogQHBhcmFtICB7IU9iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAgKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHRva2Vuc1RvUmVnRXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKVxufVxuXG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKlxuICogQHBhcmFtICB7IUFycmF5fSAgICAgICAgICB0b2tlbnNcbiAqIEBwYXJhbSAgeyhBcnJheXxPYmplY3QpPX0ga2V5c1xuICogQHBhcmFtICB7T2JqZWN0PX0gICAgICAgICBvcHRpb25zXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ0V4cCAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gIGlmICghaXNhcnJheShrZXlzKSkge1xuICAgIG9wdGlvbnMgPSAvKiogQHR5cGUgeyFPYmplY3R9ICovIChrZXlzIHx8IG9wdGlvbnMpXG4gICAga2V5cyA9IFtdXG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuXG4gIHZhciBzdHJpY3QgPSBvcHRpb25zLnN0cmljdFxuICB2YXIgZW5kID0gb3B0aW9ucy5lbmQgIT09IGZhbHNlXG4gIHZhciByb3V0ZSA9ICcnXG5cbiAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV1cblxuICAgIGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcodG9rZW4pXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcodG9rZW4ucHJlZml4KVxuICAgICAgdmFyIGNhcHR1cmUgPSAnKD86JyArIHRva2VuLnBhdHRlcm4gKyAnKSdcblxuICAgICAga2V5cy5wdXNoKHRva2VuKVxuXG4gICAgICBpZiAodG9rZW4ucmVwZWF0KSB7XG4gICAgICAgIGNhcHR1cmUgKz0gJyg/OicgKyBwcmVmaXggKyBjYXB0dXJlICsgJykqJ1xuICAgICAgfVxuXG4gICAgICBpZiAodG9rZW4ub3B0aW9uYWwpIHtcbiAgICAgICAgaWYgKCF0b2tlbi5wYXJ0aWFsKSB7XG4gICAgICAgICAgY2FwdHVyZSA9ICcoPzonICsgcHJlZml4ICsgJygnICsgY2FwdHVyZSArICcpKT8nXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FwdHVyZSA9IHByZWZpeCArICcoJyArIGNhcHR1cmUgKyAnKT8nXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhcHR1cmUgPSBwcmVmaXggKyAnKCcgKyBjYXB0dXJlICsgJyknXG4gICAgICB9XG5cbiAgICAgIHJvdXRlICs9IGNhcHR1cmVcbiAgICB9XG4gIH1cblxuICB2YXIgZGVsaW1pdGVyID0gZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8ICcvJylcbiAgdmFyIGVuZHNXaXRoRGVsaW1pdGVyID0gcm91dGUuc2xpY2UoLWRlbGltaXRlci5sZW5ndGgpID09PSBkZWxpbWl0ZXJcblxuICAvLyBJbiBub24tc3RyaWN0IG1vZGUgd2UgYWxsb3cgYSBzbGFzaCBhdCB0aGUgZW5kIG9mIG1hdGNoLiBJZiB0aGUgcGF0aCB0b1xuICAvLyBtYXRjaCBhbHJlYWR5IGVuZHMgd2l0aCBhIHNsYXNoLCB3ZSByZW1vdmUgaXQgZm9yIGNvbnNpc3RlbmN5LiBUaGUgc2xhc2hcbiAgLy8gaXMgdmFsaWQgYXQgdGhlIGVuZCBvZiBhIHBhdGggbWF0Y2gsIG5vdCBpbiB0aGUgbWlkZGxlLiBUaGlzIGlzIGltcG9ydGFudFxuICAvLyBpbiBub24tZW5kaW5nIG1vZGUsIHdoZXJlIFwiL3Rlc3QvXCIgc2hvdWxkbid0IG1hdGNoIFwiL3Rlc3QvL3JvdXRlXCIuXG4gIGlmICghc3RyaWN0KSB7XG4gICAgcm91dGUgPSAoZW5kc1dpdGhEZWxpbWl0ZXIgPyByb3V0ZS5zbGljZSgwLCAtZGVsaW1pdGVyLmxlbmd0aCkgOiByb3V0ZSkgKyAnKD86JyArIGRlbGltaXRlciArICcoPz0kKSk/J1xuICB9XG5cbiAgaWYgKGVuZCkge1xuICAgIHJvdXRlICs9ICckJ1xuICB9IGVsc2Uge1xuICAgIC8vIEluIG5vbi1lbmRpbmcgbW9kZSwgd2UgbmVlZCB0aGUgY2FwdHVyaW5nIGdyb3VwcyB0byBtYXRjaCBhcyBtdWNoIGFzXG4gICAgLy8gcG9zc2libGUgYnkgdXNpbmcgYSBwb3NpdGl2ZSBsb29rYWhlYWQgdG8gdGhlIGVuZCBvciBuZXh0IHBhdGggc2VnbWVudC5cbiAgICByb3V0ZSArPSBzdHJpY3QgJiYgZW5kc1dpdGhEZWxpbWl0ZXIgPyAnJyA6ICcoPz0nICsgZGVsaW1pdGVyICsgJ3wkKSdcbiAgfVxuXG4gIHJldHVybiBhdHRhY2hLZXlzKG5ldyBSZWdFeHAoJ14nICsgcm91dGUsIGZsYWdzKG9wdGlvbnMpKSwga2V5cylcbn1cblxuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICpcbiAqIEBwYXJhbSAgeyhzdHJpbmd8UmVnRXhwfEFycmF5KX0gcGF0aFxuICogQHBhcmFtICB7KEFycmF5fE9iamVjdCk9fSAgICAgICBrZXlzXG4gKiBAcGFyYW0gIHtPYmplY3Q9fSAgICAgICAgICAgICAgIG9wdGlvbnNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cCAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICBpZiAoIWlzYXJyYXkoa2V5cykpIHtcbiAgICBvcHRpb25zID0gLyoqIEB0eXBlIHshT2JqZWN0fSAqLyAoa2V5cyB8fCBvcHRpb25zKVxuICAgIGtleXMgPSBbXVxuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cblxuICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCAvKiogQHR5cGUgeyFBcnJheX0gKi8gKGtleXMpKVxuICB9XG5cbiAgaWYgKGlzYXJyYXkocGF0aCkpIHtcbiAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cCgvKiogQHR5cGUgeyFBcnJheX0gKi8gKHBhdGgpLCAvKiogQHR5cGUgeyFBcnJheX0gKi8gKGtleXMpLCBvcHRpb25zKVxuICB9XG5cbiAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAocGF0aCksIC8qKiBAdHlwZSB7IUFycmF5fSAqLyAoa2V5cyksIG9wdGlvbnMpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcGF0aC10by1yZWdleHAvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXNhcnJheS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD1uYW1lc3BhY2U7ZnVuY3Rpb24gbmFtZXNwYWNlKCl7dmFyIG1hcD1uZXcgV2Vha01hcCgpO3JldHVybiBmdW5jdGlvbihvYmplY3Qpe2lmKCFtYXAuaGFzKG9iamVjdCkpe21hcC5zZXQob2JqZWN0LHt9KTt9cmV0dXJuIG1hcC5nZXQob2JqZWN0KTt9O307XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xlYWRzLXJvdXRlci9saWIvbmFtZXNwYWNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLENvbnN0cnVjdG9yKXtpZighKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO319dmFyIFJlcXVlc3Q9ZnVuY3Rpb24gUmVxdWVzdCgpe19jbGFzc0NhbGxDaGVjayh0aGlzLFJlcXVlc3QpO307ZXhwb3J0cy5kZWZhdWx0PVJlcXVlc3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xlYWRzLXJvdXRlci9saWIvUmVxdWVzdC5qc1xuLy8gbW9kdWxlIGlkID0gMTMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2Z1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSxDb25zdHJ1Y3Rvcil7aWYoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTt9fXZhciBSZXNwb25zZT1mdW5jdGlvbiBSZXNwb25zZSgpe19jbGFzc0NhbGxDaGVjayh0aGlzLFJlc3BvbnNlKTt9O2V4cG9ydHMuZGVmYXVsdD1SZXNwb25zZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbGVhZHMtcm91dGVyL2xpYi9SZXNwb25zZS5qc1xuLy8gbW9kdWxlIGlkID0gMTMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBkaXNwYXRjaGVyIGZyb20gJy4uL2Rpc3BhdGNoZXIuanMnO1xyXG5pbXBvcnQgZ2V0TW92ZVRleHQgZnJvbSAnLi4vY29tbW9uL2dldE1vdmVUZXh0LmpzJztcclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGlucHV0U2VhcmNoSWQodmFsdWUpIHtcclxuXHRcdGRpc3BhdGNoZXIuZW1pdCgnaW5wdXRTZWFyY2hJZCcsIHZhbHVlKTtcclxuXHR9LFxyXG5cclxuXHRhc3luYyBmZXRjaE1hdGNoUmVjb3JkcyhzZWFyY2hJZCwgdXJscywgc3RhcnQpIHtcclxuXHRcdGRpc3BhdGNoZXIuZW1pdCgnZmV0Y2hNYXRjaFJlY29yZHMnKTtcclxuXHRcdFx0Y29uc3QgcmVjb3JkcyA9IFtdO1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGZvcihjb25zdCBjbGFzc05hbWUgaW4gdXJscykge1xyXG5cdFx0XHRcdFx0cmVjb3Jkcy5wdXNoKC4uLmF3YWl0IGZldGNoUmVjb3Jkcyh1cmxzW2NsYXNzTmFtZV0sIGNsYXNzTmFtZSwgc2VhcmNoSWQsIHN0YXJ0KSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9Y2F0Y2goZSkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGUpO1xyXG5cdFx0XHRcdHJldHVybiBkaXNwYXRjaGVyLmVtaXQoJ2ZldGNoTWF0Y2hSZWNvcmRzRmFpbGVkJyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGRpc3BhdGNoZXIuZW1pdCgnZmV0Y2hNYXRjaFJlY29yZHNTdWNjZXNzZnVsJywgcmVjb3Jkcyk7XHJcblx0fSxcclxuXHJcblx0c2hvd0hpc3RvcnlSZWNvcmRzKCkge1xyXG5cdFx0ZGlzcGF0Y2hlci5lbWl0KCdzaG93SGlzdG9yeVJlY29yZHMnKTtcclxuXHR9LFxyXG5cclxuXHRoaWRlSGlzdG9yeVJlY29yZHMoKSB7XHJcblx0XHRkaXNwYXRjaGVyLmVtaXQoJ2hpZGVIaXN0b3J5UmVjb3JkcycpO1xyXG5cdH0sXHJcblxyXG5cdGFzeW5jIGZldGNoS2lmdShyZWNvcmQpIHtcclxuXHRcdGRpc3BhdGNoZXIuZW1pdCgnZmV0Y2hLaWZ1JywgcmVjb3JkKTtcclxuXHRcdHRyeSB7XHJcblx0XHRcdHZhciBraWZ1ID0gYXdhaXQgZmV0Y2hLaWZ1KHJlY29yZC51cmwsIHJlY29yZCk7XHJcblx0XHR9Y2F0Y2goZSkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhlKTtcclxuXHRcdFx0cmV0dXJuIGRpc3BhdGNoZXIuZW1pdCgnZmV0Y2hLaWZ1RmFpbGVkJywgcmVjb3JkKTtcclxuXHRcdH1cclxuXHRcdGRpc3BhdGNoZXIuZW1pdCgnZmV0Y2hLaWZ1U3VjY2Vzc2Z1bCcsIHJlY29yZCwga2lmdSk7XHJcblx0fSxcclxuXHJcblx0Y29weUtpZnUocmVjb3JkKSB7XHJcblx0XHRjb3B5VGV4dChyZWNvcmQua2lmdSk7XHJcblx0XHRkaXNwYXRjaGVyLmVtaXQoJ2NvcHlLaWZ1JywgcmVjb3JkKTtcclxuXHR9LFxyXG5cclxuXHR1bm1vdW50SW5kZXgoKSB7XHJcblx0XHRkaXNwYXRjaGVyLmVtaXQoJ3VubW91bnRJbmRleCcpO1xyXG5cdH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hSZWNvcmRzKHdhcnNVUkwsIGNsYXNzTmFtZSwgc2VhcmNoSWQsIHN0YXJ0KSB7XHJcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtjb25maWcuc2VydmVyfT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQod2Fyc1VSTC5yZXBsYWNlKCc6aWQnLCBzZWFyY2hJZCkucmVwbGFjZSgnOnN0YXJ0Jywgc3RhcnQpKX1gLCB7XHJcblx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdFx0bW9kZTogJ2NvcnMnLFxyXG5cdH0pO1xyXG5cdGxldCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xyXG5cdGlmKHRleHRbMF0gIT09ICckJykgcmV0dXJuIFtdO1xyXG5cdHRleHQgPSB0ZXh0LnJlcGxhY2UoL15cXCRcXChcIiNoaXN0b3J5XCJcXClcXC5odG1sXFwoLywgJycpLnJlcGxhY2UoL1wiXFwpOy8sICdcIicpO1xyXG5cdGNvbnN0IGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoZXZhbCh0ZXh0KSwgJ3RleHQvaHRtbCcpO1xyXG5cdGNvbnN0IG1hdGNoUmVjb3JkcyA9IEFycmF5LmZyb20oZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250ZW50cycpLCAoZWxlbWVudCkgPT4ge1xyXG5cdFx0Ly/lr77lsYDkuK3jga5yZWNvcmQ7XHJcblx0XHRpZihlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZ1tzcmMqPVwidGFpa3lva3VcIl0nKSkgcmV0dXJuIG51bGw7XHJcblxyXG5cdFx0Y29uc3QgYmxhY2sgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RyJylbMF0uY2hpbGRyZW5bMV0udGV4dENvbnRlbnQ7XHJcblx0XHRjb25zdCB3aGl0ZSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgndHInKVsxXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudDtcclxuXHJcblx0XHRjb25zdCBibGFja1VzZXJQYWdlID0gY29uZmlnLndhcnNPcmlnaW4gKyBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKVswXS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcclxuXHRcdGNvbnN0IHdoaXRlVXNlclBhZ2UgPSBjb25maWcud2Fyc09yaWdpbiArIGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpWzFdLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG5cdFx0XHJcblx0XHRsZXQgd2lubmVyID0gJyc7XHJcblx0XHRpZihlbGVtZW50LmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5jb250YWlucygnd2luJykpIHdpbm5lciA9ICdibGFjayc7XHJcblx0XHRlbHNlIGlmKGVsZW1lbnQuY2hpbGRyZW5bMV0uY2xhc3NMaXN0LmNvbnRhaW5zKCd3aW4nKSkgd2lubmVyID0gJ3doaXRlJztcclxuXHJcblx0XHRsZXQgdGltZSA9IGVsZW1lbnQuY2hpbGRyZW5bM10udGV4dENvbnRlbnQ7XHJcblx0XHRpZih0aW1lID09PSAnJykgdGltZSA9IGVsZW1lbnQuY2hpbGRyZW5bNF0udGV4dENvbnRlbnQ7XHJcblx0XHRjb25zdCB1cmwgPSAnaHR0cHM6JyArIGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpWzJdLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRibGFjayxcclxuXHRcdFx0d2hpdGUsXHJcblx0XHRcdGJsYWNrVXNlclBhZ2UsXHJcblx0XHRcdHdoaXRlVXNlclBhZ2UsXHJcblx0XHRcdHdpbm5lcixcclxuXHRcdFx0dGltZSxcclxuXHRcdFx0dXJsLFxyXG5cdFx0XHRjbGFzc05hbWUsXHJcblx0XHRcdGlzV2lubmVyOiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnd2lubmVyJyksXHJcblx0XHRcdGlzRmV0Y2hpbmdLaWZ1OiBmYWxzZSxcclxuXHRcdFx0ZG9lc0hhdmVLaWZ1OiBmYWxzZSxcclxuXHRcdFx0a2lmdTogJycsXHJcblx0XHR9O1xyXG5cdH0pO1xyXG5cdC8v5a++5bGA5Lit44GucmVjb3Jk44GM5ZCr44G+44KM44Gm44GE44Gf44KJ5YmK6ZmkO1xyXG5cdGlmKG1hdGNoUmVjb3Jkc1swXSA9PT0gbnVsbCkgbWF0Y2hSZWNvcmRzLnNoaWZ0KCk7XHJcblx0cmV0dXJuIG1hdGNoUmVjb3JkcztcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hLaWZ1KHVybCwgcmVjb3JkKSB7XHJcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtjb25maWcuc2VydmVyfT91cmw9JHt1cmx9YCwge1xyXG5cdFx0bWV0aG9kOiAnR0VUJyxcclxuXHRcdG1vZGU6ICdjb3JzJyxcclxuXHR9KTtcclxuXHRjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xyXG5cdGNvbnN0IGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcodGV4dCwgJ3RleHQvaHRtbCcpO1xyXG5cdGxldCBxdWVyeUluZGV4ID0gMTE7XHJcblx0aWYoZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NjcmlwdCcpW3F1ZXJ5SW5kZXhdLnRleHRDb250ZW50LmluZGV4T2YoJ3JlY2VpdmVNb3ZlJykgPT09IC0xKSBxdWVyeUluZGV4ID0gMTI7XHJcblx0Y29uc3QgbW92ZXMgPSBkb2MucXVlcnlTZWxlY3RvckFsbCgnc2NyaXB0JylbcXVlcnlJbmRleF0udGV4dENvbnRlbnQubWF0Y2goL3JlY2VpdmVNb3ZlXFwoXFxcIiguKylcXFwiXFwpOy8pWzFdLnNwbGl0KCdcXHQnKTtcclxuXHRtb3Zlcy5wb3AoKTtcclxuXHRsZXQga2lmdVRleHQgPSBgYFxyXG5cdGtpZnVUZXh0ICs9IGDplovlp4vml6XmmYLvvJoke3JlY29yZC50aW1lfVxcbmA7XHJcblx0a2lmdVRleHQgKz0gYOWFiOaJi++8miR7cmVjb3JkLmJsYWNrfVxcbmA7XHJcblx0a2lmdVRleHQgKz0gYOW+jOaJi++8miR7cmVjb3JkLndoaXRlfVxcbmA7XHJcblx0a2lmdVRleHQgKz0gYOaJi+aVsC3mjIfmiYst5raI6LK75pmC6ZaTXFxuYDtcclxuXHRraWZ1VGV4dCArPSBtb3Zlcy5tYXAoKG1vdmUsIGkpID0+IHtcclxuXHRcdGNvbnN0IG1vdmVUZXh0ID0gZ2V0TW92ZVRleHQoaSwgbW92ZXMpO1xyXG5cdFx0cmV0dXJuIG1vdmVUZXh0LnJlcGxhY2UoLyjilrJ84pazKShcXGQpPy8sIChtYXRjaCwgcDEsIHAyKSA9PiB7XHJcblx0XHRcdGlmKHAyID09PSB1bmRlZmluZWQpIHJldHVybiAnJztcclxuXHRcdFx0cmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUocDIuY2hhckNvZGVBdCgwKSArIDB4RkVFMCk7XHJcblx0XHR9KTtcclxuXHR9KS5qb2luKCdcXG4nKTtcclxuXHJcblx0cmV0dXJuIGtpZnVUZXh0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb3B5VGV4dCh0ZXh0KSB7XHJcblx0Y29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGV4dGFyZWEpO1xyXG5cdHRleHRhcmVhLnZhbHVlID0gdGV4dDtcclxuXHR0ZXh0YXJlYS5zZWxlY3QoKTtcclxuXHRkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xyXG5cdGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGV4dGFyZWEpO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2FjdGlvbnMvYWN0aW9ucy5qcyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5hcnJheS5mcm9tJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5BcnJheS5mcm9tO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbS5qc1xuLy8gbW9kdWxlIGlkID0gMTM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBjdHggICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHRvT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBjYWxsICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgICAgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCB0b0xlbmd0aCAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuL19jcmVhdGUtcHJvcGVydHknKVxuICAsIGdldEl0ZXJGbiAgICAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXsgQXJyYXkuZnJvbShpdGVyKTsgfSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICBmcm9tOiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZS8qLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCovKXtcbiAgICB2YXIgTyAgICAgICA9IHRvT2JqZWN0KGFycmF5TGlrZSlcbiAgICAgICwgQyAgICAgICA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXlcbiAgICAgICwgYUxlbiAgICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgICwgbWFwZm4gICA9IGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkXG4gICAgICAsIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkXG4gICAgICAsIGluZGV4ICAgPSAwXG4gICAgICAsIGl0ZXJGbiAgPSBnZXRJdGVyRm4oTylcbiAgICAgICwgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICAgIGlmKG1hcHBpbmcpbWFwZm4gPSBjdHgobWFwZm4sIGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgICAvLyBpZiBvYmplY3QgaXNuJ3QgaXRlcmFibGUgb3IgaXQncyBhcnJheSB3aXRoIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2Ugc2ltcGxlIGNhc2VcbiAgICBpZihpdGVyRm4gIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcihpdGVyRm4pKSl7XG4gICAgICBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEM7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKyl7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBjYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgZm9yKHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qc1xuLy8gbW9kdWxlIGlkID0gMTM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciAkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIGluZGV4LCB2YWx1ZSl7XG4gIGlmKGluZGV4IGluIG9iamVjdCkkZGVmaW5lUHJvcGVydHkuZihvYmplY3QsIGluZGV4LCBjcmVhdGVEZXNjKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W2luZGV4XSA9IHZhbHVlO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NyZWF0ZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMTM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Zyb20gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9hcnJheS9mcm9tXCIpO1xuXG52YXIgX2Zyb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZnJvbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycjJbaV0gPSBhcnJbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICgwLCBfZnJvbTIuZGVmYXVsdCkoYXJyKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IExvY2FsaXplIGZyb20gJy4vTG9jYWxpemUuanMnO1xyXG5cclxuY29uc3Qga2FuamlOdW1iZXIgPSBMb2NhbGl6ZS50KCdrYW5qaV9udW1iZXInKTtcclxuY29uc3QgcGllY2VLYW5qaU1hcCA9IExvY2FsaXplLmdldFBpZWNlS2FuamlNYXAoKTtcclxuXHJcbmZ1bmN0aW9uIGlzUHJvbW90ZWQocHR5cGUpIHtcclxuXHRzd2l0Y2gocHR5cGUpIHtcclxuXHRjYXNlIFwiVE9cIjpcclxuXHRjYXNlIFwiTllcIjpcclxuXHRjYXNlIFwiTktcIjpcclxuXHRjYXNlIFwiTkdcIjpcclxuXHRjYXNlIFwiVU1cIjpcclxuXHRjYXNlIFwiUllcIjpcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHRyZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVucHJvbW90ZShwdHlwZSkge1xyXG5cdHN3aXRjaChwdHlwZSkge1xyXG5cdGNhc2UgXCJUT1wiOlxyXG5cdFx0cmV0dXJuIFwiRlVcIjtcclxuXHRjYXNlIFwiTllcIjpcclxuXHRcdHJldHVybiBcIktZXCI7XHJcblx0Y2FzZSBcIk5LXCI6XHJcblx0XHRyZXR1cm4gXCJLRVwiO1xyXG5cdGNhc2UgXCJOR1wiOlxyXG5cdFx0cmV0dXJuIFwiR0lcIjtcclxuXHRjYXNlIFwiVU1cIjpcclxuXHRcdHJldHVybiBcIktBXCI7XHJcblx0Y2FzZSBcIlJZXCI6XHJcblx0XHRyZXR1cm4gXCJISVwiO1xyXG5cdH1cclxuXHRyZXR1cm4gcHR5cGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE1vdmVUZXh0KG4sIG1vdmVzKSB7XHJcblx0dmFyIG1vdmUgPSBtb3Zlc1tuXTtcclxuXHR2YXIgcHJldiA9IG1vdmVzW24gLSAxXTtcclxuXHR2YXIgdGV4dCA9IChuICsgMSkgKyBcIiBcIjtcclxuXHR2YXIgbnVtX3N0ciA9IFwiXCI7XHJcblx0dmFyIHBpZWNlX3N0ciA9IFwiXCI7XHJcblx0dmFyIGJlZl9zdHIgPSBcIlwiO1xyXG5cclxuXHR0ZXh0ICs9IChtb3ZlLmNoYXJBdCgwKSA9PSBcIitcIikgPyBcIuKWslwiIDogXCLilrNcIjtcclxuXHR2YXIgcGxhY2UgPSBtb3ZlLmNoYXJBdCgzKTsgLy9leC4gM1xyXG5cdHBsYWNlICs9IGthbmppTnVtYmVyW21vdmUuY2hhckF0KDQpXTsgLy9leC4g5LiJXHJcblx0aWYocHJldiAmJiAobW92ZS5zdWJzdHIoMywyKSA9PSBwcmV2LnN1YnN0cigzLDIpKSApIHtcclxuXHRcdG51bV9zdHIgPSBMb2NhbGl6ZS5waWVjZVNhbWVQbGFjZShwbGFjZSk7XHJcblx0fWVsc2V7XHJcblx0XHRudW1fc3RyID0gcGxhY2U7XHJcblx0fVxyXG5cclxuXHR2YXIgcHR5cGUgPSBtb3ZlLnN1YnN0cig1LDIpO1xyXG5cdGlmKGlzUHJvbW90ZWQocHR5cGUpKSB7XHJcblx0XHR2YXIgb3JpZ2luO1xyXG5cclxuXHRcdGZvcih2YXIgaSA9IG4gLSAyOyBpID4gMDsgaSAtPSAyKSB7XHJcblx0XHRcdHZhciBvbGQgPSBtb3Zlc1tpXTtcclxuXHRcdFx0aWYob2xkLnN1YnN0cigzLDIpID09IG1vdmUuc3Vic3RyKDEsMikpIHtcclxuXHRcdFx0XHRvcmlnaW4gPSBvbGQuc3Vic3RyKDUsMik7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZihwdHlwZSAhPSBvcmlnaW4pIHsgLy8gYmVjb21lIHByb21vdGVkXHJcblx0XHRcdHZhciB1bnByb21vdGVkID0gdW5wcm9tb3RlKHB0eXBlKTtcclxuXHRcdFx0cGllY2Vfc3RyID0gcGllY2VLYW5qaU1hcFt1bnByb21vdGVkXTtcclxuXHRcdFx0cGllY2Vfc3RyICs9IExvY2FsaXplLnQoXCJuYXJpXCIpO1xyXG5cdFx0fWVsc2Uge1xyXG5cdFx0XHRwaWVjZV9zdHIgPSBwaWVjZUthbmppTWFwW3B0eXBlXTtcclxuXHRcdH1cclxuXHR9ZWxzZSB7XHJcblx0XHRwaWVjZV9zdHIgPSBwaWVjZUthbmppTWFwW3B0eXBlXTtcclxuXHR9XHJcblx0XHJcblx0Ly8g6KOc6Laz5oOF5aCxXHJcblx0aWYobW92ZS5zdWJzdHIoMSwgMikgPT0gXCIwMFwiKSB7XHJcblx0XHRiZWZfc3RyICs9IExvY2FsaXplLnQoXCJ1dGlcIik7XHJcblx0fWVsc2Uge1xyXG5cdFx0YmVmX3N0ciArPSBcIihcIiArIG1vdmUuc3Vic3RyKDEsIDIpICsgXCIpXCI7XHJcblx0fVxyXG5cclxuXHRpZihMb2NhbGl6ZS5nZXRMb2NhbGUoKSA9PSBcImphXCIpe1xyXG5cdFx0dGV4dCArPSBudW1fc3RyICsgcGllY2Vfc3RyICsgYmVmX3N0cjtcclxuXHR9ZWxzZXtcclxuXHRcdGlmKG1vdmUuc3Vic3RyKDEsIDIpID09IFwiMDBcIikge1xyXG5cdFx0XHR0ZXh0ICs9IHBpZWNlX3N0ciArIGJlZl9zdHIgKyBudW1fc3RyO1x0XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0dGV4dCArPSBwaWVjZV9zdHIgKyBudW1fc3RyICsgYmVmX3N0cjtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0cmV0dXJuIHRleHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldE1vdmVUZXh0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21tb24vZ2V0TW92ZVRleHQuanMiLCJmdW5jdGlvbiBMb2NhbGl6ZSgpXHJcbntcclxufVxyXG5Mb2NhbGl6ZS5sb2NhbGUgPSBcImphXCI7XHJcbkxvY2FsaXplLmltZ1VSTCA9IFwiXCI7XHJcblxyXG5Mb2NhbGl6ZS52YWx1ZXMgPSB7XHJcblx0XCJqYVwiOiB7XHJcblx0XHRcInN0YXJ0X3Bvc1wiOiBcIumWi+Wni+WxgOmdolwiLFxyXG5cdFx0XCJrYW5qaV9udW1iZXJcIjogW1wi6Zu2XCIsIFwi5LiAXCIsIFwi5LqMXCIsIFwi5LiJXCIsIFwi5ZubXCIsIFwi5LqUXCIsIFwi5YWtXCIsIFwi5LiDXCIsIFwi5YWrXCIsIFwi5LmdXCJdLFxyXG5cdFx0XCJkYXlcIjogXCLml6VcIixcclxuXHRcdFwiaG91clwiOiBcIuaZgumWk1wiLFxyXG5cdFx0XCJtaW51dGVcIjogXCLliIZcIixcclxuXHRcdFwic2Vjb25kXCI6IFwi56eSXCIsXHJcblx0XHRcInV0aVwiOiBcIuaJk1wiLCBcclxuXHRcdFwibmFyaVwiOiBcIuaIkFwiICxcclxuXHRcdFwiZG91XCI6IFwi5ZCMXCIsXHJcblx0XHRcImpvc2VraVwiOiBcIuWumui3oVwiLFxyXG5cdFx0XCJ3aW5cIjogXCLli53jgaFcIixcclxuXHRcdFwibG9zZVwiOiBcIuiyoOOBkVwiLFxyXG5cdFx0XCJldmVubHlcIjogXCLkupLop5JcIixcclxuXHRcdFwid2lubmluZ1wiOiBcIuWLneWLolwiLFxyXG5cdFx0XCJtb3JlX2JldHRlclwiOiBcIuWkp+WEquWLolwiLFxyXG5cdFx0XCJiZXR0ZXJcIjogXCLlhKrli6JcIixcclxuXHRcdFwid29yc2VcIjogXCLliqPli6JcIixcclxuXHRcdFwidGVycmlibGVfd29yc2VcIjogXCLlpKfliqPli6JcIixcclxuXHRcdFwibG9zaW5nXCI6IFwi5pWX5YuiXCIsXHJcblx0XHRcIndhdGNoaW5nXCI6IFwi5Lq66Kaz5oim5LitXCIsXHJcblx0XHRcIm5vdF90YWtlX215XCI6IFwi5ZGz5pa544Gu6aeS44Gv5Y+W44KM44G+44Gb44KTXCIsXHJcblx0XHRcImNoYXRcIjogXCLjg4Hjg6Pjg4Pjg4hcIixcclxuXHRcdFwiY210X2NoYXRfbGltaXRcIjogXCI0MOWtl+S7peWGheOBp+WFpeWKm+OBl+OBpuOBj+OBoOOBleOBhOOAglwiXHJcblx0fSxcclxuXHRcImVuXCI6IHtcclxuXHRcdFwic3RhcnRfcG9zXCI6IFwiU3RhcnQgcG9zaXRpb25cIixcclxuXHRcdFwia2FuamlfbnVtYmVyXCI6IFtcIjBcIiwgXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIl0sXHJcblx0XHRcImRheVwiOiBcIihkKVwiLFxyXG5cdFx0XCJob3VyXCI6IFwiOlwiLFxyXG5cdFx0XCJtaW51dGVcIjogXCI6XCIsXHJcblx0XHRcInNlY29uZFwiOiBcIlwiLFxyXG5cdFx0XCJ1dGlcIjogXCInXCIsIFxyXG5cdFx0XCJuYXJpXCI6IFwiK1wiICxcclxuXHRcdFwiZG91XCI6IFwiXCIsXHJcblx0XHRcImpvc2VraVwiOiBcImpvc2VraVwiLFxyXG5cdFx0XCJ3aW5cIjogXCJ3aW5cIixcclxuXHRcdFwibG9zZVwiOiBcImxvc2VcIixcclxuXHRcdFwiZXZlbmx5XCI6IFwiZXZlbmx5XCIsXHJcblx0XHRcIndpbm5pbmdcIjogXCJ3aW5uaW5nXCIsXHJcblx0XHRcIm1vcmVfYmV0dGVyXCI6IFwibW9yZSBiZXR0ZXJcIixcclxuXHRcdFwiYmV0dGVyXCI6IFwiYmV0dGVyXCIsXHJcblx0XHRcIndvcnNlXCI6IFwid29yc2VcIixcclxuXHRcdFwidGVycmlibGVfd29yc2VcIjogXCJ0ZXJyaWJsZSB3b3JzZVwiLFxyXG5cdFx0XCJsb3NpbmdcIjogXCJsb3NpbmdcIixcclxuXHRcdFwid2F0Y2hpbmdcIjogXCJwZW9wbGUgd2F0Y2hpbmdcIixcclxuXHRcdFwibm90X3Rha2VfbXlcIjogXCJQaWVjZSBvZiBhbGx5IGRvZXMgbm90IHRha2VcIixcclxuXHRcdFwiY2hhdFwiOiBcImNoYXRcIixcclxuXHRcdFwiY210X2NoYXRfbGltaXRcIjogXCJQbGVhc2UgaW5wdXQgaW4gbGVzcyB0aGFuIDQwIGNoYXJhY3RlcnMuXCJcclxuXHR9XHJcbn07XHJcbkxvY2FsaXplLmdldExvY2FsZSA9IGZ1bmN0aW9uKClcclxue1xyXG5cdHJldHVybiBMb2NhbGl6ZS5sb2NhbGU7XHJcbn07XHJcbkxvY2FsaXplLnNldExvY2FsZSA9IGZ1bmN0aW9uKGxjbClcclxue1xyXG5cdExvY2FsaXplLmxvY2FsZSA9IGxjbDtcclxufTtcclxuXHJcbkxvY2FsaXplLnQgPSBmdW5jdGlvbihrZXkpXHJcbntcclxuXHRyZXR1cm4gTG9jYWxpemUudmFsdWVzW0xvY2FsaXplLmxvY2FsZV1ba2V5XTtcclxufTtcclxuXHJcbkxvY2FsaXplLnBpZWNlU2FtZVBsYWNlID0gZnVuY3Rpb24ocGxhY2Upe1xyXG5cdGlmKExvY2FsaXplLmxvY2FsZSA9PSBcImphXCIpe1xyXG5cdFx0cmV0dXJuIExvY2FsaXplLnQoXCJkb3VcIik7XHJcblx0fWVsc2V7XHJcblx0XHRyZXR1cm4gcGxhY2U7XHJcblx0fSAgICAgICBcclxufTtcclxuXHJcbkxvY2FsaXplLmNoYW5nZUtlaXNlaSA9IGZ1bmN0aW9uKGtlaXNlaSl7XHJcblx0dmFyIGtlaXNlaXMgPSBbXCLli53li6JcIiwgXCLlpKflhKrli6JcIiwgXCLlhKrli6JcIiwgXCLkupLop5JcIiwgXCLliqPli6JcIiwgXCLlpKfliqPli6JcIiwgXCLmlZfli6JcIl07XHJcblx0dmFyIGxjbF9rZWlzZWlzID0gW0xvY2FsaXplLnQoXCJ3aW5uaW5nXCIpLCBMb2NhbGl6ZS50KFwibW9yZV9iZXR0ZXJcIiksIExvY2FsaXplLnQoXCJiZXR0ZXJcIiksIFxyXG5cdExvY2FsaXplLnQoXCJldmVubHlcIiksIExvY2FsaXplLnQoXCJ3b3JzZVwiKSwgTG9jYWxpemUudChcInRlcnJpYmxlX3dvcnNlXCIpLCBMb2NhbGl6ZS50KFwibG9zaW5nXCIpXTtcclxuXHRcclxuXHR2YXIgaWR4ID0ga2Vpc2Vpcy5pbmRleE9mKGtlaXNlaSk7XHJcblx0aWYoaWR4ICE9IC0xKSB7XHJcblx0XHRyZXR1cm4gbGNsX2tlaXNlaXNbaWR4XTtcclxuXHR9ZWxzZXtcclxuXHRcdHJldHVybiBrZWlzZWk7XHJcblx0fVxyXG59O1xyXG5cclxuTG9jYWxpemUuZ2V0SW1nVVJMID0gZnVuY3Rpb24oaW1nKVxyXG57XHJcblx0dmFyIGRpciA9IExvY2FsaXplLmltZ1VSTCArIFwiL2tpZi9cIjsgICAgICAgIFxyXG5cdGlmKExvY2FsaXplLmxvY2FsZSA9PSBcImphXCIpe1xyXG5cdFx0cmV0dXJuIGRpciArIGltZztcclxuXHR9ZWxzZXtcclxuXHRcdHJldHVybiBkaXIgKyBMb2NhbGl6ZS5sb2NhbGUgKyBcIi9cIiArIGltZztcclxuXHR9XHJcbn07XHJcblxyXG5Mb2NhbGl6ZS5zZXRJbWdVUkwgPSBmdW5jdGlvbih1cmwpXHJcbntcclxuXHRMb2NhbGl6ZS5pbWdVUkwgPSB1cmw7XHJcbn07XHJcblxyXG5Mb2NhbGl6ZS5nZXRQaWVjZUthbmppTWFwID0gZnVuY3Rpb24oKVxyXG57XHJcblx0dmFyIHBpZWNlS2FuamlNYXAgPSBuZXcgQXJyYXkoKTtcclxuXHRzd2l0Y2goTG9jYWxpemUubG9jYWxlKXtcclxuXHRcdGNhc2UgXCJlblwiOlxyXG5cdFx0XHRwaWVjZUthbmppTWFwWydGVSddID0gXCJQXCI7XHJcblx0XHRcdHBpZWNlS2FuamlNYXBbJ0tZJ10gPSBcIkxcIjtcclxuXHRcdFx0cGllY2VLYW5qaU1hcFsnS0UnXSA9IFwiTlwiO1xyXG5cdFx0XHRwaWVjZUthbmppTWFwWydHSSddID0gXCJTXCI7XHJcblx0XHRcdHBpZWNlS2FuamlNYXBbJ0tJJ10gPSBcIkdcIjtcclxuXHRcdFx0cGllY2VLYW5qaU1hcFsnS0EnXSA9IFwiQlwiO1xyXG5cdFx0XHRwaWVjZUthbmppTWFwWydISSddID0gXCJSXCI7XHJcblx0XHRcdHBpZWNlS2FuamlNYXBbJ09VJ10gPSBcIktcIjtcclxuXHRcdFx0cGllY2VLYW5qaU1hcFsnVE8nXSA9IFwiK1BcIjtcclxuXHRcdFx0cGllY2VLYW5qaU1hcFsnTlknXSA9IFwiK0xcIjtcclxuXHRcdFx0cGllY2VLYW5qaU1hcFsnTksnXSA9IFwiK05cIjtcclxuXHRcdFx0cGllY2VLYW5qaU1hcFsnTkcnXSA9IFwiK1NcIjtcclxuXHRcdFx0cGllY2VLYW5qaU1hcFsnVU0nXSA9IFwiK0JcIjtcclxuXHRcdFx0cGllY2VLYW5qaU1hcFsnUlknXSA9IFwiK1JcIjtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRwaWVjZUthbmppTWFwWydGVSddID0gXCLmralcIjtcclxuXHRcdFx0cGllY2VLYW5qaU1hcFsnS1knXSA9IFwi6aaZXCI7XHJcblx0XHRcdHBpZWNlS2FuamlNYXBbJ0tFJ10gPSBcIuahglwiO1xyXG5cdFx0XHRwaWVjZUthbmppTWFwWydHSSddID0gXCLpioBcIjtcclxuXHRcdFx0cGllY2VLYW5qaU1hcFsnS0knXSA9IFwi6YeRXCI7XHJcblx0XHRcdHBpZWNlS2FuamlNYXBbJ0tBJ10gPSBcIuinklwiO1xyXG5cdFx0XHRwaWVjZUthbmppTWFwWydISSddID0gXCLpo5tcIjtcclxuXHRcdFx0cGllY2VLYW5qaU1hcFsnT1UnXSA9IFwi546JXCI7XHJcblx0XHRcdHBpZWNlS2FuamlNYXBbJ1RPJ10gPSBcIuOBqFwiO1xyXG5cdFx0XHRwaWVjZUthbmppTWFwWydOWSddID0gXCLmiJDppplcIjtcclxuXHRcdFx0cGllY2VLYW5qaU1hcFsnTksnXSA9IFwi5oiQ5qGCXCI7XHJcblx0XHRcdHBpZWNlS2FuamlNYXBbJ05HJ10gPSBcIuaIkOmKgFwiO1xyXG5cdFx0XHRwaWVjZUthbmppTWFwWydVTSddID0gXCLppqxcIjtcclxuXHRcdFx0cGllY2VLYW5qaU1hcFsnUlknXSA9IFwi56ucXCI7XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxuXHRyZXR1cm4gcGllY2VLYW5qaU1hcDsgICBcclxufTtcclxuTG9jYWxpemUuZ2V0RmluaXNoTWFwID0gZnVuY3Rpb24oKVxyXG57XHJcblx0dmFyIGZpbmlzaE1hcCA9IG5ldyBBcnJheSgpO1xyXG5cdHN3aXRjaChMb2NhbGl6ZS5sb2NhbGUpe1xyXG5cdFx0Y2FzZSBcImVuXCI6XHJcblx0XHRcdGZpbmlzaE1hcFtcIlNFTlRFX1dJTl9UT1JZT1wiXSAgICAgICAgID0gXCJTZW50ZSBXaW5cIjtcclxuXHRcdFx0ZmluaXNoTWFwW1wiU0VOVEVfV0lOX0NIRUNLTUFURVwiXSAgICAgPSBcIlNlbnRlIENoZWNrbWF0ZSBXaW5cIjtcclxuXHRcdFx0ZmluaXNoTWFwW1wiU0VOVEVfV0lOX1RSWVwiXSAgICAgICAgICAgPSBcIlNlbnRlIFRyeSBXaW5cIjtcclxuXHRcdFx0ZmluaXNoTWFwW1wiU0VOVEVfV0lOX1RJTUVPVVRcIl0gICAgICAgPSBcIkdvdGUgVGltZW91dCBMb3NzXCI7XHJcblx0XHRcdGZpbmlzaE1hcFtcIlNFTlRFX1dJTl9ESVNDT05ORUNUXCJdICAgID0gXCJHb3RlIENvbm5lY3Rpb24gTG9zc1wiO1xyXG5cdFx0XHRmaW5pc2hNYXBbXCJTRU5URV9XSU5fT1VURV9TRU5OSUNISVwiXSA9IFwiR290ZSBJbGxlZ2FsaXR5IExvc3NcIjtcclxuXHRcdFx0ZmluaXNoTWFwW1wiU0VOVEVfV0lOX0VOVEVSSU5HS0lOR1wiXSAgPSBcIlNlbnRlIEVudGVyaW5nIFdpblwiO1xyXG5cclxuXHRcdFx0ZmluaXNoTWFwW1wiR09URV9XSU5fVE9SWU9cIl0gICAgICAgICAgPSBcIkdvdGUgV2luXCI7XHJcblx0XHRcdGZpbmlzaE1hcFtcIkdPVEVfV0lOX0NIRUNLTUFURVwiXSAgICAgID0gXCJHb3RlIENoZWNrbWF0ZSBXaW5cIjtcclxuXHRcdFx0ZmluaXNoTWFwW1wiR09URV9XSU5fVFJZXCJdICAgICAgICAgICAgPSBcIkdvdGUgVHJ5IFdpblwiO1xyXG5cdFx0XHRmaW5pc2hNYXBbXCJHT1RFX1dJTl9USU1FT1VUXCJdICAgICAgICA9IFwiU2VudGUgVGltZW91dCBMb3NzXCI7XHJcblx0XHRcdGZpbmlzaE1hcFtcIkdPVEVfV0lOX0RJU0NPTk5FQ1RcIl0gICAgID0gXCJTZW50ZSBDb25uZWN0aW9uIExvc3NcIjtcclxuXHRcdFx0ZmluaXNoTWFwW1wiR09URV9XSU5fT1VURV9TRU5OSUNISVwiXSAgPSBcIlNlbnRlIElsbGVnYWxpdHkgTG9zc1wiO1xyXG5cdFx0XHRmaW5pc2hNYXBbXCJHT1RFX1dJTl9FTlRFUklOR0tJTkdcIl0gICA9IFwiR290ZSBFbnRlcmluZyBXaW5cIjtcclxuXHJcblx0XHRcdGZpbmlzaE1hcFtcIkRSQVdfU0VOTklDSElcIl0gICAgICAgICAgID0gXCJEcmF3IFJlcGV0aXRpb25cIjtcclxuXHRcdFx0ZmluaXNoTWFwW1wiRFJBV19QTFlfTElNSVRcIl0gICAgICAgICAgPSBcIkRyYXdcIjtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRmaW5pc2hNYXBbXCJTRU5URV9XSU5fVE9SWU9cIl0gICAgICAgICA9IFwi44G+44Gn5YWI5omL44Gu5Yud44GhXCI7XHJcblx0XHRcdGZpbmlzaE1hcFtcIlNFTlRFX1dJTl9DSEVDS01BVEVcIl0gICAgID0gXCLjgb7jgaflhYjmiYvjga7li53jgaFcIjtcclxuXHRcdFx0ZmluaXNoTWFwW1wiU0VOVEVfV0lOX1RSWVwiXSAgICAgICAgICAgPSBcIuOBvuOBp+WFiOaJi+OBruODiOODqeOCpOWLneOBoVwiO1xyXG5cdFx0XHRmaW5pc2hNYXBbXCJTRU5URV9XSU5fVElNRU9VVFwiXSAgICAgICA9IFwi5b6M5omL5pmC6ZaT5YiH44KMXCI7XHJcblx0XHRcdGZpbmlzaE1hcFtcIlNFTlRFX1dJTl9ESVNDT05ORUNUXCJdICAgID0gXCLlvozmiYvmjqXntprliIfjgoxcIjtcclxuXHRcdFx0ZmluaXNoTWFwW1wiU0VOVEVfV0lOX09VVEVfU0VOTklDSElcIl0gPSBcIuW+jOaJi+WPjeWJh+iyoOOBkVwiO1xyXG5cdFx0XHRmaW5pc2hNYXBbXCJTRU5URV9XSU5fRU5URVJJTkdLSU5HXCJdICA9IFwi44G+44Gn5YWI5omL44Gu5YWl546J5Yud44GhXCI7XHJcblxyXG5cdFx0XHRmaW5pc2hNYXBbXCJHT1RFX1dJTl9UT1JZT1wiXSAgICAgICAgICA9IFwi44G+44Gn5b6M5omL44Gu5Yud44GhXCI7XHJcblx0XHRcdGZpbmlzaE1hcFtcIkdPVEVfV0lOX0NIRUNLTUFURVwiXSAgICAgID0gXCLjgb7jgaflvozmiYvjga7li53jgaFcIjtcclxuXHRcdFx0ZmluaXNoTWFwW1wiR09URV9XSU5fVFJZXCJdICAgICAgICAgICAgPSBcIuOBvuOBp+W+jOaJi+OBruODiOODqeOCpOWLneOBoVwiO1xyXG5cdFx0XHRmaW5pc2hNYXBbXCJHT1RFX1dJTl9USU1FT1VUXCJdICAgICAgICA9IFwi5YWI5omL5pmC6ZaT5YiH44KMXCI7XHJcblx0XHRcdGZpbmlzaE1hcFtcIkdPVEVfV0lOX0RJU0NPTk5FQ1RcIl0gICAgID0gXCLlhYjmiYvmjqXntprliIfjgoxcIjtcclxuXHRcdFx0ZmluaXNoTWFwW1wiR09URV9XSU5fT1VURV9TRU5OSUNISVwiXSAgPSBcIuWFiOaJi+WPjeWJh+iyoOOBkVwiO1xyXG5cdFx0XHRmaW5pc2hNYXBbXCJHT1RFX1dJTl9FTlRFUklOR0tJTkdcIl0gICA9IFwi44G+44Gn5b6M5omL44Gu5YWl546J5Yud44GhXCI7XHJcblxyXG5cdFx0XHRmaW5pc2hNYXBbXCJEUkFXX1NFTk5JQ0hJXCJdICAgICAgICAgICA9IFwi44G+44Gn5Y2D5pel5omL5oiQ56uLXCI7XHJcblx0XHRcdGZpbmlzaE1hcFtcIkRSQVdfUExZX0xJTUlUXCJdICAgICAgICAgID0gXCLjgb7jgaflvJXjgY3liIbjgZFcIjtcclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG5cdHJldHVybiBmaW5pc2hNYXA7ICAgICAgIFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9jYWxpemU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbW1vbi9Mb2NhbGl6ZS5qcyIsImxldCBkZXBsb3k7XHJcbmxldCBzZXJ2ZXI7XHJcbmlmKGxvY2F0aW9uLmhvc3QuaW5kZXhPZigncHJvLndlYmthdHUuY29tJykgPT09IC0xKSB7XHJcblx0Ly9kZXZcclxuXHRkZXBsb3kgPSAnL3dhcnNraWZjb3B5L3B1YmxpYyc7XHJcblx0c2VydmVyID0gJy93YXJza2lmY29weS9zZXJ2ZXIvaW5kZXgucGhwJztcclxufWVsc2Uge1xyXG5cdC8vcmVsZWFzZVxyXG5cdGRlcGxveSA9ICcvd2Fyc2tpZmNvcHknO1xyXG5cdHNlcnZlciA9ICdodHRwOi8vc2VydmVyLnByby53ZWJrYXR1LmNvbS93YXJza2lmY29weS9pbmRleC5waHAnO1xyXG5cdC8vc2VydmVyID0gJ2h0dHA6Ly93YXJza2lmdWNvcHkud2ViY3Jvdy5qcC9pbmRleC5waHAnLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0ZGVwbG95LFxyXG5cdHNlcnZlcixcclxuXHR3YXJzT3JpZ2luOiAnaHR0cHM6Ly9zaG9naXdhcnMuaGVyb3ouanAnLFxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbmZpZy5qcyIsImltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnLmpzJztcclxuaW1wb3J0IHsgYnJvd3Nlckhpc3RvcnkgfSBmcm9tICcuLi9jb21tb24vcm91dGVyLmpzJztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tICcuL05vdGlmaWNhdGlvbic7XHJcblxyXG5jb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XHJcbnRlbXBsYXRlLmlubmVySFRNTCA9IGBcclxuPGhlYWRlcj5cclxuXHQ8aDE+PGEgaHJlZj1cIlwiPuWwhuaji+OCpuOCqeODvOOCuuaji+itnOOCs+ODlOODvDwvYT48L2gxPlxyXG48L2hlYWRlcj5cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHRjb25zdCBjb250ZW50ID0gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XHJcblx0XHRjb250ZW50LmFwcGVuZENoaWxkKG5ldyBOb3RpZmljYXRpb24oKSk7XHJcblx0XHRcclxuXHRcdGNvbnN0IGEgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKVxyXG5cdFx0YS5ocmVmID0gY29uZmlnLmRlcGxveTtcclxuXHRcdGEub25jbGljayA9IChlKSA9PiB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0YnJvd3Nlckhpc3RvcnkucHVzaFN0YXRlKGUuY3VycmVudFRhcmdldC5ocmVmICsgJy8nKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG5cdH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd4LWhlYWRlcicsIEhlYWRlcik7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0hlYWRlci5qcyIsImltcG9ydCB1c2VTdGF0ZSBmcm9tICd1c2VzdGF0ZSc7XHJcbmltcG9ydCB7IG5vdGlmaWNhdGlvbiB9IGZyb20gJy4uL3N0b3Jlcy9pbmRleC5qcyc7XHJcblxyXG5jb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XHJcbnRlbXBsYXRlLmlubmVySFRNTCA9IGBcclxuPHAgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPjwvcD5cclxuYFxyXG5cclxuQHVzZVN0YXRlXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdGlmaWNhaW9uIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLmhhbmRsZU5vdGlmaWNhdGlvbkNoYW5nZSA9IHRoaXMuaGFuZGxlTm90aWZpY2F0aW9uQ2hhbmdlLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLnRpbWVySWQgPSBudWxsO1xyXG5cclxuXHRcdGNvbnN0IGNvbnRlbnQgPSB0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcclxuXHRcdHRoaXMucCA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcigncCcpO1xyXG5cdFx0XHJcblx0XHR0aGlzLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlTm90aWZpY2F0aW9uQ2hhbmdlKGUpIHtcclxuXHRcdHRoaXMuc2V0U3RhdGUobm90aWZpY2F0aW9uKTtcclxuXHR9XHJcblxyXG5cdGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG5cdFx0bm90aWZpY2F0aW9uLm9uKCdDSEFOR0UnLCB0aGlzLmhhbmRsZU5vdGlmaWNhdGlvbkNoYW5nZSk7XHJcblx0XHR0aGlzLmhhbmRsZU5vdGlmaWNhdGlvbkNoYW5nZSgpO1xyXG5cdH1cclxuXHJcblx0ZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcblx0XHRub3RpZmljYXRpb24ucmVtb3ZlTGlzdGVuZXIoJ0NIQU5HRScsIHRoaXMuaGFuZGxlTm90aWZpY2F0aW9uQ2hhbmdlKTtcclxuXHR9XHJcblxyXG5cdHN0YXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xyXG5cdFx0c3dpdGNoKG5hbWUpIHtcclxuXHRcdFx0Y2FzZSAnZGlzcGxheUlkJzpcclxuXHRcdFx0XHR0aGlzLnAudGV4dENvbnRlbnQgPSBub3RpZmljYXRpb24udGV4dDtcclxuXHRcdFx0XHR0aGlzLnAuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG5cdFx0XHRcdHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy50aW1lcklkKTtcclxuXHRcdFx0XHR0aGlzLnRpbWVySWQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHRcdFx0XHR9LCBub3RpZmljYXRpb24uZGlzcGxheVRpbWUpO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHN0YXRpYyBnZXQgb2JzZXJ2ZWRTdGF0ZSgpIHsgcmV0dXJuIFsnZGlzcGxheUlkJ107IH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd4LW5vdGlmaWNhdGlvbicsIE5vdGlmaWNhaW9uKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9Ob3RpZmljYXRpb24uanMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDE0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2Mpe1xuICByZXR1cm4gJE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAxNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi40IC8gMTUuMi4zLjYgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpLCAnT2JqZWN0Jywge2RlZmluZVByb3BlcnR5OiByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAxNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgbWFwID0gbmV3IFdlYWtNYXAoKTtcclxuY29uc3QgcHJpdmF0ZXMgPSAob2JqZWN0KSA9PiB7XHJcblx0aWYoISBtYXAuaGFzKG9iamVjdCkpIHtcclxuXHRcdG1hcC5zZXQob2JqZWN0LCB7fSk7XHJcblx0fVxyXG5cdHJldHVybiBtYXAuZ2V0KG9iamVjdCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXRTdGF0ZSgpIHsgcmV0dXJuIHByaXZhdGVzKHRoaXMpLnN0YXRlOyB9XHJcblxyXG5mdW5jdGlvbiBzZXRTdGF0ZShzdGF0ZSkge1xyXG5cdGlmKHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgfHwgc3RhdGUgPT09IG51bGwpIHJldHVybjtcclxuXHRcclxuXHRjb25zdCB0aGF0ID0gcHJpdmF0ZXModGhpcyk7XHJcblx0aWYodHlwZW9mIHRoYXQuc3RhdGUgIT09ICdvYmplY3QnIHx8IHRoYXQuc3RhdGUgPT09IG51bGwpIHRoYXQuc3RhdGUgPSB7fTtcclxuXHRjb25zdCBvbGRTdGF0ZSA9IHRoYXQuc3RhdGU7XHJcblx0Y29uc3QgbmV3U3RhdGUgPSB0aGF0LnN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhhdC5zdGF0ZSwgc3RhdGUpO1xyXG5cclxuXHRpZihBcnJheS5pc0FycmF5KHRoaXMuY29uc3RydWN0b3Iub2JzZXJ2ZWRTdGF0ZSkgPT09IGZhbHNlKSByZXR1cm47XHJcblx0aWYodHlwZW9mIHRoaXMuc3RhdGVDaGFuZ2VkQ2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHJldHVybjtcclxuXHJcblx0dGhpcy5jb25zdHJ1Y3Rvci5vYnNlcnZlZFN0YXRlLmZvckVhY2goKG5hbWUpID0+IHtcclxuXHRcdGlmKG9sZFN0YXRlW25hbWVdID09PSBuZXdTdGF0ZVtuYW1lXSkgcmV0dXJuO1xyXG5cdFx0dGhpcy5zdGF0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRTdGF0ZVtuYW1lXSwgbmV3U3RhdGVbbmFtZV0pO1xyXG5cdH0pO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHVzZVN0YXRlKHRhcmdldCkge1xyXG5cdGlmKHR5cGVvZiB0YXJnZXQgIT09ICdmdW5jdGlvbicpIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuXHJcblx0dGFyZ2V0LnByb3RvdHlwZS5nZXRTdGF0ZSA9IGdldFN0YXRlO1xyXG5cdHRhcmdldC5wcm90b3R5cGUuc2V0U3RhdGUgPSBzZXRTdGF0ZTtcclxuXHRyZXR1cm4gdGFyZ2V0O1xyXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3VzZXN0YXRlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xyXG50ZW1wbGF0ZS5pbm5lckhUTUwgPSBgXHJcbjxmb290ZXI+XHJcblx0PHNlY3Rpb24+XHJcblx0XHQ8aDE+44GK55+l44KJ44GbPC9oMT5cclxuXHRcdDxwPjEw5Lu25Lul5LiK6Kqt44G/6L6844KB44KL44KI44GG44Gr44Gq44KK44G+44GX44GfPC9wPlxyXG5cdFx0PHA+6Kqt44G/6L6844KT44Gg5qOL6K2c44Gu5bGl5q2044KS5q6L44Gb44KL44KI44GG44Gr44Gq44KK44G+44GX44GfPC9wPlxyXG5cdDwvc2VjdGlvbj5cclxuXHQ8c2VjdGlvbj5cclxuXHRcdDxoMT7kvb/jgYTmlrk8L2gxPlxyXG5cdFx0PHA+44OV44Kp44O844Og44GrSUTjgpLlhaXlipvjgZfjgabmpJzntKLjgZnjgovjgajmnIDmlrDjga7lr77lsYAxMOS7tuOBjOWPluW+l+OBleOCjOOBvuOBmeOAguaji+itnOOBrzxzdHJvbmc+44CM6Kqt44G/6L6844KA44CN44Kv44Oq44OD44Kv4oaS44CM44Kz44OU44O844GZ44KL44CN44Kv44Oq44OD44KvPC9zdHJvbmc+44Gn44Kv44Oq44OD44OX44Oc44O844OJ44Gr44Kz44OU44O844GV44KM44G+44GZ44CCPC9wPlxyXG5cdDwvc2VjdGlvbj5cclxuXHQ8YWRkcmVzcz7kvZzogIU6IDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL3Zpbnl1ZmlcIiB0YXJnZXQ9XCJfYmxhbmtcIj5AdmlueXVmaTwvYT48L2FkZHJlc3M+XHJcbjwvZm9vdGVyPlxyXG5gO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290ZXIgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdGNvbnN0IGNvbnRlbnQgPSB0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcclxuXHRcdHRoaXMuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcblx0fVxyXG5cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd4LWZvb3RlcicsIEZvb3Rlcik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvRm9vdGVyLmpzIiwiaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb25zLmpzJztcclxuaW1wb3J0IHsgbWF0Y2hSZWNvcmRTZWFyY2ggfSBmcm9tICcuLi9zdG9yZXMvaW5kZXguanMnO1xyXG5pbXBvcnQgTWF0Y2hSZWNvcmRTZWFyY2hGb3JtIGZyb20gJy4vTWF0Y2hSZWNvcmRTZWFyY2hGb3JtLmpzJztcclxuaW1wb3J0IE1hdGNoUmVjb3JkcyBmcm9tICcuL01hdGNoUmVjb3Jkcy5qcyc7XHJcbmltcG9ydCBIaXN0b3J5UmVjb3JkcyBmcm9tICcuL0hpc3RvcnlSZWNvcmRzLmpzJztcclxuXHJcbi8qXHJcbmNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcclxudGVtcGxhdGUuaW5uZXJIVE1MID0gYFxyXG4ke25ldyBNYXRjaFJlY29yZFNlYXJjaEZvcm0oKS5vdXRlckhUTUx9XHJcbiR7bmV3IE1hdGNoUmVjb3JkcygpLm91dGVySFRNTH1cclxuJHtuZXcgSGlzdG9yeVJlY29yZHMoKS5vdXRlckhUTUx9XHJcbmA7XHJcbiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5jbGFzc05hbWUgPSAnaW5kZXgnO1xyXG5cdFx0dGhpcy5hcHBlbmRDaGlsZChuZXcgTWF0Y2hSZWNvcmRTZWFyY2hGb3JtKCkpO1xyXG5cdFx0dGhpcy5hcHBlbmRDaGlsZChuZXcgTWF0Y2hSZWNvcmRzKCkpO1xyXG5cdFx0dGhpcy5hcHBlbmRDaGlsZChuZXcgSGlzdG9yeVJlY29yZHMoKSk7XHJcblxyXG5cdFx0dGhpcy5tYXRjaFJlY29yZHMgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ21hdGNoLXJlY29yZHMnKTtcclxuXHR9XHJcblxyXG5cdGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG5cdFx0aWYobWF0Y2hSZWNvcmRTZWFyY2guc2VhcmNoSWQgPT09ICcnKXtcclxuXHRcdFx0dGhpcy5tYXRjaFJlY29yZHMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHRcdH1lbHNlIHtcclxuXHRcdFx0YWN0aW9ucy5mZXRjaE1hdGNoUmVjb3JkcyhcclxuXHRcdFx0XHRtYXRjaFJlY29yZFNlYXJjaC5zZWFyY2hJZCxcclxuXHRcdFx0XHRtYXRjaFJlY29yZFNlYXJjaC51cmxzLFxyXG5cdFx0XHRcdG1hdGNoUmVjb3JkU2VhcmNoLnN0YXJ0XHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHR0aGlzLm1hdGNoUmVjb3Jkcy5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuXHRcdGFjdGlvbnMudW5tb3VudEluZGV4KCk7XHJcblx0fVxyXG5cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd4LWluZGV4JywgSW5kZXgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0luZGV4LmpzIiwiaW1wb3J0IHVzZVN0YXRlIGZyb20gJ3VzZXN0YXRlJztcclxuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb25zLmpzJztcclxuaW1wb3J0IHsgbWF0Y2hSZWNvcmRTZWFyY2ggfSBmcm9tICcuLi9zdG9yZXMvaW5kZXguanMnO1xyXG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSB9IGZyb20gJy4uL2NvbW1vbi9yb3V0ZXIuanMnXHJcblxyXG5jb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XHJcbnRlbXBsYXRlLmlubmVySFRNTCA9IGBcclxuPGZvcm0+XHJcblx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImlkXCIgcGxhY2Vob2xkZXI9XCJJROOCkuWFpeWKm1wiLz5cclxuXHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj7mpJzntKI8L2J1dHRvbj5cclxuPC9mb3JtPlxyXG5gO1xyXG5cclxuQHVzZVN0YXRlXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdGNoUmVjb3JkU2VhcmNoRm9ybSBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5oYW5kbGVNYXRjaFJlY29yZFNlYXJjaENoYW5nZSA9IHRoaXMuaGFuZGxlTWF0Y2hSZWNvcmRTZWFyY2hDaGFuZ2UuYmluZCh0aGlzKTtcclxuXHJcblx0XHRjb25zdCBjb250ZW50ID0gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XHJcblxyXG5cdFx0Y29uc3QgZm9ybSA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xyXG5cdFx0dGhpcy5zZWFyY2hJZElucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xyXG5cdFx0dGhpcy5zdWJtaXRCdXR0b24gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xyXG5cclxuXHRcdHRoaXMuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcblxyXG5cdFx0dGhpcy5zZWFyY2hJZElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuXHRcdFx0YWN0aW9ucy5pbnB1dFNlYXJjaElkKHRoaXMuc2VhcmNoSWRJbnB1dC52YWx1ZSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0YnJvd3Nlckhpc3RvcnkucHVzaFN0YXRlKGAke2xvY2F0aW9uLnBhdGhuYW1lfT9pZD0ke21hdGNoUmVjb3JkU2VhcmNoLnNlYXJjaElkfWApO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHR9XHJcblxyXG5cdGhhbmRsZU1hdGNoUmVjb3JkU2VhcmNoQ2hhbmdlKCkge1xyXG5cdFx0dGhpcy5zZXRTdGF0ZShtYXRjaFJlY29yZFNlYXJjaCk7XHJcblx0fVxyXG5cclxuXHRjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuXHRcdG1hdGNoUmVjb3JkU2VhcmNoLm9uKCdDSEFOR0UnLCB0aGlzLmhhbmRsZU1hdGNoUmVjb3JkU2VhcmNoQ2hhbmdlKTtcclxuXHRcdHRoaXMuaGFuZGxlTWF0Y2hSZWNvcmRTZWFyY2hDaGFuZ2UoKTtcclxuXHR9XHJcblxyXG5cdGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG5cdFx0bWF0Y2hSZWNvcmRTZWFyY2gucmVtb3ZlTGlzdGVuZXIoJ0NIQU5HRScsIHRoaXMuaGFuZGxlTWF0Y2hSZWNvcmRTZWFyY2hDaGFuZ2UpO1xyXG5cdH1cclxuXHJcblx0c3RhdGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XHJcblx0XHRzd2l0Y2gobmFtZSkge1xyXG5cdFx0XHRjYXNlICdzZWFyY2hJZCc6XHJcblx0XHRcdFx0dGhpcy5zZWFyY2hJZElucHV0LnZhbHVlID0gbmV3VmFsdWU7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0Y2FzZSAnaXNGZXRjaGluZyc6XHJcblx0XHRcdFx0aWYobmV3VmFsdWUpIHRoaXMuc3VibWl0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRlbHNlIHRoaXMuc3VibWl0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldCBvYnNlcnZlZFN0YXRlKCkgeyByZXR1cm4gWydzZWFyY2hJZCcsICdpc0ZldGNoaW5nJyBdOyB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbWF0Y2gtcmVjb3JkLXNlYXJjaC1mb3JtJywgTWF0Y2hSZWNvcmRTZWFyY2hGb3JtKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9NYXRjaFJlY29yZFNlYXJjaEZvcm0uanMiLCJleHBvcnQgY29uc3QgYnJvd3Nlckhpc3RvcnkgPSB7XHJcblx0cHVzaFN0YXRlKHBhdGgpIHtcclxuXHRcdGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdwYXRoY2hhbmdlJywge1xyXG5cdFx0XHRkZXRhaWw6IHtcclxuXHRcdFx0XHRtZXRob2Q6ICdwdXNoU3RhdGUnLFxyXG5cdFx0XHRcdHBhdGgsXHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHRcdHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuXHR9LFxyXG5cdHJlcGxhY2VTdGF0ZShwYXRoKSB7XHJcblx0XHRjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgncGF0aGNoYW5nZScsIHtcclxuXHRcdFx0ZGV0YWlsOiB7XHJcblx0XHRcdFx0bWV0aG9kOiAncmVwbGFjZVN0YXRlJyxcclxuXHRcdFx0XHRwYXRoLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSk7XHJcblx0XHR3aW5kb3cuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcblx0fSxcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tbW9uL3JvdXRlci5qcyIsImltcG9ydCB1c2VTdGF0ZSBmcm9tICd1c2VzdGF0ZSc7XHJcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvYWN0aW9ucy5qcyc7XHJcbmltcG9ydCB7IG1hdGNoUmVjb3JkU2VhcmNoLCBtYXRjaFJlY29yZHMgfSBmcm9tICcuLi9zdG9yZXMvaW5kZXguanMnO1xyXG5pbXBvcnQgTWF0Y2hSZWNvcmRzVGFibGUgZnJvbSAnLi9NYXRjaFJlY29yZHNUYWJsZS5qcyc7XHJcblxyXG5jb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XHJcbnRlbXBsYXRlLmlubmVySFRNTCA9IGBcclxuPGE+5pu044Gr6Kqt44G/6L6844KAPC9hPlxyXG48cD48L3A+XHJcbmA7XHJcblxyXG5AdXNlU3RhdGVcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0Y2hSZWNvcmRzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLmhhbmRsZU1hdGNoUmVjb3JkU2VhcmNoQ2hhbmdlID0gdGhpcy5oYW5kbGVNYXRjaFJlY29yZFNlYXJjaENoYW5nZS5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5oYW5kbGVNYXRjaFJlY29yZHNDaGFuZ2UgPSB0aGlzLmhhbmRsZU1hdGNoUmVjb3Jkc0NoYW5nZS5iaW5kKHRoaXMpO1xyXG5cclxuXHJcblx0XHRjb25zdCBjb250ZW50ID0gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XHJcblx0XHR0aGlzLmEgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKTtcclxuXHRcdHRoaXMucCA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcigncCcpO1xyXG5cclxuXHRcdHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5tYXRjaFJlY29yZHNUYWJsZSA9IG5ldyBNYXRjaFJlY29yZHNUYWJsZSgpKTtcclxuXHRcdHRoaXMuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcblx0XHRcclxuXHRcdHRoaXMuYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0aWYobWF0Y2hSZWNvcmRTZWFyY2guaXNGZXRjaGluZyA9PT0gdHJ1ZSkgcmV0dXJuO1xyXG5cdFx0XHRhY3Rpb25zLmZldGNoTWF0Y2hSZWNvcmRzKFxyXG5cdFx0XHRcdG1hdGNoUmVjb3JkU2VhcmNoLnNlYXJjaElkLFxyXG5cdFx0XHRcdG1hdGNoUmVjb3JkU2VhcmNoLnVybHMsXHJcblx0XHRcdFx0bWF0Y2hSZWNvcmRTZWFyY2guc3RhcnQsXHJcblx0XHRcdCk7XHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxuXHRoYW5kbGVNYXRjaFJlY29yZFNlYXJjaENoYW5nZSgpIHtcclxuXHRcdHRoaXMuc2V0U3RhdGUobWF0Y2hSZWNvcmRTZWFyY2gpO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlTWF0Y2hSZWNvcmRzQ2hhbmdlKCkge1xyXG5cdFx0dGhpcy5zZXRTdGF0ZShtYXRjaFJlY29yZHMpO1xyXG5cdH1cclxuXHJcblx0Y29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcblx0XHRtYXRjaFJlY29yZFNlYXJjaC5vbignQ0hBTkdFJywgdGhpcy5oYW5kbGVNYXRjaFJlY29yZFNlYXJjaENoYW5nZSk7XHJcblx0XHRtYXRjaFJlY29yZHMub24oJ0NIQU5HRScsIHRoaXMuaGFuZGxlTWF0Y2hSZWNvcmRzQ2hhbmdlKTtcclxuXHJcblx0XHR0aGlzLmhhbmRsZU1hdGNoUmVjb3JkU2VhcmNoQ2hhbmdlKCk7XHJcblx0XHR0aGlzLmhhbmRsZU1hdGNoUmVjb3Jkc0NoYW5nZSgpO1xyXG5cdH1cclxuXHJcblx0ZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcblx0XHRtYXRjaFJlY29yZFNlYXJjaC5yZW1vdmVMaXN0ZW5lcignQ0hBTkdFJywgdGhpcy5oYW5kbGVNYXRjaFJlY29yZFNlYXJjaENoYW5nZSk7XHJcblx0XHRtYXRjaFJlY29yZHMucmVtb3ZlTGlzdGVuZXIoJ0NIQU5HRScsIHRoaXMuaGFuZGxlTWF0Y2hSZWNvcmRzQ2hhbmdlKTtcclxuXHR9XHJcblxyXG5cdHN0YXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xyXG5cdFx0c3dpdGNoKG5hbWUpIHtcclxuXHRcdFx0Y2FzZSAnaXNGZXRjaGluZyc6XHJcblx0XHRcdFx0aWYobmV3VmFsdWUpIHtcclxuXHRcdFx0XHRcdHRoaXMucC5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcblx0XHRcdFx0XHR0aGlzLnAudGV4dENvbnRlbnQgPSAn6Kqt44G/6L6844G/5LitLi4uJztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLnAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHRcdFx0XHRcdHRoaXMucC50ZXh0Q29udGVudCA9ICcnO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRjYXNlICdpc0xpbWl0JzpcclxuXHRcdFx0XHRpZihuZXdWYWx1ZSkgdGhpcy5hLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblx0XHRcdFx0ZWxzZSB0aGlzLmEuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdGNhc2UgJ3JlY29yZHMnOlxyXG5cdFx0XHRcdGNvbnN0IHJlY29yZHMgPSBuZXdWYWx1ZS5zbGljZSgwLCBtYXRjaFJlY29yZFNlYXJjaC5zdGFydCk7XHJcblxyXG5cdFx0XHRcdHRoaXMubWF0Y2hSZWNvcmRzVGFibGUuc2V0U3RhdGUoeyByZWNvcmRzIH0pO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHN0YXRpYyBnZXQgb2JzZXJ2ZWRTdGF0ZSgpIHsgcmV0dXJuIFsnaXNGZXRjaGluZycsICdpc0xpbWl0JywgJ3JlY29yZHMnXTsgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ21hdGNoLXJlY29yZHMnLCBNYXRjaFJlY29yZHMpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL01hdGNoUmVjb3Jkcy5qcyIsImltcG9ydCB1c2VTdGF0ZSBmcm9tICd1c2VzdGF0ZSc7XHJcbmltcG9ydCBNYXRjaFJlY29yZEhlYWRlclRyIGZyb20gJy4vTWF0Y2hSZWNvcmRIZWFkZXJUci5qcyc7XHJcbmltcG9ydCBNYXRjaFJlY29yZFRyIGZyb20gJy4vTWF0Y2hSZWNvcmRUci5qcyc7XHJcblxyXG5jb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XHJcbnRlbXBsYXRlLmlubmVySFRNTCA9IGBcclxuPHRhYmxlPlxyXG5cdDx0aGVhZD5cclxuXHQ8L3RoZWFkPlxyXG5cdDx0Ym9keT5cclxuXHQ8L3Rib2R5PlxyXG48L3RhYmxlPlxyXG48cCBjbGFzcz1cImFubm90YXRpb25cIj7igLs8c3BhbiBjbGFzcz1cIndpbm5lci1ib3hcIj4mbmJzcDs8L3NwYW4+Li4u5Yud44GhPC9wPlxyXG5gO1xyXG5cclxuQHVzZVN0YXRlXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdGNoUmVjb3Jkc1RhYmxlIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHRjb25zdCBjb250ZW50ID0gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XHJcblx0XHR0aGlzLnRib2R5ID0gY29udGVudC5xdWVyeVNlbGVjdG9yKCd0Ym9keScpO1xyXG5cdFx0XHJcblx0XHRjb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ3RoZWFkJykuYXBwZW5kQ2hpbGQobmV3IE1hdGNoUmVjb3JkSGVhZGVyVHIoKSk7XHJcblx0XHR0aGlzLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG5cdH1cclxuXHJcblx0c3RhdGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XHJcblx0XHRzd2l0Y2gobmFtZSkge1xyXG5cdFx0XHRjYXNlICdyZWNvcmRzJzpcclxuXHRcdFx0XHR0aGlzLnRib2R5LmlubmVySFRNTCA9ICcnO1xyXG5cdFx0XHRcdG5ld1ZhbHVlLmZvckVhY2goKHJlY29yZCwgaSkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy50Ym9keS5hcHBlbmRDaGlsZChuZXcgTWF0Y2hSZWNvcmRUcihyZWNvcmQpKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZ2V0IG9ic2VydmVkU3RhdGUoKSB7IHJldHVybiBbJ3JlY29yZHMnXSB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbWF0Y2gtcmVjb3Jkcy10YWJsZScsIE1hdGNoUmVjb3Jkc1RhYmxlKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9NYXRjaFJlY29yZHNUYWJsZS5qcyIsImNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcclxuLypcclxudGVtcGxhdGUuaW5uZXJIVE1MID0gYFxyXG48dGg+5a++5bGA5pel5pmCPC90aD5cclxuPHRoPuOCr+ODqeOCuTwvdGg+XHJcbjx0aD7lhYjmiYs8L3RoPlxyXG48dGg+5b6M5omLPC90aD5cclxuPHRoPuaji+itnDwvdGg+XHJcbmBcclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0Y2hSZWNvcmRIZWFkZXJUciBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0Ly90aGlzLmFwcGVuZENoaWxkKHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcclxuXHRcdC8vSUXjga7jgZ/jgoHjgat0aOimgee0oOOBr0RPTeOBp+S9nOOCiztcclxuXHRcdGNvbnN0IHRocyA9IEFycmF5KDUpLmZpbGwoMCkubWFwKCgpID0+IHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKSk7XHJcblx0XHR9KTtcclxuXHRcdHRoc1swXS50ZXh0Q29udGVudCA9ICflr77lsYDml6XmmYInO1xyXG5cdFx0dGhzWzFdLnRleHRDb250ZW50ID0gJ+eoruWIpSc7XHJcblx0XHR0aHNbMl0udGV4dENvbnRlbnQgPSAn5YWI5omLJztcclxuXHRcdHRoc1szXS50ZXh0Q29udGVudCA9ICflvozmiYsnO1xyXG5cdFx0dGhzWzRdLnRleHRDb250ZW50ID0gJ+aji+itnCc7XHJcblxyXG5cdFx0dGhpcy5zdHlsZS5kaXNwbGF5ID0gJ3RhYmxlLXJvdyc7XHJcblx0fVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ21hdGNoLXJlY29yZC1oZWFkZXItdHInLCBNYXRjaFJlY29yZEhlYWRlclRyKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9NYXRjaFJlY29yZEhlYWRlclRyLmpzIiwiaW1wb3J0IHVzZVN0YXRlIGZyb20gJ3VzZXN0YXRlJztcclxuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb25zLmpzJztcclxuaW1wb3J0IHsgbWF0Y2hSZWNvcmQgfSBmcm9tICcuLi9zdG9yZXMvaW5kZXguanMnO1xyXG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSB9IGZyb20gJy4uL2NvbW1vbi9yb3V0ZXIuanMnO1xyXG5cclxuXHJcbmNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcclxuLypcclxudGVtcGxhdGUuaW5uZXJIVE1MID0gYFxyXG48dGQ+PC90ZD5cclxuPHRkPjwvdGQ+XHJcbjx0ZD48YT48L2E+PC90ZD5cclxuPHRkPjxhPjwvYT48L3RkPlxyXG48dGQ+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+6Kqt44G/6L6844KAPC9idXR0b24+PC90ZD5cclxuPHN0eWxlPlxyXG5tYXRjaC1yZWNvcmQtdHIge1xyXG5cdGRpc3BsYXk6IHRhYmxlLXJvdztcclxufVxyXG48L3N0eWxlPlxyXG5gO1xyXG4qL1xyXG5cclxudGVtcGxhdGUuaW5uZXJIVE1MID0gYFxyXG5gO1xyXG5cclxuQHVzZVN0YXRlXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdGNoUmVjb3JkVHIgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcblx0Y29uc3RydWN0b3IocmVjb3JkKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuaGFuZGxlTWF0Y2hSZWNvcmRDaGFuZ2UgPSB0aGlzLmhhbmRsZU1hdGNoUmVjb3JkQ2hhbmdlLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLnJlY29yZCA9IHJlY29yZDtcclxuXHJcblx0XHR0aGlzLnN0eWxlLmRpc3BsYXkgPSAndGFibGUtcm93JztcclxuXHRcdC8vSUXjga7jgZ/jgoHjgat0ZOimgee0oOOBr0RPTeOBp+S9nOOCiztcclxuXHRcdHRoaXMudGRzID0gQXJyYXkoNSkuZmlsbCgwKS5tYXAoKCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy50ZHNbMl0uaW5uZXJIVE1MID0gJzxhPjwvYT4nO1xyXG5cdFx0dGhpcy50ZHNbM10uaW5uZXJIVE1MID0gJzxhPjwvYT4nO1xyXG5cdFx0dGhpcy50ZHNbNF0uaW5uZXJIVE1MID0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiPuiqreOBv+i+vOOCgDwvYnV0dG9uPic7XHJcblxyXG5cdFx0dGhpcy5raWZ1Q29weUJ1dHRvbiA9IHRoaXMudGRzWzRdLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xyXG5cdFx0dGhpcy5raWZ1Q29weUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0aWYodGhpcy5yZWNvcmQuZG9lc0hhdmVLaWZ1KSB7XHJcblx0XHRcdFx0YWN0aW9ucy5jb3B5S2lmdShyZWNvcmQpO1xyXG5cdFx0XHR9ZWxzZSB7XHJcblx0XHRcdFx0YWN0aW9ucy5mZXRjaEtpZnUocmVjb3JkKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVNYXRjaFJlY29yZENoYW5nZShlKSB7XHJcblx0XHR0aGlzLnNldFN0YXRlKHRoaXMucmVjb3JkKTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZVVzZXJBbmNob3JDbGljayhlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRicm93c2VySGlzdG9yeS5wdXNoU3RhdGUoZS5jdXJyZW50VGFyZ2V0LmhyZWYpO1xyXG5cdH1cclxuXHJcblx0Y29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcblx0XHRtYXRjaFJlY29yZC5vbignQ0hBTkdFJywgdGhpcy5oYW5kbGVNYXRjaFJlY29yZENoYW5nZSk7XHJcblx0XHR0aGlzLmhhbmRsZU1hdGNoUmVjb3JkQ2hhbmdlKCk7XHJcblx0fVxyXG5cclxuXHRkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuXHRcdG1hdGNoUmVjb3JkLnJlbW92ZUxpc3RlbmVyKCdDSEFOR0UnLCB0aGlzLmhhbmRsZU1hdGNoUmVjb3JkQ2hhbmdlKTtcclxuXHR9XHJcblxyXG5cdHN0YXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xyXG5cdFx0c3dpdGNoKG5hbWUpIHtcclxuXHRcdFx0Y2FzZSAndGltZSc6XHJcblx0XHRcdFx0dGhpcy50ZHNbMF0uaW5uZXJIVE1MID0gYDxhIGhyZWY9XCIke3RoaXMucmVjb3JkLnVybH1cIiB0YXJnZXQ9XCJfYmxhbmtcIj4ke3RoaXMucmVjb3JkLnRpbWV9PC9hPmBcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdGNhc2UgJ2NsYXNzTmFtZSc6XHJcblx0XHRcdFx0dGhpcy50ZHNbMV0udGV4dENvbnRlbnQgPSB0aGlzLnJlY29yZC5jbGFzc05hbWU7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRjYXNlICdibGFjayc6IHtcclxuXHRcdFx0XHRjb25zdCBhID0gdGhpcy50ZHNbMl0ucXVlcnlTZWxlY3RvcignYScpO1xyXG5cdFx0XHRcdGEuaHJlZiA9IGAke2xvY2F0aW9uLnBhdGhuYW1lfT9pZD0ke3RoaXMucmVjb3JkLmJsYWNrLnNwbGl0KCcgJylbMF19YDtcclxuXHRcdFx0XHRhLm9uY2xpY2sgPSB0aGlzLmhhbmRsZVVzZXJBbmNob3JDbGljaztcclxuXHRcdFx0XHRhLnRleHRDb250ZW50ID0gdGhpcy5yZWNvcmQuYmxhY2s7XHJcblxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlICd3aGl0ZSc6XHJcblx0XHRcdFx0Y29uc3QgYSA9IHRoaXMudGRzWzNdLnF1ZXJ5U2VsZWN0b3IoJ2EnKTtcclxuXHRcdFx0XHRhLmhyZWYgPSBgJHtsb2NhdGlvbi5wYXRobmFtZX0/aWQ9JHt0aGlzLnJlY29yZC53aGl0ZS5zcGxpdCgnICcpWzBdfWA7XHJcblx0XHRcdFx0YS5vbmNsaWNrID0gdGhpcy5oYW5kbGVVc2VyQW5jaG9yQ2xpY2s7XHJcblx0XHRcdFx0YS50ZXh0Q29udGVudCA9IHRoaXMucmVjb3JkLndoaXRlO1xyXG5cclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdGNhc2UgJ2lzV2lubmVyJzpcclxuXHRcdFx0XHRpZihuZXdWYWx1ZSkgdGhpcy5jbGFzc0xpc3QuYWRkKCd3aW5uZXInKTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdGNhc2UgJ2lzRmV0Y2hpbmdLaWZ1JzpcclxuXHRcdFx0XHRpZihuZXdWYWx1ZSkge1xyXG5cdFx0XHRcdFx0dGhpcy5raWZ1Q29weUJ1dHRvbi50ZXh0Q29udGVudCA9ICfoqq3jgb/ovrzjgb/kuK0nO1xyXG5cdFx0XHRcdFx0dGhpcy5raWZ1Q29weUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcblx0XHRcdFx0fWVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5raWZ1Q29weUJ1dHRvbi50ZXh0Q29udGVudCA9ICfoqq3jgb/ovrzjgoAnO1xyXG5cdFx0XHRcdFx0dGhpcy5raWZ1Q29weUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRjYXNlICdkb2VzSGF2ZUtpZnUnOlxyXG5cdFx0XHRcdGlmKG5ld1ZhbHVlKSB0aGlzLmtpZnVDb3B5QnV0dG9uLnRleHRDb250ZW50ID0gJ+OCs+ODlOODvOOBmeOCiyc7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldCBvYnNlcnZlZFN0YXRlKCkge1xyXG5cdFx0cmV0dXJuIFsndGltZScsICdjbGFzc05hbWUnLCAnYmxhY2snLCAnd2hpdGUnLCAnaXNXaW5uZXInLCAnaXNGZXRjaGluZ0tpZnUnLCAnZG9lc0hhdmVLaWZ1J107XHJcblx0fVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ21hdGNoLXJlY29yZC10cicsIE1hdGNoUmVjb3JkVHIpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL01hdGNoUmVjb3JkVHIuanMiLCJpbXBvcnQgdXNlU3RhdGUgZnJvbSAndXNlc3RhdGUnO1xyXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2FjdGlvbnMuanMnO1xyXG5pbXBvcnQgeyBoaXN0b3J5UmVjb3JkcyB9IGZyb20gJy4uL3N0b3Jlcy9pbmRleC5qcyc7XHJcbmltcG9ydCBNYXRjaFJlY29yZHNUYWJsZSBmcm9tICcuL01hdGNoUmVjb3Jkc1RhYmxlLmpzJztcclxuXHJcbmNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcclxudGVtcGxhdGUuaW5uZXJIVE1MID0gYFxyXG48YT48L2E+XHJcbmA7XHJcblxyXG5AdXNlU3RhdGVcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGlzdG9yeVJlY29yZHMgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuaGFuZGxlSGlzdG9yeVJlY29yZHNDaGFuZ2UgPSB0aGlzLmhhbmRsZUhpc3RvcnlSZWNvcmRzQ2hhbmdlLmJpbmQodGhpcyk7XHJcblxyXG5cdFx0Y29uc3QgY29udGVudCA9IHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xyXG5cdFx0dGhpcy5hID0gY29udGVudC5xdWVyeVNlbGVjdG9yKCdhJyk7XHJcblx0XHRjb250ZW50LmFwcGVuZENoaWxkKHRoaXMubWF0Y2hSZWNvcmRzVGFibGUgPSBuZXcgTWF0Y2hSZWNvcmRzVGFibGUoKSk7XHJcblx0XHR0aGlzLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG5cclxuXHRcdHRoaXMuYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0aWYoaGlzdG9yeVJlY29yZHMuc2hvdWxkRGlzcGxheSkge1xyXG5cdFx0XHRcdGFjdGlvbnMuaGlkZUhpc3RvcnlSZWNvcmRzKCk7XHJcblx0XHRcdH1lbHNlIHtcclxuXHRcdFx0XHRhY3Rpb25zLnNob3dIaXN0b3J5UmVjb3JkcygpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxuXHRoYW5kbGVIaXN0b3J5UmVjb3Jkc0NoYW5nZShlKSB7XHJcblx0XHR0aGlzLnNldFN0YXRlKGhpc3RvcnlSZWNvcmRzKTtcclxuXHR9XHJcblxyXG5cdGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG5cdFx0aGlzdG9yeVJlY29yZHMub24oJ0NIQU5HRScsIHRoaXMuaGFuZGxlSGlzdG9yeVJlY29yZHNDaGFuZ2UpO1xyXG5cdFx0dGhpcy5oYW5kbGVIaXN0b3J5UmVjb3Jkc0NoYW5nZSgpO1xyXG5cdH1cclxuXHJcblx0ZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcblx0XHRoaXN0b3J5UmVjb3Jkcy5yZW1vdmVMaXN0ZW5lcignQ0hBTkdFJywgdGhpcy5oYW5kbGVIaXN0b3J5UmVjb3Jkc0NoYW5nZSk7XHJcblx0fVxyXG5cclxuXHRzdGF0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcclxuXHRcdHN3aXRjaChuYW1lKSB7XHJcblx0XHRcdGNhc2UgJ3Nob3VsZERpc3BsYXknOlxyXG5cdFx0XHRcdGlmKG5ld1ZhbHVlKSB7XHJcblx0XHRcdFx0XHR0aGlzLmEudGV4dENvbnRlbnQgPSAn5bGl5q2044KS6ZaJ44GY44KLJztcclxuXHRcdFx0XHRcdHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5tYXRjaFJlY29yZHNUYWJsZSk7XHJcblx0XHRcdFx0fWVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5hLnRleHRDb250ZW50ID0gJ+WxpeattOOCkuimi+OCiygxMOS7tiknO1xyXG5cdFx0XHRcdFx0dGhpcy5yZW1vdmVDaGlsZCh0aGlzLm1hdGNoUmVjb3Jkc1RhYmxlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0Y2FzZSAncmVjb3Jkcyc6XHJcblx0XHRcdFx0dGhpcy5tYXRjaFJlY29yZHNUYWJsZS5zZXRTdGF0ZSh7J3JlY29yZHMnOiBoaXN0b3J5UmVjb3Jkcy5yZWNvcmRzfSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZ2V0IG9ic2VydmVkU3RhdGUoKSB7IHJldHVybiBbJ3Nob3VsZERpc3BsYXknLCAncmVjb3JkcyddOyB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnaGlzdG9yeS1yZWNvcmRzJywgSGlzdG9yeVJlY29yZHMpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0hpc3RvcnlSZWNvcmRzLmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2VuZFBhZ2VWaWV3KCkge1xyXG5cdGlmKCEgd2luZG93LmdhKSByZXR1cm47XHJcblx0Z2EoJ3NlbmQnLCAncGFnZVZpZXcnLCB7XHJcblx0XHRwYWdlOiBsb2NhdGlvbi5wYXRobmFtZSArIGxvY2F0aW9uLnNlYXJjaCxcclxuXHRcdHRpdGxlOiBkb2N1bWVudC50aXRsZSxcclxuXHR9KTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21tb24vc2VuZFBhZ2VWaWV3LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==