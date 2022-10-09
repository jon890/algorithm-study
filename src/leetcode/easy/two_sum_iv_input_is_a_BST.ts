/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 *
 * https://leetcode.com/problems/two-sum-iv-input-is-a-bst/
 */

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function findTarget(root: TreeNode | null, k: number): boolean {
    // 이진 검색 트리에서 두수의 합이 타겟과 같아지면 true 그렇지 않으면 false
    // bfs로 모든 원소를 탐색한다
    // n * logn
    const queue = [root];
    while(queue.length) {
        const { val, left, right } = queue.shift();
        if (left) queue.push(left);
        if (right) queue.push(right);

        // val + x ===> target이 가능한지 확인
        const x = k - val;

        if (x === val) {
            continue; // 서로 다른 두 원소를 더해야 하는가? 그렇겠지?
        }

        if (search(root, x)) {
            return true;
        }
    }

    return false;
}

function search(root: TreeNode, target: number): boolean {
    const queue : TreeNode[] = [root];

    while (queue.length) {
        const { val, left, right } = queue.shift();

        if (val > target) {
            if (left) queue.push(left);
        } else if (val < target) {
            if (right) queue.push(right);
        } else {
            return true;
        }
    }

    return false;
}