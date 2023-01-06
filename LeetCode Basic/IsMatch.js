/**
 * Jaykef - Jaward Sesay
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

// 1. Using RegEx
var isMatch = function(s, p) {
    const regex = new RegExp('^' + p + '$', 'm');
    return regex.test(s);
};

// 2. Using Recursion

function isMatch(s, p) {
    return recursiveIsMatch(0, 0, s, p);
}
function recursiveIsMatch(i, j, s, p) {
    const inputStringLength = s.length;
    const patternLength = p.length;

    // Reached the end of the pattern
    if (j == patternLength) {
        // Return whether or not we've also reached the end of the string (entire string has passed)
        return i == inputStringLength;
    }

    // If the current pattern character is followed by a * (is a wildcard)
    if (j + 1 < patternLength && p.charAt(j + 1) == '*') {
        // Assume 0 matches of the current pattern character, move on to the next point in the pattern (after the asterisk)
        if (recursiveIsMatch(i, j + 2, s, p)) return true;

        // Loop through the remaining characters, so long as they match by character (or .)
        while (
            i < inputStringLength &&
            (p.charAt(j) == '.' || str.charAt(i) == p.charAt(j))
        ) {
            // Check the rest of the string (1 character forward), against the next point in the pattern (after the asterisk)
            if (recursiveIsMatch(++i, j + 2, s, p)) return true;
        }
    }
    // If the current pattern character is not a wildcard, and matches the current string character
    else if (
        i < inputStringLength &&
        (p.charAt(j) == '.' || s.charAt(i) == p.charAt(j))
    ) {
        // Move onto the next character, and the next character of the pattern
        return recursiveIsMatch(i + 1, j + 1, s, p);
    }

    // String does not match current point in pattern
    return false;
}
