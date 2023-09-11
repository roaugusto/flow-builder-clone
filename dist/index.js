'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var uuid = require('uuid');
require('systemjs/dist/system.js');
var cloneDeep = require('lodash.clonedeep');
var React = require('react');
var get = require('lodash.get');
var reactSortableHoc = require('react-sortable-hoc');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cloneDeep__default = /*#__PURE__*/_interopDefaultLegacy(cloneDeep);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var get__default = /*#__PURE__*/_interopDefaultLegacy(get);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _regeneratorRuntime() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

  _regeneratorRuntime = function () {
    return exports;
  };

  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");

        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }

        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);

          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }

          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }

      reject(record.arg);
    }

    var previousPromise;

    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;

          return next.value = undefined, next.done = !0, next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];

    for (var key in object) keys.push(key);

    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }

      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function () {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function (record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
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

function _defineProperty(obj, key, value) {
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

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

var _excluded = ["children"],
    _excluded2 = ["next"];
var createUuid = function createUuid(prefix) {
  return "".concat(prefix || 'node', "-").concat(uuid.v4());
};
var getRegisterNode = function getRegisterNode(registerNodes, type) {
  return registerNodes.find(function (node) {
    return type && node.type === type;
  });
};
var getIsStartNode = function getIsStartNode(registerNodes, type) {
  var _registerNodes$find;

  return (_registerNodes$find = registerNodes.find(function (item) {
    return item.type === type;
  })) === null || _registerNodes$find === void 0 ? void 0 : _registerNodes$find.isStart;
};
var getIsEndNode = function getIsEndNode(registerNodes, type) {
  var _registerNodes$find2;

  return (_registerNodes$find2 = registerNodes.find(function (item) {
    return item.type === type;
  })) === null || _registerNodes$find2 === void 0 ? void 0 : _registerNodes$find2.isEnd;
};
var getIsLoopNode = function getIsLoopNode(registerNodes, type) {
  var _registerNodes$find3;

  return (_registerNodes$find3 = registerNodes.find(function (item) {
    return item.type === type;
  })) === null || _registerNodes$find3 === void 0 ? void 0 : _registerNodes$find3.isLoop;
};
var getIsConditionNode = function getIsConditionNode(registerNodes, type) {
  var conditionNode = getRegisterNode(registerNodes, type);
  var branchNode = registerNodes.find(function (item) {
    return type && item.conditionNodeType === type;
  });
  return conditionNode && branchNode && (branchNode === null || branchNode === void 0 ? void 0 : branchNode.type) !== (branchNode === null || branchNode === void 0 ? void 0 : branchNode.conditionNodeType);
};
var getIsBranchNode = function getIsBranchNode(registerNodes, type) {
  var branchNode = getRegisterNode(registerNodes, type);
  var conditionNode = getRegisterNode(registerNodes, branchNode === null || branchNode === void 0 ? void 0 : branchNode.conditionNodeType);
  return branchNode && conditionNode && (branchNode === null || branchNode === void 0 ? void 0 : branchNode.type) !== (branchNode === null || branchNode === void 0 ? void 0 : branchNode.conditionNodeType);
};
var getAbstractNodeType = function getAbstractNodeType(registerNodes, type) {
  if (getIsStartNode(registerNodes, type)) {
    return 'start';
  } else if (getIsEndNode(registerNodes, type)) {
    return 'end';
  } else if (getIsLoopNode(registerNodes, type)) {
    return 'loop';
  } else if (getIsBranchNode(registerNodes, type)) {
    return 'branch';
  } else if (getIsConditionNode(registerNodes, type)) {
    return 'condition';
  } else {
    return 'common';
  }
};
var createNewNode = function createNewNode(registerNodes, type) {
  var customCreateUuid = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : createUuid;
  var registerNode = getRegisterNode(registerNodes, type);
  if (!registerNode) return;
  var isBranchNode = getIsBranchNode(registerNodes, type);
  var isConditionNode = getIsConditionNode(registerNodes, type);
  var isLoopNode = getIsLoopNode(registerNodes, type);
  var initialNodeData = cloneDeep__default['default']((registerNode === null || registerNode === void 0 ? void 0 : registerNode.initialNodeData) || {});
  var extraProps = isBranchNode ? _objectSpread2({
    children: [createNewNode(registerNodes, registerNode.conditionNodeType, customCreateUuid), createNewNode(registerNodes, registerNode.conditionNodeType, customCreateUuid)]
  }, initialNodeData) : isConditionNode || isLoopNode ? _objectSpread2({
    children: []
  }, initialNodeData) : initialNodeData;
  return _objectSpread2({
    id: customCreateUuid(type),
    type: registerNode.type,
    name: registerNode.name
  }, extraProps);
};
var DFS = function DFS(nodes) {
  var allNodes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var _iterator = _createForOfIteratorHelper(nodes),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var node = _step.value;
      allNodes.push(node);

      if (Array.isArray(node.children)) {
        DFS(node.children, allNodes);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return allNodes;
};

var getNextNode = function getNextNode(node, allNodes) {
  var path = node.path || [];
  var nextPath = [].concat(_toConsumableArray(path.slice(0, path.length - 1)), [String(Number(path[path.length - 1]) + 1)]);
  return allNodes.find(function (item) {
    return (item.path || []).join('-') === nextPath.join('-');
  });
};

var getNextIdsByBranchNode = function getNextIdsByBranchNode(node, allNodes, registerNodes) {
  var path = node.path || [];
  var branchPath;

  if (getIsConditionNode(registerNodes, node.type)) {
    branchPath = path.slice(0, path.length - 2);
  } else {
    branchPath = path.slice(0, path.length - 4);
  }

  var branchNode = allNodes.find(function (item) {
    return (item.path || []).join('-') === branchPath.join('-');
  });

  if (!branchNode) {
    return [];
  }

  var nextNode = getNextNode(branchNode, allNodes);

  if (!nextNode) {
    return getNextIdsByBranchNode(branchNode, allNodes, registerNodes);
  }

  return [nextNode.id];
};

var getNextIds = function getNextIds(node, allNodes, registerNodes) {
  if (getIsBranchNode(registerNodes, node.type)) {
    return (node.children || []).map(function (item) {
      return item.id;
    });
  } else if (getIsConditionNode(registerNodes, node.type)) {
    var _node$children;

    var nextNode = (_node$children = node.children) === null || _node$children === void 0 ? void 0 : _node$children[0];

    if (!nextNode) {
      return getNextIdsByBranchNode(node, allNodes, registerNodes);
    }

    return [nextNode.id];
  } else if (node.type === 'end') {
    return [];
  } else {
    var _nextNode = getNextNode(node, allNodes);

    if (!_nextNode) {
      return getNextIdsByBranchNode(node, allNodes, registerNodes);
    }

    return [_nextNode.id];
  }
};

var buildFlatNodes = function buildFlatNodes(params) {
  var registerNodes = params.registerNodes,
      nodes = params.nodes;
  var cloneNodes = JSON.parse(JSON.stringify(nodes));
  var allNodes = DFS(cloneNodes);

  var _iterator2 = _createForOfIteratorHelper(allNodes),
      _step2;

  try {
    var _loop = function _loop() {
      var _node$next;

      var node = _step2.value;
      node.next = node.next || [];
      var nextIds = getNextIds(node, allNodes, registerNodes);

      (_node$next = node.next).push.apply(_node$next, _toConsumableArray(nextIds.filter(function (item) {
        var _node$next2;

        return !((_node$next2 = node.next) === null || _node$next2 === void 0 ? void 0 : _node$next2.includes(item));
      })));
    };

    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return allNodes.map(function (_ref) {
    var children = _ref.children,
        node = _objectWithoutProperties(_ref, _excluded);

    return node;
  });
};

var getParentByPath = function getParentByPath(path, treeNodes) {
  var parent = treeNodes;

  for (var index = 0; index < path.length; index++) {
    var item = path[index];

    if (!parent[item]) {
      if (index % 2 === 0) {
        parent[item] = {};
      } else {
        parent[item] = [];
      }
    }

    parent = parent[item];
  }

  return parent;
};

var buildTreeNodes = function buildTreeNodes(params) {
  var nodes = params.nodes;
  var treeNodes = [];
  var cloneNodes = JSON.parse(JSON.stringify(nodes.map(function (_ref2) {
    var next = _ref2.next,
        node = _objectWithoutProperties(_ref2, _excluded2);

    return node;
  })));

  var _iterator3 = _createForOfIteratorHelper(cloneNodes),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var node = _step3.value;
      var path = node.path.slice();
      var index = path.pop();
      var parent = getParentByPath(path, treeNodes);

      if (!parent[index]) {
        parent[index] = node;
      } else {
        parent[index] = _objectSpread2(_objectSpread2({}, parent[index]), node);
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  return treeNodes;
};

function ensureNodeChildrenHaveIds(node) {
  if (!node.hasOwnProperty('id')) {
    node.id = "node-".concat(uuid.v4());
  }
}

var computeChildrenPath = function computeChildrenPath(children, parentPath) {
  for (var index = 0; index < children.length; index++) {
    var node = children[index];

    if (node) {
      ensureNodeChildrenHaveIds(node);
    }

    node.path = [].concat(_toConsumableArray(parentPath), ['children', String(index)]);

    if (Array.isArray(node.children) && node.children.length > 0) {
      computeChildrenPath(node.children, node.path);
    }
  }
};

var computeNodesPath = function computeNodesPath(nodes) {
  for (var index = 0; index < nodes.length; index++) {
    var node = nodes[index];
    node.path = [String(index)];

    if (Array.isArray(node.children) && node.children.length > 0) {
      computeChildrenPath(node.children, node.path);
    }
  }

  return nodes;
};
var loadRemoteNode = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(params) {
    var url, cssUrl, tasks;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = params.url, cssUrl = params.cssUrl;
            tasks = [url, cssUrl].filter(function (item) {
              return !!item;
            }).map(function (item) {
              return window.System.import(item);
            });
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              Promise.all(tasks).then(function (res) {
                if (res.length === 2) {
                  document.adoptedStyleSheets = [].concat(_toConsumableArray(document.adoptedStyleSheets), [res[1].default]);
                }

                resolve(res[0].default);
              }).catch(function (err) {
                return reject(err);
              });
            }));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function loadRemoteNode(_x) {
    return _ref3.apply(this, arguments);
  };
}();
var exchangeNodes = function exchangeNodes(nodes, startIndex, endIndex) {
  if ((nodes === null || nodes === void 0 ? void 0 : nodes[startIndex]) && (nodes === null || nodes === void 0 ? void 0 : nodes[endIndex])) {
    var temp = nodes[startIndex];
    nodes[startIndex] = nodes[endIndex];
    nodes[endIndex] = temp;
  }
};

var BuilderContext = /*#__PURE__*/React.createContext(null);

var NodeContext = /*#__PURE__*/React.createContext(null);

var useHistory = function useHistory() {
  var _useContext = React.useContext(BuilderContext),
      selectedNode = _useContext.selectedNode,
      nodes = _useContext.nodes,
      onChange = _useContext.onChange,
      historyTool = _useContext.historyTool,
      historyRecords = _useContext.historyRecords,
      setHistoryRecords = _useContext.setHistoryRecords,
      activeHistoryRecordIndex = _useContext.activeHistoryRecordIndex,
      setActiveHistoryRecordIndex = _useContext.setActiveHistoryRecordIndex;

  var maxLength = (historyTool === null || historyTool === void 0 ? void 0 : historyTool.max) || defaultMaxLength;

  var pushHistory = function pushHistory() {
    var record = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : nodes;

    if (selectedNode && selectedNode.configuring === true) {
      selectedNode.configuring = false;
    }

    historyRecords.splice(activeHistoryRecordIndex + 1, historyRecords.length - activeHistoryRecordIndex - 1);

    if (historyRecords.length === maxLength) {
      historyRecords.shift();
    }

    historyRecords.push(JSON.parse(JSON.stringify(record)));
    setHistoryRecords(_toConsumableArray(historyRecords));
    setActiveHistoryRecordIndex(historyRecords.length - 1);
  };

  var history = function history(type) {
    var latestIndex = type === 'undo' ? activeHistoryRecordIndex > 0 ? activeHistoryRecordIndex - 1 : 0 : activeHistoryRecordIndex < historyRecords.length - 1 ? activeHistoryRecordIndex + 1 : historyRecords.length - 1;
    onChange(JSON.parse(JSON.stringify(historyRecords[latestIndex])), type);
    setActiveHistoryRecordIndex(latestIndex);
  };

  return {
    maxLength: maxLength,
    pushHistory: pushHistory,
    history: history
  };
};

var useZoom = function useZoom() {
  var _useContext = React.useContext(BuilderContext),
      zoomTool = _useContext.zoomTool,
      zoomValue = _useContext.zoomValue,
      setZoomValue = _useContext.setZoomValue;

  var minZoom = (zoomTool === null || zoomTool === void 0 ? void 0 : zoomTool.min) || defaultMinZoom;
  var maxZoom = (zoomTool === null || zoomTool === void 0 ? void 0 : zoomTool.max) || defaultMaxZoom;
  var zoomStep = (zoomTool === null || zoomTool === void 0 ? void 0 : zoomTool.step) || defaultZoomStep;

  var zoom = function zoom(type) {
    var latestZoom = typeof type === 'number' ? type : type === 'out' ? zoomValue - zoomStep : zoomValue + zoomStep;
    latestZoom = latestZoom < minZoom ? minZoom : latestZoom > maxZoom ? maxZoom : latestZoom;
    setZoomValue(latestZoom);
  };

  return {
    minZoom: minZoom,
    maxZoom: maxZoom,
    zoom: zoom
  };
};

var useAction = function useAction() {
  var _useContext = React.useContext(BuilderContext),
      registerNodes = _useContext.registerNodes,
      nodes = _useContext.nodes,
      readonly = _useContext.readonly,
      drawerVisibleWhenAddNode = _useContext.drawerVisibleWhenAddNode,
      onChange = _useContext.onChange,
      setSelectedNode = _useContext.setSelectedNode,
      setDrawerTitle = _useContext.setDrawerTitle,
      createUuid = _useContext.createUuid;

  var currentNode = React.useContext(NodeContext);

  var _useHistory = useHistory(),
      pushHistory = _useHistory.pushHistory;

  var _useDrawer = useDrawer(),
      closeDrawer = _useDrawer.closeDrawer;

  var clickNode = function clickNode() {
    var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : currentNode;
    var registerNode = getRegisterNode(registerNodes, node.type);

    if (!readonly && (registerNode === null || registerNode === void 0 ? void 0 : registerNode.configComponent)) {
      var allNodes = DFS(nodes);

      var _iterator = _createForOfIteratorHelper(allNodes),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;

          if (item.configuring === true) {
            item.configuring = false;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      node.configuring = true;
      setSelectedNode(node);

      if (typeof registerNode.configTitle === 'string') {
        setDrawerTitle(registerNode.configTitle || '');
      } else if (typeof registerNode.configTitle === 'function') {
        setDrawerTitle(registerNode.configTitle(node, nodes) || '');
      }

      onChange(_toConsumableArray(nodes), 'click-node');
    }
  };

  var addNode = function addNode(_node, _newNodeType) {
    // one param: new type
    // two params: node, new type
    var node = !!_newNodeType ? _node : currentNode;
    var newNodeType = !!_newNodeType ? _newNodeType : _node;
    var registerNode = getRegisterNode(registerNodes, newNodeType);
    var newNode = createNewNode(registerNodes, newNodeType, createUuid);

    if (!newNode) {
      return;
    }

    if (getIsConditionNode(registerNodes, newNodeType)) {
      node.children = node.children || [];
      node.children.push(newNode);
    } else if (getIsConditionNode(registerNodes, node.type)) {
      node.children = node.children || [];
      node.children.unshift(newNode);
    } else {
      var _node$path, _ref;

      var path = (_node$path = node.path) === null || _node$path === void 0 ? void 0 : _node$path.slice();
      var nodeIndex = Number(path === null || path === void 0 ? void 0 : path.pop());
      var parentPath = path;
      var parentNodes = get__default['default'](nodes, parentPath || []);
      (_ref = parentNodes || nodes) === null || _ref === void 0 ? void 0 : _ref.splice(nodeIndex + 1, 0, newNode);
    }

    onChange(_toConsumableArray(nodes), "add-node__".concat(newNodeType));
    pushHistory();

    if (drawerVisibleWhenAddNode) {
      if (getIsBranchNode(registerNodes, newNodeType) && (!(registerNode === null || registerNode === void 0 ? void 0 : registerNode.showPracticalBranchNode) || !(registerNode === null || registerNode === void 0 ? void 0 : registerNode.configComponent))) {
        clickNode(newNode.children[0]);
      } else {
        clickNode(newNode);
      }
    }
  };

  var addNodeInLoop = function addNodeInLoop(newNodeType) {
    var node = currentNode;
    var registerNode = getRegisterNode(registerNodes, newNodeType);
    var newNode = createNewNode(registerNodes, newNodeType, createUuid);

    if (!newNode) {
      return;
    }

    node.children = node.children || [];
    node.children.unshift(newNode);
    onChange(_toConsumableArray(nodes), "add-node-in-loop__".concat(newNodeType));
    pushHistory();

    if (drawerVisibleWhenAddNode) {
      if (getIsBranchNode(registerNodes, newNodeType) && (!(registerNode === null || registerNode === void 0 ? void 0 : registerNode.showPracticalBranchNode) || !(registerNode === null || registerNode === void 0 ? void 0 : registerNode.configComponent))) {
        clickNode(newNode.children[0]);
      } else {
        clickNode(newNode);
      }
    }
  };

  var removeNodeIds = function removeNodeIds(targetNodeIds, allNodes) {
    var restNodes = allNodes.filter(function (item) {
      return !targetNodeIds.includes(item.id);
    });

    var _iterator2 = _createForOfIteratorHelper(restNodes),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var restNode = _step2.value;

        if (Array.isArray(restNode.children)) {
          restNode.children = removeNodeIds(targetNodeIds, restNode.children);
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return restNodes;
  };

  var filterEmptyBranch = function filterEmptyBranch(allNodes) {
    var restNodes = allNodes.filter(function (item) {
      return !(getIsBranchNode(registerNodes, item.type) && Array.isArray(item.children) && item.children.length === 0);
    });

    var _iterator3 = _createForOfIteratorHelper(restNodes),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var restNode = _step3.value;

        if (Array.isArray(restNode.children)) {
          restNode.children = filterEmptyBranch(restNode.children);
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    return restNodes;
  };

  var removeNode = function removeNode() {
    var targetNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : currentNode;

    if (!targetNode) {
      return;
    }

    var targetNodes = Array.isArray(targetNode) ? targetNode : [targetNode];
    var targetNodeIds = targetNodes.map(function (item) {
      return typeof item === 'string' ? item : item.id;
    });
    DFS(nodes).some(function (item) {
      return item.configuring && targetNodeIds.includes(item.id);
    }) && closeDrawer();
    var restNodes = filterEmptyBranch(removeNodeIds(targetNodeIds, nodes));
    onChange(restNodes, "remove-node");
    pushHistory(restNodes);
  };

  return {
    clickNode: clickNode,
    addNode: addNode,
    addNodeInLoop: addNodeInLoop,
    removeNode: removeNode
  };
};

var useDrawer = function useDrawer() {
  var _useContext = React.useContext(BuilderContext),
      nodes = _useContext.nodes,
      onChange = _useContext.onChange,
      selectedNode = _useContext.selectedNode,
      setSelectedNode = _useContext.setSelectedNode;

  var _useHistory = useHistory(),
      pushHistory = _useHistory.pushHistory;

  var closeDrawer = function closeDrawer() {
    if (selectedNode) {
      selectedNode.configuring = false;
    }

    setSelectedNode(undefined);
    onChange(_toConsumableArray(nodes), 'close-drawer');
  };

  var saveDrawer = function saveDrawer(values, validateStatusError) {
    if (selectedNode) {
      selectedNode.data = values;

      if (validateStatusError) {
        selectedNode.validateStatusError = true;
      } else {
        selectedNode.validateStatusError = false;
      }

      pushHistory();
    }

    closeDrawer();
  };

  return {
    closeDrawer: closeDrawer,
    saveDrawer: saveDrawer
  };
};

var useSort = function useSort() {
  var _useContext = React.useContext(BuilderContext),
      nodes = _useContext.nodes,
      onChange = _useContext.onChange;

  var currentNode = React.useContext(NodeContext);

  var backward = function backward() {
    var _node$path;

    var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : currentNode;
    if (!node) return;
    var path = ((_node$path = node.path) === null || _node$path === void 0 ? void 0 : _node$path.slice()) || [];
    var currentIndex = Number(path.pop());
    var parentNodes = get__default['default'](nodes, path);

    if (parentNodes) {
      if (currentIndex > 0) {
        exchangeNodes(parentNodes, currentIndex, currentIndex - 1);
        onChange(_toConsumableArray(nodes));
      }
    } else {
      if (currentIndex > 1) {
        exchangeNodes(nodes, currentIndex, currentIndex - 1);
        onChange(_toConsumableArray(nodes));
      }
    }
  };

  var forward = function forward() {
    var _node$path2;

    var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : currentNode;
    if (!node) return;
    var path = ((_node$path2 = node.path) === null || _node$path2 === void 0 ? void 0 : _node$path2.slice()) || [];
    var currentIndex = Number(path.pop());
    var parentNodes = get__default['default'](nodes, path);

    if (parentNodes) {
      if (currentIndex < parentNodes.length - 1) {
        exchangeNodes(parentNodes, currentIndex, currentIndex + 1);
        onChange(_toConsumableArray(nodes));
      }
    } else {
      if (currentIndex < nodes.length - 2) {
        exchangeNodes(nodes, currentIndex, currentIndex + 1);
        onChange(_toConsumableArray(nodes));
      }
    }
  };

  var start = function start() {
    var _node$path3;

    var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : currentNode;
    if (!node) return;
    var path = ((_node$path3 = node.path) === null || _node$path3 === void 0 ? void 0 : _node$path3.slice()) || [];
    var currentIndex = Number(path.pop());
    var parentNodes = get__default['default'](nodes, path);

    if (parentNodes) {
      if (currentIndex > 0) {
        exchangeNodes(parentNodes, currentIndex, 0);
        onChange(_toConsumableArray(nodes));
      }
    } else {
      if (currentIndex > 1) {
        exchangeNodes(nodes, currentIndex, 1);
        onChange(_toConsumableArray(nodes));
      }
    }
  };

  var end = function end() {
    var _node$path4;

    var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : currentNode;
    if (!node) return;
    var path = ((_node$path4 = node.path) === null || _node$path4 === void 0 ? void 0 : _node$path4.slice()) || [];
    var currentIndex = Number(path.pop());
    var parentNodes = get__default['default'](nodes, path);

    if (parentNodes) {
      if (currentIndex < parentNodes.length - 1) {
        exchangeNodes(parentNodes, currentIndex, parentNodes.length - 1);
        onChange(_toConsumableArray(nodes));
      }
    } else {
      if (currentIndex < nodes.length - 2) {
        exchangeNodes(nodes, currentIndex, nodes.length - 2);
        onChange(_toConsumableArray(nodes));
      }
    }
  };

  return {
    backward: backward,
    forward: forward,
    start: start,
    end: end
  };
};

var defaultMinZoom = 10;
var defaultMaxZoom = 200;
var defaultZoomStep = 10;
var defaultMaxLength = 10;

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".flow-builder-default-node {\n  width: 200px;\n  height: 100px;\n  font-weight: 500;\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.08);\n  border-radius: 4px;\n  background-color: #fff;\n}\n";
styleInject(css_248z);

var DefaultDisplayComponent = function DefaultDisplayComponent(_ref) {
  var node = _ref.node;
  var id = node.id,
      name = node.name,
      path = node.path,
      configuring = node.configuring,
      data = node.data;
  var borderColor = configuring ? 'blue' : 'transparent';
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flow-builder-default-node",
    style: {
      border: "1px solid ".concat(borderColor)
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", null, "name: ", (data === null || data === void 0 ? void 0 : data.name) || name), /*#__PURE__*/React__default['default'].createElement("div", null, "id: ", id), /*#__PURE__*/React__default['default'].createElement("div", null, "path: ", path === null || path === void 0 ? void 0 : path.join(' - ')));
};

var css_248z$1 = ".flow-builder-action-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #ffffff;\n  box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.08);\n  cursor: pointer;\n  z-index: 1;\n}\n.flow-builder-action-button img {\n  width: 16px;\n  height: 16px;\n}\n.flow-builder-horizontal .flow-builder-branch-node__add-button,\n.flow-builder-horizontal .flow-builder-sortable-handle {\n  transform: rotate(90deg);\n}\n";
styleInject(css_248z$1);

var ActionButton = function ActionButton(props) {
  var _props$size = props.size,
      size = _props$size === void 0 ? 28 : _props$size,
      icon = props.icon;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flow-builder-action-button",
    style: {
      width: "".concat(size, "px"),
      height: "".concat(size, "px"),
      borderRadius: "".concat(size / 2, "px")
    }
  }, /*#__PURE__*/React__default['default'].createElement("img", {
    src: icon
  }));
};

var SplitLine = function SplitLine(props) {
  var _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      style = props.style;

  var _useContext = React.useContext(BuilderContext),
      lineColor = _useContext.lineColor,
      spaceX = _useContext.spaceX,
      spaceY = _useContext.spaceY,
      layout = _useContext.layout;

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flow-builder-line__split ".concat(className),
    style: _objectSpread2({
      backgroundColor: lineColor,
      width: "".concat(layout === 'vertical' ? 2 : spaceX, "px"),
      height: "".concat(layout === 'vertical' ? spaceY : 2, "px")
    }, style)
  });
};

var FillLine = function FillLine() {
  var _useContext = React.useContext(BuilderContext),
      lineColor = _useContext.lineColor,
      layout = _useContext.layout;

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flow-builder-line__fill",
    style: {
      backgroundColor: lineColor,
      width: layout === 'vertical' ? '2px' : '100%',
      height: layout === 'vertical' ? '100%' : '2px'
    }
  });
};

var CoverLine = function CoverLine(props) {
  var className = props.className,
      full = props.full;

  var _useContext = React.useContext(BuilderContext),
      lineColor = _useContext.lineColor,
      layout = _useContext.layout;

  var percent = full ? '100%' : '50%';
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flow-builder-line__cover ".concat(className),
    style: {
      backgroundColor: lineColor,
      width: layout === 'vertical' ? percent : '2px',
      height: layout === 'vertical' ? '2px' : percent
    }
  });
};

