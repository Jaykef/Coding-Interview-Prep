/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let map = new Map();
    map.set('(', ')');
    map.set('{', '}');
    map.set('[', ']');
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            stack.push(s[i]);
        } else if (stack.length === 0 || s[i] !== map.get(stack.pop())) {
            return false;
        }
    }
    return stack.length === 0;

};
