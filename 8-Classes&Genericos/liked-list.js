"use strict";
class ListNode {
    constructor(value) {
        this.value = value;
    }
}
class LikedList {
    constructor() {
        this.length = 0;
    }
    add(value) {
        const node = new ListNode(value);
        if (!this.root || !this.tail) {
            this.root = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }
    getNumberOfElements() {
        return this.length;
    }
    print() {
        let current = this.root;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}
const numberList = new LikedList();
numberList.add(10);
numberList.add(-12);
numberList.add(14);
console.log(numberList.getNumberOfElements());
numberList.print();
const stringList = new LikedList();
