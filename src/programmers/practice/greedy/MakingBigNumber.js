function solution(number, k) {
    /**
     * k개의 숫자를 제거해 큰수 만들기
     */
    const numberArray = [];
    for (let i = 0; i < number.length; i++) {
        numberArray[i] = parseInt(number[i]);
    }
    // console.log(numberArray);

    numberArray.sort((a, b) => b - a);
    // console.log(numberArray);

    for (let i = 0; i < k; i++) {
        numberArray.pop();
    }

    console.log(numberArray);

    var answer = '';
    return answer;
}

// solution("1924", 2);
// solution("1231234", 3);
solution("4177252841", 4);