// Find a duplicate, Space Edition™.

// We have an array of integers, where:

// The integers are in the range 1..n1..n
// The array has a length of n + 1n + 1
// It follows that our array has at least one integer which appears at least twice.But it may have several duplicates, and each duplicate may appear more than twice.

// Write a function which finds an integer that appears more than once in our array. (If there are multiple duplicates, you only need to find one of them.)

// We're going to run this function on our new, super-hip MacBook Pro With Retina Display™. Thing is, the damn thing came with the RAM soldered right to the motherboard, so we can't upgrade our RAM.So we need to optimize for space!

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