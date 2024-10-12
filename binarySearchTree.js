class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(array) {
        array = [...new Set(array)];
        array.sort();
        this.root = this.buildTree(array, 0, array.length-1);
    }

    buildTree(array, start, end) {
        if (start > end) return null;
        const mid = Math.floor((start + end) / 2);
        const root = new Node(array[mid]);
        root.left = this.buildTree(array, start, mid-1);
        root.right = this.buildTree(array, mid+1, end);
        return root;
    }

    insert(value, root = this.root) {
        if (root === null)
            return new Node(value);
              
        if (root.value === value)
            return root;
            
        if (value < root.value)
            root.left = this.insert(value, root.left);
        else if (value > root.key)
            root.right = this.insert(value, root.right);
    
        return root;
    }

    deleteItem(value, root = this.root) {
        if (root === null) return root;
        if (root.value > x) root.left = this.deleteItem(value, root.left);
        else if (root.value < x) root.right = this.deleteItem(value, root.right);
        else {
            if (root.left === null) 
                return root.right;

            if (root.right === null) 
                return root.left;
    
            let successor = ((curr) => {
                curr = curr.right;
                while (curr !== null && curr.left !== null) {
                    curr = curr.left;
                }
                return curr
            })();
            root.key = successor.key;
            root.right = this.deleteItem(successor.value, root.right);
        }
        return root;
    }

    find(value, root = this.root) {
        if (root === null) return root;
        if (root.value > x) return this.find(value, root.right);
        else if (root.value < x) return this.find(value, root.left);
        return root;
    }

    levelOrder(callback, root = this.root, queue = []) {
        if (!callback) throw new Error('A callback is required');
        if (root === null) return root;
        if (root.left !== null) queue.push(root.left);
        if (root.right !== null) queue.push(root.right);
        while (queue.length > 0) {
            const node = queue[0];
            callback(node.value);
            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
            queue.shift();
        }
    }

    inOrder(callback, root = this.root) {
        if (!callback) throw new Error('A callback is required');
        if (root === null) return root;
        this.inOrder(callback, root.left);
        callback(root.value);
        this.inOrder(callback, root.right);
    }

    preOrder(callback, root = this.root) {
        if (!callback) throw new Error('A callback is required');
        if (root === null) return root;
        callback(root.value);
        this.inOrder(callback, root.left);
        this.inOrder(callback, root.right);
    }

    postOrder(callback, root = this.root) {
        if (!callback) throw new Error('A callback is required');
        if (root === null) return root;
        this.inOrder(callback, root.left);
        this.inOrder(callback, root.right);
        callback(root.value);
    }

    height(root) {
        if(root == null)
            return 0
        return Math.max(this.height(root.left), this.height(root.right)) + 1
    }

    depth(node, currentDepth = 0, root = this.root) {
        if (root === null) return root;
        if (node === null) return node;
        if (node === root) return currentDepth;
        if (root.left !== null) {
            return this.depth(node, currentDepth + 1, root.left);
        }
        if (root.right !== null) {
            return this.depth(node, currentDepth + 1, root.right);
        }
    }

    isBalanced(root = this.root) {
        if(root == null)
            return true
    
        let lh = this.height(root.left)
        let rh = this.height(root.right)
    
        if (Math.abs(lh - rh) <= 1 && this.isBalanced(
        root.left)== true && this.isBalanced( root.right) == true)
            return true
    
        return false
    }

    reBalance(root = this.root, arr = []) {
        if (root === null) return root;
        arr.push(root.value);
        if (root.left === null && root.right === null) return;
        if (root.left !== null) {
            this.reBalance(root.left, arr);
        }
        if (root.right !== null) {
            this.reBalance(root.right, arr);
        }
        this.buildTree(arr);
    }
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

export {BinarySearchTree, prettyPrint};