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

  let root = buildTree(filteredArray, 0, filteredArray.length - 1);

  function buildTree(array, start, end) {
    if (start > end) return null;

    const mid = parseInt((start + end) / 2);
    const node = createNode(array[mid]);

    node.left = buildTree(array, start, mid - 1);
    node.right = buildTree(array, mid + 1, end);

    return node;
  }

  function insertRec(data, root) {
    if (root === null) {
      const node = createNode(data);
      return node;
    }

    if (data < root.value) {
      root.left = insertRec(data, root.left);
    } else if (data > root.value) {
      root.right = insertRec(data, root.right);
    }

    return root;
  }

  return {
    root,

    insert(data) {
      root = insertRec(data, root);
    },
  };
}

module.exports = createBST;
