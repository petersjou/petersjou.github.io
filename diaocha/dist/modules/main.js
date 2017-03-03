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
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(96)
	var __weex_template__ = __webpack_require__(103)
	var __weex_style__ = __webpack_require__(104)
	var __weex_script__ = __webpack_require__(105)

	__weex_define__('@weex-component/bc41d43e632885a8339fa471bce6235f', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/bc41d43e632885a8339fa471bce6235f',undefined,undefined)

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	__webpack_require__(8);
	__webpack_require__(12);
	__webpack_require__(16);
	__webpack_require__(20);
	__webpack_require__(24);
	__webpack_require__(65);
	__webpack_require__(69);
	__webpack_require__(73);
	__webpack_require__(77);
	__webpack_require__(78);


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(5)
	var __weex_style__ = __webpack_require__(6)
	var __weex_script__ = __webpack_require__(7)

	__weex_define__('@weex-component/wxc-button', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['btn', 'btn-' + (this.type), 'btn-sz-' + (this.size)]},
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['btn-txt', 'btn-txt-' + (this.type), 'btn-txt-sz-' + (this.size)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = {
	  "btn": {
	    "marginBottom": 0,
	    "alignItems": "center",
	    "justifyContent": "center",
	    "borderWidth": 1,
	    "borderStyle": "solid",
	    "borderColor": "#333333"
	  },
	  "btn-default": {
	    "color": "rgb(51,51,51)"
	  },
	  "btn-primary": {
	    "backgroundColor": "rgb(40,96,144)",
	    "borderColor": "rgb(40,96,144)"
	  },
	  "btn-success": {
	    "backgroundColor": "rgb(92,184,92)",
	    "borderColor": "rgb(76,174,76)"
	  },
	  "btn-info": {
	    "backgroundColor": "rgb(91,192,222)",
	    "borderColor": "rgb(70,184,218)"
	  },
	  "btn-warning": {
	    "backgroundColor": "rgb(240,173,78)",
	    "borderColor": "rgb(238,162,54)"
	  },
	  "btn-danger": {
	    "backgroundColor": "rgb(217,83,79)",
	    "borderColor": "rgb(212,63,58)"
	  },
	  "btn-link": {
	    "borderColor": "rgba(0,0,0,0)",
	    "borderRadius": 0
	  },
	  "btn-txt-default": {
	    "color": "rgb(51,51,51)"
	  },
	  "btn-txt-primary": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-success": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-info": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-warning": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-danger": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-link": {
	    "color": "rgb(51,122,183)"
	  },
	  "btn-sz-large": {
	    "width": 300,
	    "height": 100,
	    "paddingTop": 25,
	    "paddingBottom": 25,
	    "paddingLeft": 40,
	    "paddingRight": 40,
	    "borderRadius": 15
	  },
	  "btn-sz-middle": {
	    "width": 240,
	    "height": 80,
	    "paddingTop": 15,
	    "paddingBottom": 15,
	    "paddingLeft": 30,
	    "paddingRight": 30,
	    "borderRadius": 10
	  },
	  "btn-sz-small": {
	    "width": 170,
	    "height": 60,
	    "paddingTop": 12,
	    "paddingBottom": 12,
	    "paddingLeft": 25,
	    "paddingRight": 25,
	    "borderRadius": 7
	  },
	  "btn-txt-sz-large": {
	    "fontSize": 45
	  },
	  "btn-txt-sz-middle": {
	    "fontSize": 35
	  },
	  "btn-txt-sz-small": {
	    "fontSize": 30
	  }
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    type: 'default',
	    size: 'large',
	    value: ''
	  }},
	  methods: {}
	};}
	/* generated by weex-loader */


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(9)
	var __weex_style__ = __webpack_require__(10)
	var __weex_script__ = __webpack_require__(11)

	__weex_define__('@weex-component/wxc-hn', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['h' + (this.level)]},
	  "style": {
	    "justifyContent": "center"
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['txt-h' + (this.level)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = {
	  "h1": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "h2": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "h3": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "txt-h1": {
	    "fontSize": 70
	  },
	  "txt-h2": {
	    "fontSize": 52
	  },
	  "txt-h3": {
	    "fontSize": 42
	  }
	}

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    level: 1,
	    value: ''
	  }},
	  methods: {}
	};}
	/* generated by weex-loader */


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(13)
	var __weex_style__ = __webpack_require__(14)
	var __weex_script__ = __webpack_require__(15)

	__weex_define__('@weex-component/wxc-list-item', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "item"
	  ],
	  "events": {
	    "touchstart": "touchstart",
	    "touchend": "touchend"
	  },
	  "style": {
	    "backgroundColor": function () {return this.bgColor}
	  },
	  "children": [
	    {
	      "type": "content"
	    }
	  ]
	}

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = {
	  "item": {
	    "paddingTop": 25,
	    "paddingBottom": 25,
	    "paddingLeft": 35,
	    "paddingRight": 35,
	    "height": 160,
	    "justifyContent": "center",
	    "borderBottomWidth": 1,
	    "borderColor": "#dddddd"
	  }
	}

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    bgColor: '#ffffff'
	  }},
	  methods: {
	    touchstart: function touchstart() {},
	    touchend: function touchend() {}
	  }
	};}
	/* generated by weex-loader */


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(17)
	var __weex_style__ = __webpack_require__(18)
	var __weex_script__ = __webpack_require__(19)

	__weex_define__('@weex-component/wxc-panel', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['panel', 'panel-' + (this.type)]},
	  "style": {
	    "borderWidth": function () {return this.border}
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['panel-header', 'panel-header-' + (this.type)]},
	      "style": {
	        "paddingTop": function () {return this.paddingHead},
	        "paddingBottom": function () {return this.paddingHead},
	        "paddingLeft": function () {return this.paddingHead*1.5},
	        "paddingRight": function () {return this.paddingHead*1.5}
	      },
	      "attr": {
	        "value": function () {return this.title}
	      }
	    },
	    {
	      "type": "div",
	      "classList": function () {return ['panel-body', 'panel-body-' + (this.type)]},
	      "style": {
	        "paddingTop": function () {return this.paddingBody},
	        "paddingBottom": function () {return this.paddingBody},
	        "paddingLeft": function () {return this.paddingBody*1.5},
	        "paddingRight": function () {return this.paddingBody*1.5}
	      },
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = {
	  "panel": {
	    "marginBottom": 20,
	    "backgroundColor": "#ffffff",
	    "borderColor": "#dddddd",
	    "borderWidth": 1
	  },
	  "panel-primary": {
	    "borderColor": "rgb(40,96,144)"
	  },
	  "panel-success": {
	    "borderColor": "rgb(76,174,76)"
	  },
	  "panel-info": {
	    "borderColor": "rgb(70,184,218)"
	  },
	  "panel-warning": {
	    "borderColor": "rgb(238,162,54)"
	  },
	  "panel-danger": {
	    "borderColor": "rgb(212,63,58)"
	  },
	  "panel-header": {
	    "backgroundColor": "#f5f5f5",
	    "fontSize": 40,
	    "color": "#333333"
	  },
	  "panel-header-primary": {
	    "backgroundColor": "rgb(40,96,144)",
	    "color": "#ffffff"
	  },
	  "panel-header-success": {
	    "backgroundColor": "rgb(92,184,92)",
	    "color": "#ffffff"
	  },
	  "panel-header-info": {
	    "backgroundColor": "rgb(91,192,222)",
	    "color": "#ffffff"
	  },
	  "panel-header-warning": {
	    "backgroundColor": "rgb(240,173,78)",
	    "color": "#ffffff"
	  },
	  "panel-header-danger": {
	    "backgroundColor": "rgb(217,83,79)",
	    "color": "#ffffff"
	  },
	  "panel-body": {}
	}

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    type: 'default',
	    title: '',
	    paddingBody: 20,
	    paddingHead: 20,
	    dataClass: '',
	    border: 0
	  }},
	  ready: function ready() {}
	};}
	/* generated by weex-loader */


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(21)
	var __weex_style__ = __webpack_require__(22)
	var __weex_script__ = __webpack_require__(23)

	__weex_define__('@weex-component/wxc-tip', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['tip', 'tip-' + (this.type)]},
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['tip-txt', 'tip-txt-' + (this.type)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	}

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = {
	  "tip": {
	    "paddingLeft": 36,
	    "paddingRight": 36,
	    "paddingTop": 36,
	    "paddingBottom": 36,
	    "borderRadius": 10
	  },
	  "tip-txt": {
	    "fontSize": 28
	  },
	  "tip-success": {
	    "backgroundColor": "#dff0d8",
	    "borderColor": "#d6e9c6"
	  },
	  "tip-txt-success": {
	    "color": "#3c763d"
	  },
	  "tip-info": {
	    "backgroundColor": "#d9edf7",
	    "borderColor": "#bce8f1"
	  },
	  "tip-txt-info": {
	    "color": "#31708f"
	  },
	  "tip-warning": {
	    "backgroundColor": "#fcf8e3",
	    "borderColor": "#faebcc"
	  },
	  "tip-txt-warning": {
	    "color": "#8a6d3b"
	  },
	  "tip-danger": {
	    "backgroundColor": "#f2dede",
	    "borderColor": "#ebccd1"
	  },
	  "tip-txt-danger": {
	    "color": "#a94442"
	  }
	}

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    type: 'success',
	    value: ''
	  }}
	};}
	/* generated by weex-loader */


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(25)
	var __weex_style__ = __webpack_require__(26)
	var __weex_script__ = __webpack_require__(27)

	__weex_define__('@weex-component/wxc-countdown', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "style": {
	    "overflow": "hidden",
	    "flexDirection": "row"
	  },
	  "events": {
	    "appear": "appeared",
	    "disappear": "disappeared"
	  },
	  "children": [
	    {
	      "type": "content"
	    }
	  ]
	}

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = {
	  "wrap": {
	    "overflow": "hidden"
	  }
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var _assign = __webpack_require__(28);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	    data: function () {return {
	        now: 0,
	        remain: 0,
	        time: {
	            elapse: 0,
	            D: '0',
	            DD: '0',
	            h: '0',
	            hh: '00',
	            H: '0',
	            HH: '0',
	            m: '0',
	            mm: '00',
	            M: '0',
	            MM: '0',
	            s: '0',
	            ss: '00',
	            S: '0',
	            SS: '0'
	        },
	        outofview: false
	    }},
	    ready: function ready() {
	        if (this.remain <= 0) {
	            return;
	        }

	        this.now = Date.now();
	        this.nextTick();
	    },
	    methods: {
	        nextTick: function nextTick() {
	            if (this.outofview) {
	                setTimeout(this.nextTick.bind(this), 1000);
	            } else {
	                this.time.elapse = parseInt((Date.now() - this.now) / 1000);

	                if (this.calc()) {
	                    this.$emit('tick', (0, _assign2.default)({}, this.time));
	                    setTimeout(this.nextTick.bind(this), 1000);
	                } else {
	                    this.$emit('alarm', (0, _assign2.default)({}, this.time));
	                }
	                this._app.updateActions();
	            }
	        },
	        format: function format(str) {
	            if (str.length >= 2) {
	                return str;
	            } else {
	                return '0' + str;
	            }
	        },
	        calc: function calc() {
	            var remain = this.remain - this.time.elapse;
	            if (remain < 0) {
	                remain = 0;
	            }
	            this.time.D = String(parseInt(remain / 86400));
	            this.time.DD = this.format(this.time.D);
	            this.time.h = String(parseInt((remain - parseInt(this.time.D) * 86400) / 3600));
	            this.time.hh = this.format(this.time.h);
	            this.time.H = String(parseInt(remain / 3600));
	            this.time.HH = this.format(this.time.H);
	            this.time.m = String(parseInt((remain - parseInt(this.time.H) * 3600) / 60));
	            this.time.mm = this.format(this.time.m);
	            this.time.M = String(parseInt(remain / 60));
	            this.time.MM = this.format(this.time.M);
	            this.time.s = String(remain - parseInt(this.time.M) * 60);
	            this.time.ss = this.format(this.time.s);
	            this.time.S = String(remain);
	            this.time.SS = this.format(this.time.S);

	            return remain > 0;
	        },
	        appeared: function appeared() {
	            this.outofview = false;
	        },
	        disappeared: function disappeared() {
	            this.outofview = true;
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(29), __esModule: true };

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(30);
	module.exports = __webpack_require__(33).Object.assign;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(31);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(46)});

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(32)
	  , core      = __webpack_require__(33)
	  , ctx       = __webpack_require__(34)
	  , hide      = __webpack_require__(36)
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
/* 32 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 33 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(35);
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
/* 35 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(37)
	  , createDesc = __webpack_require__(45);
	module.exports = __webpack_require__(41) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(38)
	  , IE8_DOM_DEFINE = __webpack_require__(40)
	  , toPrimitive    = __webpack_require__(44)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(41) ? Object.defineProperty : function defineProperty(O, P, Attributes){
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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(39);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(41) && !__webpack_require__(42)(function(){
	  return Object.defineProperty(__webpack_require__(43)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(42)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(39)
	  , document = __webpack_require__(32).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(39);
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
/* 45 */
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
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(47)
	  , gOPS     = __webpack_require__(62)
	  , pIE      = __webpack_require__(63)
	  , toObject = __webpack_require__(64)
	  , IObject  = __webpack_require__(51)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(42)(function(){
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
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(48)
	  , enumBugKeys = __webpack_require__(61);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(49)
	  , toIObject    = __webpack_require__(50)
	  , arrayIndexOf = __webpack_require__(54)(false)
	  , IE_PROTO     = __webpack_require__(58)('IE_PROTO');

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
/* 49 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(51)
	  , defined = __webpack_require__(53);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(52);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 52 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 53 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(50)
	  , toLength  = __webpack_require__(55)
	  , toIndex   = __webpack_require__(57);
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
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(56)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 56 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(56)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(59)('keys')
	  , uid    = __webpack_require__(60);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(32)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 60 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 61 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 62 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 63 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(53);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(66)
	var __weex_style__ = __webpack_require__(67)
	var __weex_script__ = __webpack_require__(68)

	__weex_define__('@weex-component/wxc-marquee', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wrap"
	  ],
	  "events": {
	    "appear": "appeared",
	    "disappear": "disappeared"
	  },
	  "children": [
	    {
	      "type": "div",
	      "id": "anim",
	      "classList": [
	        "anim"
	      ],
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = {
	  "wrap": {
	    "overflow": "hidden",
	    "position": "relative"
	  },
	  "anim": {
	    "flexDirection": "column",
	    "position": "absolute",
	    "transform": "translateY(0) translateZ(0)"
	  }
	}

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	    data: function () {return {
	        step: 0,
	        count: 0,
	        index: 1,
	        duration: 0,
	        interval: 0,
	        outofview: false
	    }},
	    ready: function ready() {
	        if (this.interval > 0 && this.step > 0 && this.duration > 0) {
	            this.nextTick();
	        }
	    },
	    methods: {
	        nextTick: function nextTick() {
	            var self = this;
	            if (this.outofview) {
	                setTimeout(self.nextTick.bind(self), self.interval);
	            } else {
	                setTimeout(function () {
	                    self.animation(self.nextTick.bind(self));
	                }, self.interval);
	            }
	        },
	        animation: function animation(cb) {
	            var self = this;
	            var offset = -self.step * self.index;
	            var $animation = __weex_require__('@weex-module/animation');
	            $animation.transition(this.$el('anim'), {
	                styles: {
	                    transform: 'translateY(' + String(offset) + 'px) translateZ(0)'
	                },
	                timingFunction: 'ease',
	                duration: self.duration
	            }, function () {
	                self.index = (self.index + 1) % self.count;
	                self.$emit('change', {
	                    index: self.index,
	                    count: self.count
	                });
	                cb && cb();
	            });
	        },
	        appeared: function appeared() {
	            this.outofview = false;
	        },
	        disappeared: function disappeared() {
	            this.outofview = true;
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(70)
	var __weex_style__ = __webpack_require__(71)
	var __weex_script__ = __webpack_require__(72)

	__weex_define__('@weex-component/wxc-navbar', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "style": {
	    "height": function () {return this.height},
	    "backgroundColor": function () {return this.backgroundColor}
	  },
	  "attr": {
	    "dataRole": function () {return this.dataRole}
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "right-text"
	      ],
	      "style": {
	        "color": function () {return this.rightItemColor}
	      },
	      "attr": {
	        "naviItemPosition": "right",
	        "value": function () {return this.rightItemTitle}
	      },
	      "shown": function () {return !this.rightItemSrc},
	      "events": {
	        "click": "onclickrightitem"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "right-image"
	      ],
	      "attr": {
	        "naviItemPosition": "right",
	        "src": function () {return this.rightItemSrc}
	      },
	      "shown": function () {return this.rightItemSrc},
	      "events": {
	        "click": "onclickrightitem"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "left-text"
	      ],
	      "style": {
	        "color": function () {return this.leftItemColor}
	      },
	      "attr": {
	        "naviItemPosition": "left",
	        "value": function () {return this.leftItemTitle}
	      },
	      "shown": function () {return !this.leftItemSrc},
	      "events": {
	        "click": "onclickleftitem"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "left-image"
	      ],
	      "attr": {
	        "naviItemPosition": "left",
	        "src": function () {return this.leftItemSrc}
	      },
	      "shown": function () {return this.leftItemSrc},
	      "events": {
	        "click": "onclickleftitem"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "center-text"
	      ],
	      "style": {
	        "color": function () {return this.titleColor}
	      },
	      "attr": {
	        "naviItemPosition": "center",
	        "value": function () {return this.title}
	      }
	    }
	  ]
	}

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = {
	  "container": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "width": 750
	  },
	  "right-text": {
	    "position": "absolute",
	    "bottom": 28,
	    "right": 32,
	    "textAlign": "right",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "left-text": {
	    "position": "absolute",
	    "bottom": 28,
	    "left": 32,
	    "textAlign": "left",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "center-text": {
	    "position": "absolute",
	    "bottom": 25,
	    "left": 172,
	    "right": 172,
	    "textAlign": "center",
	    "fontSize": 36,
	    "fontWeight": "bold"
	  },
	  "left-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "left": 28,
	    "width": 50,
	    "height": 50
	  },
	  "right-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "right": 28,
	    "width": 50,
	    "height": 50
	  }
	}

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    dataRole: 'navbar',

	    backgroundColor: 'black',

	    height: 88,

	    title: "",

	    titleColor: 'black',

	    rightItemSrc: '',

	    rightItemTitle: '',

	    rightItemColor: 'black',

	    leftItemSrc: '',

	    leftItemTitle: '',

	    leftItemColor: 'black'
	  }},
	  methods: {
	    onclickrightitem: function onclickrightitem(e) {
	      this.$dispatch('naviBar.rightItem.click', {});
	    },
	    onclickleftitem: function onclickleftitem(e) {
	      this.$dispatch('naviBar.leftItem.click', {});
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(69)
	var __weex_template__ = __webpack_require__(74)
	var __weex_style__ = __webpack_require__(75)
	var __weex_script__ = __webpack_require__(76)

	__weex_define__('@weex-component/wxc-navpage', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "wxc-navbar",
	      "attr": {
	        "dataRole": function () {return this.dataRole},
	        "height": function () {return this.height},
	        "backgroundColor": function () {return this.backgroundColor},
	        "title": function () {return this.title},
	        "titleColor": function () {return this.titleColor},
	        "leftItemSrc": function () {return this.leftItemSrc},
	        "leftItemTitle": function () {return this.leftItemTitle},
	        "leftItemColor": function () {return this.leftItemColor},
	        "rightItemSrc": function () {return this.rightItemSrc},
	        "rightItemTitle": function () {return this.rightItemTitle},
	        "rightItemColor": function () {return this.rightItemColor}
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "wrapper"
	      ],
	      "style": {
	        "marginTop": function () {return this.height}
	      },
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "width": 750
	  }
	}

/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    dataRole: 'navbar',
	    backgroundColor: 'black',
	    height: 88,
	    title: "",
	    titleColor: 'black',
	    rightItemSrc: '',
	    rightItemTitle: '',
	    rightItemColor: 'black',
	    leftItemSrc: '',
	    leftItemTitle: '',
	    leftItemColor: 'black'
	  }}
	};}
	/* generated by weex-loader */


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(78)
	var __weex_template__ = __webpack_require__(82)
	var __weex_style__ = __webpack_require__(83)
	var __weex_script__ = __webpack_require__(84)

	__weex_define__('@weex-component/wxc-tabbar', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(79)
	var __weex_style__ = __webpack_require__(80)
	var __weex_script__ = __webpack_require__(81)

	__weex_define__('@weex-component/wxc-tabitem', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "style": {
	    "backgroundColor": function () {return this.backgroundColor}
	  },
	  "events": {
	    "click": "onclickitem"
	  },
	  "children": [
	    {
	      "type": "image",
	      "classList": [
	        "top-line"
	      ],
	      "attr": {
	        "src": "http://gtms03.alicdn.com/tps/i3/TB1mdsiMpXXXXXpXXXXNw4JIXXX-640-4.png"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "tab-icon"
	      ],
	      "attr": {
	        "src": function () {return this.icon}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "tab-text"
	      ],
	      "style": {
	        "color": function () {return this.titleColor}
	      },
	      "attr": {
	        "value": function () {return this.title}
	      }
	    }
	  ]
	}

/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = {
	  "container": {
	    "flex": 1,
	    "flexDirection": "column",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "height": 88
	  },
	  "top-line": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "height": 2
	  },
	  "tab-icon": {
	    "marginTop": 5,
	    "width": 40,
	    "height": 40
	  },
	  "tab-text": {
	    "marginTop": 5,
	    "textAlign": "center",
	    "fontSize": 20
	  }
	}

/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    index: 0,
	    title: '',
	    titleColor: '#000000',
	    icon: '',
	    backgroundColor: '#ffffff'
	  }},
	  methods: {
	    onclickitem: function onclickitem(e) {
	      var vm = this;
	      var params = {
	        index: vm.index
	      };
	      vm.$dispatch('tabItem.onClick', params);
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "embed",
	      "classList": [
	        "content"
	      ],
	      "style": {
	        "visibility": function () {return this.visibility}
	      },
	      "repeat": function () {return this.tabItems},
	      "attr": {
	        "src": function () {return this.src},
	        "type": "weex"
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "tabbar"
	      ],
	      "append": "tree",
	      "children": [
	        {
	          "type": "wxc-tabitem",
	          "repeat": function () {return this.tabItems},
	          "attr": {
	            "index": function () {return this.index},
	            "icon": function () {return this.icon},
	            "title": function () {return this.title},
	            "titleColor": function () {return this.titleColor}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "width": 750,
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0
	  },
	  "content": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "marginTop": 0,
	    "marginBottom": 88
	  },
	  "tabbar": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "bottom": 0,
	    "left": 0,
	    "right": 0,
	    "height": 88
	  }
	}

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    tabItems: [],
	    selectedIndex: 0,
	    selectedColor: '#ff0000',
	    unselectedColor: '#000000'
	  }},
	  created: function created() {
	    this.selected(this.selectedIndex);

	    this.$on('tabItem.onClick', function (e) {
	      var detail = e.detail;
	      this.selectedIndex = detail.index;
	      this.selected(detail.index);

	      var params = {
	        index: detail.index
	      };
	      this.$dispatch('tabBar.onClick', params);
	    });
	  },
	  methods: {
	    selected: function selected(index) {
	      for (var i = 0; i < this.tabItems.length; i++) {
	        var tabItem = this.tabItems[i];
	        if (i == index) {
	          tabItem.icon = tabItem.selectedImage;
	          tabItem.titleColor = this.selectedColor;
	          tabItem.visibility = 'visible';
	        } else {
	          tabItem.icon = tabItem.image;
	          tabItem.titleColor = this.unselectedColor;
	          tabItem.visibility = 'hidden';
	        }
	      }
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },
/* 85 */
/***/ function(module, exports) {

	/**
	 * Created by baidu on 16/6/8.
	 */


	// var stream = require('@weex-module/stream');//说是0.15已经支持,但是我没生效

	var stream
	__weex_define__('@weex-temp/api', function (__weex_require__) {
	    stream = __weex_require__('@weex-module/stream')
	});

	var apiURL = {
	    baseurl: 'http://v3.wufazhuce.com:8000/api',
	    homePage: '/hp/bymonth/',
	    readingCarousel: '/reading/carousel',
	    readingIndex: '/reading/index/',
	    essay: '/essay/',
	    serialcontent: '/serialcontent/',
	    question: '/question/',
	    carouselList: '/reading/carousel/',
	    movieList: '/movie/list/',
	    movieDetail: '/movie/detail/'

	};
	function getData(url, callback) {
	    stream.sendHttp({
	        method: 'GET',
	        url: url
	    }, function (ret) {
	        var retdata = JSON.parse(ret);
	        callback(retdata);
	    });
	}
	exports.getHome = function (dateStr, callback) {
	    getData(apiURL.baseurl + apiURL.homePage + dateStr, callback);
	};
	exports.getReadingCarousel = function (callback) {
	    getData(apiURL.baseurl + apiURL.readingCarousel, callback);
	};
	exports.getReadingIndex = function (index, callback) {
	    getData(apiURL.baseurl + apiURL.readingIndex + index, callback);
	};
	exports.getEssay = function (id, callback) {
	    getData(apiURL.baseurl + apiURL.essay + id, callback);
	};
	exports.getSerialContent = function (id, callback) {
	    getData(apiURL.baseurl + apiURL.serialcontent + id, callback);
	};
	exports.getQuestionDetail = function (id, callback) {
	    getData(apiURL.baseurl + apiURL.question + id, callback);

	};
	exports.getCarouseList = function (id, callback) {
	    getData(apiURL.baseurl + apiURL.carouselList + id, callback);
	};
	exports.getMovieList = function (id, callback) {
	    getData(apiURL.baseurl + apiURL.movieList + id, callback);
	};
	exports.getMovieDetail = function (id, callback) {
	    getData(apiURL.baseurl + apiURL.movieDetail + id, callback);

	};
	exports.apiurl = {
		resurl: 'http://47.93.112.226:9001/api/'
	};
	exports.getBaseUrl = function (bundleUrl, isnav) {
	    bundleUrl = new String(bundleUrl);
	    var nativeBase;
	    var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;

	    var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
	    if (isAndroidAssets) {
	        nativeBase = 'file://assets/dist/';
	    }
	    else if (isiOSAssets) {
	        nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
	    }
	    else {
	        var host = 'localhost:12580';
	        var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
	        if (matches && matches.length >= 2) {
	            host = matches[1];
	        }

	        //此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
	        if (typeof window === 'object') {
	            nativeBase = isnav ? 'http://' + host + '/index.html?page=./dist/' : '/dist/';
	        } else {
	            nativeBase = 'http://' + host + '/dist/';
	        }
	    }

	    return nativeBase;
	};

/***/ },
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "nav_bar"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "navleft"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "events": {
	                "click": "goback"
	              },
	              "shown": function () {return this.showback},
	              "style": {
	                "width": 76,
	                "height": 44,
	                "marginTop": 22
	              },
	              "attr": {
	                "src": "src/common/img/nav_back.png"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "navtitle"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.title}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "navright"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "style": {
	                "width": 44,
	                "height": 44
	              },
	              "classList": [
	                "navrightimg"
	              ],
	              "attr": {
	                "src": "src/common/img/nav_information.png"
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 94 */
/***/ function(module, exports) {

	module.exports = {
	  "nav_bar": {
	    "flexDirection": "row",
	    "height": 88,
	    "background": "#1b9df6"
	  },
	  "navleft": {
	    "flex": 1,
	    "marginLeft": 10
	  },
	  "navtitle": {
	    "flex": 1,
	    "color": "#ffffff",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "flexDirection": "row"
	  },
	  "navright": {
	    "flex": 1,
	    "backgroundPosition": "right center",
	    "marginRight": 10,
	    "position": "relative"
	  },
	  "navrightimg": {
	    "textAlign": "right",
	    "position": "absolute",
	    "right": 10,
	    "top": 22
	  }
	}

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	__webpack_require__(3);
	var modal = __weex_require__('@weex-module/modal');
	var navigator = __weex_require__('@weex-module/navigator');
	module.exports = {
	    data: function () {return {
	        title: '调查星',
	        justifyContent: 'center',
	        showback: false
	    }},
	    created: function created() {
	        var self = this;
	    },
	    methods: {
	        goback: function goback(e) {
	            var self = this;
	            var params = {
	                'animated': 'true'
	            };
	            navigator.pop(params, function (e) {});
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(93)
	var __weex_style__ = __webpack_require__(94)
	var __weex_script__ = __webpack_require__(95)

	__weex_define__('@weex-component/header', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "style": {
	    "overflow": "hidden",
	    "background": "#f3f3f3"
	  },
	  "children": [
	    {
	      "type": "header"
	    },
	    {
	      "type": "list",
	      "classList": [
	        "main-list"
	      ],
	      "children": [
	        {
	          "type": "refresh",
	          "classList": [
	            "refresh-view"
	          ],
	          "attr": {
	            "display": function () {return this.refresh_display}
	          },
	          "events": {
	            "refresh": "onrefresh"
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "refresh-arrow"
	              ],
	              "shown": function () {return (this.refresh_display==='hide')},
	              "attr": {
	                "value": "刷新"
	              }
	            },
	            {
	              "type": "loading-indicator"
	            }
	          ]
	        },
	        {
	          "type": "cell",
	          "append": "tree",
	          "classList": [
	            "top-slider"
	          ],
	          "children": [
	            {
	              "type": "slider",
	              "classList": [
	                "slider"
	              ],
	              "attr": {
	                "interval": "3000",
	                "autoPlay": "false"
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "slider-pages"
	                  ],
	                  "style": {
	                    "width": function () {return (this.widthview) + 'px'}
	                  },
	                  "repeat": {
	                    "expression": function () {return this.banner},
	                    "value": "item"
	                  },
	                  "children": [
	                    {
	                      "type": "image",
	                      "style": {
	                        "height": 370
	                      },
	                      "classList": [
	                        "img"
	                      ],
	                      "attr": {
	                        "src": function () {return this.moniimg}
	                      }
	                    },
	                    {
	                      "type": "div",
	                      "classList": [
	                        "titlebox"
	                      ],
	                      "style": {
	                        "position": "absolute",
	                        "left": 0,
	                        "bottom": 0,
	                        "height": 60,
	                        "width": function () {return (this.widthview) + 'px'},
	                        "background": "rgba(0,0,0,0.5)"
	                      },
	                      "children": [
	                        {
	                          "type": "text",
	                          "classList": [
	                            "title"
	                          ],
	                          "style": {
	                            "lineHeight": 60,
	                            "paddingLeft": 10,
	                            "color": "#ffffff",
	                            "width": function () {return (this.widthview-100) + 'px'},
	                            "overflow": "hidden",
	                            "whiteSpace": "nowrap",
	                            "textOverflow": "ellipsis"
	                          },
	                          "attr": {
	                            "value": function () {return this.item.title}
	                          }
	                        }
	                      ]
	                    }
	                  ]
	                },
	                {
	                  "type": "indicator",
	                  "classList": [
	                    "indicator"
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "cell",
	          "append": "tree",
	          "classList": [
	            "center-cell"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "btnbar"
	              ],
	              "style": {
	                "flexDirection": "row"
	              },
	              "shown": function () {return this.indeshow},
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "ben-left",
	                    "btn-cen"
	                  ],
	                  "events": {
	                    "click": "changindeshow"
	                  },
	                  "children": [
	                    {
	                      "type": "image",
	                      "style": {
	                        "height": 40,
	                        "width": 40,
	                        "marginLeft": function () {return (this.marginl) + 'px'}
	                      },
	                      "classList": [
	                        "cent-img"
	                      ],
	                      "attr": {
	                        "src": "src/common/img/btn_questionnairetab_pre.png"
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "title-text"
	                      ],
	                      "style": {
	                        "color": "#ffcf5c"
	                      },
	                      "attr": {
	                        "value": "最新问卷"
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "ben-right",
	                    "btn-cen"
	                  ],
	                  "events": {
	                    "click": "changindehide"
	                  },
	                  "children": [
	                    {
	                      "type": "image",
	                      "style": {
	                        "height": 40,
	                        "width": 40,
	                        "marginLeft": function () {return (this.marginl) + 'px'}
	                      },
	                      "classList": [
	                        "cent-img"
	                      ],
	                      "attr": {
	                        "src": "src/common/img/btn_Journalismtab_nor.png"
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "title-text"
	                      ],
	                      "attr": {
	                        "value": "热点新闻"
	                      }
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "btnbar"
	              ],
	              "style": {
	                "flexDirection": "row"
	              },
	              "shown": function () {return !this.indeshow},
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "ben-left",
	                    "btn-cen"
	                  ],
	                  "events": {
	                    "click": "changindeshow"
	                  },
	                  "children": [
	                    {
	                      "type": "image",
	                      "style": {
	                        "height": 40,
	                        "width": 40,
	                        "marginLeft": function () {return (this.marginl) + 'px'}
	                      },
	                      "classList": [
	                        "cent-img"
	                      ],
	                      "attr": {
	                        "src": "src/common/img/btn_questionnairetab_nor.png"
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "title-text"
	                      ],
	                      "attr": {
	                        "value": "最新问卷"
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "ben-right",
	                    "btn-cen"
	                  ],
	                  "events": {
	                    "click": "changindehide"
	                  },
	                  "children": [
	                    {
	                      "type": "image",
	                      "style": {
	                        "height": 40,
	                        "width": 40,
	                        "marginLeft": function () {return (this.marginl) + 'px'}
	                      },
	                      "classList": [
	                        "cent-img"
	                      ],
	                      "attr": {
	                        "src": "src/common/img/btn_Journalismtab_pre.png"
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "title-text"
	                      ],
	                      "style": {
	                        "color": "#ffcf5c"
	                      },
	                      "attr": {
	                        "value": "热点新闻"
	                      }
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "cell",
	          "append": "tree",
	          "classList": [
	            "bootom-list"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "list-box"
	              ],
	              "shown": function () {return this.indeshow},
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "list-items"
	                  ],
	                  "repeat": {
	                    "expression": function () {return this.indesurvey},
	                    "value": "item"
	                  },
	                  "attr": {
	                    "itemid": function () {return this.item.id},
	                    "status": function () {return this.item.status}
	                  },
	                  "events": {
	                    "click": "maindetail"
	                  },
	                  "style": {
	                    "marginLeft": function () {return (this.itemleft) + 'px'}
	                  },
	                  "children": [
	                    {
	                      "type": "image",
	                      "classList": [
	                        "item-img"
	                      ],
	                      "style": {
	                        "width": 662,
	                        "height": 280
	                      },
	                      "attr": {
	                        "src": function () {return this.moniimg}
	                      }
	                    },
	                    {
	                      "type": "div",
	                      "classList": [
	                        "surveylist"
	                      ],
	                      "children": [
	                        {
	                          "type": "text",
	                          "classList": [
	                            "surtitle"
	                          ],
	                          "attr": {
	                            "value": function () {return this.item.title}
	                          }
	                        },
	                        {
	                          "type": "div",
	                          "classList": [
	                            "statusbox"
	                          ],
	                          "style": {
	                            "flexDirection": "row",
	                            "width": 120
	                          },
	                          "children": [
	                            {
	                              "type": "text",
	                              "classList": [
	                                "statusnow"
	                              ],
	                              "attr": {
	                                "value": "状态："
	                              }
	                            },
	                            {
	                              "type": "text",
	                              "classList": [
	                                "statustext"
	                              ],
	                              "style": {
	                                "color": function () {return this.item.color}
	                              },
	                              "attr": {
	                                "value": function () {return this.statusarr[this.item.status-1]}
	                              }
	                            }
	                          ]
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "detail"
	                          ],
	                          "attr": {
	                            "value": function () {return this.item.summary}
	                          }
	                        },
	                        {
	                          "type": "div",
	                          "classList": [
	                            "surveyotr"
	                          ],
	                          "style": {
	                            "flexDirection": "row",
	                            "justifyContent": "space-between"
	                          },
	                          "children": [
	                            {
	                              "type": "div",
	                              "classList": [
	                                "otr1"
	                              ],
	                              "children": [
	                                {
	                                  "type": "text",
	                                  "classList": [
	                                    "surveytime"
	                                  ],
	                                  "attr": {
	                                    "value": function () {return '发表于：' + (this.item.updateTime)}
	                                  }
	                                }
	                              ]
	                            },
	                            {
	                              "type": "div",
	                              "classList": [
	                                "otr2"
	                              ],
	                              "style": {
	                                "flexDirection": "row"
	                              },
	                              "children": [
	                                {
	                                  "type": "div",
	                                  "classList": [
	                                    "chakan",
	                                    "otr3"
	                                  ],
	                                  "style": {
	                                    "flexDirection": "row"
	                                  },
	                                  "children": [
	                                    {
	                                      "type": "image",
	                                      "style": {
	                                        "width": 22,
	                                        "height": 22
	                                      },
	                                      "attr": {
	                                        "src": "src/common/img/list_icon_browse.png"
	                                      }
	                                    },
	                                    {
	                                      "type": "text",
	                                      "classList": [
	                                        "otrtt"
	                                      ],
	                                      "attr": {
	                                        "value": function () {return this.item.readCount}
	                                      }
	                                    }
	                                  ]
	                                },
	                                {
	                                  "type": "div",
	                                  "classList": [
	                                    "shoucang",
	                                    "otr3"
	                                  ],
	                                  "style": {
	                                    "flexDirection": "row"
	                                  },
	                                  "children": [
	                                    {
	                                      "type": "image",
	                                      "style": {
	                                        "width": 22,
	                                        "height": 22
	                                      },
	                                      "attr": {
	                                        "src": "src/common/img/list_icon_Collection.png"
	                                      }
	                                    },
	                                    {
	                                      "type": "text",
	                                      "classList": [
	                                        "otrtt"
	                                      ],
	                                      "attr": {
	                                        "value": function () {return this.item.answerCount}
	                                      }
	                                    }
	                                  ]
	                                }
	                              ]
	                            }
	                          ]
	                        }
	                      ]
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "listbox"
	              ],
	              "shown": function () {return !this.indeshow},
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "newslist"
	                  ],
	                  "repeat": {
	                    "expression": function () {return this.indenews},
	                    "value": "item"
	                  },
	                  "attr": {
	                    "itemid": function () {return this.item.id}
	                  },
	                  "events": {
	                    "click": "mainnewsdetail"
	                  },
	                  "style": {
	                    "background": function () {return this.item.color},
	                    "paddingLeft": function () {return (this.itemleft) + 'px'},
	                    "paddingRight": function () {return (this.itemleft) + 'px'}
	                  },
	                  "children": [
	                    {
	                      "type": "div",
	                      "classList": [
	                        "indenewsimg"
	                      ],
	                      "children": [
	                        {
	                          "type": "image",
	                          "style": {
	                            "height": 106,
	                            "width": 140,
	                            "borderRadius": 8
	                          },
	                          "classList": [
	                            "newsimg"
	                          ],
	                          "attr": {
	                            "src": function () {return this.moniimg}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "classList": [
	                        "newstext"
	                      ],
	                      "style": {
	                        "marginLeft": 14,
	                        "flex": 1
	                      },
	                      "children": [
	                        {
	                          "type": "text",
	                          "classList": [
	                            "newstitle"
	                          ],
	                          "attr": {
	                            "value": function () {return this.item.title}
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "newsjianjie"
	                          ],
	                          "attr": {
	                            "value": function () {return this.item.summary}
	                          }
	                        },
	                        {
	                          "type": "div",
	                          "classList": [
	                            "newbottom"
	                          ],
	                          "children": [
	                            {
	                              "type": "div",
	                              "classList": [
	                                "showtimes"
	                              ],
	                              "children": [
	                                {
	                                  "type": "image",
	                                  "style": {
	                                    "width": 22,
	                                    "height": 22
	                                  },
	                                  "classList": [
	                                    "readimg"
	                                  ],
	                                  "attr": {
	                                    "src": "src/common/img/list_icon_browse.png"
	                                  }
	                                },
	                                {
	                                  "type": "text",
	                                  "classList": [
	                                    "readcount"
	                                  ],
	                                  "attr": {
	                                    "value": function () {return this.item.readCount}
	                                  }
	                                }
	                              ]
	                            },
	                            {
	                              "type": "text",
	                              "classList": [
	                                "newstime"
	                              ],
	                              "attr": {
	                                "value": function () {return this.item.updateTime}
	                              }
	                            }
	                          ]
	                        }
	                      ]
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "loading",
	          "classList": [
	            "refresh-view"
	          ],
	          "shown": function () {return this.delloding},
	          "attr": {
	            "display": function () {return this.loading_display}
	          },
	          "events": {
	            "loading": "onloading"
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "refresh-arrow"
	              ],
	              "attr": {
	                "value": function () {return this.more}
	              }
	            },
	            {
	              "type": "loading-indicator"
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 104 */
/***/ function(module, exports) {

	module.exports = {
	  "main-list": {
	    "position": "absolute",
	    "right": 0,
	    "left": 0,
	    "top": 88,
	    "bottom": 0,
	    "paddingBottom": 30
	  },
	  "slider": {
	    "height": 370
	  },
	  "slider-pages": {
	    "position": "relative"
	  },
	  "indicator": {
	    "position": "absolute",
	    "height": 60,
	    "right": 100,
	    "bottom": 0,
	    "itemColor": "#dddddd",
	    "itemSelectedColor": "#45b5f0",
	    "itemSize": 14,
	    "margin": 0
	  },
	  "btnbar": {
	    "flexDirection": "row",
	    "height": 98,
	    "background": "#484b57",
	    "flexWrap": "nowrap"
	  },
	  "btn-cen": {
	    "flex": 1,
	    "justifyContent": "center"
	  },
	  "cent-img": {
	    "textAlign": "center",
	    "marginTop": 6,
	    "marginBottom": 6
	  },
	  "title-text": {
	    "textAlign": "center",
	    "color": "#ffffff",
	    "fontSize": 24,
	    "lineHeight": 28
	  },
	  "surveylist": {
	    "position": "relative"
	  },
	  "list-box": {
	    "background": "#f3f3f3",
	    "paddingBottom": 30
	  },
	  "list-items": {
	    "marginTop": 20,
	    "width": 700,
	    "height": 428,
	    "padding": 20,
	    "borderRadius": 8,
	    "background": "#fff",
	    "border": "1px solid #e1dfe0"
	  },
	  "item-img": {
	    "borderRadius": 8
	  },
	  "surtitle": {
	    "fontSize": 32,
	    "lineHeight": 32,
	    "color": "#323232",
	    "height": 32,
	    "marginTop": 10,
	    "overflow": "hidden",
	    "textOverflow": "ellipsis",
	    "whiteSpace": "nowrap"
	  },
	  "detail": {
	    "marginTop": 10,
	    "fontSize": 24,
	    "lineHeight": 24,
	    "color": "#646464",
	    "overflow": "hidden",
	    "textOverflow": "ellipsis",
	    "whiteSpace": "nowrap"
	  },
	  "statusbox": {
	    "position": "absolute",
	    "right": 40,
	    "top": 10
	  },
	  "statusnow": {
	    "fontSize": 26,
	    "lineHeight": 26
	  },
	  "statustext": {
	    "fontSize": 26,
	    "lineHeight": 26
	  },
	  "surveyotr": {
	    "marginTop": 10
	  },
	  "surveytime": {
	    "fontSize": 22,
	    "color": "#909090"
	  },
	  "otr3": {
	    "marginRight": 10
	  },
	  "otrtt": {
	    "fontSize": 22,
	    "lienHeight": 22,
	    "marginLeft": 6
	  },
	  "newslist": {
	    "paddingTop": 14,
	    "paddingBottom": 14,
	    "height": 146,
	    "flexDirection": "row"
	  },
	  "indenewsimg": {
	    "height": 116,
	    "width": 150,
	    "border": "1px solid #e1e1df",
	    "borderRadius": 8,
	    "background": "#fff",
	    "padding": 3
	  },
	  "newstitle": {
	    "fontSize": 32,
	    "lineHeight": 32,
	    "marginTop": 10,
	    "color": "#323232",
	    "overflow": "hidden",
	    "textOverflow": "ellipsis",
	    "whiteSpace": "nowrap"
	  },
	  "newsjianjie": {
	    "fontSize": 24,
	    "lineHeight": 24,
	    "marginTop": 10,
	    "color": "#646464",
	    "overflow": "hidden",
	    "textOverflow": "ellipsis",
	    "whiteSpace": "nowrap"
	  },
	  "newbottom": {
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "marginTop": 10
	  },
	  "newstime": {
	    "fontSize": 22,
	    "lineHeight": 22,
	    "color": "#909090"
	  },
	  "showtimes": {
	    "flexDirection": "row"
	  },
	  "readcount": {
	    "fontSize": 22,
	    "lineHeight": 22,
	    "color": "#909090"
	  }
	}

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	__webpack_require__(3);
	var modal = __weex_require__('@weex-module/modal');
	var storage = __weex_require__('@weex-module/storage');
	var stream = __weex_require__('@weex-module/stream');
	var apis = __webpack_require__(85);
	var navigator = __weex_require__('@weex-module/navigator');
	var locurl = apis.apiurl.resurl;
	module.exports = {
	    data: function () {return {
	        baseURL: '',
	        banner: [],
	        indesurvey: [],
	        indenews: [],
	        widthview: 750,
	        heightview: 1000,
	        refresh_display: 'hide',
	        loading_display: 'hide',
	        indeshow: true,
	        delloding: true,
	        marginl: 300,
	        statusarr: ['开放', '关闭'],
	        itemleft: 24,
	        statuscolor: '#ffd05c',
	        moniimg: 'http://47.93.112.226:9001//assets/wechat/img/slider2.jpg',
	        username: '',
	        password: '',
	        npage1: 1,
	        pages: 1,
	        npage2: 1,
	        pages2: 1,
	        more: '加载更多'
	    }},
	    created: function created() {
	        var self = this;
	        var base = apis.getBaseUrl(self.$getConfig().bundleUrl, true);
	        this.baseURL = base;
	        self.refreshkaishi();
	        this.$getConfig(function (config) {
	            self.widthview = config.env.deviceWidth;
	            self.marginl = config.env.deviceWidth / 4 - 20;
	            self.itemleft = (config.env.deviceWidth - 700) / 2;
	        }.bind(this));
	        storage.getItem('token', function (e) {
	            self.getStarCount('user/isLogin.json?token=' + e.data, function (res) {
	                if (res.data.status != 1) {
	                    self.get(function () {
	                        if (self.username == '') {} else {
	                            self.getStarCount('user/login.json?userName=' + self.username + '&password=' + self.password, function (res) {
	                                storage.setItem('token', res.data.token, function (e) {});
	                            });
	                        }
	                    });
	                }
	            });
	        });
	    },
	    methods: {
	        onrefresh: function onrefresh(e) {
	            var self = this;
	            self.refresh_display = 'show';
	            self.refreshkaishi();
	            self.refresh_display = 'hide';
	        },
	        onloading: function onloading() {
	            var self = this;
	            self.loading_display = 'show';
	            if (self.indeshow) {
	                if (self.npage1 < self.pages1) {
	                    self.npage1++;
	                    self.delloding = true;
	                    self.refresh(self.npage1, self.npage2);
	                } else {
	                    self.more = '没有更多了';
	                    self.delloding = false;
	                }
	            } else {
	                if (self.npage2 < self.pages2) {
	                    self.npage2++;
	                    self.delloding = true;
	                    self.refresh(self.npage1, self.npage2);
	                } else {
	                    self.more = '没有更多了';
	                    self.delloding = false;
	                }
	            }
	            self.loading_display = 'hide';
	        },
	        changindeshow: function changindeshow() {
	            self.delloding = true;
	            if (self.npage1 == self.pages1) {
	                self.delloding = false;
	            }
	            this.indeshow = true;
	        },
	        changindehide: function changindehide() {
	            self.delloding = true;
	            if (self.npage2 == self.pages2) {
	                self.delloding = false;
	            }
	            this.indeshow = false;
	        },
	        maindetail: function maindetail(e) {
	            var self = this;
	            if (e.target.attr.status === 2) {
	                return;
	            };
	            var itemid = e.target.attr.itemid;
	            var vm = this;
	            var params = {
	                'url': self.baseURL + 'modules/sdetail.js?id=' + itemid,
	                'animated': 'true'
	            };
	            navigator.push(params, function (e) {});
	        },
	        mainnewsdetail: function mainnewsdetail(e) {
	            var self = this;
	            var itemid = e.target.attr.itemid;
	            var params = {
	                'url': self.baseURL + 'modules/ndetail.js?id=' + itemid,
	                'animated': 'true'
	            };
	            navigator.push(params, function (e) {});
	        },
	        getStarCount: function getStarCount(repo, callback) {
	            return stream.fetch({
	                method: 'GET',
	                type: 'json',
	                url: locurl + repo
	            }, callback);
	        },
	        get: function get(callback) {
	            var self = this;
	            storage.getItem('userName', function (e) {
	                if (e.result == 'success') {
	                    self.username = e.data;
	                    storage.getItem('passWord', function (e) {
	                        if (e.result == 'success') {
	                            self.password = e.data;
	                            callback();
	                        }
	                    });
	                }
	            });
	        },
	        refreshkaishi: function refreshkaishi() {
	            var _this = this;

	            var self = this;
	            self.getStarCount('banner/list.json', function (res) {
	                self.banner = res.data.data;
	            });

	            self.getStarCount('question/list.json?page=1&pageSize=10', function (res) {
	                self.indesurvey = res.data.data.list;
	                for (var i = 0; i < self.indesurvey.length; i++) {
	                    if (self.indesurvey[i].status === 1) {
	                        self.indesurvey[i].color = '#ffd05c';
	                    } else {
	                        self.indesurvey[i].color = '#666';
	                    }
	                    self.indesurvey[i].updateTime = self.times(self.indesurvey[i].updateTime);
	                }
	                self.pages1 = res.data.data.totalPage;
	                if (self.npage1 == self.pages1) {
	                    self.delloding = false;
	                }
	            });

	            self.getStarCount('news/list.json?page=1&pageSize=10', function (res) {
	                self.indenews = res.data.data.list;
	                for (var i = 0; i < self.indenews.length; i++) {
	                    if (i % 2) {
	                        self.indenews[i].color = '#f8f6f4';
	                    } else {
	                        self.indenews[i].color = '#f3f3f3';
	                    }
	                    self.indenews[i].updateTime = self.times(_this.indenews[i].updateTime);
	                };
	                self.pages2 = res.data.data.totalPage;
	            });
	        },
	        refresh: function refresh(npage1, npage2) {
	            var self = this;
	            self.getStarCount('banner/list.json', function (res) {
	                self.banner = res.data.data;
	            });

	            self.getStarCount('question/list.json?page=' + npage1 + '&pageSize=10', function (res) {
	                var data = res.data.data.list;
	                for (var i = 0; i < data.length; i++) {
	                    if (data[i].status === 1) {
	                        data[i].color = '#ffd05c';
	                    } else {
	                        data[i].color = '#666';
	                    }
	                    data[i].updateTime = self.times(data[i].updateTime);
	                    self.indesurvey.push(data[i]);
	                }
	                self.pages1 = res.data.data.totalPage;
	            });

	            self.getStarCount('news/list.json?page=' + npage2 + '&pageSize=10', function (res) {
	                var data = res.data.data.list;
	                for (var i = 0; i < data.length; i++) {

	                    if (i % 2) {
	                        data[i].color = '#f3f3f3';
	                    } else {
	                        data[i].color = '#f9f5f4';
	                    }
	                    data[i].updateTime = self.times(data[i].updateTime);
	                    self.indenews.push(data[i]);
	                };
	                self.pages2 = res.data.data.totalPage;
	            });
	        },
	        times: function times(value) {
	            function add0(m) {
	                return m < 10 ? '0' + m : m;
	            }
	            var time = new Date(parseInt(value));
	            var y = time.getFullYear();
	            var m = time.getMonth() + 1;
	            var d = time.getDate();
	            return y + '年' + add0(m) + '月' + add0(d) + '日';
	        }
	    },
	    filters: {
	        times: function times(value) {
	            function add0(m) {
	                return m < 10 ? '0' + m : m;
	            }
	            var time = new Date(parseInt(value));
	            var y = time.getFullYear();
	            var m = time.getMonth() + 1;
	            var d = time.getDate();
	            return y + '年' + add0(m) + '月' + add0(d) + '日';
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);