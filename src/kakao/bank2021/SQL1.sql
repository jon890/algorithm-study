SELECT
    판매년월,
    상품0001판매개수,
    상품0002판매개수,
    상품0003판매개수,
    상품0004판매개수,
    상품0005판매개수,
    상품0001판매개수 + 상품0002판매개수 + 상품0003판매개수 + 상품0004판매개수 + 상품0005판매개수 AS 전체판매개수
FROM (
    SELECT
        SALE_YM AS 판매년월,
        SUM(NVL((
            SELECT SALE_CNT
            FROM KKB_GOODS_S X
            WHERE X.GOODS_CD = '0001' AND
            X.GOODS_CD = A.GOODS_CD AND
            X.SALE_YM = A.SALE_YM
        ), 0)) AS 상품0001판매개수,
        SUM(NVL((
            SELECT SALE_CNT
            FROM KKB_GOODS_S X
            WHERE X.GOODS_CD = '0002' AND
            X.GOODS_CD = A.GOODS_CD AND
            X.SALE_YM = A.SALE_YM
        ), 0)) AS 상품0002판매개수,
        SUM(NVL((
            SELECT SALE_CNT
            FROM KKB_GOODS_S X
            WHERE X.GOODS_CD = '0003' AND
            X.GOODS_CD = A.GOODS_CD AND
            X.SALE_YM = A.SALE_YM
        ), 0)) AS 상품0003판매개수,
        SUM(NVL((
            SELECT SALE_CNT
            FROM KKB_GOODS_S X
            WHERE X.GOODS_CD = '0004' AND
            X.GOODS_CD = A.GOODS_CD AND
            X.SALE_YM = A.SALE_YM
        ), 0)) AS 상품0004판매개수,
        SUM(NVL((
            SELECT SALE_CNT
            FROM KKB_GOODS_S X
            WHERE X.GOODS_CD = '0005' AND
            X.GOODS_CD = A.GOODS_CD AND
            X.SALE_YM = A.SALE_YM
        ), 0)) AS 상품0005판매개수
    FROM KKB_GOODS_S A
    GROUP BY SALE_YM
)
ORDER BY 판매년월

-- 35 / 35