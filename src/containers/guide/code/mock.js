export const array = `var array = [{age: '5', year: '2532'}, 'Justin', 5];`;

export const multiply =
`function multiply(num) {
  return num * 2;
}`;

export const useMult =
`//use multiply on the age property in the first object in the array
multiply(array[0][age]); // => 10`;

export const each =
`function each(collection, callback){
  //your code here
}`;

export const reject =
`function reject(collection, callback){
  //your code here
}`;

export const reduce = `function reduce(collection, accumulator, startValue) {
  //your code here
}`;

export const map = `function map(collection, callback) {
  //your code here
}`;

export const filterUsingReduce =
  `// copy and paste code below for student to debug
function = filter(collection predicate())
  var reduce(collection, predicate(item) {
    if(!item)
      result.put(collection);

    result = result + 1;
  }, '')
}`;

export const numberOfWins =
  `//example
numbersOfWins('LWLWLWWWLLWW')  // => {L: 5, W: 8};

function numberOfWins(str) {
  //your code here
}
`;

export const defaultProps =
  `// should work as underscore _.default
function defaults(object1, object2){
  //your code here
}
var iceCream = {flavor: "chocolate"};
defaults(iceCream, {flavor: "vanilla", sprinkles: "lots"});
=> {flavor: "chocolate", sprinkles: "lots"}

// Solution //
function defaults(object1, object2){
  return reduce(object2, function(result, v, k) {
    result[k] = object1[k] || object2[k]
    return result
  }, {})
}

// Solution #2 //
function defaults(object1, object2){
  return reduce(object2, function(result, v, k) {
    if (result[k] === undefined) {
      result[k] = v;
    }
    return result;
  }, object1);
}
`;
