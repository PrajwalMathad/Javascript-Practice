/* 
Goldman Sachs:
For the given string, find the longest repeating character in a contiguous substring and return the starting 
index of the substring and the length of the substring in an array.
ex: input => "aabbbbaccsc" => [2,4] // repeating character 'b' at 2
*/
const findSubStr = (input) => {
    let left = 0;
    let max = 0;
    let res = [0, 1];
    let temp = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === input[left]) {
            temp++;
            if (max < temp) {
                res[0] = left;
            }
            max = Math.max(max, temp);
            res[1] = max;
        } else {
            left = left + temp;
            temp = 1;
        }
    }
    return res;
}

// console.log(findSubStr("aaabbbbbaaaaaacccc"));

/*
Memoization 
Fibonacci series
*/

const fib = (n, prevValues = [0, 1, 1]) => {
    if (prevValues[n]) {
        return prevValues[n];
    } else {
        prevValues[n] = fib(n - 1, prevValues) + fib(n - 2, prevValues);
    }
    return prevValues[n];
}
// console.log(fib(15));

const memoize = (fn) => {
    let cache = {};
    return (...args) => {
        const key = JSON.stringify(args);
        if (!cache[key]) {
            cache[key] = fn(...args);
        }
        return cache[key];
    }
}

const fibonacci = memoize((n) => {
    if (n <= 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
})

const factorial = memoize((n) => {
    if (n == 0) return 1;
    return n * factorial(n - 1);
})

const fibonacchi2 = (n) => {
    if (n <= 2) return 1;
    return fibonacchi2(n - 1) + fibonacchi2(n - 2);
}

console.log(fibonacci(60));
console.log(fibonacchi2(60));
// console.log(factorial(20));