class Stack {
    constructor() {
        this.store = [];
    }
    push(item) {
        this.store.push(item);
    }
    pop() {
        if (this.store.length === 0) {
            return undefined;
          }
        return this.store.pop();;
    }
    peek() {
        return this.store[this.store.length -1];
    }
    length() {
        return this.store.length;
    }
    show() {
        console.log(this.store);
    }
}

const st = new Stack();
st.push(1);
st.push(2);
st.push(3);
st.push(4);
st.show();
console.log(st.peek());
st.pop();
st.show();