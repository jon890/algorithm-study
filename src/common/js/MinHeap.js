class MinHeap {
  heap = null;

  constructor() {
    this.heap = [null]; // 첫 번째 원소 사용 x
    // index 게산의 편의성을 위해서
  }

  getMin() {
    return this.heap[1] ? this.heap[1] : null;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  push(value) {
    this.heap.push(value);
    let curIdx = this.heap.length - 1;
    let parIdx = (curIdx / 2) >> 0; // why?

    // 최소힙이므로 부모노드가 제일 작아야 한다.
    // 즉 부모노드가 현재노드보다 큰 지 검사하며 반복
    while (curIdx > 1 && this.heap[parIdx] > this.heap[curIdx]) {
      this.swap(parIdx, curIdx);
      curIdx = parIdx;
      parIdx = (curIdx / 2) >> 0;
    }
  }

  pop() {
    const min = this.heap[1]; // 배열의 첫 원소를 비워두므로 root는 항상 heap[1]에 위치한다
    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();
    // 배열 마지막 원소를 root 위치에 먼저 배치하는 과정
    // if-else로 분기되는 이유는 추후 heap이 비었는지 아닌지 확인 하기 위해
    // size 체크 함수를 만들때 -1을 통해 0을 만들어주기 떄문이다

    let curIdx = 1;
    let leftIdx = curIdx * 2;
    let rightIdx = curIdx * 2 + 1;

    // 왼쪽 자식이 없으면 오른쪽 자식도 없다! 루트 반환
    if (!this.heap[leftIdx]) return min;
    if (!this.heap[rightIdx]) {
      if (this.heap[leftIdx] < this.heap[curIdx]) {
        this.swap(leftIdx, curIdx);
        // 오른쪽 자식이 없다면 왼쪽 자식 하나만 있는 것이다
      }
      return min;
    }

    // 위의 조건에 걸리지 않는 경우 왼쪽과 오른쪽 자식이 모두 있는 경우
    // 따라서 현재 노드가 왼쪽 또는 오른쪽 보다 큰 지 작은지를 검사하며 반복
    while (
      this.heap[leftIdx] < this.heap[curIdx] ||
      this.heap[rightIdx] < this.heap[curIdx]
    ) {
      // 왼쪽과 오른쪽 자식 중에 더 작은 값과 현재 노드를 교체한다
      const minIdx =
        this.heap[leftIdx] > this.heap[rightIdx] ? rightIdx : leftIdx;
      this.swap(minIdx, curIdx);
      curIdx = minIdx;
      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;
    }
    return min;
  }
}
