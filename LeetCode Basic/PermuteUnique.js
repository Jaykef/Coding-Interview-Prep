function permuteUnique(nums) {
    let result = [];
    let visited = new Set();
    let current = [];

    function backtrack(nums, current, visited) {
        if (current.length === nums.length) {
            result.push(current.slice());
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (visited.has(i)) {
                continue;
            }
            visited.add(i);
            current.push(nums[i]);
            backtrack(nums, current, visited);
            current.pop();
            visited.delete(i);
        }
    }

    backtrack(nums, current, visited);
    return result;
}
