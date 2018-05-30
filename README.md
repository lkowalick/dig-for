# Usage

```js
var dig = require('dig-for').dig;

var deeplyNested = { one: { two: { three: { four: 5 } } } };

dig.one(deeplyNested);
// => { two: { three: { four: 5 } } }
dig.one.two(deeplyNested);
// => { three: { four: 5 } }
dig.one.two.three(deeplyNested);
// => { four: 5 }
dig.one.two.three.four(deeplyNested);
// => 5
```
