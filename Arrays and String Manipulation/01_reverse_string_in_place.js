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