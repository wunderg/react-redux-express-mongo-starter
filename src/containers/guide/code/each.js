export const each =
`function each(collection, callback){
  //your code here
}`

export const eachSolution =
`function each(collection, callback) {
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length ; i++) {
      callback(collection[i]);
    }
  } else {
    for (var prop in collection) {
      callback(collection[prop]);
    }
  }
}

***** Pseudo Code *****
// declare function each
  // check if collection is array
    // iterate over array
      // apply callback on every item in the array
  // else if collection is not an array
    // iterate over object
      // apply callback to every value in the object
`

export const eachExample =
`//test array
var numbers = [1,2,3,4,5,6];

//test function
function log(num) {
  console.log(num);
}

each(numbers, log); => log every value to the console;
`
