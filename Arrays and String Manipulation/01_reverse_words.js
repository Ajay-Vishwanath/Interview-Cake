// You're working on a secret team solving coded transmissions.

// Your team is scrambling to decipher a recent message, worried it's a plot to break into a major European National Cake Vault. The message has been mostly deciphered, but all the words are backward! Your colleagues have handed off the last step to you.

// Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place.↴

// Why an array of characters instead of a string ?

//     The goal of this question is to practice manipulating strings in place.Since we're modifying the message, we need a mutable ↴ type like an array, instead of JavaScript's immutable strings.

// For example:

// const message = ['c', 'a', 'k', 'e', ' ',
//     'p', 'o', 'u', 'n', 'd', ' ',
//     's', 't', 'e', 'a', 'l'];

// reverseWords(message);

// console.log(message.join(''));
// // Prints: 'steal pound cake'

// When writing your function, assume the message contains only letters and spaces, and all words are separated by one space.

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