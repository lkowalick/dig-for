var forHandler = {
  apply: (obj, _, args) => obj().path.reduce((accum, pathSegment) => accum[pathSegment], args[0]),
  get: (obj, prop) => new Proxy(() => ({ path: obj().path.concat([prop]) }), forHandler),
};

exports.dig = new Proxy(() => ({ path: [] }), forHandler);

/* wip
var oHandler = {
  apply: (obj, thisArg, args) =>  {
    console.log("MAH FUNCTIONS: ", obj().functions);
    console.log("argument: ", args[0]);
    console.log("thisArg be: ", Object.keys(thisArg));
    console.log("this be: ", Object.keys(this));
    obj().functions.reduce((accum, funktion) => {
      console.log("accum: ", accum);
      console.log("funktion: ", funktion);
      var dummy;
      eval(`dummy = ${funktion}`)
      return dummy(accum);
    }, args[0])
  },
  get: (obj, prop) => {
    console.log("The functions look like: ", obj().functions, " and the prop is ", prop);
    return new Proxy(() => ({ functions: [...obj().functions, prop] }),
                     oHandler);
  },
};

exports.o = new Proxy(function() { return { functions: [] } }, oHandler)
*/
