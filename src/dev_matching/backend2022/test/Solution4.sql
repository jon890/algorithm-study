-- 코드를 입력하세요
SELECT P.ID, P.NAME, A.TOTAL_DAYS AS '임대 가능일'
FROM (
         SELECT S.PLACE_ID, COUNT(S.SCHEDULED_AT) AS TOTAL_DAYS
         FROM SCHEDULES S
         GROUP BY S.PLACE_ID
     ) AS A,
     PLACES P
WHERE A.PLACE_ID = P.ID
ORDER BY PLACE_ID