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
  var currDepth = 0;
  var childDepth = 0;
  var leftChildDepth = 0;
  var rightChildDepth = 0;
  if (root === null) {
    return 0;
  } else if (root !== undefined) {
    currDepth++;
  }
  if (root.left !== null) {
    leftChildDepth = maxDepth(root.left);
  }
  if (root.right !== null) {
    rightChildDepth = maxDepth(root.right);
  }
  if (leftChildDepth > rightChildDepth) {
    currDepth += leftChildDepth;
  } else if (rightChildDepth > leftChildDepth) {
    currDepth += rightChildDepth;
  }
  return currDepth;
};