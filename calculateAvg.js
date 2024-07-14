// Calculate average


// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

function findAverage(array) {
    // your code here
    var total = 0
    if (array.length === 0) {
        return 0
    }
    else {
        for (i = 0; i < array.length; i++) {
            total += array[i]
        }
        return avg = total / array.length
    }
}