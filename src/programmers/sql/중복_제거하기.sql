-- 동물 보호소에 들어온 동물의 이름은 몇개인가
-- 이름이 NULL인 경우는 집계하지 않고 중복되는 이름은 하나로 친다
SELECT COUNT(*) AS COUNT
FROM
(
    SELECT DISTINCT(NAME)
    FROM ANIMAL_INS
    WHERE NAME IS NOT NULL
)

-- 업그레이드 아래와 같이 쓸 수 있음
SELECT COUNT(DISTINCT NAME) AS COUNT
