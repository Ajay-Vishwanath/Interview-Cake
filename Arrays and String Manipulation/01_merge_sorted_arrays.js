function mergeArrays(myArray, alicesArray) {

  // Combine the sorted arrays into one large sorted array
  let mergedArray=[];
  
  while (myArray.length > 0 && alicesArray.length > 0){
    let myEle = myArray[0];
    let alicesEle = alicesArray[0];
    if (myEle <= alicesEle){
      mergedArray.push(myArray.shift());
    } else {
      mergedArray.push(alicesArray.shift());
    }
  }
  
  mergedArray = mergedArray.concat(myArray);
  mergedArray = mergedArray.concat(alicesArray);

  return mergedArray;
}
