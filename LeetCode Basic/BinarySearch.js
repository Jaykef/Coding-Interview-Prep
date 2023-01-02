/**
 * Jaykef - Jaward Sesay
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Solution 1
var search = function(nums, target) {
    return nums.indexOf(target)
};

// Solution 2
var search = function(nums, target) {
  let left = 0
  let right = nums.length - 1
  let mid = Math.floor((left + right) / 2)
  
  while (left <= right) {
      if (nums[mid] === target) {
        return mid  
      } else if (nums[mid] > target) {
          right = mid - 1
      } else {
          left = mid + 1
      }
      mid = Math.floor((left + right) / 2)
  }
  
  return -1 
}
