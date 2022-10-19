const createBST = require("./createBST");

function randomNumArray(size, range) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * range));
}

const randomTree = createBST(randomNumArray(10, 100));

console.log(randomTree.root);

const fixedTree = createBST([1, 2, 4, 5]);

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
