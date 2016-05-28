export const each =
`function each(a, b){
  //your code here
}`;

export const reduce = `function reduce(a, b, c) {
  //your code here
}`;

export const contains =
`function contains(collection, target){
  //your code here
}`;

export const containsSolution =
`function contains(collection, target) {
  return reduce(collection, function(result, item) {
    if (item === target) {
      result = true;
    }
    return result;
  }, false);
}

***** Pseudo Code *****
// function contains accepts collection and target
  // call and return reduce and pass in collection,
    // anonymous function(result, item) that gets invoked for each item in collection
      // if item equals target
        // set result to true
      // return result
    // changingValue set to false
`;

export const containsExample =
`//test array
var numbers = [2,4,5,6];

contains(numbers, 4); => true;
`;
