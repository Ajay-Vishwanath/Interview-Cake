// Your quirky boss collects rare, old coins...

// They found out you're a programmer and asked you to solve something they've been wondering for a long time.

// Write a function that, given:

// an amount of money
// an array of coin denominations
// computes the number of ways to make the amount of money with coins of the available denominations.

//     Example: for amount = 44(44¢) and denominations = [1, 2, 3][1, 2, 3](11¢, 22¢ and 33¢), your program would output 44—the number of ways to make 44¢ with those denominations:

//     1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢

//Dynamic Programing Solution
// Solution
// We use a bottom - up ↴ algorithm to build up a table waysOfDoingNCents such that waysOfDoingNCents[k] is how many ways we can get to k cents using our denominations.We start with the base case that there's one way to create the amount zero, and progressively add each of our denominations.

// The number of new ways we can make a higherAmount when we account for a new coin is simply waysOfDoingNCents[higherAmount - coin], where we know that value already includes combinations involving coin(because we went bottom - up, we know smaller values have already been calculated).

function changePossibilities(amountLeft, denominations) {

    // Initialize an array of zeros with indices up to amount
    const waysOfDoingNcents = new Array(amount + 1).fill(0);
    waysOfDoingNcents[0] = 1;

    denominations.forEach(coin => {
        for (let higherAmount = coin; higherAmount <= amount; higherAmount++) {
            const higherAmountRemainder = higherAmount - coin;
            waysOfDoingNcents[higherAmount] += waysOfDoingNcents[higherAmountRemainder];
        }
    });

    return waysOfDoingNcents[amount];
}

//Recursive Memoization Solution

class Change {
    constructor() {
        this.memo = {};
    }

    changePossibilitiesTopDown(amountLeft, denominations, currentIndex = 0) {

        // Check our memo and short-circuit if we've already solved this one
        const memoKey = [amountLeft, currentIndex].join(', ');
        if (this.memo.hasOwnProperty(memoKey)) {
            console.log('grabbing memo [' + memoKey + ']');
            return this.memo[memoKey];
        }

        // Base cases:
        // We hit the amount spot on. yes!
        if (amountLeft === 0) return 1;

        // We overshot the amount left (used too many coins)
        if (amountLeft < 0) return 0;

        // We're out of denominations
        if (currentIndex === denominations.length) return 0;

        console.log('checking ways to make ' + amountLeft + ' with [' + denominations.slice(currentIndex).join(', ') + ']');

        // Choose a current coin
        const currentCoin = denominations[currentIndex];

        // See how many possibilities we can get
        // for each number of times to use currentCoin
        let numPossibilities = 0;
        while (amountLeft >= 0) {
            numPossibilities += this.changePossibilitiesTopDown(amountLeft, denominations, currentIndex + 1);
            amountLeft -= currentCoin;
        }

        // Save the answer in our memo so we don't compute it again
        this.memo[memoKey] = numPossibilities;
        return numPossibilities;
    }
}