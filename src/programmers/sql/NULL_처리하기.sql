-- 종, 이름, 성별 및 중성화 여부를 아이디 순으로 조회
-- 프로그래밍을 모르는 사람은 NULL을 모름
-- 이름이 없는 동물의 이름은 No name으로 치환
SELECT ANIMAL_TYPE, NVL(NAME, 'No name') as NAME, SEX_UPON_INTAKE
FROM ANIMAL_INS
ORDER BY ANIMAL_ID

-- Oracle NVL, NVL2 공부