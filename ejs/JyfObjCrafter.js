"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
(function (global, factory) {
  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined') {
    // CommonJS
    var moduleJyfObjCrafter = require("JyfObjCrafter");
    modules.exports = factory(moduleJyfObjCrafter);
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(factory);
  } else {
    // Browser
    global = typeof globalThis !== 'undefined' ? globalThis : global || self;
    global.JyfObjCrafter = factory();
  }
})(void 0, function () {
  'use strict';

  // 预备使用
  function kksTp(value) {
    if (value === null) return 'null';
    if (value === undefined) return 'undefined';
    return value.constructor.name.toLowerCase();
  }

  // 模仿abstract 我们在2010年的时候都这样写,没有类 现在2024年了
  // function JyfObj() {}

  // 如果 base 或 top 对象通过原型链继承了属性，这些继承的属性不会被复制到 target 对象中。
  // 此外，如果 base 和 top 有同名属性，top 的属性值会覆盖 base 的属性值。
  ObjectMergerType1 = function ObjectMergerType1(base, top) {
    var target = {};
    [base, top].forEach(function (obj) {
      Object.keys(obj).forEach(function (prop) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
          target[prop] = obj[prop];
        }
      });
    });
    return target;
  };
  var JyfObjCrafter = {
    ObjectMergerType1: ObjectMergerType1
  };
  return JyfObjCrafter;
});