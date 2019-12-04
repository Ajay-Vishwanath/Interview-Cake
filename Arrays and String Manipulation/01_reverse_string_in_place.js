// Write a function that takes an array of characters and reverses the letters in place. ↴

// Why an array of characters instead of a string?

// The goal of this question is to practice manipulating strings 
// in place. Since we're modifying the input, we need a mutable ↴ 
// type like an array, instead of JavaScript's immutable strings.


function reverse(arrayOfChars) {

  // Reverse the input array of characters in place
  let frontCounter = 0;
  let backCounter = arrayOfChars.length -1;
  while (frontCounter < backCounter){
    const firstChar = arrayOfChars[frontCounter];
    const secondChar = arrayOfChars[backCounter];
    
    arrayOfChars[frontCounter] = secondChar;
    arrayOfChars[backCounter] = firstChar;
    frontCounter ++;
    backCounter --;
  }
  return arrayOfChars;
}