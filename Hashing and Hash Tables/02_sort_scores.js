function sortScores(unorderedScores, highestPossibleScore) {

  // Sort the scores in O(n) time
  const scores = new Array(highestPossibleScore +1).fill(0);
  
  unorderedScores.forEach(score => {
    scores[score] +=1;
  })
  
  const orderedScores = [];
  
  for (let score=highestPossibleScore; score >0; score--){
    const count = scores[score];
    for (let i=0; i<count; i++){
      orderedScores.push(score);
    }
  }
  return orderedScores;
}
