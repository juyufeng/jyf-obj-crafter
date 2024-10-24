# JyfObjCrafter 教程与代码示例

## 简介
**JyfObjCrafter** is a versatile helper utility that is rooted in object-based functionality.
基于多年一线实战经验, 我将持续不断追加 Obj 系统类扩展.

### 持续更新!!!

### 举个例子
- 在这个示例中，merged对象包含了base和top对象的自有属性。如果base和top有同名属性（如age），则top对象的属性值会覆盖base对象的属性值。
```js
import  JyfObjCrafter from 'JyfObjCrafter';
// 定义两个要合并的对象  
var base = {  
  name: 'Alice',  
  age: 25  
};  
  
var top = {  
  age: 30,  
  city: 'New York'  
};  
  
// 使用JyfObjCrafter.ObjectMergerType1方法合并对象  
var merged = JyfObjCrafter.ObjectMergerType1(base, top);  
  
// 输出合并后的对象  
console.log(merged); // { name: 'Alice', age: 30, city: 'New York' }

```