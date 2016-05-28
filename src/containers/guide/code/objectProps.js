export const objectProps =
`function objectProps(object){
  //your code here
}`;

export const eachModified =
`function each(collection, callback) {
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length ; i++) {
      callback(collection[i], i, collection);
    }
  } else {
    for (var prop in collection) {
      callback(collection[prop], prop, collection);
    }
  }
}
`;

export const reduceModified =
`function reduce(collection, accumulator, startValue) {
  each(collection, function(item, KEY) {
    if (startValue === undefined) {
      startValue = collection[0];
    }
    else {
      startValue = accumulator(startValue, item, KEY);
    }
  });

  return startValue;
}
`;

export const objectPropsSolution =
`function objectProps(object) {
  return reduce(object, function(result, item, PROP) {
    result.push(PROP);
    return result;
  }, []);
}

***** Pseudo Code *****
  //declare function objectProps that accept object
    //return reduce and pass in object, accumulator and []
    //accumulator will accept 3 arguments PROP will be last
      //push PROP value to the result
      //return result
`;

export const objectPropsExample =
`//test object
var myCar = {make: 'BMW', color: 'Black', engine: '3.5'}

objectProps(myCar); => ['make', 'color', 'engine']
`;
