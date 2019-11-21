function findRepeat(numbers) {

  // Find a number that appears more than once
  let floor = 1; //4
  let celing = numbers.length -1; 
  
  while (floor < celing){
    const midpoint = Math.floor(floor + ((celing-floor)/2)); 
    const lowerRangeFloor = floor; 
    const lowerRangeCeling = midpoint; 
    const upperRangeFloor = midpoint + 1; 
    const upperRangeCeling = celing; 
    const distinctPossibleIntegersInLowerRange = lowerRangeCeling - lowerRangeFloor + 1; 
    
    let lowerRangeEles = 0; 
    numbers.forEach(item => {
      if (item >= lowerRangeFloor && item <= lowerRangeCeling){
        lowerRangeEles += 1
      }
    })
    
    if (lowerRangeEles > distinctPossibleIntegersInLowerRange){
      floor = lowerRangeFloor;
      celing = lowerRangeCeling;
    } else {
      floor = upperRangeFloor;
      celing = upperRangeCeling;
    }
  }
  
  return floor;
}