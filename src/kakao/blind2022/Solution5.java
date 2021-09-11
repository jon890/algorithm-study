package kakao.blind2022;

import java.util.*;

public class Solution5 {

    public int solution(int[] info, int[][] edges) {
        Map<Integer, Node> nodeMap = new HashMap<>();
        for (int i = 0; i < info.length; i++) {
            Node node = new Node(i, null, null, Type.ofValue(info[i]));
            nodeMap.put(i, node);
        }

        for (int[] edge : edges) {
            int start = edge[0];
            int end = edge[1];

            Node node = nodeMap.get(start);
            Node childNode = nodeMap.get(end);

            if (node.leftChild == null) {
                node.leftChild = childNode;
            } else if (node.rightChild == null) {
                node.rightChild = childNode;
            }
            childNode.parent = node;
        }

        int position = 0;
        int sheep = 0;
        int wolf = 0;

        // 루트 노드에서 모든 노드를 방문하며
        // 지나는 길에 몇마리의 양, 늑대가 있는지 체크
        // 0번째는 인덱스, 1번째는 양, 2번째에는 늑대의 수를 카운팅하기
        List<int[]> result = new ArrayList<>();
        dfs(position, nodeMap, new int[3], result);

        for (int[] arr : result) {
            System.out.println(Arrays.toString(arr));
        }
        return sheep;
    }

    private void dfs(int position, Map<Integer, Node> nodeMap, int[] calculate, List<int[]> result) {
        Node node = nodeMap.get(position);
        Node leftChild = node.leftChild;
        Node rightChild = node.rightChild;

        int[] newCalc = new int[3];
        System.arraycopy(calculate, 0, newCalc, 0, newCalc.length);
        if (node.type == Type.SHEEP) {
            newCalc[1]++;
        } else if (node.type == Type.WOLF) {
            newCalc[2]++;
        }
        newCalc[0] = node.index;
        result.add(newCalc);

        if (leftChild != null) {
            dfs(leftChild.index, nodeMap, newCalc, result);
        }

        if (rightChild != null) {
            dfs(rightChild.index, nodeMap, newCalc, result);
        }
    }

    class Node {
        int index;
        Node parent;
        Node leftChild;
        Node rightChild;
        Type type;

        public Node(int index, Node leftChild, Node rightChild, Type type) {
            this.index = index;
            this.leftChild = leftChild;
            this.rightChild = rightChild;
            this.type = type;
        }

        @Override
        public String toString() {
            return "Node{" + "index=" + index + ", leftChild=" + leftChild + ", rightChild=" + rightChild + ", type="
                    + type + '}';
        }
    }

    enum Type {
        SHEEP(0), WOLF(1);

        private final int value;

        Type(int value) {
            this.value = value;
        }

        static Type ofValue(int value) {
            for (Type t : Type.values()) {
                if (t.value == value)
                    return t;
            }
            return null;
        }
    }

    public static void main(String[] args) {
        Solution5 obj = new Solution5();
        obj.solution(new int[] { 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1 }, new int[][] { { 0, 1 }, { 1, 2 }, { 1, 4 },
                { 0, 8 }, { 8, 7 }, { 9, 10 }, { 9, 11 }, { 4, 3 }, { 6, 5 }, { 4, 6 }, { 8, 9 } });
    }
}