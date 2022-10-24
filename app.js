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
