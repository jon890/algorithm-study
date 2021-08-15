-- 몇시에 입양이 가장 활발하게 일어났는가?
-- 09:00 ~ 19:59 까지
-- 각 시간대별로 입양이 몇 건이나 발생했는가
SELECT HOUR, COUNT(HOUR)
FROM (
    SELECT TO_CHAR(DATETIME, 'HH24') AS HOUR
    FROM ANIMAL_OUTS
)
WHERE HOUR >= 09 AND HOUR <= 19
GROUP BY HOUR
ORDER BY HOUR

-- group by, having에 대해서 더 공부하기
-- extract (hour from cast(datetime as timestamp)) 도 가능하다!
-- hour는 MySQL 함수임!!
-- extract는 Oracle 함수임!!
SELECT HOUR(DATETIME) AS HOUR, COUNT(HOUR(DATETIME)) AS COUNT
FROM ANIMAL_OUTS
GROUP BY HOUR
HAVING HOUR BETWEEN 9 AND 19
ORDER BY HOUR