var css_248z$2 = ".flow-builder-line__fill {\n  flex: 1;\n}\n.flow-builder-line__cover {\n  position: absolute;\n}\n.flow-builder-vertical .flow-builder-line__cover.cover-condition-start,\n.flow-builder-vertical .flow-builder-line__cover.cover-loop-start {\n  top: 0;\n}\n.flow-builder-vertical .flow-builder-line__cover.cover-condition-end,\n.flow-builder-vertical .flow-builder-line__cover.cover-loop-end {\n  bottom: 0;\n}\n.flow-builder-vertical .flow-builder-line__cover.cover-condition-start.cover-first,\n.flow-builder-vertical .flow-builder-line__cover.cover-condition-end.cover-first,\n.flow-builder-vertical .flow-builder-line__cover.cover-condition-start.cover-middle,\n.flow-builder-vertical .flow-builder-line__cover.cover-condition-end.cover-middle {\n  right: 0;\n}\n.flow-builder-vertical .flow-builder-line__cover.cover-condition-start.cover-last,\n.flow-builder-vertical .flow-builder-line__cover.cover-condition-end.cover-last {\n  left: 0;\n}\n.flow-builder-vertical .flow-builder-line__cover.cover-loop-start,\n.flow-builder-vertical .flow-builder-line__cover.cover-loop-end {\n  left: 0;\n}\n.flow-builder-horizontal .flow-builder-line__cover.cover-condition-start,\n.flow-builder-horizontal .flow-builder-line__cover.cover-loop-start {\n  left: 0;\n}\n.flow-builder-horizontal .flow-builder-line__cover.cover-condition-end,\n.flow-builder-horizontal .flow-builder-line__cover.cover-loop-end {\n  right: 0;\n}\n.flow-builder-horizontal .flow-builder-line__cover.cover-condition-start.cover-first,\n.flow-builder-horizontal .flow-builder-line__cover.cover-condition-end.cover-first,\n.flow-builder-horizontal .flow-builder-line__cover.cover-condition-start.cover-middle,\n.flow-builder-horizontal .flow-builder-line__cover.cover-condition-end.cover-middle {\n  bottom: 0;\n}\n.flow-builder-horizontal .flow-builder-line__cover.cover-condition-start.cover-last,\n.flow-builder-horizontal .flow-builder-line__cover.cover-condition-end.cover-last {\n  top: 0;\n}\n.flow-builder-horizontal .flow-builder-line__cover.cover-loop-start,\n.flow-builder-horizontal .flow-builder-line__cover.cover-loop-end {\n  bottom: 0;\n}\n.flow-builder-branch-node__content__sorting > .flow-builder-branch-node__conditions > .flow-builder-condition-node > .flow-builder-line__cover {\n  display: none;\n}\n.flow-builder-branch-node__content__sorting > .flow-builder-branch-node__sorting__dashed {\n  display: block;\n}\n";
styleInject(css_248z$2);

