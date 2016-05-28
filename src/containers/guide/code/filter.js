export const filter = `function filter(collection, predicate){
  //your code here
}`;

export const filterSolution = `function filter(collection, predicate) {
  var result = [];
  each(collection, function(item) {
    if (predicate(item)) {
      result.push(item);
    }
  });
  return result;
}

***** Pseudo Code *****
// function filter accepts collection and predicate function
  // create new array to store results

  // for each item in the collection
     // if call to predicate with item is truthy
       // push item into results
  // return results;
`;

export const filterExample = `var numbers = [1,2,3,4,5,6];
function isEven(num) {
  return num % 2 === 0;
}

filter(numbers, isEven); => [2, 4, 6];
`;

export const filterUsingReduce =
`function filter(collection, predicate) {
  return reduce(collection, function(result, item) {
    if(predicate(item)) {
      result.push(item);
    }
    return result;
  }, [])
}

***** Pseudo Code *****
//declare filter that accepts collection and predicate
  // return reduce and pass in collection, accumulator and []
  // accumulator will accept 2 args result and item
    //if predicate with item will return true
     // push item into the result
  // return result;
`;
