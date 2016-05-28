export const hash =
`function hash(str){
  //your code here
}`;

export const hashSolution =
`function each(collection, callback) {
  if (Array.isArray(collection) || typeof collection === 'string') {
    for (var i = 0; i < collection.length ; i++) {
      callback(collection[i]);
    }
  } else {
    for (var prop in collection) {
      callback(collection[prop]);
    }
  }
}

function hash(str) {
  return reduce(str, function(result, item), {
    if (!result[item]) {
      result[item] = 1;
    } else {
      result[item] +=1;
    }
    return result;
  }, {});
}



***** Pseudo Code *****
// declare function hash
  // return reduce pass in collection, accumulator and {}
  //accumulator will accept 2 args result and item
    //if result has NOT property name as item
      //create that property and assign value of 1
    //otherwise
      //increase item property by one
  //return result
`;

export const hashExample =
`hash('abbccc'); => {a: 1, b: 2, c: 3};
`;
