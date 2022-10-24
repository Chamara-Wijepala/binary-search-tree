const createBST = require("./createBST");

function randomNumArray(size, range) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * range));
}

const randomTree = createBST(randomNumArray(10, 100));

console.log(randomTree.root);

const fixedTree = createBST([1, 2, 4, 5]);
console.log(fixedTree);

fixedTree.insert(3);
console.log(fixedTree.root);

fixedTree.insert(6);
console.log(fixedTree.root.right);

fixedTree.insert(2);
console.log(fixedTree.root);

fixedTree.delete(5);
console.log(fixedTree.root);

console.log(fixedTree.find(3));
console.log(fixedTree.find(7));

console.log(fixedTree.levelOrderIt());
fixedTree.levelOrderIt((node) => console.log(node.value));

console.log(fixedTree.levelOrderRec());
fixedTree.levelOrderRec((node) => console.log(node.value));

console.log(fixedTree.inorder());
console.log(fixedTree.inorder((node) => console.log(node.value)));

console.log(fixedTree.preorder());
console.log(fixedTree.preorder((node) => console.log(node.value)));

console.log(fixedTree.postorder());
console.log(fixedTree.postorder((node) => console.log(node.value)));

console.log(fixedTree.height());

const depthOf2 = fixedTree.find(2);
const depthOf3 = fixedTree.find(3);
const depthOf4 = fixedTree.find(4);
const depthOf6 = fixedTree.find(6);
console.log(fixedTree.depth(depthOf2));
console.log(fixedTree.depth(depthOf3));
console.log(fixedTree.depth(depthOf4));
console.log(fixedTree.depth(depthOf6));

const balancedTree = createBST([1, 2, 3, 4, 5]);
console.log(balancedTree.isBalanced());
balancedTree.insert(6);
balancedTree.insert(7);
balancedTree.insert(8);
balancedTree.insert(9);
console.log(balancedTree.isBalanced());

balancedTree.rebalance();
console.log(balancedTree.root);
console.log(balancedTree.isBalanced());

console.log(balancedTree.levelOrderIt());

console.log(balancedTree.levelOrderRec());

console.log(balancedTree.inorder());

console.log(balancedTree.preorder());

console.log(balancedTree.postorder());
