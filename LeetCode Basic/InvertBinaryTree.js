// Jaykef - Jaward Sesay
// Inverting a Binary Tree

// 1. Using Recursion
function invertBinaryTree(root) {
    if (!root) return null;

    [root.left, root.right] = [invertBinaryTree(root.right), invertBinaryTree(root.left)];
    return root;
}

// 2. Using Iteration
function invertBinaryTree(root) {
    if (!root) return null;

    const stack = [root];
    while (stack.length > 0) {
        const node = stack.pop();
        [node.left, node.right] = [node.right, node.left];
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }
    return root;
}

