// booleanOperations.js

// Function 1
function returnTrue() {
  // Your code here
  return true
}

// Function 2
function returnFalse() {
  // Your code here
  return false
}

// Function 3
function negateBoolean(value) {
  // Your code here
    return !value
}

// Function 4
function compareBooleans(bool1, bool2) {
  // Your code here
  if (bool1 == bool2){
    return true
  }else{
    return false
  }
}

module.exports = {
  returnTrue,
  returnFalse,
  negateBoolean,
  compareBooleans,
};