var css_248z$3 = ".flow-builder-drop-button {\n  height: 28px;\n  width: 28px;\n  border-radius: 50%;\n  border: 1px solid #338aff;\n}\n";
styleInject(css_248z$3);

var DropButton = function DropButton(props) {
  var onDrop = props.onDrop;

  var _useContext = React.useContext(BuilderContext),
      backgroundColor = _useContext.backgroundColor;

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flow-builder-drop-button",
    style: {
      backgroundColor: backgroundColor
    },
    onDragOver: function onDragOver(e) {
      return e.preventDefault();
    },
    onDrop: onDrop
  });
};

var AddIcon = "data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M8%201.33325V14.6666%22%20stroke%3D%22%23333333%22%20stroke-width%3D%221.3333%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M14.6667%208L1.33342%208%22%20stroke%3D%22%23333333%22%20stroke-width%3D%221.3333%22%20stroke-linecap%3D%22round%22%2F%3E%3C%2Fsvg%3E";

var AddNormalIcon = "data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M8%205C9.10457%205%2010%204.10457%2010%203C10%201.89543%209.10457%201%208%201C6.89543%201%206%201.89543%206%203C6%204.10457%206.89543%205%208%205Z%22%20fill%3D%22%23333333%22%20stroke%3D%22%23333333%22%20stroke-width%3D%221.3333%22%20stroke-linejoin%3D%22round%22%2F%3E%3Cpath%20d%3D%22M8%2015C9.10457%2015%2010%2014.1046%2010%2013C10%2011.8954%209.10457%2011%208%2011C6.89543%2011%206%2011.8954%206%2013C6%2014.1046%206.89543%2015%208%2015Z%22%20stroke%3D%22%23333333%22%20stroke-width%3D%221.3333%22%20stroke-linejoin%3D%22round%22%2F%3E%3Cpath%20d%3D%22M8%204.5L8%2011%22%20stroke%3D%22%23333333%22%20stroke-width%3D%221.3333%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E";

var AddBranchIcon = "data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M8%205C9.10457%205%2010%204.10457%2010%203C10%201.89543%209.10457%201%208%201C6.89543%201%206%201.89543%206%203C6%204.10457%206.89543%205%208%205Z%22%20fill%3D%22%23333333%22%20stroke%3D%22%23333333%22%20stroke-width%3D%221.3333%22%20stroke-linejoin%3D%22round%22%2F%3E%3Cpath%20d%3D%22M13%2015C14.1046%2015%2015%2014.1046%2015%2013C15%2011.8954%2014.1046%2011%2013%2011C11.8954%2011%2011%2011.8954%2011%2013C11%2014.1046%2011.8954%2015%2013%2015Z%22%20stroke%3D%22%23333333%22%20stroke-width%3D%221.3333%22%20stroke-linejoin%3D%22round%22%2F%3E%3Cpath%20d%3D%22M3%2015C4.10457%2015%205%2014.1046%205%2013C5%2011.8954%204.10457%2011%203%2011C1.89543%2011%201%2011.8954%201%2013C1%2014.1046%201.89543%2015%203%2015Z%22%20stroke%3D%22%23333333%22%20stroke-width%3D%221.3333%22%20stroke-linejoin%3D%22round%22%2F%3E%3Cpath%20d%3D%22M8%204.5L8%2013M8%2013L11%2013M8%2013L5%2013%22%20stroke%3D%22%23333333%22%20stroke-width%3D%221.3333%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E";

