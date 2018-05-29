var dig = require('../index');

describe(".for", () => {
  it('digs like a mofo', () => {
    expect(dig.for.one({ one: 1, two: 2, three: 3 })).toEqual(1);
    expect(dig.for.two({ one: 1, two: 2, three: 3 })).toEqual(2);
    expect(dig.for.three({ one: 1, two: 2, three: 3 })).toEqual(3);
    expect(dig.for.one({ one: { two: 2, three: 3 } })).toEqual({ two: 2, three: 3 });
    expect(dig.for.one.two({ one: { two: 2, three: 3 } })).toEqual(2);
    expect(dig.for.one.three({ one: { two: 2, three: 3 } })).toEqual(3);
    expect(dig.for.one({ one: { two: 2 }, three: 3 })).toEqual({ two: 2 });
    expect(dig.for.one.two({ one: { two: 2 }, three: 3 })).toEqual(2);
    expect(dig.for.three({ one: { two: 2 }, three: 3 })).toEqual(3);
  });
});

describe(".o", () => {
  it('combines functions', () => {
    var a = (arg) => 3 * arg;
    var b = (arg) => 10 + arg;
    var c = (arg) => arg * arg;
    expect(dig.o.a.b.c(2)).toEqual(256);
  });
});
