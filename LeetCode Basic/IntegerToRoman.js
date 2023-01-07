/**
 * Jaykef - Jaward Sesay
 * LeetCode Q12
 * @param {number} num
 * @return {string}
 */

// 1. Using an array
var intToRoman = function(num) {
    const lookup = [        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];
    let roman = '';
    for (const [numeral, value] of lookup) {
        while (num >= value) {
            roman += numeral;
            num -= value;
        }
    }
    return roman;

};

// 2. Using an Object
var intToRoman = function(num) {
    const lookup = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let roman = '';
    for (const i in lookup) {
        while (num >= lookup[i]) {
            roman += i;
            num -= lookup[i];
        }
    }
    return roman;
}
