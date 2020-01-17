// You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.

// Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.

// For example, given:

// [1, 7, 3, 4]

// your function would return:

// [84, 12, 28, 21]

// by calculating:

// [7 * 3 * 4, 1 * 3 * 4, 1 * 7 * 4, 1 * 7 * 3]

// Here's the catch: You can't use division in your solution!

function getProductsOfAllIntsExceptAtIndex(intArray) {

    // Make a list of the products

    if (intArray.length < 2) {
        throw new Error('array length must be at least 2!')
    }
    let result = []

    let productSoFar = 1;
    for (let i = 0; i < intArray.length; i++) {
        result.push(productSoFar);
        productSoFar *= intArray[i]
    }

    let productSoFarBackwards = 1;
    for (let j = intArray.length - 1; j >= 0; j--) {
        result[j] = result[j] * productSoFarBackwards
        productSoFarBackwards *= intArray[j]
    }

    return result
}