var css_248z$4 = ".flow-builder-addable-nodes .flow-builder-addable-node-item {\n  display: flex;\n  align-items: center;\n  padding: 8px 16px;\n  cursor: pointer;\n}\n.flow-builder-addable-nodes .flow-builder-addable-node-item:hover {\n  background-color: #f7f7f7;\n}\n.flow-builder-addable-nodes .flow-builder-addable-node-item .flow-builder-addable-node-icon {\n  display: flex;\n  margin-right: 4px;\n}\n";
styleInject(css_248z$4);

var AddNodeButton = function AddNodeButton(props) {
  var inLoop = props.inLoop;

  var _useContext = React.useContext(BuilderContext),
      registerNodes = _useContext.registerNodes,
      nodes = _useContext.nodes,
      readonly = _useContext.readonly,
      dragType = _useContext.dragType,
      _useContext$DropCompo = _useContext.DropComponent,
      DropComponent = _useContext$DropCompo === void 0 ? DropButton : _useContext$DropCompo,
      PopoverComponent = _useContext.PopoverComponent,
      onDropNodeSuccess = _useContext.onDropNodeSuccess,
      onAddNodeSuccess = _useContext.onAddNodeSuccess;

  var node = React.useContext(NodeContext);

  var _useAction = useAction(),
      addNode = _useAction.addNode,
      addNodeInLoop = _useAction.addNodeInLoop;

  var handleAdd = inLoop ? addNodeInLoop : addNode;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var registerNode = getRegisterNode(registerNodes, node.type);
  var AddableComponent = registerNode === null || registerNode === void 0 ? void 0 : registerNode.addableComponent;
  var addableNodeTypes = registerNode === null || registerNode === void 0 ? void 0 : registerNode.addableNodeTypes;
  var droppable = dragType && !getIsConditionNode(registerNodes, dragType) && (Array.isArray(addableNodeTypes) ? addableNodeTypes.includes(dragType) : true);
  var options = registerNodes.filter(function (item) {
    return !getIsStartNode(registerNodes, item.type) && !getIsEndNode(registerNodes, item.type) && !getIsConditionNode(registerNodes, item.type) && (Array.isArray(addableNodeTypes) ? addableNodeTypes.includes(item.type) : true);
  });

  var handleAddNode = function handleAddNode(newNodeType) {
    handleAdd(newNodeType);
    onAddNodeSuccess === null || onAddNodeSuccess === void 0 ? void 0 : onAddNodeSuccess(newNodeType);
    setVisible(false);
  };

  var handleDrop = function handleDrop() {
    handleAdd(dragType);
    onDropNodeSuccess === null || onDropNodeSuccess === void 0 ? void 0 : onDropNodeSuccess(dragType);
  };

  var addableOptions = AddableComponent ? /*#__PURE__*/React__default['default'].createElement(AddableComponent, {
    node: node,
    nodes: nodes,
    add: handleAddNode
  }) : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, options.map(function (item) {
    var registerNode = getRegisterNode(registerNodes, item.type);
    var defaultIcon = getIsBranchNode(registerNodes, item.type) ? AddBranchIcon : AddNormalIcon;
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: "flow-builder-addable-node-item",
      key: item.type,
      onClick: function onClick() {
        return handleAddNode(item.type);
      }
    }, /*#__PURE__*/React__default['default'].createElement("span", {
      className: "flow-builder-addable-node-icon"
    }, (registerNode === null || registerNode === void 0 ? void 0 : registerNode.addIcon) || /*#__PURE__*/React__default['default'].createElement("img", {
      src: defaultIcon
    })), /*#__PURE__*/React__default['default'].createElement("span", null, item.name));
  }));
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(SplitLine, null), !readonly && options.length > 0 ? droppable ? /*#__PURE__*/React__default['default'].createElement(DropComponent, {
    onDrop: handleDrop
  }) : PopoverComponent ? /*#__PURE__*/React__default['default'].createElement(PopoverComponent, {
    visible: visible,
    onVisibleChange: setVisible,
    overlayClassName: "flow-builder-addable-nodes",
    placement: "rightTop",
    trigger: "click",
    content: addableOptions,
    getPopupContainer: function getPopupContainer(triggerNode) {
      return triggerNode;
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flow-builder-add-btn"
  }, /*#__PURE__*/React__default['default'].createElement(ActionButton, {
    icon: AddIcon
  }))) : null : null, /*#__PURE__*/React__default['default'].createElement(SplitLine, null));
};

var StartNode = function StartNode() {
  var _useContext = React.useContext(BuilderContext),
      registerNodes = _useContext.registerNodes,
      nodes = _useContext.nodes,
      beforeNodeClick = _useContext.beforeNodeClick,
      allowStartConfig = _useContext.allowStartConfig;

  var node = React.useContext(NodeContext);
  var registerNode = getRegisterNode(registerNodes, node.type);
  var Component = (registerNode === null || registerNode === void 0 ? void 0 : registerNode.displayComponent) || DefaultDisplayComponent;

  var _useAction = useAction(),
      clickNode = _useAction.clickNode;

  var handleNodeClick = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (allowStartConfig) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return");

            case 3:
              _context.next = 5;
              return beforeNodeClick === null || beforeNodeClick === void 0 ? void 0 : beforeNodeClick(node);

            case 5:
              clickNode();
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.log('node click error', _context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function handleNodeClick() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flow-builder-node flow-builder-start-node ".concat((registerNode === null || registerNode === void 0 ? void 0 : registerNode.className) || '')
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flow-builder-node__content",
    onClick: handleNodeClick
  }, /*#__PURE__*/React__default['default'].createElement(Component, {
    node: node,
    nodes: nodes
  })), /*#__PURE__*/React__default['default'].createElement(AddNodeButton, null));
};

var css_248z$5 = ".flow-builder-arrow {\n  display: inline-flex;\n}\n.flow-builder-loop-node__content > .flow-builder-arrow {\n  position: absolute;\n}\n.flow-builder-vertical .flow-builder-loop-node__content > .flow-builder-arrow {\n  transform: rotate(180deg);\n  top: 2px;\n  left: -9px;\n}\n.flow-builder-horizontal .flow-builder-arrow {\n  transform: rotate(-90deg);\n}\n.flow-builder-horizontal .flow-builder-loop-node__content > .flow-builder-arrow {\n  transform: rotate(90deg);\n  bottom: -9px;\n  left: 2px;\n}\n";
styleInject(css_248z$5);

var Arrow = function Arrow() {
  var _useContext = React.useContext(BuilderContext),
      lineColor = _useContext.lineColor,
      backgroundColor = _useContext.backgroundColor,
      showArrow = _useContext.showArrow,
      arrowIcon = _useContext.arrowIcon;

  return showArrow ? /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flow-builder-arrow",
    style: {
      backgroundColor: backgroundColor
    }
  }, arrowIcon || /*#__PURE__*/React__default['default'].createElement("svg", {
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M482.133333 738.133333L136.533333 392.533333c-17.066667-17.066667-17.066667-42.666667 0-59.733333 8.533333-8.533333 19.2-12.8 29.866667-12.8h689.066667c23.466667 0 42.666667 19.2 42.666666 42.666667 0 10.666667-4.266667 21.333333-12.8 29.866666L541.866667 738.133333c-17.066667 17.066667-42.666667 17.066667-59.733334 0z",
    fill: lineColor
  }))) : null;
};

var EndNode = function EndNode() {
  var _useContext = React.useContext(BuilderContext),
      registerNodes = _useContext.registerNodes,
      nodes = _useContext.nodes,
      beforeNodeClick = _useContext.beforeNodeClick,
      allowEndConfig = _useContext.allowEndConfig;

  var node = React.useContext(NodeContext);
  var registerNode = getRegisterNode(registerNodes, node.type);
  var Component = (registerNode === null || registerNode === void 0 ? void 0 : registerNode.displayComponent) || DefaultDisplayComponent;

  var _useAction = useAction(),
      clickNode = _useAction.clickNode;

  var handleNodeClick = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (allowEndConfig) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return");

            case 3:
              _context.next = 5;
              return beforeNodeClick === null || beforeNodeClick === void 0 ? void 0 : beforeNodeClick(node);

            case 5:
              clickNode();
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.log('node click error', _context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function handleNodeClick() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flow-builder-node flow-builder-end-node ".concat((registerNode === null || registerNode === void 0 ? void 0 : registerNode.className) || '')
  }, /*#__PURE__*/React__default['default'].createElement(Arrow, null), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flow-builder-node__content",
    onClick: handleNodeClick
  }, /*#__PURE__*/React__default['default'].createElement(Component, {
    node: node,
    nodes: nodes
  })));
};

var RemoveIcon = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2048%2048%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%3E%3Cg%3E%3Crect%20fill-opacity%3D%220.01%22%20fill%3D%22%23FFFFFF%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2248%22%20height%3D%2248%22%20stroke-width%3D%224%22%20stroke%3D%22none%22%20fill-rule%3D%22evenodd%22%2F%3E%3Ccircle%20stroke%3D%22%23ff5d3b%22%20stroke-width%3D%224%22%20fill%3D%22%23ff5d3b%22%20fill-rule%3D%22nonzero%22%20stroke-linejoin%3D%22round%22%20cx%3D%2224%22%20cy%3D%2224%22%20r%3D%2220%22%2F%3E%3Cpath%20d%3D%22M24%2C16%20L24%2C32%22%20stroke%3D%22%23FFF%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20transform%3D%22translate%2824.000000%2C%2024.000000%29%20scale%28-1%2C%201%29%20rotate%28-45.000000%29%20translate%28-24.000000%2C%20-24.000000%29%20%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%2F%3E%3Cpath%20d%3D%22M24%2C16%20L24%2C32%22%20stroke%3D%22%23FFF%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20transform%3D%22translate%2824.000000%2C%2024.000000%29%20rotate%28-45.000000%29%20translate%28-24.000000%2C%20-24.000000%29%20%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

var css_248z$6 = ".flow-builder-node .flow-builder-node__remove {\n  position: absolute;\n  top: -9px;\n  right: -9px;\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n.flow-builder-node .flow-builder-node__remove:hover {\n  opacity: 1;\n}\n.flow-builder-node .flow-builder-node__content-wrap:hover .flow-builder-node__remove,\n.flow-builder-node .flow-builder-node__content:hover .flow-builder-node__remove,\n.flow-builder-node .flow-builder-node__content-wrap:hover .flow-builder-sortable-handle,\n.flow-builder-node .flow-builder-node__content:hover .flow-builder-sortable-handle {\n  opacity: 1;\n}\n";
styleInject(css_248z$6);

