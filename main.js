import { BinarySearchTree, prettyPrint } from "./binarySearchTree.js";

const tree = new BinarySearchTree([3, 17, 20, 24, 31, 38, 45, 61, 82, 84]);
console.log(tree.isBalanced());
tree.inOrder((x) => console.log(x));
tree.preOrder((x) => console.log(x));
tree.postOrder((x) => console.log(x));

tree.insert(8);
tree.insert(7);
tree.insert(9);
console.log(tree.isBalanced());
tree.reBalance();