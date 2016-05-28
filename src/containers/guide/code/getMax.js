export const getMax =
`function getMax(collection) {
  // code here
}
`;

export const getMaxExample =
`var numbers = [3,6,9,8,6,3,9];;

getMax(numbers) => 9;
`;

export const getMaxSolution =
`function getMax(collection) {
  return reduce(collection, function(memo, item) {
    if (item > memo) {
      memo = item;
    }
    return memo;
  });
}

***** Pseudo Code *****
// define getmax function
  //return reduce with collection and callback
  //start will be first item in the collection
    //if item greater then memo
      //memo will be equal item
    //return memo
`;
