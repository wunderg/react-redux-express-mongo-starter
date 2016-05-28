export const indexOf =
`function indexOf(collection, target){
  //your code here
}`;

export const eachModifiedIndex =
`function each(collection, callback) {
  if (Array.isArray(collection) || typeof collection === 'string') {
    for (var i = 0; i < collection.length ; i++) {
      callback(collection[i], i, collection);
    }
  } else {
    for (var prop in collection) {
      callback(collection[prop]);
    }
  }
}
`;

export const reduceModifiedIndex =
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

export const indexOfSolution =
`function indexOf(collection, target) {
  return reduce(collection, function(result, item, INDEX) {
    if (item === target) {
      result = INDEX;
    }
    return result;
  }, null);
}

***** Pseudo Code *****
// declare function indexOf
  //return reduce with collection, callback and null
  //callback will accept 3 arguments - result, item, INDEX
  //start will be first item in the collection
    //if item is equal to target
      //then result = to item
    //return result
`;

export const indexOfExample =
`//test array
var numbers = [1,2,3,4,5,6];

indexOf(numbers, 4); => 3;
indexOf(numbers, 9); => null;
`;
