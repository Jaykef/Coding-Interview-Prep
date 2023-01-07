/**
 * Jaykef - Jaward Sesay
 * LeetCode Q11
 * @param {number[]} height
 * @return {number}
 */
// Double loop method
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
