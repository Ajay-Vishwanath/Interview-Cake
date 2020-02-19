// Write a function fib() that takes an integer nn and returns the nnth Fibonacci ↴ number.

//     Let's say our Fibonacci series is 0-indexed and starts with 0. So:

// fib(0);  // => 0
// fib(1);  // => 1
// fib(2);  // => 1
// fib(3);  // => 2
// fib(4);  // => 3
// ...

function fib(n) {

    // Compute the nth Fibonacci number
    if (n < 0) {
        throw new Error('Index is negative, that cant happen!');
    } else if (n === 0 || n === 1) {
        return n;
    }

    let prevPrev = 0;
    let prev = 1;
    let current;

    for (let i = 1; i < n; i++) {
        current = prevPrev + prev;
        prevPrev = prev;
        prev = current;
    }

    return current;
}
