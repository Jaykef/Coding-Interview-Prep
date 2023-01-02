/**
 * Jaykef - Jaward Sesay
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 // Recursion
var mergeTwoLists = function(list1, list2) {
    // If either list is empty, return the other list's node
    if (list1 == null) return list2;
    if (list2 == null) return list1;

    // If l1 is lower
    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    }
    // If l2 is lower
    else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};
