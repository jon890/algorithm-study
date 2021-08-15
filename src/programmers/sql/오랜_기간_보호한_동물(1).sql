-- 아직 입양을 못 간 동물 중, 가장 오래 보호소에 있던 동물 3마리의
-- 이름과 보호 시작일을 조회
-- 보호 시작일 순으로 정렬

SELECT *
FROM
(
    SELECT I.NAME, I.DATETIME
    FROM ANIMAL_INS I
    LEFT OUTER JOIN ANIMAL_OUTS O
    ON I.ANIMAL_ID = O.ANIMAL_ID
    WHERE O.SEX_UPON_OUTCOME IS NULL
    ORDER BY DATETIME
)
WHERE ROWNUM BETWEEN 1 AND 3

-- 출력 행 개수 제한 공부
FETCH FIRST 3 ROWS ONLY;