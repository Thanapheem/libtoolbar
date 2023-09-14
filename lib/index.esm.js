import * as React from 'react';
import React__default, { useContext, createContext, useRef, useLayoutEffect as useLayoutEffect$2, useEffect, useState, useMemo as useMemo$1, useCallback, forwardRef, useImperativeHandle } from 'react';
import ReactDOM, { createPortal, unstable_batchedUpdates, flushSync } from 'react-dom';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _setPrototypeOf$1(o, p) {
  _setPrototypeOf$1 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf$1(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf$1(subClass, superClass);
}

function _getPrototypeOf$1(o) {
  _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf$1(o);
}

function _isNativeReflectConstruct$1() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$1();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$1(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$1(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var classnames = {exports: {}};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames() {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					if (arg.length) {
						var inner = classNames.apply(null, arg);
						if (inner) {
							classes.push(inner);
						}
					}
				} else if (argType === 'object') {
					if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
						classes.push(arg.toString());
						continue;
					}

					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	}()); 
} (classnames));

var classnamesExports = classnames.exports;
var classNames = /*@__PURE__*/getDefaultExportFromCjs(classnamesExports);

function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}

var reactIs = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min;

function requireReactIs_production_min () {
	if (hasRequiredReactIs_production_min) return reactIs_production_min;
	hasRequiredReactIs_production_min = 1;
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
	Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
	function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
	reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
	reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
	reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;
	return reactIs_production_min;
}

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development;

function requireReactIs_development () {
	if (hasRequiredReactIs_development) return reactIs_development;
	hasRequiredReactIs_development = 1;



	if (process.env.NODE_ENV !== "production") {
	  (function() {

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?

	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	} // AsyncMode is deprecated along with isAsyncMode

	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }

	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	reactIs_development.AsyncMode = AsyncMode;
	reactIs_development.ConcurrentMode = ConcurrentMode;
	reactIs_development.ContextConsumer = ContextConsumer;
	reactIs_development.ContextProvider = ContextProvider;
	reactIs_development.Element = Element;
	reactIs_development.ForwardRef = ForwardRef;
	reactIs_development.Fragment = Fragment;
	reactIs_development.Lazy = Lazy;
	reactIs_development.Memo = Memo;
	reactIs_development.Portal = Portal;
	reactIs_development.Profiler = Profiler;
	reactIs_development.StrictMode = StrictMode;
	reactIs_development.Suspense = Suspense;
	reactIs_development.isAsyncMode = isAsyncMode;
	reactIs_development.isConcurrentMode = isConcurrentMode;
	reactIs_development.isContextConsumer = isContextConsumer;
	reactIs_development.isContextProvider = isContextProvider;
	reactIs_development.isElement = isElement;
	reactIs_development.isForwardRef = isForwardRef;
	reactIs_development.isFragment = isFragment;
	reactIs_development.isLazy = isLazy;
	reactIs_development.isMemo = isMemo;
	reactIs_development.isPortal = isPortal;
	reactIs_development.isProfiler = isProfiler;
	reactIs_development.isStrictMode = isStrictMode;
	reactIs_development.isSuspense = isSuspense;
	reactIs_development.isValidElementType = isValidElementType;
	reactIs_development.typeOf = typeOf;
	  })();
	}
	return reactIs_development;
}

if (process.env.NODE_ENV === 'production') {
  reactIs.exports = requireReactIs_production_min();
} else {
  reactIs.exports = requireReactIs_development();
}

var reactIsExports = reactIs.exports;

function toArray$3(children) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var ret = [];
  React__default.Children.forEach(children, function (child) {
    if ((child === undefined || child === null) && !option.keepEmpty) {
      return;
    }
    if (Array.isArray(child)) {
      ret = ret.concat(toArray$3(child));
    } else if (reactIsExports.isFragment(child) && child.props) {
      ret = ret.concat(toArray$3(child.props.children, option));
    } else {
      ret.push(child);
    }
  });
  return ret;
}

/* eslint-disable no-console */
var warned = {};
var preWarningFns = [];

/**
 * Pre warning enable you to parse content before console.error.
 * Modify to null will prevent warning.
 */
var preMessage = function preMessage(fn) {
  preWarningFns.push(fn);
};
function warning$4(valid, message) {
  // Support uglify
  if (process.env.NODE_ENV !== 'production' && !valid && console !== undefined) {
    var finalMessage = preWarningFns.reduce(function (msg, preMessageFn) {
      return preMessageFn(msg !== null && msg !== void 0 ? msg : '', 'warning');
    }, message);
    if (finalMessage) {
      console.error("Warning: ".concat(finalMessage));
    }
  }
}
function note(valid, message) {
  // Support uglify
  if (process.env.NODE_ENV !== 'production' && !valid && console !== undefined) {
    var finalMessage = preWarningFns.reduce(function (msg, preMessageFn) {
      return preMessageFn(msg !== null && msg !== void 0 ? msg : '', 'note');
    }, message);
    if (finalMessage) {
      console.warn("Note: ".concat(finalMessage));
    }
  }
}
function resetWarned() {
  warned = {};
}
function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  call(warning$4, valid, message);
}
function noteOnce(valid, message) {
  call(note, valid, message);
}
warningOnce.preMessage = preMessage;
warningOnce.resetWarned = resetWarned;
warningOnce.noteOnce = noteOnce;
/* eslint-enable */

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}

function useMemo(getValue, condition, shouldUpdate) {
  var cacheRef = React.useRef({});
  if (!('value' in cacheRef.current) || shouldUpdate(cacheRef.current.condition, condition)) {
    cacheRef.current.value = getValue();
    cacheRef.current.condition = condition;
  }
  return cacheRef.current.value;
}

function fillRef(ref, node) {
  if (typeof ref === 'function') {
    ref(node);
  } else if (_typeof(ref) === 'object' && ref && 'current' in ref) {
    ref.current = node;
  }
}

/**
 * Merge refs into one ref function to support ref passing.
 */
function composeRef() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }
  var refList = refs.filter(function (ref) {
    return ref;
  });
  if (refList.length <= 1) {
    return refList[0];
  }
  return function (node) {
    refs.forEach(function (ref) {
      fillRef(ref, node);
    });
  };
}
function useComposeRef() {
  for (var _len2 = arguments.length, refs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    refs[_key2] = arguments[_key2];
  }
  return useMemo(function () {
    return composeRef.apply(void 0, refs);
  }, refs, function (prev, next) {
    return prev.length !== next.length || prev.every(function (ref, i) {
      return ref !== next[i];
    });
  });
}
function supportRef(nodeOrComponent) {
  var _type$prototype, _nodeOrComponent$prot;
  var type = reactIsExports.isMemo(nodeOrComponent) ? nodeOrComponent.type.type : nodeOrComponent.type;

  // Function component node
  if (typeof type === 'function' && !((_type$prototype = type.prototype) !== null && _type$prototype !== void 0 && _type$prototype.render)) {
    return false;
  }

  // Class component
  if (typeof nodeOrComponent === 'function' && !((_nodeOrComponent$prot = nodeOrComponent.prototype) !== null && _nodeOrComponent$prot !== void 0 && _nodeOrComponent$prot.render)) {
    return false;
  }
  return true;
}
/* eslint-enable */

function isDOM(node) {
  // https://developer.mozilla.org/en-US/docs/Web/API/Element
  // Since XULElement is also subclass of Element, we only need HTMLElement and SVGElement
  return node instanceof HTMLElement || node instanceof SVGElement;
}

/**
 * Return if a node is a DOM node. Else will return by `findDOMNode`
 */
function findDOMNode(node) {
  if (isDOM(node)) {
    return node;
  }
  if (node instanceof React__default.Component) {
    return ReactDOM.findDOMNode(node);
  }
  return null;
}

/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver$2 = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver$2.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver$2;
})();

// =============================== Const ===============================
var elementListeners = new Map();
function onResize(entities) {
  entities.forEach(function (entity) {
    var _elementListeners$get;
    var target = entity.target;
    (_elementListeners$get = elementListeners.get(target)) === null || _elementListeners$get === void 0 ? void 0 : _elementListeners$get.forEach(function (listener) {
      return listener(target);
    });
  });
}
// Note: ResizeObserver polyfill not support option to measure border-box resize
var resizeObserver = new index(onResize);
// Dev env only
process.env.NODE_ENV !== 'production' ? elementListeners : null; // eslint-disable-line
process.env.NODE_ENV !== 'production' ? onResize : null; // eslint-disable-line
// ============================== Observe ==============================
function observe(element, callback) {
  if (!elementListeners.has(element)) {
    elementListeners.set(element, new Set());
    resizeObserver.observe(element);
  }
  elementListeners.get(element).add(callback);
}
function unobserve(element, callback) {
  if (elementListeners.has(element)) {
    elementListeners.get(element).delete(callback);
    if (!elementListeners.get(element).size) {
      resizeObserver.unobserve(element);
      elementListeners.delete(element);
    }
  }
}

/**
 * Fallback to findDOMNode if origin ref do not provide any dom element
 */
var DomWrapper$1 = /*#__PURE__*/function (_React$Component) {
  _inherits(DomWrapper, _React$Component);
  var _super = _createSuper(DomWrapper);
  function DomWrapper() {
    _classCallCheck(this, DomWrapper);
    return _super.apply(this, arguments);
  }
  _createClass(DomWrapper, [{
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return DomWrapper;
}(React.Component);

var CollectionContext = /*#__PURE__*/React.createContext(null);
/**
 * Collect all the resize event from children ResizeObserver
 */
function Collection(_ref) {
  var children = _ref.children,
    onBatchResize = _ref.onBatchResize;
  var resizeIdRef = React.useRef(0);
  var resizeInfosRef = React.useRef([]);
  var onCollectionResize = React.useContext(CollectionContext);
  var onResize = React.useCallback(function (size, element, data) {
    resizeIdRef.current += 1;
    var currentId = resizeIdRef.current;
    resizeInfosRef.current.push({
      size: size,
      element: element,
      data: data
    });
    Promise.resolve().then(function () {
      if (currentId === resizeIdRef.current) {
        onBatchResize === null || onBatchResize === void 0 ? void 0 : onBatchResize(resizeInfosRef.current);
        resizeInfosRef.current = [];
      }
    });
    // Continue bubbling if parent exist
    onCollectionResize === null || onCollectionResize === void 0 ? void 0 : onCollectionResize(size, element, data);
  }, [onBatchResize, onCollectionResize]);
  return /*#__PURE__*/React.createElement(CollectionContext.Provider, {
    value: onResize
  }, children);
}

function SingleObserver(props, ref) {
  var children = props.children,
    disabled = props.disabled;
  var elementRef = React.useRef(null);
  var wrapperRef = React.useRef(null);
  var onCollectionResize = React.useContext(CollectionContext);
  // =========================== Children ===========================
  var isRenderProps = typeof children === 'function';
  var mergedChildren = isRenderProps ? children(elementRef) : children;
  // ============================= Size =============================
  var sizeRef = React.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  });
  // ============================= Ref ==============================
  var canRef = !isRenderProps && /*#__PURE__*/React.isValidElement(mergedChildren) && supportRef(mergedChildren);
  var originRef = canRef ? mergedChildren.ref : null;
  var mergedRef = React.useMemo(function () {
    return composeRef(originRef, elementRef);
  }, [originRef, elementRef]);
  var getDom = function getDom() {
    return findDOMNode(elementRef.current) || findDOMNode(wrapperRef.current);
  };
  React.useImperativeHandle(ref, function () {
    return getDom();
  });
  // =========================== Observe ============================
  var propsRef = React.useRef(props);
  propsRef.current = props;
  // Handler
  var onInternalResize = React.useCallback(function (target) {
    var _propsRef$current = propsRef.current,
      onResize = _propsRef$current.onResize,
      data = _propsRef$current.data;
    var _target$getBoundingCl = target.getBoundingClientRect(),
      width = _target$getBoundingCl.width,
      height = _target$getBoundingCl.height;
    var offsetWidth = target.offsetWidth,
      offsetHeight = target.offsetHeight;
    /**
     * Resize observer trigger when content size changed.
     * In most case we just care about element size,
     * let's use `boundary` instead of `contentRect` here to avoid shaking.
     */
    var fixedWidth = Math.floor(width);
    var fixedHeight = Math.floor(height);
    if (sizeRef.current.width !== fixedWidth || sizeRef.current.height !== fixedHeight || sizeRef.current.offsetWidth !== offsetWidth || sizeRef.current.offsetHeight !== offsetHeight) {
      var size = {
        width: fixedWidth,
        height: fixedHeight,
        offsetWidth: offsetWidth,
        offsetHeight: offsetHeight
      };
      sizeRef.current = size;
      // IE is strange, right?
      var mergedOffsetWidth = offsetWidth === Math.round(width) ? width : offsetWidth;
      var mergedOffsetHeight = offsetHeight === Math.round(height) ? height : offsetHeight;
      var sizeInfo = _objectSpread2(_objectSpread2({}, size), {}, {
        offsetWidth: mergedOffsetWidth,
        offsetHeight: mergedOffsetHeight
      });
      // Let collection know what happened
      onCollectionResize === null || onCollectionResize === void 0 ? void 0 : onCollectionResize(sizeInfo, target, data);
      if (onResize) {
        // defer the callback but not defer to next frame
        Promise.resolve().then(function () {
          onResize(sizeInfo, target);
        });
      }
    }
  }, []);
  // Dynamic observe
  React.useEffect(function () {
    var currentElement = getDom();
    if (currentElement && !disabled) {
      observe(currentElement, onInternalResize);
    }
    return function () {
      return unobserve(currentElement, onInternalResize);
    };
  }, [elementRef.current, disabled]);
  // ============================ Render ============================
  return /*#__PURE__*/React.createElement(DomWrapper$1, {
    ref: wrapperRef
  }, canRef ? /*#__PURE__*/React.cloneElement(mergedChildren, {
    ref: mergedRef
  }) : mergedChildren);
}
var RefSingleObserver = /*#__PURE__*/React.forwardRef(SingleObserver);
if (process.env.NODE_ENV !== 'production') {
  RefSingleObserver.displayName = 'SingleObserver';
}

var INTERNAL_PREFIX_KEY = 'rc-observer-key';
function ResizeObserver$1(props, ref) {
  var children = props.children;
  var childNodes = typeof children === 'function' ? [children] : toArray$3(children);
  if (process.env.NODE_ENV !== 'production') {
    if (childNodes.length > 1) {
      warning$4(false, 'Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.');
    } else if (childNodes.length === 0) {
      warning$4(false, '`children` of ResizeObserver is empty. Nothing is in observe.');
    }
  }
  return childNodes.map(function (child, index) {
    var key = (child === null || child === void 0 ? void 0 : child.key) || "".concat(INTERNAL_PREFIX_KEY, "-").concat(index);
    return /*#__PURE__*/React.createElement(RefSingleObserver, _extends$1({}, props, {
      key: key,
      ref: index === 0 ? ref : undefined
    }), child);
  });
}
var RefResizeObserver = /*#__PURE__*/React.forwardRef(ResizeObserver$1);
if (process.env.NODE_ENV !== 'production') {
  RefResizeObserver.displayName = 'ResizeObserver';
}
RefResizeObserver.Collection = Collection;

function omit(obj, fields) {
  var clone = _objectSpread2({}, obj);
  if (Array.isArray(fields)) {
    fields.forEach(function (key) {
      delete clone[key];
    });
  }
  return clone;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

var raf = function raf(callback) {
  return +setTimeout(callback, 16);
};
var caf = function caf(num) {
  return clearTimeout(num);
};
if (typeof window !== 'undefined' && 'requestAnimationFrame' in window) {
  raf = function raf(callback) {
    return window.requestAnimationFrame(callback);
  };
  caf = function caf(handle) {
    return window.cancelAnimationFrame(handle);
  };
}
var rafUUID = 0;
var rafIds = new Map();
function cleanup(id) {
  rafIds.delete(id);
}
var wrapperRaf = function wrapperRaf(callback) {
  var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  rafUUID += 1;
  var id = rafUUID;
  function callRef(leftTimes) {
    if (leftTimes === 0) {
      // Clean up
      cleanup(id);

      // Trigger
      callback();
    } else {
      // Next raf
      var realId = raf(function () {
        callRef(leftTimes - 1);
      });

      // Bind real raf id
      rafIds.set(id, realId);
    }
  }
  callRef(times);
  return id;
};
wrapperRaf.cancel = function (id) {
  var realId = rafIds.get(id);
  cleanup(realId);
  return caf(realId);
};

/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

/**
 * Deeply compares two object literals.
 * @param obj1 object 1
 * @param obj2 object 2
 * @param shallow shallow compare
 * @returns
 */
function isEqual(obj1, obj2) {
  var shallow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // https://github.com/mapbox/mapbox-gl-js/pull/5979/files#diff-fde7145050c47cc3a306856efd5f9c3016e86e859de9afbd02c879be5067e58f
  var refSet = new Set();
  function deepEqual(a, b) {
    var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var circular = refSet.has(a);
    warningOnce(!circular, 'Warning: There may be circular references');
    if (circular) {
      return false;
    }
    if (a === b) {
      return true;
    }
    if (shallow && level > 1) {
      return false;
    }
    refSet.add(a);
    var newLevel = level + 1;
    if (Array.isArray(a)) {
      if (!Array.isArray(b) || a.length !== b.length) {
        return false;
      }
      for (var i = 0; i < a.length; i++) {
        if (!deepEqual(a[i], b[i], newLevel)) {
          return false;
        }
      }
      return true;
    }
    if (a && b && _typeof(a) === 'object' && _typeof(b) === 'object') {
      var keys = Object.keys(a);
      if (keys.length !== Object.keys(b).length) {
        return false;
      }
      return keys.every(function (key) {
        return deepEqual(a[key], b[key], newLevel);
      });
    }
    // other
    return false;
  }
  return deepEqual(obj1, obj2);
}

// [times, realValue]

var SPLIT$1 = '%';
var Entity = /*#__PURE__*/function () {
  function Entity(instanceId) {
    _classCallCheck(this, Entity);
    _defineProperty(this, "instanceId", void 0);
    /** @private Internal cache map. Do not access this directly */
    _defineProperty(this, "cache", new Map());
    this.instanceId = instanceId;
  }
  _createClass(Entity, [{
    key: "get",
    value: function get(keys) {
      return this.cache.get(keys.join(SPLIT$1)) || null;
    }
  }, {
    key: "update",
    value: function update(keys, valueFn) {
      var path = keys.join(SPLIT$1);
      var prevValue = this.cache.get(path);
      var nextValue = valueFn(prevValue);
      if (nextValue === null) {
        this.cache.delete(path);
      } else {
        this.cache.set(path, nextValue);
      }
    }
  }]);
  return Entity;
}();

var ATTR_TOKEN = 'data-token-hash';
var ATTR_MARK = 'data-css-hash';
var ATTR_CACHE_PATH = 'data-cache-path';

// Mark css-in-js instance in style element
var CSS_IN_JS_INSTANCE = '__cssinjs_instance__';
function createCache() {
  var cssinjsInstanceId = Math.random().toString(12).slice(2);

  // Tricky SSR: Move all inline style to the head.
  // PS: We do not recommend tricky mode.
  if (typeof document !== 'undefined' && document.head && document.body) {
    var styles = document.body.querySelectorAll("style[".concat(ATTR_MARK, "]")) || [];
    var firstChild = document.head.firstChild;
    Array.from(styles).forEach(function (style) {
      style[CSS_IN_JS_INSTANCE] = style[CSS_IN_JS_INSTANCE] || cssinjsInstanceId;

      // Not force move if no head
      if (style[CSS_IN_JS_INSTANCE] === cssinjsInstanceId) {
        document.head.insertBefore(style, firstChild);
      }
    });

    // Deduplicate of moved styles
    var styleHash = {};
    Array.from(document.querySelectorAll("style[".concat(ATTR_MARK, "]"))).forEach(function (style) {
      var hash = style.getAttribute(ATTR_MARK);
      if (styleHash[hash]) {
        if (style[CSS_IN_JS_INSTANCE] === cssinjsInstanceId) {
          var _style$parentNode;
          (_style$parentNode = style.parentNode) === null || _style$parentNode === void 0 ? void 0 : _style$parentNode.removeChild(style);
        }
      } else {
        styleHash[hash] = true;
      }
    });
  }
  return new Entity(cssinjsInstanceId);
}
var StyleContext = /*#__PURE__*/React.createContext({
  hashPriority: 'low',
  cache: createCache(),
  defaultCache: true
});
var StyleContext$1 = StyleContext;

function canUseDom() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}

function contains(root, n) {
  if (!root) {
    return false;
  }

  // Use native if support
  if (root.contains) {
    return root.contains(n);
  }

  // `document.contains` not support with IE11
  var node = n;
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}

var APPEND_ORDER = 'data-rc-order';
var APPEND_PRIORITY = 'data-rc-priority';
var MARK_KEY = "rc-util-key";
var containerCache = new Map();
function getMark() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    mark = _ref.mark;
  if (mark) {
    return mark.startsWith('data-') ? mark : "data-".concat(mark);
  }
  return MARK_KEY;
}
function getContainer(option) {
  if (option.attachTo) {
    return option.attachTo;
  }
  var head = document.querySelector('head');
  return head || document.body;
}
function getOrder(prepend) {
  if (prepend === 'queue') {
    return 'prependQueue';
  }
  return prepend ? 'prepend' : 'append';
}

/**
 * Find style which inject by rc-util
 */
function findStyles(container) {
  return Array.from((containerCache.get(container) || container).children).filter(function (node) {
    return node.tagName === 'STYLE';
  });
}
function injectCSS(css) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!canUseDom()) {
    return null;
  }
  var csp = option.csp,
    prepend = option.prepend,
    _option$priority = option.priority,
    priority = _option$priority === void 0 ? 0 : _option$priority;
  var mergedOrder = getOrder(prepend);
  var isPrependQueue = mergedOrder === 'prependQueue';
  var styleNode = document.createElement('style');
  styleNode.setAttribute(APPEND_ORDER, mergedOrder);
  if (isPrependQueue && priority) {
    styleNode.setAttribute(APPEND_PRIORITY, "".concat(priority));
  }
  if (csp !== null && csp !== void 0 && csp.nonce) {
    styleNode.nonce = csp === null || csp === void 0 ? void 0 : csp.nonce;
  }
  styleNode.innerHTML = css;
  var container = getContainer(option);
  var firstChild = container.firstChild;
  if (prepend) {
    // If is queue `prepend`, it will prepend first style and then append rest style
    if (isPrependQueue) {
      var existStyle = findStyles(container).filter(function (node) {
        // Ignore style which not injected by rc-util with prepend
        if (!['prepend', 'prependQueue'].includes(node.getAttribute(APPEND_ORDER))) {
          return false;
        }

        // Ignore style which priority less then new style
        var nodePriority = Number(node.getAttribute(APPEND_PRIORITY) || 0);
        return priority >= nodePriority;
      });
      if (existStyle.length) {
        container.insertBefore(styleNode, existStyle[existStyle.length - 1].nextSibling);
        return styleNode;
      }
    }

    // Use `insertBefore` as `prepend`
    container.insertBefore(styleNode, firstChild);
  } else {
    container.appendChild(styleNode);
  }
  return styleNode;
}
function findExistNode(key) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var container = getContainer(option);
  return findStyles(container).find(function (node) {
    return node.getAttribute(getMark(option)) === key;
  });
}
function removeCSS(key) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var existNode = findExistNode(key, option);
  if (existNode) {
    var container = getContainer(option);
    container.removeChild(existNode);
  }
}

/**
 * qiankun will inject `appendChild` to insert into other
 */
function syncRealContainer(container, option) {
  var cachedRealContainer = containerCache.get(container);

  // Find real container when not cached or cached container removed
  if (!cachedRealContainer || !contains(document, cachedRealContainer)) {
    var placeholderStyle = injectCSS('', option);
    var parentNode = placeholderStyle.parentNode;
    containerCache.set(container, parentNode);
    container.removeChild(placeholderStyle);
  }
}
function updateCSS(css, key) {
  var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var container = getContainer(option);

  // Sync real parent
  syncRealContainer(container, option);
  var existNode = findExistNode(key, option);
  if (existNode) {
    var _option$csp, _option$csp2;
    if ((_option$csp = option.csp) !== null && _option$csp !== void 0 && _option$csp.nonce && existNode.nonce !== ((_option$csp2 = option.csp) === null || _option$csp2 === void 0 ? void 0 : _option$csp2.nonce)) {
      var _option$csp3;
      existNode.nonce = (_option$csp3 = option.csp) === null || _option$csp3 === void 0 ? void 0 : _option$csp3.nonce;
    }
    if (existNode.innerHTML !== css) {
      existNode.innerHTML = css;
    }
    return existNode;
  }
  var newNode = injectCSS(css, option);
  newNode.setAttribute(getMark(option), key);
  return newNode;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

// ================================== Cache ==================================

function sameDerivativeOption(left, right) {
  if (left.length !== right.length) {
    return false;
  }
  for (var i = 0; i < left.length; i++) {
    if (left[i] !== right[i]) {
      return false;
    }
  }
  return true;
}
var ThemeCache = /*#__PURE__*/function () {
  function ThemeCache() {
    _classCallCheck(this, ThemeCache);
    _defineProperty(this, "cache", void 0);
    _defineProperty(this, "keys", void 0);
    _defineProperty(this, "cacheCallTimes", void 0);
    this.cache = new Map();
    this.keys = [];
    this.cacheCallTimes = 0;
  }
  _createClass(ThemeCache, [{
    key: "size",
    value: function size() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function internalGet(derivativeOption) {
      var _cache2, _cache3;
      var updateCallTimes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var cache = {
        map: this.cache
      };
      derivativeOption.forEach(function (derivative) {
        if (!cache) {
          cache = undefined;
        } else {
          var _cache, _cache$map;
          cache = (_cache = cache) === null || _cache === void 0 ? void 0 : (_cache$map = _cache.map) === null || _cache$map === void 0 ? void 0 : _cache$map.get(derivative);
        }
      });
      if ((_cache2 = cache) !== null && _cache2 !== void 0 && _cache2.value && updateCallTimes) {
        cache.value[1] = this.cacheCallTimes++;
      }
      return (_cache3 = cache) === null || _cache3 === void 0 ? void 0 : _cache3.value;
    }
  }, {
    key: "get",
    value: function get(derivativeOption) {
      var _this$internalGet;
      return (_this$internalGet = this.internalGet(derivativeOption, true)) === null || _this$internalGet === void 0 ? void 0 : _this$internalGet[0];
    }
  }, {
    key: "has",
    value: function has(derivativeOption) {
      return !!this.internalGet(derivativeOption);
    }
  }, {
    key: "set",
    value: function set(derivativeOption, value) {
      var _this = this;
      // New cache
      if (!this.has(derivativeOption)) {
        if (this.size() + 1 > ThemeCache.MAX_CACHE_SIZE + ThemeCache.MAX_CACHE_OFFSET) {
          var _this$keys$reduce = this.keys.reduce(function (result, key) {
              var _result = _slicedToArray(result, 2),
                callTimes = _result[1];
              if (_this.internalGet(key)[1] < callTimes) {
                return [key, _this.internalGet(key)[1]];
              }
              return result;
            }, [this.keys[0], this.cacheCallTimes]),
            _this$keys$reduce2 = _slicedToArray(_this$keys$reduce, 1),
            targetKey = _this$keys$reduce2[0];
          this.delete(targetKey);
        }
        this.keys.push(derivativeOption);
      }
      var cache = this.cache;
      derivativeOption.forEach(function (derivative, index) {
        if (index === derivativeOption.length - 1) {
          cache.set(derivative, {
            value: [value, _this.cacheCallTimes++]
          });
        } else {
          var cacheValue = cache.get(derivative);
          if (!cacheValue) {
            cache.set(derivative, {
              map: new Map()
            });
          } else if (!cacheValue.map) {
            cacheValue.map = new Map();
          }
          cache = cache.get(derivative).map;
        }
      });
    }
  }, {
    key: "deleteByPath",
    value: function deleteByPath(currentCache, derivatives) {
      var cache = currentCache.get(derivatives[0]);
      if (derivatives.length === 1) {
        var _cache$value;
        if (!cache.map) {
          currentCache.delete(derivatives[0]);
        } else {
          currentCache.set(derivatives[0], {
            map: cache.map
          });
        }
        return (_cache$value = cache.value) === null || _cache$value === void 0 ? void 0 : _cache$value[0];
      }
      var result = this.deleteByPath(cache.map, derivatives.slice(1));
      if ((!cache.map || cache.map.size === 0) && !cache.value) {
        currentCache.delete(derivatives[0]);
      }
      return result;
    }
  }, {
    key: "delete",
    value: function _delete(derivativeOption) {
      // If cache exists
      if (this.has(derivativeOption)) {
        this.keys = this.keys.filter(function (item) {
          return !sameDerivativeOption(item, derivativeOption);
        });
        return this.deleteByPath(this.cache, derivativeOption);
      }
      return undefined;
    }
  }]);
  return ThemeCache;
}();
_defineProperty(ThemeCache, "MAX_CACHE_SIZE", 20);
_defineProperty(ThemeCache, "MAX_CACHE_OFFSET", 5);

var uuid$3 = 0;

/**
 * Theme with algorithms to derive tokens from design tokens.
 * Use `createTheme` first which will help to manage the theme instance cache.
 */
var Theme = /*#__PURE__*/function () {
  function Theme(derivatives) {
    _classCallCheck(this, Theme);
    _defineProperty(this, "derivatives", void 0);
    _defineProperty(this, "id", void 0);
    this.derivatives = Array.isArray(derivatives) ? derivatives : [derivatives];
    this.id = uuid$3;
    if (derivatives.length === 0) {
      warning$4(derivatives.length > 0, '[Ant Design CSS-in-JS] Theme should have at least one derivative function.');
    }
    uuid$3 += 1;
  }
  _createClass(Theme, [{
    key: "getDerivativeToken",
    value: function getDerivativeToken(token) {
      return this.derivatives.reduce(function (result, derivative) {
        return derivative(token, result);
      }, undefined);
    }
  }]);
  return Theme;
}();

var cacheThemes = new ThemeCache();

/**
 * Same as new Theme, but will always return same one if `derivative` not changed.
 */
function createTheme(derivatives) {
  var derivativeArr = Array.isArray(derivatives) ? derivatives : [derivatives];
  // Create new theme if not exist
  if (!cacheThemes.has(derivativeArr)) {
    cacheThemes.set(derivativeArr, new Theme(derivativeArr));
  }

  // Get theme from cache and return
  return cacheThemes.get(derivativeArr);
}

// Create a cache here to avoid always loop generate
var flattenTokenCache = new WeakMap();
function flattenToken(token) {
  var str = flattenTokenCache.get(token) || '';
  if (!str) {
    Object.keys(token).forEach(function (key) {
      var value = token[key];
      str += key;
      if (value instanceof Theme) {
        str += value.id;
      } else if (value && _typeof(value) === 'object') {
        str += flattenToken(value);
      } else {
        str += value;
      }
    });

    // Put in cache
    flattenTokenCache.set(token, str);
  }
  return str;
}

/**
 * Convert derivative token to key string
 */
function token2key(token, salt) {
  return murmur2("".concat(salt, "_").concat(flattenToken(token)));
}
var randomSelectorKey = "random-".concat(Date.now(), "-").concat(Math.random()).replace(/\./g, '');

// Magic `content` for detect selector support
var checkContent = '_bAmBoO_';
function supportSelector(styleStr, handleElement, supportCheck) {
  if (canUseDom()) {
    var _getComputedStyle$con, _ele$parentNode;
    updateCSS(styleStr, randomSelectorKey);
    var _ele = document.createElement('div');
    _ele.style.position = 'fixed';
    _ele.style.left = '0';
    _ele.style.top = '0';
    handleElement === null || handleElement === void 0 ? void 0 : handleElement(_ele);
    document.body.appendChild(_ele);
    if (process.env.NODE_ENV !== 'production') {
      _ele.innerHTML = 'Test';
      _ele.style.zIndex = '9999999';
    }
    var support = supportCheck ? supportCheck(_ele) : (_getComputedStyle$con = getComputedStyle(_ele).content) === null || _getComputedStyle$con === void 0 ? void 0 : _getComputedStyle$con.includes(checkContent);
    (_ele$parentNode = _ele.parentNode) === null || _ele$parentNode === void 0 ? void 0 : _ele$parentNode.removeChild(_ele);
    removeCSS(randomSelectorKey);
    return support;
  }
  return false;
}
var canLayer = undefined;
function supportLayer() {
  if (canLayer === undefined) {
    canLayer = supportSelector("@layer ".concat(randomSelectorKey, " { .").concat(randomSelectorKey, " { content: \"").concat(checkContent, "\"!important; } }"), function (ele) {
      ele.className = randomSelectorKey;
    });
  }
  return canLayer;
}

/**
 * Wrap `React.useLayoutEffect` which will not throw warning message in test env
 */
var useInternalLayoutEffect = process.env.NODE_ENV !== 'test' && canUseDom() ? React.useLayoutEffect : React.useEffect;
var useLayoutEffect$1 = function useLayoutEffect(callback, deps) {
  var firstMountRef = React.useRef(true);
  useInternalLayoutEffect(function () {
    return callback(firstMountRef.current);
  }, deps);

  // We tell react that first mount has passed
  useInternalLayoutEffect(function () {
    firstMountRef.current = false;
    return function () {
      firstMountRef.current = true;
    };
  }, []);
};
var useLayoutUpdateEffect = function useLayoutUpdateEffect(callback, deps) {
  useLayoutEffect$1(function (firstMount) {
    if (!firstMount) {
      return callback();
    }
  }, deps);
};

// We need fully clone React function here
// to avoid webpack warning React 17 do not export `useId`
var fullClone$1 = _objectSpread2({}, React);
var useInsertionEffect$1 = fullClone$1.useInsertionEffect;
/**
 * Polyfill `useInsertionEffect` for React < 18
 * @param renderEffect will be executed in `useMemo`, and do not have callback
 * @param effect will be executed in `useLayoutEffect`
 * @param deps
 */
var useInsertionEffectPolyfill = function useInsertionEffectPolyfill(renderEffect, effect, deps) {
  React.useMemo(renderEffect, deps);
  useLayoutEffect$1(function () {
    return effect(true);
  }, deps);
};

/**
 * Compatible `useInsertionEffect`
 * will use `useInsertionEffect` if React version >= 18,
 * otherwise use `useInsertionEffectPolyfill`.
 */
var useCompatibleInsertionEffect = useInsertionEffect$1 ? function (renderEffect, effect, deps) {
  return useInsertionEffect$1(function () {
    renderEffect();
    return effect();
  }, deps);
} : useInsertionEffectPolyfill;
var useCompatibleInsertionEffect$1 = useCompatibleInsertionEffect;

var fullClone = _objectSpread2({}, React);
var useInsertionEffect = fullClone.useInsertionEffect;

// DO NOT register functions in useEffect cleanup function, or functions that registered will never be called.
var useCleanupRegister = function useCleanupRegister(deps) {
  var effectCleanups = [];
  var cleanupFlag = false;
  function register(fn) {
    if (cleanupFlag) {
      if (process.env.NODE_ENV !== 'production') {
        warning$4(false, '[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.');
      }
      return;
    }
    effectCleanups.push(fn);
  }
  React.useEffect(function () {
    // Compatible with strict mode
    cleanupFlag = false;
    return function () {
      cleanupFlag = true;
      if (effectCleanups.length) {
        effectCleanups.forEach(function (fn) {
          return fn();
        });
      }
    };
  }, deps);
  return register;
};
var useRun = function useRun() {
  return function (fn) {
    fn();
  };
};

// Only enable register in React 18
var useEffectCleanupRegister = typeof useInsertionEffect !== 'undefined' ? useCleanupRegister : useRun;
var useEffectCleanupRegister$1 = useEffectCleanupRegister;

function useProdHMR() {
  return false;
}
var webpackHMR = false;
function useDevHMR() {
  return webpackHMR;
}
var useHMR = process.env.NODE_ENV === 'production' ? useProdHMR : useDevHMR;

// Webpack `module.hot.accept` do not support any deps update trigger
// We have to hack handler to force mark as HRM
if (process.env.NODE_ENV !== 'production' && typeof module !== 'undefined' && module && module.hot && typeof window !== 'undefined') {
  var win = window;
  if (typeof win.webpackHotUpdate === 'function') {
    var originWebpackHotUpdate = win.webpackHotUpdate;
    win.webpackHotUpdate = function () {
      webpackHMR = true;
      setTimeout(function () {
        webpackHMR = false;
      }, 0);
      return originWebpackHotUpdate.apply(void 0, arguments);
    };
  }
}

function useGlobalCache(prefix, keyPath, cacheFn, onCacheRemove,
// Add additional effect trigger by `useInsertionEffect`
onCacheEffect) {
  var _React$useContext = React.useContext(StyleContext$1),
    globalCache = _React$useContext.cache;
  var fullPath = [prefix].concat(_toConsumableArray(keyPath));
  var deps = fullPath.join('_');
  var register = useEffectCleanupRegister$1([deps]);
  var HMRUpdate = useHMR();
  var buildCache = function buildCache(updater) {
    globalCache.update(fullPath, function (prevCache) {
      var _ref = prevCache || [],
        _ref2 = _slicedToArray(_ref, 2),
        _ref2$ = _ref2[0],
        times = _ref2$ === void 0 ? 0 : _ref2$,
        cache = _ref2[1];

      // HMR should always ignore cache since developer may change it
      var tmpCache = cache;
      if (process.env.NODE_ENV !== 'production' && cache && HMRUpdate) {
        onCacheRemove === null || onCacheRemove === void 0 ? void 0 : onCacheRemove(tmpCache, HMRUpdate);
        tmpCache = null;
      }
      var mergedCache = tmpCache || cacheFn();
      var data = [times, mergedCache];

      // Call updater if need additional logic
      return updater ? updater(data) : data;
    });
  };

  // Create cache
  React.useMemo(function () {
    buildCache();
  }, /* eslint-disable react-hooks/exhaustive-deps */
  [deps]
  /* eslint-enable */);

  var cacheEntity = globalCache.get(fullPath);

  // HMR clean the cache but not trigger `useMemo` again
  // Let's fallback of this
  // ref https://github.com/ant-design/cssinjs/issues/127
  if (process.env.NODE_ENV !== 'production' && !cacheEntity) {
    buildCache();
    cacheEntity = globalCache.get(fullPath);
  }
  var cacheContent = cacheEntity[1];

  // Remove if no need anymore
  useCompatibleInsertionEffect$1(function () {
    onCacheEffect === null || onCacheEffect === void 0 ? void 0 : onCacheEffect(cacheContent);
  }, function (polyfill) {
    // It's bad to call build again in effect.
    // But we have to do this since StrictMode will call effect twice
    // which will clear cache on the first time.
    buildCache(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
        times = _ref4[0],
        cache = _ref4[1];
      if (polyfill && times === 0) {
        onCacheEffect === null || onCacheEffect === void 0 ? void 0 : onCacheEffect(cacheContent);
      }
      return [times + 1, cache];
    });
    return function () {
      globalCache.update(fullPath, function (prevCache) {
        var _ref5 = prevCache || [],
          _ref6 = _slicedToArray(_ref5, 2),
          _ref6$ = _ref6[0],
          times = _ref6$ === void 0 ? 0 : _ref6$,
          cache = _ref6[1];
        var nextCount = times - 1;
        if (nextCount === 0) {
          // Always remove styles in useEffect callback
          register(function () {
            return onCacheRemove === null || onCacheRemove === void 0 ? void 0 : onCacheRemove(cache, false);
          });
          return null;
        }
        return [times - 1, cache];
      });
    };
  }, [deps]);
  return cacheContent;
}

var EMPTY_OVERRIDE = {};

// Generate different prefix to make user selector break in production env.
// This helps developer not to do style override directly on the hash id.
var hashPrefix = process.env.NODE_ENV !== 'production' ? 'css-dev-only-do-not-override' : 'css';
var tokenKeys = new Map();
function recordCleanToken(tokenKey) {
  tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) + 1);
}
function removeStyleTags(key, instanceId) {
  if (typeof document !== 'undefined') {
    var styles = document.querySelectorAll("style[".concat(ATTR_TOKEN, "=\"").concat(key, "\"]"));
    styles.forEach(function (style) {
      if (style[CSS_IN_JS_INSTANCE] === instanceId) {
        var _style$parentNode;
        (_style$parentNode = style.parentNode) === null || _style$parentNode === void 0 ? void 0 : _style$parentNode.removeChild(style);
      }
    });
  }
}
var TOKEN_THRESHOLD = 0;

// Remove will check current keys first
function cleanTokenStyle(tokenKey, instanceId) {
  tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) - 1);
  var tokenKeyList = Array.from(tokenKeys.keys());
  var cleanableKeyList = tokenKeyList.filter(function (key) {
    var count = tokenKeys.get(key) || 0;
    return count <= 0;
  });

  // Should keep tokens under threshold for not to insert style too often
  if (tokenKeyList.length - cleanableKeyList.length > TOKEN_THRESHOLD) {
    cleanableKeyList.forEach(function (key) {
      removeStyleTags(key, instanceId);
      tokenKeys.delete(key);
    });
  }
}
var getComputedToken$1 = function getComputedToken(originToken, overrideToken, theme, format) {
  var derivativeToken = theme.getDerivativeToken(originToken);

  // Merge with override
  var mergedDerivativeToken = _objectSpread2(_objectSpread2({}, derivativeToken), overrideToken);

  // Format if needed
  if (format) {
    mergedDerivativeToken = format(mergedDerivativeToken);
  }
  return mergedDerivativeToken;
};

/**
 * Cache theme derivative token as global shared one
 * @param theme Theme entity
 * @param tokens List of tokens, used for cache. Please do not dynamic generate object directly
 * @param option Additional config
 * @returns Call Theme.getDerivativeToken(tokenObject) to get token
 */
function useCacheToken(theme, tokens) {
  var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _useContext = useContext(StyleContext$1),
    instanceId = _useContext.cache.instanceId;
  var _option$salt = option.salt,
    salt = _option$salt === void 0 ? '' : _option$salt,
    _option$override = option.override,
    override = _option$override === void 0 ? EMPTY_OVERRIDE : _option$override,
    formatToken = option.formatToken,
    compute = option.getComputedToken;

  // Basic - We do basic cache here
  var mergedToken = React.useMemo(function () {
    return Object.assign.apply(Object, [{}].concat(_toConsumableArray(tokens)));
  }, [tokens]);
  var tokenStr = React.useMemo(function () {
    return flattenToken(mergedToken);
  }, [mergedToken]);
  var overrideTokenStr = React.useMemo(function () {
    return flattenToken(override);
  }, [override]);
  var cachedToken = useGlobalCache('token', [salt, theme.id, tokenStr, overrideTokenStr], function () {
    var mergedDerivativeToken = compute ? compute(mergedToken, override, theme) : getComputedToken$1(mergedToken, override, theme, formatToken);

    // Optimize for `useStyleRegister` performance
    var tokenKey = token2key(mergedDerivativeToken, salt);
    mergedDerivativeToken._tokenKey = tokenKey;
    recordCleanToken(tokenKey);
    var hashId = "".concat(hashPrefix, "-").concat(murmur2(tokenKey));
    mergedDerivativeToken._hashId = hashId; // Not used

    return [mergedDerivativeToken, hashId];
  }, function (cache) {
    // Remove token will remove all related style
    cleanTokenStyle(cache[0]._tokenKey, instanceId);
  });
  return cachedToken;
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

var COMMENT = 'comm';
var RULESET = 'rule';
var DECLARATION = 'decl';
var IMPORT = '@import';
var KEYFRAMES = '@keyframes';
var LAYER = '@layer';

/**
 * @param {number}
 * @return {number}
 */
var abs = Math.abs;

/**
 * @param {number}
 * @return {string}
 */
var from = String.fromCharCode;

/**
 * @param {string} value
 * @return {string}
 */
function trim (value) {
	return value.trim()
}

/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */
function replace (value, pattern, replacement) {
	return value.replace(pattern, replacement)
}

/**
 * @param {string} value
 * @param {string} search
 * @return {number}
 */
function indexof (value, search) {
	return value.indexOf(search)
}

/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */
function charat (value, index) {
	return value.charCodeAt(index) | 0
}

/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function substr (value, begin, end) {
	return value.slice(begin, end)
}

/**
 * @param {string} value
 * @return {number}
 */
function strlen (value) {
	return value.length
}

/**
 * @param {any[]} value
 * @return {number}
 */
function sizeof (value) {
	return value.length
}

/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */
function append (value, array) {
	return array.push(value), value
}

var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = '';

/**
 * @param {string} value
 * @param {object | null} root
 * @param {object | null} parent
 * @param {string} type
 * @param {string[] | string} props
 * @param {object[] | string} children
 * @param {object[]} siblings
 * @param {number} length
 */
function node (value, root, parent, type, props, children, length, siblings) {
	return {value: value, root: root, parent: parent, type: type, props: props, children: children, line: line, column: column, length: length, return: '', siblings: siblings}
}

/**
 * @return {number}
 */
function char () {
	return character
}

/**
 * @return {number}
 */
function prev () {
	character = position > 0 ? charat(characters, --position) : 0;

	if (column--, character === 10)
		column = 1, line--;

	return character
}

/**
 * @return {number}
 */
function next () {
	character = position < length ? charat(characters, position++) : 0;

	if (column++, character === 10)
		column = 1, line++;

	return character
}

/**
 * @return {number}
 */
function peek () {
	return charat(characters, position)
}

/**
 * @return {number}
 */
function caret () {
	return position
}

/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function slice (begin, end) {
	return substr(characters, begin, end)
}

/**
 * @param {number} type
 * @return {number}
 */
function token (type) {
	switch (type) {
		// \0 \t \n \r \s whitespace token
		case 0: case 9: case 10: case 13: case 32:
			return 5
		// ! + , / > @ ~ isolate token
		case 33: case 43: case 44: case 47: case 62: case 64: case 126:
		// ; { } breakpoint token
		case 59: case 123: case 125:
			return 4
		// : accompanied token
		case 58:
			return 3
		// " ' ( [ opening delimit token
		case 34: case 39: case 40: case 91:
			return 2
		// ) ] closing delimit token
		case 41: case 93:
			return 1
	}

	return 0
}

/**
 * @param {string} value
 * @return {any[]}
 */
function alloc (value) {
	return line = column = 1, length = strlen(characters = value), position = 0, []
}

/**
 * @param {any} value
 * @return {any}
 */
function dealloc (value) {
	return characters = '', value
}

/**
 * @param {number} type
 * @return {string}
 */
function delimit (type) {
	return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
}

/**
 * @param {number} type
 * @return {string}
 */
function whitespace$1 (type) {
	while (character = peek())
		if (character < 33)
			next();
		else
			break

	return token(type) > 2 || token(character) > 3 ? '' : ' '
}

/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */
function escaping (index, count) {
	while (--count && next())
		// not 0-9 A-F a-f
		if (character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97))
			break

	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32))
}

/**
 * @param {number} type
 * @return {number}
 */
function delimiter (type) {
	while (next())
		switch (character) {
			// ] ) " '
			case type:
				return position
			// " '
			case 34: case 39:
				if (type !== 34 && type !== 39)
					delimiter(character);
				break
			// (
			case 40:
				if (type === 41)
					delimiter(type);
				break
			// \
			case 92:
				next();
				break
		}

	return position
}

/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */
function commenter (type, index) {
	while (next())
		// //
		if (type + character === 47 + 10)
			break
		// /*
		else if (type + character === 42 + 42 && peek() === 47)
			break

	return '/*' + slice(index, position - 1) + '*' + from(type === 47 ? type : next())
}

/**
 * @param {number} index
 * @return {string}
 */
function identifier (index) {
	while (!token(peek()))
		next();

	return slice(index, position)
}

/**
 * @param {string} value
 * @return {object[]}
 */
function compile (value) {
	return dealloc(parse('', null, null, null, [''], value = alloc(value), 0, [0], value))
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */
function parse (value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0;
	var offset = 0;
	var length = pseudo;
	var atrule = 0;
	var property = 0;
	var previous = 0;
	var variable = 1;
	var scanning = 1;
	var ampersand = 1;
	var character = 0;
	var type = '';
	var props = rules;
	var children = rulesets;
	var reference = rule;
	var characters = type;

	while (scanning)
		switch (previous = character, character = next()) {
			// (
			case 40:
				if (previous != 108 && charat(characters, length - 1) == 58) {
					if (indexof(characters += replace(delimit(character), '&', '&\f'), '&\f') != -1)
						ampersand = -1;
					break
				}
			// " ' [
			case 34: case 39: case 91:
				characters += delimit(character);
				break
			// \t \n \r \s
			case 9: case 10: case 13: case 32:
				characters += whitespace$1(previous);
				break
			// \
			case 92:
				characters += escaping(caret() - 1, 7);
				continue
			// /
			case 47:
				switch (peek()) {
					case 42: case 47:
						append(comment(commenter(next(), caret()), root, parent, declarations), declarations);
						break
					default:
						characters += '/';
				}
				break
			// {
			case 123 * variable:
				points[index++] = strlen(characters) * ampersand;
			// } ; \0
			case 125 * variable: case 59: case 0:
				switch (character) {
					// \0 }
					case 0: case 125: scanning = 0;
					// ;
					case 59 + offset: if (ampersand == -1) characters = replace(characters, /\f/g, '');
						if (property > 0 && (strlen(characters) - length))
							append(property > 32 ? declaration(characters + ';', rule, parent, length - 1, declarations) : declaration(replace(characters, ' ', '') + ';', rule, parent, length - 2, declarations), declarations);
						break
					// @ ;
					case 59: characters += ';';
					// { rule/at-rule
					default:
						append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length, rulesets), rulesets);

						if (character === 123)
							if (offset === 0)
								parse(characters, root, reference, reference, props, rulesets, length, points, children);
							else
								switch (atrule === 99 && charat(characters, 3) === 110 ? 100 : atrule) {
									// d l m s
									case 100: case 108: case 109: case 115:
										parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length, children), children), rules, children, length, points, rule ? props : children);
										break
									default:
										parse(characters, reference, reference, reference, [''], children, 0, points, children);
								}
				}

				index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
				break
			// :
			case 58:
				length = 1 + strlen(characters), property = previous;
			default:
				if (variable < 1)
					if (character == 123)
						--variable;
					else if (character == 125 && variable++ == 0 && prev() == 125)
						continue

				switch (characters += from(character), character * variable) {
					// &
					case 38:
						ampersand = offset > 0 ? 1 : (characters += '\f', -1);
						break
					// ,
					case 44:
						points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1;
						break
					// @
					case 64:
						// -
						if (peek() === 45)
							characters += delimit(next());

						atrule = peek(), offset = length = strlen(type = characters += identifier(caret())), character++;
						break
					// -
					case 45:
						if (previous === 45 && strlen(characters) == 2)
							variable = 0;
				}
		}

	return rulesets
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @param {object[]} siblings
 * @return {object}
 */
function ruleset (value, root, parent, index, offset, rules, points, type, props, children, length, siblings) {
	var post = offset - 1;
	var rule = offset === 0 ? rules : [''];
	var size = sizeof(rule);

	for (var i = 0, j = 0, k = 0; i < index; ++i)
		for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
			if (z = trim(j > 0 ? rule[x] + ' ' + y : replace(y, /&\f/g, rule[x])))
				props[k++] = z;

	return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length, siblings)
}

/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @param {object[]} siblings
 * @return {object}
 */
function comment (value, root, parent, siblings) {
	return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0, siblings)
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @param {object[]} siblings
 * @return {object}
 */
function declaration (value, root, parent, length, siblings) {
	return node(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length, siblings)
}

/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function serialize (children, callback) {
	var output = '';

	for (var i = 0; i < children.length; i++)
		output += callback(children[i], i, children, callback) || '';

	return output
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function stringify$1 (element, index, children, callback) {
	switch (element.type) {
		case LAYER: if (element.children.length) break
		case IMPORT: case DECLARATION: return element.return = element.return || element.value
		case COMMENT: return ''
		case KEYFRAMES: return element.return = element.value + '{' + serialize(element.children, callback) + '}'
		case RULESET: if (!strlen(element.value = element.props.join(','))) return ''
	}

	return strlen(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
}

function lintWarning(message, info) {
  var path = info.path,
    parentSelectors = info.parentSelectors;
  warningOnce(false, "[Ant Design CSS-in-JS] ".concat(path ? "Error in ".concat(path, ": ") : '').concat(message).concat(parentSelectors.length ? " Selector: ".concat(parentSelectors.join(' | ')) : ''));
}

var linter$1 = function linter(key, value, info) {
  if (key === 'content') {
    // From emotion: https://github.com/emotion-js/emotion/blob/main/packages/serialize/src/index.js#L63
    var contentValuePattern = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
    var contentValues = ['normal', 'none', 'initial', 'inherit', 'unset'];
    if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
      lintWarning("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(value, "\"'`."), info);
    }
  }
};

var linter = function linter(key, value, info) {
  if (key === 'animation') {
    if (info.hashId && value !== 'none') {
      lintWarning("You seem to be using hashed animation '".concat(value, "', in which case 'animationName' with Keyframe as value is recommended."), info);
    }
  }
};

var ATTR_CACHE_MAP = 'data-ant-cssinjs-cache-path';

/**
 * This marks style from the css file.
 * Which means not exist in `<style />` tag.
 */
var CSS_FILE_STYLE = '_FILE_STYLE__';
var cachePathMap;
var fromCSSFile = true;
function prepare() {
  if (!cachePathMap) {
    cachePathMap = {};
    if (canUseDom()) {
      var div = document.createElement('div');
      div.className = ATTR_CACHE_MAP;
      div.style.position = 'fixed';
      div.style.visibility = 'hidden';
      div.style.top = '-9999px';
      document.body.appendChild(div);
      var content = getComputedStyle(div).content || '';
      content = content.replace(/^"/, '').replace(/"$/, '');

      // Fill data
      content.split(';').forEach(function (item) {
        var _item$split = item.split(':'),
          _item$split2 = _slicedToArray(_item$split, 2),
          path = _item$split2[0],
          hash = _item$split2[1];
        cachePathMap[path] = hash;
      });

      // Remove inline record style
      var inlineMapStyle = document.querySelector("style[".concat(ATTR_CACHE_MAP, "]"));
      if (inlineMapStyle) {
        var _inlineMapStyle$paren;
        fromCSSFile = false;
        (_inlineMapStyle$paren = inlineMapStyle.parentNode) === null || _inlineMapStyle$paren === void 0 ? void 0 : _inlineMapStyle$paren.removeChild(inlineMapStyle);
      }
      document.body.removeChild(div);
    }
  }
}
function existPath(path) {
  prepare();
  return !!cachePathMap[path];
}
function getStyleAndHash(path) {
  var hash = cachePathMap[path];
  var styleStr = null;
  if (hash && canUseDom()) {
    if (fromCSSFile) {
      styleStr = CSS_FILE_STYLE;
    } else {
      var _style = document.querySelector("style[".concat(ATTR_MARK, "=\"").concat(cachePathMap[path], "\"]"));
      if (_style) {
        styleStr = _style.innerHTML;
      } else {
        // Clean up since not exist anymore
        delete cachePathMap[path];
      }
    }
  }
  return [styleStr, hash];
}

var isClientSide = canUseDom();
var SKIP_CHECK = '_skip_check_';
var MULTI_VALUE = '_multi_value_';
// ============================================================================
// ==                                 Parser                                 ==
// ============================================================================
// Preprocessor style content to browser support one
function normalizeStyle(styleStr) {
  var serialized = serialize(compile(styleStr), stringify$1);
  return serialized.replace(/\{%%%\:[^;];}/g, ';');
}
function isCompoundCSSProperty(value) {
  return _typeof(value) === 'object' && value && (SKIP_CHECK in value || MULTI_VALUE in value);
}

// 注入 hash 值
function injectSelectorHash(key, hashId, hashPriority) {
  if (!hashId) {
    return key;
  }
  var hashClassName = ".".concat(hashId);
  var hashSelector = hashPriority === 'low' ? ":where(".concat(hashClassName, ")") : hashClassName;

  // 注入 hashId
  var keys = key.split(',').map(function (k) {
    var _firstPath$match;
    var fullPath = k.trim().split(/\s+/);

    // 如果 Selector 第一个是 HTML Element，那我们就插到它的后面。反之，就插到最前面。
    var firstPath = fullPath[0] || '';
    var htmlElement = ((_firstPath$match = firstPath.match(/^\w+/)) === null || _firstPath$match === void 0 ? void 0 : _firstPath$match[0]) || '';
    firstPath = "".concat(htmlElement).concat(hashSelector).concat(firstPath.slice(htmlElement.length));
    return [firstPath].concat(_toConsumableArray(fullPath.slice(1))).join(' ');
  });
  return keys.join(',');
}
// Parse CSSObject to style content
var parseStyle = function parseStyle(interpolation) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      root: true,
      parentSelectors: []
    },
    root = _ref.root,
    injectHash = _ref.injectHash,
    parentSelectors = _ref.parentSelectors;
  var hashId = config.hashId,
    layer = config.layer,
    path = config.path,
    hashPriority = config.hashPriority,
    _config$transformers = config.transformers,
    transformers = _config$transformers === void 0 ? [] : _config$transformers,
    _config$linters = config.linters,
    linters = _config$linters === void 0 ? [] : _config$linters;
  var styleStr = '';
  var effectStyle = {};
  function parseKeyframes(keyframes) {
    var animationName = keyframes.getName(hashId);
    if (!effectStyle[animationName]) {
      var _parseStyle = parseStyle(keyframes.style, config, {
          root: false,
          parentSelectors: parentSelectors
        }),
        _parseStyle2 = _slicedToArray(_parseStyle, 1),
        _parsedStr = _parseStyle2[0];
      effectStyle[animationName] = "@keyframes ".concat(keyframes.getName(hashId)).concat(_parsedStr);
    }
  }
  function flattenList(list) {
    var fullList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    list.forEach(function (item) {
      if (Array.isArray(item)) {
        flattenList(item, fullList);
      } else if (item) {
        fullList.push(item);
      }
    });
    return fullList;
  }
  var flattenStyleList = flattenList(Array.isArray(interpolation) ? interpolation : [interpolation]);
  flattenStyleList.forEach(function (originStyle) {
    // Only root level can use raw string
    var style = typeof originStyle === 'string' && !root ? {} : originStyle;
    if (typeof style === 'string') {
      styleStr += "".concat(style, "\n");
    } else if (style._keyframe) {
      // Keyframe
      parseKeyframes(style);
    } else {
      var mergedStyle = transformers.reduce(function (prev, trans) {
        var _trans$visit;
        return (trans === null || trans === void 0 ? void 0 : (_trans$visit = trans.visit) === null || _trans$visit === void 0 ? void 0 : _trans$visit.call(trans, prev)) || prev;
      }, style);

      // Normal CSSObject
      Object.keys(mergedStyle).forEach(function (key) {
        var value = mergedStyle[key];
        if (_typeof(value) === 'object' && value && (key !== 'animationName' || !value._keyframe) && !isCompoundCSSProperty(value)) {
          var subInjectHash = false;

          // 当成嵌套对象来处理
          var mergedKey = key.trim();
          // Whether treat child as root. In most case it is false.
          var nextRoot = false;

          // 拆分多个选择器
          if ((root || injectHash) && hashId) {
            if (mergedKey.startsWith('@')) {
              // 略过媒体查询，交给子节点继续插入 hashId
              subInjectHash = true;
            } else {
              // 注入 hashId
              mergedKey = injectSelectorHash(key, hashId, hashPriority);
            }
          } else if (root && !hashId && (mergedKey === '&' || mergedKey === '')) {
            // In case of `{ '&': { a: { color: 'red' } } }` or `{ '': { a: { color: 'red' } } }` without hashId,
            // we will get `&{a:{color:red;}}` or `{a:{color:red;}}` string for stylis to compile.
            // But it does not conform to stylis syntax,
            // and finally we will get `{color:red;}` as css, which is wrong.
            // So we need to remove key in root, and treat child `{ a: { color: 'red' } }` as root.
            mergedKey = '';
            nextRoot = true;
          }
          var _parseStyle3 = parseStyle(value, config, {
              root: nextRoot,
              injectHash: subInjectHash,
              parentSelectors: [].concat(_toConsumableArray(parentSelectors), [mergedKey])
            }),
            _parseStyle4 = _slicedToArray(_parseStyle3, 2),
            _parsedStr2 = _parseStyle4[0],
            childEffectStyle = _parseStyle4[1];
          effectStyle = _objectSpread2(_objectSpread2({}, effectStyle), childEffectStyle);
          styleStr += "".concat(mergedKey).concat(_parsedStr2);
        } else {
          var _value;
          function appendStyle(cssKey, cssValue) {
            if (process.env.NODE_ENV !== 'production' && (_typeof(value) !== 'object' || !(value !== null && value !== void 0 && value[SKIP_CHECK]))) {
              [linter$1, linter].concat(_toConsumableArray(linters)).forEach(function (linter) {
                return linter(cssKey, cssValue, {
                  path: path,
                  hashId: hashId,
                  parentSelectors: parentSelectors
                });
              });
            }

            // 如果是样式则直接插入
            var styleName = cssKey.replace(/[A-Z]/g, function (match) {
              return "-".concat(match.toLowerCase());
            });

            // Auto suffix with px
            var formatValue = cssValue;
            if (!unitlessKeys[cssKey] && typeof formatValue === 'number' && formatValue !== 0) {
              formatValue = "".concat(formatValue, "px");
            }

            // handle animationName & Keyframe value
            if (cssKey === 'animationName' && cssValue !== null && cssValue !== void 0 && cssValue._keyframe) {
              parseKeyframes(cssValue);
              formatValue = cssValue.getName(hashId);
            }
            styleStr += "".concat(styleName, ":").concat(formatValue, ";");
          }
          var actualValue = (_value = value === null || value === void 0 ? void 0 : value.value) !== null && _value !== void 0 ? _value : value;
          if (_typeof(value) === 'object' && value !== null && value !== void 0 && value[MULTI_VALUE] && Array.isArray(actualValue)) {
            actualValue.forEach(function (item) {
              appendStyle(key, item);
            });
          } else {
            appendStyle(key, actualValue);
          }
        }
      });
    }
  });
  if (!root) {
    styleStr = "{".concat(styleStr, "}");
  } else if (layer && supportLayer()) {
    var layerCells = layer.split(',');
    var layerName = layerCells[layerCells.length - 1].trim();
    styleStr = "@layer ".concat(layerName, " {").concat(styleStr, "}");

    // Order of layer if needed
    if (layerCells.length > 1) {
      // zombieJ: stylis do not support layer order, so we need to handle it manually.
      styleStr = "@layer ".concat(layer, "{%%%:%}").concat(styleStr);
    }
  }
  return [styleStr, effectStyle];
};

// ============================================================================
// ==                                Register                                ==
// ============================================================================
function uniqueHash(path, styleStr) {
  return murmur2("".concat(path.join('%')).concat(styleStr));
}
function Empty$3() {
  return null;
}

/**
 * Register a style to the global style sheet.
 */
function useStyleRegister(info, styleFn) {
  var token = info.token,
    path = info.path,
    hashId = info.hashId,
    layer = info.layer,
    nonce = info.nonce,
    clientOnly = info.clientOnly,
    _info$order = info.order,
    order = _info$order === void 0 ? 0 : _info$order;
  var _React$useContext = React.useContext(StyleContext$1),
    autoClear = _React$useContext.autoClear,
    mock = _React$useContext.mock,
    defaultCache = _React$useContext.defaultCache,
    hashPriority = _React$useContext.hashPriority,
    container = _React$useContext.container,
    ssrInline = _React$useContext.ssrInline,
    transformers = _React$useContext.transformers,
    linters = _React$useContext.linters,
    cache = _React$useContext.cache;
  var tokenKey = token._tokenKey;
  var fullPath = [tokenKey].concat(_toConsumableArray(path));

  // Check if need insert style
  var isMergedClientSide = isClientSide;
  if (process.env.NODE_ENV !== 'production' && mock !== undefined) {
    isMergedClientSide = mock === 'client';
  }
  var _useGlobalCache = useGlobalCache('style', fullPath,
    // Create cache if needed
    function () {
      var cachePath = fullPath.join('|');

      // Get style from SSR inline style directly
      if (existPath(cachePath)) {
        var _getStyleAndHash = getStyleAndHash(cachePath),
          _getStyleAndHash2 = _slicedToArray(_getStyleAndHash, 2),
          inlineCacheStyleStr = _getStyleAndHash2[0],
          styleHash = _getStyleAndHash2[1];
        if (inlineCacheStyleStr) {
          return [inlineCacheStyleStr, tokenKey, styleHash, {}, clientOnly, order];
        }
      }

      // Generate style
      var styleObj = styleFn();
      var _parseStyle5 = parseStyle(styleObj, {
          hashId: hashId,
          hashPriority: hashPriority,
          layer: layer,
          path: path.join('-'),
          transformers: transformers,
          linters: linters
        }),
        _parseStyle6 = _slicedToArray(_parseStyle5, 2),
        parsedStyle = _parseStyle6[0],
        effectStyle = _parseStyle6[1];
      var styleStr = normalizeStyle(parsedStyle);
      var styleId = uniqueHash(fullPath, styleStr);
      return [styleStr, tokenKey, styleId, effectStyle, clientOnly, order];
    },
    // Remove cache if no need
    function (_ref2, fromHMR) {
      var _ref3 = _slicedToArray(_ref2, 3),
        styleId = _ref3[2];
      if ((fromHMR || autoClear) && isClientSide) {
        removeCSS(styleId, {
          mark: ATTR_MARK
        });
      }
    },
    // Effect: Inject style here
    function (_ref4) {
      var _ref5 = _slicedToArray(_ref4, 4),
        styleStr = _ref5[0];
        _ref5[1];
        var styleId = _ref5[2],
        effectStyle = _ref5[3];
      if (isMergedClientSide && styleStr !== CSS_FILE_STYLE) {
        var mergedCSSConfig = {
          mark: ATTR_MARK,
          prepend: 'queue',
          attachTo: container,
          priority: order
        };
        var nonceStr = typeof nonce === 'function' ? nonce() : nonce;
        if (nonceStr) {
          mergedCSSConfig.csp = {
            nonce: nonceStr
          };
        }
        var _style = updateCSS(styleStr, styleId, mergedCSSConfig);
        _style[CSS_IN_JS_INSTANCE] = cache.instanceId;

        // Used for `useCacheToken` to remove on batch when token removed
        _style.setAttribute(ATTR_TOKEN, tokenKey);

        // Debug usage. Dev only
        if (process.env.NODE_ENV !== 'production') {
          _style.setAttribute(ATTR_CACHE_PATH, fullPath.join('|'));
        }

        // Inject client side effect style
        Object.keys(effectStyle).forEach(function (effectKey) {
          updateCSS(normalizeStyle(effectStyle[effectKey]), "_effect-".concat(effectKey), mergedCSSConfig);
        });
      }
    }),
    _useGlobalCache2 = _slicedToArray(_useGlobalCache, 3),
    cachedStyleStr = _useGlobalCache2[0],
    cachedTokenKey = _useGlobalCache2[1],
    cachedStyleId = _useGlobalCache2[2];
  return function (node) {
    var styleNode;
    if (!ssrInline || isMergedClientSide || !defaultCache) {
      styleNode = /*#__PURE__*/React.createElement(Empty$3, null);
    } else {
      var _ref6;
      styleNode = /*#__PURE__*/React.createElement("style", _extends$1({}, (_ref6 = {}, _defineProperty(_ref6, ATTR_TOKEN, cachedTokenKey), _defineProperty(_ref6, ATTR_MARK, cachedStyleId), _ref6), {
        dangerouslySetInnerHTML: {
          __html: cachedStyleStr
        }
      }));
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null, styleNode, node);
  };
}

var Keyframe = /*#__PURE__*/function () {
  function Keyframe(name, style) {
    _classCallCheck(this, Keyframe);
    _defineProperty(this, "name", void 0);
    _defineProperty(this, "style", void 0);
    _defineProperty(this, "_keyframe", true);
    this.name = name;
    this.style = style;
  }
  _createClass(Keyframe, [{
    key: "getName",
    value: function getName() {
      var hashId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return hashId ? "".concat(hashId, "-").concat(this.name) : this.name;
    }
  }]);
  return Keyframe;
}();

function noSplit(list) {
  list.notSplit = true;
  return list;
}
({
  // Inset
  inset: ['top', 'right', 'bottom', 'left'],
  insetBlock: ['top', 'bottom'],
  insetBlockStart: ['top'],
  insetBlockEnd: ['bottom'],
  insetInline: ['left', 'right'],
  insetInlineStart: ['left'],
  insetInlineEnd: ['right'],
  // Margin
  marginBlock: ['marginTop', 'marginBottom'],
  marginBlockStart: ['marginTop'],
  marginBlockEnd: ['marginBottom'],
  marginInline: ['marginLeft', 'marginRight'],
  marginInlineStart: ['marginLeft'],
  marginInlineEnd: ['marginRight'],
  // Padding
  paddingBlock: ['paddingTop', 'paddingBottom'],
  paddingBlockStart: ['paddingTop'],
  paddingBlockEnd: ['paddingBottom'],
  paddingInline: ['paddingLeft', 'paddingRight'],
  paddingInlineStart: ['paddingLeft'],
  paddingInlineEnd: ['paddingRight'],
  // Border
  borderBlock: noSplit(['borderTop', 'borderBottom']),
  borderBlockStart: noSplit(['borderTop']),
  borderBlockEnd: noSplit(['borderBottom']),
  borderInline: noSplit(['borderLeft', 'borderRight']),
  borderInlineStart: noSplit(['borderLeft']),
  borderInlineEnd: noSplit(['borderRight']),
  // Border width
  borderBlockWidth: ['borderTopWidth', 'borderBottomWidth'],
  borderBlockStartWidth: ['borderTopWidth'],
  borderBlockEndWidth: ['borderBottomWidth'],
  borderInlineWidth: ['borderLeftWidth', 'borderRightWidth'],
  borderInlineStartWidth: ['borderLeftWidth'],
  borderInlineEndWidth: ['borderRightWidth'],
  // Border style
  borderBlockStyle: ['borderTopStyle', 'borderBottomStyle'],
  borderBlockStartStyle: ['borderTopStyle'],
  borderBlockEndStyle: ['borderBottomStyle'],
  borderInlineStyle: ['borderLeftStyle', 'borderRightStyle'],
  borderInlineStartStyle: ['borderLeftStyle'],
  borderInlineEndStyle: ['borderRightStyle'],
  // Border color
  borderBlockColor: ['borderTopColor', 'borderBottomColor'],
  borderBlockStartColor: ['borderTopColor'],
  borderBlockEndColor: ['borderBottomColor'],
  borderInlineColor: ['borderLeftColor', 'borderRightColor'],
  borderInlineStartColor: ['borderLeftColor'],
  borderInlineEndColor: ['borderRightColor'],
  // Border radius
  borderStartStartRadius: ['borderTopLeftRadius'],
  borderStartEndRadius: ['borderTopRightRadius'],
  borderEndStartRadius: ['borderBottomLeftRadius'],
  borderEndEndRadius: ['borderBottomRightRadius']
});

var IconContext = /*#__PURE__*/createContext({});
var Context$2 = IconContext;

function _toArray(arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
}

function get(entity, path) {
  var current = entity;
  for (var i = 0; i < path.length; i += 1) {
    if (current === null || current === undefined) {
      return undefined;
    }
    current = current[path[i]];
  }
  return current;
}

function internalSet(entity, paths, value, removeIfUndefined) {
  if (!paths.length) {
    return value;
  }
  var _paths = _toArray(paths),
    path = _paths[0],
    restPath = _paths.slice(1);
  var clone;
  if (!entity && typeof path === 'number') {
    clone = [];
  } else if (Array.isArray(entity)) {
    clone = _toConsumableArray(entity);
  } else {
    clone = _objectSpread2({}, entity);
  }

  // Delete prop if `removeIfUndefined` and value is undefined
  if (removeIfUndefined && value === undefined && restPath.length === 1) {
    delete clone[path][restPath[0]];
  } else {
    clone[path] = internalSet(clone[path], restPath, value, removeIfUndefined);
  }
  return clone;
}
function set(entity, paths, value) {
  var removeIfUndefined = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  // Do nothing if `removeIfUndefined` and parent object not exist
  if (paths.length && removeIfUndefined && value === undefined && !get(entity, paths.slice(0, -1))) {
    return entity;
  }
  return internalSet(entity, paths, value, removeIfUndefined);
}
function isObject(obj) {
  return _typeof(obj) === 'object' && obj !== null && Object.getPrototypeOf(obj) === Object.prototype;
}
function createEmpty(source) {
  return Array.isArray(source) ? [] : {};
}
var keys = typeof Reflect === 'undefined' ? Object.keys : Reflect.ownKeys;

/**
 * Merge objects which will create
 */
function merge$1() {
  for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
    sources[_key] = arguments[_key];
  }
  var clone = createEmpty(sources[0]);
  sources.forEach(function (src) {
    function internalMerge(path, parentLoopSet) {
      var loopSet = new Set(parentLoopSet);
      var value = get(src, path);
      var isArr = Array.isArray(value);
      if (isArr || isObject(value)) {
        // Only add not loop obj
        if (!loopSet.has(value)) {
          loopSet.add(value);
          var originValue = get(clone, path);
          if (isArr) {
            // Array will always be override
            clone = set(clone, path, []);
          } else if (!originValue || _typeof(originValue) !== 'object') {
            // Init container if not exist
            clone = set(clone, path, createEmpty(value));
          }
          keys(value).forEach(function (key) {
            internalMerge([].concat(_toConsumableArray(path), [key]), loopSet);
          });
        }
      } else {
        clone = set(clone, path, value);
      }
    }
    internalMerge([]);
  });
  return clone;
}

function noop$1() {}
// eslint-disable-next-line import/no-mutable-exports
let warning$2 = noop$1;
if (process.env.NODE_ENV !== 'production') {
  warning$2 = (valid, component, message) => {
    warningOnce(valid, `[antd: ${component}] ${message}`);
    // StrictMode will inject console which will not throw warning in React 17.
    if (process.env.NODE_ENV === 'test') {
      resetWarned();
    }
  };
}
var warning$3 = warning$2;

// ZombieJ: We export single file here since
// ConfigProvider use this which will make loop deps
// to import whole `rc-field-form`
var ValidateMessagesContext = /*#__PURE__*/createContext(undefined);

var enUS$1 = {
  // Options.jsx
  items_per_page: '/ page',
  jump_to: 'Go to',
  jump_to_confirm: 'confirm',
  page: 'Page',
  // Pagination.jsx
  prev_page: 'Previous Page',
  next_page: 'Next Page',
  prev_5: 'Previous 5 Pages',
  next_5: 'Next 5 Pages',
  prev_3: 'Previous 3 Pages',
  next_3: 'Next 3 Pages',
  page_size: 'Page Size'
};

var locale$2 = {
  locale: 'en_US',
  today: 'Today',
  now: 'Now',
  backToToday: 'Back to today',
  ok: 'OK',
  clear: 'Clear',
  month: 'Month',
  year: 'Year',
  timeSelect: 'select time',
  dateSelect: 'select date',
  weekSelect: 'Choose a week',
  monthSelect: 'Choose a month',
  yearSelect: 'Choose a year',
  decadeSelect: 'Choose a decade',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Previous month (PageUp)',
  nextMonth: 'Next month (PageDown)',
  previousYear: 'Last year (Control + left)',
  nextYear: 'Next year (Control + right)',
  previousDecade: 'Last decade',
  nextDecade: 'Next decade',
  previousCentury: 'Last century',
  nextCentury: 'Next century'
};

const locale$1 = {
  placeholder: 'Select time',
  rangePlaceholder: ['Start time', 'End time']
};
var TimePicker = locale$1;

// Merge into a locale object
const locale = {
  lang: Object.assign({
    placeholder: 'Select date',
    yearPlaceholder: 'Select year',
    quarterPlaceholder: 'Select quarter',
    monthPlaceholder: 'Select month',
    weekPlaceholder: 'Select week',
    rangePlaceholder: ['Start date', 'End date'],
    rangeYearPlaceholder: ['Start year', 'End year'],
    rangeQuarterPlaceholder: ['Start quarter', 'End quarter'],
    rangeMonthPlaceholder: ['Start month', 'End month'],
    rangeWeekPlaceholder: ['Start week', 'End week']
  }, locale$2),
  timePickerLocale: Object.assign({}, TimePicker)
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
var enUS = locale;

/* eslint-disable no-template-curly-in-string */
const typeTemplate$1 = '${label} is not a valid ${type}';
const localeValues = {
  locale: 'en',
  Pagination: enUS$1,
  DatePicker: enUS,
  TimePicker,
  Calendar: enUS,
  global: {
    placeholder: 'Please select'
  },
  Table: {
    filterTitle: 'Filter menu',
    filterConfirm: 'OK',
    filterReset: 'Reset',
    filterEmptyText: 'No filters',
    filterCheckall: 'Select all items',
    filterSearchPlaceholder: 'Search in filters',
    emptyText: 'No data',
    selectAll: 'Select current page',
    selectInvert: 'Invert current page',
    selectNone: 'Clear all data',
    selectionAll: 'Select all data',
    sortTitle: 'Sort',
    expand: 'Expand row',
    collapse: 'Collapse row',
    triggerDesc: 'Click to sort descending',
    triggerAsc: 'Click to sort ascending',
    cancelSort: 'Click to cancel sorting'
  },
  Tour: {
    Next: 'Next',
    Previous: 'Previous',
    Finish: 'Finish'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Cancel',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Cancel'
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'Search here',
    itemUnit: 'item',
    itemsUnit: 'items',
    remove: 'Remove',
    selectCurrent: 'Select current page',
    removeCurrent: 'Remove current page',
    selectAll: 'Select all data',
    removeAll: 'Remove all data',
    selectInvert: 'Invert current page'
  },
  Upload: {
    uploading: 'Uploading...',
    removeFile: 'Remove file',
    uploadError: 'Upload error',
    previewFile: 'Preview file',
    downloadFile: 'Download file'
  },
  Empty: {
    description: 'No data'
  },
  Icon: {
    icon: 'icon'
  },
  Text: {
    edit: 'Edit',
    copy: 'Copy',
    copied: 'Copied',
    expand: 'Expand'
  },
  PageHeader: {
    back: 'Back'
  },
  Form: {
    optional: '(optional)',
    defaultValidateMessages: {
      default: 'Field validation error for ${label}',
      required: 'Please enter ${label}',
      enum: '${label} must be one of [${enum}]',
      whitespace: '${label} cannot be a blank character',
      date: {
        format: '${label} date format is invalid',
        parse: '${label} cannot be converted to a date',
        invalid: '${label} is an invalid date'
      },
      types: {
        string: typeTemplate$1,
        method: typeTemplate$1,
        array: typeTemplate$1,
        object: typeTemplate$1,
        number: typeTemplate$1,
        date: typeTemplate$1,
        boolean: typeTemplate$1,
        integer: typeTemplate$1,
        float: typeTemplate$1,
        regexp: typeTemplate$1,
        email: typeTemplate$1,
        url: typeTemplate$1,
        hex: typeTemplate$1
      },
      string: {
        len: '${label} must be ${len} characters',
        min: '${label} must be at least ${min} characters',
        max: '${label} must be up to ${max} characters',
        range: '${label} must be between ${min}-${max} characters'
      },
      number: {
        len: '${label} must be equal to ${len}',
        min: '${label} must be minimum ${min}',
        max: '${label} must be maximum ${max}',
        range: '${label} must be between ${min}-${max}'
      },
      array: {
        len: 'Must be ${len} ${label}',
        min: 'At least ${min} ${label}',
        max: 'At most ${max} ${label}',
        range: 'The amount of ${label} must be between ${min}-${max}'
      },
      pattern: {
        mismatch: '${label} does not match the pattern ${pattern}'
      }
    }
  },
  Image: {
    preview: 'Preview'
  },
  QRCode: {
    expired: 'QR code expired',
    refresh: 'Refresh'
  },
  ColorPicker: {
    presetEmpty: 'Empty'
  }
};
var defaultLocale = localeValues;

Object.assign({}, defaultLocale.Modal);
let localeList = [];
const generateLocale = () => localeList.reduce((merged, locale) => Object.assign(Object.assign({}, merged), locale), defaultLocale.Modal);
function changeConfirmLocale(newLocale) {
  if (newLocale) {
    const cloneLocale = Object.assign({}, newLocale);
    localeList.push(cloneLocale);
    generateLocale();
    return () => {
      localeList = localeList.filter(locale => locale !== cloneLocale);
      generateLocale();
    };
  }
  Object.assign({}, defaultLocale.Modal);
}

const LocaleContext = /*#__PURE__*/createContext(undefined);
var LocaleContext$1 = LocaleContext;

const useLocale = (componentName, defaultLocale$1) => {
  const fullLocale = React.useContext(LocaleContext$1);
  const getLocale = React.useMemo(() => {
    var _a;
    const locale = defaultLocale$1 || defaultLocale[componentName];
    const localeFromContext = (_a = fullLocale === null || fullLocale === void 0 ? void 0 : fullLocale[componentName]) !== null && _a !== void 0 ? _a : {};
    return Object.assign(Object.assign({}, typeof locale === 'function' ? locale() : locale), localeFromContext || {});
  }, [componentName, defaultLocale$1, fullLocale]);
  const getLocaleCode = React.useMemo(() => {
    const localeCode = fullLocale === null || fullLocale === void 0 ? void 0 : fullLocale.locale;
    // Had use LocaleProvide but didn't set locale
    if ((fullLocale === null || fullLocale === void 0 ? void 0 : fullLocale.exist) && !localeCode) {
      return defaultLocale.locale;
    }
    return localeCode;
  }, [fullLocale]);
  return [getLocale, getLocaleCode];
};
var useLocale$1 = useLocale;

const ANT_MARK = 'internalMark';
const LocaleProvider = props => {
  const {
    locale = {},
    children,
    _ANT_MARK__
  } = props;
  if (process.env.NODE_ENV !== 'production') {
    process.env.NODE_ENV !== "production" ? warning$3(_ANT_MARK__ === ANT_MARK, 'LocaleProvider', '`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale') : void 0;
  }
  React.useEffect(() => {
    const clearLocale = changeConfirmLocale(locale && locale.Modal);
    return clearLocale;
  }, [locale]);
  const getMemoizedContextValue = React.useMemo(() => Object.assign(Object.assign({}, locale), {
    exist: true
  }), [locale]);
  return /*#__PURE__*/React.createElement(LocaleContext$1.Provider, {
    value: getMemoizedContextValue
  }, children);
};
if (process.env.NODE_ENV !== 'production') {
  LocaleProvider.displayName = 'LocaleProvider';
}
var LocaleProvider$1 = LocaleProvider;

const PresetColors = ['blue', 'purple', 'cyan', 'green', 'magenta', 'pink', 'red', 'orange', 'yellow', 'volcano', 'geekblue', 'lime', 'gold'];

var version = '5.9.0';

/**
 * Take input from [0, n] and return it as [0, 1]
 * @hidden
 */
function bound01(n, max) {
    if (isOnePointZero(n)) {
        n = '100%';
    }
    var isPercent = isPercentage(n);
    n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
    // Automatically convert percentage into number
    if (isPercent) {
        n = parseInt(String(n * max), 10) / 100;
    }
    // Handle floating point rounding errors
    if (Math.abs(n - max) < 0.000001) {
        return 1;
    }
    // Convert into [0, 1] range if it isn't already
    if (max === 360) {
        // If n is a hue given in degrees,
        // wrap around out-of-range values into [0, 360] range
        // then convert into [0, 1].
        n = (n < 0 ? (n % max) + max : n % max) / parseFloat(String(max));
    }
    else {
        // If n not a hue given in degrees
        // Convert into [0, 1] range if it isn't already.
        n = (n % max) / parseFloat(String(max));
    }
    return n;
}
/**
 * Force a number between 0 and 1
 * @hidden
 */
function clamp01(val) {
    return Math.min(1, Math.max(0, val));
}
/**
 * Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
 * <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
 * @hidden
 */
function isOnePointZero(n) {
    return typeof n === 'string' && n.indexOf('.') !== -1 && parseFloat(n) === 1;
}
/**
 * Check to see if string passed in is a percentage
 * @hidden
 */
function isPercentage(n) {
    return typeof n === 'string' && n.indexOf('%') !== -1;
}
/**
 * Return a valid alpha value [0,1] with all invalid values being set to 1
 * @hidden
 */
function boundAlpha(a) {
    a = parseFloat(a);
    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }
    return a;
}
/**
 * Replace a decimal with it's percentage value
 * @hidden
 */
function convertToPercentage(n) {
    if (n <= 1) {
        return "".concat(Number(n) * 100, "%");
    }
    return n;
}
/**
 * Force a hex value to have 2 characters
 * @hidden
 */
function pad2(c) {
    return c.length === 1 ? '0' + c : String(c);
}

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>
/**
 * Handle bounds / percentage checking to conform to CSS color spec
 * <http://www.w3.org/TR/css3-color/>
 * *Assumes:* r, g, b in [0, 255] or [0, 1]
 * *Returns:* { r, g, b } in [0, 255]
 */
function rgbToRgb(r, g, b) {
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255,
    };
}
/**
 * Converts an RGB color value to HSL.
 * *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
 * *Returns:* { h, s, l } in [0,1]
 */
function rgbToHsl(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var s = 0;
    var l = (max + min) / 2;
    if (max === min) {
        s = 0;
        h = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return { h: h, s: s, l: l };
}
function hue2rgb(p, q, t) {
    if (t < 0) {
        t += 1;
    }
    if (t > 1) {
        t -= 1;
    }
    if (t < 1 / 6) {
        return p + (q - p) * (6 * t);
    }
    if (t < 1 / 2) {
        return q;
    }
    if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
}
/**
 * Converts an HSL color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hslToRgb(h, s, l) {
    var r;
    var g;
    var b;
    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);
    if (s === 0) {
        // achromatic
        g = l;
        b = l;
        r = l;
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color value to HSV
 *
 * *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
 * *Returns:* { h, s, v } in [0,1]
 */
function rgbToHsv(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var v = max;
    var d = max - min;
    var s = max === 0 ? 0 : d / max;
    if (max === min) {
        h = 0; // achromatic
    }
    else {
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}
/**
 * Converts an HSV color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hsvToRgb(h, s, v) {
    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);
    var i = Math.floor(h);
    var f = h - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);
    var mod = i % 6;
    var r = [v, q, p, p, t, v][mod];
    var g = [t, v, v, q, p, p][mod];
    var b = [p, p, t, v, v, q][mod];
    return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color to hex
 *
 * Assumes r, g, and b are contained in the set [0, 255]
 * Returns a 3 or 6 character hex
 */
function rgbToHex(r, g, b, allow3Char) {
    var hex = [
        pad2(Math.round(r).toString(16)),
        pad2(Math.round(g).toString(16)),
        pad2(Math.round(b).toString(16)),
    ];
    // Return a 3 character hex if possible
    if (allow3Char &&
        hex[0].startsWith(hex[0].charAt(1)) &&
        hex[1].startsWith(hex[1].charAt(1)) &&
        hex[2].startsWith(hex[2].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }
    return hex.join('');
}
/**
 * Converts an RGBA color plus alpha transparency to hex
 *
 * Assumes r, g, b are contained in the set [0, 255] and
 * a in [0, 1]. Returns a 4 or 8 character rgba hex
 */
// eslint-disable-next-line max-params
function rgbaToHex(r, g, b, a, allow4Char) {
    var hex = [
        pad2(Math.round(r).toString(16)),
        pad2(Math.round(g).toString(16)),
        pad2(Math.round(b).toString(16)),
        pad2(convertDecimalToHex(a)),
    ];
    // Return a 4 character hex if possible
    if (allow4Char &&
        hex[0].startsWith(hex[0].charAt(1)) &&
        hex[1].startsWith(hex[1].charAt(1)) &&
        hex[2].startsWith(hex[2].charAt(1)) &&
        hex[3].startsWith(hex[3].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }
    return hex.join('');
}
/** Converts a decimal to a hex value */
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
/** Converts a hex value to a decimal */
function convertHexToDecimal(h) {
    return parseIntFromHex(h) / 255;
}
/** Parse a base-16 hex value into a base-10 integer */
function parseIntFromHex(val) {
    return parseInt(val, 16);
}
function numberInputToObject(color) {
    return {
        r: color >> 16,
        g: (color & 0xff00) >> 8,
        b: color & 0xff,
    };
}

// https://github.com/bahamas10/css-color-names/blob/master/css-color-names.json
/**
 * @hidden
 */
var names = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    goldenrod: '#daa520',
    gold: '#ffd700',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavenderblush: '#fff0f5',
    lavender: '#e6e6fa',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32',
};

/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
/**
 * Given a string or object, convert that input to RGB
 *
 * Possible string inputs:
 * ```
 * "red"
 * "#f00" or "f00"
 * "#ff0000" or "ff0000"
 * "#ff000000" or "ff000000"
 * "rgb 255 0 0" or "rgb (255, 0, 0)"
 * "rgb 1.0 0 0" or "rgb (1, 0, 0)"
 * "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
 * "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
 * "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
 * "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
 * "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
 * ```
 */
function inputToRGB(color) {
    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;
    if (typeof color === 'string') {
        color = stringInputToObject(color);
    }
    if (typeof color === 'object') {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === '%' ? 'prgb' : 'rgb';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = 'hsv';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = 'hsl';
        }
        if (Object.prototype.hasOwnProperty.call(color, 'a')) {
            a = color.a;
        }
    }
    a = boundAlpha(a);
    return {
        ok: ok,
        format: color.format || format,
        r: Math.min(255, Math.max(rgb.r, 0)),
        g: Math.min(255, Math.max(rgb.g, 0)),
        b: Math.min(255, Math.max(rgb.b, 0)),
        a: a,
    };
}
// <http://www.w3.org/TR/css3-values/#integers>
var CSS_INTEGER = '[-\\+]?\\d+%?';
// <http://www.w3.org/TR/css3-values/#number-value>
var CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?';
// Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
// Actual matching.
// Parentheses and commas are optional, but not required.
// Whitespace can take the place of commas or opening paren
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var matchers = {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp('rgb' + PERMISSIVE_MATCH3),
    rgba: new RegExp('rgba' + PERMISSIVE_MATCH4),
    hsl: new RegExp('hsl' + PERMISSIVE_MATCH3),
    hsla: new RegExp('hsla' + PERMISSIVE_MATCH4),
    hsv: new RegExp('hsv' + PERMISSIVE_MATCH3),
    hsva: new RegExp('hsva' + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
};
/**
 * Permissive string parsing.  Take in a number of formats, and output an object
 * based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
 */
function stringInputToObject(color) {
    color = color.trim().toLowerCase();
    if (color.length === 0) {
        return false;
    }
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color === 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
    }
    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match = matchers.rgb.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    match = matchers.rgba.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    match = matchers.hsl.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    match = matchers.hsla.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    match = matchers.hsv.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    match = matchers.hsva.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    match = matchers.hex8.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex6.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    match = matchers.hex4.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1] + match[1]),
            g: parseIntFromHex(match[2] + match[2]),
            b: parseIntFromHex(match[3] + match[3]),
            a: convertHexToDecimal(match[4] + match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex3.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1] + match[1]),
            g: parseIntFromHex(match[2] + match[2]),
            b: parseIntFromHex(match[3] + match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    return false;
}
/**
 * Check to see if it looks like a CSS unit
 * (see `matchers` above for definition).
 */
function isValidCSSUnit(color) {
    return Boolean(matchers.CSS_UNIT.exec(String(color)));
}

var TinyColor = /** @class */ (function () {
    function TinyColor(color, opts) {
        if (color === void 0) { color = ''; }
        if (opts === void 0) { opts = {}; }
        var _a;
        // If input is already a tinycolor, return itself
        if (color instanceof TinyColor) {
            // eslint-disable-next-line no-constructor-return
            return color;
        }
        if (typeof color === 'number') {
            color = numberInputToObject(color);
        }
        this.originalInput = color;
        var rgb = inputToRGB(color);
        this.originalInput = color;
        this.r = rgb.r;
        this.g = rgb.g;
        this.b = rgb.b;
        this.a = rgb.a;
        this.roundA = Math.round(100 * this.a) / 100;
        this.format = (_a = opts.format) !== null && _a !== void 0 ? _a : rgb.format;
        this.gradientType = opts.gradientType;
        // Don't let the range of [0,255] come back in [0,1].
        // Potentially lose a little bit of precision here, but will fix issues where
        // .5 gets interpreted as half of the total, instead of half of 1
        // If it was supposed to be 128, this was already taken care of by `inputToRgb`
        if (this.r < 1) {
            this.r = Math.round(this.r);
        }
        if (this.g < 1) {
            this.g = Math.round(this.g);
        }
        if (this.b < 1) {
            this.b = Math.round(this.b);
        }
        this.isValid = rgb.ok;
    }
    TinyColor.prototype.isDark = function () {
        return this.getBrightness() < 128;
    };
    TinyColor.prototype.isLight = function () {
        return !this.isDark();
    };
    /**
     * Returns the perceived brightness of the color, from 0-255.
     */
    TinyColor.prototype.getBrightness = function () {
        // http://www.w3.org/TR/AERT#color-contrast
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    };
    /**
     * Returns the perceived luminance of a color, from 0-1.
     */
    TinyColor.prototype.getLuminance = function () {
        // http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        var rgb = this.toRgb();
        var R;
        var G;
        var B;
        var RsRGB = rgb.r / 255;
        var GsRGB = rgb.g / 255;
        var BsRGB = rgb.b / 255;
        if (RsRGB <= 0.03928) {
            R = RsRGB / 12.92;
        }
        else {
            // eslint-disable-next-line prefer-exponentiation-operator
            R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
        }
        if (GsRGB <= 0.03928) {
            G = GsRGB / 12.92;
        }
        else {
            // eslint-disable-next-line prefer-exponentiation-operator
            G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
        }
        if (BsRGB <= 0.03928) {
            B = BsRGB / 12.92;
        }
        else {
            // eslint-disable-next-line prefer-exponentiation-operator
            B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
        }
        return 0.2126 * R + 0.7152 * G + 0.0722 * B;
    };
    /**
     * Returns the alpha value of a color, from 0-1.
     */
    TinyColor.prototype.getAlpha = function () {
        return this.a;
    };
    /**
     * Sets the alpha value on the current color.
     *
     * @param alpha - The new alpha value. The accepted range is 0-1.
     */
    TinyColor.prototype.setAlpha = function (alpha) {
        this.a = boundAlpha(alpha);
        this.roundA = Math.round(100 * this.a) / 100;
        return this;
    };
    /**
     * Returns whether the color is monochrome.
     */
    TinyColor.prototype.isMonochrome = function () {
        var s = this.toHsl().s;
        return s === 0;
    };
    /**
     * Returns the object as a HSVA object.
     */
    TinyColor.prototype.toHsv = function () {
        var hsv = rgbToHsv(this.r, this.g, this.b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
    };
    /**
     * Returns the hsva values interpolated into a string with the following format:
     * "hsva(xxx, xxx, xxx, xx)".
     */
    TinyColor.prototype.toHsvString = function () {
        var hsv = rgbToHsv(this.r, this.g, this.b);
        var h = Math.round(hsv.h * 360);
        var s = Math.round(hsv.s * 100);
        var v = Math.round(hsv.v * 100);
        return this.a === 1 ? "hsv(".concat(h, ", ").concat(s, "%, ").concat(v, "%)") : "hsva(".concat(h, ", ").concat(s, "%, ").concat(v, "%, ").concat(this.roundA, ")");
    };
    /**
     * Returns the object as a HSLA object.
     */
    TinyColor.prototype.toHsl = function () {
        var hsl = rgbToHsl(this.r, this.g, this.b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
    };
    /**
     * Returns the hsla values interpolated into a string with the following format:
     * "hsla(xxx, xxx, xxx, xx)".
     */
    TinyColor.prototype.toHslString = function () {
        var hsl = rgbToHsl(this.r, this.g, this.b);
        var h = Math.round(hsl.h * 360);
        var s = Math.round(hsl.s * 100);
        var l = Math.round(hsl.l * 100);
        return this.a === 1 ? "hsl(".concat(h, ", ").concat(s, "%, ").concat(l, "%)") : "hsla(".concat(h, ", ").concat(s, "%, ").concat(l, "%, ").concat(this.roundA, ")");
    };
    /**
     * Returns the hex value of the color.
     * @param allow3Char will shorten hex value to 3 char if possible
     */
    TinyColor.prototype.toHex = function (allow3Char) {
        if (allow3Char === void 0) { allow3Char = false; }
        return rgbToHex(this.r, this.g, this.b, allow3Char);
    };
    /**
     * Returns the hex value of the color -with a # prefixed.
     * @param allow3Char will shorten hex value to 3 char if possible
     */
    TinyColor.prototype.toHexString = function (allow3Char) {
        if (allow3Char === void 0) { allow3Char = false; }
        return '#' + this.toHex(allow3Char);
    };
    /**
     * Returns the hex 8 value of the color.
     * @param allow4Char will shorten hex value to 4 char if possible
     */
    TinyColor.prototype.toHex8 = function (allow4Char) {
        if (allow4Char === void 0) { allow4Char = false; }
        return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
    };
    /**
     * Returns the hex 8 value of the color -with a # prefixed.
     * @param allow4Char will shorten hex value to 4 char if possible
     */
    TinyColor.prototype.toHex8String = function (allow4Char) {
        if (allow4Char === void 0) { allow4Char = false; }
        return '#' + this.toHex8(allow4Char);
    };
    /**
     * Returns the shorter hex value of the color depends on its alpha -with a # prefixed.
     * @param allowShortChar will shorten hex value to 3 or 4 char if possible
     */
    TinyColor.prototype.toHexShortString = function (allowShortChar) {
        if (allowShortChar === void 0) { allowShortChar = false; }
        return this.a === 1 ? this.toHexString(allowShortChar) : this.toHex8String(allowShortChar);
    };
    /**
     * Returns the object as a RGBA object.
     */
    TinyColor.prototype.toRgb = function () {
        return {
            r: Math.round(this.r),
            g: Math.round(this.g),
            b: Math.round(this.b),
            a: this.a,
        };
    };
    /**
     * Returns the RGBA values interpolated into a string with the following format:
     * "RGBA(xxx, xxx, xxx, xx)".
     */
    TinyColor.prototype.toRgbString = function () {
        var r = Math.round(this.r);
        var g = Math.round(this.g);
        var b = Math.round(this.b);
        return this.a === 1 ? "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")") : "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(this.roundA, ")");
    };
    /**
     * Returns the object as a RGBA object.
     */
    TinyColor.prototype.toPercentageRgb = function () {
        var fmt = function (x) { return "".concat(Math.round(bound01(x, 255) * 100), "%"); };
        return {
            r: fmt(this.r),
            g: fmt(this.g),
            b: fmt(this.b),
            a: this.a,
        };
    };
    /**
     * Returns the RGBA relative values interpolated into a string
     */
    TinyColor.prototype.toPercentageRgbString = function () {
        var rnd = function (x) { return Math.round(bound01(x, 255) * 100); };
        return this.a === 1
            ? "rgb(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%)")
            : "rgba(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%, ").concat(this.roundA, ")");
    };
    /**
     * The 'real' name of the color -if there is one.
     */
    TinyColor.prototype.toName = function () {
        if (this.a === 0) {
            return 'transparent';
        }
        if (this.a < 1) {
            return false;
        }
        var hex = '#' + rgbToHex(this.r, this.g, this.b, false);
        for (var _i = 0, _a = Object.entries(names); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (hex === value) {
                return key;
            }
        }
        return false;
    };
    TinyColor.prototype.toString = function (format) {
        var formatSet = Boolean(format);
        format = format !== null && format !== void 0 ? format : this.format;
        var formattedString = false;
        var hasAlpha = this.a < 1 && this.a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format.startsWith('hex') || format === 'name');
        if (needsAlphaFormat) {
            // Special case for "transparent", all other non-alpha formats
            // will return rgba when there is transparency.
            if (format === 'name' && this.a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === 'rgb') {
            formattedString = this.toRgbString();
        }
        if (format === 'prgb') {
            formattedString = this.toPercentageRgbString();
        }
        if (format === 'hex' || format === 'hex6') {
            formattedString = this.toHexString();
        }
        if (format === 'hex3') {
            formattedString = this.toHexString(true);
        }
        if (format === 'hex4') {
            formattedString = this.toHex8String(true);
        }
        if (format === 'hex8') {
            formattedString = this.toHex8String();
        }
        if (format === 'name') {
            formattedString = this.toName();
        }
        if (format === 'hsl') {
            formattedString = this.toHslString();
        }
        if (format === 'hsv') {
            formattedString = this.toHsvString();
        }
        return formattedString || this.toHexString();
    };
    TinyColor.prototype.toNumber = function () {
        return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    };
    TinyColor.prototype.clone = function () {
        return new TinyColor(this.toString());
    };
    /**
     * Lighten the color a given amount. Providing 100 will always return white.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.lighten = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.l += amount / 100;
        hsl.l = clamp01(hsl.l);
        return new TinyColor(hsl);
    };
    /**
     * Brighten the color a given amount, from 0 to 100.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.brighten = function (amount) {
        if (amount === void 0) { amount = 10; }
        var rgb = this.toRgb();
        rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
        rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
        rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
        return new TinyColor(rgb);
    };
    /**
     * Darken the color a given amount, from 0 to 100.
     * Providing 100 will always return black.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.darken = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.l -= amount / 100;
        hsl.l = clamp01(hsl.l);
        return new TinyColor(hsl);
    };
    /**
     * Mix the color with pure white, from 0 to 100.
     * Providing 0 will do nothing, providing 100 will always return white.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.tint = function (amount) {
        if (amount === void 0) { amount = 10; }
        return this.mix('white', amount);
    };
    /**
     * Mix the color with pure black, from 0 to 100.
     * Providing 0 will do nothing, providing 100 will always return black.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.shade = function (amount) {
        if (amount === void 0) { amount = 10; }
        return this.mix('black', amount);
    };
    /**
     * Desaturate the color a given amount, from 0 to 100.
     * Providing 100 will is the same as calling greyscale
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.desaturate = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.s -= amount / 100;
        hsl.s = clamp01(hsl.s);
        return new TinyColor(hsl);
    };
    /**
     * Saturate the color a given amount, from 0 to 100.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.saturate = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.s += amount / 100;
        hsl.s = clamp01(hsl.s);
        return new TinyColor(hsl);
    };
    /**
     * Completely desaturates a color into greyscale.
     * Same as calling `desaturate(100)`
     */
    TinyColor.prototype.greyscale = function () {
        return this.desaturate(100);
    };
    /**
     * Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
     * Values outside of this range will be wrapped into this range.
     */
    TinyColor.prototype.spin = function (amount) {
        var hsl = this.toHsl();
        var hue = (hsl.h + amount) % 360;
        hsl.h = hue < 0 ? 360 + hue : hue;
        return new TinyColor(hsl);
    };
    /**
     * Mix the current color a given amount with another color, from 0 to 100.
     * 0 means no mixing (return current color).
     */
    TinyColor.prototype.mix = function (color, amount) {
        if (amount === void 0) { amount = 50; }
        var rgb1 = this.toRgb();
        var rgb2 = new TinyColor(color).toRgb();
        var p = amount / 100;
        var rgba = {
            r: (rgb2.r - rgb1.r) * p + rgb1.r,
            g: (rgb2.g - rgb1.g) * p + rgb1.g,
            b: (rgb2.b - rgb1.b) * p + rgb1.b,
            a: (rgb2.a - rgb1.a) * p + rgb1.a,
        };
        return new TinyColor(rgba);
    };
    TinyColor.prototype.analogous = function (results, slices) {
        if (results === void 0) { results = 6; }
        if (slices === void 0) { slices = 30; }
        var hsl = this.toHsl();
        var part = 360 / slices;
        var ret = [this];
        for (hsl.h = (hsl.h - ((part * results) >> 1) + 720) % 360; --results;) {
            hsl.h = (hsl.h + part) % 360;
            ret.push(new TinyColor(hsl));
        }
        return ret;
    };
    /**
     * taken from https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js
     */
    TinyColor.prototype.complement = function () {
        var hsl = this.toHsl();
        hsl.h = (hsl.h + 180) % 360;
        return new TinyColor(hsl);
    };
    TinyColor.prototype.monochromatic = function (results) {
        if (results === void 0) { results = 6; }
        var hsv = this.toHsv();
        var h = hsv.h;
        var s = hsv.s;
        var v = hsv.v;
        var res = [];
        var modification = 1 / results;
        while (results--) {
            res.push(new TinyColor({ h: h, s: s, v: v }));
            v = (v + modification) % 1;
        }
        return res;
    };
    TinyColor.prototype.splitcomplement = function () {
        var hsl = this.toHsl();
        var h = hsl.h;
        return [
            this,
            new TinyColor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l }),
            new TinyColor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l }),
        ];
    };
    /**
     * Compute how the color would appear on a background
     */
    TinyColor.prototype.onBackground = function (background) {
        var fg = this.toRgb();
        var bg = new TinyColor(background).toRgb();
        var alpha = fg.a + bg.a * (1 - fg.a);
        return new TinyColor({
            r: (fg.r * fg.a + bg.r * bg.a * (1 - fg.a)) / alpha,
            g: (fg.g * fg.a + bg.g * bg.a * (1 - fg.a)) / alpha,
            b: (fg.b * fg.a + bg.b * bg.a * (1 - fg.a)) / alpha,
            a: alpha,
        });
    };
    /**
     * Alias for `polyad(3)`
     */
    TinyColor.prototype.triad = function () {
        return this.polyad(3);
    };
    /**
     * Alias for `polyad(4)`
     */
    TinyColor.prototype.tetrad = function () {
        return this.polyad(4);
    };
    /**
     * Get polyad colors, like (for 1, 2, 3, 4, 5, 6, 7, 8, etc...)
     * monad, dyad, triad, tetrad, pentad, hexad, heptad, octad, etc...
     */
    TinyColor.prototype.polyad = function (n) {
        var hsl = this.toHsl();
        var h = hsl.h;
        var result = [this];
        var increment = 360 / n;
        for (var i = 1; i < n; i++) {
            result.push(new TinyColor({ h: (h + i * increment) % 360, s: hsl.s, l: hsl.l }));
        }
        return result;
    };
    /**
     * compare color vs current color
     */
    TinyColor.prototype.equals = function (color) {
        return this.toRgbString() === new TinyColor(color).toRgbString();
    };
    return TinyColor;
}());

var hueStep = 2; // 色相阶梯

var saturationStep = 0.16; // 饱和度阶梯，浅色部分

var saturationStep2 = 0.05; // 饱和度阶梯，深色部分

var brightnessStep1 = 0.05; // 亮度阶梯，浅色部分

var brightnessStep2 = 0.15; // 亮度阶梯，深色部分

var lightColorCount = 5; // 浅色数量，主色上

var darkColorCount = 4; // 深色数量，主色下
// 暗色主题颜色映射关系表

var darkColorMap = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];

// Wrapper function ported from TinyColor.prototype.toHsv
// Keep it here because of `hsv.h * 360`
function toHsv(_ref) {
  var r = _ref.r,
      g = _ref.g,
      b = _ref.b;
  var hsv = rgbToHsv(r, g, b);
  return {
    h: hsv.h * 360,
    s: hsv.s,
    v: hsv.v
  };
} // Wrapper function ported from TinyColor.prototype.toHexString
// Keep it here because of the prefix `#`


function toHex(_ref2) {
  var r = _ref2.r,
      g = _ref2.g,
      b = _ref2.b;
  return "#".concat(rgbToHex(r, g, b, false));
} // Wrapper function ported from TinyColor.prototype.mix, not treeshakable.
// Amount in range [0, 1]
// Assume color1 & color2 has no alpha, since the following src code did so.


function mix(rgb1, rgb2, amount) {
  var p = amount / 100;
  var rgb = {
    r: (rgb2.r - rgb1.r) * p + rgb1.r,
    g: (rgb2.g - rgb1.g) * p + rgb1.g,
    b: (rgb2.b - rgb1.b) * p + rgb1.b
  };
  return rgb;
}

function getHue(hsv, i, light) {
  var hue; // 根据色相不同，色相转向不同

  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
  } else {
    hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
  }

  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }

  return hue;
}

function getSaturation(hsv, i, light) {
  // grey color don't change saturation
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }

  var saturation;

  if (light) {
    saturation = hsv.s - saturationStep * i;
  } else if (i === darkColorCount) {
    saturation = hsv.s + saturationStep;
  } else {
    saturation = hsv.s + saturationStep2 * i;
  } // 边界值修正


  if (saturation > 1) {
    saturation = 1;
  } // 第一格的 s 限制在 0.06-0.1 之间


  if (light && i === lightColorCount && saturation > 0.1) {
    saturation = 0.1;
  }

  if (saturation < 0.06) {
    saturation = 0.06;
  }

  return Number(saturation.toFixed(2));
}

function getValue$1(hsv, i, light) {
  var value;

  if (light) {
    value = hsv.v + brightnessStep1 * i;
  } else {
    value = hsv.v - brightnessStep2 * i;
  }

  if (value > 1) {
    value = 1;
  }

  return Number(value.toFixed(2));
}

function generate$1(color) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var patterns = [];
  var pColor = inputToRGB(color);

  for (var i = lightColorCount; i > 0; i -= 1) {
    var hsv = toHsv(pColor);
    var colorString = toHex(inputToRGB({
      h: getHue(hsv, i, true),
      s: getSaturation(hsv, i, true),
      v: getValue$1(hsv, i, true)
    }));
    patterns.push(colorString);
  }

  patterns.push(toHex(pColor));

  for (var _i = 1; _i <= darkColorCount; _i += 1) {
    var _hsv = toHsv(pColor);

    var _colorString = toHex(inputToRGB({
      h: getHue(_hsv, _i),
      s: getSaturation(_hsv, _i),
      v: getValue$1(_hsv, _i)
    }));

    patterns.push(_colorString);
  } // dark theme patterns


  if (opts.theme === 'dark') {
    return darkColorMap.map(function (_ref3) {
      var index = _ref3.index,
          opacity = _ref3.opacity;
      var darkColorString = toHex(mix(inputToRGB(opts.backgroundColor || '#141414'), inputToRGB(patterns[index]), opacity * 100));
      return darkColorString;
    });
  }

  return patterns;
}

var presetPrimaryColors = {
  red: '#F5222D',
  volcano: '#FA541C',
  orange: '#FA8C16',
  gold: '#FAAD14',
  yellow: '#FADB14',
  lime: '#A0D911',
  green: '#52C41A',
  cyan: '#13C2C2',
  blue: '#1677FF',
  geekblue: '#2F54EB',
  purple: '#722ED1',
  magenta: '#EB2F96',
  grey: '#666666'
};
var presetPalettes = {};
var presetDarkPalettes = {};
Object.keys(presetPrimaryColors).forEach(function (key) {
  presetPalettes[key] = generate$1(presetPrimaryColors[key]);
  presetPalettes[key].primary = presetPalettes[key][5]; // dark presetPalettes

  presetDarkPalettes[key] = generate$1(presetPrimaryColors[key], {
    theme: 'dark',
    backgroundColor: '#141414'
  });
  presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
});
var blue = presetPalettes.blue;

const genControlHeight = token => {
  const {
    controlHeight
  } = token;
  return {
    controlHeightSM: controlHeight * 0.75,
    controlHeightXS: controlHeight * 0.5,
    controlHeightLG: controlHeight * 1.25
  };
};
var genControlHeight$1 = genControlHeight;

function genSizeMapToken(token) {
  const {
    sizeUnit,
    sizeStep
  } = token;
  return {
    sizeXXL: sizeUnit * (sizeStep + 8),
    sizeXL: sizeUnit * (sizeStep + 4),
    sizeLG: sizeUnit * (sizeStep + 2),
    sizeMD: sizeUnit * (sizeStep + 1),
    sizeMS: sizeUnit * sizeStep,
    size: sizeUnit * sizeStep,
    sizeSM: sizeUnit * (sizeStep - 1),
    sizeXS: sizeUnit * (sizeStep - 2),
    sizeXXS: sizeUnit * (sizeStep - 3) // 4
  };
}

const defaultPresetColors = {
  blue: '#1677ff',
  purple: '#722ED1',
  cyan: '#13C2C2',
  green: '#52C41A',
  magenta: '#EB2F96',
  pink: '#eb2f96',
  red: '#F5222D',
  orange: '#FA8C16',
  yellow: '#FADB14',
  volcano: '#FA541C',
  geekblue: '#2F54EB',
  gold: '#FAAD14',
  lime: '#A0D911'
};
const seedToken = Object.assign(Object.assign({}, defaultPresetColors), {
  // Color
  colorPrimary: '#1677ff',
  colorSuccess: '#52c41a',
  colorWarning: '#faad14',
  colorError: '#ff4d4f',
  colorInfo: '#1677ff',
  colorLink: '',
  colorTextBase: '',
  colorBgBase: '',
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontFamilyCode: `'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace`,
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: 'solid',
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: 'cubic-bezier(0.08, 0.82, 0.17, 1)',
  motionEaseInOutCirc: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
  motionEaseOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  motionEaseInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  motionEaseOutBack: 'cubic-bezier(0.12, 0.4, 0.29, 1.46)',
  motionEaseInBack: 'cubic-bezier(0.71, -0.46, 0.88, 0.6)',
  motionEaseInQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
  motionEaseOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1000,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: false,
  // Motion
  motion: true
});
var seedToken$1 = seedToken;

function genColorMapToken(seed, _ref) {
  let {
    generateColorPalettes,
    generateNeutralColorPalettes
  } = _ref;
  const {
    colorSuccess: colorSuccessBase,
    colorWarning: colorWarningBase,
    colorError: colorErrorBase,
    colorInfo: colorInfoBase,
    colorPrimary: colorPrimaryBase,
    colorBgBase,
    colorTextBase
  } = seed;
  const primaryColors = generateColorPalettes(colorPrimaryBase);
  const successColors = generateColorPalettes(colorSuccessBase);
  const warningColors = generateColorPalettes(colorWarningBase);
  const errorColors = generateColorPalettes(colorErrorBase);
  const infoColors = generateColorPalettes(colorInfoBase);
  const neutralColors = generateNeutralColorPalettes(colorBgBase, colorTextBase);
  // Color Link
  const colorLink = seed.colorLink || seed.colorInfo;
  const linkColors = generateColorPalettes(colorLink);
  return Object.assign(Object.assign({}, neutralColors), {
    colorPrimaryBg: primaryColors[1],
    colorPrimaryBgHover: primaryColors[2],
    colorPrimaryBorder: primaryColors[3],
    colorPrimaryBorderHover: primaryColors[4],
    colorPrimaryHover: primaryColors[5],
    colorPrimary: primaryColors[6],
    colorPrimaryActive: primaryColors[7],
    colorPrimaryTextHover: primaryColors[8],
    colorPrimaryText: primaryColors[9],
    colorPrimaryTextActive: primaryColors[10],
    colorSuccessBg: successColors[1],
    colorSuccessBgHover: successColors[2],
    colorSuccessBorder: successColors[3],
    colorSuccessBorderHover: successColors[4],
    colorSuccessHover: successColors[4],
    colorSuccess: successColors[6],
    colorSuccessActive: successColors[7],
    colorSuccessTextHover: successColors[8],
    colorSuccessText: successColors[9],
    colorSuccessTextActive: successColors[10],
    colorErrorBg: errorColors[1],
    colorErrorBgHover: errorColors[2],
    colorErrorBorder: errorColors[3],
    colorErrorBorderHover: errorColors[4],
    colorErrorHover: errorColors[5],
    colorError: errorColors[6],
    colorErrorActive: errorColors[7],
    colorErrorTextHover: errorColors[8],
    colorErrorText: errorColors[9],
    colorErrorTextActive: errorColors[10],
    colorWarningBg: warningColors[1],
    colorWarningBgHover: warningColors[2],
    colorWarningBorder: warningColors[3],
    colorWarningBorderHover: warningColors[4],
    colorWarningHover: warningColors[4],
    colorWarning: warningColors[6],
    colorWarningActive: warningColors[7],
    colorWarningTextHover: warningColors[8],
    colorWarningText: warningColors[9],
    colorWarningTextActive: warningColors[10],
    colorInfoBg: infoColors[1],
    colorInfoBgHover: infoColors[2],
    colorInfoBorder: infoColors[3],
    colorInfoBorderHover: infoColors[4],
    colorInfoHover: infoColors[4],
    colorInfo: infoColors[6],
    colorInfoActive: infoColors[7],
    colorInfoTextHover: infoColors[8],
    colorInfoText: infoColors[9],
    colorInfoTextActive: infoColors[10],
    colorLinkHover: linkColors[4],
    colorLink: linkColors[6],
    colorLinkActive: linkColors[7],
    colorBgMask: new TinyColor('#000').setAlpha(0.45).toRgbString(),
    colorWhite: '#fff'
  });
}

const genRadius = radiusBase => {
  let radiusLG = radiusBase;
  let radiusSM = radiusBase;
  let radiusXS = radiusBase;
  let radiusOuter = radiusBase;
  // radiusLG
  if (radiusBase < 6 && radiusBase >= 5) {
    radiusLG = radiusBase + 1;
  } else if (radiusBase < 16 && radiusBase >= 6) {
    radiusLG = radiusBase + 2;
  } else if (radiusBase >= 16) {
    radiusLG = 16;
  }
  // radiusSM
  if (radiusBase < 7 && radiusBase >= 5) {
    radiusSM = 4;
  } else if (radiusBase < 8 && radiusBase >= 7) {
    radiusSM = 5;
  } else if (radiusBase < 14 && radiusBase >= 8) {
    radiusSM = 6;
  } else if (radiusBase < 16 && radiusBase >= 14) {
    radiusSM = 7;
  } else if (radiusBase >= 16) {
    radiusSM = 8;
  }
  // radiusXS
  if (radiusBase < 6 && radiusBase >= 2) {
    radiusXS = 1;
  } else if (radiusBase >= 6) {
    radiusXS = 2;
  }
  // radiusOuter
  if (radiusBase > 4 && radiusBase < 8) {
    radiusOuter = 4;
  } else if (radiusBase >= 8) {
    radiusOuter = 6;
  }
  return {
    borderRadius: radiusBase > 16 ? 16 : radiusBase,
    borderRadiusXS: radiusXS,
    borderRadiusSM: radiusSM,
    borderRadiusLG: radiusLG,
    borderRadiusOuter: radiusOuter
  };
};
var genRadius$1 = genRadius;

function genCommonMapToken(token) {
  const {
    motionUnit,
    motionBase,
    borderRadius,
    lineWidth
  } = token;
  return Object.assign({
    // motion
    motionDurationFast: `${(motionBase + motionUnit).toFixed(1)}s`,
    motionDurationMid: `${(motionBase + motionUnit * 2).toFixed(1)}s`,
    motionDurationSlow: `${(motionBase + motionUnit * 3).toFixed(1)}s`,
    // line
    lineWidthBold: lineWidth + 1
  }, genRadius$1(borderRadius));
}

const getAlphaColor$1 = (baseColor, alpha) => new TinyColor(baseColor).setAlpha(alpha).toRgbString();
const getSolidColor = (baseColor, brightness) => {
  const instance = new TinyColor(baseColor);
  return instance.darken(brightness).toHexString();
};

const generateColorPalettes = baseColor => {
  const colors = generate$1(baseColor);
  return {
    1: colors[0],
    2: colors[1],
    3: colors[2],
    4: colors[3],
    5: colors[4],
    6: colors[5],
    7: colors[6],
    8: colors[4],
    9: colors[5],
    10: colors[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
};

const generateNeutralColorPalettes = (bgBaseColor, textBaseColor) => {
  const colorBgBase = bgBaseColor || '#fff';
  const colorTextBase = textBaseColor || '#000';
  return {
    colorBgBase,
    colorTextBase,
    colorText: getAlphaColor$1(colorTextBase, 0.88),
    colorTextSecondary: getAlphaColor$1(colorTextBase, 0.65),
    colorTextTertiary: getAlphaColor$1(colorTextBase, 0.45),
    colorTextQuaternary: getAlphaColor$1(colorTextBase, 0.25),
    colorFill: getAlphaColor$1(colorTextBase, 0.15),
    colorFillSecondary: getAlphaColor$1(colorTextBase, 0.06),
    colorFillTertiary: getAlphaColor$1(colorTextBase, 0.04),
    colorFillQuaternary: getAlphaColor$1(colorTextBase, 0.02),
    colorBgLayout: getSolidColor(colorBgBase, 4),
    colorBgContainer: getSolidColor(colorBgBase, 0),
    colorBgElevated: getSolidColor(colorBgBase, 0),
    colorBgSpotlight: getAlphaColor$1(colorTextBase, 0.85),
    colorBorder: getSolidColor(colorBgBase, 15),
    colorBorderSecondary: getSolidColor(colorBgBase, 6)
  };
};

// https://zhuanlan.zhihu.com/p/32746810
function getFontSizes(base) {
  const fontSizes = new Array(10).fill(null).map((_, index) => {
    const i = index - 1;
    const baseSize = base * Math.pow(2.71828, i / 5);
    const intSize = index > 1 ? Math.floor(baseSize) : Math.ceil(baseSize);
    // Convert to even
    return Math.floor(intSize / 2) * 2;
  });
  fontSizes[1] = base;
  return fontSizes.map(size => {
    const height = size + 8;
    return {
      size,
      lineHeight: height / size
    };
  });
}

const genFontMapToken = fontSize => {
  const fontSizePairs = getFontSizes(fontSize);
  const fontSizes = fontSizePairs.map(pair => pair.size);
  const lineHeights = fontSizePairs.map(pair => pair.lineHeight);
  return {
    fontSizeSM: fontSizes[0],
    fontSize: fontSizes[1],
    fontSizeLG: fontSizes[2],
    fontSizeXL: fontSizes[3],
    fontSizeHeading1: fontSizes[6],
    fontSizeHeading2: fontSizes[5],
    fontSizeHeading3: fontSizes[4],
    fontSizeHeading4: fontSizes[3],
    fontSizeHeading5: fontSizes[2],
    lineHeight: lineHeights[1],
    lineHeightLG: lineHeights[2],
    lineHeightSM: lineHeights[0],
    lineHeightHeading1: lineHeights[6],
    lineHeightHeading2: lineHeights[5],
    lineHeightHeading3: lineHeights[4],
    lineHeightHeading4: lineHeights[3],
    lineHeightHeading5: lineHeights[2]
  };
};
var genFontMapToken$1 = genFontMapToken;

function derivative(token) {
  const colorPalettes = Object.keys(defaultPresetColors).map(colorKey => {
    const colors = generate$1(token[colorKey]);
    return new Array(10).fill(1).reduce((prev, _, i) => {
      prev[`${colorKey}-${i + 1}`] = colors[i];
      prev[`${colorKey}${i + 1}`] = colors[i];
      return prev;
    }, {});
  }).reduce((prev, cur) => {
    prev = Object.assign(Object.assign({}, prev), cur);
    return prev;
  }, {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, token), colorPalettes), genColorMapToken(token, {
    generateColorPalettes,
    generateNeutralColorPalettes
  })), genFontMapToken$1(token.fontSize)), genSizeMapToken(token)), genControlHeight$1(token)), genCommonMapToken(token));
}

const defaultTheme = createTheme(derivative);
// ================================ Context =================================
// To ensure snapshot stable. We disable hashed in test env.
const defaultConfig = {
  token: seedToken$1,
  hashed: true
};
const DesignTokenContext = /*#__PURE__*/React__default.createContext(defaultConfig);

function isStableColor(color) {
  return color >= 0 && color <= 255;
}
function getAlphaColor(frontColor, backgroundColor) {
  const {
    r: fR,
    g: fG,
    b: fB,
    a: originAlpha
  } = new TinyColor(frontColor).toRgb();
  if (originAlpha < 1) {
    return frontColor;
  }
  const {
    r: bR,
    g: bG,
    b: bB
  } = new TinyColor(backgroundColor).toRgb();
  for (let fA = 0.01; fA <= 1; fA += 0.01) {
    const r = Math.round((fR - bR * (1 - fA)) / fA);
    const g = Math.round((fG - bG * (1 - fA)) / fA);
    const b = Math.round((fB - bB * (1 - fA)) / fA);
    if (isStableColor(r) && isStableColor(g) && isStableColor(b)) {
      return new TinyColor({
        r,
        g,
        b,
        a: Math.round(fA * 100) / 100
      }).toRgbString();
    }
  }
  // fallback
  /* istanbul ignore next */
  return new TinyColor({
    r: fR,
    g: fG,
    b: fB,
    a: 1
  }).toRgbString();
}

var __rest$a = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/**
 * Seed (designer) > Derivative (designer) > Alias (developer).
 *
 * Merge seed & derivative & override token and generate alias token for developer.
 */
function formatToken(derivativeToken) {
  const {
      override
    } = derivativeToken,
    restToken = __rest$a(derivativeToken, ["override"]);
  const overrideTokens = Object.assign({}, override);
  Object.keys(seedToken$1).forEach(token => {
    delete overrideTokens[token];
  });
  const mergedToken = Object.assign(Object.assign({}, restToken), overrideTokens);
  const screenXS = 480;
  const screenSM = 576;
  const screenMD = 768;
  const screenLG = 992;
  const screenXL = 1200;
  const screenXXL = 1600;
  // Motion
  if (mergedToken.motion === false) {
    const fastDuration = '0s';
    mergedToken.motionDurationFast = fastDuration;
    mergedToken.motionDurationMid = fastDuration;
    mergedToken.motionDurationSlow = fastDuration;
  }
  // Generate alias token
  const aliasToken = Object.assign(Object.assign(Object.assign({}, mergedToken), {
    // ============== Background ============== //
    colorFillContent: mergedToken.colorFillSecondary,
    colorFillContentHover: mergedToken.colorFill,
    colorFillAlter: mergedToken.colorFillQuaternary,
    colorBgContainerDisabled: mergedToken.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: mergedToken.colorBgContainer,
    colorSplit: getAlphaColor(mergedToken.colorBorderSecondary, mergedToken.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: mergedToken.colorTextQuaternary,
    colorTextDisabled: mergedToken.colorTextQuaternary,
    colorTextHeading: mergedToken.colorText,
    colorTextLabel: mergedToken.colorTextSecondary,
    colorTextDescription: mergedToken.colorTextTertiary,
    colorTextLightSolid: mergedToken.colorWhite,
    colorHighlight: mergedToken.colorError,
    colorBgTextHover: mergedToken.colorFillSecondary,
    colorBgTextActive: mergedToken.colorFill,
    colorIcon: mergedToken.colorTextTertiary,
    colorIconHover: mergedToken.colorText,
    colorErrorOutline: getAlphaColor(mergedToken.colorErrorBg, mergedToken.colorBgContainer),
    colorWarningOutline: getAlphaColor(mergedToken.colorWarningBg, mergedToken.colorBgContainer),
    // Font
    fontSizeIcon: mergedToken.fontSizeSM,
    // Line
    lineWidthFocus: mergedToken.lineWidth * 4,
    // Control
    lineWidth: mergedToken.lineWidth,
    controlOutlineWidth: mergedToken.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: mergedToken.controlHeight / 2,
    controlItemBgHover: mergedToken.colorFillTertiary,
    controlItemBgActive: mergedToken.colorPrimaryBg,
    controlItemBgActiveHover: mergedToken.colorPrimaryBgHover,
    controlItemBgActiveDisabled: mergedToken.colorFill,
    controlTmpOutline: mergedToken.colorFillQuaternary,
    controlOutline: getAlphaColor(mergedToken.colorPrimaryBg, mergedToken.colorBgContainer),
    lineType: mergedToken.lineType,
    borderRadius: mergedToken.borderRadius,
    borderRadiusXS: mergedToken.borderRadiusXS,
    borderRadiusSM: mergedToken.borderRadiusSM,
    borderRadiusLG: mergedToken.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: 'none',
    linkHoverDecoration: 'none',
    linkFocusDecoration: 'none',
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: mergedToken.sizeXXS,
    paddingXS: mergedToken.sizeXS,
    paddingSM: mergedToken.sizeSM,
    padding: mergedToken.size,
    paddingMD: mergedToken.sizeMD,
    paddingLG: mergedToken.sizeLG,
    paddingXL: mergedToken.sizeXL,
    paddingContentHorizontalLG: mergedToken.sizeLG,
    paddingContentVerticalLG: mergedToken.sizeMS,
    paddingContentHorizontal: mergedToken.sizeMS,
    paddingContentVertical: mergedToken.sizeSM,
    paddingContentHorizontalSM: mergedToken.size,
    paddingContentVerticalSM: mergedToken.sizeXS,
    marginXXS: mergedToken.sizeXXS,
    marginXS: mergedToken.sizeXS,
    marginSM: mergedToken.sizeSM,
    margin: mergedToken.size,
    marginMD: mergedToken.sizeMD,
    marginLG: mergedToken.sizeLG,
    marginXL: mergedToken.sizeXL,
    marginXXL: mergedToken.sizeXXL,
    boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS,
    screenXSMin: screenXS,
    screenXSMax: screenSM - 1,
    screenSM,
    screenSMMin: screenSM,
    screenSMMax: screenMD - 1,
    screenMD,
    screenMDMin: screenMD,
    screenMDMax: screenLG - 1,
    screenLG,
    screenLGMin: screenLG,
    screenLGMax: screenXL - 1,
    screenXL,
    screenXLMin: screenXL,
    screenXLMax: screenXXL - 1,
    screenXXL,
    screenXXLMin: screenXXL,
    boxShadowPopoverArrow: '2px 2px 5px rgba(0, 0, 0, 0.05)',
    boxShadowCard: `
      0 1px 2px -2px ${new TinyColor('rgba(0, 0, 0, 0.16)').toRgbString()},
      0 3px 6px 0 ${new TinyColor('rgba(0, 0, 0, 0.12)').toRgbString()},
      0 5px 12px 4px ${new TinyColor('rgba(0, 0, 0, 0.09)').toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: 'inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)',
    boxShadowTabsOverflowRight: 'inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)',
    boxShadowTabsOverflowTop: 'inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)',
    boxShadowTabsOverflowBottom: 'inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)'
  }), overrideTokens);
  return aliasToken;
}

var __rest$9 = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const getComputedToken = (originToken, overrideToken, theme) => {
  const derivativeToken = theme.getDerivativeToken(originToken);
  const {
      override
    } = overrideToken,
    components = __rest$9(overrideToken, ["override"]);
  // Merge with override
  let mergedDerivativeToken = Object.assign(Object.assign({}, derivativeToken), {
    override
  });
  // Format if needed
  mergedDerivativeToken = formatToken(mergedDerivativeToken);
  if (components) {
    Object.entries(components).forEach(_ref => {
      let [key, value] = _ref;
      const {
          theme: componentTheme
        } = value,
        componentTokens = __rest$9(value, ["theme"]);
      let mergedComponentToken = componentTokens;
      if (componentTheme) {
        mergedComponentToken = getComputedToken(Object.assign(Object.assign({}, mergedDerivativeToken), componentTokens), {
          override: componentTokens
        }, componentTheme);
      }
      mergedDerivativeToken[key] = mergedComponentToken;
    });
  }
  return mergedDerivativeToken;
};
// ================================== Hook ==================================
function useToken() {
  const {
    token: rootDesignToken,
    hashed,
    theme,
    components
  } = React__default.useContext(DesignTokenContext);
  const salt = `${version}-${hashed || ''}`;
  const mergedTheme = theme || defaultTheme;
  const [token, hashId] = useCacheToken(mergedTheme, [seedToken$1, rootDesignToken], {
    salt,
    override: Object.assign({
      override: rootDesignToken
    }, components),
    getComputedToken,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken
  });
  return [mergedTheme, token, hashed ? hashId : ''];
}

function useEvent(callback) {
  var fnRef = React.useRef();
  fnRef.current = callback;
  var memoFn = React.useCallback(function () {
    var _fnRef$current;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return (_fnRef$current = fnRef.current) === null || _fnRef$current === void 0 ? void 0 : _fnRef$current.call.apply(_fnRef$current, [fnRef].concat(args));
  }, []);
  return memoFn;
}

/**
 * Same as React.useState but `setState` accept `ignoreDestroy` param to not to setState after destroyed.
 * We do not make this auto is to avoid real memory leak.
 * Developer should confirm it's safe to ignore themselves.
 */
function useSafeState(defaultValue) {
  var destroyRef = React.useRef(false);
  var _React$useState = React.useState(defaultValue),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    value = _React$useState2[0],
    setValue = _React$useState2[1];
  React.useEffect(function () {
    destroyRef.current = false;
    return function () {
      destroyRef.current = true;
    };
  }, []);
  function safeSetState(updater, ignoreDestroy) {
    if (ignoreDestroy && destroyRef.current) {
      return;
    }
    setValue(updater);
  }
  return [value, safeSetState];
}

/** We only think `undefined` is empty */
function hasValue$1(value) {
  return value !== undefined;
}

/**
 * Similar to `useState` but will use props value if provided.
 * Note that internal use rc-util `useState` hook.
 */
function useMergedState(defaultStateValue, option) {
  var _ref = option || {},
    defaultValue = _ref.defaultValue,
    value = _ref.value,
    onChange = _ref.onChange,
    postState = _ref.postState;

  // ======================= Init =======================
  var _useState = useSafeState(function () {
      if (hasValue$1(value)) {
        return value;
      } else if (hasValue$1(defaultValue)) {
        return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
      } else {
        return typeof defaultStateValue === 'function' ? defaultStateValue() : defaultStateValue;
      }
    }),
    _useState2 = _slicedToArray(_useState, 2),
    innerValue = _useState2[0],
    setInnerValue = _useState2[1];
  var mergedValue = value !== undefined ? value : innerValue;
  var postMergedValue = postState ? postState(mergedValue) : mergedValue;

  // ====================== Change ======================
  var onChangeFn = useEvent(onChange);
  var _useState3 = useSafeState([mergedValue]),
    _useState4 = _slicedToArray(_useState3, 2),
    prevValue = _useState4[0],
    setPrevValue = _useState4[1];
  useLayoutUpdateEffect(function () {
    var prev = prevValue[0];
    if (innerValue !== prev) {
      onChangeFn(innerValue, prev);
    }
  }, [prevValue]);

  // Sync value back to `undefined` when it from control to un-control
  useLayoutUpdateEffect(function () {
    if (!hasValue$1(value)) {
      setInnerValue(value);
    }
  }, [value]);

  // ====================== Update ======================
  var triggerChange = useEvent(function (updater, ignoreDestroy) {
    setInnerValue(updater, ignoreDestroy);
    setPrevValue([mergedValue], ignoreDestroy);
  });
  return [postMergedValue, triggerChange];
}

const defaultIconPrefixCls = 'anticon';
const defaultGetPrefixCls = (suffixCls, customizePrefixCls) => {
  if (customizePrefixCls) {
    return customizePrefixCls;
  }
  return suffixCls ? `ant-${suffixCls}` : 'ant';
};
// zombieJ: 🚨 Do not pass `defaultRenderEmpty` here since it will cause circular dependency.
const ConfigContext = /*#__PURE__*/React.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: defaultGetPrefixCls,
  iconPrefixCls: defaultIconPrefixCls
});

const roundedArrow = (width, innerRadius, outerRadius, bgColor, boxShadow) => {
  const unitWidth = width / 2;
  const ax = 0;
  const ay = unitWidth;
  const bx = outerRadius * 1 / Math.sqrt(2);
  const by = unitWidth - outerRadius * (1 - 1 / Math.sqrt(2));
  const cx = unitWidth - innerRadius * (1 / Math.sqrt(2));
  const cy = outerRadius * (Math.sqrt(2) - 1) + innerRadius * (1 / Math.sqrt(2));
  const dx = 2 * unitWidth - cx;
  const dy = cy;
  const ex = 2 * unitWidth - bx;
  const ey = by;
  const fx = 2 * unitWidth - ax;
  const fy = ay;
  const shadowWidth = unitWidth * Math.sqrt(2) + outerRadius * (Math.sqrt(2) - 2);
  const polygonOffset = outerRadius * (Math.sqrt(2) - 1);
  return {
    pointerEvents: 'none',
    width,
    height: width,
    overflow: 'hidden',
    '&::before': {
      position: 'absolute',
      bottom: 0,
      insetInlineStart: 0,
      width,
      height: width / 2,
      background: bgColor,
      clipPath: {
        _multi_value_: true,
        value: [`polygon(${polygonOffset}px 100%, 50% ${polygonOffset}px, ${2 * unitWidth - polygonOffset}px 100%, ${polygonOffset}px 100%)`, `path('M ${ax} ${ay} A ${outerRadius} ${outerRadius} 0 0 0 ${bx} ${by} L ${cx} ${cy} A ${innerRadius} ${innerRadius} 0 0 1 ${dx} ${dy} L ${ex} ${ey} A ${outerRadius} ${outerRadius} 0 0 0 ${fx} ${fy} Z')`]
      },
      content: '""'
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      width: shadowWidth,
      height: shadowWidth,
      bottom: 0,
      insetInline: 0,
      margin: 'auto',
      borderRadius: {
        _skip_check_: true,
        value: `0 0 ${innerRadius}px 0`
      },
      transform: 'translateY(50%) rotate(-135deg)',
      boxShadow,
      zIndex: 0,
      background: 'transparent'
    }
  };
};

const textEllipsis = {
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis'
};
const resetComponent = token => ({
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  color: token.colorText,
  fontSize: token.fontSize,
  // font-variant: @font-variant-base;
  lineHeight: token.lineHeight,
  listStyle: 'none',
  // font-feature-settings: @font-feature-settings-base;
  fontFamily: token.fontFamily
});
const resetIcon = () => ({
  display: 'inline-flex',
  alignItems: 'center',
  color: 'inherit',
  fontStyle: 'normal',
  lineHeight: 0,
  textAlign: 'center',
  textTransform: 'none',
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: '-0.125em',
  textRendering: 'optimizeLegibility',
  '-webkit-font-smoothing': 'antialiased',
  '-moz-osx-font-smoothing': 'grayscale',
  '> *': {
    lineHeight: 1
  },
  svg: {
    display: 'inline-block'
  }
});
const genLinkStyle = token => ({
  a: {
    color: token.colorLink,
    textDecoration: token.linkDecoration,
    backgroundColor: 'transparent',
    outline: 'none',
    cursor: 'pointer',
    transition: `color ${token.motionDurationSlow}`,
    '-webkit-text-decoration-skip': 'objects',
    '&:hover': {
      color: token.colorLinkHover
    },
    '&:active': {
      color: token.colorLinkActive
    },
    [`&:active,
  &:hover`]: {
      textDecoration: token.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    '&:focus': {
      textDecoration: token.linkFocusDecoration,
      outline: 0
    },
    '&[disabled]': {
      color: token.colorTextDisabled,
      cursor: 'not-allowed'
    }
  }
});
const genCommonStyle = (token, componentPrefixCls) => {
  const {
    fontFamily,
    fontSize
  } = token;
  const rootPrefixSelector = `[class^="${componentPrefixCls}"], [class*=" ${componentPrefixCls}"]`;
  return {
    [rootPrefixSelector]: {
      fontFamily,
      fontSize,
      boxSizing: 'border-box',
      '&::before, &::after': {
        boxSizing: 'border-box'
      },
      [rootPrefixSelector]: {
        boxSizing: 'border-box',
        '&::before, &::after': {
          boxSizing: 'border-box'
        }
      }
    }
  };
};

const enableStatistic = process.env.NODE_ENV !== 'production' || typeof CSSINJS_STATISTIC !== 'undefined';
let recording = true;
/**
 * This function will do as `Object.assign` in production. But will use Object.defineProperty:get to
 * pass all value access in development. To support statistic field usage with alias token.
 */
function merge() {
  for (var _len = arguments.length, objs = new Array(_len), _key = 0; _key < _len; _key++) {
    objs[_key] = arguments[_key];
  }
  /* istanbul ignore next */
  if (!enableStatistic) {
    return Object.assign.apply(Object, [{}].concat(objs));
  }
  recording = false;
  const ret = {};
  objs.forEach(obj => {
    const keys = Object.keys(obj);
    keys.forEach(key => {
      Object.defineProperty(ret, key, {
        configurable: true,
        enumerable: true,
        get: () => obj[key]
      });
    });
  });
  recording = true;
  return ret;
}
/** @internal Internal Usage. Not use in your production. */
const statistic = {};
/* istanbul ignore next */
function noop() {}
/** Statistic token usage case. Should use `merge` function if you do not want spread record. */
function statisticToken(token) {
  let tokenKeys;
  let proxy = token;
  let flush = noop;
  if (enableStatistic) {
    tokenKeys = new Set();
    proxy = new Proxy(token, {
      get(obj, prop) {
        if (recording) {
          tokenKeys.add(prop);
        }
        return obj[prop];
      }
    });
    flush = (componentName, componentToken) => {
      var _a;
      statistic[componentName] = {
        global: Array.from(tokenKeys),
        component: Object.assign(Object.assign({}, (_a = statistic[componentName]) === null || _a === void 0 ? void 0 : _a.component), componentToken)
      };
    };
  }
  return {
    token: proxy,
    keys: tokenKeys,
    flush
  };
}

const useResetIconStyle = (iconPrefixCls, csp) => {
  const [theme, token] = useToken();
  // Generate style for icons
  return useStyleRegister({
    theme,
    token,
    hashId: '',
    path: ['ant-design-icons', iconPrefixCls],
    nonce: () => csp === null || csp === void 0 ? void 0 : csp.nonce
  }, () => [{
    [`.${iconPrefixCls}`]: Object.assign(Object.assign({}, resetIcon()), {
      [`.${iconPrefixCls} .${iconPrefixCls}-icon`]: {
        display: 'block'
      }
    })
  }]);
};
var useStyle$4 = useResetIconStyle;

/* eslint-disable no-redeclare */
function genComponentStyleHook(componentName, styleFn, getDefaultToken) {
  let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  const cells = Array.isArray(componentName) ? componentName : [componentName, componentName];
  const [component] = cells;
  const concatComponent = cells.join('-');
  return prefixCls => {
    const [theme, token, hashId] = useToken();
    const {
      getPrefixCls,
      iconPrefixCls,
      csp
    } = useContext(ConfigContext);
    const rootPrefixCls = getPrefixCls();
    // Shared config
    const sharedConfig = {
      theme,
      token,
      hashId,
      nonce: () => csp === null || csp === void 0 ? void 0 : csp.nonce,
      clientOnly: options.clientOnly,
      // antd is always at top of styles
      order: options.order || -999
    };
    // Generate style for all a tags in antd component.
    useStyleRegister(Object.assign(Object.assign({}, sharedConfig), {
      clientOnly: false,
      path: ['Shared', rootPrefixCls]
    }), () => [{
      // Link
      '&': genLinkStyle(token)
    }]);
    // Generate style for icons
    useStyle$4(iconPrefixCls);
    return [useStyleRegister(Object.assign(Object.assign({}, sharedConfig), {
      path: [concatComponent, prefixCls, iconPrefixCls]
    }), () => {
      const {
        token: proxyToken,
        flush
      } = statisticToken(token);
      const customComponentToken = Object.assign({}, token[component]);
      if (options.deprecatedTokens) {
        const {
          deprecatedTokens
        } = options;
        deprecatedTokens.forEach(_ref => {
          let [oldTokenKey, newTokenKey] = _ref;
          var _a;
          if (process.env.NODE_ENV !== 'production') {
            process.env.NODE_ENV !== "production" ? warningOnce(!(customComponentToken === null || customComponentToken === void 0 ? void 0 : customComponentToken[oldTokenKey]), `The token '${String(oldTokenKey)}' of ${component} had deprecated, use '${String(newTokenKey)}' instead.`) : void 0;
          }
          // Should wrap with `if` clause, or there will be `undefined` in object.
          if ((customComponentToken === null || customComponentToken === void 0 ? void 0 : customComponentToken[oldTokenKey]) || (customComponentToken === null || customComponentToken === void 0 ? void 0 : customComponentToken[newTokenKey])) {
            (_a = customComponentToken[newTokenKey]) !== null && _a !== void 0 ? _a : customComponentToken[newTokenKey] = customComponentToken === null || customComponentToken === void 0 ? void 0 : customComponentToken[oldTokenKey];
          }
        });
      }
      const defaultComponentToken = typeof getDefaultToken === 'function' ? getDefaultToken(merge(proxyToken, customComponentToken !== null && customComponentToken !== void 0 ? customComponentToken : {})) : getDefaultToken;
      const mergedComponentToken = Object.assign(Object.assign({}, defaultComponentToken), customComponentToken);
      const componentCls = `.${prefixCls}`;
      const mergedToken = merge(proxyToken, {
        componentCls,
        prefixCls,
        iconCls: `.${iconPrefixCls}`,
        antCls: `.${rootPrefixCls}`
      }, mergedComponentToken);
      const styleInterpolation = styleFn(mergedToken, {
        hashId,
        prefixCls,
        rootPrefixCls,
        iconPrefixCls,
        overrideComponentToken: customComponentToken
      });
      flush(component, mergedComponentToken);
      return [options.resetStyle === false ? null : genCommonStyle(token, prefixCls), styleInterpolation];
    }), hashId];
  };
}

function genPresetColor(token, genCss) {
  return PresetColors.reduce((prev, colorKey) => {
    const lightColor = token[`${colorKey}1`];
    const lightBorderColor = token[`${colorKey}3`];
    const darkColor = token[`${colorKey}6`];
    const textColor = token[`${colorKey}7`];
    return Object.assign(Object.assign({}, prev), genCss(colorKey, {
      lightColor,
      lightBorderColor,
      darkColor,
      textColor
    }));
  }, {});
}

/* eslint-disable import/prefer-default-export, prefer-destructuring */
const dynamicStyleMark = `-ant-${Date.now()}-${Math.random()}`;
function getStyle(globalPrefixCls, theme) {
  const variables = {};
  const formatColor = (color, updater) => {
    let clone = color.clone();
    clone = (updater === null || updater === void 0 ? void 0 : updater(clone)) || clone;
    return clone.toRgbString();
  };
  const fillColor = (colorVal, type) => {
    const baseColor = new TinyColor(colorVal);
    const colorPalettes = generate$1(baseColor.toRgbString());
    variables[`${type}-color`] = formatColor(baseColor);
    variables[`${type}-color-disabled`] = colorPalettes[1];
    variables[`${type}-color-hover`] = colorPalettes[4];
    variables[`${type}-color-active`] = colorPalettes[6];
    variables[`${type}-color-outline`] = baseColor.clone().setAlpha(0.2).toRgbString();
    variables[`${type}-color-deprecated-bg`] = colorPalettes[0];
    variables[`${type}-color-deprecated-border`] = colorPalettes[2];
  };
  // ================ Primary Color ================
  if (theme.primaryColor) {
    fillColor(theme.primaryColor, 'primary');
    const primaryColor = new TinyColor(theme.primaryColor);
    const primaryColors = generate$1(primaryColor.toRgbString());
    // Legacy - We should use semantic naming standard
    primaryColors.forEach((color, index) => {
      variables[`primary-${index + 1}`] = color;
    });
    // Deprecated
    variables['primary-color-deprecated-l-35'] = formatColor(primaryColor, c => c.lighten(35));
    variables['primary-color-deprecated-l-20'] = formatColor(primaryColor, c => c.lighten(20));
    variables['primary-color-deprecated-t-20'] = formatColor(primaryColor, c => c.tint(20));
    variables['primary-color-deprecated-t-50'] = formatColor(primaryColor, c => c.tint(50));
    variables['primary-color-deprecated-f-12'] = formatColor(primaryColor, c => c.setAlpha(c.getAlpha() * 0.12));
    const primaryActiveColor = new TinyColor(primaryColors[0]);
    variables['primary-color-active-deprecated-f-30'] = formatColor(primaryActiveColor, c => c.setAlpha(c.getAlpha() * 0.3));
    variables['primary-color-active-deprecated-d-02'] = formatColor(primaryActiveColor, c => c.darken(2));
  }
  // ================ Success Color ================
  if (theme.successColor) {
    fillColor(theme.successColor, 'success');
  }
  // ================ Warning Color ================
  if (theme.warningColor) {
    fillColor(theme.warningColor, 'warning');
  }
  // ================= Error Color =================
  if (theme.errorColor) {
    fillColor(theme.errorColor, 'error');
  }
  // ================= Info Color ==================
  if (theme.infoColor) {
    fillColor(theme.infoColor, 'info');
  }
  // Convert to css variables
  const cssList = Object.keys(variables).map(key => `--${globalPrefixCls}-${key}: ${variables[key]};`);
  return `
  :root {
    ${cssList.join('\n')}
  }
  `.trim();
}
function registerTheme(globalPrefixCls, theme) {
  const style = getStyle(globalPrefixCls, theme);
  if (canUseDom()) {
    updateCSS(style, `${dynamicStyleMark}-dynamic-theme`);
  } else {
    process.env.NODE_ENV !== "production" ? warning$3(false, 'ConfigProvider', 'SSR do not support dynamic theme with css variables.') : void 0;
  }
}

const DisabledContext = /*#__PURE__*/React.createContext(false);
const DisabledContextProvider = _ref => {
  let {
    children,
    disabled
  } = _ref;
  const originDisabled = React.useContext(DisabledContext);
  return /*#__PURE__*/React.createElement(DisabledContext.Provider, {
    value: disabled !== null && disabled !== void 0 ? disabled : originDisabled
  }, children);
};
var DisabledContext$1 = DisabledContext;

const SizeContext = /*#__PURE__*/React.createContext(undefined);
const SizeContextProvider = _ref => {
  let {
    children,
    size
  } = _ref;
  const originSize = React.useContext(SizeContext);
  return /*#__PURE__*/React.createElement(SizeContext.Provider, {
    value: size || originSize
  }, children);
};
var SizeContext$1 = SizeContext;

function useConfig() {
  const componentDisabled = useContext(DisabledContext$1);
  const componentSize = useContext(SizeContext$1);
  return {
    componentDisabled,
    componentSize
  };
}

function useTheme(theme, parentTheme) {
  const themeConfig = theme || {};
  const parentThemeConfig = themeConfig.inherit === false || !parentTheme ? defaultConfig : parentTheme;
  return useMemo(() => {
    if (!theme) {
      return parentTheme;
    }
    // Override
    const mergedComponents = Object.assign({}, parentThemeConfig.components);
    Object.keys(theme.components || {}).forEach(componentName => {
      mergedComponents[componentName] = Object.assign(Object.assign({}, mergedComponents[componentName]), theme.components[componentName]);
    });
    // Base token
    return Object.assign(Object.assign(Object.assign({}, parentThemeConfig), themeConfig), {
      token: Object.assign(Object.assign({}, parentThemeConfig.token), themeConfig.token),
      components: mergedComponents
    });
  }, [themeConfig, parentThemeConfig], (prev, next) => prev.some((prevTheme, index) => {
    const nextTheme = next[index];
    return !isEqual(prevTheme, nextTheme, true);
  }));
}

var _excluded$i = ["children"];
var Context$1 = /*#__PURE__*/React.createContext({});
function MotionProvider(_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded$i);
  return /*#__PURE__*/React.createElement(Context$1.Provider, {
    value: props
  }, children);
}

var DomWrapper = /*#__PURE__*/function (_React$Component) {
  _inherits(DomWrapper, _React$Component);
  var _super = _createSuper(DomWrapper);
  function DomWrapper() {
    _classCallCheck(this, DomWrapper);
    return _super.apply(this, arguments);
  }
  _createClass(DomWrapper, [{
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return DomWrapper;
}(React.Component);

var STATUS_NONE = 'none';
var STATUS_APPEAR = 'appear';
var STATUS_ENTER = 'enter';
var STATUS_LEAVE = 'leave';
var STEP_NONE = 'none';
var STEP_PREPARE = 'prepare';
var STEP_START = 'start';
var STEP_ACTIVE = 'active';
var STEP_ACTIVATED = 'end';
/**
 * Used for disabled motion case.
 * Prepare stage will still work but start & active will be skipped.
 */
var STEP_PREPARED = 'prepared';

// ================= Transition =================
// Event wrapper. Copy from react source code
function makePrefixMap(styleProp, eventName) {
  var prefixes = {};
  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
  prefixes["Webkit".concat(styleProp)] = "webkit".concat(eventName);
  prefixes["Moz".concat(styleProp)] = "moz".concat(eventName);
  prefixes["ms".concat(styleProp)] = "MS".concat(eventName);
  prefixes["O".concat(styleProp)] = "o".concat(eventName.toLowerCase());
  return prefixes;
}
function getVendorPrefixes(domSupport, win) {
  var prefixes = {
    animationend: makePrefixMap('Animation', 'AnimationEnd'),
    transitionend: makePrefixMap('Transition', 'TransitionEnd')
  };
  if (domSupport) {
    if (!('AnimationEvent' in win)) {
      delete prefixes.animationend.animation;
    }
    if (!('TransitionEvent' in win)) {
      delete prefixes.transitionend.transition;
    }
  }
  return prefixes;
}
var vendorPrefixes = getVendorPrefixes(canUseDom(), typeof window !== 'undefined' ? window : {});
var style = {};
if (canUseDom()) {
  var _document$createEleme = document.createElement('div');
  style = _document$createEleme.style;
}
var prefixedEventNames = {};
function getVendorPrefixedEventName(eventName) {
  if (prefixedEventNames[eventName]) {
    return prefixedEventNames[eventName];
  }
  var prefixMap = vendorPrefixes[eventName];
  if (prefixMap) {
    var stylePropList = Object.keys(prefixMap);
    var len = stylePropList.length;
    for (var i = 0; i < len; i += 1) {
      var styleProp = stylePropList[i];
      if (Object.prototype.hasOwnProperty.call(prefixMap, styleProp) && styleProp in style) {
        prefixedEventNames[eventName] = prefixMap[styleProp];
        return prefixedEventNames[eventName];
      }
    }
  }
  return '';
}
var internalAnimationEndName = getVendorPrefixedEventName('animationend');
var internalTransitionEndName = getVendorPrefixedEventName('transitionend');
var supportTransition = !!(internalAnimationEndName && internalTransitionEndName);
var animationEndName = internalAnimationEndName || 'animationend';
var transitionEndName = internalTransitionEndName || 'transitionend';
function getTransitionName$1(transitionName, transitionType) {
  if (!transitionName) return null;
  if (_typeof(transitionName) === 'object') {
    var type = transitionType.replace(/-\w/g, function (match) {
      return match[1].toUpperCase();
    });
    return transitionName[type];
  }
  return "".concat(transitionName, "-").concat(transitionType);
}

var useDomMotionEvents = (function (callback) {
  var cacheElementRef = useRef();

  // Cache callback
  var callbackRef = useRef(callback);
  callbackRef.current = callback;

  // Internal motion event handler
  var onInternalMotionEnd = React.useCallback(function (event) {
    callbackRef.current(event);
  }, []);

  // Remove events
  function removeMotionEvents(element) {
    if (element) {
      element.removeEventListener(transitionEndName, onInternalMotionEnd);
      element.removeEventListener(animationEndName, onInternalMotionEnd);
    }
  }

  // Patch events
  function patchMotionEvents(element) {
    if (cacheElementRef.current && cacheElementRef.current !== element) {
      removeMotionEvents(cacheElementRef.current);
    }
    if (element && element !== cacheElementRef.current) {
      element.addEventListener(transitionEndName, onInternalMotionEnd);
      element.addEventListener(animationEndName, onInternalMotionEnd);

      // Save as cache in case dom removed trigger by `motionDeadline`
      cacheElementRef.current = element;
    }
  }

  // Clean up when removed
  React.useEffect(function () {
    return function () {
      removeMotionEvents(cacheElementRef.current);
    };
  }, []);
  return [patchMotionEvents, removeMotionEvents];
});

// It's safe to use `useLayoutEffect` but the warning is annoying
var useIsomorphicLayoutEffect = canUseDom() ? useLayoutEffect$2 : useEffect;

var useNextFrame = (function () {
  var nextFrameRef = React.useRef(null);
  function cancelNextFrame() {
    wrapperRaf.cancel(nextFrameRef.current);
  }
  function nextFrame(callback) {
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    cancelNextFrame();
    var nextFrameId = wrapperRaf(function () {
      if (delay <= 1) {
        callback({
          isCanceled: function isCanceled() {
            return nextFrameId !== nextFrameRef.current;
          }
        });
      } else {
        nextFrame(callback, delay - 1);
      }
    });
    nextFrameRef.current = nextFrameId;
  }
  React.useEffect(function () {
    return function () {
      cancelNextFrame();
    };
  }, []);
  return [nextFrame, cancelNextFrame];
});

var FULL_STEP_QUEUE = [STEP_PREPARE, STEP_START, STEP_ACTIVE, STEP_ACTIVATED];
var SIMPLE_STEP_QUEUE = [STEP_PREPARE, STEP_PREPARED];

/** Skip current step */
var SkipStep = false;
/** Current step should be update in */
var DoStep = true;
function isActive(step) {
  return step === STEP_ACTIVE || step === STEP_ACTIVATED;
}
var useStepQueue = (function (status, prepareOnly, callback) {
  var _useState = useSafeState(STEP_NONE),
    _useState2 = _slicedToArray(_useState, 2),
    step = _useState2[0],
    setStep = _useState2[1];
  var _useNextFrame = useNextFrame(),
    _useNextFrame2 = _slicedToArray(_useNextFrame, 2),
    nextFrame = _useNextFrame2[0],
    cancelNextFrame = _useNextFrame2[1];
  function startQueue() {
    setStep(STEP_PREPARE, true);
  }
  var STEP_QUEUE = prepareOnly ? SIMPLE_STEP_QUEUE : FULL_STEP_QUEUE;
  useIsomorphicLayoutEffect(function () {
    if (step !== STEP_NONE && step !== STEP_ACTIVATED) {
      var index = STEP_QUEUE.indexOf(step);
      var nextStep = STEP_QUEUE[index + 1];
      var result = callback(step);
      if (result === SkipStep) {
        // Skip when no needed
        setStep(nextStep, true);
      } else if (nextStep) {
        // Do as frame for step update
        nextFrame(function (info) {
          function doNext() {
            // Skip since current queue is ood
            if (info.isCanceled()) return;
            setStep(nextStep, true);
          }
          if (result === true) {
            doNext();
          } else {
            // Only promise should be async
            Promise.resolve(result).then(doNext);
          }
        });
      }
    }
  }, [status, step]);
  React.useEffect(function () {
    return function () {
      cancelNextFrame();
    };
  }, []);
  return [startQueue, step];
});

function useStatus(supportMotion, visible, getElement, _ref) {
  var _ref$motionEnter = _ref.motionEnter,
    motionEnter = _ref$motionEnter === void 0 ? true : _ref$motionEnter,
    _ref$motionAppear = _ref.motionAppear,
    motionAppear = _ref$motionAppear === void 0 ? true : _ref$motionAppear,
    _ref$motionLeave = _ref.motionLeave,
    motionLeave = _ref$motionLeave === void 0 ? true : _ref$motionLeave,
    motionDeadline = _ref.motionDeadline,
    motionLeaveImmediately = _ref.motionLeaveImmediately,
    onAppearPrepare = _ref.onAppearPrepare,
    onEnterPrepare = _ref.onEnterPrepare,
    onLeavePrepare = _ref.onLeavePrepare,
    onAppearStart = _ref.onAppearStart,
    onEnterStart = _ref.onEnterStart,
    onLeaveStart = _ref.onLeaveStart,
    onAppearActive = _ref.onAppearActive,
    onEnterActive = _ref.onEnterActive,
    onLeaveActive = _ref.onLeaveActive,
    onAppearEnd = _ref.onAppearEnd,
    onEnterEnd = _ref.onEnterEnd,
    onLeaveEnd = _ref.onLeaveEnd,
    onVisibleChanged = _ref.onVisibleChanged;
  // Used for outer render usage to avoid `visible: false & status: none` to render nothing
  var _useState = useSafeState(),
    _useState2 = _slicedToArray(_useState, 2),
    asyncVisible = _useState2[0],
    setAsyncVisible = _useState2[1];
  var _useState3 = useSafeState(STATUS_NONE),
    _useState4 = _slicedToArray(_useState3, 2),
    status = _useState4[0],
    setStatus = _useState4[1];
  var _useState5 = useSafeState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    style = _useState6[0],
    setStyle = _useState6[1];
  var mountedRef = useRef(false);
  var deadlineRef = useRef(null);

  // =========================== Dom Node ===========================
  function getDomElement() {
    return getElement();
  }

  // ========================== Motion End ==========================
  var activeRef = useRef(false);

  /**
   * Clean up status & style
   */
  function updateMotionEndStatus() {
    setStatus(STATUS_NONE, true);
    setStyle(null, true);
  }
  function onInternalMotionEnd(event) {
    var element = getDomElement();
    if (event && !event.deadline && event.target !== element) {
      // event exists
      // not initiated by deadline
      // transitionEnd not fired by inner elements
      return;
    }
    var currentActive = activeRef.current;
    var canEnd;
    if (status === STATUS_APPEAR && currentActive) {
      canEnd = onAppearEnd === null || onAppearEnd === void 0 ? void 0 : onAppearEnd(element, event);
    } else if (status === STATUS_ENTER && currentActive) {
      canEnd = onEnterEnd === null || onEnterEnd === void 0 ? void 0 : onEnterEnd(element, event);
    } else if (status === STATUS_LEAVE && currentActive) {
      canEnd = onLeaveEnd === null || onLeaveEnd === void 0 ? void 0 : onLeaveEnd(element, event);
    }

    // Only update status when `canEnd` and not destroyed
    if (status !== STATUS_NONE && currentActive && canEnd !== false) {
      updateMotionEndStatus();
    }
  }
  var _useDomMotionEvents = useDomMotionEvents(onInternalMotionEnd),
    _useDomMotionEvents2 = _slicedToArray(_useDomMotionEvents, 1),
    patchMotionEvents = _useDomMotionEvents2[0];

  // ============================= Step =============================
  var getEventHandlers = function getEventHandlers(targetStatus) {
    var _ref2, _ref3, _ref4;
    switch (targetStatus) {
      case STATUS_APPEAR:
        return _ref2 = {}, _defineProperty(_ref2, STEP_PREPARE, onAppearPrepare), _defineProperty(_ref2, STEP_START, onAppearStart), _defineProperty(_ref2, STEP_ACTIVE, onAppearActive), _ref2;
      case STATUS_ENTER:
        return _ref3 = {}, _defineProperty(_ref3, STEP_PREPARE, onEnterPrepare), _defineProperty(_ref3, STEP_START, onEnterStart), _defineProperty(_ref3, STEP_ACTIVE, onEnterActive), _ref3;
      case STATUS_LEAVE:
        return _ref4 = {}, _defineProperty(_ref4, STEP_PREPARE, onLeavePrepare), _defineProperty(_ref4, STEP_START, onLeaveStart), _defineProperty(_ref4, STEP_ACTIVE, onLeaveActive), _ref4;
      default:
        return {};
    }
  };
  var eventHandlers = React.useMemo(function () {
    return getEventHandlers(status);
  }, [status]);
  var _useStepQueue = useStepQueue(status, !supportMotion, function (newStep) {
      // Only prepare step can be skip
      if (newStep === STEP_PREPARE) {
        var onPrepare = eventHandlers[STEP_PREPARE];
        if (!onPrepare) {
          return SkipStep;
        }
        return onPrepare(getDomElement());
      }

      // Rest step is sync update
      if (step in eventHandlers) {
        var _eventHandlers$step;
        setStyle(((_eventHandlers$step = eventHandlers[step]) === null || _eventHandlers$step === void 0 ? void 0 : _eventHandlers$step.call(eventHandlers, getDomElement(), null)) || null);
      }
      if (step === STEP_ACTIVE) {
        // Patch events when motion needed
        patchMotionEvents(getDomElement());
        if (motionDeadline > 0) {
          clearTimeout(deadlineRef.current);
          deadlineRef.current = setTimeout(function () {
            onInternalMotionEnd({
              deadline: true
            });
          }, motionDeadline);
        }
      }
      if (step === STEP_PREPARED) {
        updateMotionEndStatus();
      }
      return DoStep;
    }),
    _useStepQueue2 = _slicedToArray(_useStepQueue, 2),
    startStep = _useStepQueue2[0],
    step = _useStepQueue2[1];
  var active = isActive(step);
  activeRef.current = active;

  // ============================ Status ============================
  // Update with new status
  useIsomorphicLayoutEffect(function () {
    setAsyncVisible(visible);
    var isMounted = mountedRef.current;
    mountedRef.current = true;

    // if (!supportMotion) {
    //   return;
    // }

    var nextStatus;

    // Appear
    if (!isMounted && visible && motionAppear) {
      nextStatus = STATUS_APPEAR;
    }

    // Enter
    if (isMounted && visible && motionEnter) {
      nextStatus = STATUS_ENTER;
    }

    // Leave
    if (isMounted && !visible && motionLeave || !isMounted && motionLeaveImmediately && !visible && motionLeave) {
      nextStatus = STATUS_LEAVE;
    }
    var nextEventHandlers = getEventHandlers(nextStatus);

    // Update to next status
    if (nextStatus && (supportMotion || nextEventHandlers[STEP_PREPARE])) {
      setStatus(nextStatus);
      startStep();
    } else {
      // Set back in case no motion but prev status has prepare step
      setStatus(STATUS_NONE);
    }
  }, [visible]);

  // ============================ Effect ============================
  // Reset when motion changed
  useEffect(function () {
    if (
    // Cancel appear
    status === STATUS_APPEAR && !motionAppear ||
    // Cancel enter
    status === STATUS_ENTER && !motionEnter ||
    // Cancel leave
    status === STATUS_LEAVE && !motionLeave) {
      setStatus(STATUS_NONE);
    }
  }, [motionAppear, motionEnter, motionLeave]);
  useEffect(function () {
    return function () {
      mountedRef.current = false;
      clearTimeout(deadlineRef.current);
    };
  }, []);

  // Trigger `onVisibleChanged`
  var firstMountChangeRef = React.useRef(false);
  useEffect(function () {
    // [visible & motion not end] => [!visible & motion end] still need trigger onVisibleChanged
    if (asyncVisible) {
      firstMountChangeRef.current = true;
    }
    if (asyncVisible !== undefined && status === STATUS_NONE) {
      // Skip first render is invisible since it's nothing changed
      if (firstMountChangeRef.current || asyncVisible) {
        onVisibleChanged === null || onVisibleChanged === void 0 ? void 0 : onVisibleChanged(asyncVisible);
      }
      firstMountChangeRef.current = true;
    }
  }, [asyncVisible, status]);

  // ============================ Styles ============================
  var mergedStyle = style;
  if (eventHandlers[STEP_PREPARE] && step === STEP_START) {
    mergedStyle = _objectSpread2({
      transition: 'none'
    }, mergedStyle);
  }
  return [status, step, mergedStyle, asyncVisible !== null && asyncVisible !== void 0 ? asyncVisible : visible];
}

/**
 * `transitionSupport` is used for none transition test case.
 * Default we use browser transition event support check.
 */
function genCSSMotion(config) {
  var transitionSupport = config;
  if (_typeof(config) === 'object') {
    transitionSupport = config.transitionSupport;
  }
  function isSupportTransition(props, contextMotion) {
    return !!(props.motionName && transitionSupport && contextMotion !== false);
  }
  var CSSMotion = /*#__PURE__*/React.forwardRef(function (props, ref) {
    var _props$visible = props.visible,
      visible = _props$visible === void 0 ? true : _props$visible,
      _props$removeOnLeave = props.removeOnLeave,
      removeOnLeave = _props$removeOnLeave === void 0 ? true : _props$removeOnLeave,
      forceRender = props.forceRender,
      children = props.children,
      motionName = props.motionName,
      leavedClassName = props.leavedClassName,
      eventProps = props.eventProps;
    var _React$useContext = React.useContext(Context$1),
      contextMotion = _React$useContext.motion;
    var supportMotion = isSupportTransition(props, contextMotion);

    // Ref to the react node, it may be a HTMLElement
    var nodeRef = useRef();
    // Ref to the dom wrapper in case ref can not pass to HTMLElement
    var wrapperNodeRef = useRef();
    function getDomElement() {
      try {
        // Here we're avoiding call for findDOMNode since it's deprecated
        // in strict mode. We're calling it only when node ref is not
        // an instance of DOM HTMLElement. Otherwise use
        // findDOMNode as a final resort
        return nodeRef.current instanceof HTMLElement ? nodeRef.current : findDOMNode(wrapperNodeRef.current);
      } catch (e) {
        // Only happen when `motionDeadline` trigger but element removed.
        return null;
      }
    }
    var _useStatus = useStatus(supportMotion, visible, getDomElement, props),
      _useStatus2 = _slicedToArray(_useStatus, 4),
      status = _useStatus2[0],
      statusStep = _useStatus2[1],
      statusStyle = _useStatus2[2],
      mergedVisible = _useStatus2[3];

    // Record whether content has rendered
    // Will return null for un-rendered even when `removeOnLeave={false}`
    var renderedRef = React.useRef(mergedVisible);
    if (mergedVisible) {
      renderedRef.current = true;
    }

    // ====================== Refs ======================
    var setNodeRef = React.useCallback(function (node) {
      nodeRef.current = node;
      fillRef(ref, node);
    }, [ref]);

    // ===================== Render =====================
    var motionChildren;
    var mergedProps = _objectSpread2(_objectSpread2({}, eventProps), {}, {
      visible: visible
    });
    if (!children) {
      // No children
      motionChildren = null;
    } else if (status === STATUS_NONE) {
      // Stable children
      if (mergedVisible) {
        motionChildren = children(_objectSpread2({}, mergedProps), setNodeRef);
      } else if (!removeOnLeave && renderedRef.current && leavedClassName) {
        motionChildren = children(_objectSpread2(_objectSpread2({}, mergedProps), {}, {
          className: leavedClassName
        }), setNodeRef);
      } else if (forceRender || !removeOnLeave && !leavedClassName) {
        motionChildren = children(_objectSpread2(_objectSpread2({}, mergedProps), {}, {
          style: {
            display: 'none'
          }
        }), setNodeRef);
      } else {
        motionChildren = null;
      }
    } else {
      var _classNames;
      // In motion
      var statusSuffix;
      if (statusStep === STEP_PREPARE) {
        statusSuffix = 'prepare';
      } else if (isActive(statusStep)) {
        statusSuffix = 'active';
      } else if (statusStep === STEP_START) {
        statusSuffix = 'start';
      }
      var motionCls = getTransitionName$1(motionName, "".concat(status, "-").concat(statusSuffix));
      motionChildren = children(_objectSpread2(_objectSpread2({}, mergedProps), {}, {
        className: classNames(getTransitionName$1(motionName, status), (_classNames = {}, _defineProperty(_classNames, motionCls, motionCls && statusSuffix), _defineProperty(_classNames, motionName, typeof motionName === 'string'), _classNames)),
        style: statusStyle
      }), setNodeRef);
    }

    // Auto inject ref if child node not have `ref` props
    if ( /*#__PURE__*/React.isValidElement(motionChildren) && supportRef(motionChildren)) {
      var _ref = motionChildren,
        originNodeRef = _ref.ref;
      if (!originNodeRef) {
        motionChildren = /*#__PURE__*/React.cloneElement(motionChildren, {
          ref: setNodeRef
        });
      }
    }
    return /*#__PURE__*/React.createElement(DomWrapper, {
      ref: wrapperNodeRef
    }, motionChildren);
  });
  CSSMotion.displayName = 'CSSMotion';
  return CSSMotion;
}
var CSSMotion = genCSSMotion(supportTransition);

var STATUS_ADD = 'add';
var STATUS_KEEP = 'keep';
var STATUS_REMOVE = 'remove';
var STATUS_REMOVED = 'removed';
function wrapKeyToObject(key) {
  var keyObj;
  if (key && _typeof(key) === 'object' && 'key' in key) {
    keyObj = key;
  } else {
    keyObj = {
      key: key
    };
  }
  return _objectSpread2(_objectSpread2({}, keyObj), {}, {
    key: String(keyObj.key)
  });
}
function parseKeys() {
  var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return keys.map(wrapKeyToObject);
}
function diffKeys() {
  var prevKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var currentKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var list = [];
  var currentIndex = 0;
  var currentLen = currentKeys.length;
  var prevKeyObjects = parseKeys(prevKeys);
  var currentKeyObjects = parseKeys(currentKeys);

  // Check prev keys to insert or keep
  prevKeyObjects.forEach(function (keyObj) {
    var hit = false;
    for (var i = currentIndex; i < currentLen; i += 1) {
      var currentKeyObj = currentKeyObjects[i];
      if (currentKeyObj.key === keyObj.key) {
        // New added keys should add before current key
        if (currentIndex < i) {
          list = list.concat(currentKeyObjects.slice(currentIndex, i).map(function (obj) {
            return _objectSpread2(_objectSpread2({}, obj), {}, {
              status: STATUS_ADD
            });
          }));
          currentIndex = i;
        }
        list.push(_objectSpread2(_objectSpread2({}, currentKeyObj), {}, {
          status: STATUS_KEEP
        }));
        currentIndex += 1;
        hit = true;
        break;
      }
    }

    // If not hit, it means key is removed
    if (!hit) {
      list.push(_objectSpread2(_objectSpread2({}, keyObj), {}, {
        status: STATUS_REMOVE
      }));
    }
  });

  // Add rest to the list
  if (currentIndex < currentLen) {
    list = list.concat(currentKeyObjects.slice(currentIndex).map(function (obj) {
      return _objectSpread2(_objectSpread2({}, obj), {}, {
        status: STATUS_ADD
      });
    }));
  }

  /**
   * Merge same key when it remove and add again:
   *    [1 - add, 2 - keep, 1 - remove] -> [1 - keep, 2 - keep]
   */
  var keys = {};
  list.forEach(function (_ref) {
    var key = _ref.key;
    keys[key] = (keys[key] || 0) + 1;
  });
  var duplicatedKeys = Object.keys(keys).filter(function (key) {
    return keys[key] > 1;
  });
  duplicatedKeys.forEach(function (matchKey) {
    // Remove `STATUS_REMOVE` node.
    list = list.filter(function (_ref2) {
      var key = _ref2.key,
        status = _ref2.status;
      return key !== matchKey || status !== STATUS_REMOVE;
    });

    // Update `STATUS_ADD` to `STATUS_KEEP`
    list.forEach(function (node) {
      if (node.key === matchKey) {
        // eslint-disable-next-line no-param-reassign
        node.status = STATUS_KEEP;
      }
    });
  });
  return list;
}

var _excluded$h = ["component", "children", "onVisibleChanged", "onAllRemoved"],
  _excluded2$2 = ["status"];
var MOTION_PROP_NAMES = ['eventProps', 'visible', 'children', 'motionName', 'motionAppear', 'motionEnter', 'motionLeave', 'motionLeaveImmediately', 'motionDeadline', 'removeOnLeave', 'leavedClassName', 'onAppearPrepare', 'onAppearStart', 'onAppearActive', 'onAppearEnd', 'onEnterStart', 'onEnterActive', 'onEnterEnd', 'onLeaveStart', 'onLeaveActive', 'onLeaveEnd'];
/**
 * Generate a CSSMotionList component with config
 * @param transitionSupport No need since CSSMotionList no longer depends on transition support
 * @param CSSMotion CSSMotion component
 */
function genCSSMotionList(transitionSupport) {
  var CSSMotion$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CSSMotion;
  var CSSMotionList = /*#__PURE__*/function (_React$Component) {
    _inherits(CSSMotionList, _React$Component);
    var _super = _createSuper(CSSMotionList);
    function CSSMotionList() {
      var _this;
      _classCallCheck(this, CSSMotionList);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this), "state", {
        keyEntities: []
      });
      // ZombieJ: Return the count of rest keys. It's safe to refactor if need more info.
      _defineProperty(_assertThisInitialized(_this), "removeKey", function (removeKey) {
        var keyEntities = _this.state.keyEntities;
        var nextKeyEntities = keyEntities.map(function (entity) {
          if (entity.key !== removeKey) return entity;
          return _objectSpread2(_objectSpread2({}, entity), {}, {
            status: STATUS_REMOVED
          });
        });
        _this.setState({
          keyEntities: nextKeyEntities
        });
        return nextKeyEntities.filter(function (_ref) {
          var status = _ref.status;
          return status !== STATUS_REMOVED;
        }).length;
      });
      return _this;
    }
    _createClass(CSSMotionList, [{
      key: "render",
      value: function render() {
        var _this2 = this;
        var keyEntities = this.state.keyEntities;
        var _this$props = this.props,
          component = _this$props.component,
          children = _this$props.children,
          _onVisibleChanged = _this$props.onVisibleChanged,
          onAllRemoved = _this$props.onAllRemoved,
          restProps = _objectWithoutProperties(_this$props, _excluded$h);
        var Component = component || React.Fragment;
        var motionProps = {};
        MOTION_PROP_NAMES.forEach(function (prop) {
          motionProps[prop] = restProps[prop];
          delete restProps[prop];
        });
        delete restProps.keys;
        return /*#__PURE__*/React.createElement(Component, restProps, keyEntities.map(function (_ref2, index) {
          var status = _ref2.status,
            eventProps = _objectWithoutProperties(_ref2, _excluded2$2);
          var visible = status === STATUS_ADD || status === STATUS_KEEP;
          return /*#__PURE__*/React.createElement(CSSMotion$1, _extends$1({}, motionProps, {
            key: eventProps.key,
            visible: visible,
            eventProps: eventProps,
            onVisibleChanged: function onVisibleChanged(changedVisible) {
              _onVisibleChanged === null || _onVisibleChanged === void 0 ? void 0 : _onVisibleChanged(changedVisible, {
                key: eventProps.key
              });
              if (!changedVisible) {
                var restKeysCount = _this2.removeKey(eventProps.key);
                if (restKeysCount === 0 && onAllRemoved) {
                  onAllRemoved();
                }
              }
            }
          }), function (props, ref) {
            return children(_objectSpread2(_objectSpread2({}, props), {}, {
              index: index
            }), ref);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(_ref3, _ref4) {
        var keys = _ref3.keys;
        var keyEntities = _ref4.keyEntities;
        var parsedKeyObjects = parseKeys(keys);
        var mixedKeyEntities = diffKeys(keyEntities, parsedKeyObjects);
        return {
          keyEntities: mixedKeyEntities.filter(function (entity) {
            var prevEntity = keyEntities.find(function (_ref5) {
              var key = _ref5.key;
              return entity.key === key;
            });

            // Remove if already mark as removed
            if (prevEntity && prevEntity.status === STATUS_REMOVED && entity.status === STATUS_REMOVE) {
              return false;
            }
            return true;
          })
        };
      }
    }]);
    return CSSMotionList;
  }(React.Component);
  _defineProperty(CSSMotionList, "defaultProps", {
    component: 'div'
  });
  return CSSMotionList;
}
genCSSMotionList(supportTransition);

function MotionWrapper(props) {
  const {
    children
  } = props;
  const [, token] = useToken();
  const {
    motion
  } = token;
  const needWrapMotionProviderRef = React.useRef(false);
  needWrapMotionProviderRef.current = needWrapMotionProviderRef.current || motion === false;
  if (needWrapMotionProviderRef.current) {
    return /*#__PURE__*/React.createElement(MotionProvider, {
      motion: motion
    }, children);
  }
  return children;
}

var __rest$8 = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/**
 * Since too many feedback using static method like `Modal.confirm` not getting theme, we record the
 * theme register info here to help developer get warning info.
 */
let existThemeConfig = false;
process.env.NODE_ENV !== 'production' ? componentName => {
  process.env.NODE_ENV !== "production" ? warning$3(!existThemeConfig, componentName, `Static function can not consume context like dynamic theme. Please use 'App' component instead.`) : void 0;
} : /* istanbul ignore next */
null;
// These props is used by `useContext` directly in sub component
const PASSED_PROPS = ['getTargetContainer', 'getPopupContainer', 'renderEmpty', 'pageHeader', 'input', 'pagination', 'form', 'select', 'button'];
const defaultPrefixCls = 'ant';
let globalPrefixCls;
function getGlobalPrefixCls() {
  return globalPrefixCls || defaultPrefixCls;
}
function isLegacyTheme(theme) {
  return Object.keys(theme).some(key => key.endsWith('Color'));
}
const setGlobalConfig = _ref => {
  let {
    prefixCls,
    iconPrefixCls,
    theme
  } = _ref;
  if (prefixCls !== undefined) {
    globalPrefixCls = prefixCls;
  }
  if (theme) {
    if (isLegacyTheme(theme)) {
      process.env.NODE_ENV !== "production" ? warning$3(false, 'ConfigProvider', '`config` of css variable theme is not work in v5. Please use new `theme` config instead.') : void 0;
      registerTheme(getGlobalPrefixCls(), theme);
    }
  }
};
const ProviderChildren = props => {
  const {
    children,
    csp: customCsp,
    autoInsertSpaceInButton,
    alert,
    anchor,
    form,
    locale,
    componentSize,
    direction,
    space,
    virtual,
    dropdownMatchSelectWidth,
    popupMatchSelectWidth,
    popupOverflow,
    legacyLocale,
    parentContext,
    iconPrefixCls: customIconPrefixCls,
    theme,
    componentDisabled,
    segmented,
    statistic,
    spin,
    calendar,
    carousel,
    cascader,
    collapse,
    typography,
    checkbox,
    descriptions,
    divider,
    drawer,
    skeleton,
    steps,
    image,
    layout,
    list,
    mentions,
    modal,
    progress,
    result,
    slider,
    breadcrumb,
    menu,
    pagination,
    input,
    empty,
    badge,
    radio,
    rate,
    switch: SWITCH,
    transfer,
    avatar,
    message,
    tag,
    table,
    card,
    tabs,
    timeline,
    timePicker,
    upload,
    notification,
    tree,
    colorPicker,
    datePicker,
    wave
  } = props;
  // =================================== Warning ===================================
  if (process.env.NODE_ENV !== 'production') {
    process.env.NODE_ENV !== "production" ? warning$3(dropdownMatchSelectWidth === undefined, 'ConfigProvider', '`dropdownMatchSelectWidth` is deprecated. Please use `popupMatchSelectWidth` instead.') : void 0;
  }
  // =================================== Context ===================================
  const getPrefixCls = React.useCallback((suffixCls, customizePrefixCls) => {
    const {
      prefixCls
    } = props;
    if (customizePrefixCls) {
      return customizePrefixCls;
    }
    const mergedPrefixCls = prefixCls || parentContext.getPrefixCls('');
    return suffixCls ? `${mergedPrefixCls}-${suffixCls}` : mergedPrefixCls;
  }, [parentContext.getPrefixCls, props.prefixCls]);
  const iconPrefixCls = customIconPrefixCls || parentContext.iconPrefixCls || defaultIconPrefixCls;
  const shouldWrapSSR = iconPrefixCls !== parentContext.iconPrefixCls;
  const csp = customCsp || parentContext.csp;
  const wrapSSR = useStyle$4(iconPrefixCls, csp);
  const mergedTheme = useTheme(theme, parentContext.theme);
  if (process.env.NODE_ENV !== 'production') {
    existThemeConfig = existThemeConfig || !!mergedTheme;
  }
  const baseConfig = {
    csp,
    autoInsertSpaceInButton,
    alert,
    anchor,
    locale: locale || legacyLocale,
    direction,
    space,
    virtual,
    popupMatchSelectWidth: popupMatchSelectWidth !== null && popupMatchSelectWidth !== void 0 ? popupMatchSelectWidth : dropdownMatchSelectWidth,
    popupOverflow,
    getPrefixCls,
    iconPrefixCls,
    theme: mergedTheme,
    segmented,
    statistic,
    spin,
    calendar,
    carousel,
    cascader,
    collapse,
    typography,
    checkbox,
    descriptions,
    divider,
    drawer,
    skeleton,
    steps,
    image,
    input,
    layout,
    list,
    mentions,
    modal,
    progress,
    result,
    slider,
    breadcrumb,
    menu,
    pagination,
    empty,
    badge,
    radio,
    rate,
    switch: SWITCH,
    transfer,
    avatar,
    message,
    tag,
    table,
    card,
    tabs,
    timeline,
    timePicker,
    upload,
    notification,
    tree,
    colorPicker,
    datePicker,
    wave
  };
  const config = Object.assign({}, parentContext);
  Object.keys(baseConfig).forEach(key => {
    if (baseConfig[key] !== undefined) {
      config[key] = baseConfig[key];
    }
  });
  // Pass the props used by `useContext` directly with child component.
  // These props should merged into `config`.
  PASSED_PROPS.forEach(propName => {
    const propValue = props[propName];
    if (propValue) {
      config[propName] = propValue;
    }
  });
  // https://github.com/ant-design/ant-design/issues/27617
  const memoedConfig = useMemo(() => config, config, (prevConfig, currentConfig) => {
    const prevKeys = Object.keys(prevConfig);
    const currentKeys = Object.keys(currentConfig);
    return prevKeys.length !== currentKeys.length || prevKeys.some(key => prevConfig[key] !== currentConfig[key]);
  });
  const memoIconContextValue = React.useMemo(() => ({
    prefixCls: iconPrefixCls,
    csp
  }), [iconPrefixCls, csp]);
  let childNode = shouldWrapSSR ? wrapSSR(children) : children;
  const validateMessages = React.useMemo(() => {
    var _a, _b, _c, _d;
    return merge$1(((_a = defaultLocale.Form) === null || _a === void 0 ? void 0 : _a.defaultValidateMessages) || {}, ((_c = (_b = memoedConfig.locale) === null || _b === void 0 ? void 0 : _b.Form) === null || _c === void 0 ? void 0 : _c.defaultValidateMessages) || {}, ((_d = memoedConfig.form) === null || _d === void 0 ? void 0 : _d.validateMessages) || {}, (form === null || form === void 0 ? void 0 : form.validateMessages) || {});
  }, [memoedConfig, form === null || form === void 0 ? void 0 : form.validateMessages]);
  if (Object.keys(validateMessages).length > 0) {
    childNode = /*#__PURE__*/React.createElement(ValidateMessagesContext.Provider, {
      value: validateMessages
    }, children);
  }
  if (locale) {
    childNode = /*#__PURE__*/React.createElement(LocaleProvider$1, {
      locale: locale,
      _ANT_MARK__: ANT_MARK
    }, childNode);
  }
  if (iconPrefixCls || csp) {
    childNode = /*#__PURE__*/React.createElement(Context$2.Provider, {
      value: memoIconContextValue
    }, childNode);
  }
  if (componentSize) {
    childNode = /*#__PURE__*/React.createElement(SizeContextProvider, {
      size: componentSize
    }, childNode);
  }
  // =================================== Motion ===================================
  childNode = /*#__PURE__*/React.createElement(MotionWrapper, null, childNode);
  // ================================ Dynamic theme ================================
  const memoTheme = React.useMemo(() => {
    const _a = mergedTheme || {},
      {
        algorithm,
        token,
        components
      } = _a,
      rest = __rest$8(_a, ["algorithm", "token", "components"]);
    const themeObj = algorithm && (!Array.isArray(algorithm) || algorithm.length > 0) ? createTheme(algorithm) : defaultTheme;
    const parsedComponents = {};
    Object.entries(components || {}).forEach(_ref2 => {
      let [componentName, componentToken] = _ref2;
      const parsedToken = Object.assign({}, componentToken);
      if ('algorithm' in parsedToken) {
        if (parsedToken.algorithm === true) {
          parsedToken.theme = themeObj;
        } else if (Array.isArray(parsedToken.algorithm) || typeof parsedToken.algorithm === 'function') {
          parsedToken.theme = createTheme(parsedToken.algorithm);
        }
        delete parsedToken.algorithm;
      }
      parsedComponents[componentName] = parsedToken;
    });
    return Object.assign(Object.assign({}, rest), {
      theme: themeObj,
      token: Object.assign(Object.assign({}, seedToken$1), token),
      components: parsedComponents
    });
  }, [mergedTheme]);
  if (theme) {
    childNode = /*#__PURE__*/React.createElement(DesignTokenContext.Provider, {
      value: memoTheme
    }, childNode);
  }
  // =================================== Render ===================================
  if (componentDisabled !== undefined) {
    childNode = /*#__PURE__*/React.createElement(DisabledContextProvider, {
      disabled: componentDisabled
    }, childNode);
  }
  return /*#__PURE__*/React.createElement(ConfigContext.Provider, {
    value: memoedConfig
  }, childNode);
};
const ConfigProvider = props => {
  const context = React.useContext(ConfigContext);
  const antLocale = React.useContext(LocaleContext$1);
  return /*#__PURE__*/React.createElement(ProviderChildren, Object.assign({
    parentContext: context,
    legacyLocale: antLocale
  }, props));
};
ConfigProvider.ConfigContext = ConfigContext;
ConfigProvider.SizeContext = SizeContext$1;
ConfigProvider.config = setGlobalConfig;
ConfigProvider.useConfig = useConfig;
Object.defineProperty(ConfigProvider, 'SizeContext', {
  get: () => {
    process.env.NODE_ENV !== "production" ? warning$3(false, 'ConfigProvider', 'ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead.') : void 0;
    return SizeContext$1;
  }
});
if (process.env.NODE_ENV !== 'production') {
  ConfigProvider.displayName = 'ConfigProvider';
}

function getRoot(ele) {
  var _ele$getRootNode;
  return ele === null || ele === void 0 ? void 0 : (_ele$getRootNode = ele.getRootNode) === null || _ele$getRootNode === void 0 ? void 0 : _ele$getRootNode.call(ele);
}

/**
 * Check if is in shadowRoot
 */
function inShadow(ele) {
  return getRoot(ele) instanceof ShadowRoot;
}

/**
 * Return shadowRoot if possible
 */
function getShadowRoot(ele) {
  return inShadow(ele) ? getRoot(ele) : null;
}

function camelCase(input) {
  return input.replace(/-(.)/g, function (match, g) {
    return g.toUpperCase();
  });
}
function warning$1(valid, message) {
  warningOnce(valid, "[@ant-design/icons] ".concat(message));
}
function isIconDefinition(target) {
  return _typeof(target) === 'object' && typeof target.name === 'string' && typeof target.theme === 'string' && (_typeof(target.icon) === 'object' || typeof target.icon === 'function');
}
function normalizeAttrs() {
  var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.keys(attrs).reduce(function (acc, key) {
    var val = attrs[key];
    switch (key) {
      case 'class':
        acc.className = val;
        delete acc.class;
        break;
      default:
        delete acc[key];
        acc[camelCase(key)] = val;
    }
    return acc;
  }, {});
}
function generate(node, key, rootProps) {
  if (!rootProps) {
    return /*#__PURE__*/React__default.createElement(node.tag, _objectSpread2({
      key: key
    }, normalizeAttrs(node.attrs)), (node.children || []).map(function (child, index) {
      return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
    }));
  }
  return /*#__PURE__*/React__default.createElement(node.tag, _objectSpread2(_objectSpread2({
    key: key
  }, normalizeAttrs(node.attrs)), rootProps), (node.children || []).map(function (child, index) {
    return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
  }));
}
function getSecondaryColor(primaryColor) {
  // choose the second color
  return generate$1(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
  if (!twoToneColor) {
    return [];
  }
  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
}

// These props make sure that the SVG behaviours like general text.
// Reference: https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
var svgBaseProps = {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
  'aria-hidden': 'true',
  focusable: 'false'
};
var iconStyles = "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
var useInsertStyles = function useInsertStyles(eleRef) {
  var _useContext = useContext(Context$2),
    csp = _useContext.csp,
    prefixCls = _useContext.prefixCls;
  var mergedStyleStr = iconStyles;
  if (prefixCls) {
    mergedStyleStr = mergedStyleStr.replace(/anticon/g, prefixCls);
  }
  useEffect(function () {
    var ele = eleRef.current;
    var shadowRoot = getShadowRoot(ele);
    updateCSS(mergedStyleStr, '@ant-design-icons', {
      prepend: true,
      csp: csp,
      attachTo: shadowRoot
    });
  }, []);
};

var _excluded$g = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"];
var twoToneColorPalette = {
  primaryColor: '#333',
  secondaryColor: '#E6E6E6',
  calculated: false
};
function setTwoToneColors(_ref) {
  var primaryColor = _ref.primaryColor,
    secondaryColor = _ref.secondaryColor;
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}
function getTwoToneColors() {
  return _objectSpread2({}, twoToneColorPalette);
}
var IconBase = function IconBase(props) {
  var icon = props.icon,
    className = props.className,
    onClick = props.onClick,
    style = props.style,
    primaryColor = props.primaryColor,
    secondaryColor = props.secondaryColor,
    restProps = _objectWithoutProperties(props, _excluded$g);
  var svgRef = React.useRef();
  var colors = twoToneColorPalette;
  if (primaryColor) {
    colors = {
      primaryColor: primaryColor,
      secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
    };
  }
  useInsertStyles(svgRef);
  warning$1(isIconDefinition(icon), "icon should be icon definiton, but got ".concat(icon));
  if (!isIconDefinition(icon)) {
    return null;
  }
  var target = icon;
  if (target && typeof target.icon === 'function') {
    target = _objectSpread2(_objectSpread2({}, target), {}, {
      icon: target.icon(colors.primaryColor, colors.secondaryColor)
    });
  }
  return generate(target.icon, "svg-".concat(target.name), _objectSpread2(_objectSpread2({
    className: className,
    onClick: onClick,
    style: style,
    'data-icon': target.name,
    width: '1em',
    height: '1em',
    fill: 'currentColor',
    'aria-hidden': 'true'
  }, restProps), {}, {
    ref: svgRef
  }));
};
IconBase.displayName = 'IconReact';
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;
var ReactIcon = IconBase;

function setTwoToneColor(twoToneColor) {
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
    _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2),
    primaryColor = _normalizeTwoToneColo2[0],
    secondaryColor = _normalizeTwoToneColo2[1];
  return ReactIcon.setTwoToneColors({
    primaryColor: primaryColor,
    secondaryColor: secondaryColor
  });
}
function getTwoToneColor() {
  var colors = ReactIcon.getTwoToneColors();
  if (!colors.calculated) {
    return colors.primaryColor;
  }
  return [colors.primaryColor, colors.secondaryColor];
}

var _excluded$f = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
// Initial setting
// should move it to antd main repo?
setTwoToneColor(blue.primary);

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/34757#issuecomment-488848720

var Icon$2 = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames;
  var className = props.className,
    icon = props.icon,
    spin = props.spin,
    rotate = props.rotate,
    tabIndex = props.tabIndex,
    onClick = props.onClick,
    twoToneColor = props.twoToneColor,
    restProps = _objectWithoutProperties(props, _excluded$f);
  var _React$useContext = React.useContext(Context$2),
    _React$useContext$pre = _React$useContext.prefixCls,
    prefixCls = _React$useContext$pre === void 0 ? 'anticon' : _React$useContext$pre,
    rootClassName = _React$useContext.rootClassName;
  var classString = classNames(rootClassName, prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-").concat(icon.name), !!icon.name), _defineProperty(_classNames, "".concat(prefixCls, "-spin"), !!spin || icon.name === 'loading'), _classNames), className);
  var iconTabIndex = tabIndex;
  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }
  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : undefined;
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
    _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2),
    primaryColor = _normalizeTwoToneColo2[0],
    secondaryColor = _normalizeTwoToneColo2[1];
  return /*#__PURE__*/React.createElement("span", _extends$1({
    role: "img",
    "aria-label": icon.name
  }, restProps, {
    ref: ref,
    tabIndex: iconTabIndex,
    onClick: onClick,
    className: classString
  }), /*#__PURE__*/React.createElement(ReactIcon, {
    icon: icon,
    primaryColor: primaryColor,
    secondaryColor: secondaryColor,
    style: svgStyle
  }));
});
Icon$2.displayName = 'AntdIcon';
Icon$2.getTwoToneColor = getTwoToneColor;
Icon$2.setTwoToneColor = setTwoToneColor;
var AntdIcon = Icon$2;

// This icon file is generated automatically.
var CloseCircleFilled$2 = { "icon": { "tag": "svg", "attrs": { "fill-rule": "evenodd", "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, "name": "close-circle", "theme": "filled" };
var CloseCircleFilledSvg = CloseCircleFilled$2;

var CloseCircleFilled = function CloseCircleFilled(props, ref) {
  return /*#__PURE__*/React.createElement(AntdIcon, _extends$1({}, props, {
    ref: ref,
    icon: CloseCircleFilledSvg
  }));
};
if (process.env.NODE_ENV !== 'production') {
  CloseCircleFilled.displayName = 'CloseCircleFilled';
}
var CloseCircleFilled$1 = /*#__PURE__*/React.forwardRef(CloseCircleFilled);

// This icon file is generated automatically.
var CloseOutlined$2 = { "icon": { "tag": "svg", "attrs": { "fill-rule": "evenodd", "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, "name": "close", "theme": "outlined" };
var CloseOutlinedSvg = CloseOutlined$2;

var CloseOutlined = function CloseOutlined(props, ref) {
  return /*#__PURE__*/React.createElement(AntdIcon, _extends$1({}, props, {
    ref: ref,
    icon: CloseOutlinedSvg
  }));
};
if (process.env.NODE_ENV !== 'production') {
  CloseOutlined.displayName = 'CloseOutlined';
}
var CloseOutlined$1 = /*#__PURE__*/React.forwardRef(CloseOutlined);

var attributes = "accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap";
var eventsName = "onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError";
var propList = "".concat(attributes, " ").concat(eventsName).split(/[\s\n]+/);

/* eslint-enable max-len */
var ariaPrefix = 'aria-';
var dataPrefix = 'data-';
function match(key, prefix) {
  return key.indexOf(prefix) === 0;
}
/**
 * Picker props from exist props with filter
 * @param props Passed props
 * @param ariaOnly boolean | { aria?: boolean; data?: boolean; attr?: boolean; } filter config
 */
function pickAttrs(props) {
  var ariaOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var mergedConfig;
  if (ariaOnly === false) {
    mergedConfig = {
      aria: true,
      data: true,
      attr: true
    };
  } else if (ariaOnly === true) {
    mergedConfig = {
      aria: true
    };
  } else {
    mergedConfig = _objectSpread2({}, ariaOnly);
  }
  var attrs = {};
  Object.keys(props).forEach(function (key) {
    if (
    // Aria
    mergedConfig.aria && (key === 'role' || match(key, ariaPrefix)) ||
    // Data
    mergedConfig.data && match(key, dataPrefix) ||
    // Attr
    mergedConfig.attr && propList.includes(key)) {
      attrs[key] = props[key];
    }
  });
  return attrs;
}

const {
  isValidElement
} = React;
function isFragment(child) {
  return child && isValidElement(child) && child.type === React.Fragment;
}
function replaceElement(element, replacement, props) {
  if (!isValidElement(element)) {
    return replacement;
  }
  return /*#__PURE__*/React.cloneElement(element, typeof props === 'function' ? props(element.props || {}) : props);
}
function cloneElement(element, props) {
  return replaceElement(element, element, props);
}

/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */

var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,
  // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35,
  // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36,
  // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37,
  // also NUM_WEST
  /**
   * UP
   */
  UP: 38,
  // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39,
  // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40,
  // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45,
  // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46,
  // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,
  // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91,
  // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  // needs localization
  /**
   * DASH
   */
  DASH: 189,
  // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187,
  // needs localization
  /**
   * COMMA
   */
  COMMA: 188,
  // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190,
  // needs localization
  /**
   * SLASH
   */
  SLASH: 191,
  // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,
  // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,
  // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,
  // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220,
  // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,
  // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,
  // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================
  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e) {
    var keyCode = e.keyCode;
    if (e.altKey && !e.ctrlKey || e.metaKey ||
    // Function keys don't generate text
    keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
      return false;
    }

    // The following keys are quite harmless, even in combination with
    // CTRL, ALT or SHIFT.
    switch (keyCode) {
      case KeyCode.ALT:
      case KeyCode.CAPS_LOCK:
      case KeyCode.CONTEXT_MENU:
      case KeyCode.CTRL:
      case KeyCode.DOWN:
      case KeyCode.END:
      case KeyCode.ESC:
      case KeyCode.HOME:
      case KeyCode.INSERT:
      case KeyCode.LEFT:
      case KeyCode.MAC_FF_META:
      case KeyCode.META:
      case KeyCode.NUMLOCK:
      case KeyCode.NUM_CENTER:
      case KeyCode.PAGE_DOWN:
      case KeyCode.PAGE_UP:
      case KeyCode.PAUSE:
      case KeyCode.PRINT_SCREEN:
      case KeyCode.RIGHT:
      case KeyCode.SHIFT:
      case KeyCode.UP:
      case KeyCode.WIN_KEY:
      case KeyCode.WIN_KEY_RIGHT:
        return false;
      default:
        return true;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function isCharacterKey(keyCode) {
    if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
      return true;
    }
    if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
      return true;
    }
    if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
      return true;
    }

    // Safari sends zero key code for non-latin characters.
    if (window.navigator.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
      return true;
    }
    switch (keyCode) {
      case KeyCode.SPACE:
      case KeyCode.QUESTION_MARK:
      case KeyCode.NUM_PLUS:
      case KeyCode.NUM_MINUS:
      case KeyCode.NUM_PERIOD:
      case KeyCode.NUM_DIVISION:
      case KeyCode.SEMICOLON:
      case KeyCode.DASH:
      case KeyCode.EQUALS:
      case KeyCode.COMMA:
      case KeyCode.PERIOD:
      case KeyCode.SLASH:
      case KeyCode.APOSTROPHE:
      case KeyCode.SINGLE_QUOTE:
      case KeyCode.OPEN_SQUARE_BRACKET:
      case KeyCode.BACKSLASH:
      case KeyCode.CLOSE_SQUARE_BRACKET:
        return true;
      default:
        return false;
    }
  }
};

// This icon file is generated automatically.
var LoadingOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, "name": "loading", "theme": "outlined" };
var LoadingOutlinedSvg = LoadingOutlined$2;

var LoadingOutlined = function LoadingOutlined(props, ref) {
  return /*#__PURE__*/React.createElement(AntdIcon, _extends$1({}, props, {
    ref: ref,
    icon: LoadingOutlinedSvg
  }));
};
if (process.env.NODE_ENV !== 'production') {
  LoadingOutlined.displayName = 'LoadingOutlined';
}
var LoadingOutlined$1 = /*#__PURE__*/React.forwardRef(LoadingOutlined);

function _regeneratorRuntime() {
  _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw new Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw new Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

// ================== Collapse Motion ==================
const getTransitionName = (rootPrefixCls, motion, transitionName) => {
  if (transitionName !== undefined) {
    return transitionName;
  }
  return `${rootPrefixCls}-${motion}`;
};

var isVisible = (function (element) {
  if (!element) {
    return false;
  }
  if (element instanceof Element) {
    if (element.offsetParent) {
      return true;
    }
    if (element.getBBox) {
      var _getBBox = element.getBBox(),
        width = _getBBox.width,
        height = _getBBox.height;
      if (width || height) {
        return true;
      }
    }
    if (element.getBoundingClientRect) {
      var _element$getBoundingC = element.getBoundingClientRect(),
        _width = _element$getBoundingC.width,
        _height = _element$getBoundingC.height;
      if (_width || _height) {
        return true;
      }
    }
  }
  return false;
});

const useSize = customSize => {
  const size = React__default.useContext(SizeContext$1);
  const mergedSize = React__default.useMemo(() => {
    if (!customSize) {
      return size;
    }
    if (typeof customSize === 'string') {
      return customSize !== null && customSize !== void 0 ? customSize : size;
    }
    if (customSize instanceof Function) {
      return customSize(size);
    }
    return size;
  }, [customSize, size]);
  return mergedSize;
};
var useSize$1 = useSize;

undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const SpaceCompactItemContext = /*#__PURE__*/React.createContext(null);
const useCompactItemContext = (prefixCls, direction) => {
  const compactItemContext = React.useContext(SpaceCompactItemContext);
  const compactItemClassnames = React.useMemo(() => {
    if (!compactItemContext) {
      return '';
    }
    const {
      compactDirection,
      isFirstItem,
      isLastItem
    } = compactItemContext;
    const separator = compactDirection === 'vertical' ? '-vertical-' : '-';
    return classNames(`${prefixCls}-compact${separator}item`, {
      [`${prefixCls}-compact${separator}first-item`]: isFirstItem,
      [`${prefixCls}-compact${separator}last-item`]: isLastItem,
      [`${prefixCls}-compact${separator}item-rtl`]: direction === 'rtl'
    });
  }, [prefixCls, direction, compactItemContext]);
  return {
    compactSize: compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactSize,
    compactDirection: compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactDirection,
    compactItemClassnames
  };
};
const NoCompactStyle = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(SpaceCompactItemContext.Provider, {
    value: null
  }, children);
};

// handle border collapse
function compactItemBorder(token, parentCls, options) {
  const {
    focusElCls,
    focus,
    borderElCls
  } = options;
  const childCombinator = borderElCls ? '> *' : '';
  const hoverEffects = ['hover', focus ? 'focus' : null, 'active'].filter(Boolean).map(n => `&:${n} ${childCombinator}`).join(',');
  return {
    [`&-item:not(${parentCls}-last-item)`]: {
      marginInlineEnd: -token.lineWidth
    },
    '&-item': Object.assign(Object.assign({
      [hoverEffects]: {
        zIndex: 2
      }
    }, focusElCls ? {
      [`&${focusElCls}`]: {
        zIndex: 2
      }
    } : {}), {
      [`&[disabled] ${childCombinator}`]: {
        zIndex: 0
      }
    })
  };
}
// handle border-radius
function compactItemBorderRadius(prefixCls, parentCls, options) {
  const {
    borderElCls
  } = options;
  const childCombinator = borderElCls ? `> ${borderElCls}` : '';
  return {
    [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item) ${childCombinator}`]: {
      borderRadius: 0
    },
    [`&-item:not(${parentCls}-last-item)${parentCls}-first-item`]: {
      [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${parentCls}-first-item)${parentCls}-last-item`]: {
      [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function genCompactItemStyle(token) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    focus: true
  };
  const {
    componentCls
  } = token;
  const compactCls = `${componentCls}-compact`;
  return {
    [compactCls]: Object.assign(Object.assign({}, compactItemBorder(token, compactCls, options)), compactItemBorderRadius(componentCls, compactCls, options))
  };
}

var OrderContext = /*#__PURE__*/React.createContext(null);

var EMPTY_LIST = [];

/**
 * Will add `div` to document. Nest call will keep order
 * @param render Render DOM in document
 */
function useDom(render, debug) {
  var _React$useState = React.useState(function () {
      if (!canUseDom()) {
        return null;
      }
      var defaultEle = document.createElement('div');
      if (process.env.NODE_ENV !== 'production' && debug) {
        defaultEle.setAttribute('data-debug', debug);
      }
      return defaultEle;
    }),
    _React$useState2 = _slicedToArray(_React$useState, 1),
    ele = _React$useState2[0];

  // ========================== Order ==========================
  var appendedRef = React.useRef(false);
  var queueCreate = React.useContext(OrderContext);
  var _React$useState3 = React.useState(EMPTY_LIST),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    queue = _React$useState4[0],
    setQueue = _React$useState4[1];
  var mergedQueueCreate = queueCreate || (appendedRef.current ? undefined : function (appendFn) {
    setQueue(function (origin) {
      var newQueue = [appendFn].concat(_toConsumableArray(origin));
      return newQueue;
    });
  });

  // =========================== DOM ===========================
  function append() {
    if (!ele.parentElement) {
      document.body.appendChild(ele);
    }
    appendedRef.current = true;
  }
  function cleanup() {
    var _ele$parentElement;
    (_ele$parentElement = ele.parentElement) === null || _ele$parentElement === void 0 ? void 0 : _ele$parentElement.removeChild(ele);
    appendedRef.current = false;
  }
  useLayoutEffect$1(function () {
    if (render) {
      if (queueCreate) {
        queueCreate(append);
      } else {
        append();
      }
    } else {
      cleanup();
    }
    return cleanup;
  }, [render]);
  useLayoutEffect$1(function () {
    if (queue.length) {
      queue.forEach(function (appendFn) {
        return appendFn();
      });
      setQueue(EMPTY_LIST);
    }
  }, [queue]);
  return [ele, mergedQueueCreate];
}

/* eslint-disable no-param-reassign */

var cached;
function getScrollBarSize(fresh) {
  if (typeof document === 'undefined') {
    return 0;
  }
  if (fresh || cached === undefined) {
    var inner = document.createElement('div');
    inner.style.width = '100%';
    inner.style.height = '200px';
    var outer = document.createElement('div');
    var outerStyle = outer.style;
    outerStyle.position = 'absolute';
    outerStyle.top = '0';
    outerStyle.left = '0';
    outerStyle.pointerEvents = 'none';
    outerStyle.visibility = 'hidden';
    outerStyle.width = '200px';
    outerStyle.height = '150px';
    outerStyle.overflow = 'hidden';
    outer.appendChild(inner);
    document.body.appendChild(outer);
    var widthContained = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var widthScroll = inner.offsetWidth;
    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }
    document.body.removeChild(outer);
    cached = widthContained - widthScroll;
  }
  return cached;
}
function ensureSize(str) {
  var match = str.match(/^(.*)px$/);
  var value = Number(match === null || match === void 0 ? void 0 : match[1]);
  return Number.isNaN(value) ? getScrollBarSize() : value;
}
function getTargetScrollBarSize(target) {
  if (typeof document === 'undefined' || !target || !(target instanceof Element)) {
    return {
      width: 0,
      height: 0
    };
  }
  var _getComputedStyle = getComputedStyle(target, '::-webkit-scrollbar'),
    width = _getComputedStyle.width,
    height = _getComputedStyle.height;
  return {
    width: ensureSize(width),
    height: ensureSize(height)
  };
}

/**
 * Test usage export. Do not use in your production
 */
function isBodyOverflowing() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}

var UNIQUE_ID = "rc-util-locker-".concat(Date.now());
var uuid$2 = 0;
function useScrollLocker(lock) {
  var mergedLock = !!lock;
  var _React$useState = React.useState(function () {
      uuid$2 += 1;
      return "".concat(UNIQUE_ID, "_").concat(uuid$2);
    }),
    _React$useState2 = _slicedToArray(_React$useState, 1),
    id = _React$useState2[0];
  useLayoutEffect$1(function () {
    if (mergedLock) {
      var scrollbarSize = getTargetScrollBarSize(document.body).width;
      var isOverflow = isBodyOverflowing();
      updateCSS("\nhtml body {\n  overflow-y: hidden;\n  ".concat(isOverflow ? "width: calc(100% - ".concat(scrollbarSize, "px);") : '', "\n}"), id);
    } else {
      removeCSS(id);
    }
    return function () {
      removeCSS(id);
    };
  }, [mergedLock, id]);
}

var inline = false;
function inlineMock(nextInline) {
  if (typeof nextInline === 'boolean') {
    inline = nextInline;
  }
  return inline;
}

var getPortalContainer = function getPortalContainer(getContainer) {
  if (getContainer === false) {
    return false;
  }
  if (!canUseDom() || !getContainer) {
    return null;
  }
  if (typeof getContainer === 'string') {
    return document.querySelector(getContainer);
  }
  if (typeof getContainer === 'function') {
    return getContainer();
  }
  return getContainer;
};
var Portal = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var open = props.open,
    autoLock = props.autoLock,
    getContainer = props.getContainer,
    debug = props.debug,
    _props$autoDestroy = props.autoDestroy,
    autoDestroy = _props$autoDestroy === void 0 ? true : _props$autoDestroy,
    children = props.children;
  var _React$useState = React.useState(open),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    shouldRender = _React$useState2[0],
    setShouldRender = _React$useState2[1];
  var mergedRender = shouldRender || open;

  // ========================= Warning =========================
  if (process.env.NODE_ENV !== 'production') {
    warningOnce(canUseDom() || !open, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR.");
  }

  // ====================== Should Render ======================
  React.useEffect(function () {
    if (autoDestroy || open) {
      setShouldRender(open);
    }
  }, [open, autoDestroy]);

  // ======================== Container ========================
  var _React$useState3 = React.useState(function () {
      return getPortalContainer(getContainer);
    }),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    innerContainer = _React$useState4[0],
    setInnerContainer = _React$useState4[1];
  React.useEffect(function () {
    var customizeContainer = getPortalContainer(getContainer);

    // Tell component that we check this in effect which is safe to be `null`
    setInnerContainer(customizeContainer !== null && customizeContainer !== void 0 ? customizeContainer : null);
  });
  var _useDom = useDom(mergedRender && !innerContainer, debug),
    _useDom2 = _slicedToArray(_useDom, 2),
    defaultContainer = _useDom2[0],
    queueCreate = _useDom2[1];
  var mergedContainer = innerContainer !== null && innerContainer !== void 0 ? innerContainer : defaultContainer;

  // ========================= Locker ==========================
  useScrollLocker(autoLock && open && canUseDom() && (mergedContainer === defaultContainer || mergedContainer === document.body));

  // =========================== Ref ===========================
  var childRef = null;
  if (children && supportRef(children) && ref) {
    var _ref = children;
    childRef = _ref.ref;
  }
  var mergedRef = useComposeRef(childRef, ref);

  // ========================= Render ==========================
  // Do not render when nothing need render
  // When innerContainer is `undefined`, it may not ready since user use ref in the same render
  if (!mergedRender || !canUseDom() || innerContainer === undefined) {
    return null;
  }

  // Render inline
  var renderInline = mergedContainer === false || inlineMock();
  var reffedChildren = children;
  if (ref) {
    reffedChildren = /*#__PURE__*/React.cloneElement(children, {
      ref: mergedRef
    });
  }
  return /*#__PURE__*/React.createElement(OrderContext.Provider, {
    value: queueCreate
  }, renderInline ? reffedChildren : /*#__PURE__*/createPortal(reffedChildren, mergedContainer));
});
if (process.env.NODE_ENV !== 'production') {
  Portal.displayName = 'Portal';
}

function getUseId() {
  // We need fully clone React function here to avoid webpack warning React 17 do not export `useId`
  var fullClone = _objectSpread2({}, React);
  return fullClone.useId;
}
var uuid$1 = 0;
function useId$1(id) {
  // Inner id for accessibility usage. Only work in client side
  var _React$useState = React.useState('ssr-id'),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    innerId = _React$useState2[0],
    setInnerId = _React$useState2[1];
  var useOriginId = getUseId();
  var reactNativeId = useOriginId === null || useOriginId === void 0 ? void 0 : useOriginId();
  React.useEffect(function () {
    if (!useOriginId) {
      var nextId = uuid$1;
      uuid$1 += 1;
      setInnerId("rc_unique_".concat(nextId));
    }
  }, []);

  // Developer passed id is single source of truth
  if (id) {
    return id;
  }

  // Test env always return mock id
  if (process.env.NODE_ENV === 'test') {
    return 'test-id';
  }

  // Return react native id or inner id
  return reactNativeId || innerId;
}

var HOOK_MARK = 'RC_FORM_INTERNAL_HOOKS';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
var warningFunc = function warningFunc() {
  warningOnce(false, 'Can not find FormContext. Please make sure you wrap Field under Form.');
};
var Context = /*#__PURE__*/React.createContext({
  getFieldValue: warningFunc,
  getFieldsValue: warningFunc,
  getFieldError: warningFunc,
  getFieldWarning: warningFunc,
  getFieldsError: warningFunc,
  isFieldsTouched: warningFunc,
  isFieldTouched: warningFunc,
  isFieldValidating: warningFunc,
  isFieldsValidating: warningFunc,
  resetFields: warningFunc,
  setFields: warningFunc,
  setFieldValue: warningFunc,
  setFieldsValue: warningFunc,
  validateFields: warningFunc,
  submit: warningFunc,
  getInternalHooks: function getInternalHooks() {
    warningFunc();
    return {
      dispatch: warningFunc,
      initEntityValue: warningFunc,
      registerField: warningFunc,
      useSubscribe: warningFunc,
      setInitialValues: warningFunc,
      destroyForm: warningFunc,
      setCallbacks: warningFunc,
      registerWatch: warningFunc,
      getFields: warningFunc,
      setValidateMessages: warningFunc,
      setPreserve: warningFunc,
      getInitialValue: warningFunc
    };
  }
});

var ListContext = /*#__PURE__*/React.createContext(null);

function toArray$2(value) {
  if (value === undefined || value === null) {
    return [];
  }
  return Array.isArray(value) ? value : [value];
}
function isFormInstance(form) {
  return form && !!form._init;
}

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

/* eslint no-console:0 */
var formatRegExp = /%[sdj%]/g;
var warning = function warning() {}; // don't print warning message when in production env or node runtime

if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && typeof document !== 'undefined') {
  warning = function warning(type, errors) {
    if (typeof console !== 'undefined' && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING === 'undefined') {
      if (errors.every(function (e) {
        return typeof e === 'string';
      })) {
        console.warn(type, errors);
      }
    }
  };
}

function convertFieldsError(errors) {
  if (!errors || !errors.length) return null;
  var fields = {};
  errors.forEach(function (error) {
    var field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}
function format(template) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var i = 0;
  var len = args.length;

  if (typeof template === 'function') {
    return template.apply(null, args);
  }

  if (typeof template === 'string') {
    var str = template.replace(formatRegExp, function (x) {
      if (x === '%%') {
        return '%';
      }

      if (i >= len) {
        return x;
      }

      switch (x) {
        case '%s':
          return String(args[i++]);

        case '%d':
          return Number(args[i++]);

        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }

          break;

        default:
          return x;
      }
    });
    return str;
  }

  return template;
}

function isNativeStringType(type) {
  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'date' || type === 'pattern';
}

function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }

  if (type === 'array' && Array.isArray(value) && !value.length) {
    return true;
  }

  if (isNativeStringType(type) && typeof value === 'string' && !value) {
    return true;
  }

  return false;
}

function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;

  function count(errors) {
    results.push.apply(results, errors || []);
    total++;

    if (total === arrLength) {
      callback(results);
    }
  }

  arr.forEach(function (a) {
    func(a, count);
  });
}

function asyncSerialArray(arr, func, callback) {
  var index = 0;
  var arrLength = arr.length;

  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }

    var original = index;
    index = index + 1;

    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }

  next([]);
}

function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function (k) {
    ret.push.apply(ret, objArr[k] || []);
  });
  return ret;
}

var AsyncValidationError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(AsyncValidationError, _Error);

  function AsyncValidationError(errors, fields) {
    var _this;

    _this = _Error.call(this, 'Async Validation Error') || this;
    _this.errors = errors;
    _this.fields = fields;
    return _this;
  }

  return AsyncValidationError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
function asyncMap(objArr, option, func, callback, source) {
  if (option.first) {
    var _pending = new Promise(function (resolve, reject) {
      var next = function next(errors) {
        callback(errors);
        return errors.length ? reject(new AsyncValidationError(errors, convertFieldsError(errors))) : resolve(source);
      };

      var flattenArr = flattenObjArr(objArr);
      asyncSerialArray(flattenArr, func, next);
    });

    _pending["catch"](function (e) {
      return e;
    });

    return _pending;
  }

  var firstFields = option.firstFields === true ? Object.keys(objArr) : option.firstFields || [];
  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var pending = new Promise(function (resolve, reject) {
    var next = function next(errors) {
      results.push.apply(results, errors);
      total++;

      if (total === objArrLength) {
        callback(results);
        return results.length ? reject(new AsyncValidationError(results, convertFieldsError(results))) : resolve(source);
      }
    };

    if (!objArrKeys.length) {
      callback(results);
      resolve(source);
    }

    objArrKeys.forEach(function (key) {
      var arr = objArr[key];

      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending["catch"](function (e) {
    return e;
  });
  return pending;
}

function isErrorObj(obj) {
  return !!(obj && obj.message !== undefined);
}

function getValue(value, path) {
  var v = value;

  for (var i = 0; i < path.length; i++) {
    if (v == undefined) {
      return v;
    }

    v = v[path[i]];
  }

  return v;
}

function complementError(rule, source) {
  return function (oe) {
    var fieldValue;

    if (rule.fullFields) {
      fieldValue = getValue(source, rule.fullFields);
    } else {
      fieldValue = source[oe.field || rule.fullField];
    }

    if (isErrorObj(oe)) {
      oe.field = oe.field || rule.fullField;
      oe.fieldValue = fieldValue;
      return oe;
    }

    return {
      message: typeof oe === 'function' ? oe() : oe,
      fieldValue: fieldValue,
      field: oe.field || rule.fullField
    };
  };
}
function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];

        if (typeof value === 'object' && typeof target[s] === 'object') {
          target[s] = _extends({}, target[s], value);
        } else {
          target[s] = value;
        }
      }
    }
  }

  return target;
}

var required$1 = function required(rule, value, source, errors, options, type) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type || rule.type))) {
    errors.push(format(options.messages.required, rule.fullField));
  }
};

/**
 *  Rule for validating whitespace.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

var whitespace = function whitespace(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === '') {
    errors.push(format(options.messages.whitespace, rule.fullField));
  }
};

// https://github.com/kevva/url-regex/blob/master/index.js
var urlReg;
var getUrlRegex = (function () {
  if (urlReg) {
    return urlReg;
  }

  var word = '[a-fA-F\\d:]';

  var b = function b(options) {
    return options && options.includeBoundaries ? "(?:(?<=\\s|^)(?=" + word + ")|(?<=" + word + ")(?=\\s|$))" : '';
  };

  var v4 = '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}';
  var v6seg = '[a-fA-F\\d]{1,4}';
  var v6 = ("\n(?:\n(?:" + v6seg + ":){7}(?:" + v6seg + "|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:" + v6seg + ":){6}(?:" + v4 + "|:" + v6seg + "|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:" + v6seg + ":){5}(?::" + v4 + "|(?::" + v6seg + "){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:" + v6seg + ":){4}(?:(?::" + v6seg + "){0,1}:" + v4 + "|(?::" + v6seg + "){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:" + v6seg + ":){3}(?:(?::" + v6seg + "){0,2}:" + v4 + "|(?::" + v6seg + "){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:" + v6seg + ":){2}(?:(?::" + v6seg + "){0,3}:" + v4 + "|(?::" + v6seg + "){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:" + v6seg + ":){1}(?:(?::" + v6seg + "){0,4}:" + v4 + "|(?::" + v6seg + "){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::" + v6seg + "){0,5}:" + v4 + "|(?::" + v6seg + "){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n").replace(/\s*\/\/.*$/gm, '').replace(/\n/g, '').trim(); // Pre-compile only the exact regexes because adding a global flag make regexes stateful

  var v46Exact = new RegExp("(?:^" + v4 + "$)|(?:^" + v6 + "$)");
  var v4exact = new RegExp("^" + v4 + "$");
  var v6exact = new RegExp("^" + v6 + "$");

  var ip = function ip(options) {
    return options && options.exact ? v46Exact : new RegExp("(?:" + b(options) + v4 + b(options) + ")|(?:" + b(options) + v6 + b(options) + ")", 'g');
  };

  ip.v4 = function (options) {
    return options && options.exact ? v4exact : new RegExp("" + b(options) + v4 + b(options), 'g');
  };

  ip.v6 = function (options) {
    return options && options.exact ? v6exact : new RegExp("" + b(options) + v6 + b(options), 'g');
  };

  var protocol = "(?:(?:[a-z]+:)?//)";
  var auth = '(?:\\S+(?::\\S*)?@)?';
  var ipv4 = ip.v4().source;
  var ipv6 = ip.v6().source;
  var host = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)";
  var domain = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*";
  var tld = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";
  var port = '(?::\\d{2,5})?';
  var path = '(?:[/?#][^\\s"]*)?';
  var regex = "(?:" + protocol + "|www\\.)" + auth + "(?:localhost|" + ipv4 + "|" + ipv6 + "|" + host + domain + tld + ")" + port + path;
  urlReg = new RegExp("(?:^" + regex + "$)", 'i');
  return urlReg;
});

/* eslint max-len:0 */

var pattern$2 = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  "float": function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }

    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function' && !isNaN(value.getTime());
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }

    return typeof value === 'number';
  },
  object: function object(value) {
    return typeof value === 'object' && !types.array(value);
  },
  method: function method(value) {
    return typeof value === 'function';
  },
  email: function email(value) {
    return typeof value === 'string' && value.length <= 320 && !!value.match(pattern$2.email);
  },
  url: function url(value) {
    return typeof value === 'string' && value.length <= 2048 && !!value.match(getUrlRegex());
  },
  hex: function hex(value) {
    return typeof value === 'string' && !!value.match(pattern$2.hex);
  }
};

var type$1 = function type(rule, value, source, errors, options) {
  if (rule.required && value === undefined) {
    required$1(rule, value, source, errors, options);
    return;
  }

  var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
  var ruleType = rule.type;

  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    } // straight typeof check

  } else if (ruleType && typeof value !== rule.type) {
    errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
};

var range = function range(rule, value, source, errors, options) {
  var len = typeof rule.len === 'number';
  var min = typeof rule.min === 'number';
  var max = typeof rule.max === 'number'; // 正则匹配码点范围从U+010000一直到U+10FFFF的文字（补充平面Supplementary Plane）

  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var val = value;
  var key = null;
  var num = typeof value === 'number';
  var str = typeof value === 'string';
  var arr = Array.isArray(value);

  if (num) {
    key = 'number';
  } else if (str) {
    key = 'string';
  } else if (arr) {
    key = 'array';
  } // if the value is not of a supported type for range validation
  // the validation rule rule should use the
  // type property to also test for a particular type


  if (!key) {
    return false;
  }

  if (arr) {
    val = value.length;
  }

  if (str) {
    // 处理码点大于U+010000的文字length属性不准确的bug，如"𠮷𠮷𠮷".lenght !== 3
    val = value.replace(spRegexp, '_').length;
  }

  if (len) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
};

var ENUM$1 = 'enum';

var enumerable$1 = function enumerable(rule, value, source, errors, options) {
  rule[ENUM$1] = Array.isArray(rule[ENUM$1]) ? rule[ENUM$1] : [];

  if (rule[ENUM$1].indexOf(value) === -1) {
    errors.push(format(options.messages[ENUM$1], rule.fullField, rule[ENUM$1].join(', ')));
  }
};

var pattern$1 = function pattern(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      // if a RegExp instance is passed, reset `lastIndex` in case its `global`
      // flag is accidentally set to `true`, which in a validation scenario
      // is not necessary and the result might be misleading
      rule.pattern.lastIndex = 0;

      if (!rule.pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === 'string') {
      var _pattern = new RegExp(rule.pattern);

      if (!_pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
};

var rules = {
  required: required$1,
  whitespace: whitespace,
  type: type$1,
  range: range,
  "enum": enumerable$1,
  pattern: pattern$1
};

var string = function string(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, 'string');

    if (!isEmptyValue(value, 'string')) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
      rules.pattern(rule, value, source, errors, options);

      if (rule.whitespace === true) {
        rules.whitespace(rule, value, source, errors, options);
      }
    }
  }

  callback(errors);
};

var method = function method(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var number = function number(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (value === '') {
      value = undefined;
    }

    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var _boolean = function _boolean(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var regexp = function regexp(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value)) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var integer = function integer(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var floatFn = function floatFn(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var array = function array(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if ((value === undefined || value === null) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, 'array');

    if (value !== undefined && value !== null) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var object = function object(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var ENUM = 'enum';

var enumerable = function enumerable(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules[ENUM](rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var pattern = function pattern(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value, 'string')) {
      rules.pattern(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var date = function date(rule, value, callback, source, options) {
  // console.log('integer rule called %j', rule);
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field); // console.log('validate on %s value', value);

  if (validate) {
    if (isEmptyValue(value, 'date') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value, 'date')) {
      var dateObject;

      if (value instanceof Date) {
        dateObject = value;
      } else {
        dateObject = new Date(value);
      }

      rules.type(rule, dateObject, source, errors, options);

      if (dateObject) {
        rules.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }

  callback(errors);
};

var required = function required(rule, value, callback, source, options) {
  var errors = [];
  var type = Array.isArray(value) ? 'array' : typeof value;
  rules.required(rule, value, source, errors, options, type);
  callback(errors);
};

var type = function type(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, ruleType);

    if (!isEmptyValue(value, ruleType)) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var any = function any(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);
  }

  callback(errors);
};

var validators = {
  string: string,
  method: method,
  number: number,
  "boolean": _boolean,
  regexp: regexp,
  integer: integer,
  "float": floatFn,
  array: array,
  object: object,
  "enum": enumerable,
  pattern: pattern,
  date: date,
  url: type,
  hex: type,
  email: type,
  required: required,
  any: any
};

function newMessages() {
  return {
    "default": 'Validation error on field %s',
    required: '%s is required',
    "enum": '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid'
    },
    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      "boolean": '%s is not a %s',
      integer: '%s is not an %s',
      "float": '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s'
    },
    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters'
    },
    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s'
    },
    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length'
    },
    pattern: {
      mismatch: '%s value %s does not match pattern %s'
    },
    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}
var messages = newMessages();

/**
 *  Encapsulates a validation schema.
 *
 *  @param descriptor An object declaring validation rules
 *  for this schema.
 */

var Schema = /*#__PURE__*/function () {
  // ========================= Static =========================
  // ======================== Instance ========================
  function Schema(descriptor) {
    this.rules = null;
    this._messages = messages;
    this.define(descriptor);
  }

  var _proto = Schema.prototype;

  _proto.define = function define(rules) {
    var _this = this;

    if (!rules) {
      throw new Error('Cannot configure a schema with no rules');
    }

    if (typeof rules !== 'object' || Array.isArray(rules)) {
      throw new Error('Rules must be an object');
    }

    this.rules = {};
    Object.keys(rules).forEach(function (name) {
      var item = rules[name];
      _this.rules[name] = Array.isArray(item) ? item : [item];
    });
  };

  _proto.messages = function messages(_messages) {
    if (_messages) {
      this._messages = deepMerge(newMessages(), _messages);
    }

    return this._messages;
  };

  _proto.validate = function validate(source_, o, oc) {
    var _this2 = this;

    if (o === void 0) {
      o = {};
    }

    if (oc === void 0) {
      oc = function oc() {};
    }

    var source = source_;
    var options = o;
    var callback = oc;

    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback(null, source);
      }

      return Promise.resolve(source);
    }

    function complete(results) {
      var errors = [];
      var fields = {};

      function add(e) {
        if (Array.isArray(e)) {
          var _errors;

          errors = (_errors = errors).concat.apply(_errors, e);
        } else {
          errors.push(e);
        }
      }

      for (var i = 0; i < results.length; i++) {
        add(results[i]);
      }

      if (!errors.length) {
        callback(null, source);
      } else {
        fields = convertFieldsError(errors);
        callback(errors, fields);
      }
    }

    if (options.messages) {
      var messages$1 = this.messages();

      if (messages$1 === messages) {
        messages$1 = newMessages();
      }

      deepMerge(messages$1, options.messages);
      options.messages = messages$1;
    } else {
      options.messages = this.messages();
    }

    var series = {};
    var keys = options.keys || Object.keys(this.rules);
    keys.forEach(function (z) {
      var arr = _this2.rules[z];
      var value = source[z];
      arr.forEach(function (r) {
        var rule = r;

        if (typeof rule.transform === 'function') {
          if (source === source_) {
            source = _extends({}, source);
          }

          value = source[z] = rule.transform(value);
        }

        if (typeof rule === 'function') {
          rule = {
            validator: rule
          };
        } else {
          rule = _extends({}, rule);
        } // Fill validator. Skip if nothing need to validate


        rule.validator = _this2.getValidationMethod(rule);

        if (!rule.validator) {
          return;
        }

        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this2.getType(rule);
        series[z] = series[z] || [];
        series[z].push({
          rule: rule,
          value: value,
          source: source,
          field: z
        });
      });
    });
    var errorFields = {};
    return asyncMap(series, options, function (data, doIt) {
      var rule = data.rule;
      var deep = (rule.type === 'object' || rule.type === 'array') && (typeof rule.fields === 'object' || typeof rule.defaultField === 'object');
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;

      function addFullField(key, schema) {
        return _extends({}, schema, {
          fullField: rule.fullField + "." + key,
          fullFields: rule.fullFields ? [].concat(rule.fullFields, [key]) : [key]
        });
      }

      function cb(e) {
        if (e === void 0) {
          e = [];
        }

        var errorList = Array.isArray(e) ? e : [e];

        if (!options.suppressWarning && errorList.length) {
          Schema.warning('async-validator:', errorList);
        }

        if (errorList.length && rule.message !== undefined) {
          errorList = [].concat(rule.message);
        } // Fill error info


        var filledErrors = errorList.map(complementError(rule, source));

        if (options.first && filledErrors.length) {
          errorFields[rule.field] = 1;
          return doIt(filledErrors);
        }

        if (!deep) {
          doIt(filledErrors);
        } else {
          // if rule is required but the target object
          // does not exist fail at the rule level and don't
          // go deeper
          if (rule.required && !data.value) {
            if (rule.message !== undefined) {
              filledErrors = [].concat(rule.message).map(complementError(rule, source));
            } else if (options.error) {
              filledErrors = [options.error(rule, format(options.messages.required, rule.field))];
            }

            return doIt(filledErrors);
          }

          var fieldsSchema = {};

          if (rule.defaultField) {
            Object.keys(data.value).map(function (key) {
              fieldsSchema[key] = rule.defaultField;
            });
          }

          fieldsSchema = _extends({}, fieldsSchema, data.rule.fields);
          var paredFieldsSchema = {};
          Object.keys(fieldsSchema).forEach(function (field) {
            var fieldSchema = fieldsSchema[field];
            var fieldSchemaList = Array.isArray(fieldSchema) ? fieldSchema : [fieldSchema];
            paredFieldsSchema[field] = fieldSchemaList.map(addFullField.bind(null, field));
          });
          var schema = new Schema(paredFieldsSchema);
          schema.messages(options.messages);

          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }

          schema.validate(data.value, data.rule.options || options, function (errs) {
            var finalErrors = [];

            if (filledErrors && filledErrors.length) {
              finalErrors.push.apply(finalErrors, filledErrors);
            }

            if (errs && errs.length) {
              finalErrors.push.apply(finalErrors, errs);
            }

            doIt(finalErrors.length ? finalErrors : null);
          });
        }
      }

      var res;

      if (rule.asyncValidator) {
        res = rule.asyncValidator(rule, data.value, cb, data.source, options);
      } else if (rule.validator) {
        try {
          res = rule.validator(rule, data.value, cb, data.source, options);
        } catch (error) {
          console.error == null ? void 0 : console.error(error); // rethrow to report error

          if (!options.suppressValidatorError) {
            setTimeout(function () {
              throw error;
            }, 0);
          }

          cb(error.message);
        }

        if (res === true) {
          cb();
        } else if (res === false) {
          cb(typeof rule.message === 'function' ? rule.message(rule.fullField || rule.field) : rule.message || (rule.fullField || rule.field) + " fails");
        } else if (res instanceof Array) {
          cb(res);
        } else if (res instanceof Error) {
          cb(res.message);
        }
      }

      if (res && res.then) {
        res.then(function () {
          return cb();
        }, function (e) {
          return cb(e);
        });
      }
    }, function (results) {
      complete(results);
    }, source);
  };

  _proto.getType = function getType(rule) {
    if (rule.type === undefined && rule.pattern instanceof RegExp) {
      rule.type = 'pattern';
    }

    if (typeof rule.validator !== 'function' && rule.type && !validators.hasOwnProperty(rule.type)) {
      throw new Error(format('Unknown rule type %s', rule.type));
    }

    return rule.type || 'string';
  };

  _proto.getValidationMethod = function getValidationMethod(rule) {
    if (typeof rule.validator === 'function') {
      return rule.validator;
    }

    var keys = Object.keys(rule);
    var messageIndex = keys.indexOf('message');

    if (messageIndex !== -1) {
      keys.splice(messageIndex, 1);
    }

    if (keys.length === 1 && keys[0] === 'required') {
      return validators.required;
    }

    return validators[this.getType(rule)] || undefined;
  };

  return Schema;
}();

Schema.register = function register(type, validator) {
  if (typeof validator !== 'function') {
    throw new Error('Cannot register a validator by type, validator is not a function');
  }

  validators[type] = validator;
};

Schema.warning = warning;
Schema.messages = messages;
Schema.validators = validators;

var typeTemplate = "'${name}' is not a valid ${type}";
var defaultValidateMessages = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: typeTemplate,
    method: typeTemplate,
    array: typeTemplate,
    object: typeTemplate,
    number: typeTemplate,
    date: typeTemplate,
    boolean: typeTemplate,
    integer: typeTemplate,
    float: typeTemplate,
    regexp: typeTemplate,
    email: typeTemplate,
    url: typeTemplate,
    hex: typeTemplate
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
};

// Remove incorrect original ts define
var AsyncValidator = Schema;

/**
 * Replace with template.
 *   `I'm ${name}` + { name: 'bamboo' } = I'm bamboo
 */
function replaceMessage(template, kv) {
  return template.replace(/\$\{\w+\}/g, function (str) {
    var key = str.slice(2, -1);
    return kv[key];
  });
}
var CODE_LOGIC_ERROR = 'CODE_LOGIC_ERROR';
function validateRule(_x, _x2, _x3, _x4, _x5) {
  return _validateRule.apply(this, arguments);
}
/**
 * We use `async-validator` to validate the value.
 * But only check one value in a time to avoid namePath validate issue.
 */
function _validateRule() {
  _validateRule = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(name, value, rule, options, messageVariables) {
    var cloneRule, originValidator, subRuleField, validator, messages, result, subResults, kv, fillVariableResult;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          cloneRule = _objectSpread2({}, rule); // Bug of `async-validator`
          // https://github.com/react-component/field-form/issues/316
          // https://github.com/react-component/field-form/issues/313
          delete cloneRule.ruleIndex;

          // https://github.com/ant-design/ant-design/issues/40497#issuecomment-1422282378
          AsyncValidator.warning = function () {
            return void 0;
          };
          if (cloneRule.validator) {
            originValidator = cloneRule.validator;
            cloneRule.validator = function () {
              try {
                return originValidator.apply(void 0, arguments);
              } catch (error) {
                console.error(error);
                return Promise.reject(CODE_LOGIC_ERROR);
              }
            };
          }

          // We should special handle array validate
          subRuleField = null;
          if (cloneRule && cloneRule.type === 'array' && cloneRule.defaultField) {
            subRuleField = cloneRule.defaultField;
            delete cloneRule.defaultField;
          }
          validator = new AsyncValidator(_defineProperty({}, name, [cloneRule]));
          messages = merge$1(defaultValidateMessages, options.validateMessages);
          validator.messages(messages);
          result = [];
          _context2.prev = 10;
          _context2.next = 13;
          return Promise.resolve(validator.validate(_defineProperty({}, name, value), _objectSpread2({}, options)));
        case 13:
          _context2.next = 18;
          break;
        case 15:
          _context2.prev = 15;
          _context2.t0 = _context2["catch"](10);
          if (_context2.t0.errors) {
            result = _context2.t0.errors.map(function (_ref4, index) {
              var message = _ref4.message;
              var mergedMessage = message === CODE_LOGIC_ERROR ? messages.default : message;
              return /*#__PURE__*/React.isValidElement(mergedMessage) ?
              /*#__PURE__*/
              // Wrap ReactNode with `key`
              React.cloneElement(mergedMessage, {
                key: "error_".concat(index)
              }) : mergedMessage;
            });
          }
        case 18:
          if (!(!result.length && subRuleField)) {
            _context2.next = 23;
            break;
          }
          _context2.next = 21;
          return Promise.all(value.map(function (subValue, i) {
            return validateRule("".concat(name, ".").concat(i), subValue, subRuleField, options, messageVariables);
          }));
        case 21:
          subResults = _context2.sent;
          return _context2.abrupt("return", subResults.reduce(function (prev, errors) {
            return [].concat(_toConsumableArray(prev), _toConsumableArray(errors));
          }, []));
        case 23:
          // Replace message with variables
          kv = _objectSpread2(_objectSpread2({}, rule), {}, {
            name: name,
            enum: (rule.enum || []).join(', ')
          }, messageVariables);
          fillVariableResult = result.map(function (error) {
            if (typeof error === 'string') {
              return replaceMessage(error, kv);
            }
            return error;
          });
          return _context2.abrupt("return", fillVariableResult);
        case 26:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[10, 15]]);
  }));
  return _validateRule.apply(this, arguments);
}
function validateRules(namePath, value, rules, options, validateFirst, messageVariables) {
  var name = namePath.join('.');

  // Fill rule with context
  var filledRules = rules.map(function (currentRule, ruleIndex) {
    var originValidatorFunc = currentRule.validator;
    var cloneRule = _objectSpread2(_objectSpread2({}, currentRule), {}, {
      ruleIndex: ruleIndex
    });

    // Replace validator if needed
    if (originValidatorFunc) {
      cloneRule.validator = function (rule, val, callback) {
        var hasPromise = false;

        // Wrap callback only accept when promise not provided
        var wrappedCallback = function wrappedCallback() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          // Wait a tick to make sure return type is a promise
          Promise.resolve().then(function () {
            warningOnce(!hasPromise, 'Your validator function has already return a promise. `callback` will be ignored.');
            if (!hasPromise) {
              callback.apply(void 0, args);
            }
          });
        };

        // Get promise
        var promise = originValidatorFunc(rule, val, wrappedCallback);
        hasPromise = promise && typeof promise.then === 'function' && typeof promise.catch === 'function';

        /**
         * 1. Use promise as the first priority.
         * 2. If promise not exist, use callback with warning instead
         */
        warningOnce(hasPromise, '`callback` is deprecated. Please return a promise instead.');
        if (hasPromise) {
          promise.then(function () {
            callback();
          }).catch(function (err) {
            callback(err || ' ');
          });
        }
      };
    }
    return cloneRule;
  }).sort(function (_ref, _ref2) {
    var w1 = _ref.warningOnly,
      i1 = _ref.ruleIndex;
    var w2 = _ref2.warningOnly,
      i2 = _ref2.ruleIndex;
    if (!!w1 === !!w2) {
      // Let keep origin order
      return i1 - i2;
    }
    if (w1) {
      return 1;
    }
    return -1;
  });

  // Do validate rules
  var summaryPromise;
  if (validateFirst === true) {
    // >>>>> Validate by serialization
    summaryPromise = new Promise( /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
        var i, rule, errors;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              i = 0;
            case 1:
              if (!(i < filledRules.length)) {
                _context.next = 12;
                break;
              }
              rule = filledRules[i];
              _context.next = 5;
              return validateRule(name, value, rule, options, messageVariables);
            case 5:
              errors = _context.sent;
              if (!errors.length) {
                _context.next = 9;
                break;
              }
              reject([{
                errors: errors,
                rule: rule
              }]);
              return _context.abrupt("return");
            case 9:
              i += 1;
              _context.next = 1;
              break;
            case 12:
              /* eslint-enable */

              resolve([]);
            case 13:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x6, _x7) {
        return _ref3.apply(this, arguments);
      };
    }());
  } else {
    // >>>>> Validate by parallel
    var rulePromises = filledRules.map(function (rule) {
      return validateRule(name, value, rule, options, messageVariables).then(function (errors) {
        return {
          errors: errors,
          rule: rule
        };
      });
    });
    summaryPromise = (validateFirst ? finishOnFirstFailed(rulePromises) : finishOnAllFailed(rulePromises)).then(function (errors) {
      // Always change to rejection for Field to catch
      return Promise.reject(errors);
    });
  }

  // Internal catch error to avoid console error log.
  summaryPromise.catch(function (e) {
    return e;
  });
  return summaryPromise;
}
function finishOnAllFailed(_x8) {
  return _finishOnAllFailed.apply(this, arguments);
}
function _finishOnAllFailed() {
  _finishOnAllFailed = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(rulePromises) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", Promise.all(rulePromises).then(function (errorsList) {
            var _ref5;
            var errors = (_ref5 = []).concat.apply(_ref5, _toConsumableArray(errorsList));
            return errors;
          }));
        case 1:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _finishOnAllFailed.apply(this, arguments);
}
function finishOnFirstFailed(_x9) {
  return _finishOnFirstFailed.apply(this, arguments);
}
function _finishOnFirstFailed() {
  _finishOnFirstFailed = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(rulePromises) {
    var count;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          count = 0;
          return _context4.abrupt("return", new Promise(function (resolve) {
            rulePromises.forEach(function (promise) {
              promise.then(function (ruleError) {
                if (ruleError.errors.length) {
                  resolve([ruleError]);
                }
                count += 1;
                if (count === rulePromises.length) {
                  resolve([]);
                }
              });
            });
          }));
        case 2:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _finishOnFirstFailed.apply(this, arguments);
}

/**
 * Convert name to internal supported format.
 * This function should keep since we still thinking if need support like `a.b.c` format.
 * 'a' => ['a']
 * 123 => [123]
 * ['a', 123] => ['a', 123]
 */
function getNamePath(path) {
  return toArray$2(path);
}
function cloneByNamePathList(store, namePathList) {
  var newStore = {};
  namePathList.forEach(function (namePath) {
    var value = get(store, namePath);
    newStore = set(newStore, namePath, value);
  });
  return newStore;
}

/**
 * Check if `namePathList` includes `namePath`.
 * @param namePathList A list of `InternalNamePath[]`
 * @param namePath Compare `InternalNamePath`
 * @param partialMatch True will make `[a, b]` match `[a, b, c]`
 */
function containsNamePath(namePathList, namePath) {
  var partialMatch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return namePathList && namePathList.some(function (path) {
    return matchNamePath(namePath, path, partialMatch);
  });
}

/**
 * Check if `namePath` is super set or equal of `subNamePath`.
 * @param namePath A list of `InternalNamePath[]`
 * @param subNamePath Compare `InternalNamePath`
 * @param partialMatch True will make `[a, b]` match `[a, b, c]`
 */
function matchNamePath(namePath, subNamePath) {
  var partialMatch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (!namePath || !subNamePath) {
    return false;
  }
  if (!partialMatch && namePath.length !== subNamePath.length) {
    return false;
  }
  return subNamePath.every(function (nameUnit, i) {
    return namePath[i] === nameUnit;
  });
}

// Like `shallowEqual`, but we not check the data which may cause re-render

function isSimilar(source, target) {
  if (source === target) {
    return true;
  }
  if (!source && target || source && !target) {
    return false;
  }
  if (!source || !target || _typeof(source) !== 'object' || _typeof(target) !== 'object') {
    return false;
  }
  var sourceKeys = Object.keys(source);
  var targetKeys = Object.keys(target);
  var keys = new Set([].concat(sourceKeys, targetKeys));
  return _toConsumableArray(keys).every(function (key) {
    var sourceValue = source[key];
    var targetValue = target[key];
    if (typeof sourceValue === 'function' && typeof targetValue === 'function') {
      return true;
    }
    return sourceValue === targetValue;
  });
}
function defaultGetValueFromEvent(valuePropName) {
  var event = arguments.length <= 1 ? undefined : arguments[1];
  if (event && event.target && _typeof(event.target) === 'object' && valuePropName in event.target) {
    return event.target[valuePropName];
  }
  return event;
}

/**
 * Moves an array item from one position in an array to another.
 *
 * Note: This is a pure function so a new array will be returned, instead
 * of altering the array argument.
 *
 * @param array         Array in which to move an item.         (required)
 * @param moveIndex     The index of the item to move.          (required)
 * @param toIndex       The index to move item at moveIndex to. (required)
 */
function move(array, moveIndex, toIndex) {
  var length = array.length;
  if (moveIndex < 0 || moveIndex >= length || toIndex < 0 || toIndex >= length) {
    return array;
  }
  var item = array[moveIndex];
  var diff = moveIndex - toIndex;
  if (diff > 0) {
    // move left
    return [].concat(_toConsumableArray(array.slice(0, toIndex)), [item], _toConsumableArray(array.slice(toIndex, moveIndex)), _toConsumableArray(array.slice(moveIndex + 1, length)));
  }
  if (diff < 0) {
    // move right
    return [].concat(_toConsumableArray(array.slice(0, moveIndex)), _toConsumableArray(array.slice(moveIndex + 1, toIndex + 1)), [item], _toConsumableArray(array.slice(toIndex + 1, length)));
  }
  return array;
}

var _excluded$e = ["name"];
var EMPTY_ERRORS = [];
function requireUpdate(shouldUpdate, prev, next, prevValue, nextValue, info) {
  if (typeof shouldUpdate === 'function') {
    return shouldUpdate(prev, next, 'source' in info ? {
      source: info.source
    } : {});
  }
  return prevValue !== nextValue;
}

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
// We use Class instead of Hooks here since it will cost much code by using Hooks.
var Field = /*#__PURE__*/function (_React$Component) {
  _inherits(Field, _React$Component);
  var _super = _createSuper(Field);
  // ============================== Subscriptions ==============================
  function Field(props) {
    var _this;
    _classCallCheck(this, Field);
    _this = _super.call(this, props);

    // Register on init
    _defineProperty(_assertThisInitialized(_this), "state", {
      resetCount: 0
    });
    _defineProperty(_assertThisInitialized(_this), "cancelRegisterFunc", null);
    _defineProperty(_assertThisInitialized(_this), "mounted", false);
    /**
     * Follow state should not management in State since it will async update by React.
     * This makes first render of form can not get correct state value.
     */
    _defineProperty(_assertThisInitialized(_this), "touched", false);
    /**
     * Mark when touched & validated. Currently only used for `dependencies`.
     * Note that we do not think field with `initialValue` is dirty
     * but this will be by `isFieldDirty` func.
     */
    _defineProperty(_assertThisInitialized(_this), "dirty", false);
    _defineProperty(_assertThisInitialized(_this), "validatePromise", void 0);
    _defineProperty(_assertThisInitialized(_this), "prevValidating", void 0);
    _defineProperty(_assertThisInitialized(_this), "errors", EMPTY_ERRORS);
    _defineProperty(_assertThisInitialized(_this), "warnings", EMPTY_ERRORS);
    _defineProperty(_assertThisInitialized(_this), "cancelRegister", function () {
      var _this$props = _this.props,
        preserve = _this$props.preserve,
        isListField = _this$props.isListField,
        name = _this$props.name;
      if (_this.cancelRegisterFunc) {
        _this.cancelRegisterFunc(isListField, preserve, getNamePath(name));
      }
      _this.cancelRegisterFunc = null;
    });
    // ================================== Utils ==================================
    _defineProperty(_assertThisInitialized(_this), "getNamePath", function () {
      var _this$props2 = _this.props,
        name = _this$props2.name,
        fieldContext = _this$props2.fieldContext;
      var _fieldContext$prefixN = fieldContext.prefixName,
        prefixName = _fieldContext$prefixN === void 0 ? [] : _fieldContext$prefixN;
      return name !== undefined ? [].concat(_toConsumableArray(prefixName), _toConsumableArray(name)) : [];
    });
    _defineProperty(_assertThisInitialized(_this), "getRules", function () {
      var _this$props3 = _this.props,
        _this$props3$rules = _this$props3.rules,
        rules = _this$props3$rules === void 0 ? [] : _this$props3$rules,
        fieldContext = _this$props3.fieldContext;
      return rules.map(function (rule) {
        if (typeof rule === 'function') {
          return rule(fieldContext);
        }
        return rule;
      });
    });
    _defineProperty(_assertThisInitialized(_this), "refresh", function () {
      if (!_this.mounted) return;

      /**
       * Clean up current node.
       */
      _this.setState(function (_ref) {
        var resetCount = _ref.resetCount;
        return {
          resetCount: resetCount + 1
        };
      });
    });
    // Event should only trigger when meta changed
    _defineProperty(_assertThisInitialized(_this), "metaCache", null);
    _defineProperty(_assertThisInitialized(_this), "triggerMetaEvent", function (destroy) {
      var onMetaChange = _this.props.onMetaChange;
      if (onMetaChange) {
        var _meta = _objectSpread2(_objectSpread2({}, _this.getMeta()), {}, {
          destroy: destroy
        });
        if (!isEqual(_this.metaCache, _meta)) {
          onMetaChange(_meta);
        }
        _this.metaCache = _meta;
      } else {
        _this.metaCache = null;
      }
    });
    // ========================= Field Entity Interfaces =========================
    // Trigger by store update. Check if need update the component
    _defineProperty(_assertThisInitialized(_this), "onStoreChange", function (prevStore, namePathList, info) {
      var _this$props4 = _this.props,
        shouldUpdate = _this$props4.shouldUpdate,
        _this$props4$dependen = _this$props4.dependencies,
        dependencies = _this$props4$dependen === void 0 ? [] : _this$props4$dependen,
        onReset = _this$props4.onReset;
      var store = info.store;
      var namePath = _this.getNamePath();
      var prevValue = _this.getValue(prevStore);
      var curValue = _this.getValue(store);
      var namePathMatch = namePathList && containsNamePath(namePathList, namePath);

      // `setFieldsValue` is a quick access to update related status
      if (info.type === 'valueUpdate' && info.source === 'external' && prevValue !== curValue) {
        _this.touched = true;
        _this.dirty = true;
        _this.validatePromise = null;
        _this.errors = EMPTY_ERRORS;
        _this.warnings = EMPTY_ERRORS;
        _this.triggerMetaEvent();
      }
      switch (info.type) {
        case 'reset':
          if (!namePathList || namePathMatch) {
            // Clean up state
            _this.touched = false;
            _this.dirty = false;
            _this.validatePromise = undefined;
            _this.errors = EMPTY_ERRORS;
            _this.warnings = EMPTY_ERRORS;
            _this.triggerMetaEvent();
            onReset === null || onReset === void 0 ? void 0 : onReset();
            _this.refresh();
            return;
          }
          break;

        /**
         * In case field with `preserve = false` nest deps like:
         * - A = 1 => show B
         * - B = 1 => show C
         * - Reset A, need clean B, C
         */
        case 'remove':
          {
            if (shouldUpdate) {
              _this.reRender();
              return;
            }
            break;
          }
        case 'setField':
          {
            if (namePathMatch) {
              var data = info.data;
              if ('touched' in data) {
                _this.touched = data.touched;
              }
              if ('validating' in data && !('originRCField' in data)) {
                _this.validatePromise = data.validating ? Promise.resolve([]) : null;
              }
              if ('errors' in data) {
                _this.errors = data.errors || EMPTY_ERRORS;
              }
              if ('warnings' in data) {
                _this.warnings = data.warnings || EMPTY_ERRORS;
              }
              _this.dirty = true;
              _this.triggerMetaEvent();
              _this.reRender();
              return;
            }

            // Handle update by `setField` with `shouldUpdate`
            if (shouldUpdate && !namePath.length && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) {
              _this.reRender();
              return;
            }
            break;
          }
        case 'dependenciesUpdate':
          {
            /**
             * Trigger when marked `dependencies` updated. Related fields will all update
             */
            var dependencyList = dependencies.map(getNamePath);
            // No need for `namePathMath` check and `shouldUpdate` check, since `valueUpdate` will be
            // emitted earlier and they will work there
            // If set it may cause unnecessary twice rerendering
            if (dependencyList.some(function (dependency) {
              return containsNamePath(info.relatedFields, dependency);
            })) {
              _this.reRender();
              return;
            }
            break;
          }
        default:
          // 1. If `namePath` exists in `namePathList`, means it's related value and should update
          //      For example <List name="list"><Field name={['list', 0]}></List>
          //      If `namePathList` is [['list']] (List value update), Field should be updated
          //      If `namePathList` is [['list', 0]] (Field value update), List shouldn't be updated
          // 2.
          //   2.1 If `dependencies` is set, `name` is not set and `shouldUpdate` is not set,
          //       don't use `shouldUpdate`. `dependencies` is view as a shortcut if `shouldUpdate`
          //       is not provided
          //   2.2 If `shouldUpdate` provided, use customize logic to update the field
          //       else to check if value changed
          if (namePathMatch || (!dependencies.length || namePath.length || shouldUpdate) && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) {
            _this.reRender();
            return;
          }
          break;
      }
      if (shouldUpdate === true) {
        _this.reRender();
      }
    });
    _defineProperty(_assertThisInitialized(_this), "validateRules", function (options) {
      // We should fixed namePath & value to avoid developer change then by form function
      var namePath = _this.getNamePath();
      var currentValue = _this.getValue();
      var _ref2 = options || {},
        triggerName = _ref2.triggerName,
        _ref2$validateOnly = _ref2.validateOnly,
        validateOnly = _ref2$validateOnly === void 0 ? false : _ref2$validateOnly;

      // Force change to async to avoid rule OOD under renderProps field
      var rootPromise = Promise.resolve().then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this$props5, _this$props5$validate, validateFirst, messageVariables, validateDebounce, filteredRules, promise;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (_this.mounted) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return", []);
            case 2:
              _this$props5 = _this.props, _this$props5$validate = _this$props5.validateFirst, validateFirst = _this$props5$validate === void 0 ? false : _this$props5$validate, messageVariables = _this$props5.messageVariables, validateDebounce = _this$props5.validateDebounce; // Start validate
              filteredRules = _this.getRules();
              if (triggerName) {
                filteredRules = filteredRules.filter(function (rule) {
                  return rule;
                }).filter(function (rule) {
                  var validateTrigger = rule.validateTrigger;
                  if (!validateTrigger) {
                    return true;
                  }
                  var triggerList = toArray$2(validateTrigger);
                  return triggerList.includes(triggerName);
                });
              }

              // Wait for debounce. Skip if no `triggerName` since its from `validateFields / submit`
              if (!(validateDebounce && triggerName)) {
                _context.next = 10;
                break;
              }
              _context.next = 8;
              return new Promise(function (resolve) {
                setTimeout(resolve, validateDebounce);
              });
            case 8:
              if (!(_this.validatePromise !== rootPromise)) {
                _context.next = 10;
                break;
              }
              return _context.abrupt("return", []);
            case 10:
              promise = validateRules(namePath, currentValue, filteredRules, options, validateFirst, messageVariables);
              promise.catch(function (e) {
                return e;
              }).then(function () {
                var ruleErrors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : EMPTY_ERRORS;
                if (_this.validatePromise === rootPromise) {
                  var _ruleErrors$forEach;
                  _this.validatePromise = null;

                  // Get errors & warnings
                  var nextErrors = [];
                  var nextWarnings = [];
                  (_ruleErrors$forEach = ruleErrors.forEach) === null || _ruleErrors$forEach === void 0 ? void 0 : _ruleErrors$forEach.call(ruleErrors, function (_ref4) {
                    var warningOnly = _ref4.rule.warningOnly,
                      _ref4$errors = _ref4.errors,
                      errors = _ref4$errors === void 0 ? EMPTY_ERRORS : _ref4$errors;
                    if (warningOnly) {
                      nextWarnings.push.apply(nextWarnings, _toConsumableArray(errors));
                    } else {
                      nextErrors.push.apply(nextErrors, _toConsumableArray(errors));
                    }
                  });
                  _this.errors = nextErrors;
                  _this.warnings = nextWarnings;
                  _this.triggerMetaEvent();
                  _this.reRender();
                }
              });
              return _context.abrupt("return", promise);
            case 13:
            case "end":
              return _context.stop();
          }
        }, _callee);
      })));
      if (validateOnly) {
        return rootPromise;
      }
      _this.validatePromise = rootPromise;
      _this.dirty = true;
      _this.errors = EMPTY_ERRORS;
      _this.warnings = EMPTY_ERRORS;
      _this.triggerMetaEvent();

      // Force trigger re-render since we need sync renderProps with new meta
      _this.reRender();
      return rootPromise;
    });
    _defineProperty(_assertThisInitialized(_this), "isFieldValidating", function () {
      return !!_this.validatePromise;
    });
    _defineProperty(_assertThisInitialized(_this), "isFieldTouched", function () {
      return _this.touched;
    });
    _defineProperty(_assertThisInitialized(_this), "isFieldDirty", function () {
      // Touched or validate or has initialValue
      if (_this.dirty || _this.props.initialValue !== undefined) {
        return true;
      }

      // Form set initialValue
      var fieldContext = _this.props.fieldContext;
      var _fieldContext$getInte = fieldContext.getInternalHooks(HOOK_MARK),
        getInitialValue = _fieldContext$getInte.getInitialValue;
      if (getInitialValue(_this.getNamePath()) !== undefined) {
        return true;
      }
      return false;
    });
    _defineProperty(_assertThisInitialized(_this), "getErrors", function () {
      return _this.errors;
    });
    _defineProperty(_assertThisInitialized(_this), "getWarnings", function () {
      return _this.warnings;
    });
    _defineProperty(_assertThisInitialized(_this), "isListField", function () {
      return _this.props.isListField;
    });
    _defineProperty(_assertThisInitialized(_this), "isList", function () {
      return _this.props.isList;
    });
    _defineProperty(_assertThisInitialized(_this), "isPreserve", function () {
      return _this.props.preserve;
    });
    // ============================= Child Component =============================
    _defineProperty(_assertThisInitialized(_this), "getMeta", function () {
      // Make error & validating in cache to save perf
      _this.prevValidating = _this.isFieldValidating();
      var meta = {
        touched: _this.isFieldTouched(),
        validating: _this.prevValidating,
        errors: _this.errors,
        warnings: _this.warnings,
        name: _this.getNamePath(),
        validated: _this.validatePromise === null
      };
      return meta;
    });
    // Only return validate child node. If invalidate, will do nothing about field.
    _defineProperty(_assertThisInitialized(_this), "getOnlyChild", function (children) {
      // Support render props
      if (typeof children === 'function') {
        var _meta2 = _this.getMeta();
        return _objectSpread2(_objectSpread2({}, _this.getOnlyChild(children(_this.getControlled(), _meta2, _this.props.fieldContext))), {}, {
          isFunction: true
        });
      }

      // Filed element only
      var childList = toArray$3(children);
      if (childList.length !== 1 || ! /*#__PURE__*/React.isValidElement(childList[0])) {
        return {
          child: childList,
          isFunction: false
        };
      }
      return {
        child: childList[0],
        isFunction: false
      };
    });
    // ============================== Field Control ==============================
    _defineProperty(_assertThisInitialized(_this), "getValue", function (store) {
      var getFieldsValue = _this.props.fieldContext.getFieldsValue;
      var namePath = _this.getNamePath();
      return get(store || getFieldsValue(true), namePath);
    });
    _defineProperty(_assertThisInitialized(_this), "getControlled", function () {
      var childProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _this$props6 = _this.props,
        trigger = _this$props6.trigger,
        validateTrigger = _this$props6.validateTrigger,
        getValueFromEvent = _this$props6.getValueFromEvent,
        normalize = _this$props6.normalize,
        valuePropName = _this$props6.valuePropName,
        getValueProps = _this$props6.getValueProps,
        fieldContext = _this$props6.fieldContext;
      var mergedValidateTrigger = validateTrigger !== undefined ? validateTrigger : fieldContext.validateTrigger;
      var namePath = _this.getNamePath();
      var getInternalHooks = fieldContext.getInternalHooks,
        getFieldsValue = fieldContext.getFieldsValue;
      var _getInternalHooks = getInternalHooks(HOOK_MARK),
        dispatch = _getInternalHooks.dispatch;
      var value = _this.getValue();
      var mergedGetValueProps = getValueProps || function (val) {
        return _defineProperty({}, valuePropName, val);
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      var originTriggerFunc = childProps[trigger];
      var control = _objectSpread2(_objectSpread2({}, childProps), mergedGetValueProps(value));

      // Add trigger
      control[trigger] = function () {
        // Mark as touched
        _this.touched = true;
        _this.dirty = true;
        _this.triggerMetaEvent();
        var newValue;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        if (getValueFromEvent) {
          newValue = getValueFromEvent.apply(void 0, args);
        } else {
          newValue = defaultGetValueFromEvent.apply(void 0, [valuePropName].concat(args));
        }
        if (normalize) {
          newValue = normalize(newValue, value, getFieldsValue(true));
        }
        dispatch({
          type: 'updateValue',
          namePath: namePath,
          value: newValue
        });
        if (originTriggerFunc) {
          originTriggerFunc.apply(void 0, args);
        }
      };

      // Add validateTrigger
      var validateTriggerList = toArray$2(mergedValidateTrigger || []);
      validateTriggerList.forEach(function (triggerName) {
        // Wrap additional function of component, so that we can get latest value from store
        var originTrigger = control[triggerName];
        control[triggerName] = function () {
          if (originTrigger) {
            originTrigger.apply(void 0, arguments);
          }

          // Always use latest rules
          var rules = _this.props.rules;
          if (rules && rules.length) {
            // We dispatch validate to root,
            // since it will update related data with other field with same name
            dispatch({
              type: 'validateField',
              namePath: namePath,
              triggerName: triggerName
            });
          }
        };
      });
      return control;
    });
    if (props.fieldContext) {
      var getInternalHooks = props.fieldContext.getInternalHooks;
      var _getInternalHooks2 = getInternalHooks(HOOK_MARK),
        initEntityValue = _getInternalHooks2.initEntityValue;
      initEntityValue(_assertThisInitialized(_this));
    }
    return _this;
  }
  _createClass(Field, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props7 = this.props,
        shouldUpdate = _this$props7.shouldUpdate,
        fieldContext = _this$props7.fieldContext;
      this.mounted = true;

      // Register on init
      if (fieldContext) {
        var getInternalHooks = fieldContext.getInternalHooks;
        var _getInternalHooks3 = getInternalHooks(HOOK_MARK),
          registerField = _getInternalHooks3.registerField;
        this.cancelRegisterFunc = registerField(this);
      }

      // One more render for component in case fields not ready
      if (shouldUpdate === true) {
        this.reRender();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cancelRegister();
      this.triggerMetaEvent(true);
      this.mounted = false;
    }
  }, {
    key: "reRender",
    value: function reRender() {
      if (!this.mounted) return;
      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      var resetCount = this.state.resetCount;
      var children = this.props.children;
      var _this$getOnlyChild = this.getOnlyChild(children),
        child = _this$getOnlyChild.child,
        isFunction = _this$getOnlyChild.isFunction;

      // Not need to `cloneElement` since user can handle this in render function self
      var returnChildNode;
      if (isFunction) {
        returnChildNode = child;
      } else if ( /*#__PURE__*/React.isValidElement(child)) {
        returnChildNode = /*#__PURE__*/React.cloneElement(child, this.getControlled(child.props));
      } else {
        warningOnce(!child, '`children` of Field is not validate ReactElement.');
        returnChildNode = child;
      }
      return /*#__PURE__*/React.createElement(React.Fragment, {
        key: resetCount
      }, returnChildNode);
    }
  }]);
  return Field;
}(React.Component);
_defineProperty(Field, "contextType", Context);
_defineProperty(Field, "defaultProps", {
  trigger: 'onChange',
  valuePropName: 'value'
});
function WrapperField(_ref6) {
  var name = _ref6.name,
    restProps = _objectWithoutProperties(_ref6, _excluded$e);
  var fieldContext = React.useContext(Context);
  var listContext = React.useContext(ListContext);
  var namePath = name !== undefined ? getNamePath(name) : undefined;
  var key = 'keep';
  if (!restProps.isListField) {
    key = "_".concat((namePath || []).join('_'));
  }

  // Warning if it's a directly list field.
  // We can still support multiple level field preserve.
  if (process.env.NODE_ENV !== 'production' && restProps.preserve === false && restProps.isListField && namePath.length <= 1) {
    warningOnce(false, '`preserve` should not apply on Form.List fields.');
  }
  return /*#__PURE__*/React.createElement(Field, _extends$1({
    key: key,
    name: namePath,
    isListField: !!listContext
  }, restProps, {
    fieldContext: fieldContext
  }));
}

function List$1(_ref) {
  var name = _ref.name,
    initialValue = _ref.initialValue,
    children = _ref.children,
    rules = _ref.rules,
    validateTrigger = _ref.validateTrigger,
    isListField = _ref.isListField;
  var context = React.useContext(Context);
  var wrapperListContext = React.useContext(ListContext);
  var keyRef = React.useRef({
    keys: [],
    id: 0
  });
  var keyManager = keyRef.current;
  var prefixName = React.useMemo(function () {
    var parentPrefixName = getNamePath(context.prefixName) || [];
    return [].concat(_toConsumableArray(parentPrefixName), _toConsumableArray(getNamePath(name)));
  }, [context.prefixName, name]);
  var fieldContext = React.useMemo(function () {
    return _objectSpread2(_objectSpread2({}, context), {}, {
      prefixName: prefixName
    });
  }, [context, prefixName]);

  // List context
  var listContext = React.useMemo(function () {
    return {
      getKey: function getKey(namePath) {
        var len = prefixName.length;
        var pathName = namePath[len];
        return [keyManager.keys[pathName], namePath.slice(len + 1)];
      }
    };
  }, [prefixName]);

  // User should not pass `children` as other type.
  if (typeof children !== 'function') {
    warningOnce(false, 'Form.List only accepts function as children.');
    return null;
  }
  var shouldUpdate = function shouldUpdate(prevValue, nextValue, _ref2) {
    var source = _ref2.source;
    if (source === 'internal') {
      return false;
    }
    return prevValue !== nextValue;
  };
  return /*#__PURE__*/React.createElement(ListContext.Provider, {
    value: listContext
  }, /*#__PURE__*/React.createElement(Context.Provider, {
    value: fieldContext
  }, /*#__PURE__*/React.createElement(WrapperField, {
    name: [],
    shouldUpdate: shouldUpdate,
    rules: rules,
    validateTrigger: validateTrigger,
    initialValue: initialValue,
    isList: true,
    isListField: isListField !== null && isListField !== void 0 ? isListField : !!wrapperListContext
  }, function (_ref3, meta) {
    var _ref3$value = _ref3.value,
      value = _ref3$value === void 0 ? [] : _ref3$value,
      onChange = _ref3.onChange;
    var getFieldValue = context.getFieldValue;
    var getNewValue = function getNewValue() {
      var values = getFieldValue(prefixName || []);
      return values || [];
    };
    /**
     * Always get latest value in case user update fields by `form` api.
     */
    var operations = {
      add: function add(defaultValue, index) {
        // Mapping keys
        var newValue = getNewValue();
        if (index >= 0 && index <= newValue.length) {
          keyManager.keys = [].concat(_toConsumableArray(keyManager.keys.slice(0, index)), [keyManager.id], _toConsumableArray(keyManager.keys.slice(index)));
          onChange([].concat(_toConsumableArray(newValue.slice(0, index)), [defaultValue], _toConsumableArray(newValue.slice(index))));
        } else {
          if (process.env.NODE_ENV !== 'production' && (index < 0 || index > newValue.length)) {
            warningOnce(false, 'The second parameter of the add function should be a valid positive number.');
          }
          keyManager.keys = [].concat(_toConsumableArray(keyManager.keys), [keyManager.id]);
          onChange([].concat(_toConsumableArray(newValue), [defaultValue]));
        }
        keyManager.id += 1;
      },
      remove: function remove(index) {
        var newValue = getNewValue();
        var indexSet = new Set(Array.isArray(index) ? index : [index]);
        if (indexSet.size <= 0) {
          return;
        }
        keyManager.keys = keyManager.keys.filter(function (_, keysIndex) {
          return !indexSet.has(keysIndex);
        });

        // Trigger store change
        onChange(newValue.filter(function (_, valueIndex) {
          return !indexSet.has(valueIndex);
        }));
      },
      move: function move$1(from, to) {
        if (from === to) {
          return;
        }
        var newValue = getNewValue();

        // Do not handle out of range
        if (from < 0 || from >= newValue.length || to < 0 || to >= newValue.length) {
          return;
        }
        keyManager.keys = move(keyManager.keys, from, to);

        // Trigger store change
        onChange(move(newValue, from, to));
      }
    };
    var listValue = value || [];
    if (!Array.isArray(listValue)) {
      listValue = [];
      if (process.env.NODE_ENV !== 'production') {
        warningOnce(false, "Current value of '".concat(prefixName.join(' > '), "' is not an array type."));
      }
    }
    return children(listValue.map(function (__, index) {
      var key = keyManager.keys[index];
      if (key === undefined) {
        keyManager.keys[index] = keyManager.id;
        key = keyManager.keys[index];
        keyManager.id += 1;
      }
      return {
        name: index,
        key: key,
        isListField: true
      };
    }), operations, meta);
  })));
}

function allPromiseFinish(promiseList) {
  var hasError = false;
  var count = promiseList.length;
  var results = [];
  if (!promiseList.length) {
    return Promise.resolve([]);
  }
  return new Promise(function (resolve, reject) {
    promiseList.forEach(function (promise, index) {
      promise.catch(function (e) {
        hasError = true;
        return e;
      }).then(function (result) {
        count -= 1;
        results[index] = result;
        if (count > 0) {
          return;
        }
        if (hasError) {
          reject(results);
        }
        resolve(results);
      });
    });
  });
}

var SPLIT = '__@field_split__';

/**
 * Convert name path into string to fast the fetch speed of Map.
 */
function normalize(namePath) {
  return namePath.map(function (cell) {
    return "".concat(_typeof(cell), ":").concat(cell);
  })
  // Magic split
  .join(SPLIT);
}

/**
 * NameMap like a `Map` but accepts `string[]` as key.
 */
var NameMap = /*#__PURE__*/function () {
  function NameMap() {
    _classCallCheck(this, NameMap);
    _defineProperty(this, "kvs", new Map());
  }
  _createClass(NameMap, [{
    key: "set",
    value: function set(key, value) {
      this.kvs.set(normalize(key), value);
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.kvs.get(normalize(key));
    }
  }, {
    key: "update",
    value: function update(key, updater) {
      var origin = this.get(key);
      var next = updater(origin);
      if (!next) {
        this.delete(key);
      } else {
        this.set(key, next);
      }
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      this.kvs.delete(normalize(key));
    }

    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function map(callback) {
      return _toConsumableArray(this.kvs.entries()).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];
        var cells = key.split(SPLIT);
        return callback({
          key: cells.map(function (cell) {
            var _cell$match = cell.match(/^([^:]*):(.*)$/),
              _cell$match2 = _slicedToArray(_cell$match, 3),
              type = _cell$match2[1],
              unit = _cell$match2[2];
            return type === 'number' ? Number(unit) : unit;
          }),
          value: value
        });
      });
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var json = {};
      this.map(function (_ref3) {
        var key = _ref3.key,
          value = _ref3.value;
        json[key.join('.')] = value;
        return null;
      });
      return json;
    }
  }]);
  return NameMap;
}();

var _excluded$d = ["name"];
var FormStore = /*#__PURE__*/_createClass(function FormStore(forceRootUpdate) {
  var _this = this;
  _classCallCheck(this, FormStore);
  _defineProperty(this, "formHooked", false);
  _defineProperty(this, "forceRootUpdate", void 0);
  _defineProperty(this, "subscribable", true);
  _defineProperty(this, "store", {});
  _defineProperty(this, "fieldEntities", []);
  _defineProperty(this, "initialValues", {});
  _defineProperty(this, "callbacks", {});
  _defineProperty(this, "validateMessages", null);
  _defineProperty(this, "preserve", null);
  _defineProperty(this, "lastValidatePromise", null);
  _defineProperty(this, "getForm", function () {
    return {
      getFieldValue: _this.getFieldValue,
      getFieldsValue: _this.getFieldsValue,
      getFieldError: _this.getFieldError,
      getFieldWarning: _this.getFieldWarning,
      getFieldsError: _this.getFieldsError,
      isFieldsTouched: _this.isFieldsTouched,
      isFieldTouched: _this.isFieldTouched,
      isFieldValidating: _this.isFieldValidating,
      isFieldsValidating: _this.isFieldsValidating,
      resetFields: _this.resetFields,
      setFields: _this.setFields,
      setFieldValue: _this.setFieldValue,
      setFieldsValue: _this.setFieldsValue,
      validateFields: _this.validateFields,
      submit: _this.submit,
      _init: true,
      getInternalHooks: _this.getInternalHooks
    };
  });
  // ======================== Internal Hooks ========================
  _defineProperty(this, "getInternalHooks", function (key) {
    if (key === HOOK_MARK) {
      _this.formHooked = true;
      return {
        dispatch: _this.dispatch,
        initEntityValue: _this.initEntityValue,
        registerField: _this.registerField,
        useSubscribe: _this.useSubscribe,
        setInitialValues: _this.setInitialValues,
        destroyForm: _this.destroyForm,
        setCallbacks: _this.setCallbacks,
        setValidateMessages: _this.setValidateMessages,
        getFields: _this.getFields,
        setPreserve: _this.setPreserve,
        getInitialValue: _this.getInitialValue,
        registerWatch: _this.registerWatch
      };
    }
    warningOnce(false, '`getInternalHooks` is internal usage. Should not call directly.');
    return null;
  });
  _defineProperty(this, "useSubscribe", function (subscribable) {
    _this.subscribable = subscribable;
  });
  /**
   * Record prev Form unmount fieldEntities which config preserve false.
   * This need to be refill with initialValues instead of store value.
   */
  _defineProperty(this, "prevWithoutPreserves", null);
  /**
   * First time `setInitialValues` should update store with initial value
   */
  _defineProperty(this, "setInitialValues", function (initialValues, init) {
    _this.initialValues = initialValues || {};
    if (init) {
      var _this$prevWithoutPres;
      var nextStore = merge$1(initialValues, _this.store);

      // We will take consider prev form unmount fields.
      // When the field is not `preserve`, we need fill this with initialValues instead of store.
      // eslint-disable-next-line array-callback-return
      (_this$prevWithoutPres = _this.prevWithoutPreserves) === null || _this$prevWithoutPres === void 0 ? void 0 : _this$prevWithoutPres.map(function (_ref) {
        var namePath = _ref.key;
        nextStore = set(nextStore, namePath, get(initialValues, namePath));
      });
      _this.prevWithoutPreserves = null;
      _this.updateStore(nextStore);
    }
  });
  _defineProperty(this, "destroyForm", function () {
    var prevWithoutPreserves = new NameMap();
    _this.getFieldEntities(true).forEach(function (entity) {
      if (!_this.isMergedPreserve(entity.isPreserve())) {
        prevWithoutPreserves.set(entity.getNamePath(), true);
      }
    });
    _this.prevWithoutPreserves = prevWithoutPreserves;
  });
  _defineProperty(this, "getInitialValue", function (namePath) {
    var initValue = get(_this.initialValues, namePath);

    // Not cloneDeep when without `namePath`
    return namePath.length ? merge$1(initValue) : initValue;
  });
  _defineProperty(this, "setCallbacks", function (callbacks) {
    _this.callbacks = callbacks;
  });
  _defineProperty(this, "setValidateMessages", function (validateMessages) {
    _this.validateMessages = validateMessages;
  });
  _defineProperty(this, "setPreserve", function (preserve) {
    _this.preserve = preserve;
  });
  // ============================= Watch ============================
  _defineProperty(this, "watchList", []);
  _defineProperty(this, "registerWatch", function (callback) {
    _this.watchList.push(callback);
    return function () {
      _this.watchList = _this.watchList.filter(function (fn) {
        return fn !== callback;
      });
    };
  });
  _defineProperty(this, "notifyWatch", function () {
    var namePath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    // No need to cost perf when nothing need to watch
    if (_this.watchList.length) {
      var values = _this.getFieldsValue();
      var allValues = _this.getFieldsValue(true);
      _this.watchList.forEach(function (callback) {
        callback(values, allValues, namePath);
      });
    }
  });
  // ========================== Dev Warning =========================
  _defineProperty(this, "timeoutId", null);
  _defineProperty(this, "warningUnhooked", function () {
    if (process.env.NODE_ENV !== 'production' && !_this.timeoutId && typeof window !== 'undefined') {
      _this.timeoutId = setTimeout(function () {
        _this.timeoutId = null;
        if (!_this.formHooked) {
          warningOnce(false, 'Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?');
        }
      });
    }
  });
  // ============================ Store =============================
  _defineProperty(this, "updateStore", function (nextStore) {
    _this.store = nextStore;
  });
  // ============================ Fields ============================
  /**
   * Get registered field entities.
   * @param pure Only return field which has a `name`. Default: false
   */
  _defineProperty(this, "getFieldEntities", function () {
    var pure = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (!pure) {
      return _this.fieldEntities;
    }
    return _this.fieldEntities.filter(function (field) {
      return field.getNamePath().length;
    });
  });
  _defineProperty(this, "getFieldsMap", function () {
    var pure = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var cache = new NameMap();
    _this.getFieldEntities(pure).forEach(function (field) {
      var namePath = field.getNamePath();
      cache.set(namePath, field);
    });
    return cache;
  });
  _defineProperty(this, "getFieldEntitiesForNamePathList", function (nameList) {
    if (!nameList) {
      return _this.getFieldEntities(true);
    }
    var cache = _this.getFieldsMap(true);
    return nameList.map(function (name) {
      var namePath = getNamePath(name);
      return cache.get(namePath) || {
        INVALIDATE_NAME_PATH: getNamePath(name)
      };
    });
  });
  _defineProperty(this, "getFieldsValue", function (nameList, filterFunc) {
    _this.warningUnhooked();

    // Fill args
    var mergedNameList;
    var mergedFilterFunc;
    var mergedStrict;
    if (nameList === true || Array.isArray(nameList)) {
      mergedNameList = nameList;
      mergedFilterFunc = filterFunc;
    } else if (nameList && _typeof(nameList) === 'object') {
      mergedStrict = nameList.strict;
      mergedFilterFunc = nameList.filter;
    }
    if (mergedNameList === true && !mergedFilterFunc) {
      return _this.store;
    }
    var fieldEntities = _this.getFieldEntitiesForNamePathList(Array.isArray(mergedNameList) ? mergedNameList : null);
    var filteredNameList = [];
    fieldEntities.forEach(function (entity) {
      var _isListField, _ref3;
      var namePath = 'INVALIDATE_NAME_PATH' in entity ? entity.INVALIDATE_NAME_PATH : entity.getNamePath();

      // Ignore when it's a list item and not specific the namePath,
      // since parent field is already take in count
      if (mergedStrict) {
        var _isList, _ref2;
        if ((_isList = (_ref2 = entity).isList) !== null && _isList !== void 0 && _isList.call(_ref2)) {
          return;
        }
      } else if (!mergedNameList && (_isListField = (_ref3 = entity).isListField) !== null && _isListField !== void 0 && _isListField.call(_ref3)) {
        return;
      }
      if (!mergedFilterFunc) {
        filteredNameList.push(namePath);
      } else {
        var meta = 'getMeta' in entity ? entity.getMeta() : null;
        if (mergedFilterFunc(meta)) {
          filteredNameList.push(namePath);
        }
      }
    });
    return cloneByNamePathList(_this.store, filteredNameList.map(getNamePath));
  });
  _defineProperty(this, "getFieldValue", function (name) {
    _this.warningUnhooked();
    var namePath = getNamePath(name);
    return get(_this.store, namePath);
  });
  _defineProperty(this, "getFieldsError", function (nameList) {
    _this.warningUnhooked();
    var fieldEntities = _this.getFieldEntitiesForNamePathList(nameList);
    return fieldEntities.map(function (entity, index) {
      if (entity && !('INVALIDATE_NAME_PATH' in entity)) {
        return {
          name: entity.getNamePath(),
          errors: entity.getErrors(),
          warnings: entity.getWarnings()
        };
      }
      return {
        name: getNamePath(nameList[index]),
        errors: [],
        warnings: []
      };
    });
  });
  _defineProperty(this, "getFieldError", function (name) {
    _this.warningUnhooked();
    var namePath = getNamePath(name);
    var fieldError = _this.getFieldsError([namePath])[0];
    return fieldError.errors;
  });
  _defineProperty(this, "getFieldWarning", function (name) {
    _this.warningUnhooked();
    var namePath = getNamePath(name);
    var fieldError = _this.getFieldsError([namePath])[0];
    return fieldError.warnings;
  });
  _defineProperty(this, "isFieldsTouched", function () {
    _this.warningUnhooked();
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var arg0 = args[0],
      arg1 = args[1];
    var namePathList;
    var isAllFieldsTouched = false;
    if (args.length === 0) {
      namePathList = null;
    } else if (args.length === 1) {
      if (Array.isArray(arg0)) {
        namePathList = arg0.map(getNamePath);
        isAllFieldsTouched = false;
      } else {
        namePathList = null;
        isAllFieldsTouched = arg0;
      }
    } else {
      namePathList = arg0.map(getNamePath);
      isAllFieldsTouched = arg1;
    }
    var fieldEntities = _this.getFieldEntities(true);
    var isFieldTouched = function isFieldTouched(field) {
      return field.isFieldTouched();
    };

    // ===== Will get fully compare when not config namePathList =====
    if (!namePathList) {
      return isAllFieldsTouched ? fieldEntities.every(isFieldTouched) : fieldEntities.some(isFieldTouched);
    }

    // Generate a nest tree for validate
    var map = new NameMap();
    namePathList.forEach(function (shortNamePath) {
      map.set(shortNamePath, []);
    });
    fieldEntities.forEach(function (field) {
      var fieldNamePath = field.getNamePath();

      // Find matched entity and put into list
      namePathList.forEach(function (shortNamePath) {
        if (shortNamePath.every(function (nameUnit, i) {
          return fieldNamePath[i] === nameUnit;
        })) {
          map.update(shortNamePath, function (list) {
            return [].concat(_toConsumableArray(list), [field]);
          });
        }
      });
    });

    // Check if NameMap value is touched
    var isNamePathListTouched = function isNamePathListTouched(entities) {
      return entities.some(isFieldTouched);
    };
    var namePathListEntities = map.map(function (_ref4) {
      var value = _ref4.value;
      return value;
    });
    return isAllFieldsTouched ? namePathListEntities.every(isNamePathListTouched) : namePathListEntities.some(isNamePathListTouched);
  });
  _defineProperty(this, "isFieldTouched", function (name) {
    _this.warningUnhooked();
    return _this.isFieldsTouched([name]);
  });
  _defineProperty(this, "isFieldsValidating", function (nameList) {
    _this.warningUnhooked();
    var fieldEntities = _this.getFieldEntities();
    if (!nameList) {
      return fieldEntities.some(function (testField) {
        return testField.isFieldValidating();
      });
    }
    var namePathList = nameList.map(getNamePath);
    return fieldEntities.some(function (testField) {
      var fieldNamePath = testField.getNamePath();
      return containsNamePath(namePathList, fieldNamePath) && testField.isFieldValidating();
    });
  });
  _defineProperty(this, "isFieldValidating", function (name) {
    _this.warningUnhooked();
    return _this.isFieldsValidating([name]);
  });
  /**
   * Reset Field with field `initialValue` prop.
   * Can pass `entities` or `namePathList` or just nothing.
   */
  _defineProperty(this, "resetWithFieldInitialValue", function () {
    var info = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // Create cache
    var cache = new NameMap();
    var fieldEntities = _this.getFieldEntities(true);
    fieldEntities.forEach(function (field) {
      var initialValue = field.props.initialValue;
      var namePath = field.getNamePath();

      // Record only if has `initialValue`
      if (initialValue !== undefined) {
        var records = cache.get(namePath) || new Set();
        records.add({
          entity: field,
          value: initialValue
        });
        cache.set(namePath, records);
      }
    });

    // Reset
    var resetWithFields = function resetWithFields(entities) {
      entities.forEach(function (field) {
        var initialValue = field.props.initialValue;
        if (initialValue !== undefined) {
          var namePath = field.getNamePath();
          var formInitialValue = _this.getInitialValue(namePath);
          if (formInitialValue !== undefined) {
            // Warning if conflict with form initialValues and do not modify value
            warningOnce(false, "Form already set 'initialValues' with path '".concat(namePath.join('.'), "'. Field can not overwrite it."));
          } else {
            var records = cache.get(namePath);
            if (records && records.size > 1) {
              // Warning if multiple field set `initialValue`and do not modify value
              warningOnce(false, "Multiple Field with path '".concat(namePath.join('.'), "' set 'initialValue'. Can not decide which one to pick."));
            } else if (records) {
              var originValue = _this.getFieldValue(namePath);
              // Set `initialValue`
              if (!info.skipExist || originValue === undefined) {
                _this.updateStore(set(_this.store, namePath, _toConsumableArray(records)[0].value));
              }
            }
          }
        }
      });
    };
    var requiredFieldEntities;
    if (info.entities) {
      requiredFieldEntities = info.entities;
    } else if (info.namePathList) {
      requiredFieldEntities = [];
      info.namePathList.forEach(function (namePath) {
        var records = cache.get(namePath);
        if (records) {
          var _requiredFieldEntitie;
          (_requiredFieldEntitie = requiredFieldEntities).push.apply(_requiredFieldEntitie, _toConsumableArray(_toConsumableArray(records).map(function (r) {
            return r.entity;
          })));
        }
      });
    } else {
      requiredFieldEntities = fieldEntities;
    }
    resetWithFields(requiredFieldEntities);
  });
  _defineProperty(this, "resetFields", function (nameList) {
    _this.warningUnhooked();
    var prevStore = _this.store;
    if (!nameList) {
      _this.updateStore(merge$1(_this.initialValues));
      _this.resetWithFieldInitialValue();
      _this.notifyObservers(prevStore, null, {
        type: 'reset'
      });
      _this.notifyWatch();
      return;
    }

    // Reset by `nameList`
    var namePathList = nameList.map(getNamePath);
    namePathList.forEach(function (namePath) {
      var initialValue = _this.getInitialValue(namePath);
      _this.updateStore(set(_this.store, namePath, initialValue));
    });
    _this.resetWithFieldInitialValue({
      namePathList: namePathList
    });
    _this.notifyObservers(prevStore, namePathList, {
      type: 'reset'
    });
    _this.notifyWatch(namePathList);
  });
  _defineProperty(this, "setFields", function (fields) {
    _this.warningUnhooked();
    var prevStore = _this.store;
    var namePathList = [];
    fields.forEach(function (fieldData) {
      var name = fieldData.name,
        data = _objectWithoutProperties(fieldData, _excluded$d);
      var namePath = getNamePath(name);
      namePathList.push(namePath);

      // Value
      if ('value' in data) {
        _this.updateStore(set(_this.store, namePath, data.value));
      }
      _this.notifyObservers(prevStore, [namePath], {
        type: 'setField',
        data: fieldData
      });
    });
    _this.notifyWatch(namePathList);
  });
  _defineProperty(this, "getFields", function () {
    var entities = _this.getFieldEntities(true);
    var fields = entities.map(function (field) {
      var namePath = field.getNamePath();
      var meta = field.getMeta();
      var fieldData = _objectSpread2(_objectSpread2({}, meta), {}, {
        name: namePath,
        value: _this.getFieldValue(namePath)
      });
      Object.defineProperty(fieldData, 'originRCField', {
        value: true
      });
      return fieldData;
    });
    return fields;
  });
  // =========================== Observer ===========================
  /**
   * This only trigger when a field is on constructor to avoid we get initialValue too late
   */
  _defineProperty(this, "initEntityValue", function (entity) {
    var initialValue = entity.props.initialValue;
    if (initialValue !== undefined) {
      var namePath = entity.getNamePath();
      var prevValue = get(_this.store, namePath);
      if (prevValue === undefined) {
        _this.updateStore(set(_this.store, namePath, initialValue));
      }
    }
  });
  _defineProperty(this, "isMergedPreserve", function (fieldPreserve) {
    var mergedPreserve = fieldPreserve !== undefined ? fieldPreserve : _this.preserve;
    return mergedPreserve !== null && mergedPreserve !== void 0 ? mergedPreserve : true;
  });
  _defineProperty(this, "registerField", function (entity) {
    _this.fieldEntities.push(entity);
    var namePath = entity.getNamePath();
    _this.notifyWatch([namePath]);

    // Set initial values
    if (entity.props.initialValue !== undefined) {
      var prevStore = _this.store;
      _this.resetWithFieldInitialValue({
        entities: [entity],
        skipExist: true
      });
      _this.notifyObservers(prevStore, [entity.getNamePath()], {
        type: 'valueUpdate',
        source: 'internal'
      });
    }

    // un-register field callback
    return function (isListField, preserve) {
      var subNamePath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      _this.fieldEntities = _this.fieldEntities.filter(function (item) {
        return item !== entity;
      });

      // Clean up store value if not preserve
      if (!_this.isMergedPreserve(preserve) && (!isListField || subNamePath.length > 1)) {
        var defaultValue = isListField ? undefined : _this.getInitialValue(namePath);
        if (namePath.length && _this.getFieldValue(namePath) !== defaultValue && _this.fieldEntities.every(function (field) {
          return (
            // Only reset when no namePath exist
            !matchNamePath(field.getNamePath(), namePath)
          );
        })) {
          var _prevStore = _this.store;
          _this.updateStore(set(_prevStore, namePath, defaultValue, true));

          // Notify that field is unmount
          _this.notifyObservers(_prevStore, [namePath], {
            type: 'remove'
          });

          // Dependencies update
          _this.triggerDependenciesUpdate(_prevStore, namePath);
        }
      }
      _this.notifyWatch([namePath]);
    };
  });
  _defineProperty(this, "dispatch", function (action) {
    switch (action.type) {
      case 'updateValue':
        {
          var namePath = action.namePath,
            value = action.value;
          _this.updateValue(namePath, value);
          break;
        }
      case 'validateField':
        {
          var _namePath = action.namePath,
            triggerName = action.triggerName;
          _this.validateFields([_namePath], {
            triggerName: triggerName
          });
          break;
        }
      // Currently we don't have other action. Do nothing.
    }
  });
  _defineProperty(this, "notifyObservers", function (prevStore, namePathList, info) {
    if (_this.subscribable) {
      var mergedInfo = _objectSpread2(_objectSpread2({}, info), {}, {
        store: _this.getFieldsValue(true)
      });
      _this.getFieldEntities().forEach(function (_ref5) {
        var onStoreChange = _ref5.onStoreChange;
        onStoreChange(prevStore, namePathList, mergedInfo);
      });
    } else {
      _this.forceRootUpdate();
    }
  });
  /**
   * Notify dependencies children with parent update
   * We need delay to trigger validate in case Field is under render props
   */
  _defineProperty(this, "triggerDependenciesUpdate", function (prevStore, namePath) {
    var childrenFields = _this.getDependencyChildrenFields(namePath);
    if (childrenFields.length) {
      _this.validateFields(childrenFields);
    }
    _this.notifyObservers(prevStore, childrenFields, {
      type: 'dependenciesUpdate',
      relatedFields: [namePath].concat(_toConsumableArray(childrenFields))
    });
    return childrenFields;
  });
  _defineProperty(this, "updateValue", function (name, value) {
    var namePath = getNamePath(name);
    var prevStore = _this.store;
    _this.updateStore(set(_this.store, namePath, value));
    _this.notifyObservers(prevStore, [namePath], {
      type: 'valueUpdate',
      source: 'internal'
    });
    _this.notifyWatch([namePath]);

    // Dependencies update
    var childrenFields = _this.triggerDependenciesUpdate(prevStore, namePath);

    // trigger callback function
    var onValuesChange = _this.callbacks.onValuesChange;
    if (onValuesChange) {
      var changedValues = cloneByNamePathList(_this.store, [namePath]);
      onValuesChange(changedValues, _this.getFieldsValue());
    }
    _this.triggerOnFieldsChange([namePath].concat(_toConsumableArray(childrenFields)));
  });
  // Let all child Field get update.
  _defineProperty(this, "setFieldsValue", function (store) {
    _this.warningUnhooked();
    var prevStore = _this.store;
    if (store) {
      var nextStore = merge$1(_this.store, store);
      _this.updateStore(nextStore);
    }
    _this.notifyObservers(prevStore, null, {
      type: 'valueUpdate',
      source: 'external'
    });
    _this.notifyWatch();
  });
  _defineProperty(this, "setFieldValue", function (name, value) {
    _this.setFields([{
      name: name,
      value: value
    }]);
  });
  _defineProperty(this, "getDependencyChildrenFields", function (rootNamePath) {
    var children = new Set();
    var childrenFields = [];
    var dependencies2fields = new NameMap();

    /**
     * Generate maps
     * Can use cache to save perf if user report performance issue with this
     */
    _this.getFieldEntities().forEach(function (field) {
      var dependencies = field.props.dependencies;
      (dependencies || []).forEach(function (dependency) {
        var dependencyNamePath = getNamePath(dependency);
        dependencies2fields.update(dependencyNamePath, function () {
          var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Set();
          fields.add(field);
          return fields;
        });
      });
    });
    var fillChildren = function fillChildren(namePath) {
      var fields = dependencies2fields.get(namePath) || new Set();
      fields.forEach(function (field) {
        if (!children.has(field)) {
          children.add(field);
          var fieldNamePath = field.getNamePath();
          if (field.isFieldDirty() && fieldNamePath.length) {
            childrenFields.push(fieldNamePath);
            fillChildren(fieldNamePath);
          }
        }
      });
    };
    fillChildren(rootNamePath);
    return childrenFields;
  });
  _defineProperty(this, "triggerOnFieldsChange", function (namePathList, filedErrors) {
    var onFieldsChange = _this.callbacks.onFieldsChange;
    if (onFieldsChange) {
      var fields = _this.getFields();

      /**
       * Fill errors since `fields` may be replaced by controlled fields
       */
      if (filedErrors) {
        var cache = new NameMap();
        filedErrors.forEach(function (_ref6) {
          var name = _ref6.name,
            errors = _ref6.errors;
          cache.set(name, errors);
        });
        fields.forEach(function (field) {
          // eslint-disable-next-line no-param-reassign
          field.errors = cache.get(field.name) || field.errors;
        });
      }
      var changedFields = fields.filter(function (_ref7) {
        var fieldName = _ref7.name;
        return containsNamePath(namePathList, fieldName);
      });
      if (changedFields.length) {
        onFieldsChange(changedFields, fields);
      }
    }
  });
  // =========================== Validate ===========================
  _defineProperty(this, "validateFields", function (arg1, arg2) {
    var _options;
    _this.warningUnhooked();
    var nameList;
    var options;
    if (Array.isArray(arg1) || typeof arg1 === 'string' || typeof arg2 === 'string') {
      nameList = arg1;
      options = arg2;
    } else {
      options = arg1;
    }
    var provideNameList = !!nameList;
    var namePathList = provideNameList ? nameList.map(getNamePath) : [];

    // Collect result in promise list
    var promiseList = [];

    // We temp save the path which need trigger for `onFieldsChange`
    var TMP_SPLIT = String(Date.now());
    var validateNamePathList = new Set();
    var recursive = (_options = options) === null || _options === void 0 ? void 0 : _options.recursive;
    _this.getFieldEntities(true).forEach(function (field) {
      // Add field if not provide `nameList`
      if (!provideNameList) {
        namePathList.push(field.getNamePath());
      }

      // Skip if without rule
      if (!field.props.rules || !field.props.rules.length) {
        return;
      }
      var fieldNamePath = field.getNamePath();
      validateNamePathList.add(fieldNamePath.join(TMP_SPLIT));

      // Add field validate rule in to promise list
      if (!provideNameList || containsNamePath(namePathList, fieldNamePath, recursive)) {
        var promise = field.validateRules(_objectSpread2({
          validateMessages: _objectSpread2(_objectSpread2({}, defaultValidateMessages), _this.validateMessages)
        }, options));

        // Wrap promise with field
        promiseList.push(promise.then(function () {
          return {
            name: fieldNamePath,
            errors: [],
            warnings: []
          };
        }).catch(function (ruleErrors) {
          var _ruleErrors$forEach;
          var mergedErrors = [];
          var mergedWarnings = [];
          (_ruleErrors$forEach = ruleErrors.forEach) === null || _ruleErrors$forEach === void 0 ? void 0 : _ruleErrors$forEach.call(ruleErrors, function (_ref8) {
            var warningOnly = _ref8.rule.warningOnly,
              errors = _ref8.errors;
            if (warningOnly) {
              mergedWarnings.push.apply(mergedWarnings, _toConsumableArray(errors));
            } else {
              mergedErrors.push.apply(mergedErrors, _toConsumableArray(errors));
            }
          });
          if (mergedErrors.length) {
            return Promise.reject({
              name: fieldNamePath,
              errors: mergedErrors,
              warnings: mergedWarnings
            });
          }
          return {
            name: fieldNamePath,
            errors: mergedErrors,
            warnings: mergedWarnings
          };
        }));
      }
    });
    var summaryPromise = allPromiseFinish(promiseList);
    _this.lastValidatePromise = summaryPromise;

    // Notify fields with rule that validate has finished and need update
    summaryPromise.catch(function (results) {
      return results;
    }).then(function (results) {
      var resultNamePathList = results.map(function (_ref9) {
        var name = _ref9.name;
        return name;
      });
      _this.notifyObservers(_this.store, resultNamePathList, {
        type: 'validateFinish'
      });
      _this.triggerOnFieldsChange(resultNamePathList, results);
    });
    var returnPromise = summaryPromise.then(function () {
      if (_this.lastValidatePromise === summaryPromise) {
        return Promise.resolve(_this.getFieldsValue(namePathList));
      }
      return Promise.reject([]);
    }).catch(function (results) {
      var errorList = results.filter(function (result) {
        return result && result.errors.length;
      });
      return Promise.reject({
        values: _this.getFieldsValue(namePathList),
        errorFields: errorList,
        outOfDate: _this.lastValidatePromise !== summaryPromise
      });
    });

    // Do not throw in console
    returnPromise.catch(function (e) {
      return e;
    });

    // `validating` changed. Trigger `onFieldsChange`
    var triggerNamePathList = namePathList.filter(function (namePath) {
      return validateNamePathList.has(namePath.join(TMP_SPLIT));
    });
    _this.triggerOnFieldsChange(triggerNamePathList);
    return returnPromise;
  });
  // ============================ Submit ============================
  _defineProperty(this, "submit", function () {
    _this.warningUnhooked();
    _this.validateFields().then(function (values) {
      var onFinish = _this.callbacks.onFinish;
      if (onFinish) {
        try {
          onFinish(values);
        } catch (err) {
          // Should print error if user `onFinish` callback failed
          console.error(err);
        }
      }
    }).catch(function (e) {
      var onFinishFailed = _this.callbacks.onFinishFailed;
      if (onFinishFailed) {
        onFinishFailed(e);
      }
    });
  });
  this.forceRootUpdate = forceRootUpdate;
});
function useForm(form) {
  var formRef = React.useRef();
  var _React$useState = React.useState({}),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    forceUpdate = _React$useState2[1];
  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      // Create a new FormStore if not provided
      var forceReRender = function forceReRender() {
        forceUpdate({});
      };
      var formStore = new FormStore(forceReRender);
      formRef.current = formStore.getForm();
    }
  }
  return [formRef.current];
}

var FormContext = /*#__PURE__*/React.createContext({
  triggerFormChange: function triggerFormChange() {},
  triggerFormFinish: function triggerFormFinish() {},
  registerForm: function registerForm() {},
  unregisterForm: function unregisterForm() {}
});
var FormProvider = function FormProvider(_ref) {
  var validateMessages = _ref.validateMessages,
    onFormChange = _ref.onFormChange,
    onFormFinish = _ref.onFormFinish,
    children = _ref.children;
  var formContext = React.useContext(FormContext);
  var formsRef = React.useRef({});
  return /*#__PURE__*/React.createElement(FormContext.Provider, {
    value: _objectSpread2(_objectSpread2({}, formContext), {}, {
      validateMessages: _objectSpread2(_objectSpread2({}, formContext.validateMessages), validateMessages),
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: function triggerFormChange(name, changedFields) {
        if (onFormChange) {
          onFormChange(name, {
            changedFields: changedFields,
            forms: formsRef.current
          });
        }
        formContext.triggerFormChange(name, changedFields);
      },
      triggerFormFinish: function triggerFormFinish(name, values) {
        if (onFormFinish) {
          onFormFinish(name, {
            values: values,
            forms: formsRef.current
          });
        }
        formContext.triggerFormFinish(name, values);
      },
      registerForm: function registerForm(name, form) {
        if (name) {
          formsRef.current = _objectSpread2(_objectSpread2({}, formsRef.current), {}, _defineProperty({}, name, form));
        }
        formContext.registerForm(name, form);
      },
      unregisterForm: function unregisterForm(name) {
        var newForms = _objectSpread2({}, formsRef.current);
        delete newForms[name];
        formsRef.current = newForms;
        formContext.unregisterForm(name);
      }
    })
  }, children);
};

var _excluded$c = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed"];
var Form = function Form(_ref, ref) {
  var name = _ref.name,
    initialValues = _ref.initialValues,
    fields = _ref.fields,
    form = _ref.form,
    preserve = _ref.preserve,
    children = _ref.children,
    _ref$component = _ref.component,
    Component = _ref$component === void 0 ? 'form' : _ref$component,
    validateMessages = _ref.validateMessages,
    _ref$validateTrigger = _ref.validateTrigger,
    validateTrigger = _ref$validateTrigger === void 0 ? 'onChange' : _ref$validateTrigger,
    onValuesChange = _ref.onValuesChange,
    _onFieldsChange = _ref.onFieldsChange,
    _onFinish = _ref.onFinish,
    onFinishFailed = _ref.onFinishFailed,
    restProps = _objectWithoutProperties(_ref, _excluded$c);
  var formContext = React.useContext(FormContext);

  // We customize handle event since Context will makes all the consumer re-render:
  // https://reactjs.org/docs/context.html#contextprovider
  var _useForm = useForm(form),
    _useForm2 = _slicedToArray(_useForm, 1),
    formInstance = _useForm2[0];
  var _getInternalHooks = formInstance.getInternalHooks(HOOK_MARK),
    useSubscribe = _getInternalHooks.useSubscribe,
    setInitialValues = _getInternalHooks.setInitialValues,
    setCallbacks = _getInternalHooks.setCallbacks,
    setValidateMessages = _getInternalHooks.setValidateMessages,
    setPreserve = _getInternalHooks.setPreserve,
    destroyForm = _getInternalHooks.destroyForm;

  // Pass ref with form instance
  React.useImperativeHandle(ref, function () {
    return formInstance;
  });

  // Register form into Context
  React.useEffect(function () {
    formContext.registerForm(name, formInstance);
    return function () {
      formContext.unregisterForm(name);
    };
  }, [formContext, formInstance, name]);

  // Pass props to store
  setValidateMessages(_objectSpread2(_objectSpread2({}, formContext.validateMessages), validateMessages));
  setCallbacks({
    onValuesChange: onValuesChange,
    onFieldsChange: function onFieldsChange(changedFields) {
      formContext.triggerFormChange(name, changedFields);
      if (_onFieldsChange) {
        for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          rest[_key - 1] = arguments[_key];
        }
        _onFieldsChange.apply(void 0, [changedFields].concat(rest));
      }
    },
    onFinish: function onFinish(values) {
      formContext.triggerFormFinish(name, values);
      if (_onFinish) {
        _onFinish(values);
      }
    },
    onFinishFailed: onFinishFailed
  });
  setPreserve(preserve);

  // Set initial value, init store value when first mount
  var mountRef = React.useRef(null);
  setInitialValues(initialValues, !mountRef.current);
  if (!mountRef.current) {
    mountRef.current = true;
  }
  React.useEffect(function () {
    return destroyForm;
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);

  // Prepare children by `children` type
  var childrenNode;
  var childrenRenderProps = typeof children === 'function';
  if (childrenRenderProps) {
    var _values = formInstance.getFieldsValue(true);
    childrenNode = children(_values, formInstance);
  } else {
    childrenNode = children;
  }

  // Not use subscribe when using render props
  useSubscribe(!childrenRenderProps);

  // Listen if fields provided. We use ref to save prev data here to avoid additional render
  var prevFieldsRef = React.useRef();
  React.useEffect(function () {
    if (!isSimilar(prevFieldsRef.current || [], fields || [])) {
      formInstance.setFields(fields || []);
    }
    prevFieldsRef.current = fields;
  }, [fields, formInstance]);
  var formContextValue = React.useMemo(function () {
    return _objectSpread2(_objectSpread2({}, formInstance), {}, {
      validateTrigger: validateTrigger
    });
  }, [formInstance, validateTrigger]);
  var wrapperNode = /*#__PURE__*/React.createElement(ListContext.Provider, {
    value: null
  }, /*#__PURE__*/React.createElement(Context.Provider, {
    value: formContextValue
  }, childrenNode));
  if (Component === false) {
    return wrapperNode;
  }
  return /*#__PURE__*/React.createElement(Component, _extends$1({}, restProps, {
    onSubmit: function onSubmit(event) {
      event.preventDefault();
      event.stopPropagation();
      formInstance.submit();
    },
    onReset: function onReset(event) {
      var _restProps$onReset;
      event.preventDefault();
      formInstance.resetFields();
      (_restProps$onReset = restProps.onReset) === null || _restProps$onReset === void 0 ? void 0 : _restProps$onReset.call(restProps, event);
    }
  }), wrapperNode);
};

function stringify(value) {
  try {
    return JSON.stringify(value);
  } catch (err) {
    return Math.random();
  }
}
var useWatchWarning = process.env.NODE_ENV !== 'production' ? function (namePath) {
  var fullyStr = namePath.join('__RC_FIELD_FORM_SPLIT__');
  var nameStrRef = useRef(fullyStr);
  warningOnce(nameStrRef.current === fullyStr, '`useWatch` is not support dynamic `namePath`. Please provide static instead.');
} : function () {};
function useWatch$1() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var _args$ = args[0],
    dependencies = _args$ === void 0 ? [] : _args$,
    _args$2 = args[1],
    _form = _args$2 === void 0 ? {} : _args$2;
  var options = isFormInstance(_form) ? {
    form: _form
  } : _form;
  var form = options.form;
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var valueStr = useMemo$1(function () {
    return stringify(value);
  }, [value]);
  var valueStrRef = useRef(valueStr);
  valueStrRef.current = valueStr;
  var fieldContext = useContext(Context);
  var formInstance = form || fieldContext;
  var isValidForm = formInstance && formInstance._init;

  // Warning if not exist form instance
  if (process.env.NODE_ENV !== 'production') {
    warningOnce(args.length === 2 ? form ? isValidForm : true : isValidForm, 'useWatch requires a form instance since it can not auto detect from context.');
  }
  var namePath = getNamePath(dependencies);
  var namePathRef = useRef(namePath);
  namePathRef.current = namePath;
  useWatchWarning(namePath);
  useEffect(function () {
    // Skip if not exist form instance
    if (!isValidForm) {
      return;
    }
    var getFieldsValue = formInstance.getFieldsValue,
      getInternalHooks = formInstance.getInternalHooks;
    var _getInternalHooks = getInternalHooks(HOOK_MARK),
      registerWatch = _getInternalHooks.registerWatch;
    var cancelRegister = registerWatch(function (values, allValues) {
      var newValue = get(options.preserve ? allValues : values, namePathRef.current);
      var nextValueStr = stringify(newValue);

      // Compare stringify in case it's nest object
      if (valueStrRef.current !== nextValueStr) {
        valueStrRef.current = nextValueStr;
        setValue(newValue);
      }
    });

    // TODO: We can improve this perf in future
    var initialValue = get(options.preserve ? getFieldsValue(true) : getFieldsValue(), namePathRef.current);

    // React 18 has the bug that will queue update twice even the value is not changed
    // ref: https://github.com/facebook/react/issues/27213
    if (value !== initialValue) {
      setValue(initialValue);
    }
    return cancelRegister;
  },
  // We do not need re-register since namePath content is the same
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [isValidForm]);
  return value;
}

var InternalForm = /*#__PURE__*/React.forwardRef(Form);
var RefForm = InternalForm;
RefForm.FormProvider = FormProvider;
RefForm.Field = WrapperField;
RefForm.List = List$1;
RefForm.useForm = useForm;
RefForm.useWatch = useWatch$1;

const FormItemInputContext = /*#__PURE__*/React.createContext({});
if (process.env.NODE_ENV !== 'production') {
  FormItemInputContext.displayName = 'FormItemInputContext';
}

const initMotionCommon = duration => ({
  animationDuration: duration,
  animationFillMode: 'both'
});
// FIXME: origin less code seems same as initMotionCommon. Maybe we can safe remove
const initMotionCommonLeave = duration => ({
  animationDuration: duration,
  animationFillMode: 'both'
});
const initMotion = function (motionCls, inKeyframes, outKeyframes, duration) {
  let sameLevel = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  const sameLevelPrefix = sameLevel ? '&' : '';
  return {
    [`
      ${sameLevelPrefix}${motionCls}-enter,
      ${sameLevelPrefix}${motionCls}-appear
    `]: Object.assign(Object.assign({}, initMotionCommon(duration)), {
      animationPlayState: 'paused'
    }),
    [`${sameLevelPrefix}${motionCls}-leave`]: Object.assign(Object.assign({}, initMotionCommonLeave(duration)), {
      animationPlayState: 'paused'
    }),
    [`
      ${sameLevelPrefix}${motionCls}-enter${motionCls}-enter-active,
      ${sameLevelPrefix}${motionCls}-appear${motionCls}-appear-active
    `]: {
      animationName: inKeyframes,
      animationPlayState: 'running'
    },
    [`${sameLevelPrefix}${motionCls}-leave${motionCls}-leave-active`]: {
      animationName: outKeyframes,
      animationPlayState: 'running',
      pointerEvents: 'none'
    }
  };
};

const moveDownIn = new Keyframe('antMoveDownIn', {
  '0%': {
    transform: 'translate3d(0, 100%, 0)',
    transformOrigin: '0 0',
    opacity: 0
  },
  '100%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  }
});
const moveDownOut = new Keyframe('antMoveDownOut', {
  '0%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  },
  '100%': {
    transform: 'translate3d(0, 100%, 0)',
    transformOrigin: '0 0',
    opacity: 0
  }
});
const moveLeftIn = new Keyframe('antMoveLeftIn', {
  '0%': {
    transform: 'translate3d(-100%, 0, 0)',
    transformOrigin: '0 0',
    opacity: 0
  },
  '100%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  }
});
const moveLeftOut = new Keyframe('antMoveLeftOut', {
  '0%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  },
  '100%': {
    transform: 'translate3d(-100%, 0, 0)',
    transformOrigin: '0 0',
    opacity: 0
  }
});
const moveRightIn = new Keyframe('antMoveRightIn', {
  '0%': {
    transform: 'translate3d(100%, 0, 0)',
    transformOrigin: '0 0',
    opacity: 0
  },
  '100%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  }
});
const moveRightOut = new Keyframe('antMoveRightOut', {
  '0%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  },
  '100%': {
    transform: 'translate3d(100%, 0, 0)',
    transformOrigin: '0 0',
    opacity: 0
  }
});
const moveUpIn = new Keyframe('antMoveUpIn', {
  '0%': {
    transform: 'translate3d(0, -100%, 0)',
    transformOrigin: '0 0',
    opacity: 0
  },
  '100%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  }
});
const moveUpOut = new Keyframe('antMoveUpOut', {
  '0%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  },
  '100%': {
    transform: 'translate3d(0, -100%, 0)',
    transformOrigin: '0 0',
    opacity: 0
  }
});
const moveMotion = {
  'move-up': {
    inKeyframes: moveUpIn,
    outKeyframes: moveUpOut
  },
  'move-down': {
    inKeyframes: moveDownIn,
    outKeyframes: moveDownOut
  },
  'move-left': {
    inKeyframes: moveLeftIn,
    outKeyframes: moveLeftOut
  },
  'move-right': {
    inKeyframes: moveRightIn,
    outKeyframes: moveRightOut
  }
};
const initMoveMotion = (token, motionName) => {
  const {
    antCls
  } = token;
  const motionCls = `${antCls}-${motionName}`;
  const {
    inKeyframes,
    outKeyframes
  } = moveMotion[motionName];
  return [initMotion(motionCls, inKeyframes, outKeyframes, token.motionDurationMid), {
    [`
        ${motionCls}-enter,
        ${motionCls}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: token.motionEaseOutCirc
    },
    [`${motionCls}-leave`]: {
      animationTimingFunction: token.motionEaseInOutCirc
    }
  }];
};

const slideUpIn = new Keyframe('antSlideUpIn', {
  '0%': {
    transform: 'scaleY(0.8)',
    transformOrigin: '0% 0%',
    opacity: 0
  },
  '100%': {
    transform: 'scaleY(1)',
    transformOrigin: '0% 0%',
    opacity: 1
  }
});
const slideUpOut = new Keyframe('antSlideUpOut', {
  '0%': {
    transform: 'scaleY(1)',
    transformOrigin: '0% 0%',
    opacity: 1
  },
  '100%': {
    transform: 'scaleY(0.8)',
    transformOrigin: '0% 0%',
    opacity: 0
  }
});
const slideDownIn = new Keyframe('antSlideDownIn', {
  '0%': {
    transform: 'scaleY(0.8)',
    transformOrigin: '100% 100%',
    opacity: 0
  },
  '100%': {
    transform: 'scaleY(1)',
    transformOrigin: '100% 100%',
    opacity: 1
  }
});
const slideDownOut = new Keyframe('antSlideDownOut', {
  '0%': {
    transform: 'scaleY(1)',
    transformOrigin: '100% 100%',
    opacity: 1
  },
  '100%': {
    transform: 'scaleY(0.8)',
    transformOrigin: '100% 100%',
    opacity: 0
  }
});
const slideLeftIn = new Keyframe('antSlideLeftIn', {
  '0%': {
    transform: 'scaleX(0.8)',
    transformOrigin: '0% 0%',
    opacity: 0
  },
  '100%': {
    transform: 'scaleX(1)',
    transformOrigin: '0% 0%',
    opacity: 1
  }
});
const slideLeftOut = new Keyframe('antSlideLeftOut', {
  '0%': {
    transform: 'scaleX(1)',
    transformOrigin: '0% 0%',
    opacity: 1
  },
  '100%': {
    transform: 'scaleX(0.8)',
    transformOrigin: '0% 0%',
    opacity: 0
  }
});
const slideRightIn = new Keyframe('antSlideRightIn', {
  '0%': {
    transform: 'scaleX(0.8)',
    transformOrigin: '100% 0%',
    opacity: 0
  },
  '100%': {
    transform: 'scaleX(1)',
    transformOrigin: '100% 0%',
    opacity: 1
  }
});
const slideRightOut = new Keyframe('antSlideRightOut', {
  '0%': {
    transform: 'scaleX(1)',
    transformOrigin: '100% 0%',
    opacity: 1
  },
  '100%': {
    transform: 'scaleX(0.8)',
    transformOrigin: '100% 0%',
    opacity: 0
  }
});
const slideMotion = {
  'slide-up': {
    inKeyframes: slideUpIn,
    outKeyframes: slideUpOut
  },
  'slide-down': {
    inKeyframes: slideDownIn,
    outKeyframes: slideDownOut
  },
  'slide-left': {
    inKeyframes: slideLeftIn,
    outKeyframes: slideLeftOut
  },
  'slide-right': {
    inKeyframes: slideRightIn,
    outKeyframes: slideRightOut
  }
};
const initSlideMotion = (token, motionName) => {
  const {
    antCls
  } = token;
  const motionCls = `${antCls}-${motionName}`;
  const {
    inKeyframes,
    outKeyframes
  } = slideMotion[motionName];
  return [initMotion(motionCls, inKeyframes, outKeyframes, token.motionDurationMid), {
    [`
      ${motionCls}-enter,
      ${motionCls}-appear
    `]: {
      transform: 'scale(0)',
      transformOrigin: '0% 0%',
      opacity: 0,
      animationTimingFunction: token.motionEaseOutQuint,
      [`&-prepare`]: {
        transform: 'scale(1)'
      }
    },
    [`${motionCls}-leave`]: {
      animationTimingFunction: token.motionEaseInQuint
    }
  }];
};

const zoomIn = new Keyframe('antZoomIn', {
  '0%': {
    transform: 'scale(0.2)',
    opacity: 0
  },
  '100%': {
    transform: 'scale(1)',
    opacity: 1
  }
});
const zoomOut = new Keyframe('antZoomOut', {
  '0%': {
    transform: 'scale(1)'
  },
  '100%': {
    transform: 'scale(0.2)',
    opacity: 0
  }
});
const zoomBigIn = new Keyframe('antZoomBigIn', {
  '0%': {
    transform: 'scale(0.8)',
    opacity: 0
  },
  '100%': {
    transform: 'scale(1)',
    opacity: 1
  }
});
const zoomBigOut = new Keyframe('antZoomBigOut', {
  '0%': {
    transform: 'scale(1)'
  },
  '100%': {
    transform: 'scale(0.8)',
    opacity: 0
  }
});
const zoomUpIn = new Keyframe('antZoomUpIn', {
  '0%': {
    transform: 'scale(0.8)',
    transformOrigin: '50% 0%',
    opacity: 0
  },
  '100%': {
    transform: 'scale(1)',
    transformOrigin: '50% 0%'
  }
});
const zoomUpOut = new Keyframe('antZoomUpOut', {
  '0%': {
    transform: 'scale(1)',
    transformOrigin: '50% 0%'
  },
  '100%': {
    transform: 'scale(0.8)',
    transformOrigin: '50% 0%',
    opacity: 0
  }
});
const zoomLeftIn = new Keyframe('antZoomLeftIn', {
  '0%': {
    transform: 'scale(0.8)',
    transformOrigin: '0% 50%',
    opacity: 0
  },
  '100%': {
    transform: 'scale(1)',
    transformOrigin: '0% 50%'
  }
});
const zoomLeftOut = new Keyframe('antZoomLeftOut', {
  '0%': {
    transform: 'scale(1)',
    transformOrigin: '0% 50%'
  },
  '100%': {
    transform: 'scale(0.8)',
    transformOrigin: '0% 50%',
    opacity: 0
  }
});
const zoomRightIn = new Keyframe('antZoomRightIn', {
  '0%': {
    transform: 'scale(0.8)',
    transformOrigin: '100% 50%',
    opacity: 0
  },
  '100%': {
    transform: 'scale(1)',
    transformOrigin: '100% 50%'
  }
});
const zoomRightOut = new Keyframe('antZoomRightOut', {
  '0%': {
    transform: 'scale(1)',
    transformOrigin: '100% 50%'
  },
  '100%': {
    transform: 'scale(0.8)',
    transformOrigin: '100% 50%',
    opacity: 0
  }
});
const zoomDownIn = new Keyframe('antZoomDownIn', {
  '0%': {
    transform: 'scale(0.8)',
    transformOrigin: '50% 100%',
    opacity: 0
  },
  '100%': {
    transform: 'scale(1)',
    transformOrigin: '50% 100%'
  }
});
const zoomDownOut = new Keyframe('antZoomDownOut', {
  '0%': {
    transform: 'scale(1)',
    transformOrigin: '50% 100%'
  },
  '100%': {
    transform: 'scale(0.8)',
    transformOrigin: '50% 100%',
    opacity: 0
  }
});
const zoomMotion = {
  zoom: {
    inKeyframes: zoomIn,
    outKeyframes: zoomOut
  },
  'zoom-big': {
    inKeyframes: zoomBigIn,
    outKeyframes: zoomBigOut
  },
  'zoom-big-fast': {
    inKeyframes: zoomBigIn,
    outKeyframes: zoomBigOut
  },
  'zoom-left': {
    inKeyframes: zoomLeftIn,
    outKeyframes: zoomLeftOut
  },
  'zoom-right': {
    inKeyframes: zoomRightIn,
    outKeyframes: zoomRightOut
  },
  'zoom-up': {
    inKeyframes: zoomUpIn,
    outKeyframes: zoomUpOut
  },
  'zoom-down': {
    inKeyframes: zoomDownIn,
    outKeyframes: zoomDownOut
  }
};
const initZoomMotion = (token, motionName) => {
  const {
    antCls
  } = token;
  const motionCls = `${antCls}-${motionName}`;
  const {
    inKeyframes,
    outKeyframes
  } = zoomMotion[motionName];
  return [initMotion(motionCls, inKeyframes, outKeyframes, motionName === 'zoom-big-fast' ? token.motionDurationFast : token.motionDurationMid), {
    [`
        ${motionCls}-enter,
        ${motionCls}-appear
      `]: {
      transform: 'scale(0)',
      opacity: 0,
      animationTimingFunction: token.motionEaseOutCirc,
      '&-prepare': {
        transform: 'none'
      }
    },
    [`${motionCls}-leave`]: {
      animationTimingFunction: token.motionEaseInOutCirc
    }
  }];
};

function withPureRenderTheme(Component) {
  return function PureRenderThemeComponent(props) {
    return /*#__PURE__*/React.createElement(ConfigProvider, {
      theme: {
        token: {
          motion: false,
          zIndexPopupBase: 0
        }
      }
    }, /*#__PURE__*/React.createElement(Component, Object.assign({}, props)));
  };
}
/* istanbul ignore next */
function genPurePanel(Component, defaultPrefixCls, getDropdownCls, postProps) {
  function PurePanel(props) {
    const {
      prefixCls: customizePrefixCls,
      style
    } = props;
    const holderRef = React.useRef(null);
    const [popupHeight, setPopupHeight] = React.useState(0);
    const [popupWidth, setPopupWidth] = React.useState(0);
    const [open, setOpen] = useMergedState(false, {
      value: props.open
    });
    const {
      getPrefixCls
    } = React.useContext(ConfigContext);
    const prefixCls = getPrefixCls(defaultPrefixCls || 'select', customizePrefixCls);
    React.useEffect(() => {
      // We do not care about ssr
      setOpen(true);
      if (typeof ResizeObserver !== 'undefined') {
        const resizeObserver = new ResizeObserver(entries => {
          const element = entries[0].target;
          setPopupHeight(element.offsetHeight + 8);
          setPopupWidth(element.offsetWidth);
        });
        const interval = setInterval(() => {
          var _a;
          const dropdownCls = getDropdownCls ? `.${getDropdownCls(prefixCls)}` : `.${prefixCls}-dropdown`;
          const popup = (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.querySelector(dropdownCls);
          if (popup) {
            clearInterval(interval);
            resizeObserver.observe(popup);
          }
        }, 10);
        return () => {
          clearInterval(interval);
          resizeObserver.disconnect();
        };
      }
    }, []);
    let mergedProps = Object.assign(Object.assign({}, props), {
      style: Object.assign(Object.assign({}, style), {
        margin: 0
      }),
      open,
      visible: open,
      getPopupContainer: () => holderRef.current
    });
    if (postProps) {
      mergedProps = postProps(mergedProps);
    }
    return /*#__PURE__*/React.createElement("div", {
      ref: holderRef,
      style: {
        paddingBottom: popupHeight,
        position: 'relative',
        minWidth: popupWidth
      }
    }, /*#__PURE__*/React.createElement(Component, Object.assign({}, mergedProps)));
  }
  return withPureRenderTheme(PurePanel);
}

var isMobile = (function () {
  if (typeof navigator === 'undefined' || typeof window === 'undefined') {
    return false;
  }
  var agent = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(agent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(agent === null || agent === void 0 ? void 0 : agent.substr(0, 4));
});

var TransBtn = function TransBtn(_ref) {
  var className = _ref.className,
    customizeIcon = _ref.customizeIcon,
    customizeIconProps = _ref.customizeIconProps,
    _onMouseDown = _ref.onMouseDown,
    onClick = _ref.onClick,
    children = _ref.children;
  var icon;
  if (typeof customizeIcon === 'function') {
    icon = customizeIcon(customizeIconProps);
  } else {
    icon = customizeIcon;
  }
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();
      if (_onMouseDown) {
        _onMouseDown(event);
      }
    },
    style: {
      userSelect: 'none',
      WebkitUserSelect: 'none'
    },
    unselectable: "on",
    onClick: onClick,
    "aria-hidden": true
  }, icon !== undefined ? icon : /*#__PURE__*/React.createElement("span", {
    className: classNames(className.split(/\s+/).map(function (cls) {
      return "".concat(cls, "-icon");
    }))
  }, children));
};

function useAllowClear(prefixCls, onClearMouseDown, displayValues, allowClear, clearIcon) {
  var disabled = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  var mergedSearchValue = arguments.length > 6 ? arguments[6] : undefined;
  var mode = arguments.length > 7 ? arguments[7] : undefined;
  var mergedClearIcon = React__default.useMemo(function () {
    if (_typeof(allowClear) === "object") {
      return allowClear.clearIcon;
    }
    if (!!clearIcon) return clearIcon;
  }, [allowClear, clearIcon]);
  var mergedAllowClear = React__default.useMemo(function () {
    if (!disabled && !!allowClear && (displayValues.length || mergedSearchValue) && !(mode === 'combobox' && mergedSearchValue === '')) {
      return true;
    }
    return false;
  }, [allowClear, disabled, displayValues.length, mergedSearchValue, mode]);
  return {
    allowClear: mergedAllowClear,
    clearIcon: /*#__PURE__*/React__default.createElement(TransBtn, {
      className: "".concat(prefixCls, "-clear"),
      onMouseDown: onClearMouseDown,
      customizeIcon: mergedClearIcon
    }, "\xD7")
  };
}

/**
 * BaseSelect provide some parsed data into context.
 * You can use this hooks to get them.
 */

var BaseSelectContext = /*#__PURE__*/React.createContext(null);
function useBaseProps() {
  return React.useContext(BaseSelectContext);
}

/**
 * Similar with `useLock`, but this hook will always execute last value.
 * When set to `true`, it will keep `true` for a short time even if `false` is set.
 */
function useDelayReset() {
  var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    bool = _React$useState2[0],
    setBool = _React$useState2[1];
  var delayRef = React.useRef(null);
  var cancelLatest = function cancelLatest() {
    window.clearTimeout(delayRef.current);
  };
  React.useEffect(function () {
    return cancelLatest;
  }, []);
  var delaySetBool = function delaySetBool(value, callback) {
    cancelLatest();
    delayRef.current = window.setTimeout(function () {
      setBool(value);
      if (callback) {
        callback();
      }
    }, timeout);
  };
  return [bool, delaySetBool, cancelLatest];
}

/**
 * Locker return cached mark.
 * If set to `true`, will return `true` in a short time even if set `false`.
 * If set to `false` and then set to `true`, will change to `true`.
 * And after time duration, it will back to `null` automatically.
 */
function useLock() {
  var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 250;
  var lockRef = React.useRef(null);
  var timeoutRef = React.useRef(null);

  // Clean up
  React.useEffect(function () {
    return function () {
      window.clearTimeout(timeoutRef.current);
    };
  }, []);
  function doLock(locked) {
    if (locked || lockRef.current === null) {
      lockRef.current = locked;
    }
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(function () {
      lockRef.current = null;
    }, duration);
  }
  return [function () {
    return lockRef.current;
  }, doLock];
}

function useSelectTriggerControl(elements, open, triggerOpen, customizedTrigger) {
  var propsRef = React.useRef(null);
  propsRef.current = {
    open: open,
    triggerOpen: triggerOpen,
    customizedTrigger: customizedTrigger
  };
  React.useEffect(function () {
    function onGlobalMouseDown(event) {
      var _propsRef$current;
      // If trigger is customized, Trigger will take control of popupVisible
      if ((_propsRef$current = propsRef.current) !== null && _propsRef$current !== void 0 && _propsRef$current.customizedTrigger) {
        return;
      }
      var target = event.target;
      if (target.shadowRoot && event.composed) {
        target = event.composedPath()[0] || target;
      }
      if (propsRef.current.open && elements().filter(function (element) {
        return element;
      }).every(function (element) {
        return !element.contains(target) && element !== target;
      })) {
        // Should trigger close
        propsRef.current.triggerOpen(false);
      }
    }
    window.addEventListener('mousedown', onGlobalMouseDown);
    return function () {
      return window.removeEventListener('mousedown', onGlobalMouseDown);
    };
  }, []);
}

var _excluded$b = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"];
// Use shared variable to save bundle size
var UNDEFINED = undefined;
function InternalItem(props, ref) {
  var prefixCls = props.prefixCls,
    invalidate = props.invalidate,
    item = props.item,
    renderItem = props.renderItem,
    responsive = props.responsive,
    responsiveDisabled = props.responsiveDisabled,
    registerSize = props.registerSize,
    itemKey = props.itemKey,
    className = props.className,
    style = props.style,
    children = props.children,
    display = props.display,
    order = props.order,
    _props$component = props.component,
    Component = _props$component === void 0 ? 'div' : _props$component,
    restProps = _objectWithoutProperties(props, _excluded$b);
  var mergedHidden = responsive && !display;
  // ================================ Effect ================================
  function internalRegisterSize(width) {
    registerSize(itemKey, width);
  }
  React.useEffect(function () {
    return function () {
      internalRegisterSize(null);
    };
  }, []);
  // ================================ Render ================================
  var childNode = renderItem && item !== UNDEFINED ? renderItem(item) : children;
  var overflowStyle;
  if (!invalidate) {
    overflowStyle = {
      opacity: mergedHidden ? 0 : 1,
      height: mergedHidden ? 0 : UNDEFINED,
      overflowY: mergedHidden ? 'hidden' : UNDEFINED,
      order: responsive ? order : UNDEFINED,
      pointerEvents: mergedHidden ? 'none' : UNDEFINED,
      position: mergedHidden ? 'absolute' : UNDEFINED
    };
  }
  var overflowProps = {};
  if (mergedHidden) {
    overflowProps['aria-hidden'] = true;
  }
  var itemNode = /*#__PURE__*/React.createElement(Component, _extends$1({
    className: classNames(!invalidate && prefixCls, className),
    style: _objectSpread2(_objectSpread2({}, overflowStyle), style)
  }, overflowProps, restProps, {
    ref: ref
  }), childNode);
  if (responsive) {
    itemNode = /*#__PURE__*/React.createElement(RefResizeObserver, {
      onResize: function onResize(_ref) {
        var offsetWidth = _ref.offsetWidth;
        internalRegisterSize(offsetWidth);
      },
      disabled: responsiveDisabled
    }, itemNode);
  }
  return itemNode;
}
var Item$1 = /*#__PURE__*/React.forwardRef(InternalItem);
Item$1.displayName = 'Item';

function channelUpdate(callback) {
  if (typeof MessageChannel === 'undefined') {
    wrapperRaf(callback);
  } else {
    var channel = new MessageChannel();
    channel.port1.onmessage = function () {
      return callback();
    };
    channel.port2.postMessage(undefined);
  }
}

/**
 * Batcher for record any `useEffectState` need update.
 */
function useBatcher() {
  // Updater Trigger
  var updateFuncRef = React.useRef(null);
  // Notify update
  var notifyEffectUpdate = function notifyEffectUpdate(callback) {
    if (!updateFuncRef.current) {
      updateFuncRef.current = [];
      channelUpdate(function () {
        unstable_batchedUpdates(function () {
          updateFuncRef.current.forEach(function (fn) {
            fn();
          });
          updateFuncRef.current = null;
        });
      });
    }
    updateFuncRef.current.push(callback);
  };
  return notifyEffectUpdate;
}
/**
 * Trigger state update by `useLayoutEffect` to save perf.
 */
function useEffectState(notifyEffectUpdate, defaultValue) {
  // Value
  var _React$useState = React.useState(defaultValue),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    stateValue = _React$useState2[0],
    setStateValue = _React$useState2[1];
  // Set State
  var setEffectVal = useEvent(function (nextValue) {
    notifyEffectUpdate(function () {
      setStateValue(nextValue);
    });
  });
  return [stateValue, setEffectVal];
}

var OverflowContext = /*#__PURE__*/React__default.createContext(null);

var _excluded$a = ["component"],
  _excluded2$1 = ["className"],
  _excluded3 = ["className"];
var InternalRawItem = function InternalRawItem(props, ref) {
  var context = React.useContext(OverflowContext);
  // Render directly when context not provided
  if (!context) {
    var _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _restProps = _objectWithoutProperties(props, _excluded$a);
    return /*#__PURE__*/React.createElement(Component, _extends$1({}, _restProps, {
      ref: ref
    }));
  }
  var contextClassName = context.className,
    restContext = _objectWithoutProperties(context, _excluded2$1);
  var className = props.className,
    restProps = _objectWithoutProperties(props, _excluded3);
  // Do not pass context to sub item to avoid multiple measure
  return /*#__PURE__*/React.createElement(OverflowContext.Provider, {
    value: null
  }, /*#__PURE__*/React.createElement(Item$1, _extends$1({
    ref: ref,
    className: classNames(contextClassName, className)
  }, restContext, restProps)));
};
var RawItem = /*#__PURE__*/React.forwardRef(InternalRawItem);
RawItem.displayName = 'RawItem';

var _excluded$9 = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"];
var RESPONSIVE = 'responsive';
var INVALIDATE = 'invalidate';
function defaultRenderRest(omittedItems) {
  return "+ ".concat(omittedItems.length, " ...");
}
function Overflow(props, ref) {
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-overflow' : _props$prefixCls,
    _props$data = props.data,
    data = _props$data === void 0 ? [] : _props$data,
    renderItem = props.renderItem,
    renderRawItem = props.renderRawItem,
    itemKey = props.itemKey,
    _props$itemWidth = props.itemWidth,
    itemWidth = _props$itemWidth === void 0 ? 10 : _props$itemWidth,
    ssr = props.ssr,
    style = props.style,
    className = props.className,
    maxCount = props.maxCount,
    renderRest = props.renderRest,
    renderRawRest = props.renderRawRest,
    suffix = props.suffix,
    _props$component = props.component,
    Component = _props$component === void 0 ? 'div' : _props$component,
    itemComponent = props.itemComponent,
    onVisibleChange = props.onVisibleChange,
    restProps = _objectWithoutProperties(props, _excluded$9);
  var fullySSR = ssr === 'full';
  var notifyEffectUpdate = useBatcher();
  var _useEffectState = useEffectState(notifyEffectUpdate, null),
    _useEffectState2 = _slicedToArray(_useEffectState, 2),
    containerWidth = _useEffectState2[0],
    setContainerWidth = _useEffectState2[1];
  var mergedContainerWidth = containerWidth || 0;
  var _useEffectState3 = useEffectState(notifyEffectUpdate, new Map()),
    _useEffectState4 = _slicedToArray(_useEffectState3, 2),
    itemWidths = _useEffectState4[0],
    setItemWidths = _useEffectState4[1];
  var _useEffectState5 = useEffectState(notifyEffectUpdate, 0),
    _useEffectState6 = _slicedToArray(_useEffectState5, 2),
    prevRestWidth = _useEffectState6[0],
    setPrevRestWidth = _useEffectState6[1];
  var _useEffectState7 = useEffectState(notifyEffectUpdate, 0),
    _useEffectState8 = _slicedToArray(_useEffectState7, 2),
    restWidth = _useEffectState8[0],
    setRestWidth = _useEffectState8[1];
  var _useEffectState9 = useEffectState(notifyEffectUpdate, 0),
    _useEffectState10 = _slicedToArray(_useEffectState9, 2),
    suffixWidth = _useEffectState10[0],
    setSuffixWidth = _useEffectState10[1];
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    suffixFixedStart = _useState2[0],
    setSuffixFixedStart = _useState2[1];
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    displayCount = _useState4[0],
    setDisplayCount = _useState4[1];
  var mergedDisplayCount = React.useMemo(function () {
    if (displayCount === null && fullySSR) {
      return Number.MAX_SAFE_INTEGER;
    }
    return displayCount || 0;
  }, [displayCount, containerWidth]);
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    restReady = _useState6[0],
    setRestReady = _useState6[1];
  var itemPrefixCls = "".concat(prefixCls, "-item");
  // Always use the max width to avoid blink
  var mergedRestWidth = Math.max(prevRestWidth, restWidth);
  // ================================= Data =================================
  var isResponsive = maxCount === RESPONSIVE;
  var shouldResponsive = data.length && isResponsive;
  var invalidate = maxCount === INVALIDATE;
  /**
   * When is `responsive`, we will always render rest node to get the real width of it for calculation
   */
  var showRest = shouldResponsive || typeof maxCount === 'number' && data.length > maxCount;
  var mergedData = useMemo$1(function () {
    var items = data;
    if (shouldResponsive) {
      if (containerWidth === null && fullySSR) {
        items = data;
      } else {
        items = data.slice(0, Math.min(data.length, mergedContainerWidth / itemWidth));
      }
    } else if (typeof maxCount === 'number') {
      items = data.slice(0, maxCount);
    }
    return items;
  }, [data, itemWidth, containerWidth, maxCount, shouldResponsive]);
  var omittedItems = useMemo$1(function () {
    if (shouldResponsive) {
      return data.slice(mergedDisplayCount + 1);
    }
    return data.slice(mergedData.length);
  }, [data, mergedData, shouldResponsive, mergedDisplayCount]);
  // ================================= Item =================================
  var getKey = useCallback(function (item, index) {
    var _ref;
    if (typeof itemKey === 'function') {
      return itemKey(item);
    }
    return (_ref = itemKey && (item === null || item === void 0 ? void 0 : item[itemKey])) !== null && _ref !== void 0 ? _ref : index;
  }, [itemKey]);
  var mergedRenderItem = useCallback(renderItem || function (item) {
    return item;
  }, [renderItem]);
  function updateDisplayCount(count, suffixFixedStartVal, notReady) {
    // React 18 will sync render even when the value is same in some case.
    // We take `mergedData` as deps which may cause dead loop if it's dynamic generate.
    // ref: https://github.com/ant-design/ant-design/issues/36559
    if (displayCount === count && (suffixFixedStartVal === undefined || suffixFixedStartVal === suffixFixedStart)) {
      return;
    }
    setDisplayCount(count);
    if (!notReady) {
      setRestReady(count < data.length - 1);
      onVisibleChange === null || onVisibleChange === void 0 ? void 0 : onVisibleChange(count);
    }
    if (suffixFixedStartVal !== undefined) {
      setSuffixFixedStart(suffixFixedStartVal);
    }
  }
  // ================================= Size =================================
  function onOverflowResize(_, element) {
    setContainerWidth(element.clientWidth);
  }
  function registerSize(key, width) {
    setItemWidths(function (origin) {
      var clone = new Map(origin);
      if (width === null) {
        clone.delete(key);
      } else {
        clone.set(key, width);
      }
      return clone;
    });
  }
  function registerOverflowSize(_, width) {
    setRestWidth(width);
    setPrevRestWidth(restWidth);
  }
  function registerSuffixSize(_, width) {
    setSuffixWidth(width);
  }
  // ================================ Effect ================================
  function getItemWidth(index) {
    return itemWidths.get(getKey(mergedData[index], index));
  }
  useLayoutEffect$1(function () {
    if (mergedContainerWidth && typeof mergedRestWidth === 'number' && mergedData) {
      var totalWidth = suffixWidth;
      var len = mergedData.length;
      var lastIndex = len - 1;
      // When data count change to 0, reset this since not loop will reach
      if (!len) {
        updateDisplayCount(0, null);
        return;
      }
      for (var i = 0; i < len; i += 1) {
        var currentItemWidth = getItemWidth(i);
        // Fully will always render
        if (fullySSR) {
          currentItemWidth = currentItemWidth || 0;
        }
        // Break since data not ready
        if (currentItemWidth === undefined) {
          updateDisplayCount(i - 1, undefined, true);
          break;
        }
        // Find best match
        totalWidth += currentItemWidth;
        if (
        // Only one means `totalWidth` is the final width
        lastIndex === 0 && totalWidth <= mergedContainerWidth ||
        // Last two width will be the final width
        i === lastIndex - 1 && totalWidth + getItemWidth(lastIndex) <= mergedContainerWidth) {
          // Additional check if match the end
          updateDisplayCount(lastIndex, null);
          break;
        } else if (totalWidth + mergedRestWidth > mergedContainerWidth) {
          // Can not hold all the content to show rest
          updateDisplayCount(i - 1, totalWidth - currentItemWidth - suffixWidth + restWidth);
          break;
        }
      }
      if (suffix && getItemWidth(0) + suffixWidth > mergedContainerWidth) {
        setSuffixFixedStart(null);
      }
    }
  }, [mergedContainerWidth, itemWidths, restWidth, suffixWidth, getKey, mergedData]);
  // ================================ Render ================================
  var displayRest = restReady && !!omittedItems.length;
  var suffixStyle = {};
  if (suffixFixedStart !== null && shouldResponsive) {
    suffixStyle = {
      position: 'absolute',
      left: suffixFixedStart,
      top: 0
    };
  }
  var itemSharedProps = {
    prefixCls: itemPrefixCls,
    responsive: shouldResponsive,
    component: itemComponent,
    invalidate: invalidate
  };
  // >>>>> Choice render fun by `renderRawItem`
  var internalRenderItemNode = renderRawItem ? function (item, index) {
    var key = getKey(item, index);
    return /*#__PURE__*/React.createElement(OverflowContext.Provider, {
      key: key,
      value: _objectSpread2(_objectSpread2({}, itemSharedProps), {}, {
        order: index,
        item: item,
        itemKey: key,
        registerSize: registerSize,
        display: index <= mergedDisplayCount
      })
    }, renderRawItem(item, index));
  } : function (item, index) {
    var key = getKey(item, index);
    return /*#__PURE__*/React.createElement(Item$1, _extends$1({}, itemSharedProps, {
      order: index,
      key: key,
      item: item,
      renderItem: mergedRenderItem,
      itemKey: key,
      registerSize: registerSize,
      display: index <= mergedDisplayCount
    }));
  };
  // >>>>> Rest node
  var restNode;
  var restContextProps = {
    order: displayRest ? mergedDisplayCount : Number.MAX_SAFE_INTEGER,
    className: "".concat(itemPrefixCls, "-rest"),
    registerSize: registerOverflowSize,
    display: displayRest
  };
  if (!renderRawRest) {
    var mergedRenderRest = renderRest || defaultRenderRest;
    restNode = /*#__PURE__*/React.createElement(Item$1, _extends$1({}, itemSharedProps, restContextProps), typeof mergedRenderRest === 'function' ? mergedRenderRest(omittedItems) : mergedRenderRest);
  } else if (renderRawRest) {
    restNode = /*#__PURE__*/React.createElement(OverflowContext.Provider, {
      value: _objectSpread2(_objectSpread2({}, itemSharedProps), restContextProps)
    }, renderRawRest(omittedItems));
  }
  var overflowNode = /*#__PURE__*/React.createElement(Component, _extends$1({
    className: classNames(!invalidate && prefixCls, className),
    style: style,
    ref: ref
  }, restProps), mergedData.map(internalRenderItemNode), showRest ? restNode : null, suffix && /*#__PURE__*/React.createElement(Item$1, _extends$1({}, itemSharedProps, {
    responsive: isResponsive,
    responsiveDisabled: !shouldResponsive,
    order: mergedDisplayCount,
    className: "".concat(itemPrefixCls, "-suffix"),
    registerSize: registerSuffixSize,
    display: true,
    style: suffixStyle
  }), suffix));
  if (isResponsive) {
    overflowNode = /*#__PURE__*/React.createElement(RefResizeObserver, {
      onResize: onOverflowResize,
      disabled: !shouldResponsive
    }, overflowNode);
  }
  return overflowNode;
}
var ForwardOverflow = /*#__PURE__*/React.forwardRef(Overflow);
ForwardOverflow.displayName = 'Overflow';
ForwardOverflow.Item = RawItem;
ForwardOverflow.RESPONSIVE = RESPONSIVE;
ForwardOverflow.INVALIDATE = INVALIDATE;

var Input = function Input(_ref, ref) {
  var _inputNode2, _inputNode2$props;
  var prefixCls = _ref.prefixCls,
    id = _ref.id,
    inputElement = _ref.inputElement,
    disabled = _ref.disabled,
    tabIndex = _ref.tabIndex,
    autoFocus = _ref.autoFocus,
    autoComplete = _ref.autoComplete,
    editable = _ref.editable,
    activeDescendantId = _ref.activeDescendantId,
    value = _ref.value,
    maxLength = _ref.maxLength,
    _onKeyDown = _ref.onKeyDown,
    _onMouseDown = _ref.onMouseDown,
    _onChange = _ref.onChange,
    onPaste = _ref.onPaste,
    _onCompositionStart = _ref.onCompositionStart,
    _onCompositionEnd = _ref.onCompositionEnd,
    open = _ref.open,
    attrs = _ref.attrs;
  var inputNode = inputElement || /*#__PURE__*/React.createElement("input", null);
  var _inputNode = inputNode,
    originRef = _inputNode.ref,
    originProps = _inputNode.props;
  var onOriginKeyDown = originProps.onKeyDown,
    onOriginChange = originProps.onChange,
    onOriginMouseDown = originProps.onMouseDown,
    onOriginCompositionStart = originProps.onCompositionStart,
    onOriginCompositionEnd = originProps.onCompositionEnd,
    style = originProps.style;
  warning$4(!('maxLength' in inputNode.props), "Passing 'maxLength' to input element directly may not work because input in BaseSelect is controlled.");
  inputNode = /*#__PURE__*/React.cloneElement(inputNode, _objectSpread2(_objectSpread2(_objectSpread2({
    type: 'search'
  }, originProps), {}, {
    // Override over origin props
    id: id,
    ref: composeRef(ref, originRef),
    disabled: disabled,
    tabIndex: tabIndex,
    autoComplete: autoComplete || 'off',
    autoFocus: autoFocus,
    className: classNames("".concat(prefixCls, "-selection-search-input"), (_inputNode2 = inputNode) === null || _inputNode2 === void 0 ? void 0 : (_inputNode2$props = _inputNode2.props) === null || _inputNode2$props === void 0 ? void 0 : _inputNode2$props.className),
    role: 'combobox',
    'aria-label': 'Search',
    'aria-expanded': open || false,
    'aria-haspopup': 'listbox',
    'aria-owns': "".concat(id, "_list"),
    'aria-autocomplete': 'list',
    'aria-controls': "".concat(id, "_list"),
    'aria-activedescendant': open ? activeDescendantId : undefined
  }, attrs), {}, {
    value: editable ? value : '',
    maxLength: maxLength,
    readOnly: !editable,
    unselectable: !editable ? 'on' : null,
    style: _objectSpread2(_objectSpread2({}, style), {}, {
      opacity: editable ? null : 0
    }),
    onKeyDown: function onKeyDown(event) {
      _onKeyDown(event);
      if (onOriginKeyDown) {
        onOriginKeyDown(event);
      }
    },
    onMouseDown: function onMouseDown(event) {
      _onMouseDown(event);
      if (onOriginMouseDown) {
        onOriginMouseDown(event);
      }
    },
    onChange: function onChange(event) {
      _onChange(event);
      if (onOriginChange) {
        onOriginChange(event);
      }
    },
    onCompositionStart: function onCompositionStart(event) {
      _onCompositionStart(event);
      if (onOriginCompositionStart) {
        onOriginCompositionStart(event);
      }
    },
    onCompositionEnd: function onCompositionEnd(event) {
      _onCompositionEnd(event);
      if (onOriginCompositionEnd) {
        onOriginCompositionEnd(event);
      }
    },
    onPaste: onPaste
  }));
  return inputNode;
};
var RefInput = /*#__PURE__*/React.forwardRef(Input);
RefInput.displayName = 'Input';

function toArray$1(value) {
  if (Array.isArray(value)) {
    return value;
  }
  return value !== undefined ? [value] : [];
}
var isClient = typeof window !== 'undefined' && window.document && window.document.documentElement;

/** Is client side and not jsdom */
var isBrowserClient$1 = process.env.NODE_ENV !== 'test' && isClient;
function hasValue(value) {
  return value !== undefined && value !== null;
}

/** combo mode no value judgment function */
function isComboNoValue(value) {
  return !value && value !== 0;
}
function isTitleType$1(title) {
  return ['string', 'number'].includes(_typeof(title));
}
function getTitle(item) {
  var title = undefined;
  if (item) {
    if (isTitleType$1(item.title)) {
      title = item.title.toString();
    } else if (isTitleType$1(item.label)) {
      title = item.label.toString();
    }
  }
  return title;
}

/* eslint-disable react-hooks/rules-of-hooks */

/**
 * Wrap `React.useLayoutEffect` which will not throw warning message in test env
 */
function useLayoutEffect(effect, deps) {
  // Never happen in test env
  if (isBrowserClient$1) {
    /* istanbul ignore next */
    React.useLayoutEffect(effect, deps);
  } else {
    React.useEffect(effect, deps);
  }
}
/* eslint-enable */

function itemKey(value) {
  var _value$key;
  return (_value$key = value.key) !== null && _value$key !== void 0 ? _value$key : value.value;
}
var onPreventMouseDown = function onPreventMouseDown(event) {
  event.preventDefault();
  event.stopPropagation();
};
var SelectSelector = function SelectSelector(props) {
  var id = props.id,
    prefixCls = props.prefixCls,
    values = props.values,
    open = props.open,
    searchValue = props.searchValue,
    autoClearSearchValue = props.autoClearSearchValue,
    inputRef = props.inputRef,
    placeholder = props.placeholder,
    disabled = props.disabled,
    mode = props.mode,
    showSearch = props.showSearch,
    autoFocus = props.autoFocus,
    autoComplete = props.autoComplete,
    activeDescendantId = props.activeDescendantId,
    tabIndex = props.tabIndex,
    removeIcon = props.removeIcon,
    maxTagCount = props.maxTagCount,
    maxTagTextLength = props.maxTagTextLength,
    _props$maxTagPlacehol = props.maxTagPlaceholder,
    maxTagPlaceholder = _props$maxTagPlacehol === void 0 ? function (omittedValues) {
      return "+ ".concat(omittedValues.length, " ...");
    } : _props$maxTagPlacehol,
    tagRender = props.tagRender,
    onToggleOpen = props.onToggleOpen,
    onRemove = props.onRemove,
    onInputChange = props.onInputChange,
    onInputPaste = props.onInputPaste,
    onInputKeyDown = props.onInputKeyDown,
    onInputMouseDown = props.onInputMouseDown,
    onInputCompositionStart = props.onInputCompositionStart,
    onInputCompositionEnd = props.onInputCompositionEnd;
  var measureRef = React.useRef(null);
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    inputWidth = _useState2[0],
    setInputWidth = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    focused = _useState4[0],
    setFocused = _useState4[1];
  var selectionPrefixCls = "".concat(prefixCls, "-selection");

  // ===================== Search ======================
  var inputValue = open || mode === "multiple" && autoClearSearchValue === false || mode === 'tags' ? searchValue : '';
  var inputEditable = mode === 'tags' || mode === "multiple" && autoClearSearchValue === false || showSearch && (open || focused);

  // We measure width and set to the input immediately
  useLayoutEffect(function () {
    setInputWidth(measureRef.current.scrollWidth);
  }, [inputValue]);

  // ===================== Render ======================
  // >>> Render Selector Node. Includes Item & Rest
  function defaultRenderSelector(item, content, itemDisabled, closable, onClose) {
    return /*#__PURE__*/React.createElement("span", {
      className: classNames("".concat(selectionPrefixCls, "-item"), _defineProperty({}, "".concat(selectionPrefixCls, "-item-disabled"), itemDisabled)),
      title: getTitle(item)
    }, /*#__PURE__*/React.createElement("span", {
      className: "".concat(selectionPrefixCls, "-item-content")
    }, content), closable && /*#__PURE__*/React.createElement(TransBtn, {
      className: "".concat(selectionPrefixCls, "-item-remove"),
      onMouseDown: onPreventMouseDown,
      onClick: onClose,
      customizeIcon: removeIcon
    }, "\xD7"));
  }
  function customizeRenderSelector(value, content, itemDisabled, closable, onClose) {
    var onMouseDown = function onMouseDown(e) {
      onPreventMouseDown(e);
      onToggleOpen(!open);
    };
    return /*#__PURE__*/React.createElement("span", {
      onMouseDown: onMouseDown
    }, tagRender({
      label: content,
      value: value,
      disabled: itemDisabled,
      closable: closable,
      onClose: onClose
    }));
  }
  function renderItem(valueItem) {
    var itemDisabled = valueItem.disabled,
      label = valueItem.label,
      value = valueItem.value;
    var closable = !disabled && !itemDisabled;
    var displayLabel = label;
    if (typeof maxTagTextLength === 'number') {
      if (typeof label === 'string' || typeof label === 'number') {
        var strLabel = String(displayLabel);
        if (strLabel.length > maxTagTextLength) {
          displayLabel = "".concat(strLabel.slice(0, maxTagTextLength), "...");
        }
      }
    }
    var onClose = function onClose(event) {
      if (event) event.stopPropagation();
      onRemove(valueItem);
    };
    return typeof tagRender === 'function' ? customizeRenderSelector(value, displayLabel, itemDisabled, closable, onClose) : defaultRenderSelector(valueItem, displayLabel, itemDisabled, closable, onClose);
  }
  function renderRest(omittedValues) {
    var content = typeof maxTagPlaceholder === 'function' ? maxTagPlaceholder(omittedValues) : maxTagPlaceholder;
    return defaultRenderSelector({
      title: content
    }, content, false);
  }

  // >>> Input Node
  var inputNode = /*#__PURE__*/React.createElement("div", {
    className: "".concat(selectionPrefixCls, "-search"),
    style: {
      width: inputWidth
    },
    onFocus: function onFocus() {
      setFocused(true);
    },
    onBlur: function onBlur() {
      setFocused(false);
    }
  }, /*#__PURE__*/React.createElement(RefInput, {
    ref: inputRef,
    open: open,
    prefixCls: prefixCls,
    id: id,
    inputElement: null,
    disabled: disabled,
    autoFocus: autoFocus,
    autoComplete: autoComplete,
    editable: inputEditable,
    activeDescendantId: activeDescendantId,
    value: inputValue,
    onKeyDown: onInputKeyDown,
    onMouseDown: onInputMouseDown,
    onChange: onInputChange,
    onPaste: onInputPaste,
    onCompositionStart: onInputCompositionStart,
    onCompositionEnd: onInputCompositionEnd,
    tabIndex: tabIndex,
    attrs: pickAttrs(props, true)
  }), /*#__PURE__*/React.createElement("span", {
    ref: measureRef,
    className: "".concat(selectionPrefixCls, "-search-mirror"),
    "aria-hidden": true
  }, inputValue, "\xA0"));

  // >>> Selections
  var selectionNode = /*#__PURE__*/React.createElement(ForwardOverflow, {
    prefixCls: "".concat(selectionPrefixCls, "-overflow"),
    data: values,
    renderItem: renderItem,
    renderRest: renderRest,
    suffix: inputNode,
    itemKey: itemKey,
    maxCount: maxTagCount
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, selectionNode, !values.length && !inputValue && /*#__PURE__*/React.createElement("span", {
    className: "".concat(selectionPrefixCls, "-placeholder")
  }, placeholder));
};

var SingleSelector = function SingleSelector(props) {
  var inputElement = props.inputElement,
    prefixCls = props.prefixCls,
    id = props.id,
    inputRef = props.inputRef,
    disabled = props.disabled,
    autoFocus = props.autoFocus,
    autoComplete = props.autoComplete,
    activeDescendantId = props.activeDescendantId,
    mode = props.mode,
    open = props.open,
    values = props.values,
    placeholder = props.placeholder,
    tabIndex = props.tabIndex,
    showSearch = props.showSearch,
    searchValue = props.searchValue,
    activeValue = props.activeValue,
    maxLength = props.maxLength,
    onInputKeyDown = props.onInputKeyDown,
    onInputMouseDown = props.onInputMouseDown,
    onInputChange = props.onInputChange,
    onInputPaste = props.onInputPaste,
    onInputCompositionStart = props.onInputCompositionStart,
    onInputCompositionEnd = props.onInputCompositionEnd,
    title = props.title;
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    inputChanged = _React$useState2[0],
    setInputChanged = _React$useState2[1];
  var combobox = mode === 'combobox';
  var inputEditable = combobox || showSearch;
  var item = values[0];
  var inputValue = searchValue || '';
  if (combobox && activeValue && !inputChanged) {
    inputValue = activeValue;
  }
  React.useEffect(function () {
    if (combobox) {
      setInputChanged(false);
    }
  }, [combobox, activeValue]);

  // Not show text when closed expect combobox mode
  var hasTextInput = mode !== 'combobox' && !open && !showSearch ? false : !!inputValue;

  // Get title of selection item
  var selectionTitle = title === undefined ? getTitle(item) : title;
  var renderPlaceholder = function renderPlaceholder() {
    if (item) {
      return null;
    }
    var hiddenStyle = hasTextInput ? {
      visibility: 'hidden'
    } : undefined;
    return /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-selection-placeholder"),
      style: hiddenStyle
    }, placeholder);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "".concat(prefixCls, "-selection-search")
  }, /*#__PURE__*/React.createElement(RefInput, {
    ref: inputRef,
    prefixCls: prefixCls,
    id: id,
    open: open,
    inputElement: inputElement,
    disabled: disabled,
    autoFocus: autoFocus,
    autoComplete: autoComplete,
    editable: inputEditable,
    activeDescendantId: activeDescendantId,
    value: inputValue,
    onKeyDown: onInputKeyDown,
    onMouseDown: onInputMouseDown,
    onChange: function onChange(e) {
      setInputChanged(true);
      onInputChange(e);
    },
    onPaste: onInputPaste,
    onCompositionStart: onInputCompositionStart,
    onCompositionEnd: onInputCompositionEnd,
    tabIndex: tabIndex,
    attrs: pickAttrs(props, true),
    maxLength: combobox ? maxLength : undefined
  })), !combobox && item ? /*#__PURE__*/React.createElement("span", {
    className: "".concat(prefixCls, "-selection-item"),
    title: selectionTitle
    // 当 Select 已经选中选项时，还需 selection 隐藏但留在原地占位
    // https://github.com/ant-design/ant-design/issues/27688
    // https://github.com/ant-design/ant-design/issues/41530
    ,
    style: hasTextInput ? {
      visibility: 'hidden'
    } : undefined
  }, item.label) : null, renderPlaceholder());
};

/** keyCode Judgment function */
function isValidateOpenKey(currentKeyCode) {
  return ![
  // System function button
  KeyCode.ESC, KeyCode.SHIFT, KeyCode.BACKSPACE, KeyCode.TAB, KeyCode.WIN_KEY, KeyCode.ALT, KeyCode.META, KeyCode.WIN_KEY_RIGHT, KeyCode.CTRL, KeyCode.SEMICOLON, KeyCode.EQUALS, KeyCode.CAPS_LOCK, KeyCode.CONTEXT_MENU,
  // F1-F12
  KeyCode.F1, KeyCode.F2, KeyCode.F3, KeyCode.F4, KeyCode.F5, KeyCode.F6, KeyCode.F7, KeyCode.F8, KeyCode.F9, KeyCode.F10, KeyCode.F11, KeyCode.F12].includes(currentKeyCode);
}

var Selector = function Selector(props, ref) {
  var inputRef = useRef(null);
  var compositionStatusRef = useRef(false);
  var prefixCls = props.prefixCls,
    open = props.open,
    mode = props.mode,
    showSearch = props.showSearch,
    tokenWithEnter = props.tokenWithEnter,
    autoClearSearchValue = props.autoClearSearchValue,
    onSearch = props.onSearch,
    onSearchSubmit = props.onSearchSubmit,
    onToggleOpen = props.onToggleOpen,
    onInputKeyDown = props.onInputKeyDown,
    domRef = props.domRef;

  // ======================= Ref =======================
  React.useImperativeHandle(ref, function () {
    return {
      focus: function focus() {
        inputRef.current.focus();
      },
      blur: function blur() {
        inputRef.current.blur();
      }
    };
  });

  // ====================== Input ======================
  var _useLock = useLock(0),
    _useLock2 = _slicedToArray(_useLock, 2),
    getInputMouseDown = _useLock2[0],
    setInputMouseDown = _useLock2[1];
  var onInternalInputKeyDown = function onInternalInputKeyDown(event) {
    var which = event.which;
    if (which === KeyCode.UP || which === KeyCode.DOWN) {
      event.preventDefault();
    }
    if (onInputKeyDown) {
      onInputKeyDown(event);
    }
    if (which === KeyCode.ENTER && mode === 'tags' && !compositionStatusRef.current && !open) {
      // When menu isn't open, OptionList won't trigger a value change
      // So when enter is pressed, the tag's input value should be emitted here to let selector know
      onSearchSubmit === null || onSearchSubmit === void 0 ? void 0 : onSearchSubmit(event.target.value);
    }
    if (isValidateOpenKey(which)) {
      onToggleOpen(true);
    }
  };

  /**
   * We can not use `findDOMNode` sine it will get warning,
   * have to use timer to check if is input element.
   */
  var onInternalInputMouseDown = function onInternalInputMouseDown() {
    setInputMouseDown(true);
  };

  // When paste come, ignore next onChange
  var pastedTextRef = useRef(null);
  var triggerOnSearch = function triggerOnSearch(value) {
    if (onSearch(value, true, compositionStatusRef.current) !== false) {
      onToggleOpen(true);
    }
  };
  var onInputCompositionStart = function onInputCompositionStart() {
    compositionStatusRef.current = true;
  };
  var onInputCompositionEnd = function onInputCompositionEnd(e) {
    compositionStatusRef.current = false;

    // Trigger search again to support `tokenSeparators` with typewriting
    if (mode !== 'combobox') {
      triggerOnSearch(e.target.value);
    }
  };
  var onInputChange = function onInputChange(event) {
    var value = event.target.value;

    // Pasted text should replace back to origin content
    if (tokenWithEnter && pastedTextRef.current && /[\r\n]/.test(pastedTextRef.current)) {
      // CRLF will be treated as a single space for input element
      var replacedText = pastedTextRef.current.replace(/[\r\n]+$/, '').replace(/\r\n/g, ' ').replace(/[\r\n]/g, ' ');
      value = value.replace(replacedText, pastedTextRef.current);
    }
    pastedTextRef.current = null;
    triggerOnSearch(value);
  };
  var onInputPaste = function onInputPaste(e) {
    var clipboardData = e.clipboardData;
    var value = clipboardData.getData('text');
    pastedTextRef.current = value;
  };
  var onClick = function onClick(_ref) {
    var target = _ref.target;
    if (target !== inputRef.current) {
      // Should focus input if click the selector
      var isIE = document.body.style.msTouchAction !== undefined;
      if (isIE) {
        setTimeout(function () {
          inputRef.current.focus();
        });
      } else {
        inputRef.current.focus();
      }
    }
  };
  var onMouseDown = function onMouseDown(event) {
    var inputMouseDown = getInputMouseDown();

    // when mode is combobox, don't prevent default behavior
    // https://github.com/ant-design/ant-design/issues/37320
    if (event.target !== inputRef.current && !inputMouseDown && mode !== 'combobox') {
      event.preventDefault();
    }
    if (mode !== 'combobox' && (!showSearch || !inputMouseDown) || !open) {
      if (open && autoClearSearchValue !== false) {
        onSearch('', true, false);
      }
      onToggleOpen();
    }
  };

  // ================= Inner Selector ==================
  var sharedProps = {
    inputRef: inputRef,
    onInputKeyDown: onInternalInputKeyDown,
    onInputMouseDown: onInternalInputMouseDown,
    onInputChange: onInputChange,
    onInputPaste: onInputPaste,
    onInputCompositionStart: onInputCompositionStart,
    onInputCompositionEnd: onInputCompositionEnd
  };
  var selectNode = mode === 'multiple' || mode === 'tags' ? /*#__PURE__*/React.createElement(SelectSelector, _extends$1({}, props, sharedProps)) : /*#__PURE__*/React.createElement(SingleSelector, _extends$1({}, props, sharedProps));
  return /*#__PURE__*/React.createElement("div", {
    ref: domRef,
    className: "".concat(prefixCls, "-selector"),
    onClick: onClick,
    onMouseDown: onMouseDown
  }, selectNode);
};
var ForwardSelector = /*#__PURE__*/React.forwardRef(Selector);
ForwardSelector.displayName = 'Selector';

var TriggerContext = /*#__PURE__*/React.createContext(null);

function toArray(val) {
  return val ? Array.isArray(val) ? val : [val] : [];
}
function useAction(mobile, action, showAction, hideAction) {
  return React.useMemo(function () {
    var mergedShowAction = toArray(showAction !== null && showAction !== void 0 ? showAction : action);
    var mergedHideAction = toArray(hideAction !== null && hideAction !== void 0 ? hideAction : action);
    var showActionSet = new Set(mergedShowAction);
    var hideActionSet = new Set(mergedHideAction);
    if (mobile) {
      if (showActionSet.has('hover')) {
        showActionSet.delete('hover');
        showActionSet.add('click');
      }
      if (hideActionSet.has('hover')) {
        hideActionSet.delete('hover');
        hideActionSet.add('click');
      }
    }
    return [showActionSet, hideActionSet];
  }, [mobile, action, showAction, hideAction]);
}

function isPointsEq() {
  var a1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var a2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var isAlignPoint = arguments.length > 2 ? arguments[2] : undefined;
  if (isAlignPoint) {
    return a1[0] === a2[0];
  }
  return a1[0] === a2[0] && a1[1] === a2[1];
}
function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
  var points = align.points;
  var placements = Object.keys(builtinPlacements);
  for (var i = 0; i < placements.length; i += 1) {
    var _builtinPlacements$pl;
    var placement = placements[i];
    if (isPointsEq((_builtinPlacements$pl = builtinPlacements[placement]) === null || _builtinPlacements$pl === void 0 ? void 0 : _builtinPlacements$pl.points, points, isAlignPoint)) {
      return "".concat(prefixCls, "-placement-").concat(placement);
    }
  }
  return '';
}

/** @deprecated We should not use this if we can refactor all deps */
function getMotion(prefixCls, motion, animation, transitionName) {
  if (motion) {
    return motion;
  }
  if (animation) {
    return {
      motionName: "".concat(prefixCls, "-").concat(animation)
    };
  }
  if (transitionName) {
    return {
      motionName: transitionName
    };
  }
  return null;
}
function getWin(ele) {
  return ele.ownerDocument.defaultView;
}

/**
 * Get all the scrollable parent elements of the element
 * @param ele       The element to be detected
 * @param areaOnly  Only return the parent which will cut visible area
 */
function collectScroller(ele) {
  var scrollerList = [];
  var current = ele === null || ele === void 0 ? void 0 : ele.parentElement;
  var scrollStyle = ['hidden', 'scroll', 'clip', 'auto'];
  while (current) {
    var _getWin$getComputedSt = getWin(current).getComputedStyle(current),
      overflowX = _getWin$getComputedSt.overflowX,
      overflowY = _getWin$getComputedSt.overflowY,
      overflow = _getWin$getComputedSt.overflow;
    if ([overflowX, overflowY, overflow].some(function (o) {
      return scrollStyle.includes(o);
    })) {
      scrollerList.push(current);
    }
    current = current.parentElement;
  }
  return scrollerList;
}
function toNum(num) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return Number.isNaN(num) ? defaultValue : num;
}
function getPxValue(val) {
  return toNum(parseFloat(val), 0);
}
/**
 *
 *
 *  **************************************
 *  *              Border                *
 *  *     **************************     *
 *  *     *                  *     *     *
 *  *  B  *                  *  S  *  B  *
 *  *  o  *                  *  c  *  o  *
 *  *  r  *      Content     *  r  *  r  *
 *  *  d  *                  *  o  *  d  *
 *  *  e  *                  *  l  *  e  *
 *  *  r  ********************  l  *  r  *
 *  *     *        Scroll          *     *
 *  *     **************************     *
 *  *              Border                *
 *  **************************************
 *
 */
/**
 * Get visible area of element
 */
function getVisibleArea(initArea, scrollerList) {
  var visibleArea = _objectSpread2({}, initArea);
  (scrollerList || []).forEach(function (ele) {
    if (ele instanceof HTMLBodyElement || ele instanceof HTMLHtmlElement) {
      return;
    }

    // Skip if static position which will not affect visible area
    var _getWin$getComputedSt2 = getWin(ele).getComputedStyle(ele),
      overflow = _getWin$getComputedSt2.overflow,
      overflowClipMargin = _getWin$getComputedSt2.overflowClipMargin,
      borderTopWidth = _getWin$getComputedSt2.borderTopWidth,
      borderBottomWidth = _getWin$getComputedSt2.borderBottomWidth,
      borderLeftWidth = _getWin$getComputedSt2.borderLeftWidth,
      borderRightWidth = _getWin$getComputedSt2.borderRightWidth;
    var eleRect = ele.getBoundingClientRect();
    var eleOutHeight = ele.offsetHeight,
      eleInnerHeight = ele.clientHeight,
      eleOutWidth = ele.offsetWidth,
      eleInnerWidth = ele.clientWidth;
    var borderTopNum = getPxValue(borderTopWidth);
    var borderBottomNum = getPxValue(borderBottomWidth);
    var borderLeftNum = getPxValue(borderLeftWidth);
    var borderRightNum = getPxValue(borderRightWidth);
    var scaleX = toNum(Math.round(eleRect.width / eleOutWidth * 1000) / 1000);
    var scaleY = toNum(Math.round(eleRect.height / eleOutHeight * 1000) / 1000);

    // Original visible area
    var eleScrollWidth = (eleOutWidth - eleInnerWidth - borderLeftNum - borderRightNum) * scaleX;
    var eleScrollHeight = (eleOutHeight - eleInnerHeight - borderTopNum - borderBottomNum) * scaleY;

    // Cut border size
    var scaledBorderTopWidth = borderTopNum * scaleY;
    var scaledBorderBottomWidth = borderBottomNum * scaleY;
    var scaledBorderLeftWidth = borderLeftNum * scaleX;
    var scaledBorderRightWidth = borderRightNum * scaleX;

    // Clip margin
    var clipMarginWidth = 0;
    var clipMarginHeight = 0;
    if (overflow === 'clip') {
      var clipNum = getPxValue(overflowClipMargin);
      clipMarginWidth = clipNum * scaleX;
      clipMarginHeight = clipNum * scaleY;
    }

    // Region
    var eleLeft = eleRect.x + scaledBorderLeftWidth - clipMarginWidth;
    var eleTop = eleRect.y + scaledBorderTopWidth - clipMarginHeight;
    var eleRight = eleLeft + eleRect.width + 2 * clipMarginWidth - scaledBorderLeftWidth - scaledBorderRightWidth - eleScrollWidth;
    var eleBottom = eleTop + eleRect.height + 2 * clipMarginHeight - scaledBorderTopWidth - scaledBorderBottomWidth - eleScrollHeight;
    visibleArea.left = Math.max(visibleArea.left, eleLeft);
    visibleArea.top = Math.max(visibleArea.top, eleTop);
    visibleArea.right = Math.min(visibleArea.right, eleRight);
    visibleArea.bottom = Math.min(visibleArea.bottom, eleBottom);
  });
  return visibleArea;
}

function getUnitOffset(size) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var offsetStr = "".concat(offset);
  var cells = offsetStr.match(/^(.*)\%$/);
  if (cells) {
    return size * (parseFloat(cells[1]) / 100);
  }
  return parseFloat(offsetStr);
}
function getNumberOffset(rect, offset) {
  var _ref = offset || [],
    _ref2 = _slicedToArray(_ref, 2),
    offsetX = _ref2[0],
    offsetY = _ref2[1];
  return [getUnitOffset(rect.width, offsetX), getUnitOffset(rect.height, offsetY)];
}
function splitPoints() {
  var points = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return [points[0], points[1]];
}
function getAlignPoint(rect, points) {
  var topBottom = points[0];
  var leftRight = points[1];
  var x;
  var y;

  // Top & Bottom
  if (topBottom === 't') {
    y = rect.y;
  } else if (topBottom === 'b') {
    y = rect.y + rect.height;
  } else {
    y = rect.y + rect.height / 2;
  }

  // Left & Right
  if (leftRight === 'l') {
    x = rect.x;
  } else if (leftRight === 'r') {
    x = rect.x + rect.width;
  } else {
    x = rect.x + rect.width / 2;
  }
  return {
    x: x,
    y: y
  };
}
function reversePoints(points, index) {
  var reverseMap = {
    t: 'b',
    b: 't',
    l: 'r',
    r: 'l'
  };
  return points.map(function (point, i) {
    if (i === index) {
      return reverseMap[point] || 'c';
    }
    return point;
  }).join('');
}
function useAlign(open, popupEle, target, placement, builtinPlacements, popupAlign, onPopupAlign) {
  var _React$useState = React.useState({
      ready: false,
      offsetX: 0,
      offsetY: 0,
      offsetR: 0,
      offsetB: 0,
      arrowX: 0,
      arrowY: 0,
      scaleX: 1,
      scaleY: 1,
      align: builtinPlacements[placement] || {}
    }),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    offsetInfo = _React$useState2[0],
    setOffsetInfo = _React$useState2[1];
  var alignCountRef = React.useRef(0);
  var scrollerList = React.useMemo(function () {
    if (!popupEle) {
      return [];
    }
    return collectScroller(popupEle);
  }, [popupEle]);

  // ========================= Flip ==========================
  // We will memo flip info.
  // If size change to make flip, it will memo the flip info and use it in next align.
  var prevFlipRef = React.useRef({});
  var resetFlipCache = function resetFlipCache() {
    prevFlipRef.current = {};
  };
  if (!open) {
    resetFlipCache();
  }

  // ========================= Align =========================
  var onAlign = useEvent(function () {
    if (popupEle && target && open) {
      var _popupElement$parentE, _popupElement$parentE2;
      var popupElement = popupEle;
      var doc = popupElement.ownerDocument;
      var win = getWin(popupElement);
      var _win$getComputedStyle = win.getComputedStyle(popupElement),
        width = _win$getComputedStyle.width,
        height = _win$getComputedStyle.height,
        popupPosition = _win$getComputedStyle.position;
      var originLeft = popupElement.style.left;
      var originTop = popupElement.style.top;
      var originRight = popupElement.style.right;
      var originBottom = popupElement.style.bottom;

      // Placement
      var placementInfo = _objectSpread2(_objectSpread2({}, builtinPlacements[placement]), popupAlign);

      // placeholder element
      var placeholderElement = doc.createElement('div');
      (_popupElement$parentE = popupElement.parentElement) === null || _popupElement$parentE === void 0 ? void 0 : _popupElement$parentE.appendChild(placeholderElement);
      placeholderElement.style.left = "".concat(popupElement.offsetLeft, "px");
      placeholderElement.style.top = "".concat(popupElement.offsetTop, "px");
      placeholderElement.style.position = popupPosition;
      placeholderElement.style.height = "".concat(popupElement.offsetHeight, "px");
      placeholderElement.style.width = "".concat(popupElement.offsetWidth, "px");

      // Reset first
      popupElement.style.left = '0';
      popupElement.style.top = '0';
      popupElement.style.right = 'auto';
      popupElement.style.bottom = 'auto';

      // Calculate align style, we should consider `transform` case
      var targetRect;
      if (Array.isArray(target)) {
        targetRect = {
          x: target[0],
          y: target[1],
          width: 0,
          height: 0
        };
      } else {
        var rect = target.getBoundingClientRect();
        targetRect = {
          x: rect.x,
          y: rect.y,
          width: rect.width,
          height: rect.height
        };
      }
      var popupRect = popupElement.getBoundingClientRect();
      var _doc$documentElement = doc.documentElement,
        clientWidth = _doc$documentElement.clientWidth,
        clientHeight = _doc$documentElement.clientHeight,
        scrollWidth = _doc$documentElement.scrollWidth,
        scrollHeight = _doc$documentElement.scrollHeight,
        scrollTop = _doc$documentElement.scrollTop,
        scrollLeft = _doc$documentElement.scrollLeft;
      var popupHeight = popupRect.height;
      var popupWidth = popupRect.width;
      var targetHeight = targetRect.height;
      var targetWidth = targetRect.width;

      // Get bounding of visible area
      var visibleRegion = {
        left: 0,
        top: 0,
        right: clientWidth,
        bottom: clientHeight
      };
      var scrollRegion = {
        left: -scrollLeft,
        top: -scrollTop,
        right: scrollWidth - scrollLeft,
        bottom: scrollHeight - scrollTop
      };
      var htmlRegion = placementInfo.htmlRegion;
      var VISIBLE = 'visible';
      var VISIBLE_FIRST = 'visibleFirst';
      if (htmlRegion !== 'scroll' && htmlRegion !== VISIBLE_FIRST) {
        htmlRegion = VISIBLE;
      }
      var isVisibleFirst = htmlRegion === VISIBLE_FIRST;
      var scrollRegionArea = getVisibleArea(scrollRegion, scrollerList);
      var visibleRegionArea = getVisibleArea(visibleRegion, scrollerList);
      var visibleArea = htmlRegion === VISIBLE ? visibleRegionArea : scrollRegionArea;

      // When set to `visibleFirst`,
      // the check `adjust` logic will use `visibleRegion` for check first.
      var adjustCheckVisibleArea = isVisibleFirst ? visibleRegionArea : visibleArea;

      // Record right & bottom align data
      popupElement.style.left = 'auto';
      popupElement.style.top = 'auto';
      popupElement.style.right = '0';
      popupElement.style.bottom = '0';
      var popupMirrorRect = popupElement.getBoundingClientRect();

      // Reset back
      popupElement.style.left = originLeft;
      popupElement.style.top = originTop;
      popupElement.style.right = originRight;
      popupElement.style.bottom = originBottom;
      (_popupElement$parentE2 = popupElement.parentElement) === null || _popupElement$parentE2 === void 0 ? void 0 : _popupElement$parentE2.removeChild(placeholderElement);

      // Calculate scale
      var _scaleX = toNum(Math.round(popupWidth / parseFloat(width) * 1000) / 1000);
      var _scaleY = toNum(Math.round(popupHeight / parseFloat(height) * 1000) / 1000);

      // No need to align since it's not visible in view
      if (_scaleX === 0 || _scaleY === 0 || isDOM(target) && !isVisible(target)) {
        return;
      }

      // Offset
      var offset = placementInfo.offset,
        targetOffset = placementInfo.targetOffset;
      var _getNumberOffset = getNumberOffset(popupRect, offset),
        _getNumberOffset2 = _slicedToArray(_getNumberOffset, 2),
        popupOffsetX = _getNumberOffset2[0],
        popupOffsetY = _getNumberOffset2[1];
      var _getNumberOffset3 = getNumberOffset(targetRect, targetOffset),
        _getNumberOffset4 = _slicedToArray(_getNumberOffset3, 2),
        targetOffsetX = _getNumberOffset4[0],
        targetOffsetY = _getNumberOffset4[1];
      targetRect.x -= targetOffsetX;
      targetRect.y -= targetOffsetY;

      // Points
      var _ref3 = placementInfo.points || [],
        _ref4 = _slicedToArray(_ref3, 2),
        popupPoint = _ref4[0],
        targetPoint = _ref4[1];
      var targetPoints = splitPoints(targetPoint);
      var popupPoints = splitPoints(popupPoint);
      var targetAlignPoint = getAlignPoint(targetRect, targetPoints);
      var popupAlignPoint = getAlignPoint(popupRect, popupPoints);

      // Real align info may not same as origin one
      var nextAlignInfo = _objectSpread2({}, placementInfo);

      // Next Offset
      var nextOffsetX = targetAlignPoint.x - popupAlignPoint.x + popupOffsetX;
      var nextOffsetY = targetAlignPoint.y - popupAlignPoint.y + popupOffsetY;

      // ============== Intersection ===============
      // Get area by position. Used for check if flip area is better
      function getIntersectionVisibleArea(offsetX, offsetY) {
        var area = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : visibleArea;
        var l = popupRect.x + offsetX;
        var t = popupRect.y + offsetY;
        var r = l + popupWidth;
        var b = t + popupHeight;
        var visibleL = Math.max(l, area.left);
        var visibleT = Math.max(t, area.top);
        var visibleR = Math.min(r, area.right);
        var visibleB = Math.min(b, area.bottom);
        return Math.max(0, (visibleR - visibleL) * (visibleB - visibleT));
      }
      var originIntersectionVisibleArea = getIntersectionVisibleArea(nextOffsetX, nextOffsetY);

      // As `visibleFirst`, we prepare this for check
      var originIntersectionRecommendArea = getIntersectionVisibleArea(nextOffsetX, nextOffsetY, visibleRegionArea);

      // ========================== Overflow ===========================
      var targetAlignPointTL = getAlignPoint(targetRect, ['t', 'l']);
      var popupAlignPointTL = getAlignPoint(popupRect, ['t', 'l']);
      var targetAlignPointBR = getAlignPoint(targetRect, ['b', 'r']);
      var popupAlignPointBR = getAlignPoint(popupRect, ['b', 'r']);
      var overflow = placementInfo.overflow || {};
      var adjustX = overflow.adjustX,
        adjustY = overflow.adjustY,
        shiftX = overflow.shiftX,
        shiftY = overflow.shiftY;
      var supportAdjust = function supportAdjust(val) {
        if (typeof val === 'boolean') {
          return val;
        }
        return val >= 0;
      };

      // Prepare position
      var nextPopupY;
      var nextPopupBottom;
      var nextPopupX;
      var nextPopupRight;
      function syncNextPopupPosition() {
        nextPopupY = popupRect.y + nextOffsetY;
        nextPopupBottom = nextPopupY + popupHeight;
        nextPopupX = popupRect.x + nextOffsetX;
        nextPopupRight = nextPopupX + popupWidth;
      }
      syncNextPopupPosition();

      // >>>>>>>>>> Top & Bottom
      var needAdjustY = supportAdjust(adjustY);
      var sameTB = popupPoints[0] === targetPoints[0];

      // Bottom to Top
      if (needAdjustY && popupPoints[0] === 't' && (nextPopupBottom > adjustCheckVisibleArea.bottom || prevFlipRef.current.bt)) {
        var tmpNextOffsetY = nextOffsetY;
        if (sameTB) {
          tmpNextOffsetY -= popupHeight - targetHeight;
        } else {
          tmpNextOffsetY = targetAlignPointTL.y - popupAlignPointBR.y - popupOffsetY;
        }
        var newVisibleArea = getIntersectionVisibleArea(nextOffsetX, tmpNextOffsetY);
        var newVisibleRecommendArea = getIntersectionVisibleArea(nextOffsetX, tmpNextOffsetY, visibleRegionArea);
        if (
        // Of course use larger one
        newVisibleArea > originIntersectionVisibleArea || newVisibleArea === originIntersectionVisibleArea && (!isVisibleFirst ||
        // Choose recommend one
        newVisibleRecommendArea >= originIntersectionRecommendArea)) {
          prevFlipRef.current.bt = true;
          nextOffsetY = tmpNextOffsetY;
          popupOffsetY = -popupOffsetY;
          nextAlignInfo.points = [reversePoints(popupPoints, 0), reversePoints(targetPoints, 0)];
        } else {
          prevFlipRef.current.bt = false;
        }
      }

      // Top to Bottom
      if (needAdjustY && popupPoints[0] === 'b' && (nextPopupY < adjustCheckVisibleArea.top || prevFlipRef.current.tb)) {
        var _tmpNextOffsetY = nextOffsetY;
        if (sameTB) {
          _tmpNextOffsetY += popupHeight - targetHeight;
        } else {
          _tmpNextOffsetY = targetAlignPointBR.y - popupAlignPointTL.y - popupOffsetY;
        }
        var _newVisibleArea = getIntersectionVisibleArea(nextOffsetX, _tmpNextOffsetY);
        var _newVisibleRecommendArea = getIntersectionVisibleArea(nextOffsetX, _tmpNextOffsetY, visibleRegionArea);
        if (
        // Of course use larger one
        _newVisibleArea > originIntersectionVisibleArea || _newVisibleArea === originIntersectionVisibleArea && (!isVisibleFirst ||
        // Choose recommend one
        _newVisibleRecommendArea >= originIntersectionRecommendArea)) {
          prevFlipRef.current.tb = true;
          nextOffsetY = _tmpNextOffsetY;
          popupOffsetY = -popupOffsetY;
          nextAlignInfo.points = [reversePoints(popupPoints, 0), reversePoints(targetPoints, 0)];
        } else {
          prevFlipRef.current.tb = false;
        }
      }

      // >>>>>>>>>> Left & Right
      var needAdjustX = supportAdjust(adjustX);

      // >>>>> Flip
      var sameLR = popupPoints[1] === targetPoints[1];

      // Right to Left
      if (needAdjustX && popupPoints[1] === 'l' && (nextPopupRight > adjustCheckVisibleArea.right || prevFlipRef.current.rl)) {
        var tmpNextOffsetX = nextOffsetX;
        if (sameLR) {
          tmpNextOffsetX -= popupWidth - targetWidth;
        } else {
          tmpNextOffsetX = targetAlignPointTL.x - popupAlignPointBR.x - popupOffsetX;
        }
        var _newVisibleArea2 = getIntersectionVisibleArea(tmpNextOffsetX, nextOffsetY);
        var _newVisibleRecommendArea2 = getIntersectionVisibleArea(tmpNextOffsetX, nextOffsetY, visibleRegionArea);
        if (
        // Of course use larger one
        _newVisibleArea2 > originIntersectionVisibleArea || _newVisibleArea2 === originIntersectionVisibleArea && (!isVisibleFirst ||
        // Choose recommend one
        _newVisibleRecommendArea2 >= originIntersectionRecommendArea)) {
          prevFlipRef.current.rl = true;
          nextOffsetX = tmpNextOffsetX;
          popupOffsetX = -popupOffsetX;
          nextAlignInfo.points = [reversePoints(popupPoints, 1), reversePoints(targetPoints, 1)];
        } else {
          prevFlipRef.current.rl = false;
        }
      }

      // Left to Right
      if (needAdjustX && popupPoints[1] === 'r' && (nextPopupX < adjustCheckVisibleArea.left || prevFlipRef.current.lr)) {
        var _tmpNextOffsetX = nextOffsetX;
        if (sameLR) {
          _tmpNextOffsetX += popupWidth - targetWidth;
        } else {
          _tmpNextOffsetX = targetAlignPointBR.x - popupAlignPointTL.x - popupOffsetX;
        }
        var _newVisibleArea3 = getIntersectionVisibleArea(_tmpNextOffsetX, nextOffsetY);
        var _newVisibleRecommendArea3 = getIntersectionVisibleArea(_tmpNextOffsetX, nextOffsetY, visibleRegionArea);
        if (
        // Of course use larger one
        _newVisibleArea3 > originIntersectionVisibleArea || _newVisibleArea3 === originIntersectionVisibleArea && (!isVisibleFirst ||
        // Choose recommend one
        _newVisibleRecommendArea3 >= originIntersectionRecommendArea)) {
          prevFlipRef.current.lr = true;
          nextOffsetX = _tmpNextOffsetX;
          popupOffsetX = -popupOffsetX;
          nextAlignInfo.points = [reversePoints(popupPoints, 1), reversePoints(targetPoints, 1)];
        } else {
          prevFlipRef.current.lr = false;
        }
      }

      // ============================ Shift ============================
      syncNextPopupPosition();
      var numShiftX = shiftX === true ? 0 : shiftX;
      if (typeof numShiftX === 'number') {
        // Left
        if (nextPopupX < visibleRegionArea.left) {
          nextOffsetX -= nextPopupX - visibleRegionArea.left - popupOffsetX;
          if (targetRect.x + targetWidth < visibleRegionArea.left + numShiftX) {
            nextOffsetX += targetRect.x - visibleRegionArea.left + targetWidth - numShiftX;
          }
        }

        // Right
        if (nextPopupRight > visibleRegionArea.right) {
          nextOffsetX -= nextPopupRight - visibleRegionArea.right - popupOffsetX;
          if (targetRect.x > visibleRegionArea.right - numShiftX) {
            nextOffsetX += targetRect.x - visibleRegionArea.right + numShiftX;
          }
        }
      }
      var numShiftY = shiftY === true ? 0 : shiftY;
      if (typeof numShiftY === 'number') {
        // Top
        if (nextPopupY < visibleRegionArea.top) {
          nextOffsetY -= nextPopupY - visibleRegionArea.top - popupOffsetY;

          // When target if far away from visible area
          // Stop shift
          if (targetRect.y + targetHeight < visibleRegionArea.top + numShiftY) {
            nextOffsetY += targetRect.y - visibleRegionArea.top + targetHeight - numShiftY;
          }
        }

        // Bottom
        if (nextPopupBottom > visibleRegionArea.bottom) {
          nextOffsetY -= nextPopupBottom - visibleRegionArea.bottom - popupOffsetY;
          if (targetRect.y > visibleRegionArea.bottom - numShiftY) {
            nextOffsetY += targetRect.y - visibleRegionArea.bottom + numShiftY;
          }
        }
      }

      // ============================ Arrow ============================
      // Arrow center align
      var popupLeft = popupRect.x + nextOffsetX;
      var popupRight = popupLeft + popupWidth;
      var popupTop = popupRect.y + nextOffsetY;
      var popupBottom = popupTop + popupHeight;
      var targetLeft = targetRect.x;
      var targetRight = targetLeft + targetWidth;
      var targetTop = targetRect.y;
      var targetBottom = targetTop + targetHeight;
      var maxLeft = Math.max(popupLeft, targetLeft);
      var minRight = Math.min(popupRight, targetRight);
      var xCenter = (maxLeft + minRight) / 2;
      var nextArrowX = xCenter - popupLeft;
      var maxTop = Math.max(popupTop, targetTop);
      var minBottom = Math.min(popupBottom, targetBottom);
      var yCenter = (maxTop + minBottom) / 2;
      var nextArrowY = yCenter - popupTop;
      onPopupAlign === null || onPopupAlign === void 0 ? void 0 : onPopupAlign(popupEle, nextAlignInfo);

      // Additional calculate right & bottom position
      var offsetX4Right = popupMirrorRect.right - popupRect.x - (nextOffsetX + popupRect.width);
      var offsetY4Bottom = popupMirrorRect.bottom - popupRect.y - (nextOffsetY + popupRect.height);
      setOffsetInfo({
        ready: true,
        offsetX: nextOffsetX / _scaleX,
        offsetY: nextOffsetY / _scaleY,
        offsetR: offsetX4Right / _scaleX,
        offsetB: offsetY4Bottom / _scaleY,
        arrowX: nextArrowX / _scaleX,
        arrowY: nextArrowY / _scaleY,
        scaleX: _scaleX,
        scaleY: _scaleY,
        align: nextAlignInfo
      });
    }
  });
  var triggerAlign = function triggerAlign() {
    alignCountRef.current += 1;
    var id = alignCountRef.current;

    // Merge all align requirement into one frame
    Promise.resolve().then(function () {
      if (alignCountRef.current === id) {
        onAlign();
      }
    });
  };

  // Reset ready status when placement & open changed
  var resetReady = function resetReady() {
    setOffsetInfo(function (ori) {
      return _objectSpread2(_objectSpread2({}, ori), {}, {
        ready: false
      });
    });
  };
  useLayoutEffect$1(resetReady, [placement]);
  useLayoutEffect$1(function () {
    if (!open) {
      resetReady();
    }
  }, [open]);
  return [offsetInfo.ready, offsetInfo.offsetX, offsetInfo.offsetY, offsetInfo.offsetR, offsetInfo.offsetB, offsetInfo.arrowX, offsetInfo.arrowY, offsetInfo.scaleX, offsetInfo.scaleY, offsetInfo.align, triggerAlign];
}

function useWatch(open, target, popup, onAlign, onScroll) {
  useLayoutEffect$1(function () {
    if (open && target && popup) {
      var targetElement = target;
      var popupElement = popup;
      var targetScrollList = collectScroller(targetElement);
      var popupScrollList = collectScroller(popupElement);
      var win = getWin(popupElement);
      var mergedList = new Set([win].concat(_toConsumableArray(targetScrollList), _toConsumableArray(popupScrollList)));
      function notifyScroll() {
        onAlign();
        onScroll();
      }
      mergedList.forEach(function (scroller) {
        scroller.addEventListener('scroll', notifyScroll, {
          passive: true
        });
      });
      win.addEventListener('resize', notifyScroll, {
        passive: true
      });

      // First time always do align
      onAlign();
      return function () {
        mergedList.forEach(function (scroller) {
          scroller.removeEventListener('scroll', notifyScroll);
          win.removeEventListener('resize', notifyScroll);
        });
      };
    }
  }, [open, target, popup]);
}

function useWinClick(open, clickToHide, targetEle, popupEle, mask, maskClosable, inPopupOrChild, triggerOpen) {
  var openRef = React.useRef(open);

  // Window click to hide should be lock to avoid trigger lock immediately
  var lockRef = React.useRef(false);
  if (openRef.current !== open) {
    lockRef.current = true;
    openRef.current = open;
  }
  React.useEffect(function () {
    var id = wrapperRaf(function () {
      lockRef.current = false;
    });
    return function () {
      wrapperRaf.cancel(id);
    };
  }, [open]);

  // Click to hide is special action since click popup element should not hide
  React.useEffect(function () {
    if (clickToHide && popupEle && (!mask || maskClosable)) {
      var genClickEvents = function genClickEvents() {
        var clickInside = false;

        // User may mouseDown inside and drag out of popup and mouse up
        // Record here to prevent close
        var onWindowMouseDown = function onWindowMouseDown(_ref) {
          var target = _ref.target;
          clickInside = inPopupOrChild(target);
        };
        var onWindowClick = function onWindowClick(_ref2) {
          var target = _ref2.target;
          if (!lockRef.current && openRef.current && !clickInside && !inPopupOrChild(target)) {
            triggerOpen(false);
          }
        };
        return [onWindowMouseDown, onWindowClick];
      };

      // Events
      var _genClickEvents = genClickEvents(),
        _genClickEvents2 = _slicedToArray(_genClickEvents, 2),
        onWinMouseDown = _genClickEvents2[0],
        onWinClick = _genClickEvents2[1];
      var _genClickEvents3 = genClickEvents(),
        _genClickEvents4 = _slicedToArray(_genClickEvents3, 2),
        onShadowMouseDown = _genClickEvents4[0],
        onShadowClick = _genClickEvents4[1];
      var win = getWin(popupEle);
      win.addEventListener('mousedown', onWinMouseDown, true);
      win.addEventListener('click', onWinClick, true);
      win.addEventListener('contextmenu', onWinClick, true);

      // shadow root
      var targetShadowRoot = getShadowRoot(targetEle);
      if (targetShadowRoot) {
        targetShadowRoot.addEventListener('mousedown', onShadowMouseDown, true);
        targetShadowRoot.addEventListener('click', onShadowClick, true);
        targetShadowRoot.addEventListener('contextmenu', onShadowClick, true);
      }

      // Warning if target and popup not in same root
      if (process.env.NODE_ENV !== 'production') {
        var _targetEle$getRootNod, _popupEle$getRootNode;
        var targetRoot = targetEle === null || targetEle === void 0 ? void 0 : (_targetEle$getRootNod = targetEle.getRootNode) === null || _targetEle$getRootNod === void 0 ? void 0 : _targetEle$getRootNod.call(targetEle);
        var popupRoot = (_popupEle$getRootNode = popupEle.getRootNode) === null || _popupEle$getRootNode === void 0 ? void 0 : _popupEle$getRootNode.call(popupEle);
        warningOnce(targetRoot === popupRoot, "trigger element and popup element should in same shadow root.");
      }
      return function () {
        win.removeEventListener('mousedown', onWinMouseDown, true);
        win.removeEventListener('click', onWinClick, true);
        win.removeEventListener('contextmenu', onWinClick, true);
        if (targetShadowRoot) {
          targetShadowRoot.removeEventListener('mousedown', onShadowMouseDown, true);
          targetShadowRoot.removeEventListener('click', onShadowClick, true);
          targetShadowRoot.removeEventListener('contextmenu', onShadowClick, true);
        }
      };
    }
  }, [clickToHide, targetEle, popupEle, mask, maskClosable]);
}

function Arrow(props) {
  var prefixCls = props.prefixCls,
    align = props.align,
    arrow = props.arrow,
    arrowPos = props.arrowPos;
  var _ref = arrow || {},
    className = _ref.className,
    content = _ref.content;
  var _arrowPos$x = arrowPos.x,
    x = _arrowPos$x === void 0 ? 0 : _arrowPos$x,
    _arrowPos$y = arrowPos.y,
    y = _arrowPos$y === void 0 ? 0 : _arrowPos$y;
  var arrowRef = React.useRef();

  // Skip if no align
  if (!align || !align.points) {
    return null;
  }
  var alignStyle = {
    position: 'absolute'
  };

  // Skip if no need to align
  if (align.autoArrow !== false) {
    var popupPoints = align.points[0];
    var targetPoints = align.points[1];
    var popupTB = popupPoints[0];
    var popupLR = popupPoints[1];
    var targetTB = targetPoints[0];
    var targetLR = targetPoints[1];

    // Top & Bottom
    if (popupTB === targetTB || !['t', 'b'].includes(popupTB)) {
      alignStyle.top = y;
    } else if (popupTB === 't') {
      alignStyle.top = 0;
    } else {
      alignStyle.bottom = 0;
    }

    // Left & Right
    if (popupLR === targetLR || !['l', 'r'].includes(popupLR)) {
      alignStyle.left = x;
    } else if (popupLR === 'l') {
      alignStyle.left = 0;
    } else {
      alignStyle.right = 0;
    }
  }
  return /*#__PURE__*/React.createElement("div", {
    ref: arrowRef,
    className: classNames("".concat(prefixCls, "-arrow"), className),
    style: alignStyle
  }, content);
}

function Mask(props) {
  var prefixCls = props.prefixCls,
    open = props.open,
    zIndex = props.zIndex,
    mask = props.mask,
    motion = props.motion;
  if (!mask) {
    return null;
  }
  return /*#__PURE__*/React.createElement(CSSMotion, _extends$1({}, motion, {
    motionAppear: true,
    visible: open,
    removeOnLeave: true
  }), function (_ref) {
    var className = _ref.className;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        zIndex: zIndex
      },
      className: classNames("".concat(prefixCls, "-mask"), className)
    });
  });
}

var PopupContent = /*#__PURE__*/React.memo(function (_ref) {
  var children = _ref.children;
  return children;
}, function (_, next) {
  return next.cache;
});
if (process.env.NODE_ENV !== 'production') {
  PopupContent.displayName = 'PopupContent';
}

var Popup$1 = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var popup = props.popup,
    className = props.className,
    prefixCls = props.prefixCls,
    style = props.style,
    target = props.target,
    _onVisibleChanged = props.onVisibleChanged,
    open = props.open,
    keepDom = props.keepDom,
    onClick = props.onClick,
    mask = props.mask,
    arrow = props.arrow,
    arrowPos = props.arrowPos,
    align = props.align,
    motion = props.motion,
    maskMotion = props.maskMotion,
    forceRender = props.forceRender,
    getPopupContainer = props.getPopupContainer,
    autoDestroy = props.autoDestroy,
    Portal = props.portal,
    zIndex = props.zIndex,
    onMouseEnter = props.onMouseEnter,
    onMouseLeave = props.onMouseLeave,
    onPointerEnter = props.onPointerEnter,
    ready = props.ready,
    offsetX = props.offsetX,
    offsetY = props.offsetY,
    offsetR = props.offsetR,
    offsetB = props.offsetB,
    onAlign = props.onAlign,
    onPrepare = props.onPrepare,
    stretch = props.stretch,
    targetWidth = props.targetWidth,
    targetHeight = props.targetHeight;
  var childNode = typeof popup === 'function' ? popup() : popup;

  // We can not remove holder only when motion finished.
  var isNodeVisible = open || keepDom;

  // ======================= Container ========================
  var getPopupContainerNeedParams = (getPopupContainer === null || getPopupContainer === void 0 ? void 0 : getPopupContainer.length) > 0;
  var _React$useState = React.useState(!getPopupContainer || !getPopupContainerNeedParams),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    show = _React$useState2[0],
    setShow = _React$useState2[1];

  // Delay to show since `getPopupContainer` need target element
  useLayoutEffect$1(function () {
    if (!show && getPopupContainerNeedParams && target) {
      setShow(true);
    }
  }, [show, getPopupContainerNeedParams, target]);

  // ========================= Render =========================
  if (!show) {
    return null;
  }

  // >>>>> Offset
  var AUTO = 'auto';
  var offsetStyle = {
    left: '-1000vw',
    top: '-1000vh',
    right: AUTO,
    bottom: AUTO
  };

  // Set align style
  if (ready || !open) {
    var points = align.points,
      _experimental = align._experimental;
    var dynamicInset = _experimental === null || _experimental === void 0 ? void 0 : _experimental.dynamicInset;
    var alignRight = dynamicInset && points[0][1] === 'r';
    var alignBottom = dynamicInset && points[0][0] === 'b';
    if (alignRight) {
      offsetStyle.right = offsetR;
      offsetStyle.left = AUTO;
    } else {
      offsetStyle.left = offsetX;
      offsetStyle.right = AUTO;
    }
    if (alignBottom) {
      offsetStyle.bottom = offsetB;
      offsetStyle.top = AUTO;
    } else {
      offsetStyle.top = offsetY;
      offsetStyle.bottom = AUTO;
    }
  }

  // >>>>> Misc
  var miscStyle = {};
  if (stretch) {
    if (stretch.includes('height') && targetHeight) {
      miscStyle.height = targetHeight;
    } else if (stretch.includes('minHeight') && targetHeight) {
      miscStyle.minHeight = targetHeight;
    }
    if (stretch.includes('width') && targetWidth) {
      miscStyle.width = targetWidth;
    } else if (stretch.includes('minWidth') && targetWidth) {
      miscStyle.minWidth = targetWidth;
    }
  }
  if (!open) {
    miscStyle.pointerEvents = 'none';
  }
  return /*#__PURE__*/React.createElement(Portal, {
    open: forceRender || isNodeVisible,
    getContainer: getPopupContainer && function () {
      return getPopupContainer(target);
    },
    autoDestroy: autoDestroy
  }, /*#__PURE__*/React.createElement(Mask, {
    prefixCls: prefixCls,
    open: open,
    zIndex: zIndex,
    mask: mask,
    motion: maskMotion
  }), /*#__PURE__*/React.createElement(RefResizeObserver, {
    onResize: onAlign,
    disabled: !open
  }, function (resizeObserverRef) {
    return /*#__PURE__*/React.createElement(CSSMotion, _extends$1({
      motionAppear: true,
      motionEnter: true,
      motionLeave: true,
      removeOnLeave: false,
      forceRender: forceRender,
      leavedClassName: "".concat(prefixCls, "-hidden")
    }, motion, {
      onAppearPrepare: onPrepare,
      onEnterPrepare: onPrepare,
      visible: open,
      onVisibleChanged: function onVisibleChanged(nextVisible) {
        var _motion$onVisibleChan;
        motion === null || motion === void 0 ? void 0 : (_motion$onVisibleChan = motion.onVisibleChanged) === null || _motion$onVisibleChan === void 0 ? void 0 : _motion$onVisibleChan.call(motion, nextVisible);
        _onVisibleChanged(nextVisible);
      }
    }), function (_ref, motionRef) {
      var motionClassName = _ref.className,
        motionStyle = _ref.style;
      var cls = classNames(prefixCls, motionClassName, className);
      return /*#__PURE__*/React.createElement("div", {
        ref: composeRef(resizeObserverRef, ref, motionRef),
        className: cls,
        style: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({
          '--arrow-x': "".concat(arrowPos.x || 0, "px"),
          '--arrow-y': "".concat(arrowPos.y || 0, "px")
        }, offsetStyle), miscStyle), motionStyle), {}, {
          boxSizing: 'border-box',
          zIndex: zIndex
        }, style),
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        onPointerEnter: onPointerEnter,
        onClick: onClick
      }, arrow && /*#__PURE__*/React.createElement(Arrow, {
        prefixCls: prefixCls,
        arrow: arrow,
        arrowPos: arrowPos,
        align: align
      }), /*#__PURE__*/React.createElement(PopupContent, {
        cache: !open
      }, childNode));
    });
  }));
});
if (process.env.NODE_ENV !== 'production') {
  Popup$1.displayName = 'Popup';
}

var TriggerWrapper = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
    getTriggerDOMNode = props.getTriggerDOMNode;
  var canUseRef = supportRef(children);

  // When use `getTriggerDOMNode`, we should do additional work to get the real dom
  var setRef = React.useCallback(function (node) {
    fillRef(ref, getTriggerDOMNode ? getTriggerDOMNode(node) : node);
  }, [getTriggerDOMNode]);
  var mergedRef = useComposeRef(setRef, children.ref);
  return canUseRef ? /*#__PURE__*/React.cloneElement(children, {
    ref: mergedRef
  }) : children;
});
if (process.env.NODE_ENV !== 'production') {
  TriggerWrapper.displayName = 'TriggerWrapper';
}

var _excluded$8 = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];

// Removed Props List
// Seems this can be auto
// getDocument?: (element?: HTMLElement) => Document;
// New version will not wrap popup with `rc-trigger-popup-content` when multiple children
function generateTrigger() {
  var PortalComponent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Portal;
  var Trigger = /*#__PURE__*/React.forwardRef(function (props, ref) {
    var _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-trigger-popup' : _props$prefixCls,
      children = props.children,
      _props$action = props.action,
      action = _props$action === void 0 ? 'hover' : _props$action,
      showAction = props.showAction,
      hideAction = props.hideAction,
      popupVisible = props.popupVisible,
      defaultPopupVisible = props.defaultPopupVisible,
      onPopupVisibleChange = props.onPopupVisibleChange,
      afterPopupVisibleChange = props.afterPopupVisibleChange,
      mouseEnterDelay = props.mouseEnterDelay,
      _props$mouseLeaveDela = props.mouseLeaveDelay,
      mouseLeaveDelay = _props$mouseLeaveDela === void 0 ? 0.1 : _props$mouseLeaveDela,
      focusDelay = props.focusDelay,
      blurDelay = props.blurDelay,
      mask = props.mask,
      _props$maskClosable = props.maskClosable,
      maskClosable = _props$maskClosable === void 0 ? true : _props$maskClosable,
      getPopupContainer = props.getPopupContainer,
      forceRender = props.forceRender,
      autoDestroy = props.autoDestroy,
      destroyPopupOnHide = props.destroyPopupOnHide,
      popup = props.popup,
      popupClassName = props.popupClassName,
      popupStyle = props.popupStyle,
      popupPlacement = props.popupPlacement,
      _props$builtinPlaceme = props.builtinPlacements,
      builtinPlacements = _props$builtinPlaceme === void 0 ? {} : _props$builtinPlaceme,
      popupAlign = props.popupAlign,
      zIndex = props.zIndex,
      stretch = props.stretch,
      getPopupClassNameFromAlign = props.getPopupClassNameFromAlign,
      alignPoint = props.alignPoint,
      onPopupClick = props.onPopupClick,
      onPopupAlign = props.onPopupAlign,
      arrow = props.arrow,
      popupMotion = props.popupMotion,
      maskMotion = props.maskMotion,
      popupTransitionName = props.popupTransitionName,
      popupAnimation = props.popupAnimation,
      maskTransitionName = props.maskTransitionName,
      maskAnimation = props.maskAnimation,
      className = props.className,
      getTriggerDOMNode = props.getTriggerDOMNode,
      restProps = _objectWithoutProperties(props, _excluded$8);
    var mergedAutoDestroy = autoDestroy || destroyPopupOnHide || false;

    // =========================== Mobile ===========================
    var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      mobile = _React$useState2[0],
      setMobile = _React$useState2[1];
    useLayoutEffect$1(function () {
      setMobile(isMobile());
    }, []);

    // ========================== Context ===========================
    var subPopupElements = React.useRef({});
    var parentContext = React.useContext(TriggerContext);
    var context = React.useMemo(function () {
      return {
        registerSubPopup: function registerSubPopup(id, subPopupEle) {
          subPopupElements.current[id] = subPopupEle;
          parentContext === null || parentContext === void 0 ? void 0 : parentContext.registerSubPopup(id, subPopupEle);
        }
      };
    }, [parentContext]);

    // =========================== Popup ============================
    var id = useId$1();
    var _React$useState3 = React.useState(null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      popupEle = _React$useState4[0],
      setPopupEle = _React$useState4[1];
    var setPopupRef = useEvent(function (node) {
      if (isDOM(node) && popupEle !== node) {
        setPopupEle(node);
      }
      parentContext === null || parentContext === void 0 ? void 0 : parentContext.registerSubPopup(id, node);
    });

    // =========================== Target ===========================
    // Use state to control here since `useRef` update not trigger render
    var _React$useState5 = React.useState(null),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      targetEle = _React$useState6[0],
      setTargetEle = _React$useState6[1];
    var setTargetRef = useEvent(function (node) {
      if (isDOM(node) && targetEle !== node) {
        setTargetEle(node);
      }
    });

    // ========================== Children ==========================
    var child = React.Children.only(children);
    var originChildProps = (child === null || child === void 0 ? void 0 : child.props) || {};
    var cloneProps = {};
    var inPopupOrChild = useEvent(function (ele) {
      var _getShadowRoot, _getShadowRoot2;
      var childDOM = targetEle;
      return (childDOM === null || childDOM === void 0 ? void 0 : childDOM.contains(ele)) || ((_getShadowRoot = getShadowRoot(childDOM)) === null || _getShadowRoot === void 0 ? void 0 : _getShadowRoot.host) === ele || ele === childDOM || (popupEle === null || popupEle === void 0 ? void 0 : popupEle.contains(ele)) || ((_getShadowRoot2 = getShadowRoot(popupEle)) === null || _getShadowRoot2 === void 0 ? void 0 : _getShadowRoot2.host) === ele || ele === popupEle || Object.values(subPopupElements.current).some(function (subPopupEle) {
        return (subPopupEle === null || subPopupEle === void 0 ? void 0 : subPopupEle.contains(ele)) || ele === subPopupEle;
      });
    });

    // =========================== Motion ===========================
    var mergePopupMotion = getMotion(prefixCls, popupMotion, popupAnimation, popupTransitionName);
    var mergeMaskMotion = getMotion(prefixCls, maskMotion, maskAnimation, maskTransitionName);

    // ============================ Open ============================
    var _React$useState7 = React.useState(defaultPopupVisible || false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      internalOpen = _React$useState8[0],
      setInternalOpen = _React$useState8[1];

    // Render still use props as first priority
    var mergedOpen = popupVisible !== null && popupVisible !== void 0 ? popupVisible : internalOpen;

    // We use effect sync here in case `popupVisible` back to `undefined`
    var setMergedOpen = useEvent(function (nextOpen) {
      if (popupVisible === undefined) {
        setInternalOpen(nextOpen);
      }
    });
    useLayoutEffect$1(function () {
      setInternalOpen(popupVisible || false);
    }, [popupVisible]);
    var openRef = React.useRef(mergedOpen);
    openRef.current = mergedOpen;
    var internalTriggerOpen = useEvent(function (nextOpen) {
      // Enter or Pointer will both trigger open state change
      // We only need take one to avoid duplicated change event trigger
      flushSync(function () {
        if (mergedOpen !== nextOpen) {
          setMergedOpen(nextOpen);
          onPopupVisibleChange === null || onPopupVisibleChange === void 0 ? void 0 : onPopupVisibleChange(nextOpen);
        }
      });
    });

    // Trigger for delay
    var delayRef = React.useRef();
    var clearDelay = function clearDelay() {
      clearTimeout(delayRef.current);
    };
    var triggerOpen = function triggerOpen(nextOpen) {
      var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      clearDelay();
      if (delay === 0) {
        internalTriggerOpen(nextOpen);
      } else {
        delayRef.current = setTimeout(function () {
          internalTriggerOpen(nextOpen);
        }, delay * 1000);
      }
    };
    React.useEffect(function () {
      return clearDelay;
    }, []);

    // ========================== Motion ============================
    var _React$useState9 = React.useState(false),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      inMotion = _React$useState10[0],
      setInMotion = _React$useState10[1];
    useLayoutEffect$1(function (firstMount) {
      if (!firstMount || mergedOpen) {
        setInMotion(true);
      }
    }, [mergedOpen]);
    var _React$useState11 = React.useState(null),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      motionPrepareResolve = _React$useState12[0],
      setMotionPrepareResolve = _React$useState12[1];

    // =========================== Align ============================
    var _React$useState13 = React.useState([0, 0]),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      mousePos = _React$useState14[0],
      setMousePos = _React$useState14[1];
    var setMousePosByEvent = function setMousePosByEvent(event) {
      setMousePos([event.clientX, event.clientY]);
    };
    var _useAlign = useAlign(mergedOpen, popupEle, alignPoint ? mousePos : targetEle, popupPlacement, builtinPlacements, popupAlign, onPopupAlign),
      _useAlign2 = _slicedToArray(_useAlign, 11),
      ready = _useAlign2[0],
      offsetX = _useAlign2[1],
      offsetY = _useAlign2[2],
      offsetR = _useAlign2[3],
      offsetB = _useAlign2[4],
      arrowX = _useAlign2[5],
      arrowY = _useAlign2[6],
      scaleX = _useAlign2[7],
      scaleY = _useAlign2[8],
      alignInfo = _useAlign2[9],
      onAlign = _useAlign2[10];
    var _useAction = useAction(mobile, action, showAction, hideAction),
      _useAction2 = _slicedToArray(_useAction, 2),
      showActions = _useAction2[0],
      hideActions = _useAction2[1];
    var clickToShow = showActions.has('click');
    var clickToHide = hideActions.has('click') || hideActions.has('contextMenu');
    var triggerAlign = useEvent(function () {
      if (!inMotion) {
        onAlign();
      }
    });
    var onScroll = function onScroll() {
      if (openRef.current && alignPoint && clickToHide) {
        triggerOpen(false);
      }
    };
    useWatch(mergedOpen, targetEle, popupEle, triggerAlign, onScroll);
    useLayoutEffect$1(function () {
      triggerAlign();
    }, [mousePos, popupPlacement]);

    // When no builtinPlacements and popupAlign changed
    useLayoutEffect$1(function () {
      if (mergedOpen && !(builtinPlacements !== null && builtinPlacements !== void 0 && builtinPlacements[popupPlacement])) {
        triggerAlign();
      }
    }, [JSON.stringify(popupAlign)]);
    var alignedClassName = React.useMemo(function () {
      var baseClassName = getAlignPopupClassName(builtinPlacements, prefixCls, alignInfo, alignPoint);
      return classNames(baseClassName, getPopupClassNameFromAlign === null || getPopupClassNameFromAlign === void 0 ? void 0 : getPopupClassNameFromAlign(alignInfo));
    }, [alignInfo, getPopupClassNameFromAlign, builtinPlacements, prefixCls, alignPoint]);
    React.useImperativeHandle(ref, function () {
      return {
        forceAlign: triggerAlign
      };
    });

    // ========================== Stretch ===========================
    var _React$useState15 = React.useState(0),
      _React$useState16 = _slicedToArray(_React$useState15, 2),
      targetWidth = _React$useState16[0],
      setTargetWidth = _React$useState16[1];
    var _React$useState17 = React.useState(0),
      _React$useState18 = _slicedToArray(_React$useState17, 2),
      targetHeight = _React$useState18[0],
      setTargetHeight = _React$useState18[1];
    var syncTargetSize = function syncTargetSize() {
      if (stretch && targetEle) {
        var rect = targetEle.getBoundingClientRect();
        setTargetWidth(rect.width);
        setTargetHeight(rect.height);
      }
    };
    var onTargetResize = function onTargetResize() {
      syncTargetSize();
      triggerAlign();
    };

    // ========================== Motion ============================
    var onVisibleChanged = function onVisibleChanged(visible) {
      setInMotion(false);
      onAlign();
      afterPopupVisibleChange === null || afterPopupVisibleChange === void 0 ? void 0 : afterPopupVisibleChange(visible);
    };

    // We will trigger align when motion is in prepare
    var onPrepare = function onPrepare() {
      return new Promise(function (resolve) {
        syncTargetSize();
        setMotionPrepareResolve(function () {
          return resolve;
        });
      });
    };
    useLayoutEffect$1(function () {
      if (motionPrepareResolve) {
        onAlign();
        motionPrepareResolve();
        setMotionPrepareResolve(null);
      }
    }, [motionPrepareResolve]);

    // =========================== Action ===========================
    /**
     * Util wrapper for trigger action
     */
    function wrapperAction(eventName, nextOpen, delay, preEvent) {
      cloneProps[eventName] = function (event) {
        var _originChildProps$eve;
        preEvent === null || preEvent === void 0 ? void 0 : preEvent(event);
        triggerOpen(nextOpen, delay);

        // Pass to origin
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        (_originChildProps$eve = originChildProps[eventName]) === null || _originChildProps$eve === void 0 ? void 0 : _originChildProps$eve.call.apply(_originChildProps$eve, [originChildProps, event].concat(args));
      };
    }

    // ======================= Action: Click ========================
    if (clickToShow || clickToHide) {
      cloneProps.onClick = function (event) {
        var _originChildProps$onC;
        if (openRef.current && clickToHide) {
          triggerOpen(false);
        } else if (!openRef.current && clickToShow) {
          setMousePosByEvent(event);
          triggerOpen(true);
        }

        // Pass to origin
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }
        (_originChildProps$onC = originChildProps.onClick) === null || _originChildProps$onC === void 0 ? void 0 : _originChildProps$onC.call.apply(_originChildProps$onC, [originChildProps, event].concat(args));
      };
    }

    // Click to hide is special action since click popup element should not hide
    useWinClick(mergedOpen, clickToHide, targetEle, popupEle, mask, maskClosable, inPopupOrChild, triggerOpen);

    // ======================= Action: Hover ========================
    var hoverToShow = showActions.has('hover');
    var hoverToHide = hideActions.has('hover');
    var onPopupMouseEnter;
    var onPopupMouseLeave;
    if (hoverToShow) {
      // Compatible with old browser which not support pointer event
      wrapperAction('onMouseEnter', true, mouseEnterDelay, function (event) {
        setMousePosByEvent(event);
      });
      wrapperAction('onPointerEnter', true, mouseEnterDelay, function (event) {
        setMousePosByEvent(event);
      });
      onPopupMouseEnter = function onPopupMouseEnter() {
        // Only trigger re-open when popup is visible
        if (mergedOpen || inMotion) {
          triggerOpen(true, mouseEnterDelay);
        }
      };

      // Align Point
      if (alignPoint) {
        cloneProps.onMouseMove = function (event) {
          var _originChildProps$onM;
          // setMousePosByEvent(event);
          (_originChildProps$onM = originChildProps.onMouseMove) === null || _originChildProps$onM === void 0 ? void 0 : _originChildProps$onM.call(originChildProps, event);
        };
      }
    }
    if (hoverToHide) {
      wrapperAction('onMouseLeave', false, mouseLeaveDelay);
      wrapperAction('onPointerLeave', false, mouseLeaveDelay);
      onPopupMouseLeave = function onPopupMouseLeave() {
        triggerOpen(false, mouseLeaveDelay);
      };
    }

    // ======================= Action: Focus ========================
    if (showActions.has('focus')) {
      wrapperAction('onFocus', true, focusDelay);
    }
    if (hideActions.has('focus')) {
      wrapperAction('onBlur', false, blurDelay);
    }

    // ==================== Action: ContextMenu =====================
    if (showActions.has('contextMenu')) {
      cloneProps.onContextMenu = function (event) {
        var _originChildProps$onC2;
        if (openRef.current && hideActions.has('contextMenu')) {
          triggerOpen(false);
        } else {
          setMousePosByEvent(event);
          triggerOpen(true);
        }
        event.preventDefault();

        // Pass to origin
        for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          args[_key3 - 1] = arguments[_key3];
        }
        (_originChildProps$onC2 = originChildProps.onContextMenu) === null || _originChildProps$onC2 === void 0 ? void 0 : _originChildProps$onC2.call.apply(_originChildProps$onC2, [originChildProps, event].concat(args));
      };
    }

    // ========================= ClassName ==========================
    if (className) {
      cloneProps.className = classNames(originChildProps.className, className);
    }

    // =========================== Render ===========================
    var mergedChildrenProps = _objectSpread2(_objectSpread2({}, originChildProps), cloneProps);

    // Pass props into cloneProps for nest usage
    var passedProps = {};
    var passedEventList = ['onContextMenu', 'onClick', 'onMouseDown', 'onTouchStart', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur'];
    passedEventList.forEach(function (eventName) {
      if (restProps[eventName]) {
        passedProps[eventName] = function () {
          var _mergedChildrenProps$;
          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }
          (_mergedChildrenProps$ = mergedChildrenProps[eventName]) === null || _mergedChildrenProps$ === void 0 ? void 0 : _mergedChildrenProps$.call.apply(_mergedChildrenProps$, [mergedChildrenProps].concat(args));
          restProps[eventName].apply(restProps, args);
        };
      }
    });

    // Child Node
    var triggerNode = /*#__PURE__*/React.cloneElement(child, _objectSpread2(_objectSpread2({}, mergedChildrenProps), passedProps));
    var arrowPos = {
      x: arrowX,
      y: arrowY
    };
    var innerArrow = arrow ? _objectSpread2({}, arrow !== true ? arrow : {}) : null;

    // Render
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RefResizeObserver, {
      disabled: !mergedOpen,
      ref: setTargetRef,
      onResize: onTargetResize
    }, /*#__PURE__*/React.createElement(TriggerWrapper, {
      getTriggerDOMNode: getTriggerDOMNode
    }, triggerNode)), /*#__PURE__*/React.createElement(TriggerContext.Provider, {
      value: context
    }, /*#__PURE__*/React.createElement(Popup$1, {
      portal: PortalComponent,
      ref: setPopupRef,
      prefixCls: prefixCls,
      popup: popup,
      className: classNames(popupClassName, alignedClassName),
      style: popupStyle,
      target: targetEle,
      onMouseEnter: onPopupMouseEnter,
      onMouseLeave: onPopupMouseLeave
      // https://github.com/ant-design/ant-design/issues/43924
      ,
      onPointerEnter: onPopupMouseEnter,
      zIndex: zIndex
      // Open
      ,
      open: mergedOpen,
      keepDom: inMotion
      // Click
      ,
      onClick: onPopupClick
      // Mask
      ,
      mask: mask
      // Motion
      ,
      motion: mergePopupMotion,
      maskMotion: mergeMaskMotion,
      onVisibleChanged: onVisibleChanged,
      onPrepare: onPrepare
      // Portal
      ,
      forceRender: forceRender,
      autoDestroy: mergedAutoDestroy,
      getPopupContainer: getPopupContainer
      // Arrow
      ,
      align: alignInfo,
      arrow: innerArrow,
      arrowPos: arrowPos
      // Align
      ,
      ready: ready,
      offsetX: offsetX,
      offsetY: offsetY,
      offsetR: offsetR,
      offsetB: offsetB,
      onAlign: triggerAlign
      // Stretch
      ,
      stretch: stretch,
      targetWidth: targetWidth / scaleX,
      targetHeight: targetHeight / scaleY
    })));
  });
  if (process.env.NODE_ENV !== 'production') {
    Trigger.displayName = 'Trigger';
  }
  return Trigger;
}
var Trigger = generateTrigger(Portal);

var _excluded$7 = ["prefixCls", "disabled", "visible", "children", "popupElement", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "direction", "placement", "builtinPlacements", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "getPopupContainer", "empty", "getTriggerDOMNode", "onPopupVisibleChange", "onPopupMouseEnter"];
var getBuiltInPlacements$1 = function getBuiltInPlacements(dropdownMatchSelectWidth) {
  // Enable horizontal overflow auto-adjustment when a custom dropdown width is provided
  var adjustX = dropdownMatchSelectWidth === true ? 0 : 1;
  return {
    bottomLeft: {
      points: ['tl', 'bl'],
      offset: [0, 4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      },
      htmlRegion: 'scroll'
    },
    bottomRight: {
      points: ['tr', 'br'],
      offset: [0, 4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      },
      htmlRegion: 'scroll'
    },
    topLeft: {
      points: ['bl', 'tl'],
      offset: [0, -4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      },
      htmlRegion: 'scroll'
    },
    topRight: {
      points: ['br', 'tr'],
      offset: [0, -4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      },
      htmlRegion: 'scroll'
    }
  };
};
var SelectTrigger = function SelectTrigger(props, ref) {
  var prefixCls = props.prefixCls;
    props.disabled;
    var visible = props.visible,
    children = props.children,
    popupElement = props.popupElement,
    animation = props.animation,
    transitionName = props.transitionName,
    dropdownStyle = props.dropdownStyle,
    dropdownClassName = props.dropdownClassName,
    _props$direction = props.direction,
    direction = _props$direction === void 0 ? 'ltr' : _props$direction,
    placement = props.placement,
    builtinPlacements = props.builtinPlacements,
    dropdownMatchSelectWidth = props.dropdownMatchSelectWidth,
    dropdownRender = props.dropdownRender,
    dropdownAlign = props.dropdownAlign,
    getPopupContainer = props.getPopupContainer,
    empty = props.empty,
    getTriggerDOMNode = props.getTriggerDOMNode,
    onPopupVisibleChange = props.onPopupVisibleChange,
    onPopupMouseEnter = props.onPopupMouseEnter,
    restProps = _objectWithoutProperties(props, _excluded$7);
  var dropdownPrefixCls = "".concat(prefixCls, "-dropdown");
  var popupNode = popupElement;
  if (dropdownRender) {
    popupNode = dropdownRender(popupElement);
  }
  var mergedBuiltinPlacements = React.useMemo(function () {
    return builtinPlacements || getBuiltInPlacements$1(dropdownMatchSelectWidth);
  }, [builtinPlacements, dropdownMatchSelectWidth]);

  // ===================== Motion ======================
  var mergedTransitionName = animation ? "".concat(dropdownPrefixCls, "-").concat(animation) : transitionName;

  // =================== Popup Width ===================
  var isNumberPopupWidth = typeof dropdownMatchSelectWidth === 'number';
  var stretch = React.useMemo(function () {
    if (isNumberPopupWidth) {
      return null;
    }
    return dropdownMatchSelectWidth === false ? 'minWidth' : 'width';
  }, [dropdownMatchSelectWidth, isNumberPopupWidth]);
  var popupStyle = dropdownStyle;
  if (isNumberPopupWidth) {
    popupStyle = _objectSpread2(_objectSpread2({}, popupStyle), {}, {
      width: dropdownMatchSelectWidth
    });
  }

  // ======================= Ref =======================
  var popupRef = React.useRef(null);
  React.useImperativeHandle(ref, function () {
    return {
      getPopupElement: function getPopupElement() {
        return popupRef.current;
      }
    };
  });
  return /*#__PURE__*/React.createElement(Trigger, _extends$1({}, restProps, {
    showAction: onPopupVisibleChange ? ['click'] : [],
    hideAction: onPopupVisibleChange ? ['click'] : [],
    popupPlacement: placement || (direction === 'rtl' ? 'bottomRight' : 'bottomLeft'),
    builtinPlacements: mergedBuiltinPlacements,
    prefixCls: dropdownPrefixCls,
    popupTransitionName: mergedTransitionName,
    popup: /*#__PURE__*/React.createElement("div", {
      ref: popupRef,
      onMouseEnter: onPopupMouseEnter
    }, popupNode),
    stretch: stretch,
    popupAlign: dropdownAlign,
    popupVisible: visible,
    getPopupContainer: getPopupContainer,
    popupClassName: classNames(dropdownClassName, _defineProperty({}, "".concat(dropdownPrefixCls, "-empty"), empty)),
    popupStyle: popupStyle,
    getTriggerDOMNode: getTriggerDOMNode,
    onPopupVisibleChange: onPopupVisibleChange
  }), children);
};
var RefSelectTrigger = /*#__PURE__*/React.forwardRef(SelectTrigger);
RefSelectTrigger.displayName = 'SelectTrigger';

function getKey(data, index) {
  var key = data.key;
  var value;
  if ('value' in data) {
    value = data.value;
  }
  if (key !== null && key !== undefined) {
    return key;
  }
  if (value !== undefined) {
    return value;
  }
  return "rc-index-key-".concat(index);
}
function fillFieldNames(fieldNames, childrenAsData) {
  var _ref = fieldNames || {},
    label = _ref.label,
    value = _ref.value,
    options = _ref.options,
    groupLabel = _ref.groupLabel;
  var mergedLabel = label || (childrenAsData ? 'children' : 'label');
  return {
    label: mergedLabel,
    value: value || 'value',
    options: options || 'options',
    groupLabel: groupLabel || mergedLabel
  };
}

/**
 * Flat options into flatten list.
 * We use `optionOnly` here is aim to avoid user use nested option group.
 * Here is simply set `key` to the index if not provided.
 */
function flattenOptions(options) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    fieldNames = _ref2.fieldNames,
    childrenAsData = _ref2.childrenAsData;
  var flattenList = [];
  var _fillFieldNames = fillFieldNames(fieldNames, false),
    fieldLabel = _fillFieldNames.label,
    fieldValue = _fillFieldNames.value,
    fieldOptions = _fillFieldNames.options,
    groupLabel = _fillFieldNames.groupLabel;
  function dig(list, isGroupOption) {
    list.forEach(function (data) {
      if (isGroupOption || !(fieldOptions in data)) {
        var value = data[fieldValue];

        // Option
        flattenList.push({
          key: getKey(data, flattenList.length),
          groupOption: isGroupOption,
          data: data,
          label: data[fieldLabel],
          value: value
        });
      } else {
        var grpLabel = data[groupLabel];
        if (grpLabel === undefined && childrenAsData) {
          grpLabel = data.label;
        }

        // Option Group
        flattenList.push({
          key: getKey(data, flattenList.length),
          group: true,
          data: data,
          label: grpLabel
        });
        dig(data[fieldOptions], true);
      }
    });
  }
  dig(options, false);
  return flattenList;
}

/**
 * Inject `props` into `option` for legacy usage
 */
function injectPropsWithOption(option) {
  var newOption = _objectSpread2({}, option);
  if (!('props' in newOption)) {
    Object.defineProperty(newOption, 'props', {
      get: function get() {
        warningOnce(false, 'Return type is option instead of Option instance. Please read value directly instead of reading from `props`.');
        return newOption;
      }
    });
  }
  return newOption;
}
function getSeparatedContent(text, tokens) {
  if (!tokens || !tokens.length) {
    return null;
  }
  var match = false;
  function separate(str, _ref3) {
    var _ref4 = _toArray(_ref3),
      token = _ref4[0],
      restTokens = _ref4.slice(1);
    if (!token) {
      return [str];
    }
    var list = str.split(token);
    match = match || list.length > 1;
    return list.reduce(function (prevList, unitStr) {
      return [].concat(_toConsumableArray(prevList), _toConsumableArray(separate(unitStr, restTokens)));
    }, []).filter(function (unit) {
      return unit;
    });
  }
  var list = separate(text, tokens);
  return match ? list : null;
}

var _excluded$6 = ["id", "prefixCls", "className", "showSearch", "tagRender", "direction", "omitDomProps", "displayValues", "onDisplayValuesChange", "emptyOptions", "notFoundContent", "onClear", "mode", "disabled", "loading", "getInputElement", "getRawInputElement", "open", "defaultOpen", "onDropdownVisibleChange", "activeValue", "onActiveValueChange", "activeDescendantId", "searchValue", "autoClearSearchValue", "onSearch", "onSearchSplit", "tokenSeparators", "allowClear", "suffixIcon", "clearIcon", "OptionList", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "placement", "builtinPlacements", "getPopupContainer", "showAction", "onFocus", "onBlur", "onKeyUp", "onKeyDown", "onMouseDown"];
var DEFAULT_OMIT_PROPS = ['value', 'onChange', 'removeIcon', 'placeholder', 'autoFocus', 'maxTagCount', 'maxTagTextLength', 'maxTagPlaceholder', 'choiceTransitionName', 'onInputKeyDown', 'onPopupScroll', 'tabIndex'];
function isMultiple(mode) {
  return mode === 'tags' || mode === 'multiple';
}
var BaseSelect = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _customizeRawInputEle, _classNames2;
  var id = props.id,
    prefixCls = props.prefixCls,
    className = props.className,
    showSearch = props.showSearch,
    tagRender = props.tagRender,
    direction = props.direction,
    omitDomProps = props.omitDomProps,
    displayValues = props.displayValues,
    onDisplayValuesChange = props.onDisplayValuesChange,
    emptyOptions = props.emptyOptions,
    _props$notFoundConten = props.notFoundContent,
    notFoundContent = _props$notFoundConten === void 0 ? 'Not Found' : _props$notFoundConten,
    onClear = props.onClear,
    mode = props.mode,
    disabled = props.disabled,
    loading = props.loading,
    getInputElement = props.getInputElement,
    getRawInputElement = props.getRawInputElement,
    open = props.open,
    defaultOpen = props.defaultOpen,
    onDropdownVisibleChange = props.onDropdownVisibleChange,
    activeValue = props.activeValue,
    onActiveValueChange = props.onActiveValueChange,
    activeDescendantId = props.activeDescendantId,
    searchValue = props.searchValue,
    autoClearSearchValue = props.autoClearSearchValue,
    onSearch = props.onSearch,
    onSearchSplit = props.onSearchSplit,
    tokenSeparators = props.tokenSeparators,
    allowClear = props.allowClear,
    suffixIcon = props.suffixIcon,
    clearIcon = props.clearIcon,
    OptionList = props.OptionList,
    animation = props.animation,
    transitionName = props.transitionName,
    dropdownStyle = props.dropdownStyle,
    dropdownClassName = props.dropdownClassName,
    dropdownMatchSelectWidth = props.dropdownMatchSelectWidth,
    dropdownRender = props.dropdownRender,
    dropdownAlign = props.dropdownAlign,
    placement = props.placement,
    builtinPlacements = props.builtinPlacements,
    getPopupContainer = props.getPopupContainer,
    _props$showAction = props.showAction,
    showAction = _props$showAction === void 0 ? [] : _props$showAction,
    onFocus = props.onFocus,
    onBlur = props.onBlur,
    onKeyUp = props.onKeyUp,
    onKeyDown = props.onKeyDown,
    onMouseDown = props.onMouseDown,
    restProps = _objectWithoutProperties(props, _excluded$6);

  // ============================== MISC ==============================
  var multiple = isMultiple(mode);
  var mergedShowSearch = (showSearch !== undefined ? showSearch : multiple) || mode === 'combobox';
  var domProps = _objectSpread2({}, restProps);
  DEFAULT_OMIT_PROPS.forEach(function (propName) {
    delete domProps[propName];
  });
  omitDomProps === null || omitDomProps === void 0 ? void 0 : omitDomProps.forEach(function (propName) {
    delete domProps[propName];
  });

  // ============================= Mobile =============================
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    mobile = _React$useState2[0],
    setMobile = _React$useState2[1];
  React.useEffect(function () {
    // Only update on the client side
    setMobile(isMobile());
  }, []);

  // ============================== Refs ==============================
  var containerRef = React.useRef(null);
  var selectorDomRef = React.useRef(null);
  var triggerRef = React.useRef(null);
  var selectorRef = React.useRef(null);
  var listRef = React.useRef(null);

  /** Used for component focused management */
  var _useDelayReset = useDelayReset(),
    _useDelayReset2 = _slicedToArray(_useDelayReset, 3),
    mockFocused = _useDelayReset2[0],
    setMockFocused = _useDelayReset2[1],
    cancelSetMockFocused = _useDelayReset2[2];

  // =========================== Imperative ===========================
  React.useImperativeHandle(ref, function () {
    var _selectorRef$current, _selectorRef$current2;
    return {
      focus: (_selectorRef$current = selectorRef.current) === null || _selectorRef$current === void 0 ? void 0 : _selectorRef$current.focus,
      blur: (_selectorRef$current2 = selectorRef.current) === null || _selectorRef$current2 === void 0 ? void 0 : _selectorRef$current2.blur,
      scrollTo: function scrollTo(arg) {
        var _listRef$current;
        return (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.scrollTo(arg);
      }
    };
  });

  // ========================== Search Value ==========================
  var mergedSearchValue = React.useMemo(function () {
    var _displayValues$;
    if (mode !== 'combobox') {
      return searchValue;
    }
    var val = (_displayValues$ = displayValues[0]) === null || _displayValues$ === void 0 ? void 0 : _displayValues$.value;
    return typeof val === 'string' || typeof val === 'number' ? String(val) : '';
  }, [searchValue, mode, displayValues]);

  // ========================== Custom Input ==========================
  // Only works in `combobox`
  var customizeInputElement = mode === 'combobox' && typeof getInputElement === 'function' && getInputElement() || null;

  // Used for customize replacement for `rc-cascader`
  var customizeRawInputElement = typeof getRawInputElement === 'function' && getRawInputElement();
  var customizeRawInputRef = useComposeRef(selectorDomRef, customizeRawInputElement === null || customizeRawInputElement === void 0 ? void 0 : (_customizeRawInputEle = customizeRawInputElement.props) === null || _customizeRawInputEle === void 0 ? void 0 : _customizeRawInputEle.ref);

  // ============================== Open ==============================
  // SSR not support Portal which means we need delay `open` for the first time render
  var _React$useState3 = React.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    rendered = _React$useState4[0],
    setRendered = _React$useState4[1];
  useLayoutEffect$1(function () {
    setRendered(true);
  }, []);
  var _useMergedState = useMergedState(false, {
      defaultValue: defaultOpen,
      value: open
    }),
    _useMergedState2 = _slicedToArray(_useMergedState, 2),
    innerOpen = _useMergedState2[0],
    setInnerOpen = _useMergedState2[1];
  var mergedOpen = rendered ? innerOpen : false;

  // Not trigger `open` in `combobox` when `notFoundContent` is empty
  var emptyListContent = !notFoundContent && emptyOptions;
  if (disabled || emptyListContent && mergedOpen && mode === 'combobox') {
    mergedOpen = false;
  }
  var triggerOpen = emptyListContent ? false : mergedOpen;
  var onToggleOpen = React.useCallback(function (newOpen) {
    var nextOpen = newOpen !== undefined ? newOpen : !mergedOpen;
    if (!disabled) {
      setInnerOpen(nextOpen);
      if (mergedOpen !== nextOpen) {
        onDropdownVisibleChange === null || onDropdownVisibleChange === void 0 ? void 0 : onDropdownVisibleChange(nextOpen);
      }
    }
  }, [disabled, mergedOpen, setInnerOpen, onDropdownVisibleChange]);

  // ============================= Search =============================
  var tokenWithEnter = React.useMemo(function () {
    return (tokenSeparators || []).some(function (tokenSeparator) {
      return ['\n', '\r\n'].includes(tokenSeparator);
    });
  }, [tokenSeparators]);
  var onInternalSearch = function onInternalSearch(searchText, fromTyping, isCompositing) {
    var ret = true;
    var newSearchText = searchText;
    onActiveValueChange === null || onActiveValueChange === void 0 ? void 0 : onActiveValueChange(null);

    // Check if match the `tokenSeparators`
    var patchLabels = isCompositing ? null : getSeparatedContent(searchText, tokenSeparators);

    // Ignore combobox since it's not split-able
    if (mode !== 'combobox' && patchLabels) {
      newSearchText = '';
      onSearchSplit === null || onSearchSplit === void 0 ? void 0 : onSearchSplit(patchLabels);

      // Should close when paste finish
      onToggleOpen(false);

      // Tell Selector that break next actions
      ret = false;
    }
    if (onSearch && mergedSearchValue !== newSearchText) {
      onSearch(newSearchText, {
        source: fromTyping ? 'typing' : 'effect'
      });
    }
    return ret;
  };

  // Only triggered when menu is closed & mode is tags
  // If menu is open, OptionList will take charge
  // If mode isn't tags, press enter is not meaningful when you can't see any option
  var onInternalSearchSubmit = function onInternalSearchSubmit(searchText) {
    // prevent empty tags from appearing when you click the Enter button
    if (!searchText || !searchText.trim()) {
      return;
    }
    onSearch(searchText, {
      source: 'submit'
    });
  };

  // Close will clean up single mode search text
  React.useEffect(function () {
    if (!mergedOpen && !multiple && mode !== 'combobox') {
      onInternalSearch('', false, false);
    }
  }, [mergedOpen]);

  // ============================ Disabled ============================
  // Close dropdown & remove focus state when disabled change
  React.useEffect(function () {
    if (innerOpen && disabled) {
      setInnerOpen(false);
    }
    if (disabled) {
      setMockFocused(false);
    }
  }, [disabled]);

  // ============================ Keyboard ============================
  /**
   * We record input value here to check if can press to clean up by backspace
   * - null: Key is not down, this is reset by key up
   * - true: Search text is empty when first time backspace down
   * - false: Search text is not empty when first time backspace down
   */
  var _useLock = useLock(),
    _useLock2 = _slicedToArray(_useLock, 2),
    getClearLock = _useLock2[0],
    setClearLock = _useLock2[1];

  // KeyDown
  var onInternalKeyDown = function onInternalKeyDown(event) {
    var clearLock = getClearLock();
    var which = event.which;
    if (which === KeyCode.ENTER) {
      // Do not submit form when type in the input
      if (mode !== 'combobox') {
        event.preventDefault();
      }

      // We only manage open state here, close logic should handle by list component
      if (!mergedOpen) {
        onToggleOpen(true);
      }
    }
    setClearLock(!!mergedSearchValue);

    // Remove value by `backspace`
    if (which === KeyCode.BACKSPACE && !clearLock && multiple && !mergedSearchValue && displayValues.length) {
      var cloneDisplayValues = _toConsumableArray(displayValues);
      var removedDisplayValue = null;
      for (var i = cloneDisplayValues.length - 1; i >= 0; i -= 1) {
        var current = cloneDisplayValues[i];
        if (!current.disabled) {
          cloneDisplayValues.splice(i, 1);
          removedDisplayValue = current;
          break;
        }
      }
      if (removedDisplayValue) {
        onDisplayValuesChange(cloneDisplayValues, {
          type: 'remove',
          values: [removedDisplayValue]
        });
      }
    }
    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }
    if (mergedOpen && listRef.current) {
      var _listRef$current2;
      (_listRef$current2 = listRef.current).onKeyDown.apply(_listRef$current2, [event].concat(rest));
    }
    onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown.apply(void 0, [event].concat(rest));
  };

  // KeyUp
  var onInternalKeyUp = function onInternalKeyUp(event) {
    for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      rest[_key2 - 1] = arguments[_key2];
    }
    if (mergedOpen && listRef.current) {
      var _listRef$current3;
      (_listRef$current3 = listRef.current).onKeyUp.apply(_listRef$current3, [event].concat(rest));
    }
    onKeyUp === null || onKeyUp === void 0 ? void 0 : onKeyUp.apply(void 0, [event].concat(rest));
  };

  // ============================ Selector ============================
  var onSelectorRemove = function onSelectorRemove(val) {
    var newValues = displayValues.filter(function (i) {
      return i !== val;
    });
    onDisplayValuesChange(newValues, {
      type: 'remove',
      values: [val]
    });
  };

  // ========================== Focus / Blur ==========================
  /** Record real focus status */
  var focusRef = React.useRef(false);
  var onContainerFocus = function onContainerFocus() {
    setMockFocused(true);
    if (!disabled) {
      if (onFocus && !focusRef.current) {
        onFocus.apply(void 0, arguments);
      }

      // `showAction` should handle `focus` if set
      if (showAction.includes('focus')) {
        onToggleOpen(true);
      }
    }
    focusRef.current = true;
  };
  var onContainerBlur = function onContainerBlur() {
    setMockFocused(false, function () {
      focusRef.current = false;
      onToggleOpen(false);
    });
    if (disabled) {
      return;
    }
    if (mergedSearchValue) {
      // `tags` mode should move `searchValue` into values
      if (mode === 'tags') {
        onSearch(mergedSearchValue, {
          source: 'submit'
        });
      } else if (mode === 'multiple') {
        // `multiple` mode only clean the search value but not trigger event
        onSearch('', {
          source: 'blur'
        });
      }
    }
    if (onBlur) {
      onBlur.apply(void 0, arguments);
    }
  };

  // Give focus back of Select
  var activeTimeoutIds = [];
  React.useEffect(function () {
    return function () {
      activeTimeoutIds.forEach(function (timeoutId) {
        return clearTimeout(timeoutId);
      });
      activeTimeoutIds.splice(0, activeTimeoutIds.length);
    };
  }, []);
  var onInternalMouseDown = function onInternalMouseDown(event) {
    var _triggerRef$current;
    var target = event.target;
    var popupElement = (_triggerRef$current = triggerRef.current) === null || _triggerRef$current === void 0 ? void 0 : _triggerRef$current.getPopupElement();

    // We should give focus back to selector if clicked item is not focusable
    if (popupElement && popupElement.contains(target)) {
      var timeoutId = setTimeout(function () {
        var index = activeTimeoutIds.indexOf(timeoutId);
        if (index !== -1) {
          activeTimeoutIds.splice(index, 1);
        }
        cancelSetMockFocused();
        if (!mobile && !popupElement.contains(document.activeElement)) {
          var _selectorRef$current3;
          (_selectorRef$current3 = selectorRef.current) === null || _selectorRef$current3 === void 0 ? void 0 : _selectorRef$current3.focus();
        }
      });
      activeTimeoutIds.push(timeoutId);
    }
    for (var _len3 = arguments.length, restArgs = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      restArgs[_key3 - 1] = arguments[_key3];
    }
    onMouseDown === null || onMouseDown === void 0 ? void 0 : onMouseDown.apply(void 0, [event].concat(restArgs));
  };

  // ============================ Dropdown ============================
  var _React$useState5 = React.useState({}),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    forceUpdate = _React$useState6[1];
  // We need force update here since popup dom is render async
  function onPopupMouseEnter() {
    forceUpdate({});
  }

  // Used for raw custom input trigger
  var onTriggerVisibleChange;
  if (customizeRawInputElement) {
    onTriggerVisibleChange = function onTriggerVisibleChange(newOpen) {
      onToggleOpen(newOpen);
    };
  }

  // Close when click on non-select element
  useSelectTriggerControl(function () {
    var _triggerRef$current2;
    return [containerRef.current, (_triggerRef$current2 = triggerRef.current) === null || _triggerRef$current2 === void 0 ? void 0 : _triggerRef$current2.getPopupElement()];
  }, triggerOpen, onToggleOpen, !!customizeRawInputElement);

  // ============================ Context =============================
  var baseSelectContext = React.useMemo(function () {
    return _objectSpread2(_objectSpread2({}, props), {}, {
      notFoundContent: notFoundContent,
      open: mergedOpen,
      triggerOpen: triggerOpen,
      id: id,
      showSearch: mergedShowSearch,
      multiple: multiple,
      toggleOpen: onToggleOpen
    });
  }, [props, notFoundContent, triggerOpen, mergedOpen, id, mergedShowSearch, multiple, onToggleOpen]);

  // ==================================================================
  // ==                            Render                            ==
  // ==================================================================

  // ============================= Arrow ==============================
  var showSuffixIcon = !!suffixIcon || loading;
  var arrowNode;
  if (showSuffixIcon) {
    arrowNode = /*#__PURE__*/React.createElement(TransBtn, {
      className: classNames("".concat(prefixCls, "-arrow"), _defineProperty({}, "".concat(prefixCls, "-arrow-loading"), loading)),
      customizeIcon: suffixIcon,
      customizeIconProps: {
        loading: loading,
        searchValue: mergedSearchValue,
        open: mergedOpen,
        focused: mockFocused,
        showSearch: mergedShowSearch
      }
    });
  }

  // ============================= Clear ==============================
  var onClearMouseDown = function onClearMouseDown() {
    var _selectorRef$current4;
    onClear === null || onClear === void 0 ? void 0 : onClear();
    (_selectorRef$current4 = selectorRef.current) === null || _selectorRef$current4 === void 0 ? void 0 : _selectorRef$current4.focus();
    onDisplayValuesChange([], {
      type: 'clear',
      values: displayValues
    });
    onInternalSearch('', false, false);
  };
  var _useAllowClear = useAllowClear(prefixCls, onClearMouseDown, displayValues, allowClear, clearIcon, disabled, mergedSearchValue, mode),
    mergedAllowClear = _useAllowClear.allowClear,
    clearNode = _useAllowClear.clearIcon;

  // =========================== OptionList ===========================
  var optionList = /*#__PURE__*/React.createElement(OptionList, {
    ref: listRef
  });

  // ============================= Select =============================
  var mergedClassName = classNames(prefixCls, className, (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-focused"), mockFocused), _defineProperty(_classNames2, "".concat(prefixCls, "-multiple"), multiple), _defineProperty(_classNames2, "".concat(prefixCls, "-single"), !multiple), _defineProperty(_classNames2, "".concat(prefixCls, "-allow-clear"), allowClear), _defineProperty(_classNames2, "".concat(prefixCls, "-show-arrow"), showSuffixIcon), _defineProperty(_classNames2, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_classNames2, "".concat(prefixCls, "-loading"), loading), _defineProperty(_classNames2, "".concat(prefixCls, "-open"), mergedOpen), _defineProperty(_classNames2, "".concat(prefixCls, "-customize-input"), customizeInputElement), _defineProperty(_classNames2, "".concat(prefixCls, "-show-search"), mergedShowSearch), _classNames2));

  // >>> Selector
  var selectorNode = /*#__PURE__*/React.createElement(RefSelectTrigger, {
    ref: triggerRef,
    disabled: disabled,
    prefixCls: prefixCls,
    visible: triggerOpen,
    popupElement: optionList,
    animation: animation,
    transitionName: transitionName,
    dropdownStyle: dropdownStyle,
    dropdownClassName: dropdownClassName,
    direction: direction,
    dropdownMatchSelectWidth: dropdownMatchSelectWidth,
    dropdownRender: dropdownRender,
    dropdownAlign: dropdownAlign,
    placement: placement,
    builtinPlacements: builtinPlacements,
    getPopupContainer: getPopupContainer,
    empty: emptyOptions,
    getTriggerDOMNode: function getTriggerDOMNode() {
      return selectorDomRef.current;
    },
    onPopupVisibleChange: onTriggerVisibleChange,
    onPopupMouseEnter: onPopupMouseEnter
  }, customizeRawInputElement ? /*#__PURE__*/React.cloneElement(customizeRawInputElement, {
    ref: customizeRawInputRef
  }) : /*#__PURE__*/React.createElement(ForwardSelector, _extends$1({}, props, {
    domRef: selectorDomRef,
    prefixCls: prefixCls,
    inputElement: customizeInputElement,
    ref: selectorRef,
    id: id,
    showSearch: mergedShowSearch,
    autoClearSearchValue: autoClearSearchValue,
    mode: mode,
    activeDescendantId: activeDescendantId,
    tagRender: tagRender,
    values: displayValues,
    open: mergedOpen,
    onToggleOpen: onToggleOpen,
    activeValue: activeValue,
    searchValue: mergedSearchValue,
    onSearch: onInternalSearch,
    onSearchSubmit: onInternalSearchSubmit,
    onRemove: onSelectorRemove,
    tokenWithEnter: tokenWithEnter
  })));

  // >>> Render
  var renderNode;

  // Render raw
  if (customizeRawInputElement) {
    renderNode = selectorNode;
  } else {
    renderNode = /*#__PURE__*/React.createElement("div", _extends$1({
      className: mergedClassName
    }, domProps, {
      ref: containerRef,
      onMouseDown: onInternalMouseDown,
      onKeyDown: onInternalKeyDown,
      onKeyUp: onInternalKeyUp,
      onFocus: onContainerFocus,
      onBlur: onContainerBlur
    }), mockFocused && !mergedOpen && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 0,
        height: 0,
        position: 'absolute',
        overflow: 'hidden',
        opacity: 0
      },
      "aria-live": "polite"
    }, "".concat(displayValues.map(function (_ref) {
      var label = _ref.label,
        value = _ref.value;
      return ['number', 'string'].includes(_typeof(label)) ? label : value;
    }).join(', '))), selectorNode, arrowNode, mergedAllowClear && clearNode);
  }
  return /*#__PURE__*/React.createElement(BaseSelectContext.Provider, {
    value: baseSelectContext
  }, renderNode);
});

// Set display name for dev
if (process.env.NODE_ENV !== 'production') {
  BaseSelect.displayName = 'BaseSelect';
}

/**
 * Cache `value` related LabeledValue & options.
 */
var useCache = (function (labeledValues, valueOptions) {
  var cacheRef = React.useRef({
    values: new Map(),
    options: new Map()
  });
  var filledLabeledValues = React.useMemo(function () {
    var _cacheRef$current = cacheRef.current,
      prevValueCache = _cacheRef$current.values,
      prevOptionCache = _cacheRef$current.options;

    // Fill label by cache
    var patchedValues = labeledValues.map(function (item) {
      if (item.label === undefined) {
        var _prevValueCache$get;
        return _objectSpread2(_objectSpread2({}, item), {}, {
          label: (_prevValueCache$get = prevValueCache.get(item.value)) === null || _prevValueCache$get === void 0 ? void 0 : _prevValueCache$get.label
        });
      }
      return item;
    });

    // Refresh cache
    var valueCache = new Map();
    var optionCache = new Map();
    patchedValues.forEach(function (item) {
      valueCache.set(item.value, item);
      optionCache.set(item.value, valueOptions.get(item.value) || prevOptionCache.get(item.value));
    });
    cacheRef.current.values = valueCache;
    cacheRef.current.options = optionCache;
    return patchedValues;
  }, [labeledValues, valueOptions]);
  var getOption = React.useCallback(function (val) {
    return valueOptions.get(val) || cacheRef.current.options.get(val);
  }, [valueOptions]);
  return [filledLabeledValues, getOption];
});

function includes(test, search) {
  return toArray$1(test).join('').toUpperCase().includes(search);
}
var useFilterOptions = (function (options, fieldNames, searchValue, filterOption, optionFilterProp) {
  return React.useMemo(function () {
    if (!searchValue || filterOption === false) {
      return options;
    }
    var fieldOptions = fieldNames.options,
      fieldLabel = fieldNames.label,
      fieldValue = fieldNames.value;
    var filteredOptions = [];
    var customizeFilter = typeof filterOption === 'function';
    var upperSearch = searchValue.toUpperCase();
    var filterFunc = customizeFilter ? filterOption : function (_, option) {
      // Use provided `optionFilterProp`
      if (optionFilterProp) {
        return includes(option[optionFilterProp], upperSearch);
      }

      // Auto select `label` or `value` by option type
      if (option[fieldOptions]) {
        // hack `fieldLabel` since `OptionGroup` children is not `label`
        return includes(option[fieldLabel !== 'children' ? fieldLabel : 'label'], upperSearch);
      }
      return includes(option[fieldValue], upperSearch);
    };
    var wrapOption = customizeFilter ? function (opt) {
      return injectPropsWithOption(opt);
    } : function (opt) {
      return opt;
    };
    options.forEach(function (item) {
      // Group should check child options
      if (item[fieldOptions]) {
        // Check group first
        var matchGroup = filterFunc(searchValue, wrapOption(item));
        if (matchGroup) {
          filteredOptions.push(item);
        } else {
          // Check option
          var subOptions = item[fieldOptions].filter(function (subItem) {
            return filterFunc(searchValue, wrapOption(subItem));
          });
          if (subOptions.length) {
            filteredOptions.push(_objectSpread2(_objectSpread2({}, item), {}, _defineProperty({}, fieldOptions, subOptions)));
          }
        }
        return;
      }
      if (filterFunc(searchValue, wrapOption(item))) {
        filteredOptions.push(item);
      }
    });
    return filteredOptions;
  }, [options, filterOption, optionFilterProp, searchValue, fieldNames]);
});

var uuid = 0;

/** Is client side and not jsdom */
var isBrowserClient = process.env.NODE_ENV !== 'test' && canUseDom();

/** Get unique id for accessibility usage */
function getUUID() {
  var retId;

  // Test never reach
  /* istanbul ignore if */
  if (isBrowserClient) {
    retId = uuid;
    uuid += 1;
  } else {
    retId = 'TEST_OR_SSR';
  }
  return retId;
}
function useId(id) {
  // Inner id for accessibility usage. Only work in client side
  var _React$useState = React.useState(),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    innerId = _React$useState2[0],
    setInnerId = _React$useState2[1];
  React.useEffect(function () {
    setInnerId("rc_select_".concat(getUUID()));
  }, []);
  return id || innerId;
}

var _excluded$5 = ["children", "value"],
  _excluded2 = ["children"];
function convertNodeToOption(node) {
  var _ref = node,
    key = _ref.key,
    _ref$props = _ref.props,
    children = _ref$props.children,
    value = _ref$props.value,
    restProps = _objectWithoutProperties(_ref$props, _excluded$5);
  return _objectSpread2({
    key: key,
    value: value !== undefined ? value : key,
    children: children
  }, restProps);
}
function convertChildrenToData(nodes) {
  var optionOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return toArray$3(nodes).map(function (node, index) {
    if (! /*#__PURE__*/React.isValidElement(node) || !node.type) {
      return null;
    }
    var _ref2 = node,
      isSelectOptGroup = _ref2.type.isSelectOptGroup,
      key = _ref2.key,
      _ref2$props = _ref2.props,
      children = _ref2$props.children,
      restProps = _objectWithoutProperties(_ref2$props, _excluded2);
    if (optionOnly || !isSelectOptGroup) {
      return convertNodeToOption(node);
    }
    return _objectSpread2(_objectSpread2({
      key: "__RC_SELECT_GRP__".concat(key === null ? index : key, "__"),
      label: key
    }, restProps), {}, {
      options: convertChildrenToData(children)
    });
  }).filter(function (data) {
    return data;
  });
}

/**
 * Parse `children` to `options` if `options` is not provided.
 * Then flatten the `options`.
 */
function useOptions(options, children, fieldNames, optionFilterProp, optionLabelProp) {
  return React.useMemo(function () {
    var mergedOptions = options;
    var childrenAsData = !options;
    if (childrenAsData) {
      mergedOptions = convertChildrenToData(children);
    }
    var valueOptions = new Map();
    var labelOptions = new Map();
    var setLabelOptions = function setLabelOptions(labelOptionsMap, option, key) {
      if (key && typeof key === 'string') {
        labelOptionsMap.set(option[key], option);
      }
    };
    function dig(optionList) {
      var isChildren = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      // for loop to speed up collection speed
      for (var i = 0; i < optionList.length; i += 1) {
        var option = optionList[i];
        if (!option[fieldNames.options] || isChildren) {
          valueOptions.set(option[fieldNames.value], option);
          setLabelOptions(labelOptions, option, fieldNames.label);
          // https://github.com/ant-design/ant-design/issues/35304
          setLabelOptions(labelOptions, option, optionFilterProp);
          setLabelOptions(labelOptions, option, optionLabelProp);
        } else {
          dig(option[fieldNames.options], true);
        }
      }
    }
    dig(mergedOptions);
    return {
      options: mergedOptions,
      valueOptions: valueOptions,
      labelOptions: labelOptions
    };
  }, [options, children, fieldNames, optionFilterProp, optionLabelProp]);
}

/**
 * Same as `React.useCallback` but always return a memoized function
 * but redirect to real function.
 */
function useRefFunc(callback) {
  var funcRef = React.useRef();
  funcRef.current = callback;
  var cacheFn = React.useCallback(function () {
    return funcRef.current.apply(funcRef, arguments);
  }, []);
  return cacheFn;
}

/* istanbul ignore file */

/** This is a placeholder, not real render in dom */
var OptGroup = function OptGroup() {
  return null;
};
OptGroup.isSelectOptGroup = true;

/* istanbul ignore file */

/** This is a placeholder, not real render in dom */
var Option = function Option() {
  return null;
};
Option.isSelectOption = true;

/**
 * Fill component to provided the scroll content real height.
 */
var Filler = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var height = _ref.height,
    offsetY = _ref.offsetY,
    offsetX = _ref.offsetX,
    children = _ref.children,
    prefixCls = _ref.prefixCls,
    onInnerResize = _ref.onInnerResize,
    innerProps = _ref.innerProps,
    rtl = _ref.rtl,
    extra = _ref.extra;
  var outerStyle = {};
  var innerStyle = {
    display: 'flex',
    flexDirection: 'column'
  };
  if (offsetY !== undefined) {
    var _objectSpread2$1;
    // Not set `width` since this will break `sticky: right`
    outerStyle = {
      height: height,
      position: 'relative',
      overflow: 'hidden'
    };
    innerStyle = _objectSpread2(_objectSpread2({}, innerStyle), {}, (_objectSpread2$1 = {
      transform: "translateY(".concat(offsetY, "px)")
    }, _defineProperty(_objectSpread2$1, rtl ? 'marginRight' : 'marginLeft', -offsetX), _defineProperty(_objectSpread2$1, "position", 'absolute'), _defineProperty(_objectSpread2$1, "left", 0), _defineProperty(_objectSpread2$1, "right", 0), _defineProperty(_objectSpread2$1, "top", 0), _objectSpread2$1));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: outerStyle
  }, /*#__PURE__*/React.createElement(RefResizeObserver, {
    onResize: function onResize(_ref2) {
      var offsetHeight = _ref2.offsetHeight;
      if (offsetHeight && onInnerResize) {
        onInnerResize();
      }
    }
  }, /*#__PURE__*/React.createElement("div", _extends$1({
    style: innerStyle,
    className: classNames(_defineProperty({}, "".concat(prefixCls, "-holder-inner"), prefixCls)),
    ref: ref
  }, innerProps), children, extra)));
});
Filler.displayName = 'Filler';

function getPageXY(e, horizontal) {
  var obj = 'touches' in e ? e.touches[0] : e;
  return obj[horizontal ? 'pageX' : 'pageY'];
}
var ScrollBar = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames;
  var prefixCls = props.prefixCls,
    rtl = props.rtl,
    scrollOffset = props.scrollOffset,
    scrollRange = props.scrollRange,
    onStartMove = props.onStartMove,
    onStopMove = props.onStopMove,
    onScroll = props.onScroll,
    horizontal = props.horizontal,
    spinSize = props.spinSize,
    containerSize = props.containerSize;
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    dragging = _React$useState2[0],
    setDragging = _React$useState2[1];
  var _React$useState3 = React.useState(null),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    pageXY = _React$useState4[0],
    setPageXY = _React$useState4[1];
  var _React$useState5 = React.useState(null),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    startTop = _React$useState6[0],
    setStartTop = _React$useState6[1];
  var isLTR = !rtl;
  // ========================= Refs =========================
  var scrollbarRef = React.useRef();
  var thumbRef = React.useRef();
  // ======================= Visible ========================
  var _React$useState7 = React.useState(false),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    visible = _React$useState8[0],
    setVisible = _React$useState8[1];
  var visibleTimeoutRef = React.useRef();
  var delayHidden = function delayHidden() {
    clearTimeout(visibleTimeoutRef.current);
    setVisible(true);
    visibleTimeoutRef.current = setTimeout(function () {
      setVisible(false);
    }, 3000);
  };
  // ======================== Range =========================
  var enableScrollRange = scrollRange - containerSize || 0;
  var enableOffsetRange = containerSize - spinSize || 0;
  // `scrollWidth` < `clientWidth` means no need to show scrollbar
  var canScroll = enableScrollRange > 0;
  // ========================= Top ==========================
  var top = React.useMemo(function () {
    if (scrollOffset === 0 || enableScrollRange === 0) {
      return 0;
    }
    var ptg = scrollOffset / enableScrollRange;
    return ptg * enableOffsetRange;
  }, [scrollOffset, enableScrollRange, enableOffsetRange]);
  // ====================== Container =======================
  var onContainerMouseDown = function onContainerMouseDown(e) {
    e.stopPropagation();
    e.preventDefault();
  };
  // ======================== Thumb =========================
  var stateRef = React.useRef({
    top: top,
    dragging: dragging,
    pageY: pageXY,
    startTop: startTop
  });
  stateRef.current = {
    top: top,
    dragging: dragging,
    pageY: pageXY,
    startTop: startTop
  };
  var onThumbMouseDown = function onThumbMouseDown(e) {
    setDragging(true);
    setPageXY(getPageXY(e, horizontal));
    setStartTop(stateRef.current.top);
    onStartMove();
    e.stopPropagation();
    e.preventDefault();
  };
  // ======================== Effect ========================
  // React make event as passive, but we need to preventDefault
  // Add event on dom directly instead.
  // ref: https://github.com/facebook/react/issues/9809
  React.useEffect(function () {
    var onScrollbarTouchStart = function onScrollbarTouchStart(e) {
      e.preventDefault();
    };
    var scrollbarEle = scrollbarRef.current;
    var thumbEle = thumbRef.current;
    scrollbarEle.addEventListener('touchstart', onScrollbarTouchStart);
    thumbEle.addEventListener('touchstart', onThumbMouseDown);
    return function () {
      scrollbarEle.removeEventListener('touchstart', onScrollbarTouchStart);
      thumbEle.removeEventListener('touchstart', onThumbMouseDown);
    };
  }, []);
  // Pass to effect
  var enableScrollRangeRef = React.useRef();
  enableScrollRangeRef.current = enableScrollRange;
  var enableOffsetRangeRef = React.useRef();
  enableOffsetRangeRef.current = enableOffsetRange;
  React.useEffect(function () {
    if (dragging) {
      var moveRafId;
      var onMouseMove = function onMouseMove(e) {
        var _stateRef$current = stateRef.current,
          stateDragging = _stateRef$current.dragging,
          statePageY = _stateRef$current.pageY,
          stateStartTop = _stateRef$current.startTop;
        wrapperRaf.cancel(moveRafId);
        if (stateDragging) {
          var offset = getPageXY(e, horizontal) - statePageY;
          var newTop = stateStartTop;
          if (!isLTR && horizontal) {
            newTop -= offset;
          } else {
            newTop += offset;
          }
          var tmpEnableScrollRange = enableScrollRangeRef.current;
          var tmpEnableOffsetRange = enableOffsetRangeRef.current;
          var ptg = tmpEnableOffsetRange ? newTop / tmpEnableOffsetRange : 0;
          var newScrollTop = Math.ceil(ptg * tmpEnableScrollRange);
          newScrollTop = Math.max(newScrollTop, 0);
          newScrollTop = Math.min(newScrollTop, tmpEnableScrollRange);
          moveRafId = wrapperRaf(function () {
            onScroll(newScrollTop, horizontal);
          });
        }
      };
      var onMouseUp = function onMouseUp() {
        setDragging(false);
        onStopMove();
      };
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('touchmove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('touchend', onMouseUp);
      return function () {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('touchmove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
        window.removeEventListener('touchend', onMouseUp);
        wrapperRaf.cancel(moveRafId);
      };
    }
  }, [dragging]);
  React.useEffect(function () {
    delayHidden();
  }, [scrollOffset]);
  // ====================== Imperative ======================
  React.useImperativeHandle(ref, function () {
    return {
      delayHidden: delayHidden
    };
  });
  // ======================== Render ========================
  var scrollbarPrefixCls = "".concat(prefixCls, "-scrollbar");
  var containerStyle = {
    position: 'absolute',
    visibility: visible && canScroll ? null : 'hidden'
  };
  var thumbStyle = {
    position: 'absolute',
    background: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 99,
    cursor: 'pointer',
    userSelect: 'none'
  };
  if (horizontal) {
    // Container
    containerStyle.height = 8;
    containerStyle.left = 0;
    containerStyle.right = 0;
    containerStyle.bottom = 0;
    // Thumb
    thumbStyle.height = '100%';
    thumbStyle.width = spinSize;
    if (isLTR) {
      thumbStyle.left = top;
    } else {
      thumbStyle.right = top;
    }
  } else {
    // Container
    containerStyle.width = 8;
    containerStyle.top = 0;
    containerStyle.bottom = 0;
    if (isLTR) {
      containerStyle.right = 0;
    } else {
      containerStyle.left = 0;
    }
    // Thumb
    thumbStyle.width = '100%';
    thumbStyle.height = spinSize;
    thumbStyle.top = top;
  }
  return /*#__PURE__*/React.createElement("div", {
    ref: scrollbarRef,
    className: classNames(scrollbarPrefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(scrollbarPrefixCls, "-horizontal"), horizontal), _defineProperty(_classNames, "".concat(scrollbarPrefixCls, "-vertical"), !horizontal), _defineProperty(_classNames, "".concat(scrollbarPrefixCls, "-visible"), visible), _classNames)),
    style: containerStyle,
    onMouseDown: onContainerMouseDown,
    onMouseMove: delayHidden
  }, /*#__PURE__*/React.createElement("div", {
    ref: thumbRef,
    className: classNames("".concat(scrollbarPrefixCls, "-thumb"), _defineProperty({}, "".concat(scrollbarPrefixCls, "-thumb-moving"), dragging)),
    style: thumbStyle,
    onMouseDown: onThumbMouseDown
  }));
});
if (process.env.NODE_ENV !== 'production') {
  ScrollBar.displayName = 'ScrollBar';
}

function Item(_ref) {
  var children = _ref.children,
    setRef = _ref.setRef;
  var refFunc = React.useCallback(function (node) {
    setRef(node);
  }, []);
  return /*#__PURE__*/React.cloneElement(children, {
    ref: refFunc
  });
}

function useChildren(list, startIndex, endIndex, scrollWidth, setNodeRef, renderFunc, _ref) {
  var getKey = _ref.getKey;
  return list.slice(startIndex, endIndex + 1).map(function (item, index) {
    var eleIndex = startIndex + index;
    var node = renderFunc(item, eleIndex, {
      style: {
        width: scrollWidth
      }
    });
    var key = getKey(item);
    return /*#__PURE__*/React.createElement(Item, {
      key: key,
      setRef: function setRef(ele) {
        return setNodeRef(item, ele);
      }
    }, node);
  });
}

// Firefox has low performance of map.
var CacheMap = /*#__PURE__*/function () {
  function CacheMap() {
    _classCallCheck(this, CacheMap);
    this.maps = void 0;
    // Used for cache key
    // `useMemo` no need to update if `id` not change
    this.id = 0;
    this.maps = Object.create(null);
  }
  _createClass(CacheMap, [{
    key: "set",
    value: function set(key, value) {
      this.maps[key] = value;
      this.id += 1;
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.maps[key];
    }
  }]);
  return CacheMap;
}();

function useHeights(getKey, onItemAdd, onItemRemove) {
  var _React$useState = React.useState(0),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    updatedMark = _React$useState2[0],
    setUpdatedMark = _React$useState2[1];
  var instanceRef = useRef(new Map());
  var heightsRef = useRef(new CacheMap());
  var collectRafRef = useRef();
  function cancelRaf() {
    wrapperRaf.cancel(collectRafRef.current);
  }
  function collectHeight() {
    cancelRaf();
    collectRafRef.current = wrapperRaf(function () {
      instanceRef.current.forEach(function (element, key) {
        if (element && element.offsetParent) {
          var htmlElement = findDOMNode(element);
          var offsetHeight = htmlElement.offsetHeight;
          if (heightsRef.current.get(key) !== offsetHeight) {
            heightsRef.current.set(key, htmlElement.offsetHeight);
          }
        }
      });
      // Always trigger update mark to tell parent that should re-calculate heights when resized
      setUpdatedMark(function (c) {
        return c + 1;
      });
    });
  }
  function setInstanceRef(item, instance) {
    var key = getKey(item);
    var origin = instanceRef.current.get(key);
    if (instance) {
      instanceRef.current.set(key, instance);
      collectHeight();
    } else {
      instanceRef.current.delete(key);
    }
    // Instance changed
    if (!origin !== !instance) {
      if (instance) {
        onItemAdd === null || onItemAdd === void 0 ? void 0 : onItemAdd(item);
      } else {
        onItemRemove === null || onItemRemove === void 0 ? void 0 : onItemRemove(item);
      }
    }
  }
  useEffect(function () {
    return cancelRaf;
  }, []);
  return [setInstanceRef, collectHeight, heightsRef.current, updatedMark];
}

function useScrollTo(containerRef, data, heights, itemHeight, getKey, collectHeight, syncScrollTop, triggerFlash) {
  var scrollRef = React.useRef();
  return function (arg) {
    // When not argument provided, we think dev may want to show the scrollbar
    if (arg === null || arg === undefined) {
      triggerFlash();
      return;
    }
    // Normal scroll logic
    wrapperRaf.cancel(scrollRef.current);
    if (typeof arg === 'number') {
      syncScrollTop(arg);
    } else if (arg && _typeof(arg) === 'object') {
      var index;
      var align = arg.align;
      if ('index' in arg) {
        index = arg.index;
      } else {
        index = data.findIndex(function (item) {
          return getKey(item) === arg.key;
        });
      }
      var _arg$offset = arg.offset,
        offset = _arg$offset === void 0 ? 0 : _arg$offset;
      // We will retry 3 times in case dynamic height shaking
      var syncScroll = function syncScroll(times, targetAlign) {
        if (times < 0 || !containerRef.current) return;
        var height = containerRef.current.clientHeight;
        var needCollectHeight = false;
        var newTargetAlign = targetAlign;
        // Go to next frame if height not exist
        if (height) {
          var mergedAlign = targetAlign || align;
          // Get top & bottom
          var stackTop = 0;
          var itemTop = 0;
          var itemBottom = 0;
          var maxLen = Math.min(data.length, index);
          for (var i = 0; i <= maxLen; i += 1) {
            var key = getKey(data[i]);
            itemTop = stackTop;
            var cacheHeight = heights.get(key);
            itemBottom = itemTop + (cacheHeight === undefined ? itemHeight : cacheHeight);
            stackTop = itemBottom;
            if (i === index && cacheHeight === undefined) {
              needCollectHeight = true;
            }
          }
          // Scroll to
          var targetTop = null;
          switch (mergedAlign) {
            case 'top':
              targetTop = itemTop - offset;
              break;
            case 'bottom':
              targetTop = itemBottom - height + offset;
              break;
            default:
              {
                var scrollTop = containerRef.current.scrollTop;
                var scrollBottom = scrollTop + height;
                if (itemTop < scrollTop) {
                  newTargetAlign = 'top';
                } else if (itemBottom > scrollBottom) {
                  newTargetAlign = 'bottom';
                }
              }
          }
          if (targetTop !== null && targetTop !== containerRef.current.scrollTop) {
            syncScrollTop(targetTop);
          }
        }
        // We will retry since element may not sync height as it described
        scrollRef.current = wrapperRaf(function () {
          if (needCollectHeight) {
            collectHeight();
          }
          syncScroll(times - 1, newTargetAlign);
        }, 2); // Delay 2 to wait for List collect heights
      };

      syncScroll(3);
    }
  };
}

/**
 * Get index with specific start index one by one. e.g.
 * min: 3, max: 9, start: 6
 *
 * Return index is:
 * [0]: 6
 * [1]: 7
 * [2]: 5
 * [3]: 8
 * [4]: 4
 * [5]: 9
 * [6]: 3
 */
/**
 * We assume that 2 list has only 1 item diff and others keeping the order.
 * So we can use dichotomy algorithm to find changed one.
 */
function findListDiffIndex(originList, targetList, getKey) {
  var originLen = originList.length;
  var targetLen = targetList.length;
  var shortList;
  var longList;
  if (originLen === 0 && targetLen === 0) {
    return null;
  }
  if (originLen < targetLen) {
    shortList = originList;
    longList = targetList;
  } else {
    shortList = targetList;
    longList = originList;
  }
  var notExistKey = {
    __EMPTY_ITEM__: true
  };
  function getItemKey(item) {
    if (item !== undefined) {
      return getKey(item);
    }
    return notExistKey;
  }
  // Loop to find diff one
  var diffIndex = null;
  var multiple = Math.abs(originLen - targetLen) !== 1;
  for (var i = 0; i < longList.length; i += 1) {
    var shortKey = getItemKey(shortList[i]);
    var longKey = getItemKey(longList[i]);
    if (shortKey !== longKey) {
      diffIndex = i;
      multiple = multiple || shortKey !== getItemKey(longList[i + 1]);
      break;
    }
  }
  return diffIndex === null ? null : {
    index: diffIndex,
    multiple: multiple
  };
}

function useDiffItem(data, getKey, onDiff) {
  var _React$useState = React.useState(data),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    prevData = _React$useState2[0],
    setPrevData = _React$useState2[1];
  var _React$useState3 = React.useState(null),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    diffItem = _React$useState4[0],
    setDiffItem = _React$useState4[1];
  React.useEffect(function () {
    var diff = findListDiffIndex(prevData || [], data || [], getKey);
    if ((diff === null || diff === void 0 ? void 0 : diff.index) !== undefined) {
      onDiff === null || onDiff === void 0 ? void 0 : onDiff(diff.index);
      setDiffItem(data[diff.index]);
    }
    setPrevData(data);
  }, [data]);
  return [diffItem];
}

var isFF = (typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) === 'object' && /Firefox/i.test(navigator.userAgent);

var useOriginScroll = (function (isScrollAtTop, isScrollAtBottom) {
  // Do lock for a wheel when scrolling
  var lockRef = useRef(false);
  var lockTimeoutRef = useRef(null);
  function lockScroll() {
    clearTimeout(lockTimeoutRef.current);
    lockRef.current = true;
    lockTimeoutRef.current = setTimeout(function () {
      lockRef.current = false;
    }, 50);
  }
  // Pass to ref since global add is in closure
  var scrollPingRef = useRef({
    top: isScrollAtTop,
    bottom: isScrollAtBottom
  });
  scrollPingRef.current.top = isScrollAtTop;
  scrollPingRef.current.bottom = isScrollAtBottom;
  return function (deltaY) {
    var smoothOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var originScroll =
    // Pass origin wheel when on the top
    deltaY < 0 && scrollPingRef.current.top ||
    // Pass origin wheel when on the bottom
    deltaY > 0 && scrollPingRef.current.bottom;
    if (smoothOffset && originScroll) {
      // No need lock anymore when it's smooth offset from touchMove interval
      clearTimeout(lockTimeoutRef.current);
      lockRef.current = false;
    } else if (!originScroll || lockRef.current) {
      lockScroll();
    }
    return !lockRef.current && originScroll;
  };
});

function useFrameWheel(inVirtual, isScrollAtTop, isScrollAtBottom, horizontalScroll,
/***
 * Return `true` when you need to prevent default event
 */
onWheelDelta) {
  var offsetRef = useRef(0);
  var nextFrameRef = useRef(null);
  // Firefox patch
  var wheelValueRef = useRef(null);
  var isMouseScrollRef = useRef(false);
  // Scroll status sync
  var originScroll = useOriginScroll(isScrollAtTop, isScrollAtBottom);
  function onWheelY(event, deltaY) {
    wrapperRaf.cancel(nextFrameRef.current);
    offsetRef.current += deltaY;
    wheelValueRef.current = deltaY;
    // Do nothing when scroll at the edge, Skip check when is in scroll
    if (originScroll(deltaY)) return;
    // Proxy of scroll events
    if (!isFF) {
      event.preventDefault();
    }
    nextFrameRef.current = wrapperRaf(function () {
      // Patch a multiple for Firefox to fix wheel number too small
      // ref: https://github.com/ant-design/ant-design/issues/26372#issuecomment-679460266
      var patchMultiple = isMouseScrollRef.current ? 10 : 1;
      onWheelDelta(offsetRef.current * patchMultiple);
      offsetRef.current = 0;
    });
  }
  function onWheelX(event, deltaX) {
    onWheelDelta(deltaX, true);
    if (!isFF) {
      event.preventDefault();
    }
  }
  // Check for which direction does wheel do. `sx` means `shift + wheel`
  var wheelDirectionRef = useRef(null);
  var wheelDirectionCleanRef = useRef(null);
  function onWheel(event) {
    if (!inVirtual) return;
    // Wait for 2 frame to clean direction
    wrapperRaf.cancel(wheelDirectionCleanRef.current);
    wheelDirectionCleanRef.current = wrapperRaf(function () {
      wheelDirectionRef.current = null;
    }, 2);
    var deltaX = event.deltaX,
      deltaY = event.deltaY,
      shiftKey = event.shiftKey;
    var mergedDeltaX = deltaX;
    var mergedDeltaY = deltaY;
    if (wheelDirectionRef.current === 'sx' || !wheelDirectionRef.current && (shiftKey || false) && deltaY && !deltaX) {
      mergedDeltaX = deltaY;
      mergedDeltaY = 0;
      wheelDirectionRef.current = 'sx';
    }
    var absX = Math.abs(mergedDeltaX);
    var absY = Math.abs(mergedDeltaY);
    if (wheelDirectionRef.current === null) {
      wheelDirectionRef.current = horizontalScroll && absX > absY ? 'x' : 'y';
    }
    if (wheelDirectionRef.current === 'y') {
      onWheelY(event, mergedDeltaY);
    } else {
      onWheelX(event, mergedDeltaX);
    }
  }
  // A patch for firefox
  function onFireFoxScroll(event) {
    if (!inVirtual) return;
    isMouseScrollRef.current = event.detail === wheelValueRef.current;
  }
  return [onWheel, onFireFoxScroll];
}

var SMOOTH_PTG = 14 / 15;
function useMobileTouchMove(inVirtual, listRef, callback) {
  var touchedRef = useRef(false);
  var touchYRef = useRef(0);
  var elementRef = useRef(null);
  // Smooth scroll
  var intervalRef = useRef(null);
  /* eslint-disable prefer-const */
  var cleanUpEvents;
  var onTouchMove = function onTouchMove(e) {
    if (touchedRef.current) {
      var currentY = Math.ceil(e.touches[0].pageY);
      var offsetY = touchYRef.current - currentY;
      touchYRef.current = currentY;
      if (callback(offsetY)) {
        e.preventDefault();
      }
      // Smooth interval
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(function () {
        offsetY *= SMOOTH_PTG;
        if (!callback(offsetY, true) || Math.abs(offsetY) <= 0.1) {
          clearInterval(intervalRef.current);
        }
      }, 16);
    }
  };
  var onTouchEnd = function onTouchEnd() {
    touchedRef.current = false;
    cleanUpEvents();
  };
  var onTouchStart = function onTouchStart(e) {
    cleanUpEvents();
    if (e.touches.length === 1 && !touchedRef.current) {
      touchedRef.current = true;
      touchYRef.current = Math.ceil(e.touches[0].pageY);
      elementRef.current = e.target;
      elementRef.current.addEventListener('touchmove', onTouchMove);
      elementRef.current.addEventListener('touchend', onTouchEnd);
    }
  };
  cleanUpEvents = function cleanUpEvents() {
    if (elementRef.current) {
      elementRef.current.removeEventListener('touchmove', onTouchMove);
      elementRef.current.removeEventListener('touchend', onTouchEnd);
    }
  };
  useLayoutEffect$1(function () {
    if (inVirtual) {
      listRef.current.addEventListener('touchstart', onTouchStart);
    }
    return function () {
      var _listRef$current;
      (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.removeEventListener('touchstart', onTouchStart);
      cleanUpEvents();
      clearInterval(intervalRef.current);
    };
  }, [inVirtual]);
}

var MIN_SIZE = 20;
function getSpinSize() {
  var containerSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var scrollRange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var baseSize = containerSize / scrollRange * 100;
  if (isNaN(baseSize)) {
    baseSize = 0;
  }
  baseSize = Math.max(baseSize, MIN_SIZE);
  baseSize = Math.min(baseSize, containerSize / 2);
  return Math.floor(baseSize);
}

/**
 * Size info need loop query for the `heights` which will has the perf issue.
 * Let cache result for each render phase.
 */
function useGetSize(mergedData, getKey, heights, itemHeight) {
  var _React$useMemo = React.useMemo(function () {
      return [new Map(), []];
    }, [mergedData, heights.id, itemHeight]),
    _React$useMemo2 = _slicedToArray(_React$useMemo, 2),
    key2Index = _React$useMemo2[0],
    bottomList = _React$useMemo2[1];
  var getSize = function getSize(startKey) {
    var endKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : startKey;
    // Get from cache first
    var startIndex = key2Index.get(startKey);
    var endIndex = key2Index.get(endKey);
    // Loop to fill the cache
    if (startIndex === undefined || endIndex === undefined) {
      var dataLen = mergedData.length;
      for (var i = bottomList.length; i < dataLen; i += 1) {
        var _heights$get;
        var item = mergedData[i];
        var key = getKey(item);
        key2Index.set(key, i);
        var cacheHeight = (_heights$get = heights.get(key)) !== null && _heights$get !== void 0 ? _heights$get : itemHeight;
        bottomList[i] = (bottomList[i - 1] || 0) + cacheHeight;
        if (key === startKey) {
          startIndex = i;
        }
        if (key === endKey) {
          endIndex = i;
        }
        if (startIndex !== undefined && endIndex !== undefined) {
          break;
        }
      }
    }
    return {
      top: bottomList[startIndex - 1] || 0,
      bottom: bottomList[endIndex]
    };
  };
  return getSize;
}

var _excluded$4 = ["prefixCls", "className", "height", "itemHeight", "fullHeight", "style", "data", "children", "itemKey", "virtual", "direction", "scrollWidth", "component", "onScroll", "onVirtualScroll", "onVisibleChange", "innerProps", "extraRender"];
var EMPTY_DATA = [];
var ScrollStyle = {
  overflowY: 'auto',
  overflowAnchor: 'none'
};
function RawList(props, ref) {
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-virtual-list' : _props$prefixCls,
    className = props.className,
    height = props.height,
    itemHeight = props.itemHeight,
    _props$fullHeight = props.fullHeight,
    fullHeight = _props$fullHeight === void 0 ? true : _props$fullHeight,
    style = props.style,
    data = props.data,
    children = props.children,
    itemKey = props.itemKey,
    virtual = props.virtual,
    direction = props.direction,
    scrollWidth = props.scrollWidth,
    _props$component = props.component,
    Component = _props$component === void 0 ? 'div' : _props$component,
    onScroll = props.onScroll,
    onVirtualScroll = props.onVirtualScroll,
    onVisibleChange = props.onVisibleChange,
    innerProps = props.innerProps,
    extraRender = props.extraRender,
    restProps = _objectWithoutProperties(props, _excluded$4);
  // ================================= MISC =================================
  var useVirtual = !!(virtual !== false && height && itemHeight);
  var inVirtual = useVirtual && data && (itemHeight * data.length > height || !!scrollWidth);
  var isRTL = direction === 'rtl';
  var mergedClassName = classNames(prefixCls, _defineProperty({}, "".concat(prefixCls, "-rtl"), isRTL), className);
  var mergedData = data || EMPTY_DATA;
  var componentRef = useRef();
  var fillerInnerRef = useRef();
  // =============================== Item Key ===============================
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    offsetTop = _useState2[0],
    setOffsetTop = _useState2[1];
  var _useState3 = useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    offsetLeft = _useState4[0],
    setOffsetLeft = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    scrollMoving = _useState6[0],
    setScrollMoving = _useState6[1];
  var onScrollbarStartMove = function onScrollbarStartMove() {
    setScrollMoving(true);
  };
  var onScrollbarStopMove = function onScrollbarStopMove() {
    setScrollMoving(false);
  };
  // =============================== Item Key ===============================
  var getKey = React.useCallback(function (item) {
    if (typeof itemKey === 'function') {
      return itemKey(item);
    }
    return item === null || item === void 0 ? void 0 : item[itemKey];
  }, [itemKey]);
  var sharedConfig = {
    getKey: getKey
  };
  // ================================ Scroll ================================
  function syncScrollTop(newTop) {
    setOffsetTop(function (origin) {
      var value;
      if (typeof newTop === 'function') {
        value = newTop(origin);
      } else {
        value = newTop;
      }
      var alignedTop = keepInRange(value);
      componentRef.current.scrollTop = alignedTop;
      return alignedTop;
    });
  }
  // ================================ Legacy ================================
  // Put ref here since the range is generate by follow
  var rangeRef = useRef({
    start: 0,
    end: mergedData.length
  });
  var diffItemRef = useRef();
  var _useDiffItem = useDiffItem(mergedData, getKey),
    _useDiffItem2 = _slicedToArray(_useDiffItem, 1),
    diffItem = _useDiffItem2[0];
  diffItemRef.current = diffItem;
  // ================================ Height ================================
  var _useHeights = useHeights(getKey, null, null),
    _useHeights2 = _slicedToArray(_useHeights, 4),
    setInstanceRef = _useHeights2[0],
    collectHeight = _useHeights2[1],
    heights = _useHeights2[2],
    heightUpdatedMark = _useHeights2[3];
  // ========================== Visible Calculation =========================
  var _React$useMemo = React.useMemo(function () {
      if (!useVirtual) {
        return {
          scrollHeight: undefined,
          start: 0,
          end: mergedData.length - 1,
          offset: undefined
        };
      }
      // Always use virtual scroll bar in avoid shaking
      if (!inVirtual) {
        var _fillerInnerRef$curre;
        return {
          scrollHeight: ((_fillerInnerRef$curre = fillerInnerRef.current) === null || _fillerInnerRef$curre === void 0 ? void 0 : _fillerInnerRef$curre.offsetHeight) || 0,
          start: 0,
          end: mergedData.length - 1,
          offset: undefined
        };
      }
      var itemTop = 0;
      var startIndex;
      var startOffset;
      var endIndex;
      var dataLen = mergedData.length;
      for (var i = 0; i < dataLen; i += 1) {
        var item = mergedData[i];
        var key = getKey(item);
        var cacheHeight = heights.get(key);
        var currentItemBottom = itemTop + (cacheHeight === undefined ? itemHeight : cacheHeight);
        // Check item top in the range
        if (currentItemBottom >= offsetTop && startIndex === undefined) {
          startIndex = i;
          startOffset = itemTop;
        }
        // Check item bottom in the range. We will render additional one item for motion usage
        if (currentItemBottom > offsetTop + height && endIndex === undefined) {
          endIndex = i;
        }
        itemTop = currentItemBottom;
      }
      // When scrollTop at the end but data cut to small count will reach this
      if (startIndex === undefined) {
        startIndex = 0;
        startOffset = 0;
        endIndex = Math.ceil(height / itemHeight);
      }
      if (endIndex === undefined) {
        endIndex = mergedData.length - 1;
      }
      // Give cache to improve scroll experience
      endIndex = Math.min(endIndex + 1, mergedData.length - 1);
      return {
        scrollHeight: itemTop,
        start: startIndex,
        end: endIndex,
        offset: startOffset
      };
    }, [inVirtual, useVirtual, offsetTop, mergedData, heightUpdatedMark, height]),
    scrollHeight = _React$useMemo.scrollHeight,
    start = _React$useMemo.start,
    end = _React$useMemo.end,
    fillerOffset = _React$useMemo.offset;
  rangeRef.current.start = start;
  rangeRef.current.end = end;
  // ================================= Size =================================
  var _React$useState = React.useState({
      width: 0,
      height: height
    }),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    size = _React$useState2[0],
    setSize = _React$useState2[1];
  var onHolderResize = function onHolderResize(sizeInfo) {
    setSize(sizeInfo);
  };
  // Hack on scrollbar to enable flash call
  var verticalScrollBarRef = useRef();
  var horizontalScrollBarRef = useRef();
  var horizontalScrollBarSpinSize = React.useMemo(function () {
    return getSpinSize(size.width, scrollWidth);
  }, [size.width, scrollWidth]);
  var verticalScrollBarSpinSize = React.useMemo(function () {
    return getSpinSize(size.height, scrollHeight);
  }, [size.height, scrollHeight]);
  // =============================== In Range ===============================
  var maxScrollHeight = scrollHeight - height;
  var maxScrollHeightRef = useRef(maxScrollHeight);
  maxScrollHeightRef.current = maxScrollHeight;
  function keepInRange(newScrollTop) {
    var newTop = newScrollTop;
    if (!Number.isNaN(maxScrollHeightRef.current)) {
      newTop = Math.min(newTop, maxScrollHeightRef.current);
    }
    newTop = Math.max(newTop, 0);
    return newTop;
  }
  var isScrollAtTop = offsetTop <= 0;
  var isScrollAtBottom = offsetTop >= maxScrollHeight;
  var originScroll = useOriginScroll(isScrollAtTop, isScrollAtBottom);
  // ================================ Scroll ================================
  var getVirtualScrollInfo = function getVirtualScrollInfo() {
    return {
      x: isRTL ? -offsetLeft : offsetLeft,
      y: offsetTop
    };
  };
  var lastVirtualScrollInfoRef = useRef(getVirtualScrollInfo());
  var triggerScroll = useEvent(function () {
    if (onVirtualScroll) {
      var nextInfo = getVirtualScrollInfo();
      // Trigger when offset changed
      if (lastVirtualScrollInfoRef.current.x !== nextInfo.x || lastVirtualScrollInfoRef.current.y !== nextInfo.y) {
        onVirtualScroll(nextInfo);
        lastVirtualScrollInfoRef.current = nextInfo;
      }
    }
  });
  function onScrollBar(newScrollOffset, horizontal) {
    var newOffset = newScrollOffset;
    if (horizontal) {
      flushSync(function () {
        setOffsetLeft(newOffset);
      });
      triggerScroll();
    } else {
      syncScrollTop(newOffset);
    }
  }
  // When data size reduce. It may trigger native scroll event back to fit scroll position
  function onFallbackScroll(e) {
    var newScrollTop = e.currentTarget.scrollTop;
    if (newScrollTop !== offsetTop) {
      syncScrollTop(newScrollTop);
    }
    // Trigger origin onScroll
    onScroll === null || onScroll === void 0 ? void 0 : onScroll(e);
    triggerScroll();
  }
  var keepInHorizontalRange = function keepInHorizontalRange(nextOffsetLeft) {
    var tmpOffsetLeft = nextOffsetLeft;
    var max = scrollWidth - size.width;
    tmpOffsetLeft = Math.max(tmpOffsetLeft, 0);
    tmpOffsetLeft = Math.min(tmpOffsetLeft, max);
    return tmpOffsetLeft;
  };
  var onWheelDelta = useEvent(function (offsetXY, fromHorizontal) {
    if (fromHorizontal) {
      // Horizontal scroll no need sync virtual position
      flushSync(function () {
        setOffsetLeft(function (left) {
          var nextOffsetLeft = left + (isRTL ? -offsetXY : offsetXY);
          return keepInHorizontalRange(nextOffsetLeft);
        });
      });
      triggerScroll();
    } else {
      syncScrollTop(function (top) {
        var newTop = top + offsetXY;
        return newTop;
      });
    }
  });
  // Since this added in global,should use ref to keep update
  var _useFrameWheel = useFrameWheel(useVirtual, isScrollAtTop, isScrollAtBottom, !!scrollWidth, onWheelDelta),
    _useFrameWheel2 = _slicedToArray(_useFrameWheel, 2),
    onRawWheel = _useFrameWheel2[0],
    onFireFoxScroll = _useFrameWheel2[1];
  // Mobile touch move
  useMobileTouchMove(useVirtual, componentRef, function (deltaY, smoothOffset) {
    if (originScroll(deltaY, smoothOffset)) {
      return false;
    }
    onRawWheel({
      preventDefault: function preventDefault() {},
      deltaY: deltaY
    });
    return true;
  });
  useLayoutEffect$1(function () {
    // Firefox only
    function onMozMousePixelScroll(e) {
      if (useVirtual) {
        e.preventDefault();
      }
    }
    var componentEle = componentRef.current;
    componentEle.addEventListener('wheel', onRawWheel);
    componentEle.addEventListener('DOMMouseScroll', onFireFoxScroll);
    componentEle.addEventListener('MozMousePixelScroll', onMozMousePixelScroll);
    return function () {
      componentEle.removeEventListener('wheel', onRawWheel);
      componentEle.removeEventListener('DOMMouseScroll', onFireFoxScroll);
      componentEle.removeEventListener('MozMousePixelScroll', onMozMousePixelScroll);
    };
  }, [useVirtual]);
  // ================================= Ref ==================================
  var delayHideScrollBar = function delayHideScrollBar() {
    var _verticalScrollBarRef, _horizontalScrollBarR;
    (_verticalScrollBarRef = verticalScrollBarRef.current) === null || _verticalScrollBarRef === void 0 ? void 0 : _verticalScrollBarRef.delayHidden();
    (_horizontalScrollBarR = horizontalScrollBarRef.current) === null || _horizontalScrollBarR === void 0 ? void 0 : _horizontalScrollBarR.delayHidden();
  };
  var _scrollTo = useScrollTo(componentRef, mergedData, heights, itemHeight, getKey, collectHeight, syncScrollTop, delayHideScrollBar);
  React.useImperativeHandle(ref, function () {
    return {
      getScrollInfo: getVirtualScrollInfo,
      scrollTo: function scrollTo(config) {
        function isPosScroll(arg) {
          return arg && _typeof(arg) === 'object' && ('left' in arg || 'top' in arg);
        }
        if (isPosScroll(config)) {
          // Scroll X
          if (config.left !== undefined) {
            setOffsetLeft(keepInHorizontalRange(config.left));
          }
          // Scroll Y
          _scrollTo(config.top);
        } else {
          _scrollTo(config);
        }
      }
    };
  });
  // ================================ Effect ================================
  /** We need told outside that some list not rendered */
  useLayoutEffect$1(function () {
    if (onVisibleChange) {
      var renderList = mergedData.slice(start, end + 1);
      onVisibleChange(renderList, mergedData);
    }
  }, [start, end, mergedData]);
  // ================================ Extra =================================
  var getSize = useGetSize(mergedData, getKey, heights, itemHeight);
  var extraContent = extraRender === null || extraRender === void 0 ? void 0 : extraRender({
    start: start,
    end: end,
    virtual: inVirtual,
    offsetX: offsetLeft,
    offsetY: fillerOffset,
    rtl: isRTL,
    getSize: getSize
  });
  // ================================ Render ================================
  var listChildren = useChildren(mergedData, start, end, scrollWidth, setInstanceRef, children, sharedConfig);
  var componentStyle = null;
  if (height) {
    componentStyle = _objectSpread2(_defineProperty({}, fullHeight ? 'height' : 'maxHeight', height), ScrollStyle);
    if (useVirtual) {
      componentStyle.overflowY = 'hidden';
      if (scrollWidth) {
        componentStyle.overflowX = 'hidden';
      }
      if (scrollMoving) {
        componentStyle.pointerEvents = 'none';
      }
    }
  }
  var containerProps = {};
  if (isRTL) {
    containerProps.dir = 'rtl';
  }
  return /*#__PURE__*/React.createElement("div", _extends$1({
    style: _objectSpread2(_objectSpread2({}, style), {}, {
      position: 'relative'
    }),
    className: mergedClassName
  }, containerProps, restProps), /*#__PURE__*/React.createElement(RefResizeObserver, {
    onResize: onHolderResize
  }, /*#__PURE__*/React.createElement(Component, {
    className: "".concat(prefixCls, "-holder"),
    style: componentStyle,
    ref: componentRef,
    onScroll: onFallbackScroll,
    onMouseEnter: delayHideScrollBar
  }, /*#__PURE__*/React.createElement(Filler, {
    prefixCls: prefixCls,
    height: scrollHeight,
    offsetX: offsetLeft,
    offsetY: fillerOffset,
    scrollWidth: scrollWidth,
    onInnerResize: collectHeight,
    ref: fillerInnerRef,
    innerProps: innerProps,
    rtl: isRTL,
    extra: extraContent
  }, listChildren))), inVirtual && scrollHeight > height && /*#__PURE__*/React.createElement(ScrollBar, {
    ref: verticalScrollBarRef,
    prefixCls: prefixCls,
    scrollOffset: offsetTop,
    scrollRange: scrollHeight,
    rtl: isRTL,
    onScroll: onScrollBar,
    onStartMove: onScrollbarStartMove,
    onStopMove: onScrollbarStopMove,
    spinSize: verticalScrollBarSpinSize,
    containerSize: size.height
  }), inVirtual && scrollWidth && /*#__PURE__*/React.createElement(ScrollBar, {
    ref: horizontalScrollBarRef,
    prefixCls: prefixCls,
    scrollOffset: offsetLeft,
    scrollRange: scrollWidth,
    rtl: isRTL,
    onScroll: onScrollBar,
    onStartMove: onScrollbarStartMove,
    onStopMove: onScrollbarStopMove,
    spinSize: horizontalScrollBarSpinSize,
    containerSize: size.width,
    horizontal: true
  }));
}
var List = /*#__PURE__*/React.forwardRef(RawList);
List.displayName = 'List';

// Use any here since we do not get the type during compilation

var SelectContext = /*#__PURE__*/React.createContext(null);

/* istanbul ignore file */
function isPlatformMac() {
  return /(mac\sos|macintosh)/i.test(navigator.appVersion);
}

var _excluded$3 = ["disabled", "title", "children", "style", "className"];

// export interface OptionListProps<OptionsType extends object[]> {

function isTitleType(content) {
  return typeof content === 'string' || typeof content === 'number';
}

/**
 * Using virtual list of option display.
 * Will fallback to dom if use customize render.
 */
var OptionList = function OptionList(_, ref) {
  var _useBaseProps = useBaseProps(),
    prefixCls = _useBaseProps.prefixCls,
    id = _useBaseProps.id,
    open = _useBaseProps.open,
    multiple = _useBaseProps.multiple,
    mode = _useBaseProps.mode,
    searchValue = _useBaseProps.searchValue,
    toggleOpen = _useBaseProps.toggleOpen,
    notFoundContent = _useBaseProps.notFoundContent,
    onPopupScroll = _useBaseProps.onPopupScroll;
  var _React$useContext = React.useContext(SelectContext),
    flattenOptions = _React$useContext.flattenOptions,
    onActiveValue = _React$useContext.onActiveValue,
    defaultActiveFirstOption = _React$useContext.defaultActiveFirstOption,
    onSelect = _React$useContext.onSelect,
    menuItemSelectedIcon = _React$useContext.menuItemSelectedIcon,
    rawValues = _React$useContext.rawValues,
    fieldNames = _React$useContext.fieldNames,
    virtual = _React$useContext.virtual,
    direction = _React$useContext.direction,
    listHeight = _React$useContext.listHeight,
    listItemHeight = _React$useContext.listItemHeight;
  var itemPrefixCls = "".concat(prefixCls, "-item");
  var memoFlattenOptions = useMemo(function () {
    return flattenOptions;
  }, [open, flattenOptions], function (prev, next) {
    return next[0] && prev[1] !== next[1];
  });

  // =========================== List ===========================
  var listRef = React.useRef(null);
  var onListMouseDown = function onListMouseDown(event) {
    event.preventDefault();
  };
  var scrollIntoView = function scrollIntoView(args) {
    if (listRef.current) {
      listRef.current.scrollTo(typeof args === 'number' ? {
        index: args
      } : args);
    }
  };

  // ========================== Active ==========================
  var getEnabledActiveIndex = function getEnabledActiveIndex(index) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var len = memoFlattenOptions.length;
    for (var i = 0; i < len; i += 1) {
      var current = (index + i * offset + len) % len;
      var _memoFlattenOptions$c = memoFlattenOptions[current],
        group = _memoFlattenOptions$c.group,
        data = _memoFlattenOptions$c.data;
      if (!group && !data.disabled) {
        return current;
      }
    }
    return -1;
  };
  var _React$useState = React.useState(function () {
      return getEnabledActiveIndex(0);
    }),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    activeIndex = _React$useState2[0],
    setActiveIndex = _React$useState2[1];
  var setActive = function setActive(index) {
    var fromKeyboard = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    setActiveIndex(index);
    var info = {
      source: fromKeyboard ? 'keyboard' : 'mouse'
    };

    // Trigger active event
    var flattenItem = memoFlattenOptions[index];
    if (!flattenItem) {
      onActiveValue(null, -1, info);
      return;
    }
    onActiveValue(flattenItem.value, index, info);
  };

  // Auto active first item when list length or searchValue changed
  useEffect(function () {
    setActive(defaultActiveFirstOption !== false ? getEnabledActiveIndex(0) : -1);
  }, [memoFlattenOptions.length, searchValue]);

  // https://github.com/ant-design/ant-design/issues/34975
  var isSelected = React.useCallback(function (value) {
    return rawValues.has(value) && mode !== 'combobox';
  }, [mode, _toConsumableArray(rawValues).toString(), rawValues.size]);

  // Auto scroll to item position in single mode
  useEffect(function () {
    /**
     * React will skip `onChange` when component update.
     * `setActive` function will call root accessibility state update which makes re-render.
     * So we need to delay to let Input component trigger onChange first.
     */
    var timeoutId = setTimeout(function () {
      if (!multiple && open && rawValues.size === 1) {
        var value = Array.from(rawValues)[0];
        var index = memoFlattenOptions.findIndex(function (_ref) {
          var data = _ref.data;
          return data.value === value;
        });
        if (index !== -1) {
          setActive(index);
          scrollIntoView(index);
        }
      }
    });

    // Force trigger scrollbar visible when open
    if (open) {
      var _listRef$current;
      (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.scrollTo(undefined);
    }
    return function () {
      return clearTimeout(timeoutId);
    };
  }, [open, searchValue, flattenOptions.length]);

  // ========================== Values ==========================
  var onSelectValue = function onSelectValue(value) {
    if (value !== undefined) {
      onSelect(value, {
        selected: !rawValues.has(value)
      });
    }

    // Single mode should always close by select
    if (!multiple) {
      toggleOpen(false);
    }
  };

  // ========================= Keyboard =========================
  React.useImperativeHandle(ref, function () {
    return {
      onKeyDown: function onKeyDown(event) {
        var which = event.which,
          ctrlKey = event.ctrlKey;
        switch (which) {
          // >>> Arrow keys & ctrl + n/p on Mac
          case KeyCode.N:
          case KeyCode.P:
          case KeyCode.UP:
          case KeyCode.DOWN:
            {
              var offset = 0;
              if (which === KeyCode.UP) {
                offset = -1;
              } else if (which === KeyCode.DOWN) {
                offset = 1;
              } else if (isPlatformMac() && ctrlKey) {
                if (which === KeyCode.N) {
                  offset = 1;
                } else if (which === KeyCode.P) {
                  offset = -1;
                }
              }
              if (offset !== 0) {
                var nextActiveIndex = getEnabledActiveIndex(activeIndex + offset, offset);
                scrollIntoView(nextActiveIndex);
                setActive(nextActiveIndex, true);
              }
              break;
            }

          // >>> Select
          case KeyCode.ENTER:
            {
              // value
              var item = memoFlattenOptions[activeIndex];
              if (item && !item.data.disabled) {
                onSelectValue(item.value);
              } else {
                onSelectValue(undefined);
              }
              if (open) {
                event.preventDefault();
              }
              break;
            }

          // >>> Close
          case KeyCode.ESC:
            {
              toggleOpen(false);
              if (open) {
                event.stopPropagation();
              }
            }
        }
      },
      onKeyUp: function onKeyUp() {},
      scrollTo: function scrollTo(index) {
        scrollIntoView(index);
      }
    };
  });

  // ========================== Render ==========================
  if (memoFlattenOptions.length === 0) {
    return /*#__PURE__*/React.createElement("div", {
      role: "listbox",
      id: "".concat(id, "_list"),
      className: "".concat(itemPrefixCls, "-empty"),
      onMouseDown: onListMouseDown
    }, notFoundContent);
  }
  var omitFieldNameList = Object.keys(fieldNames).map(function (key) {
    return fieldNames[key];
  });
  var getLabel = function getLabel(item) {
    return item.label;
  };
  function getItemAriaProps(item, index) {
    var group = item.group;
    return {
      role: group ? 'presentation' : 'option',
      id: "".concat(id, "_list_").concat(index)
    };
  }
  var renderItem = function renderItem(index) {
    var item = memoFlattenOptions[index];
    if (!item) return null;
    var itemData = item.data || {};
    var value = itemData.value;
    var group = item.group;
    var attrs = pickAttrs(itemData, true);
    var mergedLabel = getLabel(item);
    return item ? /*#__PURE__*/React.createElement("div", _extends$1({
      "aria-label": typeof mergedLabel === 'string' && !group ? mergedLabel : null
    }, attrs, {
      key: index
    }, getItemAriaProps(item, index), {
      "aria-selected": isSelected(value)
    }), value) : null;
  };
  var a11yProps = {
    role: 'listbox',
    id: "".concat(id, "_list")
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, virtual && /*#__PURE__*/React.createElement("div", _extends$1({}, a11yProps, {
    style: {
      height: 0,
      width: 0,
      overflow: 'hidden'
    }
  }), renderItem(activeIndex - 1), renderItem(activeIndex), renderItem(activeIndex + 1)), /*#__PURE__*/React.createElement(List, {
    itemKey: "key",
    ref: listRef,
    data: memoFlattenOptions,
    height: listHeight,
    itemHeight: listItemHeight,
    fullHeight: false,
    onMouseDown: onListMouseDown,
    onScroll: onPopupScroll,
    virtual: virtual,
    direction: direction,
    innerProps: virtual ? null : a11yProps
  }, function (item, itemIndex) {
    var _classNames;
    var group = item.group,
      groupOption = item.groupOption,
      data = item.data,
      label = item.label,
      value = item.value;
    var key = data.key;

    // Group
    if (group) {
      var _data$title;
      var groupTitle = (_data$title = data.title) !== null && _data$title !== void 0 ? _data$title : isTitleType(label) ? label.toString() : undefined;
      return /*#__PURE__*/React.createElement("div", {
        className: classNames(itemPrefixCls, "".concat(itemPrefixCls, "-group")),
        title: groupTitle
      }, label !== undefined ? label : key);
    }
    var disabled = data.disabled,
      title = data.title;
      data.children;
      var style = data.style,
      className = data.className,
      otherProps = _objectWithoutProperties(data, _excluded$3);
    var passedProps = omit(otherProps, omitFieldNameList);

    // Option
    var selected = isSelected(value);
    var optionPrefixCls = "".concat(itemPrefixCls, "-option");
    var optionClassName = classNames(itemPrefixCls, optionPrefixCls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(optionPrefixCls, "-grouped"), groupOption), _defineProperty(_classNames, "".concat(optionPrefixCls, "-active"), activeIndex === itemIndex && !disabled), _defineProperty(_classNames, "".concat(optionPrefixCls, "-disabled"), disabled), _defineProperty(_classNames, "".concat(optionPrefixCls, "-selected"), selected), _classNames));
    var mergedLabel = getLabel(item);
    var iconVisible = !menuItemSelectedIcon || typeof menuItemSelectedIcon === 'function' || selected;

    // https://github.com/ant-design/ant-design/issues/34145
    var content = typeof mergedLabel === 'number' ? mergedLabel : mergedLabel || value;
    // https://github.com/ant-design/ant-design/issues/26717
    var optionTitle = isTitleType(content) ? content.toString() : undefined;
    if (title !== undefined) {
      optionTitle = title;
    }
    return /*#__PURE__*/React.createElement("div", _extends$1({}, pickAttrs(passedProps), !virtual ? getItemAriaProps(item, itemIndex) : {}, {
      "aria-selected": selected,
      className: optionClassName,
      title: optionTitle,
      onMouseMove: function onMouseMove() {
        if (activeIndex === itemIndex || disabled) {
          return;
        }
        setActive(itemIndex);
      },
      onClick: function onClick() {
        if (!disabled) {
          onSelectValue(value);
        }
      },
      style: style
    }), /*#__PURE__*/React.createElement("div", {
      className: "".concat(optionPrefixCls, "-content")
    }, content), /*#__PURE__*/React.isValidElement(menuItemSelectedIcon) || selected, iconVisible && /*#__PURE__*/React.createElement(TransBtn, {
      className: "".concat(itemPrefixCls, "-option-state"),
      customizeIcon: menuItemSelectedIcon,
      customizeIconProps: {
        isSelected: selected
      }
    }, selected ? '✓' : null));
  }));
};
var RefOptionList = /*#__PURE__*/React.forwardRef(OptionList);
RefOptionList.displayName = 'OptionList';

function warningProps(props) {
  var mode = props.mode,
    options = props.options,
    children = props.children,
    backfill = props.backfill,
    allowClear = props.allowClear,
    placeholder = props.placeholder,
    getInputElement = props.getInputElement,
    showSearch = props.showSearch,
    onSearch = props.onSearch,
    defaultOpen = props.defaultOpen,
    autoFocus = props.autoFocus,
    labelInValue = props.labelInValue,
    value = props.value,
    inputValue = props.inputValue,
    optionLabelProp = props.optionLabelProp;
  var multiple = isMultiple(mode);
  var mergedShowSearch = showSearch !== undefined ? showSearch : multiple || mode === 'combobox';
  var mergedOptions = options || convertChildrenToData(children);

  // `tags` should not set option as disabled
  warningOnce(mode !== 'tags' || mergedOptions.every(function (opt) {
    return !opt.disabled;
  }), 'Please avoid setting option to disabled in tags mode since user can always type text as tag.');

  // `combobox` & `tags` should option be `string` type
  if (mode === 'tags' || mode === 'combobox') {
    var hasNumberValue = mergedOptions.some(function (item) {
      if (item.options) {
        return item.options.some(function (opt) {
          return typeof ('value' in opt ? opt.value : opt.key) === 'number';
        });
      }
      return typeof ('value' in item ? item.value : item.key) === 'number';
    });
    warningOnce(!hasNumberValue, '`value` of Option should not use number type when `mode` is `tags` or `combobox`.');
  }

  // `combobox` should not use `optionLabelProp`
  warningOnce(mode !== 'combobox' || !optionLabelProp, '`combobox` mode not support `optionLabelProp`. Please set `value` on Option directly.');

  // Only `combobox` support `backfill`
  warningOnce(mode === 'combobox' || !backfill, '`backfill` only works with `combobox` mode.');

  // Only `combobox` support `getInputElement`
  warningOnce(mode === 'combobox' || !getInputElement, '`getInputElement` only work with `combobox` mode.');

  // Customize `getInputElement` should not use `allowClear` & `placeholder`
  noteOnce(mode !== 'combobox' || !getInputElement || !allowClear || !placeholder, 'Customize `getInputElement` should customize clear and placeholder logic instead of configuring `allowClear` and `placeholder`.');

  // `onSearch` should use in `combobox` or `showSearch`
  if (onSearch && !mergedShowSearch && mode !== 'combobox' && mode !== 'tags') {
    warningOnce(false, '`onSearch` should work with `showSearch` instead of use alone.');
  }
  noteOnce(!defaultOpen || autoFocus, '`defaultOpen` makes Select open without focus which means it will not close by click outside. You can set `autoFocus` if needed.');
  if (value !== undefined && value !== null) {
    var values = toArray$1(value);
    warningOnce(!labelInValue || values.every(function (val) {
      return _typeof(val) === 'object' && ('key' in val || 'value' in val);
    }), '`value` should in shape of `{ value: string | number, label?: ReactNode }` when you set `labelInValue` to `true`');
    warningOnce(!multiple || Array.isArray(value), '`value` should be array when `mode` is `multiple` or `tags`');
  }

  // Syntactic sugar should use correct children type
  if (children) {
    var invalidateChildType = null;
    toArray$3(children).some(function (node) {
      if (! /*#__PURE__*/React.isValidElement(node) || !node.type) {
        return false;
      }
      var _ref = node,
        type = _ref.type;
      if (type.isSelectOption) {
        return false;
      }
      if (type.isSelectOptGroup) {
        var allChildrenValid = toArray$3(node.props.children).every(function (subNode) {
          if (! /*#__PURE__*/React.isValidElement(subNode) || !node.type || subNode.type.isSelectOption) {
            return true;
          }
          invalidateChildType = subNode.type;
          return false;
        });
        if (allChildrenValid) {
          return false;
        }
        return true;
      }
      invalidateChildType = type;
      return true;
    });
    if (invalidateChildType) {
      warningOnce(false, "`children` should be `Select.Option` or `Select.OptGroup` instead of `".concat(invalidateChildType.displayName || invalidateChildType.name || invalidateChildType, "`."));
    }
    warningOnce(inputValue === undefined, '`inputValue` is deprecated, please use `searchValue` instead.');
  }
}

// value in Select option should not be null
// note: OptGroup has options too
function warningNullOptions(options, fieldNames) {
  if (options) {
    var recursiveOptions = function recursiveOptions(optionsList) {
      var inGroup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      for (var i = 0; i < optionsList.length; i++) {
        var option = optionsList[i];
        if (option[fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.value] === null) {
          warningOnce(false, '`value` in Select options should not be `null`.');
          return true;
        }
        if (!inGroup && Array.isArray(option[fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.options]) && recursiveOptions(option[fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.options], true)) {
          break;
        }
      }
    };
    recursiveOptions(options);
  }
}

var _excluded$2 = ["id", "mode", "prefixCls", "backfill", "fieldNames", "inputValue", "searchValue", "onSearch", "autoClearSearchValue", "onSelect", "onDeselect", "dropdownMatchSelectWidth", "filterOption", "filterSort", "optionFilterProp", "optionLabelProp", "options", "children", "defaultActiveFirstOption", "menuItemSelectedIcon", "virtual", "direction", "listHeight", "listItemHeight", "value", "defaultValue", "labelInValue", "onChange"];
var OMIT_DOM_PROPS = ['inputValue'];
function isRawValue(value) {
  return !value || _typeof(value) !== 'object';
}
var Select$2 = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var id = props.id,
    mode = props.mode,
    _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-select' : _props$prefixCls,
    backfill = props.backfill,
    fieldNames = props.fieldNames,
    inputValue = props.inputValue,
    searchValue = props.searchValue,
    onSearch = props.onSearch,
    _props$autoClearSearc = props.autoClearSearchValue,
    autoClearSearchValue = _props$autoClearSearc === void 0 ? true : _props$autoClearSearc,
    onSelect = props.onSelect,
    onDeselect = props.onDeselect,
    _props$dropdownMatchS = props.dropdownMatchSelectWidth,
    dropdownMatchSelectWidth = _props$dropdownMatchS === void 0 ? true : _props$dropdownMatchS,
    filterOption = props.filterOption,
    filterSort = props.filterSort,
    optionFilterProp = props.optionFilterProp,
    optionLabelProp = props.optionLabelProp,
    options = props.options,
    children = props.children,
    defaultActiveFirstOption = props.defaultActiveFirstOption,
    menuItemSelectedIcon = props.menuItemSelectedIcon,
    virtual = props.virtual,
    direction = props.direction,
    _props$listHeight = props.listHeight,
    listHeight = _props$listHeight === void 0 ? 200 : _props$listHeight,
    _props$listItemHeight = props.listItemHeight,
    listItemHeight = _props$listItemHeight === void 0 ? 20 : _props$listItemHeight,
    value = props.value,
    defaultValue = props.defaultValue,
    labelInValue = props.labelInValue,
    onChange = props.onChange,
    restProps = _objectWithoutProperties(props, _excluded$2);
  var mergedId = useId(id);
  var multiple = isMultiple(mode);
  var childrenAsData = !!(!options && children);
  var mergedFilterOption = React.useMemo(function () {
    if (filterOption === undefined && mode === 'combobox') {
      return false;
    }
    return filterOption;
  }, [filterOption, mode]);

  // ========================= FieldNames =========================
  var mergedFieldNames = React.useMemo(function () {
    return fillFieldNames(fieldNames, childrenAsData);
  }, /* eslint-disable react-hooks/exhaustive-deps */
  [
  // We stringify fieldNames to avoid unnecessary re-renders.
  JSON.stringify(fieldNames), childrenAsData]
  /* eslint-enable react-hooks/exhaustive-deps */);

  // =========================== Search ===========================
  var _useMergedState = useMergedState('', {
      value: searchValue !== undefined ? searchValue : inputValue,
      postState: function postState(search) {
        return search || '';
      }
    }),
    _useMergedState2 = _slicedToArray(_useMergedState, 2),
    mergedSearchValue = _useMergedState2[0],
    setSearchValue = _useMergedState2[1];

  // =========================== Option ===========================
  var parsedOptions = useOptions(options, children, mergedFieldNames, optionFilterProp, optionLabelProp);
  var valueOptions = parsedOptions.valueOptions,
    labelOptions = parsedOptions.labelOptions,
    mergedOptions = parsedOptions.options;

  // ========================= Wrap Value =========================
  var convert2LabelValues = React.useCallback(function (draftValues) {
    // Convert to array
    var valueList = toArray$1(draftValues);

    // Convert to labelInValue type
    return valueList.map(function (val) {
      var rawValue;
      var rawLabel;
      var rawKey;
      var rawDisabled;
      var rawTitle;

      // Fill label & value
      if (isRawValue(val)) {
        rawValue = val;
      } else {
        var _val$value;
        rawKey = val.key;
        rawLabel = val.label;
        rawValue = (_val$value = val.value) !== null && _val$value !== void 0 ? _val$value : rawKey;
      }
      var option = valueOptions.get(rawValue);
      if (option) {
        var _option$key;
        // Fill missing props
        if (rawLabel === undefined) rawLabel = option === null || option === void 0 ? void 0 : option[optionLabelProp || mergedFieldNames.label];
        if (rawKey === undefined) rawKey = (_option$key = option === null || option === void 0 ? void 0 : option.key) !== null && _option$key !== void 0 ? _option$key : rawValue;
        rawDisabled = option === null || option === void 0 ? void 0 : option.disabled;
        rawTitle = option === null || option === void 0 ? void 0 : option.title;

        // Warning if label not same as provided
        if (process.env.NODE_ENV !== 'production' && !optionLabelProp) {
          var optionLabel = option === null || option === void 0 ? void 0 : option[mergedFieldNames.label];
          if (optionLabel !== undefined && ! /*#__PURE__*/React.isValidElement(optionLabel) && ! /*#__PURE__*/React.isValidElement(rawLabel) && optionLabel !== rawLabel) {
            warningOnce(false, '`label` of `value` is not same as `label` in Select options.');
          }
        }
      }
      return {
        label: rawLabel,
        value: rawValue,
        key: rawKey,
        disabled: rawDisabled,
        title: rawTitle
      };
    });
  }, [mergedFieldNames, optionLabelProp, valueOptions]);

  // =========================== Values ===========================
  var _useMergedState3 = useMergedState(defaultValue, {
      value: value
    }),
    _useMergedState4 = _slicedToArray(_useMergedState3, 2),
    internalValue = _useMergedState4[0],
    setInternalValue = _useMergedState4[1];

  // Merged value with LabelValueType
  var rawLabeledValues = React.useMemo(function () {
    var _values$;
    var values = convert2LabelValues(internalValue);

    // combobox no need save value when it's no value (exclude value equal 0)
    if (mode === 'combobox' && isComboNoValue((_values$ = values[0]) === null || _values$ === void 0 ? void 0 : _values$.value)) {
      return [];
    }
    return values;
  }, [internalValue, convert2LabelValues, mode]);

  // Fill label with cache to avoid option remove
  var _useCache = useCache(rawLabeledValues, valueOptions),
    _useCache2 = _slicedToArray(_useCache, 2),
    mergedValues = _useCache2[0],
    getMixedOption = _useCache2[1];
  var displayValues = React.useMemo(function () {
    // `null` need show as placeholder instead
    // https://github.com/ant-design/ant-design/issues/25057
    if (!mode && mergedValues.length === 1) {
      var firstValue = mergedValues[0];
      if (firstValue.value === null && (firstValue.label === null || firstValue.label === undefined)) {
        return [];
      }
    }
    return mergedValues.map(function (item) {
      var _item$label;
      return _objectSpread2(_objectSpread2({}, item), {}, {
        label: (_item$label = item.label) !== null && _item$label !== void 0 ? _item$label : item.value
      });
    });
  }, [mode, mergedValues]);

  /** Convert `displayValues` to raw value type set */
  var rawValues = React.useMemo(function () {
    return new Set(mergedValues.map(function (val) {
      return val.value;
    }));
  }, [mergedValues]);
  React.useEffect(function () {
    if (mode === 'combobox') {
      var _mergedValues$;
      var strValue = (_mergedValues$ = mergedValues[0]) === null || _mergedValues$ === void 0 ? void 0 : _mergedValues$.value;
      setSearchValue(hasValue(strValue) ? String(strValue) : '');
    }
  }, [mergedValues]);

  // ======================= Display Option =======================
  // Create a placeholder item if not exist in `options`
  var createTagOption = useRefFunc(function (val, label) {
    var _ref;
    var mergedLabel = label !== null && label !== void 0 ? label : val;
    return _ref = {}, _defineProperty(_ref, mergedFieldNames.value, val), _defineProperty(_ref, mergedFieldNames.label, mergedLabel), _ref;
  });

  // Fill tag as option if mode is `tags`
  var filledTagOptions = React.useMemo(function () {
    if (mode !== 'tags') {
      return mergedOptions;
    }

    // >>> Tag mode
    var cloneOptions = _toConsumableArray(mergedOptions);

    // Check if value exist in options (include new patch item)
    var existOptions = function existOptions(val) {
      return valueOptions.has(val);
    };

    // Fill current value as option
    _toConsumableArray(mergedValues).sort(function (a, b) {
      return a.value < b.value ? -1 : 1;
    }).forEach(function (item) {
      var val = item.value;
      if (!existOptions(val)) {
        cloneOptions.push(createTagOption(val, item.label));
      }
    });
    return cloneOptions;
  }, [createTagOption, mergedOptions, valueOptions, mergedValues, mode]);
  var filteredOptions = useFilterOptions(filledTagOptions, mergedFieldNames, mergedSearchValue, mergedFilterOption, optionFilterProp);

  // Fill options with search value if needed
  var filledSearchOptions = React.useMemo(function () {
    if (mode !== 'tags' || !mergedSearchValue || filteredOptions.some(function (item) {
      return item[optionFilterProp || 'value'] === mergedSearchValue;
    })) {
      return filteredOptions;
    }
    // ignore when search value equal select input value
    if (filteredOptions.some(function (item) {
      return item[mergedFieldNames.value] === mergedSearchValue;
    })) {
      return filteredOptions;
    }
    // Fill search value as option
    return [createTagOption(mergedSearchValue)].concat(_toConsumableArray(filteredOptions));
  }, [createTagOption, optionFilterProp, mode, filteredOptions, mergedSearchValue, mergedFieldNames]);
  var orderedFilteredOptions = React.useMemo(function () {
    if (!filterSort) {
      return filledSearchOptions;
    }
    return _toConsumableArray(filledSearchOptions).sort(function (a, b) {
      return filterSort(a, b);
    });
  }, [filledSearchOptions, filterSort]);
  var displayOptions = React.useMemo(function () {
    return flattenOptions(orderedFilteredOptions, {
      fieldNames: mergedFieldNames,
      childrenAsData: childrenAsData
    });
  }, [orderedFilteredOptions, mergedFieldNames, childrenAsData]);

  // =========================== Change ===========================
  var triggerChange = function triggerChange(values) {
    var labeledValues = convert2LabelValues(values);
    setInternalValue(labeledValues);
    if (onChange && (
    // Trigger event only when value changed
    labeledValues.length !== mergedValues.length || labeledValues.some(function (newVal, index) {
      var _mergedValues$index;
      return ((_mergedValues$index = mergedValues[index]) === null || _mergedValues$index === void 0 ? void 0 : _mergedValues$index.value) !== (newVal === null || newVal === void 0 ? void 0 : newVal.value);
    }))) {
      var returnValues = labelInValue ? labeledValues : labeledValues.map(function (v) {
        return v.value;
      });
      var returnOptions = labeledValues.map(function (v) {
        return injectPropsWithOption(getMixedOption(v.value));
      });
      onChange(
      // Value
      multiple ? returnValues : returnValues[0],
      // Option
      multiple ? returnOptions : returnOptions[0]);
    }
  };

  // ======================= Accessibility ========================
  var _React$useState = React.useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    activeValue = _React$useState2[0],
    setActiveValue = _React$useState2[1];
  var _React$useState3 = React.useState(0),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    accessibilityIndex = _React$useState4[0],
    setAccessibilityIndex = _React$useState4[1];
  var mergedDefaultActiveFirstOption = defaultActiveFirstOption !== undefined ? defaultActiveFirstOption : mode !== 'combobox';
  var onActiveValue = React.useCallback(function (active, index) {
    var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref2$source = _ref2.source,
      source = _ref2$source === void 0 ? 'keyboard' : _ref2$source;
    setAccessibilityIndex(index);
    if (backfill && mode === 'combobox' && active !== null && source === 'keyboard') {
      setActiveValue(String(active));
    }
  }, [backfill, mode]);

  // ========================= OptionList =========================
  var triggerSelect = function triggerSelect(val, selected, type) {
    var getSelectEnt = function getSelectEnt() {
      var _option$key2;
      var option = getMixedOption(val);
      return [labelInValue ? {
        label: option === null || option === void 0 ? void 0 : option[mergedFieldNames.label],
        value: val,
        key: (_option$key2 = option === null || option === void 0 ? void 0 : option.key) !== null && _option$key2 !== void 0 ? _option$key2 : val
      } : val, injectPropsWithOption(option)];
    };
    if (selected && onSelect) {
      var _getSelectEnt = getSelectEnt(),
        _getSelectEnt2 = _slicedToArray(_getSelectEnt, 2),
        wrappedValue = _getSelectEnt2[0],
        _option = _getSelectEnt2[1];
      onSelect(wrappedValue, _option);
    } else if (!selected && onDeselect && type !== 'clear') {
      var _getSelectEnt3 = getSelectEnt(),
        _getSelectEnt4 = _slicedToArray(_getSelectEnt3, 2),
        _wrappedValue = _getSelectEnt4[0],
        _option2 = _getSelectEnt4[1];
      onDeselect(_wrappedValue, _option2);
    }
  };

  // Used for OptionList selection
  var onInternalSelect = useRefFunc(function (val, info) {
    var cloneValues;

    // Single mode always trigger select only with option list
    var mergedSelect = multiple ? info.selected : true;
    if (mergedSelect) {
      cloneValues = multiple ? [].concat(_toConsumableArray(mergedValues), [val]) : [val];
    } else {
      cloneValues = mergedValues.filter(function (v) {
        return v.value !== val;
      });
    }
    triggerChange(cloneValues);
    triggerSelect(val, mergedSelect);

    // Clean search value if single or configured
    if (mode === 'combobox') {
      // setSearchValue(String(val));
      setActiveValue('');
    } else if (!isMultiple || autoClearSearchValue) {
      setSearchValue('');
      setActiveValue('');
    }
  });

  // ======================= Display Change =======================
  // BaseSelect display values change
  var onDisplayValuesChange = function onDisplayValuesChange(nextValues, info) {
    triggerChange(nextValues);
    var type = info.type,
      values = info.values;
    if (type === 'remove' || type === 'clear') {
      values.forEach(function (item) {
        triggerSelect(item.value, false, type);
      });
    }
  };

  // =========================== Search ===========================
  var onInternalSearch = function onInternalSearch(searchText, info) {
    setSearchValue(searchText);
    setActiveValue(null);

    // [Submit] Tag mode should flush input
    if (info.source === 'submit') {
      var formatted = (searchText || '').trim();
      // prevent empty tags from appearing when you click the Enter button
      if (formatted) {
        var newRawValues = Array.from(new Set([].concat(_toConsumableArray(rawValues), [formatted])));
        triggerChange(newRawValues);
        triggerSelect(formatted, true);
        setSearchValue('');
      }
      return;
    }
    if (info.source !== 'blur') {
      if (mode === 'combobox') {
        triggerChange(searchText);
      }
      onSearch === null || onSearch === void 0 ? void 0 : onSearch(searchText);
    }
  };
  var onInternalSearchSplit = function onInternalSearchSplit(words) {
    var patchValues = words;
    if (mode !== 'tags') {
      patchValues = words.map(function (word) {
        var opt = labelOptions.get(word);
        return opt === null || opt === void 0 ? void 0 : opt.value;
      }).filter(function (val) {
        return val !== undefined;
      });
    }
    var newRawValues = Array.from(new Set([].concat(_toConsumableArray(rawValues), _toConsumableArray(patchValues))));
    triggerChange(newRawValues);
    newRawValues.forEach(function (newRawValue) {
      triggerSelect(newRawValue, true);
    });
  };

  // ========================== Context ===========================
  var selectContext = React.useMemo(function () {
    var realVirtual = virtual !== false && dropdownMatchSelectWidth !== false;
    return _objectSpread2(_objectSpread2({}, parsedOptions), {}, {
      flattenOptions: displayOptions,
      onActiveValue: onActiveValue,
      defaultActiveFirstOption: mergedDefaultActiveFirstOption,
      onSelect: onInternalSelect,
      menuItemSelectedIcon: menuItemSelectedIcon,
      rawValues: rawValues,
      fieldNames: mergedFieldNames,
      virtual: realVirtual,
      direction: direction,
      listHeight: listHeight,
      listItemHeight: listItemHeight,
      childrenAsData: childrenAsData
    });
  }, [parsedOptions, displayOptions, onActiveValue, mergedDefaultActiveFirstOption, onInternalSelect, menuItemSelectedIcon, rawValues, mergedFieldNames, virtual, dropdownMatchSelectWidth, listHeight, listItemHeight, childrenAsData]);

  // ========================== Warning ===========================
  if (process.env.NODE_ENV !== 'production') {
    warningProps(props);
    warningNullOptions(mergedOptions, mergedFieldNames);
  }

  // ==============================================================
  // ==                          Render                          ==
  // ==============================================================
  return /*#__PURE__*/React.createElement(SelectContext.Provider, {
    value: selectContext
  }, /*#__PURE__*/React.createElement(BaseSelect, _extends$1({}, restProps, {
    // >>> MISC
    id: mergedId,
    prefixCls: prefixCls,
    ref: ref,
    omitDomProps: OMIT_DOM_PROPS,
    mode: mode
    // >>> Values
    ,
    displayValues: displayValues,
    onDisplayValuesChange: onDisplayValuesChange
    // >>> Trigger
    ,
    direction: direction
    // >>> Search
    ,
    searchValue: mergedSearchValue,
    onSearch: onInternalSearch,
    autoClearSearchValue: autoClearSearchValue,
    onSearchSplit: onInternalSearchSplit,
    dropdownMatchSelectWidth: dropdownMatchSelectWidth
    // >>> OptionList
    ,
    OptionList: RefOptionList,
    emptyOptions: !displayOptions.length
    // >>> Accessibility
    ,
    activeValue: activeValue,
    activeDescendantId: "".concat(mergedId, "_list_").concat(accessibilityIndex)
  })));
});
if (process.env.NODE_ENV !== 'production') {
  Select$2.displayName = 'Select';
}
var TypedSelect = Select$2;
TypedSelect.Option = Option;
TypedSelect.OptGroup = OptGroup;

function getStatusClassNames(prefixCls, status, hasFeedback) {
  return classNames({
    [`${prefixCls}-status-success`]: status === 'success',
    [`${prefixCls}-status-warning`]: status === 'warning',
    [`${prefixCls}-status-error`]: status === 'error',
    [`${prefixCls}-status-validating`]: status === 'validating',
    [`${prefixCls}-has-feedback`]: hasFeedback
  });
}
const getMergedStatus = (contextStatus, customStatus) => customStatus || contextStatus;

const Empty$2 = () => {
  const [, token] = useToken();
  const bgColor = new TinyColor(token.colorBgBase);
  // Dark Theme need more dark of this
  const themeStyle = bgColor.toHsl().l < 0.5 ? {
    opacity: 0.65
  } : {};
  return /*#__PURE__*/React.createElement("svg", {
    style: themeStyle,
    width: "184",
    height: "152",
    viewBox: "0 0 184 152",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(24 31.67)"
  }, /*#__PURE__*/React.createElement("ellipse", {
    fillOpacity: ".8",
    fill: "#F5F5F7",
    cx: "67.797",
    cy: "106.89",
    rx: "67.797",
    ry: "12.668"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
    fill: "#AEB8C2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
    fill: "url(#linearGradient-1)",
    transform: "translate(13.56)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
    fill: "#F5F5F7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
    fill: "#DCE0E6"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
    fill: "#DCE0E6"
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(149.65 15.383)",
    fill: "#FFF"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "20.654",
    cy: "3.167",
    rx: "2.849",
    ry: "2.815"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
  }))));
};
if (process.env.NODE_ENV !== 'production') {
  Empty$2.displayName = 'EmptyImage';
}
var DefaultEmptyImg = Empty$2;

const Simple = () => {
  const [, token] = useToken();
  const {
    colorFill,
    colorFillTertiary,
    colorFillQuaternary,
    colorBgContainer
  } = token;
  const {
    borderColor,
    shadowColor,
    contentColor
  } = useMemo$1(() => ({
    borderColor: new TinyColor(colorFill).onBackground(colorBgContainer).toHexShortString(),
    shadowColor: new TinyColor(colorFillTertiary).onBackground(colorBgContainer).toHexShortString(),
    contentColor: new TinyColor(colorFillQuaternary).onBackground(colorBgContainer).toHexShortString()
  }), [colorFill, colorFillTertiary, colorFillQuaternary, colorBgContainer]);
  return /*#__PURE__*/React.createElement("svg", {
    width: "64",
    height: "41",
    viewBox: "0 0 64 41",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(0 1)",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("ellipse", {
    fill: shadowColor,
    cx: "32",
    cy: "33",
    rx: "32",
    ry: "7"
  }), /*#__PURE__*/React.createElement("g", {
    fillRule: "nonzero",
    stroke: borderColor
  }, /*#__PURE__*/React.createElement("path", {
    d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
    fill: contentColor
  }))));
};
if (process.env.NODE_ENV !== 'production') {
  Simple.displayName = 'SimpleImage';
}
var SimpleEmptyImg = Simple;

// ============================== Shared ==============================
const genSharedEmptyStyle = token => {
  const {
    componentCls,
    margin,
    marginXS,
    marginXL,
    fontSize,
    lineHeight
  } = token;
  return {
    [componentCls]: {
      marginInline: marginXS,
      fontSize,
      lineHeight,
      textAlign: 'center',
      // 原来 &-image 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
      [`${componentCls}-image`]: {
        height: token.emptyImgHeight,
        marginBottom: marginXS,
        opacity: token.opacityImage,
        img: {
          height: '100%'
        },
        svg: {
          maxWidth: '100%',
          height: '100%',
          margin: 'auto'
        }
      },
      [`${componentCls}-description`]: {
        color: token.colorText
      },
      // 原来 &-footer 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
      [`${componentCls}-footer`]: {
        marginTop: margin
      },
      '&-normal': {
        marginBlock: marginXL,
        color: token.colorTextDisabled,
        [`${componentCls}-description`]: {
          color: token.colorTextDisabled
        },
        [`${componentCls}-image`]: {
          height: token.emptyImgHeightMD
        }
      },
      '&-small': {
        marginBlock: marginXS,
        color: token.colorTextDisabled,
        [`${componentCls}-image`]: {
          height: token.emptyImgHeightSM
        }
      }
    }
  };
};
// ============================== Export ==============================
var useStyle$3 = genComponentStyleHook('Empty', token => {
  const {
    componentCls,
    controlHeightLG
  } = token;
  const emptyToken = merge(token, {
    emptyImgCls: `${componentCls}-img`,
    emptyImgHeight: controlHeightLG * 2.5,
    emptyImgHeightMD: controlHeightLG,
    emptyImgHeightSM: controlHeightLG * 0.875
  });
  return [genSharedEmptyStyle(emptyToken)];
});

var __rest$7 = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const defaultEmptyImg = /*#__PURE__*/React.createElement(DefaultEmptyImg, null);
const simpleEmptyImg = /*#__PURE__*/React.createElement(SimpleEmptyImg, null);
const Empty = _a => {
  var {
      className,
      rootClassName,
      prefixCls: customizePrefixCls,
      image = defaultEmptyImg,
      description,
      children,
      imageStyle,
      style
    } = _a,
    restProps = __rest$7(_a, ["className", "rootClassName", "prefixCls", "image", "description", "children", "imageStyle", "style"]);
  const {
    getPrefixCls,
    direction,
    empty
  } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('empty', customizePrefixCls);
  const [wrapSSR, hashId] = useStyle$3(prefixCls);
  const [locale] = useLocale$1('Empty');
  const des = typeof description !== 'undefined' ? description : locale === null || locale === void 0 ? void 0 : locale.description;
  const alt = typeof des === 'string' ? des : 'empty';
  let imageNode = null;
  if (typeof image === 'string') {
    imageNode = /*#__PURE__*/React.createElement("img", {
      alt: alt,
      src: image
    });
  } else {
    imageNode = image;
  }
  return wrapSSR( /*#__PURE__*/React.createElement("div", Object.assign({
    className: classNames(hashId, prefixCls, empty === null || empty === void 0 ? void 0 : empty.className, {
      [`${prefixCls}-normal`]: image === simpleEmptyImg,
      [`${prefixCls}-rtl`]: direction === 'rtl'
    }, className, rootClassName),
    style: Object.assign(Object.assign({}, empty === null || empty === void 0 ? void 0 : empty.style), style)
  }, restProps), /*#__PURE__*/React.createElement("div", {
    className: `${prefixCls}-image`,
    style: imageStyle
  }, imageNode), des && /*#__PURE__*/React.createElement("div", {
    className: `${prefixCls}-description`
  }, des), children && /*#__PURE__*/React.createElement("div", {
    className: `${prefixCls}-footer`
  }, children)));
};
Empty.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
Empty.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;
if (process.env.NODE_ENV !== 'production') {
  Empty.displayName = 'Empty';
}
var Empty$1 = Empty;

const DefaultRenderEmpty = props => {
  const {
    componentName
  } = props;
  const {
    getPrefixCls
  } = useContext(ConfigContext);
  const prefix = getPrefixCls('empty');
  switch (componentName) {
    case 'Table':
    case 'List':
      return /*#__PURE__*/React__default.createElement(Empty$1, {
        image: Empty$1.PRESENTED_IMAGE_SIMPLE
      });
    case 'Select':
    case 'TreeSelect':
    case 'Cascader':
    case 'Transfer':
    case 'Mentions':
      return /*#__PURE__*/React__default.createElement(Empty$1, {
        image: Empty$1.PRESENTED_IMAGE_SIMPLE,
        className: `${prefix}-small`
      });
    /* istanbul ignore next */
    default:
      // Should never hit if we take all the component into consider.
      return /*#__PURE__*/React__default.createElement(Empty$1, null);
  }
};
var DefaultRenderEmpty$1 = DefaultRenderEmpty;

const genItemStyle = token => {
  const {
    optionHeight,
    optionFontSize,
    optionLineHeight,
    optionPadding
  } = token;
  return {
    position: 'relative',
    display: 'block',
    minHeight: optionHeight,
    padding: optionPadding,
    color: token.colorText,
    fontWeight: 'normal',
    fontSize: optionFontSize,
    lineHeight: optionLineHeight,
    boxSizing: 'border-box'
  };
};
const genSingleStyle$1 = token => {
  const {
    antCls,
    componentCls
  } = token;
  const selectItemCls = `${componentCls}-item`;
  const slideUpEnterActive = `&${antCls}-slide-up-enter${antCls}-slide-up-enter-active`;
  const slideUpAppearActive = `&${antCls}-slide-up-appear${antCls}-slide-up-appear-active`;
  const slideUpLeaveActive = `&${antCls}-slide-up-leave${antCls}-slide-up-leave-active`;
  const dropdownPlacementCls = `${componentCls}-dropdown-placement-`;
  return [{
    [`${componentCls}-dropdown`]: Object.assign(Object.assign({}, resetComponent(token)), {
      position: 'absolute',
      top: -9999,
      zIndex: token.zIndexPopup,
      boxSizing: 'border-box',
      padding: token.paddingXXS,
      overflow: 'hidden',
      fontSize: token.fontSize,
      // Fix select render lag of long text in chrome
      // https://github.com/ant-design/ant-design/issues/11456
      // https://github.com/ant-design/ant-design/issues/11843
      fontVariant: 'initial',
      backgroundColor: token.colorBgElevated,
      borderRadius: token.borderRadiusLG,
      outline: 'none',
      boxShadow: token.boxShadowSecondary,
      [`
          ${slideUpEnterActive}${dropdownPlacementCls}bottomLeft,
          ${slideUpAppearActive}${dropdownPlacementCls}bottomLeft
        `]: {
        animationName: slideUpIn
      },
      [`
          ${slideUpEnterActive}${dropdownPlacementCls}topLeft,
          ${slideUpAppearActive}${dropdownPlacementCls}topLeft,
          ${slideUpEnterActive}${dropdownPlacementCls}topRight,
          ${slideUpAppearActive}${dropdownPlacementCls}topRight
        `]: {
        animationName: slideDownIn
      },
      [`${slideUpLeaveActive}${dropdownPlacementCls}bottomLeft`]: {
        animationName: slideUpOut
      },
      [`
          ${slideUpLeaveActive}${dropdownPlacementCls}topLeft,
          ${slideUpLeaveActive}${dropdownPlacementCls}topRight
        `]: {
        animationName: slideDownOut
      },
      '&-hidden': {
        display: 'none'
      },
      [`${selectItemCls}`]: Object.assign(Object.assign({}, genItemStyle(token)), {
        cursor: 'pointer',
        transition: `background ${token.motionDurationSlow} ease`,
        borderRadius: token.borderRadiusSM,
        // =========== Group ============
        '&-group': {
          color: token.colorTextDescription,
          fontSize: token.fontSizeSM,
          cursor: 'default'
        },
        // =========== Option ===========
        '&-option': {
          display: 'flex',
          '&-content': Object.assign({
            flex: 'auto'
          }, textEllipsis),
          '&-state': {
            flex: 'none',
            display: 'flex',
            alignItems: 'center'
          },
          [`&-active:not(${selectItemCls}-option-disabled)`]: {
            backgroundColor: token.optionActiveBg
          },
          [`&-selected:not(${selectItemCls}-option-disabled)`]: {
            color: token.optionSelectedColor,
            fontWeight: token.optionSelectedFontWeight,
            backgroundColor: token.optionSelectedBg,
            [`${selectItemCls}-option-state`]: {
              color: token.colorPrimary
            }
          },
          '&-disabled': {
            [`&${selectItemCls}-option-selected`]: {
              backgroundColor: token.colorBgContainerDisabled
            },
            color: token.colorTextDisabled,
            cursor: 'not-allowed'
          },
          '&-grouped': {
            paddingInlineStart: token.controlPaddingHorizontal * 2
          }
        }
      }),
      // =========================== RTL ===========================
      '&-rtl': {
        direction: 'rtl'
      }
    })
  },
  // Follow code may reuse in other components
  initSlideMotion(token, 'slide-up'), initSlideMotion(token, 'slide-down'), initMoveMotion(token, 'move-up'), initMoveMotion(token, 'move-down')];
};
var genDropdownStyle = genSingleStyle$1;

const FIXED_ITEM_MARGIN = 2;
const getSelectItemStyle = _ref => {
  let {
    controlHeightSM,
    controlHeight,
    lineWidth: borderWidth
  } = _ref;
  const selectItemDist = (controlHeight - controlHeightSM) / 2 - borderWidth;
  const selectItemMargin = Math.ceil(selectItemDist / 2);
  return [selectItemDist, selectItemMargin];
};
function genSizeStyle$1(token, suffix) {
  const {
    componentCls,
    iconCls
  } = token;
  const selectOverflowPrefixCls = `${componentCls}-selection-overflow`;
  const selectItemHeight = token.multipleSelectItemHeight;
  const [selectItemDist] = getSelectItemStyle(token);
  const suffixCls = suffix ? `${componentCls}-${suffix}` : '';
  return {
    [`${componentCls}-multiple${suffixCls}`]: {
      fontSize: token.fontSize,
      /**
       * Do not merge `height` & `line-height` under style with `selection` & `search`, since chrome
       * may update to redesign with its align logic.
       */
      // =========================== Overflow ===========================
      [selectOverflowPrefixCls]: {
        position: 'relative',
        display: 'flex',
        flex: 'auto',
        flexWrap: 'wrap',
        maxWidth: '100%',
        '&-item': {
          flex: 'none',
          alignSelf: 'center',
          maxWidth: '100%',
          display: 'inline-flex'
        }
      },
      // ========================= Selector =========================
      [`${componentCls}-selector`]: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        // Multiple is little different that horizontal is follow the vertical
        padding: `${selectItemDist - FIXED_ITEM_MARGIN}px ${FIXED_ITEM_MARGIN * 2}px`,
        borderRadius: token.borderRadius,
        [`${componentCls}-show-search&`]: {
          cursor: 'text'
        },
        [`${componentCls}-disabled&`]: {
          background: token.multipleSelectorBgDisabled,
          cursor: 'not-allowed'
        },
        '&:after': {
          display: 'inline-block',
          width: 0,
          margin: `${FIXED_ITEM_MARGIN}px 0`,
          lineHeight: `${selectItemHeight}px`,
          visibility: 'hidden',
          content: '"\\a0"'
        }
      },
      [`
        &${componentCls}-show-arrow ${componentCls}-selector,
        &${componentCls}-allow-clear ${componentCls}-selector
      `]: {
        paddingInlineEnd: token.fontSizeIcon + token.controlPaddingHorizontal
      },
      // ======================== Selections ========================
      [`${componentCls}-selection-item`]: {
        position: 'relative',
        display: 'flex',
        flex: 'none',
        boxSizing: 'border-box',
        maxWidth: '100%',
        height: selectItemHeight,
        marginTop: FIXED_ITEM_MARGIN,
        marginBottom: FIXED_ITEM_MARGIN,
        lineHeight: `${selectItemHeight - token.lineWidth * 2}px`,
        background: token.multipleItemBg,
        border: `${token.lineWidth}px ${token.lineType} ${token.multipleItemBorderColor}`,
        borderRadius: token.borderRadiusSM,
        cursor: 'default',
        transition: `font-size ${token.motionDurationSlow}, line-height ${token.motionDurationSlow}, height ${token.motionDurationSlow}`,
        userSelect: 'none',
        marginInlineEnd: FIXED_ITEM_MARGIN * 2,
        paddingInlineStart: token.paddingXS,
        paddingInlineEnd: token.paddingXS / 2,
        [`${componentCls}-disabled&`]: {
          color: token.multipleItemColorDisabled,
          borderColor: token.multipleItemBorderColorDisabled,
          cursor: 'not-allowed'
        },
        // It's ok not to do this, but 24px makes bottom narrow in view should adjust
        '&-content': {
          display: 'inline-block',
          marginInlineEnd: token.paddingXS / 2,
          overflow: 'hidden',
          whiteSpace: 'pre',
          textOverflow: 'ellipsis'
        },
        '&-remove': Object.assign(Object.assign({}, resetIcon()), {
          display: 'inline-flex',
          alignItems: 'center',
          color: token.colorIcon,
          fontWeight: 'bold',
          fontSize: 10,
          lineHeight: 'inherit',
          cursor: 'pointer',
          [`> ${iconCls}`]: {
            verticalAlign: '-0.2em'
          },
          '&:hover': {
            color: token.colorIconHover
          }
        })
      },
      // ========================== Input ==========================
      [`${selectOverflowPrefixCls}-item + ${selectOverflowPrefixCls}-item`]: {
        [`${componentCls}-selection-search`]: {
          marginInlineStart: 0
        }
      },
      [`${componentCls}-selection-search`]: {
        display: 'inline-flex',
        position: 'relative',
        maxWidth: '100%',
        marginInlineStart: token.inputPaddingHorizontalBase - selectItemDist,
        [`
          &-input,
          &-mirror
        `]: {
          height: selectItemHeight,
          fontFamily: token.fontFamily,
          lineHeight: `${selectItemHeight}px`,
          transition: `all ${token.motionDurationSlow}`
        },
        '&-input': {
          width: '100%',
          minWidth: 4.1 // fix search cursor missing
        },

        '&-mirror': {
          position: 'absolute',
          top: 0,
          insetInlineStart: 0,
          insetInlineEnd: 'auto',
          zIndex: 999,
          whiteSpace: 'pre',
          visibility: 'hidden'
        }
      },
      // ======================= Placeholder =======================
      [`${componentCls}-selection-placeholder `]: {
        position: 'absolute',
        top: '50%',
        insetInlineStart: token.inputPaddingHorizontalBase,
        insetInlineEnd: token.inputPaddingHorizontalBase,
        transform: 'translateY(-50%)',
        transition: `all ${token.motionDurationSlow}`
      }
    }
  };
}
const genMultipleStyle = token => {
  const {
    componentCls
  } = token;
  const smallToken = merge(token, {
    controlHeight: token.controlHeightSM,
    multipleSelectItemHeight: token.controlHeightXS,
    borderRadius: token.borderRadiusSM,
    borderRadiusSM: token.borderRadiusXS
  });
  const largeToken = merge(token, {
    fontSize: token.fontSizeLG,
    controlHeight: token.controlHeightLG,
    multipleSelectItemHeight: token.multipleItemHeightLG,
    borderRadius: token.borderRadiusLG,
    borderRadiusSM: token.borderRadius
  });
  const [, smSelectItemMargin] = getSelectItemStyle(token);
  return [genSizeStyle$1(token),
  // ======================== Small ========================
  genSizeStyle$1(smallToken, 'sm'),
  // Padding
  {
    [`${componentCls}-multiple${componentCls}-sm`]: {
      [`${componentCls}-selection-placeholder`]: {
        insetInline: token.controlPaddingHorizontalSM - token.lineWidth
      },
      // https://github.com/ant-design/ant-design/issues/29559
      [`${componentCls}-selection-search`]: {
        marginInlineStart: smSelectItemMargin
      }
    }
  },
  // ======================== Large ========================
  genSizeStyle$1(largeToken, 'lg')];
};
var genMultipleStyle$1 = genMultipleStyle;

function genSizeStyle(token, suffix) {
  const {
    componentCls,
    inputPaddingHorizontalBase,
    borderRadius
  } = token;
  const selectHeightWithoutBorder = token.controlHeight - token.lineWidth * 2;
  const selectionItemPadding = Math.ceil(token.fontSize * 1.25);
  const suffixCls = suffix ? `${componentCls}-${suffix}` : '';
  return {
    [`${componentCls}-single${suffixCls}`]: {
      fontSize: token.fontSize,
      // ========================= Selector =========================
      [`${componentCls}-selector`]: Object.assign(Object.assign({}, resetComponent(token)), {
        display: 'flex',
        borderRadius,
        [`${componentCls}-selection-search`]: {
          position: 'absolute',
          top: 0,
          insetInlineStart: inputPaddingHorizontalBase,
          insetInlineEnd: inputPaddingHorizontalBase,
          bottom: 0,
          '&-input': {
            width: '100%'
          }
        },
        [`
          ${componentCls}-selection-item,
          ${componentCls}-selection-placeholder
        `]: {
          padding: 0,
          lineHeight: `${selectHeightWithoutBorder}px`,
          transition: `all ${token.motionDurationSlow}, visibility 0s`,
          // Firefox inline-block position calculation is not same as Chrome & Safari. Patch this:
          '@supports (-moz-appearance: meterbar)': {
            lineHeight: `${selectHeightWithoutBorder}px`
          }
        },
        [`${componentCls}-selection-item`]: {
          position: 'relative',
          userSelect: 'none'
        },
        [`${componentCls}-selection-placeholder`]: {
          transition: 'none',
          pointerEvents: 'none'
        },
        // For common baseline align
        [['&:after', /* For '' value baseline align */
        `${componentCls}-selection-item:after`, /* For undefined value baseline align */
        `${componentCls}-selection-placeholder:after`].join(',')]: {
          display: 'inline-block',
          width: 0,
          visibility: 'hidden',
          content: '"\\a0"'
        }
      }),
      [`
        &${componentCls}-show-arrow ${componentCls}-selection-item,
        &${componentCls}-show-arrow ${componentCls}-selection-placeholder
      `]: {
        paddingInlineEnd: selectionItemPadding
      },
      // Opacity selection if open
      [`&${componentCls}-open ${componentCls}-selection-item`]: {
        color: token.colorTextPlaceholder
      },
      // ========================== Input ==========================
      // We only change the style of non-customize input which is only support by `combobox` mode.
      // Not customize
      [`&:not(${componentCls}-customize-input)`]: {
        [`${componentCls}-selector`]: {
          width: '100%',
          height: token.controlHeight,
          padding: `0 ${inputPaddingHorizontalBase}px`,
          [`${componentCls}-selection-search-input`]: {
            height: selectHeightWithoutBorder
          },
          '&:after': {
            lineHeight: `${selectHeightWithoutBorder}px`
          }
        }
      },
      [`&${componentCls}-customize-input`]: {
        [`${componentCls}-selector`]: {
          '&:after': {
            display: 'none'
          },
          [`${componentCls}-selection-search`]: {
            position: 'static',
            width: '100%'
          },
          [`${componentCls}-selection-placeholder`]: {
            position: 'absolute',
            insetInlineStart: 0,
            insetInlineEnd: 0,
            padding: `0 ${inputPaddingHorizontalBase}px`,
            '&:after': {
              display: 'none'
            }
          }
        }
      }
    }
  };
}
function genSingleStyle(token) {
  const {
    componentCls
  } = token;
  const inputPaddingHorizontalSM = token.controlPaddingHorizontalSM - token.lineWidth;
  return [genSizeStyle(token),
  // ======================== Small ========================
  // Shared
  genSizeStyle(merge(token, {
    controlHeight: token.controlHeightSM,
    borderRadius: token.borderRadiusSM
  }), 'sm'),
  // padding
  {
    [`${componentCls}-single${componentCls}-sm`]: {
      [`&:not(${componentCls}-customize-input)`]: {
        [`${componentCls}-selection-search`]: {
          insetInlineStart: inputPaddingHorizontalSM,
          insetInlineEnd: inputPaddingHorizontalSM
        },
        [`${componentCls}-selector`]: {
          padding: `0 ${inputPaddingHorizontalSM}px`
        },
        // With arrow should provides `padding-right` to show the arrow
        [`&${componentCls}-show-arrow ${componentCls}-selection-search`]: {
          insetInlineEnd: inputPaddingHorizontalSM + token.fontSize * 1.5
        },
        [`
            &${componentCls}-show-arrow ${componentCls}-selection-item,
            &${componentCls}-show-arrow ${componentCls}-selection-placeholder
          `]: {
          paddingInlineEnd: token.fontSize * 1.5
        }
      }
    }
  },
  // ======================== Large ========================
  // Shared
  genSizeStyle(merge(token, {
    controlHeight: token.singleItemHeightLG,
    fontSize: token.fontSizeLG,
    borderRadius: token.borderRadiusLG
  }), 'lg')];
}

// ============================= Selector =============================
const genSelectorStyle = token => {
  const {
    componentCls,
    selectorBg
  } = token;
  return {
    position: 'relative',
    backgroundColor: selectorBg,
    border: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`,
    transition: `all ${token.motionDurationMid} ${token.motionEaseInOut}`,
    input: {
      cursor: 'pointer'
    },
    [`${componentCls}-show-search&`]: {
      cursor: 'text',
      input: {
        cursor: 'auto',
        color: 'inherit'
      }
    },
    [`${componentCls}-disabled&`]: {
      color: token.colorTextDisabled,
      background: token.colorBgContainerDisabled,
      cursor: 'not-allowed',
      [`${componentCls}-multiple&`]: {
        background: token.multipleSelectorBgDisabled
      },
      input: {
        cursor: 'not-allowed'
      }
    }
  };
};
// ============================== Status ==============================
const genStatusStyle = function (rootSelectCls, token) {
  let overwriteDefaultBorder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  const {
    componentCls,
    borderHoverColor,
    outlineColor,
    antCls
  } = token;
  const overwriteStyle = overwriteDefaultBorder ? {
    [`${componentCls}-selector`]: {
      borderColor: borderHoverColor
    }
  } : {};
  return {
    [rootSelectCls]: {
      [`&:not(${componentCls}-disabled):not(${componentCls}-customize-input):not(${antCls}-pagination-size-changer)`]: Object.assign(Object.assign({}, overwriteStyle), {
        [`${componentCls}-focused& ${componentCls}-selector`]: {
          borderColor: borderHoverColor,
          boxShadow: `0 0 0 ${token.controlOutlineWidth}px ${outlineColor}`,
          outline: 0
        },
        [`&:hover ${componentCls}-selector`]: {
          borderColor: borderHoverColor
        }
      })
    }
  };
};
// ============================== Styles ==============================
// /* Reset search input style */
const getSearchInputWithoutBorderStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-selection-search-input`]: {
      margin: 0,
      padding: 0,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      appearance: 'none',
      '&::-webkit-search-cancel-button': {
        display: 'none',
        '-webkit-appearance': 'none'
      }
    }
  };
};
// =============================== Base ===============================
const genBaseStyle$2 = token => {
  const {
    componentCls,
    inputPaddingHorizontalBase,
    iconCls
  } = token;
  return {
    [componentCls]: Object.assign(Object.assign({}, resetComponent(token)), {
      position: 'relative',
      display: 'inline-block',
      cursor: 'pointer',
      [`&:not(${componentCls}-customize-input) ${componentCls}-selector`]: Object.assign(Object.assign({}, genSelectorStyle(token)), getSearchInputWithoutBorderStyle(token)),
      // [`&:not(&-disabled):hover ${selectCls}-selector`]: {
      //   ...genHoverStyle(token),
      // },
      // ======================== Selection ========================
      [`${componentCls}-selection-item`]: Object.assign({
        flex: 1,
        fontWeight: 'normal'
      }, textEllipsis),
      // ======================= Placeholder =======================
      [`${componentCls}-selection-placeholder`]: Object.assign(Object.assign({}, textEllipsis), {
        flex: 1,
        color: token.colorTextPlaceholder,
        pointerEvents: 'none'
      }),
      // ========================== Arrow ==========================
      [`${componentCls}-arrow`]: Object.assign(Object.assign({}, resetIcon()), {
        position: 'absolute',
        top: '50%',
        insetInlineStart: 'auto',
        insetInlineEnd: inputPaddingHorizontalBase,
        height: token.fontSizeIcon,
        marginTop: -token.fontSizeIcon / 2,
        color: token.colorTextQuaternary,
        fontSize: token.fontSizeIcon,
        lineHeight: 1,
        textAlign: 'center',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        [iconCls]: {
          verticalAlign: 'top',
          transition: `transform ${token.motionDurationSlow}`,
          '> svg': {
            verticalAlign: 'top'
          },
          [`&:not(${componentCls}-suffix)`]: {
            pointerEvents: 'auto'
          }
        },
        [`${componentCls}-disabled &`]: {
          cursor: 'not-allowed'
        },
        '> *:not(:last-child)': {
          marginInlineEnd: 8 // FIXME: magic
        }
      }),

      // ========================== Clear ==========================
      [`${componentCls}-clear`]: {
        position: 'absolute',
        top: '50%',
        insetInlineStart: 'auto',
        insetInlineEnd: inputPaddingHorizontalBase,
        zIndex: 1,
        display: 'inline-block',
        width: token.fontSizeIcon,
        height: token.fontSizeIcon,
        marginTop: -token.fontSizeIcon / 2,
        color: token.colorTextQuaternary,
        fontSize: token.fontSizeIcon,
        fontStyle: 'normal',
        lineHeight: 1,
        textAlign: 'center',
        textTransform: 'none',
        background: token.clearBg,
        cursor: 'pointer',
        opacity: 0,
        transition: `color ${token.motionDurationMid} ease, opacity ${token.motionDurationSlow} ease`,
        textRendering: 'auto',
        '&:before': {
          display: 'block'
        },
        '&:hover': {
          color: token.colorTextTertiary
        }
      },
      '&:hover': {
        [`${componentCls}-clear`]: {
          opacity: 1
        }
      }
    }),
    // ========================= Feedback ==========================
    [`${componentCls}-has-feedback`]: {
      [`${componentCls}-clear`]: {
        insetInlineEnd: inputPaddingHorizontalBase + token.fontSize + token.paddingXS
      }
    }
  };
};
// ============================== Styles ==============================
const genSelectStyle = token => {
  const {
    componentCls
  } = token;
  return [{
    [componentCls]: {
      // ==================== BorderLess ====================
      [`&-borderless ${componentCls}-selector`]: {
        backgroundColor: `transparent !important`,
        borderColor: `transparent !important`,
        boxShadow: `none !important`
      },
      // ==================== In Form ====================
      [`&${componentCls}-in-form-item`]: {
        width: '100%'
      }
    }
  },
  // =====================================================
  // ==                       LTR                       ==
  // =====================================================
  // Base
  genBaseStyle$2(token),
  // Single
  genSingleStyle(token),
  // Multiple
  genMultipleStyle$1(token),
  // Dropdown
  genDropdownStyle(token),
  // =====================================================
  // ==                       RTL                       ==
  // =====================================================
  {
    [`${componentCls}-rtl`]: {
      direction: 'rtl'
    }
  },
  // =====================================================
  // ==                     Status                      ==
  // =====================================================
  genStatusStyle(componentCls, merge(token, {
    borderHoverColor: token.colorPrimaryHover,
    outlineColor: token.controlOutline
  })), genStatusStyle(`${componentCls}-status-error`, merge(token, {
    borderHoverColor: token.colorErrorHover,
    outlineColor: token.colorErrorOutline
  }), true), genStatusStyle(`${componentCls}-status-warning`, merge(token, {
    borderHoverColor: token.colorWarningHover,
    outlineColor: token.colorWarningOutline
  }), true),
  // =====================================================
  // ==             Space Compact                       ==
  // =====================================================
  genCompactItemStyle(token, {
    borderElCls: `${componentCls}-selector`,
    focusElCls: `${componentCls}-focused`
  })];
};
// ============================== Export ==============================
var useSelectStyle = genComponentStyleHook('Select', (token, _ref) => {
  let {
    rootPrefixCls
  } = _ref;
  const selectToken = merge(token, {
    rootPrefixCls,
    inputPaddingHorizontalBase: token.paddingSM - 1,
    multipleSelectItemHeight: token.multipleItemHeight
  });
  return [genSelectStyle(selectToken)];
}, token => {
  const {
    fontSize,
    lineHeight,
    controlHeight,
    controlPaddingHorizontal,
    zIndexPopupBase,
    colorText,
    fontWeightStrong,
    controlItemBgActive,
    controlItemBgHover,
    colorBgContainer,
    colorFillSecondary,
    controlHeightLG,
    controlHeightSM,
    colorBgContainerDisabled,
    colorTextDisabled
  } = token;
  return {
    zIndexPopup: zIndexPopupBase + 50,
    optionSelectedColor: colorText,
    optionSelectedFontWeight: fontWeightStrong,
    optionSelectedBg: controlItemBgActive,
    optionActiveBg: controlItemBgHover,
    optionPadding: `${(controlHeight - fontSize * lineHeight) / 2}px ${controlPaddingHorizontal}px`,
    optionFontSize: fontSize,
    optionLineHeight: lineHeight,
    optionHeight: controlHeight,
    selectorBg: colorBgContainer,
    clearBg: colorBgContainer,
    singleItemHeightLG: controlHeightLG,
    multipleItemBg: colorFillSecondary,
    multipleItemBorderColor: 'transparent',
    multipleItemHeight: controlHeightSM,
    multipleItemHeightLG: controlHeight,
    multipleSelectorBgDisabled: colorBgContainerDisabled,
    multipleItemColorDisabled: colorTextDisabled,
    multipleItemBorderColorDisabled: 'transparent'
  };
});

const getBuiltInPlacements = popupOverflow => {
  const htmlRegion = popupOverflow === 'scroll' ? 'scroll' : 'visible';
  const sharedConfig = {
    overflow: {
      adjustX: true,
      adjustY: true,
      shiftY: true
    },
    htmlRegion,
    _experimental: {
      dynamicInset: true
    }
  };
  return {
    bottomLeft: Object.assign(Object.assign({}, sharedConfig), {
      points: ['tl', 'bl'],
      offset: [0, 4]
    }),
    bottomRight: Object.assign(Object.assign({}, sharedConfig), {
      points: ['tr', 'br'],
      offset: [0, 4]
    }),
    topLeft: Object.assign(Object.assign({}, sharedConfig), {
      points: ['bl', 'tl'],
      offset: [0, -4]
    }),
    topRight: Object.assign(Object.assign({}, sharedConfig), {
      points: ['br', 'tr'],
      offset: [0, -4]
    })
  };
};
function useBuiltinPlacements(buildInPlacements, popupOverflow) {
  return buildInPlacements || getBuiltInPlacements(popupOverflow);
}

/**
 * Since Select, TreeSelect, Cascader is same Select like component.
 * We just use same hook to handle this logic.
 *
 * If `suffixIcon` is not equal to `null`, always show it.
 */
function useShowArrow(suffixIcon, showArrow) {
  return showArrow !== undefined ? showArrow : suffixIcon !== null;
}

// This icon file is generated automatically.
var CheckOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, "name": "check", "theme": "outlined" };
var CheckOutlinedSvg = CheckOutlined$2;

var CheckOutlined = function CheckOutlined(props, ref) {
  return /*#__PURE__*/React.createElement(AntdIcon, _extends$1({}, props, {
    ref: ref,
    icon: CheckOutlinedSvg
  }));
};
if (process.env.NODE_ENV !== 'production') {
  CheckOutlined.displayName = 'CheckOutlined';
}
var CheckOutlined$1 = /*#__PURE__*/React.forwardRef(CheckOutlined);

// This icon file is generated automatically.
var DownOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, "name": "down", "theme": "outlined" };
var DownOutlinedSvg = DownOutlined$2;

var DownOutlined = function DownOutlined(props, ref) {
  return /*#__PURE__*/React.createElement(AntdIcon, _extends$1({}, props, {
    ref: ref,
    icon: DownOutlinedSvg
  }));
};
if (process.env.NODE_ENV !== 'production') {
  DownOutlined.displayName = 'DownOutlined';
}
var DownOutlined$1 = /*#__PURE__*/React.forwardRef(DownOutlined);

// This icon file is generated automatically.
var SearchOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, "name": "search", "theme": "outlined" };
var SearchOutlinedSvg = SearchOutlined$2;

var SearchOutlined = function SearchOutlined(props, ref) {
  return /*#__PURE__*/React.createElement(AntdIcon, _extends$1({}, props, {
    ref: ref,
    icon: SearchOutlinedSvg
  }));
};
if (process.env.NODE_ENV !== 'production') {
  SearchOutlined.displayName = 'SearchOutlined';
}
var SearchOutlined$1 = /*#__PURE__*/React.forwardRef(SearchOutlined);

function getIcons(_ref) {
  let {
    suffixIcon,
    clearIcon,
    menuItemSelectedIcon,
    removeIcon,
    loading,
    multiple,
    hasFeedback,
    prefixCls,
    showSuffixIcon,
    feedbackIcon,
    showArrow,
    componentName
  } = _ref;
  if (process.env.NODE_ENV !== 'production') {
    process.env.NODE_ENV !== "production" ? warning$3(!clearIcon, componentName, '`clearIcon` is deprecated, please use `allowClear={{ clearIcon: React.ReactNode }}` instead.') : void 0;
  }
  // Clear Icon
  const mergedClearIcon = clearIcon !== null && clearIcon !== void 0 ? clearIcon : /*#__PURE__*/React.createElement(CloseCircleFilled$1, null);
  // Validation Feedback Icon
  const getSuffixIconNode = arrowIcon => {
    if (suffixIcon === null && !hasFeedback && !showArrow) {
      return null;
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null, showSuffixIcon !== false && arrowIcon, hasFeedback && feedbackIcon);
  };
  // Arrow item icon
  let mergedSuffixIcon = null;
  if (suffixIcon !== undefined) {
    mergedSuffixIcon = getSuffixIconNode(suffixIcon);
  } else if (loading) {
    mergedSuffixIcon = getSuffixIconNode( /*#__PURE__*/React.createElement(LoadingOutlined$1, {
      spin: true
    }));
  } else {
    const iconCls = `${prefixCls}-suffix`;
    mergedSuffixIcon = _ref2 => {
      let {
        open,
        showSearch
      } = _ref2;
      if (open && showSearch) {
        return getSuffixIconNode( /*#__PURE__*/React.createElement(SearchOutlined$1, {
          className: iconCls
        }));
      }
      return getSuffixIconNode( /*#__PURE__*/React.createElement(DownOutlined$1, {
        className: iconCls
      }));
    };
  }
  // Checked item icon
  let mergedItemIcon = null;
  if (menuItemSelectedIcon !== undefined) {
    mergedItemIcon = menuItemSelectedIcon;
  } else if (multiple) {
    mergedItemIcon = /*#__PURE__*/React.createElement(CheckOutlined$1, null);
  } else {
    mergedItemIcon = null;
  }
  let mergedRemoveIcon = null;
  if (removeIcon !== undefined) {
    mergedRemoveIcon = removeIcon;
  } else {
    mergedRemoveIcon = /*#__PURE__*/React.createElement(CloseOutlined$1, null);
  }
  return {
    clearIcon: mergedClearIcon,
    suffixIcon: mergedSuffixIcon,
    itemIcon: mergedItemIcon,
    removeIcon: mergedRemoveIcon
  };
}

var __rest$6 = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const SECRET_COMBOBOX_MODE_DO_NOT_USE = 'SECRET_COMBOBOX_MODE_DO_NOT_USE';
const InternalSelect = (_a, ref) => {
  var _b;
  var {
      prefixCls: customizePrefixCls,
      bordered = true,
      className,
      rootClassName,
      getPopupContainer,
      popupClassName,
      dropdownClassName,
      listHeight = 256,
      placement,
      listItemHeight = 24,
      size: customizeSize,
      disabled: customDisabled,
      notFoundContent,
      status: customStatus,
      builtinPlacements,
      dropdownMatchSelectWidth,
      popupMatchSelectWidth,
      direction: propDirection,
      style,
      allowClear
    } = _a,
    props = __rest$6(_a, ["prefixCls", "bordered", "className", "rootClassName", "getPopupContainer", "popupClassName", "dropdownClassName", "listHeight", "placement", "listItemHeight", "size", "disabled", "notFoundContent", "status", "builtinPlacements", "dropdownMatchSelectWidth", "popupMatchSelectWidth", "direction", "style", "allowClear"]);
  const {
    getPopupContainer: getContextPopupContainer,
    getPrefixCls,
    renderEmpty,
    direction: contextDirection,
    virtual,
    popupMatchSelectWidth: contextPopupMatchSelectWidth,
    popupOverflow,
    select
  } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('select', customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  const direction = propDirection !== null && propDirection !== void 0 ? propDirection : contextDirection;
  const {
    compactSize,
    compactItemClassnames
  } = useCompactItemContext(prefixCls, direction);
  const [wrapSSR, hashId] = useSelectStyle(prefixCls);
  const mode = React.useMemo(() => {
    const {
      mode: m
    } = props;
    if (m === 'combobox') {
      return undefined;
    }
    if (m === SECRET_COMBOBOX_MODE_DO_NOT_USE) {
      return 'combobox';
    }
    return m;
  }, [props.mode]);
  const isMultiple = mode === 'multiple' || mode === 'tags';
  const showSuffixIcon = useShowArrow(props.suffixIcon, props.showArrow);
  const mergedPopupMatchSelectWidth = (_b = popupMatchSelectWidth !== null && popupMatchSelectWidth !== void 0 ? popupMatchSelectWidth : dropdownMatchSelectWidth) !== null && _b !== void 0 ? _b : contextPopupMatchSelectWidth;
  // ===================== Form Status =====================
  const {
    status: contextStatus,
    hasFeedback,
    isFormItemInput,
    feedbackIcon
  } = React.useContext(FormItemInputContext);
  const mergedStatus = getMergedStatus(contextStatus, customStatus);
  // ===================== Empty =====================
  let mergedNotFound;
  if (notFoundContent !== undefined) {
    mergedNotFound = notFoundContent;
  } else if (mode === 'combobox') {
    mergedNotFound = null;
  } else {
    mergedNotFound = (renderEmpty === null || renderEmpty === void 0 ? void 0 : renderEmpty('Select')) || /*#__PURE__*/React.createElement(DefaultRenderEmpty$1, {
      componentName: "Select"
    });
  }
  // ===================== Icons =====================
  const {
    suffixIcon,
    itemIcon,
    removeIcon,
    clearIcon
  } = getIcons(Object.assign(Object.assign({}, props), {
    multiple: isMultiple,
    hasFeedback,
    feedbackIcon,
    showSuffixIcon,
    prefixCls,
    showArrow: props.showArrow,
    componentName: 'Select'
  }));
  const mergedAllowClear = allowClear === true ? {
    clearIcon
  } : allowClear;
  const selectProps = omit(props, ['suffixIcon', 'itemIcon']);
  const rcSelectRtlDropdownClassName = classNames(popupClassName || dropdownClassName, {
    [`${prefixCls}-dropdown-${direction}`]: direction === 'rtl'
  }, rootClassName, hashId);
  const mergedSize = useSize$1(ctx => {
    var _a;
    return (_a = customizeSize !== null && customizeSize !== void 0 ? customizeSize : compactSize) !== null && _a !== void 0 ? _a : ctx;
  });
  // ===================== Disabled =====================
  const disabled = React.useContext(DisabledContext$1);
  const mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
  const mergedClassName = classNames({
    [`${prefixCls}-lg`]: mergedSize === 'large',
    [`${prefixCls}-sm`]: mergedSize === 'small',
    [`${prefixCls}-rtl`]: direction === 'rtl',
    [`${prefixCls}-borderless`]: !bordered,
    [`${prefixCls}-in-form-item`]: isFormItemInput
  }, getStatusClassNames(prefixCls, mergedStatus, hasFeedback), compactItemClassnames, select === null || select === void 0 ? void 0 : select.className, className, rootClassName, hashId);
  // ===================== Placement =====================
  const memoPlacement = React.useMemo(() => {
    if (placement !== undefined) {
      return placement;
    }
    return direction === 'rtl' ? 'bottomRight' : 'bottomLeft';
  }, [placement, direction]);
  const mergedBuiltinPlacements = useBuiltinPlacements(builtinPlacements, popupOverflow);
  // ====================== Warning ======================
  if (process.env.NODE_ENV !== 'production') {
    process.env.NODE_ENV !== "production" ? warning$3(!dropdownClassName, 'Select', '`dropdownClassName` is deprecated. Please use `popupClassName` instead.') : void 0;
    process.env.NODE_ENV !== "production" ? warning$3(dropdownMatchSelectWidth === undefined, 'Select', '`dropdownMatchSelectWidth` is deprecated. Please use `popupMatchSelectWidth` instead.') : void 0;
    process.env.NODE_ENV !== "production" ? warning$3(!('showArrow' in props), 'Select', '`showArrow` is deprecated which will be removed in next major version. It will be a default behavior, you can hide it by setting `suffixIcon` to null.') : void 0;
  }
  // ====================== Render =======================
  return wrapSSR( /*#__PURE__*/React.createElement(TypedSelect, Object.assign({
    ref: ref,
    virtual: virtual,
    showSearch: select === null || select === void 0 ? void 0 : select.showSearch
  }, selectProps, {
    style: Object.assign(Object.assign({}, select === null || select === void 0 ? void 0 : select.style), style),
    dropdownMatchSelectWidth: mergedPopupMatchSelectWidth,
    builtinPlacements: mergedBuiltinPlacements,
    transitionName: getTransitionName(rootPrefixCls, 'slide-up', props.transitionName),
    listHeight: listHeight,
    listItemHeight: listItemHeight,
    mode: mode,
    prefixCls: prefixCls,
    placement: memoPlacement,
    direction: direction,
    suffixIcon: suffixIcon,
    menuItemSelectedIcon: itemIcon,
    removeIcon: removeIcon,
    allowClear: mergedAllowClear,
    notFoundContent: mergedNotFound,
    className: mergedClassName,
    getPopupContainer: getPopupContainer || getContextPopupContainer,
    dropdownClassName: rcSelectRtlDropdownClassName,
    disabled: mergedDisabled
  })));
};
if (process.env.NODE_ENV !== 'production') {
  InternalSelect.displayName = 'Select';
}
const Select = /*#__PURE__*/React.forwardRef(InternalSelect);
// We don't care debug panel
/* istanbul ignore next */
const PurePanel$3 = genPurePanel(Select);
Select.SECRET_COMBOBOX_MODE_DO_NOT_USE = SECRET_COMBOBOX_MODE_DO_NOT_USE;
Select.Option = Option;
Select.OptGroup = OptGroup;
Select._InternalPanelDoNotUseOrYouWillBeFired = PurePanel$3;
if (process.env.NODE_ENV !== 'production') {
  Select.displayName = 'Select';
}
var Select$1 = Select;

const responsiveArray = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
const getResponsiveMap = token => ({
  xs: `(max-width: ${token.screenXSMax}px)`,
  sm: `(min-width: ${token.screenSM}px)`,
  md: `(min-width: ${token.screenMD}px)`,
  lg: `(min-width: ${token.screenLG}px)`,
  xl: `(min-width: ${token.screenXL}px)`,
  xxl: `(min-width: ${token.screenXXL}px)`
});
/**
 * Ensures that the breakpoints token are valid, in good order
 * For each breakpoint : screenMin <= screen <= screenMax and screenMax <= nextScreenMin
 */
const validateBreakpoints = token => {
  const indexableToken = token;
  const revBreakpoints = [].concat(responsiveArray).reverse();
  revBreakpoints.forEach((breakpoint, i) => {
    const breakpointUpper = breakpoint.toUpperCase();
    const screenMin = `screen${breakpointUpper}Min`;
    const screen = `screen${breakpointUpper}`;
    if (!(indexableToken[screenMin] <= indexableToken[screen])) {
      throw new Error(`${screenMin}<=${screen} fails : !(${indexableToken[screenMin]}<=${indexableToken[screen]})`);
    }
    if (i < revBreakpoints.length - 1) {
      const screenMax = `screen${breakpointUpper}Max`;
      if (!(indexableToken[screen] <= indexableToken[screenMax])) {
        throw new Error(`${screen}<=${screenMax} fails : !(${indexableToken[screen]}<=${indexableToken[screenMax]})`);
      }
      const nextBreakpointUpperMin = revBreakpoints[i + 1].toUpperCase();
      const nextScreenMin = `screen${nextBreakpointUpperMin}Min`;
      if (!(indexableToken[screenMax] <= indexableToken[nextScreenMin])) {
        throw new Error(`${screenMax}<=${nextScreenMin} fails : !(${indexableToken[screenMax]}<=${indexableToken[nextScreenMin]})`);
      }
    }
  });
  return token;
};
function useResponsiveObserver() {
  const [, token] = useToken();
  const responsiveMap = getResponsiveMap(validateBreakpoints(token));
  // To avoid repeat create instance, we add `useMemo` here.
  return React__default.useMemo(() => {
    const subscribers = new Map();
    let subUid = -1;
    let screens = {};
    return {
      matchHandlers: {},
      dispatch(pointMap) {
        screens = pointMap;
        subscribers.forEach(func => func(screens));
        return subscribers.size >= 1;
      },
      subscribe(func) {
        if (!subscribers.size) this.register();
        subUid += 1;
        subscribers.set(subUid, func);
        func(screens);
        return subUid;
      },
      unsubscribe(paramToken) {
        subscribers.delete(paramToken);
        if (!subscribers.size) this.unregister();
      },
      unregister() {
        Object.keys(responsiveMap).forEach(screen => {
          const matchMediaQuery = responsiveMap[screen];
          const handler = this.matchHandlers[matchMediaQuery];
          handler === null || handler === void 0 ? void 0 : handler.mql.removeListener(handler === null || handler === void 0 ? void 0 : handler.listener);
        });
        subscribers.clear();
      },
      register() {
        Object.keys(responsiveMap).forEach(screen => {
          const matchMediaQuery = responsiveMap[screen];
          const listener = _ref => {
            let {
              matches
            } = _ref;
            this.dispatch(Object.assign(Object.assign({}, screens), {
              [screen]: matches
            }));
          };
          const mql = window.matchMedia(matchMediaQuery);
          mql.addListener(listener);
          this.matchHandlers[matchMediaQuery] = {
            mql,
            listener
          };
          listener(mql);
        });
      },
      responsiveMap
    };
  }, [token]);
}

function useForceUpdate() {
  const [, forceUpdate] = React.useReducer(x => x + 1, 0);
  return forceUpdate;
}

function useBreakpoint() {
  let refreshOnChange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  const screensRef = useRef({});
  const forceUpdate = useForceUpdate();
  const responsiveObserver = useResponsiveObserver();
  useLayoutEffect$1(() => {
    const token = responsiveObserver.subscribe(supportScreens => {
      screensRef.current = supportScreens;
      if (refreshOnChange) {
        forceUpdate();
      }
    });
    return () => responsiveObserver.unsubscribe(token);
  }, []);
  return screensRef.current;
}

const AvatarContext = /*#__PURE__*/React.createContext({});
var AvatarContext$1 = AvatarContext;

const genBaseStyle$1 = token => {
  const {
    antCls,
    componentCls,
    iconCls,
    avatarBg,
    avatarColor,
    containerSize,
    containerSizeLG,
    containerSizeSM,
    textFontSize,
    textFontSizeLG,
    textFontSizeSM,
    borderRadius,
    borderRadiusLG,
    borderRadiusSM,
    lineWidth,
    lineType
  } = token;
  // Avatar size style
  const avatarSizeStyle = (size, fontSize, radius) => ({
    width: size,
    height: size,
    lineHeight: `${size - lineWidth * 2}px`,
    borderRadius: '50%',
    [`&${componentCls}-square`]: {
      borderRadius: radius
    },
    [`${componentCls}-string`]: {
      position: 'absolute',
      left: {
        _skip_check_: true,
        value: '50%'
      },
      transformOrigin: '0 center'
    },
    [`&${componentCls}-icon`]: {
      fontSize,
      [`> ${iconCls}`]: {
        margin: 0
      }
    }
  });
  return {
    [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign({}, resetComponent(token)), {
      position: 'relative',
      display: 'inline-block',
      overflow: 'hidden',
      color: avatarColor,
      whiteSpace: 'nowrap',
      textAlign: 'center',
      verticalAlign: 'middle',
      background: avatarBg,
      border: `${lineWidth}px ${lineType} transparent`,
      [`&-image`]: {
        background: 'transparent'
      },
      [`${antCls}-image-img`]: {
        display: 'block'
      }
    }), avatarSizeStyle(containerSize, textFontSize, borderRadius)), {
      [`&-lg`]: Object.assign({}, avatarSizeStyle(containerSizeLG, textFontSizeLG, borderRadiusLG)),
      [`&-sm`]: Object.assign({}, avatarSizeStyle(containerSizeSM, textFontSizeSM, borderRadiusSM)),
      '> img': {
        display: 'block',
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    })
  };
};
const genGroupStyle = token => {
  const {
    componentCls,
    groupBorderColor,
    groupOverlapping,
    groupSpace
  } = token;
  return {
    [`${componentCls}-group`]: {
      display: 'inline-flex',
      [`${componentCls}`]: {
        borderColor: groupBorderColor
      },
      [`> *:not(:first-child)`]: {
        marginInlineStart: groupOverlapping
      }
    },
    [`${componentCls}-group-popover`]: {
      [`${componentCls} + ${componentCls}`]: {
        marginInlineStart: groupSpace
      }
    }
  };
};
var useStyle$2 = genComponentStyleHook('Avatar', token => {
  const {
    colorTextLightSolid,
    colorTextPlaceholder
  } = token;
  const avatarToken = merge(token, {
    avatarBg: colorTextPlaceholder,
    avatarColor: colorTextLightSolid
  });
  return [genBaseStyle$1(avatarToken), genGroupStyle(avatarToken)];
}, token => {
  const {
    controlHeight,
    controlHeightLG,
    controlHeightSM,
    fontSize,
    fontSizeLG,
    fontSizeXL,
    fontSizeHeading3,
    marginXS,
    marginXXS,
    colorBorderBg
  } = token;
  return {
    containerSize: controlHeight,
    containerSizeLG: controlHeightLG,
    containerSizeSM: controlHeightSM,
    textFontSize: Math.round((fontSizeLG + fontSizeXL) / 2),
    textFontSizeLG: fontSizeHeading3,
    textFontSizeSM: fontSize,
    groupSpace: marginXXS,
    groupOverlapping: -marginXS,
    groupBorderColor: colorBorderBg
  };
});

var __rest$5 = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const InternalAvatar = (props, ref) => {
  const [scale, setScale] = React.useState(1);
  const [mounted, setMounted] = React.useState(false);
  const [isImgExist, setIsImgExist] = React.useState(true);
  const avatarNodeRef = React.useRef(null);
  const avatarChildrenRef = React.useRef(null);
  const avatarNodeMergeRef = composeRef(ref, avatarNodeRef);
  const {
    getPrefixCls,
    avatar
  } = React.useContext(ConfigContext);
  const avatarCtx = React.useContext(AvatarContext$1);
  const setScaleParam = () => {
    if (!avatarChildrenRef.current || !avatarNodeRef.current) {
      return;
    }
    const childrenWidth = avatarChildrenRef.current.offsetWidth; // offsetWidth avoid affecting be transform scale
    const nodeWidth = avatarNodeRef.current.offsetWidth;
    // denominator is 0 is no meaning
    if (childrenWidth !== 0 && nodeWidth !== 0) {
      const {
        gap = 4
      } = props;
      if (gap * 2 < nodeWidth) {
        setScale(nodeWidth - gap * 2 < childrenWidth ? (nodeWidth - gap * 2) / childrenWidth : 1);
      }
    }
  };
  React.useEffect(() => {
    setMounted(true);
  }, []);
  React.useEffect(() => {
    setIsImgExist(true);
    setScale(1);
  }, [props.src]);
  React.useEffect(setScaleParam, [props.gap]);
  const handleImgLoadError = () => {
    const {
      onError
    } = props;
    const errorFlag = onError === null || onError === void 0 ? void 0 : onError();
    if (errorFlag !== false) {
      setIsImgExist(false);
    }
  };
  const {
      prefixCls: customizePrefixCls,
      shape,
      size: customSize,
      src,
      srcSet,
      icon,
      className,
      rootClassName,
      alt,
      draggable,
      children,
      crossOrigin
    } = props,
    others = __rest$5(props, ["prefixCls", "shape", "size", "src", "srcSet", "icon", "className", "rootClassName", "alt", "draggable", "children", "crossOrigin"]);
  const size = useSize$1(ctxSize => {
    var _a, _b;
    return (_b = (_a = customSize !== null && customSize !== void 0 ? customSize : avatarCtx === null || avatarCtx === void 0 ? void 0 : avatarCtx.size) !== null && _a !== void 0 ? _a : ctxSize) !== null && _b !== void 0 ? _b : 'default';
  });
  const needResponsive = Object.keys(typeof size === 'object' ? size || {} : {}).some(key => ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].includes(key));
  const screens = useBreakpoint(needResponsive);
  const responsiveSizeStyle = React.useMemo(() => {
    if (typeof size !== 'object') {
      return {};
    }
    const currentBreakpoint = responsiveArray.find(screen => screens[screen]);
    const currentSize = size[currentBreakpoint];
    return currentSize ? {
      width: currentSize,
      height: currentSize,
      lineHeight: `${currentSize}px`,
      fontSize: icon ? currentSize / 2 : 18
    } : {};
  }, [screens, size]);
  process.env.NODE_ENV !== "production" ? warning$3(!(typeof icon === 'string' && icon.length > 2), 'Avatar', `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${icon}\` at https://ant.design/components/icon`) : void 0;
  const prefixCls = getPrefixCls('avatar', customizePrefixCls);
  const [wrapSSR, hashId] = useStyle$2(prefixCls);
  const sizeCls = classNames({
    [`${prefixCls}-lg`]: size === 'large',
    [`${prefixCls}-sm`]: size === 'small'
  });
  const hasImageElement = /*#__PURE__*/React.isValidElement(src);
  const mergedShape = shape || (avatarCtx === null || avatarCtx === void 0 ? void 0 : avatarCtx.shape) || 'circle';
  const classString = classNames(prefixCls, sizeCls, avatar === null || avatar === void 0 ? void 0 : avatar.className, `${prefixCls}-${mergedShape}`, {
    [`${prefixCls}-image`]: hasImageElement || src && isImgExist,
    [`${prefixCls}-icon`]: !!icon
  }, className, rootClassName, hashId);
  const sizeStyle = typeof size === 'number' ? {
    width: size,
    height: size,
    lineHeight: `${size}px`,
    fontSize: icon ? size / 2 : 18
  } : {};
  let childrenToRender;
  if (typeof src === 'string' && isImgExist) {
    childrenToRender = /*#__PURE__*/React.createElement("img", {
      src: src,
      draggable: draggable,
      srcSet: srcSet,
      onError: handleImgLoadError,
      alt: alt,
      crossOrigin: crossOrigin
    });
  } else if (hasImageElement) {
    childrenToRender = src;
  } else if (icon) {
    childrenToRender = icon;
  } else if (mounted || scale !== 1) {
    const transformString = `scale(${scale}) translateX(-50%)`;
    const childrenStyle = {
      msTransform: transformString,
      WebkitTransform: transformString,
      transform: transformString
    };
    const sizeChildrenStyle = typeof size === 'number' ? {
      lineHeight: `${size}px`
    } : {};
    childrenToRender = /*#__PURE__*/React.createElement(RefResizeObserver, {
      onResize: setScaleParam
    }, /*#__PURE__*/React.createElement("span", {
      className: `${prefixCls}-string`,
      ref: avatarChildrenRef,
      style: Object.assign(Object.assign({}, sizeChildrenStyle), childrenStyle)
    }, children));
  } else {
    childrenToRender = /*#__PURE__*/React.createElement("span", {
      className: `${prefixCls}-string`,
      style: {
        opacity: 0
      },
      ref: avatarChildrenRef
    }, children);
  }
  // The event is triggered twice from bubbling up the DOM tree.
  // see https://codesandbox.io/s/kind-snow-9lidz
  delete others.onError;
  delete others.gap;
  return wrapSSR( /*#__PURE__*/React.createElement("span", Object.assign({}, others, {
    style: Object.assign(Object.assign(Object.assign(Object.assign({}, sizeStyle), responsiveSizeStyle), avatar === null || avatar === void 0 ? void 0 : avatar.style), others.style),
    className: classString,
    ref: avatarNodeMergeRef
  }), childrenToRender));
};
const Avatar$2 = /*#__PURE__*/React.forwardRef(InternalAvatar);
if (process.env.NODE_ENV !== 'production') {
  Avatar$2.displayName = 'Avatar';
}
var InternalAvatar$1 = Avatar$2;

const getRenderPropValue = propValue => {
  if (!propValue) {
    return null;
  }
  if (typeof propValue === 'function') {
    return propValue();
  }
  return propValue;
};

var autoAdjustOverflowTopBottom = {
  shiftX: 64,
  adjustY: 1
};
var autoAdjustOverflowLeftRight = {
  adjustX: 1,
  shiftY: true
};
var targetOffset = [0, 0];
var placements = {
  left: {
    points: ['cr', 'cl'],
    overflow: autoAdjustOverflowLeftRight,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  right: {
    points: ['cl', 'cr'],
    overflow: autoAdjustOverflowLeftRight,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  top: {
    points: ['bc', 'tc'],
    overflow: autoAdjustOverflowTopBottom,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  bottom: {
    points: ['tc', 'bc'],
    overflow: autoAdjustOverflowTopBottom,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflowTopBottom,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  leftTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflowLeftRight,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflowTopBottom,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  rightTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflowLeftRight,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflowTopBottom,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  rightBottom: {
    points: ['bl', 'br'],
    overflow: autoAdjustOverflowLeftRight,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflowTopBottom,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  leftBottom: {
    points: ['br', 'bl'],
    overflow: autoAdjustOverflowLeftRight,
    offset: [-4, 0],
    targetOffset: targetOffset
  }
};

function Popup(props) {
  var children = props.children,
    prefixCls = props.prefixCls,
    id = props.id,
    overlayInnerStyle = props.overlayInnerStyle,
    className = props.className,
    style = props.style;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames("".concat(prefixCls, "-content"), className),
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-inner"),
    id: id,
    role: "tooltip",
    style: overlayInnerStyle
  }, typeof children === 'function' ? children() : children));
}

var _excluded$1 = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow"];
var Tooltip$2 = function Tooltip(props, ref) {
  var overlayClassName = props.overlayClassName,
    _props$trigger = props.trigger,
    trigger = _props$trigger === void 0 ? ['hover'] : _props$trigger,
    _props$mouseEnterDela = props.mouseEnterDelay,
    mouseEnterDelay = _props$mouseEnterDela === void 0 ? 0 : _props$mouseEnterDela,
    _props$mouseLeaveDela = props.mouseLeaveDelay,
    mouseLeaveDelay = _props$mouseLeaveDela === void 0 ? 0.1 : _props$mouseLeaveDela,
    overlayStyle = props.overlayStyle,
    _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-tooltip' : _props$prefixCls,
    children = props.children,
    onVisibleChange = props.onVisibleChange,
    afterVisibleChange = props.afterVisibleChange,
    transitionName = props.transitionName,
    animation = props.animation,
    motion = props.motion,
    _props$placement = props.placement,
    placement = _props$placement === void 0 ? 'right' : _props$placement,
    _props$align = props.align,
    align = _props$align === void 0 ? {} : _props$align,
    _props$destroyTooltip = props.destroyTooltipOnHide,
    destroyTooltipOnHide = _props$destroyTooltip === void 0 ? false : _props$destroyTooltip,
    defaultVisible = props.defaultVisible,
    getTooltipContainer = props.getTooltipContainer,
    overlayInnerStyle = props.overlayInnerStyle;
    props.arrowContent;
    var overlay = props.overlay,
    id = props.id,
    _props$showArrow = props.showArrow,
    showArrow = _props$showArrow === void 0 ? true : _props$showArrow,
    restProps = _objectWithoutProperties(props, _excluded$1);
  var triggerRef = useRef(null);
  useImperativeHandle(ref, function () {
    return triggerRef.current;
  });
  var extraProps = _objectSpread2({}, restProps);
  if ('visible' in props) {
    extraProps.popupVisible = props.visible;
  }
  var getPopupElement = function getPopupElement() {
    return /*#__PURE__*/React.createElement(Popup, {
      key: "content",
      prefixCls: prefixCls,
      id: id,
      overlayInnerStyle: overlayInnerStyle
    }, overlay);
  };
  return /*#__PURE__*/React.createElement(Trigger, _extends$1({
    popupClassName: overlayClassName,
    prefixCls: prefixCls,
    popup: getPopupElement,
    action: trigger,
    builtinPlacements: placements,
    popupPlacement: placement,
    ref: triggerRef,
    popupAlign: align,
    getPopupContainer: getTooltipContainer,
    onPopupVisibleChange: onVisibleChange,
    afterPopupVisibleChange: afterVisibleChange,
    popupTransitionName: transitionName,
    popupAnimation: animation,
    popupMotion: motion,
    defaultPopupVisible: defaultVisible,
    autoDestroy: destroyTooltipOnHide,
    mouseLeaveDelay: mouseLeaveDelay,
    popupStyle: overlayStyle,
    mouseEnterDelay: mouseEnterDelay,
    arrow: showArrow
  }, extraProps), children);
};
var Tooltip$3 = /*#__PURE__*/forwardRef(Tooltip$2);

const MAX_VERTICAL_CONTENT_RADIUS = 8;
function getArrowOffset(options) {
  const maxVerticalContentRadius = MAX_VERTICAL_CONTENT_RADIUS;
  const {
    contentRadius,
    limitVerticalRadius
  } = options;
  const dropdownArrowOffset = contentRadius > 12 ? contentRadius + 2 : 12;
  const dropdownArrowOffsetVertical = limitVerticalRadius ? maxVerticalContentRadius : dropdownArrowOffset;
  return {
    dropdownArrowOffset,
    dropdownArrowOffsetVertical
  };
}
function isInject(valid, code) {
  if (!valid) return {};
  return code;
}
function getArrowStyle(token, options) {
  const {
    componentCls,
    sizePopupArrow,
    borderRadiusXS,
    borderRadiusOuter,
    boxShadowPopoverArrow
  } = token;
  const {
    colorBg,
    contentRadius = token.borderRadiusLG,
    limitVerticalRadius,
    arrowDistance = 0,
    arrowPlacement = {
      left: true,
      right: true,
      top: true,
      bottom: true
    }
  } = options;
  const {
    dropdownArrowOffsetVertical,
    dropdownArrowOffset
  } = getArrowOffset({
    contentRadius,
    limitVerticalRadius
  });
  return {
    [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign({
      // ============================ Basic ============================
      [`${componentCls}-arrow`]: [Object.assign(Object.assign({
        position: 'absolute',
        zIndex: 1,
        display: 'block'
      }, roundedArrow(sizePopupArrow, borderRadiusXS, borderRadiusOuter, colorBg, boxShadowPopoverArrow)), {
        '&:before': {
          background: colorBg
        }
      })]
    }, isInject(!!arrowPlacement.top, {
      [[`&-placement-top ${componentCls}-arrow`, `&-placement-topLeft ${componentCls}-arrow`, `&-placement-topRight ${componentCls}-arrow`].join(',')]: {
        bottom: arrowDistance,
        transform: 'translateY(100%) rotate(180deg)'
      },
      [`&-placement-top ${componentCls}-arrow`]: {
        left: {
          _skip_check_: true,
          value: '50%'
        },
        transform: 'translateX(-50%) translateY(100%) rotate(180deg)'
      },
      [`&-placement-topLeft ${componentCls}-arrow`]: {
        left: {
          _skip_check_: true,
          value: dropdownArrowOffset
        }
      },
      [`&-placement-topRight ${componentCls}-arrow`]: {
        right: {
          _skip_check_: true,
          value: dropdownArrowOffset
        }
      }
    })), isInject(!!arrowPlacement.bottom, {
      [[`&-placement-bottom ${componentCls}-arrow`, `&-placement-bottomLeft ${componentCls}-arrow`, `&-placement-bottomRight ${componentCls}-arrow`].join(',')]: {
        top: arrowDistance,
        transform: `translateY(-100%)`
      },
      [`&-placement-bottom ${componentCls}-arrow`]: {
        left: {
          _skip_check_: true,
          value: '50%'
        },
        transform: `translateX(-50%) translateY(-100%)`
      },
      [`&-placement-bottomLeft ${componentCls}-arrow`]: {
        left: {
          _skip_check_: true,
          value: dropdownArrowOffset
        }
      },
      [`&-placement-bottomRight ${componentCls}-arrow`]: {
        right: {
          _skip_check_: true,
          value: dropdownArrowOffset
        }
      }
    })), isInject(!!arrowPlacement.left, {
      [[`&-placement-left ${componentCls}-arrow`, `&-placement-leftTop ${componentCls}-arrow`, `&-placement-leftBottom ${componentCls}-arrow`].join(',')]: {
        right: {
          _skip_check_: true,
          value: arrowDistance
        },
        transform: 'translateX(100%) rotate(90deg)'
      },
      [`&-placement-left ${componentCls}-arrow`]: {
        top: {
          _skip_check_: true,
          value: '50%'
        },
        transform: 'translateY(-50%) translateX(100%) rotate(90deg)'
      },
      [`&-placement-leftTop ${componentCls}-arrow`]: {
        top: dropdownArrowOffsetVertical
      },
      [`&-placement-leftBottom ${componentCls}-arrow`]: {
        bottom: dropdownArrowOffsetVertical
      }
    })), isInject(!!arrowPlacement.right, {
      [[`&-placement-right ${componentCls}-arrow`, `&-placement-rightTop ${componentCls}-arrow`, `&-placement-rightBottom ${componentCls}-arrow`].join(',')]: {
        left: {
          _skip_check_: true,
          value: arrowDistance
        },
        transform: 'translateX(-100%) rotate(-90deg)'
      },
      [`&-placement-right ${componentCls}-arrow`]: {
        top: {
          _skip_check_: true,
          value: '50%'
        },
        transform: 'translateY(-50%) translateX(-100%) rotate(-90deg)'
      },
      [`&-placement-rightTop ${componentCls}-arrow`]: {
        top: dropdownArrowOffsetVertical
      },
      [`&-placement-rightBottom ${componentCls}-arrow`]: {
        bottom: dropdownArrowOffsetVertical
      }
    }))
  };
}

function getOverflowOptions(placement, arrowOffset, arrowWidth, autoAdjustOverflow) {
  if (autoAdjustOverflow === false) {
    return {
      adjustX: false,
      adjustY: false
    };
  }
  const overflow = autoAdjustOverflow && typeof autoAdjustOverflow === 'object' ? autoAdjustOverflow : {};
  const baseOverflow = {};
  switch (placement) {
    case 'top':
    case 'bottom':
      baseOverflow.shiftX = arrowOffset.dropdownArrowOffset * 2 + arrowWidth;
      break;
    case 'left':
    case 'right':
      baseOverflow.shiftY = arrowOffset.dropdownArrowOffsetVertical * 2 + arrowWidth;
      break;
  }
  const mergedOverflow = Object.assign(Object.assign({}, baseOverflow), overflow);
  // Support auto shift
  if (!mergedOverflow.shiftX) {
    mergedOverflow.adjustX = true;
  }
  if (!mergedOverflow.shiftY) {
    mergedOverflow.adjustY = true;
  }
  return mergedOverflow;
}
const PlacementAlignMap = {
  left: {
    points: ['cr', 'cl']
  },
  right: {
    points: ['cl', 'cr']
  },
  top: {
    points: ['bc', 'tc']
  },
  bottom: {
    points: ['tc', 'bc']
  },
  topLeft: {
    points: ['bl', 'tl']
  },
  leftTop: {
    points: ['tr', 'tl']
  },
  topRight: {
    points: ['br', 'tr']
  },
  rightTop: {
    points: ['tl', 'tr']
  },
  bottomRight: {
    points: ['tr', 'br']
  },
  rightBottom: {
    points: ['bl', 'br']
  },
  bottomLeft: {
    points: ['tl', 'bl']
  },
  leftBottom: {
    points: ['br', 'bl']
  }
};
const ArrowCenterPlacementAlignMap = {
  topLeft: {
    points: ['bl', 'tc']
  },
  leftTop: {
    points: ['tr', 'cl']
  },
  topRight: {
    points: ['br', 'tc']
  },
  rightTop: {
    points: ['tl', 'cr']
  },
  bottomRight: {
    points: ['tr', 'bc']
  },
  rightBottom: {
    points: ['bl', 'cr']
  },
  bottomLeft: {
    points: ['tl', 'bc']
  },
  leftBottom: {
    points: ['br', 'cl']
  }
};
const DisableAutoArrowList = new Set(['topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom']);
function getPlacements(config) {
  const {
    arrowWidth,
    autoAdjustOverflow,
    arrowPointAtCenter,
    offset,
    borderRadius,
    visibleFirst
  } = config;
  const halfArrowWidth = arrowWidth / 2;
  const placementMap = {};
  Object.keys(PlacementAlignMap).forEach(key => {
    const template = arrowPointAtCenter && ArrowCenterPlacementAlignMap[key] || PlacementAlignMap[key];
    const placementInfo = Object.assign(Object.assign({}, template), {
      offset: [0, 0]
    });
    placementMap[key] = placementInfo;
    // Disable autoArrow since design is fixed position
    if (DisableAutoArrowList.has(key)) {
      placementInfo.autoArrow = false;
    }
    // Static offset
    switch (key) {
      case 'top':
      case 'topLeft':
      case 'topRight':
        placementInfo.offset[1] = -halfArrowWidth - offset;
        break;
      case 'bottom':
      case 'bottomLeft':
      case 'bottomRight':
        placementInfo.offset[1] = halfArrowWidth + offset;
        break;
      case 'left':
      case 'leftTop':
      case 'leftBottom':
        placementInfo.offset[0] = -halfArrowWidth - offset;
        break;
      case 'right':
      case 'rightTop':
      case 'rightBottom':
        placementInfo.offset[0] = halfArrowWidth + offset;
        break;
    }
    // Dynamic offset
    const arrowOffset = getArrowOffset({
      contentRadius: borderRadius,
      limitVerticalRadius: true
    });
    if (arrowPointAtCenter) {
      switch (key) {
        case 'topLeft':
        case 'bottomLeft':
          placementInfo.offset[0] = -arrowOffset.dropdownArrowOffset - halfArrowWidth;
          break;
        case 'topRight':
        case 'bottomRight':
          placementInfo.offset[0] = arrowOffset.dropdownArrowOffset + halfArrowWidth;
          break;
        case 'leftTop':
        case 'rightTop':
          placementInfo.offset[1] = -arrowOffset.dropdownArrowOffset - halfArrowWidth;
          break;
        case 'leftBottom':
        case 'rightBottom':
          placementInfo.offset[1] = arrowOffset.dropdownArrowOffset + halfArrowWidth;
          break;
      }
    }
    // Overflow
    placementInfo.overflow = getOverflowOptions(key, arrowOffset, arrowWidth, autoAdjustOverflow);
    // VisibleFirst
    if (visibleFirst) {
      placementInfo.htmlRegion = 'visibleFirst';
    }
  });
  return placementMap;
}

const genTooltipStyle = token => {
  const {
    componentCls,
    // ant-tooltip
    tooltipMaxWidth,
    tooltipColor,
    tooltipBg,
    tooltipBorderRadius,
    zIndexPopup,
    controlHeight,
    boxShadowSecondary,
    paddingSM,
    paddingXS,
    tooltipRadiusOuter
  } = token;
  return [{
    [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign({}, resetComponent(token)), {
      position: 'absolute',
      zIndex: zIndexPopup,
      display: 'block',
      width: 'max-content',
      maxWidth: tooltipMaxWidth,
      visibility: 'visible',
      transformOrigin: `var(--arrow-x, 50%) var(--arrow-y, 50%)`,
      '&-hidden': {
        display: 'none'
      },
      '--antd-arrow-background-color': tooltipBg,
      // Wrapper for the tooltip content
      [`${componentCls}-inner`]: {
        minWidth: controlHeight,
        minHeight: controlHeight,
        padding: `${paddingSM / 2}px ${paddingXS}px`,
        color: tooltipColor,
        textAlign: 'start',
        textDecoration: 'none',
        wordWrap: 'break-word',
        backgroundColor: tooltipBg,
        borderRadius: tooltipBorderRadius,
        boxShadow: boxShadowSecondary,
        boxSizing: 'border-box'
      },
      // Limit left and right placement radius
      [[`&-placement-left`, `&-placement-leftTop`, `&-placement-leftBottom`, `&-placement-right`, `&-placement-rightTop`, `&-placement-rightBottom`].join(',')]: {
        [`${componentCls}-inner`]: {
          borderRadius: Math.min(tooltipBorderRadius, MAX_VERTICAL_CONTENT_RADIUS)
        }
      },
      [`${componentCls}-content`]: {
        position: 'relative'
      }
    }), genPresetColor(token, (colorKey, _ref) => {
      let {
        darkColor
      } = _ref;
      return {
        [`&${componentCls}-${colorKey}`]: {
          [`${componentCls}-inner`]: {
            backgroundColor: darkColor
          },
          [`${componentCls}-arrow`]: {
            '--antd-arrow-background-color': darkColor
          }
        }
      };
    })), {
      // RTL
      '&-rtl': {
        direction: 'rtl'
      }
    })
  },
  // Arrow Style
  getArrowStyle(merge(token, {
    borderRadiusOuter: tooltipRadiusOuter
  }), {
    colorBg: 'var(--antd-arrow-background-color)',
    contentRadius: tooltipBorderRadius,
    limitVerticalRadius: true
  }),
  // Pure Render
  {
    [`${componentCls}-pure`]: {
      position: 'relative',
      maxWidth: 'none',
      margin: token.sizePopupArrow
    }
  }];
};
// ============================== Export ==============================
var useStyle$1 = ((prefixCls, injectStyle) => {
  const useOriginHook = genComponentStyleHook('Tooltip', token => {
    // Popover use Tooltip as internal component. We do not need to handle this.
    if (injectStyle === false) {
      return [];
    }
    const {
      borderRadius,
      colorTextLightSolid,
      colorBgDefault,
      borderRadiusOuter
    } = token;
    const TooltipToken = merge(token, {
      // default variables
      tooltipMaxWidth: 250,
      tooltipColor: colorTextLightSolid,
      tooltipBorderRadius: borderRadius,
      tooltipBg: colorBgDefault,
      tooltipRadiusOuter: borderRadiusOuter > 4 ? 4 : borderRadiusOuter
    });
    return [genTooltipStyle(TooltipToken), initZoomMotion(token, 'zoom-big-fast')];
  }, _ref2 => {
    let {
      zIndexPopupBase,
      colorBgSpotlight
    } = _ref2;
    return {
      zIndexPopup: zIndexPopupBase + 70,
      colorBgDefault: colorBgSpotlight
    };
  }, {
    resetStyle: false
  });
  return useOriginHook(prefixCls);
});

const inverseColors = PresetColors.map(color => `${color}-inverse`);
/**
 * determine if the color keyword belongs to the `Ant Design` {@link PresetColors}.
 * @param color color to be judged
 * @param includeInverse whether to include reversed colors
 */
function isPresetColor(color) {
  let includeInverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (includeInverse) {
    return [].concat(_toConsumableArray(inverseColors), _toConsumableArray(PresetColors)).includes(color);
  }
  return PresetColors.includes(color);
}

/* eslint-disable import/prefer-default-export */
function parseColor(prefixCls, color) {
  const isInternalColor = isPresetColor(color);
  const className = classNames({
    [`${prefixCls}-${color}`]: color && isInternalColor
  });
  const overlayStyle = {};
  const arrowStyle = {};
  if (color && !isInternalColor) {
    overlayStyle.background = color;
    // @ts-ignore
    arrowStyle['--antd-arrow-background-color'] = color;
  }
  return {
    className,
    overlayStyle,
    arrowStyle
  };
}

/** @private Internal Component. Do not use in your production. */
const PurePanel$1 = props => {
  const {
    prefixCls: customizePrefixCls,
    className,
    placement = 'top',
    title,
    color,
    overlayInnerStyle
  } = props;
  const {
    getPrefixCls
  } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('tooltip', customizePrefixCls);
  const [wrapSSR, hashId] = useStyle$1(prefixCls, true);
  // Color
  const colorInfo = parseColor(prefixCls, color);
  const arrowContentStyle = colorInfo.arrowStyle;
  const formattedOverlayInnerStyle = Object.assign(Object.assign({}, overlayInnerStyle), colorInfo.overlayStyle);
  const cls = classNames(hashId, prefixCls, `${prefixCls}-pure`, `${prefixCls}-placement-${placement}`, className, colorInfo.className);
  return wrapSSR( /*#__PURE__*/React.createElement("div", {
    className: cls,
    style: arrowContentStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: `${prefixCls}-arrow`
  }), /*#__PURE__*/React.createElement(Popup, Object.assign({}, props, {
    className: hashId,
    prefixCls: prefixCls,
    overlayInnerStyle: formattedOverlayInnerStyle
  }), title)));
};
var PurePanel$2 = PurePanel$1;

var __rest$4 = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const splitObject = (obj, keys) => {
  const picked = {};
  const omitted = Object.assign({}, obj);
  keys.forEach(key => {
    if (obj && key in obj) {
      picked[key] = obj[key];
      delete omitted[key];
    }
  });
  return {
    picked,
    omitted
  };
};
// Fix Tooltip won't hide at disabled button
// mouse events don't trigger at disabled button in Chrome
// https://github.com/react-component/tooltip/issues/18
function getDisabledCompatibleChildren(element, prefixCls) {
  const elementType = element.type;
  if ((elementType.__ANT_BUTTON === true || element.type === 'button') && element.props.disabled || elementType.__ANT_SWITCH === true && (element.props.disabled || element.props.loading) || elementType.__ANT_RADIO === true && element.props.disabled) {
    // Pick some layout related style properties up to span
    // Prevent layout bugs like https://github.com/ant-design/ant-design/issues/5254
    const {
      picked,
      omitted
    } = splitObject(element.props.style, ['position', 'left', 'right', 'top', 'bottom', 'float', 'display', 'zIndex']);
    const spanStyle = Object.assign(Object.assign({
      display: 'inline-block'
    }, picked), {
      cursor: 'not-allowed',
      width: element.props.block ? '100%' : undefined
    });
    const buttonStyle = Object.assign(Object.assign({}, omitted), {
      pointerEvents: 'none'
    });
    const child = cloneElement(element, {
      style: buttonStyle,
      className: null
    });
    return /*#__PURE__*/React.createElement("span", {
      style: spanStyle,
      className: classNames(element.props.className, `${prefixCls}-disabled-compatible-wrapper`)
    }, child);
  }
  return element;
}
const Tooltip = /*#__PURE__*/React.forwardRef((props, ref) => {
  var _a, _b;
  const {
    prefixCls: customizePrefixCls,
    openClassName,
    getTooltipContainer,
    overlayClassName,
    color,
    overlayInnerStyle,
    children,
    afterOpenChange,
    afterVisibleChange,
    destroyTooltipOnHide,
    arrow = true,
    title,
    overlay,
    builtinPlacements,
    arrowPointAtCenter = false,
    autoAdjustOverflow = true
  } = props;
  const mergedShowArrow = !!arrow;
  const [, token] = useToken();
  const {
    getPopupContainer: getContextPopupContainer,
    getPrefixCls,
    direction
  } = React.useContext(ConfigContext);
  // ============================== Ref ===============================
  const tooltipRef = React.useRef(null);
  const forceAlign = () => {
    var _a;
    (_a = tooltipRef.current) === null || _a === void 0 ? void 0 : _a.forceAlign();
  };
  React.useImperativeHandle(ref, () => ({
    forceAlign,
    forcePopupAlign: () => {
      process.env.NODE_ENV !== "production" ? warning$3(false, 'Tooltip', '`forcePopupAlign` is align to `forceAlign` instead.') : void 0;
      forceAlign();
    }
  }));
  // ============================== Warn ==============================
  if (process.env.NODE_ENV !== 'production') {
    [['visible', 'open'], ['defaultVisible', 'defaultOpen'], ['onVisibleChange', 'onOpenChange'], ['afterVisibleChange', 'afterOpenChange'], ['arrowPointAtCenter', 'arrow={{ pointAtCenter: true }}']].forEach(_ref => {
      let [deprecatedName, newName] = _ref;
      process.env.NODE_ENV !== "production" ? warning$3(!(deprecatedName in props), 'Tooltip', `\`${deprecatedName}\` is deprecated, please use \`${newName}\` instead.`) : void 0;
    });
    process.env.NODE_ENV !== "production" ? warning$3(!destroyTooltipOnHide || typeof destroyTooltipOnHide === 'boolean', 'Tooltip', '`destroyTooltipOnHide` no need config `keepParent` anymore. Please use `boolean` value directly.') : void 0;
    process.env.NODE_ENV !== "production" ? warning$3(!arrow || typeof arrow === 'boolean' || !('arrowPointAtCenter' in arrow), 'Tooltip', '`arrowPointAtCenter` in `arrow` is deprecated, please use `pointAtCenter` instead.') : void 0;
  }
  // ============================== Open ==============================
  const [open, setOpen] = useMergedState(false, {
    value: (_a = props.open) !== null && _a !== void 0 ? _a : props.visible,
    defaultValue: (_b = props.defaultOpen) !== null && _b !== void 0 ? _b : props.defaultVisible
  });
  const noTitle = !title && !overlay && title !== 0; // overlay for old version compatibility
  const onOpenChange = vis => {
    var _a, _b;
    setOpen(noTitle ? false : vis);
    if (!noTitle) {
      (_a = props.onOpenChange) === null || _a === void 0 ? void 0 : _a.call(props, vis);
      (_b = props.onVisibleChange) === null || _b === void 0 ? void 0 : _b.call(props, vis);
    }
  };
  const tooltipPlacements = React.useMemo(() => {
    var _a, _b;
    let mergedArrowPointAtCenter = arrowPointAtCenter;
    if (typeof arrow === 'object') {
      mergedArrowPointAtCenter = (_b = (_a = arrow.pointAtCenter) !== null && _a !== void 0 ? _a : arrow.arrowPointAtCenter) !== null && _b !== void 0 ? _b : arrowPointAtCenter;
    }
    return builtinPlacements || getPlacements({
      arrowPointAtCenter: mergedArrowPointAtCenter,
      autoAdjustOverflow,
      arrowWidth: mergedShowArrow ? token.sizePopupArrow : 0,
      borderRadius: token.borderRadius,
      offset: token.marginXXS,
      visibleFirst: true
    });
  }, [arrowPointAtCenter, arrow, builtinPlacements, token]);
  const memoOverlay = React.useMemo(() => {
    if (title === 0) {
      return title;
    }
    return overlay || title || '';
  }, [overlay, title]);
  const memoOverlayWrapper = /*#__PURE__*/React.createElement(NoCompactStyle, null, typeof memoOverlay === 'function' ? memoOverlay() : memoOverlay);
  const {
      getPopupContainer,
      placement = 'top',
      mouseEnterDelay = 0.1,
      mouseLeaveDelay = 0.1,
      overlayStyle,
      rootClassName
    } = props,
    otherProps = __rest$4(props, ["getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName"]);
  const prefixCls = getPrefixCls('tooltip', customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  const injectFromPopover = props['data-popover-inject'];
  let tempOpen = open;
  // Hide tooltip when there is no title
  if (!('open' in props) && !('visible' in props) && noTitle) {
    tempOpen = false;
  }
  // ============================= Render =============================
  const child = getDisabledCompatibleChildren(isValidElement(children) && !isFragment(children) ? children : /*#__PURE__*/React.createElement("span", null, children), prefixCls);
  const childProps = child.props;
  const childCls = !childProps.className || typeof childProps.className === 'string' ? classNames(childProps.className, openClassName || `${prefixCls}-open`) : childProps.className;
  // Style
  const [wrapSSR, hashId] = useStyle$1(prefixCls, !injectFromPopover);
  // Color
  const colorInfo = parseColor(prefixCls, color);
  const arrowContentStyle = colorInfo.arrowStyle;
  const formattedOverlayInnerStyle = Object.assign(Object.assign({}, overlayInnerStyle), colorInfo.overlayStyle);
  const customOverlayClassName = classNames(overlayClassName, {
    [`${prefixCls}-rtl`]: direction === 'rtl'
  }, colorInfo.className, rootClassName, hashId);
  return wrapSSR( /*#__PURE__*/React.createElement(Tooltip$3, Object.assign({}, otherProps, {
    showArrow: mergedShowArrow,
    placement: placement,
    mouseEnterDelay: mouseEnterDelay,
    mouseLeaveDelay: mouseLeaveDelay,
    prefixCls: prefixCls,
    overlayClassName: customOverlayClassName,
    overlayStyle: Object.assign(Object.assign({}, arrowContentStyle), overlayStyle),
    getTooltipContainer: getPopupContainer || getTooltipContainer || getContextPopupContainer,
    ref: tooltipRef,
    builtinPlacements: tooltipPlacements,
    overlay: memoOverlayWrapper,
    visible: tempOpen,
    onVisibleChange: onOpenChange,
    afterVisibleChange: afterOpenChange !== null && afterOpenChange !== void 0 ? afterOpenChange : afterVisibleChange,
    overlayInnerStyle: formattedOverlayInnerStyle,
    arrowContent: /*#__PURE__*/React.createElement("span", {
      className: `${prefixCls}-arrow-content`
    }),
    motion: {
      motionName: getTransitionName(rootPrefixCls, 'zoom-big-fast', props.transitionName),
      motionDeadline: 1000
    },
    destroyTooltipOnHide: !!destroyTooltipOnHide
  }), tempOpen ? cloneElement(child, {
    className: childCls
  }) : child));
});
if (process.env.NODE_ENV !== 'production') {
  Tooltip.displayName = 'Tooltip';
}
Tooltip._InternalPanelDoNotUseOrYouWillBeFired = PurePanel$2;
var Tooltip$1 = Tooltip;

const genBaseStyle = token => {
  const {
    componentCls,
    popoverColor,
    minWidth,
    fontWeightStrong,
    popoverPadding,
    boxShadowSecondary,
    colorTextHeading,
    borderRadiusLG: borderRadius,
    zIndexPopup,
    marginXS,
    colorBgElevated,
    popoverBg
  } = token;
  return [{
    [componentCls]: Object.assign(Object.assign({}, resetComponent(token)), {
      position: 'absolute',
      top: 0,
      // use `left` to fix https://github.com/ant-design/ant-design/issues/39195
      left: {
        _skip_check_: true,
        value: 0
      },
      zIndex: zIndexPopup,
      fontWeight: 'normal',
      whiteSpace: 'normal',
      textAlign: 'start',
      cursor: 'auto',
      userSelect: 'text',
      transformOrigin: `var(--arrow-x, 50%) var(--arrow-y, 50%)`,
      '--antd-arrow-background-color': colorBgElevated,
      '&-rtl': {
        direction: 'rtl'
      },
      '&-hidden': {
        display: 'none'
      },
      [`${componentCls}-content`]: {
        position: 'relative'
      },
      [`${componentCls}-inner`]: {
        backgroundColor: popoverBg,
        backgroundClip: 'padding-box',
        borderRadius,
        boxShadow: boxShadowSecondary,
        padding: popoverPadding
      },
      [`${componentCls}-title`]: {
        minWidth,
        marginBottom: marginXS,
        color: colorTextHeading,
        fontWeight: fontWeightStrong
      },
      [`${componentCls}-inner-content`]: {
        color: popoverColor
      }
    })
  },
  // Arrow Style
  getArrowStyle(token, {
    colorBg: 'var(--antd-arrow-background-color)'
  }),
  // Pure Render
  {
    [`${componentCls}-pure`]: {
      position: 'relative',
      maxWidth: 'none',
      margin: token.sizePopupArrow,
      display: 'inline-block',
      [`${componentCls}-content`]: {
        display: 'inline-block'
      }
    }
  }];
};
const genColorStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: PresetColors.map(colorKey => {
      const lightColor = token[`${colorKey}6`];
      return {
        [`&${componentCls}-${colorKey}`]: {
          '--antd-arrow-background-color': lightColor,
          [`${componentCls}-inner`]: {
            backgroundColor: lightColor
          },
          [`${componentCls}-arrow`]: {
            background: 'transparent'
          }
        }
      };
    })
  };
};
const genWireframeStyle = token => {
  const {
    componentCls,
    lineWidth,
    lineType,
    colorSplit,
    paddingSM,
    controlHeight,
    fontSize,
    lineHeight,
    padding
  } = token;
  const titlePaddingBlockDist = controlHeight - Math.round(fontSize * lineHeight);
  const popoverTitlePaddingBlockTop = titlePaddingBlockDist / 2;
  const popoverTitlePaddingBlockBottom = titlePaddingBlockDist / 2 - lineWidth;
  const popoverPaddingHorizontal = padding;
  return {
    [componentCls]: {
      [`${componentCls}-inner`]: {
        padding: 0
      },
      [`${componentCls}-title`]: {
        margin: 0,
        padding: `${popoverTitlePaddingBlockTop}px ${popoverPaddingHorizontal}px ${popoverTitlePaddingBlockBottom}px`,
        borderBottom: `${lineWidth}px ${lineType} ${colorSplit}`
      },
      [`${componentCls}-inner-content`]: {
        padding: `${paddingSM}px ${popoverPaddingHorizontal}px`
      }
    }
  };
};
var useStyle = genComponentStyleHook('Popover', token => {
  const {
    colorBgElevated,
    colorText,
    wireframe
  } = token;
  const popoverToken = merge(token, {
    popoverPadding: 12,
    popoverBg: colorBgElevated,
    popoverColor: colorText
  });
  return [genBaseStyle(popoverToken), genColorStyle(popoverToken), wireframe && genWireframeStyle(popoverToken), initZoomMotion(popoverToken, 'zoom-big')];
}, token => ({
  width: 177,
  minWidth: 177,
  zIndexPopup: token.zIndexPopupBase + 30
}), {
  resetStyle: false,
  deprecatedTokens: [['width', 'minWidth']]
});

var __rest$3 = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const getOverlay = (prefixCls, title, content) => {
  if (!title && !content) return undefined;
  return /*#__PURE__*/React.createElement(React.Fragment, null, title && /*#__PURE__*/React.createElement("div", {
    className: `${prefixCls}-title`
  }, getRenderPropValue(title)), /*#__PURE__*/React.createElement("div", {
    className: `${prefixCls}-inner-content`
  }, getRenderPropValue(content)));
};
const RawPurePanel = props => {
  const {
    hashId,
    prefixCls,
    className,
    style,
    placement = 'top',
    title,
    content,
    children
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames(hashId, prefixCls, `${prefixCls}-pure`, `${prefixCls}-placement-${placement}`, className),
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: `${prefixCls}-arrow`
  }), /*#__PURE__*/React.createElement(Popup, Object.assign({}, props, {
    className: hashId,
    prefixCls: prefixCls
  }), children || getOverlay(prefixCls, title, content)));
};
const PurePanel = props => {
  const {
      prefixCls: customizePrefixCls
    } = props,
    restProps = __rest$3(props, ["prefixCls"]);
  const {
    getPrefixCls
  } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('popover', customizePrefixCls);
  const [wrapSSR, hashId] = useStyle(prefixCls);
  return wrapSSR( /*#__PURE__*/React.createElement(RawPurePanel, Object.assign({}, restProps, {
    prefixCls: prefixCls,
    hashId: hashId
  })));
};
var PopoverPurePanel = PurePanel;

var __rest$2 = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const Overlay = _ref => {
  let {
    title,
    content,
    prefixCls
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, title && /*#__PURE__*/React.createElement("div", {
    className: `${prefixCls}-title`
  }, getRenderPropValue(title)), /*#__PURE__*/React.createElement("div", {
    className: `${prefixCls}-inner-content`
  }, getRenderPropValue(content)));
};
const Popover = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
      prefixCls: customizePrefixCls,
      title,
      content,
      overlayClassName,
      placement = 'top',
      trigger = 'hover',
      mouseEnterDelay = 0.1,
      mouseLeaveDelay = 0.1,
      overlayStyle = {}
    } = props,
    otherProps = __rest$2(props, ["prefixCls", "title", "content", "overlayClassName", "placement", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle"]);
  const {
    getPrefixCls
  } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('popover', customizePrefixCls);
  const [wrapSSR, hashId] = useStyle(prefixCls);
  const rootPrefixCls = getPrefixCls();
  const overlayCls = classNames(overlayClassName, hashId);
  return wrapSSR( /*#__PURE__*/React.createElement(Tooltip$1, Object.assign({
    placement: placement,
    trigger: trigger,
    mouseEnterDelay: mouseEnterDelay,
    mouseLeaveDelay: mouseLeaveDelay,
    overlayStyle: overlayStyle
  }, otherProps, {
    prefixCls: prefixCls,
    overlayClassName: overlayCls,
    ref: ref,
    overlay: title || content ? /*#__PURE__*/React.createElement(Overlay, {
      prefixCls: prefixCls,
      title: title,
      content: content
    }) : null,
    transitionName: getTransitionName(rootPrefixCls, 'zoom-big', otherProps.transitionName),
    "data-popover-inject": true
  })));
});
if (process.env.NODE_ENV !== 'production') {
  Popover.displayName = 'Popover';
}
Popover._InternalPanelDoNotUseOrYouWillBeFired = PopoverPurePanel;
var Popover$1 = Popover;

const AvatarContextProvider = props => {
  const {
    size,
    shape
  } = React.useContext(AvatarContext$1);
  const avatarContextValue = React.useMemo(() => ({
    size: props.size || size,
    shape: props.shape || shape
  }), [props.size, props.shape, size, shape]);
  return /*#__PURE__*/React.createElement(AvatarContext$1.Provider, {
    value: avatarContextValue
  }, props.children);
};
const Group = props => {
  const {
    getPrefixCls,
    direction
  } = React.useContext(ConfigContext);
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    style,
    maxCount,
    maxStyle,
    size,
    shape,
    maxPopoverPlacement = 'top',
    maxPopoverTrigger = 'hover',
    children
  } = props;
  const prefixCls = getPrefixCls('avatar', customizePrefixCls);
  const groupPrefixCls = `${prefixCls}-group`;
  const [wrapSSR, hashId] = useStyle$2(prefixCls);
  const cls = classNames(groupPrefixCls, {
    [`${groupPrefixCls}-rtl`]: direction === 'rtl'
  }, className, rootClassName, hashId);
  const childrenWithProps = toArray$3(children).map((child, index) => cloneElement(child, {
    key: `avatar-key-${index}`
  }));
  const numOfChildren = childrenWithProps.length;
  if (maxCount && maxCount < numOfChildren) {
    const childrenShow = childrenWithProps.slice(0, maxCount);
    const childrenHidden = childrenWithProps.slice(maxCount, numOfChildren);
    childrenShow.push( /*#__PURE__*/React.createElement(Popover$1, {
      key: "avatar-popover-key",
      content: childrenHidden,
      trigger: maxPopoverTrigger,
      placement: maxPopoverPlacement,
      overlayClassName: `${groupPrefixCls}-popover`
    }, /*#__PURE__*/React.createElement(InternalAvatar$1, {
      style: maxStyle
    }, `+${numOfChildren - maxCount}`)));
    return wrapSSR( /*#__PURE__*/React.createElement(AvatarContextProvider, {
      shape: shape,
      size: size
    }, /*#__PURE__*/React.createElement("div", {
      className: cls,
      style: style
    }, childrenShow)));
  }
  return wrapSSR( /*#__PURE__*/React.createElement(AvatarContextProvider, {
    shape: shape,
    size: size
  }, /*#__PURE__*/React.createElement("div", {
    className: cls,
    style: style
  }, childrenWithProps)));
};
var Group$1 = Group;

const Avatar = InternalAvatar$1;
Avatar.Group = Group$1;
var Avatar$1 = Avatar;

const RowContext = /*#__PURE__*/createContext({});
var RowContext$1 = RowContext;

// ============================== Row-Shared ==============================
const genGridRowStyle = token => {
  const {
    componentCls
  } = token;
  return {
    // Grid system
    [componentCls]: {
      display: 'flex',
      flexFlow: 'row wrap',
      minWidth: 0,
      '&::before, &::after': {
        display: 'flex'
      },
      '&-no-wrap': {
        flexWrap: 'nowrap'
      },
      // The origin of the X-axis
      '&-start': {
        justifyContent: 'flex-start'
      },
      // The center of the X-axis
      '&-center': {
        justifyContent: 'center'
      },
      // The opposite of the X-axis
      '&-end': {
        justifyContent: 'flex-end'
      },
      '&-space-between': {
        justifyContent: 'space-between'
      },
      '&-space-around': {
        justifyContent: 'space-around'
      },
      '&-space-evenly': {
        justifyContent: 'space-evenly'
      },
      // Align at the top
      '&-top': {
        alignItems: 'flex-start'
      },
      // Align at the center
      '&-middle': {
        alignItems: 'center'
      },
      '&-bottom': {
        alignItems: 'flex-end'
      }
    }
  };
};
// ============================== Col-Shared ==============================
const genGridColStyle = token => {
  const {
    componentCls
  } = token;
  return {
    // Grid system
    [componentCls]: {
      position: 'relative',
      maxWidth: '100%',
      // Prevent columns from collapsing when empty
      minHeight: 1
    }
  };
};
const genLoopGridColumnsStyle = (token, sizeCls) => {
  const {
    componentCls,
    gridColumns
  } = token;
  const gridColumnsStyle = {};
  for (let i = gridColumns; i >= 0; i--) {
    if (i === 0) {
      gridColumnsStyle[`${componentCls}${sizeCls}-${i}`] = {
        display: 'none'
      };
      gridColumnsStyle[`${componentCls}-push-${i}`] = {
        insetInlineStart: 'auto'
      };
      gridColumnsStyle[`${componentCls}-pull-${i}`] = {
        insetInlineEnd: 'auto'
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-push-${i}`] = {
        insetInlineStart: 'auto'
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-pull-${i}`] = {
        insetInlineEnd: 'auto'
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-offset-${i}`] = {
        marginInlineStart: 0
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-order-${i}`] = {
        order: 0
      };
    } else {
      gridColumnsStyle[`${componentCls}${sizeCls}-${i}`] = [
      // https://github.com/ant-design/ant-design/issues/44456
      // Form set `display: flex` on Col which will override `display: block`.
      // Let's get it from css variable to support override.
      {
        ['--ant-display']: 'block',
        // Fallback to display if variable not support
        display: 'block'
      }, {
        display: 'var(--ant-display)',
        flex: `0 0 ${i / gridColumns * 100}%`,
        maxWidth: `${i / gridColumns * 100}%`
      }];
      gridColumnsStyle[`${componentCls}${sizeCls}-push-${i}`] = {
        insetInlineStart: `${i / gridColumns * 100}%`
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-pull-${i}`] = {
        insetInlineEnd: `${i / gridColumns * 100}%`
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-offset-${i}`] = {
        marginInlineStart: `${i / gridColumns * 100}%`
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-order-${i}`] = {
        order: i
      };
    }
  }
  return gridColumnsStyle;
};
const genGridStyle = (token, sizeCls) => genLoopGridColumnsStyle(token, sizeCls);
const genGridMediaStyle = (token, screenSize, sizeCls) => ({
  [`@media (min-width: ${screenSize}px)`]: Object.assign({}, genGridStyle(token, sizeCls))
});
// ============================== Export ==============================
const useRowStyle = genComponentStyleHook('Grid', token => [genGridRowStyle(token)]);
const useColStyle = genComponentStyleHook('Grid', token => {
  const gridToken = merge(token, {
    gridColumns: 24 // Row is divided into 24 parts in Grid
  });

  const gridMediaSizesMap = {
    '-sm': gridToken.screenSMMin,
    '-md': gridToken.screenMDMin,
    '-lg': gridToken.screenLGMin,
    '-xl': gridToken.screenXLMin,
    '-xxl': gridToken.screenXXLMin
  };
  return [genGridColStyle(gridToken), genGridStyle(gridToken, ''), genGridStyle(gridToken, '-xs'), Object.keys(gridMediaSizesMap).map(key => genGridMediaStyle(gridToken, gridMediaSizesMap[key], key)).reduce((pre, cur) => Object.assign(Object.assign({}, pre), cur), {})];
});

var __rest$1 = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function parseFlex(flex) {
  if (typeof flex === 'number') {
    return `${flex} ${flex} auto`;
  }
  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return `0 0 ${flex}`;
  }
  return flex;
}
const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
const Col = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    getPrefixCls,
    direction
  } = React.useContext(ConfigContext);
  const {
    gutter,
    wrap
  } = React.useContext(RowContext$1);
  const {
      prefixCls: customizePrefixCls,
      span,
      order,
      offset,
      push,
      pull,
      className,
      children,
      flex,
      style
    } = props,
    others = __rest$1(props, ["prefixCls", "span", "order", "offset", "push", "pull", "className", "children", "flex", "style"]);
  const prefixCls = getPrefixCls('col', customizePrefixCls);
  const [wrapSSR, hashId] = useColStyle(prefixCls);
  let sizeClassObj = {};
  sizes.forEach(size => {
    let sizeProps = {};
    const propSize = props[size];
    if (typeof propSize === 'number') {
      sizeProps.span = propSize;
    } else if (typeof propSize === 'object') {
      sizeProps = propSize || {};
    }
    delete others[size];
    sizeClassObj = Object.assign(Object.assign({}, sizeClassObj), {
      [`${prefixCls}-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
      [`${prefixCls}-${size}-order-${sizeProps.order}`]: sizeProps.order || sizeProps.order === 0,
      [`${prefixCls}-${size}-offset-${sizeProps.offset}`]: sizeProps.offset || sizeProps.offset === 0,
      [`${prefixCls}-${size}-push-${sizeProps.push}`]: sizeProps.push || sizeProps.push === 0,
      [`${prefixCls}-${size}-pull-${sizeProps.pull}`]: sizeProps.pull || sizeProps.pull === 0,
      [`${prefixCls}-${size}-flex-${sizeProps.flex}`]: sizeProps.flex || sizeProps.flex === 'auto',
      [`${prefixCls}-rtl`]: direction === 'rtl'
    });
  });
  const classes = classNames(prefixCls, {
    [`${prefixCls}-${span}`]: span !== undefined,
    [`${prefixCls}-order-${order}`]: order,
    [`${prefixCls}-offset-${offset}`]: offset,
    [`${prefixCls}-push-${push}`]: push,
    [`${prefixCls}-pull-${pull}`]: pull
  }, className, sizeClassObj, hashId);
  const mergedStyle = {};
  // Horizontal gutter use padding
  if (gutter && gutter[0] > 0) {
    const horizontalGutter = gutter[0] / 2;
    mergedStyle.paddingLeft = horizontalGutter;
    mergedStyle.paddingRight = horizontalGutter;
  }
  if (flex) {
    mergedStyle.flex = parseFlex(flex);
    // Hack for Firefox to avoid size issue
    // https://github.com/ant-design/ant-design/pull/20023#issuecomment-564389553
    if (wrap === false && !mergedStyle.minWidth) {
      mergedStyle.minWidth = 0;
    }
  }
  return wrapSSR( /*#__PURE__*/React.createElement("div", Object.assign({}, others, {
    style: Object.assign(Object.assign({}, mergedStyle), style),
    className: classes,
    ref: ref
  }), children));
});
if (process.env.NODE_ENV !== 'production') {
  Col.displayName = 'Col';
}
var Col$1 = Col;

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function useMergePropByScreen(oriProp, screen) {
  const [prop, setProp] = React.useState(typeof oriProp === 'string' ? oriProp : '');
  const calcMergeAlignOrJustify = () => {
    if (typeof oriProp === 'string') {
      setProp(oriProp);
    }
    if (typeof oriProp !== 'object') {
      return;
    }
    for (let i = 0; i < responsiveArray.length; i++) {
      const breakpoint = responsiveArray[i];
      // if do not match, do nothing
      if (!screen[breakpoint]) {
        continue;
      }
      const curVal = oriProp[breakpoint];
      if (curVal !== undefined) {
        setProp(curVal);
        return;
      }
    }
  };
  React.useEffect(() => {
    calcMergeAlignOrJustify();
  }, [JSON.stringify(oriProp), screen]);
  return prop;
}
const Row = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
      prefixCls: customizePrefixCls,
      justify,
      align,
      className,
      style,
      children,
      gutter = 0,
      wrap
    } = props,
    others = __rest(props, ["prefixCls", "justify", "align", "className", "style", "children", "gutter", "wrap"]);
  const {
    getPrefixCls,
    direction
  } = React.useContext(ConfigContext);
  const [screens, setScreens] = React.useState({
    xs: true,
    sm: true,
    md: true,
    lg: true,
    xl: true,
    xxl: true
  });
  // to save screens info when responsiveObserve callback had been call
  const [curScreens, setCurScreens] = React.useState({
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    xxl: false
  });
  // ================================== calc responsive data ==================================
  const mergeAlign = useMergePropByScreen(align, curScreens);
  const mergeJustify = useMergePropByScreen(justify, curScreens);
  const gutterRef = React.useRef(gutter);
  const responsiveObserver = useResponsiveObserver();
  // ================================== Effect ==================================
  React.useEffect(() => {
    const token = responsiveObserver.subscribe(screen => {
      setCurScreens(screen);
      const currentGutter = gutterRef.current || 0;
      if (!Array.isArray(currentGutter) && typeof currentGutter === 'object' || Array.isArray(currentGutter) && (typeof currentGutter[0] === 'object' || typeof currentGutter[1] === 'object')) {
        setScreens(screen);
      }
    });
    return () => responsiveObserver.unsubscribe(token);
  }, []);
  // ================================== Render ==================================
  const getGutter = () => {
    const results = [undefined, undefined];
    const normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, undefined];
    normalizedGutter.forEach((g, index) => {
      if (typeof g === 'object') {
        for (let i = 0; i < responsiveArray.length; i++) {
          const breakpoint = responsiveArray[i];
          if (screens[breakpoint] && g[breakpoint] !== undefined) {
            results[index] = g[breakpoint];
            break;
          }
        }
      } else {
        results[index] = g;
      }
    });
    return results;
  };
  const prefixCls = getPrefixCls('row', customizePrefixCls);
  const [wrapSSR, hashId] = useRowStyle(prefixCls);
  const gutters = getGutter();
  const classes = classNames(prefixCls, {
    [`${prefixCls}-no-wrap`]: wrap === false,
    [`${prefixCls}-${mergeJustify}`]: mergeJustify,
    [`${prefixCls}-${mergeAlign}`]: mergeAlign,
    [`${prefixCls}-rtl`]: direction === 'rtl'
  }, className, hashId);
  // Add gutter related style
  const rowStyle = {};
  const horizontalGutter = gutters[0] != null && gutters[0] > 0 ? gutters[0] / -2 : undefined;
  if (horizontalGutter) {
    rowStyle.marginLeft = horizontalGutter;
    rowStyle.marginRight = horizontalGutter;
  }
  [, rowStyle.rowGap] = gutters;
  // "gutters" is a new array in each rendering phase, it'll make 'React.useMemo' effectless.
  // So we deconstruct "gutters" variable here.
  const [gutterH, gutterV] = gutters;
  const rowContext = React.useMemo(() => ({
    gutter: [gutterH, gutterV],
    wrap
  }), [gutterH, gutterV, wrap]);
  return wrapSSR( /*#__PURE__*/React.createElement(RowContext$1.Provider, {
    value: rowContext
  }, /*#__PURE__*/React.createElement("div", Object.assign({}, others, {
    className: classes,
    style: Object.assign(Object.assign({}, rowStyle), style),
    ref: ref
  }), children)));
});
if (process.env.NODE_ENV !== 'production') {
  Row.displayName = 'Row';
}
var Row$1 = Row;

var _excluded = ["className", "component", "viewBox", "spin", "rotate", "tabIndex", "onClick", "children"];
var Icon = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
    Component = props.component,
    viewBox = props.viewBox,
    spin = props.spin,
    rotate = props.rotate,
    tabIndex = props.tabIndex,
    onClick = props.onClick,
    children = props.children,
    restProps = _objectWithoutProperties(props, _excluded);
  var iconRef = React.useRef();
  var mergedRef = useComposeRef(iconRef, ref);
  warning$1(Boolean(Component || children), 'Should have `component` prop or `children`.');
  useInsertStyles(iconRef);
  var _React$useContext = React.useContext(Context$2),
    _React$useContext$pre = _React$useContext.prefixCls,
    prefixCls = _React$useContext$pre === void 0 ? 'anticon' : _React$useContext$pre,
    rootClassName = _React$useContext.rootClassName;
  var classString = classNames(rootClassName, prefixCls, className);
  var svgClassString = classNames(_defineProperty({}, "".concat(prefixCls, "-spin"), !!spin));
  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : undefined;
  var innerSvgProps = _objectSpread2(_objectSpread2({}, svgBaseProps), {}, {
    className: svgClassString,
    style: svgStyle,
    viewBox: viewBox
  });
  if (!viewBox) {
    delete innerSvgProps.viewBox;
  }

  // component > children
  var renderInnerNode = function renderInnerNode() {
    if (Component) {
      return /*#__PURE__*/React.createElement(Component, innerSvgProps, children);
    }
    if (children) {
      warning$1(Boolean(viewBox) || React.Children.count(children) === 1 && /*#__PURE__*/React.isValidElement(children) && React.Children.only(children).type === 'use', 'Make sure that you provide correct `viewBox`' + ' prop (default `0 0 1024 1024`) to the icon.');
      return /*#__PURE__*/React.createElement("svg", _extends$1({}, innerSvgProps, {
        viewBox: viewBox
      }), children);
    }
    return null;
  };
  var iconTabIndex = tabIndex;
  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }
  return /*#__PURE__*/React.createElement("span", _extends$1({
    role: "img"
  }, restProps, {
    ref: mergedRef,
    tabIndex: iconTabIndex,
    onClick: onClick,
    className: classString
  }), renderInnerNode());
});
Icon.displayName = 'AntdIcon';
var Icon$1 = Icon;

function MenuIcon() {
    return (React__default.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { d: "M5 7C5.53043 7 6.03914 6.78929 6.41421 6.41421C6.78929 6.03914 7 5.53043 7 5C7 4.46957 6.78929 3.96086 6.41421 3.58579C6.03914 3.21071 5.53043 3 5 3C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5C3 5.53043 3.21071 6.03914 3.58579 6.41421C3.96086 6.78929 4.46957 7 5 7ZM12 7C12.5304 7 13.0391 6.78929 13.4142 6.41421C13.7893 6.03914 14 5.53043 14 5C14 4.46957 13.7893 3.96086 13.4142 3.58579C13.0391 3.21071 12.5304 3 12 3C11.4696 3 10.9609 3.21071 10.5858 3.58579C10.2107 3.96086 10 4.46957 10 5C10 5.53043 10.2107 6.03914 10.5858 6.41421C10.9609 6.78929 11.4696 7 12 7ZM19 7C19.5304 7 20.0391 6.78929 20.4142 6.41421C20.7893 6.03914 21 5.53043 21 5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3C18.4696 3 17.9609 3.21071 17.5858 3.58579C17.2107 3.96086 17 4.46957 17 5C17 5.53043 17.2107 6.03914 17.5858 6.41421C17.9609 6.78929 18.4696 7 19 7ZM5 14C5.53043 14 6.03914 13.7893 6.41421 13.4142C6.78929 13.0391 7 12.5304 7 12C7 11.4696 6.78929 10.9609 6.41421 10.5858C6.03914 10.2107 5.53043 10 5 10C4.46957 10 3.96086 10.2107 3.58579 10.5858C3.21071 10.9609 3 11.4696 3 12C3 12.5304 3.21071 13.0391 3.58579 13.4142C3.96086 13.7893 4.46957 14 5 14ZM12 14C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12C14 11.4696 13.7893 10.9609 13.4142 10.5858C13.0391 10.2107 12.5304 10 12 10C11.4696 10 10.9609 10.2107 10.5858 10.5858C10.2107 10.9609 10 11.4696 10 12C10 12.5304 10.2107 13.0391 10.5858 13.4142C10.9609 13.7893 11.4696 14 12 14ZM19 14C19.5304 14 20.0391 13.7893 20.4142 13.4142C20.7893 13.0391 21 12.5304 21 12C21 11.4696 20.7893 10.9609 20.4142 10.5858C20.0391 10.2107 19.5304 10 19 10C18.4696 10 17.9609 10.2107 17.5858 10.5858C17.2107 10.9609 17 11.4696 17 12C17 12.5304 17.2107 13.0391 17.5858 13.4142C17.9609 13.7893 18.4696 14 19 14ZM5 21C5.53043 21 6.03914 20.7893 6.41421 20.4142C6.78929 20.0391 7 19.5304 7 19C7 18.4696 6.78929 17.9609 6.41421 17.5858C6.03914 17.2107 5.53043 17 5 17C4.46957 17 3.96086 17.2107 3.58579 17.5858C3.21071 17.9609 3 18.4696 3 19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21ZM12 21C12.5304 21 13.0391 20.7893 13.4142 20.4142C13.7893 20.0391 14 19.5304 14 19C14 18.4696 13.7893 17.9609 13.4142 17.5858C13.0391 17.2107 12.5304 17 12 17C11.4696 17 10.9609 17.2107 10.5858 17.5858C10.2107 17.9609 10 18.4696 10 19C10 19.5304 10.2107 20.0391 10.5858 20.4142C10.9609 20.7893 11.4696 21 12 21ZM19 21C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19C21 18.4696 20.7893 17.9609 20.4142 17.5858C20.0391 17.2107 19.5304 17 19 17C18.4696 17 17.9609 17.2107 17.5858 17.5858C17.2107 17.9609 17 18.4696 17 19C17 19.5304 17.2107 20.0391 17.5858 20.4142C17.9609 20.7893 18.4696 21 19 21Z", fill: "#626C7A" })));
}

var Tool = function (_a) {
    var _b = _a.showProfile, showProfile = _b === void 0 ? true : _b; _a.showLanguageSwitcher; _a.onClick; var profileName = _a.profileName, email = _a.email;
    return (React__default.createElement("div", null,
        React__default.createElement("section", { hidden: showProfile },
            React__default.createElement("span", null,
                React__default.createElement(Row$1, { align: "middle", justify: "space-between" },
                    React__default.createElement(Col$1, { style: { marginRight: 10 } },
                        React__default.createElement(Select$1, { options: [{ label: "EN", value: "en" }], style: { width: 100 } })),
                    React__default.createElement(Col$1, { style: { marginRight: 10 } },
                        React__default.createElement(Icon$1, { component: function () {
                                return React__default.createElement(MenuIcon, null);
                            }, rev: undefined })),
                    React__default.createElement(Col$1, null,
                        React__default.createElement(Avatar$1, { onClick: function () {
                                console.log("dsad");
                            }, src: "https://vetaar-anchor.com/Anchor_Project/images/avatar_0.png", size: 40 })),
                    React__default.createElement(Col$1, null,
                        React__default.createElement("p", { style: { marginLeft: 10 } },
                            profileName,
                            React__default.createElement("br", null),
                            email)))))));
};

export { Tool };
//# sourceMappingURL=index.esm.js.map
