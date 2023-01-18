/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let result = [];
    nums.sort();
    let used = new Array(nums.length).fill(false);
    let current = [];

    function backtrack(nums, current, used) {
        if (current.length === nums.length) {
            result.push(current.slice());
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1])) {
                continue;
            }
            used[i] = true;
            current.push(nums[i]);
            backtrack(nums, current, used);
            current.pop();
            used[i] = false;
        }
    }

    backtrack(nums, current, used);
    return result;
};
