/**
 * Jaykef - Jaward Sesay
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let result = (s == p || p.includes('*') || p.includes('.*')) ? true : false;
    return result;
};