var RemoveButton = function RemoveButton() {
  var _useContext = React.useContext(BuilderContext),
      registerNodes = _useContext.registerNodes,
      readonly = _useContext.readonly,
      PopconfirmComponent = _useContext.PopconfirmComponent,
      onRemoveNodeSuccess = _useContext.onRemoveNodeSuccess;

  var node = React.useContext(NodeContext);

  var _useAction = useAction(),
      removeNode = _useAction.removeNode;

  var registerNode = getRegisterNode(registerNodes, node.type);
  return !readonly && !(registerNode === null || registerNode === void 0 ? void 0 : registerNode.customRemove) && PopconfirmComponent ? /*#__PURE__*/React__default['default'].createElement(PopconfirmComponent, {
    title: (registerNode === null || registerNode === void 0 ? void 0 : registerNode.removeConfirmTitle) || 'Are you sure to remove this node?',
    onConfirm: function onConfirm() {
      removeNode();
      onRemoveNodeSuccess === null || onRemoveNodeSuccess === void 0 ? void 0 : onRemoveNodeSuccess(node);
    },
    getPopupContainer: function getPopupContainer(triggerNode) {
      return triggerNode.parentNode;
    }
  }, /*#__PURE__*/React__default['default'].createElement("img", {
    className: "flow-builder-node__remove",
    src: RemoveIcon
  })) : null;
};

var CommonNode = function CommonNode() {
  var _useContext = React.useContext(BuilderContext),
      readonly = _useContext.readonly,
      registerNodes = _useContext.registerNodes,
      nodes = _useContext.nodes,
      beforeNodeClick = _useContext.beforeNodeClick;

  var node = React.useContext(NodeContext);

  var _useAction = useAction(),
      clickNode = _useAction.clickNode,
      removeNode = _useAction.removeNode;

  var registerNode = getRegisterNode(registerNodes, node.type);
  var Component = (registerNode === null || registerNode === void 0 ? void 0 : registerNode.displayComponent) || DefaultDisplayComponent;

  var handleNodeClick = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return beforeNodeClick === null || beforeNodeClick === void 0 ? void 0 : beforeNodeClick(node);

            case 3:
              clickNode();
              _context.next = 9;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);
              console.log('node click error', _context.t0);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 6]]);
    }));

    return function handleNodeClick() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flow-builder-node ".concat((registerNode === null || registerNode === void 0 ? void 0 : registerNode.className) || '')
  }, /*#__PURE__*/React__default['default'].createElement(Arrow, null), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flow-builder-node__content-wrap"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flow-builder-node__content",
    onClick: handleNodeClick
  }, /*#__PURE__*/React__default['default'].createElement(Component, {
    readonly: readonly,
    node: node,
    nodes: nodes,
    remove: removeNode
  })), /*#__PURE__*/React__default['default'].createElement(RemoveButton, null)), /*#__PURE__*/React__default['default'].createElement(AddNodeButton, null));
};

var AddConditionIcon = "data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20clip-path%3D%22url%28%23clip0%29%22%3E%3Cpath%20d%3D%22M5%208C5%206.89543%204.10457%206%203%206C1.89543%206%201%206.89543%201%208C1%209.10457%201.89543%2010%203%2010C4.10457%2010%205%209.10457%205%208Z%22%20fill%3D%22%23333333%22%20stroke%3D%22%23333333%22%20stroke-width%3D%221.3333%22%20stroke-linejoin%3D%22round%22%2F%3E%3Cpath%20d%3D%22M15%208C15%206.89543%2014.1046%206%2013%206C11.8954%206%2011%206.89543%2011%208C11%209.10457%2011.8954%2010%2013%2010C14.1046%2010%2015%209.10457%2015%208Z%22%20stroke%3D%22%23333333%22%20stroke-width%3D%221.3333%22%20stroke-linejoin%3D%22round%22%2F%3E%3Cpath%20d%3D%22M4.5%208L11%208%22%20stroke%3D%22%23333333%22%20stroke-width%3D%221.3333%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3CclipPath%20id%3D%22clip0%22%3E%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22white%22%20transform%3D%22translate%280%2016%29%20rotate%28-90%29%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fsvg%3E";

var ConditionsDashed = function ConditionsDashed() {
  var _useContext = React.useContext(BuilderContext),
      lineColor = _useContext.lineColor;

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flow-builder-branch-node__dashed",
    style: {
      border: "2px dashed ".concat(lineColor)
    }
  });
};

var SortingDashed = function SortingDashed() {
  var _useContext2 = React.useContext(BuilderContext),
      lineColor = _useContext2.lineColor;

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flow-builder-branch-node__sorting__dashed",
    style: {
      border: "2px dashed ".concat(lineColor)
    }
  });
};

var SortableItem = reactSortableHoc.SortableElement(function (props) {
  var renderConditionNode = props.renderConditionNode,
      branch = props.branch,
      branchIndex = props.branchIndex;
  var parentNode = React.useContext(NodeContext);
  return renderConditionNode({
    node: branch,
    nodeIndex: branchIndex,
    parentNode: parentNode
  });
});

var BranchNode = function BranchNode(props) {
  var _registerNode$showPra, _registerNode$showPra2;

  var renderConditionNode = props.renderConditionNode;

  var _useContext3 = React.useContext(BuilderContext),
      nodes = _useContext3.nodes,
      layout = _useContext3.layout,
      spaceX = _useContext3.spaceX,
      spaceY = _useContext3.spaceY,
      readonly = _useContext3.readonly,
      registerNodes = _useContext3.registerNodes,
      beforeNodeClick = _useContext3.beforeNodeClick,
      beforeAddConditionNode = _useContext3.beforeAddConditionNode,
      dragType = _useContext3.dragType,
      _useContext3$DropComp = _useContext3.DropComponent,
      DropComponent = _useContext3$DropComp === void 0 ? DropButton : _useContext3$DropComp,
      showPracticalBranchNode = _useContext3.showPracticalBranchNode,
      showPracticalBranchRemove = _useContext3.showPracticalBranchRemove,
      sortable = _useContext3.sortable,
      onDropNodeSuccess = _useContext3.onDropNodeSuccess,
      onAddNodeSuccess = _useContext3.onAddNodeSuccess;

  var node = React.useContext(NodeContext);

  var _useAction = useAction(),
      addNode = _useAction.addNode,
      removeNode = _useAction.removeNode,
      clickNode = _useAction.clickNode;

  var children = node.children;
  var registerNode = getRegisterNode(registerNodes, node.type);
  var conditionCount = Array.isArray(children) ? children.length : 0;
  var disabled = typeof (registerNode === null || registerNode === void 0 ? void 0 : registerNode.conditionMaxNum) === 'number' ? conditionCount === (registerNode === null || registerNode === void 0 ? void 0 : registerNode.conditionMaxNum) : false;
  var droppable = dragType && (registerNode === null || registerNode === void 0 ? void 0 : registerNode.conditionNodeType) === dragType;
  var Component = (registerNode === null || registerNode === void 0 ? void 0 : registerNode.displayComponent) || DefaultDisplayComponent;

  var handleAddCondition = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return beforeAddConditionNode === null || beforeAddConditionNode === void 0 ? void 0 : beforeAddConditionNode(node);

            case 3:
              if (registerNode === null || registerNode === void 0 ? void 0 : registerNode.conditionNodeType) {
                addNode(registerNode.conditionNodeType);
                onAddNodeSuccess === null || onAddNodeSuccess === void 0 ? void 0 : onAddNodeSuccess(registerNode.conditionNodeType);
              }

              _context.next = 8;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 6]]);
    }));

    return function handleAddCondition() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleDrop = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return beforeAddConditionNode === null || beforeAddConditionNode === void 0 ? void 0 : beforeAddConditionNode(node);

            case 3:
              if (registerNode === null || registerNode === void 0 ? void 0 : registerNode.conditionNodeType) {
                addNode(registerNode.conditionNodeType);
                onDropNodeSuccess === null || onDropNodeSuccess === void 0 ? void 0 : onDropNodeSuccess(registerNode.conditionNodeType);
              }

              _context2.next = 8;
              break;

            case 6:
              _context2.prev = 6;
              _context2.t0 = _context2["catch"](0);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 6]]);
    }));

    return function handleDrop() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleNodeClick = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return beforeNodeClick === null || beforeNodeClick === void 0 ? void 0 : beforeNodeClick(node);

            case 3:
              clickNode();
              _context3.next = 9;
              break;

            case 6:
              _context3.prev = 6;
              _context3.t0 = _context3["catch"](0);
              console.log('node click error', _context3.t0);

            case 9:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 6]]);
    }));

    return function handleNodeClick() {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flow-builder-node flow-builder-branch-node ".concat((registerNode === null || registerNode === void 0 ? void 0 : registerNode.className) || '')
  }, /*#__PURE__*/React__default['default'].createElement(Arrow, null), ((_registerNode$showPra = registerNode === null || registerNode === void 0 ? void 0 : registerNode.showPracticalBranchNode) !== null && _registerNode$showPra !== void 0 ? _registerNode$showPra : showPracticalBranchNode) ? /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flow-builder-node__content-wrap"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flow-builder-node__content",
    onClick: handleNodeClick
  }, /*#__PURE__*/React__default['default'].createElement(Component, {
    readonly: readonly,
    node: node,
    nodes: nodes,
    remove: removeNode
  })), ((_registerNode$showPra2 = registerNode === null || registerNode === void 0 ? void 0 : registerNode.showPracticalBranchRemove) !== null && _registerNode$showPra2 !== void 0 ? _registerNode$showPra2 : showPracticalBranchRemove) ? /*#__PURE__*/React__default['default'].createElement(RemoveButton, null) : null), /*#__PURE__*/React__default['default'].createElement(SplitLine, null)) : null, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flow-builder-branch-node__content"
  }, !readonly && !disabled ? /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flow-builder-branch-node__add-button",
    onClick: function onClick() {
      handleAddCondition();
    }
  }, droppable ? /*#__PURE__*/React__default['default'].createElement(DropComponent, {
    onDrop: handleDrop
  }) : (registerNode === null || registerNode === void 0 ? void 0 : registerNode.addConditionIcon) || /*#__PURE__*/React__default['default'].createElement(ActionButton, {
    size: 20,
    icon: AddConditionIcon
  })) : /*#__PURE__*/React__default['default'].createElement(SplitLine, {
    className: "branch-add-disabled",
    style: _defineProperty({}, layout === 'vertical' ? 'top' : 'left', layout === 'vertical' ? "".concat(-spaceY, "px") : "".concat(-spaceX, "px"))
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flow-builder-branch-node__conditions"
  }, conditionCount === 1 ? /*#__PURE__*/React__default['default'].createElement(ConditionsDashed, null) : null, children === null || children === void 0 ? void 0 : children.map(function (branch, index) {
    var _node$path;

    return sortable ? /*#__PURE__*/React__default['default'].createElement(SortableItem, {
      key: branch.id,
      index: index,
      collection: (_node$path = node.path) === null || _node$path === void 0 ? void 0 : _node$path.join(','),
      branch: branch,
      branchIndex: index,
      renderConditionNode: renderConditionNode
    }) : renderConditionNode({
      node: branch,
      nodeIndex: index,
      parentNode: node
    });
  })), sortable ? /*#__PURE__*/React__default['default'].createElement(SortingDashed, null) : null), /*#__PURE__*/React__default['default'].createElement(AddNodeButton, null));
};

