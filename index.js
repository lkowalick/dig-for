var forHandler = {
  apply: (obj, _, args) => obj().path.reduce((accum, pathSegment) => accum[pathSegment], args[0]),
  get: (obj, prop) => new Proxy(() => ({ path: obj().path.concat([prop]) }), forHandler),
};

exports.dig = new Proxy(() => ({ path: [] }), forHandler);
