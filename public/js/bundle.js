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
	
	var _index = __webpack_require__(157);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _App = __webpack_require__(1);
	
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
	exports.default = undefined;
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(29);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(76);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _leadsRouter = __webpack_require__(84);
	
	var _leadsRouter2 = _interopRequireDefault(_leadsRouter);
	
	var _actions = __webpack_require__(97);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _Header = __webpack_require__(131);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _Footer = __webpack_require__(143);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	var _Index = __webpack_require__(144);
	
	var _Index2 = _interopRequireDefault(_Index);
	
	var _config = __webpack_require__(130);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _sendPageView = __webpack_require__(156);
	
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
					content.replaceChild(new _Header2.default(), content.firstChild);
					content.replaceChild(new _Footer2.default(), content.lastChild);
					var main = content.querySelector('#main');
	
					_this.id = 'app';
					_this.appendChild(content);
	
					var index = new _Index2.default();
	
					var router = _leadsRouter2.default.Router();
	
					router.use(function (req, res, next) {
							(0, _sendPageView2.default)();
							next();
					});
	
					router.get(_config2.default.deploy + '/', function (req, res, next) {
							if (req.query.id === undefined) return next();
	
							_actions2.default.inputSearchId(req.query.id);
							main.replaceChild(index, main.firstChild);
					}, function (req, res) {
							main.replaceChild(index, main.firstChild);
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
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(3), __esModule: true };

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	module.exports = __webpack_require__(15).Object.getPrototypeOf;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(5)
	  , $getPrototypeOf = __webpack_require__(7);
	
	__webpack_require__(13)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(6);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(8)
	  , toObject    = __webpack_require__(5)
	  , IE_PROTO    = __webpack_require__(9)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(10)('keys')
	  , uid    = __webpack_require__(12);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(11)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 12 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(14)
	  , core    = __webpack_require__(15)
	  , fails   = __webpack_require__(24);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(11)
	  , core      = __webpack_require__(15)
	  , ctx       = __webpack_require__(16)
	  , hide      = __webpack_require__(18)
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
/* 15 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(17);
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
/* 17 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(19)
	  , createDesc = __webpack_require__(27);
	module.exports = __webpack_require__(23) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(20)
	  , IE8_DOM_DEFINE = __webpack_require__(22)
	  , toPrimitive    = __webpack_require__(26)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(23) ? Object.defineProperty : function defineProperty(O, P, Attributes){
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(21);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(23) && !__webpack_require__(24)(function(){
	  return Object.defineProperty(__webpack_require__(25)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(24)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(21)
	  , document = __webpack_require__(11).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(21);
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
/* 27 */
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
/* 28 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _typeof2 = __webpack_require__(30);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(31);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(60);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(32), __esModule: true };

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(33);
	__webpack_require__(55);
	module.exports = __webpack_require__(59).f('iterator');

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(34)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(36)(String, 'String', function(iterated){
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(35)
	  , defined   = __webpack_require__(6);
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
/* 35 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(37)
	  , $export        = __webpack_require__(14)
	  , redefine       = __webpack_require__(38)
	  , hide           = __webpack_require__(18)
	  , has            = __webpack_require__(8)
	  , Iterators      = __webpack_require__(39)
	  , $iterCreate    = __webpack_require__(40)
	  , setToStringTag = __webpack_require__(53)
	  , getPrototypeOf = __webpack_require__(7)
	  , ITERATOR       = __webpack_require__(54)('iterator')
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
/* 37 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(18);

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(41)
	  , descriptor     = __webpack_require__(27)
	  , setToStringTag = __webpack_require__(53)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(18)(IteratorPrototype, __webpack_require__(54)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(20)
	  , dPs         = __webpack_require__(42)
	  , enumBugKeys = __webpack_require__(51)
	  , IE_PROTO    = __webpack_require__(9)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(25)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(52).appendChild(iframe);
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
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(19)
	  , anObject = __webpack_require__(20)
	  , getKeys  = __webpack_require__(43);
	
	module.exports = __webpack_require__(23) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(44)
	  , enumBugKeys = __webpack_require__(51);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(8)
	  , toIObject    = __webpack_require__(45)
	  , arrayIndexOf = __webpack_require__(48)(false)
	  , IE_PROTO     = __webpack_require__(9)('IE_PROTO');
	
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
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(46)
	  , defined = __webpack_require__(6);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(47);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(45)
	  , toLength  = __webpack_require__(49)
	  , toIndex   = __webpack_require__(50);
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
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(35)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(35)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 51 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(11).document && document.documentElement;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(19).f
	  , has = __webpack_require__(8)
	  , TAG = __webpack_require__(54)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(10)('wks')
	  , uid        = __webpack_require__(12)
	  , Symbol     = __webpack_require__(11).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(56);
	var global        = __webpack_require__(11)
	  , hide          = __webpack_require__(18)
	  , Iterators     = __webpack_require__(39)
	  , TO_STRING_TAG = __webpack_require__(54)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(57)
	  , step             = __webpack_require__(58)
	  , Iterators        = __webpack_require__(39)
	  , toIObject        = __webpack_require__(45);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(36)(Array, 'Array', function(iterated, kind){
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
/* 57 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(54);

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(61), __esModule: true };

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(62);
	__webpack_require__(73);
	__webpack_require__(74);
	__webpack_require__(75);
	module.exports = __webpack_require__(15).Symbol;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(11)
	  , has            = __webpack_require__(8)
	  , DESCRIPTORS    = __webpack_require__(23)
	  , $export        = __webpack_require__(14)
	  , redefine       = __webpack_require__(38)
	  , META           = __webpack_require__(63).KEY
	  , $fails         = __webpack_require__(24)
	  , shared         = __webpack_require__(10)
	  , setToStringTag = __webpack_require__(53)
	  , uid            = __webpack_require__(12)
	  , wks            = __webpack_require__(54)
	  , wksExt         = __webpack_require__(59)
	  , wksDefine      = __webpack_require__(64)
	  , keyOf          = __webpack_require__(65)
	  , enumKeys       = __webpack_require__(66)
	  , isArray        = __webpack_require__(69)
	  , anObject       = __webpack_require__(20)
	  , toIObject      = __webpack_require__(45)
	  , toPrimitive    = __webpack_require__(26)
	  , createDesc     = __webpack_require__(27)
	  , _create        = __webpack_require__(41)
	  , gOPNExt        = __webpack_require__(70)
	  , $GOPD          = __webpack_require__(72)
	  , $DP            = __webpack_require__(19)
	  , $keys          = __webpack_require__(43)
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
	  __webpack_require__(71).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(68).f  = $propertyIsEnumerable;
	  __webpack_require__(67).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(37)){
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
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(18)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(12)('meta')
	  , isObject = __webpack_require__(21)
	  , has      = __webpack_require__(8)
	  , setDesc  = __webpack_require__(19).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(24)(function(){
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
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(11)
	  , core           = __webpack_require__(15)
	  , LIBRARY        = __webpack_require__(37)
	  , wksExt         = __webpack_require__(59)
	  , defineProperty = __webpack_require__(19).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(43)
	  , toIObject = __webpack_require__(45);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(43)
	  , gOPS    = __webpack_require__(67)
	  , pIE     = __webpack_require__(68);
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
/* 67 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 68 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(47);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(45)
	  , gOPN      = __webpack_require__(71).f
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
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(44)
	  , hiddenKeys = __webpack_require__(51).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(68)
	  , createDesc     = __webpack_require__(27)
	  , toIObject      = __webpack_require__(45)
	  , toPrimitive    = __webpack_require__(26)
	  , has            = __webpack_require__(8)
	  , IE8_DOM_DEFINE = __webpack_require__(22)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(23) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 73 */
/***/ function(module, exports) {



/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(64)('asyncIterator');

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(64)('observable');

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _setPrototypeOf = __webpack_require__(77);
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	var _create = __webpack_require__(81);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _typeof2 = __webpack_require__(30);
	
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
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(78), __esModule: true };

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(79);
	module.exports = __webpack_require__(15).Object.setPrototypeOf;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(14);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(80).set});

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(21)
	  , anObject = __webpack_require__(20);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(16)(Function.call, __webpack_require__(72).f(Object.prototype, '__proto__').set, 2);
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
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(82), __esModule: true };

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(83);
	var $Object = __webpack_require__(15).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(14)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(41)});

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(85);
	module.exports = __webpack_require__(86).default;

/***/ },
/* 85 */
/***/ function(module, exports) {

	(function() {
		if(!window.location.origin) {
			window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
		}
	})();

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';exports.__esModule=true;var _Router=__webpack_require__(87);var _Router2=_interopRequireDefault(_Router);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function leads(){}leads.Router=function(options){return new _Router2.default(options);};exports.default=leads;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';exports.__esModule=true;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _URL=__webpack_require__(88);var _URL2=_interopRequireDefault(_URL);var _pathToRegexp=__webpack_require__(92);var _pathToRegexp2=_interopRequireDefault(_pathToRegexp);var _namespace=__webpack_require__(94);var _namespace2=_interopRequireDefault(_namespace);var _Request=__webpack_require__(95);var _Request2=_interopRequireDefault(_Request);var _Response=__webpack_require__(96);var _Response2=_interopRequireDefault(_Response);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var privates=(0,_namespace2.default)();var Router=function(){function Router(options){_classCallCheck(this,Router);var self=privates(this);self.handlers=[];self.errorHandlers=[];self.paramHandlers={};self.defaults={};var caseSensitive=false;var mergeParams=false;var strict=false;var addHistory=true;var changePath=true;var transition=true;Object.defineProperties(self.defaults,{caseSensitive:{get:function get(){return caseSensitive;},set:function set(value){caseSensitive=Boolean(value);},enumerable:true},mergeParams:{get:function get(){return mergeParams;},set:function set(value){mergeParams=Boolean(value);},enumerable:true},strict:{get:function get(){return strict;},set:function set(value){strict=Boolean(value);},enumerable:true},addHistory:{get:function get(){return addHistory;},set:function set(value){addHistory=Boolean(value);},enumerable:true},changePath:{get:function get(){return changePath;},set:function set(value){changePath=Boolean(value);},enumerable:true},transition:{get:function get(){return transition;},set:function set(value){transition=Boolean(value);},enumerable:true}});for(var method in privateMethods){self[method]=privateMethods[method].bind(this);}this.defaults=options;}Router.prototype.dispatch=function dispatch(urlString,method,options){var self=privates(this);if(typeof urlString!=='string')return;if(typeof method!=='string')method='all';if((typeof options==='undefined'?'undefined':_typeof(options))!=='object'||options===null)options={};if(typeof options.addHistory!=='boolean')options.addHistory=self.defaults.addHistory;if(typeof options.changePath!=='boolean')options.changePath=self.defaults.changePath;if(typeof options.transition!=='boolean')options.transition=self.defaults.transition;var request=new _Request2.default();var response=new _Response2.default();var url=_URL2.default.parse(urlString);if(url.origin!==location.origin){if(options.transition)location.href=url.href;return;}request.dispatcher=this;request.originalUrl=urlString;request.method=method;request.data=options.data;_extends(request,url);var state={path:urlString};if(options.addHistory&&options.changePath){window.history.pushState(state,null,url.href);}else if(options.addHistory&&options.changePath===false){window.history.pushState(state,null,location.href);}else if(options.addHistory===false&&options.changePath){window.history.replaceState(state,null,url.href);}self.goGetCalledHandler=self.gfGetCalledHandler(url.pathname,method,'',{});self.runNextHandler(request,response);};Router.prototype.use=function use(){if(arguments.length===0)return this;var path='/';var type='middleware';var firstParam=arguments[0];if(firstParam!==undefined&&firstParam!==null&&typeof firstParam!=='function'&&!(firstParam instanceof Router)){path=firstParam;Array.prototype.shift.bind(arguments)();}var self=privates(this);var listeners=[];Array.prototype.forEach.bind(arguments)(function(arg){if(typeof arg!=='function'&&!(arg instanceof Router)){return;}if(typeof arg==='function'&&arg.length===4){self.register({path:path,type:type,listener:arg},'error');return;}listeners.push(arg);});if(listeners.length!==0){self.register({path:path,type:type,listeners:listeners});}return this;};Router.prototype.all=function all(path){privates(this).METHOD(path,'all',arguments);return this;};Router.prototype.get=function get(path){privates(this).METHOD(path,'get',arguments);return this;};Router.prototype.post=function post(path){privates(this).METHOD(path,'post',arguments);return this;};Router.prototype.head=function head(path){privates(this).METHOD(path,'head',arguments);return this;};Router.prototype.put=function put(path){privates(this).METHOD(path,'put',arguments);return this;};Router.prototype.delete=function _delete(path){privates(this).METHOD(path,'delete',arguments);return this;};Router.prototype.options=function options(path){privates(this).METHOD(path,'options',arguments);return this;};Router.prototype.route=function route(path){var _this=this;var ret={};['all','get','post','head','put','delete','options'].forEach(function(method){ret[method]=function(){this[method].bind(this,path).apply(this,arguments);return ret;}.bind(_this);});return ret;};Router.prototype.param=function param(name,callback){if(typeof callback!=='function'){return;}var self=privates(this);var names=null;if(Array.isArray(name)){names=name;}else {names=[name];}names.forEach(function(name){if(typeof name!=='string'){return;}if(name in self.paramHandlers){self.paramHandlers[name].listeners.push(callback);return;}self.paramHandlers[name]={listeners:[callback],type:'parameter'};});};_createClass(Router,[{key:'defaults',get:function get(){return privates(this).defaults;},set:function set(obj){var self=privates(this);if((typeof obj==='undefined'?'undefined':_typeof(obj))!=='object'||obj===null)return;for(var prop in self.defaults){if(!(prop in obj))continue;self.defaults[prop]=obj[prop];}}}]);return Router;}();exports.default=Router;var privateMethods={METHOD:function METHOD(path,method,args){if(path===undefined||path===null){return;}if(args.length===1){this.dispatch(path,method);return;}if(args.length===2&&_typeof(args[1])==='object'&&args[1]!==null&&!(args[1] instanceof Router)){this.dispatch(path,method,args[1]);return;}var self=privates(this);var type='method';var listeners=[];Array.prototype.shift.bind(args)();Array.prototype.forEach.bind(args)(function(arg){if(typeof arg!=='function'&&!(arg instanceof Router)){return;}if(typeof arg==='function'&&arg.length===4){self.register({path:path,type:type,method:method,listener:arg},'error');return;}listeners.push(arg);});if(listeners.length!==0){self.register({path:path,type:type,method:method,listeners:listeners});}},getRemainder:function getRemainder(matched){if(matched.index!==0){return null;}var remainder=matched.input.replace(matched[0],'');if(matched[0].slice(-1)!=='/'&&remainder[0]!=='/'&&remainder!==''){return null;}return _URL2.default.addFirstSlash(remainder);},getParams:function getParams(matched,keys,parentParams){var self=privates(this);var params=self.defaults.mergeParams?_extends({},parentParams):{};matched=matched.concat([]);matched.shift();if(matched.length===0){return params;}keys.forEach(function(value){if((typeof value==='undefined'?'undefined':_typeof(value))!=='object'){return;}params[value.name]=matched.shift();});return params;},getChangedParamKeys:function getChangedParamKeys(paramsObserver,params){var keys=[];for(var prop in params){if(paramsObserver[prop]!==params[prop]){paramsObserver[prop]=params[prop];keys.push(prop);}}return keys;},getParamHandlers:function getParamHandlers(keys,req){var self=privates(this);var paramHandlers=[];keys.forEach(function(key){if(key in self.paramHandlers===false){return;}paramHandlers.push({handler:{type:self.paramHandlers[key].type,listeners:self.paramHandlers[key].listeners},paramValue:req.params[key],req:req});});return paramHandlers;},getMatchedMiddlewareHandlers:function getMatchedMiddlewareHandlers(handler,req,remainder){if(typeof handler.listener==='function'){return [{handler:handler,req:req}];}if(handler.listener instanceof Router){return handler.listener.getMatchedHandlers(remainder,req.method,req.baseUrl,req.params);}},getMatchedHandlers:function getMatchedHandlers(path,method,_baseUrl){var self=privates(this);var matchedHandlers=[];self.handlers.forEach(function(handler){var baseUrl=_baseUrl;var matched=handler.pattern.exec(path);if(matched===null){return;}if(handler.type==='middleware'){var remainder=self.getRemainder(matched);if(remainder===null){return;}baseUrl+=_URL2.default.removeTrailingSlash(matched[0]);matchedHandlers.push({handler:handler,matched:matched,baseUrl:baseUrl,remainder:remainder});}else if(method==='all'||handler.method==='all'||handler.method===method){matchedHandlers.push({handler:handler,matched:matched,baseUrl:baseUrl,remainder:'/'});}});return matchedHandlers;},getCalledHandlers:function getCalledHandlers(path,method,baseUrl,params){var _this2=this;var self=privates(this);var matchedHandlers=self.getMatchedHandlers(path,method,baseUrl);var calledHandlers=[];var paramsObserver={};matchedHandlers.forEach(function(matchedHandler){var handler=matchedHandler.handler;var matched=matchedHandler.matched;var remainder=matchedHandler.remainder;var req={app:_this2,baseUrl:matchedHandler.baseUrl,params:self.getParams(matched,handler.pattern.keys,params)};var changedParamKeys=self.getChangedParamKeys(paramsObserver,req.params);var paramHandlers=self.getParamHandlers(changedParamKeys,req);calledHandlers.push.apply(calledHandlers,paramHandlers);calledHandlers.push({handler:handler,req:req,remainder:remainder});});return calledHandlers;},gfGetCalledHandler:function gfGetCalledHandler(path,method,baseUrl,params){var calledHandlers=privates(this).getCalledHandlers(path,method,baseUrl,params);var i=0;var l=0;var childRouter=null;var obj={value:undefined,done:true};return {next:function next(skip){if(calledHandlers.length<=i){return {done:true,value:undefined};}var calledHandler=calledHandlers[i];if(calledHandler.handler.listeners.length<=l){i++;l=0;return this.next();}if(childRouter){var nextHandler=childRouter.getNextHandler(skip);if(nextHandler){return {done:false,value:nextHandler};}l++;childRouter=null;return this.next();}if(l!==0&&skip){i++;l=0;return this.next();}var listener=calledHandler.handler.listeners[l];if(listener instanceof Router){childRouter=privates(listener);childRouter.goGetCalledHandler=childRouter.gfGetCalledHandler(calledHandler.remainder,method,calledHandler.req.baseUrl,calledHandler.req.params);var _nextHandler=childRouter.getNextHandler();if(_nextHandler){return {done:false,value:_nextHandler};}l++;childRouter=null;return this.next();}l++;return {done:false,value:{type:calledHandler.handler.type,listener:listener,req:calledHandler.req,paramValue:calledHandler.paramValue}};}};},getMatchedErrorHandlers:function getMatchedErrorHandlers(request){var self=privates(this);var matchedHandlers=[];var method=request.method;var path=request.pathname;self.errorHandlers.forEach(function(handler){var matched=handler.pattern.exec(path);if(matched===null){return;}if(handler.type==='middleware'){var remainder=self.getRemainder(matched);if(remainder===null){return;}matchedHandlers.push({handler:handler});}else if(handler.method==='all'||method==='all'||handler.method===method){matchedHandlers.push({handler:handler});}});return matchedHandlers;},gfGetMatchedErrorHandler:function gfGetMatchedErrorHandler(request){var matchedHandlers=privates(this).getMatchedErrorHandlers(request);var i=0;return {next:function next(){if(matchedHandlers.length<=i){return {done:true,value:undefined};}return {done:false,value:matchedHandlers[i++]};}};},getNextHandler:function getNextHandler(){var genObj=privates(this).goGetCalledHandler.next(arguments[0]);if(genObj.done){return null;}return genObj.value;},runNextHandler:function runNextHandler(request,response,error){var self=privates(this);var nextHandler=null;if(error==='route'){nextHandler=self.getNextHandler(true);}else if(error!==undefined){self.goGetMatchedErrorHandlers=self.gfGetMatchedErrorHandler(request);self.runNextErrorHandler(request,response,error);return;}else {nextHandler=self.getNextHandler();}if(nextHandler===null){return;}_extends(request,nextHandler.req);var next=self.runNextHandler.bind(self,request,response);if(nextHandler.type==='parameter'){nextHandler.listener(request,response,next,nextHandler.paramValue);return;}nextHandler.listener(request,response,next);},getNextErrorHandler:function getNextErrorHandler(){var genObj=privates(this).goGetMatchedErrorHandlers.next();if(genObj.done){return null;}return genObj.value;},runNextErrorHandler:function runNextErrorHandler(request,response,error){var self=privates(this);var nextHandler=self.getNextErrorHandler();if(nextHandler===null){return;}var next=self.runNextErrorHandler.bind(self,request,response,error);nextHandler.handler.listener(error,request,response,next);},register:function register(properties,destination){var self=privates(this);var handler=properties;if(handler.type==='middleware'){handler.pattern=(0,_pathToRegexp2.default)(handler.path,null,{sensitive:self.defaults.caseSensitive,strict:self.defaults.strict,end:false});}else {handler.pattern=(0,_pathToRegexp2.default)(handler.path,null,{sensitive:self.defaults.caseSensitive,strict:self.defaults.strict,end:true});}if(destination==='error'){self.errorHandlers.push(handler);return;}self.handlers.push(handler);}};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';exports.__esModule=true;var _querystring=__webpack_require__(89);var _querystring2=_interopRequireDefault(_querystring);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var URL={};URL.parse=function(urlString){var a=document.createElement('a');a.href=urlString;a.href=a.href;var urlObj={};urlObj.protocol=a.protocol;urlObj.secure=a.protocol==='https:';urlObj.host=a.port==='80'?a.host.replace(':80',''):a.host;urlObj.port=a.port==='80'?'':a.port;urlObj.hostname=a.hostname;urlObj.hash=a.hash;urlObj.search=a.search;urlObj.query=_querystring2.default.parse(a.search.slice(1));urlObj.pathname=URL.adjustURLSlash(URL.addFirstSlash(a.pathname));urlObj.path=urlObj.pathname+a.search;urlObj.href=a.href;urlObj.origin=a.protocol+'//'+urlObj.host;return urlObj;};URL.addFirstSlash=function(pathString){return pathString.replace(/^(\/*)?/,'/');};URL.addTrailingSlash=function(pathString){return pathString.replace(/(\/*)?$/,'/');};URL.removeTrailingSlash=function(pathname){return pathname.replace(/\/*$/,'');};URL.adjustURLSlash=function(pathname){return pathname.replace(/\/+/g,'/');};exports.default=URL;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.decode = exports.parse = __webpack_require__(90);
	exports.encode = exports.stringify = __webpack_require__(91);


/***/ },
/* 90 */
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
/* 91 */
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
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var isarray = __webpack_require__(93)
	
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
/* 93 */
/***/ function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ },
/* 94 */
/***/ function(module, exports) {

	"use strict";exports.__esModule=true;exports.default=namespace;function namespace(){var map=new WeakMap();return function(object){if(!map.has(object)){map.set(object,{});}return map.get(object);};};

/***/ },
/* 95 */
/***/ function(module, exports) {

	"use strict";exports.__esModule=true;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Request=function Request(){_classCallCheck(this,Request);};exports.default=Request;

/***/ },
/* 96 */
/***/ function(module, exports) {

	"use strict";exports.__esModule=true;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Response=function Response(){_classCallCheck(this,Response);};exports.default=Response;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _from = __webpack_require__(100);
	
	var _from2 = _interopRequireDefault(_from);
	
	var _regenerator = __webpack_require__(109);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _toConsumableArray2 = __webpack_require__(113);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _asyncToGenerator2 = __webpack_require__(114);
	
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
	
	var _dispatcher = __webpack_require__(126);
	
	var _dispatcher2 = _interopRequireDefault(_dispatcher);
	
	var _getMoveText = __webpack_require__(128);
	
	var _getMoveText2 = _interopRequireDefault(_getMoveText);
	
	var _config = __webpack_require__(130);
	
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
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(99), __esModule: true };

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(15)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(101), __esModule: true };

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(33);
	__webpack_require__(102);
	module.exports = __webpack_require__(15).Array.from;

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(16)
	  , $export        = __webpack_require__(14)
	  , toObject       = __webpack_require__(5)
	  , call           = __webpack_require__(103)
	  , isArrayIter    = __webpack_require__(104)
	  , toLength       = __webpack_require__(49)
	  , createProperty = __webpack_require__(105)
	  , getIterFn      = __webpack_require__(106);
	
	$export($export.S + $export.F * !__webpack_require__(108)(function(iter){ Array.from(iter); }), 'Array', {
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
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(20);
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
	var Iterators  = __webpack_require__(39)
	  , ITERATOR   = __webpack_require__(54)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(19)
	  , createDesc      = __webpack_require__(27);
	
	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(107)
	  , ITERATOR  = __webpack_require__(54)('iterator')
	  , Iterators = __webpack_require__(39);
	module.exports = __webpack_require__(15).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(47)
	  , TAG = __webpack_require__(54)('toStringTag')
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
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(54)('iterator')
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
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(110);


/***/ },
/* 110 */
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
	
	module.exports = __webpack_require__(111);
	
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
/* 111 */
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(112)))

/***/ },
/* 112 */
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
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _from = __webpack_require__(100);
	
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
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _promise = __webpack_require__(115);
	
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
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(116), __esModule: true };

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(73);
	__webpack_require__(33);
	__webpack_require__(55);
	__webpack_require__(117);
	module.exports = __webpack_require__(15).Promise;

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(37)
	  , global             = __webpack_require__(11)
	  , ctx                = __webpack_require__(16)
	  , classof            = __webpack_require__(107)
	  , $export            = __webpack_require__(14)
	  , isObject           = __webpack_require__(21)
	  , aFunction          = __webpack_require__(17)
	  , anInstance         = __webpack_require__(118)
	  , forOf              = __webpack_require__(119)
	  , speciesConstructor = __webpack_require__(120)
	  , task               = __webpack_require__(121).set
	  , microtask          = __webpack_require__(123)()
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
	      , FakePromise = (promise.constructor = {})[__webpack_require__(54)('species')] = function(exec){ exec(empty, empty); };
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
	  Internal.prototype = __webpack_require__(124)($Promise.prototype, {
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
	__webpack_require__(53)($Promise, PROMISE);
	__webpack_require__(125)(PROMISE);
	Wrapper = __webpack_require__(15)[PROMISE];
	
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
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(108)(function(iter){
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
/* 118 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(16)
	  , call        = __webpack_require__(103)
	  , isArrayIter = __webpack_require__(104)
	  , anObject    = __webpack_require__(20)
	  , toLength    = __webpack_require__(49)
	  , getIterFn   = __webpack_require__(106)
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
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(20)
	  , aFunction = __webpack_require__(17)
	  , SPECIES   = __webpack_require__(54)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(16)
	  , invoke             = __webpack_require__(122)
	  , html               = __webpack_require__(52)
	  , cel                = __webpack_require__(25)
	  , global             = __webpack_require__(11)
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
	  if(__webpack_require__(47)(process) == 'process'){
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
/* 122 */
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
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(11)
	  , macrotask = __webpack_require__(121).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(47)(process) == 'process';
	
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
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(18);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(11)
	  , core        = __webpack_require__(15)
	  , dP          = __webpack_require__(19)
	  , DESCRIPTORS = __webpack_require__(23)
	  , SPECIES     = __webpack_require__(54)('species');
	
	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _events = __webpack_require__(127);
	
	var _events2 = _interopRequireDefault(_events);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = new _events2.default();

/***/ },
/* 127 */
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
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _Localize = __webpack_require__(129);
	
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
/* 129 */
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
/* 130 */
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
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(29);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(76);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _config = __webpack_require__(130);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _Notification = __webpack_require__(132);
	
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
			content.querySelector('a').href = _config2.default.deploy;
	
			_this.appendChild(content);
			return _this;
		}
	
		return Header;
	}(HTMLElement);
	
	exports.default = Header;
	
	
	customElements.define('x-header', Header);

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(133);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(29);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(76);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _class;
	
	var _usestate = __webpack_require__(137);
	
	var _usestate2 = _interopRequireDefault(_usestate);
	
	var _index = __webpack_require__(157);
	
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
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(134);
	
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
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(135), __esModule: true };

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(136);
	var $Object = __webpack_require__(15).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(14);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(23), 'Object', {defineProperty: __webpack_require__(19).f});

