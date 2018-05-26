# Usage

```js
var dig = require('dig-for');

var deeplyNested = { one: { two: { three: { four: 5 } } } };

console.log(dig.for.one(deeplyNested));
// => { two: { three: { four: 5 } } }
console.log(dig.for.one.two(deeplyNested));
// => { three: { four: 5 } }
console.log(dig.for.one.two.three(deeplyNested));
// => { four: 5 }
console.log(dig.for.one.two.three.four(deeplyNested));
// => 5
```
