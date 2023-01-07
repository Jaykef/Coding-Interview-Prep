/**
 * Jaykef - Jaward Sesay
 * LeetCode No.9
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const reversedNum = parseInt(Math.abs(x).toString().split('').reverse().join(''))
    const negativeNum = x < 0 ? -Math.abs(reversedNum) : reversedNum;
    if (reversedNum === x ) return true;
    if (negativeNum) return false;

};
