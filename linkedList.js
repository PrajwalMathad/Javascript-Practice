const { listenerCount } = require("process");

class Node  {
    constructor(item) {
        this.item = item;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }
    head() {
        return this.head;
    }
    add(item) {
        let newNode = new Node(item);
        if(this.head === null) {
            this.head = newNode;
        } else {
            let currNode = this.head;
            while(currNode.next) {
                currNode = currNode.next;
            }
            currNode.next = newNode;
        }
        this.length++;
    }
    remove(item) {
        if(this.head.item === item) {
            this.head = this.head.next;
            return;
        }
        let currNode = this.head;
        let prevNode;
        while(currNode.item !== item) {
            prevNode = currNode;
            currNode = currNode.next;
        }
        prevNode.next = currNode.next;
        this.length--;
    }
    indexOf(item) {
        let index = 0;
        if(this.head.item === item) {
            return index;
        }
        let currNode = this.head;
        while(currNode.item !== item) {
            index++;
            currNode = currNode.next;
        }
        return index;
    }
    elementAt(index) {
        if(!this.head || index < 0 || index >= this.length) return -1;
        if(this.head && index === 0) {
            return this.head.item;
        }
        let currNode = this.head;
        while(currNode.next !== null || index > 0) {
            index--;
            currNode = currNode.next;
        }
        return currNode.item;
    }
    show() {
        let currNode = this.head;
        let str = this.head.item+ " -> ";
        while(currNode.next != null) {
            currNode = currNode.next;
            str += currNode.item+ " -> ";
        }
        console.log(str);
    }
}

const list = new LinkedList();
list.add(1 );
list.add(2);
list.add(3);
list.add(4);
list.show();
console.log(list.indexOf(3));
list.remove(3)
list.show();
