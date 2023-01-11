/**
 * Jaykef. - Jaward Sesay
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
    const romanToInt = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (i > 0 && romanToInt[s[i]] > romanToInt[s[i - 1]]) {
            result += romanToInt[s[i]] - 2 * romanToInt[s[i - 1]];
        } else {
            result += romanToInt[s[i]];
        }
    }
    return result;
}
