//TODO: Build a function forLoop. It takes an array as an argument. Start counting from 0, and, using a for loop, add a string to the array 25 times. But not just any string. If your i value is 1, add the string "I am 1 strange loop."; if your i value is anything else, add the string "I am ${i} strange loops.". (Remember flow control with if and else? And how do we interpolate i?) Then return the array.

function forLoop(array) {
  
  for (let i = 0; i < 25; i += 1) {
    
    if (i === 1 ) {
      array.push("I am 1 strange loop.");
    } else {
    array.push(`I am ${i} strange loops.`);
    }
  }
  
  return array;
  
}


//TODO: Create a function called whileLoop in loops.js. The function should take a number as an argument. Using a while loop, count down (using console.log) from the passed in number to 0. Then return the string 'done'.

function whileLoop(number) {
  
  while ( number > 0 ) {
    console.log(--number);
  }
  
  return "done"
  //I think in this task the test is slightly wrong. The task states the log should begin at n and end at 0, which are n+1 runs. However the test complains about n+1 be too much runs.
  
}