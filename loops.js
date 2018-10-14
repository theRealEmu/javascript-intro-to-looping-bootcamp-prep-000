//TODO: Build a function forLoop. It takes an array as an argument. Start counting from 0, and, using a for loop, add a string to the array 25 times. But not just any string. If your i value is 1, add the string "I am 1 strange loop."; if your i value is anything else, add the string "I am ${i} strange loops.". (Remember flow control with if and else? And how do we interpolate i?) Then return the array.

function forLoop(array) {
  
  for (let i = 0; i < 25; i += 1) {
    
    if (i === 1 ) {
      array.push("I am 1 strange loop.");
    }
    array.push(`I am ${i} strange loops.`);
    
  }
  
  return array;
}