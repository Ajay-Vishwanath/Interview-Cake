function findRotationPoint(words) {

    // Find the rotation point in the vector
    const firstWord = words[0];
    let floorIndex = 0;
    let celingIndex = words.length - 1;

    while (floorIndex < celingIndex) {
        const guessIndex = Math.floor(floorIndex + ((celingIndex - floorIndex) / 2));

        if (words[guessIndex] >= firstWord) {
            floorIndex = guessIndex
        } else {
            celingIndex = guessIndex
        }

        if (floorIndex + 1 === celingIndex) {
            break;
        }
    }

    return celingIndex;
}