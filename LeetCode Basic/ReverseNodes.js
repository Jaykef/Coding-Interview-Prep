/**
 * Jaykef - Jaward Sesay
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

// 1. Using Recursion
var reverseKGroup = function(head, k) {
    // Create a pointer which will traverse the head
    let curr = head;

    // Create a counter to determine how many nodes we have traversed
    let count = 0;

    // Loop until we find either the end of the LinkedList
    while (curr != null && count != k) {
        curr = curr.next;
        count++;
    }

    if (count == k) {
        // Attempt to reverse the next k nodes 
        curr = reverseKGroup(curr, k); // reverse list with k+1 node as head

        // Loop through the number of nodes in this group
        while (count-- > 0) {
            // Flip the nodes to point in the opposite direction (reverse them)
            let tmp = head.next;
            head.next = curr;
            curr = head;
            head = tmp;
        }

        // Swap the current head for the reversed one
        head = curr;
    }
    return head;

};
