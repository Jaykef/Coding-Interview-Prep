/**
 * Jaykef - Jaward Sesay
 * LeetCode Q33
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  if (nums.length === 0) return -1;
  let pivotIndex = findPivot(nums);
  if (target >= nums[0] && target <= nums[pivotIndex - 1]) {
    // search left part of array
    return binarySearch(nums, target, 0, pivotIndex - 1);
  } else {
    // search right part of array
    return binarySearch(nums, target, pivotIndex, nums.length - 1);
  }
}

function findPivot(nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

function binarySearch(nums, target, left, right) {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
