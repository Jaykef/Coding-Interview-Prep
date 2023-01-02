/**
 * Jaykef - Jaward Sesay
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length) return false;

    var s = s.split("").sort().join("");
    var t = t.split("").sort().join("");

    return s == t;
};
