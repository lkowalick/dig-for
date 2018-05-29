var forHandler = {
  apply: (obj, _, args) => obj().path.reduce((accum, pathSegment) => accum[pathSegment], args[0]),
  get: (obj, prop) => new Proxy(() => ({ path: obj().path.concat([prop]) }), forHandler),
};

exports.for = new Proxy(() => ({ path: [] }), forHandler);

var oHandler = {
  apply: (obj, _, args) => obj().path.reduce((accum, pathSegment) => accum[pathSegment], args[0]),
  get: (obj, prop) => new Proxy(() => ({ path: obj().path.concat([prop]) }), oHandler),
};

exports.o = new Proxy(() => ({ not: 'sure' }), oHandler)
