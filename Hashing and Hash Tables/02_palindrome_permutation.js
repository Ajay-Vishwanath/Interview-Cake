function hasPalindromePermutation(theString) {

  // Check if any permutation of the input is a palindrome
  let result = true; 
    let charMap = {};
    
    for (let i=0; i<theString.length; i++){
      if (charMap[theString[i]]) {
        charMap[theString[i]] ++;
      } else {
        charMap[theString[i]] = 1
      }
    }
    
    
    const keys = Object.keys(charMap);
    let odd = false;
    
    keys.forEach(function(key){
      if (odd === false && charMap[key] % 2 !== 0){
        odd = true
      } else if (odd === true && charMap[key] % 2 === 1){
        result = false; 
      }
    })

  return result;
}