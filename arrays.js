var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ... array];
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
<<<<<<< HEAD
  array.unshift(element);
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}

function addElementToEndOfArray(array, element) {
  var newArray = [... array, element]
  return newArray
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array
}

=======
  var newArray = [element, ]  
}
>>>>>>> 0b3b6fd4b223f00c279024e5c220d385a5abd2ff
