-- 보호소에서 중성화 수술을 거친 동물 정보
-- 보호소 들어올 당시 X => 보호소 나갈 당시 O
-- 생물 종, 이름을 조회
-- 아이디 순으로 정렬
SELECT I.ANIMAL_ID, I.ANIMAL_TYPE, I.NAME
FROM ANIMAL_INS I, ANIMAL_OUTS O
WHERE I.ANIMAL_ID = O.ANIMAL_ID AND
    NOT REGEXP_LIKE(I.SEX_UPON_INTAKE, 'Spayed|Neutered') AND
    REGEXP_LIKE(O.SEX_UPON_OUTCOME, 'Spayed|Neutered') 