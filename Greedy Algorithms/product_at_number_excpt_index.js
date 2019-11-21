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