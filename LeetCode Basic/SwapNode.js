function swapPairs(head) {
    let dummy = new ListNode();
    dummy.next = head;
    let current = dummy;

    while (current.next && current.next.next) {
        let first = current.next;
        let second = current.next.next;

        first.next = second.next;
        current.next = second;
        current.next.next = first;
        current = current.next.next;
    }

    return dummy.next;
}
