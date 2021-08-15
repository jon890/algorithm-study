-- 우유와 요거트를 동시에 구입한 장바구니
-- 장바구니 ID 출력
-- 장바구니 아이디순으로 정렬
SELECT CART_ID
FROM
(
    SELECT DISTINCT(CART_ID)
    FROM CART_PRODUCTS
    WHERE NAME = 'Milk'
)
INTERSECT
(
    SELECT DISTINCT(CART_ID)
    FROM CART_PRODUCTS
    WHERE NAME = 'Yogurt'
)
ORDER BY CART_ID

-- 여러개의 풀이가 있는듯
-- INNER JOIN
-- SELF JOIN
-- GROUP BY, HAVING COUNT