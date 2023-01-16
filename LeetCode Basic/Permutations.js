/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
    let result = [];

    function backtrack(permutation, remaining) {
        if (remaining.length === 0) {
            result.push([...permutation]);
            return;
        }

        for (let i = 0; i < remaining.length; i++) {
            let current = remaining[i];
            permutation.push(current);
            remaining.splice(i, 1);
            backtrack(permutation, remaining);
            permutation.pop();
            remaining.splice(i, 0, current);
        }
    }

    backtrack([], nums);
    return result;
}
