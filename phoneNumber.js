/*
Write a function that accepts an array of 10 integers 
(between 0 and 9), that returns a string of those numbers 
in the form of a phone number.


*/
function createPhoneNumber(numbers) {
    // return '(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6).join('')}';
    //return "(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')-${numbers.slice(6).join('')}}";
    let x = '(xxx) xxx-xxxx';
    numbers.forEach(item => {
        x = x.replace('x', item);

    });
    return x;
}