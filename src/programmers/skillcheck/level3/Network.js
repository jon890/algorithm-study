function solution(n, computers) {
  /**
   * 네트워크의 개수를 찾아라
   * 연결 정보가 주어짐
   *
   * a => b 가 연결되어있으면 같은 네트워크
   */

  const networks = [];

  computers.forEach((connection) => {
    // 나 혹은 나와 연결된 친구가 포함된 네트워크가 있는가
    let network = networks.find((net) => {
      let connected = false;
      for (let i = 0; i < connection.length; i++) {
        if (connection[i] === 1 && net.has(i)) {
          connected = true;
          break;
        }
      }
      return connected;
    });

    // 없다면 새로운 네트워크를 만든다
    if (!network) {
      network = new Set();
      networks.push(network);
    }

    // 연결정보를 추가한다
    connection.forEach((c, index) => {
      if (c === 1 && !network.has(index)) {
        network.add(index);
      }
    });
  });

  console.log(networks);
  return networks.length;
}

solution(3, [
  [1, 1, 0],
  [1, 1, 1],
  [0, 1, 1],
]);
