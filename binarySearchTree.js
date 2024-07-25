class TreeNode {
    constructor(item) {
        this.item = item;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    add(item) {
        if (!this.root) {
            this.root = new TreeNode(item);
            return;
        }
        let currNode = this.root;
        return this.searchTree(currNode, item);
    }
    searchTree(currNode, item) {
        if(item < currNode.item) {
            if (currNode.left === null) {
                currNode.left = new TreeNode(item);
                return;
            } else {
                return this.searchTree(currNode.left, item);
            }
        } else {
            if (currNode.right === null) {
                currNode.right = new TreeNode(item);
                return;
            } else {
                return this.searchTree(currNode.right, item);
            }
        }   
    }

    findMin() {
        let currNode = this.root;
        while(currNode.left !== null) {
            currNode = currNode.left;
        }
        return currNode.item;
    }

    findMax() {
        let currNode = this.root;
        while(currNode.right !== null) {
            currNode = currNode.right;
        }
        return currNode.item;
    }

    getRoot() {
        return this.root ? this.root.item : undefined;
    }
}

const tree = new BinarySearchTree();
tree.add(10);
tree.add(5);
tree.add(15);
tree.add(25);
tree.add(35);
console.log(tree.findMax());
console.log(tree.findMin());
console.log(tree.getRoot());