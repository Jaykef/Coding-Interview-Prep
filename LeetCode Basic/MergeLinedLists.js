/**
 * Jaykef - jaward Sesay
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

// 1. Using Iteration
var mergeKLists = function (lists) {
    if (lists.length === 0) return null;

    // Merge two sorted linked lists
    function merge(l1, l2) {
        if (!l1) return l2;
        if (!l2) return l1;

        let head;
        if (l1.val < l2.val) {
            head = l1;
            head.next = merge(l1.next, l2);
        } else {
            head = l2;
            head.next = merge(l1, l2.next);
        }
        return head;
    }

    // Iteratively merge the linked lists
    while (lists.length > 1) {
        const merged = [];
        for (let i = 0; i < lists.length; i += 2) {
            if (i + 1 < lists.length) {
                merged.push(merge(lists[i], lists[i + 1]));
            } else {
                merged.push(lists[i]);
            }
        }
        lists = merged;
    }
    return lists[0];
}


// 2. Covert list to array
var mergeKLists = function(lists) {
    // Initialise an array to store the values in
    let mainArray = [];

    function addLinkedListToMainArray(subArray) {
        // Push value of the LinkedList's current node to the main array
        mainArray.push(subArray.val);

        // Add the next node in the LinkedList
        if (subArray.next != null) {
            addLinkedListToMainArray(subArray.next);
        }
    }

    // Loop through the supplied LinkedLists
    for (let i = 0; i < lists.length; i++) {
        // Check if the LinkedList is empty
        if (lists[i] != null) {
            // Add the LinkedList's contents to the main array
            addLinkedListToMainArray(lists[i]);
        }
    }

    // Sort the main array
    mainArray = mainArray.sort((a, b) => a - b);

    // Convert the array to a LinkedList
    let newList = null;
    for (i = mainArray.length - 1; i >= 0; i--) {
        newList = new ListNode(mainArray[i], newList);
    }

    return newList;
};
