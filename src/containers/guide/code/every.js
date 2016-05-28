export const every =
`function every(collection, predicate){
  //your code here
}`;

export const everySolution =
`function every(collection, predicate) {
  return reduce(collection, function(result, item) {
    if (!predicate(item)) {
      result = false;
    }
    return result;
  }, true);
}

***** Pseudo Code *****
//function every accepts collection and predicate
  // return reduce and pass in collection, accumulator and true
  // accumulator will accept 2 args result and item
    //check if predicate with item is not true
      //set result to false;
  //return result
`;

export const everyExample =
`//test array
var numbers = [2,4,5,6];

//test function
function isEven(num) {
  return num % 2 === 0;
}

every(numbers, isEven); => false
`;