var ConditionNode = function ConditionNode(props) {
  var parentNode = props.parentNode,
      conditionIndex = props.conditionIndex,
      renderNext = props.renderNext;

  var _useContext = React.useContext(BuilderContext),
      layout = _useContext.layout,
      spaceX = _useContext.spaceX,
      spaceY = _useContext.spaceY,
      readonly = _useContext.readonly,
      registerNodes = _useContext.registerNodes,
      nodes = _useContext.nodes,
      beforeNodeClick = _useContext.beforeNodeClick,
      sortable = _useContext.sortable,
      sortableAnchor = _useContext.sortableAnchor;

  var node = React.useContext(NodeContext);

  var _useAction = useAction(),
      clickNode = _useAction.clickNode,
      removeNode = _useAction.removeNode;

  var conditionCount = Array.isArray(parentNode === null || parentNode === void 0 ? void 0 : parentNode.children) ? (parentNode === null || parentNode === void 0 ? void 0 : parentNode.children.length) || 0 : 0;
  var registerNode = getRegisterNode(registerNodes, node.type);
  var Component = (registerNode === null || registerNode === void 0 ? void 0 : registerNode.displayComponent) || DefaultDisplayComponent;
  var ConditionDragHandle = React.useMemo(function () {
    return reactSortableHoc.SortableHandle(function () {
      return /*#__PURE__*/React__default['default'].createElement("span", {
        className: "flow-builder-sortable-handle"
      }, sortableAnchor || ':::');
    });
  }, [sortableAnchor]);

  var handleNodeClick = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return beforeNodeClick === null || beforeNodeClick === void 0 ? void 0 : beforeNodeClick(node);

            case 3:
              clickNode();
              _context.next = 9;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);
              console.log('node click error', _context.t0);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 6]]);
    }));

    return function handleNodeClick() {
      return _ref.apply(this, arguments);
    };
  }();

  var coverIndexClassName = function (index, total) {
    if (index === 0) {
      return 'cover-first';
    }

    if (index === total - 1) {
      return 'cover-last';
    }

    return 'cover-middle';
  }(conditionIndex, conditionCount);

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flow-builder-node flow-builder-condition-node ".concat((registerNode === null || registerNode === void 0 ? void 0 : registerNode.className) || ''),
    style: {
      padding: layout === 'vertical' ? "0 ".concat(spaceX, "px") : "".concat(spaceY, "px 0")
    }
  }, conditionCount > 1 ? /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(CoverLine, {
    full: conditionIndex !== 0 && conditionIndex !== conditionCount - 1,
    className: "cover-condition-start ".concat(coverIndexClassName)
  }), /*#__PURE__*/React__default['default'].createElement(CoverLine, {
    full: conditionIndex !== 0 && conditionIndex !== conditionCount - 1,
    className: "cover-condition-end ".concat(coverIndexClassName)
  })) : null, /*#__PURE__*/React__default['default'].createElement(SplitLine, null), /*#__PURE__*/React__default['default'].createElement(Arrow, null), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flow-builder-node__content-wrap"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flow-builder-node__content",
    onClick: handleNodeClick
  }, /*#__PURE__*/React__default['default'].createElement(Component, {
    readonly: readonly,
    node: node,
    nodes: nodes,
    remove: removeNode
  })), /*#__PURE__*/React__default['default'].createElement(RemoveButton, null), sortable ? /*#__PURE__*/React__default['default'].createElement(ConditionDragHandle, null) : null), /*#__PURE__*/React__default['default'].createElement(AddNodeButton, null), Array.isArray(node.children) ? renderNext({
    nodes: node.children,
    parentNode: node
  }) : null, /*#__PURE__*/React__default['default'].createElement(FillLine, null));
};

var LoopNode = function LoopNode(props) {
  var renderNext = props.renderNext;
  var ref = React.useRef(null);

  var _useContext = React.useContext(BuilderContext),
      readonly = _useContext.readonly,
      registerNodes = _useContext.registerNodes,
      nodes = _useContext.nodes,
      beforeNodeClick = _useContext.beforeNodeClick,
      layout = _useContext.layout,
      spaceX = _useContext.spaceX,
      spaceY = _useContext.spaceY,
      lineColor = _useContext.lineColor;

  var node = React.useContext(NodeContext);

  var _useAction = useAction(),
      clickNode = _useAction.clickNode,
      removeNode = _useAction.removeNode;

  var registerNode = getRegisterNode(registerNodes, node.type);
  var Component = (registerNode === null || registerNode === void 0 ? void 0 : registerNode.displayComponent) || DefaultDisplayComponent;

  var handleNodeClick = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return beforeNodeClick === null || beforeNodeClick === void 0 ? void 0 : beforeNodeClick(node);

            case 3:
              clickNode();
              _context.next = 9;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);
              console.log('node click error', _context.t0);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 6]]);
    }));

    return function handleNodeClick() {
      return _ref.apply(this, arguments);
    };
  }();

  React.useEffect(function () {
    if (!ref.current) return;

    if (layout === 'vertical') {
      var _ref$current, _ref$current$parentNo;

      var defaultSpaceX = spaceX;
      var loopContentWidth = ref.current.clientWidth;
      ref.current.style.marginRight = "-".concat(loopContentWidth, "px");
      var parentDom = (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : (_ref$current$parentNo = _ref$current.parentNode) === null || _ref$current$parentNo === void 0 ? void 0 : _ref$current$parentNo.parentNode;

      if (parentDom) {
        var parentContentWidth = parentDom.clientWidth - (parseInt(parentDom.style.paddingLeft) || 0) - (parseInt(parentDom.style.paddingRight) || 0);
        var offsetWidth = loopContentWidth - parentContentWidth / 2;

        if (parentDom.classList.contains('flow-builder-condition-node') || parentDom.classList.contains('flow-builder-loop-node__content')) {
          if (offsetWidth > defaultSpaceX) {
            parentDom.style.paddingRight = "".concat(offsetWidth, "px");
          } else {
            parentDom.style.paddingRight = "".concat(defaultSpaceX, "px");
          }

          if (parentDom.classList.contains('flow-builder-condition-node')) {
            var coverFirstLines = parentDom.querySelectorAll(':scope > .flow-builder-line__cover.cover-first');

            var _iterator = _createForOfIteratorHelper(coverFirstLines),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var item = _step.value;
                item.style.width = "calc(100% - ".concat(parentContentWidth / 2 + defaultSpaceX, "px)");
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            var coverLastLines = parentDom.querySelectorAll(':scope > .flow-builder-line__cover.cover-last');

            var _iterator2 = _createForOfIteratorHelper(coverLastLines),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _item = _step2.value;
                _item.style.width = "".concat(parentContentWidth / 2 + defaultSpaceX, "px");
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }

          if (parentDom.classList.contains('flow-builder-loop-node__content')) {
            var coverLoopLines = parentDom.querySelectorAll(':scope > .flow-builder-line__cover');

            var _iterator3 = _createForOfIteratorHelper(coverLoopLines),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _item2 = _step3.value;
                _item2.style.width = "".concat(parentContentWidth / 2 + defaultSpaceX, "px");
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        }
      }
    } else {
      var _ref$current2, _ref$current2$parentN;

      var defaultSpaceY = spaceY;
      var loopContentHeight = ref.current.clientHeight;
      ref.current.style.marginTop = "-".concat(loopContentHeight, "px");

      var _parentDom = (_ref$current2 = ref.current) === null || _ref$current2 === void 0 ? void 0 : (_ref$current2$parentN = _ref$current2.parentNode) === null || _ref$current2$parentN === void 0 ? void 0 : _ref$current2$parentN.parentNode;

      if (_parentDom) {
        var parentContentHeight = _parentDom.clientHeight - (parseInt(_parentDom.style.paddingTop) || 0) - (parseInt(_parentDom.style.paddingBottom) || 0);
        var offsetHeight = loopContentHeight - parentContentHeight / 2;

        if (_parentDom.classList.contains('flow-builder-condition-node') || _parentDom.classList.contains('flow-builder-loop-node__content')) {
          if (offsetHeight > defaultSpaceY) {
            _parentDom.style.paddingTop = "".concat(offsetHeight, "px");
          } else {
            _parentDom.style.paddingTop = "".concat(defaultSpaceY, "px");
          }

          if (_parentDom.classList.contains('flow-builder-condition-node')) {
            var _coverFirstLines = _parentDom.querySelectorAll(':scope > .flow-builder-line__cover.cover-first');

            var _iterator4 = _createForOfIteratorHelper(_coverFirstLines),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var _item3 = _step4.value;
                _item3.style.height = "".concat(parentContentHeight / 2 + defaultSpaceY, "px");
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            var _coverLastLines = _parentDom.querySelectorAll(':scope > .flow-builder-line__cover.cover-last');

            var _iterator5 = _createForOfIteratorHelper(_coverLastLines),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var _item4 = _step5.value;
                _item4.style.height = "calc(100% - ".concat(parentContentHeight / 2 + defaultSpaceY, "px)");
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }

          if (_parentDom.classList.contains('flow-builder-loop-node__content')) {
            var _coverLoopLines = _parentDom.querySelectorAll(':scope > .flow-builder-line__cover');

            var _iterator6 = _createForOfIteratorHelper(_coverLoopLines),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var _item5 = _step6.value;
                _item5.style.height = "".concat(parentContentHeight / 2 + defaultSpaceY, "px");
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
          }
        }
      }
    }
  }, [nodes, registerNodes]);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flow-builder-node flow-builder-loop-node ".concat((registerNode === null || registerNode === void 0 ? void 0 : registerNode.className) || '')
  }, /*#__PURE__*/React__default['default'].createElement(Arrow, null), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flow-builder-node__content-wrap"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flow-builder-node__content",
    onClick: handleNodeClick
  }, /*#__PURE__*/React__default['default'].createElement(Component, {
    readonly: readonly,
    node: node,
    nodes: nodes,
    remove: removeNode
  })), /*#__PURE__*/React__default['default'].createElement(RemoveButton, null)), /*#__PURE__*/React__default['default'].createElement(SplitLine, null), /*#__PURE__*/React__default['default'].createElement("div", {
    ref: ref,
    className: "flow-builder-loop-node__content",
    style: _defineProperty({
      padding: layout === 'vertical' ? "0 ".concat(spaceX, "px") : "".concat(spaceY, "px 0")
    }, layout === 'vertical' ? 'borderLeft' : 'borderBottom', "2px solid ".concat(lineColor))
  }, /*#__PURE__*/React__default['default'].createElement(Arrow, null), /*#__PURE__*/React__default['default'].createElement(CoverLine, {
    className: "cover-loop-start"
  }), /*#__PURE__*/React__default['default'].createElement(CoverLine, {
    className: "cover-loop-end"
  }), /*#__PURE__*/React__default['default'].createElement(AddNodeButton, {
    inLoop: true
  }), Array.isArray(node.children) ? renderNext({
    nodes: node.children,
    parentNode: node
  }) : null), /*#__PURE__*/React__default['default'].createElement(AddNodeButton, null));
};

