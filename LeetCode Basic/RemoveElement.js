/**
 * Jaykef - Jaward Sesay
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i++] = nums[j];
        } else {
            nums.splice(j--, 1);
        }
    }
    return i;
}

