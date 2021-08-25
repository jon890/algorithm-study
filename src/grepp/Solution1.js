function solution(infos, actions) {
  // 액션 타입 정의
  const ACTION_TYPE = {
    ADD: 'ADD',
    LOGIN: 'LOGIN',
    ORDER: 'ORDER',
  };

  // 유저정보를 맵으로 관리
  const userMap = new Map();
  let logginedUser = { ok: false, id: null, basket: [] };

  // 유저맵 초기화
  infos.forEach((info) => {
    const [id, pwd] = info.split(' ');
    userMap.set(id, pwd);
  });

  // 유저 로그인 상태를 맵으로 관리

  // 액션을 실행후 결과를 반환해서 새로운 배열을 만든다
  const result = actions.map((action) => {
    const [actionType, param1, param2] = action.split(' ');

    switch (actionType) {
      case ACTION_TYPE.LOGIN:
        if (logginedUser.ok) return false; // 이미 로그인되어있을때 처리
        logginedUser = handleLogin(param1, param2, userMap);
        return logginedUser.ok;
      case ACTION_TYPE.ADD:
        if (!logginedUser.ok) return false; // 로그인 되어있지 않다면 장바구니 추가 불가능
        handleAddBasket(logginedUser, param1);
        return true;
      case ACTION_TYPE.ORDER:
        if (!logginedUser.ok) return false; // 로그인 되어있지 않다면 주문 불가능
        if (!logginedUser.bakset.length) return false; // 장바구니가 비어있다면 주문 불가능
        handleOrder(logginedUser);
        return true;
    }
  });

  console.log(result);
  return result;
}

function handleLogin(id, pwd, userMap) {
  if (userMap.has(id)) {
    // 로그인 되지 않음
    // 비밀번호 확인
    const realPwd = userMap.get(id);
    if (realPwd === pwd) return { ok: true, id, bakset: [] };
    // 비밀번호 일치
    else return { ok: false, id: null, bakset: [] }; // 비밀번호 불일치
  }
  // 해당 유저가 없다
  return { ok: false, id: null, bakset: [] };
}

function handleAddBasket(user, foodId) {
  const { bakset } = user;
  bakset.push(foodId);
}

function handleOrder(user) {
  user.bakset = [];
}

solution(
  ['kim password', 'lee abc'],
  [
    'ADD 30',
    'LOGIN kim abc',
    'LOGIN lee password',
    'LOGIN kim password',
    'LOGIN kim password',
    'LOGIN lee abc',
    'ADD 30',
    'ORDER',
    'ORDER',
    'ADD 40',
    'ADD 50',
  ],
);

/**
 * 채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.24ms, 30MB)
테스트 2 〉	통과 (0.23ms, 30MB)
테스트 3 〉	통과 (0.21ms, 29.9MB)
테스트 4 〉	통과 (0.26ms, 30.1MB)
테스트 5 〉	통과 (0.34ms, 30.1MB)
테스트 6 〉	통과 (0.16ms, 30MB)
테스트 7 〉	통과 (0.26ms, 30.1MB)
테스트 8 〉	통과 (0.25ms, 30MB)
채점 결과
정확성: 100.0
효율성: 0.0
합계: 100.0 / 100.0
 */
