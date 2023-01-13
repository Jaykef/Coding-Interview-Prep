/**
 * Jaykef -Jaward Sesay
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
    let res = [];
    backtrack("", n, n);
    return res;
    function backtrack(s, left, right) {
        if(left === 0 && right === 0){
            res.push(s);
            return;
        }
        if(left > 0) backtrack(s+"(", left-1, right);
        if(right > left) backtrack(s+")", left, right-1);
    }
}
