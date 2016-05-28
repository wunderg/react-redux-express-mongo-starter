export const map = `function map(collection, callback) {
  //your code here
}`;

export const mapSolution =
`function map(collection, callback) {
  var result = [];
  each(collection, function(item) {
    result.push(callback(item));
  });
  return result;
}

***** Pseudo Code *****
// declare function map
  // create new array to store results

  // use each to iterate over collection
    // and pass anonymous funcion as callback

  // apply callback function to every item in the collection
    // and push it into the results array

// return new array with modifed items
`;

export const mapExample =
`//test array
var numbers = [1,2,3,4,5];

//test function
function double(num) {
  return num * 2;
}

map(numbers, double); => [2, 4, 6, 8, 10];
`;

export const mapUsingReduce =
`function map(collection, callback) {
  return reduce(collection, function(result, item) {
    result.push(callback(item));
    return result;
  }, []);
}

***** Pseudo Code *****
// declare function map
  // return reduce and pass in collection, accumulator and []
  // accumulator will accept 2 args result and item
    //push result of callback with item into the result
    //return result
`;
