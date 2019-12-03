// In order to win the prize for most cookies sold, my friend Alice and I are going to merge our Girl Scout Cookies orders and enter as one unit.

// Each order is represented by an "order id"(an integer).

// We have our lists of orders sorted numerically already, in arrays.Write a function to merge our arrays of orders into one sorted array.

// For example:

// const myArray = [3, 4, 6, 10, 11, 15];
// const alicesArray = [1, 5, 8, 12, 14, 19];

// console.log(mergeArrays(myArray, alicesArray));
// // logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]

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
