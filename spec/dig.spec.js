var dig = require('../index').dig;

describe("dig", () => {
  it('digs like a mofo', () => {
    expect(dig.one({ one: 1, two: 2, three: 3 })).toEqual(1);
    expect(dig.two({ one: 1, two: 2, three: 3 })).toEqual(2);
    expect(dig.three({ one: 1, two: 2, three: 3 })).toEqual(3);
    expect(dig.one({ one: { two: 2, three: 3 } })).toEqual({ two: 2, three: 3 });
    expect(dig.one.two({ one: { two: 2, three: 3 } })).toEqual(2);
    expect(dig.one.three({ one: { two: 2, three: 3 } })).toEqual(3);
    expect(dig.one({ one: { two: 2 }, three: 3 })).toEqual({ two: 2 });
    expect(dig.one.two({ one: { two: 2 }, three: 3 })).toEqual(2);
    expect(dig.three({ one: { two: 2 }, three: 3 })).toEqual(3);
  });
});
