/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (root === null) {
    return 0;
  }
  if (root.left === null && root.right === null) {
    return 1;
  }
  else {
    var leftChildDepth;
    var rightChildDepth;
    if (root.left !== null) {
      leftChildDepth = maxDepth(root.left);
    }
    if (root.right !== null) {
      rightChildDepth = maxDepth(root.right);
    }
    if (leftChildDepth > rightChildDepth) {
      return leftChildDepth + 1;
    } else if (rightChildDepth > leftChildDepth) {
      return rightChildDepth + 1;
    } else {
      return leftChildDepth + 1;
    }
  }
};