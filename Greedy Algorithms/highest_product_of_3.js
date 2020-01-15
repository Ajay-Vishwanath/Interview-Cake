// Given an array of integers, find the highest product you can get from three of the integers.

// The input arrayOfInts will always have at least three integers.

function highestProductOf3(arrayOfInts) {

    // Calculate the highest product of three numbers
    //broke: 3 iterations, 0n^3 time complexity

    if (arrayOfInts.length < 3) {
        throw new Error('needs to be atleast 3 integers')
    }

    let highest = Math.max(arrayOfInts[0], arrayOfInts[1], arrayOfInts[2])
    let highestProductOf3 = Math.floor(arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2]);
    let highestProductOf2 = Math.max((arrayOfInts[0] * arrayOfInts[1]), (arrayOfInts[0] * arrayOfInts[2]),
        (arrayOfInts[1] * arrayOfInts[2]))
    let lowest = Math.min(arrayOfInts[0], arrayOfInts[1], arrayOfInts[2])
    let lowestProductOf2 = Math.min((arrayOfInts[0] * arrayOfInts[1]), (arrayOfInts[0] * arrayOfInts[2]),
        (arrayOfInts[1] * arrayOfInts[2]))

    for (let i = 3; i < arrayOfInts.length; i++) {
        const currentEle = arrayOfInts[i]
        if (currentEle * highestProductOf2 > highestProductOf3 || currentEle * lowestProductOf2 > highestProductOf3) {
            highestProductOf3 = Math.max(currentEle * lowestProductOf2, currentEle * highestProductOf2)
        }

        if (currentEle * highest > highestProductOf2 || currentEle * lowest > highestProductOf2) {
            highestProductOf2 = Math.max(currentEle * highest, currentEle * lowest)
        } else if (currentEle * lowest < lowestProductOf2 || currentEle * highest < lowestProductOf2) {
            lowestProductOf2 = Math.min(currentEle * lowest, currentEle * highest)
        }

        if (currentEle > highest) {
            highest = currentEle
        } else if (currentEle < lowest) {
            lowest = currentEle
        }
    }

    return highestProductOf3
} 
