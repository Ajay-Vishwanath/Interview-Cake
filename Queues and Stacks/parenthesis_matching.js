// I like parentheticals(a lot).

// "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."

// Write a function that, given a sentence like the one above, along with the position of an opening parenthesis, finds the corresponding closing parenthesis.

//     Example: if the example string above is input with the number 10(position of the first parenthesis), the output should be 79(position of the last parenthesis).

function getClosingParen(sentence, openingParenIndex) {

    // Find the position of the matching closing parenthesis
    let openNestedParens = 1;

    for (let i = openingParenIndex + 1; i < sentence.length; i++) {
        if (sentence[i] === "(") {
            openNestedParens += 1;
        } else if (sentence[i] === ")") {
            if (openNestedParens === 1) {
                return i;
            }
            openNestedParens -= 1;
        }
    }

    throw new Error("Opening Parentheses Wasn't Closed!");
}