class Queue {
    constructor() {
        this.store = [];
    }
    enqueue(item) {
        this.store.push(item);
    }
    dequeue() {
        return this.store.shift();
    }
    front() {
        return this.store[0];
    }
    size() {
        return this.store.length;
    }
    show() {
        console.log(this.store);
    }
}

class PriorityQueue extends Queue {
    constructor() {
        super();
    }
    enqueue(item, priority) {
        this.store.push({item,priority});
        this.store.sort((a,b) => {
            if(a.priority > b.priority) return 1;
            else return -1;
        })
    }
}

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.show();
q.dequeue();
q.show();
console.log(q.front());

const pq = new PriorityQueue();
pq.enqueue("second", 2);
pq.enqueue("third", 3);
pq.enqueue("first", 1);
pq.enqueue("fifth", 5);
pq.enqueue("fourth", 4);
pq.show();
console.log(pq.front());
pq.dequeue();
pq.show();