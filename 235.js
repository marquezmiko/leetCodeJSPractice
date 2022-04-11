/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if (root === null) {
    return null;
  }

  if (root.val === p || root.val === q) {
    return root;
  }

  var leftLCA = lowestCommonAncestor(root.left, p, q);
  var rightLCA = lowestCommonAncestor(root.right, p, q);

  if (leftLCA !== null && rightLCA!== null) {
    return root;
  }

  // Otherwise check left subtree and right subtree
  if (leftLCA !== null) {
    return leftLCA;
  } else if (rightLCA !== null) {
    return rightLCA
  }
};