var css_248z$7 = ".flow-builder-node,\n.flow-builder-node__content-wrap,\n.flow-builder-node__content,\n.flow-builder-branch-node__content,\n.flow-builder-loop-node__content {\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n.flow-builder-loop-node__content {\n  z-index: 5;\n}\n.flow-builder-node__content-wrap,\n.flow-builder-node__content {\n  cursor: pointer;\n}\n.flow-builder-branch-node__add-button {\n  position: absolute;\n  cursor: pointer;\n  z-index: 1;\n}\n.flow-builder-branch-node__add-button .flow-builder-drop-button {\n  width: 20px;\n  height: 20px;\n}\n.flow-builder-branch-node .branch-add-disabled {\n  position: absolute;\n}\n.flow-builder-branch-node__conditions {\n  display: flex;\n}\n.flow-builder-branch-node__dashed,\n.flow-builder-branch-node__sorting__dashed {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.flow-builder-branch-node__sorting__dashed {\n  display: none;\n}\n.flow-builder-vertical {\n  margin: 0 auto;\n  flex-direction: column;\n}\n.flow-builder-vertical .flow-builder-node,\n.flow-builder-vertical .flow-builder-node__content-wrap,\n.flow-builder-vertical .flow-builder-node__content,\n.flow-builder-vertical .flow-builder-branch-node__content,\n.flow-builder-vertical .flow-builder-loop-node__content {\n  flex-direction: column;\n}\n.flow-builder-vertical .flow-builder-start-node {\n  padding-top: 16px;\n}\n.flow-builder-vertical .flow-builder-end-node {\n  padding-bottom: 16px;\n}\n.flow-builder-vertical .flow-builder-branch-node .flow-builder-branch-node__content {\n  margin-top: 10px;\n}\n.flow-builder-vertical .flow-builder-branch-node__add-button {\n  top: -10px;\n}\n.flow-builder-vertical .flow-builder-branch-node__conditions {\n  flex-direction: row;\n}\n.flow-builder-horizontal {\n  margin: auto 0;\n  flex-direction: row;\n}\n.flow-builder-horizontal .flow-builder-node,\n.flow-builder-horizontal .flow-builder-node__content-wrap,\n.flow-builder-horizontal .flow-builder-node__content,\n.flow-builder-horizontal .flow-builder-branch-node__content {\n  flex-direction: row;\n}\n.flow-builder-horizontal .flow-builder-start-node {\n  padding-left: 16px;\n}\n.flow-builder-horizontal .flow-builder-end-node {\n  padding-right: 16px;\n}\n.flow-builder-horizontal .flow-builder-branch-node .flow-builder-branch-node__content {\n  margin-left: 10px;\n}\n.flow-builder-horizontal .flow-builder-branch-node__add-button {\n  left: -10px;\n}\n.flow-builder-horizontal .flow-builder-branch-node__conditions {\n  flex-direction: column;\n}\n.flow-builder-sortable-handle {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 16px;\n  height: 16px;\n  cursor: move;\n  opacity: 0;\n  position: absolute;\n}\n";
styleInject(css_248z$7);

var ZoomTool = function ZoomTool() {
  var _useContext = React.useContext(BuilderContext),
      zoomTool = _useContext.zoomTool,
      zoomValue = _useContext.zoomValue;

  var _useZoom = useZoom(),
      minZoom = _useZoom.minZoom,
      maxZoom = _useZoom.maxZoom,
      zoom = _useZoom.zoom;

  var showZoom = Object.prototype.toString.call(zoomTool) === '[object Object]' ? !zoomTool.hidden : !!zoomTool;
  var minDisabled = zoomValue === minZoom;
  var maxDisabled = zoomValue === maxZoom;
  return showZoom ? /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flow-builder-zoom-tool"
  }, /*#__PURE__*/React__default['default'].createElement("button", {
    className: "flow-builder-tool-btn ".concat(minDisabled ? 'flow-builder-tool-btn-disabled' : ''),
    disabled: minDisabled,
    onClick: function onClick() {
      return zoom('out');
    }
  }, "-"), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "flow-builder-zoom-tool__number"
  }, zoomValue + '%'), /*#__PURE__*/React__default['default'].createElement("button", {
    className: "flow-builder-tool-btn ".concat(maxDisabled ? 'flow-builder-tool-btn-disabled' : ''),
    disabled: maxDisabled,
    onClick: function onClick() {
      return zoom('in');
    }
  }, "+")) : null;
};

var HistoryTool = function HistoryTool() {
  var _useContext = React.useContext(BuilderContext),
      historyTool = _useContext.historyTool,
      historyRecords = _useContext.historyRecords,
      activeHistoryRecordIndex = _useContext.activeHistoryRecordIndex;

  var _useHistory = useHistory(),
      history = _useHistory.history;

  var showHistory = Object.prototype.toString.call(historyTool) === '[object Object]' ? !historyTool.hidden : !!historyTool;
  var undoDisabled = activeHistoryRecordIndex <= 0;
  var redoDisabled = activeHistoryRecordIndex === historyRecords.length - 1;
  return showHistory ? /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flow-builder-undo-redo-tool"
  }, /*#__PURE__*/React__default['default'].createElement("button", {
    className: "flow-builder-tool-btn ".concat(undoDisabled ? 'flow-builder-tool-btn-disabled' : ''),
    disabled: undoDisabled,
    onClick: function onClick() {
      return history('undo');
    }
  }, '<'), /*#__PURE__*/React__default['default'].createElement("button", {
    className: "flow-builder-tool-btn ".concat(redoDisabled ? 'flow-builder-tool-btn-disabled' : ''),
    disabled: redoDisabled,
    onClick: function onClick() {
      return history('redo');
    }
  }, '>')) : null;
};

var css_248z$8 = ".flow-builder-drag-panel {\n  width: 272px;\n  margin-right: 16px;\n  padding: 16px;\n  overflow: auto;\n}\n.flow-builder-drag-panel ul {\n  padding: 0;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 8px;\n  margin: 0;\n}\n.flow-builder-drag-panel li {\n  list-style-type: none;\n}\n.flow-builder-drag-node-item {\n  display: flex;\n  align-items: center;\n  padding: 8px 16px;\n  cursor: move;\n}\n.flow-builder-drag-node-item .flow-builder-drag-node-icon {\n  display: flex;\n  margin-right: 4px;\n}\n";
styleInject(css_248z$8);

var DragPanel = function DragPanel() {
  var _useContext = React.useContext(BuilderContext),
      lineColor = _useContext.lineColor,
      backgroundColor = _useContext.backgroundColor,
      registerNodes = _useContext.registerNodes,
      setDragType = _useContext.setDragType;

  var handleDragStart = function handleDragStart(type) {
    setDragType(type);
  };

  var handleDragEnd = function handleDragEnd() {
    setDragType('');
  };

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flow-builder-drag-panel",
    style: {
      border: "1px solid ".concat(lineColor)
    }
  }, /*#__PURE__*/React__default['default'].createElement("ul", null, registerNodes.filter(function (item) {
    return !(item.isStart || item.isEnd);
  }).map(function (item) {
    var registerNode = getRegisterNode(registerNodes, item.type);
    var defaultIcon = getIsBranchNode(registerNodes, item.type) ? AddBranchIcon : getIsConditionNode(registerNodes, item.type) ? AddConditionIcon : AddNormalIcon;
    return /*#__PURE__*/React__default['default'].createElement("li", {
      key: item.type,
      className: "flow-builder-drag-node-item",
      style: {
        backgroundColor: backgroundColor
      },
      draggable: true,
      onDragStart: function onDragStart() {
        return handleDragStart(item.type);
      },
      onDragEnd: handleDragEnd
    }, /*#__PURE__*/React__default['default'].createElement("span", {
      className: "flow-builder-drag-node-icon"
    }, (registerNode === null || registerNode === void 0 ? void 0 : registerNode.addIcon) || /*#__PURE__*/React__default['default'].createElement("img", {
      src: defaultIcon,
      draggable: false
    })), /*#__PURE__*/React__default['default'].createElement("span", null, item.name));
  })));
};

var css_248z$9 = ".flow-builder-wrap {\n  position: relative;\n  height: 100%;\n  display: flex;\n}\n.flow-builder-content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n}\n.flow-builder {\n  display: flex;\n  align-items: center;\n}\n.flow-builder-tool {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #fff !important;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.15);\n}\n.flow-builder-zoom-tool {\n  width: 120px;\n  display: inline-flex;\n  align-items: center;\n}\n.flow-builder-zoom-tool__number {\n  flex: 1;\n  text-align: center;\n}\n.flow-builder-undo-redo-tool {\n  width: 80px;\n  display: inline-flex;\n  align-items: center;\n}\n.flow-builder-tool-btn {\n  cursor: pointer;\n  border: none;\n  background: none;\n  padding: 0;\n  flex: 1;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  height: 32px;\n}\n.flow-builder-tool-btn:hover {\n  color: #40a9ff;\n}\n.flow-builder-tool-btn-disabled {\n  cursor: not-allowed;\n  color: rgba(0, 0, 0, 0.25);\n}\n.flow-builder-tool-btn-disabled:hover {\n  color: rgba(0, 0, 0, 0.25);\n}\n";
styleInject(css_248z$9);

