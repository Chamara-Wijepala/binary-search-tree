function createNode(value, left = null, right = null) {
  return {
    value,
    left,
    right,
  };
}

function createBST(array) {
  array.sort((a, b) => a - b);

  // remove duplicates
  const filteredArray = array.filter((value, index, array) => {
    return array.indexOf(value) === index;
  });

  function buildTree(array, start, end) {
    if (start > end) return null;

    const mid = parseInt((start + end) / 2);
    const node = createNode(array[mid]);

    node.left = buildTree(array, start, mid - 1);
    node.right = buildTree(array, mid + 1, end);

    return node;
  }

  let root = buildTree(filteredArray, 0, filteredArray.length - 1);

  return root;
}

module.exports = createBST;
