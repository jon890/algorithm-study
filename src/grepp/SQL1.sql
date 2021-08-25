-- 코드를 입력하세요
-- 업무 성과에 따라 분류
-- 4대 이상 => 최우수
-- 2대 or 3대 => 우수
-- 1대 => 일반 사원
-- 사원의 ID로 오름차순

SELECT EMPLOYEE_ID
    , CASE WHEN COUNT > '3' THEN '최우수 사원'
           WHEN COUNT = '3' THEN '우수 사원'
           WHEN COUNT = '2' THEN '우수 사원'
           WHEN COUNT = '1' THEN '일반 사원'
      END AS "분류 상태"
    , COUNT
FROM (
    SELECT EMPLOYEE_ID, COUNT(CAR_ID) AS COUNT
    FROM SELLINGS
    GROUP BY EMPLOYEE_ID
)
ORDER BY EMPLOYEE_ID