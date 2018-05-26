var handler = {
  apply: (obj, _, args) => obj().path.reduce((accum, pathSegment) => accum[pathSegment], args[0]),
  get: (obj, prop) => new Proxy(() => ({ path: obj().path.concat([prop]) }), handler),
};

exports = new Proxy(() => ({ path: [] }), handler);
