package codility;

// LESSON 3 - Time Complexity
public class FrogJmp {

    public int solution(int X, int Y, int D) {
        // write your code in Java SE 8
        // X에서 Y이상으로 위치가 변경되길 원하고
        // 점프거리는 D이다

        int total = Y - X;
        // 나누어떨어지지 않으면 1을 더해서 Y보다 더 이동한다
        return total / D + (total % D == 0 ? 0 : 1);
    }

}
