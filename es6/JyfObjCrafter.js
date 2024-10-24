

  function kksTp(value) {
    if (value === null) return 'null';
    if (value === undefined) return 'undefined';
    return value.constructor.name.toLowerCase();
  }

  // 模仿abstract 我们在2010年的时候都这样写,没有类 现在2024年了
  function JyfObj() {}

  // 如果 base 或 top 对象通过原型链继承了属性，这些继承的属性不会被复制到 target 对象中。
  // 此外，如果 base 和 top 有同名属性，top 的属性值会覆盖 base 的属性值。
  JyfObj.prototype.topFuckBase = function (base, top) {
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
    JyfObj: JyfObj
  };
export default JyfObjCrafter;