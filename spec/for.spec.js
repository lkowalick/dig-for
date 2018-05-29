var dig = require('dig-for');

it("implements .for", function() {
  expect(dig.for.one({ one: 1, two: 2, three: 3 })).toEq(1);
  expect(dig.for.two({ one: 1, two: 2, three: 3 })).toEq(2);
  expect(dig.for.three({ one: 1, two: 2, three: 3 })).toEq(3);
  expect(dig.for.one({ one: { two: 2, three: 3 } })).toEq({ two: 2, three: 3 });
  expect(dig.for.one.two({ one: { two: 2, three: 3 } })).toEq(2);
  expect(dig.for.one.three({ one: { two: 2, three: 3 } })).toEq(3);
  expect(dig.for.one({ one: { two: 2 }, three: 3 })).toEq({ two: 2 });
  expect(dig.for.one.two({ one: { two: 2 }, three: 3 })).toEq(2);
  expect(dig.for.three({ one: { two: 2 }, three: 3 })).toEq(3);
});
