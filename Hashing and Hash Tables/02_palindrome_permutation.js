// Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome.↴

// You can assume the input string only contains lowercase letters.

//   Examples:

// "civic" should return true
// "ivicc" should return true
// "civil" should return false
// "livci" should return false
// "But 'ivicc' isn't a palindrome!"

// If you had this thought, read the question again carefully.We're asking if any permutation of the string is a palindrome. Spend some extra time ensuring you fully understand the question before starting. Jumping in with a flawed understanding of the problem doesn't look good in an interview.
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