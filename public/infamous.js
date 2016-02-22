(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["infamous"] = factory();
	else
		root["infamous"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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

	__webpack_require__(1);
	module.exports = __webpack_require__(191);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	__webpack_require__(2);
	
	__webpack_require__(189);
	
	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	__webpack_require__(36);
	__webpack_require__(42);
	__webpack_require__(44);
	__webpack_require__(46);
	__webpack_require__(48);
	__webpack_require__(50);
	__webpack_require__(52);
	__webpack_require__(53);
	__webpack_require__(54);
	__webpack_require__(55);
	__webpack_require__(56);
	__webpack_require__(57);
	__webpack_require__(58);
	__webpack_require__(59);
	__webpack_require__(60);
	__webpack_require__(61);
	__webpack_require__(62);
	__webpack_require__(63);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(68);
	__webpack_require__(70);
	__webpack_require__(71);
	__webpack_require__(72);
	__webpack_require__(73);
	__webpack_require__(74);
	__webpack_require__(75);
	__webpack_require__(76);
	__webpack_require__(78);
	__webpack_require__(79);
	__webpack_require__(80);
	__webpack_require__(82);
	__webpack_require__(83);
	__webpack_require__(84);
	__webpack_require__(86);
	__webpack_require__(87);
	__webpack_require__(88);
	__webpack_require__(89);
	__webpack_require__(90);
	__webpack_require__(91);
	__webpack_require__(92);
	__webpack_require__(93);
	__webpack_require__(94);
	__webpack_require__(95);
	__webpack_require__(96);
	__webpack_require__(97);
	__webpack_require__(98);
	__webpack_require__(99);
	__webpack_require__(104);
	__webpack_require__(105);
	__webpack_require__(109);
	__webpack_require__(110);
	__webpack_require__(112);
	__webpack_require__(113);
	__webpack_require__(118);
	__webpack_require__(119);
	__webpack_require__(122);
	__webpack_require__(124);
	__webpack_require__(126);
	__webpack_require__(128);
	__webpack_require__(129);
	__webpack_require__(130);
	__webpack_require__(132);
	__webpack_require__(133);
	__webpack_require__(135);
	__webpack_require__(136);
	__webpack_require__(137);
	__webpack_require__(138);
	__webpack_require__(145);
	__webpack_require__(148);
	__webpack_require__(149);
	__webpack_require__(151);
	__webpack_require__(152);
	__webpack_require__(153);
	__webpack_require__(154);
	__webpack_require__(155);
	__webpack_require__(156);
	__webpack_require__(157);
	__webpack_require__(158);
	__webpack_require__(159);
	__webpack_require__(160);
	__webpack_require__(161);
	__webpack_require__(162);
	__webpack_require__(164);
	__webpack_require__(165);
	__webpack_require__(166);
	__webpack_require__(167);
	__webpack_require__(168);
	__webpack_require__(169);
	__webpack_require__(171);
	__webpack_require__(172);
	__webpack_require__(173);
	__webpack_require__(174);
	__webpack_require__(176);
	__webpack_require__(177);
	__webpack_require__(179);
	__webpack_require__(180);
	__webpack_require__(182);
	__webpack_require__(183);
	__webpack_require__(184);
	__webpack_require__(187);
	__webpack_require__(188);
	module.exports = __webpack_require__(7);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $                 = __webpack_require__(4)
	  , $export           = __webpack_require__(5)
	  , DESCRIPTORS       = __webpack_require__(10)
	  , createDesc        = __webpack_require__(9)
	  , html              = __webpack_require__(16)
	  , cel               = __webpack_require__(17)
	  , has               = __webpack_require__(19)
	  , cof               = __webpack_require__(20)
	  , invoke            = __webpack_require__(21)
	  , fails             = __webpack_require__(11)
	  , anObject          = __webpack_require__(22)
	  , aFunction         = __webpack_require__(15)
	  , isObject          = __webpack_require__(18)
	  , toObject          = __webpack_require__(23)
	  , toIObject         = __webpack_require__(25)
	  , toInteger         = __webpack_require__(27)
	  , toIndex           = __webpack_require__(28)
	  , toLength          = __webpack_require__(29)
	  , IObject           = __webpack_require__(26)
	  , IE_PROTO          = __webpack_require__(13)('__proto__')
	  , createArrayMethod = __webpack_require__(30)
	  , arrayIndexOf      = __webpack_require__(35)(false)
	  , ObjectProto       = Object.prototype
	  , ArrayProto        = Array.prototype
	  , arraySlice        = ArrayProto.slice
	  , arrayJoin         = ArrayProto.join
	  , defineProperty    = $.setDesc
	  , getOwnDescriptor  = $.getDesc
	  , defineProperties  = $.setDescs
	  , factories         = {}
	  , IE8_DOM_DEFINE;
	
	if(!DESCRIPTORS){
	  IE8_DOM_DEFINE = !fails(function(){
	    return defineProperty(cel('div'), 'a', {get: function(){ return 7; }}).a != 7;
	  });
	  $.setDesc = function(O, P, Attributes){
	    if(IE8_DOM_DEFINE)try {
	      return defineProperty(O, P, Attributes);
	    } catch(e){ /* empty */ }
	    if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	    if('value' in Attributes)anObject(O)[P] = Attributes.value;
	    return O;
	  };
	  $.getDesc = function(O, P){
	    if(IE8_DOM_DEFINE)try {
	      return getOwnDescriptor(O, P);
	    } catch(e){ /* empty */ }
	    if(has(O, P))return createDesc(!ObjectProto.propertyIsEnumerable.call(O, P), O[P]);
	  };
	  $.setDescs = defineProperties = function(O, Properties){
	    anObject(O);
	    var keys   = $.getKeys(Properties)
	      , length = keys.length
	      , i = 0
	      , P;
	    while(length > i)$.setDesc(O, P = keys[i++], Properties[P]);
	    return O;
	  };
	}
	$export($export.S + $export.F * !DESCRIPTORS, 'Object', {
	  // 19.1.2.6 / 15.2.3.3 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $.getDesc,
	  // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	  defineProperty: $.setDesc,
	  // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	  defineProperties: defineProperties
	});
	
	  // IE 8- don't enum bug keys
	var keys1 = ('constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,' +
	            'toLocaleString,toString,valueOf').split(',')
	  // Additional keys for getOwnPropertyNames
	  , keys2 = keys1.concat('length', 'prototype')
	  , keysLen1 = keys1.length;
	
	// Create object with `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = cel('iframe')
	    , i      = keysLen1
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  html.appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict.prototype[keys1[i]];
	  return createDict();
	};
	var createGetKeys = function(names, length){
	  return function(object){
	    var O      = toIObject(object)
	      , i      = 0
	      , result = []
	      , key;
	    for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	    // Don't enum bug & hidden keys
	    while(length > i)if(has(O, key = names[i++])){
	      ~arrayIndexOf(result, key) || result.push(key);
	    }
	    return result;
	  };
	};
	var Empty = function(){};
	$export($export.S, 'Object', {
	  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	  getPrototypeOf: $.getProto = $.getProto || function(O){
	    O = toObject(O);
	    if(has(O, IE_PROTO))return O[IE_PROTO];
	    if(typeof O.constructor == 'function' && O instanceof O.constructor){
	      return O.constructor.prototype;
	    } return O instanceof Object ? ObjectProto : null;
	  },
	  // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $.getNames = $.getNames || createGetKeys(keys2, keys2.length, true),
	  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	  create: $.create = $.create || function(O, /*?*/Properties){
	    var result;
	    if(O !== null){
	      Empty.prototype = anObject(O);
	      result = new Empty();
	      Empty.prototype = null;
	      // add "__proto__" for Object.getPrototypeOf shim
	      result[IE_PROTO] = O;
	    } else result = createDict();
	    return Properties === undefined ? result : defineProperties(result, Properties);
	  },
	  // 19.1.2.14 / 15.2.3.14 Object.keys(O)
	  keys: $.getKeys = $.getKeys || createGetKeys(keys1, keysLen1, false)
	});
	
	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  }
	  return factories[len](F, args);
	};
	
	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	$export($export.P, 'Function', {
	  bind: function bind(that /*, args... */){
	    var fn       = aFunction(this)
	      , partArgs = arraySlice.call(arguments, 1);
	    var bound = function(/* args... */){
	      var args = partArgs.concat(arraySlice.call(arguments));
	      return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	    };
	    if(isObject(fn.prototype))bound.prototype = fn.prototype;
	    return bound;
	  }
	});
	
	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * fails(function(){
	  if(html)arraySlice.call(html);
	}), 'Array', {
	  slice: function(begin, end){
	    var len   = toLength(this.length)
	      , klass = cof(this);
	    end = end === undefined ? len : end;
	    if(klass == 'Array')return arraySlice.call(this, begin, end);
	    var start  = toIndex(begin, len)
	      , upTo   = toIndex(end, len)
	      , size   = toLength(upTo - start)
	      , cloned = Array(size)
	      , i      = 0;
	    for(; i < size; i++)cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});
	$export($export.P + $export.F * (IObject != Object), 'Array', {
	  join: function join(separator){
	    return arrayJoin.call(IObject(this), separator === undefined ? ',' : separator);
	  }
	});
	
	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	$export($export.S, 'Array', {isArray: __webpack_require__(32)});
	
	var createArrayReduce = function(isRight){
	  return function(callbackfn, memo){
	    aFunction(callbackfn);
	    var O      = IObject(this)
	      , length = toLength(O.length)
	      , index  = isRight ? length - 1 : 0
	      , i      = isRight ? -1 : 1;
	    if(arguments.length < 2)for(;;){
	      if(index in O){
	        memo = O[index];
	        index += i;
	        break;
	      }
	      index += i;
	      if(isRight ? index < 0 : length <= index){
	        throw TypeError('Reduce of empty array with no initial value');
	      }
	    }
	    for(;isRight ? index >= 0 : length > index; index += i)if(index in O){
	      memo = callbackfn(memo, O[index], index, this);
	    }
	    return memo;
	  };
	};
	
	var methodize = function($fn){
	  return function(arg1/*, arg2 = undefined */){
	    return $fn(this, arg1, arguments[1]);
	  };
	};
	
	$export($export.P, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: $.each = $.each || methodize(createArrayMethod(0)),
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: methodize(createArrayMethod(1)),
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: methodize(createArrayMethod(2)),
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: methodize(createArrayMethod(3)),
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: methodize(createArrayMethod(4)),
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: createArrayReduce(false),
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: createArrayReduce(true),
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: methodize(arrayIndexOf),
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function(el, fromIndex /* = @[*-1] */){
	    var O      = toIObject(this)
	      , length = toLength(O.length)
	      , index  = length - 1;
	    if(arguments.length > 1)index = Math.min(index, toInteger(fromIndex));
	    if(index < 0)index = toLength(length + index);
	    for(;index >= 0; index--)if(index in O)if(O[index] === el)return index;
	    return -1;
	  }
	});
	
	// 20.3.3.1 / 15.9.4.4 Date.now()
	$export($export.S, 'Date', {now: function(){ return +new Date; }});
	
	var lz = function(num){
	  return num > 9 ? num : '0' + num;
	};
	
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function(){
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function(){
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString(){
	    if(!isFinite(this))throw RangeError('Invalid time value');
	    var d = this
	      , y = d.getUTCFullYear()
	      , m = d.getUTCMilliseconds()
	      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ },
/* 4 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(6)
	  , core      = __webpack_require__(7)
	  , hide      = __webpack_require__(8)
	  , redefine  = __webpack_require__(12)
	  , ctx       = __webpack_require__(14)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target && !own)redefine(target, key, out);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 6 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 7 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(4)
	  , createDesc = __webpack_require__(9);
	module.exports = __webpack_require__(10) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 9 */
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(11)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// add fake Function#toString
	// for correct work wrapped methods / constructors with methods like LoDash isNative
	var global    = __webpack_require__(6)
	  , hide      = __webpack_require__(8)
	  , SRC       = __webpack_require__(13)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);
	
	__webpack_require__(7).inspectSource = function(it){
	  return $toString.call(it);
	};
	
	(module.exports = function(O, key, val, safe){
	  if(typeof val == 'function'){
	    val.hasOwnProperty(SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	    val.hasOwnProperty('name') || hide(val, 'name', key);
	  }
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe)delete O[key];
	    hide(O, key, val);
	  }
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 13 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(15);
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
/* 15 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6).document && document.documentElement;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(18)
	  , document = __webpack_require__(6).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 21 */
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(18);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(24);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(26)
	  , defined = __webpack_require__(24);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(20);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(27)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(27)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(14)
	  , IObject  = __webpack_require__(26)
	  , toObject = __webpack_require__(23)
	  , toLength = __webpack_require__(29)
	  , asc      = __webpack_require__(31);
	module.exports = function(TYPE){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? asc($this, length) : IS_FILTER ? asc($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var isObject = __webpack_require__(18)
	  , isArray  = __webpack_require__(32)
	  , SPECIES  = __webpack_require__(33)('species');
	module.exports = function(original, length){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return new (C === undefined ? Array : C)(length);
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(20);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(34)('wks')
	  , uid    = __webpack_require__(13)
	  , Symbol = __webpack_require__(6).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(6)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(25)
	  , toLength  = __webpack_require__(29)
	  , toIndex   = __webpack_require__(28);
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
	      if(O[index] === el)return IS_INCLUDES || index;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(4)
	  , global         = __webpack_require__(6)
	  , has            = __webpack_require__(19)
	  , DESCRIPTORS    = __webpack_require__(10)
	  , $export        = __webpack_require__(5)
	  , redefine       = __webpack_require__(12)
	  , $fails         = __webpack_require__(11)
	  , shared         = __webpack_require__(34)
	  , setToStringTag = __webpack_require__(37)
	  , uid            = __webpack_require__(13)
	  , wks            = __webpack_require__(33)
	  , keyOf          = __webpack_require__(38)
	  , $names         = __webpack_require__(39)
	  , enumKeys       = __webpack_require__(40)
	  , isArray        = __webpack_require__(32)
	  , anObject       = __webpack_require__(22)
	  , toIObject      = __webpack_require__(25)
	  , createDesc     = __webpack_require__(9)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};
	
	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
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
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});
	
	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });
	
	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };
	
	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(41)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}
	
	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});
	
	setter = true;
	
	$export($export.G + $export.W, {Symbol: $Symbol});
	
	$export($export.S, 'Symbol', symbolStatics);
	
	$export($export.S + $export.F * !useNative, 'Object', {
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
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});
	
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(4).setDesc
	  , has = __webpack_require__(19)
	  , TAG = __webpack_require__(33)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(4)
	  , toIObject = __webpack_require__(25);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(25)
	  , getNames  = __webpack_require__(4).getNames
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(4);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(5);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(43)});

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(4)
	  , toObject = __webpack_require__(23)
	  , IObject  = __webpack_require__(26);
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(11)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(5);
	$export($export.S, 'Object', {is: __webpack_require__(45)});

/***/ },
/* 45 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(5);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(47).set});

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(4).getDesc
	  , isObject = __webpack_require__(18)
	  , anObject = __webpack_require__(22);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(14)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
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
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(49)
	  , test    = {};
	test[__webpack_require__(33)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(12)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(20)
	  , TAG = __webpack_require__(33)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(18);
	
	__webpack_require__(51)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(it) : it;
	  };
	});

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(5)
	  , core    = __webpack_require__(7)
	  , fails   = __webpack_require__(11);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(18);
	
	__webpack_require__(51)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(it) : it;
	  };
	});

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(18);
	
	__webpack_require__(51)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(it) : it;
	  };
	});

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(18);
	
	__webpack_require__(51)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(18);
	
	__webpack_require__(51)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(18);
	
	__webpack_require__(51)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(25);
	
	__webpack_require__(51)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(23);
	
	__webpack_require__(51)('getPrototypeOf', function($getPrototypeOf){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(23);
	
	__webpack_require__(51)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(51)('getOwnPropertyNames', function(){
	  return __webpack_require__(39).get;
	});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var setDesc    = __webpack_require__(4).setDesc
	  , createDesc = __webpack_require__(9)
	  , has        = __webpack_require__(19)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';
	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(10) && setDesc(FProto, NAME, {
	  configurable: true,
	  get: function(){
	    var match = ('' + this).match(nameRE)
	      , name  = match ? match[1] : '';
	    has(this, NAME) || setDesc(this, NAME, createDesc(5, name));
	    return name;
	  }
	});

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $             = __webpack_require__(4)
	  , isObject      = __webpack_require__(18)
	  , HAS_INSTANCE  = __webpack_require__(33)('hasInstance')
	  , FunctionProto = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if(!(HAS_INSTANCE in FunctionProto))$.setDesc(FunctionProto, HAS_INSTANCE, {value: function(O){
	  if(typeof this != 'function' || !isObject(O))return false;
	  if(!isObject(this.prototype))return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while(O = $.getProto(O))if(this.prototype === O)return true;
	  return false;
	}});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $           = __webpack_require__(4)
	  , global      = __webpack_require__(6)
	  , has         = __webpack_require__(19)
	  , cof         = __webpack_require__(20)
	  , toPrimitive = __webpack_require__(64)
	  , fails       = __webpack_require__(11)
	  , $trim       = __webpack_require__(65).trim
	  , NUMBER      = 'Number'
	  , $Number     = global[NUMBER]
	  , Base        = $Number
	  , proto       = $Number.prototype
	  // Opera ~12 has broken Object#toString
	  , BROKEN_COF  = cof($.create(proto)) == NUMBER
	  , TRIM        = 'trim' in String.prototype;
	
	// 7.1.3 ToNumber(argument)
	var toNumber = function(argument){
	  var it = toPrimitive(argument, false);
	  if(typeof it == 'string' && it.length > 2){
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0)
	      , third, radix, maxCode;
	    if(first === 43 || first === 45){
	      third = it.charCodeAt(2);
	      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if(first === 48){
	      switch(it.charCodeAt(1)){
	        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default : return +it;
	      }
	      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if(code < 48 || code > maxCode)return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};
	
	if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
	  $Number = function Number(value){
	    var it = arguments.length < 1 ? 0 : value
	      , that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? new Base(toNumber(it)) : toNumber(it);
	  };
	  $.each.call(__webpack_require__(10) ? $.getNames(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), function(key){
	    if(has(Base, key) && !has($Number, key)){
	      $.setDesc($Number, key, $.getDesc(Base, key));
	    }
	  });
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(12)(global, NUMBER, $Number);
	}

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(18);
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
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(5)
	  , defined = __webpack_require__(24)
	  , fails   = __webpack_require__(11)
	  , spaces  = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	      '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF'
	  , space   = '[' + spaces + ']'
	  , non     = '\u200b\u0085'
	  , ltrim   = RegExp('^' + space + space + '*')
	  , rtrim   = RegExp(space + space + '*$');
	
	var exporter = function(KEY, exec){
	  var exp  = {};
	  exp[KEY] = exec(trim);
	  $export($export.P + $export.F * fails(function(){
	    return !!spaces[KEY]() || non[KEY]() != non;
	  }), 'String', exp);
	};
	
	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function(string, TYPE){
	  string = String(defined(string));
	  if(TYPE & 1)string = string.replace(ltrim, '');
	  if(TYPE & 2)string = string.replace(rtrim, '');
	  return string;
	};
	
	module.exports = exporter;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(5)
	  , _isFinite = __webpack_require__(6).isFinite;
	
	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Number', {isInteger: __webpack_require__(69)});

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(18)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(5)
	  , isInteger = __webpack_require__(69)
	  , abs       = Math.abs;
	
	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.12 Number.parseFloat(string)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Number', {parseFloat: parseFloat});

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.13 Number.parseInt(string, radix)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Number', {parseInt: parseInt});

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(5)
	  , log1p   = __webpack_require__(77)
	  , sqrt    = Math.sqrt
	  , $acosh  = Math.acosh;
	
	// V8 bug https://code.google.com/p/v8/issues/detail?id=3509
	$export($export.S + $export.F * !($acosh && Math.floor($acosh(Number.MAX_VALUE)) == 710), 'Math', {
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ },
/* 77 */
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(5);
	
	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}
	
	$export($export.S, 'Math', {asinh: asinh});

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(5)
	  , sign    = __webpack_require__(81);
	
	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 81 */
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(5)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Math', {expm1: __webpack_require__(85)});

/***/ },
/* 85 */
/***/ function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	module.exports = Math.expm1 || function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(5)
	  , sign      = __webpack_require__(81)
	  , pow       = Math.pow
	  , EPSILON   = pow(2, -52)
	  , EPSILON32 = pow(2, -23)
	  , MAX32     = pow(2, 127) * (2 - EPSILON32)
	  , MIN32     = pow(2, -126);
	
	var roundTiesToEven = function(n){
	  return n + 1 / EPSILON - 1 / EPSILON;
	};
	
	
	$export($export.S, 'Math', {
	  fround: function fround(x){
	    var $abs  = Math.abs(x)
	      , $sign = sign(x)
	      , a, result;
	    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if(result > MAX32 || result != result)return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(5)
	  , abs     = Math.abs;
	
	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum   = 0
	      , i     = 0
	      , $$    = arguments
	      , $$len = $$.length
	      , larg  = 0
	      , arg, div;
	    while(i < $$len){
	      arg = abs($$[i++]);
	      if(larg < arg){
	        div  = larg / arg;
	        sum  = sum * div * div + 1;
	        larg = arg;
	      } else if(arg > 0){
	        div  = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(5)
	  , $imul   = Math.imul;
	
	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y){
	    var UINT16 = 0xffff
	      , xn = +x
	      , yn = +y
	      , xl = UINT16 & xn
	      , yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Math', {log1p: __webpack_require__(77)});

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Math', {sign: __webpack_require__(81)});

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(5)
	  , expm1   = __webpack_require__(85)
	  , exp     = Math.exp;
	
	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(5)
	  , expm1   = __webpack_require__(85)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(5)
	  , toIndex        = __webpack_require__(28)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;
	
	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res   = []
	      , $$    = arguments
	      , $$len = $$.length
	      , i     = 0
	      , code;
	    while($$len > i){
	      code = +$$[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(5)
	  , toIObject = __webpack_require__(25)
	  , toLength  = __webpack_require__(29);
	
	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl   = toIObject(callSite.raw)
	      , len   = toLength(tpl.length)
	      , $$    = arguments
	      , $$len = $$.length
	      , res   = []
	      , i     = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < $$len)res.push(String($$[i]));
	    } return res.join('');
	  }
	});

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(65)('trim', function($trim){
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(100)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(101)(String, 'String', function(iterated){
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
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(27)
	  , defined   = __webpack_require__(24);
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
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(41)
	  , $export        = __webpack_require__(5)
	  , redefine       = __webpack_require__(12)
	  , hide           = __webpack_require__(8)
	  , has            = __webpack_require__(19)
	  , Iterators      = __webpack_require__(102)
	  , $iterCreate    = __webpack_require__(103)
	  , setToStringTag = __webpack_require__(37)
	  , getProto       = __webpack_require__(4).getProto
	  , ITERATOR       = __webpack_require__(33)('iterator')
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
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
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
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(4)
	  , descriptor     = __webpack_require__(9)
	  , setToStringTag = __webpack_require__(37)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(8)(IteratorPrototype, __webpack_require__(33)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(5)
	  , $at     = __webpack_require__(100)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(5)
	  , toLength  = __webpack_require__(29)
	  , context   = __webpack_require__(106)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(108)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , $$   = arguments
	      , endPosition = $$.length > 1 ? $$[1] : undefined
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(107)
	  , defined  = __webpack_require__(24);
	
	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(18)
	  , cof      = __webpack_require__(20)
	  , MATCH    = __webpack_require__(33)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(33)('match');
	module.exports = function(KEY){
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch(e){
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch(f){ /* empty */ }
	  } return true;
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(5)
	  , context  = __webpack_require__(106)
	  , INCLUDES = 'includes';
	
	$export($export.P + $export.F * __webpack_require__(108)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(5);
	
	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(111)
	});

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(27)
	  , defined   = __webpack_require__(24);
	
	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(5)
	  , toLength    = __webpack_require__(29)
	  , context     = __webpack_require__(106)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(108)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , $$     = arguments
	      , index  = toLength(Math.min($$.length > 1 ? $$[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(14)
	  , $export     = __webpack_require__(5)
	  , toObject    = __webpack_require__(23)
	  , call        = __webpack_require__(114)
	  , isArrayIter = __webpack_require__(115)
	  , toLength    = __webpack_require__(29)
	  , getIterFn   = __webpack_require__(116);
	$export($export.S + $export.F * !__webpack_require__(117)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , $$      = arguments
	      , $$len   = $$.length
	      , mapfn   = $$len > 1 ? $$[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(22);
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
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(102)
	  , ITERATOR   = __webpack_require__(33)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(49)
	  , ITERATOR  = __webpack_require__(33)('iterator')
	  , Iterators = __webpack_require__(102);
	module.exports = __webpack_require__(7).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(33)('iterator')
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
	    iter.next = function(){ safe = true; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(5);
	
	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , $$     = arguments
	      , $$len  = $$.length
	      , result = new (typeof this == 'function' ? this : Array)($$len);
	    while($$len > index)result[index] = $$[index++];
	    result.length = $$len;
	    return result;
	  }
	});

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(120)
	  , step             = __webpack_require__(121)
	  , Iterators        = __webpack_require__(102)
	  , toIObject        = __webpack_require__(25);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(101)(Array, 'Array', function(iterated, kind){
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
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(33)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(8)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 121 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(123)('Array');

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(6)
	  , $           = __webpack_require__(4)
	  , DESCRIPTORS = __webpack_require__(10)
	  , SPECIES     = __webpack_require__(33)('species');
	
	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(5);
	
	$export($export.P, 'Array', {copyWithin: __webpack_require__(125)});
	
	__webpack_require__(120)('copyWithin');

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(23)
	  , toIndex  = __webpack_require__(28)
	  , toLength = __webpack_require__(29);
	
	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , $$    = arguments
	    , end   = $$.length > 2 ? $$[2] : undefined
	    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
	    , inc   = 1;
	  if(from < to && to < from + count){
	    inc  = -1;
	    from += count - 1;
	    to   += count - 1;
	  }
	  while(count-- > 0){
	    if(from in O)O[to] = O[from];
	    else delete O[to];
	    to   += inc;
	    from += inc;
	  } return O;
	};

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(5);
	
	$export($export.P, 'Array', {fill: __webpack_require__(127)});
	
	__webpack_require__(120)('fill');

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(23)
	  , toIndex  = __webpack_require__(28)
	  , toLength = __webpack_require__(29);
	module.exports = [].fill || function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , $$     = arguments
	    , $$len  = $$.length
	    , index  = toIndex($$len > 1 ? $$[1] : undefined, length)
	    , end    = $$len > 2 ? $$[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(5)
	  , $find   = __webpack_require__(30)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(120)(KEY);

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(5)
	  , $find   = __webpack_require__(30)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(120)(KEY);

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(4)
	  , global   = __webpack_require__(6)
	  , isRegExp = __webpack_require__(107)
	  , $flags   = __webpack_require__(131)
	  , $RegExp  = global.RegExp
	  , Base     = $RegExp
	  , proto    = $RegExp.prototype
	  , re1      = /a/g
	  , re2      = /a/g
	  // "new" creates a new object, old webkit buggy here
	  , CORRECT_NEW = new $RegExp(re1) !== re1;
	
	if(__webpack_require__(10) && (!CORRECT_NEW || __webpack_require__(11)(function(){
	  re2[__webpack_require__(33)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))){
	  $RegExp = function RegExp(p, f){
	    var piRE = isRegExp(p)
	      , fiU  = f === undefined;
	    return !(this instanceof $RegExp) && piRE && p.constructor === $RegExp && fiU ? p
	      : CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f);
	  };
	  $.each.call($.getNames(Base), function(key){
	    key in $RegExp || $.setDesc($RegExp, key, {
	      configurable: true,
	      get: function(){ return Base[key]; },
	      set: function(it){ Base[key] = it; }
	    });
	  });
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(12)(global, 'RegExp', $RegExp);
	}
	
	__webpack_require__(123)('RegExp');

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(22);
	module.exports = function(){
	  var that   = anObject(this)
	    , result = '';
	  if(that.global)     result += 'g';
	  if(that.ignoreCase) result += 'i';
	  if(that.multiline)  result += 'm';
	  if(that.unicode)    result += 'u';
	  if(that.sticky)     result += 'y';
	  return result;
	};

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	var $ = __webpack_require__(4);
	if(__webpack_require__(10) && /./g.flags != 'g')$.setDesc(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(131)
	});

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(134)('match', 1, function(defined, MATCH){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  };
	});

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(8)
	  , redefine = __webpack_require__(12)
	  , fails    = __webpack_require__(11)
	  , defined  = __webpack_require__(24)
	  , wks      = __webpack_require__(33);
	
	module.exports = function(KEY, length, exec){
	  var SYMBOL   = wks(KEY)
	    , original = ''[KEY];
	  if(fails(function(){
	    var O = {};
	    O[SYMBOL] = function(){ return 7; };
	    return ''[KEY](O) != 7;
	  })){
	    redefine(String.prototype, KEY, exec(defined, SYMBOL, original));
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function(string, arg){ return original.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function(string){ return original.call(string, this); }
	    );
	  }
	};

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(134)('replace', 2, function(defined, REPLACE, $replace){
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return function replace(searchValue, replaceValue){
	    'use strict';
	    var O  = defined(this)
	      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  };
	});

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(134)('search', 1, function(defined, SEARCH){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  };
	});

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(134)('split', 2, function(defined, SPLIT, $split){
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return function split(separator, limit){
	    'use strict';
	    var O  = defined(this)
	      , fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined
	      ? fn.call(separator, O, limit)
	      : $split.call(String(O), separator, limit);
	  };
	});

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $          = __webpack_require__(4)
	  , LIBRARY    = __webpack_require__(41)
	  , global     = __webpack_require__(6)
	  , ctx        = __webpack_require__(14)
	  , classof    = __webpack_require__(49)
	  , $export    = __webpack_require__(5)
	  , isObject   = __webpack_require__(18)
	  , anObject   = __webpack_require__(22)
	  , aFunction  = __webpack_require__(15)
	  , strictNew  = __webpack_require__(139)
	  , forOf      = __webpack_require__(140)
	  , setProto   = __webpack_require__(47).set
	  , same       = __webpack_require__(45)
	  , SPECIES    = __webpack_require__(33)('species')
	  , speciesConstructor = __webpack_require__(141)
	  , asap       = __webpack_require__(142)
	  , PROMISE    = 'Promise'
	  , process    = global.process
	  , isNode     = classof(process) == 'process'
	  , P          = global[PROMISE]
	  , Wrapper;
	
	var testResolve = function(sub){
	  var test = new P(function(){});
	  if(sub)test.constructor = Object;
	  return P.resolve(test) === test;
	};
	
	var USE_NATIVE = function(){
	  var works = false;
	  function P2(x){
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = P && P.resolve && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
	    // actual Firefox has broken subclass support, test that
	    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if(works && __webpack_require__(10)){
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function(){ thenableThenGotten = true; }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch(e){ works = false; }
	  return works;
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // library wrapper special case
	  if(LIBRARY && a === P && b === Wrapper)return true;
	  return same(a, b);
	};
	var getConstructor = function(C){
	  var S = anObject(C)[SPECIES];
	  return S != undefined ? S : C;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var PromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve),
	  this.reject  = aFunction(reject)
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(record, isReject){
	  if(record.n)return;
	  record.n = true;
	  var chain = record.c;
	  asap(function(){
	    var value = record.v
	      , ok    = record.s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , result, then;
	      try {
	        if(handler){
	          if(!ok)record.h = true;
	          result = handler === true ? value : handler(value);
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
	    chain.length = 0;
	    record.n = false;
	    if(isReject)setTimeout(function(){
	      var promise = record.p
	        , handler, console;
	      if(isUnhandled(promise)){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      } record.a = undefined;
	    }, 1);
	  });
	};
	var isUnhandled = function(promise){
	  var record = promise._d
	    , chain  = record.a || record.c
	    , i      = 0
	    , reaction;
	  if(record.h)return false;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var $reject = function(value){
	  var record = this;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  notify(record, true);
	};
	var $resolve = function(value){
	  var record = this
	    , then;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if(record.p === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      asap(function(){
	        var wrapper = {r: record, d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record, false);
	    }
	  } catch(e){
	    $reject.call({r: record, d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor){
	    aFunction(executor);
	    var record = this._d = {
	      p: strictNew(this, P, PROMISE),         // <- promise
	      c: [],                                  // <- awaiting reactions
	      a: undefined,                           // <- checked in isUnhandled reactions
	      s: 0,                                   // <- state
	      d: false,                               // <- done
	      v: undefined,                           // <- value
	      h: false,                               // <- handled rejection
	      n: false                                // <- notify
	    };
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch(err){
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(144)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction = new PromiseCapability(speciesConstructor(this, P))
	        , promise  = reaction.promise
	        , record   = this._d;
	      reaction.ok   = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      record.c.push(reaction);
	      if(record.a)record.a.push(reaction);
	      if(record.s)notify(record, false);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
	__webpack_require__(37)(P, PROMISE);
	__webpack_require__(123)(PROMISE);
	Wrapper = __webpack_require__(7)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = new PromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof P && sameConstructor(x.constructor, this))return x;
	    var capability = new PromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(117)(function(iter){
	  P.all(iter)['catch'](function(){});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject
	      , values     = [];
	    var abrupt = perform(function(){
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length
	        , results   = Array(remaining);
	      if(remaining)$.each.call(values, function(promise, index){
	        var alreadyCalled = false;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled = true;
	          results[index] = value;
	          --remaining || resolve(results);
	        }, reject);
	      });
	      else resolve(results);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
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
/* 139 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(14)
	  , call        = __webpack_require__(114)
	  , isArrayIter = __webpack_require__(115)
	  , anObject    = __webpack_require__(22)
	  , toLength    = __webpack_require__(29)
	  , getIterFn   = __webpack_require__(116);
	module.exports = function(iterable, entries, fn, that){
	  var iterFn = getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(22)
	  , aFunction = __webpack_require__(15)
	  , SPECIES   = __webpack_require__(33)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(6)
	  , macrotask = __webpack_require__(143).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(20)(process) == 'process'
	  , head, last, notify;
	
	var flush = function(){
	  var parent, domain, fn;
	  if(isNode && (parent = process.domain)){
	    process.domain = null;
	    parent.exit();
	  }
	  while(head){
	    domain = head.domain;
	    fn     = head.fn;
	    if(domain)domain.enter();
	    fn(); // <- currently we use it only for Promise - try / catch not required
	    if(domain)domain.exit();
	    head = head.next;
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
	  var toggle = 1
	    , node   = document.createTextNode('');
	  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	  notify = function(){
	    node.data = toggle = -toggle;
	  };
	// environments with maybe non-completely correct, but existent Promise
	} else if(Promise && Promise.resolve){
	  notify = function(){
	    Promise.resolve().then(flush);
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
	
	module.exports = function asap(fn){
	  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
	  if(last)last.next = task;
	  if(!head){
	    head = task;
	    notify();
	  } last = task;
	};

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(14)
	  , invoke             = __webpack_require__(21)
	  , html               = __webpack_require__(16)
	  , cel                = __webpack_require__(17)
	  , global             = __webpack_require__(6)
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
	var listner = function(event){
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
	  if(__webpack_require__(20)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listner, false);
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
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(12);
	module.exports = function(target, src){
	  for(var key in src)redefine(target, key, src[key]);
	  return target;
	};

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(146);
	
	// 23.1 Map Objects
	__webpack_require__(147)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $            = __webpack_require__(4)
	  , hide         = __webpack_require__(8)
	  , redefineAll  = __webpack_require__(144)
	  , ctx          = __webpack_require__(14)
	  , strictNew    = __webpack_require__(139)
	  , defined      = __webpack_require__(24)
	  , forOf        = __webpack_require__(140)
	  , $iterDefine  = __webpack_require__(101)
	  , step         = __webpack_require__(121)
	  , ID           = __webpack_require__(13)('id')
	  , $has         = __webpack_require__(19)
	  , isObject     = __webpack_require__(18)
	  , setSpecies   = __webpack_require__(123)
	  , DESCRIPTORS  = __webpack_require__(10)
	  , isExtensible = Object.isExtensible || isObject
	  , SIZE         = DESCRIPTORS ? '_s' : 'size'
	  , id           = 0;
	
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!$has(it, ID)){
	    // can't set id to frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add id
	    if(!create)return 'E';
	    // add missing object id
	    hide(it, ID, ++id);
	  // return object id with prefix
	  } return 'O' + it[ID];
	};
	
	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      strictNew(that, C, NAME);
	      that._i = $.create(null); // index
	      that._f = undefined;      // first entry
	      that._l = undefined;      // last entry
	      that[SIZE] = 0;           // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)$.setDesc(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);
	
	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(6)
	  , $export        = __webpack_require__(5)
	  , redefine       = __webpack_require__(12)
	  , redefineAll    = __webpack_require__(144)
	  , forOf          = __webpack_require__(140)
	  , strictNew      = __webpack_require__(139)
	  , isObject       = __webpack_require__(18)
	  , fails          = __webpack_require__(11)
	  , $iterDetect    = __webpack_require__(117)
	  , setToStringTag = __webpack_require__(37);
	
	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  var fixMethod = function(KEY){
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a){
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	  } else {
	    var instance             = new C
	      // early implementations not supports chaining
	      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      , BUGGY_ZERO;
	    if(!ACCEPT_ITERABLES){ 
	      C = wrapper(function(target, iterable){
	        strictNew(target, C, NAME);
	        var that = new Base;
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    IS_WEAK || instance.forEach(function(val, key){
	      BUGGY_ZERO = 1 / key === -Infinity;
	    });
	    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if(IS_WEAK && proto.clear)delete proto.clear;
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);
	
	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(146);
	
	// 23.2 Set Objects
	__webpack_require__(147)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $            = __webpack_require__(4)
	  , redefine     = __webpack_require__(12)
	  , weak         = __webpack_require__(150)
	  , isObject     = __webpack_require__(18)
	  , has          = __webpack_require__(19)
	  , frozenStore  = weak.frozenStore
	  , WEAK         = weak.WEAK
	  , isExtensible = Object.isExtensible || isObject
	  , tmp          = {};
	
	// 23.3 WeakMap Objects
	var $WeakMap = __webpack_require__(147)('WeakMap', function(get){
	  return function WeakMap(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      if(!isExtensible(key))return frozenStore(this).get(key);
	      if(has(key, WEAK))return key[WEAK][this._i];
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	}, weak, true, true);
	
	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  $.each.call(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on leaky map
	      if(isObject(a) && !isExtensible(a)){
	        var result = frozenStore(this)[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide              = __webpack_require__(8)
	  , redefineAll       = __webpack_require__(144)
	  , anObject          = __webpack_require__(22)
	  , isObject          = __webpack_require__(18)
	  , strictNew         = __webpack_require__(139)
	  , forOf             = __webpack_require__(140)
	  , createArrayMethod = __webpack_require__(30)
	  , $has              = __webpack_require__(19)
	  , WEAK              = __webpack_require__(13)('weak')
	  , isExtensible      = Object.isExtensible || isObject
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;
	
	// fallback for frozen keys
	var frozenStore = function(that){
	  return that._l || (that._l = new FrozenStore);
	};
	var FrozenStore = function(){
	  this.a = [];
	};
	var findFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	FrozenStore.prototype = {
	  get: function(key){
	    var entry = findFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      strictNew(that, C, NAME);
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        if(!isExtensible(key))return frozenStore(this)['delete'](key);
	        return $has(key, WEAK) && $has(key[WEAK], this._i) && delete key[WEAK][this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        if(!isExtensible(key))return frozenStore(this).has(key);
	        return $has(key, WEAK) && $has(key[WEAK], this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    if(!isExtensible(anObject(key))){
	      frozenStore(that).set(key, value);
	    } else {
	      $has(key, WEAK) || hide(key, WEAK, {});
	      key[WEAK][that._i] = value;
	    } return that;
	  },
	  frozenStore: frozenStore,
	  WEAK: WEAK
	};

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(150);
	
	// 23.4 WeakSet Objects
	__webpack_require__(147)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export = __webpack_require__(5)
	  , _apply  = Function.apply;
	
	$export($export.S, 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    return _apply.call(target, thisArgument, argumentsList);
	  }
	});

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $         = __webpack_require__(4)
	  , $export   = __webpack_require__(5)
	  , aFunction = __webpack_require__(15)
	  , anObject  = __webpack_require__(22)
	  , isObject  = __webpack_require__(18)
	  , bind      = Function.bind || __webpack_require__(7).Function.prototype.bind;
	
	// MS Edge supports only 2 arguments
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  function F(){}
	  return !(Reflect.construct(function(){}, [], F) instanceof F);
	}), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/){
	    aFunction(Target);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if(Target == newTarget){
	      // w/o altered newTarget, optimization for 0-4 arguments
	      if(args != undefined)switch(anObject(args).length){
	        case 0: return new Target;
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args));
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto    = newTarget.prototype
	      , instance = $.create(isObject(proto) ? proto : Object.prototype)
	      , result   = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var $        = __webpack_require__(4)
	  , $export  = __webpack_require__(5)
	  , anObject = __webpack_require__(22);
	
	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  Reflect.defineProperty($.setDesc({}, 1, {value: 1}), 1, {value: 2});
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    anObject(target);
	    try {
	      $.setDesc(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(5)
	  , getDesc  = __webpack_require__(4).getDesc
	  , anObject = __webpack_require__(22);
	
	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = getDesc(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export  = __webpack_require__(5)
	  , anObject = __webpack_require__(22);
	var Enumerate = function(iterated){
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = []       // keys
	    , key;
	  for(key in iterated)keys.push(key);
	};
	__webpack_require__(103)(Enumerate, 'Object', function(){
	  var that = this
	    , keys = that._k
	    , key;
	  do {
	    if(that._i >= keys.length)return {value: undefined, done: true};
	  } while(!((key = keys[that._i++]) in that._t));
	  return {value: key, done: false};
	});
	
	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target){
	    return new Enumerate(target);
	  }
	});

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var $        = __webpack_require__(4)
	  , has      = __webpack_require__(19)
	  , $export  = __webpack_require__(5)
	  , isObject = __webpack_require__(18)
	  , anObject = __webpack_require__(22);
	
	function get(target, propertyKey/*, receiver*/){
	  var receiver = arguments.length < 3 ? target : arguments[2]
	    , desc, proto;
	  if(anObject(target) === receiver)return target[propertyKey];
	  if(desc = $.getDesc(target, propertyKey))return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if(isObject(proto = $.getProto(target)))return get(proto, propertyKey, receiver);
	}
	
	$export($export.S, 'Reflect', {get: get});

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var $        = __webpack_require__(4)
	  , $export  = __webpack_require__(5)
	  , anObject = __webpack_require__(22);
	
	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return $.getDesc(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(5)
	  , getProto = __webpack_require__(4).getProto
	  , anObject = __webpack_require__(22);
	
	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(5)
	  , anObject      = __webpack_require__(22)
	  , $isExtensible = Object.isExtensible;
	
	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(163)});

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var $        = __webpack_require__(4)
	  , anObject = __webpack_require__(22)
	  , Reflect  = __webpack_require__(6).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = $.getNames(anObject(it))
	    , getSymbols = $.getSymbols;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(5)
	  , anObject           = __webpack_require__(22)
	  , $preventExtensions = Object.preventExtensions;
	
	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target){
	    anObject(target);
	    try {
	      if($preventExtensions)$preventExtensions(target);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var $          = __webpack_require__(4)
	  , has        = __webpack_require__(19)
	  , $export    = __webpack_require__(5)
	  , createDesc = __webpack_require__(9)
	  , anObject   = __webpack_require__(22)
	  , isObject   = __webpack_require__(18);
	
	function set(target, propertyKey, V/*, receiver*/){
	  var receiver = arguments.length < 4 ? target : arguments[3]
	    , ownDesc  = $.getDesc(anObject(target), propertyKey)
	    , existingDescriptor, proto;
	  if(!ownDesc){
	    if(isObject(proto = $.getProto(target))){
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if(has(ownDesc, 'value')){
	    if(ownDesc.writable === false || !isObject(receiver))return false;
	    existingDescriptor = $.getDesc(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    $.setDesc(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}
	
	$export($export.S, 'Reflect', {set: set});

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(5)
	  , setProto = __webpack_require__(47);
	
	if(setProto)$export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto){
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(5)
	  , $includes = __webpack_require__(35)(true);
	
	$export($export.P, 'Array', {
	  // https://github.com/domenic/Array.prototype.includes
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	
	__webpack_require__(120)('includes');

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(5)
	  , $at     = __webpack_require__(100)(true);
	
	$export($export.P, 'String', {
	  at: function at(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(5)
	  , $pad    = __webpack_require__(170);
	
	$export($export.P, 'String', {
	  padLeft: function padLeft(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-string-pad-left-right
	var toLength = __webpack_require__(29)
	  , repeat   = __webpack_require__(111)
	  , defined  = __webpack_require__(24);
	
	module.exports = function(that, maxLength, fillString, left){
	  var S            = String(defined(that))
	    , stringLength = S.length
	    , fillStr      = fillString === undefined ? ' ' : String(fillString)
	    , intMaxLength = toLength(maxLength);
	  if(intMaxLength <= stringLength)return S;
	  if(fillStr == '')fillStr = ' ';
	  var fillLen = intMaxLength - stringLength
	    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(5)
	  , $pad    = __webpack_require__(170);
	
	$export($export.P, 'String', {
	  padRight: function padRight(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(65)('trimLeft', function($trim){
	  return function trimLeft(){
	    return $trim(this, 1);
	  };
	});

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(65)('trimRight', function($trim){
	  return function trimRight(){
	    return $trim(this, 2);
	  };
	});

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(5)
	  , $re     = __webpack_require__(175)(/[\\^$*+?.()|[\]{}]/g, '\\$&');
	
	$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 175 */
/***/ function(module, exports) {

	module.exports = function(regExp, replace){
	  var replacer = replace === Object(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(it).replace(regExp, replacer);
	  };
	};

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/WebReflection/9353781
	var $          = __webpack_require__(4)
	  , $export    = __webpack_require__(5)
	  , ownKeys    = __webpack_require__(163)
	  , toIObject  = __webpack_require__(25)
	  , createDesc = __webpack_require__(9);
	
	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toIObject(object)
	      , setDesc = $.setDesc
	      , getDesc = $.getDesc
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key, D;
	    while(keys.length > i){
	      D = getDesc(O, key = keys[i++]);
	      if(key in result)setDesc(result, key, createDesc(0, D));
	      else result[key] = D;
	    } return result;
	  }
	});

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	// http://goo.gl/XkBrjD
	var $export = __webpack_require__(5)
	  , $values = __webpack_require__(178)(false);
	
	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(4)
	  , toIObject = __webpack_require__(25)
	  , isEnum    = $.isEnum;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = $.getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	// http://goo.gl/XkBrjD
	var $export  = __webpack_require__(5)
	  , $entries = __webpack_require__(178)(true);
	
	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(5);
	
	$export($export.P, 'Map', {toJSON: __webpack_require__(181)('Map')});

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var forOf   = __webpack_require__(140)
	  , classof = __webpack_require__(49);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    var arr = [];
	    forOf(this, false, arr.push, arr);
	    return arr;
	  };
	};

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(5);
	
	$export($export.P, 'Set', {toJSON: __webpack_require__(181)('Set')});

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	// JavaScript 1.6 / Strawman array statics shim
	var $       = __webpack_require__(4)
	  , $export = __webpack_require__(5)
	  , $ctx    = __webpack_require__(14)
	  , $Array  = __webpack_require__(7).Array || Array
	  , statics = {};
	var setStatics = function(keys, length){
	  $.each.call(keys.split(','), function(key){
	    if(length == undefined && key in $Array)statics[key] = $Array[key];
	    else if(key in [])statics[key] = $ctx(Function.call, [][key], length);
	  });
	};
	setStatics('pop,reverse,shift,keys,values,entries', 1);
	setStatics('indexOf,every,some,forEach,map,filter,find,findIndex,includes', 3);
	setStatics('join,slice,concat,push,splice,unshift,sort,lastIndexOf,' +
	           'reduce,reduceRight,copyWithin,fill');
	$export($export.S, 'Array', statics);

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(6)
	  , $export    = __webpack_require__(5)
	  , invoke     = __webpack_require__(21)
	  , partial    = __webpack_require__(185)
	  , navigator  = global.navigator
	  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function(set){
	  return MSIE ? function(fn, time /*, ...args */){
	    return set(invoke(
	      partial,
	      [].slice.call(arguments, 2),
	      typeof fn == 'function' ? fn : Function(fn)
	    ), time);
	  } : set;
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout:  wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var path      = __webpack_require__(186)
	  , invoke    = __webpack_require__(21)
	  , aFunction = __webpack_require__(15);
	module.exports = function(/* ...pargs */){
	  var fn     = aFunction(this)
	    , length = arguments.length
	    , pargs  = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that  = this
	      , $$    = arguments
	      , $$len = $$.length
	      , j = 0, k = 0, args;
	    if(!holder && !$$len)return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = $$[k++];
	    while($$len > k)args.push($$[k++]);
	    return invoke(fn, args, that);
	  };
	};

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6);

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(5)
	  , $task   = __webpack_require__(143);
	$export($export.G + $export.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(119);
	var global      = __webpack_require__(6)
	  , hide        = __webpack_require__(8)
	  , Iterators   = __webpack_require__(102)
	  , ITERATOR    = __webpack_require__(33)('iterator')
	  , NL          = global.NodeList
	  , HTC         = global.HTMLCollection
	  , NLProto     = NL && NL.prototype
	  , HTCProto    = HTC && HTC.prototype
	  , ArrayValues = Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
	if(NLProto && !NLProto[ITERATOR])hide(NLProto, ITERATOR, ArrayValues);
	if(HTCProto && !HTCProto[ITERATOR])hide(HTCProto, ITERATOR, ArrayValues);

/***/ },
/* 189 */
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
	
	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var iteratorSymbol =
	    typeof Symbol === "function" && Symbol.iterator || "@@iterator";
	
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
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = Object.create((outerFn || Generator).prototype);
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
	
	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
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
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function(arg) {
	    return new AwaitArgument(arg);
	  };
	
	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }
	
	  function AsyncIterator(generator) {
	    // This invoke function is written in a style that assumes some
	    // calling function (or Promise) will handle exceptions.
	    function invoke(method, arg) {
	      var result = generator[method](arg);
	      var value = result.value;
	      return value instanceof AwaitArgument
	        ? Promise.resolve(value.arg).then(invokeNext, invokeThrow)
	        : Promise.resolve(value).then(function(unwrapped) {
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
	            return result;
	          });
	    }
	
	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }
	
	    var invokeNext = invoke.bind(generator, "next");
	    var invokeThrow = invoke.bind(generator, "throw");
	    var invokeReturn = invoke.bind(generator, "return");
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return invoke(method, arg);
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
	        ) : new Promise(function (resolve) {
	          resolve(callInvokeWithMethodAndArg());
	        });
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	
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
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" ||
	              (method === "throw" && delegate.iterator[method] === undefined)) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;
	
	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }
	
	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }
	
	          var record = tryCatch(
	            delegate.iterator[method],
	            delegate.iterator,
	            arg
	          );
	
	          if (record.type === "throw") {
	            context.delegate = null;
	
	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }
	
	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;
	
	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }
	
	          context.delegate = null;
	        }
	
	        if (method === "next") {
	          context._sent = arg;
	
	          if (state === GenStateSuspendedYield) {
	            context.sent = arg;
	          } else {
	            context.sent = undefined;
	          }
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }
	
	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          var info = {
	            value: record.arg,
	            done: context.done
	          };
	
	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
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
	      this.sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
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
	        return !!caught;
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
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }
	
	      return ContinueSentinel;
	    },
	
	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(190)))

/***/ },
/* 190 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
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
	    var timeout = setTimeout(cleanUpNextTick);
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
	    clearTimeout(timeout);
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
	        setTimeout(drainQueue, 0);
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
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PushMenuLayout = exports.Plane = exports.Molecule = exports.Grid = exports.DoubleSidedPlane = exports.Cube = exports.Calendar = undefined;
	
	var _motor = __webpack_require__(192);
	
	var _loop = function _loop(_key3) {
	    if (_key3 === "default") return 'continue';
	    Object.defineProperty(exports, _key3, {
	        enumerable: true,
	        get: function get() {
	            return _motor[_key3];
	        }
	    });
	};
	
	for (var _key3 in _motor) {
	    var _ret = _loop(_key3);
	
	    if (_ret === 'continue') continue;
	}
	
	var _motorHtml = __webpack_require__(225);
	
	var _loop2 = function _loop2(_key4) {
	    if (_key4 === "default") return 'continue';
	    Object.defineProperty(exports, _key4, {
	        enumerable: true,
	        get: function get() {
	            return _motorHtml[_key4];
	        }
	    });
	};
	
	for (var _key4 in _motorHtml) {
	    var _ret2 = _loop2(_key4);
	
	    if (_ret2 === 'continue') continue;
	}
	
	var _Calendar = __webpack_require__(228);
	
	var _Calendar2 = _interopRequireDefault(_Calendar);
	
	var _Cube = __webpack_require__(255);
	
	var _Cube2 = _interopRequireDefault(_Cube);
	
	var _DoubleSidedPlane = __webpack_require__(251);
	
	var _DoubleSidedPlane2 = _interopRequireDefault(_DoubleSidedPlane);
	
	var _Grid = __webpack_require__(249);
	
	var _Grid2 = _interopRequireDefault(_Grid);
	
	var _Molecule = __webpack_require__(235);
	
	var _Molecule2 = _interopRequireDefault(_Molecule);
	
	var _Plane = __webpack_require__(252);
	
	var _Plane2 = _interopRequireDefault(_Plane);
	
	var _PushMenuLayout = __webpack_require__(260);
	
	var _PushMenuLayout2 = _interopRequireDefault(_PushMenuLayout);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Calendar = _Calendar2.default;
	exports.Cube = _Cube2.default;
	exports.DoubleSidedPlane = _DoubleSidedPlane2.default;
	exports.Grid = _Grid2.default;
	exports.Molecule = _Molecule2.default;
	exports.Plane = _Plane2.default;
	exports.PushMenuLayout = _PushMenuLayout2.default;

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Scene = exports.Node = exports.Curves = undefined;
	
	var _Utility = __webpack_require__(193);
	
	var _loop = function _loop(_key2) {
	    if (_key2 === "default") return 'continue';
	    Object.defineProperty(exports, _key2, {
	        enumerable: true,
	        get: function get() {
	            return _Utility[_key2];
	        }
	    });
	};
	
	for (var _key2 in _Utility) {
	    var _ret = _loop(_key2);
	
	    if (_ret === 'continue') continue;
	}
	
	var _Curves = __webpack_require__(195);
	
	var _Curves2 = _interopRequireDefault(_Curves);
	
	var _Node = __webpack_require__(196);
	
	var _Node2 = _interopRequireDefault(_Node);
	
	var _Scene = __webpack_require__(224);
	
	var _Scene2 = _interopRequireDefault(_Scene);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Curves = _Curves2.default;
	exports.Node = _Node2.default;
	exports.Scene = _Scene2.default;

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.makeLowercaseSetterAliases = exports.getBodySize = exports.documentLoaded = exports.windowLoaded = exports.documentReady = exports.applyCSSLabel = exports.epsilon = exports.stopLoop = exports.startLoop = exports.startTween = undefined;
	
	
	/**
	 * Await for this to run code after the DOM has been parsed and loaded (but not
	 * sub-resources like images, scripts, etc).
	 */
	
	var documentReady = function () {
	    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
	        return regeneratorRuntime.wrap(function _callee$(_context) {
	            while (1) {
	                switch (_context.prev = _context.next) {
	                    case 0:
	                        if (!(document.readyState === 'loading')) {
	                            _context.next = 3;
	                            break;
	                        }
	
	                        _context.next = 3;
	                        return new Promise(function (resolve) {
	                            document.addEventListener('DOMContentLoaded', resolve);
	                        });
	
	                    case 3:
	                    case 'end':
	                        return _context.stop();
	                }
	            }
	        }, _callee, this);
	    }));
	
	    return function documentReady() {
	        return ref.apply(this, arguments);
	    };
	}();
	
	/**
	 * Await for this to run code after the DOM's sub-resources have been loaded
	 * (images, scripts, etc).
	 */
	
	
	var windowLoaded = function () {
	    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
	        return regeneratorRuntime.wrap(function _callee2$(_context2) {
	            while (1) {
	                switch (_context2.prev = _context2.next) {
	                    case 0:
	                        if (!(document.readyState !== 'complete')) {
	                            _context2.next = 3;
	                            break;
	                        }
	
	                        _context2.next = 3;
	                        return new Promise(function (resolve) {
	                            window.addEventListener('load', resolve);
	                        });
	
	                    case 3:
	                    case 'end':
	                        return _context2.stop();
	                }
	            }
	        }, _callee2, this);
	    }));
	
	    return function windowLoaded() {
	        return ref.apply(this, arguments);
	    };
	}();
	
	/**
	 * Alias to windowLoaded.
	 */
	
	
	var documentLoaded = function () {
	    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
	        return regeneratorRuntime.wrap(function _callee3$(_context3) {
	            while (1) {
	                switch (_context3.prev = _context3.next) {
	                    case 0:
	                        _context3.next = 2;
	                        return windowLoaded();
	
	                    case 2:
	                    case 'end':
	                        return _context3.stop();
	                }
	            }
	        }, _callee3, this);
	    }));
	
	    return function documentLoaded() {
	        return ref.apply(this, arguments);
	    };
	}();
	
	/**
	 * Get the dimensions of the body element.
	 * @async
	 * @return {Object} An object containing `width` and `height` properties.
	 */
	
	
	var getBodySize = function () {
	    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
	        var body, width, height;
	        return regeneratorRuntime.wrap(function _callee4$(_context4) {
	            while (1) {
	                switch (_context4.prev = _context4.next) {
	                    case 0:
	                        _context4.next = 2;
	                        return documentLoaded();
	
	                    case 2:
	                        body = document.body;
	                        width = window.parseInt(window.getComputedStyle(body).getPropertyValue('width'));
	                        height = window.parseInt(window.getComputedStyle(body).getPropertyValue('height'));
	                        return _context4.abrupt('return', { width: width, height: height });
	
	                    case 6:
	                    case 'end':
	                        return _context4.stop();
	                }
	            }
	        }, _callee4, this);
	    }));
	
	    return function getBodySize() {
	        return ref.apply(this, arguments);
	    };
	}();
	
	// Create lowercase versions of each setter property.
	
	
	var _tween = __webpack_require__(194);
	
	var _tween2 = _interopRequireDefault(_tween);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }
	
	var rAF = null; // reference to the rAF loop used for animating everything.
	
	function startTween(tween) {
	    tween.start();
	    startLoop();
	}
	
	// Render the scene repeatedly. In the future we can render only the needed
	// parts.
	function startLoop() {
	    // start an rAF loop if there isn't one.
	    if (!rAF) {
	        rAF = window.requestAnimationFrame(function tick() {
	
	            // (errors could happen in the TWEEN.update() call below, so we
	            // catch them and rethrow them, for now.)
	            try {
	
	                // If we have a reason to request a new frame, continue.
	                if (_tween2.default.getAll().length) {
	                    // if we have tweens left to animate.
	                    _tween2.default.update(); // update all tweens
	                    // ^ TODO: pass in a custom timestamp here. We'll need to
	                    // do this in order to synchronize all the parts (DOM
	                    // renderer, WebGL renderer, etc).
	
	                    rAF = window.requestAnimationFrame(tick);
	                }
	
	                // Otherwise don't request the next frame, and nullify the rAF
	                // reference.
	                else {
	                        rAF = null;
	                    }
	            } catch (error) {
	                throw error;
	            }
	        });
	    }
	}
	
	// TODO: How do we pause tweens?
	function stopLoop() {
	    if (rAF) {
	        window.cancelAnimationFrame(rAF);
	        rAF = null;
	    }
	}
	
	function epsilon(value) {
	    return Math.abs(value) < 0.000001 ? 0 : value;
	}
	
	function applyCSSLabel(value, label) {
	    if (value === 0) {
	        return '0px';
	    } else if (label === '%') {
	        return value * 100 + '%';
	    } else if (label === 'px') {
	        return value + 'px';
	    }
	}function makeLowercaseSetterAliases(object) {
	    console.log('making lowercase aliases.');
	    var props = Object.getOwnPropertyNames(object);
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	        for (var _iterator = props[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var prop = _step.value;
	
	            var lowercaseProp = prop.toLowerCase();
	            if (lowercaseProp != prop) {
	                var descriptor = Object.getOwnPropertyDescriptor(object, prop);
	                if (Object.getOwnPropertyNames(descriptor).includes('set')) {
	                    // we care only about the setters.
	                    Object.defineProperty(object, lowercaseProp, descriptor);
	                }
	            }
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }
	}
	
	exports.startTween = startTween;
	exports.startLoop = startLoop;
	exports.stopLoop = stopLoop;
	exports.epsilon = epsilon;
	exports.applyCSSLabel = applyCSSLabel;
	exports.documentReady = documentReady;
	exports.windowLoaded = windowLoaded;
	exports.documentLoaded = documentLoaded;
	exports.getBodySize = getBodySize;
	exports.makeLowercaseSetterAliases = makeLowercaseSetterAliases;

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Tween.js - Licensed under the MIT license
	 * https://github.com/tweenjs/tween.js
	 * ----------------------------------------------
	 *
	 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
	 * Thank you all, you're awesome!
	 */
	
	// Include a performance.now polyfill
	(function () {
	
		if ('performance' in window === false) {
			window.performance = {};
		}
	
		// IE 8
		Date.now = (Date.now || function () {
			return new Date().getTime();
		});
	
		if ('now' in window.performance === false) {
			var offset = window.performance.timing && window.performance.timing.navigationStart ? window.performance.timing.navigationStart
			                                                                                    : Date.now();
	
			window.performance.now = function () {
				return Date.now() - offset;
			};
		}
	
	})();
	
	var TWEEN = TWEEN || (function () {
	
		var _tweens = [];
	
		return {
	
			getAll: function () {
	
				return _tweens;
	
			},
	
			removeAll: function () {
	
				_tweens = [];
	
			},
	
			add: function (tween) {
	
				_tweens.push(tween);
	
			},
	
			remove: function (tween) {
	
				var i = _tweens.indexOf(tween);
	
				if (i !== -1) {
					_tweens.splice(i, 1);
				}
	
			},
	
			update: function (time) {
	
				if (_tweens.length === 0) {
					return false;
				}
	
				var i = 0;
	
				time = time !== undefined ? time : window.performance.now();
	
				while (i < _tweens.length) {
	
					if (_tweens[i].update(time)) {
						i++;
					} else {
						_tweens.splice(i, 1);
					}
	
				}
	
				return true;
	
			}
		};
	
	})();
	
	TWEEN.Tween = function (object) {
	
		var _object = object;
		var _valuesStart = {};
		var _valuesEnd = {};
		var _valuesStartRepeat = {};
		var _duration = 1000;
		var _repeat = 0;
		var _yoyo = false;
		var _isPlaying = false;
		var _reversed = false;
		var _delayTime = 0;
		var _startTime = null;
		var _easingFunction = TWEEN.Easing.Linear.None;
		var _interpolationFunction = TWEEN.Interpolation.Linear;
		var _chainedTweens = [];
		var _onStartCallback = null;
		var _onStartCallbackFired = false;
		var _onUpdateCallback = null;
		var _onCompleteCallback = null;
		var _onStopCallback = null;
	
		// Set all starting values present on the target object
		for (var field in object) {
			_valuesStart[field] = parseFloat(object[field], 10);
		}
	
		this.to = function (properties, duration) {
	
			if (duration !== undefined) {
				_duration = duration;
			}
	
			_valuesEnd = properties;
	
			return this;
	
		};
	
		this.start = function (time) {
	
			TWEEN.add(this);
	
			_isPlaying = true;
	
			_onStartCallbackFired = false;
	
			_startTime = time !== undefined ? time : window.performance.now();
			_startTime += _delayTime;
	
			for (var property in _valuesEnd) {
	
				// Check if an Array was provided as property value
				if (_valuesEnd[property] instanceof Array) {
	
					if (_valuesEnd[property].length === 0) {
						continue;
					}
	
					// Create a local copy of the Array with the start value at the front
					_valuesEnd[property] = [_object[property]].concat(_valuesEnd[property]);
	
				}
	
				// If `to()` specifies a property that doesn't exist in the source object,
				// we should not set that property in the object
				if (_valuesStart[property] === undefined) {
					continue;
				}
	
				_valuesStart[property] = _object[property];
	
				if ((_valuesStart[property] instanceof Array) === false) {
					_valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
				}
	
				_valuesStartRepeat[property] = _valuesStart[property] || 0;
	
			}
	
			return this;
	
		};
	
		this.stop = function () {
	
			if (!_isPlaying) {
				return this;
			}
	
			TWEEN.remove(this);
			_isPlaying = false;
	
			if (_onStopCallback !== null) {
				_onStopCallback.call(_object);
			}
	
			this.stopChainedTweens();
			return this;
	
		};
	
		this.stopChainedTweens = function () {
	
			for (var i = 0, numChainedTweens = _chainedTweens.length; i < numChainedTweens; i++) {
				_chainedTweens[i].stop();
			}
	
		};
	
		this.delay = function (amount) {
	
			_delayTime = amount;
			return this;
	
		};
	
		this.repeat = function (times) {
	
			_repeat = times;
			return this;
	
		};
	
		this.yoyo = function (yoyo) {
	
			_yoyo = yoyo;
			return this;
	
		};
	
	
		this.easing = function (easing) {
	
			_easingFunction = easing;
			return this;
	
		};
	
		this.interpolation = function (interpolation) {
	
			_interpolationFunction = interpolation;
			return this;
	
		};
	
		this.chain = function () {
	
			_chainedTweens = arguments;
			return this;
	
		};
	
		this.onStart = function (callback) {
	
			_onStartCallback = callback;
			return this;
	
		};
	
		this.onUpdate = function (callback) {
	
			_onUpdateCallback = callback;
			return this;
	
		};
	
		this.onComplete = function (callback) {
	
			_onCompleteCallback = callback;
			return this;
	
		};
	
		this.onStop = function (callback) {
	
			_onStopCallback = callback;
			return this;
	
		};
	
		this.update = function (time) {
	
			var property;
			var elapsed;
			var value;
	
			if (time < _startTime) {
				return true;
			}
	
			if (_onStartCallbackFired === false) {
	
				if (_onStartCallback !== null) {
					_onStartCallback.call(_object);
				}
	
				_onStartCallbackFired = true;
	
			}
	
			elapsed = (time - _startTime) / _duration;
			elapsed = elapsed > 1 ? 1 : elapsed;
	
			value = _easingFunction(elapsed);
	
			for (property in _valuesEnd) {
	
				// Don't update properties that do not exist in the source object
				if (_valuesStart[property] === undefined) {
					continue;
				}
	
				var start = _valuesStart[property] || 0;
				var end = _valuesEnd[property];
	
				if (end instanceof Array) {
	
					_object[property] = _interpolationFunction(end, value);
	
				} else {
	
					// Parses relative end values with start as base (e.g.: +10, -3)
					if (typeof (end) === 'string') {
	
						if (end.startsWith('+') || end.startsWith('-')) {
							end = start + parseFloat(end, 10);
						} else {
							end = parseFloat(end, 10);
						}
					}
	
					// Protect against non numeric properties.
					if (typeof (end) === 'number') {
						_object[property] = start + (end - start) * value;
					}
	
				}
	
			}
	
			if (_onUpdateCallback !== null) {
				_onUpdateCallback.call(_object, value);
			}
	
			if (elapsed === 1) {
	
				if (_repeat > 0) {
	
					if (isFinite(_repeat)) {
						_repeat--;
					}
	
					// Reassign starting values, restart by making startTime = now
					for (property in _valuesStartRepeat) {
	
						if (typeof (_valuesEnd[property]) === 'string') {
							_valuesStartRepeat[property] = _valuesStartRepeat[property] + parseFloat(_valuesEnd[property], 10);
						}
	
						if (_yoyo) {
							var tmp = _valuesStartRepeat[property];
	
							_valuesStartRepeat[property] = _valuesEnd[property];
							_valuesEnd[property] = tmp;
						}
	
						_valuesStart[property] = _valuesStartRepeat[property];
	
					}
	
					if (_yoyo) {
						_reversed = !_reversed;
					}
	
					_startTime = time + _delayTime;
	
					return true;
	
				} else {
	
					if (_onCompleteCallback !== null) {
						_onCompleteCallback.call(_object);
					}
	
					for (var i = 0, numChainedTweens = _chainedTweens.length; i < numChainedTweens; i++) {
						// Make the chained tweens start exactly at the time they should,
						// even if the `update()` method was called way past the duration of the tween
						_chainedTweens[i].start(_startTime + _duration);
					}
	
					return false;
	
				}
	
			}
	
			return true;
	
		};
	
	};
	
	
	TWEEN.Easing = {
	
		Linear: {
	
			None: function (k) {
	
				return k;
	
			}
	
		},
	
		Quadratic: {
	
			In: function (k) {
	
				return k * k;
	
			},
	
			Out: function (k) {
	
				return k * (2 - k);
	
			},
	
			InOut: function (k) {
	
				if ((k *= 2) < 1) {
					return 0.5 * k * k;
				}
	
				return - 0.5 * (--k * (k - 2) - 1);
	
			}
	
		},
	
		Cubic: {
	
			In: function (k) {
	
				return k * k * k;
	
			},
	
			Out: function (k) {
	
				return --k * k * k + 1;
	
			},
	
			InOut: function (k) {
	
				if ((k *= 2) < 1) {
					return 0.5 * k * k * k;
				}
	
				return 0.5 * ((k -= 2) * k * k + 2);
	
			}
	
		},
	
		Quartic: {
	
			In: function (k) {
	
				return k * k * k * k;
	
			},
	
			Out: function (k) {
	
				return 1 - (--k * k * k * k);
	
			},
	
			InOut: function (k) {
	
				if ((k *= 2) < 1) {
					return 0.5 * k * k * k * k;
				}
	
				return - 0.5 * ((k -= 2) * k * k * k - 2);
	
			}
	
		},
	
		Quintic: {
	
			In: function (k) {
	
				return k * k * k * k * k;
	
			},
	
			Out: function (k) {
	
				return --k * k * k * k * k + 1;
	
			},
	
			InOut: function (k) {
	
				if ((k *= 2) < 1) {
					return 0.5 * k * k * k * k * k;
				}
	
				return 0.5 * ((k -= 2) * k * k * k * k + 2);
	
			}
	
		},
	
		Sinusoidal: {
	
			In: function (k) {
	
				return 1 - Math.cos(k * Math.PI / 2);
	
			},
	
			Out: function (k) {
	
				return Math.sin(k * Math.PI / 2);
	
			},
	
			InOut: function (k) {
	
				return 0.5 * (1 - Math.cos(Math.PI * k));
	
			}
	
		},
	
		Exponential: {
	
			In: function (k) {
	
				return k === 0 ? 0 : Math.pow(1024, k - 1);
	
			},
	
			Out: function (k) {
	
				return k === 1 ? 1 : 1 - Math.pow(2, - 10 * k);
	
			},
	
			InOut: function (k) {
	
				if (k === 0) {
					return 0;
				}
	
				if (k === 1) {
					return 1;
				}
	
				if ((k *= 2) < 1) {
					return 0.5 * Math.pow(1024, k - 1);
				}
	
				return 0.5 * (- Math.pow(2, - 10 * (k - 1)) + 2);
	
			}
	
		},
	
		Circular: {
	
			In: function (k) {
	
				return 1 - Math.sqrt(1 - k * k);
	
			},
	
			Out: function (k) {
	
				return Math.sqrt(1 - (--k * k));
	
			},
	
			InOut: function (k) {
	
				if ((k *= 2) < 1) {
					return - 0.5 * (Math.sqrt(1 - k * k) - 1);
				}
	
				return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
	
			}
	
		},
	
		Elastic: {
	
			In: function (k) {
	
				var s;
				var a = 0.1;
				var p = 0.4;
	
				if (k === 0) {
					return 0;
				}
	
				if (k === 1) {
					return 1;
				}
	
				if (!a || a < 1) {
					a = 1;
					s = p / 4;
				} else {
					s = p * Math.asin(1 / a) / (2 * Math.PI);
				}
	
				return - (a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
	
			},
	
			Out: function (k) {
	
				var s;
				var a = 0.1;
				var p = 0.4;
	
				if (k === 0) {
					return 0;
				}
	
				if (k === 1) {
					return 1;
				}
	
				if (!a || a < 1) {
					a = 1;
					s = p / 4;
				} else {
					s = p * Math.asin(1 / a) / (2 * Math.PI);
				}
	
				return (a * Math.pow(2, - 10 * k) * Math.sin((k - s) * (2 * Math.PI) / p) + 1);
	
			},
	
			InOut: function (k) {
	
				var s;
				var a = 0.1;
				var p = 0.4;
	
				if (k === 0) {
					return 0;
				}
	
				if (k === 1) {
					return 1;
				}
	
				if (!a || a < 1) {
					a = 1;
					s = p / 4;
				} else {
					s = p * Math.asin(1 / a) / (2 * Math.PI);
				}
	
				if ((k *= 2) < 1) {
					return - 0.5 * (a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
				}
	
				return a * Math.pow(2, -10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p) * 0.5 + 1;
	
			}
	
		},
	
		Back: {
	
			In: function (k) {
	
				var s = 1.70158;
	
				return k * k * ((s + 1) * k - s);
	
			},
	
			Out: function (k) {
	
				var s = 1.70158;
	
				return --k * k * ((s + 1) * k + s) + 1;
	
			},
	
			InOut: function (k) {
	
				var s = 1.70158 * 1.525;
	
				if ((k *= 2) < 1) {
					return 0.5 * (k * k * ((s + 1) * k - s));
				}
	
				return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
	
			}
	
		},
	
		Bounce: {
	
			In: function (k) {
	
				return 1 - TWEEN.Easing.Bounce.Out(1 - k);
	
			},
	
			Out: function (k) {
	
				if (k < (1 / 2.75)) {
					return 7.5625 * k * k;
				} else if (k < (2 / 2.75)) {
					return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
				} else if (k < (2.5 / 2.75)) {
					return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
				} else {
					return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
				}
	
			},
	
			InOut: function (k) {
	
				if (k < 0.5) {
					return TWEEN.Easing.Bounce.In(k * 2) * 0.5;
				}
	
				return TWEEN.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;
	
			}
	
		}
	
	};
	
	TWEEN.Interpolation = {
	
		Linear: function (v, k) {
	
			var m = v.length - 1;
			var f = m * k;
			var i = Math.floor(f);
			var fn = TWEEN.Interpolation.Utils.Linear;
	
			if (k < 0) {
				return fn(v[0], v[1], f);
			}
	
			if (k > 1) {
				return fn(v[m], v[m - 1], m - f);
			}
	
			return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
	
		},
	
		Bezier: function (v, k) {
	
			var b = 0;
			var n = v.length - 1;
			var pw = Math.pow;
			var bn = TWEEN.Interpolation.Utils.Bernstein;
	
			for (var i = 0; i <= n; i++) {
				b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
			}
	
			return b;
	
		},
	
		CatmullRom: function (v, k) {
	
			var m = v.length - 1;
			var f = m * k;
			var i = Math.floor(f);
			var fn = TWEEN.Interpolation.Utils.CatmullRom;
	
			if (v[0] === v[m]) {
	
				if (k < 0) {
					i = Math.floor(f = m * (1 + k));
				}
	
				return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
	
			} else {
	
				if (k < 0) {
					return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
				}
	
				if (k > 1) {
					return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
				}
	
				return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
	
			}
	
		},
	
		Utils: {
	
			Linear: function (p0, p1, t) {
	
				return (p1 - p0) * t + p0;
	
			},
	
			Bernstein: function (n, i) {
	
				var fc = TWEEN.Interpolation.Utils.Factorial;
	
				return fc(n) / fc(i) / fc(n - i);
	
			},
	
			Factorial: (function () {
	
				var a = [1];
	
				return function (n) {
	
					var s = 1;
	
					if (a[n]) {
						return a[n];
					}
	
					for (var i = n; i > 1; i--) {
						s *= i;
					}
	
					a[n] = s;
					return s;
	
				};
	
			})(),
	
			CatmullRom: function (p0, p1, p2, p3, t) {
	
				var v0 = (p2 - p0) * 0.5;
				var v1 = (p3 - p1) * 0.5;
				var t2 = t * t;
				var t3 = t * t2;
	
				return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (- 3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
	
			}
	
		}
	
	};
	
	// UMD (Universal Module Definition)
	(function (root) {
	
		if (true) {
	
			// AMD
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return TWEEN;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	
		} else if (typeof module !== 'undefined' && typeof exports === 'object') {
	
			// Node.js
			module.exports = TWEEN;
	
		} else if (root !== undefined) {
	
			// Global variable
			root.TWEEN = TWEEN;
	
		}
	
	})(this);


/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _tween = __webpack_require__(194);
	
	var _tween2 = _interopRequireDefault(_tween);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	
	    // Linear
	    Linear: _tween2.default.Easing.Linear.None,
	
	    // Exponential
	    ExponentialIn: _tween2.default.Easing.Exponential.In,
	    ExponentialOut: _tween2.default.Easing.Exponential.InOut,
	    ExponentialInOut: _tween2.default.Easing.Exponential.InOut,
	
	    // Quadratic
	    QuadraticIn: _tween2.default.Easing.Quadratic.In,
	    QuadraticOut: _tween2.default.Easing.Quadratic.InOut,
	    QuadraticInOut: _tween2.default.Easing.Quadratic.InOut,
	
	    // Cubic
	    CubicIn: _tween2.default.Easing.Cubic.In,
	    CubicOut: _tween2.default.Easing.Cubic.InOut,
	    CubicInOut: _tween2.default.Easing.Cubic.InOut,
	
	    // Quartic
	    QuarticIn: _tween2.default.Easing.Quartic.In,
	    QuarticOut: _tween2.default.Easing.Quartic.InOut,
	    QuarticInOut: _tween2.default.Easing.Quartic.InOut,
	
	    // Quintic
	    QuinticIn: _tween2.default.Easing.Quintic.In,
	    QuinticOut: _tween2.default.Easing.Quintic.InOut,
	    QuinticInOut: _tween2.default.Easing.Quintic.InOut,
	
	    // Sinusoidal
	    SinusoidalIn: _tween2.default.Easing.Sinusoidal.In,
	    SinusoidalOut: _tween2.default.Easing.Sinusoidal.InOut,
	    SinusoidalInOut: _tween2.default.Easing.Sinusoidal.InOut,
	
	    // Circular
	    CircularIn: _tween2.default.Easing.Circular.In,
	    CircularOut: _tween2.default.Easing.Circular.InOut,
	    CircularInOut: _tween2.default.Easing.Circular.InOut,
	
	    // Elastic
	    ElasticIn: _tween2.default.Easing.Elastic.In,
	    ElasticOut: _tween2.default.Easing.Elastic.InOut,
	    ElasticInOut: _tween2.default.Easing.Elastic.InOut,
	
	    // Back
	    BackIn: _tween2.default.Easing.Back.In,
	    BackOut: _tween2.default.Easing.Back.InOut,
	    BackInOut: _tween2.default.Easing.Back.InOut,
	
	    // Bounce
	    BounceIn: _tween2.default.Easing.Bounce.In,
	    BounceOut: _tween2.default.Easing.Bounce.InOut,
	    BounceInOut: _tween2.default.Easing.Bounce.InOut
	};

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(197);
	
	var _jss = __webpack_require__(198);
	
	var _jss2 = _interopRequireDefault(_jss);
	
	var _Utility = __webpack_require__(193);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var CSS_CLASS_NODE = 'motor-dom-node';
	
	var stylesheet = _jss2.default.createStyleSheet({
	    motorDomNode: {
	        position: 'absolute',
	
	        // TODO: set via JavaScript. Defaults to [0.5,0.5,0.5] (the Z axis
	        // doesn't apply for DOM elements, but will for 3D objects in WebGL.)
	        transformOrigin: '50% 50% 0', // default
	
	        transformStyle: 'preserve-3d'
	    }
	}).attach();
	
	/**
	 * Manages a DOM element. Exposes a set of recommended APIs for working with
	 * DOM efficiently.
	 */
	
	var ElManager = function () {
	    function ElManager(element) {
	        _classCallCheck(this, ElManager);
	
	        this.element = element;
	    }
	
	    /**
	     * @param {Array.string} classes An array of class names to add to the
	     * managed element.
	     *
	     * Note: updating class names with `el.classList.add()` won't thrash the
	     * layout. See: http://www.html5rocks.com/en/tutorials/speed/animations
	     */
	
	
	    _createClass(ElManager, [{
	        key: 'setClasses',
	        value: function setClasses() {
	            var _element$classList;
	
	            if (arguments.length) (_element$classList = this.element.classList).add.apply(_element$classList, arguments);
	            return this;
	        }
	    }]);
	
	    return ElManager;
	}();
	
	var Node = function () {
	
	    /**
	     * @constructor
	     *
	     * @param {Object} properties Properties object -- see example
	     *
	     * @example
	     * var node = new Node({
	     *   classes: ['open'],
	     *   position: [200, 300, 0],
	     *   rotation: [3, 0, 0],
	     *   scale: [1, 1, 1],
	     *   size: {
	     *     mode: ['absolute', 'proportional'],
	     *     absolute: [300, null],
	     *     proportional: [null, .5]
	     *   },
	     *   opacity: .9
	     * })
	     */
	
	    function Node() {
	        var properties = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	        _classCallCheck(this, Node);
	
	        // DOM representation of Node
	        // TODO: remove this and handle it in the "DOMRenderer"
	        this._el = new ElManager(document.createElement('div'));
	        this._el.setClasses(stylesheet.classes.motorDomNode);
	
	        this._mounted = false;
	        this._removedChildren = []; // FIFO
	
	        this._parent = null; // default to no parent.
	
	        // Property Cache, with default values
	        this._properties = {
	
	            // TODO: remove these in favor of storing them directly in the
	            // DOMMatrix?
	            position: [0, 0, 0],
	            rotation: [0, 0, 0],
	
	            origin: [0.5, 0.5, 0.5], // TODO, handle origin.
	            align: [0, 0, 0],
	            mountPoint: [0, 0, 0],
	            size: {
	                mode: ['absolute', 'absolute', 'absolute'],
	                absolute: [0, 0, 0],
	                proportional: [1, 1, 1]
	            }
	        };
	
	        // Style Cache
	        this._style = Object.assign({
	            transform: {
	                domMatrix: new DOMMatrix()
	            }
	        }, properties.style);
	
	        this._children = [];
	
	        this.setProperties(properties);
	    }
	
	    /**
	     * Publicly, the user can only read the parent parent property.
	     * this._parent is protected (node's can access other node._parent). The
	     * user should use the addChild methods, which automatically handles
	     * setting a parent.
	     *
	     * @readonly
	     */
	
	
	    _createClass(Node, [{
	        key: 'setPosition',
	
	
	        /**
	         * Set the position of the Node.
	         *
	         * @param {Array.number} position An array of three numbers which are the X,
	         * Y, and Z positions (translations) to apply.
	         * @chainable
	         */
	        value: function setPosition(position) {
	            this.position = position;
	            return this;
	        }
	    }, {
	        key: 'setRotation',
	
	
	        /**
	         * @param {Array.number} rotation A 3-item array, each item the rotation
	         * about each axis X, Y, Z, respectively, in degrees.
	         *
	         * TODO: We should also provide a setRotationAxis method to rotate about a
	         * particular axis.
	         */
	        value: function setRotation(rotation) {
	            this.rotation = rotation;
	            return this;
	        }
	    }, {
	        key: 'setScale',
	
	
	        /**
	         * @return {Array.number} An array of 3 numbers, each number representing
	         * the X, Y, and Z scale of the Node (in that order).
	         */
	        value: function setScale(scale) {
	            this.scale = scale;
	            return this;
	        }
	    }, {
	        key: 'setOpacity',
	
	
	        /**
	         * Set this Node's opacity.
	         *
	         * @param {number} opacity A floating point number between 0 and 1
	         * (inclusive). 0 is fully transparent, 1 is fully opaque.
	         */
	        value: function setOpacity(opacity) {
	            this.opacity = opacity;
	            return this;
	        }
	    }, {
	        key: 'setSizeMode',
	
	
	        /**
	         * Set the size mode for each axis. Possible size modes are "absolute" and "proportional".
	         *
	         * @param {Array.string} mode A three-item array of strings, each item
	         * corresponding to the x, y, and z axes respectively.
	         */
	        value: function setSizeMode(mode) {
	            this.sizeMode = mode;
	            return this;
	        }
	    }, {
	        key: 'setAbsoluteSize',
	
	
	        /**
	         * @param {Array} size [description]
	         */
	        value: function setAbsoluteSize(size) {
	            this.absoluteSize = size;
	            return this;
	        }
	    }, {
	        key: 'setProportionalSize',
	
	
	        /**
	         * Set the size of a Node proportional to the size of it's parent Node.
	         *
	         * ```
	         * node.proportionalSize = [100,100,100]
	         * console.log(node.proportionalSize)
	         * ```
	         *
	         * @param {Array.number} size A three-item array of numbers, each item
	         * representing the proprtional size of the x, y, and z axes respectively.
	         */
	        value: function setProportionalSize(size) {
	            this.proportionalSize = size;
	            return this;
	        }
	    }, {
	        key: 'setAlign',
	
	
	        /**
	         * Set the alignment of the Node. This determines at which point in this
	         * Node's parent that this Node is mounted.
	         * @param {Array.number} alignment Array of three alignment values, one for each axis.
	         */
	        value: function setAlign(alignment) {
	            this.align = alignment;
	            return this;
	        }
	    }, {
	        key: 'setMountPoint',
	
	
	        /**
	         * Set the mount point of the Node. TODO: put "mount point" into words.
	         *
	         * @param {Array.number} mountPoint Array of three mount point values, one
	         * for each axis.
	         */
	        value: function setMountPoint(mountPoint) {
	            this.mountPoint = mountPoint;
	            return this;
	        }
	    }, {
	        key: 'setProperties',
	
	
	        /**
	         * Set all properties of the Node in one method.
	         *
	         * @param {Object} properties Properties object - see example
	         *
	         * @example
	         * node.setProperties({
	         *   classes: ['open'],
	         *   position: [200, 300, 0],
	         *   rotation: [3, 0, 0],
	         *   scale: [1, 1, 1],
	         *   size: {
	         *     mode: ['absolute', 'proportional'],
	         *     absolute: [300, null],
	         *     proportional: [null, .5]
	         *   },
	         *   opacity: .9
	         * })
	         */
	        value: function setProperties(properties) {
	            // Classes
	            if (properties.classes) this.setClasses(properties.classes);
	
	            // Position
	            if (properties.position && properties.position.length === 3) this.position = properties.position;
	
	            // Rotation
	            if (properties.rotation && properties.rotation.length === 3) this.rotation = properties.rotation;
	
	            // Scale
	            if (properties.scale && properties.scale.length === 3) this.scale = properties.scale;
	
	            // Align
	            if (properties.align && properties.align.length === 3) this.align = properties.align;
	
	            // Size
	            if (properties.size) {
	
	                // Size Modes
	                if (properties.size.mode && properties.size.mode.length === 2) this.sizeMode = properties.size.mode;
	
	                // Absolute Size
	                if (properties.size.absolute && properties.size.absolute.length === 2) this.absoluteSize = properties.size.absolute;
	
	                // Proportional Size
	                if (properties.size.proportional && properties.size.proportional.length === 2) this.proportionalSize = properties.size.proportional;
	            }
	
	            // Opacity
	            if (typeof properties.opacity != 'undefined') this.opacity = properties.opacity;
	
	            // Apply Styles
	            this._applyStyles();
	
	            return this;
	        }
	
	        /**
	         * Add Child
	         *
	         * @param {[type]} node [description]
	         */
	
	    }, {
	        key: 'addChild',
	        value: function addChild(node) {
	
	            if (node._parent) node._parent.removeChild(node);
	
	            // Add parent
	            node._parent = this;
	
	            // Add to children array
	            this._children.push(node);
	
	            return this;
	        }
	
	        /**
	         * Add all the child nodes in the given array to this node.
	         *
	         * @param {Array.Node} nodes The nodes to add.
	         */
	
	    }, {
	        key: 'addChildren',
	        value: function addChildren(nodes) {
	            var _this = this;
	
	            nodes.forEach(function (node) {
	                return _this.addChild(node);
	            });
	            return this;
	        }
	
	        /**
	         * Remove a child node from this node. Silently fails if the node doesn't
	         * exist, etc.
	         *
	         * XXX Should this be silent? Or should we throw?
	         *
	         * @param {Node} node The node to remove.
	         */
	
	    }, {
	        key: 'removeChild',
	        value: function removeChild(node) {
	            var hasNode = this._children.includes(node);
	
	            if (node instanceof Node && hasNode) {
	
	                this._removedChildren.push(node);
	
	                // Remove parent
	                node._parent = null;
	
	                // unmount
	                node._mounted = false;
	
	                // Remove from children array
	                this._children.splice(this._children.indexOf(node), 1);
	            }
	
	            return this;
	        }
	
	        /**
	         * Remove all the child nodes in the given array from this node.
	         *
	         * @param {Array.Node} nodes The nodes to remove.
	         */
	
	    }, {
	        key: 'removeChildren',
	        value: function removeChildren(nodes) {
	            var _this2 = this;
	
	            nodes.forEach(function (node) {
	                return _this2.removeChild(node);
	            });
	            return this;
	        }
	
	        /**
	         * @return {number} How many children this Node has.
	         */
	
	    }, {
	        key: 'render',
	
	
	        /**
	         */
	        value: function render() {
	
	            // applies the transform matrix to the element's style property.
	            // TODO: We shouldn't need to re-calculate the matrix every render?
	            this._setMatrix3d(this._calculateMatrix());
	
	            this._applyStyles();
	
	            //If Node isn't mounted.. mount it to the camera element
	            if (!this._mounted) {
	                if (this._parent) {
	                    // Mount to parent if parent is a Node
	                    // if (this._parent instanceof Node) {
	                    this._parent._el.element.appendChild(this._el.element);
	                    this._mounted = true;
	
	                    // Mount to camera if top level Node
	                    // } else {
	                    //   //scene.camera.element.appendChild(this._el);
	                    //   this._mounted = true;
	                    // }
	                }
	            }
	
	            // TODO: move this out, into DOMRenderer
	            while (this._removedChildren.length) {
	                var child = this._removedChildren.shift();
	
	                // the removeChild methods set this._mounted to false, and we use
	                // it as a hint that the child _el needs to be removed.
	                if (!child._mounted) {
	
	                    // XXX Only remove the child _el if it has an actual parent
	                    // (it's possible for it not to have one if removeChild was
	                    // called before the child was ever rendered, in which case
	                    // it's _el will never have been mounted in the previous).
	                    if (child._el.element.parentNode) child._el.element.parentNode.removeChild(child._el.element);
	                }
	            }
	
	            // Render Children
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = this._children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var child = _step.value;
	
	                    child.render();
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	
	            return this;
	        }
	
	        /**
	         * [applySize description]
	         *
	         * @method
	         * @private
	         * @memberOf Node
	         */
	
	    }, {
	        key: '_applySize',
	        value: function _applySize() {
	            var mode = this._properties.size.mode;
	            var absolute = this._properties.size.absolute;
	            var proportional = this._properties.size.proportional;
	
	            if (mode[0] === 'absolute') this._applyStyle('width', absolute[0] + 'px');else if (mode[0] === 'proportional') this._applyStyle('width', proportional[0] * 100 + '%');
	
	            if (mode[1] === 'absolute') this._applyStyle('height', absolute[1] + 'px');else if (mode[1] === 'proportional') this._applyStyle('height', proportional[1] * 100 + '%');
	        }
	
	        /**
	         * [applyTransform description]
	         *
	         * @method
	         * @private
	         * @memberOf Node
	         *
	         * TODO: instead of calculating the whole matrix here all at once (which
	         * gets called each render()), apply rotation, translation, etc, directly
	         * to the matrix right when the user gives us those values. This will be
	         * more performant. It will also let the user apply x,y,z rotation in their
	         * order of choice instead of always x,y,z order as we do here.
	         */
	
	    }, {
	        key: '_calculateMatrix',
	        value: function _calculateMatrix() {
	            var matrix = new DOMMatrix();
	
	            var alignAdjustment = [0, 0, 0];
	            if (this._parent) {
	                // The root Scene doesn't have a parent, for example.
	                var parentSize = this._parent.actualSize;
	                alignAdjustment[0] = parentSize[0] * this._properties.align[0];
	                alignAdjustment[1] = parentSize[1] * this._properties.align[1];
	                alignAdjustment[2] = parentSize[2] * this._properties.align[2];
	            }
	
	            var mountPointAdjustment = [0, 0, 0];
	            var thisSize = this.actualSize;
	            mountPointAdjustment[0] = thisSize[0] * this._properties.mountPoint[0];
	            mountPointAdjustment[1] = thisSize[1] * this._properties.mountPoint[1];
	            mountPointAdjustment[2] = thisSize[2] * this._properties.mountPoint[2];
	
	            var appliedPosition = [];
	            appliedPosition[0] = this._properties.position[0] + alignAdjustment[0] - mountPointAdjustment[0];
	            appliedPosition[1] = this._properties.position[1] + alignAdjustment[1] - mountPointAdjustment[1];
	            appliedPosition[2] = this._properties.position[2] + alignAdjustment[2] - mountPointAdjustment[2];
	
	            matrix.translateSelf(appliedPosition[0], appliedPosition[1], appliedPosition[2]);
	
	            // TODO: move by negative origin before rotating.
	            // XXX Should we calculate origin here, or should we leave that to the
	            // DOM renderer (in the style property)? WebGL renderer will need
	            // manual calculations. Maybe we don't do it here, and delegate it to
	            // DOM and WebGL renderers.
	
	            // apply each axis rotation, in the x,y,z order. TODO: This is
	            // restrictive, and we should let the user apply any axis rotation in
	            // any order.
	            var rotation = this._properties.rotation;
	            matrix.rotateAxisAngleSelf(1, 0, 0, rotation[0]); // x-axis rotation
	            matrix.rotateAxisAngleSelf(0, 1, 0, rotation[1]); // y-axis rotation
	            matrix.rotateAxisAngleSelf(0, 0, 1, rotation[2]); // z-axis rotation
	
	            // TODO: move by positive origin after rotating.
	
	            return matrix;
	        }
	
	        /**
	         * Apply the DOMMatrix value to the style of this Node's element.
	         *
	         * @private
	         *
	         * TODO We'll eventually apply the DOMMatrix directly instead of
	         * converting to a string here.
	         */
	
	    }, {
	        key: '_applyTransform',
	        value: function _applyTransform() {
	            var matrix = this._style.transform.domMatrix;
	
	            // XXX: is this in the right order? UPDATE: It is.
	            // TODO: Apply DOMMatrix directly to the Element once browser APIs
	            // support it.
	            var transform = 'matrix3d(\n            ' + matrix.m11 + ',\n            ' + matrix.m12 + ',\n            ' + matrix.m13 + ',\n            ' + matrix.m14 + ',\n            ' + matrix.m21 + ',\n            ' + matrix.m22 + ',\n            ' + matrix.m23 + ',\n            ' + matrix.m24 + ',\n            ' + matrix.m31 + ',\n            ' + matrix.m32 + ',\n            ' + matrix.m33 + ',\n            ' + matrix.m34 + ',\n            ' + matrix.m41 + ',\n            ' + matrix.m42 + ',\n            ' + matrix.m43 + ',\n            ' + matrix.m44 + '\n        )';
	
	            this._applyStyle('transform', transform);
	        }
	
	        /**
	         * [applyStyle description]
	         *
	         * @method
	         * @private
	         * @memberOf Node
	         * @param  {String} property [description]
	         * @param  {String} value    [description]
	         */
	
	    }, {
	        key: '_applyStyles',
	        value: function _applyStyles() {
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;
	
	            try {
	                for (var _iterator2 = Object.keys(this._style)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var key = _step2.value;
	
	                    if (key != 'transform') this._applyStyle(key, this._style[key]);
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }
	        }
	
	        /**
	         * Apply a style property to this node's element.
	         *
	         * TODO: this will be moved into DOMRenderer.
	         *
	         * @private
	         * @param  {string} property The CSS property we will a apply.
	         * @param  {string} value    The value the CSS property wil have.
	         */
	
	    }, {
	        key: '_applyStyle',
	        value: function _applyStyle(property, value) {
	            this._el.element.style[property] = value;
	        }
	
	        /**
	         * [setMatrix3d description]
	         *
	         * @private
	         * @param {DOMMatrix} matrix A DOMMatrix instance to set as this node's
	         * matrix. See "W3C Geometry Interfaces".
	         */
	
	    }, {
	        key: '_setMatrix3d',
	        value: function _setMatrix3d(matrix) {
	            if (true) {
	
	                this._style.transform.domMatrix = matrix;
	                // ^ TODO: What's faster? Setting a new DOMMatrix (as we do here
	                // currently, the result of _calculateMatrix) or applying all
	                // transform values to the existing DOMMatrix?
	
	                this._applyTransform();
	            }
	        }
	    }, {
	        key: 'parent',
	        get: function get() {
	            return this._parent;
	        }
	
	        /**
	         * @readonly
	         */
	
	    }, {
	        key: 'children',
	        get: function get() {
	            // return a new array, so that the user modifying it doesn't affect
	            // this node's actual children.
	            return [].concat(_toConsumableArray(this._children));
	        }
	
	        /**
	         * @readonly
	         * XXX Should we let the element be set, so that it's possible to apply
	         * transforms to arbitrary elements?
	         */
	
	    }, {
	        key: 'element',
	        get: function get() {
	            return this._el;
	        }
	    }, {
	        key: 'position',
	        set: function set(position) {
	            if (!(position instanceof Array)) throw new Error('Expected an array for the Node.position property.');
	            if (!Object.is(position, this._properties.position)) // TODO: test array values against each other instead of checking array references?
	                this._properties.position = defaultZeros(position);
	        }
	
	        /**
	         * Get the position of the Node.
	         *
	         * @return {Array.number} An array of 3 numbers, each one representing the X,
	         * Y, and Z position of the Node (in that order).
	         */
	        ,
	        get: function get() {
	            return this._properties.position;
	        }
	    }, {
	        key: 'rotation',
	        set: function set(rotation) {
	            this._properties.rotation = rotation;
	        }
	
	        /**
	         * Get the rotation of the Node.
	         *
	         * @return {Array.number} An array of 3 numbers, each number representing the X,
	         * Y, and Z rotation of the Node (in that order) in degrees.
	         */
	        ,
	        get: function get() {
	            return this._properties.rotation;
	        }
	    }, {
	        key: 'scale',
	        set: function set(scale) {
	            this._properties.scale = scale;
	        }
	
	        /**
	         * @return {Array.number} An array of 3 numbers, each number representing the X,
	         * Y, and Z scale of the Node (in that order).
	         */
	        ,
	        get: function get() {
	            return this._properties.scale;
	        }
	    }, {
	        key: 'opacity',
	        set: function set(opacity) {
	            if (!isRealNumber(opacity)) throw new Error('Expected a real number.');
	            this._style.opacity = opacity;
	        }
	
	        /**
	         * Get this Node's opacity.
	         *
	         * @return {number} The opacity of the Node, a floating point number between 0 and 1.
	         */
	        ,
	        get: function get() {
	            return this._style.opacity;
	        }
	    }, {
	        key: 'sizeMode',
	        set: function set(mode) {
	            if (!Object.is(mode, this._properties.size.mode)) {
	                this._properties.size.mode = mode;
	                this._applySize();
	            }
	        }
	
	        /**
	         * @return {Array.number} An array of 3 numbers, each number representing the X,
	         * Y, and Z scale of the Node (in that order).
	         */
	        ,
	        get: function get() {
	            return this._properties.size.mode;
	        }
	    }, {
	        key: 'absoluteSize',
	        set: function set(size) {
	            if (!Object.is(size, this._properties.size.absolute)) {
	                this._properties.size.absolute = size;
	
	                if (this._properties.size.mode.indexOf('absolute') > -1) this._applySize();
	            }
	        }
	
	        /**
	         * Get an array containing the size of each axis of this node.
	         * @return {Array.number} A three-item array of numbers, each number
	         * representing the absolute size of the x, y, and z axes respectively.
	         * @readonly
	         */
	        ,
	        get: function get() {
	            return this._properties.size.absolute;
	        }
	
	        /**
	         * Get the actual size of the Node. This can be useful when size is
	         * proportional, as the actual size of the Node depends on querying the DOM
	         * for the size of the Node's DOM element relative to it's parent.
	         *
	         * @return {Array.number} A three-item array of numbers, each number
	         * representing the computed size of the x, y, and z axes respectively.
	         * @readonly
	         */
	
	    }, {
	        key: 'actualSize',
	        get: function get() {
	            var actualSize = [];
	
	            if (this._properties.size.mode[0] === 'absolute') {
	                actualSize[0] = this._properties.size.absolute[0];
	            } else if (this._properties.size.mode[0] === 'proportional') {
	                actualSize[0] = parseInt(getComputedStyle(this._el.element).getPropertyValue('width'));
	            }
	
	            if (this._properties.size.mode[1] === 'absolute') {
	                actualSize[1] = this._properties.size.absolute[1];
	            } else if (this._properties.size.mode[1] === 'proportional') {
	                actualSize[1] = parseInt(getComputedStyle(this._el.element).getPropertyValue('height'));
	            }
	
	            // TODO: handle Z axis for 3D objects (i.e. WebGL objects)
	            actualSize[2] = 0;
	
	            return actualSize;
	        }
	    }, {
	        key: 'proportionalSize',
	        set: function set(size) {
	            if (!Object.is(size, this._properties.size.proportional)) {
	                this._properties.size.proportional = size;
	
	                if (this._properties.size.mode.indexOf('proportional') > -1) this._applySize();
	            }
	        },
	        get: function get() {
	            return this._properties.size.proportional;
	        }
	    }, {
	        key: 'align',
	        set: function set(alignment) {
	            if (!(alignment instanceof Array)) throw new Error('Expected an array for the Node.align property.');
	            if (!Object.is(alignment, this._properties.align)) this._properties.align = defaultZeros(alignment);
	        },
	        get: function get() {
	            return this._properties.align;
	        }
	    }, {
	        key: 'mountPoint',
	        set: function set(mountPoint) {
	            if (!(mountPoint instanceof Array)) throw new Error('Expected an array for the Node.mountPoint property.');
	            if (!Object.is(mountPoint, this._properties.mountPoint)) this._properties.mountPoint = defaultZeros(mountPoint);
	        },
	        get: function get() {
	            return this._properties.mountPoint;
	        }
	    }, {
	        key: 'childCount',
	        get: function get() {
	            return this._children.length;
	        }
	    }]);
	
	    return Node;
	}();
	
	// for use by MotorHTML, convenient since HTMLElement attributes are all
	// converted to lowercase by default.
	
	
	exports.default = Node;
	(0, _Utility.makeLowercaseSetterAliases)(Node.prototype);
	
	function defaultZeros(array) {
	    array[0] = array[0] || 0;
	    array[1] = array[1] || 0;
	    array[2] = array[2] || 0;
	    return array;
	}
	
	function isRealNumber(num) {
	    if (typeof num != 'number' || Object.is(num, NaN) || Object.is(num, Infinity)) return false;
	    return true;
	}

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["GeometryInterfaces"] = factory();
		else
			root["GeometryInterfaces"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
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
	
		/* WEBPACK VAR INJECTION */(function(global) {'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		    value: true
		});
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
		
		var _DOMMatrix = __webpack_require__(1);
		
		var _DOMMatrix2 = _interopRequireDefault(_DOMMatrix);
		
		var _DOMMatrixReadOnly = __webpack_require__(2);
		
		var _DOMMatrixReadOnly2 = _interopRequireDefault(_DOMMatrixReadOnly);
		
		var _global = null;
		
		// browser
		if (typeof window != 'undefined') {
		    _global = window;
		} else if (typeof global != 'undefined') {
		    _global = global;
		}
		
		if (_global) {
		    _global.DOMMatrix = _DOMMatrix2['default'];
		    _global.DOMMatrixReadOnly = _DOMMatrixReadOnly2['default'];
		}
		
		exports.DOMMatrix = _DOMMatrix2['default'];
		exports.DOMMatrixReadOnly = _DOMMatrixReadOnly2['default'];
		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))
	
	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		    value: true
		});
		
		var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
		
		var _get = function get(_x14, _x15, _x16) { var _again = true; _function: while (_again) { var object = _x14, property = _x15, receiver = _x16; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x14 = parent; _x15 = property; _x16 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
		
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
		
		function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
		
		var _DOMMatrixReadOnly2 = __webpack_require__(2);
		
		var _DOMMatrixReadOnly3 = _interopRequireDefault(_DOMMatrixReadOnly2);
		
		var _utilities = __webpack_require__(3);
		
		var DOMMatrix = (function (_DOMMatrixReadOnly) {
		    _inherits(DOMMatrix, _DOMMatrixReadOnly);
		
		    function DOMMatrix() {
		        _classCallCheck(this, DOMMatrix);
		
		        if (arguments.length === 0) {
		            var numberSequence = [1, 0, 0, 1, 0, 0];
		            _get(Object.getPrototypeOf(DOMMatrix.prototype), 'constructor', this).call(this, numberSequence);
		        } else if (arguments.length === 1) {
		            if (typeof arguments[0] == 'string') {
		                var transformList = arguments[0];
		                // TODO validate that syntax of transformList matches transform-list (http://www.w3.org/TR/css-transforms-1/#typedef-transform-list).
		                // TODO ...
		            } else if (arguments[0] instanceof _DOMMatrixReadOnly3['default']) {
		                    var other = arguments[0];
		                    _get(Object.getPrototypeOf(DOMMatrix.prototype), 'constructor', this).call(this, (0, _utilities.matrixToArray)(other));
		                } else if (arguments[0] instanceof Float32Array || arguments[0] instanceof Float64Array) {
		                    var typedArray = arguments[0];
		                    if (typedArray.length === 6 || typedArray.length === 16) {
		                        _get(Object.getPrototypeOf(DOMMatrix.prototype), 'constructor', this).call(this, Array.from(typedArray));
		                    } else {
		                        throw new TypeError('The typed array argument to the DOMMatrix constructor has an invalid length.');
		                    }
		                } else if (arguments[0] instanceof Array /* TODO && all items are numbers */) {
		                        var numberSequence = arguments[0];
		                        if (numberSequence.length === 6 || numberSequence.length === 16) {
		                            _get(Object.getPrototypeOf(DOMMatrix.prototype), 'constructor', this).call(this, numberSequence);
		                        } else {
		                            throw new TypeError('The array argument to the DOMMatrix constructor has an invalid length.');
		                        }
		                    }
		        } else {
		            throw new Error('Wrong number of arguments to DOMMatrix constructor.');
		        }
		    }
		
		    // Mutable transform methods
		
		    _createClass(DOMMatrix, [{
		        key: 'multiplySelf',
		        value: function multiplySelf(other) {
		            if (!other instanceof _DOMMatrixReadOnly3['default']) throw new Error('The argument to multiplySelf must be an instance of DOMMatrixReadOnly or DOMMatrix');
		
		            var resultArray = (0, _utilities.multiplyToArray)(this, other);
		            (0, _utilities.applyArrayValuesToDOMMatrix)(resultArray, this);
		
		            if (!other.is2D) this._is2D = false;
		
		            return this;
		        }
		    }, {
		        key: 'preMultiplySelf',
		        value: function preMultiplySelf(other) {
		            if (!other instanceof _DOMMatrixReadOnly3['default']) throw new Error('The argument to multiplySelf must be an instance of DOMMatrixReadOnly or DOMMatrix');
		
		            var resultArray = (0, _utilities.multiplyToArray)(other, this);
		            (0, _utilities.applyArrayValuesToDOMMatrix)(resultArray, this);
		
		            if (!other.is2D) this._is2D = false;
		
		            return this;
		        }
		    }, {
		        key: 'translateSelf',
		        value: function translateSelf(tx, ty) {
		            var tz = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
		
		            // TODO: check args are numbers
		
		            if (arguments.length === 1) throw new Error('The first two arguments (X and Y translation values) are required (the third, Z translation, is optional).');
		
		            // http://www.w3.org/TR/2012/WD-css3-transforms-20120911/#Translate3dDefined
		            var translationMatrix = new DOMMatrix([
		            // column-major:
		            1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, tx, ty, tz, 1]);
		
		            this.multiplySelf(translationMatrix);
		
		            if (tz != 0) {
		                this._is2D = false;
		            }
		
		            return this;
		        }
		    }, {
		        key: 'scaleSelf',
		        value: function scaleSelf(scale) {
		            var originX = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
		            var originY = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
		
		            this.translateSelf(originX, originY);
		
		            this.multiplySelf(new DOMMatrix([
		            // 2D:
		            /*a*/scale, /*b*/0,
		            /*c*/0, /*d*/scale,
		            /*e*/0, /*f*/0]));
		
		            this.translateSelf(-originX, -originY);
		            return this;
		        }
		    }, {
		        key: 'scale3dSelf',
		        value: function scale3dSelf(scale) {
		            var originX = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
		            var originY = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
		            var originZ = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];
		
		            this.translateSelf(originX, originY, originZ);
		
		            this.multiplySelf(new DOMMatrix([
		            // 3D
		            scale, 0, 0, 0, 0, scale, 0, 0, 0, 0, scale, 0, 0, 0, 0, 1]));
		
		            this.translateSelf(-originX, -originY, -originZ);
		            return this;
		        }
		    }, {
		        key: 'scaleNonUniformSelf',
		        value: function scaleNonUniformSelf(scaleX) {
		            var scaleY = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];
		            var scaleZ = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
		            var originX = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];
		            var originY = arguments.length <= 4 || arguments[4] === undefined ? 0 : arguments[4];
		            var originZ = arguments.length <= 5 || arguments[5] === undefined ? 0 : arguments[5];
		
		            this.translateSelf(originX, originY, originZ);
		
		            this.multiplySelf(new DOMMatrix([
		            // 3D
		            scaleX, 0, 0, 0, 0, scaleY, 0, 0, 0, 0, scaleZ, 0, 0, 0, 0, 1]));
		
		            this.translateSelf(-originX, -originY, -originZ);
		
		            if (scaleZ !== 1 || originZ !== 0) this._is2D = false;
		
		            return this;
		        }
		    }, {
		        key: 'rotateSelf',
		        value: function rotateSelf(angle) {
		            var originX = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
		            var originY = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
		
		            this.translateSelf(originX, originY);
		
		            // axis of rotation
		            var x = 0;
		            var y = 0;
		            var z = 1;
		            // We're rotating around the Z axis.
		
		            this.rotateAxisAngleSelf(x, y, z, angle);
		
		            this.translateSelf(-originX, -originY);
		            return this;
		        }
		
		        // TODO
		    }, {
		        key: 'rotateFromVectorSelf',
		        value: function rotateFromVectorSelf(x, y) {
		            throw new Error('rotateFromVectorSelf is not implemented yet.');
		        }
		    }, {
		        key: 'rotateAxisAngleSelf',
		        value: function rotateAxisAngleSelf(x, y, z, angle) {
		            var rotationMatrix = new DOMMatrix((0, _utilities.rotateAxisAngleArray)(x, y, z, angle));
		            this.multiplySelf(rotationMatrix);
		            return this;
		        }
		    }, {
		        key: 'skewXSelf',
		        value: function skewXSelf(sx) {
		            throw new Error('skewXSelf is not implemented yet.');
		        }
		    }, {
		        key: 'skewYSelf',
		        value: function skewYSelf(sy) {
		            throw new Error('skewYSelf is not implemented yet.');
		        }
		    }, {
		        key: 'invertSelf',
		        value: function invertSelf() {
		            throw new Error('invertSelf is not implemented yet.');
		        }
		    }, {
		        key: 'setMatrixValue',
		        value: function setMatrixValue( /*DOMString*/transformList) {
		            throw new Error('setMatrixValue is not implemented yet.');
		        }
		    }, {
		        key: 'a',
		        get: function get() {
		            return this.m11;
		        },
		        set: function set(value) {
		            this.m11 = value;
		        }
		    }, {
		        key: 'b',
		        get: function get() {
		            return this.m12;
		        },
		        set: function set(value) {
		            this.m12 = value;
		        }
		    }, {
		        key: 'c',
		        get: function get() {
		            return this.m21;
		        },
		        set: function set(value) {
		            this.m21 = value;
		        }
		    }, {
		        key: 'd',
		        get: function get() {
		            return this.m22;
		        },
		        set: function set(value) {
		            this.m22 = value;
		        }
		    }, {
		        key: 'e',
		        get: function get() {
		            return this.m41;
		        },
		        set: function set(value) {
		            this.m41 = value;
		        }
		    }, {
		        key: 'f',
		        get: function get() {
		            return this.m42;
		        },
		        set: function set(value) {
		            this.m42 = value;
		        }
		    }, {
		        key: 'm11',
		        get: function get() {
		            return this._matrix[0];
		        },
		        set: function set(value) {
		            this._matrix[0] = value;
		        }
		    }, {
		        key: 'm12',
		        get: function get() {
		            return this._matrix[4];
		        },
		        set: function set(value) {
		            this._matrix[4] = value;
		        }
		    }, {
		        key: 'm13',
		        get: function get() {
		            return this._matrix[8];
		        },
		        set: function set(value) {
		            this._matrix[8] = value;
		        }
		    }, {
		        key: 'm14',
		        get: function get() {
		            return this._matrix[12];
		        },
		        set: function set(value) {
		            this._matrix[12] = value;
		        }
		    }, {
		        key: 'm21',
		        get: function get() {
		            return this._matrix[1];
		        },
		        set: function set(value) {
		            this._matrix[1] = value;
		        }
		    }, {
		        key: 'm22',
		        get: function get() {
		            return this._matrix[5];
		        },
		        set: function set(value) {
		            this._matrix[5] = value;
		        }
		    }, {
		        key: 'm23',
		        get: function get() {
		            return this._matrix[9];
		        },
		        set: function set(value) {
		            this._matrix[9] = value;
		        }
		    }, {
		        key: 'm24',
		        get: function get() {
		            return this._matrix[13];
		        },
		        set: function set(value) {
		            this._matrix[13] = value;
		        }
		    }, {
		        key: 'm31',
		        get: function get() {
		            return this._matrix[2];
		        },
		        set: function set(value) {
		            this._matrix[2] = value;
		        }
		    }, {
		        key: 'm32',
		        get: function get() {
		            return this._matrix[6];
		        },
		        set: function set(value) {
		            this._matrix[6] = value;
		        }
		    }, {
		        key: 'm33',
		        get: function get() {
		            return this._matrix[10];
		        },
		        set: function set(value) {
		            this._matrix[10] = value;
		        }
		    }, {
		        key: 'm34',
		        get: function get() {
		            return this._matrix[14];
		        },
		        set: function set(value) {
		            this._matrix[14] = value;
		        }
		    }, {
		        key: 'm41',
		        get: function get() {
		            return this._matrix[3];
		        },
		        set: function set(value) {
		            this._matrix[3] = value;
		        }
		    }, {
		        key: 'm42',
		        get: function get() {
		            return this._matrix[7];
		        },
		        set: function set(value) {
		            this._matrix[7] = value;
		        }
		    }, {
		        key: 'm43',
		        get: function get() {
		            return this._matrix[11];
		        },
		        set: function set(value) {
		            this._matrix[11] = value;
		        }
		    }, {
		        key: 'm44',
		        get: function get() {
		            return this._matrix[15];
		        },
		        set: function set(value) {
		            this._matrix[15] = value;
		        }
		    }]);
		
		    return DOMMatrix;
		})(_DOMMatrixReadOnly3['default']);
		
		exports['default'] = DOMMatrix;
		module.exports = exports['default'];
	
	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		    value: true
		});
		
		var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
		
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
		
		var _DOMMatrix = __webpack_require__(1);
		
		var _DOMMatrix2 = _interopRequireDefault(_DOMMatrix);
		
		var _utilities = __webpack_require__(3);
		
		var DOMMatrixReadOnly = (function () {
		
		    /**
		     * @param {Array.number} numberSequence An array of numbers. If the array
		     * has 6 items, then those items set the values of m11, m12, m21, m22, m41,
		     * m42 in that order (or the values a, b, c, d, e, f if you're using those
		     * aliases) and this.is2D is true. If the array has 16 items (in
		     * column-major order), then they set all the values of the underlying
		     * matrix (m11 to m44) and this.is2D is set false. Arrays of other lengths
		     * throw an error.
		     */
		
		    function DOMMatrixReadOnly(numberSequence) {
		        _classCallCheck(this, DOMMatrixReadOnly);
		
		        if (!(this instanceof _DOMMatrix2['default'])) throw new TypeError('DOMMatrixReadOnly can\'t be instantiated directly. Use DOMMatrix instead.');
		
		        // TODO, make these private: {{
		
		        // `this._matrix` defaults to the identity matrix.
		        // `this._matrix` is represented internally in row-major format so that
		        // it is easy to look at visually. In a pair of coordinates (as in
		        // "m23") the first number is the column and the second is the row (so
		        // "m23" means column 2 row 3).
		        this._matrix = new Float64Array([
		        /*m11*/1, /*m21*/0, /*m31*/0, /*m41*/0,
		        /*m12*/0, /*m22*/1, /*m32*/0, /*m42*/0,
		        /*m13*/0, /*m23*/0, /*m33*/1, /*m43*/0,
		        /*m14*/0, /*m24*/0, /*m34*/0, /*m44*/1]);
		        this._is2D = true;
		        this._isIdentity = true;
		
		        // }}
		
		        // TODO
		        //if (!Match.test(numberSequence, [Number]))
		        //throw new TypeError('DOMMatrixReadOnly constructor argument "numberSequence" must contain numbers.')
		
		        if (numberSequence.length === 6) {
		            (0, _utilities.applyArrayValuesToDOMMatrix)(numberSequence, this);
		        } else if (numberSequence.length === 16) {
		            (0, _utilities.applyArrayValuesToDOMMatrix)(numberSequence, this);
		            this._is2D = false;
		        } else {
		            throw new TypeError('DOMMatrixReadOnly constructor argument "numberSequence" must have length 6 or 16.');
		        }
		    }
		
		    // Immutable transform methods -------------------------------------------
		
		    _createClass(DOMMatrixReadOnly, [{
		        key: 'translate',
		        value: function translate(tx, ty) {
		            var tz = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
		
		            return new _DOMMatrix2['default'](this).translateSelf(tx, ty, tz);
		        }
		    }, {
		        key: 'scale',
		        value: function scale(_scale) {
		            var originX = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
		            var originY = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
		
		            return new _DOMMatrix2['default'](this).scaleSelf(_scale, originX, originY);
		        }
		    }, {
		        key: 'scale3d',
		        value: function scale3d(scale) {
		            var originX = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
		            var originY = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
		            var originZ = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];
		
		            return new _DOMMatrix2['default'](this).scale3dSelf(scale, originX, originY, originZ);
		        }
		    }, {
		        key: 'scaleNonUniform',
		        value: function scaleNonUniform(scaleX) {
		            var scaleY = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];
		            var scaleZ = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
		            var originX = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];
		            var originY = arguments.length <= 4 || arguments[4] === undefined ? 0 : arguments[4];
		            var originZ = arguments.length <= 5 || arguments[5] === undefined ? 0 : arguments[5];
		
		            return new _DOMMatrix2['default'](this).scaleNonUniformSelf(scaleX, scaleY, scaleZ, originX, originY, originZ);
		        }
		    }, {
		        key: 'rotate',
		        value: function rotate(angle) {
		            var originX = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
		            var originY = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
		
		            return new _DOMMatrix2['default'](this).rotateSelf(angle, originX, originY);
		        }
		
		        // TODO
		    }, {
		        key: 'rotateFromVector',
		        value: function rotateFromVector(x, y) {
		            throw new Error('rotateFromVector is not implemented yet.');
		        }
		    }, {
		        key: 'rotateAxisAngle',
		        value: function rotateAxisAngle(x, y, z, angle) {
		            return new _DOMMatrix2['default'](this).rotateAxisAngleSelf(x, y, z, angle);
		        }
		    }, {
		        key: 'skewX',
		        value: function skewX(sx) {
		            throw new Error('skewX is not implemented yet.');
		        }
		    }, {
		        key: 'skewY',
		        value: function skewY(sy) {
		            throw new Error('skewY is not implemented yet.');
		        }
		    }, {
		        key: 'multiply',
		        value: function multiply(other) {
		            return new _DOMMatrix2['default'](this).multiplySelf(other);
		        }
		    }, {
		        key: 'flipX',
		        value: function flipX() {
		            throw new Error('flipX is not implemented yet.');
		        }
		    }, {
		        key: 'flipY',
		        value: function flipY() {
		            throw new Error('flipY is not implemented yet.');
		        }
		    }, {
		        key: 'inverse',
		        value: function inverse() {
		            throw new Error('inverse is not implemented yet.');
		        }
		    }, {
		        key: 'transformPoint',
		        value: function transformPoint( /*optional DOMPointInit*/point) {
		            throw new Error('transformPoint is not implemented yet.');
		        }
		    }, {
		        key: 'toFloat32Array',
		        value: function toFloat32Array() {
		            throw new Error('toFloat32Array is not implemented yet.');
		        }
		    }, {
		        key: 'toFloat64Array',
		        value: function toFloat64Array() {
		            throw new Error('toFloat64Array is not implemented yet.');
		        }
		
		        //stringifier() {} // What's this?
		
		    }, {
		        key: 'is2D',
		        get: function get() {
		            return this._is2D;
		        }
		
		        /*
		         * TODO: make sure this matches the spec.
		         * TODO: Instead of calculating here, perhaps calculate and set
		         * this._isIdentity in other operations, and simply return the internal one
		         * here.
		         */
		    }, {
		        key: 'isIdentity',
		        get: function get() {
		            var identity = [
		            /*m11*/1, /*m21*/0, /*m31*/0, /*m41*/0,
		            /*m12*/0, /*m22*/1, /*m32*/0, /*m42*/0,
		            /*m13*/0, /*m23*/0, /*m33*/1, /*m43*/0,
		            /*m14*/0, /*m24*/0, /*m34*/0, /*m44*/1];
		
		            this._isIdentity = true;
		
		            for (var i = 0, len = this._matrix.length; i < len; i += 1) {
		                if (this._matrix[i] != identity[i]) this._isIdentity = false;
		            }
		
		            return this._isIdentity;
		        }
		    }, {
		        key: 'a',
		        get: function get() {
		            return this.m11;
		        }
		    }, {
		        key: 'b',
		        get: function get() {
		            return this.m12;
		        }
		    }, {
		        key: 'c',
		        get: function get() {
		            return this.m21;
		        }
		    }, {
		        key: 'd',
		        get: function get() {
		            return this.m22;
		        }
		    }, {
		        key: 'e',
		        get: function get() {
		            return this.m41;
		        }
		    }, {
		        key: 'f',
		        get: function get() {
		            return this.m42;
		        }
		    }, {
		        key: 'm11',
		        get: function get() {
		            return this._matrix[0];
		        }
		    }, {
		        key: 'm12',
		        get: function get() {
		            return this._matrix[4];
		        }
		    }, {
		        key: 'm13',
		        get: function get() {
		            return this._matrix[8];
		        }
		    }, {
		        key: 'm14',
		        get: function get() {
		            return this._matrix[12];
		        }
		    }, {
		        key: 'm21',
		        get: function get() {
		            return this._matrix[1];
		        }
		    }, {
		        key: 'm22',
		        get: function get() {
		            return this._matrix[5];
		        }
		    }, {
		        key: 'm23',
		        get: function get() {
		            return this._matrix[9];
		        }
		    }, {
		        key: 'm24',
		        get: function get() {
		            return this._matrix[13];
		        }
		    }, {
		        key: 'm31',
		        get: function get() {
		            return this._matrix[2];
		        }
		    }, {
		        key: 'm32',
		        get: function get() {
		            return this._matrix[6];
		        }
		    }, {
		        key: 'm33',
		        get: function get() {
		            return this._matrix[10];
		        }
		    }, {
		        key: 'm34',
		        get: function get() {
		            return this._matrix[14];
		        }
		    }, {
		        key: 'm41',
		        get: function get() {
		            return this._matrix[3];
		        }
		    }, {
		        key: 'm42',
		        get: function get() {
		            return this._matrix[7];
		        }
		    }, {
		        key: 'm43',
		        get: function get() {
		            return this._matrix[11];
		        }
		    }, {
		        key: 'm44',
		        get: function get() {
		            return this._matrix[15];
		        }
		    }]);
		
		    return DOMMatrixReadOnly;
		})();
		
		exports['default'] = DOMMatrixReadOnly;
		module.exports = exports['default'];
	
	/***/ },
	/* 3 */
	/***/ function(module, exports) {
	
		"use strict";
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.multiplyToArray = multiplyToArray;
		exports.applyArrayValuesToDOMMatrix = applyArrayValuesToDOMMatrix;
		exports.matrixToArray = matrixToArray;
		exports.rotateAxisAngleArray = rotateAxisAngleArray;
		
		function multiplyToArray(A, B) {
		
		    //XXX: Are the following calculations faster hard coded (current), or as a loop?
		
		    var m11 = A.m11 * B.m11 + A.m21 * B.m12 + A.m31 * B.m13 + A.m41 * B.m14;
		    var m21 = A.m11 * B.m21 + A.m21 * B.m22 + A.m31 * B.m23 + A.m41 * B.m24;
		    var m31 = A.m11 * B.m31 + A.m21 * B.m32 + A.m31 * B.m33 + A.m41 * B.m34;
		    var m41 = A.m11 * B.m41 + A.m21 * B.m42 + A.m31 * B.m43 + A.m41 * B.m44;
		
		    var m12 = A.m12 * B.m11 + A.m22 * B.m12 + A.m32 * B.m13 + A.m42 * B.m14;
		    var m22 = A.m12 * B.m21 + A.m22 * B.m22 + A.m32 * B.m23 + A.m42 * B.m24;
		    var m32 = A.m12 * B.m31 + A.m22 * B.m32 + A.m32 * B.m33 + A.m42 * B.m34;
		    var m42 = A.m12 * B.m41 + A.m22 * B.m42 + A.m32 * B.m43 + A.m42 * B.m44;
		
		    var m13 = A.m13 * B.m11 + A.m23 * B.m12 + A.m33 * B.m13 + A.m43 * B.m14;
		    var m23 = A.m13 * B.m21 + A.m23 * B.m22 + A.m33 * B.m23 + A.m43 * B.m24;
		    var m33 = A.m13 * B.m31 + A.m23 * B.m32 + A.m33 * B.m33 + A.m43 * B.m34;
		    var m43 = A.m13 * B.m41 + A.m23 * B.m42 + A.m33 * B.m43 + A.m43 * B.m44;
		
		    var m14 = A.m14 * B.m11 + A.m24 * B.m12 + A.m34 * B.m13 + A.m44 * B.m14;
		    var m24 = A.m14 * B.m21 + A.m24 * B.m22 + A.m34 * B.m23 + A.m44 * B.m24;
		    var m34 = A.m14 * B.m31 + A.m24 * B.m32 + A.m34 * B.m33 + A.m44 * B.m34;
		    var m44 = A.m14 * B.m41 + A.m24 * B.m42 + A.m34 * B.m43 + A.m44 * B.m44;
		
		    // in column-major order:
		    var resultArray = [m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44];
		
		    return resultArray;
		}
		
		function applyArrayValuesToDOMMatrix(array, matrix) {
		    var length = array.length;
		
		    if (length === 6) {
		        matrix.m11 = array[0];
		        matrix.m12 = array[1];
		        matrix.m21 = array[2];
		        matrix.m22 = array[3];
		        matrix.m41 = array[4];
		        matrix.m42 = array[5];
		    } else if (length === 16) {
		        matrix.m11 = array[0];
		        matrix.m12 = array[1];
		        matrix.m13 = array[2];
		        matrix.m14 = array[3];
		        matrix.m21 = array[4];
		        matrix.m22 = array[5];
		        matrix.m23 = array[6];
		        matrix.m24 = array[7];
		        matrix.m31 = array[8];
		        matrix.m32 = array[9];
		        matrix.m33 = array[10];
		        matrix.m34 = array[11];
		        matrix.m41 = array[12];
		        matrix.m42 = array[13];
		        matrix.m43 = array[14];
		        matrix.m44 = array[15];
		    }
		}
		
		function matrixToArray(matrix) {
		    var result = null;
		
		    if (matrix.is2D) {
		        result = [matrix.m11, matrix.m12, matrix.m21, matrix.m22, matrix.m41, matrix.m42];
		    } else {
		        result = [matrix.m11, matrix.m12, matrix.m13, matrix.m14, matrix.m21, matrix.m22, matrix.m23, matrix.m24, matrix.m31, matrix.m32, matrix.m33, matrix.m34, matrix.m41, matrix.m42, matrix.m43, matrix.m44];
		    }
		
		    return result;
		}
		
		function rotateAxisAngleArray(x, y, z, angle) {
		    var sin = Math.sin;
		    var cos = Math.cos;
		    var pow = Math.pow;
		
		    var halfAngle = degreesToRadians(angle / 2);
		
		    // TODO: should we provide a 6-item array here to signify 2D when the
		    // rotation is about the Z axis (for example when calling rotateSelf)?
		    // TODO: Performance can be improved by first detecting when x, y, or z of
		    // the axis are zero or 1, and using a pre-simplified version of the
		    // folowing math based on that condition.
		    // TODO: Performance can be improved by using different equations (use trig
		    // identities to find alternate formulas).
		    return [1 - 2 * (y * y + z * z) * pow(sin(halfAngle), 2), 2 * (x * y * pow(sin(halfAngle), 2) + z * sin(halfAngle) * cos(halfAngle)), 2 * (x * z * pow(sin(halfAngle), 2) - y * sin(halfAngle) * cos(halfAngle)), 0, 2 * (x * y * pow(sin(halfAngle), 2) - z * sin(halfAngle) * cos(halfAngle)), 1 - 2 * (x * x + z * z) * pow(sin(halfAngle), 2), 2 * (y * z * pow(sin(halfAngle), 2) + x * sin(halfAngle) * cos(halfAngle)), 0, 2 * (x * z * pow(sin(halfAngle), 2) + y * sin(halfAngle) * cos(halfAngle)), 2 * (y * z * pow(sin(halfAngle), 2) - x * sin(halfAngle) * cos(halfAngle)), 1 - 2 * (x * x + y * y) * pow(sin(halfAngle), 2), 0, 0, 0, 0, 1];
		}
		
		function degreesToRadians(degrees) {
		    return Math.PI / 180 * degrees;
		}
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=global.js.map

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jss = __webpack_require__(199);
	
	var _jss2 = _interopRequireDefault(_jss);
	
	var _jssNested = __webpack_require__(213);
	
	var _jssNested2 = _interopRequireDefault(_jssNested);
	
	var _jssExtend = __webpack_require__(214);
	
	var _jssExtend2 = _interopRequireDefault(_jssExtend);
	
	var _jssPx = __webpack_require__(215);
	
	var _jssPx2 = _interopRequireDefault(_jssPx);
	
	var _jssVendorPrefixer = __webpack_require__(216);
	
	var _jssVendorPrefixer2 = _interopRequireDefault(_jssVendorPrefixer);
	
	var _jssCamelCase = __webpack_require__(222);
	
	var _jssCamelCase2 = _interopRequireDefault(_jssCamelCase);
	
	var _jssPropsSort = __webpack_require__(223);
	
	var _jssPropsSort2 = _interopRequireDefault(_jssPropsSort);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var jss = _jss2.default.create();
	
	jss.use((0, _jssNested2.default)());
	jss.use((0, _jssExtend2.default)());
	jss.use((0, _jssPx2.default)());
	jss.use((0, _jssVendorPrefixer2.default)());
	jss.use((0, _jssCamelCase2.default)());
	jss.use((0, _jssPropsSort2.default)());
	
	exports.default = jss;

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * StyleSheets written in javascript.
	 *
	 * @copyright Oleg Slobodskoi 2015
	 * @website https://github.com/jsstyles/jss
	 * @license MIT
	 */
	
	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _Jss = __webpack_require__(200);
	
	var _Jss2 = _interopRequireDefault(_Jss);
	
	exports['default'] = new _Jss2['default']();
	module.exports = exports['default'];

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _StyleSheet = __webpack_require__(201);
	
	var _StyleSheet2 = _interopRequireDefault(_StyleSheet);
	
	var _PluginsRegistry = __webpack_require__(212);
	
	var _PluginsRegistry2 = _interopRequireDefault(_PluginsRegistry);
	
	var _uid = __webpack_require__(205);
	
	var uid = _interopRequireWildcard(_uid);
	
	var _createRule2 = __webpack_require__(203);
	
	var _createRule3 = _interopRequireDefault(_createRule2);
	
	var _findRenderer = __webpack_require__(209);
	
	var _findRenderer2 = _interopRequireDefault(_findRenderer);
	
	/**
	 * Main Jss class.
	 *
	 * @api public
	 */
	
	var Jss = (function () {
	  function Jss() {
	    _classCallCheck(this, Jss);
	
	    this.plugins = new _PluginsRegistry2['default']();
	    this.uid = uid;
	  }
	
	  /**
	   * Creates a new instance of Jss.
	   *
	   * @see Jss
	   * @api public
	   */
	
	  Jss.prototype.create = function create() {
	    return new Jss();
	  };
	
	  /**
	   * Create a stylesheet.
	   *
	   * @see StyleSheet
	   * @api public
	   */
	
	  Jss.prototype.createStyleSheet = function createStyleSheet(rules, options) {
	    return new _StyleSheet2['default'](rules, _extends({}, options, { jss: this }));
	  };
	
	  /**
	   * Create a rule.
	   *
	   * @see createRule
	   * @api public
	   */
	
	  Jss.prototype.createRule = function createRule(selector, style, options) {
	    // Enable rule without selector.
	    if (typeof selector == 'object') {
	      options = style;
	      style = selector;
	      selector = null;
	    }
	    var rule = _createRule3['default'](selector, style, _extends({}, options, {
	      jss: this,
	      Renderer: _findRenderer2['default'](options)
	    }));
	    this.plugins.run(rule);
	    return rule;
	  };
	
	  /**
	   * Register plugin. Passed function will be invoked with a rule instance.
	   *
	   * @param {Function} plugins
	   * @api public
	   */
	
	  Jss.prototype.use = function use() {
	    var _this = this;
	
	    for (var _len = arguments.length, plugins = Array(_len), _key = 0; _key < _len; _key++) {
	      plugins[_key] = arguments[_key];
	    }
	
	    plugins.forEach(function (plugin) {
	      return _this.plugins.use(plugin);
	    });
	    return this;
	  };
	
	  return Jss;
	})();
	
	exports['default'] = Jss;
	module.exports = exports['default'];

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _utils = __webpack_require__(202);
	
	var _createRule2 = __webpack_require__(203);
	
	var _createRule3 = _interopRequireDefault(_createRule2);
	
	var _findRenderer = __webpack_require__(209);
	
	var _findRenderer2 = _interopRequireDefault(_findRenderer);
	
	/**
	 * StyleSheet model.
	 *
	 * Options:
	 *
	 *  - 'media' style element attribute
	 *  - 'title' style element attribute
	 *  - 'type' style element attribute
	 *  - 'named' true by default - keys are names, selectors will be generated,
	 *    if false - keys are global selectors
	 *  - 'link' link renderable CSS rules with their corresponding models, false
	 *    by default because fast by default
	 *
	 * @param {Object} [rules] object with selectors and declarations
	 * @param {Object} [options]
	 * @api public
	 */
	
	var StyleSheet = (function () {
	  function StyleSheet(rules, options) {
	    _classCallCheck(this, StyleSheet);
	
	    this.options = _extends({}, options);
	    if (this.options.named == null) this.options.named = true;
	    this.rules = Object.create(null);
	    this.classes = Object.create(null);
	    this.attached = false;
	    this.deployed = false;
	    this.linked = false;
	
	    var Renderer = _findRenderer2['default'](this.options);
	    this.options.Renderer = Renderer;
	    this.renderer = new Renderer(this.options);
	
	    for (var _name in rules) {
	      this.createRule(_name, rules[_name]);
	    }
	  }
	
	  /**
	   * Attach renderable to the render tree.
	   *
	   * @api public
	   * @return {StyleSheet}
	   */
	
	  StyleSheet.prototype.attach = function attach() {
	    if (this.attached) return this;
	    if (!this.deployed) this.deploy();
	    this.renderer.attach();
	    if (!this.linked && this.options.link) this.link();
	    this.attached = true;
	    return this;
	  };
	
	  /**
	   * Remove renderable from render tree.
	   *
	   * @return {StyleSheet}
	   * @api public
	   */
	
	  StyleSheet.prototype.detach = function detach() {
	    if (!this.attached) return this;
	    this.renderer.detach();
	    this.attached = false;
	    return this;
	  };
	
	  /**
	   * Add a rule to the current stylesheet. Will insert a rule also after the stylesheet
	   * has been rendered first time.
	   *
	   * @param {Object} [name] can be selector or name if ´options.named is true
	   * @param {Object} style property/value hash
	   * @return {Rule}
	   * @api public
	   */
	
	  StyleSheet.prototype.addRule = function addRule(name, style) {
	    var rule = this.createRule(name, style);
	    // Don't insert rule directly if there is no stringified version yet.
	    // It will be inserted all together when .attach is called.
	    if (this.deployed) {
	      var renderable = this.renderer.insertRule(rule);
	      if (this.options.link) rule.renderable = renderable;
	    }
	    return rule;
	  };
	
	  /**
	   * Create rules, will render also after stylesheet was rendered the first time.
	   *
	   * @param {Object} rules name:style hash.
	   * @return {Array} array of added rules
	   * @api public
	   */
	
	  StyleSheet.prototype.addRules = function addRules(rules) {
	    var added = [];
	    for (var _name2 in rules) {
	      added.push(this.addRule(_name2, rules[_name2]));
	    }
	    return added;
	  };
	
	  /**
	   * Get a rule.
	   *
	   * @param {String} name can be selector or name if `named` option is true.
	   * @return {Rule}
	   * @api public
	   */
	
	  StyleSheet.prototype.getRule = function getRule(name) {
	    return this.rules[name];
	  };
	
	  /**
	   * Convert rules to a CSS string.
	   *
	   * @param {Object} options
	   * @return {String}
	   * @api public
	   */
	
	  StyleSheet.prototype.toString = function toString(options) {
	    var rules = this.rules;
	
	    var stringified = Object.create(null);
	    var str = '';
	    for (var _name3 in rules) {
	      var rule = rules[_name3];
	      // We have the same rule referenced twice if using named rules.
	      // By name and by selector.
	      if (stringified[rule.id]) {
	        continue;
	      }
	
	      if (rule.style && _utils.isEmptyObject(rule.style)) {
	        continue;
	      }
	
	      if (rule.rules && _utils.isEmptyObject(rule.rules)) {
	        continue;
	      }
	
	      if (str) str += '\n';
	
	      str += rule.toString(options);
	      stringified[rule.id] = true;
	    }
	    return str;
	  };
	
	  /**
	   * Create a rule, will not render after stylesheet was rendered the first time.
	   * Will link the rule in `this.rules`.
	   *
	   * @see createRule
	   * @api private
	   */
	
	  StyleSheet.prototype.createRule = function createRule(name, style, options) {
	    options = _extends({}, options, {
	      sheet: this,
	      jss: this.options.jss,
	      Renderer: this.options.Renderer
	    });
	    // Scope options overwrite instance options.
	    if (options.named == null) options.named = this.options.named;
	    var rule = _createRule3['default'](name, style, options);
	    // Register conditional rule, it will stringify it's child rules properly.
	    if (rule.type === 'conditional') {
	      this.rules[rule.selector] = rule;
	    } else if (rule.type === 'simple') {
	      this.rules[rule.name] = rule;
	    }
	    // This is a rule which is a child of a condtional rule.
	    // We need to register its class name only.
	    else if (rule.options.parent && rule.options.parent.type === 'conditional') {
	        // Only named rules should be referenced in `classes`.
	        if (rule.options.named) this.classes[name] = rule.className;
	      } else {
	        this.rules[rule.selector] = rule;
	        if (options.named) {
	          this.rules[name] = rule;
	          this.classes[name] = rule.className;
	        }
	      }
	    options.jss.plugins.run(rule);
	    return rule;
	  };
	
	  /**
	   * Deploy pure CSS string to a renderable.
	   *
	   * @return {StyleSheet}
	   * @api private
	   */
	
	  StyleSheet.prototype.deploy = function deploy() {
	    this.renderer.deploy(this);
	    this.deployed = true;
	    return this;
	  };
	
	  /**
	   * Link renderable CSS rules with their corresponding models.
	   *
	   * @return {StyleSheet}
	   * @api private
	   */
	
	  StyleSheet.prototype.link = function link() {
	    var renderables = this.renderer.getRules();
	    for (var selector in renderables) {
	      var rule = this.rules[selector];
	      if (rule) rule.renderable = renderables[selector];
	    }
	    this.linked = true;
	    return this;
	  };
	
	  return StyleSheet;
	})();
	
	exports['default'] = StyleSheet;
	module.exports = exports['default'];

/***/ },
/* 202 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.clone = clone;
	exports.isEmptyObject = isEmptyObject;
	var stringify = JSON.stringify;
	var parse = JSON.parse;
	
	/**
	 * Deeply clone object using serialization.
	 * Expects object to be plain and without cyclic dependencies.
	 *
	 * http://jsperf.com/lodash-deepclone-vs-jquery-extend-deep/6
	 *
	 * @type {Object} obj
	 * @return {Object}
	 */
	
	function clone(obj) {
	  return parse(stringify(obj));
	}
	
	/*
	 * Determine whether an object is empty or not.
	 * More performant than a `Object.keys(obj).length > 0`
	 */
	
	function isEmptyObject(obj) {
	  for (var key in obj) {
	    return false;
	  } // eslint-disable-line no-unused-vars
	
	  return true;
	}

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = createRule;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _Rule = __webpack_require__(204);
	
	var _Rule2 = _interopRequireDefault(_Rule);
	
	var _SimpleRule = __webpack_require__(206);
	
	var _SimpleRule2 = _interopRequireDefault(_SimpleRule);
	
	var _KeyframeRule = __webpack_require__(207);
	
	var _KeyframeRule2 = _interopRequireDefault(_KeyframeRule);
	
	var _ConditionalRule = __webpack_require__(208);
	
	var _ConditionalRule2 = _interopRequireDefault(_ConditionalRule);
	
	/**
	 * Map of at rules to corresponding implementation class.
	 *
	 * @type {Object}
	 */
	var atRuleClassMap = {
	  '@charset': _SimpleRule2['default'],
	  '@import': _SimpleRule2['default'],
	  '@namespace': _SimpleRule2['default'],
	  '@keyframes': _KeyframeRule2['default'],
	  '@media': _ConditionalRule2['default'],
	  '@supports': _ConditionalRule2['default'],
	  '@font-face': _Rule2['default']
	};
	
	var atRuleNameRegExp = /^@[^ ]+/;
	
	/**
	 * Create rule factory.
	 *
	 * @param {Object} [selector] if you don't pass selector - it will be generated
	 * @param {Object} [style] declarations block
	 * @param {Object} [options] rule options
	 * @return {Object} rule
	 * @api private
	 */
	
	function createRule(selector) {
	  var style = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	  var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	  // Is an at-rule.
	  if (selector && selector[0] === '@') {
	    var _name = atRuleNameRegExp.exec(selector)[0];
	    var AtRule = atRuleClassMap[_name];
	    // We use regular rule class to handle font rule,
	    // font-face rule should not be named.
	    if (_name === '@font-face' && options.named) {
	      options = _extends({}, options, { named: false });
	    }
	    return new AtRule(selector, style, options);
	  }
	  if (options.named == null) options.named = true;
	  return new _Rule2['default'](selector, style, options);
	}
	
	module.exports = exports['default'];

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _uid = __webpack_require__(205);
	
	var uid = _interopRequireWildcard(_uid);
	
	var _utils = __webpack_require__(202);
	
	/**
	 * Regular rules and font-face.
	 *
	 * @api public
	 */
	
	var Rule = (function () {
	  function Rule(selector, style, options) {
	    _classCallCheck(this, Rule);
	
	    this.id = uid.get();
	    this.type = 'regular';
	    this.options = options;
	    this.selector = selector;
	    if (options.named) {
	      this.name = selector;
	      this.className = options.className || (this.name ? this.name + '--' + this.id : this.id);
	      this.selector = '.' + this.className;
	    }
	    this.originalStyle = style;
	    // We expect style to be plain object.
	    this.style = _utils.clone(style);
	  }
	
	  /**
	   * Indent a string.
	   *
	   * http://jsperf.com/array-join-vs-for
	   *
	   * @param {Number} level
	   * @param {String} str
	   * @return {String}
	   * @api private
	   */
	
	  /**
	   * Get or set a style property.
	   *
	   * @param {String} name
	   * @param {String|Number} [value]
	   * @return {Rule|String|Number}
	   * @api public
	   */
	
	  Rule.prototype.prop = function prop(name, value) {
	    var style = this.options.Renderer.style;
	
	    // Its a setter.
	    if (value != null) {
	      this.style[name] = value;
	      // If linked option in StyleSheet is not passed, renderable is not defined.
	      if (this.renderable) style(this.renderable, name, value);
	      return this;
	    }
	    // Its a getter, read the value from the DOM if its not cached.
	    if (this.renderable && this.style[name] == null) {
	      // Cache the value after we have got it from the DOM once.
	      this.style[name] = style(this.renderable, name);
	    }
	    return this.style[name];
	  };
	
	  /**
	   * Apply rule to an element inline.
	   *
	   * @param {Element} renderable
	   * @return {Rule}
	   * @api public
	   */
	
	  Rule.prototype.applyTo = function applyTo(renderable) {
	    for (var prop in this.style) {
	      var value = this.style[prop];
	      var style = this.options.Renderer.style;
	
	      if (Array.isArray(value)) {
	        for (var index = 0; index < value.length; index++) {
	          style(renderable, prop, value[index]);
	        }
	      } else style(renderable, prop, value);
	    }
	    return this;
	  };
	
	  /**
	   * Returns JSON representation of the rule.
	   * Nested rules, at-rules and array values are not supported.
	   *
	   * @return {Object}
	   * @api public
	   */
	
	  Rule.prototype.toJSON = function toJSON() {
	    var style = Object.create(null);
	    for (var prop in this.style) {
	      if (typeof this.style[prop] != 'object') {
	        style[prop] = this.style[prop];
	      }
	    }
	    return style;
	  };
	
	  /**
	   * Generates a CSS string.
	   *
	   * Options:
	   * - `selector` to get a rule without selector
	   * - `indentationLevel` level of indentation
	   *
	   * @param {Object} options
	   * @return {String}
	   * @api public
	   */
	
	  Rule.prototype.toString = function toString() {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    var selector = options.selector == null ? true : options.selector;
	    var indentationLevel = options.indentationLevel || 0;
	    var str = '';
	    if (selector) {
	      str += indent(indentationLevel, this.selector + ' {');
	      indentationLevel++;
	    }
	    for (var prop in this.style) {
	      var value = this.style[prop];
	      // We want to generate multiple style with identical property names.
	      if (Array.isArray(value)) {
	        for (var index = 0; index < value.length; index++) {
	          str += '\n' + indent(indentationLevel, prop + ': ' + value[index] + ';');
	        }
	      } else str += '\n' + indent(indentationLevel, prop + ': ' + value + ';');
	    }
	    if (selector) str += '\n' + indent(--indentationLevel, '}');
	    return str;
	  };
	
	  return Rule;
	})();
	
	exports['default'] = Rule;
	function indent(level, str) {
	  var indentStr = '';
	  for (var index = 0; index < level; index++) {
	    indentStr += '  ';
	  }return indentStr + str;
	}
	module.exports = exports['default'];

/***/ },
/* 205 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	exports.__esModule = true;
	exports.get = get;
	exports.reset = reset;
	var globalReference = typeof window == 'undefined' ? global : window;
	var namespace = '__JSS_VERSION_COUNTER__';
	if (globalReference[namespace] == null) globalReference[namespace] = 0;
	
	// In case we have more than one jss version.
	var versionCounter = globalReference[namespace]++;
	var ruleCounter = 0;
	
	/**
	 * Returns a uid.
	 * Ensures uniqueness if more than 1 jss version is used.
	 *
	 * @api private
	 * @return {String}
	 */
	
	function get() {
	  return 'jss-' + versionCounter + '-' + ruleCounter++;
	}
	
	/**
	 * Resets the counter.
	 *
	 * @api private
	 */
	
	function reset() {
	  ruleCounter = 0;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _uid = __webpack_require__(205);
	
	var uid = _interopRequireWildcard(_uid);
	
	/**
	 * Rule like @charset, @import, @namespace.
	 *
	 * @api public
	 */
	
	var SimpleRule = (function () {
	  function SimpleRule(name, value, options) {
	    _classCallCheck(this, SimpleRule);
	
	    this.id = uid.get();
	    this.type = 'simple';
	    this.name = name;
	    this.value = value;
	    this.options = options;
	  }
	
	  /**
	   * Generates a CSS string.
	   *
	   * @return {String}
	   * @api public
	   */
	
	  SimpleRule.prototype.toString = function toString() {
	    return this.name + ' ' + this.value + ';';
	  };
	
	  return SimpleRule;
	})();
	
	exports['default'] = SimpleRule;
	module.exports = exports['default'];

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _uid = __webpack_require__(205);
	
	var uid = _interopRequireWildcard(_uid);
	
	/**
	 * Keyframe rule.
	 *
	 * @api private
	 */
	
	var KeyframeRule = (function () {
	  function KeyframeRule(selector, frames, options) {
	    _classCallCheck(this, KeyframeRule);
	
	    this.id = uid.get();
	    this.type = 'keyframe';
	    this.selector = selector;
	    this.options = options;
	    this.frames = this.formatFrames(frames);
	  }
	
	  /**
	   * Creates formatted frames where every frame value is a rule instance.
	   *
	   * @api private
	   */
	
	  KeyframeRule.prototype.formatFrames = function formatFrames(frames) {
	    var newFrames = Object.create(null);
	    for (var _name in frames) {
	      var options = _extends({}, this.options, { named: false, parent: this });
	      newFrames[_name] = this.options.jss.createRule(_name, frames[_name], options);
	    }
	    return newFrames;
	  };
	
	  /**
	   * Generates a CSS string.
	   *
	   * @return {String}
	   * @api private
	   */
	
	  KeyframeRule.prototype.toString = function toString() {
	    var str = this.selector + ' {\n';
	    var options = { indentationLevel: 1 };
	    for (var _name2 in this.frames) {
	      str += this.frames[_name2].toString(options) + '\n';
	    }
	    str += '}';
	    return str;
	  };
	
	  return KeyframeRule;
	})();
	
	exports['default'] = KeyframeRule;
	module.exports = exports['default'];

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _utils = __webpack_require__(202);
	
	var _uid = __webpack_require__(205);
	
	var uid = _interopRequireWildcard(_uid);
	
	/**
	 * Conditional rule for @media, @supports
	 *
	 * @api public
	 */
	
	var ConditionalRule = (function () {
	  function ConditionalRule(selector, styles, options) {
	    _classCallCheck(this, ConditionalRule);
	
	    this.id = uid.get();
	    this.type = 'conditional';
	    this.selector = selector;
	    this.options = _extends({}, options, { parent: this });
	    this.rules = Object.create(null);
	    for (var _name in styles) {
	      this.createRule(_name, styles[_name]);
	    }
	  }
	
	  /**
	   * A conditional rule always contains child rules.
	   *
	   * @param {Object} styles
	   * @return {Array} rules
	   * @api public
	   */
	
	  ConditionalRule.prototype.createRule = function createRule(name, style, options) {
	    var newOptions = this.options;
	    var _newOptions = newOptions;
	    var sheet = _newOptions.sheet;
	    var jss = _newOptions.jss;
	
	    // We have already a rule in the current style sheet with this name,
	    // This new rule is supposed to overwrite the first one, for this we need
	    // to ensure it will have the same className/selector.
	    var existingRule = sheet && sheet.getRule(name);
	    var className = existingRule ? existingRule.className : null;
	    if (className || options) {
	      newOptions = _extends({}, newOptions, { className: className }, options);
	    }
	    var rule = (sheet || jss).createRule(name, style, newOptions);
	    this.rules[name] = rule;
	    return rule;
	  };
	
	  /**
	   * Generates a CSS string.
	   *
	   * @return {String}
	   * @api public
	   */
	
	  ConditionalRule.prototype.toString = function toString() {
	    var str = this.selector + ' {\n';
	    for (var _name2 in this.rules) {
	      var rule = this.rules[_name2];
	      if (rule.style && _utils.isEmptyObject(rule.style)) {
	        continue;
	      }
	      var ruleStr = rule.toString({ indentationLevel: 1 });
	      str += ruleStr + '\n';
	    }
	    str += '}';
	    return str;
	  };
	
	  return ConditionalRule;
	})();
	
	exports['default'] = ConditionalRule;
	module.exports = exports['default'];

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = findRenderer;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _DomRenderer = __webpack_require__(210);
	
	var _DomRenderer2 = _interopRequireDefault(_DomRenderer);
	
	var _VirtualRenderer = __webpack_require__(211);
	
	var _VirtualRenderer2 = _interopRequireDefault(_VirtualRenderer);
	
	/**
	 * Find proper renderer.
	 * Option `virtual` is used to force use of VirtualRenderer even if DOM is
	 * detected, used for testing only.
	 *
	 * @param {Object} options
	 * @return {Renderer}
	 * @api private
	 */
	
	function findRenderer() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  if (options.Renderer) return options.Renderer;
	  return options.virtual || typeof document == 'undefined' ? _VirtualRenderer2['default'] : _DomRenderer2['default'];
	}
	
	module.exports = exports['default'];

/***/ },
/* 210 */
/***/ function(module, exports) {

	/**
	 * DOM rendering backend for StyleSheet.
	 *
	 * @api private
	 */
	'use strict';
	
	exports.__esModule = true;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var DomRenderer = (function () {
	  DomRenderer.style = function style(element, name, value) {
	    try {
	      if (value == null) return element.style[name];
	      element.style[name] = value;
	    } catch (err) {
	      // IE8 may throw if property is unknown.
	    }
	  };
	
	  function DomRenderer(options) {
	    _classCallCheck(this, DomRenderer);
	
	    this.head = document.head || document.getElementsByTagName('head')[0];
	    this.element = document.createElement('style');
	    // IE8 will not have `styleSheet` prop without `type and `styleSheet.cssText`
	    // is the only way to render on IE8.
	    this.element.type = 'text/css';
	    if (options.media) this.element.setAttribute('media', options.media);
	    if (options.meta) this.element.setAttribute('data-meta', options.meta);
	  }
	
	  /**
	   * Insert style element into render tree.
	   *
	   * @api private
	   */
	
	  DomRenderer.prototype.attach = function attach() {
	    this.head.appendChild(this.element);
	  };
	
	  /**
	   * Remove style element from render tree.
	   *
	   * @api private
	   */
	
	  DomRenderer.prototype.detach = function detach() {
	    this.element.parentNode.removeChild(this.element);
	  };
	
	  /**
	   * Inject CSS string into element.
	   *
	   * @param {String} cssStr
	   * @api private
	   */
	
	  DomRenderer.prototype.deploy = function deploy(sheet) {
	    var css = '\n' + sheet.toString() + '\n';
	    if ('sheet' in this.element) this.element.innerHTML = css;
	    // On IE8 the only way to render is `styleSheet.cssText`
	    else if ('styleSheet' in this.element) this.element.styleSheet.cssText = css;
	  };
	
	  /**
	   * Insert a rule into element.
	   *
	   * @param {Rule} rule
	   * @return {CSSStyleRule}
	   * @api private
	   */
	
	  DomRenderer.prototype.insertRule = function insertRule(rule) {
	    // IE8 has only `styleSheet` and `styleSheet.rules`
	    var sheet = this.element.sheet || this.element.styleSheet;
	    var cssRules = sheet.cssRules || sheet.rules;
	    var nextIndex = cssRules.length;
	    if (sheet.insertRule) sheet.insertRule(rule.toString(), nextIndex);else sheet.addRule(rule.selector, rule.toString({ selector: false }), nextIndex);
	    return cssRules[nextIndex];
	  };
	
	  /**
	   * Get all rules elements.
	   *
	   * @return {Object} rules map, where key is selector, CSSStyleRule is value.
	   * @api private
	   */
	
	  DomRenderer.prototype.getRules = function getRules() {
	    // IE8 has only `styleSheet` and `styleSheet.rules`
	    var sheet = this.element.sheet || this.element.styleSheet;
	    var cssRules = sheet.rules || sheet.cssRules;
	    var rules = Object.create(null);
	    for (var index = 0; index < cssRules.length; index++) {
	      var CSSRule = cssRules[index];
	      rules[CSSRule.selectorText] = CSSRule;
	    }
	    return rules;
	  };
	
	  return DomRenderer;
	})();
	
	exports['default'] = DomRenderer;
	module.exports = exports['default'];

/***/ },
/* 211 */
/***/ function(module, exports) {

	/**
	 * Rendering backend to do nothing in nodejs.
	 */
	"use strict";
	
	exports.__esModule = true;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var VirtualRenderer = (function () {
	  function VirtualRenderer() {
	    _classCallCheck(this, VirtualRenderer);
	  }
	
	  VirtualRenderer.style = function style() {};
	
	  VirtualRenderer.prototype.attach = function attach() {};
	
	  VirtualRenderer.prototype.detach = function detach() {};
	
	  VirtualRenderer.prototype.deploy = function deploy() {};
	
	  VirtualRenderer.prototype.insertRule = function insertRule() {};
	
	  VirtualRenderer.prototype.getRules = function getRules() {
	    return {};
	  };
	
	  return VirtualRenderer;
	})();
	
	exports["default"] = VirtualRenderer;
	module.exports = exports["default"];

/***/ },
/* 212 */
/***/ function(module, exports) {

	/**
	 * Register a plugin, run a plugin.
	 */
	"use strict";
	
	exports.__esModule = true;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var PluginsRegistry = (function () {
	  function PluginsRegistry() {
	    _classCallCheck(this, PluginsRegistry);
	
	    this.registry = [];
	  }
	
	  /**
	   * Register plugin. Passed function will be invoked with a rule instance.
	   *
	   * @param {Function} fn
	   * @api public
	   */
	
	  PluginsRegistry.prototype.use = function use(fn) {
	    this.registry.push(fn);
	  };
	
	  /**
	   * Execute all registered plugins.
	   *
	   * @param {Rule} rule
	   * @api private
	   */
	
	  PluginsRegistry.prototype.run = function run(rule) {
	    for (var index = 0; index < this.registry.length; index++) {
	      this.registry[index](rule);
	    }
	  };
	
	  return PluginsRegistry;
	})();
	
	exports["default"] = PluginsRegistry;
	module.exports = exports["default"];

/***/ },
/* 213 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = jssNested;
	var regExp = /&/g;
	
	/**
	 * Convert nested rules to separate, remove them from original styles.
	 *
	 * @param {Rule} rule
	 * @api public
	 */
	
	function jssNested() {
	  return function (rule) {
	    if (rule.type !== 'regular') return;
	    var _rule$options = rule.options;
	    var sheet = _rule$options.sheet;
	    var jss = _rule$options.jss;
	    var parent = _rule$options.parent;
	
	    var container = sheet || jss;
	    var options = undefined;
	
	    if (parent && parent.type === 'conditional') {
	      container = parent;
	    }
	
	    for (var prop in rule.style) {
	      if (prop[0] === '&') {
	        if (!options) options = _extends({}, rule.options, { named: false });
	        var _name = prop.replace(regExp, rule.selector);
	        container.createRule(_name, rule.style[prop], options);
	        delete rule.style[prop];
	      }
	    }
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 214 */
/***/ function(module, exports) {

	/**
	 * Handle `extend` property.
	 *
	 * @param {Rule} rule
	 * @api public
	 */
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = jssExtend;
	
	function jssExtend() {
	  function extend(rule, newStyle, style) {
	    if (typeof style.extend == 'string') {
	      if (rule.options && rule.options.sheet) {
	        var refRule = rule.options.sheet.getRule(style.extend);
	        if (refRule) extend(rule, newStyle, refRule.originalStyle);
	      }
	    } else if (Array.isArray(style.extend)) {
	      for (var index = 0; index < style.extend.length; index++) {
	        extend(rule, newStyle, style.extend[index]);
	      }
	    } else {
	      for (var prop in style.extend) {
	        if (prop === 'extend') extend(rule, newStyle, style.extend.extend);else newStyle[prop] = style.extend[prop];
	      }
	    }
	
	    // Copy base style.
	    for (var prop in style) {
	      if (prop !== 'extend') newStyle[prop] = style[prop];
	    }
	
	    return newStyle;
	  }
	
	  return function (rule) {
	    if (!rule.style || !rule.style.extend) return;
	    rule.style = extend(rule, {}, rule.style);
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 215 */
/***/ function(module, exports) {

	// Don't automatically add 'px' to these possibly-unitless properties.
	// Borrowed from jquery.
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = jssPx;
	var cssNumber = {
	  'animation-iteration-count': true,
	  'box-ordinal-group': true,
	  'column-count': true,
	  'fill-opacity': true,
	  'flex': true,
	  'flex-grow': true,
	  'flex-order': true,
	  'flex-shrink': true,
	  'font-weight': true,
	  'line-height': true,
	  'opacity': true,
	  'order': true,
	  'orphans': true,
	  'stop-opacity': true,
	  'tab-size': 1,
	  'widows': true,
	  'z-index': true,
	  'zoom': true
	};
	
	/**
	 * Add px to numeric values.
	 *
	 * @param {Rule} rule
	 * @api public
	 */
	
	function jssPx() {
	  return function (rule) {
	    var style = rule.style;
	
	    if (!style) return;
	    for (var prop in style) {
	      if (!cssNumber[prop] && typeof style[prop] == 'number') {
	        style[prop] += 'px';
	      }
	    }
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = jssVendorPrefixer;
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	var _cssVendor = __webpack_require__(217);
	
	var vendor = _interopRequireWildcard(_cssVendor);
	
	/**
	 * Add vendor prefix to a property name when needed.
	 *
	 * @param {Rule} rule
	 * @api public
	 */
	
	function jssVendorPrefixer() {
	  return function (rule) {
	    if (rule.type === 'keyframe') {
	      rule.selector = '@' + vendor.prefix.css + 'keyframes' + rule.selector.substr(10);
	      return;
	    }
	
	    if (rule.type !== 'regular') return;
	
	    for (var prop in rule.style) {
	      var value = rule.style[prop];
	
	      var changeProp = false;
	      var supportedProp = vendor.supportedProperty(prop);
	      if (supportedProp && supportedProp !== prop) changeProp = true;
	
	      var changeValue = false;
	      var supportedValue = vendor.supportedValue(supportedProp, value);
	      if (supportedValue && supportedValue !== value) changeValue = true;
	
	      if (changeProp || changeValue) {
	        if (changeProp) delete rule.style[prop];
	        rule.style[supportedProp || prop] = supportedValue || value;
	      }
	    }
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * CSS Vendor prefix detection and property feature testing.
	 *
	 * @copyright Oleg Slobodskoi 2015
	 * @website https://github.com/jsstyles/css-vendor
	 * @license MIT
	 */
	
	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _prefix2 = __webpack_require__(218);
	
	var _prefix3 = _interopRequireDefault(_prefix2);
	
	exports.prefix = _prefix3['default'];
	
	var _supportedProperty2 = __webpack_require__(219);
	
	var _supportedProperty3 = _interopRequireDefault(_supportedProperty2);
	
	exports.supportedProperty = _supportedProperty3['default'];
	
	var _supportedValue2 = __webpack_require__(221);
	
	var _supportedValue3 = _interopRequireDefault(_supportedValue2);
	
	exports.supportedValue = _supportedValue3['default'];

/***/ },
/* 218 */
/***/ function(module, exports) {

	/**
	 * Export javascript style and css style vendor prefixes.
	 * Based on "transform" support test.
	 */
	
	'use strict';
	
	exports.__esModule = true;
	var js = '';
	var css = '';
	
	// We should not do anything if required serverside.
	if (typeof document != 'undefined') {
	  var jsCssMap = {
	    Webkit: '-webkit-',
	    Moz: '-moz-',
	    // IE did it wrong again ...
	    ms: '-ms-',
	    O: '-o-'
	  };
	  var style = document.createElement('p').style;
	  var testProp = 'Transform';
	
	  for (var key in jsCssMap) {
	    if (key + testProp in style) {
	      js = key;
	      css = jsCssMap[key];
	      break;
	    }
	  }
	}
	
	/**
	 * Vendor prefix string for the current browser.
	 *
	 * @type {{js: String, css: String}}
	 * @api public
	 */
	exports['default'] = { js: js, css: css };
	module.exports = exports['default'];

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = supportedProperty;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _prefix = __webpack_require__(218);
	
	var _prefix2 = _interopRequireDefault(_prefix);
	
	var _camelize = __webpack_require__(220);
	
	var _camelize2 = _interopRequireDefault(_camelize);
	
	var el = undefined;
	var cache = {};
	
	if (typeof document != 'undefined') {
	  el = document.createElement('p');
	
	  /**
	   * We test every property on vendor prefix requirement.
	   * Once tested, result is cached. It gives us up to 70% perf boost.
	   * http://jsperf.com/element-style-object-access-vs-plain-object
	   *
	   * Prefill cache with known css properties to reduce amount of
	   * properties we need to feature test at runtime.
	   * http://davidwalsh.name/vendor-prefix
	   */
	  var computed = window.getComputedStyle(document.documentElement, '');
	  for (var key in computed) {
	    cache[computed[key]] = computed[key];
	  }
	}
	
	/**
	 * Test if a property is supported, returns supported property with vendor
	 * prefix if required. Returns `false` if not supported.
	 *
	 * @param {String} prop dash separated
	 * @return {String|Boolean}
	 * @api public
	 */
	
	function supportedProperty(prop) {
	  // We have not tested this prop yet, lets do the test.
	  if (cache[prop] != null) return cache[prop];
	
	  // Camelization is required because we can't test using
	  // css syntax for e.g. in FF.
	  // Test if property is supported as it is.
	  if (_camelize2['default'](prop) in el.style) {
	    cache[prop] = prop;
	    // Test if property is supported with vendor prefix.
	  } else if (_prefix2['default'].js + _camelize2['default']('-' + prop) in el.style) {
	      cache[prop] = _prefix2['default'].css + prop;
	    } else {
	      cache[prop] = false;
	    }
	
	  return cache[prop];
	}
	
	module.exports = exports['default'];

/***/ },
/* 220 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = camelize;
	var regExp = /[-\s]+(.)?/g;
	
	/**
	 * Convert dash separated strings to camel cased.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	function camelize(str) {
	  return str.replace(regExp, toUpper);
	}
	
	function toUpper(match, c) {
	  return c ? c.toUpperCase() : '';
	}
	module.exports = exports['default'];

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = supportedValue;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _prefix = __webpack_require__(218);
	
	var _prefix2 = _interopRequireDefault(_prefix);
	
	var cache = {};
	var el = undefined;
	
	if (typeof document != 'undefined') el = document.createElement('p');
	
	/**
	 * Returns prefixed value if needed. Returns `false` if value is not supported.
	 *
	 * @param {String} property
	 * @param {String} value
	 * @return {String|Boolean}
	 * @api public
	 */
	
	function supportedValue(property, value) {
	  if (typeof value != 'string' || !isNaN(parseInt(value, 10))) return value;
	
	  var cacheKey = property + value;
	
	  if (cache[cacheKey] != null) return cache[cacheKey];
	
	  // Test value as it is.
	  el.style[property] = value;
	
	  // Value is supported as it is.
	  if (el.style[property] === value) {
	    cache[cacheKey] = value;
	  } else {
	    // Test value with vendor prefix.
	    value = _prefix2['default'].css + value;
	
	    // Hardcode test to convert "flex" to "-ms-flexbox" for IE10.
	    if (value === '-ms-flex') value = '-ms-flexbox';
	
	    el.style[property] = value;
	
	    // Value is supported with vendor prefix.
	    if (el.style[property] === value) cache[cacheKey] = value;
	  }
	
	  if (!cache[cacheKey]) cache[cacheKey] = false;
	
	  return cache[cacheKey];
	}
	
	module.exports = exports['default'];

/***/ },
/* 222 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = jssCamelCase;
	var regExp = /([A-Z])/g;
	
	/**
	 * Allow camel cased property names by converting them back to dasherized.
	 *
	 * @param {Rule} rule
	 * @api public
	 */
	
	function jssCamelCase() {
	  return function (rule) {
	    var style = rule.style;
	
	    if (!style) return;
	    rule.style = {};
	    for (var prop in style) {
	      var value = style[prop];
	      prop = prop.replace(regExp, replace);
	      rule.style[prop] = value;
	    }
	  };
	}
	
	function replace(c) {
	  return '-' + c.toLowerCase();
	}
	module.exports = exports['default'];

/***/ },
/* 223 */
/***/ function(module, exports) {

	/**
	 * Sort props by length.
	 *
	 * @param {Rule} rule
	 * @api public
	 */
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = jssPropsSort;
	
	function jssPropsSort() {
	  function sort(prop0, prop1) {
	    return prop0.length > prop1.length;
	  }
	
	  return function (rule) {
	    var style = rule.style;
	
	    if (!style) return;
	    var newStyle = {};
	    var props = Object.keys(style).sort(sort);
	    for (var i = 0; i < props.length; i++) {
	      newStyle[props[i]] = style[props[i]];
	    }
	    rule.style = newStyle;
	  };
	}
	
	module.exports = exports["default"];

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jss = __webpack_require__(198);
	
	var _jss2 = _interopRequireDefault(_jss);
	
	var _Node2 = __webpack_require__(196);
	
	var _Node3 = _interopRequireDefault(_Node2);
	
	var _Utility = __webpack_require__(193);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var stylesheet = _jss2.default.createStyleSheet({
	    motorDomSceneContainer: {
	        position: 'relative',
	        overflow: 'hidden',
	        width: '100%',
	        height: '100%',
	
	        '& .motor-dom-scene': {
	            width: '100%',
	            height: '100%'
	        }
	    }
	}).attach();
	
	var Scene = function (_Node) {
	    _inherits(Scene, _Node);
	
	    function Scene(mountPoint) {
	        _classCallCheck(this, Scene);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Scene).call(this));
	
	        _this._el.setClasses('motor-dom-scene');
	
	        _this._sceneContainer = document.createElement('div');
	        _this._sceneContainer.classList.add(stylesheet.classes.motorDomSceneContainer);
	        _this._sceneContainer.appendChild(_this._el.element);
	
	        // For now, Scenes are always proportionally sized by default.
	        _this._properties.size.modes = ['proportional', 'proportional', 'proportional'];
	
	        // set a manual perspective, since our dumbed down version of Motor doesn't have that:
	        //
	        // TODO: calculate perspective based on viewport size and aspect ratio.
	        //
	        // TODO: Why doesn't this work (setting perspective so that things
	        // translated in Z axis move backward/forward)???????????????????????
	        // See SO question: http://stackoverflow.com/questions/33110424
	        _this._el.element.style.webkitPerspective = '1000px';
	        _this._el.element.style.mozPerspective = '1000px';
	        _this._el.element.style.perspective = '1000px';
	        //this._el.element.style.webkitPerspectiveOrigin = '25%'
	        //this._el.element.style.mozPerspectiveOrigin = '25%'
	        //this._el.element.style.perspectiveOrigin = '25%'
	
	        // mount the scene into the target container, then provide a promise
	        // that the user can use to do something once the scene is mounted.
	        _this.mountPromise = _this._mount(mountPoint);
	        return _this;
	    }
	
	    _createClass(Scene, [{
	        key: '_mount',
	        value: function () {
	            var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(mountPoint) {
	                var selector;
	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                _context.next = 2;
	                                return (0, _Utility.documentReady)();
	
	                            case 2:
	
	                                // if no mountPoint was provided, just mount onto the <body> element.
	                                // XXX: Maybe we should just not mount the scene if no mountPoint is
	                                // provided, and expose a mount method.
	                                if (!mountPoint) {
	                                    mountPoint = document.body;
	                                }
	
	                                // if the user supplied a selector, mount there.
	                                else if (typeof mountPoint === 'string') {
	                                        selector = mountPoint;
	
	                                        mountPoint = document.querySelector(selector);
	                                    }
	
	                                // if we have an actual mount point (the user may have supplied one)
	
	                                if (!(mountPoint instanceof window.HTMLElement)) {
	                                    _context.next = 8;
	                                    break;
	                                }
	
	                                mountPoint.appendChild(this._sceneContainer);
	                                this._mounted = true;
	                                _context.next = 10;
	                                break;
	
	                            case 8:
	                                throw new Error('Invalid mount point specified. Specify a selector, or pass an actual HTMLElement.');
	
	                            case 10:
	                                return _context.abrupt('return', this._mounted);
	
	                            case 11:
	                            case 'end':
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));
	
	            return function _mount(_x) {
	                return ref.apply(this, arguments);
	            };
	        }()
	    }]);
	
	    return Scene;
	}(_Node3.default);

	exports.default = Scene;

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.MotorHTMLScene = exports.MotorHTMLNode = undefined;
	
	var _node = __webpack_require__(226);
	
	var _node2 = _interopRequireDefault(_node);
	
	var _scene = __webpack_require__(227);
	
	var _scene2 = _interopRequireDefault(_scene);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.MotorHTMLNode = _node2.default;
	exports.MotorHTMLScene = _scene2.default;

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Scene = __webpack_require__(224);
	
	var _Scene2 = _interopRequireDefault(_Scene);
	
	var _Node = __webpack_require__(196);
	
	var _Node2 = _interopRequireDefault(_Node);
	
	var _jss = __webpack_require__(198);
	
	var _jss2 = _interopRequireDefault(_jss);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }
	
	/**
	 * @class MotorHTMLNode
	 */
	var MotorHTMLNode = document.registerElement('motor-node', {
	    prototype: Object.assign(Object.create(HTMLElement.prototype), {
	        createdCallback: function createdCallback() {
	            this._attached = false;
	            this.attachPromise = null;
	            this._cleanedUp = true;
	
	            this.node = this.makeNode();
	            this.createChildObserver();
	
	            this.childObserver.observe(this, { childList: true });
	        },
	        makeNode: function makeNode() {
	            return new _Node2.default();
	        },
	        createChildObserver: function createChildObserver() {
	            var _this = this;
	
	            this.childObserver = new MutationObserver(function (mutations) {
	                mutations.forEach(function (mutation) {
	                    var nodes = Array.from(mutation.addedNodes);
	
	                    nodes = nodes.filter(function (node) {
	                        var keep = true;
	
	                        if (node.nodeName.match(/^MOTOR-/) ||
	
	                        // Ignore the motorDomSceneContainer because we
	                        // won't move it (that should stay in place inside
	                        // of the <motor-scene> element). Other elements
	                        // get moved into the scene graph (for example, if
	                        // you put a <div> inside of a <motor-node>, then
	                        // that <div> gets transplanted into the Motor
	                        // scene graph DOM tree which is rooted in the
	                        // <motor-scene>. You'll understand what this means
	                        // now if you take a look in the element inspector.
	                        node.className // some nodes don't have a class name (#text, #comment, #document).
	                         && node.className.match(/^motorDomSceneContainer/)) {
	                            keep = false;
	                        }
	
	                        return keep;
	                    });
	
	                    nodes.forEach(function (node) {
	
	                        // this is kind of a hack: we remove the content
	                        // from the motor-node in the actual DOM and put
	                        // it in the node-controlled element, which may
	                        // make it a little harder to debug, but at least
	                        // for now it works.
	                        _this.node.element.element.appendChild(node);
	                    });
	                });
	            });
	        },
	        attachedCallback: function attachedCallback() {
	            var _this2 = this;
	
	            return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
	                return regeneratorRuntime.wrap(function _callee3$(_context3) {
	                    while (1) {
	                        switch (_context3.prev = _context3.next) {
	                            case 0:
	                                _this2._attached = true;
	
	                                // If the node is currently being attached, wait for that to finish
	                                // before attaching again, to avoid a race condition. This will
	                                // almost never happen, but just in case, it'll protect against
	                                // naive programming on the end-user's side (f.e., if they attach
	                                // the motor-node element to the DOM then move it to a new element
	                                // within the same tick.
	                                _context3.next = 3;
	                                return _this2.attachPromise;
	
	                            case 3:
	
	                                _this2.attachPromise = new Promise(function () {
	                                    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(resolve) {
	                                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
	                                            while (1) {
	                                                switch (_context2.prev = _context2.next) {
	                                                    case 0:
	                                                        if (!_this2._cleanedUp) {
	                                                            _context2.next = 2;
	                                                            break;
	                                                        }
	
	                                                        return _context2.delegateYield(regeneratorRuntime.mark(function _callee() {
	                                                            var loop;
	                                                            return regeneratorRuntime.wrap(function _callee$(_context) {
	                                                                while (1) {
	                                                                    switch (_context.prev = _context.next) {
	                                                                        case 0:
	                                                                            _this2._cleanedUp = false;
	
	                                                                            _this2.childObserver.observe(_this2, { childList: true });
	
	                                                                            // the document has to be loaded for before things will render properly.
	                                                                            // scene.mountPromise is a promise we can await, at which point the
	                                                                            // document is ready and the scene is mounted (although not rendered, as in
	                                                                            // matrix transforms and styling are not yet applied).
	                                                                            //
	                                                                            // TODO mountPromise for Nodes so that we don't have to
	                                                                            // check for the scene node specifically.
	
	                                                                            if (!(_this2.nodeName == 'MOTOR-SCENE')) {
	                                                                                _context.next = 5;
	                                                                                break;
	                                                                            }
	
	                                                                            _context.next = 5;
	                                                                            return _this2.node.mountPromise;
	
	                                                                        case 5:
	
	                                                                            // So now we can render after the scene is mounted.
	                                                                            // TODO: Move the loop into Motor core, and request frames
	                                                                            // for specific nodes only when they update.
	
	                                                                            loop = function loop() {
	                                                                                _this2.node.render();
	                                                                                _this2.rAF = requestAnimationFrame(loop);
	                                                                            };
	
	                                                                            _this2.rAF = requestAnimationFrame(loop);
	
	                                                                        case 7:
	                                                                        case 'end':
	                                                                            return _context.stop();
	                                                                    }
	                                                                }
	                                                            }, _callee, _this2);
	                                                        })(), 't0', 2);
	
	                                                    case 2:
	
	                                                        // The scene doesn't have a parent to attach to.
	                                                        if (_this2.nodeName.toLowerCase() != 'motor-scene') _this2.parentNode.node.addChild(_this2.node);
	
	                                                        resolve();
	
	                                                    case 4:
	                                                    case 'end':
	                                                        return _context2.stop();
	                                                }
	                                            }
	                                        }, _callee2, _this2);
	                                    })),
	                                        _this = _this2;
	
	                                    return function (_x) {
	                                        return ref.apply(_this, arguments);
	                                    };
	                                }());
	
	                            case 4:
	                            case 'end':
	                                return _context3.stop();
	                        }
	                    }
	                }, _callee3, _this2);
	            }))();
	        },
	        detachedCallback: function detachedCallback() {
	            var _this3 = this;
	
	            return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
	                return regeneratorRuntime.wrap(function _callee4$(_context4) {
	                    while (1) {
	                        switch (_context4.prev = _context4.next) {
	                            case 0:
	                                _this3._attached = false;
	
	                                // If the node is currently being attached, wait for that to finish
	                                // before starting the detach process (to avoid a race condition).
	                                // if this.attachPromise is null, excution continues without
	                                // going to the next tick (TODO: is this something we can rely on
	                                // in the language spec?).
	
	                                if (!_this3.attachPromise) {
	                                    _context4.next = 4;
	                                    break;
	                                }
	
	                                _context4.next = 4;
	                                return _this3.attachPromise;
	
	                            case 4:
	                                _this3.attachPromise = null;
	
	                                // XXX For performance, deferr to the next tick before cleaning up
	                                // in case the element is actually being re-attached somewhere else
	                                // within this same tick (detaching and attaching is synchronous,
	                                // so by deferring to the next tick we'll be able to know if the
	                                // element was re-attached or not in order to clean up or not), in
	                                // which case we want to preserve the style sheet, preserve the
	                                // animation frame, and keep the scene in the sceneList. {{
	                                _context4.next = 7;
	                                return Promise.resolve();
	
	                            case 7:
	                                // deferr to the next tick.
	                                // If the scene wasn't re-attached, clean up.  TODO (performance):
	                                // How can we coordinate this with currently running animations so
	                                // that Garabage Collection doesn't make the frames stutter?
	                                if (!_this3._attached) {
	                                    _this3.cleanUp();
	                                    _this3._cleanedUp = true;
	                                }
	                                // }}
	
	                            case 8:
	                            case 'end':
	                                return _context4.stop();
	                        }
	                    }
	                }, _callee4, _this3);
	            }))();
	        },
	        cleanUp: function cleanUp() {
	            cancelAnimationFrame(this.rAF);
	            this.childObserver.disconnect();
	        },
	        attributeChangedCallback: function attributeChangedCallback(attribute, oldValue, newValue) {
	            this.updateNodeProperty(attribute, oldValue, newValue);
	        },
	        updateNodeProperty: function updateNodeProperty(attribute, oldValue, newValue) {
	            // attributes on our HTML elements are the same name as those on
	            // the Node class (the setters).
	            if (newValue !== oldValue) {
	                if (['opacity'].includes(attribute)) this.node[attribute] = parseFloat(newValue);else if (attribute.match(/sizemode/i)) this.node[attribute] = parseStringArray(newValue);else this.node[attribute] = parseNumberArray(newValue);
	            }
	        }
	    })
	});
	
	exports.default = MotorHTMLNode;
	
	
	function parseNumberArray(str) {
	    if (!isNumberArrayString(str)) throw new Error('Invalid array. Must be an array of numbers of length 3.');
	
	    var numbers = str.split('[')[1].split(']')[0].split(',');
	
	    numbers = numbers.map(function (num) {
	        return window.parseFloat(num);
	    });
	    return numbers;
	}
	
	function parseStringArray(str) {
	    var strings = str.split('[')[1].split(']')[0].split(',');
	    strings = strings.map(function (str) {
	        return str.trim();
	    });
	    return strings;
	}
	
	function isNumberArrayString(str) {
	    return !!str.match(/^\s*\[\s*(-?((\d+\.\d+)|(\d+))(\s*,\s*)?){3}\s*\]\s*$/g);
	}

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Node = __webpack_require__(196);
	
	var _Node2 = _interopRequireDefault(_Node);
	
	var _Scene = __webpack_require__(224);
	
	var _Scene2 = _interopRequireDefault(_Scene);
	
	var _node = __webpack_require__(226);
	
	var _node2 = _interopRequireDefault(_node);
	
	var _jss = __webpack_require__(198);
	
	var _jss2 = _interopRequireDefault(_jss);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var sceneList = [];
	var style = null;
	
	/**
	 * @class MotorHTMLScene
	 * @extends MotorHTMLNode
	 */
	var MotorHTMLScene = document.registerElement('motor-scene', {
	    prototype: Object.assign(Object.create(_node2.default.prototype), {
	        createdCallback: function createdCallback() {
	            _node2.default.prototype.createdCallback.call(this);
	
	            sceneList.push(this);
	
	            if (!style) {
	                style = _jss2.default.createStyleSheet({
	                    motorSceneElement: {
	                        boxSizing: 'border-box',
	                        display: 'block',
	                        overflow: 'hidden'
	                    }
	                });
	            }
	
	            style.attach();
	            this.classList.add(style.classes.motorSceneElement);
	        },
	        makeNode: function makeNode() {
	            return new _Scene2.default(this);
	        },
	        cleanUp: function cleanUp() {
	            _node2.default.prototype.cleanUp.call(this);
	
	            sceneList.pop(this);
	
	            // TODO: unmount the scene
	
	            // dispose of the scene style if we no longer have any scenes
	            // attached anywhere.
	            // TODO (performance): Would requesting an animation frame when
	            // detaching or attaching a stylesheet make things perform
	            // better?
	            if (sceneList.length == 0) {
	                style.detach();
	                style = null;
	            }
	        },
	        attributeChangedCallback: function attributeChangedCallback(attribute, oldValue, newValue) {
	            _node2.default.prototype.attributeChangedCallback.call(this);
	            this.updateSceneProperty(attribute, oldValue, newValue);
	        },
	        updateSceneProperty: function updateSceneProperty(attribute, oldValue, newValue) {
	            // ...
	        }
	    })
	});
	
	exports.default = MotorHTMLScene;

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Calendar = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Transform = __webpack_require__(229);
	
	var _Transform2 = _interopRequireDefault(_Transform);
	
	var _Transitionable = __webpack_require__(230);
	
	var _Transitionable2 = _interopRequireDefault(_Transitionable);
	
	var _Easing = __webpack_require__(234);
	
	var _Easing2 = _interopRequireDefault(_Easing);
	
	var _Molecule2 = __webpack_require__(235);
	
	var _Molecule3 = _interopRequireDefault(_Molecule2);
	
	var _Grid = __webpack_require__(249);
	
	var _Grid2 = _interopRequireDefault(_Grid);
	
	var _DoubleSidedPlane = __webpack_require__(251);
	
	var _DoubleSidedPlane2 = _interopRequireDefault(_DoubleSidedPlane);
	
	var _forLength = __webpack_require__(250);
	
	var _forLength2 = _interopRequireDefault(_forLength);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LICENSE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This Source Code Form is subject to the terms of the Mozilla Public
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * License, v. 2.0. If a copy of the MPL was not distributed with this
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	/**
	 * A calendar widget for selecting a date (WIP).
	 *
	 * @class Calendar
	 * @extends Molecule
	 */
	
	var Calendar = exports.Calendar = function (_Molecule) {
	    _inherits(Calendar, _Molecule);
	
	    /**
	     * Create a new `Calendar` with the given Famo.us-style size array and
	     * transition. The transition is the type of animation used when switching
	     * between months.
	     *
	     * @constructor
	     * @param {Array} calendarSize A Famo.us-style width/height size array.
	     * @param {String} transition The name of the animation transition to use when switching months.
	     */
	
	    function Calendar(calendarSize, transition) {
	        _classCallCheck(this, Calendar);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Calendar).call(this, { size: calendarSize }));
	
	        _this.transition = transition;
	        _this.flipSide = 0; // 0 means the initial front faces are showing, 1 means the initial back faces are showing.
	        _this.columnsRows = [7, 6];
	        _this.planes = [];
	
	        _this._initializeTransitions();
	        _this._createGrid();
	
	        setTimeout(function () {
	            this.transitions[this.transition]();
	            setInterval(this.transitions[this.transition], 2000);
	        }.bind(_this), 800);
	        return _this;
	    }
	
	    /**
	     * Creates the grid used for the layout of the day cells.
	     *
	     * @private
	     */
	
	
	    _createClass(Calendar, [{
	        key: '_createGrid',
	        value: function _createGrid() {
	            var grid = new _Grid2.default(this.columnsRows[0], this.columnsRows[1], this.options.size);
	
	            (0, _forLength2.default)(this.columnsRows[0] * this.columnsRows[1], function (i) {
	                var plane = new _DoubleSidedPlane2.default({
	                    properties: {
	                        background: 'teal'
	                    }
	                });
	                this.planes.push(plane);
	            }.bind(this));
	
	            grid.setChildren(this.planes);
	            this.node.add(grid);
	        }
	
	        /**
	         * Set up `this.transitions`, containing the available month-to-month
	         * transitions.
	         *
	         * @private
	         */
	
	    }, {
	        key: '_initializeTransitions',
	        value: function _initializeTransitions() {
	            this.transitions = {
	                flipDiagonal: function () {
	                    this.flipSide = +!this.flipSide;
	                    // determine which dimension of the grid is shorter and which is longer.
	                    var shortest = 0;
	                    var longest;
	                    this.columnsRows.forEach(function (item, index) {
	                        if (item < this.columnsRows[shortest]) shortest = index;
	                    }.bind(this));
	                    longest = +!shortest;
	
	                    // for each diagonal of the grid, flip those cells.
	                    (0, _forLength2.default)(this.columnsRows[0] + this.columnsRows[1] - 1, function (column) {
	                        (0, _forLength2.default)(this.columnsRows[shortest], function (row) {
	                            if (column - row >= 0 && column - row < this.columnsRows[longest]) {
	                                var plane = this.planes[column - row + this.columnsRows[longest] * row];
	                                flipOne(plane, column);
	                            }
	                        }.bind(this));
	                    }.bind(this));
	
	                    function flipOne(item, column) {
	                        if (typeof item.__targetRotation == 'undefined') {
	                            item.__targetRotation = new _Transitionable2.default(0);
	                        }
	                        var rotation = new _Transitionable2.default(item.__targetRotation.get());
	                        item.__targetRotation.set(item.__targetRotation.get() + Math.PI);
	
	                        //item.get().transformFrom(function() {
	                        //return Transform.rotateY(rotation.get());
	                        //});
	                        item.children[0].get().transformFrom(function () {
	                            return _Transform2.default.rotateY(rotation.get());
	                        });
	                        item.children[1].get().transformFrom(function () {
	                            return _Transform2.default.rotateY(rotation.get() + Math.PI);
	                        });
	
	                        setTimeout(function () {
	                            rotation.set(item.__targetRotation.get(), { duration: 2000, curve: _Easing2.default.outExpo });
	                        }, 0 + 50 * column);
	                    }
	                }.bind(this)
	            };
	        }
	    }]);
	
	    return Calendar;
	}(_Molecule3.default);
	
	exports.default = Calendar;

/***/ },
/* 229 */
/***/ function(module, exports) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2015
	 */
	
	
	    /**
	     *  A high-performance static matrix math library used to calculate
	     *    affine transforms on surfaces and other renderables.
	     *    Famo.us uses 4x4 matrices corresponding directly to
	     *    WebKit matrices (column-major order).
	     *
	     *    The internal "type" of a Matrix is a 16-long float array in
	     *    row-major order, with:
	     *    elements [0],[1],[2],[4],[5],[6],[8],[9],[10] forming the 3x3
	     *          transformation matrix;
	     *    elements [12], [13], [14] corresponding to the t_x, t_y, t_z
	     *           translation;
	     *    elements [3], [7], [11] set to 0;
	     *    element [15] set to 1.
	     *    All methods are static.
	     *
	     * @static
	     *
	     * @class Transform
	     */
	    var Transform = {};
	
	    // WARNING: these matrices correspond to WebKit matrices, which are
	    //    transposed from their math counterparts
	    Transform.precision = 1e-6;
	    Transform.identity = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
	
	    /**
	     * Multiply two or more Transform matrix types to return a Transform matrix.
	     *
	     * @method multiply4x4
	     * @static
	     * @param {Transform} a left Transform
	     * @param {Transform} b right Transform
	     * @return {Transform}
	     */
	    Transform.multiply4x4 = function multiply4x4(a, b) {
	        return [
	            a[0] * b[0] + a[4] * b[1] + a[8] * b[2] + a[12] * b[3],
	            a[1] * b[0] + a[5] * b[1] + a[9] * b[2] + a[13] * b[3],
	            a[2] * b[0] + a[6] * b[1] + a[10] * b[2] + a[14] * b[3],
	            a[3] * b[0] + a[7] * b[1] + a[11] * b[2] + a[15] * b[3],
	            a[0] * b[4] + a[4] * b[5] + a[8] * b[6] + a[12] * b[7],
	            a[1] * b[4] + a[5] * b[5] + a[9] * b[6] + a[13] * b[7],
	            a[2] * b[4] + a[6] * b[5] + a[10] * b[6] + a[14] * b[7],
	            a[3] * b[4] + a[7] * b[5] + a[11] * b[6] + a[15] * b[7],
	            a[0] * b[8] + a[4] * b[9] + a[8] * b[10] + a[12] * b[11],
	            a[1] * b[8] + a[5] * b[9] + a[9] * b[10] + a[13] * b[11],
	            a[2] * b[8] + a[6] * b[9] + a[10] * b[10] + a[14] * b[11],
	            a[3] * b[8] + a[7] * b[9] + a[11] * b[10] + a[15] * b[11],
	            a[0] * b[12] + a[4] * b[13] + a[8] * b[14] + a[12] * b[15],
	            a[1] * b[12] + a[5] * b[13] + a[9] * b[14] + a[13] * b[15],
	            a[2] * b[12] + a[6] * b[13] + a[10] * b[14] + a[14] * b[15],
	            a[3] * b[12] + a[7] * b[13] + a[11] * b[14] + a[15] * b[15]
	        ];
	    };
	
	    /**
	     * Fast-multiply two Transform matrix types to return a
	     *    Matrix, assuming bottom row on each is [0 0 0 1].
	     *
	     * @method multiply
	     * @static
	     * @param {Transform} a left Transform
	     * @param {Transform} b right Transform
	     * @return {Transform}
	     */
	    Transform.multiply = function multiply(a, b) {
	        return [
	            a[0] * b[0] + a[4] * b[1] + a[8] * b[2],
	            a[1] * b[0] + a[5] * b[1] + a[9] * b[2],
	            a[2] * b[0] + a[6] * b[1] + a[10] * b[2],
	            0,
	            a[0] * b[4] + a[4] * b[5] + a[8] * b[6],
	            a[1] * b[4] + a[5] * b[5] + a[9] * b[6],
	            a[2] * b[4] + a[6] * b[5] + a[10] * b[6],
	            0,
	            a[0] * b[8] + a[4] * b[9] + a[8] * b[10],
	            a[1] * b[8] + a[5] * b[9] + a[9] * b[10],
	            a[2] * b[8] + a[6] * b[9] + a[10] * b[10],
	            0,
	            a[0] * b[12] + a[4] * b[13] + a[8] * b[14] + a[12],
	            a[1] * b[12] + a[5] * b[13] + a[9] * b[14] + a[13],
	            a[2] * b[12] + a[6] * b[13] + a[10] * b[14] + a[14],
	            1
	        ];
	    };
	
	    /**
	     * Return a Transform translated by additional amounts in each
	     *    dimension. This is equivalent to the result of
	     *
	     *    Transform.multiply(Matrix.translate(t[0], t[1], t[2]), m).
	     *
	     * @method thenMove
	     * @static
	     * @param {Transform} m a Transform
	     * @param {Array.Number} t floats delta vector of length 2 or 3
	     * @return {Transform}
	     */
	    Transform.thenMove = function thenMove(m, t) {
	        if (!t[2]) t[2] = 0;
	        return [m[0], m[1], m[2], 0, m[4], m[5], m[6], 0, m[8], m[9], m[10], 0, m[12] + t[0], m[13] + t[1], m[14] + t[2], 1];
	    };
	
	    /**
	     * Return a Transform matrix which represents the result of a transform matrix
	     *    applied after a move. This is faster than the equivalent multiply.
	     *    This is equivalent to the result of:
	     *
	     *    Transform.multiply(m, Transform.translate(t[0], t[1], t[2])).
	     *
	     * @method moveThen
	     * @static
	     * @param {Array.Number} v vector representing initial movement
	     * @param {Transform} m matrix to apply afterwards
	     * @return {Transform} the resulting matrix
	     */
	    Transform.moveThen = function moveThen(v, m) {
	        if (!v[2]) v[2] = 0;
	        var t0 = v[0] * m[0] + v[1] * m[4] + v[2] * m[8];
	        var t1 = v[0] * m[1] + v[1] * m[5] + v[2] * m[9];
	        var t2 = v[0] * m[2] + v[1] * m[6] + v[2] * m[10];
	        return Transform.thenMove(m, [t0, t1, t2]);
	    };
	
	    /**
	     * Return a Transform which represents a translation by specified
	     *    amounts in each dimension.
	     *
	     * @method translate
	     * @static
	     * @param {Number} x x translation
	     * @param {Number} y y translation
	     * @param {Number} z z translation
	     * @return {Transform}
	     */
	    Transform.translate = function translate(x, y, z) {
	        if (z === undefined) z = 0;
	        return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1];
	    };
	
	    /**
	     * Return a Transform scaled by a vector in each
	     *    dimension. This is a more performant equivalent to the result of
	     *
	     *    Transform.multiply(Transform.scale(s[0], s[1], s[2]), m).
	     *
	     * @method thenScale
	     * @static
	     * @param {Transform} m a matrix
	     * @param {Array.Number} s delta vector (array of floats &&
	     *    array.length == 3)
	     * @return {Transform}
	     */
	    Transform.thenScale = function thenScale(m, s) {
	        return [
	            s[0] * m[0], s[1] * m[1], s[2] * m[2], 0,
	            s[0] * m[4], s[1] * m[5], s[2] * m[6], 0,
	            s[0] * m[8], s[1] * m[9], s[2] * m[10], 0,
	            s[0] * m[12], s[1] * m[13], s[2] * m[14], 1
	        ];
	    };
	
	    /**
	     * Return a Transform which represents a scale by specified amounts
	     *    in each dimension.
	     *
	     * @method scale
	     * @static
	     * @param {Number} x x scale factor
	     * @param {Number} y y scale factor
	     * @param {Number} z z scale factor
	     * @return {Transform}
	     */
	    Transform.scale = function scale(x, y, z) {
	        if (z === undefined) z = 1;
	        if (y === undefined) y = x;
	        return [x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1];
	    };
	
	    /**
	     * Return a Transform which represents a clockwise
	     *    rotation around the x axis.
	     *
	     * @method rotateX
	     * @static
	     * @param {Number} theta radians
	     * @return {Transform}
	     */
	    Transform.rotateX = function rotateX(theta) {
	        var cosTheta = Math.cos(theta);
	        var sinTheta = Math.sin(theta);
	        return [1, 0, 0, 0, 0, cosTheta, sinTheta, 0, 0, -sinTheta, cosTheta, 0, 0, 0, 0, 1];
	    };
	
	    /**
	     * Return a Transform which represents a clockwise
	     *    rotation around the y axis.
	     *
	     * @method rotateY
	     * @static
	     * @param {Number} theta radians
	     * @return {Transform}
	     */
	    Transform.rotateY = function rotateY(theta) {
	        var cosTheta = Math.cos(theta);
	        var sinTheta = Math.sin(theta);
	        return [cosTheta, 0, -sinTheta, 0, 0, 1, 0, 0, sinTheta, 0, cosTheta, 0, 0, 0, 0, 1];
	    };
	
	    /**
	     * Return a Transform which represents a clockwise
	     *    rotation around the z axis.
	     *
	     * @method rotateZ
	     * @static
	     * @param {Number} theta radians
	     * @return {Transform}
	     */
	    Transform.rotateZ = function rotateZ(theta) {
	        var cosTheta = Math.cos(theta);
	        var sinTheta = Math.sin(theta);
	        return [cosTheta, sinTheta, 0, 0, -sinTheta, cosTheta, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
	    };
	
	    /**
	     * Return a Transform which represents composed clockwise
	     *    rotations along each of the axes. Equivalent to the result of
	     *    Matrix.multiply(rotateX(phi), rotateY(theta), rotateZ(psi)).
	     *
	     * @method rotate
	     * @static
	     * @param {Number} phi radians to rotate about the positive x axis
	     * @param {Number} theta radians to rotate about the positive y axis
	     * @param {Number} psi radians to rotate about the positive z axis
	     * @return {Transform}
	     */
	    Transform.rotate = function rotate(phi, theta, psi) {
	        var cosPhi = Math.cos(phi);
	        var sinPhi = Math.sin(phi);
	        var cosTheta = Math.cos(theta);
	        var sinTheta = Math.sin(theta);
	        var cosPsi = Math.cos(psi);
	        var sinPsi = Math.sin(psi);
	        var result = [
	            cosTheta * cosPsi,
	            cosPhi * sinPsi + sinPhi * sinTheta * cosPsi,
	            sinPhi * sinPsi - cosPhi * sinTheta * cosPsi,
	            0,
	            -cosTheta * sinPsi,
	            cosPhi * cosPsi - sinPhi * sinTheta * sinPsi,
	            sinPhi * cosPsi + cosPhi * sinTheta * sinPsi,
	            0,
	            sinTheta,
	            -sinPhi * cosTheta,
	            cosPhi * cosTheta,
	            0,
	            0, 0, 0, 1
	        ];
	        return result;
	    };
	
	    /**
	     * Return a Transform which represents an axis-angle rotation
	     *
	     * @method rotateAxis
	     * @static
	     * @param {Array.Number} v unit vector representing the axis to rotate about
	     * @param {Number} theta radians to rotate clockwise about the axis
	     * @return {Transform}
	     */
	    Transform.rotateAxis = function rotateAxis(v, theta) {
	        var sinTheta = Math.sin(theta);
	        var cosTheta = Math.cos(theta);
	        var verTheta = 1 - cosTheta; // versine of theta
	
	        var xxV = v[0] * v[0] * verTheta;
	        var xyV = v[0] * v[1] * verTheta;
	        var xzV = v[0] * v[2] * verTheta;
	        var yyV = v[1] * v[1] * verTheta;
	        var yzV = v[1] * v[2] * verTheta;
	        var zzV = v[2] * v[2] * verTheta;
	        var xs = v[0] * sinTheta;
	        var ys = v[1] * sinTheta;
	        var zs = v[2] * sinTheta;
	
	        var result = [
	            xxV + cosTheta, xyV + zs, xzV - ys, 0,
	            xyV - zs, yyV + cosTheta, yzV + xs, 0,
	            xzV + ys, yzV - xs, zzV + cosTheta, 0,
	            0, 0, 0, 1
	        ];
	        return result;
	    };
	
	    /**
	     * Return a Transform which represents a transform matrix applied about
	     * a separate origin point.
	     *
	     * @method aboutOrigin
	     * @static
	     * @param {Array.Number} v origin point to apply matrix
	     * @param {Transform} m matrix to apply
	     * @return {Transform}
	     */
	    Transform.aboutOrigin = function aboutOrigin(v, m) {
	        var t0 = v[0] - (v[0] * m[0] + v[1] * m[4] + v[2] * m[8]);
	        var t1 = v[1] - (v[0] * m[1] + v[1] * m[5] + v[2] * m[9]);
	        var t2 = v[2] - (v[0] * m[2] + v[1] * m[6] + v[2] * m[10]);
	        return Transform.thenMove(m, [t0, t1, t2]);
	    };
	
	    /**
	     * Return a Transform representation of a skew transformation
	     *
	     * @method skew
	     * @static
	     * @param {Number} phi scale factor skew in the x axis
	     * @param {Number} theta scale factor skew in the y axis
	     * @param {Number} psi scale factor skew in the z axis
	     * @return {Transform}
	     */
	    Transform.skew = function skew(phi, theta, psi) {
	        return [1, Math.tan(theta), 0, 0, Math.tan(psi), 1, 0, 0, 0, Math.tan(phi), 1, 0, 0, 0, 0, 1];
	    };
	
	    /**
	     * Return a Transform representation of a skew in the x-direction
	     *
	     * @method skewX
	     * @static
	     * @param {Number} angle the angle between the top and left sides
	     * @return {Transform}
	     */
	    Transform.skewX = function skewX(angle) {
	        return [1, 0, 0, 0, Math.tan(angle), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
	    };
	
	    /**
	     * Return a Transform representation of a skew in the y-direction
	     *
	     * @method skewY
	     * @static
	     * @param {Number} angle the angle between the top and right sides
	     * @return {Transform}
	     */
	    Transform.skewY = function skewY(angle) {
	        return [1, Math.tan(angle), 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
	    };
	
	    /**
	     * Returns a perspective Transform matrix
	     *
	     * @method perspective
	     * @static
	     * @param {Number} focusZ z position of focal point
	     * @return {Transform}
	     */
	    Transform.perspective = function perspective(focusZ) {
	        return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -1 / focusZ, 0, 0, 0, 1];
	    };
	
	    /**
	     * Return translation vector component of given Transform
	     *
	     * @method getTranslate
	     * @static
	     * @param {Transform} m Transform
	     * @return {Array.Number} the translation vector [t_x, t_y, t_z]
	     */
	    Transform.getTranslate = function getTranslate(m) {
	        return [m[12], m[13], m[14]];
	    };
	
	    /**
	     * Return inverse affine transform for given Transform.
	     *   Note: This assumes m[3] = m[7] = m[11] = 0, and m[15] = 1.
	     *   Will provide incorrect results if not invertible or preconditions not met.
	     *
	     * @method inverse
	     * @static
	     * @param {Transform} m Transform
	     * @return {Transform}
	     */
	    Transform.inverse = function inverse(m) {
	        // only need to consider 3x3 section for affine
	        var c0 = m[5] * m[10] - m[6] * m[9];
	        var c1 = m[4] * m[10] - m[6] * m[8];
	        var c2 = m[4] * m[9] - m[5] * m[8];
	        var c4 = m[1] * m[10] - m[2] * m[9];
	        var c5 = m[0] * m[10] - m[2] * m[8];
	        var c6 = m[0] * m[9] - m[1] * m[8];
	        var c8 = m[1] * m[6] - m[2] * m[5];
	        var c9 = m[0] * m[6] - m[2] * m[4];
	        var c10 = m[0] * m[5] - m[1] * m[4];
	        var detM = m[0] * c0 - m[1] * c1 + m[2] * c2;
	        var invD = 1 / detM;
	        var result = [
	            invD * c0, -invD * c4, invD * c8, 0,
	            -invD * c1, invD * c5, -invD * c9, 0,
	            invD * c2, -invD * c6, invD * c10, 0,
	            0, 0, 0, 1
	        ];
	        result[12] = -m[12] * result[0] - m[13] * result[4] - m[14] * result[8];
	        result[13] = -m[12] * result[1] - m[13] * result[5] - m[14] * result[9];
	        result[14] = -m[12] * result[2] - m[13] * result[6] - m[14] * result[10];
	        return result;
	    };
	
	    /**
	     * Returns the transpose of a 4x4 matrix
	     *
	     * @method transpose
	     * @static
	     * @param {Transform} m matrix
	     * @return {Transform} the resulting transposed matrix
	     */
	    Transform.transpose = function transpose(m) {
	        return [m[0], m[4], m[8], m[12], m[1], m[5], m[9], m[13], m[2], m[6], m[10], m[14], m[3], m[7], m[11], m[15]];
	    };
	
	    function _normSquared(v) {
	        return (v.length === 2) ? v[0] * v[0] + v[1] * v[1] : v[0] * v[0] + v[1] * v[1] + v[2] * v[2];
	    }
	    function _norm(v) {
	        return Math.sqrt(_normSquared(v));
	    }
	    function _sign(n) {
	        return (n < 0) ? -1 : 1;
	    }
	
	    /**
	     * Decompose Transform into separate .translate, .rotate, .scale,
	     *    and .skew components.
	     *
	     * @method interpret
	     * @static
	     * @param {Transform} M transform matrix
	     * @return {Object} matrix spec object with component matrices .translate,
	     *    .rotate, .scale, .skew
	     */
	    Transform.interpret = function interpret(M) {
	
	        // QR decomposition via Householder reflections
	        //FIRST ITERATION
	
	        //default Q1 to the identity matrix;
	        var x = [M[0], M[1], M[2]];                // first column vector
	        var sgn = _sign(x[0]);                     // sign of first component of x (for stability)
	        var xNorm = _norm(x);                      // norm of first column vector
	        var v = [x[0] + sgn * xNorm, x[1], x[2]];  // v = x + sign(x[0])|x|e1
	        var mult = 2 / _normSquared(v);            // mult = 2/v'v
	
	        //bail out if our Matrix is singular
	        if (mult >= Infinity) {
	            return {translate: Transform.getTranslate(M), rotate: [0, 0, 0], scale: [0, 0, 0], skew: [0, 0, 0]};
	        }
	
	        //evaluate Q1 = I - 2vv'/v'v
	        var Q1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
	
	        //diagonals
	        Q1[0]  = 1 - mult * v[0] * v[0];    // 0,0 entry
	        Q1[5]  = 1 - mult * v[1] * v[1];    // 1,1 entry
	        Q1[10] = 1 - mult * v[2] * v[2];    // 2,2 entry
	
	        //upper diagonal
	        Q1[1] = -mult * v[0] * v[1];        // 0,1 entry
	        Q1[2] = -mult * v[0] * v[2];        // 0,2 entry
	        Q1[6] = -mult * v[1] * v[2];        // 1,2 entry
	
	        //lower diagonal
	        Q1[4] = Q1[1];                      // 1,0 entry
	        Q1[8] = Q1[2];                      // 2,0 entry
	        Q1[9] = Q1[6];                      // 2,1 entry
	
	        //reduce first column of M
	        var MQ1 = Transform.multiply(Q1, M);
	
	        //SECOND ITERATION on (1,1) minor
	        var x2 = [MQ1[5], MQ1[6]];
	        var sgn2 = _sign(x2[0]);                    // sign of first component of x (for stability)
	        var x2Norm = _norm(x2);                     // norm of first column vector
	        var v2 = [x2[0] + sgn2 * x2Norm, x2[1]];    // v = x + sign(x[0])|x|e1
	        var mult2 = 2 / _normSquared(v2);           // mult = 2/v'v
	
	        //evaluate Q2 = I - 2vv'/v'v
	        var Q2 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
	
	        //diagonal
	        Q2[5]  = 1 - mult2 * v2[0] * v2[0]; // 1,1 entry
	        Q2[10] = 1 - mult2 * v2[1] * v2[1]; // 2,2 entry
	
	        //off diagonals
	        Q2[6] = -mult2 * v2[0] * v2[1];     // 2,1 entry
	        Q2[9] = Q2[6];                      // 1,2 entry
	
	        //calc QR decomposition. Q = Q1*Q2, R = Q'*M
	        var Q = Transform.multiply(Q2, Q1);      //note: really Q transpose
	        var R = Transform.multiply(Q, M);
	
	        //remove negative scaling
	        var remover = Transform.scale(R[0] < 0 ? -1 : 1, R[5] < 0 ? -1 : 1, R[10] < 0 ? -1 : 1);
	        R = Transform.multiply(R, remover);
	        Q = Transform.multiply(remover, Q);
	
	        //decompose into rotate/scale/skew matrices
	        var result = {};
	        result.translate = Transform.getTranslate(M);
	        result.rotate = [Math.atan2(-Q[6], Q[10]), Math.asin(Q[2]), Math.atan2(-Q[1], Q[0])];
	        if (!result.rotate[0]) {
	            result.rotate[0] = 0;
	            result.rotate[2] = Math.atan2(Q[4], Q[5]);
	        }
	        result.scale = [R[0], R[5], R[10]];
	        result.skew = [Math.atan2(R[9], result.scale[2]), Math.atan2(R[8], result.scale[2]), Math.atan2(R[4], result.scale[0])];
	
	        //double rotation workaround
	        if (Math.abs(result.rotate[0]) + Math.abs(result.rotate[2]) > 1.5 * Math.PI) {
	            result.rotate[1] = Math.PI - result.rotate[1];
	            if (result.rotate[1] > Math.PI) result.rotate[1] -= 2 * Math.PI;
	            if (result.rotate[1] < -Math.PI) result.rotate[1] += 2 * Math.PI;
	            if (result.rotate[0] < 0) result.rotate[0] += Math.PI;
	            else result.rotate[0] -= Math.PI;
	            if (result.rotate[2] < 0) result.rotate[2] += Math.PI;
	            else result.rotate[2] -= Math.PI;
	        }
	
	        return result;
	    };
	
	    /**
	     * Weighted average between two matrices by averaging their
	     *     translation, rotation, scale, skew components.
	     *     f(M1,M2,t) = (1 - t) * M1 + t * M2
	     *
	     * @method average
	     * @static
	     * @param {Transform} M1 f(M1,M2,0) = M1
	     * @param {Transform} M2 f(M1,M2,1) = M2
	     * @param {Number} t
	     * @return {Transform}
	     */
	    Transform.average = function average(M1, M2, t) {
	        t = (t === undefined) ? 0.5 : t;
	        var specM1 = Transform.interpret(M1);
	        var specM2 = Transform.interpret(M2);
	
	        var specAvg = {
	            translate: [0, 0, 0],
	            rotate: [0, 0, 0],
	            scale: [0, 0, 0],
	            skew: [0, 0, 0]
	        };
	
	        for (var i = 0; i < 3; i++) {
	            specAvg.translate[i] = (1 - t) * specM1.translate[i] + t * specM2.translate[i];
	            specAvg.rotate[i] = (1 - t) * specM1.rotate[i] + t * specM2.rotate[i];
	            specAvg.scale[i] = (1 - t) * specM1.scale[i] + t * specM2.scale[i];
	            specAvg.skew[i] = (1 - t) * specM1.skew[i] + t * specM2.skew[i];
	        }
	        return Transform.build(specAvg);
	    };
	
	    /**
	     * Compose .translate, .rotate, .scale, .skew components into
	     * Transform matrix
	     *
	     * @method build
	     * @static
	     * @param {matrixSpec} spec object with component matrices .translate,
	     *    .rotate, .scale, .skew
	     * @return {Transform} composed transform
	     */
	    Transform.build = function build(spec) {
	        var scaleMatrix = Transform.scale(spec.scale[0], spec.scale[1], spec.scale[2]);
	        var skewMatrix = Transform.skew(spec.skew[0], spec.skew[1], spec.skew[2]);
	        var rotateMatrix = Transform.rotate(spec.rotate[0], spec.rotate[1], spec.rotate[2]);
	        return Transform.thenMove(Transform.multiply(Transform.multiply(rotateMatrix, skewMatrix), scaleMatrix), spec.translate);
	    };
	
	    /**
	     * Determine if two Transforms are component-wise equal
	     *   Warning: breaks on perspective Transforms
	     *
	     * @method equals
	     * @static
	     * @param {Transform} a matrix
	     * @param {Transform} b matrix
	     * @return {boolean}
	     */
	    Transform.equals = function equals(a, b) {
	        return !Transform.notEquals(a, b);
	    };
	
	    /**
	     * Determine if two Transforms are component-wise unequal
	     *   Warning: breaks on perspective Transforms
	     *
	     * @method notEquals
	     * @static
	     * @param {Transform} a matrix
	     * @param {Transform} b matrix
	     * @return {boolean}
	     */
	    Transform.notEquals = function notEquals(a, b) {
	        if (a === b) return false;
	
	        // shortci
	        return !(a && b) ||
	            a[12] !== b[12] || a[13] !== b[13] || a[14] !== b[14] ||
	            a[0] !== b[0] || a[1] !== b[1] || a[2] !== b[2] ||
	            a[4] !== b[4] || a[5] !== b[5] || a[6] !== b[6] ||
	            a[8] !== b[8] || a[9] !== b[9] || a[10] !== b[10];
	    };
	
	    /**
	     * Constrain angle-trio components to range of [-pi, pi).
	     *
	     * @method normalizeRotation
	     * @static
	     * @param {Array.Number} rotation phi, theta, psi (array of floats
	     *    && array.length == 3)
	     * @return {Array.Number} new phi, theta, psi triplet
	     *    (array of floats && array.length == 3)
	     */
	    Transform.normalizeRotation = function normalizeRotation(rotation) {
	        var result = rotation.slice(0);
	        if (result[0] === Math.PI * 0.5 || result[0] === -Math.PI * 0.5) {
	            result[0] = -result[0];
	            result[1] = Math.PI - result[1];
	            result[2] -= Math.PI;
	        }
	        if (result[0] > Math.PI * 0.5) {
	            result[0] = result[0] - Math.PI;
	            result[1] = Math.PI - result[1];
	            result[2] -= Math.PI;
	        }
	        if (result[0] < -Math.PI * 0.5) {
	            result[0] = result[0] + Math.PI;
	            result[1] = -Math.PI - result[1];
	            result[2] -= Math.PI;
	        }
	        while (result[1] < -Math.PI) result[1] += 2 * Math.PI;
	        while (result[1] >= Math.PI) result[1] -= 2 * Math.PI;
	        while (result[2] < -Math.PI) result[2] += 2 * Math.PI;
	        while (result[2] >= Math.PI) result[2] -= 2 * Math.PI;
	        return result;
	    };
	
	    /**
	     * (Property) Array defining a translation forward in z by 1
	     *
	     * @property {array} inFront
	     * @static
	     * @final
	     */
	    Transform.inFront = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1e-3, 1];
	
	    /**
	     * (Property) Array defining a translation backwards in z by 1
	     *
	     * @property {array} behind
	     * @static
	     * @final
	     */
	    Transform.behind = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -1e-3, 1];
	
	    module.exports = Transform;


/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: david@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2015
	 */
	/*eslint-disable new-cap */
	    var MultipleTransition = __webpack_require__(231);
	    var TweenTransition = __webpack_require__(233);
	
	    /**
	     * A state maintainer for a smooth transition between
	     *    numerically-specified states. Example numeric states include floats or
	     *    Transform objects.
	     *
	     * An initial state is set with the constructor or set(startState). A
	     *    corresponding end state and transition are set with set(endState,
	     *    transition). Subsequent calls to set(endState, transition) begin at
	     *    the last state. Calls to get(timestamp) provide the interpolated state
	     *    along the way.
	     *
	     * Note that there is no event loop here - calls to get() are the only way
	     *    to find state projected to the current (or provided) time and are
	     *    the only way to trigger callbacks. Usually this kind of object would
	     *    be part of the render() path of a visible component.
	     *
	     * @class Transitionable
	     * @constructor
	     * @param {number|Array.Number|Object.<number|string, number>} start
	     *    beginning state
	     */
	    function Transitionable(start) {
	        this.currentAction = null;
	        this.actionQueue = [];
	        this.callbackQueue = [];
	
	        this.state = 0;
	        this.velocity = undefined;
	        this._callback = undefined;
	        this._engineInstance = null;
	        this._currentMethod = null;
	
	        this.set(start);
	    }
	
	    var transitionMethods = {};
	
	    Transitionable.register = function register(methods) {
	        var success = true;
	        for (var method in methods) {
	            if (!Transitionable.registerMethod(method, methods[method]))
	                success = false;
	        }
	        return success;
	    };
	
	    Transitionable.registerMethod = function registerMethod(name, engineClass) {
	        if (!(name in transitionMethods)) {
	            transitionMethods[name] = engineClass;
	            return true;
	        }
	        else return false;
	    };
	
	    Transitionable.unregisterMethod = function unregisterMethod(name) {
	        if (name in transitionMethods) {
	            delete transitionMethods[name];
	            return true;
	        }
	        else return false;
	    };
	
	    function _loadNext() {
	        if (this._callback) {
	            var callback = this._callback;
	            this._callback = undefined;
	            callback();
	        }
	        if (this.actionQueue.length <= 0) {
	            this.set(this.get()); // no update required
	            return;
	        }
	        this.currentAction = this.actionQueue.shift();
	        this._callback = this.callbackQueue.shift();
	
	        var method = null;
	        var endValue = this.currentAction[0];
	        var transition = this.currentAction[1];
	        if (transition instanceof Object && transition.method) {
	            method = transition.method;
	            if (typeof method === 'string') method = transitionMethods[method];
	        }
	        else {
	            method = TweenTransition;
	        }
	
	        if (this._currentMethod !== method) {
	            if (!(endValue instanceof Object) || method.SUPPORTS_MULTIPLE === true || endValue.length <= method.SUPPORTS_MULTIPLE) {
	                this._engineInstance = new method();
	            }
	            else {
	                this._engineInstance = new MultipleTransition(method);
	            }
	            this._currentMethod = method;
	        }
	
	        this._engineInstance.reset(this.state, this.velocity);
	        if (this.velocity !== undefined) transition.velocity = this.velocity;
	        this._engineInstance.set(endValue, transition, _loadNext.bind(this));
	    }
	
	    /**
	     * Add transition to end state to the queue of pending transitions. Special
	     *    Use: calling without a transition resets the object to that state with
	     *    no pending actions
	     *
	     * @method set
	     *
	     * @param {number|FamousMatrix|Array.Number|Object.<number, number>} endState
	     *    end state to which we interpolate
	     * @param {transition=} transition object of type {duration: number, curve:
	     *    f[0,1] -> [0,1] or name}. If transition is omitted, change will be
	     *    instantaneous.
	     * @param {function()=} callback Zero-argument function to call on observed
	     *    completion (t=1)
	     */
	    Transitionable.prototype.set = function set(endState, transition, callback) {
	        if (!transition) {
	            this.reset(endState);
	            if (callback) callback();
	            return this;
	        }
	
	        var action = [endState, transition];
	        this.actionQueue.push(action);
	        this.callbackQueue.push(callback);
	        if (!this.currentAction) _loadNext.call(this);
	        return this;
	    };
	
	    /**
	     * Cancel all transitions and reset to a stable state
	     *
	     * @method reset
	     *
	     * @param {number|Array.Number|Object.<number, number>} startState
	     *    stable state to set to
	     */
	    Transitionable.prototype.reset = function reset(startState, startVelocity) {
	        this._currentMethod = null;
	        this._engineInstance = null;
	        this._callback = undefined;
	        this.state = startState;
	        this.velocity = startVelocity;
	        this.currentAction = null;
	        this.actionQueue = [];
	        this.callbackQueue = [];
	    };
	
	    /**
	     * Add delay action to the pending action queue queue.
	     *
	     * @method delay
	     *
	     * @param {number} duration delay time (ms)
	     * @param {function} callback Zero-argument function to call on observed
	     *    completion (t=1)
	     */
	    Transitionable.prototype.delay = function delay(duration, callback) {
	        var endValue;
	        if (this.actionQueue.length) endValue = this.actionQueue[this.actionQueue.length - 1][0];
	        else if (this.currentAction) endValue = this.currentAction[0];
	        else endValue = this.get();
	
	        return this.set(endValue, { duration: duration,
	            curve: function() {
	                return 0;
	            }},
	            callback
	        );
	    };
	
	    /**
	     * Get interpolated state of current action at provided time. If the last
	     *    action has completed, invoke its callback.
	     *
	     * @method get
	     *
	     * @param {number=} timestamp Evaluate the curve at a normalized version of this
	     *    time. If omitted, use current time. (Unix epoch time)
	     * @return {number|Object.<number|string, number>} beginning state
	     *    interpolated to this point in time.
	     */
	    Transitionable.prototype.get = function get(timestamp) {
	        if (this._engineInstance) {
	            if (this._engineInstance.getVelocity)
	                this.velocity = this._engineInstance.getVelocity();
	            this.state = this._engineInstance.get(timestamp);
	        }
	        return this.state;
	    };
	
	    /**
	     * Is there at least one action pending completion?
	     *
	     * @method isActive
	     *
	     * @return {boolean}
	     */
	    Transitionable.prototype.isActive = function isActive() {
	        return !!this.currentAction;
	    };
	
	    /**
	     * Halt transition at current state and erase all pending actions.
	     *
	     * @method halt
	     */
	    Transitionable.prototype.halt = function halt() {
	        return this.set(this.get());
	    };
	
	    module.exports = Transitionable;


/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: david@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2015
	 */
	/*eslint-disable new-cap */
	    var Utility = __webpack_require__(232);
	
	    /**
	     * Transition meta-method to support transitioning multiple
	     *   values with scalar-only methods.
	     *
	     *
	     * @class MultipleTransition
	     * @constructor
	     *
	     * @param {Object} method Transionable class to multiplex
	     */
	    function MultipleTransition(method) {
	        this.method = method;
	        this._instances = [];
	        this.state = [];
	    }
	
	    MultipleTransition.SUPPORTS_MULTIPLE = true;
	
	    /**
	     * Get the state of each transition.
	     *
	     * @method get
	     *
	     * @return state {Number|Array} state array
	     */
	    MultipleTransition.prototype.get = function get() {
	        for (var i = 0; i < this._instances.length; i++) {
	            this.state[i] = this._instances[i].get();
	        }
	        return this.state;
	    };
	
	    /**
	     * Set the end states with a shared transition, with optional callback.
	     *
	     * @method set
	     *
	     * @param {Number|Array} endState Final State.  Use a multi-element argument for multiple transitions.
	     * @param {Object} transition Transition definition, shared among all instances
	     * @param {Function} callback called when all endStates have been reached.
	     */
	    MultipleTransition.prototype.set = function set(endState, transition, callback) {
	        var _allCallback = Utility.after(endState.length, callback);
	        for (var i = 0; i < endState.length; i++) {
	            if (!this._instances[i]) this._instances[i] = new (this.method)();
	            this._instances[i].set(endState[i], transition, _allCallback);
	        }
	    };
	
	    /**
	     * Reset all transitions to start state.
	     *
	     * @method reset
	     *
	     * @param  {Number|Array} startState Start state
	     */
	    MultipleTransition.prototype.reset = function reset(startState) {
	        for (var i = 0; i < startState.length; i++) {
	            if (!this._instances[i]) this._instances[i] = new (this.method)();
	            this._instances[i].reset(startState[i]);
	        }
	    };
	
	    module.exports = MultipleTransition;


/***/ },
/* 232 */
/***/ function(module, exports) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2015
	 */
	
	    /**
	     * This namespace holds standalone functionality.
	     *  Currently includes name mapping for transition curves,
	     *  name mapping for origin pairs, and the after() function.
	     *
	     * @class Utility
	     * @static
	     */
	    var Utility = {};
	
	    /**
	     * Table of direction array positions
	     *
	     * @property {object} Direction
	     * @final
	     */
	    Utility.Direction = {
	        X: 0,
	        Y: 1,
	        Z: 2
	    };
	
	    /**
	     * Return wrapper around callback function. Once the wrapper is called N
	     *   times, invoke the callback function. Arguments and scope preserved.
	     *
	     * @method after
	     *
	     * @param {number} count number of calls before callback function invoked
	     * @param {Function} callback wrapped callback function
	     *
	     * @return {function} wrapped callback with coundown feature
	     */
	    Utility.after = function after(count, callback) {
	        var counter = count;
	        return function() {
	            counter--;
	            if (counter === 0) callback.apply(this, arguments);
	        };
	    };
	
	    /**
	     * Load a URL and return its contents in a callback
	     *
	     * @method loadURL
	     *
	     * @param {string} url URL of object
	     * @param {function} callback callback to dispatch with content
	     */
	    Utility.loadURL = function loadURL(url, callback) {
	        var xhr = new XMLHttpRequest();
	        xhr.onreadystatechange = function onreadystatechange() {
	            if (this.readyState === 4) {
	                if (callback) callback(this.responseText);
	            }
	        };
	        xhr.open('GET', url);
	        xhr.send();
	    };
	
	    /**
	     * Create a document fragment from a string of HTML
	     *
	     * @method createDocumentFragmentFromHTML
	     *
	     * @param {string} html HTML to convert to DocumentFragment
	     *
	     * @return {DocumentFragment} DocumentFragment representing input HTML
	     */
	    Utility.createDocumentFragmentFromHTML = function createDocumentFragmentFromHTML(html) {
	        var element = document.createElement('div');
	        element.innerHTML = html;
	        var result = document.createDocumentFragment();
	        while (element.hasChildNodes()) result.appendChild(element.firstChild);
	        return result;
	    };
	
	    /*
	     *  Deep clone an object.
	     *  @param b {Object} Object to clone
	     *  @return a {Object} Cloned object.
	     */
	    Utility.clone = function clone(b) {
	        var a;
	        if (typeof b === 'object') {
	            a = (b instanceof Array) ? [] : {};
	            for (var key in b) {
	                if (typeof b[key] === 'object' && b[key] !== null) {
	                    if (b[key] instanceof Array) {
	                        a[key] = new Array(b[key].length);
	                        for (var i = 0; i < b[key].length; i++) {
	                            a[key][i] = Utility.clone(b[key][i]);
	                        }
	                    }
	                    else {
	                      a[key] = Utility.clone(b[key]);
	                    }
	                }
	                else {
	                    a[key] = b[key];
	                }
	            }
	        }
	        else {
	            a = b;
	        }
	        return a;
	    };
	
	    module.exports = Utility;


/***/ },
/* 233 */
/***/ function(module, exports) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: david@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2015
	 */
	
	
	    /**
	     *
	     * A state maintainer for a smooth transition between
	     *    numerically-specified states.  Example numeric states include floats or
	     *    Transfornm objects.
	     *
	     *    An initial state is set with the constructor or set(startValue). A
	     *    corresponding end state and transition are set with set(endValue,
	     *    transition). Subsequent calls to set(endValue, transition) begin at
	     *    the last state. Calls to get(timestamp) provide the _interpolated state
	     *    along the way.
	     *
	     *   Note that there is no event loop here - calls to get() are the only way
	     *    to find out state projected to the current (or provided) time and are
	     *    the only way to trigger callbacks. Usually this kind of object would
	     *    be part of the render() path of a visible component.
	     *
	     * @class TweenTransition
	     * @constructor
	     *
	     * @param {Object} options TODO
	     *    beginning state
	     */
	    function TweenTransition(options) {
	        this.options = Object.create(TweenTransition.DEFAULT_OPTIONS);
	        if (options) this.setOptions(options);
	
	        this._startTime = 0;
	        this._startValue = 0;
	        this._updateTime = 0;
	        this._endValue = 0;
	        this._curve = undefined;
	        this._duration = 0;
	        this._active = false;
	        this._callback = undefined;
	        this.state = 0;
	        this.velocity = undefined;
	    }
	
	    /**
	     * Transition curves mapping independent variable t from domain [0,1] to a
	     *    range within [0,1]. Includes functions 'linear', 'easeIn', 'easeOut',
	     *    'easeInOut', 'easeOutBounce', 'spring'.
	     *
	     * @property {object} Curve
	     * @final
	     */
	    TweenTransition.Curves = {
	        linear: function(t) {
	            return t;
	        },
	        easeIn: function(t) {
	            return t*t;
	        },
	        easeOut: function(t) {
	            return t*(2-t);
	        },
	        easeInOut: function(t) {
	            if (t <= 0.5) return 2*t*t;
	            else return -2*t*t + 4*t - 1;
	        },
	        easeOutBounce: function(t) {
	            return t*(3 - 2*t);
	        },
	        spring: function(t) {
	            return (1 - t) * Math.sin(6 * Math.PI * t) + t;
	        }
	    };
	
	    TweenTransition.SUPPORTS_MULTIPLE = true;
	    TweenTransition.DEFAULT_OPTIONS = {
	        curve: TweenTransition.Curves.linear,
	        duration: 500,
	        speed: 0 /* considered only if positive */
	    };
	
	    var registeredCurves = {};
	
	    /**
	     * Add "unit" curve to internal dictionary of registered curves.
	     *
	     * @method registerCurve
	     *
	     * @static
	     *
	     * @param {string} curveName dictionary key
	     * @param {unitCurve} curve function of one numeric variable mapping [0,1]
	     *    to range inside [0,1]
	     * @return {boolean} false if key is taken, else true
	     */
	    TweenTransition.registerCurve = function registerCurve(curveName, curve) {
	        if (!registeredCurves[curveName]) {
	            registeredCurves[curveName] = curve;
	            return true;
	        }
	        else {
	            return false;
	        }
	    };
	
	    /**
	     * Remove object with key "curveName" from internal dictionary of registered
	     *    curves.
	     *
	     * @method unregisterCurve
	     *
	     * @static
	     *
	     * @param {string} curveName dictionary key
	     * @return {boolean} false if key has no dictionary value
	     */
	    TweenTransition.unregisterCurve = function unregisterCurve(curveName) {
	        if (registeredCurves[curveName]) {
	            delete registeredCurves[curveName];
	            return true;
	        }
	        else {
	            return false;
	        }
	    };
	
	    /**
	     * Retrieve function with key "curveName" from internal dictionary of
	     *    registered curves. Default curves are defined in the
	     *    TweenTransition.Curves array, where the values represent
	     *    unitCurve functions.
	     *
	     * @method getCurve
	     *
	     * @static
	     *
	     * @param {string} curveName dictionary key
	     * @return {unitCurve} curve function of one numeric variable mapping [0,1]
	     *    to range inside [0,1]
	     */
	    TweenTransition.getCurve = function getCurve(curveName) {
	        var curve = registeredCurves[curveName];
	        if (curve !== undefined) return curve;
	        else throw new Error('curve not registered');
	    };
	
	    /**
	     * Retrieve all available curves.
	     *
	     * @method getCurves
	     *
	     * @static
	     *
	     * @return {object} curve functions of one numeric variable mapping [0,1]
	     *    to range inside [0,1]
	     */
	    TweenTransition.getCurves = function getCurves() {
	        return registeredCurves;
	    };
	
	     // Interpolate: If a linear function f(0) = a, f(1) = b, then return f(t)
	    function _interpolate(a, b, t) {
	        return ((1 - t) * a) + (t * b);
	    }
	
	    function _clone(obj) {
	        if (obj instanceof Object) {
	            if (obj instanceof Array) return obj.slice(0);
	            else return Object.create(obj);
	        }
	        else return obj;
	    }
	
	    // Fill in missing properties in "transition" with those in defaultTransition, and
	    //   convert internal named curve to function object, returning as new
	    //   object.
	    function _normalize(transition, defaultTransition) {
	        var result = {curve: defaultTransition.curve};
	        if (defaultTransition.duration) result.duration = defaultTransition.duration;
	        if (defaultTransition.speed) result.speed = defaultTransition.speed;
	        if (transition instanceof Object) {
	            if (transition.duration !== undefined) result.duration = transition.duration;
	            if (transition.curve) result.curve = transition.curve;
	            if (transition.speed) result.speed = transition.speed;
	        }
	        if (typeof result.curve === 'string') result.curve = TweenTransition.getCurve(result.curve);
	        return result;
	    }
	
	    /**
	     * Set internal options, overriding any default options.
	     *
	     * @method setOptions
	     *
	     *
	     * @param {Object} options options object
	     * @param {Object} [options.curve] function mapping [0,1] to [0,1] or identifier
	     * @param {Number} [options.duration] duration in ms
	     * @param {Number} [options.speed] speed in pixels per ms
	     */
	    TweenTransition.prototype.setOptions = function setOptions(options) {
	        if (options.curve !== undefined) this.options.curve = options.curve;
	        if (options.duration !== undefined) this.options.duration = options.duration;
	        if (options.speed !== undefined) this.options.speed = options.speed;
	    };
	
	    /**
	     * Add transition to end state to the queue of pending transitions. Special
	     *    Use: calling without a transition resets the object to that state with
	     *    no pending actions
	     *
	     * @method set
	     *
	     *
	     * @param {number|FamousMatrix|Array.Number|Object.<number, number>} endValue
	     *    end state to which we _interpolate
	     * @param {transition=} transition object of type {duration: number, curve:
	     *    f[0,1] -> [0,1] or name}. If transition is omitted, change will be
	     *    instantaneous.
	     * @param {function()=} callback Zero-argument function to call on observed
	     *    completion (t=1)
	     */
	    TweenTransition.prototype.set = function set(endValue, transition, callback) {
	        if (!transition) {
	            this.reset(endValue);
	            if (callback) callback();
	            return;
	        }
	
	        this._startValue = _clone(this.get());
	        transition = _normalize(transition, this.options);
	        if (transition.speed) {
	            var startValue = this._startValue;
	            if (startValue instanceof Object) {
	                var variance = 0;
	                for (var i in startValue) variance += (endValue[i] - startValue[i]) * (endValue[i] - startValue[i]);
	                transition.duration = Math.sqrt(variance) / transition.speed;
	            }
	            else {
	                transition.duration = Math.abs(endValue - startValue) / transition.speed;
	            }
	        }
	
	        this._startTime = Date.now();
	        this._endValue = _clone(endValue);
	        this._startVelocity = _clone(transition.velocity);
	        this._duration = transition.duration;
	        this._curve = transition.curve;
	        this._active = true;
	        this._callback = callback;
	    };
	
	    /**
	     * Cancel all transitions and reset to a stable state
	     *
	     * @method reset
	     *
	     * @param {number|Array.Number|Object.<number, number>} startValue
	     *    starting state
	     * @param {number} startVelocity
	     *    starting velocity
	     */
	    TweenTransition.prototype.reset = function reset(startValue, startVelocity) {
	        if (this._callback) {
	            var callback = this._callback;
	            this._callback = undefined;
	            callback();
	        }
	        this.state = _clone(startValue);
	        this.velocity = _clone(startVelocity);
	        this._startTime = 0;
	        this._duration = 0;
	        this._updateTime = 0;
	        this._startValue = this.state;
	        this._startVelocity = this.velocity;
	        this._endValue = this.state;
	        this._active = false;
	    };
	
	    /**
	     * Get current velocity
	     *
	     * @method getVelocity
	     *
	     * @returns {Number} velocity
	     */
	    TweenTransition.prototype.getVelocity = function getVelocity() {
	        return this.velocity;
	    };
	
	    /**
	     * Get interpolated state of current action at provided time. If the last
	     *    action has completed, invoke its callback.
	     *
	     * @method get
	     *
	     *
	     * @param {number=} timestamp Evaluate the curve at a normalized version of this
	     *    time. If omitted, use current time. (Unix epoch time)
	     * @return {number|Object.<number|string, number>} beginning state
	     *    _interpolated to this point in time.
	     */
	    TweenTransition.prototype.get = function get(timestamp) {
	        this.update(timestamp);
	        return this.state;
	    };
	
	    function _calculateVelocity(current, start, curve, duration, t) {
	        var velocity;
	        var eps = 1e-7;
	        var speed = (curve(t) - curve(t - eps)) / eps;
	        if (current instanceof Array) {
	            velocity = [];
	            for (var i = 0; i < current.length; i++){
	                if (typeof current[i] === 'number')
	                    velocity[i] = speed * (current[i] - start[i]) / duration;
	                else
	                    velocity[i] = 0;
	            }
	
	        }
	        else velocity = speed * (current - start) / duration;
	        return velocity;
	    }
	
	    function _calculateState(start, end, t) {
	        var state;
	        if (start instanceof Array) {
	            state = [];
	            for (var i = 0; i < start.length; i++) {
	                if (typeof start[i] === 'number')
	                    state[i] = _interpolate(start[i], end[i], t);
	                else
	                    state[i] = start[i];
	            }
	        }
	        else state = _interpolate(start, end, t);
	        return state;
	    }
	
	    /**
	     * Update internal state to the provided timestamp. This may invoke the last
	     *    callback and begin a new action.
	     *
	     * @method update
	     *
	     *
	     * @param {number=} timestamp Evaluate the curve at a normalized version of this
	     *    time. If omitted, use current time. (Unix epoch time)
	     */
	    TweenTransition.prototype.update = function update(timestamp) {
	        if (!this._active) {
	            if (this._callback) {
	                var callback = this._callback;
	                this._callback = undefined;
	                callback();
	            }
	            return;
	        }
	
	        if (!timestamp) timestamp = Date.now();
	        if (this._updateTime >= timestamp) return;
	        this._updateTime = timestamp;
	
	        var timeSinceStart = timestamp - this._startTime;
	        if (timeSinceStart >= this._duration) {
	            this.state = this._endValue;
	            this.velocity = _calculateVelocity(this.state, this._startValue, this._curve, this._duration, 1);
	            this._active = false;
	        }
	        else if (timeSinceStart < 0) {
	            this.state = this._startValue;
	            this.velocity = this._startVelocity;
	        }
	        else {
	            var t = timeSinceStart / this._duration;
	            this.state = _calculateState(this._startValue, this._endValue, this._curve(t));
	            this.velocity = _calculateVelocity(this.state, this._startValue, this._curve, this._duration, t);
	        }
	    };
	
	    /**
	     * Is there at least one action pending completion?
	     *
	     * @method isActive
	     *
	     *
	     * @return {boolean}
	     */
	    TweenTransition.prototype.isActive = function isActive() {
	        return this._active;
	    };
	
	    /**
	     * Halt transition at current state and erase all pending actions.
	     *
	     * @method halt
	     *
	     */
	    TweenTransition.prototype.halt = function halt() {
	        this.reset(this.get());
	    };
	
	    // Register all the default curves
	    TweenTransition.registerCurve('linear', TweenTransition.Curves.linear);
	    TweenTransition.registerCurve('easeIn', TweenTransition.Curves.easeIn);
	    TweenTransition.registerCurve('easeOut', TweenTransition.Curves.easeOut);
	    TweenTransition.registerCurve('easeInOut', TweenTransition.Curves.easeInOut);
	    TweenTransition.registerCurve('easeOutBounce', TweenTransition.Curves.easeOutBounce);
	    TweenTransition.registerCurve('spring', TweenTransition.Curves.spring);
	
	    TweenTransition.customCurve = function customCurve(v1, v2) {
	        v1 = v1 || 0; v2 = v2 || 0;
	        return function(t) {
	            return v1*t + (-2*v1 - v2 + 3)*t*t + (v1 + v2 - 2)*t*t*t;
	        };
	    };
	
	    module.exports = TweenTransition;


/***/ },
/* 234 */
/***/ function(module, exports) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: david@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2015
	 */
	
	
	    /**
	     * A library of curves which map an animation explicitly as a function of time.
	     *
	     * @class Easing
	     */
	    var Easing = {
	
	        /**
	         * @property inQuad
	         * @static
	         */
	        inQuad: function(t) {
	            return t*t;
	        },
	
	        /**
	         * @property outQuad
	         * @static
	         */
	        outQuad: function(t) {
	            return -(t-=1)*t+1;
	        },
	
	        /**
	         * @property inOutQuad
	         * @static
	         */
	        inOutQuad: function(t) {
	            if ((t/=.5) < 1) return .5*t*t;
	            return -.5*((--t)*(t-2) - 1);
	        },
	
	        /**
	         * @property inCubic
	         * @static
	         */
	        inCubic: function(t) {
	            return t*t*t;
	        },
	
	        /**
	         * @property outCubic
	         * @static
	         */
	        outCubic: function(t) {
	            return ((--t)*t*t + 1);
	        },
	
	        /**
	         * @property inOutCubic
	         * @static
	         */
	        inOutCubic: function(t) {
	            if ((t/=.5) < 1) return .5*t*t*t;
	            return .5*((t-=2)*t*t + 2);
	        },
	
	        /**
	         * @property inQuart
	         * @static
	         */
	        inQuart: function(t) {
	            return t*t*t*t;
	        },
	
	        /**
	         * @property outQuart
	         * @static
	         */
	        outQuart: function(t) {
	            return -((--t)*t*t*t - 1);
	        },
	
	        /**
	         * @property inOutQuart
	         * @static
	         */
	        inOutQuart: function(t) {
	            if ((t/=.5) < 1) return .5*t*t*t*t;
	            return -.5 * ((t-=2)*t*t*t - 2);
	        },
	
	        /**
	         * @property inQuint
	         * @static
	         */
	        inQuint: function(t) {
	            return t*t*t*t*t;
	        },
	
	        /**
	         * @property outQuint
	         * @static
	         */
	        outQuint: function(t) {
	            return ((--t)*t*t*t*t + 1);
	        },
	
	        /**
	         * @property inOutQuint
	         * @static
	         */
	        inOutQuint: function(t) {
	            if ((t/=.5) < 1) return .5*t*t*t*t*t;
	            return .5*((t-=2)*t*t*t*t + 2);
	        },
	
	        /**
	         * @property inSine
	         * @static
	         */
	        inSine: function(t) {
	            return -1.0*Math.cos(t * (Math.PI/2)) + 1.0;
	        },
	
	        /**
	         * @property outSine
	         * @static
	         */
	        outSine: function(t) {
	            return Math.sin(t * (Math.PI/2));
	        },
	
	        /**
	         * @property inOutSine
	         * @static
	         */
	        inOutSine: function(t) {
	            return -.5*(Math.cos(Math.PI*t) - 1);
	        },
	
	        /**
	         * @property inExpo
	         * @static
	         */
	        inExpo: function(t) {
	            return (t===0) ? 0.0 : Math.pow(2, 10 * (t - 1));
	        },
	
	        /**
	         * @property outExpo
	         * @static
	         */
	        outExpo: function(t) {
	            return (t===1.0) ? 1.0 : (-Math.pow(2, -10 * t) + 1);
	        },
	
	        /**
	         * @property inOutExpo
	         * @static
	         */
	        inOutExpo: function(t) {
	            if (t===0) return 0.0;
	            if (t===1.0) return 1.0;
	            if ((t/=.5) < 1) return .5 * Math.pow(2, 10 * (t - 1));
	            return .5 * (-Math.pow(2, -10 * --t) + 2);
	        },
	
	        /**
	         * @property inCirc
	         * @static
	         */
	        inCirc: function(t) {
	            return -(Math.sqrt(1 - t*t) - 1);
	        },
	
	        /**
	         * @property outCirc
	         * @static
	         */
	        outCirc: function(t) {
	            return Math.sqrt(1 - (--t)*t);
	        },
	
	        /**
	         * @property inOutCirc
	         * @static
	         */
	        inOutCirc: function(t) {
	            if ((t/=.5) < 1) return -.5 * (Math.sqrt(1 - t*t) - 1);
	            return .5 * (Math.sqrt(1 - (t-=2)*t) + 1);
	        },
	
	        /**
	         * @property inElastic
	         * @static
	         */
	        inElastic: function(t) {
	            var s=1.70158;var p=0;var a=1.0;
	            if (t===0) return 0.0;  if (t===1) return 1.0;  if (!p) p=.3;
	            s = p/(2*Math.PI) * Math.asin(1.0/a);
	            return -(a*Math.pow(2,10*(t-=1)) * Math.sin((t-s)*(2*Math.PI)/ p));
	        },
	
	        /**
	         * @property outElastic
	         * @static
	         */
	        outElastic: function(t) {
	            var s=1.70158;var p=0;var a=1.0;
	            if (t===0) return 0.0;  if (t===1) return 1.0;  if (!p) p=.3;
	            s = p/(2*Math.PI) * Math.asin(1.0/a);
	            return a*Math.pow(2,-10*t) * Math.sin((t-s)*(2*Math.PI)/p) + 1.0;
	        },
	
	        /**
	         * @property inOutElastic
	         * @static
	         */
	        inOutElastic: function(t) {
	            var s=1.70158;var p=0;var a=1.0;
	            if (t===0) return 0.0;  if ((t/=.5)===2) return 1.0;  if (!p) p=(.3*1.5);
	            s = p/(2*Math.PI) * Math.asin(1.0/a);
	            if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin((t-s)*(2*Math.PI)/p));
	            return a*Math.pow(2,-10*(t-=1)) * Math.sin((t-s)*(2*Math.PI)/p)*.5 + 1.0;
	        },
	
	        /**
	         * @property inBack
	         * @static
	         */
	        inBack: function(t, s) {
	            if (s === undefined) s = 1.70158;
	            return t*t*((s+1)*t - s);
	        },
	
	        /**
	         * @property outBack
	         * @static
	         */
	        outBack: function(t, s) {
	            if (s === undefined) s = 1.70158;
	            return ((--t)*t*((s+1)*t + s) + 1);
	        },
	
	        /**
	         * @property inOutBack
	         * @static
	         */
	        inOutBack: function(t, s) {
	            if (s === undefined) s = 1.70158;
	            if ((t/=.5) < 1) return .5*(t*t*(((s*=(1.525))+1)*t - s));
	            return .5*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2);
	        },
	
	        /**
	         * @property inBounce
	         * @static
	         */
	        inBounce: function(t) {
	            return 1.0 - Easing.outBounce(1.0-t);
	        },
	
	        /**
	         * @property outBounce
	         * @static
	         */
	        outBounce: function(t) {
	            if (t < (1/2.75)) {
	                return (7.5625*t*t);
	            } else if (t < (2/2.75)) {
	                return (7.5625*(t-=(1.5/2.75))*t + .75);
	            } else if (t < (2.5/2.75)) {
	                return (7.5625*(t-=(2.25/2.75))*t + .9375);
	            } else {
	                return (7.5625*(t-=(2.625/2.75))*t + .984375);
	            }
	        },
	
	        /**
	         * @property inOutBounce
	         * @static
	         */
	        inOutBounce: function(t) {
	            if (t < .5) return Easing.inBounce(t*2) * .5;
	            return Easing.outBounce(t*2-1.0) * .5 + .5;
	        }
	    };
	
	    module.exports = Easing;


/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Molecule = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * LICENSE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This Source Code Form is subject to the terms of the Mozilla Public
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * License, v. 2.0. If a copy of the MPL was not distributed with this
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	var _Modifier = __webpack_require__(236);
	
	var _Modifier2 = _interopRequireDefault(_Modifier);
	
	var _RenderNode = __webpack_require__(238);
	
	var _RenderNode2 = _interopRequireDefault(_RenderNode);
	
	var _TransitionableTransform = __webpack_require__(237);
	
	var _TransitionableTransform2 = _interopRequireDefault(_TransitionableTransform);
	
	var _EventHandler = __webpack_require__(241);
	
	var _EventHandler2 = _interopRequireDefault(_EventHandler);
	
	var _utils = __webpack_require__(243);
	
	__webpack_require__(248);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Molecules are the basic building blocks of all UI components. Molecules
	 * extend [famous/src/core/RenderNode](#famous/src/core/RenderNode), so they can be
	 * added to any `RenderNode` of a famo.us render tree, and by default they will
	 * also accept anything that a normal Famo.us `RenderNode` can accept via the
	 * `add` method.  Classes that extend from `Molecule` might override
	 * `RenderNode.add` in order to accept things like arrays of renderables in
	 * stead of a single renderable.
	 *
	 * Molecules encapsulate the basic things you need for a component -- a
	 * [famous/src/transitions/TransitionableTransform](#famous/src/transitions/TransitionableTransform)
	 * for positioning things in space, and a [famous/src/core/EventHandler](#famous/src/core/EventHandler)
	 * for capturing user interaction -- exposing a unified API for working with these
	 * things. For now, [famous/src/core/Modifier](#famous/src/core/Modifier) is used as the interface
	 * for applying transforms and sizing, but this will change in Mixed Mode
	 * Famo.us.
	 *
	 * All components extend Molecule, but at the same time they can also use any
	 * number of Molecules internally to do nice things like create layouts and
	 * position multiple things in space.
	 *
	 * @class Molecule
	 * @extends {module: famous/src/core/RenderNode}
	 */
	
	var Molecule = exports.Molecule = function () {
	
	    /**
	     * Creates a new `Molecule` and applies `initialOptions` to it's internal
	     * `famous/src/core/Modifier`. See [famous/src/core/Modifier](#famous/src/core/Modifier)
	     * for details on what options you can pass.
	     *
	     * Note: Mixed Mode Famo.us does away with Modifiers, so this API will
	     * change slightly, but the change will be in such a way that APIs of
	     * higher level classes won't change because of this. One of the biggest
	     * changes in Mixed Mode will be that `size` will be set only on a
	     * per-Surface basis as far as a render tree is concerned. So if you
	     * normally put multiple `Surface` instances into a `Modifier` that has a
	     * size, then instead you'll have to explicitly assign a `size` to each
	     * `Surface`. This is a good thing, and makes for a cleaner and easier to
	     * use render tree with a separation of concerns from classes that can
	     * handle boundaries and group sizing. `Molecule` might then be an example
	     * of such a class with it's own size API.
	     *
	     * @constructor
	     * @param {Object} initialOptions The options to initialize this Molecule's `Modifier` with.
	     */
	
	    function Molecule(initialOptions) {
	        _classCallCheck(this, Molecule);
	
	        console.log('Molecule constructor.');
	
	        this.node = new _RenderNode2.default();
	
	        // "private" stuff. Not really, but regard it like so. For example, if
	        // you see something like obj._.someVariable then you're accessing
	        // internal stuff that wasn't designed to be accessed directly, and any
	        // problem you enounter with that is your own problem. :)
	        //
	        // TODO: Use a WeakMap to store these at some point.
	        this._ = {
	            options: {}, // set and get with this.options
	            defaultOptions: {}
	        };
	
	        // Add default values for this Molecule
	        // TODO: Make default options static for the class.
	        (0, _utils.simpleExtend)(this._.defaultOptions, {
	            align: [0.5, 0.5],
	            origin: [0.5, 0.5],
	            transform: new _TransitionableTransform2.default(),
	            handler: new _EventHandler2.default()
	        });
	
	        // set the user's initial options. This automatically creates
	        // this.modifier, and adds it to this (don't forget, *this* is a
	        // RenderNode, so a Molecule can add things to itself).
	        //
	        // NOTE: this.options is a setter property. This statement applies all
	        // relevant properties to this.modifier.
	        this.options = initialOptions;
	    }
	
	    /**
	     * @property {Object} options The Molecule's options, which get applied to
	     * `this.modifier`. This may change with Mixed Mode. Setting this property
	     * overrides existing options. To extend existing options with new options,
	     * use `setOptions` instead.  Unspecified options will be set to their default
	     * values.
	     *
	     * Note: Anytime `this.options` is assigned a new value, `this.modifier` is set
	     * to a new [famous/src/core/Modifier](#famous/src/core/Modifier).
	     */
	
	
	    _createClass(Molecule, [{
	        key: 'setOptions',
	
	
	        /**
	         * Compounds `newOptions` into the existing options, similar to extending an
	         * object and overriding only the desired properties. To override all
	         * options with a set of new options, set `this.options` directly.
	         *
	         * An example of setting just a single option without erasing other options:
	         *
	         * ```js
	         * var myMolecule = new Molecule()
	         * myMolecule.setOptions({
	         *   align: [0.2, 0.8]
	         * })
	         * ```
	         *
	         * @param {Object} newOptions An object containing the new options to apply to this `Molecule`.
	         */
	        value: function setOptions(newOptions) {
	            if (typeof newOptions == 'undefined' || newOptions.constructor.name != "Object") newOptions = {};
	
	            for (var prop in newOptions) {
	                // Subject to change when Famo.us API changes.
	                if (_Modifier2.default.prototype['' + prop + 'From']) {
	                    this.modifier['' + prop + 'From'](newOptions[prop]);
	                }
	
	                this._.options[prop] = newOptions[prop];
	            }
	        }
	
	        /**
	         * Sets all options back to their defaults.
	         *
	         * Note: Anytime this is called, `this.modifier` is set to a new
	         * [famous/src/core/Modifier](#famous/src/core/Modifier) having the default
	         * options.
	         */
	
	    }, {
	        key: 'resetOptions',
	        value: function resetOptions() {
	            this.modifier = new _Modifier2.default();
	            this.node.set(this.modifier);
	            this.setOptions(this._.defaultOptions);
	        }
	
	        /**
	         * Forwards events from this Molecule's [famous/src/core/EventHandler](#famous/src/core/EventHandler) to the given
	         * target, which can be another `EventHandler` or `Molecule`.
	         *
	         * This method is equivalent to [famous/src/core/EventHandler.pipe](#famous/src/core/EventHandler.pipe),
	         * acting upon `this.handler`.
	         *
	         * TODO v0.1.0: Let this method accept a `Molecule`, then stop doing `pipe(this.options.handler)` in other places
	         */
	
	    }, {
	        key: 'pipe',
	        value: function pipe() {
	            var args = Array.prototype.splice.call(arguments, 0);
	            return this.options.handler.pipe.apply(this.options.handler, args);
	        }
	
	        /**
	         * Stops events from this Molecule's [famous/src/core/EventHandler](#famous/src/core/EventHandler)
	         * from being sent to the given target.
	         *
	         * This method is equivalent to [famous/src/core/EventHandler.unpipe](#famous/src/core/EventHandler.unpipe),
	         * acting upon `this.handler`.
	         *
	         * TODO v0.1.0: Let this method accept a `Molecule`, then stop doing `unpipe(this.options.handler)` in other places
	         */
	
	    }, {
	        key: 'unpipe',
	        value: function unpipe() {
	            var args = Array.prototype.splice.call(arguments, 0);
	            return this.options.handler.unpipe.apply(this.options.handler, args);
	        }
	
	        /**
	         * Register an event handler for the specified event.
	         * See [famous/src/core/EventHandler.on](#famous/src/core/EventHandler.on).
	         */
	
	    }, {
	        key: 'on',
	        value: function on() {
	            var args = Array.prototype.splice.call(arguments, 0);
	            return this.options.handler.on.apply(this.options.handler, args);
	        }
	
	        /**
	         * Unregister an event handler for the specified event.
	         * See [famous/src/core/EventHandler.off](#famous/src/core/EventHandler.off).
	         */
	
	    }, {
	        key: 'off',
	        value: function off() {
	            var args = Array.prototype.splice.call(arguments, 0);
	            return this.options.handler.on.apply(this.options.handler, args);
	        }
	    }, {
	        key: 'options',
	        set: function set(newOptions) {
	            this.resetOptions();
	            this.setOptions(newOptions);
	        },
	        get: function get() {
	            return this._.options;
	        }
	
	        /**
	         * @property {module: famous/src/transitions/TransitionableTransform} transform
	         * The transform of this `Molecule`. The default is a
	         * [famous/src/transitions/TransitionableTransform](#famous/src/transitions/TransitionableTransform).
	         * Setting this property automatically puts the new transform into effect.
	         * See [famous/src/core/Modifier.transformFrom](#famous/src/core/Modifier.transformFrom).
	         */
	
	    }, {
	        key: 'transform',
	        set: function set(newTransform) {
	            this.setOptions({ transform: newTransform });
	        },
	        get: function get() {
	            return this.options.transform;
	        }
	    }]);
	
	    return Molecule;
	}();
	
	exports.default = Molecule;

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2015
	 */
	
	    var Transform = __webpack_require__(229);
	
	    /* TODO: remove these dependencies when deprecation complete */
	    var Transitionable = __webpack_require__(230);
	    var TransitionableTransform = __webpack_require__(237);
	
	    /**
	     *
	     *  A collection of visual changes to be
	     *    applied to another renderable component. This collection includes a
	     *    transform matrix, an opacity constant, a size, an origin specifier.
	     *    Modifier objects can be added to any RenderNode or object
	     *    capable of displaying renderables.  The Modifier's children and descendants
	     *    are transformed by the amounts specified in the Modifier's properties.
	     *
	     * @class Modifier
	     * @constructor
	     * @param {Object} [options] overrides of default options
	     * @param {Transform} [options.transform] affine transformation matrix
	     * @param {Number} [options.opacity]
	     * @param {Array.Number} [options.origin] origin adjustment
	     * @param {Array.Number} [options.size] size to apply to descendants
	     */
	    function Modifier(options) {
	        this._transformGetter = null;
	        this._opacityGetter = null;
	        this._originGetter = null;
	        this._alignGetter = null;
	        this._sizeGetter = null;
	        this._proportionGetter = null;
	
	        /* TODO: remove this when deprecation complete */
	        this._legacyStates = {};
	
	        this._output = {
	            transform: Transform.identity,
	            opacity: 1,
	            origin: null,
	            align: null,
	            size: null,
	            proportions: null,
	            target: null
	        };
	
	        if (options) {
	            if (options.transform) this.transformFrom(options.transform);
	            if (options.opacity !== undefined) this.opacityFrom(options.opacity);
	            if (options.origin) this.originFrom(options.origin);
	            if (options.align) this.alignFrom(options.align);
	            if (options.size) this.sizeFrom(options.size);
	            if (options.proportions) this.proportionsFrom(options.proportions);
	        }
	    }
	
	    /**
	     * Function, object, or static transform matrix which provides the transform.
	     *   This is evaluated on every tick of the engine.
	     *
	     * @method transformFrom
	     *
	     * @param {Object} transform transform provider object
	     * @return {Modifier} this
	     */
	    Modifier.prototype.transformFrom = function transformFrom(transform) {
	        if (transform instanceof Function) this._transformGetter = transform;
	        else if (transform instanceof Object && transform.get) this._transformGetter = transform.get.bind(transform);
	        else {
	            this._transformGetter = null;
	            this._output.transform = transform;
	        }
	        return this;
	    };
	
	    /**
	     * Set function, object, or number to provide opacity, in range [0,1].
	     *
	     * @method opacityFrom
	     *
	     * @param {Object} opacity provider object
	     * @return {Modifier} this
	     */
	    Modifier.prototype.opacityFrom = function opacityFrom(opacity) {
	        if (opacity instanceof Function) this._opacityGetter = opacity;
	        else if (opacity instanceof Object && opacity.get) this._opacityGetter = opacity.get.bind(opacity);
	        else {
	            this._opacityGetter = null;
	            this._output.opacity = opacity;
	        }
	        return this;
	    };
	
	    /**
	     * Set function, object, or numerical array to provide origin, as [x,y],
	     *   where x and y are in the range [0,1].
	     *
	     * @method originFrom
	     *
	     * @param {Object} origin provider object
	     * @return {Modifier} this
	     */
	    Modifier.prototype.originFrom = function originFrom(origin) {
	        if (origin instanceof Function) this._originGetter = origin;
	        else if (origin instanceof Object && origin.get) this._originGetter = origin.get.bind(origin);
	        else {
	            this._originGetter = null;
	            this._output.origin = origin;
	        }
	        return this;
	    };
	
	    /**
	     * Set function, object, or numerical array to provide align, as [x,y],
	     *   where x and y are in the range [0,1].
	     *
	     * @method alignFrom
	     *
	     * @param {Object} align provider object
	     * @return {Modifier} this
	     */
	    Modifier.prototype.alignFrom = function alignFrom(align) {
	        if (align instanceof Function) this._alignGetter = align;
	        else if (align instanceof Object && align.get) this._alignGetter = align.get.bind(align);
	        else {
	            this._alignGetter = null;
	            this._output.align = align;
	        }
	        return this;
	    };
	
	    /**
	     * Set function, object, or numerical array to provide size, as [width, height].
	     *
	     * @method sizeFrom
	     *
	     * @param {Object} size provider object
	     * @return {Modifier} this
	     */
	    Modifier.prototype.sizeFrom = function sizeFrom(size) {
	        if (size instanceof Function) this._sizeGetter = size;
	        else if (size instanceof Object && size.get) this._sizeGetter = size.get.bind(size);
	        else {
	            this._sizeGetter = null;
	            this._output.size = size;
	        }
	        return this;
	    };
	
	    /**
	     * Set function, object, or numerical array to provide proportions, as [percent of width, percent of height].
	     *
	     * @method proportionsFrom
	     *
	     * @param {Object} proportions provider object
	     * @return {Modifier} this
	     */
	    Modifier.prototype.proportionsFrom = function proportionsFrom(proportions) {
	        if (proportions instanceof Function) this._proportionGetter = proportions;
	        else if (proportions instanceof Object && proportions.get) this._proportionGetter = proportions.get.bind(proportions);
	        else {
	            this._proportionGetter = null;
	            this._output.proportions = proportions;
	        }
	        return this;
	    };
	
	     /**
	     * Deprecated: Prefer transformFrom with static Transform, or use a TransitionableTransform.
	     * @deprecated
	     * @method setTransform
	     *
	     * @param {Transform} transform Transform to transition to
	     * @param {Transitionable} transition Valid transitionable object
	     * @param {Function} callback callback to call after transition completes
	     * @return {Modifier} this
	     */
	    Modifier.prototype.setTransform = function setTransform(transform, transition, callback) {
	        if (transition || this._legacyStates.transform) {
	            if (!this._legacyStates.transform) {
	                this._legacyStates.transform = new TransitionableTransform(this._output.transform);
	            }
	            if (!this._transformGetter) this.transformFrom(this._legacyStates.transform);
	
	            this._legacyStates.transform.set(transform, transition, callback);
	            return this;
	        }
	        else return this.transformFrom(transform);
	    };
	
	    /**
	     * Deprecated: Prefer opacityFrom with static opacity array, or use a Transitionable with that opacity.
	     * @deprecated
	     * @method setOpacity
	     *
	     * @param {Number} opacity Opacity value to transition to.
	     * @param {Transitionable} transition Valid transitionable object
	     * @param {Function} callback callback to call after transition completes
	     * @return {Modifier} this
	     */
	    Modifier.prototype.setOpacity = function setOpacity(opacity, transition, callback) {
	        if (transition || this._legacyStates.opacity) {
	            if (!this._legacyStates.opacity) {
	                this._legacyStates.opacity = new Transitionable(this._output.opacity);
	            }
	            if (!this._opacityGetter) this.opacityFrom(this._legacyStates.opacity);
	
	            return this._legacyStates.opacity.set(opacity, transition, callback);
	        }
	        else return this.opacityFrom(opacity);
	    };
	
	    /**
	     * Deprecated: Prefer originFrom with static origin array, or use a Transitionable with that origin.
	     * @deprecated
	     * @method setOrigin
	     *
	     * @param {Array.Number} origin two element array with values between 0 and 1.
	     * @param {Transitionable} transition Valid transitionable object
	     * @param {Function} callback callback to call after transition completes
	     * @return {Modifier} this
	     */
	    Modifier.prototype.setOrigin = function setOrigin(origin, transition, callback) {
	        /* TODO: remove this if statement when deprecation complete */
	        if (transition || this._legacyStates.origin) {
	
	            if (!this._legacyStates.origin) {
	                this._legacyStates.origin = new Transitionable(this._output.origin || [0, 0]);
	            }
	            if (!this._originGetter) this.originFrom(this._legacyStates.origin);
	
	            this._legacyStates.origin.set(origin, transition, callback);
	            return this;
	        }
	        else return this.originFrom(origin);
	    };
	
	    /**
	     * Deprecated: Prefer alignFrom with static align array, or use a Transitionable with that align.
	     * @deprecated
	     * @method setAlign
	     *
	     * @param {Array.Number} align two element array with values between 0 and 1.
	     * @param {Transitionable} transition Valid transitionable object
	     * @param {Function} callback callback to call after transition completes
	     * @return {Modifier} this
	     */
	    Modifier.prototype.setAlign = function setAlign(align, transition, callback) {
	        /* TODO: remove this if statement when deprecation complete */
	        if (transition || this._legacyStates.align) {
	
	            if (!this._legacyStates.align) {
	                this._legacyStates.align = new Transitionable(this._output.align || [0, 0]);
	            }
	            if (!this._alignGetter) this.alignFrom(this._legacyStates.align);
	
	            this._legacyStates.align.set(align, transition, callback);
	            return this;
	        }
	        else return this.alignFrom(align);
	    };
	
	    /**
	     * Deprecated: Prefer sizeFrom with static origin array, or use a Transitionable with that size.
	     * @deprecated
	     * @method setSize
	     * @param {Array.Number} size two element array of [width, height]
	     * @param {Transitionable} transition Valid transitionable object
	     * @param {Function} callback callback to call after transition completes
	     * @return {Modifier} this
	     */
	    Modifier.prototype.setSize = function setSize(size, transition, callback) {
	        if (size && (transition || this._legacyStates.size)) {
	            if (!this._legacyStates.size) {
	                this._legacyStates.size = new Transitionable(this._output.size || [0, 0]);
	            }
	            if (!this._sizeGetter) this.sizeFrom(this._legacyStates.size);
	
	            this._legacyStates.size.set(size, transition, callback);
	            return this;
	        }
	        else return this.sizeFrom(size);
	    };
	
	    /**
	     * Deprecated: Prefer proportionsFrom with static origin array, or use a Transitionable with those proportions.
	     * @deprecated
	     * @method setProportions
	     * @param {Array.Number} proportions two element array of [percent of width, percent of height]
	     * @param {Transitionable} transition Valid transitionable object
	     * @param {Function} callback callback to call after transition completes
	     * @return {Modifier} this
	     */
	    Modifier.prototype.setProportions = function setProportions(proportions, transition, callback) {
	        if (proportions && (transition || this._legacyStates.proportions)) {
	            if (!this._legacyStates.proportions) {
	                this._legacyStates.proportions = new Transitionable(this._output.proportions || [0, 0]);
	            }
	            if (!this._proportionGetter) this.proportionsFrom(this._legacyStates.proportions);
	
	            this._legacyStates.proportions.set(proportions, transition, callback);
	            return this;
	        }
	        else return this.proportionsFrom(proportions);
	    };
	
	    /**
	     * Deprecated: Prefer to stop transform in your provider object.
	     * @deprecated
	     * @method halt
	     */
	    Modifier.prototype.halt = function halt() {
	        if (this._legacyStates.transform) this._legacyStates.transform.halt();
	        if (this._legacyStates.opacity) this._legacyStates.opacity.halt();
	        if (this._legacyStates.origin) this._legacyStates.origin.halt();
	        if (this._legacyStates.align) this._legacyStates.align.halt();
	        if (this._legacyStates.size) this._legacyStates.size.halt();
	        if (this._legacyStates.proportions) this._legacyStates.proportions.halt();
	        this._transformGetter = null;
	        this._opacityGetter = null;
	        this._originGetter = null;
	        this._alignGetter = null;
	        this._sizeGetter = null;
	        this._proportionGetter = null;
	    };
	
	    /**
	     * Deprecated: Prefer to use your provided transform or output of your transform provider.
	     * @deprecated
	     * @method getTransform
	     * @return {Object} transform provider object
	     */
	    Modifier.prototype.getTransform = function getTransform() {
	        return this._transformGetter();
	    };
	
	    /**
	     * Deprecated: Prefer to determine the end state of your transform from your transform provider
	     * @deprecated
	     * @method getFinalTransform
	     * @return {Transform} transform matrix
	     */
	    Modifier.prototype.getFinalTransform = function getFinalTransform() {
	        return this._legacyStates.transform ? this._legacyStates.transform.getFinal() : this._output.transform;
	    };
	
	    /**
	     * Deprecated: Prefer to use your provided opacity or output of your opacity provider.
	     * @deprecated
	     * @method getOpacity
	     * @return {Object} opacity provider object
	     */
	    Modifier.prototype.getOpacity = function getOpacity() {
	        return this._opacityGetter();
	    };
	
	    /**
	     * Deprecated: Prefer to use your provided origin or output of your origin provider.
	     * @deprecated
	     * @method getOrigin
	     * @return {Object} origin provider object
	     */
	    Modifier.prototype.getOrigin = function getOrigin() {
	        return this._originGetter();
	    };
	
	    /**
	     * Deprecated: Prefer to use your provided align or output of your align provider.
	     * @deprecated
	     * @method getAlign
	     * @return {Object} align provider object
	     */
	    Modifier.prototype.getAlign = function getAlign() {
	        return this._alignGetter();
	    };
	
	    /**
	     * Deprecated: Prefer to use your provided size or output of your size provider.
	     * @deprecated
	     * @method getSize
	     * @return {Object} size provider object
	     */
	    Modifier.prototype.getSize = function getSize() {
	        return this._sizeGetter ? this._sizeGetter() : this._output.size;
	    };
	
	    /**
	     * Deprecated: Prefer to use your provided proportions or output of your proportions provider.
	     * @deprecated
	     * @method getProportions
	     * @return {Object} proportions provider object
	     */
	    Modifier.prototype.getProportions = function getProportions() {
	        return this._proportionGetter ? this._proportionGetter() : this._output.proportions;
	    };
	
	    // call providers on tick to receive render spec elements to apply
	    function _update() {
	        if (this._transformGetter) this._output.transform = this._transformGetter();
	        if (this._opacityGetter) this._output.opacity = this._opacityGetter();
	        if (this._originGetter) this._output.origin = this._originGetter();
	        if (this._alignGetter) this._output.align = this._alignGetter();
	        if (this._sizeGetter) this._output.size = this._sizeGetter();
	        if (this._proportionGetter) this._output.proportions = this._proportionGetter();
	    }
	
	    /**
	     * Return render spec for this Modifier, applying to the provided
	     *    target component.  This is similar to render() for Surfaces.
	     *
	     * @private
	     * @method modify
	     *
	     * @param {Object} target (already rendered) render spec to
	     *    which to apply the transform.
	     * @return {Object} render spec for this Modifier, including the
	     *    provided target
	     */
	    Modifier.prototype.modify = function modify(target) {
	        _update.call(this);
	        this._output.target = target;
	        return this._output;
	    };
	
	    module.exports = Modifier;


/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: david@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2015
	 */
	
	    var Transitionable = __webpack_require__(230);
	    var Transform = __webpack_require__(229);
	    var Utility = __webpack_require__(232);
	
	    /**
	     * A class for transitioning the state of a Transform by transitioning the
	     * X, Y, and Z axes of it's translate, scale, skew and rotate components
	     * independently.
	     *
	     * @class TransitionableTransform
	     * @constructor
	     *
	     * @param [transform=Transform.identity] {Transform} The initial transform state
	     */
	    function TransitionableTransform(transform) {
	        this._final = Transform.identity.slice();
	
	        this._finalTranslate = [0, 0, 0];
	        this._finalRotate = [0, 0, 0];
	        this._finalSkew = [0, 0, 0];
	        this._finalScale = [1, 1, 1];
	
	        this.translate = [];
	        this.rotate    = [];
	        this.skew      = [];
	        this.scale     = [];
	
	        for (var i=0; i<3; i+=1) {
	            this.translate[i] = new Transitionable(this._finalTranslate[i]);
	            this.rotate[i]    = new Transitionable(this._finalRotate[i]);
	            this.skew[i]      = new Transitionable(this._finalSkew[i]);
	            this.scale[i]     = new Transitionable(this._finalScale[i]);
	        }
	
	        if (transform) this.set(transform);
	    }
	
	    function _build() {
	        return Transform.build({
	            translate: [this.translate[0].get(), this.translate[1].get(), this.translate[2].get()],
	            rotate:    [this.rotate[0].get(),    this.rotate[1].get(),    this.rotate[2].get()],
	            skew:      [this.skew[0].get(),      this.skew[1].get(),      this.skew[2].get()],
	            scale:     [this.scale[0].get(),     this.scale[1].get(),     this.scale[2].get()]
	        });
	    }
	
	    function _buildFinal() {
	        return Transform.build({
	            translate: this._finalTranslate,
	            rotate: this._finalRotate,
	            skew: this._finalSkew,
	            scale: this._finalScale
	        });
	    }
	
	    function _countOfType(array, type) {
	        var count = 0;
	        for (var i=0; i<array.length; i+=1) {
	            if (typeof array[i] === type+'') {
	                count+=1;
	            }
	        }
	        return count;
	    }
	
	    /**
	     * An optimized way of setting only the translation component of a Transform. Axes who's values are null will not be affected.
	     *
	     * @method setTranslate
	     * @chainable
	     *
	     * @param translate {Array}     New translation state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setTranslate = function setTranslate(translate, transition, callback) {
	        var numberOfAxes = _countOfType(translate, 'number');
	        var _callback = callback ? Utility.after(numberOfAxes, callback) : null;
	        for (var i=0; i<translate.length; i+=1) {
	            if (typeof translate[i] === 'number') {
	                this.translate[i].set(translate[i], transition, _callback);
	                this._finalTranslate[i] = translate[i];
	            }
	        }
	        this._final = _buildFinal.call(this);
	        return this;
	    };
	
	    /**
	     * Translate only along the X axis of the translation component of a Transform.
	     *
	     * @method setTranslateX
	     * @chainable
	     *
	     * @param translate {Number}     New translation state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setTranslateX = function setTranslateX(translate, transition, callback) {
	        this.translate[0].set(translate, transition, callback);
	        this._finalTranslate[0] = translate;
	        this._final = _buildFinal.call(this);
	        return this;
	    };
	
	    /**
	     * Translate only along the Y axis of the translation component of a Transform.
	     *
	     * @method setTranslateY
	     * @chainable
	     *
	     * @param translate {Number}     New translation state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setTranslateY = function setTranslateY(translate, transition, callback) {
	        this.translate[1].set(translate, transition, callback);
	        this._finalTranslate[1] = translate;
	        this._final = _buildFinal.call(this);
	        return this;
	    };
	
	    /**
	     * Translate only along the Z axis of the translation component of a Transform.
	     *
	     * @method setTranslateZ
	     * @chainable
	     *
	     * @param translate {Number}     New translation state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setTranslateZ = function setTranslateZ(translate, transition, callback) {
	        this.translate[2].set(translate, transition, callback);
	        this._finalTranslate[2] = translate;
	        this._final = _buildFinal.call(this);
	        return this;
	    };
	
	    /**
	     * An optimized way of setting only the scale component of a Transform. Axes who's values are null will not be affected.
	     *
	     * @method setScale
	     * @chainable
	     *
	     * @param scale {Array}         New scale state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setScale = function setScale(scale, transition, callback) {
	        var numberOfAxes = _countOfType(scale, 'number');
	        var _callback = callback ? Utility.after(numberOfAxes, callback) : null;
	        for (var i=0; i<scale.length; i+=1) {
	            if (typeof scale[i] === 'number') {
	                this.scale[i].set(scale[i], transition, _callback);
	                this._finalScale[i] = scale[i];
	            }
	        }
	        this._final = _buildFinal.call(this);
	        return this;
	    };
	
	    /**
	     * Scale only along the X axis of the scale component of a Transform.
	     *
	     * @method setScaleX
	     * @chainable
	     *
	     * @param scale {Number}     New scale state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setScaleX = function setScaleX(scale, transition, callback) {
	        this.scale[0].set(scale, transition, callback);
	        this._finalScale[0] = scale;
	        this._final = _buildFinal.call(this);
	        return this;
	    };
	
	    /**
	     * Scale only along the Y axis of the scale component of a Transform.
	     *
	     * @method setScaleY
	     * @chainable
	     *
	     * @param scale {Number}     New scale state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setScaleY = function setScaleY(scale, transition, callback) {
	        this.scale[1].set(scale, transition, callback);
	        this._finalScale[1] = scale;
	        this._final = _buildFinal.call(this);
	        return this;
	    };
	
	    /**
	     * Scale only along the Z axis of the scale component of a Transform.
	     *
	     * @method setScaleZ
	     * @chainable
	     *
	     * @param scale {Number}     New scale state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setScaleZ = function setScaleZ(scale, transition, callback) {
	        this.scale[2].set(scale, transition, callback);
	        this._finalScale[2] = scale;
	        this._final = _buildFinal.call(this);
	        return this;
	    };
	
	    /**
	     * An optimized way of setting only the rotational component of a Transform. Axes who's values are null will not be affected.
	     *
	     * @method setRotate
	     * @chainable
	     *
	     * @param eulerAngles {Array}   Euler angles for new rotation state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setRotate = function setRotate(eulerAngles, transition, callback) {
	        var numberOfAxes = _countOfType(eulerAngles, 'number');
	        var _callback = callback ? Utility.after(numberOfAxes, callback) : null;
	        for (var i=0; i<eulerAngles.length; i+=1) {
	            if (typeof eulerAngles[i] === 'number') {
	                this.rotate[i].set(eulerAngles[i], transition, _callback);
	                this._finalRotate[i] = eulerAngles[i];
	            }
	        }
	        this._final = _buildFinal.call(this);
	        return this;
	    };
	
	    /**
	     * Rotate only about the X axis of the rotational component of a Transform.
	     *
	     * @method setScaleX
	     * @chainable
	     *
	     * @param eulerAngle {Number}     New rotational state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setRotateX = function setRotateX(eulerAngle, transition, callback) {
	        this.rotate[0].set(eulerAngle, transition, callback);
	        this._finalRotate[0] = eulerAngle;
	        this._final = _buildFinal.call(this);
	        return this;
	    };
	
	    /**
	     * Rotate only about the Y axis of the rotational component of a Transform.
	     *
	     * @method setScaleY
	     * @chainable
	     *
	     * @param eulerAngle {Number}     New rotational state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setRotateY = function setRotateY(eulerAngle, transition, callback) {
	        this.rotate[1].set(eulerAngle, transition, callback);
	        this._finalRotate[1] = eulerAngle;
	        this._final = _buildFinal.call(this);
	        return this;
	    };
	
	    /**
	     * Rotate only about the Z axis of the rotational component of a Transform.
	     *
	     * @method setScaleZ
	     * @chainable
	     *
	     * @param eulerAngle {Number}     New rotational state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setRotateZ = function setRotateZ(eulerAngle, transition, callback) {
	        this.rotate[2].set(eulerAngle, transition, callback);
	        this._finalRotate[2] = eulerAngle;
	        this._final = _buildFinal.call(this);
	        return this;
	    };
	
	    /**
	     * An optimized way of setting only the skew component of a Transform. Axes who's values are null will not be affected.
	     *
	     * @method setSkew
	     * @chainable
	     *
	     * @param skewAngles {Array}    New skew state. Axes who's values are null will not be affected.
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setSkew = function setSkew(skewAngles, transition, callback) {
	        var numberOfAxes = _countOfType(skewAngles, 'number');
	        var _callback = callback ? Utility.after(numberOfAxes, callback) : null;
	        for (var i=0; i<skewAngles.length; i+=1) {
	            if (typeof skewAngles[i] === 'number') {
	                this.skew[i].set(skewAngles[i], transition, _callback);
	                this._finalSkew[i] = skewAngles[i];
	            }
	        }
	        this._final = _buildFinal.call(this);
	        return this;
	    };
	
	    /**
	     * Skew only about the X axis of the skew component of a Transform.
	     *
	     * @method setSkewX
	     * @chainable
	     *
	     * @param skewAngle {Number}     New skew state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setSkewX = function setSkewX(skewAngle, transition, callback) {
	        this.skew[0].set(skewAngle, transition, callback);
	        this._finalSkew[0] = skewAngle;
	        this._final = _buildFinal.call(this);
	        return this;
	    };
	
	    /**
	     * Skew only about the Y axis of the skew component of a Transform.
	     *
	     * @method setSkewY
	     * @chainable
	     *
	     * @param skewAngle {Number}     New skew state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setSkewY = function setSkewY(skewAngle, transition, callback) {
	        this.skew[1].set(skewAngle, transition, callback);
	        this._finalSkew[1] = skewAngle;
	        this._final = _buildFinal.call(this);
	        return this;
	    };
	
	    /**
	     * Skew only about the Z axis of the skew component of a Transform.
	     *
	     * @method setSkewZ
	     * @chainable
	     *
	     * @param skewAngle {Number}     New skew state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setSkewZ = function setSkewZ(skewAngle, transition, callback) {
	        this.skew[2].set(skewAngle, transition, callback);
	        this._finalSkew[2] = skewAngle;
	        this._final = _buildFinal.call(this);
	        return this;
	    };
	
	    /**
	     * Setter for a TransitionableTransform with optional parameters to transition
	     * between Transforms. Animates all axes of all components.
	     *
	     * @method set
	     * @chainable
	     *
	     * @param transform {Array}     New transform state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.set = function set(transform, transition, callback) {
	        var components = Transform.interpret(transform);
	
	        this._finalTranslate = components.translate;
	        this._finalRotate = components.rotate;
	        this._finalSkew = components.skew;
	        this._finalScale = components.scale;
	        this._final = transform;
	
	        var _callback = callback ? Utility.after(12, callback) : null;
	        for (var i=0; i<3; i+=1) {
	            this.translate[i].set(components.translate[i], transition, _callback);
	            this.rotate[i].set(components.rotate[i], transition, _callback);
	            this.skew[i].set(components.skew[i], transition, _callback);
	            this.scale[i].set(components.scale[i], transition, _callback);
	        }
	        return this;
	    };
	
	    /**
	     * Sets the default transition to use for transitioning betwen Transform states
	     *
	     * @method setDefaultTransition
	     *
	     * @param transition {Object} Transition definition
	     */
	    TransitionableTransform.prototype.setDefaultTransition = function setDefaultTransition(transition) {
	        for (var i=0; i<3; i+=1) {
	            this.translate[i].setDefault(transition);
	            this.rotate[i].setDefault(transition);
	            this.skew[i].setDefault(transition);
	            this.scale[i].setDefault(transition);
	        }
	    };
	
	    /**
	     * Getter. Returns the current state of the Transform
	     *
	     * @method get
	     *
	     * @return {Transform}
	     */
	    TransitionableTransform.prototype.get = function get() {
	        if (this.isActive()) {
	            return _build.call(this);
	        }
	        else return this._final;
	    };
	
	    /**
	     * Get the destination state of the Transform
	     *
	     * @method getFinal
	     *
	     * @return Transform {Transform}
	     */
	    TransitionableTransform.prototype.getFinal = function getFinal() {
	        return this._final;
	    };
	
	    /**
	     * Determine if the TransitionableTransform is currently transitioning
	     *
	     * @method isActive
	     *
	     * @return {Boolean}
	     */
	    TransitionableTransform.prototype.isActive = function isActive() {
	        var isActive = false;
	
	        for (var i=0; i<3; i+=1) {
	            if (
	                this.translate[i].isActive()
	                || this.rotate[i].isActive()
	                || this.skew[i].isActive()
	                || this.scale[i].isActive()
	            ) {
	                isActive = true; break;
	            }
	        }
	        return isActive;
	    };
	
	    /**
	     * Halts the transition
	     *
	     * @method halt
	     */
	    TransitionableTransform.prototype.halt = function halt() {
	        for (var i=0; i<3; i+=1) {
	            this.translate[i].halt();
	            this.rotate[i].halt();
	            this.skew[i].halt();
	            this.scale[i].halt();
	
	            this._finalTranslate[i] = this.translate[i].get();
	            this._finalRotate[i] = this.rotate[i].get();
	            this._finalSkew[i] = this.skew[i].get();
	            this._finalScale[i] = this.scale[i].get();
	        }
	
	        this._final = this.get();
	
	        return this;
	    };
	
	    module.exports = TransitionableTransform;


/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2015
	 */
	
	    var Entity = __webpack_require__(239);
	    var SpecParser = __webpack_require__(240);
	
	    /**
	     * A wrapper for inserting a renderable component (like a Modifer or
	     *   Surface) into the render tree.
	     *
	     * @class RenderNode
	     * @constructor
	     *
	     * @param {Object} object Target renderable component
	     */
	    function RenderNode(object) {
	        this._object = null;
	        this._child = null;
	        this._hasMultipleChildren = false;
	        this._isRenderable = false;
	        this._isModifier = false;
	
	        this._resultCache = {};
	        this._prevResults = {};
	
	        this._childResult = null;
	
	        if (object) this.set(object);
	    }
	
	    /**
	     * Append a renderable to the list of this node's children.
	     *   This produces a new RenderNode in the tree.
	     *   Note: Does not double-wrap if child is a RenderNode already.
	     *
	     * @method add
	     * @param {Object} child renderable object
	     * @return {RenderNode} new render node wrapping child
	     */
	    RenderNode.prototype.add = function add(child) {
	        var childNode = (child instanceof RenderNode) ? child : new RenderNode(child);
	        if (this._child instanceof Array) this._child.push(childNode);
	        else if (this._child) {
	            this._child = [this._child, childNode];
	            this._hasMultipleChildren = true;
	            this._childResult = []; // to be used later
	        }
	        else this._child = childNode;
	
	        return childNode;
	    };
	
	    /**
	     * Return the single wrapped object.  Returns null if this node has multiple child nodes.
	     *
	     * @method get
	     *
	     * @return {Ojbect} contained renderable object
	     */
	    RenderNode.prototype.get = function get() {
	        return this._object || (this._hasMultipleChildren ? null : (this._child ? this._child.get() : null));
	    };
	
	    /**
	     * Overwrite the list of children to contain the single provided object
	     *
	     * @method set
	     * @param {Object} child renderable object
	     * @return {RenderNode} this render node, or child if it is a RenderNode
	     */
	    RenderNode.prototype.set = function set(child) {
	        this._childResult = null;
	        this._hasMultipleChildren = false;
	        this._isRenderable = child.render ? true : false;
	        this._isModifier = child.modify ? true : false;
	        this._object = child;
	        this._child = null;
	        if (child instanceof RenderNode) return child;
	        else return this;
	    };
	
	    /**
	     * Get render size of contained object.
	     *
	     * @method getSize
	     * @return {Array.Number} size of this or size of single child.
	     */
	    RenderNode.prototype.getSize = function getSize() {
	        var result = null;
	        var target = this.get();
	        if (target && target.getSize) result = target.getSize();
	        if (!result && this._child && this._child.getSize) result = this._child.getSize();
	        return result;
	    };
	
	    // apply results of rendering this subtree to the document
	    function _applyCommit(spec, context, cacheStorage) {
	        var result = SpecParser.parse(spec, context);
	        var keys = Object.keys(result);
	        for (var i = 0; i < keys.length; i++) {
	            var id = keys[i];
	            var childNode = Entity.get(id);
	            var commitParams = result[id];
	            commitParams.allocator = context.allocator;
	            var commitResult = childNode.commit(commitParams);
	            if (commitResult) _applyCommit(commitResult, context, cacheStorage);
	            else cacheStorage[id] = commitParams;
	        }
	    }
	
	    /**
	     * Commit the content change from this node to the document.
	     *
	     * @private
	     * @method commit
	     * @param {Context} context render context
	     */
	    RenderNode.prototype.commit = function commit(context) {
	        // free up some divs from the last loop
	        var prevKeys = Object.keys(this._prevResults);
	        for (var i = 0; i < prevKeys.length; i++) {
	            var id = prevKeys[i];
	            if (this._resultCache[id] === undefined) {
	                var object = Entity.get(id);
	                if (object.cleanup) object.cleanup(context.allocator);
	            }
	        }
	
	        this._prevResults = this._resultCache;
	        this._resultCache = {};
	        _applyCommit(this.render(), context, this._resultCache);
	    };
	
	    /**
	     * Generate a render spec from the contents of the wrapped component.
	     *
	     * @private
	     * @method render
	     *
	     * @return {Object} render specification for the component subtree
	     *    only under this node.
	     */
	    RenderNode.prototype.render = function render() {
	        if (this._isRenderable) return this._object.render();
	
	        var result = null;
	        if (this._hasMultipleChildren) {
	            result = this._childResult;
	            var children = this._child;
	            for (var i = 0; i < children.length; i++) {
	                result[i] = children[i].render();
	            }
	        }
	        else if (this._child) result = this._child.render();
	
	        return this._isModifier ? this._object.modify(result) : result;
	    };
	
	    module.exports = RenderNode;


/***/ },
/* 239 */
/***/ function(module, exports) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2015
	 */
	
	    /**
	     * A singleton that maintains a global registry of Surfaces.
	     *   Private.
	     *
	     * @private
	     * @static
	     * @class Entity
	     */
	
	    var entities = [];
	
	    /**
	     * Get entity from global index.
	     *
	     * @private
	     * @method get
	     * @param {Number} id entity registration id
	     * @return {Surface} entity in the global index
	     */
	    function get(id) {
	        return entities[id];
	    }
	
	    /**
	     * Overwrite entity in the global index
	     *
	     * @private
	     * @method set
	     * @param {Number} id entity registration id
	     * @param {Surface} entity to add to the global index
	     */
	    function set(id, entity) {
	        entities[id] = entity;
	    }
	
	    /**
	     * Add entity to global index
	     *
	     * @private
	     * @method register
	     * @param {Surface} entity to add to global index
	     * @return {Number} new id
	     */
	    function register(entity) {
	        var id = entities.length;
	        set(id, entity);
	        return id;
	    }
	
	    /**
	     * Remove entity from global index
	     *
	     * @private
	     * @method unregister
	     * @param {Number} id entity registration id
	     */
	    function unregister(id) {
	        set(id, null);
	    }
	
	    module.exports = {
	        register: register,
	        unregister: unregister,
	        get: get,
	        set: set
	    };


/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2015
	 */
	
	    var Transform = __webpack_require__(229);
	
	    /**
	     *
	     * This object translates the rendering instructions ("render specs")
	     *   that renderable components generate into document update
	     *   instructions ("update specs").  Private.
	     *
	     * @private
	     * @class SpecParser
	     * @constructor
	     */
	    function SpecParser() {
	        this.result = {};
	    }
	    SpecParser._instance = new SpecParser();
	
	    /**
	     * Convert a render spec coming from the context's render chain to an
	     *    update spec for the update chain. This is the only major entry point
	     *    for a consumer of this class.
	     *
	     * @method parse
	     * @static
	     * @private
	     *
	     * @param {renderSpec} spec input render spec
	     * @param {Object} context context to do the parse in
	     * @return {Object} the resulting update spec (if no callback
	     *   specified, else none)
	     */
	    SpecParser.parse = function parse(spec, context) {
	        return SpecParser._instance.parse(spec, context);
	    };
	
	    /**
	     * Convert a renderSpec coming from the context's render chain to an update
	     *    spec for the update chain. This is the only major entrypoint for a
	     *    consumer of this class.
	     *
	     * @method parse
	     *
	     * @private
	     * @param {renderSpec} spec input render spec
	     * @param {Context} context
	     * @return {updateSpec} the resulting update spec
	     */
	    SpecParser.prototype.parse = function parse(spec, context) {
	        this.reset();
	        this._parseSpec(spec, context, Transform.identity);
	        return this.result;
	    };
	
	    /**
	     * Prepare SpecParser for re-use (or first use) by setting internal state
	     *  to blank.
	     *
	     * @private
	     * @method reset
	     */
	    SpecParser.prototype.reset = function reset() {
	        this.result = {};
	    };
	
	    // Multiply matrix M by vector v
	    function _vecInContext(v, m) {
	        return [
	            v[0] * m[0] + v[1] * m[4] + v[2] * m[8],
	            v[0] * m[1] + v[1] * m[5] + v[2] * m[9],
	            v[0] * m[2] + v[1] * m[6] + v[2] * m[10]
	        ];
	    }
	
	    var _zeroZero = [0, 0];
	
	    // From the provided renderSpec tree, recursively compose opacities,
	    //    origins, transforms, and sizes corresponding to each surface id from
	    //    the provided renderSpec tree structure. On completion, those
	    //    properties of 'this' object should be ready to use to build an
	    //    updateSpec.
	    SpecParser.prototype._parseSpec = function _parseSpec(spec, parentContext, sizeContext) {
	        var id;
	        var target;
	        var transform;
	        var opacity;
	        var origin;
	        var align;
	        var size;
	
	        if (typeof spec === 'number') {
	            id = spec;
	            transform = parentContext.transform;
	            align = parentContext.align || _zeroZero;
	            if (parentContext.size && align && (align[0] || align[1])) {
	                var alignAdjust = [align[0] * parentContext.size[0], align[1] * parentContext.size[1], 0];
	                transform = Transform.thenMove(transform, _vecInContext(alignAdjust, sizeContext));
	            }
	            this.result[id] = {
	                transform: transform,
	                opacity: parentContext.opacity,
	                origin: parentContext.origin || _zeroZero,
	                align: parentContext.align || _zeroZero,
	                size: parentContext.size
	            };
	        }
	        else if (!spec) { // placed here so 0 will be cached earlier
	            return;
	        }
	        else if (spec instanceof Array) {
	            for (var i = 0; i < spec.length; i++) {
	                this._parseSpec(spec[i], parentContext, sizeContext);
	            }
	        }
	        else {
	            target = spec.target;
	            transform = parentContext.transform;
	            opacity = parentContext.opacity;
	            origin = parentContext.origin;
	            align = parentContext.align;
	            size = parentContext.size;
	            var nextSizeContext = sizeContext;
	
	            if (spec.opacity !== undefined) opacity = parentContext.opacity * spec.opacity;
	            if (spec.transform) transform = Transform.multiply(parentContext.transform, spec.transform);
	            if (spec.origin) {
	                origin = spec.origin;
	                nextSizeContext = parentContext.transform;
	            }
	            if (spec.align) align = spec.align;
	
	            if (spec.size || spec.proportions) {
	                var parentSize = size;
	                size = [size[0], size[1]];
	
	                if (spec.size) {
	                    if (spec.size[0] !== undefined) size[0] = spec.size[0];
	                    if (spec.size[1] !== undefined) size[1] = spec.size[1];
	                }
	
	                if (spec.proportions) {
	                    if (spec.proportions[0] !== undefined) size[0] = size[0] * spec.proportions[0];
	                    if (spec.proportions[1] !== undefined) size[1] = size[1] * spec.proportions[1];
	                }
	
	                if (parentSize) {
	                    if (align && (align[0] || align[1])) transform = Transform.thenMove(transform, _vecInContext([align[0] * parentSize[0], align[1] * parentSize[1], 0], sizeContext));
	                    if (origin && (origin[0] || origin[1])) transform = Transform.moveThen([-origin[0] * size[0], -origin[1] * size[1], 0], transform);
	                }
	
	                nextSizeContext = parentContext.transform;
	                origin = null;
	                align = null;
	            }
	
	            this._parseSpec(target, {
	                transform: transform,
	                opacity: opacity,
	                origin: origin,
	                align: align,
	                size: size
	            }, nextSizeContext);
	        }
	    };
	
	    module.exports = SpecParser;


/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2015
	 */
	
	    var EventEmitter = __webpack_require__(242);
	
	    /**
	     * EventHandler forwards received events to a set of provided callback functions.
	     * It allows events to be captured, processed, and optionally piped through to other event handlers.
	     *
	     * @class EventHandler
	     * @extends EventEmitter
	     * @constructor
	     */
	    function EventHandler() {
	        EventEmitter.apply(this, arguments);
	
	        this.downstream = []; // downstream event handlers
	        this.downstreamFn = []; // downstream functions
	
	        this.upstream = []; // upstream event handlers
	        this.upstreamListeners = {}; // upstream listeners
	    }
	    EventHandler.prototype = Object.create(EventEmitter.prototype);
	    EventHandler.prototype.constructor = EventHandler;
	
	    /**
	     * Assign an event handler to receive an object's input events.
	     *
	     * @method setInputHandler
	     * @static
	     *
	     * @param {Object} object object to mix trigger, subscribe, and unsubscribe functions into
	     * @param {EventHandler} handler assigned event handler
	     */
	    EventHandler.setInputHandler = function setInputHandler(object, handler) {
	        object.trigger = handler.trigger.bind(handler);
	        if (handler.subscribe && handler.unsubscribe) {
	            object.subscribe = handler.subscribe.bind(handler);
	            object.unsubscribe = handler.unsubscribe.bind(handler);
	        }
	    };
	
	    /**
	     * Assign an event handler to receive an object's output events.
	     *
	     * @method setOutputHandler
	     * @static
	     *
	     * @param {Object} object object to mix pipe, unpipe, on, addListener, and removeListener functions into
	     * @param {EventHandler} handler assigned event handler
	     */
	    EventHandler.setOutputHandler = function setOutputHandler(object, handler) {
	        if (handler instanceof EventHandler) handler.bindThis(object);
	        object.pipe = handler.pipe.bind(handler);
	        object.unpipe = handler.unpipe.bind(handler);
	        object.on = handler.on.bind(handler);
	        object.addListener = object.on;
	        object.removeListener = handler.removeListener.bind(handler);
	    };
	
	    /**
	     * Trigger an event, sending to all downstream handlers
	     *   listening for provided 'type' key.
	     *
	     * @method emit
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {Object} event event data
	     * @return {EventHandler} this
	     */
	    EventHandler.prototype.emit = function emit(type, event) {
	        EventEmitter.prototype.emit.apply(this, arguments);
	        var i = 0;
	        for (i = 0; i < this.downstream.length; i++) {
	            if (this.downstream[i].trigger) this.downstream[i].trigger(type, event);
	        }
	        for (i = 0; i < this.downstreamFn.length; i++) {
	            this.downstreamFn[i](type, event);
	        }
	        return this;
	    };
	
	    /**
	     * Alias for emit
	     * @method addListener
	     */
	    EventHandler.prototype.trigger = EventHandler.prototype.emit;
	
	    /**
	     * Add event handler object to set of downstream handlers.
	     *
	     * @method pipe
	     *
	     * @param {EventHandler} target event handler target object
	     * @return {EventHandler} passed event handler
	     */
	    EventHandler.prototype.pipe = function pipe(target) {
	        if (target.subscribe instanceof Function) return target.subscribe(this);
	
	        var downstreamCtx = (target instanceof Function) ? this.downstreamFn : this.downstream;
	        var index = downstreamCtx.indexOf(target);
	        if (index < 0) downstreamCtx.push(target);
	
	        if (target instanceof Function) target('pipe', null);
	        else if (target.trigger) target.trigger('pipe', null);
	
	        return target;
	    };
	
	    /**
	     * Remove handler object from set of downstream handlers.
	     *   Undoes work of "pipe".
	     *
	     * @method unpipe
	     *
	     * @param {EventHandler} target target handler object
	     * @return {EventHandler} provided target
	     */
	    EventHandler.prototype.unpipe = function unpipe(target) {
	        if (target.unsubscribe instanceof Function) return target.unsubscribe(this);
	
	        var downstreamCtx = (target instanceof Function) ? this.downstreamFn : this.downstream;
	        var index = downstreamCtx.indexOf(target);
	        if (index >= 0) {
	            downstreamCtx.splice(index, 1);
	            if (target instanceof Function) target('unpipe', null);
	            else if (target.trigger) target.trigger('unpipe', null);
	            return target;
	        }
	        else return false;
	    };
	
	    /**
	     * Bind a callback function to an event type handled by this object.
	     *
	     * @method "on"
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {function(string, Object)} handler callback
	     * @return {EventHandler} this
	     */
	    EventHandler.prototype.on = function on(type, handler) {
	        EventEmitter.prototype.on.apply(this, arguments);
	        if (!(type in this.upstreamListeners)) {
	            var upstreamListener = this.trigger.bind(this, type);
	            this.upstreamListeners[type] = upstreamListener;
	            for (var i = 0; i < this.upstream.length; i++) {
	                this.upstream[i].on(type, upstreamListener);
	            }
	        }
	        return this;
	    };
	
	    /**
	     * Alias for "on"
	     * @method addListener
	     */
	    EventHandler.prototype.addListener = EventHandler.prototype.on;
	
	    /**
	     * Listen for events from an upstream event handler.
	     *
	     * @method subscribe
	     *
	     * @param {EventEmitter} source source emitter object
	     * @return {EventHandler} this
	     */
	    EventHandler.prototype.subscribe = function subscribe(source) {
	        var index = this.upstream.indexOf(source);
	        if (index < 0) {
	            this.upstream.push(source);
	            for (var type in this.upstreamListeners) {
	                source.on(type, this.upstreamListeners[type]);
	            }
	        }
	        return this;
	    };
	
	    /**
	     * Stop listening to events from an upstream event handler.
	     *
	     * @method unsubscribe
	     *
	     * @param {EventEmitter} source source emitter object
	     * @return {EventHandler} this
	     */
	    EventHandler.prototype.unsubscribe = function unsubscribe(source) {
	        var index = this.upstream.indexOf(source);
	        if (index >= 0) {
	            this.upstream.splice(index, 1);
	            for (var type in this.upstreamListeners) {
	                source.removeListener(type, this.upstreamListeners[type]);
	            }
	        }
	        return this;
	    };
	
	    module.exports = EventHandler;


/***/ },
/* 242 */
/***/ function(module, exports) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2015
	 */
	
	    /**
	     * EventEmitter represents a channel for events.
	     *
	     * @class EventEmitter
	     * @constructor
	     */
	    function EventEmitter() {
	        this.listeners = {};
	        this._owner = this;
	    }
	
	    /**
	     * Trigger an event, sending to all downstream handlers
	     *   listening for provided 'type' key.
	     *
	     * @method emit
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {Object} event event data
	     * @return {EventHandler} this
	     */
	    EventEmitter.prototype.emit = function emit(type, event) {
	        var handlers = this.listeners[type];
	        if (handlers) {
	            for (var i = 0; i < handlers.length; i++) {
	                handlers[i].call(this._owner, event);
	            }
	        }
	        return this;
	    };
	
	    /**
	     * Bind a callback function to an event type handled by this object.
	     *
	     * @method "on"
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {function(string, Object)} handler callback
	     * @return {EventHandler} this
	     */
	   EventEmitter.prototype.on = function on(type, handler) {
	        if (!(type in this.listeners)) this.listeners[type] = [];
	        var index = this.listeners[type].indexOf(handler);
	        if (index < 0) this.listeners[type].push(handler);
	        return this;
	    };
	
	    /**
	     * Alias for "on".
	     * @method addListener
	     */
	    EventEmitter.prototype.addListener = EventEmitter.prototype.on;
	
	   /**
	     * Unbind an event by type and handler.
	     *   This undoes the work of "on".
	     *
	     * @method removeListener
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {function} handler function object to remove
	     * @return {EventEmitter} this
	     */
	    EventEmitter.prototype.removeListener = function removeListener(type, handler) {
	        var listener = this.listeners[type];
	        if (listener !== undefined) {
	            var index = listener.indexOf(handler);
	            if (index >= 0) listener.splice(index, 1);
	        }
	        return this;
	    };
	
	    /**
	     * Call event handlers with this set to owner.
	     *
	     * @method bindThis
	     *
	     * @param {Object} owner object this EventEmitter belongs to
	     */
	    EventEmitter.prototype.bindThis = function bindThis(owner) {
	        this._owner = owner;
	    };
	
	    module.exports = EventEmitter;


/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.contextWithPerspective = contextWithPerspective;
	exports.simpleExtend = simpleExtend;
	
	var _Engine = __webpack_require__(244);
	
	var _Engine2 = _interopRequireDefault(_Engine);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Creates a [famous/src/core/Context](#famous/src/core/Context) having the specified 3D perspective.
	 *
	 * @param {Number} perspective The integer amount of perspective to apply to the `Context`.
	 * @returns {module: famous/src/core/Context} The `Context` with the applied perspective.
	 */
	function contextWithPerspective(perspective) {
	    var context = _Engine2.default.createContext();
	    context.setPerspective(perspective);
	    return context;
	} /*
	   * @overview Utility functions used by infamous.
	   *
	   * LICENSE
	   *
	   * This Source Code Form is subject to the terms of the Mozilla Public
	   * License, v. 2.0. If a copy of the MPL was not distributed with this
	   * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	   *
	   */
	
	function simpleExtend(object) {
	    for (var _len = arguments.length, others = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        others[_key - 1] = arguments[_key];
	    }
	
	    others.forEach(function (other) {
	        for (var prop in other) {
	            object[prop] = other[prop];
	        }
	    });
	}

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2015
	 */
	
	
	    /**
	     * The singleton object initiated upon process
	     *   startup which manages all active Context instances, runs
	     *   the render dispatch loop, and acts as a listener and dispatcher
	     *   for events.  All methods are therefore static.
	     *
	     *   On static initialization, window.requestAnimationFrame is called with
	     *     the event loop function.
	     *
	     *   Note: Any window in which Engine runs will prevent default
	     *     scrolling behavior on the 'touchmove' event.
	     *
	     * @static
	     * @class Engine
	     */
	    var Context = __webpack_require__(245);
	    var EventHandler = __webpack_require__(241);
	    var OptionsManager = __webpack_require__(247);
	
	    var Engine = {};
	
	    var contexts = [];
	
	    var nextTickQueue = [];
	
	    var currentFrame = 0;
	    var nextTickFrame = 0;
	
	    var deferQueue = [];
	
	    var lastTime = Date.now();
	    var frameTime;
	    var frameTimeLimit;
	    var loopEnabled = true;
	    var eventForwarders = {};
	    var eventHandler = new EventHandler();
	
	    var options = {
	        containerType: 'div',
	        containerClass: 'famous-container',
	        fpsCap: undefined,
	        runLoop: true,
	        appMode: true
	    };
	    var optionsManager = new OptionsManager(options);
	
	    /** @const */
	    var MAX_DEFER_FRAME_TIME = 10;
	
	    /**
	     * Inside requestAnimationFrame loop, step() is called, which:
	     *   calculates current FPS (throttling loop if it is over limit set in setFPSCap),
	     *   emits dataless 'prerender' event on start of loop,
	     *   calls in order any one-shot functions registered by nextTick on last loop,
	     *   calls Context.update on all Context objects registered,
	     *   and emits dataless 'postrender' event on end of loop.
	     *
	     * @static
	     * @private
	     * @method step
	     */
	    Engine.step = function step() {
	        currentFrame++;
	        nextTickFrame = currentFrame;
	
	        var currentTime = Date.now();
	
	        // skip frame if we're over our framerate cap
	        if (frameTimeLimit && currentTime - lastTime < frameTimeLimit) return;
	
	        var i = 0;
	
	        frameTime = currentTime - lastTime;
	        lastTime = currentTime;
	
	        eventHandler.emit('prerender');
	
	        // empty the queue
	        var numFunctions = nextTickQueue.length;
	        while (numFunctions--) (nextTickQueue.shift())(currentFrame);
	
	        // limit total execution time for deferrable functions
	        while (deferQueue.length && (Date.now() - currentTime) < MAX_DEFER_FRAME_TIME) {
	            deferQueue.shift().call(this);
	        }
	
	        for (i = 0; i < contexts.length; i++) contexts[i].update();
	
	        eventHandler.emit('postrender');
	    };
	
	    // engage requestAnimationFrame
	    function loop() {
	        if (options.runLoop) {
	            Engine.step();
	            window.requestAnimationFrame(loop);
	        }
	        else loopEnabled = false;
	    }
	    window.requestAnimationFrame(loop);
	
	    //
	    // Upon main document window resize (unless on an "input" HTML element):
	    //   scroll to the top left corner of the window,
	    //   and for each managed Context: emit the 'resize' event and update its size.
	    // @param {Object=} event document event
	    //
	    function handleResize(event) {
	        for (var i = 0; i < contexts.length; i++) {
	            contexts[i].emit('resize');
	        }
	        eventHandler.emit('resize');
	    }
	    window.addEventListener('resize', handleResize, false);
	    handleResize();
	
	    /**
	     * Initialize famous for app mode
	     *
	     * @static
	     * @private
	     * @method initialize
	     */
	    function initialize() {
	        // prevent scrolling via browser
	        window.addEventListener('touchmove', function(event) {
	            event.preventDefault();
	        }, true);
	
	        addRootClasses();
	    }
	    var initialized = false;
	
	    function addRootClasses() {
	        if (!document.body) {
	            Engine.nextTick(addRootClasses);
	            return;
	        }
	
	        document.body.classList.add('famous-root');
	        document.documentElement.classList.add('famous-root');
	    }
	
	    /**
	     * Add event handler object to set of downstream handlers.
	     *
	     * @method pipe
	     *
	     * @param {EventHandler} target event handler target object
	     * @return {EventHandler} passed event handler
	     */
	    Engine.pipe = function pipe(target) {
	        if (target.subscribe instanceof Function) return target.subscribe(Engine);
	        else return eventHandler.pipe(target);
	    };
	
	    /**
	     * Remove handler object from set of downstream handlers.
	     *   Undoes work of "pipe".
	     *
	     * @method unpipe
	     *
	     * @param {EventHandler} target target handler object
	     * @return {EventHandler} provided target
	     */
	    Engine.unpipe = function unpipe(target) {
	        if (target.unsubscribe instanceof Function) return target.unsubscribe(Engine);
	        else return eventHandler.unpipe(target);
	    };
	
	    /**
	     * Bind a callback function to an event type handled by this object.
	     *
	     * @static
	     * @method "on"
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {function(string, Object)} handler callback
	     * @return {EventHandler} this
	     */
	    Engine.on = function on(type, handler) {
	        if (!(type in eventForwarders)) {
	            eventForwarders[type] = eventHandler.emit.bind(eventHandler, type);
	
	            addEngineListener(type, eventForwarders[type]);
	        }
	        return eventHandler.on(type, handler);
	    };
	
	    function addEngineListener(type, forwarder) {
	        if (!document.body) {
	            Engine.nextTick(addEventListener.bind(this, type, forwarder));
	            return;
	        }
	
	        document.body.addEventListener(type, forwarder);
	    }
	
	    /**
	     * Trigger an event, sending to all downstream handlers
	     *   listening for provided 'type' key.
	     *
	     * @method emit
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {Object} event event data
	     * @return {EventHandler} this
	     */
	    Engine.emit = function emit(type, event) {
	        return eventHandler.emit(type, event);
	    };
	
	    /**
	     * Unbind an event by type and handler.
	     *   This undoes the work of "on".
	     *
	     * @static
	     * @method removeListener
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {function} handler function object to remove
	     * @return {EventHandler} internal event handler object (for chaining)
	     */
	    Engine.removeListener = function removeListener(type, handler) {
	        return eventHandler.removeListener(type, handler);
	    };
	
	    /**
	     * Return the current calculated frames per second of the Engine.
	     *
	     * @static
	     * @method getFPS
	     *
	     * @return {Number} calculated fps
	     */
	    Engine.getFPS = function getFPS() {
	        return 1000 / frameTime;
	    };
	
	    /**
	     * Set the maximum fps at which the system should run. If internal render
	     *    loop is called at a greater frequency than this FPSCap, Engine will
	     *    throttle render and update until this rate is achieved.
	     *
	     * @static
	     * @method setFPSCap
	     *
	     * @param {Number} fps maximum frames per second
	     */
	    Engine.setFPSCap = function setFPSCap(fps) {
	        frameTimeLimit = Math.floor(1000 / fps);
	    };
	
	    /**
	     * Return engine options.
	     *
	     * @static
	     * @method getOptions
	     * @param {string} key
	     * @return {Object} engine options
	     */
	    Engine.getOptions = function getOptions(key) {
	        return optionsManager.getOptions(key);
	    };
	
	    /**
	     * Set engine options
	     *
	     * @static
	     * @method setOptions
	     *
	     * @param {Object} [options] overrides of default options
	     * @param {Number} [options.fpsCap]  maximum fps at which the system should run
	     * @param {boolean} [options.runLoop=true] whether the run loop should continue
	     * @param {string} [options.containerType="div"] type of container element.  Defaults to 'div'.
	     * @param {string} [options.containerClass="famous-container"] type of container element.  Defaults to 'famous-container'.
	     */
	    Engine.setOptions = function setOptions(options) {
	        return optionsManager.setOptions.apply(optionsManager, arguments);
	    };
	
	    /**
	     * Creates a new Context for rendering and event handling with
	     *    provided document element as top of each tree. This will be tracked by the
	     *    process-wide Engine.
	     *
	     * @static
	     * @method createContext
	     *
	     * @param {Node} el will be top of Famo.us document element tree
	     * @return {Context} new Context within el
	     */
	    Engine.createContext = function createContext(el) {
	        if (!initialized && options.appMode) Engine.nextTick(initialize);
	
	        var needMountContainer = false;
	        if (!el) {
	            el = document.createElement(options.containerType);
	            el.classList.add(options.containerClass);
	            needMountContainer = true;
	        }
	
	        var context = new Context(el);
	        Engine.registerContext(context);
	
	        if (needMountContainer) mount(context, el);
	
	        return context;
	    };
	
	    function mount(context, el) {
	        if (!document.body) {
	            Engine.nextTick(mount.bind(this, context, el));
	            return;
	        }
	
	        document.body.appendChild(el);
	        context.emit('resize');
	    }
	
	    /**
	     * Registers an existing context to be updated within the run loop.
	     *
	     * @static
	     * @method registerContext
	     *
	     * @param {Context} context Context to register
	     * @return {FamousContext} provided context
	     */
	    Engine.registerContext = function registerContext(context) {
	        contexts.push(context);
	        return context;
	    };
	
	    /**
	     * Returns a list of all contexts.
	     *
	     * @static
	     * @method getContexts
	     * @return {Array} contexts that are updated on each tick
	     */
	    Engine.getContexts = function getContexts() {
	        return contexts;
	    };
	
	    /**
	     * Removes a context from the run loop. Note: this does not do any
	     *     cleanup.
	     *
	     * @static
	     * @method deregisterContext
	     *
	     * @param {Context} context Context to deregister
	     */
	    Engine.deregisterContext = function deregisterContext(context) {
	        var i = contexts.indexOf(context);
	        if (i >= 0) contexts.splice(i, 1);
	    };
	
	    /**
	     * Queue a function to be executed on the next tick of the
	     *    Engine.
	     *
	     * @static
	     * @method nextTick
	     *
	     * @param {function(Object)} fn function accepting window object
	     */
	    Engine.nextTick = function nextTick(fn) {
	        nextTickQueue.push(fn);
	    };
	
	    /**
	     * Queue a function to be executed sometime soon, at a time that is
	     *    unlikely to affect frame rate.
	     *
	     * @static
	     * @method defer
	     *
	     * @param {Function} fn
	     */
	    Engine.defer = function defer(fn) {
	        deferQueue.push(fn);
	    };
	
	    optionsManager.on('change', function(data) {
	        if (data.id === 'fpsCap') Engine.setFPSCap(data.value);
	        else if (data.id === 'runLoop') {
	            // kick off the loop only if it was stopped
	            if (!loopEnabled && data.value) {
	                loopEnabled = true;
	                window.requestAnimationFrame(loop);
	            }
	        }
	    });
	
	    module.exports = Engine;


/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2015
	 */
	
	    var RenderNode = __webpack_require__(238);
	    var EventHandler = __webpack_require__(241);
	    var ElementAllocator = __webpack_require__(246);
	    var Transform = __webpack_require__(229);
	    var Transitionable = __webpack_require__(230);
	
	    var _zeroZero = [0, 0];
	    var usePrefix = !('perspective' in document.documentElement.style);
	
	    function _getElementSize() {
	        var element = this.container;
	        return [element.clientWidth, element.clientHeight];
	    }
	
	    var _setPerspective = usePrefix ? function(element, perspective) {
	        element.style.webkitPerspective = perspective ? perspective.toFixed() + 'px' : '';
	    } : function(element, perspective) {
	        element.style.perspective = perspective ? perspective.toFixed() + 'px' : '';
	    };
	
	    /**
	     * The top-level container for a Famous-renderable piece of the document.
	     *   It is directly updated by the process-wide Engine object, and manages one
	     *   render tree root, which can contain other renderables.
	     *
	     * @class Context
	     * @constructor
	     * @private
	     * @param {Node} container Element in which content will be inserted
	     */
	    function Context(container) {
	        this.container = container;
	        this._allocator = new ElementAllocator(container);
	
	        this._node = new RenderNode();
	        this._eventOutput = new EventHandler();
	        this._size = _getElementSize.call(this);
	
	        this._perspectiveState = new Transitionable(0);
	        this._perspective = undefined;
	
	        this._nodeContext = {
	            allocator: this._allocator,
	            transform: Transform.identity,
	            opacity: 1,
	            origin: _zeroZero,
	            align: _zeroZero,
	            size: this._size
	        };
	
	        this._eventOutput.on('resize', function() {
	            this.setSize(_getElementSize.call(this));
	        }.bind(this));
	
	    }
	
	    // Note: Unused
	    Context.prototype.getAllocator = function getAllocator() {
	        return this._allocator;
	    };
	
	    /**
	     * Add renderables to this Context's render tree.
	     *
	     * @method add
	     *
	     * @param {Object} obj renderable object
	     * @return {RenderNode} RenderNode wrapping this object, if not already a RenderNode
	     */
	    Context.prototype.add = function add(obj) {
	        return this._node.add(obj);
	    };
	
	    /**
	     * Move this Context to another containing document element.
	     *
	     * @method migrate
	     *
	     * @param {Node} container Element to which content will be migrated
	     */
	    Context.prototype.migrate = function migrate(container) {
	        if (container === this.container) return;
	        this.container = container;
	        this._allocator.migrate(container);
	    };
	
	    /**
	     * Gets viewport size for Context.
	     *
	     * @method getSize
	     *
	     * @return {Array.Number} viewport size as [width, height]
	     */
	    Context.prototype.getSize = function getSize() {
	        return this._size;
	    };
	
	    /**
	     * Sets viewport size for Context.
	     *
	     * @method setSize
	     *
	     * @param {Array.Number} size [width, height].  If unspecified, use size of root document element.
	     */
	    Context.prototype.setSize = function setSize(size) {
	        if (!size) size = _getElementSize.call(this);
	        this._size[0] = size[0];
	        this._size[1] = size[1];
	    };
	
	    /**
	     * Commit this Context's content changes to the document.
	     *
	     * @private
	     * @method update
	     * @param {Object} contextParameters engine commit specification
	     */
	    Context.prototype.update = function update(contextParameters) {
	        if (contextParameters) {
	            if (contextParameters.transform) this._nodeContext.transform = contextParameters.transform;
	            if (contextParameters.opacity) this._nodeContext.opacity = contextParameters.opacity;
	            if (contextParameters.origin) this._nodeContext.origin = contextParameters.origin;
	            if (contextParameters.align) this._nodeContext.align = contextParameters.align;
	            if (contextParameters.size) this._nodeContext.size = contextParameters.size;
	        }
	        var perspective = this._perspectiveState.get();
	        if (perspective !== this._perspective) {
	            _setPerspective(this.container, perspective);
	            this._perspective = perspective;
	        }
	
	        this._node.commit(this._nodeContext);
	    };
	
	    /**
	     * Get current perspective of this context in pixels.
	     *
	     * @method getPerspective
	     * @return {Number} depth perspective in pixels
	     */
	    Context.prototype.getPerspective = function getPerspective() {
	        return this._perspectiveState.get();
	    };
	
	    /**
	     * Set current perspective of this context in pixels.
	     *
	     * @method setPerspective
	     * @param {Number} perspective in pixels
	     * @param {Object} [transition] Transitionable object for applying the change
	     * @param {function(Object)} callback function called on completion of transition
	     */
	    Context.prototype.setPerspective = function setPerspective(perspective, transition, callback) {
	        return this._perspectiveState.set(perspective, transition, callback);
	    };
	
	    /**
	     * Trigger an event, sending to all downstream handlers
	     *   listening for provided 'type' key.
	     *
	     * @method emit
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {Object} event event data
	     * @return {EventHandler} this
	     */
	    Context.prototype.emit = function emit(type, event) {
	        return this._eventOutput.emit(type, event);
	    };
	
	    /**
	     * Bind a callback function to an event type handled by this object.
	     *
	     * @method "on"
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {function(string, Object)} handler callback
	     * @return {EventHandler} this
	     */
	    Context.prototype.on = function on(type, handler) {
	        return this._eventOutput.on(type, handler);
	    };
	
	    /**
	     * Unbind an event by type and handler.
	     *   This undoes the work of "on".
	     *
	     * @method removeListener
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {function} handler function object to remove
	     * @return {EventHandler} internal event handler object (for chaining)
	     */
	    Context.prototype.removeListener = function removeListener(type, handler) {
	        return this._eventOutput.removeListener(type, handler);
	    };
	
	    /**
	     * Add event handler object to set of downstream handlers.
	     *
	     * @method pipe
	     *
	     * @param {EventHandler} target event handler target object
	     * @return {EventHandler} passed event handler
	     */
	    Context.prototype.pipe = function pipe(target) {
	        return this._eventOutput.pipe(target);
	    };
	
	    /**
	     * Remove handler object from set of downstream handlers.
	     *   Undoes work of "pipe".
	     *
	     * @method unpipe
	     *
	     * @param {EventHandler} target target handler object
	     * @return {EventHandler} provided target
	     */
	    Context.prototype.unpipe = function unpipe(target) {
	        return this._eventOutput.unpipe(target);
	    };
	
	    module.exports = Context;


/***/ },
/* 246 */
/***/ function(module, exports) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2015
	 */
	
	
	    /**
	     * Internal helper object to Context that handles the process of
	     *   creating and allocating DOM elements within a managed div.
	     *   Private.
	     *
	     * @class ElementAllocator
	     * @constructor
	     * @private
	     * @param {Node} container document element in which Famo.us content will be inserted
	     */
	    function ElementAllocator(container) {
	        if (!container) container = document.createDocumentFragment();
	        this.container = container;
	        this.detachedNodes = {};
	        this.nodeCount = 0;
	    }
	
	    /**
	     * Move the document elements from their original container to a new one.
	     *
	     * @private
	     * @method migrate
	     *
	     * @param {Node} container document element to which Famo.us content will be migrated
	     */
	    ElementAllocator.prototype.migrate = function migrate(container) {
	        var oldContainer = this.container;
	        if (container === oldContainer) return;
	
	        if (oldContainer instanceof DocumentFragment) {
	            container.appendChild(oldContainer);
	        }
	        else {
	            while (oldContainer.hasChildNodes()) {
	                container.appendChild(oldContainer.firstChild);
	            }
	        }
	
	        this.container = container;
	    };
	
	    /**
	     * Allocate an element of specified type from the pool.
	     *
	     * @private
	     * @method allocate
	     *
	     * @param {string} type type of element, e.g. 'div'
	     * @return {Node} allocated document element
	     */
	    ElementAllocator.prototype.allocate = function allocate(type) {
	        type = type.toLowerCase();
	        if (!(type in this.detachedNodes)) this.detachedNodes[type] = [];
	        var nodeStore = this.detachedNodes[type];
	        var result;
	        if (nodeStore.length > 0) {
	            result = nodeStore.pop();
	        }
	        else {
	            result = document.createElement(type);
	            this.container.appendChild(result);
	        }
	        this.nodeCount++;
	        return result;
	    };
	
	    /**
	     * De-allocate an element of specified type to the pool.
	     *
	     * @private
	     * @method deallocate
	     *
	     * @param {Node} element document element to deallocate
	     */
	    ElementAllocator.prototype.deallocate = function deallocate(element) {
	        var nodeType = element.nodeName.toLowerCase();
	        var nodeStore = this.detachedNodes[nodeType];
	        nodeStore.push(element);
	        this.nodeCount--;
	    };
	
	    /**
	     * Get count of total allocated nodes in the document.
	     *
	     * @private
	     * @method getNodeCount
	     *
	     * @return {Number} total node count
	     */
	    ElementAllocator.prototype.getNodeCount = function getNodeCount() {
	        return this.nodeCount;
	    };
	
	    module.exports = ElementAllocator;


/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2015
	 */
	
	    var EventHandler = __webpack_require__(241);
	
	    /**
	     *  A collection of methods for setting options which can be extended
	     *  onto other classes.
	     *
	     *
	     *  **** WARNING ****
	     *  You can only pass through objects that will compile into valid JSON.
	     *
	     *  Valid options:
	     *      Strings,
	     *      Arrays,
	     *      Objects,
	     *      Numbers,
	     *      Nested Objects,
	     *      Nested Arrays.
	     *
	     *    This excludes:
	     *        Document Fragments,
	     *        Functions
	     * @class OptionsManager
	     * @constructor
	     * @param {Object} value options dictionary
	     */
	    function OptionsManager(value) {
	        this._value = value;
	        this.eventOutput = null;
	    }
	
	    /**
	     * Create options manager from source dictionary with arguments overriden by patch dictionary.
	     *
	     * @static
	     * @method OptionsManager.patch
	     *
	     * @param {Object} source source arguments
	     * @param {...Object} data argument additions and overwrites
	     * @return {Object} source object
	     */
	    OptionsManager.patch = function patchObject(source, data) {
	        var manager = new OptionsManager(source);
	        for (var i = 1; i < arguments.length; i++) manager.patch(arguments[i]);
	        return source;
	    };
	
	    function _createEventOutput() {
	        this.eventOutput = new EventHandler();
	        this.eventOutput.bindThis(this);
	        EventHandler.setOutputHandler(this, this.eventOutput);
	    }
	
	    /**
	     * Create OptionsManager from source with arguments overriden by patches.
	     *   Triggers 'change' event on this object's event handler if the state of
	     *   the OptionsManager changes as a result.
	     *
	     * @method patch
	     *
	     * @param {...Object} arguments list of patch objects
	     * @return {OptionsManager} this
	     */
	    OptionsManager.prototype.patch = function patch() {
	        var myState = this._value;
	        for (var i = 0; i < arguments.length; i++) {
	            var data = arguments[i];
	            for (var k in data) {
	                if ((k in myState) && (data[k] && data[k].constructor === Object) && (myState[k] && myState[k].constructor === Object)) {
	                    if (!myState.hasOwnProperty(k)) myState[k] = Object.create(myState[k]);
	                    this.key(k).patch(data[k]);
	                    if (this.eventOutput) this.eventOutput.emit('change', {id: k, value: this.key(k).value()});
	                }
	                else this.set(k, data[k]);
	            }
	        }
	        return this;
	    };
	
	    /**
	     * Alias for patch
	     *
	     * @method setOptions
	     *
	     */
	    OptionsManager.prototype.setOptions = OptionsManager.prototype.patch;
	
	    /**
	     * Return OptionsManager based on sub-object retrieved by key
	     *
	     * @method key
	     *
	     * @param {string} identifier key
	     * @return {OptionsManager} new options manager with the value
	     */
	    OptionsManager.prototype.key = function key(identifier) {
	        var result = new OptionsManager(this._value[identifier]);
	        if (!(result._value instanceof Object) || result._value instanceof Array) result._value = {};
	        return result;
	    };
	
	    /**
	     * Look up value by key or get the full options hash
	     * @method get
	     *
	     * @param {string} key key
	     * @return {Object} associated object or full options hash
	     */
	    OptionsManager.prototype.get = function get(key) {
	        return key ? this._value[key] : this._value;
	    };
	
	    /**
	     * Alias for get
	     * @method getOptions
	     */
	    OptionsManager.prototype.getOptions = OptionsManager.prototype.get;
	
	    /**
	     * Set key to value.  Outputs 'change' event if a value is overwritten.
	     *
	     * @method set
	     *
	     * @param {string} key key string
	     * @param {Object} value value object
	     * @return {OptionsManager} new options manager based on the value object
	     */
	    OptionsManager.prototype.set = function set(key, value) {
	        var originalValue = this.get(key);
	        this._value[key] = value;
	        if (this.eventOutput && value !== originalValue) this.eventOutput.emit('change', {id: key, value: value});
	        return this;
	    };
	
	    /**
	     * Bind a callback function to an event type handled by this object.
	     *
	     * @method "on"
	     *
	     * @param {string} type event type key (for example, 'change')
	     * @param {function(string, Object)} handler callback
	     * @return {EventHandler} this
	     */
	    OptionsManager.prototype.on = function on() {
	        _createEventOutput.call(this);
	        return this.on.apply(this, arguments);
	    };
	
	    /**
	     * Unbind an event by type and handler.
	     *   This undoes the work of "on".
	     *
	     * @method removeListener
	     *
	     * @param {string} type event type key (for example, 'change')
	     * @param {function} handler function object to remove
	     * @return {EventHandler} internal event handler object (for chaining)
	     */
	    OptionsManager.prototype.removeListener = function removeListener() {
	        _createEventOutput.call(this);
	        return this.removeListener.apply(this, arguments);
	    };
	
	    /**
	     * Add event handler object to set of downstream handlers.
	     *
	     * @method pipe
	     *
	     * @param {EventHandler} target event handler target object
	     * @return {EventHandler} passed event handler
	     */
	    OptionsManager.prototype.pipe = function pipe() {
	        _createEventOutput.call(this);
	        return this.pipe.apply(this, arguments);
	    };
	
	    /**
	     * Remove handler object from set of downstream handlers.
	     * Undoes work of "pipe"
	     *
	     * @method unpipe
	     *
	     * @param {EventHandler} target target handler object
	     * @return {EventHandler} provided target
	     */
	    OptionsManager.prototype.unpipe = function unpipe() {
	        _createEventOutput.call(this);
	        return this.unpipe.apply(this, arguments);
	    };
	
	    module.exports = OptionsManager;


/***/ },
/* 248 */
/***/ function(module, exports) {

	"use strict";
	
	// Polyfill for Function.name on browsers that do not support it (IE):
	// See: http://stackoverflow.com/questions/6903762/function-name-not-supported-in-ie
	if (!(function f() {}).name) {
	    Object.defineProperty(Function.prototype, "name", {
	        get: function () {
	            var name = this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1];
	
	            // For better performance only parse once, and then cache the
	            // result through a new accessor for repeated access.
	            Object.defineProperty(this, "name", { value: name });
	
	            return name;
	        }
	    });
	}
	//# sourceMappingURL=polyfill.Function.name.js.map

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Grid = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Modifier = __webpack_require__(236);
	
	var _Modifier2 = _interopRequireDefault(_Modifier);
	
	var _Transform = __webpack_require__(229);
	
	var _Transform2 = _interopRequireDefault(_Transform);
	
	var _Molecule2 = __webpack_require__(235);
	
	var _Molecule3 = _interopRequireDefault(_Molecule2);
	
	var _forLength = __webpack_require__(250);
	
	var _forLength2 = _interopRequireDefault(_forLength);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LICENSE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This Source Code Form is subject to the terms of the Mozilla Public
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * License, v. 2.0. If a copy of the MPL was not distributed with this
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	/**
	 * A scenegraph tree with a variable number of leaf node Modifiers (the grid
	 * cells) that are arranged in a grid. Add any [famous/src/core/RenderNode](#famous/src/core/RenderNode)-compatible
	 * item to each leafnode of the grid.
	 *
	 * TODO: Use Molecule instead of Modifier for the grid cells.
	 * TODO: Add an options parameter, that the Molecule constructor will handle.
	 *
	 * @class Grid
	 * @extends Molecule
	 */
	
	var Grid = exports.Grid = function (_Molecule) {
	    _inherits(Grid, _Molecule);
	
	    /**
	     * Creates a new Grid having the specified number of columns, number of rows,
	     * and famo.us-style size.
	     *
	     * @constructor
	     * @param {Number} columns The integer number of columns.
	     * @param {Number} rows The integer number of rows.
	     * @param {Array} size A famo.us-style width/height size array.
	     */
	
	    function Grid(columns, rows, size) {
	        _classCallCheck(this, Grid);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Grid).call(this, { size: size }));
	
	        _this.columns = columns;
	        _this.rows = rows;
	        _this.cellNodes = [];
	
	        if (typeof _this.options.size === 'undefined') {
	            _this.setOptions({ size: [undefined, undefined] });
	        }
	
	        (0, _forLength2.default)(_this.columns * _this.rows, _this._createGridCell.bind(_this));
	        return _this;
	    }
	
	    /**
	     * Creates a grid cell at the given index.
	     *
	     * @private
	     * @param {Number} index The integer index of the grid cell.
	     */
	
	
	    _createClass(Grid, [{
	        key: '_createGridCell',
	        value: function _createGridCell(index) {
	            var column = index % this.columns;
	            var row = Math.floor(index / this.columns);
	
	            var cellSize = null;
	            if (typeof this.options.size[0] != 'undefined' && typeof this.options.size[1] != 'undefined') {
	                cellSize = [];
	                cellSize[0] = this.options.size[0] / this.columns;
	                cellSize[1] = this.options.size[1] / this.rows;
	            }
	
	            var mod = new _Modifier2.default({
	                align: [0, 0],
	                origin: [0, 0],
	                size: cellSize ? [cellSize[0], cellSize[1]] : [undefined, undefined],
	                transform: _Transform2.default.translate(column * cellSize[0], row * cellSize[1], 0)
	            });
	            var mod2 = new _Modifier2.default({
	                //transform: Transform.rotateY(Math.PI/10),
	                align: [0.5, 0.5],
	                origin: [0.5, 0.5]
	            });
	            // FIXME: ^^^ Why do I need an extra Modifier to align stuff in the middle of the grid cells?????
	            // ^ I think this is a Famous 0.3 bug.
	            this.cellNodes.push(this.node.add(mod).add(mod2));
	        }
	
	        /**
	         * Sets the items to be layed out in the grid.
	         *
	         * @param {Array} children An array of [famous/src/core/RenderNode](#famous/src/core/RenderNode)-compatible items.
	         */
	
	    }, {
	        key: 'setChildren',
	        value: function setChildren(children) {
	            (0, _forLength2.default)(this.columns * this.rows, function (index) {
	                //this.cellNodes[index].set(null); // TODO: how do we erase previous children?
	                this.cellNodes[index].add(children[index]);
	            }.bind(this));
	            return this;
	        }
	    }]);
	
	    return Grid;
	}(_Molecule3.default);
	
	exports.default = Grid;

/***/ },
/* 250 */
/***/ function(module, exports) {

	"use strict";
	
	// loop for a given length, performing action each loop iteration. action receives the index of the loop.
	exports.forLength = forLength;
	function forLength(length, action) {
	    for (var i = 0; i < length; i += 1) {
	        action(i);
	    }
	}
	exports["default"] = forLength;
	exports.__esModule = true;
	//# sourceMappingURL=forLength.js.map

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DoubleSidedPlane = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Transform = __webpack_require__(229);
	
	var _Transform2 = _interopRequireDefault(_Transform);
	
	var _Molecule2 = __webpack_require__(235);
	
	var _Molecule3 = _interopRequireDefault(_Molecule2);
	
	var _Plane = __webpack_require__(252);
	
	var _Plane2 = _interopRequireDefault(_Plane);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LICENSE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This Source Code Form is subject to the terms of the Mozilla Public
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * License, v. 2.0. If a copy of the MPL was not distributed with this
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	/**
	 * A scenegraph tree who's two leaf nodes are [Plane](#Plane) instances facing
	 * opposite directions. For the purposes of these docs, in a brand new app with
	 * only a single `DoubleSidedPlane` added to the context, and having no
	 * rotation, "plane1" faces you and "plane2" faces away.
	 *
	 * @class DoubleSidedPlane
	 * @extends Molecule
	 */
	
	var DoubleSidedPlane = exports.DoubleSidedPlane = function (_Molecule) {
	  _inherits(DoubleSidedPlane, _Molecule);
	
	  /**
	   * Creates a new `DoubleSidedPlane` who's `initialOptions` get passed to
	   * both [Plane](#Plane) instances, as well as this DoubleSidedPlane's parent
	   * [Molecule](#Molecule) constructor.
	   *
	   * @constructor
	   * @param {Object} initialOptions The options to initiate the `DoubleSidedPlane` with.
	   */
	
	  function DoubleSidedPlane(initialOptions) {
	    _classCallCheck(this, DoubleSidedPlane);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DoubleSidedPlane).call(this, initialOptions));
	
	    _this.children = [];
	    _this.plane1 = new _Plane2.default(_this.options);
	    _this.plane1.transform.set(_Transform2.default.rotate(0, 0, 0));
	    _this.setOptions({ properties: { background: 'orange' } });
	    _this.plane2 = new _Plane2.default(_this.options);
	    _this.plane2.transform.set(_Transform2.default.rotate(0, Math.PI, 0));
	
	    _this.children.push(_this.plane1);
	    _this.children.push(_this.plane2);
	    _this.node.add(_this.plane2.node);
	    _this.node.add(_this.plane1.node);
	    _this.plane1.pipe(_this.options.handler);
	    _this.plane2.pipe(_this.options.handler);
	
	    return _this;
	  }
	
	  /**
	   * Get the content of the [famous/src/core/Surface](#famous/src/core/Surface) of each [Plane](#Plane).
	   *
	   * @returns {Array} An array containing two items, the content of each
	   * `Plane`. The first item is from "plane1".
	   */
	
	
	  _createClass(DoubleSidedPlane, [{
	    key: 'getContent',
	    value: function getContent() {
	      return [this.plane1.getContent(), this.plane2.getContent()];
	    }
	
	    /**
	     * Set the content of both [Plane](#Plane) instances.
	     *
	     * @param {Array} content An array of content, one item per `Plane`. The
	     * first item is for "plane1".
	     */
	
	  }, {
	    key: 'setContent',
	    value: function setContent(content) {
	      this.plane1.setContent(content[0]);
	      this.plane2.setContent(content[1]);
	    }
	  }]);
	
	  return DoubleSidedPlane;
	}(_Molecule3.default);
	
	exports.default = DoubleSidedPlane;

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Plane = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Surface = __webpack_require__(253);
	
	var _Surface2 = _interopRequireDefault(_Surface);
	
	var _Molecule2 = __webpack_require__(235);
	
	var _Molecule3 = _interopRequireDefault(_Molecule2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LICENSE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This Source Code Form is subject to the terms of the Mozilla Public
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * License, v. 2.0. If a copy of the MPL was not distributed with this
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	/**
	 * Planes have the properties of [Molecules](#Molecule), plus they contain a
	 * [famous/src/core/Surface](#famous/src/core/Surface) so that they ultimately render
	 * onto the screen. A Surface's events are automatically piped to it's
	 * [famous/src/core/EventHandler](#famous/src/core/EventHandler), inherited from
	 * `Molecule`.
	 *
	 * @class Plane
	 * @extends Molecule
	 */
	
	var Plane = exports.Plane = function (_Molecule) {
	  _inherits(Plane, _Molecule);
	
	  /**
	   * Creates a new `Plane`. Properties from the `initialOptions` parameter
	   * are applied to this Plane's [famous/src/core/Surface](#famous/src/core/Surface) as well as to
	   * to this Plane's [famous/src/core/Modifier](#famous/src/core/Modifier), hence the API of a Plane
	   * is currently the combination of the Famo.us `Modifier` and `Surface` APIs.
	   *
	   * @constructor
	   * @param {Object} initialOptions Options for the new Plane.
	   */
	
	  function Plane(initialOptions) {
	    _classCallCheck(this, Plane);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Plane).call(this, initialOptions));
	
	    _this.surface = new _Surface2.default(_this.options);
	    _this.node.add(_this.surface);
	    _this.surface.pipe(_this.options.handler);
	    return _this;
	  }
	
	  /**
	   * Get the content of this Plane's [famous/src/core/Surface](#famous/src/core/Surface).
	   * See [famous/src/core/Surface.getContent](#famous/src/core/Surface.getContent).
	   */
	
	
	  _createClass(Plane, [{
	    key: 'getContent',
	    value: function getContent() {
	      var args = Array.prototype.splice.call(arguments, 0);
	      return this.surface.getContent.apply(this.surface, args);
	    }
	
	    /**
	     * Set the content of this Plane's [famous/src/core/Surface](#famous/src/core/Surface).
	     * See [famous/src/core/Surface.setContent](#famous/src/core/Surface.setContent).
	     */
	
	  }, {
	    key: 'setContent',
	    value: function setContent() {
	      var args = Array.prototype.splice.call(arguments, 0);
	      return this.surface.setContent.apply(this.surface, args);
	    }
	  }]);
	
	  return Plane;
	}(_Molecule3.default);
	
	exports.default = Plane;

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2015
	 */
	
	    var ElementOutput = __webpack_require__(254);
	
	    /**
	     * A base class for viewable content and event
	     *   targets inside a Famo.us application, containing a renderable document
	     *   fragment. Like an HTML div, it can accept internal markup,
	     *   properties, classes, and handle events.
	     *
	     * @class Surface
	     * @constructor
	     *
	     * @param {Object} [options] default option overrides
	     * @param {Array.Number} [options.size] [width, height] in pixels
	     * @param {Array.string} [options.classes] CSS classes to set on target div
	     * @param {Array} [options.properties] string dictionary of CSS properties to set on target div
	     * @param {Array} [options.attributes] string dictionary of HTML attributes to set on target div
	     * @param {string} [options.content] inner (HTML) content of surface
	     */
	    function Surface(options) {
	        ElementOutput.call(this);
	
	        this.options = {};
	
	        this.properties = {};
	        this.attributes = {};
	        this.content = '';
	        this.classList = [];
	        this.size = null;
	
	        this._classesDirty = true;
	        this._stylesDirty = true;
	        this._attributesDirty = true;
	        this._sizeDirty = true;
	        this._contentDirty = true;
	        this._trueSizeCheck = true;
	
	        this._dirtyClasses = [];
	
	        if (options) this.setOptions(options);
	
	        this._currentTarget = null;
	    }
	    Surface.prototype = Object.create(ElementOutput.prototype);
	    Surface.prototype.constructor = Surface;
	    Surface.prototype.elementType = 'div';
	    Surface.prototype.elementClass = 'famous-surface';
	
	    /**
	     * Set HTML attributes on this Surface. Note that this will cause
	     *    dirtying and thus re-rendering, even if values do not change.
	     *
	     * @method setAttributes
	    * @param {Object} attributes property dictionary of "key" => "value"
	     */
	    Surface.prototype.setAttributes = function setAttributes(attributes) {
	        for (var n in attributes) {
	            if (n === 'style') throw new Error('Cannot set styles via "setAttributes" as it will break Famo.us.  Use "setProperties" instead.');
	            this.attributes[n] = attributes[n];
	        }
	        this._attributesDirty = true;
	    };
	
	    /**
	     * Get HTML attributes on this Surface.
	     *
	     * @method getAttributes
	     *
	     * @return {Object} Dictionary of this Surface's attributes.
	     */
	    Surface.prototype.getAttributes = function getAttributes() {
	        return this.attributes;
	    };
	
	    /**
	     * Set CSS-style properties on this Surface. Note that this will cause
	     *    dirtying and thus re-rendering, even if values do not change.
	     *
	     * @method setProperties
	     * @chainable
	     * @param {Object} properties property dictionary of "key" => "value"
	     */
	    Surface.prototype.setProperties = function setProperties(properties) {
	        for (var n in properties) {
	            this.properties[n] = properties[n];
	        }
	        this._stylesDirty = true;
	        return this;
	    };
	
	    /**
	     * Get CSS-style properties on this Surface.
	     *
	     * @method getProperties
	     *
	     * @return {Object} Dictionary of this Surface's properties.
	     */
	    Surface.prototype.getProperties = function getProperties() {
	        return this.properties;
	    };
	
	    /**
	     * Add CSS-style class to the list of classes on this Surface. Note
	     *   this will map directly to the HTML property of the actual
	     *   corresponding rendered <div>.
	     *
	     * @method addClass
	     * @chainable
	     * @param {string} className name of class to add
	     */
	    Surface.prototype.addClass = function addClass(className) {
	        if (this.classList.indexOf(className) < 0) {
	            this.classList.push(className);
	            this._classesDirty = true;
	        }
	        return this;
	    };
	
	    /**
	     * Remove CSS-style class from the list of classes on this Surface.
	     *   Note this will map directly to the HTML property of the actual
	     *   corresponding rendered <div>.
	     *
	     * @method removeClass
	     * @chainable
	     * @param {string} className name of class to remove
	     */
	    Surface.prototype.removeClass = function removeClass(className) {
	        var i = this.classList.indexOf(className);
	        if (i >= 0) {
	            this._dirtyClasses.push(this.classList.splice(i, 1)[0]);
	            this._classesDirty = true;
	        }
	        return this;
	    };
	
	    /**
	     * Toggle CSS-style class from the list of classes on this Surface.
	     *   Note this will map directly to the HTML property of the actual
	     *   corresponding rendered <div>.
	     *
	     * @method toggleClass
	     * @param {string} className name of class to toggle
	     */
	    Surface.prototype.toggleClass = function toggleClass(className) {
	        var i = this.classList.indexOf(className);
	        if (i >= 0) {
	            this.removeClass(className);
	        } else {
	            this.addClass(className);
	        }
	        return this;
	    };
	
	    /**
	     * Reset class list to provided dictionary.
	     * @method setClasses
	     * @chainable
	     * @param {Array.string} classList
	     */
	    Surface.prototype.setClasses = function setClasses(classList) {
	        var i = 0;
	        var removal = [];
	        for (i = 0; i < this.classList.length; i++) {
	            if (classList.indexOf(this.classList[i]) < 0) removal.push(this.classList[i]);
	        }
	        for (i = 0; i < removal.length; i++) this.removeClass(removal[i]);
	        // duplicates are already checked by addClass()
	        for (i = 0; i < classList.length; i++) this.addClass(classList[i]);
	        return this;
	    };
	
	    /**
	     * Get array of CSS-style classes attached to this div.
	     *
	     * @method getClasslist
	     * @return {Array.string} array of class names
	     */
	    Surface.prototype.getClassList = function getClassList() {
	        return this.classList;
	    };
	
	    /**
	     * Set or overwrite inner (HTML) content of this surface. Note that this
	     *    causes a re-rendering if the content has changed.
	     *
	     * @method setContent
	     * @chainable
	     * @param {string|Document Fragment} content HTML content
	     */
	    Surface.prototype.setContent = function setContent(content) {
	        if (this.content !== content) {
	            this.content = content;
	            this._contentDirty = true;
	        }
	        return this;
	    };
	
	    /**
	     * Return inner (HTML) content of this surface.
	     *
	     * @method getContent
	     *
	     * @return {string} inner (HTML) content
	     */
	    Surface.prototype.getContent = function getContent() {
	        return this.content;
	    };
	
	    /**
	     * Set options for this surface
	     *
	     * @method setOptions
	     * @chainable
	     * @param {Object} [options] overrides for default options.  See constructor.
	     */
	    Surface.prototype.setOptions = function setOptions(options) {
	        if (options.size) this.setSize(options.size);
	        if (options.classes) this.setClasses(options.classes);
	        if (options.properties) this.setProperties(options.properties);
	        if (options.attributes) this.setAttributes(options.attributes);
	        if (options.content) this.setContent(options.content);
	        return this;
	    };
	
	    //  Apply to document all changes from removeClass() since last setup().
	    function _cleanupClasses(target) {
	        for (var i = 0; i < this._dirtyClasses.length; i++) target.classList.remove(this._dirtyClasses[i]);
	        this._dirtyClasses = [];
	    }
	
	    // Apply values of all Famous-managed styles to the document element.
	    //  These will be deployed to the document on call to #setup().
	    function _applyStyles(target) {
	        for (var n in this.properties) {
	            target.style[n] = this.properties[n];
	        }
	    }
	
	    // Clear all Famous-managed styles from the document element.
	    // These will be deployed to the document on call to #setup().
	    function _cleanupStyles(target) {
	        for (var n in this.properties) {
	            target.style[n] = '';
	        }
	    }
	
	    // Apply values of all Famous-managed attributes to the document element.
	    //  These will be deployed to the document on call to #setup().
	    function _applyAttributes(target) {
	        for (var n in this.attributes) {
	            target.setAttribute(n, this.attributes[n]);
	        }
	    }
	
	    // Clear all Famous-managed attributes from the document element.
	    // These will be deployed to the document on call to #setup().
	    function _cleanupAttributes(target) {
	        for (var n in this.attributes) {
	            target.removeAttribute(n);
	        }
	    }
	
	    function _xyNotEquals(a, b) {
	        return (a && b) ? (a[0] !== b[0] || a[1] !== b[1]) : a !== b;
	    }
	
	    /**
	     * One-time setup for an element to be ready for commits to document.
	     *
	     * @private
	     * @method setup
	     *
	     * @param {ElementAllocator} allocator document element pool for this context
	     */
	    Surface.prototype.setup = function setup(allocator) {
	        var target = allocator.allocate(this.elementType);
	        if (this.elementClass) {
	            if (this.elementClass instanceof Array) {
	                for (var i = 0; i < this.elementClass.length; i++) {
	                    target.classList.add(this.elementClass[i]);
	                }
	            }
	            else {
	                target.classList.add(this.elementClass);
	            }
	        }
	        target.style.display = '';
	        this.attach(target);
	        this._opacity = null;
	        this._currentTarget = target;
	        this._stylesDirty = true;
	        this._classesDirty = true;
	        this._attributesDirty = true;
	        this._sizeDirty = true;
	        this._contentDirty = true;
	        this._originDirty = true;
	        this._transformDirty = true;
	    };
	
	    /**
	     * Apply changes from this component to the corresponding document element.
	     * This includes changes to classes, styles, size, content, opacity, origin,
	     * and matrix transforms.
	     *
	     * @private
	     * @method commit
	     * @param {Context} context commit context
	     */
	    Surface.prototype.commit = function commit(context) {
	        if (!this._currentTarget) this.setup(context.allocator);
	        var target = this._currentTarget;
	        var size = context.size;
	
	        if (this._classesDirty) {
	            _cleanupClasses.call(this, target);
	            var classList = this.getClassList();
	            for (var i = 0; i < classList.length; i++) target.classList.add(classList[i]);
	            this._classesDirty = false;
	            this._trueSizeCheck = true;
	        }
	
	        if (this._stylesDirty) {
	            _applyStyles.call(this, target);
	            this._stylesDirty = false;
	            this._trueSizeCheck = true;
	        }
	
	        if (this._attributesDirty) {
	            _applyAttributes.call(this, target);
	            this._attributesDirty = false;
	            this._trueSizeCheck = true;
	        }
	
	        if (this.size) {
	            var origSize = context.size;
	            size = [this.size[0], this.size[1]];
	            if (size[0] === undefined) size[0] = origSize[0];
	            if (size[1] === undefined) size[1] = origSize[1];
	            if (size[0] === true || size[1] === true) {
	                if (size[0] === true){
	                    if (this._trueSizeCheck || (this._size[0] === 0)) {
	                        var width = target.offsetWidth;
	                        if (this._size && this._size[0] !== width) {
	                            this._size[0] = width;
	                            this._sizeDirty = true;
	                        }
	                        size[0] = width;
	                    } else {
	                        if (this._size) size[0] = this._size[0];
	                    }
	                }
	                if (size[1] === true){
	                    if (this._trueSizeCheck || (this._size[1] === 0)) {
	                        var height = target.offsetHeight;
	                        if (this._size && this._size[1] !== height) {
	                            this._size[1] = height;
	                            this._sizeDirty = true;
	                        }
	                        size[1] = height;
	                    } else {
	                        if (this._size) size[1] = this._size[1];
	                    }
	                }
	                this._trueSizeCheck = false;
	            }
	        }
	
	        if (_xyNotEquals(this._size, size)) {
	            if (!this._size) this._size = [0, 0];
	            this._size[0] = size[0];
	            this._size[1] = size[1];
	
	            this._sizeDirty = true;
	        }
	
	        if (this._sizeDirty) {
	            if (this._size) {
	                target.style.width = (this.size && this.size[0] === true) ? '' : this._size[0] + 'px';
	                target.style.height = (this.size && this.size[1] === true) ?  '' : this._size[1] + 'px';
	            }
	
	            this._eventOutput.emit('resize');
	        }
	
	        if (this._contentDirty) {
	            this.deploy(target);
	            this._eventOutput.emit('deploy');
	            this._contentDirty = false;
	            this._trueSizeCheck = true;
	        }
	
	        ElementOutput.prototype.commit.call(this, context);
	    };
	
	    /**
	     *  Remove all Famous-relevant attributes from a document element.
	     *    This is called by SurfaceManager's detach().
	     *    This is in some sense the reverse of .deploy().
	     *
	     * @private
	     * @method cleanup
	     * @param {ElementAllocator} allocator
	     */
	    Surface.prototype.cleanup = function cleanup(allocator) {
	        var i = 0;
	        var target = this._currentTarget;
	        this._eventOutput.emit('recall');
	        this.recall(target);
	        target.style.display = 'none';
	        target.style.opacity = '';
	        target.style.width = '';
	        target.style.height = '';
	        _cleanupStyles.call(this, target);
	        _cleanupAttributes.call(this, target);
	        var classList = this.getClassList();
	        _cleanupClasses.call(this, target);
	        for (i = 0; i < classList.length; i++) target.classList.remove(classList[i]);
	        if (this.elementClass) {
	            if (this.elementClass instanceof Array) {
	                for (i = 0; i < this.elementClass.length; i++) {
	                    target.classList.remove(this.elementClass[i]);
	                }
	            }
	            else {
	                target.classList.remove(this.elementClass);
	            }
	        }
	        this.detach(target);
	        this._currentTarget = null;
	        allocator.deallocate(target);
	    };
	
	    /**
	     * Place the document element that this component manages into the document.
	     *
	     * @private
	     * @method deploy
	     * @param {Node} target document parent of this container
	     */
	    Surface.prototype.deploy = function deploy(target) {
	        var content = this.getContent();
	        if (content instanceof Node) {
	            while (target.hasChildNodes()) target.removeChild(target.firstChild);
	            target.appendChild(content);
	        }
	        else target.innerHTML = content;
	    };
	
	    /**
	     * Remove any contained document content associated with this surface
	     *   from the actual document.
	     *
	     * @private
	     * @method recall
	     */
	    Surface.prototype.recall = function recall(target) {
	        var df = document.createDocumentFragment();
	        while (target.hasChildNodes()) df.appendChild(target.firstChild);
	        this.setContent(df);
	    };
	
	    /**
	     *  Get the x and y dimensions of the surface.
	     *
	     * @method getSize
	     * @return {Array.Number} [x,y] size of surface
	     */
	    Surface.prototype.getSize = function getSize() {
	        return this._size ? this._size : this.size;
	    };
	
	    /**
	     * Set x and y dimensions of the surface.
	     *
	     * @method setSize
	     * @chainable
	     * @param {Array.Number} size as [width, height]
	     */
	    Surface.prototype.setSize = function setSize(size) {
	        this.size = size ? [size[0], size[1]] : null;
	        this._sizeDirty = true;
	        return this;
	    };
	
	    module.exports = Surface;


/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2015
	 */
	
	    var Entity = __webpack_require__(239);
	    var EventHandler = __webpack_require__(241);
	    var Transform = __webpack_require__(229);
	
	    var usePrefix = !('transform' in document.documentElement.style);
	    var devicePixelRatio = window.devicePixelRatio || 1;
	
	    /**
	     * A base class for viewable content and event
	     *   targets inside a Famo.us application, containing a renderable document
	     *   fragment. Like an HTML div, it can accept internal markup,
	     *   properties, classes, and handle events.
	     *
	     * @class ElementOutput
	     * @constructor
	     *
	     * @param {Node} element document parent of this container
	     */
	    function ElementOutput(element) {
	        this._matrix = null;
	        this._opacity = 1;
	        this._origin = null;
	        this._size = null;
	
	        this._eventOutput = new EventHandler();
	        this._eventOutput.bindThis(this);
	
	        /** @ignore */
	        this.eventForwarder = function eventForwarder(event) {
	            this._eventOutput.emit(event.type, event);
	        }.bind(this);
	
	        this.id = Entity.register(this);
	        this._element = null;
	        this._sizeDirty = false;
	        this._originDirty = false;
	        this._transformDirty = false;
	
	        this._invisible = false;
	        if (element) this.attach(element);
	    }
	
	    /**
	     * Bind a callback function to an event type handled by this object.
	     *
	     * @method "on"
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {function(string, Object)} fn handler callback
	     * @return {EventHandler} this
	     */
	    ElementOutput.prototype.on = function on(type, fn) {
	        if (this._element) this._element.addEventListener(type, this.eventForwarder);
	        this._eventOutput.on(type, fn);
	    };
	
	    /**
	     * Unbind an event by type and handler.
	     *   This undoes the work of "on"
	     *
	     * @method removeListener
	     * @param {string} type event type key (for example, 'click')
	     * @param {function(string, Object)} fn handler
	     */
	    ElementOutput.prototype.removeListener = function removeListener(type, fn) {
	        this._eventOutput.removeListener(type, fn);
	    };
	
	    /**
	     * Trigger an event, sending to all downstream handlers
	     *   listening for provided 'type' key.
	     *
	     * @method emit
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {Object} [event] event data
	     * @return {EventHandler} this
	     */
	    ElementOutput.prototype.emit = function emit(type, event) {
	        if (event && !event.origin) event.origin = this;
	        var handled = this._eventOutput.emit(type, event);
	        if (handled && event && event.stopPropagation) event.stopPropagation();
	        return handled;
	    };
	
	    /**
	     * Add event handler object to set of downstream handlers.
	     *
	     * @method pipe
	     *
	     * @param {EventHandler} target event handler target object
	     * @return {EventHandler} passed event handler
	     */
	    ElementOutput.prototype.pipe = function pipe(target) {
	        return this._eventOutput.pipe(target);
	    };
	
	    /**
	     * Remove handler object from set of downstream handlers.
	     *   Undoes work of "pipe"
	     *
	     * @method unpipe
	     *
	     * @param {EventHandler} target target handler object
	     * @return {EventHandler} provided target
	     */
	    ElementOutput.prototype.unpipe = function unpipe(target) {
	        return this._eventOutput.unpipe(target);
	    };
	
	    /**
	     * Return spec for this surface. Note that for a base surface, this is
	     *    simply an id.
	     *
	     * @method render
	     * @private
	     * @return {Object} render spec for this surface (spec id)
	     */
	    ElementOutput.prototype.render = function render() {
	        return this.id;
	    };
	
	    //  Attach Famous event handling to document events emanating from target
	    //    document element.  This occurs just after attachment to the document.
	    //    Calling this enables methods like #on and #pipe.
	    function _addEventListeners(target) {
	        for (var i in this._eventOutput.listeners) {
	            target.addEventListener(i, this.eventForwarder);
	        }
	    }
	
	    //  Detach Famous event handling from document events emanating from target
	    //  document element.  This occurs just before detach from the document.
	    function _removeEventListeners(target) {
	        for (var i in this._eventOutput.listeners) {
	            target.removeEventListener(i, this.eventForwarder);
	        }
	    }
	
	    /**
	     * Return a Matrix's webkit css representation to be used with the
	     *    CSS3 -webkit-transform style.
	     *    Example: -webkit-transform: matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,716,243,0,1)
	     *
	     * @method _formatCSSTransform
	     * @private
	     * @param {FamousMatrix} m matrix
	     * @return {string} matrix3d CSS style representation of the transform
	     */
	    function _formatCSSTransform(m) {
	        m[12] = Math.round(m[12] * devicePixelRatio) / devicePixelRatio;
	        m[13] = Math.round(m[13] * devicePixelRatio) / devicePixelRatio;
	
	        var result = 'matrix3d(';
	        for (var i = 0; i < 15; i++) {
	            result += (m[i] < 0.000001 && m[i] > -0.000001) ? '0,' : m[i] + ',';
	        }
	        result += m[15] + ')';
	        return result;
	    }
	
	    /**
	     * Directly apply given FamousMatrix to the document element as the
	     *   appropriate webkit CSS style.
	     *
	     * @method setMatrix
	     *
	     * @static
	     * @private
	     * @param {Element} element document element
	     * @param {FamousMatrix} matrix
	     */
	
	    var _setMatrix;
	    if (usePrefix) {
	        _setMatrix = function(element, matrix) {
	            element.style.webkitTransform = _formatCSSTransform(matrix);
	        };
	    }
	    else {
	        _setMatrix = function(element, matrix) {
	            element.style.transform = _formatCSSTransform(matrix);
	        };
	    }
	
	    // format origin as CSS percentage string
	    function _formatCSSOrigin(origin) {
	        return (100 * origin[0]) + '% ' + (100 * origin[1]) + '%';
	    }
	
	    // Directly apply given origin coordinates to the document element as the
	    // appropriate webkit CSS style.
	    var _setOrigin = usePrefix ? function(element, origin) {
	        element.style.webkitTransformOrigin = _formatCSSOrigin(origin);
	    } : function(element, origin) {
	        element.style.transformOrigin = _formatCSSOrigin(origin);
	    };
	
	    // Shrink given document element until it is effectively invisible.
	    var _setInvisible = usePrefix ? function(element) {
	        element.style.webkitTransform = 'scale3d(0.0001,0.0001,0.0001)';
	        element.style.opacity = 0;
	    } : function(element) {
	        element.style.transform = 'scale3d(0.0001,0.0001,0.0001)';
	        element.style.opacity = 0;
	    };
	
	    function _xyNotEquals(a, b) {
	        return (a && b) ? (a[0] !== b[0] || a[1] !== b[1]) : a !== b;
	    }
	
	    /**
	     * Apply changes from this component to the corresponding document element.
	     * This includes changes to classes, styles, size, content, opacity, origin,
	     * and matrix transforms.
	     *
	     * @private
	     * @method commit
	     * @param {Context} context commit context
	     */
	    ElementOutput.prototype.commit = function commit(context) {
	        var target = this._element;
	        if (!target) return;
	
	        var matrix = context.transform;
	        var opacity = context.opacity;
	        var origin = context.origin;
	        var size = context.size;
	
	        if (!matrix && this._matrix) {
	            this._matrix = null;
	            this._opacity = 0;
	            _setInvisible(target);
	            return;
	        }
	
	        if (_xyNotEquals(this._origin, origin)) this._originDirty = true;
	        if (Transform.notEquals(this._matrix, matrix)) this._transformDirty = true;
	
	        if (this._invisible) {
	            this._invisible = false;
	            this._element.style.display = '';
	        }
	
	        if (this._opacity !== opacity) {
	            this._opacity = opacity;
	            target.style.opacity = (opacity >= 1) ? '0.999999' : opacity;
	        }
	
	        if (this._transformDirty || this._originDirty || this._sizeDirty) {
	            if (this._sizeDirty) this._sizeDirty = false;
	
	            if (this._originDirty) {
	                if (origin) {
	                    if (!this._origin) this._origin = [0, 0];
	                    this._origin[0] = origin[0];
	                    this._origin[1] = origin[1];
	                }
	                else this._origin = null;
	                _setOrigin(target, this._origin);
	                this._originDirty = false;
	            }
	
	            if (!matrix) matrix = Transform.identity;
	            this._matrix = matrix;
	            var aaMatrix = this._size ? Transform.thenMove(matrix, [-this._size[0]*origin[0], -this._size[1]*origin[1], 0]) : matrix;
	            _setMatrix(target, aaMatrix);
	            this._transformDirty = false;
	        }
	    };
	
	    ElementOutput.prototype.cleanup = function cleanup() {
	        if (this._element) {
	            this._invisible = true;
	            this._element.style.display = 'none';
	        }
	    };
	
	    /**
	     * Place the document element that this component manages into the document.
	     *
	     * @private
	     * @method attach
	     * @param {Node} target document parent of this container
	     */
	    ElementOutput.prototype.attach = function attach(target) {
	        this._element = target;
	        _addEventListeners.call(this, target);
	    };
	
	    /**
	     * Remove any contained document content associated with this surface
	     *   from the actual document.
	     *
	     * @private
	     * @method detach
	     */
	    ElementOutput.prototype.detach = function detach() {
	        var target = this._element;
	        if (target) {
	            _removeEventListeners.call(this, target);
	            if (this._invisible) {
	                this._invisible = false;
	                this._element.style.display = '';
	            }
	        }
	        this._element = null;
	        return target;
	    };
	
	    module.exports = ElementOutput;


/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Cube = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Transform = __webpack_require__(229);
	
	var _Transform2 = _interopRequireDefault(_Transform);
	
	var _MouseSync = __webpack_require__(256);
	
	var _MouseSync2 = _interopRequireDefault(_MouseSync);
	
	var _TouchSync = __webpack_require__(257);
	
	var _TouchSync2 = _interopRequireDefault(_TouchSync);
	
	var _GenericSync = __webpack_require__(259);
	
	var _GenericSync2 = _interopRequireDefault(_GenericSync);
	
	var _Molecule2 = __webpack_require__(235);
	
	var _Molecule3 = _interopRequireDefault(_Molecule2);
	
	var _Plane = __webpack_require__(252);
	
	var _Plane2 = _interopRequireDefault(_Plane);
	
	var _forLength = __webpack_require__(250);
	
	var _forLength2 = _interopRequireDefault(_forLength);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LICENSE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This Source Code Form is subject to the terms of the Mozilla Public
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * License, v. 2.0. If a copy of the MPL was not distributed with this
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	/**
	 * A scenegraph tree that lays things out in a cube form. The leaf nodes of the
	 * scenegraph (the cube sides) are Molecules. Add anything to the leaf nodes
	 * that a [famous/src/core/RenderNode](#famous/src/core/RenderNode) would normally accept.
	 *
	 * @class Cube
	 * @extends Molecule
	 */
	
	var Cube = exports.Cube = function (_Molecule) {
	    _inherits(Cube, _Molecule);
	
	    /**
	     * Create a new Cube.
	     *
	     * @constructor
	     * @param {Number} cubeWidth The integer width of the cube.
	     */
	
	    function Cube(cubeWidth) {
	        _classCallCheck(this, Cube);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Cube).call(this, { size: cubeWidth }));
	
	        _GenericSync2.default.register({
	            mouse: _MouseSync2.default,
	            touch: _TouchSync2.default
	        });
	
	        _this.cubeWidth = cubeWidth;
	
	        _this.cubeSideNodes = [];
	        _this.cubeSides = [];
	
	        // TODO: v0.1.0: Put this in a function.
	        (0, _forLength2.default)(6, _this._createCubeSide.bind(_this));
	        return _this;
	    }
	
	    /**
	     * Creates the 6 sides of the cube (the leafnodes of the scenegraph).
	     *
	     * TODO v0.1.0: Rename to CubeLayout.
	     * TODO v0.1.0: Don't create Planes for each side, let the user specify their own content for each side using this.setChildren.
	     *
	     * @private
	     * @param {Number} index The index (a integer between 0 and 5) that specifies which side to create.
	     */
	
	
	    _createClass(Cube, [{
	        key: '_createCubeSide',
	        value: function _createCubeSide(index) {
	            var T = _Transform2.default;
	            var sideMol = new _Molecule3.default();
	            var side = new _Plane2.default({
	                size: [this.cubeWidth, this.cubeWidth],
	                properties: {
	                    background: 'pink',
	                    backfaceVisibility: 'visible'
	                }
	            });
	            var sync = new _GenericSync2.default(['mouse', 'touch']);
	
	            this.cubeSides.push(side);
	
	            side.pipe(sync);
	            sync.pipe(this.options.handler);
	
	            // rotate and place each side.
	            if (index < 4) {
	                // sides
	                sideMol.modifier.transformFrom(T.multiply(T.rotate(0, Math.PI / 2 * index, 0), T.translate(0, 0, this.cubeWidth / 2)));
	            } else {
	                // top/bottom
	                sideMol.modifier.transformFrom(T.multiply(T.rotate(Math.PI / 2 * (index % 2 ? -1 : 1), 0, 0), T.translate(0, 0, this.cubeWidth / 2)));
	            }
	
	            this.cubeSideNodes.push(this.node.add(sideMol.node));
	            sideMol.node.add(side.node);
	        }
	
	        /**
	         * Set the content for the sides of the cube.
	         *
	         * @param {Array} children An array containing anything that a
	         * [famous/src/core/RenderNode](#famous/src/core/RenderNode) would accept in it's `add` method. Only the
	         * first 6 items are used, the rest are ignored.
	         */
	
	    }, {
	        key: 'setChildren',
	        value: function setChildren(children) {
	            (0, _forLength2.default)(6, function (index) {
	                //this.cubeSideNodes[index].set(null); // TODO: how do we erase previous children?
	                this.cubeSideNodes[index].add(children[index]);
	            }.bind(this));
	            return this;
	        }
	    }]);
	
	    return Cube;
	}(_Molecule3.default);
	
	exports.default = Cube;

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2015
	 */
	    var EventHandler = __webpack_require__(241);
	    var OptionsManager = __webpack_require__(247);
	
	    /**
	     * Handles piped in mouse drag events. Outputs an object with the position delta from last frame, position from start,
	     * current velocity averaged out over the velocitySampleLength (set via options), clientX, clientY, offsetX, and offsetY.
	     *
	     * Emits 'start', 'update' and 'end' events. Designed to be used either as a standalone MouseSync, or as part of a
	     * GenericSync.
	     *
	     * @class MouseSync
	     * @constructor
	     *
	     * @example
	     *   var Surface = require('../core/Surface');
	     *   var MouseSync = require('../inputs/MouseSync');
	     *
	     *   var surface = new Surface({ size: [100, 100] });
	     *   var mouseSync = new MouseSync();
	     *   surface.pipe(mouseSync);
	     *
	     *   mouseSync.on('start', function (e) { // react to start });
	     *   mouseSync.on('update', function (e) { // react to update });
	     *   mouseSync.on('end', function (e) { // react to end });
	     *
	     * @param [options] {Object}                An object of the following configurable options.
	     * @param [options.clickThreshold] {Number} Absolute distance from click origin that will still trigger a click.
	     * @param [options.direction] {Number}      Read from a particular axis. Valid options are: undefined, 0 or 1. 0 corresponds to x, and 1 to y. Default is undefined, which allows both x and y.
	     * @param [options.rails] {Boolean}         Read from axis with the greatest differential.
	     * @param [options.velocitySampleLength] {Number}  Number of previous frames to check velocity against.
	     * @param [options.propogate] {Boolean}     Add a listener to document on mouseleave. This allows drag events to continue across the entire page.
	     */
	    function MouseSync(options) {
	        this.options =  Object.create(MouseSync.DEFAULT_OPTIONS);
	        this._optionsManager = new OptionsManager(this.options);
	
	        if (options) this.setOptions(options);
	
	        this._eventInput = new EventHandler();
	        this._eventOutput = new EventHandler();
	
	        EventHandler.setInputHandler(this, this._eventInput);
	        EventHandler.setOutputHandler(this, this._eventOutput);
	
	        this._eventInput.on('mousedown', _handleStart.bind(this));
	        this._eventInput.on('mousemove', _handleMove.bind(this));
	        this._eventInput.on('mouseup', _handleEnd.bind(this));
	
	        if (this.options.propogate) this._eventInput.on('mouseleave', _handleLeave.bind(this));
	        else this._eventInput.on('mouseleave', _handleEnd.bind(this));
	
	        if (this.options.clickThreshold) {
	            window.addEventListener('click', function(event) {
	                if (Math.sqrt(Math.pow(this._displacement[0], 2) + Math.pow(this._displacement[1], 2)) > this.options.clickThreshold) {
	                    event.stopPropagation();
	                }
	            }.bind(this), true);
	        }
	
	        this._payload = {
	            delta    : null,
	            position : null,
	            velocity : null,
	            clientX  : 0,
	            clientY  : 0,
	            offsetX  : 0,
	            offsetY  : 0
	        };
	
	        this._positionHistory = [];
	        this._position = null;      // to be deprecated
	        this._prevCoord = undefined;
	        this._prevTime = undefined;
	        this._down = false;
	        this._moved = false;
	        this._displacement = [0,0];
	        this._documentActive = false;
	    }
	
	    MouseSync.DEFAULT_OPTIONS = {
	        clickThreshold: undefined,
	        direction: undefined,
	        rails: false,
	        scale: 1,
	        propogate: true,  // events piped to document on mouseleave
	        velocitySampleLength: 10,
	        preventDefault: true
	    };
	
	    MouseSync.DIRECTION_X = 0;
	    MouseSync.DIRECTION_Y = 1;
	
	    var MINIMUM_TICK_TIME = 8;
	
	    /**
	     *  Triggered by mousedown.
	     *
	     *  @method _handleStart
	     *  @private
	     */
	    function _handleStart(event) {
	        var delta;
	        var velocity;
	        if (this.options.preventDefault) event.preventDefault(); // prevent drag
	
	        var x = event.clientX;
	        var y = event.clientY;
	
	        this._prevCoord = [x, y];
	        this._prevTime = Date.now();
	        this._down = true;
	        this._move = false;
	
	        if (this.options.direction !== undefined) {
	            this._position = 0;
	            delta = 0;
	            velocity = 0;
	        }
	        else {
	            this._position = [0, 0];
	            delta = [0, 0];
	            velocity = [0, 0];
	        }
	
	        if (this.options.clickThreshold) {
	            this._displacement = [0,0];
	        }
	
	        var payload = this._payload;
	        payload.delta = delta;
	        payload.position = this._position;
	        payload.velocity = velocity;
	        payload.clientX = x;
	        payload.clientY = y;
	        payload.offsetX = event.offsetX;
	        payload.offsetY = event.offsetY;
	
	        this._positionHistory.push({
	            position: payload.position.slice ? payload.position.slice(0) : payload.position,
	            time: this._prevTime
	        });
	
	        this._eventOutput.emit('start', payload);
	        this._documentActive = false;
	    }
	
	    /**
	     *  Triggered by mousemove.
	     *
	     *  @method _handleMove
	     *  @private
	     */
	    function _handleMove(event) {
	        if (!this._prevCoord) return;
	
	        var prevCoord = this._prevCoord;
	        var prevTime = this._prevTime;
	
	        var x = event.clientX;
	        var y = event.clientY;
	
	        var currTime = Date.now();
	
	        var diffX = x - prevCoord[0];
	        var diffY = y - prevCoord[1];
	
	        if (this.options.rails) {
	            if (Math.abs(diffX) > Math.abs(diffY)) diffY = 0;
	            else diffX = 0;
	        }
	
	        var diffTime = Math.max(currTime - this._positionHistory[0].time, MINIMUM_TICK_TIME); // minimum tick time
	
	        var scale = this.options.scale;
	        var nextVel;
	        var nextDelta;
	
	        if (this.options.direction === MouseSync.DIRECTION_X) {
	            nextDelta = scale * diffX;
	            this._position += nextDelta;
	            nextVel = scale * (this._position - this._positionHistory[0].position) / diffTime;
	        }
	        else if (this.options.direction === MouseSync.DIRECTION_Y) {
	            nextDelta = scale * diffY;
	            this._position += nextDelta;
	            nextVel = scale * (this._position - this._positionHistory[0].position) / diffTime;
	        }
	        else {
	            nextDelta = [scale * diffX, scale * diffY];
	            nextVel = [
	                scale * (this._position[0] - this._positionHistory[0].position[0]) / diffTime,
	                scale * (this._position[1] - this._positionHistory[0].position[1]) / diffTime
	            ];
	            this._position[0] += nextDelta[0];
	            this._position[1] += nextDelta[1];
	        }
	
	        if (this.options.clickThreshold !== false) {
	            this._displacement[0] += diffX;
	            this._displacement[1] += diffY;
	        }
	
	        var payload = this._payload;
	        payload.delta    = nextDelta;
	        payload.position = this._position;
	        payload.velocity = nextVel;
	        payload.clientX  = x;
	        payload.clientY  = y;
	        payload.offsetX  = event.offsetX;
	        payload.offsetY  = event.offsetY;
	
	        if (this._positionHistory.length === this.options.velocitySampleLength) {
	          this._positionHistory.shift();
	        }
	
	        this._positionHistory.push({
	          position: payload.position.slice ? payload.position.slice(0) : payload.position,
	          time: currTime
	        });
	
	        this._eventOutput.emit('update', payload);
	
	        this._prevCoord = [x, y];
	        this._prevTime = currTime;
	        this._move = true;
	    }
	
	    /**
	     *  Triggered by mouseup on the element or document body if propagation is enabled, or
	     *  mouseleave if propagation is off.
	     *
	     *  @method _handleEnd
	     *  @private
	     */
	    function _handleEnd(event) {
	        if (!this._down) return;
	
	        this._eventOutput.emit('end', this._payload);
	        this._prevCoord = undefined;
	        this._prevTime = undefined;
	        this._down = false;
	        this._move = false;
	        this._positionHistory = [];
	    }
	
	    /**
	     *  Switches the mousemove listener to the document body, if propagation is enabled.
	     *  @method _handleLeave
	     *  @private
	     */
	    function _handleLeave(event) {
	        if (!this._down || !this._move) return;
	
	        if (!this._documentActive) {
	          var boundMove = _handleMove.bind(this);
	          var boundEnd = function(event) {
	              _handleEnd.call(this, event);
	              document.removeEventListener('mousemove', boundMove);
	              document.removeEventListener('mouseup', boundEnd);
	          }.bind(this, event);
	          document.addEventListener('mousemove', boundMove);
	          document.addEventListener('mouseup', boundEnd);
	          this._documentActive = true;
	        }
	    }
	
	    /**
	     * Return entire options dictionary, including defaults.
	     *
	     * @method getOptions
	     * @return {Object} configuration options
	     */
	    MouseSync.prototype.getOptions = function getOptions() {
	        return this.options;
	    };
	
	    /**
	     * Set internal options, overriding any default options
	     *
	     * @method setOptions
	     *
	     * @param [options] {Object}             default options overrides
	     * @param [options.direction] {Number}   read from a particular axis
	     * @param [options.rails] {Boolean}      read from axis with greatest differential
	     * @param [options.propogate] {Boolean}  add listened to document on mouseleave
	     */
	    MouseSync.prototype.setOptions = function setOptions(options) {
	        return this._optionsManager.setOptions(options);
	    };
	
	    module.exports = MouseSync;


/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2015
	 */
	    var TouchTracker = __webpack_require__(258);
	    var EventHandler = __webpack_require__(241);
	    var OptionsManager = __webpack_require__(247);
	
	    /**
	     * Handles piped in touch events. Emits 'start', 'update', and 'events'
	     *   events with delta, position, velocity, acceleration, clientX, clientY, count, and touch id.
	     *   Useful for dealing with inputs on touch devices. Designed to be used either as standalone, or
	     *   included in a GenericSync.
	     *
	     * @class TouchSync
	     * @constructor
	     *
	     * @example
	     *   var Surface = require('../core/Surface');
	     *   var TouchSync = require('../inputs/TouchSync');
	     *
	     *   var surface = new Surface({ size: [100, 100] });
	     *   var touchSync = new TouchSync();
	     *   surface.pipe(touchSync);
	     *
	     *   touchSync.on('start', function (e) { // react to start });
	     *   touchSync.on('update', function (e) { // react to update });
	     *   touchSync.on('end', function (e) { // react to end });*
	     *
	     * @param [options] {Object}             default options overrides
	     * @param [options.direction] {Number}   read from a particular axis
	     * @param [options.rails] {Boolean}      read from axis with greatest differential
	     * @param [options.velocitySampleLength] {Number}  Number of previous frames to check velocity against.
	     * @param [options.scale] {Number}       constant factor to scale velocity output
	     * @param [options.touchLimit] {Number}  touchLimit upper bound for emitting events based on number of touches
	     */
	    function TouchSync(options) {
	        this.options =  Object.create(TouchSync.DEFAULT_OPTIONS);
	        this._optionsManager = new OptionsManager(this.options);
	        if (options) this.setOptions(options);
	
	        this._eventOutput = new EventHandler();
	        this._touchTracker = new TouchTracker({
	            touchLimit: this.options.touchLimit
	        });
	
	        EventHandler.setOutputHandler(this, this._eventOutput);
	        EventHandler.setInputHandler(this, this._touchTracker);
	
	        this._touchTracker.on('trackstart', _handleStart.bind(this));
	        this._touchTracker.on('trackmove', _handleMove.bind(this));
	        this._touchTracker.on('trackend', _handleEnd.bind(this));
	
	        this._payload = {
	            delta    : null,
	            position : null,
	            velocity : null,
	            clientX  : undefined,
	            clientY  : undefined,
	            count    : 0,
	            touch    : undefined
	        };
	
	        this._position = null; // to be deprecated
	    }
	
	    TouchSync.DEFAULT_OPTIONS = {
	        direction: undefined,
	        rails: false,
	        touchLimit: 1,
	        velocitySampleLength: 10,
	        scale: 1
	    };
	
	    TouchSync.DIRECTION_X = 0;
	    TouchSync.DIRECTION_Y = 1;
	
	    var MINIMUM_TICK_TIME = 8;
	
	    /**
	     *  Triggered by trackstart.
	     *  @method _handleStart
	     *  @private
	     */
	    function _handleStart(data) {
	        var velocity;
	        var delta;
	        if (this.options.direction !== undefined){
	            this._position = 0;
	            velocity = 0;
	            delta = 0;
	        }
	        else {
	            this._position = [0, 0];
	            velocity = [0, 0];
	            delta = [0, 0];
	        }
	
	        var payload = this._payload;
	        payload.delta = delta;
	        payload.position = this._position;
	        payload.velocity = velocity;
	        payload.clientX = data.x;
	        payload.clientY = data.y;
	        payload.count = data.count;
	        payload.touch = data.identifier;
	
	        this._eventOutput.emit('start', payload);
	    }
	
	    /**
	     *  Triggered by trackmove.
	     *  @method _handleMove
	     *  @private
	     */
	    function _handleMove(data) {
	        var history = data.history;
	
	        var currHistory = history[history.length - 1];
	        var prevHistory = history[history.length - 2];
	
	        var distantHistory = history[history.length - this.options.velocitySampleLength] ?
	          history[history.length - this.options.velocitySampleLength] :
	          history[history.length - 2];
	
	        var distantTime = distantHistory.timestamp;
	        var currTime = currHistory.timestamp;
	
	        var diffX = currHistory.x - prevHistory.x;
	        var diffY = currHistory.y - prevHistory.y;
	
	        var velDiffX = currHistory.x - distantHistory.x;
	        var velDiffY = currHistory.y - distantHistory.y;
	
	        if (this.options.rails) {
	            if (Math.abs(diffX) > Math.abs(diffY)) diffY = 0;
	            else diffX = 0;
	
	            if (Math.abs(velDiffX) > Math.abs(velDiffY)) velDiffY = 0;
	            else velDiffX = 0;
	        }
	
	        var diffTime = Math.max(currTime - distantTime, MINIMUM_TICK_TIME);
	
	        var velX = velDiffX / diffTime;
	        var velY = velDiffY / diffTime;
	
	        var scale = this.options.scale;
	        var nextVel;
	        var nextDelta;
	
	        if (this.options.direction === TouchSync.DIRECTION_X) {
	            nextDelta = scale * diffX;
	            nextVel = scale * velX;
	            this._position += nextDelta;
	        }
	        else if (this.options.direction === TouchSync.DIRECTION_Y) {
	            nextDelta = scale * diffY;
	            nextVel = scale * velY;
	            this._position += nextDelta;
	        }
	        else {
	            nextDelta = [scale * diffX, scale * diffY];
	            nextVel = [scale * velX, scale * velY];
	            this._position[0] += nextDelta[0];
	            this._position[1] += nextDelta[1];
	        }
	
	        var payload = this._payload;
	        payload.delta    = nextDelta;
	        payload.velocity = nextVel;
	        payload.position = this._position;
	        payload.clientX  = data.x;
	        payload.clientY  = data.y;
	        payload.count    = data.count;
	        payload.touch    = data.identifier;
	
	        this._eventOutput.emit('update', payload);
	    }
	
	    /**
	     *  Triggered by trackend.
	     *  @method _handleEnd
	     *  @private
	     */
	    function _handleEnd(data) {
	        this._payload.count = data.count;
	        this._eventOutput.emit('end', this._payload);
	    }
	
	    /**
	     * Set internal options, overriding any default options
	     *
	     * @method setOptions
	     *
	     * @param [options] {Object}             default options overrides
	     * @param [options.direction] {Number}   read from a particular axis
	     * @param [options.rails] {Boolean}      read from axis with greatest differential
	     * @param [options.scale] {Number}       constant factor to scale velocity output
	     */
	    TouchSync.prototype.setOptions = function setOptions(options) {
	        return this._optionsManager.setOptions(options);
	    };
	
	    /**
	     * Return entire options dictionary, including defaults.
	     *
	     * @method getOptions
	     * @return {Object} configuration options
	     */
	    TouchSync.prototype.getOptions = function getOptions() {
	        return this.options;
	    };
	
	    module.exports = TouchSync;


/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2015
	 */
	    var EventHandler = __webpack_require__(241);
	
	    var _now = Date.now;
	
	    function _timestampTouch(touch, event, history) {
	        return {
	            x: touch.clientX,
	            y: touch.clientY,
	            identifier : touch.identifier,
	            origin: event.origin,
	            timestamp: _now(),
	            count: event.touches.length,
	            history: history
	        };
	    }
	
	    function _handleStart(event) {
	        if (event.touches.length > this.touchLimit) return;
	        this.isTouched = true;
	
	        for (var i = 0; i < event.changedTouches.length; i++) {
	            var touch = event.changedTouches[i];
	            var data = _timestampTouch(touch, event, null);
	            this.eventOutput.emit('trackstart', data);
	            if (!this.selective && !this.touchHistory[touch.identifier]) this.track(data);
	        }
	    }
	
	    function _handleMove(event) {
	        if (event.touches.length > this.touchLimit) return;
	
	        for (var i = 0; i < event.changedTouches.length; i++) {
	            var touch = event.changedTouches[i];
	            var history = this.touchHistory[touch.identifier];
	            if (history) {
	                var data = _timestampTouch(touch, event, history);
	                this.touchHistory[touch.identifier].push(data);
	                this.eventOutput.emit('trackmove', data);
	            }
	        }
	    }
	
	    function _handleEnd(event) {
	        if (!this.isTouched) return;
	
	        for (var i = 0; i < event.changedTouches.length; i++) {
	            var touch = event.changedTouches[i];
	            var history = this.touchHistory[touch.identifier];
	            if (history) {
	                var data = _timestampTouch(touch, event, history);
	                this.eventOutput.emit('trackend', data);
	                delete this.touchHistory[touch.identifier];
	            }
	        }
	
	        this.isTouched = false;
	    }
	
	    function _handleUnpipe() {
	        for (var i in this.touchHistory) {
	            var history = this.touchHistory[i];
	            this.eventOutput.emit('trackend', {
	                touch: history[history.length - 1].touch,
	                timestamp: Date.now(),
	                count: 0,
	                history: history
	            });
	            delete this.touchHistory[i];
	        }
	    }
	
	    /**
	     * Helper to TouchSync – tracks piped in touch events, organizes touch
	     *   events by ID, and emits track events back to TouchSync.
	     *   Emits 'trackstart', 'trackmove', and 'trackend' events upstream.
	     *
	     * @class TouchTracker
	     * @constructor
	     * @param {Object} options default options overrides
	     * @param [options.selective] {Boolean} selective if false, saves state for each touch
	     * @param [options.touchLimit] {Number} touchLimit upper bound for emitting events based on number of touches
	     */
	    function TouchTracker(options) {
	        this.selective = options.selective;
	        this.touchLimit = options.touchLimit || 1;
	
	        this.touchHistory = {};
	
	        this.eventInput = new EventHandler();
	        this.eventOutput = new EventHandler();
	
	        EventHandler.setInputHandler(this, this.eventInput);
	        EventHandler.setOutputHandler(this, this.eventOutput);
	
	        this.eventInput.on('touchstart', _handleStart.bind(this));
	        this.eventInput.on('touchmove', _handleMove.bind(this));
	        this.eventInput.on('touchend', _handleEnd.bind(this));
	        this.eventInput.on('touchcancel', _handleEnd.bind(this));
	        this.eventInput.on('unpipe', _handleUnpipe.bind(this));
	
	        this.isTouched = false;
	    }
	
	    /**
	     * Record touch data, if selective is false.
	     * @private
	     * @method track
	     * @param {Object} data touch data
	     */
	    TouchTracker.prototype.track = function track(data) {
	        this.touchHistory[data.identifier] = [data];
	    };
	
	    module.exports = TouchTracker;


/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2015
	 */
	
	    var EventHandler = __webpack_require__(241);
	
	    /**
	     * Combines multiple types of sync classes (e.g. mouse, touch,
	     *  scrolling) into one standardized interface for inclusion in widgets.
	     *
	     *  Sync classes are first registered with a key, and then can be accessed
	     *  globally by key.
	     *
	     *  Emits 'start', 'update' and 'end' events as a union of the sync class
	     *  providers.
	     *
	     * @class GenericSync
	     * @constructor
	     * @param syncs {Object|Array} object with fields {sync key : sync options}
	     *    or an array of registered sync keys
	     * @param [options] {Object|Array} options object to set on all syncs
	     */
	    function GenericSync(syncs, options) {
	        this._eventInput = new EventHandler();
	        this._eventOutput = new EventHandler();
	
	        EventHandler.setInputHandler(this, this._eventInput);
	        EventHandler.setOutputHandler(this, this._eventOutput);
	
	        this._syncs = {};
	        if (syncs) this.addSync(syncs);
	        if (options) this.setOptions(options);
	    }
	
	    GenericSync.DIRECTION_X = 0;
	    GenericSync.DIRECTION_Y = 1;
	    GenericSync.DIRECTION_Z = 2;
	
	    // Global registry of sync classes. Append only.
	    var registry = {};
	
	    /**
	     * Register a global sync class with an identifying key
	     *
	     * @static
	     * @method register
	     *
	     * @param syncObject {Object} an object of {sync key : sync options} fields
	     */
	    GenericSync.register = function register(syncObject) {
	        for (var key in syncObject){
	            if (registry[key]){ // skip redundant registration
	                if (registry[key] !== syncObject[key]) // only if same registered class
	                    throw new Error('Conflicting sync classes for key: ' + key);
	            }
	            else registry[key] = syncObject[key];
	        }
	    };
	
	    /**
	     * Helper to set options on all sync instances
	     *
	     * @method setOptions
	     * @param options {Object} options object
	     */
	    GenericSync.prototype.setOptions = function(options) {
	        for (var key in this._syncs){
	            this._syncs[key].setOptions(options);
	        }
	    };
	
	    /**
	     * Pipe events to a sync class
	     *
	     * @method pipeSync
	     * @param key {String} identifier for sync class
	     */
	    GenericSync.prototype.pipeSync = function pipeToSync(key) {
	        var sync = this._syncs[key];
	        this._eventInput.pipe(sync);
	        sync.pipe(this._eventOutput);
	    };
	
	    /**
	     * Unpipe events from a sync class
	     *
	     * @method unpipeSync
	     * @param key {String} identifier for sync class
	     */
	    GenericSync.prototype.unpipeSync = function unpipeFromSync(key) {
	        var sync = this._syncs[key];
	        this._eventInput.unpipe(sync);
	        sync.unpipe(this._eventOutput);
	    };
	
	    function _addSingleSync(key, options) {
	        if (!registry[key]) return;
	        this._syncs[key] = new (registry[key])(options);
	        this.pipeSync(key);
	    }
	
	    /**
	     * Add a sync class to from the registered classes
	     *
	     * @method addSync
	     * @param syncs {Object|Array.String} an array of registered sync keys
	     *    or an object with fields {sync key : sync options}
	     */
	    GenericSync.prototype.addSync = function addSync(syncs) {
	        if (syncs instanceof Array)
	            for (var i = 0; i < syncs.length; i++)
	                _addSingleSync.call(this, syncs[i]);
	        else if (syncs instanceof Object)
	            for (var key in syncs)
	                _addSingleSync.call(this, key, syncs[key]);
	    };
	
	    module.exports = GenericSync;


/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PushMenuLayout = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _jss = __webpack_require__(198);
	
	var _jss2 = _interopRequireDefault(_jss);
	
	var _Surface = __webpack_require__(253);
	
	var _Surface2 = _interopRequireDefault(_Surface);
	
	var _RenderNode = __webpack_require__(238);
	
	var _RenderNode2 = _interopRequireDefault(_RenderNode);
	
	var _Transitionable = __webpack_require__(230);
	
	var _Transitionable2 = _interopRequireDefault(_Transitionable);
	
	var _Easing = __webpack_require__(234);
	
	var _Easing2 = _interopRequireDefault(_Easing);
	
	var _TouchSync = __webpack_require__(257);
	
	var _TouchSync2 = _interopRequireDefault(_TouchSync);
	
	var _GenericSync = __webpack_require__(259);
	
	var _GenericSync2 = _interopRequireDefault(_GenericSync);
	
	var _Plane = __webpack_require__(252);
	
	var _Plane2 = _interopRequireDefault(_Plane);
	
	var _Molecule2 = __webpack_require__(235);
	
	var _Molecule3 = _interopRequireDefault(_Molecule2);
	
	var _utils = __webpack_require__(243);
	
	var _callAfter = __webpack_require__(261);
	
	var _callAfter2 = _interopRequireDefault(_callAfter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LICENSE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This Source Code Form is subject to the terms of the Mozilla Public
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * License, v. 2.0. If a copy of the MPL was not distributed with this
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	/**
	 * A scenegraph with two Molecule leafnodes: the menu area and the content
	 * area. The menu area is hidden beyond the edge of the screen while the
	 * content area is visible. Swiping in from the edge of the screen reveals the
	 * menu, putting the content area out of focus. A mouse can also be used, and
	 * hovering near the edge of the screen also reveals the menu.
	 *
	 * Note: This layout is mostly useful if it exists at the root of a context so
	 * that the menu is clipped when it is closed (off to the side), otherwise the
	 * menu will be visible beyond the boundary of the container that contains the
	 * PushMenuLayout.
	 *
	 * Note: If you've called `openMenu` or `closeMenu` with a callback, the callback
	 * will be canceled if a drag or hover on the menu happens before the animation
	 * has completed. Please open an issue on GitHub if you have any opinion
	 * against this. :) Maybe we can add a boolean option for this behavior.
	 *
	 * TODO: Embed working example here.
	 *
	 * @class PushMenuLayout
	 * @extends Molecule
	 */
	
	var PushMenuLayout = exports.PushMenuLayout = function (_Molecule) {
	    _inherits(PushMenuLayout, _Molecule);
	
	    /**
	     * Creates a new PushMenuLayout.
	     *
	     * @constructor
	     * @param {Object} options The options to instantiate a `PushMenuLayout` with.
	     *
	     * TODO v0.1.0: Handle `PushMenuLayout`-specific user options. Currently they
	     * just get passed into super() for the Molecule constructor to handle.
	     */
	
	    function PushMenuLayout(initialOptions) {
	        _classCallCheck(this, PushMenuLayout);
	
	        // Add default values for this PushMenuLayout
	        // TODO: Make default options static for the class.
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PushMenuLayout).call(this, initialOptions));
	
	        (0, _utils.simpleExtend)(_this._.defaultOptions, {
	            menuSide: 'left', // left or right
	            menuWidth: 200,
	            menuHintSize: 10, // the amount of the menu that is visible before opening the menu.
	            pushAreaWidth: 40, // the area on the screen edge that the user can touch and drag to push out the menu.
	            animationDuration: 1000,
	            animationType: 'foldDown', // options: foldDown moveBack
	
	            // TODO: Background color for the whole layout should be the color that the fade fades to.
	            // TODO: Replace fade star/end colors with a fog color value and intensity.
	            fade: true, // when content recedes, it fades into the fog.
	            fadeStartColor: 'rgba(255,255,255,0)',
	            fadeEndColor: 'rgba(255,255,255,1)',
	
	            blur: false, // XXX: WIP, so false by default.
	            blurRadius: 5
	        });
	
	        // TODO: performance hit, this setter is invoked in the Molecule constructor, then here again.
	        _this.options = initialOptions;
	
	        // TODO v0.1.0: Mark these as private.
	        // TODO v0.1.0: this.contentWidth should be the width of whatever is containing
	        // the layout, but we're just using it as a whole-page app for now. Get
	        // size from a commit? UPDATE: See the new famous/src/views/SizeAwareView
	        _this.contentWidth = document.body.clientWidth - _this.options.menuHintSize;
	
	        // Changing these values outside of an instance of PushMenuLayout might
	        // cause the layout to break. They are designed to be modified
	        // internally only.
	        _this.isOpen = false;
	        _this.isOpening = false;
	        _this.isClosing = false;
	        _this.isAnimating = false; // keep track of whether the menu is opening or closing.
	        _this.isBeingDragged = false; // whether the user is dragging/pushing the menu or not.
	        _this.transitionCallback = undefined; // holds the callback to the current open or close menu animation.
	
	        // Set the touch sync for pulling/pushing the menu open/closed.
	        _GenericSync2.default.register({
	            touch: _TouchSync2.default
	        });
	
	        _this._createComponents();
	        _this._initializeEvents();
	
	        _this.monkeyPatchNodeRenderMethod();
	        return _this;
	    }
	
	    /**
	     * See Molecule.setOptions
	     *
	     * @override
	     */
	
	
	    _createClass(PushMenuLayout, [{
	        key: 'setOptions',
	        value: function setOptions(newOptions) {
	            _get(Object.getPrototypeOf(PushMenuLayout.prototype), 'setOptions', this).call(this, newOptions);
	        }
	
	        /**
	         * See Molecule.resetOptions
	         *
	         * @override
	         */
	
	    }, {
	        key: 'resetOptions',
	        value: function resetOptions() {
	            _get(Object.getPrototypeOf(PushMenuLayout.prototype), 'resetOptions', this).call(this);
	        }
	
	        /**
	         * Creates the menu area, content area, `Plane` for the fade effect, etc.
	         *
	         * @private
	         */
	
	    }, {
	        key: '_createComponents',
	        value: function _createComponents() {
	            var layout = this;
	
	            this.touchSync = new _GenericSync2.default(['touch']);
	
	            this.alignment = this.options.menuSide == "left" ? 0 : 1;
	            this.animationTransition = new _Transitionable2.default(0);
	
	            this.mainMol = new _Molecule3.default();
	
	            this.menuMol = new _Molecule3.default({
	                size: [this.options.menuWidth, undefined]
	            });
	            this.menuMol.oldTransform = this.menuMol.transform;
	            this.menuMol.transform = function () {
	                // override
	                var currentPosition = layout.animationTransition.get();
	                switch (layout.options.animationType) {
	                    case "foldDown":
	                        // XXX: this is depending on my modifications for TransitionableTransform.
	                        this.oldTransform.setTranslateX(layout.options.menuSide == 'left' ? currentPosition * (layout.options.menuWidth - layout.options.menuHintSize) /*range*/ - (layout.options.menuWidth - layout.options.menuHintSize) /*offset*/ : currentPosition * -(layout.options.menuWidth - layout.options.menuHintSize) /*range*/ + (layout.options.menuWidth - layout.options.menuHintSize) /*offset*/
	                        );
	                        break;
	                    case "moveBack":
	                        // XXX: this is depending on my modifications for TransitionableTransform.
	                        this.oldTransform.setTranslateX(layout.options.menuSide == 'left' ? currentPosition * (layout.options.menuWidth - layout.options.menuHintSize) /*range*/ - (layout.options.menuWidth - layout.options.menuHintSize) /*offset*/ : currentPosition * -(layout.options.menuWidth - layout.options.menuHintSize) /*range*/ + (layout.options.menuWidth - layout.options.menuHintSize) /*offset*/
	                        );
	                        break;
	                }
	                return this.oldTransform.get();
	            }.bind(this.menuMol);
	
	            // contains the user's menu content.
	            this.menuContentMol = new _Molecule3.default();
	
	            this.contentMol = new _Molecule3.default({
	                size: [this.contentWidth, undefined]
	            });
	            this.contentMol.oldTransform = this.contentMol.transform;
	            this.contentMol.transform = function () {
	                // override
	                var currentPosition = layout.animationTransition.get();
	                switch (layout.options.animationType) {
	                    case "foldDown":
	                        // XXX: this is depending on my modifications for TransitionableTransform.
	                        this.oldTransform.setTranslateX(layout.options.menuSide == 'left' ? currentPosition * (layout.options.menuWidth - layout.options.menuHintSize) /*range*/ + layout.options.menuHintSize /*offset*/ : currentPosition * -(layout.options.menuWidth - layout.options.menuHintSize) /*range*/ - layout.options.menuHintSize /*offset*/
	                        );
	                        // XXX: this is depending on my modifications for TransitionableTransform.
	                        this.oldTransform.setRotateY(layout.options.menuSide == 'left' ? currentPosition * Math.PI / 8 : currentPosition * -Math.PI / 8);
	                        break;
	                    case "moveBack":
	                        var depth = 100;
	                        // XXX: this is depending on my modifications for TransitionableTransform.
	                        this.oldTransform.setTranslateX(layout.options.menuSide == 'left' ? layout.options.menuHintSize : -layout.options.menuHintSize);
	                        this.oldTransform.setTranslateZ(currentPosition * -depth);
	                        break;
	                }
	                return this.oldTransform.get();
	            }.bind(this.contentMol);
	
	            this.menuTouchPlane = new _Plane2.default({
	                size: [this.options.menuWidth + this.options.pushAreaWidth - this.options.menuHintSize, undefined],
	                properties: {
	                    zIndex: '-1000' // below everything
	                }
	            });
	
	            this.mainMol.setOptions({
	                origin: [this.alignment, 0.5],
	                align: [this.alignment, 0.5]
	            });
	            this.menuMol.setOptions({
	                origin: [this.alignment, 0.5],
	                align: [this.alignment, 0.5]
	            });
	            this.contentMol.setOptions({
	                origin: [this.alignment, 0.5],
	                align: [this.alignment, 0.5]
	            });
	
	            // FIXME: WHY THE EFF must I also set align and origin on menuTouchPlane
	            // when I've already set it on it's parent (this.menuMol)?????
	            // ^ I think that's a bug in Famous 0.3.x.
	            this.menuTouchPlane.setOptions({
	                origin: [this.alignment, 0.5],
	                align: [this.alignment, 0.5]
	            });
	
	            // Bring the menu content molecule and touch plane forward just
	            // slightly so they're just above the content and content's fade plane,
	            // so touch and mouse interaction works. HTML, the bad parts. ;)
	            this.menuContentMol.transform.setTranslateZ(2);
	            this.menuTouchPlane.transform.setTranslateZ(2);
	
	            /*
	             * Styles for the fadePlane
	             */
	            // TODO: move this somewhere else . it's specific for each animation
	            this.updateStyles = function () {
	                var startColor;
	                var endColor;
	
	                switch (this.options.animationType) {
	                    case "foldDown":
	                        startColor = this.options.fadeStartColor;
	                        endColor = this.options.fadeEndColor;
	                        break;
	                    case "moveBack":
	                        startColor = endColor = this.options.fadeEndColor;
	                        break;
	                }
	
	                var styles = {
	                    '.infamous-fadeLeft': {
	                        background: [endColor, '-moz-linear-gradient(left, ' + endColor + ' 0%, ' + startColor + ' 100%)', '-webkit-gradient(left top, right top, color-stop(0%, ' + endColor + '), color-stop(100%, ' + startColor + '))', '-webkit-linear-gradient(left, ' + endColor + ' 0%, ' + startColor + ' 100%)', '-o-linear-gradient(left, ' + endColor + ' 0%, ' + startColor + ' 100%)', '-ms-linear-gradient(left, ' + endColor + ' 0%, ' + startColor + ' 100%)', 'linear-gradient(to right, ' + endColor + ' 0%, ' + startColor + ' 100%)'],
	                        filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#cc000000\', endColorstr=\'#4d000000\', GradientType=1 )'
	                    },
	                    '.infamous-fadeRight': {
	                        background: [startColor, '-moz-linear-gradient(left, ' + startColor + ' 0%, ' + endColor + ' 100%)', '-webkit-gradient(left top, right top, color-stop(0%, ' + startColor + '), color-stop(100%, ' + endColor + '))', '-webkit-linear-gradient(left, ' + startColor + ' 0%, ' + endColor + ' 100%)', '-o-linear-gradient(left, ' + startColor + ' 0%, ' + endColor + ' 100%)', '-ms-linear-gradient(left, ' + startColor + ' 0%, ' + endColor + ' 100%)', 'linear-gradient(to right, ' + startColor + ' 0%, ' + endColor + ' 100%)'],
	                        filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#4d000000\', endColorstr=\'#cc000000\', GradientType=1 )'
	                    }
	                };
	
	                if (this.fadeStylesheet) {
	                    this.fadeStylesheet.detach();
	                }
	                this.fadeStylesheet = _jss2.default.createStyleSheet(styles);
	                this.fadeStylesheet.attach();
	            };
	
	            if (this.options.fade) {
	                this.updateStyles();
	
	                this.fadePlane = new _Plane2.default({
	                    size: [undefined, undefined],
	                    classes: [
	                    // TODO: switch to jss namespaces.
	                    this.options.menuSide == 'left' ? 'infamous-fadeRight' : 'infamous-fadeLeft'],
	                    properties: {
	                        zIndex: '1000',
	                        pointerEvents: 'none'
	                    }
	                });
	
	                // FIXME: Why the EFF must I also set align and origin on fadePlane when
	                // I've already set it on it's parent (this.contentMol)?????
	                this.fadePlane.setOptions({
	                    origin: [this.alignment, 0.5],
	                    align: [this.alignment, 0.5]
	                });
	
	                // move the fadePlane forward by 1px so it doesn't glitch out.
	                // Chrome will make the fadePlane and the surface in the content
	                // area (if any) blink randomly when the two surfaces are in the
	                // same exact position together.
	                this.fadePlane.transform.setTranslateZ(1);
	
	                this.fadePlane.setOptions({
	                    opacity: this.animationTransition
	                });
	
	                // TODO: Make fadePlane a sibling to menuMol and contentMol so that
	                // contentMol contains only the user;s content. This will affect
	                // the code in this.render().
	                this.contentMol.node.add(this.fadePlane.node);
	            }
	
	            this.node.add(this.mainMol.node);
	            this.mainMol.node.add(this.contentMol.node);
	            this.menuMol.node.add(this.menuTouchPlane.node);
	            this.menuMol.node.add(this.menuContentMol.node);
	            this.mainMol.node.add(this.menuMol.node);
	            // TODO: Also create and add a background plane for the menu area so it will catch events that might fall through the menu content.
	        }
	
	        /**
	         * Sets up the events for the touch and mouse interaction that opens and
	         * closes the menu.
	         *
	         * @private
	         */
	
	    }, {
	        key: '_initializeEvents',
	        value: function _initializeEvents() {
	
	            // move the menu, following the user's drag. Don't let the user drag the menu past the menu width.
	            this.options.handler.on('update', function (event) {
	                // update == drag
	                this.isBeingDragged = true;
	
	                // stop the current transitions if any, along with the current callback if any.
	                this._haltAnimation(true);
	
	                var currentPosition = this.animationTransition.get();
	
	                // TODO: handle the right-side menu.
	                switch (this.options.animationType) {
	                    case "foldDown":
	                        this.animationTransition.set(currentPosition + event.delta[0] / (this.options.menuWidth - this.options.menuHintSize));
	                        break;
	                    case "moveBack":
	                        this.animationTransition.set(currentPosition + event.delta[0] / (this.options.menuWidth - this.options.menuHintSize));
	                        break;
	                }
	
	                currentPosition = this.animationTransition.get();
	
	                if (currentPosition > 1) {
	                    this.animationTransition.set(1);
	                } else if (currentPosition < 0) {
	                    this.animationTransition.set(0);
	                }
	            }.bind(this));
	
	            this.options.handler.on('end', function (event) {
	                this.isBeingDragged = false;
	
	                var currentPosition = this.animationTransition.get();
	
	                if (currentPosition < 0.5) {
	                    this.closeMenu();
	                } else {
	                    this.openMenu();
	                }
	            }.bind(this));
	
	            // TODO v0.1.0: Use a SizeAwareView instead of relying on the body, since we
	            // might not be directly in the body.
	            window.addEventListener('resize', function (event) {
	                this.contentWidth = document.body.clientWidth - this.options.menuHintSize;
	                this.contentMol.setOptions({ size: [this.contentWidth, undefined] });
	            }.bind(this));
	
	            /*
	             * Wire up events
	             * TODO: consolidate dup code here and in setMenu
	             */
	            this.menuTouchPlane.pipe(this.touchSync);
	            this.menuTouchPlane.on('mouseenter', function () {
	                if (!this.isOpening) {
	                    this.openMenu();
	                }
	            }.bind(this));
	            this.menuTouchPlane.on('mouseleave', function () {
	                if (!this.isClosing) {
	                    this.closeMenu();
	                }
	            }.bind(this));
	            this.touchSync.pipe(this.options.handler);
	        }
	
	        /**
	         * Add a scenegraph to the content area of the PushMenuLayout. You can put
	         * anything you want into the content area (magical 3D things for example),
	         * just be careful not to let them cover the menu or you'll block the user
	         * from interacting with the menu.
	         *
	         * @param {module: famous/src/core/RenderNode} node A scenegraph, i.e. a
	         * RenderNode with stuff in it.
	         *
	         * TODO: Accept plain renderables, f.e. Surfaces, etc. This change requires
	         * also modifying the code in this.render() to account for renderables.
	         *
	         * TODO: Make a sibling method to reset the content area.
	         */
	
	    }, {
	        key: 'setContent',
	        value: function setContent(content) {
	            if (content instanceof _Molecule3.default) {
	                this.contentMol.node.add(content.node);
	            } else if (content instanceof _RenderNode2.default) {
	                this.contentMol.node.add(content);
	            }
	        }
	
	        /**
	         * Add a scenegraph to the menu area of the PushMenuLayout. If the object
	         * that you pass into setMenu is an infamous component, or a famo.us
	         * Surface, then it's events will be piped to this PushMenuLayout's input
	         * sync so that the user can open and close the menu with touch or mouse.
	         * General advice here would be to keep whatever you put into the menu
	         * contained within the boundaries of the menu or you might have touch and
	         * mouse interaction outside of the menu.
	         *
	         * @param {module: famous/src/core/RenderNode} node A scenegraph, i.e. a
	         * RenderNode with stuff in it.
	         *
	         * TODO: Accept plain renderables, f.e. Surfaces, etc.
	         *
	         * TODO: Remove old content before adding new content.
	         */
	
	    }, {
	        key: 'setMenu',
	        value: function setMenu(content) {
	            if (content instanceof _Molecule3.default) {
	                this.menuContentMol.node.add(content.node);
	
	                content.pipe(this.touchSync);
	                content.on('mouseenter', function () {
	                    if (!this.isOpening) {
	                        this.openMenu();
	                    }
	                }.bind(this));
	                content.on('mouseleave', function () {
	                    if (!this.isClosing) {
	                        this.closeMenu();
	                    }
	                }.bind(this));
	            } else if (content instanceof _RenderNode2.default) {
	                this.menuContentMol.node.add(content);
	            }
	        }
	
	        // TODO: replace menu easing with physics so the user can throw the menu,
	        // using initial velocity and drag to slow it down, and stop immediately
	        // when it hits the fully-open or fully-closed positions.
	
	        /**
	         * Opens the menu.
	         *
	         * @param {Function} callback The function to be called when the animation finishes.
	         * @param {boolean} [cancelPreviousCallback=false] This is optional. If
	         * true, then the callback of a previous open or close animation will be
	         * canceled if that animation was still inprogress when this method is
	         * called, otherwise the callback of the previous open or close animation
	         * will be fired immediately before the animation for this animation begins.
	         */
	
	    }, {
	        key: 'openMenu',
	        value: function openMenu(callback, cancelPreviousCallback) {
	            this._haltAnimation(cancelPreviousCallback);
	
	            this.isClosing = false;
	            this.isOpening = true;
	
	            this._animate('open', callback);
	        }
	
	        /**
	         * Closes the menu.
	         *
	         * @param {Function} callback The function to be called when the animation finishes.
	         * @param {boolean} [cancelPreviousCallback=false] This is optional. If
	         * true, then the callback of a previous open or close animation will be
	         * canceled if that animation was still inprogress when this method is
	         * called, otherwise the callback of the previous open or close animation
	         * will be fired immediately before the animation for this animation begins.
	         */
	
	    }, {
	        key: 'closeMenu',
	        value: function closeMenu(callback, cancelPreviousCallback) {
	            this._haltAnimation(cancelPreviousCallback);
	
	            this.isClosing = true;
	            this.isOpening = false;
	
	            this._animate('close', callback);
	        }
	
	        /**
	         * Toggles the menu open or closed. If the menu is open or is opening, then it will now start
	         * closing, and vice versa.
	         *
	         * @param {Function} callback The function to be called when the animation finishes.
	         * @param {boolean} [cancelPreviousCallback=false] This is optional. If
	         * true, then the callback of a previous open or close animation will be
	         * canceled if that animation was still inprogress when this method is
	         * called, otherwise the callback of the previous open or close animation
	         * will be fired immediately before the animation for this animation begins.
	         */
	
	    }, {
	        key: 'toggleMenu',
	        value: function toggleMenu(callback, cancelPreviousCallback) {
	            if (this.isOpen || this.isOpening) {
	                this.closeMenu(callback, cancelPreviousCallback);
	            } else if (!this.isOpen || this.isClosing) {
	                this.openMenu(callback, cancelPreviousCallback);
	            }
	        }
	
	        /**
	         * Animates the menu to it's target state.
	         *
	         * @private
	         * @param {String} targetState The name of the state to animate to.
	         * @param {Function} callback The function to call after the animation completes.
	         */
	
	    }, {
	        key: '_animate',
	        value: function _animate(targetState, callback) {
	            this.isAnimating = true;
	            this.transitionCallback = callback;
	            var _callback;
	
	            var self = this;
	            function setupCallback(numberOfTransitions) {
	                // Fire callback after numberOfTransitions calls, when the 4 transitions are complete.
	                _callback = (0, _callAfter2.default)(numberOfTransitions, function () {
	                    self.isAnimating = self.isOpening = self.isClosing = false;
	                    self.isOpen = targetState == 'open' ? true : false;
	                    if (typeof self.transitionCallback == 'function') {
	                        self.transitionCallback();
	                    }
	                    self.transitionCallback = undefined;
	                }.bind(self));
	            }
	
	            setupCallback(1);
	            if (targetState == 'open') {
	                this.animationTransition.set(1, { duration: this.options.animationDuration, curve: _Easing2.default.outExpo }, _callback);
	            } else if (targetState == 'close') {
	                this.animationTransition.set(0, { duration: this.options.animationDuration, curve: _Easing2.default.outExpo }, _callback);
	            }
	        }
	
	        /**
	         * Halts the current animation, if any.
	         *
	         * @private
	         * @param {boolean} [cancelCallback=false] Defaults to false. If true, the
	         * halted animation's callback won't fire, otherwise it will be fired.
	         */
	
	    }, {
	        key: '_haltAnimation',
	        value: function _haltAnimation(cancelCallback) {
	            if (this.isAnimating) {
	                if (!cancelCallback && typeof this.transitionCallback == 'function') {
	                    this.transitionCallback();
	                }
	                this.transitionCallback = undefined;
	                this.animationTransition.halt();
	            }
	        }
	
	        /**
	         * @override
	         */
	
	    }, {
	        key: 'monkeyPatchNodeRenderMethod',
	        value: function monkeyPatchNodeRenderMethod() {
	
	            var oldRender = this.node.render;
	            var layout = this; // "this" is this PushMenuLayout
	
	            this.node.render = function () {
	
	                // Blur the content if layout.options.blur is true, and the animation is moveBack.
	                //
	                // TODO: Make the item to be blurred specifiable, perhaps with a method on
	                // layout.
	                if (layout.options.blur && layout.options.fade && layout.options.animationType == 'moveBack') {
	                    var momentaryBlur = layout.animationTransition.get() * layout.options.blurRadius;
	                    var filter = {
	                        "-webkit-filter": 'blur(' + momentaryBlur + 'px)',
	                        "-moz-filter": 'blur(' + momentaryBlur + 'px)',
	                        "-ms-filter": 'blur(' + momentaryBlur + 'px)',
	                        "-o-filter": 'blur(' + momentaryBlur + 'px)',
	                        filter: 'blur(' + momentaryBlur + 'px)'
	                    };
	
	                    // TODO TODO TODO v0.1.0: Make fadePlane a sibling with menu and
	                    // content molecules or the following breaks if fade is false.
	                    // Then remove the check for layout.options.fade in the previous if
	                    // statement above.
	                    if (layout.contentMol.node._child[1].get() instanceof _Surface2.default) {
	                        layout.contentMol.node.get().setProperties(filter);
	                    } else if (layout.contentMol.node._child[1] instanceof _Plane2.default) {
	                        layout.contentMol.node._child[1].surface.setProperties(filter);
	                    }
	                }
	
	                return oldRender.call(this); // "this" here is the actual node, as intended.
	            };
	        }
	    }]);
	
	    return PushMenuLayout;
	}(_Molecule3.default);
	
	exports.default = PushMenuLayout;

/***/ },
/* 261 */
/***/ function(module, exports) {

	"use strict";
	
	exports.callAfter = callAfter;
	function callAfter(times, callback) {
	    var count = 0;
	    return function () {
	        if (++count == times) {
	            if (typeof callback == "function") {
	                callback.apply(this, arguments);
	            }
	        }
	    };
	}
	exports["default"] = callAfter;
	exports.__esModule = true;
	//# sourceMappingURL=callAfter.js.map

/***/ }
/******/ ])
});
;
//# sourceMappingURL=global.js.map