var Builder = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var builderContext = React.useContext(BuilderContext);
  var _builderContext$class = builderContext.className,
      className = _builderContext$class === void 0 ? '' : _builderContext$class,
      backgroundColor = builderContext.backgroundColor,
      layout = builderContext.layout,
      drawerProps = builderContext.drawerProps,
      registerNodes = builderContext.registerNodes,
      nodes = builderContext.nodes,
      onChange = builderContext.onChange,
      zoomValue = builderContext.zoomValue,
      onZoomChange = builderContext.onZoomChange,
      historyRecords = builderContext.historyRecords,
      activeHistoryRecordIndex = builderContext.activeHistoryRecordIndex,
      onHistoryChange = builderContext.onHistoryChange,
      selectedNode = builderContext.selectedNode,
      drawerTitle = builderContext.drawerTitle,
      draggable = builderContext.draggable,
      _builderContext$DragC = builderContext.DragComponent,
      DragComponent = _builderContext$DragC === void 0 ? DragPanel : _builderContext$DragC,
      setDragType = builderContext.setDragType,
      DrawerComponent = builderContext.DrawerComponent,
      createUuid = builderContext.createUuid;

  var _useZoom = useZoom(),
      minZoom = _useZoom.minZoom,
      maxZoom = _useZoom.maxZoom,
      zoom = _useZoom.zoom;

  var _useHistory = useHistory(),
      pushHistory = _useHistory.pushHistory,
      history = _useHistory.history;

  var _useAction = useAction(),
      addNode = _useAction.addNode,
      removeNode = _useAction.removeNode;

  var _useDrawer = useDrawer(),
      closeDrawer = _useDrawer.closeDrawer,
      saveDrawer = _useDrawer.saveDrawer;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      hasMounted = _useState2[0],
      setHasMounted = _useState2[1];

  var ConfigComponent = React.useMemo(function () {
    var _getRegisterNode;

    return (_getRegisterNode = getRegisterNode(registerNodes, selectedNode === null || selectedNode === void 0 ? void 0 : selectedNode.type)) === null || _getRegisterNode === void 0 ? void 0 : _getRegisterNode.configComponent;
  }, [registerNodes, selectedNode]);

  var renderNode = function renderNode(_ref) {
    var node = _ref.node,
        nodeIndex = _ref.nodeIndex,
        parentNode = _ref.parentNode;
    var id = node.id,
        type = node.type;
    var abstractNodeType = getAbstractNodeType(registerNodes, type);

    var renderAbstractNode = function renderAbstractNode() {
      switch (abstractNodeType) {
        case 'start':
          return /*#__PURE__*/React__default['default'].createElement(StartNode, null);

        case 'end':
          return /*#__PURE__*/React__default['default'].createElement(EndNode, null);

        case 'branch':
          return /*#__PURE__*/React__default['default'].createElement(BranchNode, {
            renderConditionNode: renderNode
          });

        case 'condition':
          return /*#__PURE__*/React__default['default'].createElement(ConditionNode, {
            parentNode: parentNode,
            conditionIndex: nodeIndex,
            renderNext: render
          });

        case 'loop':
          return /*#__PURE__*/React__default['default'].createElement(LoopNode, {
            renderNext: render
          });

        default:
          return /*#__PURE__*/React__default['default'].createElement(CommonNode, null);
      }
    };

    return /*#__PURE__*/React__default['default'].createElement(NodeContext.Provider, {
      key: id,
      value: node
    }, renderAbstractNode());
  };

  var render = function render(_ref2) {
    var nodes = _ref2.nodes,
        parentNode = _ref2.parentNode;
    return nodes.map(function (node, index) {
      return renderNode({
        node: node,
        nodeIndex: index,
        parentNode: parentNode
      });
    });
  };

  var renderZoomTool = /*#__PURE__*/React__default['default'].createElement(ZoomTool, null);
  var renderHistoryTool = /*#__PURE__*/React__default['default'].createElement(HistoryTool, null);
  React.useImperativeHandle(ref, function () {
    return {
      history: history,
      zoom: zoom,
      add: addNode,
      remove: removeNode,
      closeDrawer: closeDrawer,
      context: builderContext
    };
  });
  React.useEffect(function () {
    if (hasMounted && historyRecords.length > 1) {
      onHistoryChange === null || onHistoryChange === void 0 ? void 0 : onHistoryChange(activeHistoryRecordIndex <= 0, activeHistoryRecordIndex === historyRecords.length - 1);
    }
  }, [historyRecords, activeHistoryRecordIndex]);
  React.useEffect(function () {
    hasMounted && (onZoomChange === null || onZoomChange === void 0 ? void 0 : onZoomChange(zoomValue === minZoom, zoomValue, zoomValue === maxZoom));
  }, [zoomValue, minZoom, maxZoom]);
  React.useEffect(function () {
    var defaultNodes = _toConsumableArray(nodes);

    if (defaultNodes.length === 0) {
      var _registerNodes$find, _registerNodes$find2;

      var startNodeType = (_registerNodes$find = registerNodes.find(function (item) {
        return item.isStart;
      })) === null || _registerNodes$find === void 0 ? void 0 : _registerNodes$find.type;
      var endNodeType = (_registerNodes$find2 = registerNodes.find(function (item) {
        return item.isEnd;
      })) === null || _registerNodes$find2 === void 0 ? void 0 : _registerNodes$find2.type;
      defaultNodes = [createNewNode(registerNodes, startNodeType, createUuid), createNewNode(registerNodes, endNodeType, createUuid)];
      onChange(defaultNodes, 'init-builder');
    }

    pushHistory(defaultNodes);
    setHasMounted(true);
  }, []);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flow-builder-wrap ".concat(className)
  }, renderHistoryTool || renderZoomTool ? /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flow-builder-tool"
  }, renderHistoryTool, renderZoomTool) : null, draggable ? /*#__PURE__*/React__default['default'].createElement(DragComponent, {
    onDragStart: setDragType,
    onDragEnd: function onDragEnd() {
      return setDragType('');
    }
  }) : null, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flow-builder-content",
    style: {
      backgroundColor: backgroundColor
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flow-builder flow-builder-".concat(layout),
    style: {
      zoom: "".concat(zoomValue, "%")
    }
  }, render({
    nodes: nodes
  }))), DrawerComponent ? /*#__PURE__*/React__default['default'].createElement(DrawerComponent, _objectSpread2({
    title: drawerTitle || 'Configuration',
    width: 480,
    destroyOnClose: true,
    maskClosable: false,
    visible: !!selectedNode,
    onClose: closeDrawer
  }, drawerProps), ConfigComponent && selectedNode ? /*#__PURE__*/React__default['default'].createElement(ConfigComponent, {
    key: selectedNode.id,
    node: selectedNode,
    nodes: nodes,
    cancel: closeDrawer,
    save: saveDrawer
  }) : null) : null);
});

var conditionSortingClassName = 'flow-builder-branch-node__content__sorting';
var SortableBuilder = reactSortableHoc.SortableContainer(function (props) {
  return /*#__PURE__*/React__default['default'].createElement(Builder, {
    ref: props.builderRef
  });
});
var FlowBuilder = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var zoomTool = props.zoomTool,
      nodes = props.nodes,
      onChange = props.onChange,
      sortable = props.sortable;

  var _useState = React.useState((zoomTool === null || zoomTool === void 0 ? void 0 : zoomTool.initialValue) || 100),
      _useState2 = _slicedToArray(_useState, 2),
      zoomValue = _useState2[0],
      setZoomValue = _useState2[1];

  var _useState3 = React.useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      historyRecords = _useState4[0],
      setHistoryRecords = _useState4[1];

  var _useState5 = React.useState(-1),
      _useState6 = _slicedToArray(_useState5, 2),
      activeHistoryRecordIndex = _useState6[0],
      setActiveHistoryRecordIndex = _useState6[1];

  var _useState7 = React.useState(),
      _useState8 = _slicedToArray(_useState7, 2),
      selectedNode = _useState8[0],
      setSelectedNode = _useState8[1];

  var _useState9 = React.useState(''),
      _useState10 = _slicedToArray(_useState9, 2),
      drawerTitle = _useState10[0],
      setDrawerTitle = _useState10[1];

  var _useState11 = React.useState(''),
      _useState12 = _slicedToArray(_useState11, 2),
      dragType = _useState12[0],
      setDragType = _useState12[1];

  var _useState13 = React.useState(props.registerNodes || []),
      _useState14 = _slicedToArray(_useState13, 2),
      registerNodes = _useState14[0],
      setRegisterNodes = _useState14[1];

  var defaultProps = React.useMemo(function () {
    return {
      backgroundColor: '#F7F7F7',
      lineColor: '#999999',
      spaceX: 16,
      spaceY: 16,
      layout: 'vertical',
      registerNodes: [],
      nodes: []
    };
  }, []);
  var layout = props.layout || defaultProps.layout;

  var handleChange = function handleChange(nodes, changeEvent) {
    computeNodesPath(nodes);
    onChange(nodes, changeEvent);
  };

  var handleSortStart = function handleSortStart(params) {
    var _node$parentNode;

    var node = params.node;
    (_node$parentNode = node.parentNode) === null || _node$parentNode === void 0 ? void 0 : _node$parentNode.parentNode.classList.add(conditionSortingClassName);
  };

  var handleSortEnd = function handleSortEnd(params) {
    var _get;

    var collection = params.collection,
        oldIndex = params.oldIndex,
        newIndex = params.newIndex,
        conditionNodes = params.nodes; // @ts-ignore

    conditionNodes[0].node.parentNode.parentNode.classList.remove(conditionSortingClassName);
    var children = (_get = get__default['default'](nodes, collection.split(','))) === null || _get === void 0 ? void 0 : _get.children;
    exchangeNodes(children, oldIndex, newIndex);
    handleChange(_toConsumableArray(nodes), 'condition-sort');
  };

  React.useEffect(function () {
    if (Array.isArray(props.registerRemoteNodes) && props.registerRemoteNodes.length > 0) {
      Promise.allSettled(props.registerRemoteNodes.map(function (item) {
        return loadRemoteNode(item);
      })).then(function (res) {
        return res.filter(function (item) {
          return item.status === 'fulfilled';
        }).map(function (item) {
          return item.value;
        });
      }).then(function (remoteNodes) {
        return setRegisterNodes([].concat(_toConsumableArray(props.registerNodes), _toConsumableArray(remoteNodes)));
      }).catch(function () {
        return setRegisterNodes(props.registerNodes);
      });
    } else {
      setRegisterNodes(props.registerNodes);
    }
  }, [props.registerNodes, props.registerRemoteNodes]);
  return /*#__PURE__*/React__default['default'].createElement(BuilderContext.Provider, {
    value: _objectSpread2(_objectSpread2(_objectSpread2({}, defaultProps), props), {}, {
      registerNodes: registerNodes,
      nodes: computeNodesPath(nodes),
      onChange: handleChange,
      zoomValue: zoomValue,
      setZoomValue: setZoomValue,
      historyRecords: historyRecords,
      setHistoryRecords: setHistoryRecords,
      activeHistoryRecordIndex: activeHistoryRecordIndex,
      setActiveHistoryRecordIndex: setActiveHistoryRecordIndex,
      selectedNode: selectedNode,
      setSelectedNode: setSelectedNode,
      drawerTitle: drawerTitle,
      setDrawerTitle: setDrawerTitle,
      dragType: dragType,
      setDragType: setDragType
    })
  }, sortable ? /*#__PURE__*/React__default['default'].createElement(SortableBuilder, {
    helperClass: "flow-builder-".concat(layout, " flow-builder-condition-node__sorting"),
    axis: layout === 'vertical' ? 'x' : 'y',
    useDragHandle: true,
    onSortStart: handleSortStart,
    onSortEnd: handleSortEnd,
    builderRef: ref
  }) : /*#__PURE__*/React__default['default'].createElement(Builder, {
    ref: ref
  }));
});

exports.BuilderContext = BuilderContext;
exports.NodeContext = NodeContext;
exports.buildFlatNodes = buildFlatNodes;
exports.buildTreeNodes = buildTreeNodes;
exports.createUuid = createUuid;
exports.default = FlowBuilder;
exports.defaultMaxLength = defaultMaxLength;
exports.defaultMaxZoom = defaultMaxZoom;
exports.defaultMinZoom = defaultMinZoom;
exports.defaultZoomStep = defaultZoomStep;
exports.useAction = useAction;
exports.useDrawer = useDrawer;
exports.useHistory = useHistory;
exports.useSort = useSort;
exports.useZoom = useZoom;
