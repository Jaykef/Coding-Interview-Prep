/**
 * Jaykef - Jaward Sesay
 * LeetCode Q11
 * @param {number[]} height
 * @return {number}
 */
// 1. Using two-pointers
var maxArea = function(heiht) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;
    while (left < right) {
        maxArea = Math.max(maxArea, (right - left) * Math.min(height[left], height[right]));
        if (height[left] < height[right]) {
            left += 1;
        } else {
            right -= 1;
        }
    }
    return maxArea;
}

// 2. Double loop method
var maxArea = function(height) {
    let largestArea = 0;
    let n = height.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            const maxHeight = Math.min(height[i],height[j]);
            const currentArea = maxHeight * (j - i);
            largestArea = Math.max(largestArea, currentArea);
        }
    }
    return largestArea;
};
