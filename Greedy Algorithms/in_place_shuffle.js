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