/**
 * Jaykef - Jaward Sesay
 * LeetCode No.7
 * @param {number} x
 * @return {number}
 */
// Using parseInt() 
var reverse = function(x) {
     // Conver the number to a string, split it to an array, reverse it, and then re-join it
    const reversedNumber = parseInt(Math.abs(num).toString().split('').reverse().join(''));
    // Check for an invalid output
    if (reversedNumber > 2**31) return 0;
    // Return the reversed number (negating it if the original number was negative)
    return num < 0 ? -Math.abs(reversedNumber) : reversedNumber;
};

