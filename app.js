const createBST = require("./createBST");

function randomNumArray(size, range) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * range));
}

const newTree = createBST(randomNumArray(10, 100));

console.log(newTree);
