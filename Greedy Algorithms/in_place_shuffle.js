// Write a function for doing an in -place ↴ shuffle of an array.

// The shuffle must be "uniform," meaning each item in the original array must have the same probability of ending up in each spot in the final array.

// Assume that you have a function getRandom(floor, ceiling) for getting a random integer that is >= floor and <= ceiling.

function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

function shuffle(array) {

  // Shuffle the input in place
  if (array.length <= 1) return; 
  
  for (let i=0; i<array.length-1; i++){
    const randomChoiceIndex = getRandom(i, array.length-1)
    
    if (randomChoiceIndex !== i){
      const valueAtI = array[i];
      array[i] = array[randomChoiceIndex];
      array[randomChoiceIndex] = valueAtI;
    }
  }
}