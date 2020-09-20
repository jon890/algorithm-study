function solution(bridge_length, weight, truck_weights) {
    
    // 트럭 여러 대가 다리를 정해진 순으로 건넌다
    // 모든 트럭이 다리를 건널때 최소로 걸리는 시간

    // 트럭은 1초에 1만큼 움직이고,
    // 다리 길이는 bridge_length
    // 다리는 무게 weight 까지 견딘다

    // 트럭이 다리에 완전히 오르지 않은경우, 이 트럭의 무게는 고려하지 않습니다.

    // 배열을 반대로 뒤집는다
    // Array.slice보다 Array.pop이 시간이 덜 걸리지 않을까..?
    truck_weights.reverse();

    const will_arrival_count = truck_weights.length; // 도착 해야 할 트럭 대수
    const arrival_truck = []; // 도착한 트럭
    let current_bridge_weight = 0; // 현재 다리의 무게
    let time = 0;

    // 모든 트럭이 도착할 때 까지 반복 한다
    while (will_arrival_count > arrival_truck) {

    }

    return time;
}