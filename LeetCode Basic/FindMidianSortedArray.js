/**
 * Jaykef - Jaward Sesay
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let concatArrays = nums1.concat(nums2);
    concatArrays.sort(function (a,b) {
        return a - b;
    });
    let len = concatArrays.length;
    
    return len%2 === 0 ? (concatArrays[Math.floor(len/2)-1] + concatArrays[Math.ceil(len/2)])/2 : concatArrays[Math.floor(len/2)];

};
