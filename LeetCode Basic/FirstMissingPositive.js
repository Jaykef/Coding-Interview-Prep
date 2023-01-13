/**
 * Jaykef - Jaward Sesay
 * @param {number[]} nums
 * @return {number}
 */
function firstMissingPositive(nums) {
    let n = nums.length;
  
    // move all non-positive numbers to the left side
    let i = 0;
    while (i < n) {
        if (nums[i] <= 0) {
            [nums[i], nums[n - 1]] = [nums[n - 1], nums[i]];
            n--;
        } else {
            i++;
        }
    }
  
    // mark the numbers on the left side as negative
    for (i = 0; i < n; i++) {
        let num = Math.abs(nums[i]);
        if (num <= n) {
            nums[num - 1] = -Math.abs(nums[num - 1]);
        }
    }
  
    // find the first positive number
    for (i = 0; i < n; i++) {
        if (nums[i] > 0) {
            return i + 1;
        }
    }
  
    return n + 1;
}
