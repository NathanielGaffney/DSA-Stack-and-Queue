class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class _QNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }
    push(data) {
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }
        const node = new _Node(data, this.top);
        this.top = node;
    }
    pop() {
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
    peek() {
        return this.top;
    }
    isEmpty() {
        if (this.top === null) {
            return true;
        }
        return false;
    }
    display() {
        let currNode = this.top;
        while (currNode !== null) {
            if (currNode.next === null) {
                console.log(`${currNode.data}::null`)
            } else {
                console.log(`${currNode.data}::${currNode.next.data}`)
                currNode = currNode.next;
            }

        }
        return;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }
    enqueue(data) {
        const node = new _QNode(data);
        if (this.first === null) {
            this.first = node;
        }
        if (this.last) {
            this.last.next = node;
        }
        this.last = node;
    }
    dequeue() {
        if (this.first === null) {
            return;
        }
        const node = this.first;
        this.first = this.first.next;

        if (node === this.last) {
            this.last = null;
        }
        return node.value;
    }
}

function main() {
    const starTrek = new Stack();
    starTrek.push('Kirk')
    starTrek.push('Spock')
    starTrek.push('McCoy')
    starTrek.push('Scotty')
    console.log(starTrek.peek());
    starTrek.display();
    console.log(starTrek);
}

main();