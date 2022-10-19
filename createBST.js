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

  function deleteRec(data, root) {
    if (root === null) return root;

    if (data < root.value) {
      root.left = deleteRec(data, root.left);
    } else if (data > root.value) {
      root.right = deleteRec(data, root.right);
    }
    // if data is the same as root.value then this node should be deleted
    else {
      // if node has only 1 or no children
      if (root.left === null) {
        return root.right;
      } else if (root.right === null) {
        return root.left;
      }

      // node has 2 children: get the smallest value in the right subtree
      root.value = findMinValue(root.right);

      // delete inorder successor
      root.right = deleteRec(root.value, root.right);
    }

    return root;
  }

  function findMinValue(root) {
    let minValue = root.value;

    while (root.left !== null) {
      minValue = root.left.value;
      root = root.left;
    }

    return minValue;
  }

  return {
    root,

    insert(data) {
      root = insertRec(data, root);
    },

    delete(data) {
      root = deleteRec(data, root);
    },
  };
}

module.exports = createBST;
