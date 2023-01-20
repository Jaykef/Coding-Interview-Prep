/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    let closestSum = Infinity;
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let currSum = nums[i] + nums[left] + nums[right];
            if (currSum === target) {
                return currSum;
            }
            if (Math.abs(currSum - target) < Math.abs(closestSum - target)) {
                closestSum = currSum;
            }
            if (currSum < target) {
                left++;
            } else {
                right--;
            }
        }
    }
    return closestSum;

};
