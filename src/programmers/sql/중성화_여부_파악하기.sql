-- 중성화 되었는지 확인
SELECT 
    ANIMAL_ID, 
    NAME, 
    CASE 
        WHEN LOWER(SEX_UPON_INTAKE) LIKE '%spayed%' THEN 'O'
        WHEN LOWER(SEX_UPON_INTAKE) LIKE '%neutered%' THEN 'O'
        ELSE 'X'
    END AS 중성화
FROM ANIMAL_INS
ORDER BY ANIMAL_ID

-- regexp like 공부하기
case when regexp_like(sex_upon_intake, 'Neutered|Spayed')