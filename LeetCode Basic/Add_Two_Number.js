/**
 * Jaykef - Jaward Sesay
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 // Recursive function method
var addTwoNumbers = function (l1, l2) {
    // Initialise the node as null in case no values are added to it (so  parent's .next will be null)
    let node = null;

    // Obtain the secret third argument (or change it to 0)
    const carry = arguments[2] ? 1 : 0;

    // Check if either an l1 node or l2 node exist to be added together
    if (l1 || l2) {
        // Obtain the values of the current l1 and l2 nodes (or 0 if they do not exist)
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;

        // Obtain the .next values of the current l1 and l2 nodes (or null if they do not exist)
        const next1 = l1 ? l1.next : null;
        const next2 = l2 ? l2.next : null;

        // Sum together the two values and the (optional) carry
        const sum = val1 + val2 + Number(carry);

        // Set the returning node to the sum, with any potential carry removed
        node = new ListNode(sum % 10);

        // Set the returning node's .next value to be the sum of adding the next two nodes together, along with the current carry (if one exists)
        node.next = addTwoNumbers(next1, next2, sum >= 10);
    } else if (carry) {
        // If a carry was passed in but no values exist to be added, return a node with the carry value in it, and no .next
        node = new ListNode(1);
        node.next = null;
    }

    // Return the constucted node
    return node;
};
