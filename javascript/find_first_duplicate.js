function findFirstDuplicate(arr) {
  const set = new Set();

  for (let item of arr) {
    if (set.has(item)) {
      return item;
    } else {
      set.add(item)
    }
  }
  return -1
};

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
/* 
declare variable, set to a new Set object
iterate over elements in array
  if Set object does not contain element, add to Set
  else, if Set does already contain element, it is a duplicate
  return duplicate element
if no duplicates found, return -1
*/

// And a written explanation of your solution

/*
I need to iterate over the given array, and check whether any of the elements appear
more than once within the array. If so, return that element. Otherwise, return -1
*/

/*
I created a variable equal to a new Set object.
I then iterated over the array using forEach method.
For each element in the array, element is added to the Set if it is not already present within the Set.
If it is already present, that means that element has already been added before, making it a duplicate.
*/