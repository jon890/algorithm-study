SELECT NAME, COUNT
FROM
(
    SELECT NAME, COUNT(*) as COUNT
    FROM ANIMAL_INS
    WHERE NAME IS NOT NULL
    GROUP BY NAME
)
WHERE COUNT > 1
ORDER BY NAME

-- having 구문 공부해보기
-- group by, where의 순서 공부해보기