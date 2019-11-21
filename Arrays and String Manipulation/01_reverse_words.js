function reverseWords(message) {

    // Decode the message by reversing the words
    reverseLetters(message, 0, message.length - 1);
    let idxTracker = 0;
    for (let i = 0; i <= message.length; i++) {
        if (i === message.length || message[i] === " ") {
            reverseLetters(message, idxTracker, i - 1);
            idxTracker = i + 1;
        }
    }
}

function reverseLetters(message, startIdx, endIdx) {
    let i = startIdx;
    let j = endIdx;

    while (i < j) {
        let temp = message[i];
        message[i] = message[j];
        message[j] = temp;
        i++;
        j--;
    }
}