/***/ },
/* 137 */
/***/ function(module, exports) {

	function setState(state) {
		if(typeof state !== 'object' || state === null) return;
		
		if(typeof this.state !== 'object' || this.state === null) this.state = {};
		const oldState = this.state;
		const newState = this.state = Object.assign({}, this.state, state);
	
		if(Array.isArray(this.constructor.observedState) === false) return;
		if(typeof this.stateChangedCallback !== 'function') return;
	
		this.constructor.observedState.forEach((name) => {
			if(oldState[name] === newState[name]) return;
			this.stateChangedCallback(name, oldState[name], newState[name]);
		});
	}
	
	module.exports = function useState(target) {
		if(typeof target !== 'function') throw new TypeError();
	
		target.prototype.setState = setState;
		return target;
	}

/***/ },
/* 138 */,
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(140), __esModule: true };

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(141);
	module.exports = __webpack_require__(15).Object.assign;

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(14);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(142)});

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(43)
	  , gOPS     = __webpack_require__(67)
	  , pIE      = __webpack_require__(68)
	  , toObject = __webpack_require__(5)
	  , IObject  = __webpack_require__(46)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(24)(function(){
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
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(29);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(76);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var template = document.createElement('template');
	template.innerHTML = '\n<footer>\n\t<p>\u4F7F\u3044\u65B9</p>\n\t<p>\u30D5\u30A9\u30FC\u30E0\u306BID\u3092\u5165\u529B\u3057\u3066\u691C\u7D22\u3059\u308B\u3068\u6700\u65B0\u306E\u5BFE\u5C4010\u4EF6\u304C\u53D6\u5F97\u3055\u308C\u307E\u3059\u3002\u68CB\u8B5C\u306F<strong>\u300C\u8AAD\u307F\u8FBC\u3080\u300D\u30AF\u30EA\u30C3\u30AF\u2192\u300C\u30B3\u30D4\u30FC\u3059\u308B\u300D\u30AF\u30EA\u30C3\u30AF</strong>\u3067\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30D4\u30FC\u3055\u308C\u307E\u3059\u3002</p>\n\t<address>\u4F5C\u8005: <a href="https://twitter.com/vinyufi" target="_blank">@vinyufi</a></address>\n</footer>\n';
	
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
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(133);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(29);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(76);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _actions = __webpack_require__(97);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _index = __webpack_require__(157);
	
	var _MatchRecordSearchForm = __webpack_require__(146);
	
	var _MatchRecordSearchForm2 = _interopRequireDefault(_MatchRecordSearchForm);
	
	var _MatchRecords = __webpack_require__(148);
	
	var _MatchRecords2 = _interopRequireDefault(_MatchRecords);
	
	var _HistoryRecords = __webpack_require__(154);
	
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
/* 145 */,
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(133);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(29);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(76);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _class;
	
	var _usestate = __webpack_require__(137);
	
	var _usestate2 = _interopRequireDefault(_usestate);
	
	var _actions = __webpack_require__(97);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _index = __webpack_require__(157);
	
	var _router = __webpack_require__(147);
	
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
/* 147 */
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
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(133);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(29);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(76);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _class;
	
	var _usestate = __webpack_require__(137);
	
	var _usestate2 = _interopRequireDefault(_usestate);
	
	var _actions = __webpack_require__(97);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _index = __webpack_require__(157);
	
	var _MatchRecordsTable = __webpack_require__(150);
	
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
/* 149 */,
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(133);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(29);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(76);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _class;
	
	var _usestate = __webpack_require__(137);
	
	var _usestate2 = _interopRequireDefault(_usestate);
	
	var _MatchRecordHeaderTr = __webpack_require__(151);
	
	var _MatchRecordHeaderTr2 = _interopRequireDefault(_MatchRecordHeaderTr);
	
	var _MatchRecordTr = __webpack_require__(152);
	
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
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(29);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(76);
	
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
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(133);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(29);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(76);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _class;
	
	var _usestate = __webpack_require__(137);
	
	var _usestate2 = _interopRequireDefault(_usestate);
	
	var _actions = __webpack_require__(97);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _index = __webpack_require__(157);
	
	var _router = __webpack_require__(147);
	
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
						var a = this.tds[2].querySelector('a');
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
/* 153 */,
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(133);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(29);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(76);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _class;
	
	var _usestate = __webpack_require__(137);
	
	var _usestate2 = _interopRequireDefault(_usestate);
	
	var _actions = __webpack_require__(97);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _index = __webpack_require__(157);
	
	var _MatchRecordsTable = __webpack_require__(150);
	
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
/* 155 */,
/* 156 */
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

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.historyRecords = exports.matchRecord = exports.matchRecords = exports.matchRecordSearch = exports.notification = undefined;
	
	var _Notification = __webpack_require__(158);
	
	var _Notification2 = _interopRequireDefault(_Notification);
	
	var _MatchRecordSearch = __webpack_require__(159);
	
	var _MatchRecordSearch2 = _interopRequireDefault(_MatchRecordSearch);
	
	var _MatchRecords = __webpack_require__(160);
	
	var _MatchRecords2 = _interopRequireDefault(_MatchRecords);
	
	var _MatchRecord = __webpack_require__(161);
	
	var _MatchRecord2 = _interopRequireDefault(_MatchRecord);
	
	var _HistoryRecords = __webpack_require__(162);
	
	var _HistoryRecords2 = _interopRequireDefault(_HistoryRecords);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var notification = exports.notification = new _Notification2.default();
	var matchRecordSearch = exports.matchRecordSearch = new _MatchRecordSearch2.default();
	var matchRecords = exports.matchRecords = new _MatchRecords2.default();
	var matchRecord = exports.matchRecord = new _MatchRecord2.default();
	var historyRecords = exports.historyRecords = new _HistoryRecords2.default();

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;
	
	var _assign = __webpack_require__(139);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(29);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(76);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _events = __webpack_require__(127);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _dispatcher = __webpack_require__(126);
	
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
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;
	
	var _regenerator = __webpack_require__(109);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _asyncToGenerator2 = __webpack_require__(114);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	var _stringify = __webpack_require__(98);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _assign = __webpack_require__(139);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(29);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(76);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _events = __webpack_require__(127);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _dispatcher = __webpack_require__(126);
	
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
				var searchId = _this.searchId;
				(0, _assign2.default)(_this, JSON.parse((0, _stringify2.default)(initialState)), { searchId: searchId });
				_this.emit('CHANGE');
			});
			return _this;
		}
	
		return MatchRecordSearch;
	}(_events2.default);
	
	exports.default = MatchRecordSearch;

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;
	
	var _stringify = __webpack_require__(98);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _assign = __webpack_require__(139);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(29);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(76);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _events = __webpack_require__(127);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _dispatcher = __webpack_require__(126);
	
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
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;
	
	var _stringify = __webpack_require__(98);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _assign = __webpack_require__(139);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(29);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(76);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _events = __webpack_require__(127);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _dispatcher = __webpack_require__(126);
	
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
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;
	
	var _stringify = __webpack_require__(98);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _assign = __webpack_require__(139);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(29);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(76);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _events = __webpack_require__(127);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _dispatcher = __webpack_require__(126);
	
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

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzhjY2MwMWZmOWUwZmMyOWJjODAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2tleW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXByb3RvLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vbGVhZHMtcm91dGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vbGVhZHMtcm91dGVyL2xpYi9sb2NhdGlvbk9yaWdpbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xlYWRzLXJvdXRlci9saWIvbGVhZHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sZWFkcy1yb3V0ZXIvbGliL1JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xlYWRzLXJvdXRlci9saWIvVVJMLmpzIiwid2VicGFjazovLy8uL34vcXVlcnlzdHJpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9xdWVyeXN0cmluZy9kZWNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9xdWVyeXN0cmluZy9lbmNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2lzYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sZWFkcy1yb3V0ZXIvbGliL25hbWVzcGFjZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xlYWRzLXJvdXRlci9saWIvUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xlYWRzLXJvdXRlci9saWIvUmVzcG9uc2UuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2FjdGlvbnMvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2Zyb20uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzIiwid2VicGFjazovLy8uL34vcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovLy8uL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvZGlzcGF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbW1vbi9nZXRNb3ZlVGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tbW9uL0xvY2FsaXplLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL05vdGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L3VzZXN0YXRlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL01hdGNoUmVjb3JkU2VhcmNoRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tbW9uL3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9NYXRjaFJlY29yZHMuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvTWF0Y2hSZWNvcmRzVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvTWF0Y2hSZWNvcmRIZWFkZXJUci5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9NYXRjaFJlY29yZFRyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0hpc3RvcnlSZWNvcmRzLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21tb24vc2VuZFBhZ2VWaWV3LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zdG9yZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3N0b3Jlcy9Ob3RpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3N0b3Jlcy9NYXRjaFJlY29yZFNlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3RvcmVzL01hdGNoUmVjb3Jkcy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3RvcmVzL01hdGNoUmVjb3JkLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zdG9yZXMvSGlzdG9yeVJlY29yZHMuanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ0ZW1wbGF0ZSIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJBcHAiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwicmVwbGFjZUNoaWxkIiwiZmlyc3RDaGlsZCIsImxhc3RDaGlsZCIsIm1haW4iLCJxdWVyeVNlbGVjdG9yIiwiaWQiLCJpbmRleCIsInJvdXRlciIsIlJvdXRlciIsInVzZSIsInJlcSIsInJlcyIsIm5leHQiLCJnZXQiLCJkZXBsb3kiLCJxdWVyeSIsInVuZGVmaW5lZCIsImlucHV0U2VhcmNoSWQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImRldGFpbCIsIm1ldGhvZCIsInBhdGgiLCJhZGRIaXN0b3J5IiwibG9jYXRpb24iLCJocmVmIiwiY2hhbmdlUGF0aCIsIkhUTUxFbGVtZW50IiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiLCJ3YXJzVVJMIiwiY2xhc3NOYW1lIiwic2VhcmNoSWQiLCJzdGFydCIsImZldGNoIiwic2VydmVyIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVwbGFjZSIsIm1vZGUiLCJyZXNwb25zZSIsInRleHQiLCJkb2MiLCJET01QYXJzZXIiLCJwYXJzZUZyb21TdHJpbmciLCJldmFsIiwibWF0Y2hSZWNvcmRzIiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW1lbnQiLCJibGFjayIsImNoaWxkcmVuIiwidGV4dENvbnRlbnQiLCJ3aGl0ZSIsImJsYWNrVXNlclBhZ2UiLCJ3YXJzT3JpZ2luIiwiZ2V0QXR0cmlidXRlIiwid2hpdGVVc2VyUGFnZSIsIndpbm5lciIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwidGltZSIsInVybCIsImlzV2lubmVyIiwiaXNGZXRjaGluZ0tpZnUiLCJkb2VzSGF2ZUtpZnUiLCJraWZ1Iiwic2hpZnQiLCJmZXRjaFJlY29yZHMiLCJyZWNvcmQiLCJxdWVyeUluZGV4IiwiaW5kZXhPZiIsIm1vdmVzIiwibWF0Y2giLCJzcGxpdCIsInBvcCIsImtpZnVUZXh0IiwibWFwIiwibW92ZSIsImkiLCJtb3ZlVGV4dCIsInAxIiwicDIiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJjaGFyQ29kZUF0Iiwiam9pbiIsImZldGNoS2lmdSIsInZhbHVlIiwiZW1pdCIsImZldGNoTWF0Y2hSZWNvcmRzIiwidXJscyIsInJlY29yZHMiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInNob3dIaXN0b3J5UmVjb3JkcyIsImhpZGVIaXN0b3J5UmVjb3JkcyIsImNvcHlLaWZ1IiwiY29weVRleHQiLCJ1bm1vdW50SW5kZXgiLCJ0ZXh0YXJlYSIsInNlbGVjdCIsImV4ZWNDb21tYW5kIiwicmVtb3ZlQ2hpbGQiLCJrYW5qaU51bWJlciIsInQiLCJwaWVjZUthbmppTWFwIiwiZ2V0UGllY2VLYW5qaU1hcCIsImlzUHJvbW90ZWQiLCJwdHlwZSIsInVucHJvbW90ZSIsImdldE1vdmVUZXh0IiwibiIsInByZXYiLCJudW1fc3RyIiwicGllY2Vfc3RyIiwiYmVmX3N0ciIsImNoYXJBdCIsInBsYWNlIiwic3Vic3RyIiwicGllY2VTYW1lUGxhY2UiLCJvcmlnaW4iLCJvbGQiLCJ1bnByb21vdGVkIiwiZ2V0TG9jYWxlIiwiTG9jYWxpemUiLCJsb2NhbGUiLCJpbWdVUkwiLCJ2YWx1ZXMiLCJzZXRMb2NhbGUiLCJsY2wiLCJrZXkiLCJjaGFuZ2VLZWlzZWkiLCJrZWlzZWkiLCJrZWlzZWlzIiwibGNsX2tlaXNlaXMiLCJpZHgiLCJnZXRJbWdVUkwiLCJpbWciLCJkaXIiLCJzZXRJbWdVUkwiLCJBcnJheSIsImdldEZpbmlzaE1hcCIsImZpbmlzaE1hcCIsImhvc3QiLCJIZWFkZXIiLCJOb3RpZmljYWlvbiIsImhhbmRsZU5vdGlmaWNhdGlvbkNoYW5nZSIsImJpbmQiLCJ0aW1lcklkIiwicCIsInNldFN0YXRlIiwib24iLCJyZW1vdmVMaXN0ZW5lciIsIm5hbWUiLCJvbGRWYWx1ZSIsIm5ld1ZhbHVlIiwic3R5bGUiLCJkaXNwbGF5IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImRpc3BsYXlUaW1lIiwiRm9vdGVyIiwiSW5kZXgiLCJNYXRjaFJlY29yZFNlYXJjaEZvcm0iLCJoYW5kbGVNYXRjaFJlY29yZFNlYXJjaENoYW5nZSIsImZvcm0iLCJzZWFyY2hJZElucHV0Iiwic3VibWl0QnV0dG9uIiwicHJldmVudERlZmF1bHQiLCJwdXNoU3RhdGUiLCJwYXRobmFtZSIsImRpc2FibGVkIiwiYnJvd3Nlckhpc3RvcnkiLCJldmVudCIsIkN1c3RvbUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsInJlcGxhY2VTdGF0ZSIsIk1hdGNoUmVjb3JkcyIsImhhbmRsZU1hdGNoUmVjb3Jkc0NoYW5nZSIsImEiLCJtYXRjaFJlY29yZHNUYWJsZSIsImlzRmV0Y2hpbmciLCJzbGljZSIsIk1hdGNoUmVjb3Jkc1RhYmxlIiwidGJvZHkiLCJmb3JFYWNoIiwiTWF0Y2hSZWNvcmRIZWFkZXJUciIsInRocyIsImZpbGwiLCJNYXRjaFJlY29yZFRyIiwiaGFuZGxlTWF0Y2hSZWNvcmRDaGFuZ2UiLCJ0ZHMiLCJraWZ1Q29weUJ1dHRvbiIsImN1cnJlbnRUYXJnZXQiLCJvbmNsaWNrIiwiaGFuZGxlVXNlckFuY2hvckNsaWNrIiwiYWRkIiwiSGlzdG9yeVJlY29yZHMiLCJoYW5kbGVIaXN0b3J5UmVjb3Jkc0NoYW5nZSIsInNob3VsZERpc3BsYXkiLCJzZW5kUGFnZVZpZXciLCJnYSIsInBhZ2UiLCJzZWFyY2giLCJ0aXRsZSIsIm5vdGlmaWNhdGlvbiIsIm1hdGNoUmVjb3JkU2VhcmNoIiwibWF0Y2hSZWNvcmQiLCJoaXN0b3J5UmVjb3JkcyIsImluaXRpYWxTdGF0ZSIsImRpc3BsYXlJZCIsIk5vdGlmaWNhdGlvbiIsImludGVydmFsIiwiaXNMaW1pdCIsIk1hdGNoUmVjb3JkU2VhcmNoIiwiSlNPTiIsInBhcnNlIiwibGVuZ3RoIiwiY29uY2F0Iiwic29ydCIsImIiLCJhVGltZSIsIkRhdGUiLCJnZXRUaW1lIiwiYlRpbWUiLCJNYXRjaFJlY29yZCIsInNhdmVSZWNvcmQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidW5zaGlmdCIsIl9yZWNvcmQiLCJzcGxpY2UiLCJzZXRJdGVtIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOzs7O0FBQ0E7Ozs7OztBQUVBQSxVQUFTQyxJQUFULENBQWNDLFdBQWQsQ0FBMEIsbUJBQTFCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLEtBQU1DLFdBQVdILFNBQVNJLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBakI7QUFDQUQsVUFBU0UsU0FBVDs7S0FNcUJDLEc7OztBQUNwQixrQkFBYztBQUFBOztBQUFBOztBQUdiLFNBQU1DLFVBQVVKLFNBQVNJLE9BQVQsQ0FBaUJDLFNBQWpCLENBQTJCLElBQTNCLENBQWhCO0FBQ0FELGFBQVFFLFlBQVIsQ0FBcUIsc0JBQXJCLEVBQW1DRixRQUFRRyxVQUEz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QUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVCxRQUFPO0FBQ1A7QUFDQTtBQUNBLE1BQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMvREE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBWSxPQUFPO0FBQ25CLGFBQVksUUFBUTtBQUNwQixhQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBWSxP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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBYztBQUNkLE1BQUs7QUFDTCxlQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0EsWUFBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx5Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsVUFBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0NBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsYUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0NBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBOztBQUVBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsWUFBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0EsK0NBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQSwrQ0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQSwrQ0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNsdEJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNkJBQTRCLFVBQVU7Ozs7Ozs7QUNuTHRDOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0EsOENBQTZDLGdCQUFnQjtBQUM3RDtBQUNBOztBQUVBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxHOzs7Ozs7QUNwQkE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFB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QTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakIsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxnQkFBZSxTQUFTO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFHO0FBQ0gscUJBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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LyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjOGNjYzAxZmY5ZTBmYzI5YmM4MCIsImltcG9ydCBzdG9yZXMgZnJvbSAnLi9zdG9yZXMvaW5kZXguanMnO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAuanMnO1xyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChuZXcgQXBwKCkpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9pbmRleC5qcyIsImltcG9ydCBsZWFkcyBmcm9tICdsZWFkcy1yb3V0ZXInO1xyXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2FjdGlvbnMuanMnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyLmpzJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlci5qcyc7XHJcbmltcG9ydCBJbmRleCBmcm9tICcuL0luZGV4LmpzJztcclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcuanMnO1xyXG5pbXBvcnQgc2VuZFBhZ2VWaWV3IGZyb20gJy4uL2NvbW1vbi9zZW5kUGFnZVZpZXcuanMnO1xyXG5cclxuY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xyXG50ZW1wbGF0ZS5pbm5lckhUTUwgPSBgXHJcbjxkaXYgaWQ9XCJoZWFkZXJcIj48L2Rpdj5cclxuPGRpdiBpZD1cIm1haW5cIj48ZGl2PjwvZGl2PjwvZGl2PlxyXG48ZGl2IGlkPVwiZm9vdGVyXCI+PC9kaXY+XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdGNvbnN0IGNvbnRlbnQgPSB0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcclxuXHRcdGNvbnRlbnQucmVwbGFjZUNoaWxkKG5ldyBIZWFkZXIoKSwgY29udGVudC5maXJzdENoaWxkKTtcclxuXHRcdGNvbnRlbnQucmVwbGFjZUNoaWxkKG5ldyBGb290ZXIoKSwgY29udGVudC5sYXN0Q2hpbGQpO1xyXG5cdFx0Y29uc3QgbWFpbiA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcignI21haW4nKTtcclxuXHJcblx0XHR0aGlzLmlkID0gJ2FwcCc7XHJcblx0XHR0aGlzLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG5cclxuXHRcdGNvbnN0IGluZGV4ID0gbmV3IEluZGV4KCk7XHJcblxyXG5cdFx0Y29uc3Qgcm91dGVyID0gbGVhZHMuUm91dGVyKCk7XHJcblxyXG5cdFx0cm91dGVyLnVzZSgocmVxLCByZXMsIG5leHQpID0+IHtcclxuXHRcdFx0c2VuZFBhZ2VWaWV3KCk7XHJcblx0XHRcdG5leHQoKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHJvdXRlci5nZXQoY29uZmlnLmRlcGxveSArICcvJyxcclxuXHRcdFx0KHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcblx0XHRcdFx0aWYocmVxLnF1ZXJ5LmlkID09PSB1bmRlZmluZWQpIHJldHVybiBuZXh0KCk7XHJcblxyXG5cdFx0XHRcdGFjdGlvbnMuaW5wdXRTZWFyY2hJZChyZXEucXVlcnkuaWQpO1xyXG5cdFx0XHRcdG1haW4ucmVwbGFjZUNoaWxkKGluZGV4LCBtYWluLmZpcnN0Q2hpbGQpO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0KHJlcSwgcmVzKSA9PiB7XHJcblx0XHRcdFx0bWFpbi5yZXBsYWNlQ2hpbGQoaW5kZXgsIG1haW4uZmlyc3RDaGlsZCk7XHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BhdGhjaGFuZ2UnLCAoZSkgPT4ge1xyXG5cdFx0XHRpZihlLmRldGFpbC5tZXRob2QgPT09ICdwdXNoU3RhdGUnKSByb3V0ZXIuZ2V0KGUuZGV0YWlsLnBhdGgpO1xyXG5cdFx0XHRlbHNlIHJvdXRlci5nZXQoZS5kZXRhaWwucGF0aCwgeyBhZGRIaXN0b3J5OiBmYWxzZSB9KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIChlKSA9PiB7XHJcblx0XHRcdHJvdXRlci5nZXQobG9jYXRpb24uaHJlZiwgeyBhZGRIaXN0b3J5OiBmYWxzZSwgY2hhbmdlUGF0aDogZmFsc2UgfSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRyb3V0ZXIuZ2V0KGxvY2F0aW9uLmhyZWYsIHsgYWRkSGlzdG9yeTogZmFsc2UgfSk7XHJcblx0fVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3gtYXBwJywgQXBwKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9BcHAuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuOSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciB0b09iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsICRnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRQcm90b3R5cGVPZicsIGZ1bmN0aW9uKCl7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZihpdCl7XG4gICAgcmV0dXJuICRnZXRQcm90b3R5cGVPZih0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b09iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uKE8pe1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmKGhhcyhPLCBJRV9QUk9UTykpcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZih0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKXtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaWQgPSAwXG4gICwgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgY29yZSAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGZhaWxzICAgPSByZXF1aXJlKCcuL19mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVksIGV4ZWMpe1xuICB2YXIgZm4gID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldXG4gICAgLCBleHAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbigpeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV1cbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICAgIGlmKHRoaXMgaW5zdGFuY2VvZiBDKXtcbiAgICAgICAgICBzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQztcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYoSVNfUFJPVE8pe1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0paGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc2VsZiwgY2FsbCkge1xuICBpZiAoIXNlbGYpIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gY2FsbCAmJiAoKHR5cGVvZiBjYWxsID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShjYWxsKSkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pdGVyYXRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiKTtcblxudmFyIF9pdGVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pdGVyYXRvcik7XG5cbnZhciBfc3ltYm9sID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sXCIpO1xuXG52YXIgX3N5bWJvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2wpO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIF9pdGVyYXRvcjIuZGVmYXVsdCA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YoX2l0ZXJhdG9yMi5kZWZhdWx0KSA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL193a3MtZXh0JykuZignaXRlcmF0b3InKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCAgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbihpdGVyYXRlZCl7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGluZGV4ID0gdGhpcy5faVxuICAgICwgcG9pbnQ7XG4gIGlmKGluZGV4ID49IE8ubGVuZ3RoKXJldHVybiB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZX07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7dmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZX07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxuICAgICAgLCBsID0gcy5sZW5ndGhcbiAgICAgICwgYSwgYjtcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJdGVyYXRvcnMgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgJGVudHJpZXMgICA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWRcbiAgICAsICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlXG4gICAgLCBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRhbnlOYXRpdmUpe1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKSk7XG4gICAgaWYoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpe1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBkZXNjcmlwdG9yICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZFBzICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgRW1wdHkgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgUFJPVE9UWVBFICAgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbigpe1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKVxuICAgICwgaSAgICAgID0gZW51bUJ1Z0tleXMubGVuZ3RoXG4gICAgLCBsdCAgICAgPSAnPCdcbiAgICAsIGd0ICAgICA9ICc+J1xuICAgICwgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUoaS0tKWRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKXtcbiAgdmFyIHJlc3VsdDtcbiAgaWYoTyAhPT0gbnVsbCl7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkUCAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpe1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgICA9IGdldEtleXMoUHJvcGVydGllcylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpID0gMFxuICAgICwgUDtcbiAgd2hpbGUobGVuZ3RoID4gaSlkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pe1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaGFzICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b0lPYmplY3QgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKVxuICAsIElFX1BST1RPICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIG5hbWVzKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwga2V5O1xuICBmb3Ioa2V5IGluIE8paWYoa2V5ICE9IElFX1BST1RPKWhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpe1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIHRvSW5kZXggICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KCR0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcbiAgICAgICwgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I3RvSW5kZXggaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKXtcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWF4ICAgICAgID0gTWF0aC5tYXhcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCl7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG4gIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpZGVmKGl0LCBUQUcsIHtjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWd9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHN0b3JlICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJylcbiAgLCB1aWQgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCBTeW1ib2wgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sXG4gICwgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGlkZSAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIEl0ZXJhdG9ycyAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxuZm9yKHZhciBjb2xsZWN0aW9ucyA9IFsnTm9kZUxpc3QnLCAnRE9NVG9rZW5MaXN0JywgJ01lZGlhTGlzdCcsICdTdHlsZVNoZWV0TGlzdCcsICdDU1NSdWxlTGlzdCddLCBpID0gMDsgaSA8IDU7IGkrKyl7XG4gIHZhciBOQU1FICAgICAgID0gY29sbGVjdGlvbnNbaV1cbiAgICAsIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV1cbiAgICAsIHByb3RvICAgICAgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZihwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10paGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKVxuICAsIHN0ZXAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIEl0ZXJhdG9ycyAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIHRvSU9iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGtpbmQgID0gdGhpcy5fa1xuICAgICwgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgREVTQ1JJUFRPUlMgICAgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIE1FVEEgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWVxuICAsICRmYWlscyAgICAgICAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKVxuICAsIHNoYXJlZCAgICAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCB1aWQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgd2tzICAgICAgICAgICAgPSByZXF1aXJlKCcuL193a3MnKVxuICAsIHdrc0V4dCAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpXG4gICwgd2tzRGVmaW5lICAgICAgPSByZXF1aXJlKCcuL193a3MtZGVmaW5lJylcbiAgLCBrZXlPZiAgICAgICAgICA9IHJlcXVpcmUoJy4vX2tleW9mJylcbiAgLCBlbnVtS2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpXG4gICwgaXNBcnJheSAgICAgICAgPSByZXF1aXJlKCcuL19pcy1hcnJheScpXG4gICwgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGNyZWF0ZURlc2MgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgX2NyZWF0ZSAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBnT1BORXh0ICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpXG4gICwgJEdPUEQgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpXG4gICwgJERQICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsICRrZXlzICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUEQgICAgICAgICAgID0gJEdPUEQuZlxuICAsIGRQICAgICAgICAgICAgID0gJERQLmZcbiAgLCBnT1BOICAgICAgICAgICA9IGdPUE5FeHQuZlxuICAsICRTeW1ib2wgICAgICAgID0gZ2xvYmFsLlN5bWJvbFxuICAsICRKU09OICAgICAgICAgID0gZ2xvYmFsLkpTT05cbiAgLCBfc3RyaW5naWZ5ICAgICA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeVxuICAsIFBST1RPVFlQRSAgICAgID0gJ3Byb3RvdHlwZSdcbiAgLCBISURERU4gICAgICAgICA9IHdrcygnX2hpZGRlbicpXG4gICwgVE9fUFJJTUlUSVZFICAgPSB3a3MoJ3RvUHJpbWl0aXZlJylcbiAgLCBpc0VudW0gICAgICAgICA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlXG4gICwgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpXG4gICwgQWxsU3ltYm9scyAgICAgPSBzaGFyZWQoJ3N5bWJvbHMnKVxuICAsIE9QU3ltYm9scyAgICAgID0gc2hhcmVkKCdvcC1zeW1ib2xzJylcbiAgLCBPYmplY3RQcm90byAgICA9IE9iamVjdFtQUk9UT1RZUEVdXG4gICwgVVNFX05BVElWRSAgICAgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nXG4gICwgUU9iamVjdCAgICAgICAgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIGRQKHRoaXMsICdhJywge3ZhbHVlOiA3fSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbihpdCwga2V5LCBEKXtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmKHByb3RvRGVzYylkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbih0YWcpe1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKXtcbiAgaWYoaXQgPT09IE9iamVjdFByb3RvKSRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmKGhhcyhBbGxTeW1ib2xzLCBrZXkpKXtcbiAgICBpZighRC5lbnVtZXJhYmxlKXtcbiAgICAgIGlmKCFoYXMoaXQsIEhJRERFTikpZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSlpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHtlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKX0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApe1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSlcbiAgICAsIGkgICAgPSAwXG4gICAgLCBsID0ga2V5cy5sZW5ndGhcbiAgICAsIGtleTtcbiAgd2hpbGUobCA+IGkpJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCl7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KXtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gIGl0ICA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSlyZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKUQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICB2YXIgbmFtZXMgID0gZ09QTih0b0lPYmplY3QoaXQpKVxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGkgICAgICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSl7XG4gICAgaWYoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKXJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCl7XG4gIHZhciBJU19PUCAgPSBpdCA9PT0gT2JqZWN0UHJvdG9cbiAgICAsIG5hbWVzICA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKVxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGkgICAgICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSl7XG4gICAgaWYoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKXJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYoIVVTRV9OQVRJVkUpe1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCl7XG4gICAgaWYodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICBpZih0aGlzID09PSBPYmplY3RQcm90bykkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZihoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKXRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKXNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0fSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgICA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mICA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZihERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi9fbGlicmFyeScpKXtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24obmFtZSl7XG4gICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcbiAgfVxufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7U3ltYm9sOiAkU3ltYm9sfSk7XG5cbmZvcih2YXIgc3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBpID0gMDsgc3ltYm9scy5sZW5ndGggPiBpOyApd2tzKHN5bWJvbHNbaSsrXSk7XG5cbmZvcih2YXIgc3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGkgPSAwOyBzeW1ib2xzLmxlbmd0aCA+IGk7ICl3a3NEZWZpbmUoc3ltYm9sc1tpKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbihrZXkpe1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioa2V5KXtcbiAgICBpZihpc1N5bWJvbChrZXkpKXJldHVybiBrZXlPZihTeW1ib2xSZWdpc3RyeSwga2V5KTtcbiAgICB0aHJvdyBUeXBlRXJyb3Ioa2V5ICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24oKXsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSBmYWxzZTsgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbigpe1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7YTogU30pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCl7XG4gICAgaWYoaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgdmFyIGFyZ3MgPSBbaXRdXG4gICAgICAsIGkgICAgPSAxXG4gICAgICAsIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUoYXJndW1lbnRzLmxlbmd0aCA+IGkpYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYodHlwZW9mIHJlcGxhY2VyID09ICdmdW5jdGlvbicpJHJlcGxhY2VyID0gcmVwbGFjZXI7XG4gICAgaWYoJHJlcGxhY2VyIHx8ICFpc0FycmF5KHJlcGxhY2VyKSlyZXBsYWNlciA9IGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xuICAgICAgaWYoJHJlcGxhY2VyKXZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZighaXNTeW1ib2wodmFsdWUpKXJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBNRVRBICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJylcbiAgLCBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgaGFzICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHNldERlc2MgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGlkICAgICAgID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uKGl0KXtcbiAgc2V0RGVzYyhpdCwgTUVUQSwge3ZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfX0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbihpdCl7XG4gIGlmKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSlzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogICAgICBNRVRBLFxuICBORUVEOiAgICAgZmFsc2UsXG4gIGZhc3RLZXk6ICBmYXN0S2V5LFxuICBnZXRXZWFrOiAgZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgd2tzRXh0ICAgICAgICAgPSByZXF1aXJlKCcuL193a3MtZXh0JylcbiAgLCBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZihuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKWRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHt2YWx1ZTogd2tzRXh0LmYobmFtZSl9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0S2V5cyAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBlbCl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwga2V5cyAgID0gZ2V0S2V5cyhPKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobGVuZ3RoID4gaW5kZXgpaWYoT1trZXkgPSBrZXlzW2luZGV4KytdXSA9PT0gZWwpcmV0dXJuIGtleTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19rZXlvZi5qc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgcmVzdWx0ICAgICA9IGdldEtleXMoaXQpXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZihnZXRTeW1ib2xzKXtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpXG4gICAgICAsIGlzRW51bSAgPSBwSUUuZlxuICAgICAgLCBpICAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUoc3ltYm9scy5sZW5ndGggPiBpKWlmKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKXJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKXtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBnT1BOICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmZcbiAgLCB0b1N0cmluZyAgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uKGl0KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcElFICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCBnT1BEICAgICAgICAgICA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApe1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoaGFzKE8sIFApKXJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qc1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnb2JzZXJ2YWJsZScpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3NldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIik7XG5cbnZhciBfc2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9jcmVhdGVcIik7XG5cbnZhciBfY3JlYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZSk7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyAodHlwZW9mIHN1cGVyQ2xhc3MgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKHN1cGVyQ2xhc3MpKSk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSAoMCwgX2NyZWF0ZTIuZGVmYXVsdCkoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZjIuZGVmYXVsdCA/ICgwLCBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanNcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Quc2V0UHJvdG90eXBlT2Y7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtzZXRQcm90b3R5cGVPZjogcmVxdWlyZSgnLi9fc2V0LXByb3RvJykuc2V0fSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGNoZWNrID0gZnVuY3Rpb24oTywgcHJvdG8pe1xuICBhbk9iamVjdChPKTtcbiAgaWYoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCl0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmdW5jdGlvbih0ZXN0LCBidWdneSwgc2V0KXtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldCA9IHJlcXVpcmUoJy4vX2N0eCcpKEZ1bmN0aW9uLmNhbGwsIHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgICAgc2V0KHRlc3QsIFtdKTtcbiAgICAgICAgYnVnZ3kgPSAhKHRlc3QgaW5zdGFuY2VvZiBBcnJheSk7XG4gICAgICB9IGNhdGNoKGUpeyBidWdneSA9IHRydWU7IH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90byl7XG4gICAgICAgIGNoZWNrKE8sIHByb3RvKTtcbiAgICAgICAgaWYoYnVnZ3kpTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICAgICAgZWxzZSBzZXQoTywgcHJvdG8pO1xuICAgICAgICByZXR1cm4gTztcbiAgICAgIH07XG4gICAgfSh7fSwgZmFsc2UpIDogdW5kZWZpbmVkKSxcbiAgY2hlY2s6IGNoZWNrXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXByb3RvLmpzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGUoUCwgRCl7XG4gIHJldHVybiAkT2JqZWN0LmNyZWF0ZShQLCBEKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4vLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge2NyZWF0ZTogcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuL2xpYi9sb2NhdGlvbk9yaWdpbi5qcycpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2xlYWRzJykuZGVmYXVsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbGVhZHMtcm91dGVyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIoZnVuY3Rpb24oKSB7XHJcblx0aWYoIXdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pIHtcclxuXHRcdHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgKyAod2luZG93LmxvY2F0aW9uLnBvcnQgPyAnOicgKyB3aW5kb3cubG9jYXRpb24ucG9ydDogJycpO1xyXG5cdH1cclxufSkoKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbGVhZHMtcm91dGVyL2xpYi9sb2NhdGlvbk9yaWdpbi5qc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO3ZhciBfUm91dGVyPXJlcXVpcmUoJy4vUm91dGVyJyk7dmFyIF9Sb3V0ZXIyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JvdXRlcik7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9O31mdW5jdGlvbiBsZWFkcygpe31sZWFkcy5Sb3V0ZXI9ZnVuY3Rpb24ob3B0aW9ucyl7cmV0dXJuIG5ldyBfUm91dGVyMi5kZWZhdWx0KG9wdGlvbnMpO307ZXhwb3J0cy5kZWZhdWx0PWxlYWRzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sZWFkcy1yb3V0ZXIvbGliL2xlYWRzLmpzXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7dmFyIF9leHRlbmRzPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHRhcmdldCl7Zm9yKHZhciBpPTE7aTxhcmd1bWVudHMubGVuZ3RoO2krKyl7dmFyIHNvdXJjZT1hcmd1bWVudHNbaV07Zm9yKHZhciBrZXkgaW4gc291cmNlKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLGtleSkpe3RhcmdldFtrZXldPXNvdXJjZVtrZXldO319fXJldHVybiB0YXJnZXQ7fTt2YXIgX3R5cGVvZj10eXBlb2YgU3ltYm9sPT09XCJmdW5jdGlvblwiJiZ0eXBlb2YgU3ltYm9sLml0ZXJhdG9yPT09XCJzeW1ib2xcIj9mdW5jdGlvbihvYmope3JldHVybiB0eXBlb2Ygb2JqO306ZnVuY3Rpb24ob2JqKXtyZXR1cm4gb2JqJiZ0eXBlb2YgU3ltYm9sPT09XCJmdW5jdGlvblwiJiZvYmouY29uc3RydWN0b3I9PT1TeW1ib2w/XCJzeW1ib2xcIjp0eXBlb2Ygb2JqO307dmFyIF9jcmVhdGVDbGFzcz1mdW5jdGlvbigpe2Z1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LHByb3BzKXtmb3IodmFyIGk9MDtpPHByb3BzLmxlbmd0aDtpKyspe3ZhciBkZXNjcmlwdG9yPXByb3BzW2ldO2Rlc2NyaXB0b3IuZW51bWVyYWJsZT1kZXNjcmlwdG9yLmVudW1lcmFibGV8fGZhbHNlO2Rlc2NyaXB0b3IuY29uZmlndXJhYmxlPXRydWU7aWYoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpZGVzY3JpcHRvci53cml0YWJsZT10cnVlO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsZGVzY3JpcHRvci5rZXksZGVzY3JpcHRvcik7fX1yZXR1cm4gZnVuY3Rpb24oQ29uc3RydWN0b3IscHJvdG9Qcm9wcyxzdGF0aWNQcm9wcyl7aWYocHJvdG9Qcm9wcylkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSxwcm90b1Byb3BzKTtpZihzdGF0aWNQcm9wcylkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLHN0YXRpY1Byb3BzKTtyZXR1cm4gQ29uc3RydWN0b3I7fTt9KCk7dmFyIF9VUkw9cmVxdWlyZSgnLi9VUkwnKTt2YXIgX1VSTDI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVVJMKTt2YXIgX3BhdGhUb1JlZ2V4cD1yZXF1aXJlKCdwYXRoLXRvLXJlZ2V4cCcpO3ZhciBfcGF0aFRvUmVnZXhwMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoVG9SZWdleHApO3ZhciBfbmFtZXNwYWNlPXJlcXVpcmUoJy4vbmFtZXNwYWNlJyk7dmFyIF9uYW1lc3BhY2UyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX25hbWVzcGFjZSk7dmFyIF9SZXF1ZXN0PXJlcXVpcmUoJy4vUmVxdWVzdCcpO3ZhciBfUmVxdWVzdDI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUmVxdWVzdCk7dmFyIF9SZXNwb25zZT1yZXF1aXJlKCcuL1Jlc3BvbnNlJyk7dmFyIF9SZXNwb25zZTI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUmVzcG9uc2UpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLENvbnN0cnVjdG9yKXtpZighKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO319dmFyIHByaXZhdGVzPSgwLF9uYW1lc3BhY2UyLmRlZmF1bHQpKCk7dmFyIFJvdXRlcj1mdW5jdGlvbigpe2Z1bmN0aW9uIFJvdXRlcihvcHRpb25zKXtfY2xhc3NDYWxsQ2hlY2sodGhpcyxSb3V0ZXIpO3ZhciBzZWxmPXByaXZhdGVzKHRoaXMpO3NlbGYuaGFuZGxlcnM9W107c2VsZi5lcnJvckhhbmRsZXJzPVtdO3NlbGYucGFyYW1IYW5kbGVycz17fTtzZWxmLmRlZmF1bHRzPXt9O3ZhciBjYXNlU2Vuc2l0aXZlPWZhbHNlO3ZhciBtZXJnZVBhcmFtcz1mYWxzZTt2YXIgc3RyaWN0PWZhbHNlO3ZhciBhZGRIaXN0b3J5PXRydWU7dmFyIGNoYW5nZVBhdGg9dHJ1ZTt2YXIgdHJhbnNpdGlvbj10cnVlO09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHNlbGYuZGVmYXVsdHMse2Nhc2VTZW5zaXRpdmU6e2dldDpmdW5jdGlvbiBnZXQoKXtyZXR1cm4gY2FzZVNlbnNpdGl2ZTt9LHNldDpmdW5jdGlvbiBzZXQodmFsdWUpe2Nhc2VTZW5zaXRpdmU9Qm9vbGVhbih2YWx1ZSk7fSxlbnVtZXJhYmxlOnRydWV9LG1lcmdlUGFyYW1zOntnZXQ6ZnVuY3Rpb24gZ2V0KCl7cmV0dXJuIG1lcmdlUGFyYW1zO30sc2V0OmZ1bmN0aW9uIHNldCh2YWx1ZSl7bWVyZ2VQYXJhbXM9Qm9vbGVhbih2YWx1ZSk7fSxlbnVtZXJhYmxlOnRydWV9LHN0cmljdDp7Z2V0OmZ1bmN0aW9uIGdldCgpe3JldHVybiBzdHJpY3Q7fSxzZXQ6ZnVuY3Rpb24gc2V0KHZhbHVlKXtzdHJpY3Q9Qm9vbGVhbih2YWx1ZSk7fSxlbnVtZXJhYmxlOnRydWV9LGFkZEhpc3Rvcnk6e2dldDpmdW5jdGlvbiBnZXQoKXtyZXR1cm4gYWRkSGlzdG9yeTt9LHNldDpmdW5jdGlvbiBzZXQodmFsdWUpe2FkZEhpc3Rvcnk9Qm9vbGVhbih2YWx1ZSk7fSxlbnVtZXJhYmxlOnRydWV9LGNoYW5nZVBhdGg6e2dldDpmdW5jdGlvbiBnZXQoKXtyZXR1cm4gY2hhbmdlUGF0aDt9LHNldDpmdW5jdGlvbiBzZXQodmFsdWUpe2NoYW5nZVBhdGg9Qm9vbGVhbih2YWx1ZSk7fSxlbnVtZXJhYmxlOnRydWV9LHRyYW5zaXRpb246e2dldDpmdW5jdGlvbiBnZXQoKXtyZXR1cm4gdHJhbnNpdGlvbjt9LHNldDpmdW5jdGlvbiBzZXQodmFsdWUpe3RyYW5zaXRpb249Qm9vbGVhbih2YWx1ZSk7fSxlbnVtZXJhYmxlOnRydWV9fSk7Zm9yKHZhciBtZXRob2QgaW4gcHJpdmF0ZU1ldGhvZHMpe3NlbGZbbWV0aG9kXT1wcml2YXRlTWV0aG9kc1ttZXRob2RdLmJpbmQodGhpcyk7fXRoaXMuZGVmYXVsdHM9b3B0aW9uczt9Um91dGVyLnByb3RvdHlwZS5kaXNwYXRjaD1mdW5jdGlvbiBkaXNwYXRjaCh1cmxTdHJpbmcsbWV0aG9kLG9wdGlvbnMpe3ZhciBzZWxmPXByaXZhdGVzKHRoaXMpO2lmKHR5cGVvZiB1cmxTdHJpbmchPT0nc3RyaW5nJylyZXR1cm47aWYodHlwZW9mIG1ldGhvZCE9PSdzdHJpbmcnKW1ldGhvZD0nYWxsJztpZigodHlwZW9mIG9wdGlvbnM9PT0ndW5kZWZpbmVkJz8ndW5kZWZpbmVkJzpfdHlwZW9mKG9wdGlvbnMpKSE9PSdvYmplY3QnfHxvcHRpb25zPT09bnVsbClvcHRpb25zPXt9O2lmKHR5cGVvZiBvcHRpb25zLmFkZEhpc3RvcnkhPT0nYm9vbGVhbicpb3B0aW9ucy5hZGRIaXN0b3J5PXNlbGYuZGVmYXVsdHMuYWRkSGlzdG9yeTtpZih0eXBlb2Ygb3B0aW9ucy5jaGFuZ2VQYXRoIT09J2Jvb2xlYW4nKW9wdGlvbnMuY2hhbmdlUGF0aD1zZWxmLmRlZmF1bHRzLmNoYW5nZVBhdGg7aWYodHlwZW9mIG9wdGlvbnMudHJhbnNpdGlvbiE9PSdib29sZWFuJylvcHRpb25zLnRyYW5zaXRpb249c2VsZi5kZWZhdWx0cy50cmFuc2l0aW9uO3ZhciByZXF1ZXN0PW5ldyBfUmVxdWVzdDIuZGVmYXVsdCgpO3ZhciByZXNwb25zZT1uZXcgX1Jlc3BvbnNlMi5kZWZhdWx0KCk7dmFyIHVybD1fVVJMMi5kZWZhdWx0LnBhcnNlKHVybFN0cmluZyk7aWYodXJsLm9yaWdpbiE9PWxvY2F0aW9uLm9yaWdpbil7aWYob3B0aW9ucy50cmFuc2l0aW9uKWxvY2F0aW9uLmhyZWY9dXJsLmhyZWY7cmV0dXJuO31yZXF1ZXN0LmRpc3BhdGNoZXI9dGhpcztyZXF1ZXN0Lm9yaWdpbmFsVXJsPXVybFN0cmluZztyZXF1ZXN0Lm1ldGhvZD1tZXRob2Q7cmVxdWVzdC5kYXRhPW9wdGlvbnMuZGF0YTtfZXh0ZW5kcyhyZXF1ZXN0LHVybCk7dmFyIHN0YXRlPXtwYXRoOnVybFN0cmluZ307aWYob3B0aW9ucy5hZGRIaXN0b3J5JiZvcHRpb25zLmNoYW5nZVBhdGgpe3dpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShzdGF0ZSxudWxsLHVybC5ocmVmKTt9ZWxzZSBpZihvcHRpb25zLmFkZEhpc3RvcnkmJm9wdGlvbnMuY2hhbmdlUGF0aD09PWZhbHNlKXt3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoc3RhdGUsbnVsbCxsb2NhdGlvbi5ocmVmKTt9ZWxzZSBpZihvcHRpb25zLmFkZEhpc3Rvcnk9PT1mYWxzZSYmb3B0aW9ucy5jaGFuZ2VQYXRoKXt3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoc3RhdGUsbnVsbCx1cmwuaHJlZik7fXNlbGYuZ29HZXRDYWxsZWRIYW5kbGVyPXNlbGYuZ2ZHZXRDYWxsZWRIYW5kbGVyKHVybC5wYXRobmFtZSxtZXRob2QsJycse30pO3NlbGYucnVuTmV4dEhhbmRsZXIocmVxdWVzdCxyZXNwb25zZSk7fTtSb3V0ZXIucHJvdG90eXBlLnVzZT1mdW5jdGlvbiB1c2UoKXtpZihhcmd1bWVudHMubGVuZ3RoPT09MClyZXR1cm4gdGhpczt2YXIgcGF0aD0nLyc7dmFyIHR5cGU9J21pZGRsZXdhcmUnO3ZhciBmaXJzdFBhcmFtPWFyZ3VtZW50c1swXTtpZihmaXJzdFBhcmFtIT09dW5kZWZpbmVkJiZmaXJzdFBhcmFtIT09bnVsbCYmdHlwZW9mIGZpcnN0UGFyYW0hPT0nZnVuY3Rpb24nJiYhKGZpcnN0UGFyYW0gaW5zdGFuY2VvZiBSb3V0ZXIpKXtwYXRoPWZpcnN0UGFyYW07QXJyYXkucHJvdG90eXBlLnNoaWZ0LmJpbmQoYXJndW1lbnRzKSgpO312YXIgc2VsZj1wcml2YXRlcyh0aGlzKTt2YXIgbGlzdGVuZXJzPVtdO0FycmF5LnByb3RvdHlwZS5mb3JFYWNoLmJpbmQoYXJndW1lbnRzKShmdW5jdGlvbihhcmcpe2lmKHR5cGVvZiBhcmchPT0nZnVuY3Rpb24nJiYhKGFyZyBpbnN0YW5jZW9mIFJvdXRlcikpe3JldHVybjt9aWYodHlwZW9mIGFyZz09PSdmdW5jdGlvbicmJmFyZy5sZW5ndGg9PT00KXtzZWxmLnJlZ2lzdGVyKHtwYXRoOnBhdGgsdHlwZTp0eXBlLGxpc3RlbmVyOmFyZ30sJ2Vycm9yJyk7cmV0dXJuO31saXN0ZW5lcnMucHVzaChhcmcpO30pO2lmKGxpc3RlbmVycy5sZW5ndGghPT0wKXtzZWxmLnJlZ2lzdGVyKHtwYXRoOnBhdGgsdHlwZTp0eXBlLGxpc3RlbmVyczpsaXN0ZW5lcnN9KTt9cmV0dXJuIHRoaXM7fTtSb3V0ZXIucHJvdG90eXBlLmFsbD1mdW5jdGlvbiBhbGwocGF0aCl7cHJpdmF0ZXModGhpcykuTUVUSE9EKHBhdGgsJ2FsbCcsYXJndW1lbnRzKTtyZXR1cm4gdGhpczt9O1JvdXRlci5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uIGdldChwYXRoKXtwcml2YXRlcyh0aGlzKS5NRVRIT0QocGF0aCwnZ2V0Jyxhcmd1bWVudHMpO3JldHVybiB0aGlzO307Um91dGVyLnByb3RvdHlwZS5wb3N0PWZ1bmN0aW9uIHBvc3QocGF0aCl7cHJpdmF0ZXModGhpcykuTUVUSE9EKHBhdGgsJ3Bvc3QnLGFyZ3VtZW50cyk7cmV0dXJuIHRoaXM7fTtSb3V0ZXIucHJvdG90eXBlLmhlYWQ9ZnVuY3Rpb24gaGVhZChwYXRoKXtwcml2YXRlcyh0aGlzKS5NRVRIT0QocGF0aCwnaGVhZCcsYXJndW1lbnRzKTtyZXR1cm4gdGhpczt9O1JvdXRlci5wcm90b3R5cGUucHV0PWZ1bmN0aW9uIHB1dChwYXRoKXtwcml2YXRlcyh0aGlzKS5NRVRIT0QocGF0aCwncHV0Jyxhcmd1bWVudHMpO3JldHVybiB0aGlzO307Um91dGVyLnByb3RvdHlwZS5kZWxldGU9ZnVuY3Rpb24gX2RlbGV0ZShwYXRoKXtwcml2YXRlcyh0aGlzKS5NRVRIT0QocGF0aCwnZGVsZXRlJyxhcmd1bWVudHMpO3JldHVybiB0aGlzO307Um91dGVyLnByb3RvdHlwZS5vcHRpb25zPWZ1bmN0aW9uIG9wdGlvbnMocGF0aCl7cHJpdmF0ZXModGhpcykuTUVUSE9EKHBhdGgsJ29wdGlvbnMnLGFyZ3VtZW50cyk7cmV0dXJuIHRoaXM7fTtSb3V0ZXIucHJvdG90eXBlLnJvdXRlPWZ1bmN0aW9uIHJvdXRlKHBhdGgpe3ZhciBfdGhpcz10aGlzO3ZhciByZXQ9e307WydhbGwnLCdnZXQnLCdwb3N0JywnaGVhZCcsJ3B1dCcsJ2RlbGV0ZScsJ29wdGlvbnMnXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCl7cmV0W21ldGhvZF09ZnVuY3Rpb24oKXt0aGlzW21ldGhvZF0uYmluZCh0aGlzLHBhdGgpLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gcmV0O30uYmluZChfdGhpcyk7fSk7cmV0dXJuIHJldDt9O1JvdXRlci5wcm90b3R5cGUucGFyYW09ZnVuY3Rpb24gcGFyYW0obmFtZSxjYWxsYmFjayl7aWYodHlwZW9mIGNhbGxiYWNrIT09J2Z1bmN0aW9uJyl7cmV0dXJuO312YXIgc2VsZj1wcml2YXRlcyh0aGlzKTt2YXIgbmFtZXM9bnVsbDtpZihBcnJheS5pc0FycmF5KG5hbWUpKXtuYW1lcz1uYW1lO31lbHNlIHtuYW1lcz1bbmFtZV07fW5hbWVzLmZvckVhY2goZnVuY3Rpb24obmFtZSl7aWYodHlwZW9mIG5hbWUhPT0nc3RyaW5nJyl7cmV0dXJuO31pZihuYW1lIGluIHNlbGYucGFyYW1IYW5kbGVycyl7c2VsZi5wYXJhbUhhbmRsZXJzW25hbWVdLmxpc3RlbmVycy5wdXNoKGNhbGxiYWNrKTtyZXR1cm47fXNlbGYucGFyYW1IYW5kbGVyc1tuYW1lXT17bGlzdGVuZXJzOltjYWxsYmFja10sdHlwZToncGFyYW1ldGVyJ307fSk7fTtfY3JlYXRlQ2xhc3MoUm91dGVyLFt7a2V5OidkZWZhdWx0cycsZ2V0OmZ1bmN0aW9uIGdldCgpe3JldHVybiBwcml2YXRlcyh0aGlzKS5kZWZhdWx0czt9LHNldDpmdW5jdGlvbiBzZXQob2JqKXt2YXIgc2VsZj1wcml2YXRlcyh0aGlzKTtpZigodHlwZW9mIG9iaj09PSd1bmRlZmluZWQnPyd1bmRlZmluZWQnOl90eXBlb2Yob2JqKSkhPT0nb2JqZWN0J3x8b2JqPT09bnVsbClyZXR1cm47Zm9yKHZhciBwcm9wIGluIHNlbGYuZGVmYXVsdHMpe2lmKCEocHJvcCBpbiBvYmopKWNvbnRpbnVlO3NlbGYuZGVmYXVsdHNbcHJvcF09b2JqW3Byb3BdO319fV0pO3JldHVybiBSb3V0ZXI7fSgpO2V4cG9ydHMuZGVmYXVsdD1Sb3V0ZXI7dmFyIHByaXZhdGVNZXRob2RzPXtNRVRIT0Q6ZnVuY3Rpb24gTUVUSE9EKHBhdGgsbWV0aG9kLGFyZ3Mpe2lmKHBhdGg9PT11bmRlZmluZWR8fHBhdGg9PT1udWxsKXtyZXR1cm47fWlmKGFyZ3MubGVuZ3RoPT09MSl7dGhpcy5kaXNwYXRjaChwYXRoLG1ldGhvZCk7cmV0dXJuO31pZihhcmdzLmxlbmd0aD09PTImJl90eXBlb2YoYXJnc1sxXSk9PT0nb2JqZWN0JyYmYXJnc1sxXSE9PW51bGwmJiEoYXJnc1sxXSBpbnN0YW5jZW9mIFJvdXRlcikpe3RoaXMuZGlzcGF0Y2gocGF0aCxtZXRob2QsYXJnc1sxXSk7cmV0dXJuO312YXIgc2VsZj1wcml2YXRlcyh0aGlzKTt2YXIgdHlwZT0nbWV0aG9kJzt2YXIgbGlzdGVuZXJzPVtdO0FycmF5LnByb3RvdHlwZS5zaGlmdC5iaW5kKGFyZ3MpKCk7QXJyYXkucHJvdG90eXBlLmZvckVhY2guYmluZChhcmdzKShmdW5jdGlvbihhcmcpe2lmKHR5cGVvZiBhcmchPT0nZnVuY3Rpb24nJiYhKGFyZyBpbnN0YW5jZW9mIFJvdXRlcikpe3JldHVybjt9aWYodHlwZW9mIGFyZz09PSdmdW5jdGlvbicmJmFyZy5sZW5ndGg9PT00KXtzZWxmLnJlZ2lzdGVyKHtwYXRoOnBhdGgsdHlwZTp0eXBlLG1ldGhvZDptZXRob2QsbGlzdGVuZXI6YXJnfSwnZXJyb3InKTtyZXR1cm47fWxpc3RlbmVycy5wdXNoKGFyZyk7fSk7aWYobGlzdGVuZXJzLmxlbmd0aCE9PTApe3NlbGYucmVnaXN0ZXIoe3BhdGg6cGF0aCx0eXBlOnR5cGUsbWV0aG9kOm1ldGhvZCxsaXN0ZW5lcnM6bGlzdGVuZXJzfSk7fX0sZ2V0UmVtYWluZGVyOmZ1bmN0aW9uIGdldFJlbWFpbmRlcihtYXRjaGVkKXtpZihtYXRjaGVkLmluZGV4IT09MCl7cmV0dXJuIG51bGw7fXZhciByZW1haW5kZXI9bWF0Y2hlZC5pbnB1dC5yZXBsYWNlKG1hdGNoZWRbMF0sJycpO2lmKG1hdGNoZWRbMF0uc2xpY2UoLTEpIT09Jy8nJiZyZW1haW5kZXJbMF0hPT0nLycmJnJlbWFpbmRlciE9PScnKXtyZXR1cm4gbnVsbDt9cmV0dXJuIF9VUkwyLmRlZmF1bHQuYWRkRmlyc3RTbGFzaChyZW1haW5kZXIpO30sZ2V0UGFyYW1zOmZ1bmN0aW9uIGdldFBhcmFtcyhtYXRjaGVkLGtleXMscGFyZW50UGFyYW1zKXt2YXIgc2VsZj1wcml2YXRlcyh0aGlzKTt2YXIgcGFyYW1zPXNlbGYuZGVmYXVsdHMubWVyZ2VQYXJhbXM/X2V4dGVuZHMoe30scGFyZW50UGFyYW1zKTp7fTttYXRjaGVkPW1hdGNoZWQuY29uY2F0KFtdKTttYXRjaGVkLnNoaWZ0KCk7aWYobWF0Y2hlZC5sZW5ndGg9PT0wKXtyZXR1cm4gcGFyYW1zO31rZXlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUpe2lmKCh0eXBlb2YgdmFsdWU9PT0ndW5kZWZpbmVkJz8ndW5kZWZpbmVkJzpfdHlwZW9mKHZhbHVlKSkhPT0nb2JqZWN0Jyl7cmV0dXJuO31wYXJhbXNbdmFsdWUubmFtZV09bWF0Y2hlZC5zaGlmdCgpO30pO3JldHVybiBwYXJhbXM7fSxnZXRDaGFuZ2VkUGFyYW1LZXlzOmZ1bmN0aW9uIGdldENoYW5nZWRQYXJhbUtleXMocGFyYW1zT2JzZXJ2ZXIscGFyYW1zKXt2YXIga2V5cz1bXTtmb3IodmFyIHByb3AgaW4gcGFyYW1zKXtpZihwYXJhbXNPYnNlcnZlcltwcm9wXSE9PXBhcmFtc1twcm9wXSl7cGFyYW1zT2JzZXJ2ZXJbcHJvcF09cGFyYW1zW3Byb3BdO2tleXMucHVzaChwcm9wKTt9fXJldHVybiBrZXlzO30sZ2V0UGFyYW1IYW5kbGVyczpmdW5jdGlvbiBnZXRQYXJhbUhhbmRsZXJzKGtleXMscmVxKXt2YXIgc2VsZj1wcml2YXRlcyh0aGlzKTt2YXIgcGFyYW1IYW5kbGVycz1bXTtrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KXtpZihrZXkgaW4gc2VsZi5wYXJhbUhhbmRsZXJzPT09ZmFsc2Upe3JldHVybjt9cGFyYW1IYW5kbGVycy5wdXNoKHtoYW5kbGVyOnt0eXBlOnNlbGYucGFyYW1IYW5kbGVyc1trZXldLnR5cGUsbGlzdGVuZXJzOnNlbGYucGFyYW1IYW5kbGVyc1trZXldLmxpc3RlbmVyc30scGFyYW1WYWx1ZTpyZXEucGFyYW1zW2tleV0scmVxOnJlcX0pO30pO3JldHVybiBwYXJhbUhhbmRsZXJzO30sZ2V0TWF0Y2hlZE1pZGRsZXdhcmVIYW5kbGVyczpmdW5jdGlvbiBnZXRNYXRjaGVkTWlkZGxld2FyZUhhbmRsZXJzKGhhbmRsZXIscmVxLHJlbWFpbmRlcil7aWYodHlwZW9mIGhhbmRsZXIubGlzdGVuZXI9PT0nZnVuY3Rpb24nKXtyZXR1cm4gW3toYW5kbGVyOmhhbmRsZXIscmVxOnJlcX1dO31pZihoYW5kbGVyLmxpc3RlbmVyIGluc3RhbmNlb2YgUm91dGVyKXtyZXR1cm4gaGFuZGxlci5saXN0ZW5lci5nZXRNYXRjaGVkSGFuZGxlcnMocmVtYWluZGVyLHJlcS5tZXRob2QscmVxLmJhc2VVcmwscmVxLnBhcmFtcyk7fX0sZ2V0TWF0Y2hlZEhhbmRsZXJzOmZ1bmN0aW9uIGdldE1hdGNoZWRIYW5kbGVycyhwYXRoLG1ldGhvZCxfYmFzZVVybCl7dmFyIHNlbGY9cHJpdmF0ZXModGhpcyk7dmFyIG1hdGNoZWRIYW5kbGVycz1bXTtzZWxmLmhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24oaGFuZGxlcil7dmFyIGJhc2VVcmw9X2Jhc2VVcmw7dmFyIG1hdGNoZWQ9aGFuZGxlci5wYXR0ZXJuLmV4ZWMocGF0aCk7aWYobWF0Y2hlZD09PW51bGwpe3JldHVybjt9aWYoaGFuZGxlci50eXBlPT09J21pZGRsZXdhcmUnKXt2YXIgcmVtYWluZGVyPXNlbGYuZ2V0UmVtYWluZGVyKG1hdGNoZWQpO2lmKHJlbWFpbmRlcj09PW51bGwpe3JldHVybjt9YmFzZVVybCs9X1VSTDIuZGVmYXVsdC5yZW1vdmVUcmFpbGluZ1NsYXNoKG1hdGNoZWRbMF0pO21hdGNoZWRIYW5kbGVycy5wdXNoKHtoYW5kbGVyOmhhbmRsZXIsbWF0Y2hlZDptYXRjaGVkLGJhc2VVcmw6YmFzZVVybCxyZW1haW5kZXI6cmVtYWluZGVyfSk7fWVsc2UgaWYobWV0aG9kPT09J2FsbCd8fGhhbmRsZXIubWV0aG9kPT09J2FsbCd8fGhhbmRsZXIubWV0aG9kPT09bWV0aG9kKXttYXRjaGVkSGFuZGxlcnMucHVzaCh7aGFuZGxlcjpoYW5kbGVyLG1hdGNoZWQ6bWF0Y2hlZCxiYXNlVXJsOmJhc2VVcmwscmVtYWluZGVyOicvJ30pO319KTtyZXR1cm4gbWF0Y2hlZEhhbmRsZXJzO30sZ2V0Q2FsbGVkSGFuZGxlcnM6ZnVuY3Rpb24gZ2V0Q2FsbGVkSGFuZGxlcnMocGF0aCxtZXRob2QsYmFzZVVybCxwYXJhbXMpe3ZhciBfdGhpczI9dGhpczt2YXIgc2VsZj1wcml2YXRlcyh0aGlzKTt2YXIgbWF0Y2hlZEhhbmRsZXJzPXNlbGYuZ2V0TWF0Y2hlZEhhbmRsZXJzKHBhdGgsbWV0aG9kLGJhc2VVcmwpO3ZhciBjYWxsZWRIYW5kbGVycz1bXTt2YXIgcGFyYW1zT2JzZXJ2ZXI9e307bWF0Y2hlZEhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24obWF0Y2hlZEhhbmRsZXIpe3ZhciBoYW5kbGVyPW1hdGNoZWRIYW5kbGVyLmhhbmRsZXI7dmFyIG1hdGNoZWQ9bWF0Y2hlZEhhbmRsZXIubWF0Y2hlZDt2YXIgcmVtYWluZGVyPW1hdGNoZWRIYW5kbGVyLnJlbWFpbmRlcjt2YXIgcmVxPXthcHA6X3RoaXMyLGJhc2VVcmw6bWF0Y2hlZEhhbmRsZXIuYmFzZVVybCxwYXJhbXM6c2VsZi5nZXRQYXJhbXMobWF0Y2hlZCxoYW5kbGVyLnBhdHRlcm4ua2V5cyxwYXJhbXMpfTt2YXIgY2hhbmdlZFBhcmFtS2V5cz1zZWxmLmdldENoYW5nZWRQYXJhbUtleXMocGFyYW1zT2JzZXJ2ZXIscmVxLnBhcmFtcyk7dmFyIHBhcmFtSGFuZGxlcnM9c2VsZi5nZXRQYXJhbUhhbmRsZXJzKGNoYW5nZWRQYXJhbUtleXMscmVxKTtjYWxsZWRIYW5kbGVycy5wdXNoLmFwcGx5KGNhbGxlZEhhbmRsZXJzLHBhcmFtSGFuZGxlcnMpO2NhbGxlZEhhbmRsZXJzLnB1c2goe2hhbmRsZXI6aGFuZGxlcixyZXE6cmVxLHJlbWFpbmRlcjpyZW1haW5kZXJ9KTt9KTtyZXR1cm4gY2FsbGVkSGFuZGxlcnM7fSxnZkdldENhbGxlZEhhbmRsZXI6ZnVuY3Rpb24gZ2ZHZXRDYWxsZWRIYW5kbGVyKHBhdGgsbWV0aG9kLGJhc2VVcmwscGFyYW1zKXt2YXIgY2FsbGVkSGFuZGxlcnM9cHJpdmF0ZXModGhpcykuZ2V0Q2FsbGVkSGFuZGxlcnMocGF0aCxtZXRob2QsYmFzZVVybCxwYXJhbXMpO3ZhciBpPTA7dmFyIGw9MDt2YXIgY2hpbGRSb3V0ZXI9bnVsbDt2YXIgb2JqPXt2YWx1ZTp1bmRlZmluZWQsZG9uZTp0cnVlfTtyZXR1cm4ge25leHQ6ZnVuY3Rpb24gbmV4dChza2lwKXtpZihjYWxsZWRIYW5kbGVycy5sZW5ndGg8PWkpe3JldHVybiB7ZG9uZTp0cnVlLHZhbHVlOnVuZGVmaW5lZH07fXZhciBjYWxsZWRIYW5kbGVyPWNhbGxlZEhhbmRsZXJzW2ldO2lmKGNhbGxlZEhhbmRsZXIuaGFuZGxlci5saXN0ZW5lcnMubGVuZ3RoPD1sKXtpKys7bD0wO3JldHVybiB0aGlzLm5leHQoKTt9aWYoY2hpbGRSb3V0ZXIpe3ZhciBuZXh0SGFuZGxlcj1jaGlsZFJvdXRlci5nZXROZXh0SGFuZGxlcihza2lwKTtpZihuZXh0SGFuZGxlcil7cmV0dXJuIHtkb25lOmZhbHNlLHZhbHVlOm5leHRIYW5kbGVyfTt9bCsrO2NoaWxkUm91dGVyPW51bGw7cmV0dXJuIHRoaXMubmV4dCgpO31pZihsIT09MCYmc2tpcCl7aSsrO2w9MDtyZXR1cm4gdGhpcy5uZXh0KCk7fXZhciBsaXN0ZW5lcj1jYWxsZWRIYW5kbGVyLmhhbmRsZXIubGlzdGVuZXJzW2xdO2lmKGxpc3RlbmVyIGluc3RhbmNlb2YgUm91dGVyKXtjaGlsZFJvdXRlcj1wcml2YXRlcyhsaXN0ZW5lcik7Y2hpbGRSb3V0ZXIuZ29HZXRDYWxsZWRIYW5kbGVyPWNoaWxkUm91dGVyLmdmR2V0Q2FsbGVkSGFuZGxlcihjYWxsZWRIYW5kbGVyLnJlbWFpbmRlcixtZXRob2QsY2FsbGVkSGFuZGxlci5yZXEuYmFzZVVybCxjYWxsZWRIYW5kbGVyLnJlcS5wYXJhbXMpO3ZhciBfbmV4dEhhbmRsZXI9Y2hpbGRSb3V0ZXIuZ2V0TmV4dEhhbmRsZXIoKTtpZihfbmV4dEhhbmRsZXIpe3JldHVybiB7ZG9uZTpmYWxzZSx2YWx1ZTpfbmV4dEhhbmRsZXJ9O31sKys7Y2hpbGRSb3V0ZXI9bnVsbDtyZXR1cm4gdGhpcy5uZXh0KCk7fWwrKztyZXR1cm4ge2RvbmU6ZmFsc2UsdmFsdWU6e3R5cGU6Y2FsbGVkSGFuZGxlci5oYW5kbGVyLnR5cGUsbGlzdGVuZXI6bGlzdGVuZXIscmVxOmNhbGxlZEhhbmRsZXIucmVxLHBhcmFtVmFsdWU6Y2FsbGVkSGFuZGxlci5wYXJhbVZhbHVlfX07fX07fSxnZXRNYXRjaGVkRXJyb3JIYW5kbGVyczpmdW5jdGlvbiBnZXRNYXRjaGVkRXJyb3JIYW5kbGVycyhyZXF1ZXN0KXt2YXIgc2VsZj1wcml2YXRlcyh0aGlzKTt2YXIgbWF0Y2hlZEhhbmRsZXJzPVtdO3ZhciBtZXRob2Q9cmVxdWVzdC5tZXRob2Q7dmFyIHBhdGg9cmVxdWVzdC5wYXRobmFtZTtzZWxmLmVycm9ySGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbihoYW5kbGVyKXt2YXIgbWF0Y2hlZD1oYW5kbGVyLnBhdHRlcm4uZXhlYyhwYXRoKTtpZihtYXRjaGVkPT09bnVsbCl7cmV0dXJuO31pZihoYW5kbGVyLnR5cGU9PT0nbWlkZGxld2FyZScpe3ZhciByZW1haW5kZXI9c2VsZi5nZXRSZW1haW5kZXIobWF0Y2hlZCk7aWYocmVtYWluZGVyPT09bnVsbCl7cmV0dXJuO31tYXRjaGVkSGFuZGxlcnMucHVzaCh7aGFuZGxlcjpoYW5kbGVyfSk7fWVsc2UgaWYoaGFuZGxlci5tZXRob2Q9PT0nYWxsJ3x8bWV0aG9kPT09J2FsbCd8fGhhbmRsZXIubWV0aG9kPT09bWV0aG9kKXttYXRjaGVkSGFuZGxlcnMucHVzaCh7aGFuZGxlcjpoYW5kbGVyfSk7fX0pO3JldHVybiBtYXRjaGVkSGFuZGxlcnM7fSxnZkdldE1hdGNoZWRFcnJvckhhbmRsZXI6ZnVuY3Rpb24gZ2ZHZXRNYXRjaGVkRXJyb3JIYW5kbGVyKHJlcXVlc3Qpe3ZhciBtYXRjaGVkSGFuZGxlcnM9cHJpdmF0ZXModGhpcykuZ2V0TWF0Y2hlZEVycm9ySGFuZGxlcnMocmVxdWVzdCk7dmFyIGk9MDtyZXR1cm4ge25leHQ6ZnVuY3Rpb24gbmV4dCgpe2lmKG1hdGNoZWRIYW5kbGVycy5sZW5ndGg8PWkpe3JldHVybiB7ZG9uZTp0cnVlLHZhbHVlOnVuZGVmaW5lZH07fXJldHVybiB7ZG9uZTpmYWxzZSx2YWx1ZTptYXRjaGVkSGFuZGxlcnNbaSsrXX07fX07fSxnZXROZXh0SGFuZGxlcjpmdW5jdGlvbiBnZXROZXh0SGFuZGxlcigpe3ZhciBnZW5PYmo9cHJpdmF0ZXModGhpcykuZ29HZXRDYWxsZWRIYW5kbGVyLm5leHQoYXJndW1lbnRzWzBdKTtpZihnZW5PYmouZG9uZSl7cmV0dXJuIG51bGw7fXJldHVybiBnZW5PYmoudmFsdWU7fSxydW5OZXh0SGFuZGxlcjpmdW5jdGlvbiBydW5OZXh0SGFuZGxlcihyZXF1ZXN0LHJlc3BvbnNlLGVycm9yKXt2YXIgc2VsZj1wcml2YXRlcyh0aGlzKTt2YXIgbmV4dEhhbmRsZXI9bnVsbDtpZihlcnJvcj09PSdyb3V0ZScpe25leHRIYW5kbGVyPXNlbGYuZ2V0TmV4dEhhbmRsZXIodHJ1ZSk7fWVsc2UgaWYoZXJyb3IhPT11bmRlZmluZWQpe3NlbGYuZ29HZXRNYXRjaGVkRXJyb3JIYW5kbGVycz1zZWxmLmdmR2V0TWF0Y2hlZEVycm9ySGFuZGxlcihyZXF1ZXN0KTtzZWxmLnJ1bk5leHRFcnJvckhhbmRsZXIocmVxdWVzdCxyZXNwb25zZSxlcnJvcik7cmV0dXJuO31lbHNlIHtuZXh0SGFuZGxlcj1zZWxmLmdldE5leHRIYW5kbGVyKCk7fWlmKG5leHRIYW5kbGVyPT09bnVsbCl7cmV0dXJuO31fZXh0ZW5kcyhyZXF1ZXN0LG5leHRIYW5kbGVyLnJlcSk7dmFyIG5leHQ9c2VsZi5ydW5OZXh0SGFuZGxlci5iaW5kKHNlbGYscmVxdWVzdCxyZXNwb25zZSk7aWYobmV4dEhhbmRsZXIudHlwZT09PSdwYXJhbWV0ZXInKXtuZXh0SGFuZGxlci5saXN0ZW5lcihyZXF1ZXN0LHJlc3BvbnNlLG5leHQsbmV4dEhhbmRsZXIucGFyYW1WYWx1ZSk7cmV0dXJuO31uZXh0SGFuZGxlci5saXN0ZW5lcihyZXF1ZXN0LHJlc3BvbnNlLG5leHQpO30sZ2V0TmV4dEVycm9ySGFuZGxlcjpmdW5jdGlvbiBnZXROZXh0RXJyb3JIYW5kbGVyKCl7dmFyIGdlbk9iaj1wcml2YXRlcyh0aGlzKS5nb0dldE1hdGNoZWRFcnJvckhhbmRsZXJzLm5leHQoKTtpZihnZW5PYmouZG9uZSl7cmV0dXJuIG51bGw7fXJldHVybiBnZW5PYmoudmFsdWU7fSxydW5OZXh0RXJyb3JIYW5kbGVyOmZ1bmN0aW9uIHJ1bk5leHRFcnJvckhhbmRsZXIocmVxdWVzdCxyZXNwb25zZSxlcnJvcil7dmFyIHNlbGY9cHJpdmF0ZXModGhpcyk7dmFyIG5leHRIYW5kbGVyPXNlbGYuZ2V0TmV4dEVycm9ySGFuZGxlcigpO2lmKG5leHRIYW5kbGVyPT09bnVsbCl7cmV0dXJuO312YXIgbmV4dD1zZWxmLnJ1bk5leHRFcnJvckhhbmRsZXIuYmluZChzZWxmLHJlcXVlc3QscmVzcG9uc2UsZXJyb3IpO25leHRIYW5kbGVyLmhhbmRsZXIubGlzdGVuZXIoZXJyb3IscmVxdWVzdCxyZXNwb25zZSxuZXh0KTt9LHJlZ2lzdGVyOmZ1bmN0aW9uIHJlZ2lzdGVyKHByb3BlcnRpZXMsZGVzdGluYXRpb24pe3ZhciBzZWxmPXByaXZhdGVzKHRoaXMpO3ZhciBoYW5kbGVyPXByb3BlcnRpZXM7aWYoaGFuZGxlci50eXBlPT09J21pZGRsZXdhcmUnKXtoYW5kbGVyLnBhdHRlcm49KDAsX3BhdGhUb1JlZ2V4cDIuZGVmYXVsdCkoaGFuZGxlci5wYXRoLG51bGwse3NlbnNpdGl2ZTpzZWxmLmRlZmF1bHRzLmNhc2VTZW5zaXRpdmUsc3RyaWN0OnNlbGYuZGVmYXVsdHMuc3RyaWN0LGVuZDpmYWxzZX0pO31lbHNlIHtoYW5kbGVyLnBhdHRlcm49KDAsX3BhdGhUb1JlZ2V4cDIuZGVmYXVsdCkoaGFuZGxlci5wYXRoLG51bGwse3NlbnNpdGl2ZTpzZWxmLmRlZmF1bHRzLmNhc2VTZW5zaXRpdmUsc3RyaWN0OnNlbGYuZGVmYXVsdHMuc3RyaWN0LGVuZDp0cnVlfSk7fWlmKGRlc3RpbmF0aW9uPT09J2Vycm9yJyl7c2VsZi5lcnJvckhhbmRsZXJzLnB1c2goaGFuZGxlcik7cmV0dXJuO31zZWxmLmhhbmRsZXJzLnB1c2goaGFuZGxlcik7fX07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xlYWRzLXJvdXRlci9saWIvUm91dGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKCdxdWVyeXN0cmluZycpO3ZhciBfcXVlcnlzdHJpbmcyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3F1ZXJ5c3RyaW5nKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian07fXZhciBVUkw9e307VVJMLnBhcnNlPWZ1bmN0aW9uKHVybFN0cmluZyl7dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO2EuaHJlZj11cmxTdHJpbmc7YS5ocmVmPWEuaHJlZjt2YXIgdXJsT2JqPXt9O3VybE9iai5wcm90b2NvbD1hLnByb3RvY29sO3VybE9iai5zZWN1cmU9YS5wcm90b2NvbD09PSdodHRwczonO3VybE9iai5ob3N0PWEucG9ydD09PSc4MCc/YS5ob3N0LnJlcGxhY2UoJzo4MCcsJycpOmEuaG9zdDt1cmxPYmoucG9ydD1hLnBvcnQ9PT0nODAnPycnOmEucG9ydDt1cmxPYmouaG9zdG5hbWU9YS5ob3N0bmFtZTt1cmxPYmouaGFzaD1hLmhhc2g7dXJsT2JqLnNlYXJjaD1hLnNlYXJjaDt1cmxPYmoucXVlcnk9X3F1ZXJ5c3RyaW5nMi5kZWZhdWx0LnBhcnNlKGEuc2VhcmNoLnNsaWNlKDEpKTt1cmxPYmoucGF0aG5hbWU9VVJMLmFkanVzdFVSTFNsYXNoKFVSTC5hZGRGaXJzdFNsYXNoKGEucGF0aG5hbWUpKTt1cmxPYmoucGF0aD11cmxPYmoucGF0aG5hbWUrYS5zZWFyY2g7dXJsT2JqLmhyZWY9YS5ocmVmO3VybE9iai5vcmlnaW49YS5wcm90b2NvbCsnLy8nK3VybE9iai5ob3N0O3JldHVybiB1cmxPYmo7fTtVUkwuYWRkRmlyc3RTbGFzaD1mdW5jdGlvbihwYXRoU3RyaW5nKXtyZXR1cm4gcGF0aFN0cmluZy5yZXBsYWNlKC9eKFxcLyopPy8sJy8nKTt9O1VSTC5hZGRUcmFpbGluZ1NsYXNoPWZ1bmN0aW9uKHBhdGhTdHJpbmcpe3JldHVybiBwYXRoU3RyaW5nLnJlcGxhY2UoLyhcXC8qKT8kLywnLycpO307VVJMLnJlbW92ZVRyYWlsaW5nU2xhc2g9ZnVuY3Rpb24ocGF0aG5hbWUpe3JldHVybiBwYXRobmFtZS5yZXBsYWNlKC9cXC8qJC8sJycpO307VVJMLmFkanVzdFVSTFNsYXNoPWZ1bmN0aW9uKHBhdGhuYW1lKXtyZXR1cm4gcGF0aG5hbWUucmVwbGFjZSgvXFwvKy9nLCcvJyk7fTtleHBvcnRzLmRlZmF1bHQ9VVJMO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sZWFkcy1yb3V0ZXIvbGliL1VSTC5qc1xuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLmRlY29kZSA9IGV4cG9ydHMucGFyc2UgPSByZXF1aXJlKCcuL2RlY29kZScpO1xuZXhwb3J0cy5lbmNvZGUgPSBleHBvcnRzLnN0cmluZ2lmeSA9IHJlcXVpcmUoJy4vZW5jb2RlJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcXVlcnlzdHJpbmcvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbi8vIElmIG9iai5oYXNPd25Qcm9wZXJ0eSBoYXMgYmVlbiBvdmVycmlkZGVuLCB0aGVuIGNhbGxpbmdcbi8vIG9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSB3aWxsIGJyZWFrLlxuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vam95ZW50L25vZGUvaXNzdWVzLzE3MDdcbmZ1bmN0aW9uIGhhc093blByb3BlcnR5KG9iaiwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ocXMsIHNlcCwgZXEsIG9wdGlvbnMpIHtcbiAgc2VwID0gc2VwIHx8ICcmJztcbiAgZXEgPSBlcSB8fCAnPSc7XG4gIHZhciBvYmogPSB7fTtcblxuICBpZiAodHlwZW9mIHFzICE9PSAnc3RyaW5nJyB8fCBxcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgdmFyIHJlZ2V4cCA9IC9cXCsvZztcbiAgcXMgPSBxcy5zcGxpdChzZXApO1xuXG4gIHZhciBtYXhLZXlzID0gMTAwMDtcbiAgaWYgKG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubWF4S2V5cyA9PT0gJ251bWJlcicpIHtcbiAgICBtYXhLZXlzID0gb3B0aW9ucy5tYXhLZXlzO1xuICB9XG5cbiAgdmFyIGxlbiA9IHFzLmxlbmd0aDtcbiAgLy8gbWF4S2V5cyA8PSAwIG1lYW5zIHRoYXQgd2Ugc2hvdWxkIG5vdCBsaW1pdCBrZXlzIGNvdW50XG4gIGlmIChtYXhLZXlzID4gMCAmJiBsZW4gPiBtYXhLZXlzKSB7XG4gICAgbGVuID0gbWF4S2V5cztcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICB2YXIgeCA9IHFzW2ldLnJlcGxhY2UocmVnZXhwLCAnJTIwJyksXG4gICAgICAgIGlkeCA9IHguaW5kZXhPZihlcSksXG4gICAgICAgIGtzdHIsIHZzdHIsIGssIHY7XG5cbiAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgIGtzdHIgPSB4LnN1YnN0cigwLCBpZHgpO1xuICAgICAgdnN0ciA9IHguc3Vic3RyKGlkeCArIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBrc3RyID0geDtcbiAgICAgIHZzdHIgPSAnJztcbiAgICB9XG5cbiAgICBrID0gZGVjb2RlVVJJQ29tcG9uZW50KGtzdHIpO1xuICAgIHYgPSBkZWNvZGVVUklDb21wb25lbnQodnN0cik7XG5cbiAgICBpZiAoIWhhc093blByb3BlcnR5KG9iaiwgaykpIHtcbiAgICAgIG9ialtrXSA9IHY7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG9ialtrXSkpIHtcbiAgICAgIG9ialtrXS5wdXNoKHYpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmpba10gPSBbb2JqW2tdLCB2XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9xdWVyeXN0cmluZy9kZWNvZGUuanNcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBzdHJpbmdpZnlQcmltaXRpdmUgPSBmdW5jdGlvbih2KSB7XG4gIHN3aXRjaCAodHlwZW9mIHYpIHtcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgcmV0dXJuIHY7XG5cbiAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIHJldHVybiB2ID8gJ3RydWUnIDogJ2ZhbHNlJztcblxuICAgIGNhc2UgJ251bWJlcic6XG4gICAgICByZXR1cm4gaXNGaW5pdGUodikgPyB2IDogJyc7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iaiwgc2VwLCBlcSwgbmFtZSkge1xuICBzZXAgPSBzZXAgfHwgJyYnO1xuICBlcSA9IGVxIHx8ICc9JztcbiAgaWYgKG9iaiA9PT0gbnVsbCkge1xuICAgIG9iaiA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLm1hcChmdW5jdGlvbihrKSB7XG4gICAgICB2YXIga3MgPSBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKGspKSArIGVxO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqW2tdKSkge1xuICAgICAgICByZXR1cm4gb2JqW2tdLm1hcChmdW5jdGlvbih2KSB7XG4gICAgICAgICAgcmV0dXJuIGtzICsgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZSh2KSk7XG4gICAgICAgIH0pLmpvaW4oc2VwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBrcyArIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUob2JqW2tdKSk7XG4gICAgICB9XG4gICAgfSkuam9pbihzZXApO1xuXG4gIH1cblxuICBpZiAoIW5hbWUpIHJldHVybiAnJztcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUobmFtZSkpICsgZXEgK1xuICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShvYmopKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcXVlcnlzdHJpbmcvZW5jb2RlLmpzXG4vLyBtb2R1bGUgaWQgPSA5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNhcnJheSA9IHJlcXVpcmUoJ2lzYXJyYXknKVxuXG4vKipcbiAqIEV4cG9zZSBgcGF0aFRvUmVnZXhwYC5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoVG9SZWdleHBcbm1vZHVsZS5leHBvcnRzLnBhcnNlID0gcGFyc2Vcbm1vZHVsZS5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlXG5tb2R1bGUuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvblxubW9kdWxlLmV4cG9ydHMudG9rZW5zVG9SZWdFeHAgPSB0b2tlbnNUb1JlZ0V4cFxuXG4vKipcbiAqIFRoZSBtYWluIHBhdGggbWF0Y2hpbmcgcmVnZXhwIHV0aWxpdHkuXG4gKlxuICogQHR5cGUge1JlZ0V4cH1cbiAqL1xudmFyIFBBVEhfUkVHRVhQID0gbmV3IFJlZ0V4cChbXG4gIC8vIE1hdGNoIGVzY2FwZWQgY2hhcmFjdGVycyB0aGF0IHdvdWxkIG90aGVyd2lzZSBhcHBlYXIgaW4gZnV0dXJlIG1hdGNoZXMuXG4gIC8vIFRoaXMgYWxsb3dzIHRoZSB1c2VyIHRvIGVzY2FwZSBzcGVjaWFsIGNoYXJhY3RlcnMgdGhhdCB3b24ndCB0cmFuc2Zvcm0uXG4gICcoXFxcXFxcXFwuKScsXG4gIC8vIE1hdGNoIEV4cHJlc3Mtc3R5bGUgcGFyYW1ldGVycyBhbmQgdW4tbmFtZWQgcGFyYW1ldGVycyB3aXRoIGEgcHJlZml4XG4gIC8vIGFuZCBvcHRpb25hbCBzdWZmaXhlcy4gTWF0Y2hlcyBhcHBlYXIgYXM6XG4gIC8vXG4gIC8vIFwiLzp0ZXN0KFxcXFxkKyk/XCIgPT4gW1wiL1wiLCBcInRlc3RcIiwgXCJcXGQrXCIsIHVuZGVmaW5lZCwgXCI/XCIsIHVuZGVmaW5lZF1cbiAgLy8gXCIvcm91dGUoXFxcXGQrKVwiICA9PiBbdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCJcXGQrXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkXVxuICAvLyBcIi8qXCIgICAgICAgICAgICA9PiBbXCIvXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCIqXCJdXG4gICcoW1xcXFwvLl0pPyg/Oig/OlxcXFw6KFxcXFx3KykoPzpcXFxcKCgoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpXSkrKVxcXFwpKT98XFxcXCgoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKV0pKylcXFxcKSkoWysqP10pP3woXFxcXCopKSdcbl0uam9pbignfCcpLCAnZycpXG5cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gIHN0clxuICogQHBhcmFtICB7T2JqZWN0PX0gb3B0aW9uc1xuICogQHJldHVybiB7IUFycmF5fVxuICovXG5mdW5jdGlvbiBwYXJzZSAoc3RyLCBvcHRpb25zKSB7XG4gIHZhciB0b2tlbnMgPSBbXVxuICB2YXIga2V5ID0gMFxuICB2YXIgaW5kZXggPSAwXG4gIHZhciBwYXRoID0gJydcbiAgdmFyIGRlZmF1bHREZWxpbWl0ZXIgPSBvcHRpb25zICYmIG9wdGlvbnMuZGVsaW1pdGVyIHx8ICcvJ1xuICB2YXIgcmVzXG5cbiAgd2hpbGUgKChyZXMgPSBQQVRIX1JFR0VYUC5leGVjKHN0cikpICE9IG51bGwpIHtcbiAgICB2YXIgbSA9IHJlc1swXVxuICAgIHZhciBlc2NhcGVkID0gcmVzWzFdXG4gICAgdmFyIG9mZnNldCA9IHJlcy5pbmRleFxuICAgIHBhdGggKz0gc3RyLnNsaWNlKGluZGV4LCBvZmZzZXQpXG4gICAgaW5kZXggPSBvZmZzZXQgKyBtLmxlbmd0aFxuXG4gICAgLy8gSWdub3JlIGFscmVhZHkgZXNjYXBlZCBzZXF1ZW5jZXMuXG4gICAgaWYgKGVzY2FwZWQpIHtcbiAgICAgIHBhdGggKz0gZXNjYXBlZFsxXVxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICB2YXIgbmV4dCA9IHN0cltpbmRleF1cbiAgICB2YXIgcHJlZml4ID0gcmVzWzJdXG4gICAgdmFyIG5hbWUgPSByZXNbM11cbiAgICB2YXIgY2FwdHVyZSA9IHJlc1s0XVxuICAgIHZhciBncm91cCA9IHJlc1s1XVxuICAgIHZhciBtb2RpZmllciA9IHJlc1s2XVxuICAgIHZhciBhc3RlcmlzayA9IHJlc1s3XVxuXG4gICAgLy8gUHVzaCB0aGUgY3VycmVudCBwYXRoIG9udG8gdGhlIHRva2Vucy5cbiAgICBpZiAocGF0aCkge1xuICAgICAgdG9rZW5zLnB1c2gocGF0aClcbiAgICAgIHBhdGggPSAnJ1xuICAgIH1cblxuICAgIHZhciBwYXJ0aWFsID0gcHJlZml4ICE9IG51bGwgJiYgbmV4dCAhPSBudWxsICYmIG5leHQgIT09IHByZWZpeFxuICAgIHZhciByZXBlYXQgPSBtb2RpZmllciA9PT0gJysnIHx8IG1vZGlmaWVyID09PSAnKidcbiAgICB2YXIgb3B0aW9uYWwgPSBtb2RpZmllciA9PT0gJz8nIHx8IG1vZGlmaWVyID09PSAnKidcbiAgICB2YXIgZGVsaW1pdGVyID0gcmVzWzJdIHx8IGRlZmF1bHREZWxpbWl0ZXJcbiAgICB2YXIgcGF0dGVybiA9IGNhcHR1cmUgfHwgZ3JvdXBcblxuICAgIHRva2Vucy5wdXNoKHtcbiAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICBwcmVmaXg6IHByZWZpeCB8fCAnJyxcbiAgICAgIGRlbGltaXRlcjogZGVsaW1pdGVyLFxuICAgICAgb3B0aW9uYWw6IG9wdGlvbmFsLFxuICAgICAgcmVwZWF0OiByZXBlYXQsXG4gICAgICBwYXJ0aWFsOiBwYXJ0aWFsLFxuICAgICAgYXN0ZXJpc2s6ICEhYXN0ZXJpc2ssXG4gICAgICBwYXR0ZXJuOiBwYXR0ZXJuID8gZXNjYXBlR3JvdXAocGF0dGVybikgOiAoYXN0ZXJpc2sgPyAnLionIDogJ1teJyArIGVzY2FwZVN0cmluZyhkZWxpbWl0ZXIpICsgJ10rPycpXG4gICAgfSlcbiAgfVxuXG4gIC8vIE1hdGNoIGFueSBjaGFyYWN0ZXJzIHN0aWxsIHJlbWFpbmluZy5cbiAgaWYgKGluZGV4IDwgc3RyLmxlbmd0aCkge1xuICAgIHBhdGggKz0gc3RyLnN1YnN0cihpbmRleClcbiAgfVxuXG4gIC8vIElmIHRoZSBwYXRoIGV4aXN0cywgcHVzaCBpdCBvbnRvIHRoZSBlbmQuXG4gIGlmIChwYXRoKSB7XG4gICAgdG9rZW5zLnB1c2gocGF0aClcbiAgfVxuXG4gIHJldHVybiB0b2tlbnNcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gICAgICAgICAgICAgc3RyXG4gKiBAcGFyYW0gIHtPYmplY3Q9fSAgICAgICAgICAgIG9wdGlvbnNcbiAqIEByZXR1cm4geyFmdW5jdGlvbihPYmplY3Q9LCBPYmplY3Q9KX1cbiAqL1xuZnVuY3Rpb24gY29tcGlsZSAoc3RyLCBvcHRpb25zKSB7XG4gIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucykpXG59XG5cbi8qKlxuICogUHJldHRpZXIgZW5jb2Rpbmcgb2YgVVJJIHBhdGggc2VnbWVudHMuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBlbmNvZGVVUklDb21wb25lbnRQcmV0dHkgKHN0cikge1xuICByZXR1cm4gZW5jb2RlVVJJKHN0cikucmVwbGFjZSgvW1xcLz8jXS9nLCBmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiAnJScgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKClcbiAgfSlcbn1cblxuLyoqXG4gKiBFbmNvZGUgdGhlIGFzdGVyaXNrIHBhcmFtZXRlci4gU2ltaWxhciB0byBgcHJldHR5YCwgYnV0IGFsbG93cyBzbGFzaGVzLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ31cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZW5jb2RlQXN0ZXJpc2sgKHN0cikge1xuICByZXR1cm4gZW5jb2RlVVJJKHN0cikucmVwbGFjZSgvWz8jXS9nLCBmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiAnJScgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKClcbiAgfSlcbn1cblxuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbiAodG9rZW5zKSB7XG4gIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICB2YXIgbWF0Y2hlcyA9IG5ldyBBcnJheSh0b2tlbnMubGVuZ3RoKVxuXG4gIC8vIENvbXBpbGUgYWxsIHRoZSBwYXR0ZXJucyBiZWZvcmUgY29tcGlsYXRpb24uXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHR5cGVvZiB0b2tlbnNbaV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBtYXRjaGVzW2ldID0gbmV3IFJlZ0V4cCgnXig/OicgKyB0b2tlbnNbaV0ucGF0dGVybiArICcpJCcpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChvYmosIG9wdHMpIHtcbiAgICB2YXIgcGF0aCA9ICcnXG4gICAgdmFyIGRhdGEgPSBvYmogfHwge31cbiAgICB2YXIgb3B0aW9ucyA9IG9wdHMgfHwge31cbiAgICB2YXIgZW5jb2RlID0gb3B0aW9ucy5wcmV0dHkgPyBlbmNvZGVVUklDb21wb25lbnRQcmV0dHkgOiBlbmNvZGVVUklDb21wb25lbnRcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV1cblxuICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcGF0aCArPSB0b2tlblxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZSA9IGRhdGFbdG9rZW4ubmFtZV1cbiAgICAgIHZhciBzZWdtZW50XG5cbiAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgIGlmICh0b2tlbi5vcHRpb25hbCkge1xuICAgICAgICAgIC8vIFByZXBlbmQgcGFydGlhbCBzZWdtZW50IHByZWZpeGVzLlxuICAgICAgICAgIGlmICh0b2tlbi5wYXJ0aWFsKSB7XG4gICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBiZSBkZWZpbmVkJylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNhcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgaWYgKCF0b2tlbi5yZXBlYXQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIG5vdCByZXBlYXQsIGJ1dCByZWNlaXZlZCBgJyArIEpTT04uc3RyaW5naWZ5KHZhbHVlKSArICdgJylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBpZiAodG9rZW4ub3B0aW9uYWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gbm90IGJlIGVtcHR5JylcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSlcblxuICAgICAgICAgIGlmICghbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhbGwgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBtYXRjaCBcIicgKyB0b2tlbi5wYXR0ZXJuICsgJ1wiLCBidXQgcmVjZWl2ZWQgYCcgKyBKU09OLnN0cmluZ2lmeShzZWdtZW50KSArICdgJylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwYXRoICs9IChqID09PSAwID8gdG9rZW4ucHJlZml4IDogdG9rZW4uZGVsaW1pdGVyKSArIHNlZ21lbnRcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIHNlZ21lbnQgPSB0b2tlbi5hc3RlcmlzayA/IGVuY29kZUFzdGVyaXNrKHZhbHVlKSA6IGVuY29kZSh2YWx1ZSlcblxuICAgICAgaWYgKCFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBtYXRjaCBcIicgKyB0b2tlbi5wYXR0ZXJuICsgJ1wiLCBidXQgcmVjZWl2ZWQgXCInICsgc2VnbWVudCArICdcIicpXG4gICAgICB9XG5cbiAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudFxuICAgIH1cblxuICAgIHJldHVybiBwYXRoXG4gIH1cbn1cblxuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyAoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXxcXC9cXFxcXSkvZywgJ1xcXFwkMScpXG59XG5cbi8qKlxuICogRXNjYXBlIHRoZSBjYXB0dXJpbmcgZ3JvdXAgYnkgZXNjYXBpbmcgc3BlY2lhbCBjaGFyYWN0ZXJzIGFuZCBtZWFuaW5nLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gZ3JvdXBcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZXNjYXBlR3JvdXAgKGdyb3VwKSB7XG4gIHJldHVybiBncm91cC5yZXBsYWNlKC8oWz0hOiRcXC8oKV0pL2csICdcXFxcJDEnKVxufVxuXG4vKipcbiAqIEF0dGFjaCB0aGUga2V5cyBhcyBhIHByb3BlcnR5IG9mIHRoZSByZWdleHAuXG4gKlxuICogQHBhcmFtICB7IVJlZ0V4cH0gcmVcbiAqIEBwYXJhbSAge0FycmF5fSAgIGtleXNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIGF0dGFjaEtleXMgKHJlLCBrZXlzKSB7XG4gIHJlLmtleXMgPSBrZXlzXG4gIHJldHVybiByZVxufVxuXG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGZsYWdzIChvcHRpb25zKSB7XG4gIHJldHVybiBvcHRpb25zLnNlbnNpdGl2ZSA/ICcnIDogJ2knXG59XG5cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICpcbiAqIEBwYXJhbSAgeyFSZWdFeHB9IHBhdGhcbiAqIEBwYXJhbSAgeyFBcnJheX0gIGtleXNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwIChwYXRoLCBrZXlzKSB7XG4gIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKVxuXG4gIGlmIChncm91cHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgbmFtZTogaSxcbiAgICAgICAgcHJlZml4OiBudWxsLFxuICAgICAgICBkZWxpbWl0ZXI6IG51bGwsXG4gICAgICAgIG9wdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgcmVwZWF0OiBmYWxzZSxcbiAgICAgICAgcGFydGlhbDogZmFsc2UsXG4gICAgICAgIGFzdGVyaXNrOiBmYWxzZSxcbiAgICAgICAgcGF0dGVybjogbnVsbFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXR0YWNoS2V5cyhwYXRoLCBrZXlzKVxufVxuXG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICpcbiAqIEBwYXJhbSAgeyFBcnJheX0gIHBhdGhcbiAqIEBwYXJhbSAge0FycmF5fSAgIGtleXNcbiAqIEBwYXJhbSAgeyFPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAgKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgdmFyIHBhcnRzID0gW11cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICBwYXJ0cy5wdXNoKHBhdGhUb1JlZ2V4cChwYXRoW2ldLCBrZXlzLCBvcHRpb25zKS5zb3VyY2UpXG4gIH1cblxuICB2YXIgcmVnZXhwID0gbmV3IFJlZ0V4cCgnKD86JyArIHBhcnRzLmpvaW4oJ3wnKSArICcpJywgZmxhZ3Mob3B0aW9ucykpXG5cbiAgcmV0dXJuIGF0dGFjaEtleXMocmVnZXhwLCBrZXlzKVxufVxuXG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gIHBhdGhcbiAqIEBwYXJhbSAgeyFBcnJheX0gIGtleXNcbiAqIEBwYXJhbSAgeyFPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwIChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gIHJldHVybiB0b2tlbnNUb1JlZ0V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucylcbn1cblxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICpcbiAqIEBwYXJhbSAgeyFBcnJheX0gICAgICAgICAgdG9rZW5zXG4gKiBAcGFyYW0gIHsoQXJyYXl8T2JqZWN0KT19IGtleXNcbiAqIEBwYXJhbSAge09iamVjdD19ICAgICAgICAgb3B0aW9uc1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdFeHAgKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICBpZiAoIWlzYXJyYXkoa2V5cykpIHtcbiAgICBvcHRpb25zID0gLyoqIEB0eXBlIHshT2JqZWN0fSAqLyAoa2V5cyB8fCBvcHRpb25zKVxuICAgIGtleXMgPSBbXVxuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cblxuICB2YXIgc3RyaWN0ID0gb3B0aW9ucy5zdHJpY3RcbiAgdmFyIGVuZCA9IG9wdGlvbnMuZW5kICE9PSBmYWxzZVxuICB2YXIgcm91dGUgPSAnJ1xuXG4gIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHRva2VuID0gdG9rZW5zW2ldXG5cbiAgICBpZiAodHlwZW9mIHRva2VuID09PSAnc3RyaW5nJykge1xuICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKHRva2VuKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKHRva2VuLnByZWZpeClcbiAgICAgIHZhciBjYXB0dXJlID0gJyg/OicgKyB0b2tlbi5wYXR0ZXJuICsgJyknXG5cbiAgICAgIGtleXMucHVzaCh0b2tlbilcblxuICAgICAgaWYgKHRva2VuLnJlcGVhdCkge1xuICAgICAgICBjYXB0dXJlICs9ICcoPzonICsgcHJlZml4ICsgY2FwdHVyZSArICcpKidcbiAgICAgIH1cblxuICAgICAgaWYgKHRva2VuLm9wdGlvbmFsKSB7XG4gICAgICAgIGlmICghdG9rZW4ucGFydGlhbCkge1xuICAgICAgICAgIGNhcHR1cmUgPSAnKD86JyArIHByZWZpeCArICcoJyArIGNhcHR1cmUgKyAnKSk/J1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhcHR1cmUgPSBwcmVmaXggKyAnKCcgKyBjYXB0dXJlICsgJyk/J1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYXB0dXJlID0gcHJlZml4ICsgJygnICsgY2FwdHVyZSArICcpJ1xuICAgICAgfVxuXG4gICAgICByb3V0ZSArPSBjYXB0dXJlXG4gICAgfVxuICB9XG5cbiAgdmFyIGRlbGltaXRlciA9IGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCAnLycpXG4gIHZhciBlbmRzV2l0aERlbGltaXRlciA9IHJvdXRlLnNsaWNlKC1kZWxpbWl0ZXIubGVuZ3RoKSA9PT0gZGVsaW1pdGVyXG5cbiAgLy8gSW4gbm9uLXN0cmljdCBtb2RlIHdlIGFsbG93IGEgc2xhc2ggYXQgdGhlIGVuZCBvZiBtYXRjaC4gSWYgdGhlIHBhdGggdG9cbiAgLy8gbWF0Y2ggYWxyZWFkeSBlbmRzIHdpdGggYSBzbGFzaCwgd2UgcmVtb3ZlIGl0IGZvciBjb25zaXN0ZW5jeS4gVGhlIHNsYXNoXG4gIC8vIGlzIHZhbGlkIGF0IHRoZSBlbmQgb2YgYSBwYXRoIG1hdGNoLCBub3QgaW4gdGhlIG1pZGRsZS4gVGhpcyBpcyBpbXBvcnRhbnRcbiAgLy8gaW4gbm9uLWVuZGluZyBtb2RlLCB3aGVyZSBcIi90ZXN0L1wiIHNob3VsZG4ndCBtYXRjaCBcIi90ZXN0Ly9yb3V0ZVwiLlxuICBpZiAoIXN0cmljdCkge1xuICAgIHJvdXRlID0gKGVuZHNXaXRoRGVsaW1pdGVyID8gcm91dGUuc2xpY2UoMCwgLWRlbGltaXRlci5sZW5ndGgpIDogcm91dGUpICsgJyg/OicgKyBkZWxpbWl0ZXIgKyAnKD89JCkpPydcbiAgfVxuXG4gIGlmIChlbmQpIHtcbiAgICByb3V0ZSArPSAnJCdcbiAgfSBlbHNlIHtcbiAgICAvLyBJbiBub24tZW5kaW5nIG1vZGUsIHdlIG5lZWQgdGhlIGNhcHR1cmluZyBncm91cHMgdG8gbWF0Y2ggYXMgbXVjaCBhc1xuICAgIC8vIHBvc3NpYmxlIGJ5IHVzaW5nIGEgcG9zaXRpdmUgbG9va2FoZWFkIHRvIHRoZSBlbmQgb3IgbmV4dCBwYXRoIHNlZ21lbnQuXG4gICAgcm91dGUgKz0gc3RyaWN0ICYmIGVuZHNXaXRoRGVsaW1pdGVyID8gJycgOiAnKD89JyArIGRlbGltaXRlciArICd8JCknXG4gIH1cblxuICByZXR1cm4gYXR0YWNoS2V5cyhuZXcgUmVnRXhwKCdeJyArIHJvdXRlLCBmbGFncyhvcHRpb25zKSksIGtleXMpXG59XG5cbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqXG4gKiBAcGFyYW0gIHsoc3RyaW5nfFJlZ0V4cHxBcnJheSl9IHBhdGhcbiAqIEBwYXJhbSAgeyhBcnJheXxPYmplY3QpPX0gICAgICAga2V5c1xuICogQHBhcmFtICB7T2JqZWN0PX0gICAgICAgICAgICAgICBvcHRpb25zXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAgKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgaWYgKCFpc2FycmF5KGtleXMpKSB7XG4gICAgb3B0aW9ucyA9IC8qKiBAdHlwZSB7IU9iamVjdH0gKi8gKGtleXMgfHwgb3B0aW9ucylcbiAgICBrZXlzID0gW11cbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG5cbiAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwgLyoqIEB0eXBlIHshQXJyYXl9ICovIChrZXlzKSlcbiAgfVxuXG4gIGlmIChpc2FycmF5KHBhdGgpKSB7XG4gICAgcmV0dXJuIGFycmF5VG9SZWdleHAoLyoqIEB0eXBlIHshQXJyYXl9ICovIChwYXRoKSwgLyoqIEB0eXBlIHshQXJyYXl9ICovIChrZXlzKSwgb3B0aW9ucylcbiAgfVxuXG4gIHJldHVybiBzdHJpbmdUb1JlZ2V4cCgvKiogQHR5cGUge3N0cmluZ30gKi8gKHBhdGgpLCAvKiogQHR5cGUgeyFBcnJheX0gKi8gKGtleXMpLCBvcHRpb25zKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXNhcnJheS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PW5hbWVzcGFjZTtmdW5jdGlvbiBuYW1lc3BhY2UoKXt2YXIgbWFwPW5ldyBXZWFrTWFwKCk7cmV0dXJuIGZ1bmN0aW9uKG9iamVjdCl7aWYoIW1hcC5oYXMob2JqZWN0KSl7bWFwLnNldChvYmplY3Qse30pO31yZXR1cm4gbWFwLmdldChvYmplY3QpO307fTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbGVhZHMtcm91dGVyL2xpYi9uYW1lc3BhY2UuanNcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2Z1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSxDb25zdHJ1Y3Rvcil7aWYoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTt9fXZhciBSZXF1ZXN0PWZ1bmN0aW9uIFJlcXVlc3QoKXtfY2xhc3NDYWxsQ2hlY2sodGhpcyxSZXF1ZXN0KTt9O2V4cG9ydHMuZGVmYXVsdD1SZXF1ZXN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sZWFkcy1yb3V0ZXIvbGliL1JlcXVlc3QuanNcbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2Z1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSxDb25zdHJ1Y3Rvcil7aWYoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTt9fXZhciBSZXNwb25zZT1mdW5jdGlvbiBSZXNwb25zZSgpe19jbGFzc0NhbGxDaGVjayh0aGlzLFJlc3BvbnNlKTt9O2V4cG9ydHMuZGVmYXVsdD1SZXNwb25zZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbGVhZHMtcm91dGVyL2xpYi9SZXNwb25zZS5qc1xuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGRpc3BhdGNoZXIgZnJvbSAnLi4vZGlzcGF0Y2hlci5qcyc7XHJcbmltcG9ydCBnZXRNb3ZlVGV4dCBmcm9tICcuLi9jb21tb24vZ2V0TW92ZVRleHQuanMnO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZy5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0aW5wdXRTZWFyY2hJZCh2YWx1ZSkge1xyXG5cdFx0ZGlzcGF0Y2hlci5lbWl0KCdpbnB1dFNlYXJjaElkJywgdmFsdWUpO1xyXG5cdH0sXHJcblxyXG5cdGFzeW5jIGZldGNoTWF0Y2hSZWNvcmRzKHNlYXJjaElkLCB1cmxzLCBzdGFydCkge1xyXG5cdFx0ZGlzcGF0Y2hlci5lbWl0KCdmZXRjaE1hdGNoUmVjb3JkcycpO1xyXG5cdFx0XHRjb25zdCByZWNvcmRzID0gW107XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0Zm9yKGNvbnN0IGNsYXNzTmFtZSBpbiB1cmxzKSB7XHJcblx0XHRcdFx0XHRyZWNvcmRzLnB1c2goLi4uYXdhaXQgZmV0Y2hSZWNvcmRzKHVybHNbY2xhc3NOYW1lXSwgY2xhc3NOYW1lLCBzZWFyY2hJZCwgc3RhcnQpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1jYXRjaChlKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZSk7XHJcblx0XHRcdFx0cmV0dXJuIGRpc3BhdGNoZXIuZW1pdCgnZmV0Y2hNYXRjaFJlY29yZHNGYWlsZWQnKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZGlzcGF0Y2hlci5lbWl0KCdmZXRjaE1hdGNoUmVjb3Jkc1N1Y2Nlc3NmdWwnLCByZWNvcmRzKTtcclxuXHR9LFxyXG5cclxuXHRzaG93SGlzdG9yeVJlY29yZHMoKSB7XHJcblx0XHRkaXNwYXRjaGVyLmVtaXQoJ3Nob3dIaXN0b3J5UmVjb3JkcycpO1xyXG5cdH0sXHJcblxyXG5cdGhpZGVIaXN0b3J5UmVjb3JkcygpIHtcclxuXHRcdGRpc3BhdGNoZXIuZW1pdCgnaGlkZUhpc3RvcnlSZWNvcmRzJyk7XHJcblx0fSxcclxuXHJcblx0YXN5bmMgZmV0Y2hLaWZ1KHJlY29yZCkge1xyXG5cdFx0ZGlzcGF0Y2hlci5lbWl0KCdmZXRjaEtpZnUnLCByZWNvcmQpO1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0dmFyIGtpZnUgPSBhd2FpdCBmZXRjaEtpZnUocmVjb3JkLnVybCwgcmVjb3JkKTtcclxuXHRcdH1jYXRjaChlKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGUpO1xyXG5cdFx0XHRyZXR1cm4gZGlzcGF0Y2hlci5lbWl0KCdmZXRjaEtpZnVGYWlsZWQnLCByZWNvcmQpO1xyXG5cdFx0fVxyXG5cdFx0ZGlzcGF0Y2hlci5lbWl0KCdmZXRjaEtpZnVTdWNjZXNzZnVsJywgcmVjb3JkLCBraWZ1KTtcclxuXHR9LFxyXG5cclxuXHRjb3B5S2lmdShyZWNvcmQpIHtcclxuXHRcdGNvcHlUZXh0KHJlY29yZC5raWZ1KTtcclxuXHRcdGRpc3BhdGNoZXIuZW1pdCgnY29weUtpZnUnLCByZWNvcmQpO1xyXG5cdH0sXHJcblxyXG5cdHVubW91bnRJbmRleCgpIHtcclxuXHRcdGRpc3BhdGNoZXIuZW1pdCgndW5tb3VudEluZGV4Jyk7XHJcblx0fVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaFJlY29yZHMod2Fyc1VSTCwgY2xhc3NOYW1lLCBzZWFyY2hJZCwgc3RhcnQpIHtcclxuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2NvbmZpZy5zZXJ2ZXJ9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudCh3YXJzVVJMLnJlcGxhY2UoJzppZCcsIHNlYXJjaElkKS5yZXBsYWNlKCc6c3RhcnQnLCBzdGFydCkpfWAsIHtcclxuXHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0XHRtb2RlOiAnY29ycycsXHJcblx0fSk7XHJcblx0bGV0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XHJcblx0aWYodGV4dFswXSAhPT0gJyQnKSByZXR1cm4gW107XHJcblx0dGV4dCA9IHRleHQucmVwbGFjZSgvXlxcJFxcKFwiI2hpc3RvcnlcIlxcKVxcLmh0bWxcXCgvLCAnJykucmVwbGFjZSgvXCJcXCk7LywgJ1wiJyk7XHJcblx0Y29uc3QgZG9jID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhldmFsKHRleHQpLCAndGV4dC9odG1sJyk7XHJcblx0Y29uc3QgbWF0Y2hSZWNvcmRzID0gQXJyYXkuZnJvbShkb2MucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRlbnRzJyksIChlbGVtZW50KSA9PiB7XHJcblx0XHQvL+WvvuWxgOS4reOBrnJlY29yZDtcclxuXHRcdGlmKGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW1nW3NyYyo9XCJ0YWlreW9rdVwiXScpKSByZXR1cm4gbnVsbDtcclxuXHJcblx0XHRjb25zdCBibGFjayA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgndHInKVswXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudDtcclxuXHRcdGNvbnN0IHdoaXRlID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0cicpWzFdLmNoaWxkcmVuWzFdLnRleHRDb250ZW50O1xyXG5cclxuXHRcdGNvbnN0IGJsYWNrVXNlclBhZ2UgPSBjb25maWcud2Fyc09yaWdpbiArIGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpWzBdLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG5cdFx0Y29uc3Qgd2hpdGVVc2VyUGFnZSA9IGNvbmZpZy53YXJzT3JpZ2luICsgZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhJylbMV0uZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcblx0XHRcclxuXHRcdGxldCB3aW5uZXIgPSAnJztcclxuXHRcdGlmKGVsZW1lbnQuY2hpbGRyZW5bMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCd3aW4nKSkgd2lubmVyID0gJ2JsYWNrJztcclxuXHRcdGVsc2UgaWYoZWxlbWVudC5jaGlsZHJlblsxXS5jbGFzc0xpc3QuY29udGFpbnMoJ3dpbicpKSB3aW5uZXIgPSAnd2hpdGUnO1xyXG5cclxuXHRcdGxldCB0aW1lID0gZWxlbWVudC5jaGlsZHJlblszXS50ZXh0Q29udGVudDtcclxuXHRcdGlmKHRpbWUgPT09ICcnKSB0aW1lID0gZWxlbWVudC5jaGlsZHJlbls0XS50ZXh0Q29udGVudDtcclxuXHRcdGNvbnN0IHVybCA9ICdodHRwczonICsgZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhJylbMl0uZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcblx0XHRcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGJsYWNrLFxyXG5cdFx0XHR3aGl0ZSxcclxuXHRcdFx0YmxhY2tVc2VyUGFnZSxcclxuXHRcdFx0d2hpdGVVc2VyUGFnZSxcclxuXHRcdFx0d2lubmVyLFxyXG5cdFx0XHR0aW1lLFxyXG5cdFx0XHR1cmwsXHJcblx0XHRcdGNsYXNzTmFtZSxcclxuXHRcdFx0aXNXaW5uZXI6IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCd3aW5uZXInKSxcclxuXHRcdFx0aXNGZXRjaGluZ0tpZnU6IGZhbHNlLFxyXG5cdFx0XHRkb2VzSGF2ZUtpZnU6IGZhbHNlLFxyXG5cdFx0XHRraWZ1OiAnJyxcclxuXHRcdH07XHJcblx0fSk7XHJcblx0Ly/lr77lsYDkuK3jga5yZWNvcmTjgYzlkKvjgb7jgozjgabjgYTjgZ/jgonliYrpmaQ7XHJcblx0aWYobWF0Y2hSZWNvcmRzWzBdID09PSBudWxsKSBtYXRjaFJlY29yZHMuc2hpZnQoKTtcclxuXHRyZXR1cm4gbWF0Y2hSZWNvcmRzO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaEtpZnUodXJsLCByZWNvcmQpIHtcclxuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2NvbmZpZy5zZXJ2ZXJ9P3VybD0ke3VybH1gLCB7XHJcblx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdFx0bW9kZTogJ2NvcnMnLFxyXG5cdH0pO1xyXG5cdGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XHJcblx0Y29uc3QgZG9jID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyh0ZXh0LCAndGV4dC9odG1sJyk7XHJcblx0bGV0IHF1ZXJ5SW5kZXggPSAxMTtcclxuXHRpZihkb2MucXVlcnlTZWxlY3RvckFsbCgnc2NyaXB0JylbcXVlcnlJbmRleF0udGV4dENvbnRlbnQuaW5kZXhPZigncmVjZWl2ZU1vdmUnKSA9PT0gLTEpIHF1ZXJ5SW5kZXggPSAxMjtcclxuXHRjb25zdCBtb3ZlcyA9IGRvYy5xdWVyeVNlbGVjdG9yQWxsKCdzY3JpcHQnKVtxdWVyeUluZGV4XS50ZXh0Q29udGVudC5tYXRjaCgvcmVjZWl2ZU1vdmVcXChcXFwiKC4rKVxcXCJcXCk7LylbMV0uc3BsaXQoJ1xcdCcpO1xyXG5cdG1vdmVzLnBvcCgpO1xyXG5cdGxldCBraWZ1VGV4dCA9IGBgXHJcblx0a2lmdVRleHQgKz0gYOmWi+Wni+aXpeaZgu+8miR7cmVjb3JkLnRpbWV9XFxuYDtcclxuXHRraWZ1VGV4dCArPSBg5YWI5omL77yaJHtyZWNvcmQuYmxhY2t9XFxuYDtcclxuXHRraWZ1VGV4dCArPSBg5b6M5omL77yaJHtyZWNvcmQud2hpdGV9XFxuYDtcclxuXHRraWZ1VGV4dCArPSBg5omL5pWwLeaMh+aJiy3mtojosrvmmYLplpNcXG5gO1xyXG5cdGtpZnVUZXh0ICs9IG1vdmVzLm1hcCgobW92ZSwgaSkgPT4ge1xyXG5cdFx0Y29uc3QgbW92ZVRleHQgPSBnZXRNb3ZlVGV4dChpLCBtb3Zlcyk7XHJcblx0XHRyZXR1cm4gbW92ZVRleHQucmVwbGFjZSgvKOKWsnzilrMpKFxcZCk/LywgKG1hdGNoLCBwMSwgcDIpID0+IHtcclxuXHRcdFx0aWYocDIgPT09IHVuZGVmaW5lZCkgcmV0dXJuICcnO1xyXG5cdFx0XHRyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShwMi5jaGFyQ29kZUF0KDApICsgMHhGRUUwKTtcclxuXHRcdH0pO1xyXG5cdH0pLmpvaW4oJ1xcbicpO1xyXG5cclxuXHRyZXR1cm4ga2lmdVRleHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvcHlUZXh0KHRleHQpIHtcclxuXHRjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZXh0YXJlYSk7XHJcblx0dGV4dGFyZWEudmFsdWUgPSB0ZXh0O1xyXG5cdHRleHRhcmVhLnNlbGVjdCgpO1xyXG5cdGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XHJcblx0ZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0ZXh0YXJlYSk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvYWN0aW9ucy9hY3Rpb25zLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeS5qc1xuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNvcmUgID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpXG4gICwgJEpTT04gPSBjb3JlLkpTT04gfHwgKGNvcmUuSlNPTiA9IHtzdHJpbmdpZnk6IEpTT04uc3RyaW5naWZ5fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgcmV0dXJuICRKU09OLnN0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJndW1lbnRzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeS5qc1xuLy8gbW9kdWxlIGlkID0gOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2Zyb21cIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanNcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LmFycmF5LmZyb20nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLkFycmF5LmZyb207XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGN0eCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgdG9PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIGNhbGwgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciAgICA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKVxuICAsIHRvTGVuZ3RoICAgICAgID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2NyZWF0ZS1wcm9wZXJ0eScpXG4gICwgZ2V0SXRlckZuICAgICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uKGl0ZXIpeyBBcnJheS5mcm9tKGl0ZXIpOyB9KSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjIuMSBBcnJheS5mcm9tKGFycmF5TGlrZSwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gIGZyb206IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlLyosIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKi8pe1xuICAgIHZhciBPICAgICAgID0gdG9PYmplY3QoYXJyYXlMaWtlKVxuICAgICAgLCBDICAgICAgID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheVxuICAgICAgLCBhTGVuICAgID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgLCBtYXBmbiAgID0gYUxlbiA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWRcbiAgICAgICwgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWRcbiAgICAgICwgaW5kZXggICA9IDBcbiAgICAgICwgaXRlckZuICA9IGdldEl0ZXJGbihPKVxuICAgICAgLCBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3I7XG4gICAgaWYobWFwcGluZyltYXBmbiA9IGN0eChtYXBmbiwgYUxlbiA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQsIDIpO1xuICAgIC8vIGlmIG9iamVjdCBpc24ndCBpdGVyYWJsZSBvciBpdCdzIGFycmF5IHdpdGggZGVmYXVsdCBpdGVyYXRvciAtIHVzZSBzaW1wbGUgY2FzZVxuICAgIGlmKGl0ZXJGbiAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIGlzQXJyYXlJdGVyKGl0ZXJGbikpKXtcbiAgICAgIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKE8pLCByZXN1bHQgPSBuZXcgQzsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpbmRleCsrKXtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IGNhbGwoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgICBmb3IocmVzdWx0ID0gbmV3IEMobGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpe1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2goZSl7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZihyZXQgIT09IHVuZGVmaW5lZClhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanNcbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgSVRFUkFUT1IgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qc1xuLy8gbW9kdWxlIGlkID0gMTA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciAkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIGluZGV4LCB2YWx1ZSl7XG4gIGlmKGluZGV4IGluIG9iamVjdCkkZGVmaW5lUHJvcGVydHkuZihvYmplY3QsIGluZGV4LCBjcmVhdGVEZXNjKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W2luZGV4XSA9IHZhbHVlO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NyZWF0ZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ICE9IHVuZGVmaW5lZClyZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanNcbi8vIG1vZHVsZSBpZCA9IDEwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJylcbiAgLy8gRVMzIHdyb25nIGhlcmVcbiAgLCBBUkcgPSBjb2YoZnVuY3Rpb24oKXsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qc1xuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBJVEVSQVRPUiAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uKCl7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uKCl7IHRocm93IDI7IH0pO1xufSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMsIHNraXBDbG9zaW5nKXtcbiAgaWYoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgID0gWzddXG4gICAgICAsIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24oKXsgcmV0dXJuIHtkb25lOiBzYWZlID0gdHJ1ZX07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIFRoaXMgbWV0aG9kIG9mIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdCBuZWVkcyB0byBiZVxuLy8ga2VwdCBpZGVudGljYWwgdG8gdGhlIHdheSBpdCBpcyBvYnRhaW5lZCBpbiBydW50aW1lLmpzXG52YXIgZyA9XG4gIHR5cGVvZiBnbG9iYWwgPT09IFwib2JqZWN0XCIgPyBnbG9iYWwgOlxuICB0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiID8gd2luZG93IDpcbiAgdHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgPyBzZWxmIDogdGhpcztcblxuLy8gVXNlIGBnZXRPd25Qcm9wZXJ0eU5hbWVzYCBiZWNhdXNlIG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCBjYWxsaW5nXG4vLyBgaGFzT3duUHJvcGVydHlgIG9uIHRoZSBnbG9iYWwgYHNlbGZgIG9iamVjdCBpbiBhIHdvcmtlci4gU2VlICMxODMuXG52YXIgaGFkUnVudGltZSA9IGcucmVnZW5lcmF0b3JSdW50aW1lICYmXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGcpLmluZGV4T2YoXCJyZWdlbmVyYXRvclJ1bnRpbWVcIikgPj0gMDtcblxuLy8gU2F2ZSB0aGUgb2xkIHJlZ2VuZXJhdG9yUnVudGltZSBpbiBjYXNlIGl0IG5lZWRzIHRvIGJlIHJlc3RvcmVkIGxhdGVyLlxudmFyIG9sZFJ1bnRpbWUgPSBoYWRSdW50aW1lICYmIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuXG4vLyBGb3JjZSByZWV2YWx1dGF0aW9uIG9mIHJ1bnRpbWUuanMuXG5nLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9ydW50aW1lXCIpO1xuXG5pZiAoaGFkUnVudGltZSkge1xuICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBydW50aW1lLlxuICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IG9sZFJ1bnRpbWU7XG59IGVsc2Uge1xuICAvLyBSZW1vdmUgdGhlIGdsb2JhbCBwcm9wZXJ0eSBhZGRlZCBieSBydW50aW1lLmpzLlxuICB0cnkge1xuICAgIGRlbGV0ZSBnLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgfSBjYXRjaChlKSB7XG4gICAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogaHR0cHM6Ly9yYXcuZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9tYXN0ZXIvTElDRU5TRSBmaWxlLiBBblxuICogYWRkaXRpb25hbCBncmFudCBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluXG4gKiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgaG93ZXZlciwgdGhlXG4gICAgICAgICAgLy8gcmVzdWx0IGZvciB0aGlzIGl0ZXJhdGlvbiB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWVcbiAgICAgICAgICAvLyByZWFzb24uIE5vdGUgdGhhdCByZWplY3Rpb25zIG9mIHlpZWxkZWQgUHJvbWlzZXMgYXJlIG5vdFxuICAgICAgICAgIC8vIHRocm93biBiYWNrIGludG8gdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgYXMgaXMgdGhlIGNhc2VcbiAgICAgICAgICAvLyB3aGVuIGFuIGF3YWl0ZWQgUHJvbWlzZSBpcyByZWplY3RlZC4gVGhpcyBkaWZmZXJlbmNlIGluXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYmV0d2VlbiB5aWVsZCBhbmQgYXdhaXQgaXMgaW1wb3J0YW50LCBiZWNhdXNlIGl0XG4gICAgICAgICAgLy8gYWxsb3dzIHRoZSBjb25zdW1lciB0byBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSB5aWVsZGVkXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIChzd2FsbG93IGl0IGFuZCBjb250aW51ZSwgbWFudWFsbHkgLnRocm93IGl0IGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBnZW5lcmF0b3IsIGFiYW5kb24gaXRlcmF0aW9uLCB3aGF0ZXZlcikuIFdpdGhcbiAgICAgICAgICAvLyBhd2FpdCwgYnkgY29udHJhc3QsIHRoZXJlIGlzIG5vIG9wcG9ydHVuaXR5IHRvIGV4YW1pbmUgdGhlXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIHNvIHRoZVxuICAgICAgICAgIC8vIG9ubHkgb3B0aW9uIGlzIHRvIHRocm93IGl0IGZyb20gdGhlIGF3YWl0IGV4cHJlc3Npb24sIGFuZFxuICAgICAgICAgIC8vIGxldCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhbmRsZSB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSBcIm9iamVjdFwiICYmIHByb2Nlc3MuZG9tYWluKSB7XG4gICAgICBpbnZva2UgPSBwcm9jZXNzLmRvbWFpbi5iaW5kKGludm9rZSk7XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBydW50aW1lLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBydW50aW1lLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBBbW9uZyB0aGUgdmFyaW91cyB0cmlja3MgZm9yIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsXG4gIC8vIG9iamVjdCwgdGhpcyBzZWVtcyB0byBiZSB0aGUgbW9zdCByZWxpYWJsZSB0ZWNobmlxdWUgdGhhdCBkb2VzIG5vdFxuICAvLyB1c2UgaW5kaXJlY3QgZXZhbCAod2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kpLlxuICB0eXBlb2YgZ2xvYmFsID09PSBcIm9iamVjdFwiID8gZ2xvYmFsIDpcbiAgdHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIiA/IHdpbmRvdyA6XG4gIHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiID8gc2VsZiA6IHRoaXNcbik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDExMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9mcm9tID0gcmVxdWlyZShcIi4uL2NvcmUtanMvYXJyYXkvZnJvbVwiKTtcblxudmFyIF9mcm9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Zyb20pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcnIyW2ldID0gYXJyW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBhcnIyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoMCwgX2Zyb20yLmRlZmF1bHQpKGFycik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3Byb21pc2UgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9wcm9taXNlXCIpO1xuXG52YXIgX3Byb21pc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvbWlzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBnZW4gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHJldHVybiBuZXcgX3Byb21pc2UyLmRlZmF1bHQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgZnVuY3Rpb24gc3RlcChrZXksIGFyZykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBfcHJvbWlzZTIuZGVmYXVsdC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgc3RlcChcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIHN0ZXAoXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdGVwKFwibmV4dFwiKTtcbiAgICB9KTtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2VcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDExNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucHJvbWlzZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuUHJvbWlzZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDExNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNsYXNzb2YgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsICRleHBvcnQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgaXNPYmplY3QgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gICAgICAgICAgPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBhbkluc3RhbmNlICAgICAgICAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgZm9yT2YgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZm9yLW9mJylcbiAgLCBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJylcbiAgLCB0YXNrICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL190YXNrJykuc2V0XG4gICwgbWljcm90YXNrICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKVxuICAsIFBST01JU0UgICAgICAgICAgICA9ICdQcm9taXNlJ1xuICAsIFR5cGVFcnJvciAgICAgICAgICA9IGdsb2JhbC5UeXBlRXJyb3JcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsICRQcm9taXNlICAgICAgICAgICA9IGdsb2JhbFtQUk9NSVNFXVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgaXNOb2RlICAgICAgICAgICAgID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2VzcydcbiAgLCBlbXB0eSAgICAgICAgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgSW50ZXJuYWwsIEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uKCl7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgICAgID0gJFByb21pc2UucmVzb2x2ZSgxKVxuICAgICAgLCBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW3JlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24oZXhlYyl7IGV4ZWMoZW1wdHksIGVtcHR5KTsgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKSAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2U7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIHNhbWVDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uKGEsIGIpe1xuICAvLyB3aXRoIGxpYnJhcnkgd3JhcHBlciBzcGVjaWFsIGNhc2VcbiAgcmV0dXJuIGEgPT09IGIgfHwgYSA9PT0gJFByb21pc2UgJiYgYiA9PT0gV3JhcHBlcjtcbn07XG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgcmV0dXJuIHNhbWVDb25zdHJ1Y3RvcigkUHJvbWlzZSwgQylcbiAgICA/IG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgIDogbmV3IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG52YXIgUHJvbWlzZUNhcGFiaWxpdHkgPSBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24oJCRyZXNvbHZlLCAkJHJlamVjdCl7XG4gICAgaWYocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCAgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59O1xudmFyIHBlcmZvcm0gPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICBleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHtlcnJvcjogZX07XG4gIH1cbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24ocHJvbWlzZSwgaXNSZWplY3Qpe1xuICBpZihwcm9taXNlLl9uKXJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZcbiAgICAgICwgb2sgICAgPSBwcm9taXNlLl9zID09IDFcbiAgICAgICwgaSAgICAgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbihyZWFjdGlvbil7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsXG4gICAgICAgICwgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmVcbiAgICAgICAgLCByZWplY3QgID0gcmVhY3Rpb24ucmVqZWN0XG4gICAgICAgICwgZG9tYWluICA9IHJlYWN0aW9uLmRvbWFpblxuICAgICAgICAsIHJlc3VsdCwgdGhlbjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmKGhhbmRsZXIpe1xuICAgICAgICAgIGlmKCFvayl7XG4gICAgICAgICAgICBpZihwcm9taXNlLl9oID09IDIpb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoaGFuZGxlciA9PT0gdHJ1ZSlyZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpO1xuICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSl7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZih0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKXtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXJ1bihjaGFpbltpKytdKTsgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICBwcm9taXNlLl9jID0gW107XG4gICAgcHJvbWlzZS5fbiA9IGZhbHNlO1xuICAgIGlmKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKW9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIGFicnVwdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZihpc1VuaGFuZGxlZChwcm9taXNlKSl7XG4gICAgICBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKGlzTm9kZSl7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKXtcbiAgICAgICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHZhbHVlfSk7XG4gICAgICAgIH0gZWxzZSBpZigoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKXtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHByb21pc2UuX2ggPSBpc05vZGUgfHwgaXNVbmhhbmRsZWQocHJvbWlzZSkgPyAyIDogMTtcbiAgICB9IHByb21pc2UuX2EgPSB1bmRlZmluZWQ7XG4gICAgaWYoYWJydXB0KXRocm93IGFicnVwdC5lcnJvcjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIGlmKHByb21pc2UuX2ggPT0gMSlyZXR1cm4gZmFsc2U7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2EgfHwgcHJvbWlzZS5fY1xuICAgICwgaSAgICAgPSAwXG4gICAgLCByZWFjdGlvbjtcbiAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSl7XG4gICAgcmVhY3Rpb24gPSBjaGFpbltpKytdO1xuICAgIGlmKHJlYWN0aW9uLmZhaWwgfHwgIWlzVW5oYW5kbGVkKHJlYWN0aW9uLnByb21pc2UpKXJldHVybiBmYWxzZTtcbiAgfSByZXR1cm4gdHJ1ZTtcbn07XG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZihpc05vZGUpe1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKXtcbiAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdn0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYoIXByb21pc2UuX2EpcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHByb21pc2UgPSB0aGlzXG4gICAgLCB0aGVuO1xuICBpZihwcm9taXNlLl9kKXJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmKHByb21pc2UgPT09IHZhbHVlKXRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSl7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7X3c6IHByb21pc2UsIF9kOiBmYWxzZX07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaChlKXtcbiAgICAkcmVqZWN0LmNhbGwoe193OiBwcm9taXNlLCBfZDogZmFsc2V9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYoIVVTRV9OQVRJVkUpe1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoKGVycil7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcbiAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG4gICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJykoJFByb21pc2UucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKXtcbiAgICAgIHZhciByZWFjdGlvbiAgICA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgICAgID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsICAgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9hKXRoaXMuX2EucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9zKW5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24ob25SZWplY3RlZCl7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbigpe1xuICAgIHZhciBwcm9taXNlICA9IG5ldyBJbnRlcm5hbDtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7UHJvbWlzZTogJFByb21pc2V9KTtcbnJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJykoJFByb21pc2UsIFBST01JU0UpO1xucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuL19jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocil7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlamVjdCAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KXtcbiAgICAvLyBpbnN0YW5jZW9mIGluc3RlYWQgb2YgaW50ZXJuYWwgc2xvdCBjaGVjayBiZWNhdXNlIHdlIHNob3VsZCBmaXggaXQgd2l0aG91dCByZXBsYWNlbWVudCBuYXRpdmUgUHJvbWlzZSBjb3JlXG4gICAgaWYoeCBpbnN0YW5jZW9mICRQcm9taXNlICYmIHNhbWVDb25zdHJ1Y3Rvcih4LmNvbnN0cnVjdG9yLCB0aGlzKSlyZXR1cm4geDtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVzb2x2ZSAgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgJCRyZXNvbHZlKHgpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVzb2x2ZSAgICA9IGNhcGFiaWxpdHkucmVzb2x2ZVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIHZhciB2YWx1ZXMgICAgPSBbXVxuICAgICAgICAsIGluZGV4ICAgICA9IDBcbiAgICAgICAgLCByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgdmFyICRpbmRleCAgICAgICAgPSBpbmRleCsrXG4gICAgICAgICAgLCBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgICAgaWYoYWxyZWFkeUNhbGxlZClyZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCAgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDExN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpe1xuICBpZighKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSl7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanNcbi8vIG1vZHVsZSBpZCA9IDExOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY3R4ICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNhbGwgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKVxuICAsIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgZ2V0SXRlckZuICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpXG4gICwgQlJFQUsgICAgICAgPSB7fVxuICAsIFJFVFVSTiAgICAgID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUil7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSlcbiAgICAsIGYgICAgICA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKVxuICAgICwgaW5kZXggID0gMFxuICAgICwgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZihpc0FycmF5SXRlcihpdGVyRm4pKWZvcihsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyApe1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qc1xuLy8gbW9kdWxlIGlkID0gMTE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgU1BFQ0lFUyAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTywgRCl7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3IsIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaW52b2tlICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faW52b2tlJylcbiAgLCBodG1sICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19odG1sJylcbiAgLCBjZWwgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgc2V0VGFzayAgICAgICAgICAgID0gZ2xvYmFsLnNldEltbWVkaWF0ZVxuICAsIGNsZWFyVGFzayAgICAgICAgICA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZVxuICAsIE1lc3NhZ2VDaGFubmVsICAgICA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbFxuICAsIGNvdW50ZXIgICAgICAgICAgICA9IDBcbiAgLCBxdWV1ZSAgICAgICAgICAgICAgPSB7fVxuICAsIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnXG4gICwgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24oKXtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIGlmKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSl7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYoIXNldFRhc2sgfHwgIWNsZWFyVGFzayl7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pe1xuICAgIHZhciBhcmdzID0gW10sIGkgPSAxO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uKCl7XG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpe1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZihyZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcycpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmKE1lc3NhZ2VDaGFubmVsKXtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsO1xuICAgIHBvcnQgICAgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZihPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbigpe1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogICBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qc1xuLy8gbW9kdWxlIGlkID0gMTIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgYXJncywgdGhhdCl7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoKGFyZ3MubGVuZ3RoKXtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gICAgICAgICAgICAgIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qc1xuLy8gbW9kdWxlIGlkID0gMTIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBPYnNlcnZlciAgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlclxuICAsIHByb2Nlc3MgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgUHJvbWlzZSAgID0gZ2xvYmFsLlByb21pc2VcbiAgLCBpc05vZGUgICAgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbigpe1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKXBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUoaGVhZCl7XG4gICAgICBmbiAgID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgaWYoaGVhZClub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZihwYXJlbnQpcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZihpc05vZGUpe1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJcbiAgfSBlbHNlIGlmKE9ic2VydmVyKXtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZVxuICAgICAgLCBub2RlICAgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHtjaGFyYWN0ZXJEYXRhOiB0cnVlfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKXtcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbihmbil7XG4gICAgdmFyIHRhc2sgPSB7Zm46IGZuLCBuZXh0OiB1bmRlZmluZWR9O1xuICAgIGlmKGxhc3QpbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZighaGVhZCl7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRhcmdldCwgc3JjLCBzYWZlKXtcbiAgZm9yKHZhciBrZXkgaW4gc3JjKXtcbiAgICBpZihzYWZlICYmIHRhcmdldFtrZXldKXRhcmdldFtrZXldID0gc3JjW2tleV07XG4gICAgZWxzZSBoaWRlKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIH0gcmV0dXJuIHRhcmdldDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanNcbi8vIG1vZHVsZSBpZCA9IDEyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgZFAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsIFNQRUNJRVMgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVkpe1xuICB2YXIgQyA9IHR5cGVvZiBjb3JlW0tFWV0gPT0gJ2Z1bmN0aW9uJyA/IGNvcmVbS0VZXSA6IGdsb2JhbFtLRVldO1xuICBpZihERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKWRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEVtaXR0ZXIgZnJvbSAnZXZlbnRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBFbWl0dGVyKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2Rpc3BhdGNoZXIuanMiLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICB0aGlzLl9ldmVudHMgPSB0aGlzLl9ldmVudHMgfHwge307XG4gIHRoaXMuX21heExpc3RlbmVycyA9IHRoaXMuX21heExpc3RlbmVycyB8fCB1bmRlZmluZWQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbkV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uKG4pIHtcbiAgaWYgKCFpc051bWJlcihuKSB8fCBuIDwgMCB8fCBpc05hTihuKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ24gbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlcicpO1xuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIGVyLCBoYW5kbGVyLCBsZW4sIGFyZ3MsIGksIGxpc3RlbmVycztcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcblxuICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gIGlmICh0eXBlID09PSAnZXJyb3InKSB7XG4gICAgaWYgKCF0aGlzLl9ldmVudHMuZXJyb3IgfHxcbiAgICAgICAgKGlzT2JqZWN0KHRoaXMuX2V2ZW50cy5lcnJvcikgJiYgIXRoaXMuX2V2ZW50cy5lcnJvci5sZW5ndGgpKSB7XG4gICAgICBlciA9IGFyZ3VtZW50c1sxXTtcbiAgICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIHRocm93IGVyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQXQgbGVhc3QgZ2l2ZSBzb21lIGtpbmQgb2YgY29udGV4dCB0byB0aGUgdXNlclxuICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdVbmNhdWdodCwgdW5zcGVjaWZpZWQgXCJlcnJvclwiIGV2ZW50LiAoJyArIGVyICsgJyknKTtcbiAgICAgICAgZXJyLmNvbnRleHQgPSBlcjtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZXIgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzVW5kZWZpbmVkKGhhbmRsZXIpKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAoaXNGdW5jdGlvbihoYW5kbGVyKSkge1xuICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgLy8gZmFzdCBjYXNlc1xuICAgICAgY2FzZSAxOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gc2xvd2VyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QoaGFuZGxlcikpIHtcbiAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICBsaXN0ZW5lcnMgPSBoYW5kbGVyLnNsaWNlKCk7XG4gICAgbGVuID0gbGlzdGVuZXJzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspXG4gICAgICBsaXN0ZW5lcnNbaV0uYXBwbHkodGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gVG8gYXZvaWQgcmVjdXJzaW9uIGluIHRoZSBjYXNlIHRoYXQgdHlwZSA9PT0gXCJuZXdMaXN0ZW5lclwiISBCZWZvcmVcbiAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICBpZiAodGhpcy5fZXZlbnRzLm5ld0xpc3RlbmVyKVxuICAgIHRoaXMuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLFxuICAgICAgICAgICAgICBpc0Z1bmN0aW9uKGxpc3RlbmVyLmxpc3RlbmVyKSA/XG4gICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXSA9IGxpc3RlbmVyO1xuICBlbHNlIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0ucHVzaChsaXN0ZW5lcik7XG4gIGVsc2VcbiAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBbdGhpcy5fZXZlbnRzW3R5cGVdLCBsaXN0ZW5lcl07XG5cbiAgLy8gQ2hlY2sgZm9yIGxpc3RlbmVyIGxlYWtcbiAgaWYgKGlzT2JqZWN0KHRoaXMuX2V2ZW50c1t0eXBlXSkgJiYgIXRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQpIHtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKHRoaXMuX21heExpc3RlbmVycykpIHtcbiAgICAgIG0gPSB0aGlzLl9tYXhMaXN0ZW5lcnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSBFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycztcbiAgICB9XG5cbiAgICBpZiAobSAmJiBtID4gMCAmJiB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoID4gbSkge1xuICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLndhcm5lZCA9IHRydWU7XG4gICAgICBjb25zb2xlLmVycm9yKCcobm9kZSkgd2FybmluZzogcG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSAnICtcbiAgICAgICAgICAgICAgICAgICAgJ2xlYWsgZGV0ZWN0ZWQuICVkIGxpc3RlbmVycyBhZGRlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICdVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byBpbmNyZWFzZSBsaW1pdC4nLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoKTtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZS50cmFjZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBub3Qgc3VwcG9ydGVkIGluIElFIDEwXG4gICAgICAgIGNvbnNvbGUudHJhY2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgdmFyIGZpcmVkID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gZygpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGcpO1xuXG4gICAgaWYgKCFmaXJlZCkge1xuICAgICAgZmlyZWQgPSB0cnVlO1xuICAgICAgbGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBnLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHRoaXMub24odHlwZSwgZyk7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBlbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWZmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZFxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBsaXN0LCBwb3NpdGlvbiwgbGVuZ3RoLCBpO1xuXG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIGxpc3QgPSB0aGlzLl9ldmVudHNbdHlwZV07XG4gIGxlbmd0aCA9IGxpc3QubGVuZ3RoO1xuICBwb3NpdGlvbiA9IC0xO1xuXG4gIGlmIChsaXN0ID09PSBsaXN0ZW5lciB8fFxuICAgICAgKGlzRnVuY3Rpb24obGlzdC5saXN0ZW5lcikgJiYgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpKSB7XG4gICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICBpZiAodGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3RlbmVyKTtcblxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGxpc3QpKSB7XG4gICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gPiAwOykge1xuICAgICAgaWYgKGxpc3RbaV0gPT09IGxpc3RlbmVyIHx8XG4gICAgICAgICAgKGxpc3RbaV0ubGlzdGVuZXIgJiYgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpKSB7XG4gICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICBsaXN0Lmxlbmd0aCA9IDA7XG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0LnNwbGljZShwb3NpdGlvbiwgMSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIga2V5LCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICBpZiAoIXRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcikge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgZWxzZSBpZiAodGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIGZvciAoa2V5IGluIHRoaXMuX2V2ZW50cykge1xuICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG4gICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICBpZiAoaXNGdW5jdGlvbihsaXN0ZW5lcnMpKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICB9IGVsc2UgaWYgKGxpc3RlbmVycykge1xuICAgIC8vIExJRk8gb3JkZXJcbiAgICB3aGlsZSAobGlzdGVuZXJzLmxlbmd0aClcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2xpc3RlbmVycy5sZW5ndGggLSAxXSk7XG4gIH1cbiAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIgcmV0O1xuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIHJldCA9IFtdO1xuICBlbHNlIGlmIChpc0Z1bmN0aW9uKHRoaXMuX2V2ZW50c1t0eXBlXSkpXG4gICAgcmV0ID0gW3RoaXMuX2V2ZW50c1t0eXBlXV07XG4gIGVsc2VcbiAgICByZXQgPSB0aGlzLl9ldmVudHNbdHlwZV0uc2xpY2UoKTtcbiAgcmV0dXJuIHJldDtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgaWYgKHRoaXMuX2V2ZW50cykge1xuICAgIHZhciBldmxpc3RlbmVyID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gICAgaWYgKGlzRnVuY3Rpb24oZXZsaXN0ZW5lcikpXG4gICAgICByZXR1cm4gMTtcbiAgICBlbHNlIGlmIChldmxpc3RlbmVyKVxuICAgICAgcmV0dXJuIGV2bGlzdGVuZXIubGVuZ3RoO1xuICB9XG4gIHJldHVybiAwO1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIHJldHVybiBlbWl0dGVyLmxpc3RlbmVyQ291bnQodHlwZSk7XG59O1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09PSB2b2lkIDA7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXZlbnRzL2V2ZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gMTI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBMb2NhbGl6ZSBmcm9tICcuL0xvY2FsaXplLmpzJztcclxuXHJcbmNvbnN0IGthbmppTnVtYmVyID0gTG9jYWxpemUudCgna2FuamlfbnVtYmVyJyk7XHJcbmNvbnN0IHBpZWNlS2FuamlNYXAgPSBMb2NhbGl6ZS5nZXRQaWVjZUthbmppTWFwKCk7XHJcblxyXG5mdW5jdGlvbiBpc1Byb21vdGVkKHB0eXBlKSB7XHJcblx0c3dpdGNoKHB0eXBlKSB7XHJcblx0Y2FzZSBcIlRPXCI6XHJcblx0Y2FzZSBcIk5ZXCI6XHJcblx0Y2FzZSBcIk5LXCI6XHJcblx0Y2FzZSBcIk5HXCI6XHJcblx0Y2FzZSBcIlVNXCI6XHJcblx0Y2FzZSBcIlJZXCI6XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1bnByb21vdGUocHR5cGUpIHtcclxuXHRzd2l0Y2gocHR5cGUpIHtcclxuXHRjYXNlIFwiVE9cIjpcclxuXHRcdHJldHVybiBcIkZVXCI7XHJcblx0Y2FzZSBcIk5ZXCI6XHJcblx0XHRyZXR1cm4gXCJLWVwiO1xyXG5cdGNhc2UgXCJOS1wiOlxyXG5cdFx0cmV0dXJuIFwiS0VcIjtcclxuXHRjYXNlIFwiTkdcIjpcclxuXHRcdHJldHVybiBcIkdJXCI7XHJcblx0Y2FzZSBcIlVNXCI6XHJcblx0XHRyZXR1cm4gXCJLQVwiO1xyXG5cdGNhc2UgXCJSWVwiOlxyXG5cdFx0cmV0dXJuIFwiSElcIjtcclxuXHR9XHJcblx0cmV0dXJuIHB0eXBlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRNb3ZlVGV4dChuLCBtb3Zlcykge1xyXG5cdHZhciBtb3ZlID0gbW92ZXNbbl07XHJcblx0dmFyIHByZXYgPSBtb3Zlc1tuIC0gMV07XHJcblx0dmFyIHRleHQgPSAobiArIDEpICsgXCIgXCI7XHJcblx0dmFyIG51bV9zdHIgPSBcIlwiO1xyXG5cdHZhciBwaWVjZV9zdHIgPSBcIlwiO1xyXG5cdHZhciBiZWZfc3RyID0gXCJcIjtcclxuXHJcblx0dGV4dCArPSAobW92ZS5jaGFyQXQoMCkgPT0gXCIrXCIpID8gXCLilrJcIiA6IFwi4pazXCI7XHJcblx0dmFyIHBsYWNlID0gbW92ZS5jaGFyQXQoMyk7IC8vZXguIDNcclxuXHRwbGFjZSArPSBrYW5qaU51bWJlclttb3ZlLmNoYXJBdCg0KV07IC8vZXguIOS4iVxyXG5cdGlmKHByZXYgJiYgKG1vdmUuc3Vic3RyKDMsMikgPT0gcHJldi5zdWJzdHIoMywyKSkgKSB7XHJcblx0XHRudW1fc3RyID0gTG9jYWxpemUucGllY2VTYW1lUGxhY2UocGxhY2UpO1xyXG5cdH1lbHNle1xyXG5cdFx0bnVtX3N0ciA9IHBsYWNlO1xyXG5cdH1cclxuXHJcblx0dmFyIHB0eXBlID0gbW92ZS5zdWJzdHIoNSwyKTtcclxuXHRpZihpc1Byb21vdGVkKHB0eXBlKSkge1xyXG5cdFx0dmFyIG9yaWdpbjtcclxuXHJcblx0XHRmb3IodmFyIGkgPSBuIC0gMjsgaSA+IDA7IGkgLT0gMikge1xyXG5cdFx0XHR2YXIgb2xkID0gbW92ZXNbaV07XHJcblx0XHRcdGlmKG9sZC5zdWJzdHIoMywyKSA9PSBtb3ZlLnN1YnN0cigxLDIpKSB7XHJcblx0XHRcdFx0b3JpZ2luID0gb2xkLnN1YnN0cig1LDIpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYocHR5cGUgIT0gb3JpZ2luKSB7IC8vIGJlY29tZSBwcm9tb3RlZFxyXG5cdFx0XHR2YXIgdW5wcm9tb3RlZCA9IHVucHJvbW90ZShwdHlwZSk7XHJcblx0XHRcdHBpZWNlX3N0ciA9IHBpZWNlS2FuamlNYXBbdW5wcm9tb3RlZF07XHJcblx0XHRcdHBpZWNlX3N0ciArPSBMb2NhbGl6ZS50KFwibmFyaVwiKTtcclxuXHRcdH1lbHNlIHtcclxuXHRcdFx0cGllY2Vfc3RyID0gcGllY2VLYW5qaU1hcFtwdHlwZV07XHJcblx0XHR9XHJcblx0fWVsc2Uge1xyXG5cdFx0cGllY2Vfc3RyID0gcGllY2VLYW5qaU1hcFtwdHlwZV07XHJcblx0fVxyXG5cdFxyXG5cdC8vIOijnOi2s+aDheWgsVxyXG5cdGlmKG1vdmUuc3Vic3RyKDEsIDIpID09IFwiMDBcIikge1xyXG5cdFx0YmVmX3N0ciArPSBMb2NhbGl6ZS50KFwidXRpXCIpO1xyXG5cdH1lbHNlIHtcclxuXHRcdGJlZl9zdHIgKz0gXCIoXCIgKyBtb3ZlLnN1YnN0cigxLCAyKSArIFwiKVwiO1xyXG5cdH1cclxuXHJcblx0aWYoTG9jYWxpemUuZ2V0TG9jYWxlKCkgPT0gXCJqYVwiKXtcclxuXHRcdHRleHQgKz0gbnVtX3N0ciArIHBpZWNlX3N0ciArIGJlZl9zdHI7XHJcblx0fWVsc2V7XHJcblx0XHRpZihtb3ZlLnN1YnN0cigxLCAyKSA9PSBcIjAwXCIpIHtcclxuXHRcdFx0dGV4dCArPSBwaWVjZV9zdHIgKyBiZWZfc3RyICsgbnVtX3N0cjtcdFxyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHRleHQgKz0gcGllY2Vfc3RyICsgbnVtX3N0ciArIGJlZl9zdHI7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdHJldHVybiB0ZXh0O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRNb3ZlVGV4dDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tbW9uL2dldE1vdmVUZXh0LmpzIiwiZnVuY3Rpb24gTG9jYWxpemUoKVxyXG57XHJcbn1cclxuTG9jYWxpemUubG9jYWxlID0gXCJqYVwiO1xyXG5Mb2NhbGl6ZS5pbWdVUkwgPSBcIlwiO1xyXG5cclxuTG9jYWxpemUudmFsdWVzID0ge1xyXG5cdFwiamFcIjoge1xyXG5cdFx0XCJzdGFydF9wb3NcIjogXCLplovlp4vlsYDpnaJcIixcclxuXHRcdFwia2FuamlfbnVtYmVyXCI6IFtcIumbtlwiLCBcIuS4gFwiLCBcIuS6jFwiLCBcIuS4iVwiLCBcIuWbm1wiLCBcIuS6lFwiLCBcIuWFrVwiLCBcIuS4g1wiLCBcIuWFq1wiLCBcIuS5nVwiXSxcclxuXHRcdFwiZGF5XCI6IFwi5pelXCIsXHJcblx0XHRcImhvdXJcIjogXCLmmYLplpNcIixcclxuXHRcdFwibWludXRlXCI6IFwi5YiGXCIsXHJcblx0XHRcInNlY29uZFwiOiBcIuenklwiLFxyXG5cdFx0XCJ1dGlcIjogXCLmiZNcIiwgXHJcblx0XHRcIm5hcmlcIjogXCLmiJBcIiAsXHJcblx0XHRcImRvdVwiOiBcIuWQjFwiLFxyXG5cdFx0XCJqb3Nla2lcIjogXCLlrprot6FcIixcclxuXHRcdFwid2luXCI6IFwi5Yud44GhXCIsXHJcblx0XHRcImxvc2VcIjogXCLosqDjgZFcIixcclxuXHRcdFwiZXZlbmx5XCI6IFwi5LqS6KeSXCIsXHJcblx0XHRcIndpbm5pbmdcIjogXCLli53li6JcIixcclxuXHRcdFwibW9yZV9iZXR0ZXJcIjogXCLlpKflhKrli6JcIixcclxuXHRcdFwiYmV0dGVyXCI6IFwi5YSq5YuiXCIsXHJcblx0XHRcIndvcnNlXCI6IFwi5Yqj5YuiXCIsXHJcblx0XHRcInRlcnJpYmxlX3dvcnNlXCI6IFwi5aSn5Yqj5YuiXCIsXHJcblx0XHRcImxvc2luZ1wiOiBcIuaVl+WLolwiLFxyXG5cdFx0XCJ3YXRjaGluZ1wiOiBcIuS6uuims+aIpuS4rVwiLFxyXG5cdFx0XCJub3RfdGFrZV9teVwiOiBcIuWRs+aWueOBrumnkuOBr+WPluOCjOOBvuOBm+OCk1wiLFxyXG5cdFx0XCJjaGF0XCI6IFwi44OB44Oj44OD44OIXCIsXHJcblx0XHRcImNtdF9jaGF0X2xpbWl0XCI6IFwiNDDlrZfku6XlhoXjgaflhaXlipvjgZfjgabjgY/jgaDjgZXjgYTjgIJcIlxyXG5cdH0sXHJcblx0XCJlblwiOiB7XHJcblx0XHRcInN0YXJ0X3Bvc1wiOiBcIlN0YXJ0IHBvc2l0aW9uXCIsXHJcblx0XHRcImthbmppX251bWJlclwiOiBbXCIwXCIsIFwiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCJdLFxyXG5cdFx0XCJkYXlcIjogXCIoZClcIixcclxuXHRcdFwiaG91clwiOiBcIjpcIixcclxuXHRcdFwibWludXRlXCI6IFwiOlwiLFxyXG5cdFx0XCJzZWNvbmRcIjogXCJcIixcclxuXHRcdFwidXRpXCI6IFwiJ1wiLCBcclxuXHRcdFwibmFyaVwiOiBcIitcIiAsXHJcblx0XHRcImRvdVwiOiBcIlwiLFxyXG5cdFx0XCJqb3Nla2lcIjogXCJqb3Nla2lcIixcclxuXHRcdFwid2luXCI6IFwid2luXCIsXHJcblx0XHRcImxvc2VcIjogXCJsb3NlXCIsXHJcblx0XHRcImV2ZW5seVwiOiBcImV2ZW5seVwiLFxyXG5cdFx0XCJ3aW5uaW5nXCI6IFwid2lubmluZ1wiLFxyXG5cdFx0XCJtb3JlX2JldHRlclwiOiBcIm1vcmUgYmV0dGVyXCIsXHJcblx0XHRcImJldHRlclwiOiBcImJldHRlclwiLFxyXG5cdFx0XCJ3b3JzZVwiOiBcIndvcnNlXCIsXHJcblx0XHRcInRlcnJpYmxlX3dvcnNlXCI6IFwidGVycmlibGUgd29yc2VcIixcclxuXHRcdFwibG9zaW5nXCI6IFwibG9zaW5nXCIsXHJcblx0XHRcIndhdGNoaW5nXCI6IFwicGVvcGxlIHdhdGNoaW5nXCIsXHJcblx0XHRcIm5vdF90YWtlX215XCI6IFwiUGllY2Ugb2YgYWxseSBkb2VzIG5vdCB0YWtlXCIsXHJcblx0XHRcImNoYXRcIjogXCJjaGF0XCIsXHJcblx0XHRcImNtdF9jaGF0X2xpbWl0XCI6IFwiUGxlYXNlIGlucHV0IGluIGxlc3MgdGhhbiA0MCBjaGFyYWN0ZXJzLlwiXHJcblx0fVxyXG59O1xyXG5Mb2NhbGl6ZS5nZXRMb2NhbGUgPSBmdW5jdGlvbigpXHJcbntcclxuXHRyZXR1cm4gTG9jYWxpemUubG9jYWxlO1xyXG59O1xyXG5Mb2NhbGl6ZS5zZXRMb2NhbGUgPSBmdW5jdGlvbihsY2wpXHJcbntcclxuXHRMb2NhbGl6ZS5sb2NhbGUgPSBsY2w7XHJcbn07XHJcblxyXG5Mb2NhbGl6ZS50ID0gZnVuY3Rpb24oa2V5KVxyXG57XHJcblx0cmV0dXJuIExvY2FsaXplLnZhbHVlc1tMb2NhbGl6ZS5sb2NhbGVdW2tleV07XHJcbn07XHJcblxyXG5Mb2NhbGl6ZS5waWVjZVNhbWVQbGFjZSA9IGZ1bmN0aW9uKHBsYWNlKXtcclxuXHRpZihMb2NhbGl6ZS5sb2NhbGUgPT0gXCJqYVwiKXtcclxuXHRcdHJldHVybiBMb2NhbGl6ZS50KFwiZG91XCIpO1xyXG5cdH1lbHNle1xyXG5cdFx0cmV0dXJuIHBsYWNlO1xyXG5cdH0gICAgICAgXHJcbn07XHJcblxyXG5Mb2NhbGl6ZS5jaGFuZ2VLZWlzZWkgPSBmdW5jdGlvbihrZWlzZWkpe1xyXG5cdHZhciBrZWlzZWlzID0gW1wi5Yud5YuiXCIsIFwi5aSn5YSq5YuiXCIsIFwi5YSq5YuiXCIsIFwi5LqS6KeSXCIsIFwi5Yqj5YuiXCIsIFwi5aSn5Yqj5YuiXCIsIFwi5pWX5YuiXCJdO1xyXG5cdHZhciBsY2xfa2Vpc2VpcyA9IFtMb2NhbGl6ZS50KFwid2lubmluZ1wiKSwgTG9jYWxpemUudChcIm1vcmVfYmV0dGVyXCIpLCBMb2NhbGl6ZS50KFwiYmV0dGVyXCIpLCBcclxuXHRMb2NhbGl6ZS50KFwiZXZlbmx5XCIpLCBMb2NhbGl6ZS50KFwid29yc2VcIiksIExvY2FsaXplLnQoXCJ0ZXJyaWJsZV93b3JzZVwiKSwgTG9jYWxpemUudChcImxvc2luZ1wiKV07XHJcblx0XHJcblx0dmFyIGlkeCA9IGtlaXNlaXMuaW5kZXhPZihrZWlzZWkpO1xyXG5cdGlmKGlkeCAhPSAtMSkge1xyXG5cdFx0cmV0dXJuIGxjbF9rZWlzZWlzW2lkeF07XHJcblx0fWVsc2V7XHJcblx0XHRyZXR1cm4ga2Vpc2VpO1xyXG5cdH1cclxufTtcclxuXHJcbkxvY2FsaXplLmdldEltZ1VSTCA9IGZ1bmN0aW9uKGltZylcclxue1xyXG5cdHZhciBkaXIgPSBMb2NhbGl6ZS5pbWdVUkwgKyBcIi9raWYvXCI7ICAgICAgICBcclxuXHRpZihMb2NhbGl6ZS5sb2NhbGUgPT0gXCJqYVwiKXtcclxuXHRcdHJldHVybiBkaXIgKyBpbWc7XHJcblx0fWVsc2V7XHJcblx0XHRyZXR1cm4gZGlyICsgTG9jYWxpemUubG9jYWxlICsgXCIvXCIgKyBpbWc7XHJcblx0fVxyXG59O1xyXG5cclxuTG9jYWxpemUuc2V0SW1nVVJMID0gZnVuY3Rpb24odXJsKVxyXG57XHJcblx0TG9jYWxpemUuaW1nVVJMID0gdXJsO1xyXG59O1xyXG5cclxuTG9jYWxpemUuZ2V0UGllY2VLYW5qaU1hcCA9IGZ1bmN0aW9uKClcclxue1xyXG5cdHZhciBwaWVjZUthbmppTWFwID0gbmV3IEFycmF5KCk7XHJcblx0c3dpdGNoKExvY2FsaXplLmxvY2FsZSl7XHJcblx0XHRjYXNlIFwiZW5cIjpcclxuXHRcdFx0cGllY2VLYW5qaU1hcFsnRlUnXSA9IFwiUFwiO1xyXG5cdFx0XHRwaWVjZUthbmppTWFwWydLWSddID0gXCJMXCI7XHJcblx0XHRcdHBpZWNlS2FuamlNYXBbJ0tFJ10gPSBcIk5cIjtcclxuXHRcdFx0cGllY2VLYW5qaU1hcFsnR0knXSA9IFwiU1wiO1xyXG5cdFx0XHRwaWVjZUthbmppTWFwWydLSSddID0gXCJHXCI7XHJcblx0XHRcdHBpZWNlS2FuamlNYXBbJ0tBJ10gPSBcIkJcIjtcclxuXHRcdFx0cGllY2VLYW5qaU1hcFsnSEknXSA9IFwiUlwiO1xyXG5cdFx0XHRwaWVjZUthbmppTWFwWydPVSddID0gXCJLXCI7XHJcblx0XHRcdHBpZWNlS2FuamlNYXBbJ1RPJ10gPSBcIitQXCI7XHJcblx0XHRcdHBpZWNlS2FuamlNYXBbJ05ZJ10gPSBcIitMXCI7XHJcblx0XHRcdHBpZWNlS2FuamlNYXBbJ05LJ10gPSBcIitOXCI7XHJcblx0XHRcdHBpZWNlS2FuamlNYXBbJ05HJ10gPSBcIitTXCI7XHJcblx0XHRcdHBpZWNlS2FuamlNYXBbJ1VNJ10gPSBcIitCXCI7XHJcblx0XHRcdHBpZWNlS2FuamlNYXBbJ1JZJ10gPSBcIitSXCI7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cGllY2VLYW5qaU1hcFsnRlUnXSA9IFwi5q2pXCI7XHJcblx0XHRcdHBpZWNlS2FuamlNYXBbJ0tZJ10gPSBcIummmVwiO1xyXG5cdFx0XHRwaWVjZUthbmppTWFwWydLRSddID0gXCLmoYJcIjtcclxuXHRcdFx0cGllY2VLYW5qaU1hcFsnR0knXSA9IFwi6YqAXCI7XHJcblx0XHRcdHBpZWNlS2FuamlNYXBbJ0tJJ10gPSBcIumHkVwiO1xyXG5cdFx0XHRwaWVjZUthbmppTWFwWydLQSddID0gXCLop5JcIjtcclxuXHRcdFx0cGllY2VLYW5qaU1hcFsnSEknXSA9IFwi6aObXCI7XHJcblx0XHRcdHBpZWNlS2FuamlNYXBbJ09VJ10gPSBcIueOiVwiO1xyXG5cdFx0XHRwaWVjZUthbmppTWFwWydUTyddID0gXCLjgahcIjtcclxuXHRcdFx0cGllY2VLYW5qaU1hcFsnTlknXSA9IFwi5oiQ6aaZXCI7XHJcblx0XHRcdHBpZWNlS2FuamlNYXBbJ05LJ10gPSBcIuaIkOahglwiO1xyXG5cdFx0XHRwaWVjZUthbmppTWFwWydORyddID0gXCLmiJDpioBcIjtcclxuXHRcdFx0cGllY2VLYW5qaU1hcFsnVU0nXSA9IFwi6aasXCI7XHJcblx0XHRcdHBpZWNlS2FuamlNYXBbJ1JZJ10gPSBcIuernFwiO1xyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcblx0cmV0dXJuIHBpZWNlS2FuamlNYXA7ICAgXHJcbn07XHJcbkxvY2FsaXplLmdldEZpbmlzaE1hcCA9IGZ1bmN0aW9uKClcclxue1xyXG5cdHZhciBmaW5pc2hNYXAgPSBuZXcgQXJyYXkoKTtcclxuXHRzd2l0Y2goTG9jYWxpemUubG9jYWxlKXtcclxuXHRcdGNhc2UgXCJlblwiOlxyXG5cdFx0XHRmaW5pc2hNYXBbXCJTRU5URV9XSU5fVE9SWU9cIl0gICAgICAgICA9IFwiU2VudGUgV2luXCI7XHJcblx0XHRcdGZpbmlzaE1hcFtcIlNFTlRFX1dJTl9DSEVDS01BVEVcIl0gICAgID0gXCJTZW50ZSBDaGVja21hdGUgV2luXCI7XHJcblx0XHRcdGZpbmlzaE1hcFtcIlNFTlRFX1dJTl9UUllcIl0gICAgICAgICAgID0gXCJTZW50ZSBUcnkgV2luXCI7XHJcblx0XHRcdGZpbmlzaE1hcFtcIlNFTlRFX1dJTl9USU1FT1VUXCJdICAgICAgID0gXCJHb3RlIFRpbWVvdXQgTG9zc1wiO1xyXG5cdFx0XHRmaW5pc2hNYXBbXCJTRU5URV9XSU5fRElTQ09OTkVDVFwiXSAgICA9IFwiR290ZSBDb25uZWN0aW9uIExvc3NcIjtcclxuXHRcdFx0ZmluaXNoTWFwW1wiU0VOVEVfV0lOX09VVEVfU0VOTklDSElcIl0gPSBcIkdvdGUgSWxsZWdhbGl0eSBMb3NzXCI7XHJcblx0XHRcdGZpbmlzaE1hcFtcIlNFTlRFX1dJTl9FTlRFUklOR0tJTkdcIl0gID0gXCJTZW50ZSBFbnRlcmluZyBXaW5cIjtcclxuXHJcblx0XHRcdGZpbmlzaE1hcFtcIkdPVEVfV0lOX1RPUllPXCJdICAgICAgICAgID0gXCJHb3RlIFdpblwiO1xyXG5cdFx0XHRmaW5pc2hNYXBbXCJHT1RFX1dJTl9DSEVDS01BVEVcIl0gICAgICA9IFwiR290ZSBDaGVja21hdGUgV2luXCI7XHJcblx0XHRcdGZpbmlzaE1hcFtcIkdPVEVfV0lOX1RSWVwiXSAgICAgICAgICAgID0gXCJHb3RlIFRyeSBXaW5cIjtcclxuXHRcdFx0ZmluaXNoTWFwW1wiR09URV9XSU5fVElNRU9VVFwiXSAgICAgICAgPSBcIlNlbnRlIFRpbWVvdXQgTG9zc1wiO1xyXG5cdFx0XHRmaW5pc2hNYXBbXCJHT1RFX1dJTl9ESVNDT05ORUNUXCJdICAgICA9IFwiU2VudGUgQ29ubmVjdGlvbiBMb3NzXCI7XHJcblx0XHRcdGZpbmlzaE1hcFtcIkdPVEVfV0lOX09VVEVfU0VOTklDSElcIl0gID0gXCJTZW50ZSBJbGxlZ2FsaXR5IExvc3NcIjtcclxuXHRcdFx0ZmluaXNoTWFwW1wiR09URV9XSU5fRU5URVJJTkdLSU5HXCJdICAgPSBcIkdvdGUgRW50ZXJpbmcgV2luXCI7XHJcblxyXG5cdFx0XHRmaW5pc2hNYXBbXCJEUkFXX1NFTk5JQ0hJXCJdICAgICAgICAgICA9IFwiRHJhdyBSZXBldGl0aW9uXCI7XHJcblx0XHRcdGZpbmlzaE1hcFtcIkRSQVdfUExZX0xJTUlUXCJdICAgICAgICAgID0gXCJEcmF3XCI7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0ZmluaXNoTWFwW1wiU0VOVEVfV0lOX1RPUllPXCJdICAgICAgICAgPSBcIuOBvuOBp+WFiOaJi+OBruWLneOBoVwiO1xyXG5cdFx0XHRmaW5pc2hNYXBbXCJTRU5URV9XSU5fQ0hFQ0tNQVRFXCJdICAgICA9IFwi44G+44Gn5YWI5omL44Gu5Yud44GhXCI7XHJcblx0XHRcdGZpbmlzaE1hcFtcIlNFTlRFX1dJTl9UUllcIl0gICAgICAgICAgID0gXCLjgb7jgaflhYjmiYvjga7jg4jjg6njgqTli53jgaFcIjtcclxuXHRcdFx0ZmluaXNoTWFwW1wiU0VOVEVfV0lOX1RJTUVPVVRcIl0gICAgICAgPSBcIuW+jOaJi+aZgumWk+WIh+OCjFwiO1xyXG5cdFx0XHRmaW5pc2hNYXBbXCJTRU5URV9XSU5fRElTQ09OTkVDVFwiXSAgICA9IFwi5b6M5omL5o6l57aa5YiH44KMXCI7XHJcblx0XHRcdGZpbmlzaE1hcFtcIlNFTlRFX1dJTl9PVVRFX1NFTk5JQ0hJXCJdID0gXCLlvozmiYvlj43liYfosqDjgZFcIjtcclxuXHRcdFx0ZmluaXNoTWFwW1wiU0VOVEVfV0lOX0VOVEVSSU5HS0lOR1wiXSAgPSBcIuOBvuOBp+WFiOaJi+OBruWFpeeOieWLneOBoVwiO1xyXG5cclxuXHRcdFx0ZmluaXNoTWFwW1wiR09URV9XSU5fVE9SWU9cIl0gICAgICAgICAgPSBcIuOBvuOBp+W+jOaJi+OBruWLneOBoVwiO1xyXG5cdFx0XHRmaW5pc2hNYXBbXCJHT1RFX1dJTl9DSEVDS01BVEVcIl0gICAgICA9IFwi44G+44Gn5b6M5omL44Gu5Yud44GhXCI7XHJcblx0XHRcdGZpbmlzaE1hcFtcIkdPVEVfV0lOX1RSWVwiXSAgICAgICAgICAgID0gXCLjgb7jgaflvozmiYvjga7jg4jjg6njgqTli53jgaFcIjtcclxuXHRcdFx0ZmluaXNoTWFwW1wiR09URV9XSU5fVElNRU9VVFwiXSAgICAgICAgPSBcIuWFiOaJi+aZgumWk+WIh+OCjFwiO1xyXG5cdFx0XHRmaW5pc2hNYXBbXCJHT1RFX1dJTl9ESVNDT05ORUNUXCJdICAgICA9IFwi5YWI5omL5o6l57aa5YiH44KMXCI7XHJcblx0XHRcdGZpbmlzaE1hcFtcIkdPVEVfV0lOX09VVEVfU0VOTklDSElcIl0gID0gXCLlhYjmiYvlj43liYfosqDjgZFcIjtcclxuXHRcdFx0ZmluaXNoTWFwW1wiR09URV9XSU5fRU5URVJJTkdLSU5HXCJdICAgPSBcIuOBvuOBp+W+jOaJi+OBruWFpeeOieWLneOBoVwiO1xyXG5cclxuXHRcdFx0ZmluaXNoTWFwW1wiRFJBV19TRU5OSUNISVwiXSAgICAgICAgICAgPSBcIuOBvuOBp+WNg+aXpeaJi+aIkOeri1wiO1xyXG5cdFx0XHRmaW5pc2hNYXBbXCJEUkFXX1BMWV9MSU1JVFwiXSAgICAgICAgICA9IFwi44G+44Gn5byV44GN5YiG44GRXCI7XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxuXHRyZXR1cm4gZmluaXNoTWFwOyAgICAgICBcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvY2FsaXplO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21tb24vTG9jYWxpemUuanMiLCJsZXQgZGVwbG95O1xyXG5sZXQgc2VydmVyO1xyXG5pZihsb2NhdGlvbi5ob3N0LmluZGV4T2YoJ3Byby53ZWJrYXR1LmNvbScpID09PSAtMSkge1xyXG5cdC8vZGV2XHJcblx0ZGVwbG95ID0gJy93YXJza2lmY29weS9wdWJsaWMnO1xyXG5cdHNlcnZlciA9ICcvd2Fyc2tpZmNvcHkvc2VydmVyL2luZGV4LnBocCc7XHJcbn1lbHNlIHtcclxuXHQvL3JlbGVhc2VcclxuXHRkZXBsb3kgPSAnL3dhcnNraWZjb3B5JztcclxuXHRzZXJ2ZXIgPSAnaHR0cDovL3NlcnZlci5wcm8ud2Via2F0dS5jb20vd2Fyc2tpZmNvcHkvaW5kZXgucGhwJztcclxuXHQvL3NlcnZlciA9ICdodHRwOi8vd2Fyc2tpZnVjb3B5LndlYmNyb3cuanAvaW5kZXgucGhwJyxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGRlcGxveSxcclxuXHRzZXJ2ZXIsXHJcblx0d2Fyc09yaWdpbjogJ2h0dHBzOi8vc2hvZ2l3YXJzLmhlcm96LmpwJyxcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb25maWcuanMiLCJpbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZy5qcyc7XHJcbmltcG9ydCBOb3RpZmljYXRpb24gZnJvbSAnLi9Ob3RpZmljYXRpb24nO1xyXG5cclxuY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xyXG50ZW1wbGF0ZS5pbm5lckhUTUwgPSBgXHJcbjxoZWFkZXI+XHJcblx0PGgxPjxhIGhyZWY9XCJcIj7lsIbmo4vjgqbjgqnjg7zjgrrmo4vorZzjgrPjg5Tjg7w8L2E+PC9oMT5cclxuPC9oZWFkZXI+XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0Y29uc3QgY29udGVudCA9IHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xyXG5cdFx0Y29udGVudC5hcHBlbmRDaGlsZChuZXcgTm90aWZpY2F0aW9uKCkpO1xyXG5cdFx0Y29udGVudC5xdWVyeVNlbGVjdG9yKCdhJykuaHJlZiA9IGNvbmZpZy5kZXBsb3k7XHJcblxyXG5cdFx0dGhpcy5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuXHR9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgneC1oZWFkZXInLCBIZWFkZXIpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9IZWFkZXIuanMiLCJpbXBvcnQgdXNlU3RhdGUgZnJvbSAndXNlc3RhdGUnO1xyXG5pbXBvcnQgeyBub3RpZmljYXRpb24gfSBmcm9tICcuLi9zdG9yZXMvaW5kZXguanMnO1xyXG5cclxuY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xyXG50ZW1wbGF0ZS5pbm5lckhUTUwgPSBgXHJcbjxwIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj48L3A+XHJcbmBcclxuXHJcbkB1c2VTdGF0ZVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RpZmljYWlvbiBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5oYW5kbGVOb3RpZmljYXRpb25DaGFuZ2UgPSB0aGlzLmhhbmRsZU5vdGlmaWNhdGlvbkNoYW5nZS5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy50aW1lcklkID0gbnVsbDtcclxuXHJcblx0XHRjb25zdCBjb250ZW50ID0gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XHJcblx0XHR0aGlzLnAgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ3AnKTtcclxuXHRcdFxyXG5cdFx0dGhpcy5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZU5vdGlmaWNhdGlvbkNoYW5nZShlKSB7XHJcblx0XHR0aGlzLnNldFN0YXRlKG5vdGlmaWNhdGlvbik7XHJcblx0fVxyXG5cclxuXHRjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuXHRcdG5vdGlmaWNhdGlvbi5vbignQ0hBTkdFJywgdGhpcy5oYW5kbGVOb3RpZmljYXRpb25DaGFuZ2UpO1xyXG5cdFx0dGhpcy5oYW5kbGVOb3RpZmljYXRpb25DaGFuZ2UoKTtcclxuXHR9XHJcblxyXG5cdGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG5cdFx0bm90aWZpY2F0aW9uLnJlbW92ZUxpc3RlbmVyKCdDSEFOR0UnLCB0aGlzLmhhbmRsZU5vdGlmaWNhdGlvbkNoYW5nZSk7XHJcblx0fVxyXG5cclxuXHRzdGF0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcclxuXHRcdHN3aXRjaChuYW1lKSB7XHJcblx0XHRcdGNhc2UgJ2Rpc3BsYXlJZCc6XHJcblx0XHRcdFx0dGhpcy5wLnRleHRDb250ZW50ID0gbm90aWZpY2F0aW9uLnRleHQ7XHJcblx0XHRcdFx0dGhpcy5wLnN0eWxlLmRpc3BsYXkgPSAnJztcclxuXHRcdFx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMudGltZXJJZCk7XHJcblx0XHRcdFx0dGhpcy50aW1lcklkID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5wLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblx0XHRcdFx0fSwgbm90aWZpY2F0aW9uLmRpc3BsYXlUaW1lKTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZ2V0IG9ic2VydmVkU3RhdGUoKSB7IHJldHVybiBbJ2Rpc3BsYXlJZCddOyB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgneC1ub3RpZmljYXRpb24nLCBOb3RpZmljYWlvbik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvTm90aWZpY2F0aW9uLmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qc1xuLy8gbW9kdWxlIGlkID0gMTMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKXtcbiAgcmV0dXJuICRPYmplY3QuZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMTM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHtkZWZpbmVQcm9wZXJ0eTogcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMTM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIHNldFN0YXRlKHN0YXRlKSB7XHJcblx0aWYodHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyB8fCBzdGF0ZSA9PT0gbnVsbCkgcmV0dXJuO1xyXG5cdFxyXG5cdGlmKHR5cGVvZiB0aGlzLnN0YXRlICE9PSAnb2JqZWN0JyB8fCB0aGlzLnN0YXRlID09PSBudWxsKSB0aGlzLnN0YXRlID0ge307XHJcblx0Y29uc3Qgb2xkU3RhdGUgPSB0aGlzLnN0YXRlO1xyXG5cdGNvbnN0IG5ld1N0YXRlID0gdGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUsIHN0YXRlKTtcclxuXHJcblx0aWYoQXJyYXkuaXNBcnJheSh0aGlzLmNvbnN0cnVjdG9yLm9ic2VydmVkU3RhdGUpID09PSBmYWxzZSkgcmV0dXJuO1xyXG5cdGlmKHR5cGVvZiB0aGlzLnN0YXRlQ2hhbmdlZENhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSByZXR1cm47XHJcblxyXG5cdHRoaXMuY29uc3RydWN0b3Iub2JzZXJ2ZWRTdGF0ZS5mb3JFYWNoKChuYW1lKSA9PiB7XHJcblx0XHRpZihvbGRTdGF0ZVtuYW1lXSA9PT0gbmV3U3RhdGVbbmFtZV0pIHJldHVybjtcclxuXHRcdHRoaXMuc3RhdGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkU3RhdGVbbmFtZV0sIG5ld1N0YXRlW25hbWVdKTtcclxuXHR9KTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB1c2VTdGF0ZSh0YXJnZXQpIHtcclxuXHRpZih0eXBlb2YgdGFyZ2V0ICE9PSAnZnVuY3Rpb24nKSB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XHJcblxyXG5cdHRhcmdldC5wcm90b3R5cGUuc2V0U3RhdGUgPSBzZXRTdGF0ZTtcclxuXHRyZXR1cm4gdGFyZ2V0O1xyXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3VzZXN0YXRlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDEzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsICRhc3NpZ24gID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgdmFyIEEgPSB7fVxuICAgICwgQiA9IHt9XG4gICAgLCBTID0gU3ltYm9sKClcbiAgICAsIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbihrKXsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCAgICAgPSB0b09iamVjdCh0YXJnZXQpXG4gICAgLCBhTGVuICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGluZGV4ID0gMVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZlxuICAgICwgaXNFbnVtICAgICA9IHBJRS5mO1xuICB3aGlsZShhTGVuID4gaW5kZXgpe1xuICAgIHZhciBTICAgICAgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSlcbiAgICAgICwga2V5cyAgID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBqICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBqKWlmKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xyXG50ZW1wbGF0ZS5pbm5lckhUTUwgPSBgXHJcbjxmb290ZXI+XHJcblx0PHA+5L2/44GE5pa5PC9wPlxyXG5cdDxwPuODleOCqeODvOODoOOBq0lE44KS5YWl5Yqb44GX44Gm5qSc57Si44GZ44KL44Go5pyA5paw44Gu5a++5bGAMTDku7bjgYzlj5blvpfjgZXjgozjgb7jgZnjgILmo4vorZzjga88c3Ryb25nPuOAjOiqreOBv+i+vOOCgOOAjeOCr+ODquODg+OCr+KGkuOAjOOCs+ODlOODvOOBmeOCi+OAjeOCr+ODquODg+OCrzwvc3Ryb25nPuOBp+OCr+ODquODg+ODl+ODnOODvOODieOBq+OCs+ODlOODvOOBleOCjOOBvuOBmeOAgjwvcD5cclxuXHQ8YWRkcmVzcz7kvZzogIU6IDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL3Zpbnl1ZmlcIiB0YXJnZXQ9XCJfYmxhbmtcIj5AdmlueXVmaTwvYT48L2FkZHJlc3M+XHJcbjwvZm9vdGVyPlxyXG5gO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290ZXIgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdGNvbnN0IGNvbnRlbnQgPSB0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcclxuXHRcdHRoaXMuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcblx0fVxyXG5cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd4LWZvb3RlcicsIEZvb3Rlcik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvRm9vdGVyLmpzIiwiaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb25zLmpzJztcclxuaW1wb3J0IHsgbWF0Y2hSZWNvcmRTZWFyY2ggfSBmcm9tICcuLi9zdG9yZXMvaW5kZXguanMnO1xyXG5pbXBvcnQgTWF0Y2hSZWNvcmRTZWFyY2hGb3JtIGZyb20gJy4vTWF0Y2hSZWNvcmRTZWFyY2hGb3JtLmpzJztcclxuaW1wb3J0IE1hdGNoUmVjb3JkcyBmcm9tICcuL01hdGNoUmVjb3Jkcy5qcyc7XHJcbmltcG9ydCBIaXN0b3J5UmVjb3JkcyBmcm9tICcuL0hpc3RvcnlSZWNvcmRzLmpzJztcclxuXHJcbi8qXHJcbmNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcclxudGVtcGxhdGUuaW5uZXJIVE1MID0gYFxyXG4ke25ldyBNYXRjaFJlY29yZFNlYXJjaEZvcm0oKS5vdXRlckhUTUx9XHJcbiR7bmV3IE1hdGNoUmVjb3JkcygpLm91dGVySFRNTH1cclxuJHtuZXcgSGlzdG9yeVJlY29yZHMoKS5vdXRlckhUTUx9XHJcbmA7XHJcbiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5jbGFzc05hbWUgPSAnaW5kZXgnO1xyXG5cdFx0dGhpcy5hcHBlbmRDaGlsZChuZXcgTWF0Y2hSZWNvcmRTZWFyY2hGb3JtKCkpO1xyXG5cdFx0dGhpcy5hcHBlbmRDaGlsZChuZXcgTWF0Y2hSZWNvcmRzKCkpO1xyXG5cdFx0dGhpcy5hcHBlbmRDaGlsZChuZXcgSGlzdG9yeVJlY29yZHMoKSk7XHJcblxyXG5cdFx0dGhpcy5tYXRjaFJlY29yZHMgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ21hdGNoLXJlY29yZHMnKTtcclxuXHR9XHJcblxyXG5cdGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG5cdFx0aWYobWF0Y2hSZWNvcmRTZWFyY2guc2VhcmNoSWQgPT09ICcnKXtcclxuXHRcdFx0dGhpcy5tYXRjaFJlY29yZHMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHRcdH1lbHNlIHtcclxuXHRcdFx0YWN0aW9ucy5mZXRjaE1hdGNoUmVjb3JkcyhcclxuXHRcdFx0XHRtYXRjaFJlY29yZFNlYXJjaC5zZWFyY2hJZCxcclxuXHRcdFx0XHRtYXRjaFJlY29yZFNlYXJjaC51cmxzLFxyXG5cdFx0XHRcdG1hdGNoUmVjb3JkU2VhcmNoLnN0YXJ0XHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHR0aGlzLm1hdGNoUmVjb3Jkcy5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuXHRcdGFjdGlvbnMudW5tb3VudEluZGV4KCk7XHJcblx0fVxyXG5cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd4LWluZGV4JywgSW5kZXgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0luZGV4LmpzIiwiaW1wb3J0IHVzZVN0YXRlIGZyb20gJ3VzZXN0YXRlJztcclxuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb25zLmpzJztcclxuaW1wb3J0IHsgbWF0Y2hSZWNvcmRTZWFyY2ggfSBmcm9tICcuLi9zdG9yZXMvaW5kZXguanMnO1xyXG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSB9IGZyb20gJy4uL2NvbW1vbi9yb3V0ZXIuanMnXHJcblxyXG5jb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XHJcbnRlbXBsYXRlLmlubmVySFRNTCA9IGBcclxuPGZvcm0+XHJcblx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImlkXCIgcGxhY2Vob2xkZXI9XCJJROOCkuWFpeWKm1wiLz5cclxuXHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj7mpJzntKI8L2J1dHRvbj5cclxuPC9mb3JtPlxyXG5gO1xyXG5cclxuQHVzZVN0YXRlXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdGNoUmVjb3JkU2VhcmNoRm9ybSBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5oYW5kbGVNYXRjaFJlY29yZFNlYXJjaENoYW5nZSA9IHRoaXMuaGFuZGxlTWF0Y2hSZWNvcmRTZWFyY2hDaGFuZ2UuYmluZCh0aGlzKTtcclxuXHJcblx0XHRjb25zdCBjb250ZW50ID0gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XHJcblxyXG5cdFx0Y29uc3QgZm9ybSA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xyXG5cdFx0dGhpcy5zZWFyY2hJZElucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xyXG5cdFx0dGhpcy5zdWJtaXRCdXR0b24gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xyXG5cclxuXHRcdHRoaXMuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcblxyXG5cdFx0dGhpcy5zZWFyY2hJZElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuXHRcdFx0YWN0aW9ucy5pbnB1dFNlYXJjaElkKHRoaXMuc2VhcmNoSWRJbnB1dC52YWx1ZSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0YnJvd3Nlckhpc3RvcnkucHVzaFN0YXRlKGAke2xvY2F0aW9uLnBhdGhuYW1lfT9pZD0ke21hdGNoUmVjb3JkU2VhcmNoLnNlYXJjaElkfWApO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHR9XHJcblxyXG5cdGhhbmRsZU1hdGNoUmVjb3JkU2VhcmNoQ2hhbmdlKCkge1xyXG5cdFx0dGhpcy5zZXRTdGF0ZShtYXRjaFJlY29yZFNlYXJjaCk7XHJcblx0fVxyXG5cclxuXHRjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuXHRcdG1hdGNoUmVjb3JkU2VhcmNoLm9uKCdDSEFOR0UnLCB0aGlzLmhhbmRsZU1hdGNoUmVjb3JkU2VhcmNoQ2hhbmdlKTtcclxuXHRcdHRoaXMuaGFuZGxlTWF0Y2hSZWNvcmRTZWFyY2hDaGFuZ2UoKTtcclxuXHR9XHJcblxyXG5cdGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG5cdFx0bWF0Y2hSZWNvcmRTZWFyY2gucmVtb3ZlTGlzdGVuZXIoJ0NIQU5HRScsIHRoaXMuaGFuZGxlTWF0Y2hSZWNvcmRTZWFyY2hDaGFuZ2UpO1xyXG5cdH1cclxuXHJcblx0c3RhdGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XHJcblx0XHRzd2l0Y2gobmFtZSkge1xyXG5cdFx0XHRjYXNlICdzZWFyY2hJZCc6XHJcblx0XHRcdFx0dGhpcy5zZWFyY2hJZElucHV0LnZhbHVlID0gbmV3VmFsdWU7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0Y2FzZSAnaXNGZXRjaGluZyc6XHJcblx0XHRcdFx0aWYobmV3VmFsdWUpIHRoaXMuc3VibWl0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRlbHNlIHRoaXMuc3VibWl0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldCBvYnNlcnZlZFN0YXRlKCkgeyByZXR1cm4gWydzZWFyY2hJZCcsICdpc0ZldGNoaW5nJyBdOyB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbWF0Y2gtcmVjb3JkLXNlYXJjaC1mb3JtJywgTWF0Y2hSZWNvcmRTZWFyY2hGb3JtKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9NYXRjaFJlY29yZFNlYXJjaEZvcm0uanMiLCJleHBvcnQgY29uc3QgYnJvd3Nlckhpc3RvcnkgPSB7XHJcblx0cHVzaFN0YXRlKHBhdGgpIHtcclxuXHRcdGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdwYXRoY2hhbmdlJywge1xyXG5cdFx0XHRkZXRhaWw6IHtcclxuXHRcdFx0XHRtZXRob2Q6ICdwdXNoU3RhdGUnLFxyXG5cdFx0XHRcdHBhdGgsXHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHRcdHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuXHR9LFxyXG5cdHJlcGxhY2VTdGF0ZShwYXRoKSB7XHJcblx0XHRjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgncGF0aGNoYW5nZScsIHtcclxuXHRcdFx0ZGV0YWlsOiB7XHJcblx0XHRcdFx0bWV0aG9kOiAncmVwbGFjZVN0YXRlJyxcclxuXHRcdFx0XHRwYXRoLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSk7XHJcblx0XHR3aW5kb3cuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcblx0fSxcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tbW9uL3JvdXRlci5qcyIsImltcG9ydCB1c2VTdGF0ZSBmcm9tICd1c2VzdGF0ZSc7XHJcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvYWN0aW9ucy5qcyc7XHJcbmltcG9ydCB7IG1hdGNoUmVjb3JkU2VhcmNoLCBtYXRjaFJlY29yZHMgfSBmcm9tICcuLi9zdG9yZXMvaW5kZXguanMnO1xyXG5pbXBvcnQgTWF0Y2hSZWNvcmRzVGFibGUgZnJvbSAnLi9NYXRjaFJlY29yZHNUYWJsZS5qcyc7XHJcblxyXG5jb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XHJcbnRlbXBsYXRlLmlubmVySFRNTCA9IGBcclxuPGE+5pu044Gr6Kqt44G/6L6844KAPC9hPlxyXG48cD48L3A+XHJcbmA7XHJcblxyXG5AdXNlU3RhdGVcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0Y2hSZWNvcmRzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLmhhbmRsZU1hdGNoUmVjb3JkU2VhcmNoQ2hhbmdlID0gdGhpcy5oYW5kbGVNYXRjaFJlY29yZFNlYXJjaENoYW5nZS5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5oYW5kbGVNYXRjaFJlY29yZHNDaGFuZ2UgPSB0aGlzLmhhbmRsZU1hdGNoUmVjb3Jkc0NoYW5nZS5iaW5kKHRoaXMpO1xyXG5cclxuXHJcblx0XHRjb25zdCBjb250ZW50ID0gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XHJcblx0XHR0aGlzLmEgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKTtcclxuXHRcdHRoaXMucCA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcigncCcpO1xyXG5cclxuXHRcdHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5tYXRjaFJlY29yZHNUYWJsZSA9IG5ldyBNYXRjaFJlY29yZHNUYWJsZSgpKTtcclxuXHRcdHRoaXMuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcblx0XHRcclxuXHRcdHRoaXMuYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0aWYobWF0Y2hSZWNvcmRTZWFyY2guaXNGZXRjaGluZyA9PT0gdHJ1ZSkgcmV0dXJuO1xyXG5cdFx0XHRhY3Rpb25zLmZldGNoTWF0Y2hSZWNvcmRzKFxyXG5cdFx0XHRcdG1hdGNoUmVjb3JkU2VhcmNoLnNlYXJjaElkLFxyXG5cdFx0XHRcdG1hdGNoUmVjb3JkU2VhcmNoLnVybHMsXHJcblx0XHRcdFx0bWF0Y2hSZWNvcmRTZWFyY2guc3RhcnQsXHJcblx0XHRcdCk7XHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxuXHRoYW5kbGVNYXRjaFJlY29yZFNlYXJjaENoYW5nZSgpIHtcclxuXHRcdHRoaXMuc2V0U3RhdGUobWF0Y2hSZWNvcmRTZWFyY2gpO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlTWF0Y2hSZWNvcmRzQ2hhbmdlKCkge1xyXG5cdFx0dGhpcy5zZXRTdGF0ZShtYXRjaFJlY29yZHMpO1xyXG5cdH1cclxuXHJcblx0Y29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcblx0XHRtYXRjaFJlY29yZFNlYXJjaC5vbignQ0hBTkdFJywgdGhpcy5oYW5kbGVNYXRjaFJlY29yZFNlYXJjaENoYW5nZSk7XHJcblx0XHRtYXRjaFJlY29yZHMub24oJ0NIQU5HRScsIHRoaXMuaGFuZGxlTWF0Y2hSZWNvcmRzQ2hhbmdlKTtcclxuXHJcblx0XHR0aGlzLmhhbmRsZU1hdGNoUmVjb3JkU2VhcmNoQ2hhbmdlKCk7XHJcblx0XHR0aGlzLmhhbmRsZU1hdGNoUmVjb3Jkc0NoYW5nZSgpO1xyXG5cdH1cclxuXHJcblx0ZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcblx0XHRtYXRjaFJlY29yZFNlYXJjaC5yZW1vdmVMaXN0ZW5lcignQ0hBTkdFJywgdGhpcy5oYW5kbGVNYXRjaFJlY29yZFNlYXJjaENoYW5nZSk7XHJcblx0XHRtYXRjaFJlY29yZHMucmVtb3ZlTGlzdGVuZXIoJ0NIQU5HRScsIHRoaXMuaGFuZGxlTWF0Y2hSZWNvcmRzQ2hhbmdlKTtcclxuXHR9XHJcblxyXG5cdHN0YXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xyXG5cdFx0c3dpdGNoKG5hbWUpIHtcclxuXHRcdFx0Y2FzZSAnaXNGZXRjaGluZyc6XHJcblx0XHRcdFx0aWYobmV3VmFsdWUpIHtcclxuXHRcdFx0XHRcdHRoaXMucC5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcblx0XHRcdFx0XHR0aGlzLnAudGV4dENvbnRlbnQgPSAn6Kqt44G/6L6844G/5LitLi4uJztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLnAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHRcdFx0XHRcdHRoaXMucC50ZXh0Q29udGVudCA9ICcnO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRjYXNlICdpc0xpbWl0JzpcclxuXHRcdFx0XHRpZihuZXdWYWx1ZSkgdGhpcy5hLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblx0XHRcdFx0ZWxzZSB0aGlzLmEuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdGNhc2UgJ3JlY29yZHMnOlxyXG5cdFx0XHRcdGNvbnN0IHJlY29yZHMgPSBuZXdWYWx1ZS5zbGljZSgwLCBtYXRjaFJlY29yZFNlYXJjaC5zdGFydCk7XHJcblxyXG5cdFx0XHRcdHRoaXMubWF0Y2hSZWNvcmRzVGFibGUuc2V0U3RhdGUoeyByZWNvcmRzIH0pO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHN0YXRpYyBnZXQgb2JzZXJ2ZWRTdGF0ZSgpIHsgcmV0dXJuIFsnaXNGZXRjaGluZycsICdpc0xpbWl0JywgJ3JlY29yZHMnXTsgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ21hdGNoLXJlY29yZHMnLCBNYXRjaFJlY29yZHMpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL01hdGNoUmVjb3Jkcy5qcyIsImltcG9ydCB1c2VTdGF0ZSBmcm9tICd1c2VzdGF0ZSc7XHJcbmltcG9ydCBNYXRjaFJlY29yZEhlYWRlclRyIGZyb20gJy4vTWF0Y2hSZWNvcmRIZWFkZXJUci5qcyc7XHJcbmltcG9ydCBNYXRjaFJlY29yZFRyIGZyb20gJy4vTWF0Y2hSZWNvcmRUci5qcyc7XHJcblxyXG5jb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XHJcbnRlbXBsYXRlLmlubmVySFRNTCA9IGBcclxuPHRhYmxlPlxyXG5cdDx0aGVhZD5cclxuXHQ8L3RoZWFkPlxyXG5cdDx0Ym9keT5cclxuXHQ8L3Rib2R5PlxyXG48L3RhYmxlPlxyXG48cCBjbGFzcz1cImFubm90YXRpb25cIj7igLs8c3BhbiBjbGFzcz1cIndpbm5lci1ib3hcIj4mbmJzcDs8L3NwYW4+Li4u5Yud44GhPC9wPlxyXG5gO1xyXG5cclxuQHVzZVN0YXRlXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdGNoUmVjb3Jkc1RhYmxlIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHRjb25zdCBjb250ZW50ID0gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XHJcblx0XHR0aGlzLnRib2R5ID0gY29udGVudC5xdWVyeVNlbGVjdG9yKCd0Ym9keScpO1xyXG5cdFx0XHJcblx0XHRjb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ3RoZWFkJykuYXBwZW5kQ2hpbGQobmV3IE1hdGNoUmVjb3JkSGVhZGVyVHIoKSk7XHJcblx0XHR0aGlzLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG5cdH1cclxuXHJcblx0c3RhdGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XHJcblx0XHRzd2l0Y2gobmFtZSkge1xyXG5cdFx0XHRjYXNlICdyZWNvcmRzJzpcclxuXHRcdFx0XHR0aGlzLnRib2R5LmlubmVySFRNTCA9ICcnO1xyXG5cdFx0XHRcdG5ld1ZhbHVlLmZvckVhY2goKHJlY29yZCwgaSkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy50Ym9keS5hcHBlbmRDaGlsZChuZXcgTWF0Y2hSZWNvcmRUcihyZWNvcmQpKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZ2V0IG9ic2VydmVkU3RhdGUoKSB7IHJldHVybiBbJ3JlY29yZHMnXSB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbWF0Y2gtcmVjb3Jkcy10YWJsZScsIE1hdGNoUmVjb3Jkc1RhYmxlKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9NYXRjaFJlY29yZHNUYWJsZS5qcyIsImNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcclxuLypcclxudGVtcGxhdGUuaW5uZXJIVE1MID0gYFxyXG48dGg+5a++5bGA5pel5pmCPC90aD5cclxuPHRoPuOCr+ODqeOCuTwvdGg+XHJcbjx0aD7lhYjmiYs8L3RoPlxyXG48dGg+5b6M5omLPC90aD5cclxuPHRoPuaji+itnDwvdGg+XHJcbmBcclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0Y2hSZWNvcmRIZWFkZXJUciBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0Ly90aGlzLmFwcGVuZENoaWxkKHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcclxuXHRcdC8vSUXjga7jgZ/jgoHjgat0aOimgee0oOOBr0RPTeOBp+S9nOOCiztcclxuXHRcdGNvbnN0IHRocyA9IEFycmF5KDUpLmZpbGwoMCkubWFwKCgpID0+IHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKSk7XHJcblx0XHR9KTtcclxuXHRcdHRoc1swXS50ZXh0Q29udGVudCA9ICflr77lsYDml6XmmYInO1xyXG5cdFx0dGhzWzFdLnRleHRDb250ZW50ID0gJ+eoruWIpSc7XHJcblx0XHR0aHNbMl0udGV4dENvbnRlbnQgPSAn5YWI5omLJztcclxuXHRcdHRoc1szXS50ZXh0Q29udGVudCA9ICflvozmiYsnO1xyXG5cdFx0dGhzWzRdLnRleHRDb250ZW50ID0gJ+aji+itnCc7XHJcblxyXG5cdFx0dGhpcy5zdHlsZS5kaXNwbGF5ID0gJ3RhYmxlLXJvdyc7XHJcblx0fVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ21hdGNoLXJlY29yZC1oZWFkZXItdHInLCBNYXRjaFJlY29yZEhlYWRlclRyKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9NYXRjaFJlY29yZEhlYWRlclRyLmpzIiwiaW1wb3J0IHVzZVN0YXRlIGZyb20gJ3VzZXN0YXRlJztcclxuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb25zLmpzJztcclxuaW1wb3J0IHsgbWF0Y2hSZWNvcmQgfSBmcm9tICcuLi9zdG9yZXMvaW5kZXguanMnO1xyXG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSB9IGZyb20gJy4uL2NvbW1vbi9yb3V0ZXIuanMnO1xyXG5cclxuXHJcbmNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcclxuLypcclxudGVtcGxhdGUuaW5uZXJIVE1MID0gYFxyXG48dGQ+PC90ZD5cclxuPHRkPjwvdGQ+XHJcbjx0ZD48YT48L2E+PC90ZD5cclxuPHRkPjxhPjwvYT48L3RkPlxyXG48dGQ+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+6Kqt44G/6L6844KAPC9idXR0b24+PC90ZD5cclxuPHN0eWxlPlxyXG5tYXRjaC1yZWNvcmQtdHIge1xyXG5cdGRpc3BsYXk6IHRhYmxlLXJvdztcclxufVxyXG48L3N0eWxlPlxyXG5gO1xyXG4qL1xyXG5cclxudGVtcGxhdGUuaW5uZXJIVE1MID0gYFxyXG5gO1xyXG5cclxuQHVzZVN0YXRlXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdGNoUmVjb3JkVHIgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcblx0Y29uc3RydWN0b3IocmVjb3JkKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuaGFuZGxlTWF0Y2hSZWNvcmRDaGFuZ2UgPSB0aGlzLmhhbmRsZU1hdGNoUmVjb3JkQ2hhbmdlLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLnJlY29yZCA9IHJlY29yZDtcclxuXHJcblx0XHR0aGlzLnN0eWxlLmRpc3BsYXkgPSAndGFibGUtcm93JztcclxuXHRcdC8vSUXjga7jgZ/jgoHjgat0ZOimgee0oOOBr0RPTeOBp+S9nOOCiztcclxuXHRcdHRoaXMudGRzID0gQXJyYXkoNSkuZmlsbCgwKS5tYXAoKCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy50ZHNbMl0uaW5uZXJIVE1MID0gJzxhPjwvYT4nO1xyXG5cdFx0dGhpcy50ZHNbM10uaW5uZXJIVE1MID0gJzxhPjwvYT4nO1xyXG5cdFx0dGhpcy50ZHNbNF0uaW5uZXJIVE1MID0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiPuiqreOBv+i+vOOCgDwvYnV0dG9uPic7XHJcblxyXG5cdFx0dGhpcy5raWZ1Q29weUJ1dHRvbiA9IHRoaXMudGRzWzRdLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xyXG5cdFx0dGhpcy5raWZ1Q29weUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0aWYodGhpcy5yZWNvcmQuZG9lc0hhdmVLaWZ1KSB7XHJcblx0XHRcdFx0YWN0aW9ucy5jb3B5S2lmdShyZWNvcmQpO1xyXG5cdFx0XHR9ZWxzZSB7XHJcblx0XHRcdFx0YWN0aW9ucy5mZXRjaEtpZnUocmVjb3JkKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVNYXRjaFJlY29yZENoYW5nZShlKSB7XHJcblx0XHR0aGlzLnNldFN0YXRlKHRoaXMucmVjb3JkKTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZVVzZXJBbmNob3JDbGljayhlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRicm93c2VySGlzdG9yeS5wdXNoU3RhdGUoZS5jdXJyZW50VGFyZ2V0LmhyZWYpO1xyXG5cdH1cclxuXHJcblx0Y29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcblx0XHRtYXRjaFJlY29yZC5vbignQ0hBTkdFJywgdGhpcy5oYW5kbGVNYXRjaFJlY29yZENoYW5nZSk7XHJcblx0XHR0aGlzLmhhbmRsZU1hdGNoUmVjb3JkQ2hhbmdlKCk7XHJcblx0fVxyXG5cclxuXHRkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuXHRcdG1hdGNoUmVjb3JkLnJlbW92ZUxpc3RlbmVyKCdDSEFOR0UnLCB0aGlzLmhhbmRsZU1hdGNoUmVjb3JkQ2hhbmdlKTtcclxuXHR9XHJcblxyXG5cdHN0YXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xyXG5cdFx0c3dpdGNoKG5hbWUpIHtcclxuXHRcdFx0Y2FzZSAndGltZSc6XHJcblx0XHRcdFx0dGhpcy50ZHNbMF0uaW5uZXJIVE1MID0gYDxhIGhyZWY9XCIke3RoaXMucmVjb3JkLnVybH1cIiB0YXJnZXQ9XCJfYmxhbmtcIj4ke3RoaXMucmVjb3JkLnRpbWV9PC9hPmBcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdGNhc2UgJ2NsYXNzTmFtZSc6XHJcblx0XHRcdFx0dGhpcy50ZHNbMV0udGV4dENvbnRlbnQgPSB0aGlzLnJlY29yZC5jbGFzc05hbWU7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRjYXNlICdibGFjayc6IHtcclxuXHRcdFx0XHRjb25zdCBhID0gdGhpcy50ZHNbMl0ucXVlcnlTZWxlY3RvcignYScpO1xyXG5cdFx0XHRcdGEuaHJlZiA9IGAke2xvY2F0aW9uLnBhdGhuYW1lfT9pZD0ke3RoaXMucmVjb3JkLmJsYWNrLnNwbGl0KCcgJylbMF19YDtcclxuXHRcdFx0XHRhLm9uY2xpY2sgPSB0aGlzLmhhbmRsZVVzZXJBbmNob3JDbGljaztcclxuXHRcdFx0XHRhLnRleHRDb250ZW50ID0gdGhpcy5yZWNvcmQuYmxhY2s7XHJcblxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlICd3aGl0ZSc6XHJcblx0XHRcdFx0Y29uc3QgYSA9IHRoaXMudGRzWzJdLnF1ZXJ5U2VsZWN0b3IoJ2EnKTtcclxuXHRcdFx0XHRhLmhyZWYgPSBgJHtsb2NhdGlvbi5wYXRobmFtZX0/aWQ9JHt0aGlzLnJlY29yZC53aGl0ZS5zcGxpdCgnICcpWzBdfWA7XHJcblx0XHRcdFx0YS5vbmNsaWNrID0gdGhpcy5oYW5kbGVVc2VyQW5jaG9yQ2xpY2s7XHJcblx0XHRcdFx0YS50ZXh0Q29udGVudCA9IHRoaXMucmVjb3JkLndoaXRlO1xyXG5cclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdGNhc2UgJ2lzV2lubmVyJzpcclxuXHRcdFx0XHRpZihuZXdWYWx1ZSkgdGhpcy5jbGFzc0xpc3QuYWRkKCd3aW5uZXInKTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdGNhc2UgJ2lzRmV0Y2hpbmdLaWZ1JzpcclxuXHRcdFx0XHRpZihuZXdWYWx1ZSkge1xyXG5cdFx0XHRcdFx0dGhpcy5raWZ1Q29weUJ1dHRvbi50ZXh0Q29udGVudCA9ICfoqq3jgb/ovrzjgb/kuK0nO1xyXG5cdFx0XHRcdFx0dGhpcy5raWZ1Q29weUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcblx0XHRcdFx0fWVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5raWZ1Q29weUJ1dHRvbi50ZXh0Q29udGVudCA9ICfoqq3jgb/ovrzjgoAnO1xyXG5cdFx0XHRcdFx0dGhpcy5raWZ1Q29weUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRjYXNlICdkb2VzSGF2ZUtpZnUnOlxyXG5cdFx0XHRcdGlmKG5ld1ZhbHVlKSB0aGlzLmtpZnVDb3B5QnV0dG9uLnRleHRDb250ZW50ID0gJ+OCs+ODlOODvOOBmeOCiyc7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldCBvYnNlcnZlZFN0YXRlKCkge1xyXG5cdFx0cmV0dXJuIFsndGltZScsICdjbGFzc05hbWUnLCAnYmxhY2snLCAnd2hpdGUnLCAnaXNXaW5uZXInLCAnaXNGZXRjaGluZ0tpZnUnLCAnZG9lc0hhdmVLaWZ1J107XHJcblx0fVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ21hdGNoLXJlY29yZC10cicsIE1hdGNoUmVjb3JkVHIpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL01hdGNoUmVjb3JkVHIuanMiLCJpbXBvcnQgdXNlU3RhdGUgZnJvbSAndXNlc3RhdGUnO1xyXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2FjdGlvbnMuanMnO1xyXG5pbXBvcnQgeyBoaXN0b3J5UmVjb3JkcyB9IGZyb20gJy4uL3N0b3Jlcy9pbmRleC5qcyc7XHJcbmltcG9ydCBNYXRjaFJlY29yZHNUYWJsZSBmcm9tICcuL01hdGNoUmVjb3Jkc1RhYmxlLmpzJztcclxuXHJcbmNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcclxudGVtcGxhdGUuaW5uZXJIVE1MID0gYFxyXG48YT48L2E+XHJcbmA7XHJcblxyXG5AdXNlU3RhdGVcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGlzdG9yeVJlY29yZHMgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuaGFuZGxlSGlzdG9yeVJlY29yZHNDaGFuZ2UgPSB0aGlzLmhhbmRsZUhpc3RvcnlSZWNvcmRzQ2hhbmdlLmJpbmQodGhpcyk7XHJcblxyXG5cdFx0Y29uc3QgY29udGVudCA9IHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xyXG5cdFx0dGhpcy5hID0gY29udGVudC5xdWVyeVNlbGVjdG9yKCdhJyk7XHJcblx0XHRjb250ZW50LmFwcGVuZENoaWxkKHRoaXMubWF0Y2hSZWNvcmRzVGFibGUgPSBuZXcgTWF0Y2hSZWNvcmRzVGFibGUoKSk7XHJcblx0XHR0aGlzLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG5cclxuXHRcdHRoaXMuYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0aWYoaGlzdG9yeVJlY29yZHMuc2hvdWxkRGlzcGxheSkge1xyXG5cdFx0XHRcdGFjdGlvbnMuaGlkZUhpc3RvcnlSZWNvcmRzKCk7XHJcblx0XHRcdH1lbHNlIHtcclxuXHRcdFx0XHRhY3Rpb25zLnNob3dIaXN0b3J5UmVjb3JkcygpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxuXHRoYW5kbGVIaXN0b3J5UmVjb3Jkc0NoYW5nZShlKSB7XHJcblx0XHR0aGlzLnNldFN0YXRlKGhpc3RvcnlSZWNvcmRzKTtcclxuXHR9XHJcblxyXG5cdGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG5cdFx0aGlzdG9yeVJlY29yZHMub24oJ0NIQU5HRScsIHRoaXMuaGFuZGxlSGlzdG9yeVJlY29yZHNDaGFuZ2UpO1xyXG5cdFx0dGhpcy5oYW5kbGVIaXN0b3J5UmVjb3Jkc0NoYW5nZSgpO1xyXG5cdH1cclxuXHJcblx0ZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcblx0XHRoaXN0b3J5UmVjb3Jkcy5yZW1vdmVMaXN0ZW5lcignQ0hBTkdFJywgdGhpcy5oYW5kbGVIaXN0b3J5UmVjb3Jkc0NoYW5nZSk7XHJcblx0fVxyXG5cclxuXHRzdGF0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcclxuXHRcdHN3aXRjaChuYW1lKSB7XHJcblx0XHRcdGNhc2UgJ3Nob3VsZERpc3BsYXknOlxyXG5cdFx0XHRcdGlmKG5ld1ZhbHVlKSB7XHJcblx0XHRcdFx0XHR0aGlzLmEudGV4dENvbnRlbnQgPSAn5bGl5q2044KS6ZaJ44GY44KLJztcclxuXHRcdFx0XHRcdHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5tYXRjaFJlY29yZHNUYWJsZSk7XHJcblx0XHRcdFx0fWVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5hLnRleHRDb250ZW50ID0gJ+WxpeattOOCkuimi+OCiygxMOS7tiknO1xyXG5cdFx0XHRcdFx0dGhpcy5yZW1vdmVDaGlsZCh0aGlzLm1hdGNoUmVjb3Jkc1RhYmxlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0Y2FzZSAncmVjb3Jkcyc6XHJcblx0XHRcdFx0dGhpcy5tYXRjaFJlY29yZHNUYWJsZS5zZXRTdGF0ZSh7J3JlY29yZHMnOiBoaXN0b3J5UmVjb3Jkcy5yZWNvcmRzfSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZ2V0IG9ic2VydmVkU3RhdGUoKSB7IHJldHVybiBbJ3Nob3VsZERpc3BsYXknLCAncmVjb3JkcyddOyB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnaGlzdG9yeS1yZWNvcmRzJywgSGlzdG9yeVJlY29yZHMpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0hpc3RvcnlSZWNvcmRzLmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2VuZFBhZ2VWaWV3KCkge1xyXG5cdGlmKCEgd2luZG93LmdhKSByZXR1cm47XHJcblx0Z2EoJ3NlbmQnLCAncGFnZVZpZXcnLCB7XHJcblx0XHRwYWdlOiBsb2NhdGlvbi5wYXRobmFtZSArIGxvY2F0aW9uLnNlYXJjaCxcclxuXHRcdHRpdGxlOiBkb2N1bWVudC50aXRsZSxcclxuXHR9KTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21tb24vc2VuZFBhZ2VWaWV3LmpzIiwiaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tICcuL05vdGlmaWNhdGlvbi5qcyc7XHJcbmltcG9ydCBNYXRjaFJlY29yZFNlYXJjaCBmcm9tICcuL01hdGNoUmVjb3JkU2VhcmNoLmpzJztcclxuaW1wb3J0IE1hdGNoUmVjb3JkcyBmcm9tICcuL01hdGNoUmVjb3Jkcy5qcyc7XHJcbmltcG9ydCBNYXRjaFJlY29yZCBmcm9tICcuL01hdGNoUmVjb3JkLmpzJztcclxuaW1wb3J0IEhpc3RvcnlSZWNvcmRzIGZyb20gJy4vSGlzdG9yeVJlY29yZHMuanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IG5vdGlmaWNhdGlvbiA9IG5ldyBOb3RpZmljYXRpb24oKTtcclxuZXhwb3J0IGNvbnN0IG1hdGNoUmVjb3JkU2VhcmNoID0gbmV3IE1hdGNoUmVjb3JkU2VhcmNoKCk7XHJcbmV4cG9ydCBjb25zdCBtYXRjaFJlY29yZHMgPSBuZXcgTWF0Y2hSZWNvcmRzKCk7XHJcbmV4cG9ydCBjb25zdCBtYXRjaFJlY29yZCA9IG5ldyBNYXRjaFJlY29yZCgpO1xyXG5leHBvcnQgY29uc3QgaGlzdG9yeVJlY29yZHMgPSBuZXcgSGlzdG9yeVJlY29yZHMoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3RvcmVzL2luZGV4LmpzIiwiaW1wb3J0IEVtaXR0ZXIgZnJvbSAnZXZlbnRzJztcclxuaW1wb3J0IGRpc3BhdGNoZXIgZnJvbSAnLi4vZGlzcGF0Y2hlci5qcyc7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0dGV4dDogJycsXHJcblx0ZGlzcGxheVRpbWU6IDAsXHJcblx0ZGlzcGxheUlkOiAwLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RpZmljYXRpb24gZXh0ZW5kcyBFbWl0dGVyIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBpbml0aWFsU3RhdGUpO1xyXG5cclxuXHRcdGRpc3BhdGNoZXIub24oJ2ZldGNoTWF0Y2hSZWNvcmRzRmFpbGQnLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuZGlzcGxheUlkKys7XHJcblx0XHRcdHRoaXMuZGlzcGxheVRpbWUgPSA1MDAwO1xyXG5cdFx0XHR0aGlzLnRleHQgPSAn5a++5bGA44Gu6Kqt44G/6L6844G/44Gr5aSx5pWX44GX44G+44GX44GfJztcclxuXHJcblx0XHRcdHRoaXMuZW1pdCgnQ0hBTkdFJyk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRkaXNwYXRjaGVyLm9uKCdmZXRjaEtpZnVGYWlsZWQnLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuZGlzcGxheUlkKys7XHJcblx0XHRcdHRoaXMuZGlzcGxheVRpbWUgPSA1MDAwO1xyXG5cdFx0XHR0aGlzLnRleHQgPSAn5qOL6K2c44Gu6Kqt44G/6L6844G/44Gr5aSx5pWX44GX44G+44GX44GfJztcclxuXHJcblx0XHRcdHRoaXMuZW1pdCgnQ0hBTkdFJyk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRkaXNwYXRjaGVyLm9uKCdjb3B5S2lmdScsICgpID0+IHtcclxuXHRcdFx0dGhpcy5kaXNwbGF5SWQrK1xyXG5cdFx0XHR0aGlzLmRpc3BsYXlUaW1lID0gNzAwMDtcclxuXHRcdFx0dGhpcy50ZXh0ID0gJ+aji+itnOOCkuOCr+ODquODg+ODl+ODnOODvOODieOBq+OCs+ODlOODvOOBl+OBvuOBl+OBnyc7XHJcblxyXG5cdFx0XHR0aGlzLmVtaXQoJ0NIQU5HRScpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3N0b3Jlcy9Ob3RpZmljYXRpb24uanMiLCJpbXBvcnQgRW1pdHRlciBmcm9tICdldmVudHMnO1xyXG5pbXBvcnQgZGlzcGF0Y2hlciBmcm9tICcuLi9kaXNwYXRjaGVyLmpzJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRzZWFyY2hJZDogJycsXHJcblx0c3RhcnQ6IDAsXHJcblx0aW50ZXJ2YWw6IDEwLFxyXG5cdHVybHM6IHtcclxuXHRcdCcxMOWIh+OCjCc6ICdodHRwczovL3Nob2dpd2Fycy5oZXJvei5qcC91c2Vycy9oaXN0b3J5LzppZD9zdGFydD06c3RhcnQnLFxyXG5cdFx0JzPliIfjgownOiAnaHR0cHM6Ly9zaG9naXdhcnMuaGVyb3ouanAvdXNlcnMvaGlzdG9yeS86aWQ/Z3R5cGU9c2Imc3RhcnQ9OnN0YXJ0JyxcclxuXHRcdCcxMOenkic6ICdodHRwczovL3Nob2dpd2Fycy5oZXJvei5qcC91c2Vycy9oaXN0b3J5LzppZD9ndHlwZT1zMSZzdGFydD06c3RhcnQnLFxyXG5cdH0sXHJcblx0aXNMaW1pdDogZmFsc2UsXHJcblx0aXNGZXRjaGluZzogZmFsc2UsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRjaFJlY29yZFNlYXJjaCBleHRlbmRzIEVtaXR0ZXIge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaW5pdGlhbFN0YXRlKSkpO1xyXG5cclxuXHRcdGRpc3BhdGNoZXIub24oJ2lucHV0U2VhcmNoSWQnLCAodmFsdWUpID0+IHtcclxuXHRcdFx0dGhpcy5zZWFyY2hJZCA9IHZhbHVlO1xyXG5cdFx0XHR0aGlzLmVtaXQoKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGRpc3BhdGNoZXIub24oJ2ZldGNoTWF0Y2hSZWNvcmRzJywgYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLmlzRmV0Y2hpbmcgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLmVtaXQoJ0NIQU5HRScpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0ZGlzcGF0Y2hlci5vbignZmV0Y2hNYXRjaFJlY29yZHNGYWlsZWQnLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuaXNGZXRjaGluZyA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLmVtaXQoJ0NIQU5HRScpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0ZGlzcGF0Y2hlci5vbignZmV0Y2hNYXRjaFJlY29yZHNTdWNjZXNzZnVsJywgKHJlY29yZHMpID0+IHtcclxuXHRcdFx0dGhpcy5pc0ZldGNoaW5nID0gZmFsc2U7XHJcblx0XHRcdGlmKHJlY29yZHMubGVuZ3RoIDwgdGhpcy5pbnRlcnZhbCkge1xyXG5cdFx0XHRcdC8v44KC44GG6Kqt44G/6L6844KA5a++5bGA44GM54Sh44GE5pmCO1xyXG5cdFx0XHRcdHRoaXMuaXNMaW1pdCA9IHRydWU7XHJcblx0XHRcdFx0dGhpcy5zdGFydCArPSByZWNvcmRzLmxlbmd0aDtcclxuXHRcdFx0fWVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuc3RhcnQgKz0gdGhpcy5pbnRlcnZhbDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5lbWl0KCdDSEFOR0UnKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGRpc3BhdGNoZXIub24oJ3VubW91bnRJbmRleCcsICgpID0+IHtcclxuXHRcdFx0Y29uc3Qgc2VhcmNoSWQgPSB0aGlzLnNlYXJjaElkO1xyXG5cdFx0XHRPYmplY3QuYXNzaWduKHRoaXMsIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaW5pdGlhbFN0YXRlKSksIHsgc2VhcmNoSWQgfSk7XHJcblx0XHRcdHRoaXMuZW1pdCgnQ0hBTkdFJyk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3N0b3Jlcy9NYXRjaFJlY29yZFNlYXJjaC5qcyIsImltcG9ydCBFbWl0dGVyIGZyb20gJ2V2ZW50cyc7XHJcbmltcG9ydCBkaXNwYXRjaGVyIGZyb20gJy4uL2Rpc3BhdGNoZXIuanMnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdHJlY29yZHM6IFtdLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0Y2hSZWNvcmRzIGV4dGVuZHMgRW1pdHRlciB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShpbml0aWFsU3RhdGUpKSk7XHJcblxyXG5cdFx0ZGlzcGF0Y2hlci5vbignZmV0Y2hNYXRjaFJlY29yZHNTdWNjZXNzZnVsJywgKHJlY29yZHMpID0+IHtcclxuXHRcdFx0aWYocmVjb3Jkcy5sZW5ndGggPT09IDApIHJldHVybjtcclxuXHRcdFx0XHJcblx0XHRcdHRoaXMucmVjb3JkcyA9IHRoaXMucmVjb3Jkcy5jb25jYXQocmVjb3Jkcyk7XHJcblx0XHRcdHRoaXMucmVjb3Jkcy5zb3J0KChhLCBiKSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgYVRpbWUgPSBuZXcgRGF0ZShhLnRpbWUpLmdldFRpbWUoKTtcclxuXHRcdFx0XHRjb25zdCBiVGltZSA9IG5ldyBEYXRlKGIudGltZSkuZ2V0VGltZSgpO1xyXG5cdFx0XHRcdGlmKGFUaW1lID4gYlRpbWUpIHJldHVybiAtMTtcclxuXHRcdFx0XHRpZihhVGltZSA8IGJUaW1lKSByZXR1cm4gMTtcclxuXHRcdFx0XHRyZXR1cm4gMDtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR0aGlzLmVtaXQoJ0NIQU5HRScpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0ZGlzcGF0Y2hlci5vbigndW5tb3VudEluZGV4JywgKCkgPT4ge1xyXG5cdFx0XHRPYmplY3QuYXNzaWduKHRoaXMsIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaW5pdGlhbFN0YXRlKSkpO1xyXG5cdFx0XHR0aGlzLmVtaXQoJ0NIQU5HRScpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zdG9yZXMvTWF0Y2hSZWNvcmRzLmpzIiwiaW1wb3J0IEVtaXR0ZXIgZnJvbSAnZXZlbnRzJztcclxuaW1wb3J0IGRpc3BhdGNoZXIgZnJvbSAnLi4vZGlzcGF0Y2hlci5qcyc7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7fTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdGNoUmVjb3JkIGV4dGVuZHMgRW1pdHRlciB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShpbml0aWFsU3RhdGUpKSk7XHJcblxyXG5cdFx0ZGlzcGF0Y2hlci5vbignZmV0Y2hLaWZ1JywgKHJlY29yZCkgPT4ge1xyXG5cdFx0XHRyZWNvcmQuaXNGZXRjaGluZ0tpZnUgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLmVtaXQoJ0NIQU5HRScpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0ZGlzcGF0Y2hlci5vbignZmV0Y2hLaWZ1U3VjY2Vzc2Z1bCcsIChyZWNvcmQsIGtpZnUpID0+IHtcclxuXHRcdFx0cmVjb3JkLmtpZnUgPSBraWZ1O1xyXG5cdFx0XHRyZWNvcmQuZG9lc0hhdmVLaWZ1ID0gdHJ1ZTtcclxuXHRcdFx0cmVjb3JkLmlzRmV0Y2hpbmdLaWZ1ID0gZmFsc2U7XHJcblx0XHRcdHNhdmVSZWNvcmQocmVjb3JkKTtcclxuXHJcblx0XHRcdHRoaXMuZW1pdCgnQ0hBTkdFJyk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRkaXNwYXRjaGVyLm9uKCdmZXRjaEtpZnVGYWlsZWQnLCAocmVjb3JkKSA9PiB7XHJcblx0XHRcdHJlY29yZC5pc0ZldGNoaW5nS2lmdSA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLmVtaXQoJ0NIQU5HRScpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBzYXZlUmVjb3JkKHJlY29yZCkge1xyXG5cdGxldCByZWNvcmRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVjb3JkcycpKTtcclxuXHRpZihyZWNvcmRzID09PSBudWxsKSByZWNvcmRzID0gW107XHJcblx0cmVjb3Jkcy51bnNoaWZ0KHJlY29yZCk7XHJcblx0cmVjb3Jkcy5mb3JFYWNoKChfcmVjb3JkLCBpKSA9PiB7XHJcblx0XHRpZihpID09PSAwKSByZXR1cm47XHJcblx0XHRpZihfcmVjb3JkLnRpbWUgPT09IHJlY29yZC50aW1lICYmIF9yZWNvcmQuYmxhY2sgPT09IHJlY29yZC5ibGFjayAmJiBfcmVjb3JkLndoaXRlID09PSByZWNvcmQud2hpdGUpIHtcclxuXHRcdFx0cmV0dXJuIHJlY29yZHMuc3BsaWNlKGksIDEpO1xyXG5cdFx0fVxyXG5cdH0pXHJcblx0cmVjb3JkcyA9IHJlY29yZHMuc2xpY2UoMCwgMTApO1xyXG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyZWNvcmRzJywgSlNPTi5zdHJpbmdpZnkocmVjb3JkcykpO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3N0b3Jlcy9NYXRjaFJlY29yZC5qcyIsImltcG9ydCBFbWl0dGVyIGZyb20gJ2V2ZW50cyc7XHJcbmltcG9ydCBkaXNwYXRjaGVyIGZyb20gJy4uL2Rpc3BhdGNoZXIuanMnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdHJlY29yZHM6IFtdLFxyXG5cdHNob3VsZERpc3BsYXk6IGZhbHNlLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGlzdG9yeVJlY29yZHMgZXh0ZW5kcyBFbWl0dGVyIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGluaXRpYWxTdGF0ZSkpKTtcclxuXHJcblx0XHRkaXNwYXRjaGVyLm9uKCdzaG93SGlzdG9yeVJlY29yZHMnLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuc2hvdWxkRGlzcGxheSA9IHRydWU7XHJcblx0XHRcdHRoaXMucmVjb3JkcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlY29yZHMnKSkgfHwgW107XHJcblx0XHRcdHRoaXMuZW1pdCgnQ0hBTkdFJyk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRkaXNwYXRjaGVyLm9uKCdoaWRlSGlzdG9yeVJlY29yZHMnLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuc2hvdWxkRGlzcGxheSA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLmVtaXQoJ0NIQU5HRScpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0ZGlzcGF0Y2hlci5vbignZmV0Y2hLaWZ1U3VjY2Vzc2Z1bCcsICgpID0+IHtcclxuXHRcdFx0dGhpcy5yZWNvcmRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVjb3JkcycpKSB8fCBbXTtcclxuXHRcdFx0dGhpcy5lbWl0KCdDSEFOR0UnKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zdG9yZXMvSGlzdG9yeVJlY29yZHMuanMiXSwic291cmNlUm9vdCI6IiJ9