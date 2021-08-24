
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

// If the input array is empty or null, return an empty array.

function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0) return [];
    let a = 0, s = 0;
    input.forEach((x) => x > 0 ? a++ : s += x);
    return [a, s];
}