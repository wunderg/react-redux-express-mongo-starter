export const extend =
`function extend(){
  //your code here
}`;

export const extendSolution =
`function extend() {
  var args = Array.prototype.slice.call(arguments);
  return reduce(args, function(result, item) {
    each(item, function(value, prop) {
      result[prop] = value;
    });
    return result;
  });
}

***** Pseudo Code *****
// declare function extend
  // create array with all of the arguments
  //return reduce and pass in collection and accumulator
  //accumulator will accept result and item
    //starting value in not provided - collection[0] = start
      //call each with item(which is object) and callback
      //callback will accept val and prop name
        //use prop to create property on result and assign val for value
  //return result
`;

export const extendExample =
`extend({car: 'Dodge'}, {make: 'Ram'}, {color: 'White'});
=> {car: 'Dodge', make: 'Ram', color: 'White'}
`;
