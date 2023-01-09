/**
 * Jaykef - Jaward Sesay
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let start = -1;
  let end = -1;
  // find the first occurrence of the target value
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] >= target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    if (nums[mid] === target) start = mid;
  }
  // return [-1, -1] if target is not found
  if (start === -1) return [start, end];
  left = start;
  right = nums.length - 1;
  // find the last occurrence of the target value
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    if (nums[mid] === target) end = mid;
  }
  return [start, end];
}
